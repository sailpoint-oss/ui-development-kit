/**
 * Workflow deployment logic
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

export interface WorkflowDeploymentDependencies {
  dialog: MatDialog;
  snackBar: MatSnackBar;
  discourseService: DiscourseService;
  apiFactory: ElectronApiFactoryService;
  sdkService: SailPointSDKService;
}

export async function deployWorkflow(
  post: ColabPost,
  deps: WorkflowDeploymentDependencies,
  rawContent?: string
): Promise<void> {
  try {
    let topicRawContent = rawContent;

    if (!topicRawContent) {
      console.log(`Fetching raw content for Workflow: ${post.title} (ID: ${post.id})`);
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

    showMessage(deps.snackBar, `Fetching workflow files from GitHub...`, 'info');

    // List all JSON files in the repository
    const filesResult = await deps.apiFactory.getApi().listGitHubJsonFiles(githubRepoUrl);

    if (!filesResult.success || !filesResult.files || filesResult.files.length === 0) {
      throw new Error(filesResult.error || 'No JSON workflow files found in repository');
    }

    console.log(`Found ${filesResult.files.length} JSON file(s) in repository`);

    // Get existing workflows to check for duplicates
    showMessage(deps.snackBar, `Checking for existing workflows...`, 'info');
    const existingWorkflowsResponse = await deps.sdkService.listWorkflowsV1();
    const existingWorkflowNames = new Set(
      existingWorkflowsResponse.data.map((wf: any) => wf.name as string)
    );

    const createdWorkflows: Array<{ name: string; id: string }> = [];
    const errors: string[] = [];
    const skipped: string[] = [];

    // Process each JSON file
    for (const file of filesResult.files) {
      try {
        if (!file.download_url) {
          console.warn(`Skipping ${file.name}: no download URL available`);
          continue;
        }

        showMessage(deps.snackBar, `Processing workflow: ${file.name}...`, 'info');
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
        let workflowData;
        try {
          workflowData = JSON.parse(contentResult.content);
        } catch (parseError) {
          console.error(`Failed to parse ${file.name}:`, parseError);
          errors.push(`${file.name}: Invalid JSON format`);
          continue;
        }

        // Check if workflow with this name already exists
        const workflowName = (workflowData.name || file.name) as string;
        if (existingWorkflowNames.has(workflowName)) {
          console.log(`Workflow "${workflowName}" already exists, skipping`);
          skipped.push(workflowName);
          continue;
        }

        // Create the workflow using the SDK
        console.log(`Creating workflow from ${file.name}`);
        const response = await deps.sdkService.createWorkflowV1({
          createWorkflowV1Request: workflowData
        });

        // Check if the response indicates an error (status >= 400)
        if (response.status >= 400) {
          throw new Error(response.statusText || 'Workflow creation failed');
        }

        if (response.data) {
          const name = response.data.name || file.name;
          const id = response.data.id || 'unknown';
          console.log(`Successfully created workflow: ${name} (ID: ${id})`);
          createdWorkflows.push({ name, id });
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
          errors.push(`${file.name}: A workflow with this name already exists. Please delete the existing workflow first.`);
        } else {
          errors.push(`${file.name}: ${errorMsg}`);
        }
      }
    }

    // Show results
    if (createdWorkflows.length > 0) {
      const workflowDetails = createdWorkflows.map(wf => `${wf.name} (${wf.id})`).join(', ');
      
      // Show success dialog
      deps.dialog.open(DeploymentSuccessDialogComponent, {
        width: '700px',
        data: {
          connectorName: `${createdWorkflows.length} Workflow${createdWorkflows.length > 1 ? 's' : ''}`,
          connectorId: workflowDetails,
          version: undefined,
          deploymentType: 'workflow'
        } as DeploymentSuccessData
      });

      let message = `Successfully deployed ${createdWorkflows.length} workflow${createdWorkflows.length > 1 ? 's' : ''} from "${post.title}"`;
      if (skipped.length > 0) {
        message += `. Skipped ${skipped.length} existing workflow${skipped.length > 1 ? 's' : ''}: ${skipped.join(', ')}`;
      }
      showMessage(deps.snackBar, message, 'success');
    }

    if (skipped.length > 0 && createdWorkflows.length === 0) {
      // Show dialog for skipped workflows
      deps.dialog.open(DeploymentErrorDialogComponent, {
        width: '600px',
        data: {
          title: 'Workflows Already Exist',
          message: 'All workflows from this repository already exist in your environment.',
          details: `The following workflow${skipped.length > 1 ? 's' : ''} already exist${skipped.length === 1 ? 's' : ''}:\n\n${skipped.join('\n')}\n\nPlease delete the existing workflow${skipped.length > 1 ? 's' : ''} first if you want to redeploy.`
        } as DeploymentErrorData
      });
    }

    if (errors.length > 0) {
      const errorMessage = `Some workflows failed to deploy:\n${errors.join('\n')}`;
      console.error(errorMessage);
      
      // Show error dialog
      deps.dialog.open(DeploymentErrorDialogComponent, {
        width: '600px',
        data: {
          title: 'Workflow Deployment Failed',
          message: createdWorkflows.length === 0 && skipped.length === 0
            ? 'Failed to deploy workflows. See details below.'
            : `Deployed ${createdWorkflows.length} workflow(s) successfully, but ${errors.length} failed.`,
          details: errors.join('\n\n')
        } as DeploymentErrorData
      });
      
      if (createdWorkflows.length === 0 && skipped.length === 0) {
        throw new Error(errorMessage);
      }
    }

    if (createdWorkflows.length === 0 && errors.length === 0 && skipped.length === 0) {
      throw new Error('No workflows were deployed');
    }

  } catch (error: any) {
    console.error('Error deploying Workflow:', error);
    showMessage(deps.snackBar, `Failed to deploy Workflow: ${error.message || error}`, 'error');
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

