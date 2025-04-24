import { ipcMain } from 'electron';
import * as sdkWrapper from './sailpoint-sdk';
import * as sdk from 'sailpoint-api-client';
import { apiConfig } from '../api';

export function setupSailPointSDKHandlers() {


ipcMain.handle('get-access-model-metadata-attribute', async (event, request: sdk.AccessModelMetadataV2025ApiGetAccessModelMetadataAttributeRequest) => {
    return await sdkWrapper.getAccessModelMetadataAttribute(request, apiConfig);
});
ipcMain.handle('get-access-model-metadata-attribute-value', async (event, request: sdk.AccessModelMetadataV2025ApiGetAccessModelMetadataAttributeValueRequest) => {
    return await sdkWrapper.getAccessModelMetadataAttributeValue(request, apiConfig);
});
ipcMain.handle('list-access-model-metadata-attribute', async (event, request: sdk.AccessModelMetadataV2025ApiListAccessModelMetadataAttributeRequest = {}) => {
    return await sdkWrapper.listAccessModelMetadataAttribute(request, apiConfig);
});
ipcMain.handle('list-access-model-metadata-attribute-value', async (event, request: sdk.AccessModelMetadataV2025ApiListAccessModelMetadataAttributeValueRequest) => {
    return await sdkWrapper.listAccessModelMetadataAttributeValue(request, apiConfig);
});

ipcMain.handle('create-access-profile', async (event, request: sdk.AccessProfilesV2025ApiCreateAccessProfileRequest) => {
    return await sdkWrapper.createAccessProfile(request, apiConfig);
});
ipcMain.handle('delete-access-profile', async (event, request: sdk.AccessProfilesV2025ApiDeleteAccessProfileRequest) => {
    return await sdkWrapper.deleteAccessProfile(request, apiConfig);
});
ipcMain.handle('delete-access-profiles-in-bulk', async (event, request: sdk.AccessProfilesV2025ApiDeleteAccessProfilesInBulkRequest) => {
    return await sdkWrapper.deleteAccessProfilesInBulk(request, apiConfig);
});
ipcMain.handle('get-access-profile', async (event, request: sdk.AccessProfilesV2025ApiGetAccessProfileRequest) => {
    return await sdkWrapper.getAccessProfile(request, apiConfig);
});
ipcMain.handle('get-access-profile-entitlements', async (event, request: sdk.AccessProfilesV2025ApiGetAccessProfileEntitlementsRequest) => {
    return await sdkWrapper.getAccessProfileEntitlements(request, apiConfig);
});
ipcMain.handle('list-access-profiles', async (event, request: sdk.AccessProfilesV2025ApiListAccessProfilesRequest = {}) => {
    return await sdkWrapper.listAccessProfiles(request, apiConfig);
});
ipcMain.handle('patch-access-profile', async (event, request: sdk.AccessProfilesV2025ApiPatchAccessProfileRequest) => {
    return await sdkWrapper.patchAccessProfile(request, apiConfig);
});
ipcMain.handle('update-access-profiles-in-bulk', async (event, request: sdk.AccessProfilesV2025ApiUpdateAccessProfilesInBulkRequest) => {
    return await sdkWrapper.updateAccessProfilesInBulk(request, apiConfig);
});

ipcMain.handle('approve-access-request', async (event, request: sdk.AccessRequestApprovalsV2025ApiApproveAccessRequestRequest) => {
    return await sdkWrapper.approveAccessRequest(request, apiConfig);
});
ipcMain.handle('forward-access-request', async (event, request: sdk.AccessRequestApprovalsV2025ApiForwardAccessRequestRequest) => {
    return await sdkWrapper.forwardAccessRequest(request, apiConfig);
});
ipcMain.handle('get-access-request-approval-summary', async (event, request: sdk.AccessRequestApprovalsV2025ApiGetAccessRequestApprovalSummaryRequest = {}) => {
    return await sdkWrapper.getAccessRequestApprovalSummary(request, apiConfig);
});
ipcMain.handle('list-access-request-approvers', async (event, request: sdk.AccessRequestApprovalsV2025ApiListAccessRequestApproversRequest) => {
    return await sdkWrapper.listAccessRequestApprovers(request, apiConfig);
});
ipcMain.handle('list-completed-approvals', async (event, request: sdk.AccessRequestApprovalsV2025ApiListCompletedApprovalsRequest = {}) => {
    return await sdkWrapper.listCompletedApprovals(request, apiConfig);
});
ipcMain.handle('list-pending-approvals', async (event, request: sdk.AccessRequestApprovalsV2025ApiListPendingApprovalsRequest = {}) => {
    return await sdkWrapper.listPendingApprovals(request, apiConfig);
});
ipcMain.handle('reject-access-request', async (event, request: sdk.AccessRequestApprovalsV2025ApiRejectAccessRequestRequest) => {
    return await sdkWrapper.rejectAccessRequest(request, apiConfig);
});

ipcMain.handle('get-access-request-identity-metrics', async (event, request: sdk.AccessRequestIdentityMetricsV2025ApiGetAccessRequestIdentityMetricsRequest) => {
    return await sdkWrapper.getAccessRequestIdentityMetrics(request, apiConfig);
});

ipcMain.handle('approve-bulk-access-request', async (event, request: sdk.AccessRequestsV2025ApiApproveBulkAccessRequestRequest) => {
    return await sdkWrapper.approveBulkAccessRequest(request, apiConfig);
});
ipcMain.handle('cancel-access-request', async (event, request: sdk.AccessRequestsV2025ApiCancelAccessRequestRequest) => {
    return await sdkWrapper.cancelAccessRequest(request, apiConfig);
});
ipcMain.handle('cancel-access-request-in-bulk', async (event, request: sdk.AccessRequestsV2025ApiCancelAccessRequestInBulkRequest) => {
    return await sdkWrapper.cancelAccessRequestInBulk(request, apiConfig);
});
ipcMain.handle('close-access-request', async (event, request: sdk.AccessRequestsV2025ApiCloseAccessRequestRequest) => {
    return await sdkWrapper.closeAccessRequest(request, apiConfig);
});
ipcMain.handle('create-access-request', async (event, request: sdk.AccessRequestsV2025ApiCreateAccessRequestRequest) => {
    return await sdkWrapper.createAccessRequest(request, apiConfig);
});
ipcMain.handle('get-access-request-config', async (event, ) => {
    return await sdkWrapper.getAccessRequestConfig(apiConfig);
});
ipcMain.handle('get-entitlement-details-for-identity', async (event, request: sdk.AccessRequestsV2025ApiGetEntitlementDetailsForIdentityRequest) => {
    return await sdkWrapper.getEntitlementDetailsForIdentity(request, apiConfig);
});
ipcMain.handle('list-access-request-status', async (event, request: sdk.AccessRequestsV2025ApiListAccessRequestStatusRequest = {}) => {
    return await sdkWrapper.listAccessRequestStatus(request, apiConfig);
});
ipcMain.handle('list-administrators-access-request-status', async (event, request: sdk.AccessRequestsV2025ApiListAdministratorsAccessRequestStatusRequest = {}) => {
    return await sdkWrapper.listAdministratorsAccessRequestStatus(request, apiConfig);
});
ipcMain.handle('load-account-selections', async (event, request: sdk.AccessRequestsV2025ApiLoadAccountSelectionsRequest) => {
    return await sdkWrapper.loadAccountSelections(request, apiConfig);
});
ipcMain.handle('set-access-request-config', async (event, request: sdk.AccessRequestsV2025ApiSetAccessRequestConfigRequest) => {
    return await sdkWrapper.setAccessRequestConfig(request, apiConfig);
});

ipcMain.handle('get-account-activity', async (event, request: sdk.AccountActivitiesV2025ApiGetAccountActivityRequest) => {
    return await sdkWrapper.getAccountActivity(request, apiConfig);
});
ipcMain.handle('list-account-activities', async (event, request: sdk.AccountActivitiesV2025ApiListAccountActivitiesRequest = {}) => {
    return await sdkWrapper.listAccountActivities(request, apiConfig);
});

ipcMain.handle('get-account-aggregation-status', async (event, request: sdk.AccountAggregationsV2025ApiGetAccountAggregationStatusRequest) => {
    return await sdkWrapper.getAccountAggregationStatus(request, apiConfig);
});

ipcMain.handle('get-usages-by-account-id', async (event, request: sdk.AccountUsagesV2025ApiGetUsagesByAccountIdRequest) => {
    return await sdkWrapper.getUsagesByAccountId(request, apiConfig);
});

ipcMain.handle('create-account', async (event, request: sdk.AccountsV2025ApiCreateAccountRequest) => {
    return await sdkWrapper.createAccount(request, apiConfig);
});
ipcMain.handle('delete-account', async (event, request: sdk.AccountsV2025ApiDeleteAccountRequest) => {
    return await sdkWrapper.deleteAccount(request, apiConfig);
});
ipcMain.handle('delete-account-async', async (event, request: sdk.AccountsV2025ApiDeleteAccountAsyncRequest) => {
    return await sdkWrapper.deleteAccountAsync(request, apiConfig);
});
ipcMain.handle('disable-account', async (event, request: sdk.AccountsV2025ApiDisableAccountRequest) => {
    return await sdkWrapper.disableAccount(request, apiConfig);
});
ipcMain.handle('disable-account-for-identity', async (event, request: sdk.AccountsV2025ApiDisableAccountForIdentityRequest) => {
    return await sdkWrapper.disableAccountForIdentity(request, apiConfig);
});
ipcMain.handle('disable-accounts-for-identities', async (event, request: sdk.AccountsV2025ApiDisableAccountsForIdentitiesRequest) => {
    return await sdkWrapper.disableAccountsForIdentities(request, apiConfig);
});
ipcMain.handle('enable-account', async (event, request: sdk.AccountsV2025ApiEnableAccountRequest) => {
    return await sdkWrapper.enableAccount(request, apiConfig);
});
ipcMain.handle('enable-account-for-identity', async (event, request: sdk.AccountsV2025ApiEnableAccountForIdentityRequest) => {
    return await sdkWrapper.enableAccountForIdentity(request, apiConfig);
});
ipcMain.handle('enable-accounts-for-identities', async (event, request: sdk.AccountsV2025ApiEnableAccountsForIdentitiesRequest) => {
    return await sdkWrapper.enableAccountsForIdentities(request, apiConfig);
});
ipcMain.handle('get-account', async (event, request: sdk.AccountsV2025ApiGetAccountRequest) => {
    return await sdkWrapper.getAccount(request, apiConfig);
});
ipcMain.handle('get-account-entitlements', async (event, request: sdk.AccountsV2025ApiGetAccountEntitlementsRequest) => {
    return await sdkWrapper.getAccountEntitlements(request, apiConfig);
});
ipcMain.handle('list-accounts', async (event, request: sdk.AccountsV2025ApiListAccountsRequest = {}) => {
    return await sdkWrapper.listAccounts(request, apiConfig);
});
ipcMain.handle('put-account', async (event, request: sdk.AccountsV2025ApiPutAccountRequest) => {
    return await sdkWrapper.putAccount(request, apiConfig);
});
ipcMain.handle('submit-reload-account', async (event, request: sdk.AccountsV2025ApiSubmitReloadAccountRequest) => {
    return await sdkWrapper.submitReloadAccount(request, apiConfig);
});
ipcMain.handle('unlock-account', async (event, request: sdk.AccountsV2025ApiUnlockAccountRequest) => {
    return await sdkWrapper.unlockAccount(request, apiConfig);
});
ipcMain.handle('update-account', async (event, request: sdk.AccountsV2025ApiUpdateAccountRequest) => {
    return await sdkWrapper.updateAccount(request, apiConfig);
});

ipcMain.handle('get-discovered-applications', async (event, request: sdk.ApplicationDiscoveryV2025ApiGetDiscoveredApplicationsRequest = {}) => {
    return await sdkWrapper.getDiscoveredApplications(request, apiConfig);
});
ipcMain.handle('get-manual-discover-applications-csv-template', async (event, ) => {
    return await sdkWrapper.getManualDiscoverApplicationsCsvTemplate(apiConfig);
});
ipcMain.handle('send-manual-discover-applications-csv-template', async (event, request: sdk.ApplicationDiscoveryV2025ApiSendManualDiscoverApplicationsCsvTemplateRequest) => {
    return await sdkWrapper.sendManualDiscoverApplicationsCsvTemplate(request, apiConfig);
});

ipcMain.handle('get-approval', async (event, request: sdk.ApprovalsV2025ApiGetApprovalRequest) => {
    return await sdkWrapper.getApproval(request, apiConfig);
});
ipcMain.handle('get-approvals', async (event, request: sdk.ApprovalsV2025ApiGetApprovalsRequest = {}) => {
    return await sdkWrapper.getApprovals(request, apiConfig);
});

ipcMain.handle('create-source-app', async (event, request: sdk.AppsV2025ApiCreateSourceAppRequest) => {
    return await sdkWrapper.createSourceApp(request, apiConfig);
});
ipcMain.handle('delete-access-profiles-from-source-app-by-bulk', async (event, request: sdk.AppsV2025ApiDeleteAccessProfilesFromSourceAppByBulkRequest) => {
    return await sdkWrapper.deleteAccessProfilesFromSourceAppByBulk(request, apiConfig);
});
ipcMain.handle('delete-source-app', async (event, request: sdk.AppsV2025ApiDeleteSourceAppRequest) => {
    return await sdkWrapper.deleteSourceApp(request, apiConfig);
});
ipcMain.handle('get-source-app', async (event, request: sdk.AppsV2025ApiGetSourceAppRequest) => {
    return await sdkWrapper.getSourceApp(request, apiConfig);
});
ipcMain.handle('list-access-profiles-for-source-app', async (event, request: sdk.AppsV2025ApiListAccessProfilesForSourceAppRequest) => {
    return await sdkWrapper.listAccessProfilesForSourceApp(request, apiConfig);
});
ipcMain.handle('list-all-source-app', async (event, request: sdk.AppsV2025ApiListAllSourceAppRequest = {}) => {
    return await sdkWrapper.listAllSourceApp(request, apiConfig);
});
ipcMain.handle('list-all-user-apps', async (event, request: sdk.AppsV2025ApiListAllUserAppsRequest) => {
    return await sdkWrapper.listAllUserApps(request, apiConfig);
});
ipcMain.handle('list-assigned-source-app', async (event, request: sdk.AppsV2025ApiListAssignedSourceAppRequest = {}) => {
    return await sdkWrapper.listAssignedSourceApp(request, apiConfig);
});
ipcMain.handle('list-available-accounts-for-user-app', async (event, request: sdk.AppsV2025ApiListAvailableAccountsForUserAppRequest) => {
    return await sdkWrapper.listAvailableAccountsForUserApp(request, apiConfig);
});
ipcMain.handle('list-available-source-apps', async (event, request: sdk.AppsV2025ApiListAvailableSourceAppsRequest = {}) => {
    return await sdkWrapper.listAvailableSourceApps(request, apiConfig);
});
ipcMain.handle('list-owned-user-apps', async (event, request: sdk.AppsV2025ApiListOwnedUserAppsRequest = {}) => {
    return await sdkWrapper.listOwnedUserApps(request, apiConfig);
});
ipcMain.handle('patch-source-app', async (event, request: sdk.AppsV2025ApiPatchSourceAppRequest) => {
    return await sdkWrapper.patchSourceApp(request, apiConfig);
});
ipcMain.handle('patch-user-app', async (event, request: sdk.AppsV2025ApiPatchUserAppRequest) => {
    return await sdkWrapper.patchUserApp(request, apiConfig);
});
ipcMain.handle('update-source-apps-in-bulk', async (event, request: sdk.AppsV2025ApiUpdateSourceAppsInBulkRequest = {}) => {
    return await sdkWrapper.updateSourceAppsInBulk(request, apiConfig);
});

ipcMain.handle('get-profile-config', async (event, request: sdk.AuthProfileV2025ApiGetProfileConfigRequest) => {
    return await sdkWrapper.getProfileConfig(request, apiConfig);
});
ipcMain.handle('get-profile-config-list', async (event, request: sdk.AuthProfileV2025ApiGetProfileConfigListRequest = {}) => {
    return await sdkWrapper.getProfileConfigList(request, apiConfig);
});
ipcMain.handle('patch-profile-config', async (event, request: sdk.AuthProfileV2025ApiPatchProfileConfigRequest) => {
    return await sdkWrapper.patchProfileConfig(request, apiConfig);
});

ipcMain.handle('get-auth-user', async (event, request: sdk.AuthUsersV2025ApiGetAuthUserRequest) => {
    return await sdkWrapper.getAuthUser(request, apiConfig);
});
ipcMain.handle('patch-auth-user', async (event, request: sdk.AuthUsersV2025ApiPatchAuthUserRequest) => {
    return await sdkWrapper.patchAuthUser(request, apiConfig);
});

ipcMain.handle('create-branding-item', async (event, request: sdk.BrandingV2025ApiCreateBrandingItemRequest) => {
    return await sdkWrapper.createBrandingItem(request, apiConfig);
});
ipcMain.handle('delete-branding', async (event, request: sdk.BrandingV2025ApiDeleteBrandingRequest) => {
    return await sdkWrapper.deleteBranding(request, apiConfig);
});
ipcMain.handle('get-branding', async (event, request: sdk.BrandingV2025ApiGetBrandingRequest) => {
    return await sdkWrapper.getBranding(request, apiConfig);
});
ipcMain.handle('get-branding-list', async (event, ) => {
    return await sdkWrapper.getBrandingList(apiConfig);
});
ipcMain.handle('set-branding-item', async (event, request: sdk.BrandingV2025ApiSetBrandingItemRequest) => {
    return await sdkWrapper.setBrandingItem(request, apiConfig);
});

ipcMain.handle('create-campaign-filter', async (event, request: sdk.CertificationCampaignFiltersV2025ApiCreateCampaignFilterRequest) => {
    return await sdkWrapper.createCampaignFilter(request, apiConfig);
});
ipcMain.handle('delete-campaign-filters', async (event, request: sdk.CertificationCampaignFiltersV2025ApiDeleteCampaignFiltersRequest) => {
    return await sdkWrapper.deleteCampaignFilters(request, apiConfig);
});
ipcMain.handle('get-campaign-filter-by-id', async (event, request: sdk.CertificationCampaignFiltersV2025ApiGetCampaignFilterByIdRequest) => {
    return await sdkWrapper.getCampaignFilterById(request, apiConfig);
});
ipcMain.handle('list-campaign-filters', async (event, request: sdk.CertificationCampaignFiltersV2025ApiListCampaignFiltersRequest = {}) => {
    return await sdkWrapper.listCampaignFilters(request, apiConfig);
});
ipcMain.handle('update-campaign-filter', async (event, request: sdk.CertificationCampaignFiltersV2025ApiUpdateCampaignFilterRequest) => {
    return await sdkWrapper.updateCampaignFilter(request, apiConfig);
});

ipcMain.handle('complete-campaign', async (event, request: sdk.CertificationCampaignsV2025ApiCompleteCampaignRequest) => {
    return await sdkWrapper.completeCampaign(request, apiConfig);
});
ipcMain.handle('create-campaign', async (event, request: sdk.CertificationCampaignsV2025ApiCreateCampaignRequest) => {
    return await sdkWrapper.createCampaign(request, apiConfig);
});
ipcMain.handle('create-campaign-template', async (event, request: sdk.CertificationCampaignsV2025ApiCreateCampaignTemplateRequest) => {
    return await sdkWrapper.createCampaignTemplate(request, apiConfig);
});
ipcMain.handle('delete-campaign-template', async (event, request: sdk.CertificationCampaignsV2025ApiDeleteCampaignTemplateRequest) => {
    return await sdkWrapper.deleteCampaignTemplate(request, apiConfig);
});
ipcMain.handle('delete-campaign-template-schedule', async (event, request: sdk.CertificationCampaignsV2025ApiDeleteCampaignTemplateScheduleRequest) => {
    return await sdkWrapper.deleteCampaignTemplateSchedule(request, apiConfig);
});
ipcMain.handle('delete-campaigns', async (event, request: sdk.CertificationCampaignsV2025ApiDeleteCampaignsRequest) => {
    return await sdkWrapper.deleteCampaigns(request, apiConfig);
});
ipcMain.handle('get-active-campaigns', async (event, request: sdk.CertificationCampaignsV2025ApiGetActiveCampaignsRequest = {}) => {
    return await sdkWrapper.getActiveCampaigns(request, apiConfig);
});
ipcMain.handle('get-campaign', async (event, request: sdk.CertificationCampaignsV2025ApiGetCampaignRequest) => {
    return await sdkWrapper.getCampaign(request, apiConfig);
});
ipcMain.handle('get-campaign-reports', async (event, request: sdk.CertificationCampaignsV2025ApiGetCampaignReportsRequest) => {
    return await sdkWrapper.getCampaignReports(request, apiConfig);
});
ipcMain.handle('get-campaign-reports-config', async (event, ) => {
    return await sdkWrapper.getCampaignReportsConfig(apiConfig);
});
ipcMain.handle('get-campaign-template', async (event, request: sdk.CertificationCampaignsV2025ApiGetCampaignTemplateRequest) => {
    return await sdkWrapper.getCampaignTemplate(request, apiConfig);
});
ipcMain.handle('get-campaign-template-schedule', async (event, request: sdk.CertificationCampaignsV2025ApiGetCampaignTemplateScheduleRequest) => {
    return await sdkWrapper.getCampaignTemplateSchedule(request, apiConfig);
});
ipcMain.handle('get-campaign-templates', async (event, request: sdk.CertificationCampaignsV2025ApiGetCampaignTemplatesRequest = {}) => {
    return await sdkWrapper.getCampaignTemplates(request, apiConfig);
});
ipcMain.handle('move', async (event, request: sdk.CertificationCampaignsV2025ApiMoveRequest) => {
    return await sdkWrapper.move(request, apiConfig);
});
ipcMain.handle('patch-campaign-template', async (event, request: sdk.CertificationCampaignsV2025ApiPatchCampaignTemplateRequest) => {
    return await sdkWrapper.patchCampaignTemplate(request, apiConfig);
});
ipcMain.handle('set-campaign-reports-config', async (event, request: sdk.CertificationCampaignsV2025ApiSetCampaignReportsConfigRequest) => {
    return await sdkWrapper.setCampaignReportsConfig(request, apiConfig);
});
ipcMain.handle('set-campaign-template-schedule', async (event, request: sdk.CertificationCampaignsV2025ApiSetCampaignTemplateScheduleRequest) => {
    return await sdkWrapper.setCampaignTemplateSchedule(request, apiConfig);
});
ipcMain.handle('start-campaign', async (event, request: sdk.CertificationCampaignsV2025ApiStartCampaignRequest) => {
    return await sdkWrapper.startCampaign(request, apiConfig);
});
ipcMain.handle('start-campaign-remediation-scan', async (event, request: sdk.CertificationCampaignsV2025ApiStartCampaignRemediationScanRequest) => {
    return await sdkWrapper.startCampaignRemediationScan(request, apiConfig);
});
ipcMain.handle('start-campaign-report', async (event, request: sdk.CertificationCampaignsV2025ApiStartCampaignReportRequest) => {
    return await sdkWrapper.startCampaignReport(request, apiConfig);
});
ipcMain.handle('start-generate-campaign-template', async (event, request: sdk.CertificationCampaignsV2025ApiStartGenerateCampaignTemplateRequest) => {
    return await sdkWrapper.startGenerateCampaignTemplate(request, apiConfig);
});
ipcMain.handle('update-campaign', async (event, request: sdk.CertificationCampaignsV2025ApiUpdateCampaignRequest) => {
    return await sdkWrapper.updateCampaign(request, apiConfig);
});

ipcMain.handle('get-identity-access-summaries', async (event, request: sdk.CertificationSummariesV2025ApiGetIdentityAccessSummariesRequest) => {
    return await sdkWrapper.getIdentityAccessSummaries(request, apiConfig);
});
ipcMain.handle('get-identity-decision-summary', async (event, request: sdk.CertificationSummariesV2025ApiGetIdentityDecisionSummaryRequest) => {
    return await sdkWrapper.getIdentityDecisionSummary(request, apiConfig);
});
ipcMain.handle('get-identity-summaries', async (event, request: sdk.CertificationSummariesV2025ApiGetIdentitySummariesRequest) => {
    return await sdkWrapper.getIdentitySummaries(request, apiConfig);
});
ipcMain.handle('get-identity-summary', async (event, request: sdk.CertificationSummariesV2025ApiGetIdentitySummaryRequest) => {
    return await sdkWrapper.getIdentitySummary(request, apiConfig);
});

ipcMain.handle('get-certification-task', async (event, request: sdk.CertificationsV2025ApiGetCertificationTaskRequest) => {
    return await sdkWrapper.getCertificationTask(request, apiConfig);
});
ipcMain.handle('get-identity-certification', async (event, request: sdk.CertificationsV2025ApiGetIdentityCertificationRequest) => {
    return await sdkWrapper.getIdentityCertification(request, apiConfig);
});
ipcMain.handle('get-identity-certification-item-permissions', async (event, request: sdk.CertificationsV2025ApiGetIdentityCertificationItemPermissionsRequest) => {
    return await sdkWrapper.getIdentityCertificationItemPermissions(request, apiConfig);
});
ipcMain.handle('get-pending-certification-tasks', async (event, request: sdk.CertificationsV2025ApiGetPendingCertificationTasksRequest = {}) => {
    return await sdkWrapper.getPendingCertificationTasks(request, apiConfig);
});
ipcMain.handle('list-certification-reviewers', async (event, request: sdk.CertificationsV2025ApiListCertificationReviewersRequest) => {
    return await sdkWrapper.listCertificationReviewers(request, apiConfig);
});
ipcMain.handle('list-identity-access-review-items', async (event, request: sdk.CertificationsV2025ApiListIdentityAccessReviewItemsRequest) => {
    return await sdkWrapper.listIdentityAccessReviewItems(request, apiConfig);
});
ipcMain.handle('list-identity-certifications', async (event, request: sdk.CertificationsV2025ApiListIdentityCertificationsRequest = {}) => {
    return await sdkWrapper.listIdentityCertifications(request, apiConfig);
});
ipcMain.handle('make-identity-decision', async (event, request: sdk.CertificationsV2025ApiMakeIdentityDecisionRequest) => {
    return await sdkWrapper.makeIdentityDecision(request, apiConfig);
});
ipcMain.handle('reassign-identity-certifications', async (event, request: sdk.CertificationsV2025ApiReassignIdentityCertificationsRequest) => {
    return await sdkWrapper.reassignIdentityCertifications(request, apiConfig);
});
ipcMain.handle('sign-off-identity-certification', async (event, request: sdk.CertificationsV2025ApiSignOffIdentityCertificationRequest) => {
    return await sdkWrapper.signOffIdentityCertification(request, apiConfig);
});
ipcMain.handle('submit-reassign-certs-async', async (event, request: sdk.CertificationsV2025ApiSubmitReassignCertsAsyncRequest) => {
    return await sdkWrapper.submitReassignCertsAsync(request, apiConfig);
});

ipcMain.handle('create-deploy', async (event, request: sdk.ConfigurationHubV2025ApiCreateDeployRequest) => {
    return await sdkWrapper.createDeploy(request, apiConfig);
});
ipcMain.handle('create-object-mapping', async (event, request: sdk.ConfigurationHubV2025ApiCreateObjectMappingRequest) => {
    return await sdkWrapper.createObjectMapping(request, apiConfig);
});
ipcMain.handle('create-object-mappings', async (event, request: sdk.ConfigurationHubV2025ApiCreateObjectMappingsRequest) => {
    return await sdkWrapper.createObjectMappings(request, apiConfig);
});
ipcMain.handle('create-scheduled-action', async (event, request: sdk.ConfigurationHubV2025ApiCreateScheduledActionRequest) => {
    return await sdkWrapper.createScheduledAction(request, apiConfig);
});
ipcMain.handle('create-uploaded-configuration', async (event, request: sdk.ConfigurationHubV2025ApiCreateUploadedConfigurationRequest) => {
    return await sdkWrapper.createUploadedConfiguration(request, apiConfig);
});
ipcMain.handle('delete-backup', async (event, request: sdk.ConfigurationHubV2025ApiDeleteBackupRequest) => {
    return await sdkWrapper.deleteBackup(request, apiConfig);
});
ipcMain.handle('delete-draft', async (event, request: sdk.ConfigurationHubV2025ApiDeleteDraftRequest) => {
    return await sdkWrapper.deleteDraft(request, apiConfig);
});
ipcMain.handle('delete-object-mapping', async (event, request: sdk.ConfigurationHubV2025ApiDeleteObjectMappingRequest) => {
    return await sdkWrapper.deleteObjectMapping(request, apiConfig);
});
ipcMain.handle('delete-scheduled-action', async (event, request: sdk.ConfigurationHubV2025ApiDeleteScheduledActionRequest) => {
    return await sdkWrapper.deleteScheduledAction(request, apiConfig);
});
ipcMain.handle('delete-uploaded-configuration', async (event, request: sdk.ConfigurationHubV2025ApiDeleteUploadedConfigurationRequest) => {
    return await sdkWrapper.deleteUploadedConfiguration(request, apiConfig);
});
ipcMain.handle('get-deploy', async (event, request: sdk.ConfigurationHubV2025ApiGetDeployRequest) => {
    return await sdkWrapper.getDeploy(request, apiConfig);
});
ipcMain.handle('get-object-mappings', async (event, request: sdk.ConfigurationHubV2025ApiGetObjectMappingsRequest) => {
    return await sdkWrapper.getObjectMappings(request, apiConfig);
});
ipcMain.handle('get-uploaded-configuration', async (event, request: sdk.ConfigurationHubV2025ApiGetUploadedConfigurationRequest) => {
    return await sdkWrapper.getUploadedConfiguration(request, apiConfig);
});
ipcMain.handle('list-backups', async (event, request: sdk.ConfigurationHubV2025ApiListBackupsRequest = {}) => {
    return await sdkWrapper.listBackups(request, apiConfig);
});
ipcMain.handle('list-deploys', async (event, ) => {
    return await sdkWrapper.listDeploys(apiConfig);
});
ipcMain.handle('list-drafts', async (event, request: sdk.ConfigurationHubV2025ApiListDraftsRequest = {}) => {
    return await sdkWrapper.listDrafts(request, apiConfig);
});
ipcMain.handle('list-scheduled-actions', async (event, ) => {
    return await sdkWrapper.listScheduledActions(apiConfig);
});
ipcMain.handle('list-uploaded-configurations', async (event, request: sdk.ConfigurationHubV2025ApiListUploadedConfigurationsRequest = {}) => {
    return await sdkWrapper.listUploadedConfigurations(request, apiConfig);
});
ipcMain.handle('update-object-mappings', async (event, request: sdk.ConfigurationHubV2025ApiUpdateObjectMappingsRequest) => {
    return await sdkWrapper.updateObjectMappings(request, apiConfig);
});
ipcMain.handle('update-scheduled-action', async (event, request: sdk.ConfigurationHubV2025ApiUpdateScheduledActionRequest) => {
    return await sdkWrapper.updateScheduledAction(request, apiConfig);
});

ipcMain.handle('create-connector-customizer', async (event, request: sdk.ConnectorCustomizersV2025ApiCreateConnectorCustomizerRequest) => {
    return await sdkWrapper.createConnectorCustomizer(request, apiConfig);
});
ipcMain.handle('create-connector-customizer-version', async (event, request: sdk.ConnectorCustomizersV2025ApiCreateConnectorCustomizerVersionRequest) => {
    return await sdkWrapper.createConnectorCustomizerVersion(request, apiConfig);
});
ipcMain.handle('delete-connector-customizer', async (event, request: sdk.ConnectorCustomizersV2025ApiDeleteConnectorCustomizerRequest) => {
    return await sdkWrapper.deleteConnectorCustomizer(request, apiConfig);
});
ipcMain.handle('get-connector-customizer', async (event, request: sdk.ConnectorCustomizersV2025ApiGetConnectorCustomizerRequest) => {
    return await sdkWrapper.getConnectorCustomizer(request, apiConfig);
});
ipcMain.handle('list-connector-customizers', async (event, request: sdk.ConnectorCustomizersV2025ApiListConnectorCustomizersRequest = {}) => {
    return await sdkWrapper.listConnectorCustomizers(request, apiConfig);
});
ipcMain.handle('put-connector-customizer', async (event, request: sdk.ConnectorCustomizersV2025ApiPutConnectorCustomizerRequest) => {
    return await sdkWrapper.putConnectorCustomizer(request, apiConfig);
});

ipcMain.handle('create-connector-rule', async (event, request: sdk.ConnectorRuleManagementV2025ApiCreateConnectorRuleRequest) => {
    return await sdkWrapper.createConnectorRule(request, apiConfig);
});
ipcMain.handle('delete-connector-rule', async (event, request: sdk.ConnectorRuleManagementV2025ApiDeleteConnectorRuleRequest) => {
    return await sdkWrapper.deleteConnectorRule(request, apiConfig);
});
ipcMain.handle('get-connector-rule', async (event, request: sdk.ConnectorRuleManagementV2025ApiGetConnectorRuleRequest) => {
    return await sdkWrapper.getConnectorRule(request, apiConfig);
});
ipcMain.handle('get-connector-rule-list', async (event, request: sdk.ConnectorRuleManagementV2025ApiGetConnectorRuleListRequest = {}) => {
    return await sdkWrapper.getConnectorRuleList(request, apiConfig);
});
ipcMain.handle('put-connector-rule', async (event, request: sdk.ConnectorRuleManagementV2025ApiPutConnectorRuleRequest) => {
    return await sdkWrapper.putConnectorRule(request, apiConfig);
});
ipcMain.handle('test-connector-rule', async (event, request: sdk.ConnectorRuleManagementV2025ApiTestConnectorRuleRequest) => {
    return await sdkWrapper.testConnectorRule(request, apiConfig);
});

ipcMain.handle('create-custom-connector', async (event, request: sdk.ConnectorsV2025ApiCreateCustomConnectorRequest) => {
    return await sdkWrapper.createCustomConnector(request, apiConfig);
});
ipcMain.handle('delete-custom-connector', async (event, request: sdk.ConnectorsV2025ApiDeleteCustomConnectorRequest) => {
    return await sdkWrapper.deleteCustomConnector(request, apiConfig);
});
ipcMain.handle('get-connector', async (event, request: sdk.ConnectorsV2025ApiGetConnectorRequest) => {
    return await sdkWrapper.getConnector(request, apiConfig);
});
ipcMain.handle('get-connector-correlation-config', async (event, request: sdk.ConnectorsV2025ApiGetConnectorCorrelationConfigRequest) => {
    return await sdkWrapper.getConnectorCorrelationConfig(request, apiConfig);
});
ipcMain.handle('get-connector-list', async (event, request: sdk.ConnectorsV2025ApiGetConnectorListRequest = {}) => {
    return await sdkWrapper.getConnectorList(request, apiConfig);
});
ipcMain.handle('get-connector-source-config', async (event, request: sdk.ConnectorsV2025ApiGetConnectorSourceConfigRequest) => {
    return await sdkWrapper.getConnectorSourceConfig(request, apiConfig);
});
ipcMain.handle('get-connector-source-template', async (event, request: sdk.ConnectorsV2025ApiGetConnectorSourceTemplateRequest) => {
    return await sdkWrapper.getConnectorSourceTemplate(request, apiConfig);
});
ipcMain.handle('get-connector-translations', async (event, request: sdk.ConnectorsV2025ApiGetConnectorTranslationsRequest) => {
    return await sdkWrapper.getConnectorTranslations(request, apiConfig);
});
ipcMain.handle('put-connector-correlation-config', async (event, request: sdk.ConnectorsV2025ApiPutConnectorCorrelationConfigRequest) => {
    return await sdkWrapper.putConnectorCorrelationConfig(request, apiConfig);
});
ipcMain.handle('put-connector-source-config', async (event, request: sdk.ConnectorsV2025ApiPutConnectorSourceConfigRequest) => {
    return await sdkWrapper.putConnectorSourceConfig(request, apiConfig);
});
ipcMain.handle('put-connector-source-template', async (event, request: sdk.ConnectorsV2025ApiPutConnectorSourceTemplateRequest) => {
    return await sdkWrapper.putConnectorSourceTemplate(request, apiConfig);
});
ipcMain.handle('put-connector-translations', async (event, request: sdk.ConnectorsV2025ApiPutConnectorTranslationsRequest) => {
    return await sdkWrapper.putConnectorTranslations(request, apiConfig);
});
ipcMain.handle('update-connector', async (event, request: sdk.ConnectorsV2025ApiUpdateConnectorRequest) => {
    return await sdkWrapper.updateConnector(request, apiConfig);
});

ipcMain.handle('create-form-definition', async (event, request: sdk.CustomFormsV2025ApiCreateFormDefinitionRequest = {}) => {
    return await sdkWrapper.createFormDefinition(request, apiConfig);
});
ipcMain.handle('create-form-definition-dynamic-schema', async (event, request: sdk.CustomFormsV2025ApiCreateFormDefinitionDynamicSchemaRequest = {}) => {
    return await sdkWrapper.createFormDefinitionDynamicSchema(request, apiConfig);
});
ipcMain.handle('create-form-definition-file-request', async (event, request: sdk.CustomFormsV2025ApiCreateFormDefinitionFileRequestRequest) => {
    return await sdkWrapper.createFormDefinitionFileRequest(request, apiConfig);
});
ipcMain.handle('create-form-instance', async (event, request: sdk.CustomFormsV2025ApiCreateFormInstanceRequest = {}) => {
    return await sdkWrapper.createFormInstance(request, apiConfig);
});
ipcMain.handle('delete-form-definition', async (event, request: sdk.CustomFormsV2025ApiDeleteFormDefinitionRequest) => {
    return await sdkWrapper.deleteFormDefinition(request, apiConfig);
});
ipcMain.handle('export-form-definitions-by-tenant', async (event, request: sdk.CustomFormsV2025ApiExportFormDefinitionsByTenantRequest = {}) => {
    return await sdkWrapper.exportFormDefinitionsByTenant(request, apiConfig);
});
ipcMain.handle('get-file-from-s3', async (event, request: sdk.CustomFormsV2025ApiGetFileFromS3Request) => {
    return await sdkWrapper.getFileFromS3(request, apiConfig);
});
ipcMain.handle('get-form-definition-by-key', async (event, request: sdk.CustomFormsV2025ApiGetFormDefinitionByKeyRequest) => {
    return await sdkWrapper.getFormDefinitionByKey(request, apiConfig);
});
ipcMain.handle('get-form-instance-by-key', async (event, request: sdk.CustomFormsV2025ApiGetFormInstanceByKeyRequest) => {
    return await sdkWrapper.getFormInstanceByKey(request, apiConfig);
});
ipcMain.handle('get-form-instance-file', async (event, request: sdk.CustomFormsV2025ApiGetFormInstanceFileRequest) => {
    return await sdkWrapper.getFormInstanceFile(request, apiConfig);
});
ipcMain.handle('import-form-definitions', async (event, request: sdk.CustomFormsV2025ApiImportFormDefinitionsRequest = {}) => {
    return await sdkWrapper.importFormDefinitions(request, apiConfig);
});
ipcMain.handle('patch-form-definition', async (event, request: sdk.CustomFormsV2025ApiPatchFormDefinitionRequest) => {
    return await sdkWrapper.patchFormDefinition(request, apiConfig);
});
ipcMain.handle('patch-form-instance', async (event, request: sdk.CustomFormsV2025ApiPatchFormInstanceRequest) => {
    return await sdkWrapper.patchFormInstance(request, apiConfig);
});
ipcMain.handle('search-form-definitions-by-tenant', async (event, request: sdk.CustomFormsV2025ApiSearchFormDefinitionsByTenantRequest = {}) => {
    return await sdkWrapper.searchFormDefinitionsByTenant(request, apiConfig);
});
ipcMain.handle('search-form-element-data-by-element-id', async (event, request: sdk.CustomFormsV2025ApiSearchFormElementDataByElementIDRequest) => {
    return await sdkWrapper.searchFormElementDataByElementID(request, apiConfig);
});
ipcMain.handle('search-form-instances-by-tenant', async (event, ) => {
    return await sdkWrapper.searchFormInstancesByTenant(apiConfig);
});
ipcMain.handle('search-pre-defined-select-options', async (event, ) => {
    return await sdkWrapper.searchPreDefinedSelectOptions(apiConfig);
});
ipcMain.handle('show-preview-data-source', async (event, request: sdk.CustomFormsV2025ApiShowPreviewDataSourceRequest) => {
    return await sdkWrapper.showPreviewDataSource(request, apiConfig);
});

ipcMain.handle('create-custom-password-instructions', async (event, request: sdk.CustomPasswordInstructionsV2025ApiCreateCustomPasswordInstructionsRequest) => {
    return await sdkWrapper.createCustomPasswordInstructions(request, apiConfig);
});
ipcMain.handle('delete-custom-password-instructions', async (event, request: sdk.CustomPasswordInstructionsV2025ApiDeleteCustomPasswordInstructionsRequest) => {
    return await sdkWrapper.deleteCustomPasswordInstructions(request, apiConfig);
});
ipcMain.handle('get-custom-password-instructions', async (event, request: sdk.CustomPasswordInstructionsV2025ApiGetCustomPasswordInstructionsRequest) => {
    return await sdkWrapper.getCustomPasswordInstructions(request, apiConfig);
});

ipcMain.handle('create-data-segment', async (event, request: sdk.DataSegmentationV2025ApiCreateDataSegmentRequest) => {
    return await sdkWrapper.createDataSegment(request, apiConfig);
});
ipcMain.handle('delete-data-segment', async (event, request: sdk.DataSegmentationV2025ApiDeleteDataSegmentRequest) => {
    return await sdkWrapper.deleteDataSegment(request, apiConfig);
});
ipcMain.handle('get-data-segment', async (event, request: sdk.DataSegmentationV2025ApiGetDataSegmentRequest) => {
    return await sdkWrapper.getDataSegment(request, apiConfig);
});
ipcMain.handle('get-data-segment-identity-membership', async (event, request: sdk.DataSegmentationV2025ApiGetDataSegmentIdentityMembershipRequest) => {
    return await sdkWrapper.getDataSegmentIdentityMembership(request, apiConfig);
});
ipcMain.handle('get-data-segmentation-enabled-for-user', async (event, request: sdk.DataSegmentationV2025ApiGetDataSegmentationEnabledForUserRequest) => {
    return await sdkWrapper.getDataSegmentationEnabledForUser(request, apiConfig);
});
ipcMain.handle('list-data-segments', async (event, request: sdk.DataSegmentationV2025ApiListDataSegmentsRequest = {}) => {
    return await sdkWrapper.listDataSegments(request, apiConfig);
});
ipcMain.handle('patch-data-segment', async (event, request: sdk.DataSegmentationV2025ApiPatchDataSegmentRequest) => {
    return await sdkWrapper.patchDataSegment(request, apiConfig);
});
ipcMain.handle('publish-data-segment', async (event, request: sdk.DataSegmentationV2025ApiPublishDataSegmentRequest) => {
    return await sdkWrapper.publishDataSegment(request, apiConfig);
});

ipcMain.handle('create-dimension', async (event, request: sdk.DimensionsV2025ApiCreateDimensionRequest) => {
    return await sdkWrapper.createDimension(request, apiConfig);
});
ipcMain.handle('delete-bulk-dimensions', async (event, request: sdk.DimensionsV2025ApiDeleteBulkDimensionsRequest) => {
    return await sdkWrapper.deleteBulkDimensions(request, apiConfig);
});
ipcMain.handle('delete-dimension', async (event, request: sdk.DimensionsV2025ApiDeleteDimensionRequest) => {
    return await sdkWrapper.deleteDimension(request, apiConfig);
});
ipcMain.handle('get-dimension', async (event, request: sdk.DimensionsV2025ApiGetDimensionRequest) => {
    return await sdkWrapper.getDimension(request, apiConfig);
});
ipcMain.handle('get-dimension-entitlements', async (event, request: sdk.DimensionsV2025ApiGetDimensionEntitlementsRequest) => {
    return await sdkWrapper.getDimensionEntitlements(request, apiConfig);
});
ipcMain.handle('list-dimension-access-profiles', async (event, request: sdk.DimensionsV2025ApiListDimensionAccessProfilesRequest) => {
    return await sdkWrapper.listDimensionAccessProfiles(request, apiConfig);
});
ipcMain.handle('list-dimensions', async (event, request: sdk.DimensionsV2025ApiListDimensionsRequest) => {
    return await sdkWrapper.listDimensions(request, apiConfig);
});
ipcMain.handle('patch-dimension', async (event, request: sdk.DimensionsV2025ApiPatchDimensionRequest) => {
    return await sdkWrapper.patchDimension(request, apiConfig);
});

ipcMain.handle('create-access-model-metadata-for-entitlement', async (event, request: sdk.EntitlementsV2025ApiCreateAccessModelMetadataForEntitlementRequest) => {
    return await sdkWrapper.createAccessModelMetadataForEntitlement(request, apiConfig);
});
ipcMain.handle('delete-access-model-metadata-from-entitlement', async (event, request: sdk.EntitlementsV2025ApiDeleteAccessModelMetadataFromEntitlementRequest) => {
    return await sdkWrapper.deleteAccessModelMetadataFromEntitlement(request, apiConfig);
});
ipcMain.handle('get-entitlement', async (event, request: sdk.EntitlementsV2025ApiGetEntitlementRequest) => {
    return await sdkWrapper.getEntitlement(request, apiConfig);
});
ipcMain.handle('get-entitlement-request-config', async (event, request: sdk.EntitlementsV2025ApiGetEntitlementRequestConfigRequest) => {
    return await sdkWrapper.getEntitlementRequestConfig(request, apiConfig);
});
ipcMain.handle('import-entitlements-by-source', async (event, request: sdk.EntitlementsV2025ApiImportEntitlementsBySourceRequest) => {
    return await sdkWrapper.importEntitlementsBySource(request, apiConfig);
});
ipcMain.handle('list-entitlement-children', async (event, request: sdk.EntitlementsV2025ApiListEntitlementChildrenRequest) => {
    return await sdkWrapper.listEntitlementChildren(request, apiConfig);
});
ipcMain.handle('list-entitlement-parents', async (event, request: sdk.EntitlementsV2025ApiListEntitlementParentsRequest) => {
    return await sdkWrapper.listEntitlementParents(request, apiConfig);
});
ipcMain.handle('list-entitlements', async (event, request: sdk.EntitlementsV2025ApiListEntitlementsRequest = {}) => {
    return await sdkWrapper.listEntitlements(request, apiConfig);
});
ipcMain.handle('patch-entitlement', async (event, request: sdk.EntitlementsV2025ApiPatchEntitlementRequest) => {
    return await sdkWrapper.patchEntitlement(request, apiConfig);
});
ipcMain.handle('put-entitlement-request-config', async (event, request: sdk.EntitlementsV2025ApiPutEntitlementRequestConfigRequest) => {
    return await sdkWrapper.putEntitlementRequestConfig(request, apiConfig);
});
ipcMain.handle('reset-source-entitlements', async (event, request: sdk.EntitlementsV2025ApiResetSourceEntitlementsRequest) => {
    return await sdkWrapper.resetSourceEntitlements(request, apiConfig);
});
ipcMain.handle('update-entitlements-in-bulk', async (event, request: sdk.EntitlementsV2025ApiUpdateEntitlementsInBulkRequest) => {
    return await sdkWrapper.updateEntitlementsInBulk(request, apiConfig);
});

ipcMain.handle('create-auth-org-network-config', async (event, request: sdk.GlobalTenantSecuritySettingsV2025ApiCreateAuthOrgNetworkConfigRequest) => {
    return await sdkWrapper.createAuthOrgNetworkConfig(request, apiConfig);
});
ipcMain.handle('get-auth-org-lockout-config', async (event, ) => {
    return await sdkWrapper.getAuthOrgLockoutConfig(apiConfig);
});
ipcMain.handle('get-auth-org-network-config', async (event, ) => {
    return await sdkWrapper.getAuthOrgNetworkConfig(apiConfig);
});
ipcMain.handle('get-auth-org-service-provider-config', async (event, ) => {
    return await sdkWrapper.getAuthOrgServiceProviderConfig(apiConfig);
});
ipcMain.handle('get-auth-org-session-config', async (event, ) => {
    return await sdkWrapper.getAuthOrgSessionConfig(apiConfig);
});
ipcMain.handle('patch-auth-org-lockout-config', async (event, request: sdk.GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgLockoutConfigRequest) => {
    return await sdkWrapper.patchAuthOrgLockoutConfig(request, apiConfig);
});
ipcMain.handle('patch-auth-org-network-config', async (event, request: sdk.GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgNetworkConfigRequest) => {
    return await sdkWrapper.patchAuthOrgNetworkConfig(request, apiConfig);
});
ipcMain.handle('patch-auth-org-service-provider-config', async (event, request: sdk.GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgServiceProviderConfigRequest) => {
    return await sdkWrapper.patchAuthOrgServiceProviderConfig(request, apiConfig);
});
ipcMain.handle('patch-auth-org-session-config', async (event, request: sdk.GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgSessionConfigRequest) => {
    return await sdkWrapper.patchAuthOrgSessionConfig(request, apiConfig);
});

ipcMain.handle('create-workgroup', async (event, request: sdk.GovernanceGroupsV2025ApiCreateWorkgroupRequest) => {
    return await sdkWrapper.createWorkgroup(request, apiConfig);
});
ipcMain.handle('delete-workgroup', async (event, request: sdk.GovernanceGroupsV2025ApiDeleteWorkgroupRequest) => {
    return await sdkWrapper.deleteWorkgroup(request, apiConfig);
});
ipcMain.handle('delete-workgroup-members', async (event, request: sdk.GovernanceGroupsV2025ApiDeleteWorkgroupMembersRequest) => {
    return await sdkWrapper.deleteWorkgroupMembers(request, apiConfig);
});
ipcMain.handle('delete-workgroups-in-bulk', async (event, request: sdk.GovernanceGroupsV2025ApiDeleteWorkgroupsInBulkRequest) => {
    return await sdkWrapper.deleteWorkgroupsInBulk(request, apiConfig);
});
ipcMain.handle('get-workgroup', async (event, request: sdk.GovernanceGroupsV2025ApiGetWorkgroupRequest) => {
    return await sdkWrapper.getWorkgroup(request, apiConfig);
});
ipcMain.handle('list-connections', async (event, request: sdk.GovernanceGroupsV2025ApiListConnectionsRequest) => {
    return await sdkWrapper.listConnections(request, apiConfig);
});
ipcMain.handle('list-workgroup-members', async (event, request: sdk.GovernanceGroupsV2025ApiListWorkgroupMembersRequest) => {
    return await sdkWrapper.listWorkgroupMembers(request, apiConfig);
});
ipcMain.handle('list-workgroups', async (event, request: sdk.GovernanceGroupsV2025ApiListWorkgroupsRequest = {}) => {
    return await sdkWrapper.listWorkgroups(request, apiConfig);
});
ipcMain.handle('patch-workgroup', async (event, request: sdk.GovernanceGroupsV2025ApiPatchWorkgroupRequest) => {
    return await sdkWrapper.patchWorkgroup(request, apiConfig);
});
ipcMain.handle('update-workgroup-members', async (event, request: sdk.GovernanceGroupsV2025ApiUpdateWorkgroupMembersRequest) => {
    return await sdkWrapper.updateWorkgroupMembers(request, apiConfig);
});

ipcMain.handle('add-access-request-recommendations-ignored-item', async (event, request: sdk.IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsIgnoredItemRequest) => {
    return await sdkWrapper.addAccessRequestRecommendationsIgnoredItem(request, apiConfig);
});
ipcMain.handle('add-access-request-recommendations-requested-item', async (event, request: sdk.IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsRequestedItemRequest) => {
    return await sdkWrapper.addAccessRequestRecommendationsRequestedItem(request, apiConfig);
});
ipcMain.handle('add-access-request-recommendations-viewed-item', async (event, request: sdk.IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsViewedItemRequest) => {
    return await sdkWrapper.addAccessRequestRecommendationsViewedItem(request, apiConfig);
});
ipcMain.handle('add-access-request-recommendations-viewed-items', async (event, request: sdk.IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsViewedItemsRequest) => {
    return await sdkWrapper.addAccessRequestRecommendationsViewedItems(request, apiConfig);
});
ipcMain.handle('get-access-request-recommendations', async (event, request: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsRequest = {}) => {
    return await sdkWrapper.getAccessRequestRecommendations(request, apiConfig);
});
ipcMain.handle('get-access-request-recommendations-config', async (event, request: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsConfigRequest = {}) => {
    return await sdkWrapper.getAccessRequestRecommendationsConfig(request, apiConfig);
});
ipcMain.handle('get-access-request-recommendations-ignored-items', async (event, request: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsIgnoredItemsRequest) => {
    return await sdkWrapper.getAccessRequestRecommendationsIgnoredItems(request, apiConfig);
});
ipcMain.handle('get-access-request-recommendations-requested-items', async (event, request: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsRequestedItemsRequest) => {
    return await sdkWrapper.getAccessRequestRecommendationsRequestedItems(request, apiConfig);
});
ipcMain.handle('get-access-request-recommendations-viewed-items', async (event, request: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsViewedItemsRequest) => {
    return await sdkWrapper.getAccessRequestRecommendationsViewedItems(request, apiConfig);
});
ipcMain.handle('set-access-request-recommendations-config', async (event, request: sdk.IAIAccessRequestRecommendationsV2025ApiSetAccessRequestRecommendationsConfigRequest) => {
    return await sdkWrapper.setAccessRequestRecommendationsConfig(request, apiConfig);
});

ipcMain.handle('create-common-access', async (event, request: sdk.IAICommonAccessV2025ApiCreateCommonAccessRequest) => {
    return await sdkWrapper.createCommonAccess(request, apiConfig);
});
ipcMain.handle('get-common-access', async (event, request: sdk.IAICommonAccessV2025ApiGetCommonAccessRequest = {}) => {
    return await sdkWrapper.getCommonAccess(request, apiConfig);
});
ipcMain.handle('update-common-access-status-in-bulk', async (event, request: sdk.IAICommonAccessV2025ApiUpdateCommonAccessStatusInBulkRequest) => {
    return await sdkWrapper.updateCommonAccessStatusInBulk(request, apiConfig);
});

ipcMain.handle('export-outliers-zip', async (event, request: sdk.IAIOutliersV2025ApiExportOutliersZipRequest = {}) => {
    return await sdkWrapper.exportOutliersZip(request, apiConfig);
});
ipcMain.handle('get-identity-outlier-snapshots', async (event, request: sdk.IAIOutliersV2025ApiGetIdentityOutlierSnapshotsRequest = {}) => {
    return await sdkWrapper.getIdentityOutlierSnapshots(request, apiConfig);
});
ipcMain.handle('get-identity-outliers', async (event, request: sdk.IAIOutliersV2025ApiGetIdentityOutliersRequest = {}) => {
    return await sdkWrapper.getIdentityOutliers(request, apiConfig);
});
ipcMain.handle('get-latest-identity-outlier-snapshots', async (event, request: sdk.IAIOutliersV2025ApiGetLatestIdentityOutlierSnapshotsRequest = {}) => {
    return await sdkWrapper.getLatestIdentityOutlierSnapshots(request, apiConfig);
});
ipcMain.handle('get-outlier-contributing-feature-summary', async (event, request: sdk.IAIOutliersV2025ApiGetOutlierContributingFeatureSummaryRequest) => {
    return await sdkWrapper.getOutlierContributingFeatureSummary(request, apiConfig);
});
ipcMain.handle('get-peer-group-outliers-contributing-features', async (event, request: sdk.IAIOutliersV2025ApiGetPeerGroupOutliersContributingFeaturesRequest) => {
    return await sdkWrapper.getPeerGroupOutliersContributingFeatures(request, apiConfig);
});
ipcMain.handle('ignore-identity-outliers', async (event, request: sdk.IAIOutliersV2025ApiIgnoreIdentityOutliersRequest) => {
    return await sdkWrapper.ignoreIdentityOutliers(request, apiConfig);
});
ipcMain.handle('list-outliers-contributing-feature-access-items', async (event, request: sdk.IAIOutliersV2025ApiListOutliersContributingFeatureAccessItemsRequest) => {
    return await sdkWrapper.listOutliersContributingFeatureAccessItems(request, apiConfig);
});
ipcMain.handle('un-ignore-identity-outliers', async (event, request: sdk.IAIOutliersV2025ApiUnIgnoreIdentityOutliersRequest) => {
    return await sdkWrapper.unIgnoreIdentityOutliers(request, apiConfig);
});

ipcMain.handle('get-peer-group-outliers', async (event, request: sdk.IAIPeerGroupStrategiesV2025ApiGetPeerGroupOutliersRequest) => {
    return await sdkWrapper.getPeerGroupOutliers(request, apiConfig);
});

ipcMain.handle('get-recommendations', async (event, request: sdk.IAIRecommendationsV2025ApiGetRecommendationsRequest) => {
    return await sdkWrapper.getRecommendations(request, apiConfig);
});
ipcMain.handle('get-recommendations-config', async (event, request: sdk.IAIRecommendationsV2025ApiGetRecommendationsConfigRequest = {}) => {
    return await sdkWrapper.getRecommendationsConfig(request, apiConfig);
});
ipcMain.handle('update-recommendations-config', async (event, request: sdk.IAIRecommendationsV2025ApiUpdateRecommendationsConfigRequest) => {
    return await sdkWrapper.updateRecommendationsConfig(request, apiConfig);
});

ipcMain.handle('create-potential-role-provision-request', async (event, request: sdk.IAIRoleMiningV2025ApiCreatePotentialRoleProvisionRequestRequest) => {
    return await sdkWrapper.createPotentialRoleProvisionRequest(request, apiConfig);
});
ipcMain.handle('create-role-mining-sessions', async (event, request: sdk.IAIRoleMiningV2025ApiCreateRoleMiningSessionsRequest) => {
    return await sdkWrapper.createRoleMiningSessions(request, apiConfig);
});
ipcMain.handle('download-role-mining-potential-role-zip', async (event, request: sdk.IAIRoleMiningV2025ApiDownloadRoleMiningPotentialRoleZipRequest) => {
    return await sdkWrapper.downloadRoleMiningPotentialRoleZip(request, apiConfig);
});
ipcMain.handle('export-role-mining-potential-role', async (event, request: sdk.IAIRoleMiningV2025ApiExportRoleMiningPotentialRoleRequest) => {
    return await sdkWrapper.exportRoleMiningPotentialRole(request, apiConfig);
});
ipcMain.handle('export-role-mining-potential-role-async', async (event, request: sdk.IAIRoleMiningV2025ApiExportRoleMiningPotentialRoleAsyncRequest) => {
    return await sdkWrapper.exportRoleMiningPotentialRoleAsync(request, apiConfig);
});
ipcMain.handle('export-role-mining-potential-role-status', async (event, request: sdk.IAIRoleMiningV2025ApiExportRoleMiningPotentialRoleStatusRequest) => {
    return await sdkWrapper.exportRoleMiningPotentialRoleStatus(request, apiConfig);
});
ipcMain.handle('get-all-potential-role-summaries', async (event, request: sdk.IAIRoleMiningV2025ApiGetAllPotentialRoleSummariesRequest = {}) => {
    return await sdkWrapper.getAllPotentialRoleSummaries(request, apiConfig);
});
ipcMain.handle('get-entitlement-distribution-potential-role', async (event, request: sdk.IAIRoleMiningV2025ApiGetEntitlementDistributionPotentialRoleRequest) => {
    return await sdkWrapper.getEntitlementDistributionPotentialRole(request, apiConfig);
});
ipcMain.handle('get-entitlements-potential-role', async (event, request: sdk.IAIRoleMiningV2025ApiGetEntitlementsPotentialRoleRequest) => {
    return await sdkWrapper.getEntitlementsPotentialRole(request, apiConfig);
});
ipcMain.handle('get-excluded-entitlements-potential-role', async (event, request: sdk.IAIRoleMiningV2025ApiGetExcludedEntitlementsPotentialRoleRequest) => {
    return await sdkWrapper.getExcludedEntitlementsPotentialRole(request, apiConfig);
});
ipcMain.handle('get-identities-potential-role', async (event, request: sdk.IAIRoleMiningV2025ApiGetIdentitiesPotentialRoleRequest) => {
    return await sdkWrapper.getIdentitiesPotentialRole(request, apiConfig);
});
ipcMain.handle('get-potential-role', async (event, request: sdk.IAIRoleMiningV2025ApiGetPotentialRoleRequest) => {
    return await sdkWrapper.getPotentialRole(request, apiConfig);
});
ipcMain.handle('get-potential-role-applications', async (event, request: sdk.IAIRoleMiningV2025ApiGetPotentialRoleApplicationsRequest) => {
    return await sdkWrapper.getPotentialRoleApplications(request, apiConfig);
});
ipcMain.handle('get-potential-role-entitlements', async (event, request: sdk.IAIRoleMiningV2025ApiGetPotentialRoleEntitlementsRequest) => {
    return await sdkWrapper.getPotentialRoleEntitlements(request, apiConfig);
});
ipcMain.handle('get-potential-role-source-identity-usage', async (event, request: sdk.IAIRoleMiningV2025ApiGetPotentialRoleSourceIdentityUsageRequest) => {
    return await sdkWrapper.getPotentialRoleSourceIdentityUsage(request, apiConfig);
});
ipcMain.handle('get-potential-role-summaries', async (event, request: sdk.IAIRoleMiningV2025ApiGetPotentialRoleSummariesRequest) => {
    return await sdkWrapper.getPotentialRoleSummaries(request, apiConfig);
});
ipcMain.handle('get-role-mining-potential-role', async (event, request: sdk.IAIRoleMiningV2025ApiGetRoleMiningPotentialRoleRequest) => {
    return await sdkWrapper.getRoleMiningPotentialRole(request, apiConfig);
});
ipcMain.handle('get-role-mining-session', async (event, request: sdk.IAIRoleMiningV2025ApiGetRoleMiningSessionRequest) => {
    return await sdkWrapper.getRoleMiningSession(request, apiConfig);
});
ipcMain.handle('get-role-mining-session-status', async (event, request: sdk.IAIRoleMiningV2025ApiGetRoleMiningSessionStatusRequest) => {
    return await sdkWrapper.getRoleMiningSessionStatus(request, apiConfig);
});
ipcMain.handle('get-role-mining-sessions', async (event, request: sdk.IAIRoleMiningV2025ApiGetRoleMiningSessionsRequest) => {
    return await sdkWrapper.getRoleMiningSessions(request, apiConfig);
});
ipcMain.handle('get-saved-potential-roles', async (event, request: sdk.IAIRoleMiningV2025ApiGetSavedPotentialRolesRequest = {}) => {
    return await sdkWrapper.getSavedPotentialRoles(request, apiConfig);
});
ipcMain.handle('patch-potential-role', async (event, request: sdk.IAIRoleMiningV2025ApiPatchPotentialRoleRequest) => {
    return await sdkWrapper.patchPotentialRole(request, apiConfig);
});
ipcMain.handle('patch-potential-role-1', async (event, request: sdk.IAIRoleMiningV2025ApiPatchPotentialRole0Request) => {
    return await sdkWrapper.patchPotentialRole_1(request, apiConfig);
});
ipcMain.handle('patch-role-mining-session', async (event, request: sdk.IAIRoleMiningV2025ApiPatchRoleMiningSessionRequest) => {
    return await sdkWrapper.patchRoleMiningSession(request, apiConfig);
});
ipcMain.handle('update-entitlements-potential-role', async (event, request: sdk.IAIRoleMiningV2025ApiUpdateEntitlementsPotentialRoleRequest) => {
    return await sdkWrapper.updateEntitlementsPotentialRole(request, apiConfig);
});

ipcMain.handle('delete-icon', async (event, request: sdk.IconsV2025ApiDeleteIconRequest) => {
    return await sdkWrapper.deleteIcon(request, apiConfig);
});
ipcMain.handle('set-icon', async (event, request: sdk.IconsV2025ApiSetIconRequest) => {
    return await sdkWrapper.setIcon(request, apiConfig);
});

ipcMain.handle('delete-identity', async (event, request: sdk.IdentitiesV2025ApiDeleteIdentityRequest) => {
    return await sdkWrapper.deleteIdentity(request, apiConfig);
});
ipcMain.handle('get-identity', async (event, request: sdk.IdentitiesV2025ApiGetIdentityRequest) => {
    return await sdkWrapper.getIdentity(request, apiConfig);
});
ipcMain.handle('get-identity-ownership-details', async (event, request: sdk.IdentitiesV2025ApiGetIdentityOwnershipDetailsRequest) => {
    return await sdkWrapper.getIdentityOwnershipDetails(request, apiConfig);
});
ipcMain.handle('get-role-assignment', async (event, request: sdk.IdentitiesV2025ApiGetRoleAssignmentRequest) => {
    return await sdkWrapper.getRoleAssignment(request, apiConfig);
});
ipcMain.handle('get-role-assignments', async (event, request: sdk.IdentitiesV2025ApiGetRoleAssignmentsRequest) => {
    return await sdkWrapper.getRoleAssignments(request, apiConfig);
});
ipcMain.handle('list-identities', async (event, request: sdk.IdentitiesV2025ApiListIdentitiesRequest = {}) => {
    return await sdkWrapper.listIdentities(request, apiConfig);
});
ipcMain.handle('reset-identity', async (event, request: sdk.IdentitiesV2025ApiResetIdentityRequest) => {
    return await sdkWrapper.resetIdentity(request, apiConfig);
});
ipcMain.handle('send-identity-verification-account-token', async (event, request: sdk.IdentitiesV2025ApiSendIdentityVerificationAccountTokenRequest) => {
    return await sdkWrapper.sendIdentityVerificationAccountToken(request, apiConfig);
});
ipcMain.handle('start-identities-invite', async (event, request: sdk.IdentitiesV2025ApiStartIdentitiesInviteRequest) => {
    return await sdkWrapper.startIdentitiesInvite(request, apiConfig);
});
ipcMain.handle('start-identity-processing', async (event, request: sdk.IdentitiesV2025ApiStartIdentityProcessingRequest) => {
    return await sdkWrapper.startIdentityProcessing(request, apiConfig);
});
ipcMain.handle('synchronize-attributes-for-identity', async (event, request: sdk.IdentitiesV2025ApiSynchronizeAttributesForIdentityRequest) => {
    return await sdkWrapper.synchronizeAttributesForIdentity(request, apiConfig);
});

ipcMain.handle('create-identity-attribute', async (event, request: sdk.IdentityAttributesV2025ApiCreateIdentityAttributeRequest) => {
    return await sdkWrapper.createIdentityAttribute(request, apiConfig);
});
ipcMain.handle('delete-identity-attribute', async (event, request: sdk.IdentityAttributesV2025ApiDeleteIdentityAttributeRequest) => {
    return await sdkWrapper.deleteIdentityAttribute(request, apiConfig);
});
ipcMain.handle('delete-identity-attributes-in-bulk', async (event, request: sdk.IdentityAttributesV2025ApiDeleteIdentityAttributesInBulkRequest) => {
    return await sdkWrapper.deleteIdentityAttributesInBulk(request, apiConfig);
});
ipcMain.handle('get-identity-attribute', async (event, request: sdk.IdentityAttributesV2025ApiGetIdentityAttributeRequest) => {
    return await sdkWrapper.getIdentityAttribute(request, apiConfig);
});
ipcMain.handle('list-identity-attributes', async (event, request: sdk.IdentityAttributesV2025ApiListIdentityAttributesRequest = {}) => {
    return await sdkWrapper.listIdentityAttributes(request, apiConfig);
});
ipcMain.handle('put-identity-attribute', async (event, request: sdk.IdentityAttributesV2025ApiPutIdentityAttributeRequest) => {
    return await sdkWrapper.putIdentityAttribute(request, apiConfig);
});

ipcMain.handle('compare-identity-snapshots', async (event, request: sdk.IdentityHistoryV2025ApiCompareIdentitySnapshotsRequest) => {
    return await sdkWrapper.compareIdentitySnapshots(request, apiConfig);
});
ipcMain.handle('compare-identity-snapshots-access-type', async (event, request: sdk.IdentityHistoryV2025ApiCompareIdentitySnapshotsAccessTypeRequest) => {
    return await sdkWrapper.compareIdentitySnapshotsAccessType(request, apiConfig);
});
ipcMain.handle('get-historical-identity', async (event, request: sdk.IdentityHistoryV2025ApiGetHistoricalIdentityRequest) => {
    return await sdkWrapper.getHistoricalIdentity(request, apiConfig);
});
ipcMain.handle('get-historical-identity-events', async (event, request: sdk.IdentityHistoryV2025ApiGetHistoricalIdentityEventsRequest) => {
    return await sdkWrapper.getHistoricalIdentityEvents(request, apiConfig);
});
ipcMain.handle('get-identity-snapshot', async (event, request: sdk.IdentityHistoryV2025ApiGetIdentitySnapshotRequest) => {
    return await sdkWrapper.getIdentitySnapshot(request, apiConfig);
});
ipcMain.handle('get-identity-snapshot-summary', async (event, request: sdk.IdentityHistoryV2025ApiGetIdentitySnapshotSummaryRequest) => {
    return await sdkWrapper.getIdentitySnapshotSummary(request, apiConfig);
});
ipcMain.handle('get-identity-start-date', async (event, request: sdk.IdentityHistoryV2025ApiGetIdentityStartDateRequest) => {
    return await sdkWrapper.getIdentityStartDate(request, apiConfig);
});
ipcMain.handle('list-historical-identities', async (event, request: sdk.IdentityHistoryV2025ApiListHistoricalIdentitiesRequest = {}) => {
    return await sdkWrapper.listHistoricalIdentities(request, apiConfig);
});
ipcMain.handle('list-identity-access-items', async (event, request: sdk.IdentityHistoryV2025ApiListIdentityAccessItemsRequest) => {
    return await sdkWrapper.listIdentityAccessItems(request, apiConfig);
});
ipcMain.handle('list-identity-snapshot-access-items', async (event, request: sdk.IdentityHistoryV2025ApiListIdentitySnapshotAccessItemsRequest) => {
    return await sdkWrapper.listIdentitySnapshotAccessItems(request, apiConfig);
});
ipcMain.handle('list-identity-snapshots', async (event, request: sdk.IdentityHistoryV2025ApiListIdentitySnapshotsRequest) => {
    return await sdkWrapper.listIdentitySnapshots(request, apiConfig);
});

ipcMain.handle('create-identity-profile', async (event, request: sdk.IdentityProfilesV2025ApiCreateIdentityProfileRequest) => {
    return await sdkWrapper.createIdentityProfile(request, apiConfig);
});
ipcMain.handle('delete-identity-profile', async (event, request: sdk.IdentityProfilesV2025ApiDeleteIdentityProfileRequest) => {
    return await sdkWrapper.deleteIdentityProfile(request, apiConfig);
});
ipcMain.handle('delete-identity-profiles', async (event, request: sdk.IdentityProfilesV2025ApiDeleteIdentityProfilesRequest) => {
    return await sdkWrapper.deleteIdentityProfiles(request, apiConfig);
});
ipcMain.handle('export-identity-profiles', async (event, request: sdk.IdentityProfilesV2025ApiExportIdentityProfilesRequest = {}) => {
    return await sdkWrapper.exportIdentityProfiles(request, apiConfig);
});
ipcMain.handle('generate-identity-preview', async (event, request: sdk.IdentityProfilesV2025ApiGenerateIdentityPreviewRequest) => {
    return await sdkWrapper.generateIdentityPreview(request, apiConfig);
});
ipcMain.handle('get-default-identity-attribute-config', async (event, request: sdk.IdentityProfilesV2025ApiGetDefaultIdentityAttributeConfigRequest) => {
    return await sdkWrapper.getDefaultIdentityAttributeConfig(request, apiConfig);
});
ipcMain.handle('get-identity-profile', async (event, request: sdk.IdentityProfilesV2025ApiGetIdentityProfileRequest) => {
    return await sdkWrapper.getIdentityProfile(request, apiConfig);
});
ipcMain.handle('import-identity-profiles', async (event, request: sdk.IdentityProfilesV2025ApiImportIdentityProfilesRequest) => {
    return await sdkWrapper.importIdentityProfiles(request, apiConfig);
});
ipcMain.handle('list-identity-profiles', async (event, request: sdk.IdentityProfilesV2025ApiListIdentityProfilesRequest = {}) => {
    return await sdkWrapper.listIdentityProfiles(request, apiConfig);
});
ipcMain.handle('sync-identity-profile', async (event, request: sdk.IdentityProfilesV2025ApiSyncIdentityProfileRequest) => {
    return await sdkWrapper.syncIdentityProfile(request, apiConfig);
});
ipcMain.handle('update-identity-profile', async (event, request: sdk.IdentityProfilesV2025ApiUpdateIdentityProfileRequest) => {
    return await sdkWrapper.updateIdentityProfile(request, apiConfig);
});

ipcMain.handle('create-lifecycle-state', async (event, request: sdk.LifecycleStatesV2025ApiCreateLifecycleStateRequest) => {
    return await sdkWrapper.createLifecycleState(request, apiConfig);
});
ipcMain.handle('delete-lifecycle-state', async (event, request: sdk.LifecycleStatesV2025ApiDeleteLifecycleStateRequest) => {
    return await sdkWrapper.deleteLifecycleState(request, apiConfig);
});
ipcMain.handle('get-lifecycle-state', async (event, request: sdk.LifecycleStatesV2025ApiGetLifecycleStateRequest) => {
    return await sdkWrapper.getLifecycleState(request, apiConfig);
});
ipcMain.handle('get-lifecycle-states', async (event, request: sdk.LifecycleStatesV2025ApiGetLifecycleStatesRequest) => {
    return await sdkWrapper.getLifecycleStates(request, apiConfig);
});
ipcMain.handle('set-lifecycle-state', async (event, request: sdk.LifecycleStatesV2025ApiSetLifecycleStateRequest) => {
    return await sdkWrapper.setLifecycleState(request, apiConfig);
});
ipcMain.handle('update-lifecycle-states', async (event, request: sdk.LifecycleStatesV2025ApiUpdateLifecycleStatesRequest) => {
    return await sdkWrapper.updateLifecycleStates(request, apiConfig);
});

ipcMain.handle('get-mfa-duo-config', async (event, ) => {
    return await sdkWrapper.getMFADuoConfig(apiConfig);
});
ipcMain.handle('get-mfa-kba-config', async (event, request: sdk.MFAConfigurationV2025ApiGetMFAKbaConfigRequest = {}) => {
    return await sdkWrapper.getMFAKbaConfig(request, apiConfig);
});
ipcMain.handle('get-mfa-okta-config', async (event, ) => {
    return await sdkWrapper.getMFAOktaConfig(apiConfig);
});
ipcMain.handle('set-mfa-duo-config', async (event, request: sdk.MFAConfigurationV2025ApiSetMFADuoConfigRequest) => {
    return await sdkWrapper.setMFADuoConfig(request, apiConfig);
});
ipcMain.handle('set-mfakba-config', async (event, request: sdk.MFAConfigurationV2025ApiSetMFAKBAConfigRequest) => {
    return await sdkWrapper.setMFAKBAConfig(request, apiConfig);
});
ipcMain.handle('set-mfa-okta-config', async (event, request: sdk.MFAConfigurationV2025ApiSetMFAOktaConfigRequest) => {
    return await sdkWrapper.setMFAOktaConfig(request, apiConfig);
});
ipcMain.handle('test-mfa-config', async (event, request: sdk.MFAConfigurationV2025ApiTestMFAConfigRequest) => {
    return await sdkWrapper.testMFAConfig(request, apiConfig);
});

ipcMain.handle('get-machine-account', async (event, request: sdk.MachineAccountsV2025ApiGetMachineAccountRequest) => {
    return await sdkWrapper.getMachineAccount(request, apiConfig);
});
ipcMain.handle('list-machine-accounts', async (event, request: sdk.MachineAccountsV2025ApiListMachineAccountsRequest = {}) => {
    return await sdkWrapper.listMachineAccounts(request, apiConfig);
});
ipcMain.handle('update-machine-account', async (event, request: sdk.MachineAccountsV2025ApiUpdateMachineAccountRequest) => {
    return await sdkWrapper.updateMachineAccount(request, apiConfig);
});

ipcMain.handle('create-machine-identity', async (event, request: sdk.MachineIdentitiesV2025ApiCreateMachineIdentityRequest) => {
    return await sdkWrapper.createMachineIdentity(request, apiConfig);
});
ipcMain.handle('delete-machine-identity', async (event, request: sdk.MachineIdentitiesV2025ApiDeleteMachineIdentityRequest) => {
    return await sdkWrapper.deleteMachineIdentity(request, apiConfig);
});
ipcMain.handle('get-machine-identity', async (event, request: sdk.MachineIdentitiesV2025ApiGetMachineIdentityRequest) => {
    return await sdkWrapper.getMachineIdentity(request, apiConfig);
});
ipcMain.handle('list-machine-identities', async (event, request: sdk.MachineIdentitiesV2025ApiListMachineIdentitiesRequest = {}) => {
    return await sdkWrapper.listMachineIdentities(request, apiConfig);
});
ipcMain.handle('update-machine-identity', async (event, request: sdk.MachineIdentitiesV2025ApiUpdateMachineIdentityRequest) => {
    return await sdkWrapper.updateMachineIdentity(request, apiConfig);
});

ipcMain.handle('create-managed-client', async (event, request: sdk.ManagedClientsV2025ApiCreateManagedClientRequest) => {
    return await sdkWrapper.createManagedClient(request, apiConfig);
});
ipcMain.handle('delete-managed-client', async (event, request: sdk.ManagedClientsV2025ApiDeleteManagedClientRequest) => {
    return await sdkWrapper.deleteManagedClient(request, apiConfig);
});
ipcMain.handle('get-managed-client', async (event, request: sdk.ManagedClientsV2025ApiGetManagedClientRequest) => {
    return await sdkWrapper.getManagedClient(request, apiConfig);
});
ipcMain.handle('get-managed-client-status', async (event, request: sdk.ManagedClientsV2025ApiGetManagedClientStatusRequest) => {
    return await sdkWrapper.getManagedClientStatus(request, apiConfig);
});
ipcMain.handle('get-managed-clients', async (event, request: sdk.ManagedClientsV2025ApiGetManagedClientsRequest = {}) => {
    return await sdkWrapper.getManagedClients(request, apiConfig);
});
ipcMain.handle('update-managed-client', async (event, request: sdk.ManagedClientsV2025ApiUpdateManagedClientRequest) => {
    return await sdkWrapper.updateManagedClient(request, apiConfig);
});

ipcMain.handle('create-managed-cluster-type', async (event, request: sdk.ManagedClusterTypesV2025ApiCreateManagedClusterTypeRequest) => {
    return await sdkWrapper.createManagedClusterType(request, apiConfig);
});
ipcMain.handle('delete-managed-cluster-type', async (event, request: sdk.ManagedClusterTypesV2025ApiDeleteManagedClusterTypeRequest) => {
    return await sdkWrapper.deleteManagedClusterType(request, apiConfig);
});
ipcMain.handle('get-managed-cluster-type', async (event, request: sdk.ManagedClusterTypesV2025ApiGetManagedClusterTypeRequest) => {
    return await sdkWrapper.getManagedClusterType(request, apiConfig);
});
ipcMain.handle('get-managed-cluster-types', async (event, request: sdk.ManagedClusterTypesV2025ApiGetManagedClusterTypesRequest = {}) => {
    return await sdkWrapper.getManagedClusterTypes(request, apiConfig);
});
ipcMain.handle('update-managed-cluster-type', async (event, request: sdk.ManagedClusterTypesV2025ApiUpdateManagedClusterTypeRequest) => {
    return await sdkWrapper.updateManagedClusterType(request, apiConfig);
});

ipcMain.handle('create-managed-cluster', async (event, request: sdk.ManagedClustersV2025ApiCreateManagedClusterRequest) => {
    return await sdkWrapper.createManagedCluster(request, apiConfig);
});
ipcMain.handle('delete-managed-cluster', async (event, request: sdk.ManagedClustersV2025ApiDeleteManagedClusterRequest) => {
    return await sdkWrapper.deleteManagedCluster(request, apiConfig);
});
ipcMain.handle('get-client-log-configuration', async (event, request: sdk.ManagedClustersV2025ApiGetClientLogConfigurationRequest) => {
    return await sdkWrapper.getClientLogConfiguration(request, apiConfig);
});
ipcMain.handle('get-managed-cluster', async (event, request: sdk.ManagedClustersV2025ApiGetManagedClusterRequest) => {
    return await sdkWrapper.getManagedCluster(request, apiConfig);
});
ipcMain.handle('get-managed-clusters', async (event, request: sdk.ManagedClustersV2025ApiGetManagedClustersRequest = {}) => {
    return await sdkWrapper.getManagedClusters(request, apiConfig);
});
ipcMain.handle('put-client-log-configuration', async (event, request: sdk.ManagedClustersV2025ApiPutClientLogConfigurationRequest) => {
    return await sdkWrapper.putClientLogConfiguration(request, apiConfig);
});
ipcMain.handle('update', async (event, request: sdk.ManagedClustersV2025ApiUpdateRequest) => {
    return await sdkWrapper.update(request, apiConfig);
});
ipcMain.handle('update-managed-cluster', async (event, request: sdk.ManagedClustersV2025ApiUpdateManagedClusterRequest) => {
    return await sdkWrapper.updateManagedCluster(request, apiConfig);
});

ipcMain.handle('create-multi-host-integration', async (event, request: sdk.MultiHostIntegrationV2025ApiCreateMultiHostIntegrationRequest) => {
    return await sdkWrapper.createMultiHostIntegration(request, apiConfig);
});
ipcMain.handle('create-sources-within-multi-host', async (event, request: sdk.MultiHostIntegrationV2025ApiCreateSourcesWithinMultiHostRequest) => {
    return await sdkWrapper.createSourcesWithinMultiHost(request, apiConfig);
});
ipcMain.handle('delete-multi-host', async (event, request: sdk.MultiHostIntegrationV2025ApiDeleteMultiHostRequest) => {
    return await sdkWrapper.deleteMultiHost(request, apiConfig);
});
ipcMain.handle('get-acct-aggregation-groups', async (event, request: sdk.MultiHostIntegrationV2025ApiGetAcctAggregationGroupsRequest) => {
    return await sdkWrapper.getAcctAggregationGroups(request, apiConfig);
});
ipcMain.handle('get-entitlement-aggregation-groups', async (event, request: sdk.MultiHostIntegrationV2025ApiGetEntitlementAggregationGroupsRequest) => {
    return await sdkWrapper.getEntitlementAggregationGroups(request, apiConfig);
});
ipcMain.handle('get-multi-host-integrations', async (event, request: sdk.MultiHostIntegrationV2025ApiGetMultiHostIntegrationsRequest) => {
    return await sdkWrapper.getMultiHostIntegrations(request, apiConfig);
});
ipcMain.handle('get-multi-host-integrations-list', async (event, request: sdk.MultiHostIntegrationV2025ApiGetMultiHostIntegrationsListRequest = {}) => {
    return await sdkWrapper.getMultiHostIntegrationsList(request, apiConfig);
});
ipcMain.handle('get-multi-host-source-creation-errors', async (event, request: sdk.MultiHostIntegrationV2025ApiGetMultiHostSourceCreationErrorsRequest) => {
    return await sdkWrapper.getMultiHostSourceCreationErrors(request, apiConfig);
});
ipcMain.handle('get-multihost-integration-types', async (event, ) => {
    return await sdkWrapper.getMultihostIntegrationTypes(apiConfig);
});
ipcMain.handle('get-sources-within-multi-host', async (event, request: sdk.MultiHostIntegrationV2025ApiGetSourcesWithinMultiHostRequest) => {
    return await sdkWrapper.getSourcesWithinMultiHost(request, apiConfig);
});
ipcMain.handle('test-connection-multi-host-sources', async (event, request: sdk.MultiHostIntegrationV2025ApiTestConnectionMultiHostSourcesRequest) => {
    return await sdkWrapper.testConnectionMultiHostSources(request, apiConfig);
});
ipcMain.handle('test-source-connection-multihost', async (event, request: sdk.MultiHostIntegrationV2025ApiTestSourceConnectionMultihostRequest) => {
    return await sdkWrapper.testSourceConnectionMultihost(request, apiConfig);
});
ipcMain.handle('update-multi-host-sources', async (event, request: sdk.MultiHostIntegrationV2025ApiUpdateMultiHostSourcesRequest) => {
    return await sdkWrapper.updateMultiHostSources(request, apiConfig);
});

ipcMain.handle('approve-non-employee-request', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiApproveNonEmployeeRequestRequest) => {
    return await sdkWrapper.approveNonEmployeeRequest(request, apiConfig);
});
ipcMain.handle('create-non-employee-record', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeRecordRequest) => {
    return await sdkWrapper.createNonEmployeeRecord(request, apiConfig);
});
ipcMain.handle('create-non-employee-request', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeRequestRequest) => {
    return await sdkWrapper.createNonEmployeeRequest(request, apiConfig);
});
ipcMain.handle('create-non-employee-source', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeSourceRequest) => {
    return await sdkWrapper.createNonEmployeeSource(request, apiConfig);
});
ipcMain.handle('create-non-employee-source-schema-attributes', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeSourceSchemaAttributesRequest) => {
    return await sdkWrapper.createNonEmployeeSourceSchemaAttributes(request, apiConfig);
});
ipcMain.handle('delete-non-employee-record', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeRecordRequest) => {
    return await sdkWrapper.deleteNonEmployeeRecord(request, apiConfig);
});
ipcMain.handle('delete-non-employee-records-in-bulk', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeRecordsInBulkRequest) => {
    return await sdkWrapper.deleteNonEmployeeRecordsInBulk(request, apiConfig);
});
ipcMain.handle('delete-non-employee-request', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeRequestRequest) => {
    return await sdkWrapper.deleteNonEmployeeRequest(request, apiConfig);
});
ipcMain.handle('delete-non-employee-schema-attribute', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeSchemaAttributeRequest) => {
    return await sdkWrapper.deleteNonEmployeeSchemaAttribute(request, apiConfig);
});
ipcMain.handle('delete-non-employee-source', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeSourceRequest) => {
    return await sdkWrapper.deleteNonEmployeeSource(request, apiConfig);
});
ipcMain.handle('delete-non-employee-source-schema-attributes', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeSourceSchemaAttributesRequest) => {
    return await sdkWrapper.deleteNonEmployeeSourceSchemaAttributes(request, apiConfig);
});
ipcMain.handle('export-non-employee-records', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiExportNonEmployeeRecordsRequest) => {
    return await sdkWrapper.exportNonEmployeeRecords(request, apiConfig);
});
ipcMain.handle('export-non-employee-source-schema-template', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiExportNonEmployeeSourceSchemaTemplateRequest) => {
    return await sdkWrapper.exportNonEmployeeSourceSchemaTemplate(request, apiConfig);
});
ipcMain.handle('get-non-employee-approval', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeApprovalRequest) => {
    return await sdkWrapper.getNonEmployeeApproval(request, apiConfig);
});
ipcMain.handle('get-non-employee-approval-summary', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeApprovalSummaryRequest) => {
    return await sdkWrapper.getNonEmployeeApprovalSummary(request, apiConfig);
});
ipcMain.handle('get-non-employee-bulk-upload-status', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeBulkUploadStatusRequest) => {
    return await sdkWrapper.getNonEmployeeBulkUploadStatus(request, apiConfig);
});
ipcMain.handle('get-non-employee-record', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeRecordRequest) => {
    return await sdkWrapper.getNonEmployeeRecord(request, apiConfig);
});
ipcMain.handle('get-non-employee-request', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeRequestRequest) => {
    return await sdkWrapper.getNonEmployeeRequest(request, apiConfig);
});
ipcMain.handle('get-non-employee-request-summary', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeRequestSummaryRequest) => {
    return await sdkWrapper.getNonEmployeeRequestSummary(request, apiConfig);
});
ipcMain.handle('get-non-employee-schema-attribute', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeSchemaAttributeRequest) => {
    return await sdkWrapper.getNonEmployeeSchemaAttribute(request, apiConfig);
});
ipcMain.handle('get-non-employee-source', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeSourceRequest) => {
    return await sdkWrapper.getNonEmployeeSource(request, apiConfig);
});
ipcMain.handle('get-non-employee-source-schema-attributes', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeSourceSchemaAttributesRequest) => {
    return await sdkWrapper.getNonEmployeeSourceSchemaAttributes(request, apiConfig);
});
ipcMain.handle('import-non-employee-records-in-bulk', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiImportNonEmployeeRecordsInBulkRequest) => {
    return await sdkWrapper.importNonEmployeeRecordsInBulk(request, apiConfig);
});
ipcMain.handle('list-non-employee-approvals', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiListNonEmployeeApprovalsRequest = {}) => {
    return await sdkWrapper.listNonEmployeeApprovals(request, apiConfig);
});
ipcMain.handle('list-non-employee-records', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiListNonEmployeeRecordsRequest = {}) => {
    return await sdkWrapper.listNonEmployeeRecords(request, apiConfig);
});
ipcMain.handle('list-non-employee-requests', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiListNonEmployeeRequestsRequest) => {
    return await sdkWrapper.listNonEmployeeRequests(request, apiConfig);
});
ipcMain.handle('list-non-employee-sources', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiListNonEmployeeSourcesRequest = {}) => {
    return await sdkWrapper.listNonEmployeeSources(request, apiConfig);
});
ipcMain.handle('patch-non-employee-record', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiPatchNonEmployeeRecordRequest) => {
    return await sdkWrapper.patchNonEmployeeRecord(request, apiConfig);
});
ipcMain.handle('patch-non-employee-schema-attribute', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiPatchNonEmployeeSchemaAttributeRequest) => {
    return await sdkWrapper.patchNonEmployeeSchemaAttribute(request, apiConfig);
});
ipcMain.handle('patch-non-employee-source', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiPatchNonEmployeeSourceRequest) => {
    return await sdkWrapper.patchNonEmployeeSource(request, apiConfig);
});
ipcMain.handle('reject-non-employee-request', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiRejectNonEmployeeRequestRequest) => {
    return await sdkWrapper.rejectNonEmployeeRequest(request, apiConfig);
});
ipcMain.handle('update-non-employee-record', async (event, request: sdk.NonEmployeeLifecycleManagementV2025ApiUpdateNonEmployeeRecordRequest) => {
    return await sdkWrapper.updateNonEmployeeRecord(request, apiConfig);
});

ipcMain.handle('create-domain-dkim', async (event, request: sdk.NotificationsV2025ApiCreateDomainDkimRequest) => {
    return await sdkWrapper.createDomainDkim(request, apiConfig);
});
ipcMain.handle('create-notification-template', async (event, request: sdk.NotificationsV2025ApiCreateNotificationTemplateRequest) => {
    return await sdkWrapper.createNotificationTemplate(request, apiConfig);
});
ipcMain.handle('create-verified-from-address', async (event, request: sdk.NotificationsV2025ApiCreateVerifiedFromAddressRequest) => {
    return await sdkWrapper.createVerifiedFromAddress(request, apiConfig);
});
ipcMain.handle('delete-notification-templates-in-bulk', async (event, request: sdk.NotificationsV2025ApiDeleteNotificationTemplatesInBulkRequest) => {
    return await sdkWrapper.deleteNotificationTemplatesInBulk(request, apiConfig);
});
ipcMain.handle('delete-verified-from-address', async (event, request: sdk.NotificationsV2025ApiDeleteVerifiedFromAddressRequest) => {
    return await sdkWrapper.deleteVerifiedFromAddress(request, apiConfig);
});
ipcMain.handle('get-dkim-attributes', async (event, request: sdk.NotificationsV2025ApiGetDkimAttributesRequest = {}) => {
    return await sdkWrapper.getDkimAttributes(request, apiConfig);
});
ipcMain.handle('get-mail-from-attributes', async (event, request: sdk.NotificationsV2025ApiGetMailFromAttributesRequest) => {
    return await sdkWrapper.getMailFromAttributes(request, apiConfig);
});
ipcMain.handle('get-notification-template', async (event, request: sdk.NotificationsV2025ApiGetNotificationTemplateRequest) => {
    return await sdkWrapper.getNotificationTemplate(request, apiConfig);
});
ipcMain.handle('get-notifications-template-context', async (event, request: sdk.NotificationsV2025ApiGetNotificationsTemplateContextRequest = {}) => {
    return await sdkWrapper.getNotificationsTemplateContext(request, apiConfig);
});
ipcMain.handle('list-from-addresses', async (event, request: sdk.NotificationsV2025ApiListFromAddressesRequest = {}) => {
    return await sdkWrapper.listFromAddresses(request, apiConfig);
});
ipcMain.handle('list-notification-preferences', async (event, request: sdk.NotificationsV2025ApiListNotificationPreferencesRequest = {}) => {
    return await sdkWrapper.listNotificationPreferences(request, apiConfig);
});
ipcMain.handle('list-notification-template-defaults', async (event, request: sdk.NotificationsV2025ApiListNotificationTemplateDefaultsRequest = {}) => {
    return await sdkWrapper.listNotificationTemplateDefaults(request, apiConfig);
});
ipcMain.handle('list-notification-templates', async (event, request: sdk.NotificationsV2025ApiListNotificationTemplatesRequest = {}) => {
    return await sdkWrapper.listNotificationTemplates(request, apiConfig);
});
ipcMain.handle('put-mail-from-attributes', async (event, request: sdk.NotificationsV2025ApiPutMailFromAttributesRequest) => {
    return await sdkWrapper.putMailFromAttributes(request, apiConfig);
});
ipcMain.handle('send-test-notification', async (event, request: sdk.NotificationsV2025ApiSendTestNotificationRequest) => {
    return await sdkWrapper.sendTestNotification(request, apiConfig);
});

ipcMain.handle('create-oauth-client', async (event, request: sdk.OAuthClientsV2025ApiCreateOauthClientRequest) => {
    return await sdkWrapper.createOauthClient(request, apiConfig);
});
ipcMain.handle('delete-oauth-client', async (event, request: sdk.OAuthClientsV2025ApiDeleteOauthClientRequest) => {
    return await sdkWrapper.deleteOauthClient(request, apiConfig);
});
ipcMain.handle('get-oauth-client', async (event, request: sdk.OAuthClientsV2025ApiGetOauthClientRequest) => {
    return await sdkWrapper.getOauthClient(request, apiConfig);
});
ipcMain.handle('list-oauth-clients', async (event, request: sdk.OAuthClientsV2025ApiListOauthClientsRequest = {}) => {
    return await sdkWrapper.listOauthClients(request, apiConfig);
});
ipcMain.handle('patch-oauth-client', async (event, request: sdk.OAuthClientsV2025ApiPatchOauthClientRequest) => {
    return await sdkWrapper.patchOauthClient(request, apiConfig);
});

ipcMain.handle('get-org-config', async (event, request: sdk.OrgConfigV2025ApiGetOrgConfigRequest = {}) => {
    return await sdkWrapper.getOrgConfig(request, apiConfig);
});
ipcMain.handle('get-valid-time-zones', async (event, request: sdk.OrgConfigV2025ApiGetValidTimeZonesRequest = {}) => {
    return await sdkWrapper.getValidTimeZones(request, apiConfig);
});
ipcMain.handle('patch-org-config', async (event, request: sdk.OrgConfigV2025ApiPatchOrgConfigRequest) => {
    return await sdkWrapper.patchOrgConfig(request, apiConfig);
});

ipcMain.handle('create-password-org-config', async (event, request: sdk.PasswordConfigurationV2025ApiCreatePasswordOrgConfigRequest) => {
    return await sdkWrapper.createPasswordOrgConfig(request, apiConfig);
});
ipcMain.handle('get-password-org-config', async (event, ) => {
    return await sdkWrapper.getPasswordOrgConfig(apiConfig);
});
ipcMain.handle('put-password-org-config', async (event, request: sdk.PasswordConfigurationV2025ApiPutPasswordOrgConfigRequest) => {
    return await sdkWrapper.putPasswordOrgConfig(request, apiConfig);
});

ipcMain.handle('get-password-dictionary', async (event, ) => {
    return await sdkWrapper.getPasswordDictionary(apiConfig);
});
ipcMain.handle('put-password-dictionary', async (event, request: sdk.PasswordDictionaryV2025ApiPutPasswordDictionaryRequest = {}) => {
    return await sdkWrapper.putPasswordDictionary(request, apiConfig);
});

ipcMain.handle('create-digit-token', async (event, request: sdk.PasswordManagementV2025ApiCreateDigitTokenRequest) => {
    return await sdkWrapper.createDigitToken(request, apiConfig);
});
ipcMain.handle('get-password-change-status', async (event, request: sdk.PasswordManagementV2025ApiGetPasswordChangeStatusRequest) => {
    return await sdkWrapper.getPasswordChangeStatus(request, apiConfig);
});
ipcMain.handle('query-password-info', async (event, request: sdk.PasswordManagementV2025ApiQueryPasswordInfoRequest) => {
    return await sdkWrapper.queryPasswordInfo(request, apiConfig);
});
ipcMain.handle('set-password', async (event, request: sdk.PasswordManagementV2025ApiSetPasswordRequest) => {
    return await sdkWrapper.setPassword(request, apiConfig);
});

ipcMain.handle('create-password-policy', async (event, request: sdk.PasswordPoliciesV2025ApiCreatePasswordPolicyRequest) => {
    return await sdkWrapper.createPasswordPolicy(request, apiConfig);
});
ipcMain.handle('delete-password-policy', async (event, request: sdk.PasswordPoliciesV2025ApiDeletePasswordPolicyRequest) => {
    return await sdkWrapper.deletePasswordPolicy(request, apiConfig);
});
ipcMain.handle('get-password-policy-by-id', async (event, request: sdk.PasswordPoliciesV2025ApiGetPasswordPolicyByIdRequest) => {
    return await sdkWrapper.getPasswordPolicyById(request, apiConfig);
});
ipcMain.handle('list-password-policies', async (event, request: sdk.PasswordPoliciesV2025ApiListPasswordPoliciesRequest = {}) => {
    return await sdkWrapper.listPasswordPolicies(request, apiConfig);
});
ipcMain.handle('set-password-policy', async (event, request: sdk.PasswordPoliciesV2025ApiSetPasswordPolicyRequest) => {
    return await sdkWrapper.setPasswordPolicy(request, apiConfig);
});

ipcMain.handle('create-password-sync-group', async (event, request: sdk.PasswordSyncGroupsV2025ApiCreatePasswordSyncGroupRequest) => {
    return await sdkWrapper.createPasswordSyncGroup(request, apiConfig);
});
ipcMain.handle('delete-password-sync-group', async (event, request: sdk.PasswordSyncGroupsV2025ApiDeletePasswordSyncGroupRequest) => {
    return await sdkWrapper.deletePasswordSyncGroup(request, apiConfig);
});
ipcMain.handle('get-password-sync-group', async (event, request: sdk.PasswordSyncGroupsV2025ApiGetPasswordSyncGroupRequest) => {
    return await sdkWrapper.getPasswordSyncGroup(request, apiConfig);
});
ipcMain.handle('get-password-sync-groups', async (event, request: sdk.PasswordSyncGroupsV2025ApiGetPasswordSyncGroupsRequest = {}) => {
    return await sdkWrapper.getPasswordSyncGroups(request, apiConfig);
});
ipcMain.handle('update-password-sync-group', async (event, request: sdk.PasswordSyncGroupsV2025ApiUpdatePasswordSyncGroupRequest) => {
    return await sdkWrapper.updatePasswordSyncGroup(request, apiConfig);
});

ipcMain.handle('create-personal-access-token', async (event, request: sdk.PersonalAccessTokensV2025ApiCreatePersonalAccessTokenRequest) => {
    return await sdkWrapper.createPersonalAccessToken(request, apiConfig);
});
ipcMain.handle('delete-personal-access-token', async (event, request: sdk.PersonalAccessTokensV2025ApiDeletePersonalAccessTokenRequest) => {
    return await sdkWrapper.deletePersonalAccessToken(request, apiConfig);
});
ipcMain.handle('list-personal-access-tokens', async (event, request: sdk.PersonalAccessTokensV2025ApiListPersonalAccessTokensRequest = {}) => {
    return await sdkWrapper.listPersonalAccessTokens(request, apiConfig);
});
ipcMain.handle('patch-personal-access-token', async (event, request: sdk.PersonalAccessTokensV2025ApiPatchPersonalAccessTokenRequest) => {
    return await sdkWrapper.patchPersonalAccessToken(request, apiConfig);
});

ipcMain.handle('get-public-identities', async (event, request: sdk.PublicIdentitiesV2025ApiGetPublicIdentitiesRequest = {}) => {
    return await sdkWrapper.getPublicIdentities(request, apiConfig);
});

ipcMain.handle('get-public-identity-config', async (event, ) => {
    return await sdkWrapper.getPublicIdentityConfig(apiConfig);
});
ipcMain.handle('update-public-identity-config', async (event, request: sdk.PublicIdentitiesConfigV2025ApiUpdatePublicIdentityConfigRequest) => {
    return await sdkWrapper.updatePublicIdentityConfig(request, apiConfig);
});

ipcMain.handle('cancel-report', async (event, request: sdk.ReportsDataExtractionV2025ApiCancelReportRequest) => {
    return await sdkWrapper.cancelReport(request, apiConfig);
});
ipcMain.handle('get-report', async (event, request: sdk.ReportsDataExtractionV2025ApiGetReportRequest) => {
    return await sdkWrapper.getReport(request, apiConfig);
});
ipcMain.handle('get-report-result', async (event, request: sdk.ReportsDataExtractionV2025ApiGetReportResultRequest) => {
    return await sdkWrapper.getReportResult(request, apiConfig);
});
ipcMain.handle('start-report', async (event, request: sdk.ReportsDataExtractionV2025ApiStartReportRequest) => {
    return await sdkWrapper.startReport(request, apiConfig);
});

ipcMain.handle('list-requestable-objects', async (event, request: sdk.RequestableObjectsV2025ApiListRequestableObjectsRequest = {}) => {
    return await sdkWrapper.listRequestableObjects(request, apiConfig);
});

ipcMain.handle('create-role-insight-requests', async (event, request: sdk.RoleInsightsV2025ApiCreateRoleInsightRequestsRequest = {}) => {
    return await sdkWrapper.createRoleInsightRequests(request, apiConfig);
});
ipcMain.handle('download-role-insights-entitlements-changes', async (event, request: sdk.RoleInsightsV2025ApiDownloadRoleInsightsEntitlementsChangesRequest) => {
    return await sdkWrapper.downloadRoleInsightsEntitlementsChanges(request, apiConfig);
});
ipcMain.handle('get-entitlement-changes-identities', async (event, request: sdk.RoleInsightsV2025ApiGetEntitlementChangesIdentitiesRequest) => {
    return await sdkWrapper.getEntitlementChangesIdentities(request, apiConfig);
});
ipcMain.handle('get-role-insight', async (event, request: sdk.RoleInsightsV2025ApiGetRoleInsightRequest) => {
    return await sdkWrapper.getRoleInsight(request, apiConfig);
});
ipcMain.handle('get-role-insights', async (event, request: sdk.RoleInsightsV2025ApiGetRoleInsightsRequest = {}) => {
    return await sdkWrapper.getRoleInsights(request, apiConfig);
});
ipcMain.handle('get-role-insights-current-entitlements', async (event, request: sdk.RoleInsightsV2025ApiGetRoleInsightsCurrentEntitlementsRequest) => {
    return await sdkWrapper.getRoleInsightsCurrentEntitlements(request, apiConfig);
});
ipcMain.handle('get-role-insights-entitlements-changes', async (event, request: sdk.RoleInsightsV2025ApiGetRoleInsightsEntitlementsChangesRequest) => {
    return await sdkWrapper.getRoleInsightsEntitlementsChanges(request, apiConfig);
});
ipcMain.handle('get-role-insights-requests', async (event, request: sdk.RoleInsightsV2025ApiGetRoleInsightsRequestsRequest) => {
    return await sdkWrapper.getRoleInsightsRequests(request, apiConfig);
});
ipcMain.handle('get-role-insights-summary', async (event, request: sdk.RoleInsightsV2025ApiGetRoleInsightsSummaryRequest = {}) => {
    return await sdkWrapper.getRoleInsightsSummary(request, apiConfig);
});

ipcMain.handle('create-role', async (event, request: sdk.RolesV2025ApiCreateRoleRequest) => {
    return await sdkWrapper.createRole(request, apiConfig);
});
ipcMain.handle('delete-bulk-roles', async (event, request: sdk.RolesV2025ApiDeleteBulkRolesRequest) => {
    return await sdkWrapper.deleteBulkRoles(request, apiConfig);
});
ipcMain.handle('delete-metadata-from-role-by-key-and-value', async (event, request: sdk.RolesV2025ApiDeleteMetadataFromRoleByKeyAndValueRequest) => {
    return await sdkWrapper.deleteMetadataFromRoleByKeyAndValue(request, apiConfig);
});
ipcMain.handle('delete-role', async (event, request: sdk.RolesV2025ApiDeleteRoleRequest) => {
    return await sdkWrapper.deleteRole(request, apiConfig);
});
ipcMain.handle('get-bulk-update-status', async (event, ) => {
    return await sdkWrapper.getBulkUpdateStatus(apiConfig);
});
ipcMain.handle('get-bulk-update-status-by-id', async (event, request: sdk.RolesV2025ApiGetBulkUpdateStatusByIdRequest) => {
    return await sdkWrapper.getBulkUpdateStatusById(request, apiConfig);
});
ipcMain.handle('get-role', async (event, request: sdk.RolesV2025ApiGetRoleRequest) => {
    return await sdkWrapper.getRole(request, apiConfig);
});
ipcMain.handle('get-role-assigned-identities', async (event, request: sdk.RolesV2025ApiGetRoleAssignedIdentitiesRequest) => {
    return await sdkWrapper.getRoleAssignedIdentities(request, apiConfig);
});
ipcMain.handle('get-role-entitlements', async (event, request: sdk.RolesV2025ApiGetRoleEntitlementsRequest) => {
    return await sdkWrapper.getRoleEntitlements(request, apiConfig);
});
ipcMain.handle('list-roles', async (event, request: sdk.RolesV2025ApiListRolesRequest = {}) => {
    return await sdkWrapper.listRoles(request, apiConfig);
});
ipcMain.handle('patch-role', async (event, request: sdk.RolesV2025ApiPatchRoleRequest) => {
    return await sdkWrapper.patchRole(request, apiConfig);
});
ipcMain.handle('search-roles-by-filter', async (event, request: sdk.RolesV2025ApiSearchRolesByFilterRequest = {}) => {
    return await sdkWrapper.searchRolesByFilter(request, apiConfig);
});
ipcMain.handle('update-attribute-key-and-value-to-role', async (event, request: sdk.RolesV2025ApiUpdateAttributeKeyAndValueToRoleRequest) => {
    return await sdkWrapper.updateAttributeKeyAndValueToRole(request, apiConfig);
});
ipcMain.handle('update-roles-metadata-by-filter', async (event, request: sdk.RolesV2025ApiUpdateRolesMetadataByFilterRequest) => {
    return await sdkWrapper.updateRolesMetadataByFilter(request, apiConfig);
});
ipcMain.handle('update-roles-metadata-by-ids', async (event, request: sdk.RolesV2025ApiUpdateRolesMetadataByIdsRequest) => {
    return await sdkWrapper.updateRolesMetadataByIds(request, apiConfig);
});
ipcMain.handle('update-roles-metadata-by-query', async (event, request: sdk.RolesV2025ApiUpdateRolesMetadataByQueryRequest) => {
    return await sdkWrapper.updateRolesMetadataByQuery(request, apiConfig);
});

ipcMain.handle('create-sim-integration', async (event, request: sdk.SIMIntegrationsV2025ApiCreateSIMIntegrationRequest) => {
    return await sdkWrapper.createSIMIntegration(request, apiConfig);
});
ipcMain.handle('delete-sim-integration', async (event, request: sdk.SIMIntegrationsV2025ApiDeleteSIMIntegrationRequest) => {
    return await sdkWrapper.deleteSIMIntegration(request, apiConfig);
});
ipcMain.handle('get-sim-integration', async (event, request: sdk.SIMIntegrationsV2025ApiGetSIMIntegrationRequest) => {
    return await sdkWrapper.getSIMIntegration(request, apiConfig);
});
ipcMain.handle('get-sim-integrations', async (event, request: sdk.SIMIntegrationsV2025ApiGetSIMIntegrationsRequest = {}) => {
    return await sdkWrapper.getSIMIntegrations(request, apiConfig);
});
ipcMain.handle('patch-before-provisioning-rule', async (event, request: sdk.SIMIntegrationsV2025ApiPatchBeforeProvisioningRuleRequest) => {
    return await sdkWrapper.patchBeforeProvisioningRule(request, apiConfig);
});
ipcMain.handle('patch-sim-attributes', async (event, request: sdk.SIMIntegrationsV2025ApiPatchSIMAttributesRequest) => {
    return await sdkWrapper.patchSIMAttributes(request, apiConfig);
});
ipcMain.handle('put-sim-integration', async (event, request: sdk.SIMIntegrationsV2025ApiPutSIMIntegrationRequest) => {
    return await sdkWrapper.putSIMIntegration(request, apiConfig);
});

ipcMain.handle('create-sod-policy', async (event, request: sdk.SODPoliciesV2025ApiCreateSodPolicyRequest) => {
    return await sdkWrapper.createSodPolicy(request, apiConfig);
});
ipcMain.handle('delete-sod-policy', async (event, request: sdk.SODPoliciesV2025ApiDeleteSodPolicyRequest) => {
    return await sdkWrapper.deleteSodPolicy(request, apiConfig);
});
ipcMain.handle('delete-sod-policy-schedule', async (event, request: sdk.SODPoliciesV2025ApiDeleteSodPolicyScheduleRequest) => {
    return await sdkWrapper.deleteSodPolicySchedule(request, apiConfig);
});
ipcMain.handle('get-custom-violation-report', async (event, request: sdk.SODPoliciesV2025ApiGetCustomViolationReportRequest) => {
    return await sdkWrapper.getCustomViolationReport(request, apiConfig);
});
ipcMain.handle('get-default-violation-report', async (event, request: sdk.SODPoliciesV2025ApiGetDefaultViolationReportRequest) => {
    return await sdkWrapper.getDefaultViolationReport(request, apiConfig);
});
ipcMain.handle('get-sod-all-report-run-status', async (event, ) => {
    return await sdkWrapper.getSodAllReportRunStatus(apiConfig);
});
ipcMain.handle('get-sod-policy', async (event, request: sdk.SODPoliciesV2025ApiGetSodPolicyRequest) => {
    return await sdkWrapper.getSodPolicy(request, apiConfig);
});
ipcMain.handle('get-sod-policy-schedule', async (event, request: sdk.SODPoliciesV2025ApiGetSodPolicyScheduleRequest) => {
    return await sdkWrapper.getSodPolicySchedule(request, apiConfig);
});
ipcMain.handle('get-sod-violation-report-run-status', async (event, request: sdk.SODPoliciesV2025ApiGetSodViolationReportRunStatusRequest) => {
    return await sdkWrapper.getSodViolationReportRunStatus(request, apiConfig);
});
ipcMain.handle('get-sod-violation-report-status', async (event, request: sdk.SODPoliciesV2025ApiGetSodViolationReportStatusRequest) => {
    return await sdkWrapper.getSodViolationReportStatus(request, apiConfig);
});
ipcMain.handle('list-sod-policies', async (event, request: sdk.SODPoliciesV2025ApiListSodPoliciesRequest = {}) => {
    return await sdkWrapper.listSodPolicies(request, apiConfig);
});
ipcMain.handle('patch-sod-policy', async (event, request: sdk.SODPoliciesV2025ApiPatchSodPolicyRequest) => {
    return await sdkWrapper.patchSodPolicy(request, apiConfig);
});
ipcMain.handle('put-policy-schedule', async (event, request: sdk.SODPoliciesV2025ApiPutPolicyScheduleRequest) => {
    return await sdkWrapper.putPolicySchedule(request, apiConfig);
});
ipcMain.handle('put-sod-policy', async (event, request: sdk.SODPoliciesV2025ApiPutSodPolicyRequest) => {
    return await sdkWrapper.putSodPolicy(request, apiConfig);
});
ipcMain.handle('start-evaluate-sod-policy', async (event, request: sdk.SODPoliciesV2025ApiStartEvaluateSodPolicyRequest) => {
    return await sdkWrapper.startEvaluateSodPolicy(request, apiConfig);
});
ipcMain.handle('start-sod-all-policies-for-org', async (event, request: sdk.SODPoliciesV2025ApiStartSodAllPoliciesForOrgRequest = {}) => {
    return await sdkWrapper.startSodAllPoliciesForOrg(request, apiConfig);
});
ipcMain.handle('start-sod-policy', async (event, request: sdk.SODPoliciesV2025ApiStartSodPolicyRequest) => {
    return await sdkWrapper.startSodPolicy(request, apiConfig);
});

ipcMain.handle('start-predict-sod-violations', async (event, request: sdk.SODViolationsV2025ApiStartPredictSodViolationsRequest) => {
    return await sdkWrapper.startPredictSodViolations(request, apiConfig);
});
ipcMain.handle('start-violation-check', async (event, request: sdk.SODViolationsV2025ApiStartViolationCheckRequest) => {
    return await sdkWrapper.startViolationCheck(request, apiConfig);
});

ipcMain.handle('export-sp-config', async (event, request: sdk.SPConfigV2025ApiExportSpConfigRequest) => {
    return await sdkWrapper.exportSpConfig(request, apiConfig);
});
ipcMain.handle('get-sp-config-export', async (event, request: sdk.SPConfigV2025ApiGetSpConfigExportRequest) => {
    return await sdkWrapper.getSpConfigExport(request, apiConfig);
});
ipcMain.handle('get-sp-config-export-status', async (event, request: sdk.SPConfigV2025ApiGetSpConfigExportStatusRequest) => {
    return await sdkWrapper.getSpConfigExportStatus(request, apiConfig);
});
ipcMain.handle('get-sp-config-import', async (event, request: sdk.SPConfigV2025ApiGetSpConfigImportRequest) => {
    return await sdkWrapper.getSpConfigImport(request, apiConfig);
});
ipcMain.handle('get-sp-config-import-status', async (event, request: sdk.SPConfigV2025ApiGetSpConfigImportStatusRequest) => {
    return await sdkWrapper.getSpConfigImportStatus(request, apiConfig);
});
ipcMain.handle('import-sp-config', async (event, request: sdk.SPConfigV2025ApiImportSpConfigRequest) => {
    return await sdkWrapper.importSpConfig(request, apiConfig);
});
ipcMain.handle('list-sp-config-objects', async (event, ) => {
    return await sdkWrapper.listSpConfigObjects(apiConfig);
});

ipcMain.handle('create-saved-search', async (event, request: sdk.SavedSearchV2025ApiCreateSavedSearchRequest) => {
    return await sdkWrapper.createSavedSearch(request, apiConfig);
});
ipcMain.handle('delete-saved-search', async (event, request: sdk.SavedSearchV2025ApiDeleteSavedSearchRequest) => {
    return await sdkWrapper.deleteSavedSearch(request, apiConfig);
});
ipcMain.handle('execute-saved-search', async (event, request: sdk.SavedSearchV2025ApiExecuteSavedSearchRequest) => {
    return await sdkWrapper.executeSavedSearch(request, apiConfig);
});
ipcMain.handle('get-saved-search', async (event, request: sdk.SavedSearchV2025ApiGetSavedSearchRequest) => {
    return await sdkWrapper.getSavedSearch(request, apiConfig);
});
ipcMain.handle('list-saved-searches', async (event, request: sdk.SavedSearchV2025ApiListSavedSearchesRequest = {}) => {
    return await sdkWrapper.listSavedSearches(request, apiConfig);
});
ipcMain.handle('put-saved-search', async (event, request: sdk.SavedSearchV2025ApiPutSavedSearchRequest) => {
    return await sdkWrapper.putSavedSearch(request, apiConfig);
});

ipcMain.handle('create-scheduled-search', async (event, request: sdk.ScheduledSearchV2025ApiCreateScheduledSearchRequest) => {
    return await sdkWrapper.createScheduledSearch(request, apiConfig);
});
ipcMain.handle('delete-scheduled-search', async (event, request: sdk.ScheduledSearchV2025ApiDeleteScheduledSearchRequest) => {
    return await sdkWrapper.deleteScheduledSearch(request, apiConfig);
});
ipcMain.handle('get-scheduled-search', async (event, request: sdk.ScheduledSearchV2025ApiGetScheduledSearchRequest) => {
    return await sdkWrapper.getScheduledSearch(request, apiConfig);
});
ipcMain.handle('list-scheduled-search', async (event, request: sdk.ScheduledSearchV2025ApiListScheduledSearchRequest = {}) => {
    return await sdkWrapper.listScheduledSearch(request, apiConfig);
});
ipcMain.handle('unsubscribe-scheduled-search', async (event, request: sdk.ScheduledSearchV2025ApiUnsubscribeScheduledSearchRequest) => {
    return await sdkWrapper.unsubscribeScheduledSearch(request, apiConfig);
});
ipcMain.handle('update-scheduled-search', async (event, request: sdk.ScheduledSearchV2025ApiUpdateScheduledSearchRequest) => {
    return await sdkWrapper.updateScheduledSearch(request, apiConfig);
});

ipcMain.handle('search-aggregate', async (event, request: sdk.SearchV2025ApiSearchAggregateRequest) => {
    return await sdkWrapper.searchAggregate(request, apiConfig);
});
ipcMain.handle('search-count', async (event, request: sdk.SearchV2025ApiSearchCountRequest) => {
    return await sdkWrapper.searchCount(request, apiConfig);
});
ipcMain.handle('search-get', async (event, request: sdk.SearchV2025ApiSearchGetRequest) => {
    return await sdkWrapper.searchGet(request, apiConfig);
});
ipcMain.handle('search-post', async (event, request: sdk.SearchV2025ApiSearchPostRequest) => {
    return await sdkWrapper.searchPost(request, apiConfig);
});

ipcMain.handle('create-search-attribute-config', async (event, request: sdk.SearchAttributeConfigurationV2025ApiCreateSearchAttributeConfigRequest) => {
    return await sdkWrapper.createSearchAttributeConfig(request, apiConfig);
});
ipcMain.handle('delete-search-attribute-config', async (event, request: sdk.SearchAttributeConfigurationV2025ApiDeleteSearchAttributeConfigRequest) => {
    return await sdkWrapper.deleteSearchAttributeConfig(request, apiConfig);
});
ipcMain.handle('get-search-attribute-config', async (event, request: sdk.SearchAttributeConfigurationV2025ApiGetSearchAttributeConfigRequest) => {
    return await sdkWrapper.getSearchAttributeConfig(request, apiConfig);
});
ipcMain.handle('get-single-search-attribute-config', async (event, request: sdk.SearchAttributeConfigurationV2025ApiGetSingleSearchAttributeConfigRequest) => {
    return await sdkWrapper.getSingleSearchAttributeConfig(request, apiConfig);
});
ipcMain.handle('patch-search-attribute-config', async (event, request: sdk.SearchAttributeConfigurationV2025ApiPatchSearchAttributeConfigRequest) => {
    return await sdkWrapper.patchSearchAttributeConfig(request, apiConfig);
});

ipcMain.handle('create-segment', async (event, request: sdk.SegmentsV2025ApiCreateSegmentRequest) => {
    return await sdkWrapper.createSegment(request, apiConfig);
});
ipcMain.handle('delete-segment', async (event, request: sdk.SegmentsV2025ApiDeleteSegmentRequest) => {
    return await sdkWrapper.deleteSegment(request, apiConfig);
});
ipcMain.handle('get-segment', async (event, request: sdk.SegmentsV2025ApiGetSegmentRequest) => {
    return await sdkWrapper.getSegment(request, apiConfig);
});
ipcMain.handle('list-segments', async (event, request: sdk.SegmentsV2025ApiListSegmentsRequest = {}) => {
    return await sdkWrapper.listSegments(request, apiConfig);
});
ipcMain.handle('patch-segment', async (event, request: sdk.SegmentsV2025ApiPatchSegmentRequest) => {
    return await sdkWrapper.patchSegment(request, apiConfig);
});

ipcMain.handle('create-service-desk-integration', async (event, request: sdk.ServiceDeskIntegrationV2025ApiCreateServiceDeskIntegrationRequest) => {
    return await sdkWrapper.createServiceDeskIntegration(request, apiConfig);
});
ipcMain.handle('delete-service-desk-integration', async (event, request: sdk.ServiceDeskIntegrationV2025ApiDeleteServiceDeskIntegrationRequest) => {
    return await sdkWrapper.deleteServiceDeskIntegration(request, apiConfig);
});
ipcMain.handle('get-service-desk-integration', async (event, request: sdk.ServiceDeskIntegrationV2025ApiGetServiceDeskIntegrationRequest) => {
    return await sdkWrapper.getServiceDeskIntegration(request, apiConfig);
});
ipcMain.handle('get-service-desk-integration-template', async (event, request: sdk.ServiceDeskIntegrationV2025ApiGetServiceDeskIntegrationTemplateRequest) => {
    return await sdkWrapper.getServiceDeskIntegrationTemplate(request, apiConfig);
});
ipcMain.handle('get-service-desk-integration-types', async (event, ) => {
    return await sdkWrapper.getServiceDeskIntegrationTypes(apiConfig);
});
ipcMain.handle('get-service-desk-integrations', async (event, request: sdk.ServiceDeskIntegrationV2025ApiGetServiceDeskIntegrationsRequest = {}) => {
    return await sdkWrapper.getServiceDeskIntegrations(request, apiConfig);
});
ipcMain.handle('get-status-check-details', async (event, ) => {
    return await sdkWrapper.getStatusCheckDetails(apiConfig);
});
ipcMain.handle('patch-service-desk-integration', async (event, request: sdk.ServiceDeskIntegrationV2025ApiPatchServiceDeskIntegrationRequest) => {
    return await sdkWrapper.patchServiceDeskIntegration(request, apiConfig);
});
ipcMain.handle('put-service-desk-integration', async (event, request: sdk.ServiceDeskIntegrationV2025ApiPutServiceDeskIntegrationRequest) => {
    return await sdkWrapper.putServiceDeskIntegration(request, apiConfig);
});
ipcMain.handle('update-status-check-details', async (event, request: sdk.ServiceDeskIntegrationV2025ApiUpdateStatusCheckDetailsRequest) => {
    return await sdkWrapper.updateStatusCheckDetails(request, apiConfig);
});

ipcMain.handle('get-status-by-source-id', async (event, request: sdk.SourceUsagesV2025ApiGetStatusBySourceIdRequest) => {
    return await sdkWrapper.getStatusBySourceId(request, apiConfig);
});
ipcMain.handle('get-usages-by-source-id', async (event, request: sdk.SourceUsagesV2025ApiGetUsagesBySourceIdRequest) => {
    return await sdkWrapper.getUsagesBySourceId(request, apiConfig);
});

ipcMain.handle('create-provisioning-policy', async (event, request: sdk.SourcesV2025ApiCreateProvisioningPolicyRequest) => {
    return await sdkWrapper.createProvisioningPolicy(request, apiConfig);
});
ipcMain.handle('create-source', async (event, request: sdk.SourcesV2025ApiCreateSourceRequest) => {
    return await sdkWrapper.createSource(request, apiConfig);
});
ipcMain.handle('create-source-schedule', async (event, request: sdk.SourcesV2025ApiCreateSourceScheduleRequest) => {
    return await sdkWrapper.createSourceSchedule(request, apiConfig);
});
ipcMain.handle('create-source-schema', async (event, request: sdk.SourcesV2025ApiCreateSourceSchemaRequest) => {
    return await sdkWrapper.createSourceSchema(request, apiConfig);
});
ipcMain.handle('delete-accounts-async', async (event, request: sdk.SourcesV2025ApiDeleteAccountsAsyncRequest) => {
    return await sdkWrapper.deleteAccountsAsync(request, apiConfig);
});
ipcMain.handle('delete-native-change-detection-config', async (event, request: sdk.SourcesV2025ApiDeleteNativeChangeDetectionConfigRequest) => {
    return await sdkWrapper.deleteNativeChangeDetectionConfig(request, apiConfig);
});
ipcMain.handle('delete-provisioning-policy', async (event, request: sdk.SourcesV2025ApiDeleteProvisioningPolicyRequest) => {
    return await sdkWrapper.deleteProvisioningPolicy(request, apiConfig);
});
ipcMain.handle('delete-source', async (event, request: sdk.SourcesV2025ApiDeleteSourceRequest) => {
    return await sdkWrapper.deleteSource(request, apiConfig);
});
ipcMain.handle('delete-source-schedule', async (event, request: sdk.SourcesV2025ApiDeleteSourceScheduleRequest) => {
    return await sdkWrapper.deleteSourceSchedule(request, apiConfig);
});
ipcMain.handle('delete-source-schema', async (event, request: sdk.SourcesV2025ApiDeleteSourceSchemaRequest) => {
    return await sdkWrapper.deleteSourceSchema(request, apiConfig);
});
ipcMain.handle('get-accounts-schema', async (event, request: sdk.SourcesV2025ApiGetAccountsSchemaRequest) => {
    return await sdkWrapper.getAccountsSchema(request, apiConfig);
});
ipcMain.handle('get-correlation-config', async (event, request: sdk.SourcesV2025ApiGetCorrelationConfigRequest) => {
    return await sdkWrapper.getCorrelationConfig(request, apiConfig);
});
ipcMain.handle('get-entitlements-schema', async (event, request: sdk.SourcesV2025ApiGetEntitlementsSchemaRequest) => {
    return await sdkWrapper.getEntitlementsSchema(request, apiConfig);
});
ipcMain.handle('get-native-change-detection-config', async (event, request: sdk.SourcesV2025ApiGetNativeChangeDetectionConfigRequest) => {
    return await sdkWrapper.getNativeChangeDetectionConfig(request, apiConfig);
});
ipcMain.handle('get-provisioning-policy', async (event, request: sdk.SourcesV2025ApiGetProvisioningPolicyRequest) => {
    return await sdkWrapper.getProvisioningPolicy(request, apiConfig);
});
ipcMain.handle('get-source', async (event, request: sdk.SourcesV2025ApiGetSourceRequest) => {
    return await sdkWrapper.getSource(request, apiConfig);
});
ipcMain.handle('get-source-attr-sync-config', async (event, request: sdk.SourcesV2025ApiGetSourceAttrSyncConfigRequest) => {
    return await sdkWrapper.getSourceAttrSyncConfig(request, apiConfig);
});
ipcMain.handle('get-source-config', async (event, request: sdk.SourcesV2025ApiGetSourceConfigRequest) => {
    return await sdkWrapper.getSourceConfig(request, apiConfig);
});
ipcMain.handle('get-source-connections', async (event, request: sdk.SourcesV2025ApiGetSourceConnectionsRequest) => {
    return await sdkWrapper.getSourceConnections(request, apiConfig);
});
ipcMain.handle('get-source-entitlement-request-config', async (event, request: sdk.SourcesV2025ApiGetSourceEntitlementRequestConfigRequest = {}) => {
    return await sdkWrapper.getSourceEntitlementRequestConfig(request, apiConfig);
});
ipcMain.handle('get-source-health', async (event, request: sdk.SourcesV2025ApiGetSourceHealthRequest) => {
    return await sdkWrapper.getSourceHealth(request, apiConfig);
});
ipcMain.handle('get-source-schedule', async (event, request: sdk.SourcesV2025ApiGetSourceScheduleRequest) => {
    return await sdkWrapper.getSourceSchedule(request, apiConfig);
});
ipcMain.handle('get-source-schedules', async (event, request: sdk.SourcesV2025ApiGetSourceSchedulesRequest) => {
    return await sdkWrapper.getSourceSchedules(request, apiConfig);
});
ipcMain.handle('get-source-schema', async (event, request: sdk.SourcesV2025ApiGetSourceSchemaRequest) => {
    return await sdkWrapper.getSourceSchema(request, apiConfig);
});
ipcMain.handle('get-source-schemas', async (event, request: sdk.SourcesV2025ApiGetSourceSchemasRequest) => {
    return await sdkWrapper.getSourceSchemas(request, apiConfig);
});
ipcMain.handle('import-accounts', async (event, request: sdk.SourcesV2025ApiImportAccountsRequest) => {
    return await sdkWrapper.importAccounts(request, apiConfig);
});
ipcMain.handle('import-accounts-schema', async (event, request: sdk.SourcesV2025ApiImportAccountsSchemaRequest) => {
    return await sdkWrapper.importAccountsSchema(request, apiConfig);
});
ipcMain.handle('import-connector-file', async (event, request: sdk.SourcesV2025ApiImportConnectorFileRequest) => {
    return await sdkWrapper.importConnectorFile(request, apiConfig);
});
ipcMain.handle('import-entitlements-schema', async (event, request: sdk.SourcesV2025ApiImportEntitlementsSchemaRequest) => {
    return await sdkWrapper.importEntitlementsSchema(request, apiConfig);
});
ipcMain.handle('import-uncorrelated-accounts', async (event, request: sdk.SourcesV2025ApiImportUncorrelatedAccountsRequest) => {
    return await sdkWrapper.importUncorrelatedAccounts(request, apiConfig);
});
ipcMain.handle('list-provisioning-policies', async (event, request: sdk.SourcesV2025ApiListProvisioningPoliciesRequest) => {
    return await sdkWrapper.listProvisioningPolicies(request, apiConfig);
});
ipcMain.handle('list-sources', async (event, request: sdk.SourcesV2025ApiListSourcesRequest = {}) => {
    return await sdkWrapper.listSources(request, apiConfig);
});
ipcMain.handle('ping-cluster', async (event, request: sdk.SourcesV2025ApiPingClusterRequest) => {
    return await sdkWrapper.pingCluster(request, apiConfig);
});
ipcMain.handle('put-correlation-config', async (event, request: sdk.SourcesV2025ApiPutCorrelationConfigRequest) => {
    return await sdkWrapper.putCorrelationConfig(request, apiConfig);
});
ipcMain.handle('put-native-change-detection-config', async (event, request: sdk.SourcesV2025ApiPutNativeChangeDetectionConfigRequest) => {
    return await sdkWrapper.putNativeChangeDetectionConfig(request, apiConfig);
});
ipcMain.handle('put-provisioning-policy', async (event, request: sdk.SourcesV2025ApiPutProvisioningPolicyRequest) => {
    return await sdkWrapper.putProvisioningPolicy(request, apiConfig);
});
ipcMain.handle('put-source', async (event, request: sdk.SourcesV2025ApiPutSourceRequest) => {
    return await sdkWrapper.putSource(request, apiConfig);
});
ipcMain.handle('put-source-attr-sync-config', async (event, request: sdk.SourcesV2025ApiPutSourceAttrSyncConfigRequest) => {
    return await sdkWrapper.putSourceAttrSyncConfig(request, apiConfig);
});
ipcMain.handle('put-source-schema', async (event, request: sdk.SourcesV2025ApiPutSourceSchemaRequest) => {
    return await sdkWrapper.putSourceSchema(request, apiConfig);
});
ipcMain.handle('search-resource-objects', async (event, request: sdk.SourcesV2025ApiSearchResourceObjectsRequest) => {
    return await sdkWrapper.searchResourceObjects(request, apiConfig);
});
ipcMain.handle('sync-attributes-for-source', async (event, request: sdk.SourcesV2025ApiSyncAttributesForSourceRequest) => {
    return await sdkWrapper.syncAttributesForSource(request, apiConfig);
});
ipcMain.handle('test-source-configuration', async (event, request: sdk.SourcesV2025ApiTestSourceConfigurationRequest) => {
    return await sdkWrapper.testSourceConfiguration(request, apiConfig);
});
ipcMain.handle('test-source-connection', async (event, request: sdk.SourcesV2025ApiTestSourceConnectionRequest) => {
    return await sdkWrapper.testSourceConnection(request, apiConfig);
});
ipcMain.handle('update-password-policy-holders', async (event, request: sdk.SourcesV2025ApiUpdatePasswordPolicyHoldersRequest) => {
    return await sdkWrapper.updatePasswordPolicyHolders(request, apiConfig);
});
ipcMain.handle('update-provisioning-policies-in-bulk', async (event, request: sdk.SourcesV2025ApiUpdateProvisioningPoliciesInBulkRequest) => {
    return await sdkWrapper.updateProvisioningPoliciesInBulk(request, apiConfig);
});
ipcMain.handle('update-provisioning-policy', async (event, request: sdk.SourcesV2025ApiUpdateProvisioningPolicyRequest) => {
    return await sdkWrapper.updateProvisioningPolicy(request, apiConfig);
});
ipcMain.handle('update-source', async (event, request: sdk.SourcesV2025ApiUpdateSourceRequest) => {
    return await sdkWrapper.updateSource(request, apiConfig);
});
ipcMain.handle('update-source-entitlement-request-config', async (event, request: sdk.SourcesV2025ApiUpdateSourceEntitlementRequestConfigRequest) => {
    return await sdkWrapper.updateSourceEntitlementRequestConfig(request, apiConfig);
});
ipcMain.handle('update-source-schedule', async (event, request: sdk.SourcesV2025ApiUpdateSourceScheduleRequest) => {
    return await sdkWrapper.updateSourceSchedule(request, apiConfig);
});
ipcMain.handle('update-source-schema', async (event, request: sdk.SourcesV2025ApiUpdateSourceSchemaRequest) => {
    return await sdkWrapper.updateSourceSchema(request, apiConfig);
});

ipcMain.handle('get-sed-batch-stats', async (event, request: sdk.SuggestedEntitlementDescriptionV2025ApiGetSedBatchStatsRequest) => {
    return await sdkWrapper.getSedBatchStats(request, apiConfig);
});
ipcMain.handle('get-sed-batches', async (event, ) => {
    return await sdkWrapper.getSedBatches(apiConfig);
});
ipcMain.handle('list-seds', async (event, request: sdk.SuggestedEntitlementDescriptionV2025ApiListSedsRequest = {}) => {
    return await sdkWrapper.listSeds(request, apiConfig);
});
ipcMain.handle('patch-sed', async (event, request: sdk.SuggestedEntitlementDescriptionV2025ApiPatchSedRequest) => {
    return await sdkWrapper.patchSed(request, apiConfig);
});
ipcMain.handle('submit-sed-approval', async (event, request: sdk.SuggestedEntitlementDescriptionV2025ApiSubmitSedApprovalRequest) => {
    return await sdkWrapper.submitSedApproval(request, apiConfig);
});
ipcMain.handle('submit-sed-assignment', async (event, request: sdk.SuggestedEntitlementDescriptionV2025ApiSubmitSedAssignmentRequest) => {
    return await sdkWrapper.submitSedAssignment(request, apiConfig);
});
ipcMain.handle('submit-sed-batch-request', async (event, request: sdk.SuggestedEntitlementDescriptionV2025ApiSubmitSedBatchRequestRequest = {}) => {
    return await sdkWrapper.submitSedBatchRequest(request, apiConfig);
});

ipcMain.handle('delete-tagged-object', async (event, request: sdk.TaggedObjectsV2025ApiDeleteTaggedObjectRequest) => {
    return await sdkWrapper.deleteTaggedObject(request, apiConfig);
});
ipcMain.handle('delete-tags-to-many-object', async (event, request: sdk.TaggedObjectsV2025ApiDeleteTagsToManyObjectRequest) => {
    return await sdkWrapper.deleteTagsToManyObject(request, apiConfig);
});
ipcMain.handle('get-tagged-object', async (event, request: sdk.TaggedObjectsV2025ApiGetTaggedObjectRequest) => {
    return await sdkWrapper.getTaggedObject(request, apiConfig);
});
ipcMain.handle('list-tagged-objects', async (event, request: sdk.TaggedObjectsV2025ApiListTaggedObjectsRequest = {}) => {
    return await sdkWrapper.listTaggedObjects(request, apiConfig);
});
ipcMain.handle('list-tagged-objects-by-type', async (event, request: sdk.TaggedObjectsV2025ApiListTaggedObjectsByTypeRequest) => {
    return await sdkWrapper.listTaggedObjectsByType(request, apiConfig);
});
ipcMain.handle('put-tagged-object', async (event, request: sdk.TaggedObjectsV2025ApiPutTaggedObjectRequest) => {
    return await sdkWrapper.putTaggedObject(request, apiConfig);
});
ipcMain.handle('set-tag-to-object', async (event, request: sdk.TaggedObjectsV2025ApiSetTagToObjectRequest) => {
    return await sdkWrapper.setTagToObject(request, apiConfig);
});
ipcMain.handle('set-tags-to-many-objects', async (event, request: sdk.TaggedObjectsV2025ApiSetTagsToManyObjectsRequest) => {
    return await sdkWrapper.setTagsToManyObjects(request, apiConfig);
});

ipcMain.handle('get-pending-task-headers', async (event, request: sdk.TaskManagementV2025ApiGetPendingTaskHeadersRequest) => {
    return await sdkWrapper.getPendingTaskHeaders(request, apiConfig);
});
ipcMain.handle('get-pending-tasks', async (event, request: sdk.TaskManagementV2025ApiGetPendingTasksRequest = {}) => {
    return await sdkWrapper.getPendingTasks(request, apiConfig);
});
ipcMain.handle('get-task-status', async (event, request: sdk.TaskManagementV2025ApiGetTaskStatusRequest) => {
    return await sdkWrapper.getTaskStatus(request, apiConfig);
});
ipcMain.handle('get-task-status-list', async (event, request: sdk.TaskManagementV2025ApiGetTaskStatusListRequest = {}) => {
    return await sdkWrapper.getTaskStatusList(request, apiConfig);
});
ipcMain.handle('update-task-status', async (event, request: sdk.TaskManagementV2025ApiUpdateTaskStatusRequest) => {
    return await sdkWrapper.updateTaskStatus(request, apiConfig);
});

ipcMain.handle('get-tenant', async (event, ) => {
    return await sdkWrapper.getTenant(apiConfig);
});

ipcMain.handle('get-tenant-context', async (event, request: sdk.TenantContextV2025ApiGetTenantContextRequest = {}) => {
    return await sdkWrapper.getTenantContext(request, apiConfig);
});
ipcMain.handle('patch-tenant-context', async (event, request: sdk.TenantContextV2025ApiPatchTenantContextRequest) => {
    return await sdkWrapper.patchTenantContext(request, apiConfig);
});

ipcMain.handle('create-transform', async (event, request: sdk.TransformsV2025ApiCreateTransformRequest) => {
    return await sdkWrapper.createTransform(request, apiConfig);
});
ipcMain.handle('delete-transform', async (event, request: sdk.TransformsV2025ApiDeleteTransformRequest) => {
    return await sdkWrapper.deleteTransform(request, apiConfig);
});
ipcMain.handle('get-transform', async (event, request: sdk.TransformsV2025ApiGetTransformRequest) => {
    return await sdkWrapper.getTransform(request, apiConfig);
});
ipcMain.handle('list-transforms', async (event, request: sdk.TransformsV2025ApiListTransformsRequest = {}) => {
    return await sdkWrapper.listTransforms(request, apiConfig);
});
ipcMain.handle('update-transform', async (event, request: sdk.TransformsV2025ApiUpdateTransformRequest) => {
    return await sdkWrapper.updateTransform(request, apiConfig);
});

ipcMain.handle('complete-trigger-invocation', async (event, request: sdk.TriggersV2025ApiCompleteTriggerInvocationRequest) => {
    return await sdkWrapper.completeTriggerInvocation(request, apiConfig);
});
ipcMain.handle('create-subscription', async (event, request: sdk.TriggersV2025ApiCreateSubscriptionRequest) => {
    return await sdkWrapper.createSubscription(request, apiConfig);
});
ipcMain.handle('delete-subscription', async (event, request: sdk.TriggersV2025ApiDeleteSubscriptionRequest) => {
    return await sdkWrapper.deleteSubscription(request, apiConfig);
});
ipcMain.handle('list-subscriptions', async (event, request: sdk.TriggersV2025ApiListSubscriptionsRequest) => {
    return await sdkWrapper.listSubscriptions(request, apiConfig);
});
ipcMain.handle('list-trigger-invocation-status', async (event, request: sdk.TriggersV2025ApiListTriggerInvocationStatusRequest = {}) => {
    return await sdkWrapper.listTriggerInvocationStatus(request, apiConfig);
});
ipcMain.handle('list-triggers', async (event, request: sdk.TriggersV2025ApiListTriggersRequest = {}) => {
    return await sdkWrapper.listTriggers(request, apiConfig);
});
ipcMain.handle('patch-subscription', async (event, request: sdk.TriggersV2025ApiPatchSubscriptionRequest) => {
    return await sdkWrapper.patchSubscription(request, apiConfig);
});
ipcMain.handle('start-test-trigger-invocation', async (event, request: sdk.TriggersV2025ApiStartTestTriggerInvocationRequest) => {
    return await sdkWrapper.startTestTriggerInvocation(request, apiConfig);
});
ipcMain.handle('test-subscription-filter', async (event, request: sdk.TriggersV2025ApiTestSubscriptionFilterRequest) => {
    return await sdkWrapper.testSubscriptionFilter(request, apiConfig);
});
ipcMain.handle('update-subscription', async (event, request: sdk.TriggersV2025ApiUpdateSubscriptionRequest) => {
    return await sdkWrapper.updateSubscription(request, apiConfig);
});

ipcMain.handle('get-tenant-ui-metadata', async (event, request: sdk.UIMetadataV2025ApiGetTenantUiMetadataRequest = {}) => {
    return await sdkWrapper.getTenantUiMetadata(request, apiConfig);
});
ipcMain.handle('set-tenant-ui-metadata', async (event, request: sdk.UIMetadataV2025ApiSetTenantUiMetadataRequest) => {
    return await sdkWrapper.setTenantUiMetadata(request, apiConfig);
});

ipcMain.handle('create-vendor-connector-mapping', async (event, request: sdk.VendorConnectorMappingsV2025ApiCreateVendorConnectorMappingRequest) => {
    return await sdkWrapper.createVendorConnectorMapping(request, apiConfig);
});
ipcMain.handle('delete-vendor-connector-mapping', async (event, request: sdk.VendorConnectorMappingsV2025ApiDeleteVendorConnectorMappingRequest) => {
    return await sdkWrapper.deleteVendorConnectorMapping(request, apiConfig);
});
ipcMain.handle('get-vendor-connector-mappings', async (event, ) => {
    return await sdkWrapper.getVendorConnectorMappings(apiConfig);
});

ipcMain.handle('approve-approval-item', async (event, request: sdk.WorkItemsV2025ApiApproveApprovalItemRequest) => {
    return await sdkWrapper.approveApprovalItem(request, apiConfig);
});
ipcMain.handle('approve-approval-items-in-bulk', async (event, request: sdk.WorkItemsV2025ApiApproveApprovalItemsInBulkRequest) => {
    return await sdkWrapper.approveApprovalItemsInBulk(request, apiConfig);
});
ipcMain.handle('complete-work-item', async (event, request: sdk.WorkItemsV2025ApiCompleteWorkItemRequest) => {
    return await sdkWrapper.completeWorkItem(request, apiConfig);
});
ipcMain.handle('forward-work-item', async (event, request: sdk.WorkItemsV2025ApiForwardWorkItemRequest) => {
    return await sdkWrapper.forwardWorkItem(request, apiConfig);
});
ipcMain.handle('get-completed-work-items', async (event, request: sdk.WorkItemsV2025ApiGetCompletedWorkItemsRequest = {}) => {
    return await sdkWrapper.getCompletedWorkItems(request, apiConfig);
});
ipcMain.handle('get-count-completed-work-items', async (event, request: sdk.WorkItemsV2025ApiGetCountCompletedWorkItemsRequest = {}) => {
    return await sdkWrapper.getCountCompletedWorkItems(request, apiConfig);
});
ipcMain.handle('get-count-work-items', async (event, request: sdk.WorkItemsV2025ApiGetCountWorkItemsRequest = {}) => {
    return await sdkWrapper.getCountWorkItems(request, apiConfig);
});
ipcMain.handle('get-work-item', async (event, request: sdk.WorkItemsV2025ApiGetWorkItemRequest) => {
    return await sdkWrapper.getWorkItem(request, apiConfig);
});
ipcMain.handle('get-work-items-summary', async (event, request: sdk.WorkItemsV2025ApiGetWorkItemsSummaryRequest = {}) => {
    return await sdkWrapper.getWorkItemsSummary(request, apiConfig);
});
ipcMain.handle('list-work-items', async (event, request: sdk.WorkItemsV2025ApiListWorkItemsRequest = {}) => {
    return await sdkWrapper.listWorkItems(request, apiConfig);
});
ipcMain.handle('reject-approval-item', async (event, request: sdk.WorkItemsV2025ApiRejectApprovalItemRequest) => {
    return await sdkWrapper.rejectApprovalItem(request, apiConfig);
});
ipcMain.handle('reject-approval-items-in-bulk', async (event, request: sdk.WorkItemsV2025ApiRejectApprovalItemsInBulkRequest) => {
    return await sdkWrapper.rejectApprovalItemsInBulk(request, apiConfig);
});
ipcMain.handle('submit-account-selection', async (event, request: sdk.WorkItemsV2025ApiSubmitAccountSelectionRequest) => {
    return await sdkWrapper.submitAccountSelection(request, apiConfig);
});

ipcMain.handle('create-reassignment-configuration', async (event, request: sdk.WorkReassignmentV2025ApiCreateReassignmentConfigurationRequest) => {
    return await sdkWrapper.createReassignmentConfiguration(request, apiConfig);
});
ipcMain.handle('delete-reassignment-configuration', async (event, request: sdk.WorkReassignmentV2025ApiDeleteReassignmentConfigurationRequest) => {
    return await sdkWrapper.deleteReassignmentConfiguration(request, apiConfig);
});
ipcMain.handle('get-evaluate-reassignment-configuration', async (event, request: sdk.WorkReassignmentV2025ApiGetEvaluateReassignmentConfigurationRequest) => {
    return await sdkWrapper.getEvaluateReassignmentConfiguration(request, apiConfig);
});
ipcMain.handle('get-reassignment-config-types', async (event, request: sdk.WorkReassignmentV2025ApiGetReassignmentConfigTypesRequest = {}) => {
    return await sdkWrapper.getReassignmentConfigTypes(request, apiConfig);
});
ipcMain.handle('get-reassignment-configuration', async (event, request: sdk.WorkReassignmentV2025ApiGetReassignmentConfigurationRequest) => {
    return await sdkWrapper.getReassignmentConfiguration(request, apiConfig);
});
ipcMain.handle('get-tenant-config-configuration', async (event, request: sdk.WorkReassignmentV2025ApiGetTenantConfigConfigurationRequest = {}) => {
    return await sdkWrapper.getTenantConfigConfiguration(request, apiConfig);
});
ipcMain.handle('list-reassignment-configurations', async (event, request: sdk.WorkReassignmentV2025ApiListReassignmentConfigurationsRequest = {}) => {
    return await sdkWrapper.listReassignmentConfigurations(request, apiConfig);
});
ipcMain.handle('put-reassignment-config', async (event, request: sdk.WorkReassignmentV2025ApiPutReassignmentConfigRequest) => {
    return await sdkWrapper.putReassignmentConfig(request, apiConfig);
});
ipcMain.handle('put-tenant-configuration', async (event, request: sdk.WorkReassignmentV2025ApiPutTenantConfigurationRequest) => {
    return await sdkWrapper.putTenantConfiguration(request, apiConfig);
});

ipcMain.handle('cancel-workflow-execution', async (event, request: sdk.WorkflowsV2025ApiCancelWorkflowExecutionRequest) => {
    return await sdkWrapper.cancelWorkflowExecution(request, apiConfig);
});
ipcMain.handle('create-external-execute-workflow', async (event, request: sdk.WorkflowsV2025ApiCreateExternalExecuteWorkflowRequest) => {
    return await sdkWrapper.createExternalExecuteWorkflow(request, apiConfig);
});
ipcMain.handle('create-workflow', async (event, request: sdk.WorkflowsV2025ApiCreateWorkflowRequest) => {
    return await sdkWrapper.createWorkflow(request, apiConfig);
});
ipcMain.handle('create-workflow-external-trigger', async (event, request: sdk.WorkflowsV2025ApiCreateWorkflowExternalTriggerRequest) => {
    return await sdkWrapper.createWorkflowExternalTrigger(request, apiConfig);
});
ipcMain.handle('delete-workflow', async (event, request: sdk.WorkflowsV2025ApiDeleteWorkflowRequest) => {
    return await sdkWrapper.deleteWorkflow(request, apiConfig);
});
ipcMain.handle('get-workflow', async (event, request: sdk.WorkflowsV2025ApiGetWorkflowRequest) => {
    return await sdkWrapper.getWorkflow(request, apiConfig);
});
ipcMain.handle('get-workflow-execution', async (event, request: sdk.WorkflowsV2025ApiGetWorkflowExecutionRequest) => {
    return await sdkWrapper.getWorkflowExecution(request, apiConfig);
});
ipcMain.handle('get-workflow-execution-history', async (event, request: sdk.WorkflowsV2025ApiGetWorkflowExecutionHistoryRequest) => {
    return await sdkWrapper.getWorkflowExecutionHistory(request, apiConfig);
});
ipcMain.handle('get-workflow-executions', async (event, request: sdk.WorkflowsV2025ApiGetWorkflowExecutionsRequest) => {
    return await sdkWrapper.getWorkflowExecutions(request, apiConfig);
});
ipcMain.handle('list-complete-workflow-library', async (event, request: sdk.WorkflowsV2025ApiListCompleteWorkflowLibraryRequest = {}) => {
    return await sdkWrapper.listCompleteWorkflowLibrary(request, apiConfig);
});
ipcMain.handle('list-workflow-library-actions', async (event, request: sdk.WorkflowsV2025ApiListWorkflowLibraryActionsRequest = {}) => {
    return await sdkWrapper.listWorkflowLibraryActions(request, apiConfig);
});
ipcMain.handle('list-workflow-library-operators', async (event, ) => {
    return await sdkWrapper.listWorkflowLibraryOperators(apiConfig);
});
ipcMain.handle('list-workflow-library-triggers', async (event, request: sdk.WorkflowsV2025ApiListWorkflowLibraryTriggersRequest = {}) => {
    return await sdkWrapper.listWorkflowLibraryTriggers(request, apiConfig);
});
ipcMain.handle('list-workflows', async (event, ) => {
    return await sdkWrapper.listWorkflows(apiConfig);
});
ipcMain.handle('patch-workflow', async (event, request: sdk.WorkflowsV2025ApiPatchWorkflowRequest) => {
    return await sdkWrapper.patchWorkflow(request, apiConfig);
});
ipcMain.handle('put-workflow', async (event, request: sdk.WorkflowsV2025ApiPutWorkflowRequest) => {
    return await sdkWrapper.putWorkflow(request, apiConfig);
});
ipcMain.handle('test-external-execute-workflow', async (event, request: sdk.WorkflowsV2025ApiTestExternalExecuteWorkflowRequest) => {
    return await sdkWrapper.testExternalExecuteWorkflow(request, apiConfig);
});
ipcMain.handle('test-workflow', async (event, request: sdk.WorkflowsV2025ApiTestWorkflowRequest) => {
    return await sdkWrapper.testWorkflow(request, apiConfig);
});


}