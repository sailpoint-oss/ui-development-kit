/**
 * Transform deployment logic
 */
import { firstValueFrom } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ColabPost, DiscourseService } from '../services/discourse.service';
import { ElectronApiFactoryService } from '../../services/electron-api-factory.service';
import { SailPointSDKService } from '../../sailpoint-sdk.service';
import { DeploymentSuccessDialogComponent, DeploymentSuccessData } from '../components/deployment-success-dialog/deployment-success-dialog.component';
import { DeploymentErrorDialogComponent, DeploymentErrorData } from '../components/deployment-error-dialog/deployment-error-dialog.component';
import { extractGitHubRepoUrl } from './deployment-utils';

export interface TransformDeploymentDependencies {
  dialog: MatDialog;
  snackBar: MatSnackBar;
  discourseService: DiscourseService;
  apiFactory: ElectronApiFactoryService;
  sdkService: SailPointSDKService;
}

export async function deployTransform(
  post: ColabPost,
  deps: TransformDeploymentDependencies,
  rawContent?: string
): Promise<void> {
  try {
    let topicRawContent = rawContent;

    if (!topicRawContent) {
      console.log(`Fetching raw content for Transform: ${post.title} (ID: ${post.id})`);
      topicRawContent = await firstValueFrom(deps.discourseService.getTopicRaw(post.id));
    }

    if (!topicRawContent) {
      throw new Error('Failed to fetch topic content from Discourse');
    }

    const githubRepoUrl = extractGitHubRepoUrl(topicRawContent);
    if (!githubRepoUrl) {
      throw new Error('Could not find GitHub repository link in topic content. Please ensure the topic contains a "Repository Link" field.');
    }

    console.log(`GitHub repository URL extracted: ${githubRepoUrl}`);

    showMessage(deps.snackBar, `Fetching transform files from GitHub...`, 'info');

    // List all JSON files in the repository
    const filesResult = await deps.apiFactory.getApi().listGitHubJsonFiles(githubRepoUrl);

    if (!filesResult.success || !filesResult.files || filesResult.files.length === 0) {
      throw new Error(filesResult.error || 'No JSON transform files found in repository');
    }

    console.log(`Found ${filesResult.files.length} JSON file(s) in repository`);

    // Get existing transforms to check for duplicates
    showMessage(deps.snackBar, `Checking for existing transforms...`, 'info');
    const existingTransformsResponse = await deps.sdkService.listTransformsV1();
    const existingTransformNames = new Set(
      existingTransformsResponse.data.map((tf: any) => tf.name as string)
    );

    const createdTransforms: Array<{ name: string; id: string }> = [];
    const errors: string[] = [];
    const skipped: string[] = [];

    // Process each JSON file
    for (const file of filesResult.files) {
      try {
        if (!file.download_url) {
          console.warn(`Skipping ${file.name}: no download URL available`);
          continue;
        }

        showMessage(deps.snackBar, `Processing transform: ${file.name}...`, 'info');
        console.log(`Fetching content for ${file.name}`);

        // Get the file content
        const contentResult = await deps.apiFactory.getApi().getGitHubFileContent(
          file.download_url,
          file.name
        );

        if (!contentResult.success || !contentResult.content) {
          console.error(`Failed to fetch ${file.name}: ${contentResult.error}`);
          errors.push(`${file.name}: ${contentResult.error || 'Failed to fetch content'}`);
          continue;
        }

        // Parse the JSON content
        let transformData;
        try {
          transformData = JSON.parse(contentResult.content);
        } catch (parseError) {
          console.error(`Failed to parse ${file.name}:`, parseError);
          errors.push(`${file.name}: Invalid JSON format`);
          continue;
        }

        // Check if transform with this name already exists
        const transformName = (transformData.name || file.name) as string;
        if (existingTransformNames.has(transformName)) {
          console.log(`Transform "${transformName}" already exists, skipping`);
          skipped.push(transformName);
          continue;
        }

        // Create the transform using the SDK
        console.log(`Creating transform from ${file.name}`);
        const response = await deps.sdkService.createTransformV1({
          transform: transformData
        });

        // Check if the response indicates an error (status >= 400)
        if (response.status >= 400) {
          throw new Error(response.statusText || 'Transform creation failed');
        }

        if (response.data) {
          const name = response.data.name || file.name;
          const id = response.data.id || 'unknown';
          console.log(`Successfully created transform: ${name} (ID: ${id})`);
          createdTransforms.push({ name, id });
        }
      } catch (fileError: any) {
        console.error(`Error processing ${file.name}:`, fileError);
        
        // Extract error message from Axios error structure or response
        let errorMsg = 'Unknown error';
        
        // Check if it's an error from the SDK response status check
        if (fileError.message && !fileError.response) {
          errorMsg = fileError.message;
        }
        // Check if it's an Axios error with response data
        else if (fileError.response?.data) {
          const responseData = fileError.response.data;
          
          // Check for ISC API error format
          if (responseData.messages && Array.isArray(responseData.messages) && responseData.messages.length > 0) {
            errorMsg = responseData.messages.map((m: any) => (m.text || m.message) as string).join(', ');
          } else if (responseData.message) {
            errorMsg = responseData.message;
          } else if (responseData.error) {
            errorMsg = responseData.error;
          }
        } else if (fileError.message) {
          errorMsg = fileError.message;
        }
        
        // Check if it's a duplicate name error
        if (errorMsg.toLowerCase().includes('name') && errorMsg.toLowerCase().includes('unique')) {
          errors.push(`${file.name}: A transform with this name already exists. Please delete the existing transform first.`);
        } else {
          errors.push(`${file.name}: ${errorMsg}`);
        }
      }
    }

    // Show results
    if (createdTransforms.length > 0) {
      const transformDetails = createdTransforms.map(tf => `${tf.name} (${tf.id})`).join(', ');
      
      // Show success dialog
      deps.dialog.open(DeploymentSuccessDialogComponent, {
        width: '700px',
        data: {
          connectorName: `${createdTransforms.length} Transform${createdTransforms.length > 1 ? 's' : ''}`,
          connectorId: transformDetails,
          version: undefined,
          deploymentType: 'transform'
        } as DeploymentSuccessData
      });

      let message = `Successfully deployed ${createdTransforms.length} transform${createdTransforms.length > 1 ? 's' : ''} from "${post.title}"`;
      if (skipped.length > 0) {
        message += `. Skipped ${skipped.length} existing transform${skipped.length > 1 ? 's' : ''}: ${skipped.join(', ')}`;
      }
      showMessage(deps.snackBar, message, 'success');
    }

    if (skipped.length > 0 && createdTransforms.length === 0) {
      // Show dialog for skipped transforms
      deps.dialog.open(DeploymentErrorDialogComponent, {
        width: '600px',
        data: {
          title: 'Transforms Already Exist',
          message: 'All transforms from this repository already exist in your environment.',
          details: `The following transform${skipped.length > 1 ? 's' : ''} already exist${skipped.length === 1 ? 's' : ''}:\n\n${skipped.join('\n')}\n\nPlease delete the existing transform${skipped.length > 1 ? 's' : ''} first if you want to redeploy.`
        } as DeploymentErrorData
      });
    }

    if (errors.length > 0) {
      const errorMessage = `Some transforms failed to deploy:\n${errors.join('\n')}`;
      console.error(errorMessage);
      
      // Show error dialog
      deps.dialog.open(DeploymentErrorDialogComponent, {
        width: '600px',
        data: {
          title: 'Transform Deployment Failed',
          message: createdTransforms.length === 0 && skipped.length === 0
            ? 'Failed to deploy transforms. See details below.'
            : `Deployed ${createdTransforms.length} transform(s) successfully, but ${errors.length} failed.`,
          details: errors.join('\n\n')
        } as DeploymentErrorData
      });
      
      if (createdTransforms.length === 0 && skipped.length === 0) {
        throw new Error(errorMessage);
      }
    }

    if (createdTransforms.length === 0 && errors.length === 0 && skipped.length === 0) {
      throw new Error('No transforms were deployed');
    }

  } catch (error: any) {
    console.error('Error deploying Transform:', error);
    showMessage(deps.snackBar, `Failed to deploy Transform: ${error.message || error}`, 'error');
    throw error;
  }
}

function showMessage(snackBar: MatSnackBar, message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info'): void {
  const panelClass = {
    success: 'snackbar-success',
    error: 'snackbar-error',
    warning: 'snackbar-warning',
    info: 'snackbar-info'
  };

  snackBar.open(message, 'Dismiss', {
    duration: 5000,
    horizontalPosition: 'end',
    verticalPosition: 'top',
    panelClass: [panelClass[type]]
  });
}

