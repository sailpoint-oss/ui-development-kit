#!/usr/bin/env node

/**
 * Cleanup script: empties the S3 bucket associated with a given CloudFormation stack.
 *
 * Usage:
 *   node scripts/cleanup-stack.js <stack-name>
 *
 * Prerequisites:
 *   - AWS credentials active (e.g. `aws sso login --profile <profile>`)
 *   - npm install @aws-sdk/client-cloudformation @aws-sdk/client-s3
 *
 * Example:
 *   node scripts/cleanup-stack.js ui-dev-kit-pr-42
 */

const { CloudFormationClient, DescribeStacksCommand } = require('@aws-sdk/client-cloudformation');
const {
  S3Client,
  ListObjectVersionsCommand,
  DeleteObjectsCommand,
  ListObjectsV2Command,
} = require('@aws-sdk/client-s3');

const REGION = 'us-east-1';
const BATCH_SIZE = 1000; // S3 DeleteObjects limit

async function getBucketForStack(stackName) {
  const cf = new CloudFormationClient({ region: REGION });
  const res = await cf.send(new DescribeStacksCommand({ StackName: stackName }));
  const stack = res.Stacks?.[0];
  if (!stack) throw new Error(`Stack "${stackName}" not found`);

  const output = stack.Outputs?.find((o) => o.OutputKey === 'S3BucketName');
  if (!output?.OutputValue) {
    throw new Error(`Stack "${stackName}" has no S3BucketName output`);
  }
  return output.OutputValue;
}

async function deleteAllObjects(bucketName) {
  const s3 = new S3Client({ region: REGION });
  let totalDeleted = 0;

  // Delete all object versions and delete markers (handles versioned buckets)
  let keyMarker;
  let versionIdMarker;

  do {
    const res = await s3.send(
      new ListObjectVersionsCommand({
        Bucket: bucketName,
        KeyMarker: keyMarker,
        VersionIdMarker: versionIdMarker,
        MaxKeys: BATCH_SIZE,
      })
    );

    const toDelete = [
      ...(res.Versions ?? []).map((v) => ({ Key: v.Key, VersionId: v.VersionId })),
      ...(res.DeleteMarkers ?? []).map((d) => ({ Key: d.Key, VersionId: d.VersionId })),
    ];

    if (toDelete.length > 0) {
      await s3.send(
        new DeleteObjectsCommand({
          Bucket: bucketName,
          Delete: { Objects: toDelete, Quiet: true },
        })
      );
      totalDeleted += toDelete.length;
      process.stdout.write(`\r  Deleted ${totalDeleted} object(s)...`);
    }

    keyMarker = res.NextKeyMarker;
    versionIdMarker = res.NextVersionIdMarker;
  } while (keyMarker || versionIdMarker);

  // Also sweep non-versioned objects in case versioning was never enabled
  let continuationToken;
  do {
    const res = await s3.send(
      new ListObjectsV2Command({
        Bucket: bucketName,
        ContinuationToken: continuationToken,
        MaxKeys: BATCH_SIZE,
      })
    );

    const toDelete = (res.Contents ?? []).map((obj) => ({ Key: obj.Key }));

    if (toDelete.length > 0) {
      await s3.send(
        new DeleteObjectsCommand({
          Bucket: bucketName,
          Delete: { Objects: toDelete, Quiet: true },
        })
      );
      totalDeleted += toDelete.length;
      process.stdout.write(`\r  Deleted ${totalDeleted} object(s)...`);
    }

    continuationToken = res.NextContinuationToken;
  } while (continuationToken);

  if (totalDeleted > 0) process.stdout.write('\n');
  return totalDeleted;
}

async function main() {
  const stackName = process.argv[2];
  if (!stackName) {
    console.error('Usage: node scripts/cleanup-stack.js <stack-name>');
    process.exit(1);
  }

  console.log(`Stack: ${stackName}`);

  console.log('Looking up S3 bucket from CloudFormation outputs...');
  const bucket = await getBucketForStack(stackName);
  console.log(`Bucket: ${bucket}`);

  console.log('Deleting all objects...');
  const count = await deleteAllObjects(bucket);

  if (count === 0) {
    console.log('Bucket was already empty.');
  } else {
    console.log(`Done. Deleted ${count} object(s) from s3://${bucket}`);
  }
  console.log('\nThe bucket is now empty. You can delete the stack with:');
  console.log(`  sam delete --stack-name ${stackName} --no-prompts`);
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
