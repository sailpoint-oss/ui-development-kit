import { Injectable } from '@angular/core';
import { AxiosResponse } from 'axios';
import * as sdk from 'sailpoint-api-client';
declare const window: any;
@Injectable({
  providedIn: 'root'
})
export class SailPointSDKService {
  private electronAPI: any;

  constructor() {
    if (window.electronAPI) {
      this.electronAPI = window.electronAPI;
    } else {
      console.error('Electron API is not available');
    }
  }


getAccessModelMetadataAttribute(requestParameters: sdk.AccessModelMetadataV2025ApiGetAccessModelMetadataAttributeRequest): Promise<AxiosResponse<sdk.AttributeDTOV2025, any>> {
    return this.electronAPI.getAccessModelMetadataAttribute(requestParameters);
}
getAccessModelMetadataAttributeValue(requestParameters: sdk.AccessModelMetadataV2025ApiGetAccessModelMetadataAttributeValueRequest): Promise<AxiosResponse<sdk.AttributeValueDTOV2025, any>> {
    return this.electronAPI.getAccessModelMetadataAttributeValue(requestParameters);
}
listAccessModelMetadataAttribute(requestParameters: sdk.AccessModelMetadataV2025ApiListAccessModelMetadataAttributeRequest = {}): Promise<AxiosResponse<Array<sdk.AttributeDTOV2025>, any>> {
    return this.electronAPI.listAccessModelMetadataAttribute(requestParameters);
}
listAccessModelMetadataAttributeValue(requestParameters: sdk.AccessModelMetadataV2025ApiListAccessModelMetadataAttributeValueRequest): Promise<AxiosResponse<Array<sdk.AttributeValueDTOV2025>, any>> {
    return this.electronAPI.listAccessModelMetadataAttributeValue(requestParameters);
}

createAccessProfile(requestParameters: sdk.AccessProfilesV2025ApiCreateAccessProfileRequest): Promise<AxiosResponse<sdk.AccessProfileV2025, any>> {
    return this.electronAPI.createAccessProfile(requestParameters);
}
deleteAccessProfile(requestParameters: sdk.AccessProfilesV2025ApiDeleteAccessProfileRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteAccessProfile(requestParameters);
}
deleteAccessProfilesInBulk(requestParameters: sdk.AccessProfilesV2025ApiDeleteAccessProfilesInBulkRequest): Promise<AxiosResponse<sdk.AccessProfileBulkDeleteResponseV2025, any>> {
    return this.electronAPI.deleteAccessProfilesInBulk(requestParameters);
}
getAccessProfile(requestParameters: sdk.AccessProfilesV2025ApiGetAccessProfileRequest): Promise<AxiosResponse<sdk.AccessProfileV2025, any>> {
    return this.electronAPI.getAccessProfile(requestParameters);
}
getAccessProfileEntitlements(requestParameters: sdk.AccessProfilesV2025ApiGetAccessProfileEntitlementsRequest): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>> {
    return this.electronAPI.getAccessProfileEntitlements(requestParameters);
}
listAccessProfiles(requestParameters: sdk.AccessProfilesV2025ApiListAccessProfilesRequest = {}): Promise<AxiosResponse<Array<sdk.AccessProfileV2025>, any>> {
    return this.electronAPI.listAccessProfiles(requestParameters);
}
patchAccessProfile(requestParameters: sdk.AccessProfilesV2025ApiPatchAccessProfileRequest): Promise<AxiosResponse<sdk.AccessProfileV2025, any>> {
    return this.electronAPI.patchAccessProfile(requestParameters);
}
updateAccessProfilesInBulk(requestParameters: sdk.AccessProfilesV2025ApiUpdateAccessProfilesInBulkRequest): Promise<AxiosResponse<Array<sdk.AccessProfileUpdateItemV2025>, any>> {
    return this.electronAPI.updateAccessProfilesInBulk(requestParameters);
}

approveAccessRequest(requestParameters: sdk.AccessRequestApprovalsV2025ApiApproveAccessRequestRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.approveAccessRequest(requestParameters);
}
forwardAccessRequest(requestParameters: sdk.AccessRequestApprovalsV2025ApiForwardAccessRequestRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.forwardAccessRequest(requestParameters);
}
getAccessRequestApprovalSummary(requestParameters: sdk.AccessRequestApprovalsV2025ApiGetAccessRequestApprovalSummaryRequest = {}): Promise<AxiosResponse<sdk.ApprovalSummaryV2025, any>> {
    return this.electronAPI.getAccessRequestApprovalSummary(requestParameters);
}
listAccessRequestApprovers(requestParameters: sdk.AccessRequestApprovalsV2025ApiListAccessRequestApproversRequest): Promise<AxiosResponse<Array<sdk.AccessRequestApproversListResponseV2025>, any>> {
    return this.electronAPI.listAccessRequestApprovers(requestParameters);
}
listCompletedApprovals(requestParameters: sdk.AccessRequestApprovalsV2025ApiListCompletedApprovalsRequest = {}): Promise<AxiosResponse<Array<sdk.CompletedApprovalV2025>, any>> {
    return this.electronAPI.listCompletedApprovals(requestParameters);
}
listPendingApprovals(requestParameters: sdk.AccessRequestApprovalsV2025ApiListPendingApprovalsRequest = {}): Promise<AxiosResponse<Array<sdk.PendingApprovalV2025>, any>> {
    return this.electronAPI.listPendingApprovals(requestParameters);
}
rejectAccessRequest(requestParameters: sdk.AccessRequestApprovalsV2025ApiRejectAccessRequestRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.rejectAccessRequest(requestParameters);
}

getAccessRequestIdentityMetrics(requestParameters: sdk.AccessRequestIdentityMetricsV2025ApiGetAccessRequestIdentityMetricsRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.getAccessRequestIdentityMetrics(requestParameters);
}

approveBulkAccessRequest(requestParameters: sdk.AccessRequestsV2025ApiApproveBulkAccessRequestRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.approveBulkAccessRequest(requestParameters);
}
cancelAccessRequest(requestParameters: sdk.AccessRequestsV2025ApiCancelAccessRequestRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.cancelAccessRequest(requestParameters);
}
cancelAccessRequestInBulk(requestParameters: sdk.AccessRequestsV2025ApiCancelAccessRequestInBulkRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.cancelAccessRequestInBulk(requestParameters);
}
closeAccessRequest(requestParameters: sdk.AccessRequestsV2025ApiCloseAccessRequestRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.closeAccessRequest(requestParameters);
}
createAccessRequest(requestParameters: sdk.AccessRequestsV2025ApiCreateAccessRequestRequest): Promise<AxiosResponse<sdk.AccessRequestResponseV2025, any>> {
    return this.electronAPI.createAccessRequest(requestParameters);
}
getAccessRequestConfig(): Promise<AxiosResponse<sdk.AccessRequestConfigV2025, any>> {
    return this.electronAPI.getAccessRequestConfig();
}
getEntitlementDetailsForIdentity(requestParameters: sdk.AccessRequestsV2025ApiGetEntitlementDetailsForIdentityRequest): Promise<AxiosResponse<sdk.IdentityEntitlementDetailsV2025, any>> {
    return this.electronAPI.getEntitlementDetailsForIdentity(requestParameters);
}
listAccessRequestStatus(requestParameters: sdk.AccessRequestsV2025ApiListAccessRequestStatusRequest = {}): Promise<AxiosResponse<Array<sdk.RequestedItemStatusV2025>, any>> {
    return this.electronAPI.listAccessRequestStatus(requestParameters);
}
listAdministratorsAccessRequestStatus(requestParameters: sdk.AccessRequestsV2025ApiListAdministratorsAccessRequestStatusRequest = {}): Promise<AxiosResponse<Array<sdk.AccessRequestAdminItemStatusV2025>, any>> {
    return this.electronAPI.listAdministratorsAccessRequestStatus(requestParameters);
}
loadAccountSelections(requestParameters: sdk.AccessRequestsV2025ApiLoadAccountSelectionsRequest): Promise<AxiosResponse<sdk.AccountsSelectionResponseV2025, any>> {
    return this.electronAPI.loadAccountSelections(requestParameters);
}
setAccessRequestConfig(requestParameters: sdk.AccessRequestsV2025ApiSetAccessRequestConfigRequest): Promise<AxiosResponse<sdk.AccessRequestConfigV2025, any>> {
    return this.electronAPI.setAccessRequestConfig(requestParameters);
}

getAccountActivity(requestParameters: sdk.AccountActivitiesV2025ApiGetAccountActivityRequest): Promise<AxiosResponse<sdk.AccountActivityV2025, any>> {
    return this.electronAPI.getAccountActivity(requestParameters);
}
listAccountActivities(requestParameters: sdk.AccountActivitiesV2025ApiListAccountActivitiesRequest = {}): Promise<AxiosResponse<Array<sdk.AccountActivityV2025>, any>> {
    return this.electronAPI.listAccountActivities(requestParameters);
}

getAccountAggregationStatus(requestParameters: sdk.AccountAggregationsV2025ApiGetAccountAggregationStatusRequest): Promise<AxiosResponse<sdk.AccountAggregationStatusV2025, any>> {
    return this.electronAPI.getAccountAggregationStatus(requestParameters);
}

getUsagesByAccountId(requestParameters: sdk.AccountUsagesV2025ApiGetUsagesByAccountIdRequest): Promise<AxiosResponse<Array<sdk.AccountUsageV2025>, any>> {
    return this.electronAPI.getUsagesByAccountId(requestParameters);
}

createAccount(requestParameters: sdk.AccountsV2025ApiCreateAccountRequest): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>> {
    return this.electronAPI.createAccount(requestParameters);
}
deleteAccount(requestParameters: sdk.AccountsV2025ApiDeleteAccountRequest): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>> {
    return this.electronAPI.deleteAccount(requestParameters);
}
deleteAccountAsync(requestParameters: sdk.AccountsV2025ApiDeleteAccountAsyncRequest): Promise<AxiosResponse<sdk.TaskResultDtoV2025, any>> {
    return this.electronAPI.deleteAccountAsync(requestParameters);
}
disableAccount(requestParameters: sdk.AccountsV2025ApiDisableAccountRequest): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>> {
    return this.electronAPI.disableAccount(requestParameters);
}
disableAccountForIdentity(requestParameters: sdk.AccountsV2025ApiDisableAccountForIdentityRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.disableAccountForIdentity(requestParameters);
}
disableAccountsForIdentities(requestParameters: sdk.AccountsV2025ApiDisableAccountsForIdentitiesRequest): Promise<AxiosResponse<Array<sdk.BulkIdentitiesAccountsResponseV2025>, any>> {
    return this.electronAPI.disableAccountsForIdentities(requestParameters);
}
enableAccount(requestParameters: sdk.AccountsV2025ApiEnableAccountRequest): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>> {
    return this.electronAPI.enableAccount(requestParameters);
}
enableAccountForIdentity(requestParameters: sdk.AccountsV2025ApiEnableAccountForIdentityRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.enableAccountForIdentity(requestParameters);
}
enableAccountsForIdentities(requestParameters: sdk.AccountsV2025ApiEnableAccountsForIdentitiesRequest): Promise<AxiosResponse<Array<sdk.BulkIdentitiesAccountsResponseV2025>, any>> {
    return this.electronAPI.enableAccountsForIdentities(requestParameters);
}
getAccount(requestParameters: sdk.AccountsV2025ApiGetAccountRequest): Promise<AxiosResponse<sdk.AccountV2025, any>> {
    return this.electronAPI.getAccount(requestParameters);
}
getAccountEntitlements(requestParameters: sdk.AccountsV2025ApiGetAccountEntitlementsRequest): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>> {
    return this.electronAPI.getAccountEntitlements(requestParameters);
}
listAccounts(requestParameters: sdk.AccountsV2025ApiListAccountsRequest = {}): Promise<AxiosResponse<Array<sdk.AccountV2025>, any>> {
    return this.electronAPI.listAccounts(requestParameters);
}
putAccount(requestParameters: sdk.AccountsV2025ApiPutAccountRequest): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>> {
    return this.electronAPI.putAccount(requestParameters);
}
submitReloadAccount(requestParameters: sdk.AccountsV2025ApiSubmitReloadAccountRequest): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>> {
    return this.electronAPI.submitReloadAccount(requestParameters);
}
unlockAccount(requestParameters: sdk.AccountsV2025ApiUnlockAccountRequest): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>> {
    return this.electronAPI.unlockAccount(requestParameters);
}
updateAccount(requestParameters: sdk.AccountsV2025ApiUpdateAccountRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.updateAccount(requestParameters);
}

getDiscoveredApplications(requestParameters: sdk.ApplicationDiscoveryV2025ApiGetDiscoveredApplicationsRequest = {}): Promise<AxiosResponse<Array<sdk.GetDiscoveredApplications200ResponseInnerV2025>, any>> {
    return this.electronAPI.getDiscoveredApplications(requestParameters);
}
getManualDiscoverApplicationsCsvTemplate(): Promise<AxiosResponse<sdk.ManualDiscoverApplicationsTemplateV2025, any>> {
    return this.electronAPI.getManualDiscoverApplicationsCsvTemplate();
}
sendManualDiscoverApplicationsCsvTemplate(requestParameters: sdk.ApplicationDiscoveryV2025ApiSendManualDiscoverApplicationsCsvTemplateRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.sendManualDiscoverApplicationsCsvTemplate(requestParameters);
}

getApproval(requestParameters: sdk.ApprovalsV2025ApiGetApprovalRequest): Promise<AxiosResponse<sdk.ApprovalV2025, any>> {
    return this.electronAPI.getApproval(requestParameters);
}
getApprovals(requestParameters: sdk.ApprovalsV2025ApiGetApprovalsRequest = {}): Promise<AxiosResponse<Array<sdk.ApprovalV2025>, any>> {
    return this.electronAPI.getApprovals(requestParameters);
}

createSourceApp(requestParameters: sdk.AppsV2025ApiCreateSourceAppRequest): Promise<AxiosResponse<sdk.SourceAppV2025, any>> {
    return this.electronAPI.createSourceApp(requestParameters);
}
deleteAccessProfilesFromSourceAppByBulk(requestParameters: sdk.AppsV2025ApiDeleteAccessProfilesFromSourceAppByBulkRequest): Promise<AxiosResponse<Array<sdk.AccessProfileDetailsV2025>, any>> {
    return this.electronAPI.deleteAccessProfilesFromSourceAppByBulk(requestParameters);
}
deleteSourceApp(requestParameters: sdk.AppsV2025ApiDeleteSourceAppRequest): Promise<AxiosResponse<sdk.SourceAppV2025, any>> {
    return this.electronAPI.deleteSourceApp(requestParameters);
}
getSourceApp(requestParameters: sdk.AppsV2025ApiGetSourceAppRequest): Promise<AxiosResponse<sdk.SourceAppV2025, any>> {
    return this.electronAPI.getSourceApp(requestParameters);
}
listAccessProfilesForSourceApp(requestParameters: sdk.AppsV2025ApiListAccessProfilesForSourceAppRequest): Promise<AxiosResponse<Array<sdk.AccessProfileDetailsV2025>, any>> {
    return this.electronAPI.listAccessProfilesForSourceApp(requestParameters);
}
listAllSourceApp(requestParameters: sdk.AppsV2025ApiListAllSourceAppRequest = {}): Promise<AxiosResponse<Array<sdk.SourceAppV2025>, any>> {
    return this.electronAPI.listAllSourceApp(requestParameters);
}
listAllUserApps(requestParameters: sdk.AppsV2025ApiListAllUserAppsRequest): Promise<AxiosResponse<Array<sdk.UserAppV2025>, any>> {
    return this.electronAPI.listAllUserApps(requestParameters);
}
listAssignedSourceApp(requestParameters: sdk.AppsV2025ApiListAssignedSourceAppRequest = {}): Promise<AxiosResponse<Array<sdk.SourceAppV2025>, any>> {
    return this.electronAPI.listAssignedSourceApp(requestParameters);
}
listAvailableAccountsForUserApp(requestParameters: sdk.AppsV2025ApiListAvailableAccountsForUserAppRequest): Promise<AxiosResponse<Array<sdk.AppAccountDetailsV2025>, any>> {
    return this.electronAPI.listAvailableAccountsForUserApp(requestParameters);
}
listAvailableSourceApps(requestParameters: sdk.AppsV2025ApiListAvailableSourceAppsRequest = {}): Promise<AxiosResponse<Array<sdk.SourceAppV2025>, any>> {
    return this.electronAPI.listAvailableSourceApps(requestParameters);
}
listOwnedUserApps(requestParameters: sdk.AppsV2025ApiListOwnedUserAppsRequest = {}): Promise<AxiosResponse<Array<sdk.UserAppV2025>, any>> {
    return this.electronAPI.listOwnedUserApps(requestParameters);
}
patchSourceApp(requestParameters: sdk.AppsV2025ApiPatchSourceAppRequest): Promise<AxiosResponse<sdk.SourceAppPatchDtoV2025, any>> {
    return this.electronAPI.patchSourceApp(requestParameters);
}
patchUserApp(requestParameters: sdk.AppsV2025ApiPatchUserAppRequest): Promise<AxiosResponse<sdk.UserAppV2025, any>> {
    return this.electronAPI.patchUserApp(requestParameters);
}
updateSourceAppsInBulk(requestParameters: sdk.AppsV2025ApiUpdateSourceAppsInBulkRequest = {}): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.updateSourceAppsInBulk(requestParameters);
}

getProfileConfig(requestParameters: sdk.AuthProfileV2025ApiGetProfileConfigRequest): Promise<AxiosResponse<sdk.AuthProfileV2025, any>> {
    return this.electronAPI.getProfileConfig(requestParameters);
}
getProfileConfigList(requestParameters: sdk.AuthProfileV2025ApiGetProfileConfigListRequest = {}): Promise<AxiosResponse<Array<sdk.AuthProfileSummaryV2025>, any>> {
    return this.electronAPI.getProfileConfigList(requestParameters);
}
patchProfileConfig(requestParameters: sdk.AuthProfileV2025ApiPatchProfileConfigRequest): Promise<AxiosResponse<sdk.AuthProfileV2025, any>> {
    return this.electronAPI.patchProfileConfig(requestParameters);
}

getAuthUser(requestParameters: sdk.AuthUsersV2025ApiGetAuthUserRequest): Promise<AxiosResponse<sdk.AuthUserV2025, any>> {
    return this.electronAPI.getAuthUser(requestParameters);
}
patchAuthUser(requestParameters: sdk.AuthUsersV2025ApiPatchAuthUserRequest): Promise<AxiosResponse<sdk.AuthUserV2025, any>> {
    return this.electronAPI.patchAuthUser(requestParameters);
}

createBrandingItem(requestParameters: sdk.BrandingV2025ApiCreateBrandingItemRequest): Promise<AxiosResponse<sdk.BrandingItemV2025, any>> {
    return this.electronAPI.createBrandingItem(requestParameters);
}
deleteBranding(requestParameters: sdk.BrandingV2025ApiDeleteBrandingRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteBranding(requestParameters);
}
getBranding(requestParameters: sdk.BrandingV2025ApiGetBrandingRequest): Promise<AxiosResponse<sdk.BrandingItemV2025, any>> {
    return this.electronAPI.getBranding(requestParameters);
}
getBrandingList(): Promise<AxiosResponse<Array<sdk.BrandingItemV2025>, any>> {
    return this.electronAPI.getBrandingList();
}
setBrandingItem(requestParameters: sdk.BrandingV2025ApiSetBrandingItemRequest): Promise<AxiosResponse<sdk.BrandingItemV2025, any>> {
    return this.electronAPI.setBrandingItem(requestParameters);
}

createCampaignFilter(requestParameters: sdk.CertificationCampaignFiltersV2025ApiCreateCampaignFilterRequest): Promise<AxiosResponse<sdk.CampaignFilterDetailsV2025, any>> {
    return this.electronAPI.createCampaignFilter(requestParameters);
}
deleteCampaignFilters(requestParameters: sdk.CertificationCampaignFiltersV2025ApiDeleteCampaignFiltersRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteCampaignFilters(requestParameters);
}
getCampaignFilterById(requestParameters: sdk.CertificationCampaignFiltersV2025ApiGetCampaignFilterByIdRequest): Promise<AxiosResponse<sdk.CampaignFilterDetailsV2025, any>> {
    return this.electronAPI.getCampaignFilterById(requestParameters);
}
listCampaignFilters(requestParameters: sdk.CertificationCampaignFiltersV2025ApiListCampaignFiltersRequest = {}): Promise<AxiosResponse<sdk.ListCampaignFilters200ResponseV2025, any>> {
    return this.electronAPI.listCampaignFilters(requestParameters);
}
updateCampaignFilter(requestParameters: sdk.CertificationCampaignFiltersV2025ApiUpdateCampaignFilterRequest): Promise<AxiosResponse<sdk.CampaignFilterDetailsV2025, any>> {
    return this.electronAPI.updateCampaignFilter(requestParameters);
}

completeCampaign(requestParameters: sdk.CertificationCampaignsV2025ApiCompleteCampaignRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.completeCampaign(requestParameters);
}
createCampaign(requestParameters: sdk.CertificationCampaignsV2025ApiCreateCampaignRequest): Promise<AxiosResponse<sdk.CampaignV2025, any>> {
    return this.electronAPI.createCampaign(requestParameters);
}
createCampaignTemplate(requestParameters: sdk.CertificationCampaignsV2025ApiCreateCampaignTemplateRequest): Promise<AxiosResponse<sdk.CampaignTemplateV2025, any>> {
    return this.electronAPI.createCampaignTemplate(requestParameters);
}
deleteCampaignTemplate(requestParameters: sdk.CertificationCampaignsV2025ApiDeleteCampaignTemplateRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteCampaignTemplate(requestParameters);
}
deleteCampaignTemplateSchedule(requestParameters: sdk.CertificationCampaignsV2025ApiDeleteCampaignTemplateScheduleRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteCampaignTemplateSchedule(requestParameters);
}
deleteCampaigns(requestParameters: sdk.CertificationCampaignsV2025ApiDeleteCampaignsRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.deleteCampaigns(requestParameters);
}
getActiveCampaigns(requestParameters: sdk.CertificationCampaignsV2025ApiGetActiveCampaignsRequest = {}): Promise<AxiosResponse<Array<sdk.GetActiveCampaigns200ResponseInnerV2025>, any>> {
    return this.electronAPI.getActiveCampaigns(requestParameters);
}
getCampaign(requestParameters: sdk.CertificationCampaignsV2025ApiGetCampaignRequest): Promise<AxiosResponse<sdk.GetCampaign200ResponseV2025, any>> {
    return this.electronAPI.getCampaign(requestParameters);
}
getCampaignReports(requestParameters: sdk.CertificationCampaignsV2025ApiGetCampaignReportsRequest): Promise<AxiosResponse<Array<sdk.CampaignReportV2025>, any>> {
    return this.electronAPI.getCampaignReports(requestParameters);
}
getCampaignReportsConfig(): Promise<AxiosResponse<sdk.CampaignReportsConfigV2025, any>> {
    return this.electronAPI.getCampaignReportsConfig();
}
getCampaignTemplate(requestParameters: sdk.CertificationCampaignsV2025ApiGetCampaignTemplateRequest): Promise<AxiosResponse<sdk.CampaignTemplateV2025, any>> {
    return this.electronAPI.getCampaignTemplate(requestParameters);
}
getCampaignTemplateSchedule(requestParameters: sdk.CertificationCampaignsV2025ApiGetCampaignTemplateScheduleRequest): Promise<AxiosResponse<sdk.ScheduleV2025, any>> {
    return this.electronAPI.getCampaignTemplateSchedule(requestParameters);
}
getCampaignTemplates(requestParameters: sdk.CertificationCampaignsV2025ApiGetCampaignTemplatesRequest = {}): Promise<AxiosResponse<Array<sdk.CampaignTemplateV2025>, any>> {
    return this.electronAPI.getCampaignTemplates(requestParameters);
}
move(requestParameters: sdk.CertificationCampaignsV2025ApiMoveRequest): Promise<AxiosResponse<sdk.CertificationTaskV2025, any>> {
    return this.electronAPI.move(requestParameters);
}
patchCampaignTemplate(requestParameters: sdk.CertificationCampaignsV2025ApiPatchCampaignTemplateRequest): Promise<AxiosResponse<sdk.CampaignTemplateV2025, any>> {
    return this.electronAPI.patchCampaignTemplate(requestParameters);
}
setCampaignReportsConfig(requestParameters: sdk.CertificationCampaignsV2025ApiSetCampaignReportsConfigRequest): Promise<AxiosResponse<sdk.CampaignReportsConfigV2025, any>> {
    return this.electronAPI.setCampaignReportsConfig(requestParameters);
}
setCampaignTemplateSchedule(requestParameters: sdk.CertificationCampaignsV2025ApiSetCampaignTemplateScheduleRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.setCampaignTemplateSchedule(requestParameters);
}
startCampaign(requestParameters: sdk.CertificationCampaignsV2025ApiStartCampaignRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.startCampaign(requestParameters);
}
startCampaignRemediationScan(requestParameters: sdk.CertificationCampaignsV2025ApiStartCampaignRemediationScanRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.startCampaignRemediationScan(requestParameters);
}
startCampaignReport(requestParameters: sdk.CertificationCampaignsV2025ApiStartCampaignReportRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.startCampaignReport(requestParameters);
}
startGenerateCampaignTemplate(requestParameters: sdk.CertificationCampaignsV2025ApiStartGenerateCampaignTemplateRequest): Promise<AxiosResponse<sdk.CampaignReferenceV2025, any>> {
    return this.electronAPI.startGenerateCampaignTemplate(requestParameters);
}
updateCampaign(requestParameters: sdk.CertificationCampaignsV2025ApiUpdateCampaignRequest): Promise<AxiosResponse<sdk.SlimCampaignV2025, any>> {
    return this.electronAPI.updateCampaign(requestParameters);
}

getIdentityAccessSummaries(requestParameters: sdk.CertificationSummariesV2025ApiGetIdentityAccessSummariesRequest): Promise<AxiosResponse<Array<sdk.AccessSummaryV2025>, any>> {
    return this.electronAPI.getIdentityAccessSummaries(requestParameters);
}
getIdentityDecisionSummary(requestParameters: sdk.CertificationSummariesV2025ApiGetIdentityDecisionSummaryRequest): Promise<AxiosResponse<sdk.IdentityCertDecisionSummaryV2025, any>> {
    return this.electronAPI.getIdentityDecisionSummary(requestParameters);
}
getIdentitySummaries(requestParameters: sdk.CertificationSummariesV2025ApiGetIdentitySummariesRequest): Promise<AxiosResponse<Array<sdk.CertificationIdentitySummaryV2025>, any>> {
    return this.electronAPI.getIdentitySummaries(requestParameters);
}
getIdentitySummary(requestParameters: sdk.CertificationSummariesV2025ApiGetIdentitySummaryRequest): Promise<AxiosResponse<sdk.CertificationIdentitySummaryV2025, any>> {
    return this.electronAPI.getIdentitySummary(requestParameters);
}

getCertificationTask(requestParameters: sdk.CertificationsV2025ApiGetCertificationTaskRequest): Promise<AxiosResponse<sdk.CertificationTaskV2025, any>> {
    return this.electronAPI.getCertificationTask(requestParameters);
}
getIdentityCertification(requestParameters: sdk.CertificationsV2025ApiGetIdentityCertificationRequest): Promise<AxiosResponse<sdk.IdentityCertificationDtoV2025, any>> {
    return this.electronAPI.getIdentityCertification(requestParameters);
}
getIdentityCertificationItemPermissions(requestParameters: sdk.CertificationsV2025ApiGetIdentityCertificationItemPermissionsRequest): Promise<AxiosResponse<Array<sdk.PermissionDtoV2025>, any>> {
    return this.electronAPI.getIdentityCertificationItemPermissions(requestParameters);
}
getPendingCertificationTasks(requestParameters: sdk.CertificationsV2025ApiGetPendingCertificationTasksRequest = {}): Promise<AxiosResponse<Array<sdk.CertificationTaskV2025>, any>> {
    return this.electronAPI.getPendingCertificationTasks(requestParameters);
}
listCertificationReviewers(requestParameters: sdk.CertificationsV2025ApiListCertificationReviewersRequest): Promise<AxiosResponse<Array<sdk.IdentityReferenceWithNameAndEmailV2025>, any>> {
    return this.electronAPI.listCertificationReviewers(requestParameters);
}
listIdentityAccessReviewItems(requestParameters: sdk.CertificationsV2025ApiListIdentityAccessReviewItemsRequest): Promise<AxiosResponse<Array<sdk.AccessReviewItemV2025>, any>> {
    return this.electronAPI.listIdentityAccessReviewItems(requestParameters);
}
listIdentityCertifications(requestParameters: sdk.CertificationsV2025ApiListIdentityCertificationsRequest = {}): Promise<AxiosResponse<Array<sdk.IdentityCertificationDtoV2025>, any>> {
    return this.electronAPI.listIdentityCertifications(requestParameters);
}
makeIdentityDecision(requestParameters: sdk.CertificationsV2025ApiMakeIdentityDecisionRequest): Promise<AxiosResponse<sdk.IdentityCertificationDtoV2025, any>> {
    return this.electronAPI.makeIdentityDecision(requestParameters);
}
reassignIdentityCertifications(requestParameters: sdk.CertificationsV2025ApiReassignIdentityCertificationsRequest): Promise<AxiosResponse<sdk.IdentityCertificationDtoV2025, any>> {
    return this.electronAPI.reassignIdentityCertifications(requestParameters);
}
signOffIdentityCertification(requestParameters: sdk.CertificationsV2025ApiSignOffIdentityCertificationRequest): Promise<AxiosResponse<sdk.IdentityCertificationDtoV2025, any>> {
    return this.electronAPI.signOffIdentityCertification(requestParameters);
}
submitReassignCertsAsync(requestParameters: sdk.CertificationsV2025ApiSubmitReassignCertsAsyncRequest): Promise<AxiosResponse<sdk.CertificationTaskV2025, any>> {
    return this.electronAPI.submitReassignCertsAsync(requestParameters);
}

createDeploy(requestParameters: sdk.ConfigurationHubV2025ApiCreateDeployRequest): Promise<AxiosResponse<sdk.DeployResponseV2025, any>> {
    return this.electronAPI.createDeploy(requestParameters);
}
createObjectMapping(requestParameters: sdk.ConfigurationHubV2025ApiCreateObjectMappingRequest): Promise<AxiosResponse<sdk.ObjectMappingResponseV2025, any>> {
    return this.electronAPI.createObjectMapping(requestParameters);
}
createObjectMappings(requestParameters: sdk.ConfigurationHubV2025ApiCreateObjectMappingsRequest): Promise<AxiosResponse<sdk.ObjectMappingBulkCreateResponseV2025, any>> {
    return this.electronAPI.createObjectMappings(requestParameters);
}
createScheduledAction(requestParameters: sdk.ConfigurationHubV2025ApiCreateScheduledActionRequest): Promise<AxiosResponse<sdk.ScheduledActionResponseV2025, any>> {
    return this.electronAPI.createScheduledAction(requestParameters);
}
createUploadedConfiguration(requestParameters: sdk.ConfigurationHubV2025ApiCreateUploadedConfigurationRequest): Promise<AxiosResponse<sdk.BackupResponseV2025, any>> {
    return this.electronAPI.createUploadedConfiguration(requestParameters);
}
deleteBackup(requestParameters: sdk.ConfigurationHubV2025ApiDeleteBackupRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteBackup(requestParameters);
}
deleteDraft(requestParameters: sdk.ConfigurationHubV2025ApiDeleteDraftRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteDraft(requestParameters);
}
deleteObjectMapping(requestParameters: sdk.ConfigurationHubV2025ApiDeleteObjectMappingRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteObjectMapping(requestParameters);
}
deleteScheduledAction(requestParameters: sdk.ConfigurationHubV2025ApiDeleteScheduledActionRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteScheduledAction(requestParameters);
}
deleteUploadedConfiguration(requestParameters: sdk.ConfigurationHubV2025ApiDeleteUploadedConfigurationRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteUploadedConfiguration(requestParameters);
}
getDeploy(requestParameters: sdk.ConfigurationHubV2025ApiGetDeployRequest): Promise<AxiosResponse<sdk.DeployResponseV2025, any>> {
    return this.electronAPI.getDeploy(requestParameters);
}
getObjectMappings(requestParameters: sdk.ConfigurationHubV2025ApiGetObjectMappingsRequest): Promise<AxiosResponse<Array<sdk.ObjectMappingResponseV2025>, any>> {
    return this.electronAPI.getObjectMappings(requestParameters);
}
getUploadedConfiguration(requestParameters: sdk.ConfigurationHubV2025ApiGetUploadedConfigurationRequest): Promise<AxiosResponse<sdk.BackupResponseV2025, any>> {
    return this.electronAPI.getUploadedConfiguration(requestParameters);
}
listBackups(requestParameters: sdk.ConfigurationHubV2025ApiListBackupsRequest = {}): Promise<AxiosResponse<Array<sdk.BackupResponse1V2025>, any>> {
    return this.electronAPI.listBackups(requestParameters);
}
listDeploys(): Promise<AxiosResponse<sdk.ListDeploys200ResponseV2025, any>> {
    return this.electronAPI.listDeploys();
}
listDrafts(requestParameters: sdk.ConfigurationHubV2025ApiListDraftsRequest = {}): Promise<AxiosResponse<Array<sdk.DraftResponseV2025>, any>> {
    return this.electronAPI.listDrafts(requestParameters);
}
listScheduledActions(): Promise<AxiosResponse<Array<sdk.ScheduledActionResponseV2025>, any>> {
    return this.electronAPI.listScheduledActions();
}
listUploadedConfigurations(requestParameters: sdk.ConfigurationHubV2025ApiListUploadedConfigurationsRequest = {}): Promise<AxiosResponse<Array<sdk.BackupResponseV2025>, any>> {
    return this.electronAPI.listUploadedConfigurations(requestParameters);
}
updateObjectMappings(requestParameters: sdk.ConfigurationHubV2025ApiUpdateObjectMappingsRequest): Promise<AxiosResponse<sdk.ObjectMappingBulkPatchResponseV2025, any>> {
    return this.electronAPI.updateObjectMappings(requestParameters);
}
updateScheduledAction(requestParameters: sdk.ConfigurationHubV2025ApiUpdateScheduledActionRequest): Promise<AxiosResponse<sdk.ScheduledActionResponseV2025, any>> {
    return this.electronAPI.updateScheduledAction(requestParameters);
}

createConnectorCustomizer(requestParameters: sdk.ConnectorCustomizersV2025ApiCreateConnectorCustomizerRequest): Promise<AxiosResponse<sdk.ConnectorCustomizerCreateResponseV2025, any>> {
    return this.electronAPI.createConnectorCustomizer(requestParameters);
}
createConnectorCustomizerVersion(requestParameters: sdk.ConnectorCustomizersV2025ApiCreateConnectorCustomizerVersionRequest): Promise<AxiosResponse<sdk.ConnectorCustomizerVersionCreateResponseV2025, any>> {
    return this.electronAPI.createConnectorCustomizerVersion(requestParameters);
}
deleteConnectorCustomizer(requestParameters: sdk.ConnectorCustomizersV2025ApiDeleteConnectorCustomizerRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteConnectorCustomizer(requestParameters);
}
getConnectorCustomizer(requestParameters: sdk.ConnectorCustomizersV2025ApiGetConnectorCustomizerRequest): Promise<AxiosResponse<sdk.ConnectorCustomizersResponseV2025, any>> {
    return this.electronAPI.getConnectorCustomizer(requestParameters);
}
listConnectorCustomizers(requestParameters: sdk.ConnectorCustomizersV2025ApiListConnectorCustomizersRequest = {}): Promise<AxiosResponse<Array<sdk.ConnectorCustomizersResponseV2025>, any>> {
    return this.electronAPI.listConnectorCustomizers(requestParameters);
}
putConnectorCustomizer(requestParameters: sdk.ConnectorCustomizersV2025ApiPutConnectorCustomizerRequest): Promise<AxiosResponse<sdk.ConnectorCustomizerUpdateResponseV2025, any>> {
    return this.electronAPI.putConnectorCustomizer(requestParameters);
}

createConnectorRule(requestParameters: sdk.ConnectorRuleManagementV2025ApiCreateConnectorRuleRequest): Promise<AxiosResponse<sdk.ConnectorRuleResponseV2025, any>> {
    return this.electronAPI.createConnectorRule(requestParameters);
}
deleteConnectorRule(requestParameters: sdk.ConnectorRuleManagementV2025ApiDeleteConnectorRuleRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteConnectorRule(requestParameters);
}
getConnectorRule(requestParameters: sdk.ConnectorRuleManagementV2025ApiGetConnectorRuleRequest): Promise<AxiosResponse<sdk.ConnectorRuleResponseV2025, any>> {
    return this.electronAPI.getConnectorRule(requestParameters);
}
getConnectorRuleList(requestParameters: sdk.ConnectorRuleManagementV2025ApiGetConnectorRuleListRequest = {}): Promise<AxiosResponse<Array<sdk.ConnectorRuleResponseV2025>, any>> {
    return this.electronAPI.getConnectorRuleList(requestParameters);
}
putConnectorRule(requestParameters: sdk.ConnectorRuleManagementV2025ApiPutConnectorRuleRequest): Promise<AxiosResponse<sdk.ConnectorRuleResponseV2025, any>> {
    return this.electronAPI.putConnectorRule(requestParameters);
}
testConnectorRule(requestParameters: sdk.ConnectorRuleManagementV2025ApiTestConnectorRuleRequest): Promise<AxiosResponse<sdk.ConnectorRuleValidationResponseV2025, any>> {
    return this.electronAPI.testConnectorRule(requestParameters);
}

createCustomConnector(requestParameters: sdk.ConnectorsV2025ApiCreateCustomConnectorRequest): Promise<AxiosResponse<sdk.V3ConnectorDtoV2025, any>> {
    return this.electronAPI.createCustomConnector(requestParameters);
}
deleteCustomConnector(requestParameters: sdk.ConnectorsV2025ApiDeleteCustomConnectorRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteCustomConnector(requestParameters);
}
getConnector(requestParameters: sdk.ConnectorsV2025ApiGetConnectorRequest): Promise<AxiosResponse<sdk.ConnectorDetailV2025, any>> {
    return this.electronAPI.getConnector(requestParameters);
}
getConnectorCorrelationConfig(requestParameters: sdk.ConnectorsV2025ApiGetConnectorCorrelationConfigRequest): Promise<AxiosResponse<string, any>> {
    return this.electronAPI.getConnectorCorrelationConfig(requestParameters);
}
getConnectorList(requestParameters: sdk.ConnectorsV2025ApiGetConnectorListRequest = {}): Promise<AxiosResponse<Array<sdk.V3ConnectorDtoV2025>, any>> {
    return this.electronAPI.getConnectorList(requestParameters);
}
getConnectorSourceConfig(requestParameters: sdk.ConnectorsV2025ApiGetConnectorSourceConfigRequest): Promise<AxiosResponse<string, any>> {
    return this.electronAPI.getConnectorSourceConfig(requestParameters);
}
getConnectorSourceTemplate(requestParameters: sdk.ConnectorsV2025ApiGetConnectorSourceTemplateRequest): Promise<AxiosResponse<string, any>> {
    return this.electronAPI.getConnectorSourceTemplate(requestParameters);
}
getConnectorTranslations(requestParameters: sdk.ConnectorsV2025ApiGetConnectorTranslationsRequest): Promise<AxiosResponse<string, any>> {
    return this.electronAPI.getConnectorTranslations(requestParameters);
}
putConnectorCorrelationConfig(requestParameters: sdk.ConnectorsV2025ApiPutConnectorCorrelationConfigRequest): Promise<AxiosResponse<sdk.UpdateDetailV2025, any>> {
    return this.electronAPI.putConnectorCorrelationConfig(requestParameters);
}
putConnectorSourceConfig(requestParameters: sdk.ConnectorsV2025ApiPutConnectorSourceConfigRequest): Promise<AxiosResponse<sdk.UpdateDetailV2025, any>> {
    return this.electronAPI.putConnectorSourceConfig(requestParameters);
}
putConnectorSourceTemplate(requestParameters: sdk.ConnectorsV2025ApiPutConnectorSourceTemplateRequest): Promise<AxiosResponse<sdk.UpdateDetailV2025, any>> {
    return this.electronAPI.putConnectorSourceTemplate(requestParameters);
}
putConnectorTranslations(requestParameters: sdk.ConnectorsV2025ApiPutConnectorTranslationsRequest): Promise<AxiosResponse<sdk.UpdateDetailV2025, any>> {
    return this.electronAPI.putConnectorTranslations(requestParameters);
}
updateConnector(requestParameters: sdk.ConnectorsV2025ApiUpdateConnectorRequest): Promise<AxiosResponse<sdk.ConnectorDetailV2025, any>> {
    return this.electronAPI.updateConnector(requestParameters);
}

createFormDefinition(requestParameters: sdk.CustomFormsV2025ApiCreateFormDefinitionRequest = {}): Promise<AxiosResponse<sdk.FormDefinitionResponseV2025, any>> {
    return this.electronAPI.createFormDefinition(requestParameters);
}
createFormDefinitionDynamicSchema(requestParameters: sdk.CustomFormsV2025ApiCreateFormDefinitionDynamicSchemaRequest = {}): Promise<AxiosResponse<sdk.FormDefinitionDynamicSchemaResponseV2025, any>> {
    return this.electronAPI.createFormDefinitionDynamicSchema(requestParameters);
}
createFormDefinitionFileRequest(requestParameters: sdk.CustomFormsV2025ApiCreateFormDefinitionFileRequestRequest): Promise<AxiosResponse<sdk.FormDefinitionFileUploadResponseV2025, any>> {
    return this.electronAPI.createFormDefinitionFileRequest(requestParameters);
}
createFormInstance(requestParameters: sdk.CustomFormsV2025ApiCreateFormInstanceRequest = {}): Promise<AxiosResponse<sdk.FormInstanceResponseV2025, any>> {
    return this.electronAPI.createFormInstance(requestParameters);
}
deleteFormDefinition(requestParameters: sdk.CustomFormsV2025ApiDeleteFormDefinitionRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.deleteFormDefinition(requestParameters);
}
exportFormDefinitionsByTenant(requestParameters: sdk.CustomFormsV2025ApiExportFormDefinitionsByTenantRequest = {}): Promise<AxiosResponse<Array<sdk.ExportFormDefinitionsByTenant200ResponseInnerV2025>, any>> {
    return this.electronAPI.exportFormDefinitionsByTenant(requestParameters);
}
getFileFromS3(requestParameters: sdk.CustomFormsV2025ApiGetFileFromS3Request): Promise<AxiosResponse<File, any>> {
    return this.electronAPI.getFileFromS3(requestParameters);
}
getFormDefinitionByKey(requestParameters: sdk.CustomFormsV2025ApiGetFormDefinitionByKeyRequest): Promise<AxiosResponse<sdk.FormDefinitionResponseV2025, any>> {
    return this.electronAPI.getFormDefinitionByKey(requestParameters);
}
getFormInstanceByKey(requestParameters: sdk.CustomFormsV2025ApiGetFormInstanceByKeyRequest): Promise<AxiosResponse<sdk.FormInstanceResponseV2025, any>> {
    return this.electronAPI.getFormInstanceByKey(requestParameters);
}
getFormInstanceFile(requestParameters: sdk.CustomFormsV2025ApiGetFormInstanceFileRequest): Promise<AxiosResponse<File, any>> {
    return this.electronAPI.getFormInstanceFile(requestParameters);
}
importFormDefinitions(requestParameters: sdk.CustomFormsV2025ApiImportFormDefinitionsRequest = {}): Promise<AxiosResponse<sdk.ImportFormDefinitions202ResponseV2025, any>> {
    return this.electronAPI.importFormDefinitions(requestParameters);
}
patchFormDefinition(requestParameters: sdk.CustomFormsV2025ApiPatchFormDefinitionRequest): Promise<AxiosResponse<sdk.FormDefinitionResponseV2025, any>> {
    return this.electronAPI.patchFormDefinition(requestParameters);
}
patchFormInstance(requestParameters: sdk.CustomFormsV2025ApiPatchFormInstanceRequest): Promise<AxiosResponse<sdk.FormInstanceResponseV2025, any>> {
    return this.electronAPI.patchFormInstance(requestParameters);
}
searchFormDefinitionsByTenant(requestParameters: sdk.CustomFormsV2025ApiSearchFormDefinitionsByTenantRequest = {}): Promise<AxiosResponse<sdk.ListFormDefinitionsByTenantResponseV2025, any>> {
    return this.electronAPI.searchFormDefinitionsByTenant(requestParameters);
}
searchFormElementDataByElementID(requestParameters: sdk.CustomFormsV2025ApiSearchFormElementDataByElementIDRequest): Promise<AxiosResponse<sdk.ListFormElementDataByElementIDResponseV2025, any>> {
    return this.electronAPI.searchFormElementDataByElementID(requestParameters);
}
searchFormInstancesByTenant(): Promise<AxiosResponse<Array<sdk.ListFormInstancesByTenantResponseV2025>, any>> {
    return this.electronAPI.searchFormInstancesByTenant();
}
searchPreDefinedSelectOptions(): Promise<AxiosResponse<sdk.ListPredefinedSelectOptionsResponseV2025, any>> {
    return this.electronAPI.searchPreDefinedSelectOptions();
}
showPreviewDataSource(requestParameters: sdk.CustomFormsV2025ApiShowPreviewDataSourceRequest): Promise<AxiosResponse<sdk.PreviewDataSourceResponseV2025, any>> {
    return this.electronAPI.showPreviewDataSource(requestParameters);
}

createCustomPasswordInstructions(requestParameters: sdk.CustomPasswordInstructionsV2025ApiCreateCustomPasswordInstructionsRequest): Promise<AxiosResponse<sdk.CustomPasswordInstructionV2025, any>> {
    return this.electronAPI.createCustomPasswordInstructions(requestParameters);
}
deleteCustomPasswordInstructions(requestParameters: sdk.CustomPasswordInstructionsV2025ApiDeleteCustomPasswordInstructionsRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteCustomPasswordInstructions(requestParameters);
}
getCustomPasswordInstructions(requestParameters: sdk.CustomPasswordInstructionsV2025ApiGetCustomPasswordInstructionsRequest): Promise<AxiosResponse<sdk.CustomPasswordInstructionV2025, any>> {
    return this.electronAPI.getCustomPasswordInstructions(requestParameters);
}

createDataSegment(requestParameters: sdk.DataSegmentationV2025ApiCreateDataSegmentRequest): Promise<AxiosResponse<sdk.DataSegmentV2025, any>> {
    return this.electronAPI.createDataSegment(requestParameters);
}
deleteDataSegment(requestParameters: sdk.DataSegmentationV2025ApiDeleteDataSegmentRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteDataSegment(requestParameters);
}
getDataSegment(requestParameters: sdk.DataSegmentationV2025ApiGetDataSegmentRequest): Promise<AxiosResponse<sdk.DataSegmentV2025, any>> {
    return this.electronAPI.getDataSegment(requestParameters);
}
getDataSegmentIdentityMembership(requestParameters: sdk.DataSegmentationV2025ApiGetDataSegmentIdentityMembershipRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.getDataSegmentIdentityMembership(requestParameters);
}
getDataSegmentationEnabledForUser(requestParameters: sdk.DataSegmentationV2025ApiGetDataSegmentationEnabledForUserRequest): Promise<AxiosResponse<boolean, any>> {
    return this.electronAPI.getDataSegmentationEnabledForUser(requestParameters);
}
listDataSegments(requestParameters: sdk.DataSegmentationV2025ApiListDataSegmentsRequest = {}): Promise<AxiosResponse<Array<sdk.DataSegmentV2025>, any>> {
    return this.electronAPI.listDataSegments(requestParameters);
}
patchDataSegment(requestParameters: sdk.DataSegmentationV2025ApiPatchDataSegmentRequest): Promise<AxiosResponse<sdk.DataSegmentV2025, any>> {
    return this.electronAPI.patchDataSegment(requestParameters);
}
publishDataSegment(requestParameters: sdk.DataSegmentationV2025ApiPublishDataSegmentRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.publishDataSegment(requestParameters);
}

createDimension(requestParameters: sdk.DimensionsV2025ApiCreateDimensionRequest): Promise<AxiosResponse<sdk.DimensionV2025, any>> {
    return this.electronAPI.createDimension(requestParameters);
}
deleteBulkDimensions(requestParameters: sdk.DimensionsV2025ApiDeleteBulkDimensionsRequest): Promise<AxiosResponse<sdk.TaskResultDtoV2025, any>> {
    return this.electronAPI.deleteBulkDimensions(requestParameters);
}
deleteDimension(requestParameters: sdk.DimensionsV2025ApiDeleteDimensionRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteDimension(requestParameters);
}
getDimension(requestParameters: sdk.DimensionsV2025ApiGetDimensionRequest): Promise<AxiosResponse<sdk.DimensionV2025, any>> {
    return this.electronAPI.getDimension(requestParameters);
}
getDimensionEntitlements(requestParameters: sdk.DimensionsV2025ApiGetDimensionEntitlementsRequest): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>> {
    return this.electronAPI.getDimensionEntitlements(requestParameters);
}
listDimensionAccessProfiles(requestParameters: sdk.DimensionsV2025ApiListDimensionAccessProfilesRequest): Promise<AxiosResponse<Array<sdk.AccessProfileV2025>, any>> {
    return this.electronAPI.listDimensionAccessProfiles(requestParameters);
}
listDimensions(requestParameters: sdk.DimensionsV2025ApiListDimensionsRequest): Promise<AxiosResponse<Array<sdk.DimensionV2025>, any>> {
    return this.electronAPI.listDimensions(requestParameters);
}
patchDimension(requestParameters: sdk.DimensionsV2025ApiPatchDimensionRequest): Promise<AxiosResponse<sdk.DimensionV2025, any>> {
    return this.electronAPI.patchDimension(requestParameters);
}

createAccessModelMetadataForEntitlement(requestParameters: sdk.EntitlementsV2025ApiCreateAccessModelMetadataForEntitlementRequest): Promise<AxiosResponse<sdk.EntitlementV2025, any>> {
    return this.electronAPI.createAccessModelMetadataForEntitlement(requestParameters);
}
deleteAccessModelMetadataFromEntitlement(requestParameters: sdk.EntitlementsV2025ApiDeleteAccessModelMetadataFromEntitlementRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteAccessModelMetadataFromEntitlement(requestParameters);
}
getEntitlement(requestParameters: sdk.EntitlementsV2025ApiGetEntitlementRequest): Promise<AxiosResponse<sdk.EntitlementV2025, any>> {
    return this.electronAPI.getEntitlement(requestParameters);
}
getEntitlementRequestConfig(requestParameters: sdk.EntitlementsV2025ApiGetEntitlementRequestConfigRequest): Promise<AxiosResponse<sdk.EntitlementRequestConfigV2025, any>> {
    return this.electronAPI.getEntitlementRequestConfig(requestParameters);
}
importEntitlementsBySource(requestParameters: sdk.EntitlementsV2025ApiImportEntitlementsBySourceRequest): Promise<AxiosResponse<sdk.LoadEntitlementTaskV2025, any>> {
    return this.electronAPI.importEntitlementsBySource(requestParameters);
}
listEntitlementChildren(requestParameters: sdk.EntitlementsV2025ApiListEntitlementChildrenRequest): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>> {
    return this.electronAPI.listEntitlementChildren(requestParameters);
}
listEntitlementParents(requestParameters: sdk.EntitlementsV2025ApiListEntitlementParentsRequest): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>> {
    return this.electronAPI.listEntitlementParents(requestParameters);
}
listEntitlements(requestParameters: sdk.EntitlementsV2025ApiListEntitlementsRequest = {}): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>> {
    return this.electronAPI.listEntitlements(requestParameters);
}
patchEntitlement(requestParameters: sdk.EntitlementsV2025ApiPatchEntitlementRequest): Promise<AxiosResponse<sdk.EntitlementV2025, any>> {
    return this.electronAPI.patchEntitlement(requestParameters);
}
putEntitlementRequestConfig(requestParameters: sdk.EntitlementsV2025ApiPutEntitlementRequestConfigRequest): Promise<AxiosResponse<sdk.EntitlementRequestConfigV2025, any>> {
    return this.electronAPI.putEntitlementRequestConfig(requestParameters);
}
resetSourceEntitlements(requestParameters: sdk.EntitlementsV2025ApiResetSourceEntitlementsRequest): Promise<AxiosResponse<sdk.EntitlementSourceResetBaseReferenceDtoV2025, any>> {
    return this.electronAPI.resetSourceEntitlements(requestParameters);
}
updateEntitlementsInBulk(requestParameters: sdk.EntitlementsV2025ApiUpdateEntitlementsInBulkRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.updateEntitlementsInBulk(requestParameters);
}

createAuthOrgNetworkConfig(requestParameters: sdk.GlobalTenantSecuritySettingsV2025ApiCreateAuthOrgNetworkConfigRequest): Promise<AxiosResponse<sdk.NetworkConfigurationV2025, any>> {
    return this.electronAPI.createAuthOrgNetworkConfig(requestParameters);
}
getAuthOrgLockoutConfig(): Promise<AxiosResponse<sdk.LockoutConfigurationV2025, any>> {
    return this.electronAPI.getAuthOrgLockoutConfig();
}
getAuthOrgNetworkConfig(): Promise<AxiosResponse<sdk.NetworkConfigurationV2025, any>> {
    return this.electronAPI.getAuthOrgNetworkConfig();
}
getAuthOrgServiceProviderConfig(): Promise<AxiosResponse<sdk.ServiceProviderConfigurationV2025, any>> {
    return this.electronAPI.getAuthOrgServiceProviderConfig();
}
getAuthOrgSessionConfig(): Promise<AxiosResponse<sdk.SessionConfigurationV2025, any>> {
    return this.electronAPI.getAuthOrgSessionConfig();
}
patchAuthOrgLockoutConfig(requestParameters: sdk.GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgLockoutConfigRequest): Promise<AxiosResponse<sdk.LockoutConfigurationV2025, any>> {
    return this.electronAPI.patchAuthOrgLockoutConfig(requestParameters);
}
patchAuthOrgNetworkConfig(requestParameters: sdk.GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgNetworkConfigRequest): Promise<AxiosResponse<sdk.NetworkConfigurationV2025, any>> {
    return this.electronAPI.patchAuthOrgNetworkConfig(requestParameters);
}
patchAuthOrgServiceProviderConfig(requestParameters: sdk.GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgServiceProviderConfigRequest): Promise<AxiosResponse<sdk.ServiceProviderConfigurationV2025, any>> {
    return this.electronAPI.patchAuthOrgServiceProviderConfig(requestParameters);
}
patchAuthOrgSessionConfig(requestParameters: sdk.GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgSessionConfigRequest): Promise<AxiosResponse<sdk.SessionConfigurationV2025, any>> {
    return this.electronAPI.patchAuthOrgSessionConfig(requestParameters);
}

createWorkgroup(requestParameters: sdk.GovernanceGroupsV2025ApiCreateWorkgroupRequest): Promise<AxiosResponse<sdk.WorkgroupDtoV2025, any>> {
    return this.electronAPI.createWorkgroup(requestParameters);
}
deleteWorkgroup(requestParameters: sdk.GovernanceGroupsV2025ApiDeleteWorkgroupRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteWorkgroup(requestParameters);
}
deleteWorkgroupMembers(requestParameters: sdk.GovernanceGroupsV2025ApiDeleteWorkgroupMembersRequest): Promise<AxiosResponse<Array<sdk.WorkgroupMemberDeleteItemV2025>, any>> {
    return this.electronAPI.deleteWorkgroupMembers(requestParameters);
}
deleteWorkgroupsInBulk(requestParameters: sdk.GovernanceGroupsV2025ApiDeleteWorkgroupsInBulkRequest): Promise<AxiosResponse<Array<sdk.WorkgroupDeleteItemV2025>, any>> {
    return this.electronAPI.deleteWorkgroupsInBulk(requestParameters);
}
getWorkgroup(requestParameters: sdk.GovernanceGroupsV2025ApiGetWorkgroupRequest): Promise<AxiosResponse<sdk.WorkgroupDtoV2025, any>> {
    return this.electronAPI.getWorkgroup(requestParameters);
}
listConnections(requestParameters: sdk.GovernanceGroupsV2025ApiListConnectionsRequest): Promise<AxiosResponse<Array<sdk.WorkgroupConnectionDtoV2025>, any>> {
    return this.electronAPI.listConnections(requestParameters);
}
listWorkgroupMembers(requestParameters: sdk.GovernanceGroupsV2025ApiListWorkgroupMembersRequest): Promise<AxiosResponse<Array<sdk.ListWorkgroupMembers200ResponseInnerV2025>, any>> {
    return this.electronAPI.listWorkgroupMembers(requestParameters);
}
listWorkgroups(requestParameters: sdk.GovernanceGroupsV2025ApiListWorkgroupsRequest = {}): Promise<AxiosResponse<Array<sdk.WorkgroupDtoV2025>, any>> {
    return this.electronAPI.listWorkgroups(requestParameters);
}
patchWorkgroup(requestParameters: sdk.GovernanceGroupsV2025ApiPatchWorkgroupRequest): Promise<AxiosResponse<sdk.WorkgroupDtoV2025, any>> {
    return this.electronAPI.patchWorkgroup(requestParameters);
}
updateWorkgroupMembers(requestParameters: sdk.GovernanceGroupsV2025ApiUpdateWorkgroupMembersRequest): Promise<AxiosResponse<Array<sdk.WorkgroupMemberAddItemV2025>, any>> {
    return this.electronAPI.updateWorkgroupMembers(requestParameters);
}

addAccessRequestRecommendationsIgnoredItem(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsIgnoredItemRequest): Promise<AxiosResponse<sdk.AccessRequestRecommendationActionItemResponseDtoV2025, any>> {
    return this.electronAPI.addAccessRequestRecommendationsIgnoredItem(requestParameters);
}
addAccessRequestRecommendationsRequestedItem(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsRequestedItemRequest): Promise<AxiosResponse<sdk.AccessRequestRecommendationActionItemResponseDtoV2025, any>> {
    return this.electronAPI.addAccessRequestRecommendationsRequestedItem(requestParameters);
}
addAccessRequestRecommendationsViewedItem(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsViewedItemRequest): Promise<AxiosResponse<sdk.AccessRequestRecommendationActionItemResponseDtoV2025, any>> {
    return this.electronAPI.addAccessRequestRecommendationsViewedItem(requestParameters);
}
addAccessRequestRecommendationsViewedItems(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsViewedItemsRequest): Promise<AxiosResponse<Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>, any>> {
    return this.electronAPI.addAccessRequestRecommendationsViewedItems(requestParameters);
}
getAccessRequestRecommendations(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsRequest = {}): Promise<AxiosResponse<Array<sdk.AccessRequestRecommendationItemDetailV2025>, any>> {
    return this.electronAPI.getAccessRequestRecommendations(requestParameters);
}
getAccessRequestRecommendationsConfig(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsConfigRequest = {}): Promise<AxiosResponse<sdk.AccessRequestRecommendationConfigDtoV2025, any>> {
    return this.electronAPI.getAccessRequestRecommendationsConfig(requestParameters);
}
getAccessRequestRecommendationsIgnoredItems(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsIgnoredItemsRequest): Promise<AxiosResponse<Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>, any>> {
    return this.electronAPI.getAccessRequestRecommendationsIgnoredItems(requestParameters);
}
getAccessRequestRecommendationsRequestedItems(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsRequestedItemsRequest): Promise<AxiosResponse<Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>, any>> {
    return this.electronAPI.getAccessRequestRecommendationsRequestedItems(requestParameters);
}
getAccessRequestRecommendationsViewedItems(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsViewedItemsRequest): Promise<AxiosResponse<Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>, any>> {
    return this.electronAPI.getAccessRequestRecommendationsViewedItems(requestParameters);
}
setAccessRequestRecommendationsConfig(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiSetAccessRequestRecommendationsConfigRequest): Promise<AxiosResponse<sdk.AccessRequestRecommendationConfigDtoV2025, any>> {
    return this.electronAPI.setAccessRequestRecommendationsConfig(requestParameters);
}

createCommonAccess(requestParameters: sdk.IAICommonAccessV2025ApiCreateCommonAccessRequest): Promise<AxiosResponse<sdk.CommonAccessItemResponseV2025, any>> {
    return this.electronAPI.createCommonAccess(requestParameters);
}
getCommonAccess(requestParameters: sdk.IAICommonAccessV2025ApiGetCommonAccessRequest = {}): Promise<AxiosResponse<Array<sdk.CommonAccessResponseV2025>, any>> {
    return this.electronAPI.getCommonAccess(requestParameters);
}
updateCommonAccessStatusInBulk(requestParameters: sdk.IAICommonAccessV2025ApiUpdateCommonAccessStatusInBulkRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.updateCommonAccessStatusInBulk(requestParameters);
}

exportOutliersZip(requestParameters: sdk.IAIOutliersV2025ApiExportOutliersZipRequest = {}): Promise<AxiosResponse<File, any>> {
    return this.electronAPI.exportOutliersZip(requestParameters);
}
getIdentityOutlierSnapshots(requestParameters: sdk.IAIOutliersV2025ApiGetIdentityOutlierSnapshotsRequest = {}): Promise<AxiosResponse<Array<sdk.OutlierSummaryV2025>, any>> {
    return this.electronAPI.getIdentityOutlierSnapshots(requestParameters);
}
getIdentityOutliers(requestParameters: sdk.IAIOutliersV2025ApiGetIdentityOutliersRequest = {}): Promise<AxiosResponse<Array<sdk.OutlierV2025>, any>> {
    return this.electronAPI.getIdentityOutliers(requestParameters);
}
getLatestIdentityOutlierSnapshots(requestParameters: sdk.IAIOutliersV2025ApiGetLatestIdentityOutlierSnapshotsRequest = {}): Promise<AxiosResponse<Array<sdk.LatestOutlierSummaryV2025>, any>> {
    return this.electronAPI.getLatestIdentityOutlierSnapshots(requestParameters);
}
getOutlierContributingFeatureSummary(requestParameters: sdk.IAIOutliersV2025ApiGetOutlierContributingFeatureSummaryRequest): Promise<AxiosResponse<sdk.OutlierFeatureSummaryV2025, any>> {
    return this.electronAPI.getOutlierContributingFeatureSummary(requestParameters);
}
getPeerGroupOutliersContributingFeatures(requestParameters: sdk.IAIOutliersV2025ApiGetPeerGroupOutliersContributingFeaturesRequest): Promise<AxiosResponse<Array<sdk.OutlierContributingFeatureV2025>, any>> {
    return this.electronAPI.getPeerGroupOutliersContributingFeatures(requestParameters);
}
ignoreIdentityOutliers(requestParameters: sdk.IAIOutliersV2025ApiIgnoreIdentityOutliersRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.ignoreIdentityOutliers(requestParameters);
}
listOutliersContributingFeatureAccessItems(requestParameters: sdk.IAIOutliersV2025ApiListOutliersContributingFeatureAccessItemsRequest): Promise<AxiosResponse<Array<sdk.OutliersContributingFeatureAccessItemsV2025>, any>> {
    return this.electronAPI.listOutliersContributingFeatureAccessItems(requestParameters);
}
unIgnoreIdentityOutliers(requestParameters: sdk.IAIOutliersV2025ApiUnIgnoreIdentityOutliersRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.unIgnoreIdentityOutliers(requestParameters);
}

getPeerGroupOutliers(requestParameters: sdk.IAIPeerGroupStrategiesV2025ApiGetPeerGroupOutliersRequest): Promise<AxiosResponse<Array<sdk.PeerGroupMemberV2025>, any>> {
    return this.electronAPI.getPeerGroupOutliers(requestParameters);
}

getRecommendations(requestParameters: sdk.IAIRecommendationsV2025ApiGetRecommendationsRequest): Promise<AxiosResponse<sdk.RecommendationResponseDtoV2025, any>> {
    return this.electronAPI.getRecommendations(requestParameters);
}
getRecommendationsConfig(requestParameters: sdk.IAIRecommendationsV2025ApiGetRecommendationsConfigRequest = {}): Promise<AxiosResponse<sdk.RecommendationConfigDtoV2025, any>> {
    return this.electronAPI.getRecommendationsConfig(requestParameters);
}
updateRecommendationsConfig(requestParameters: sdk.IAIRecommendationsV2025ApiUpdateRecommendationsConfigRequest): Promise<AxiosResponse<sdk.RecommendationConfigDtoV2025, any>> {
    return this.electronAPI.updateRecommendationsConfig(requestParameters);
}

createPotentialRoleProvisionRequest(requestParameters: sdk.IAIRoleMiningV2025ApiCreatePotentialRoleProvisionRequestRequest): Promise<AxiosResponse<sdk.RoleMiningPotentialRoleSummaryV2025, any>> {
    return this.electronAPI.createPotentialRoleProvisionRequest(requestParameters);
}
createRoleMiningSessions(requestParameters: sdk.IAIRoleMiningV2025ApiCreateRoleMiningSessionsRequest): Promise<AxiosResponse<sdk.RoleMiningSessionResponseV2025, any>> {
    return this.electronAPI.createRoleMiningSessions(requestParameters);
}
downloadRoleMiningPotentialRoleZip(requestParameters: sdk.IAIRoleMiningV2025ApiDownloadRoleMiningPotentialRoleZipRequest): Promise<AxiosResponse<File, any>> {
    return this.electronAPI.downloadRoleMiningPotentialRoleZip(requestParameters);
}
exportRoleMiningPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiExportRoleMiningPotentialRoleRequest): Promise<AxiosResponse<File, any>> {
    return this.electronAPI.exportRoleMiningPotentialRole(requestParameters);
}
exportRoleMiningPotentialRoleAsync(requestParameters: sdk.IAIRoleMiningV2025ApiExportRoleMiningPotentialRoleAsyncRequest): Promise<AxiosResponse<sdk.RoleMiningPotentialRoleExportResponseV2025, any>> {
    return this.electronAPI.exportRoleMiningPotentialRoleAsync(requestParameters);
}
exportRoleMiningPotentialRoleStatus(requestParameters: sdk.IAIRoleMiningV2025ApiExportRoleMiningPotentialRoleStatusRequest): Promise<AxiosResponse<sdk.RoleMiningPotentialRoleExportResponseV2025, any>> {
    return this.electronAPI.exportRoleMiningPotentialRoleStatus(requestParameters);
}
getAllPotentialRoleSummaries(requestParameters: sdk.IAIRoleMiningV2025ApiGetAllPotentialRoleSummariesRequest = {}): Promise<AxiosResponse<Array<sdk.RoleMiningPotentialRoleSummaryV2025>, any>> {
    return this.electronAPI.getAllPotentialRoleSummaries(requestParameters);
}
getEntitlementDistributionPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiGetEntitlementDistributionPotentialRoleRequest): Promise<AxiosResponse<{ [key: string]: number; }, any>> {
    return this.electronAPI.getEntitlementDistributionPotentialRole(requestParameters);
}
getEntitlementsPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiGetEntitlementsPotentialRoleRequest): Promise<AxiosResponse<Array<sdk.RoleMiningEntitlementV2025>, any>> {
    return this.electronAPI.getEntitlementsPotentialRole(requestParameters);
}
getExcludedEntitlementsPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiGetExcludedEntitlementsPotentialRoleRequest): Promise<AxiosResponse<Array<sdk.RoleMiningEntitlementV2025>, any>> {
    return this.electronAPI.getExcludedEntitlementsPotentialRole(requestParameters);
}
getIdentitiesPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiGetIdentitiesPotentialRoleRequest): Promise<AxiosResponse<Array<sdk.RoleMiningIdentityV2025>, any>> {
    return this.electronAPI.getIdentitiesPotentialRole(requestParameters);
}
getPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiGetPotentialRoleRequest): Promise<AxiosResponse<sdk.RoleMiningPotentialRoleV2025, any>> {
    return this.electronAPI.getPotentialRole(requestParameters);
}
getPotentialRoleApplications(requestParameters: sdk.IAIRoleMiningV2025ApiGetPotentialRoleApplicationsRequest): Promise<AxiosResponse<Array<sdk.RoleMiningPotentialRoleApplicationV2025>, any>> {
    return this.electronAPI.getPotentialRoleApplications(requestParameters);
}
getPotentialRoleEntitlements(requestParameters: sdk.IAIRoleMiningV2025ApiGetPotentialRoleEntitlementsRequest): Promise<AxiosResponse<Array<sdk.RoleMiningPotentialRoleEntitlementsV2025>, any>> {
    return this.electronAPI.getPotentialRoleEntitlements(requestParameters);
}
getPotentialRoleSourceIdentityUsage(requestParameters: sdk.IAIRoleMiningV2025ApiGetPotentialRoleSourceIdentityUsageRequest): Promise<AxiosResponse<Array<sdk.RoleMiningPotentialRoleSourceUsageV2025>, any>> {
    return this.electronAPI.getPotentialRoleSourceIdentityUsage(requestParameters);
}
getPotentialRoleSummaries(requestParameters: sdk.IAIRoleMiningV2025ApiGetPotentialRoleSummariesRequest): Promise<AxiosResponse<Array<sdk.RoleMiningPotentialRoleSummaryV2025>, any>> {
    return this.electronAPI.getPotentialRoleSummaries(requestParameters);
}
getRoleMiningPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiGetRoleMiningPotentialRoleRequest): Promise<AxiosResponse<sdk.RoleMiningPotentialRoleV2025, any>> {
    return this.electronAPI.getRoleMiningPotentialRole(requestParameters);
}
getRoleMiningSession(requestParameters: sdk.IAIRoleMiningV2025ApiGetRoleMiningSessionRequest): Promise<AxiosResponse<sdk.RoleMiningSessionResponseV2025, any>> {
    return this.electronAPI.getRoleMiningSession(requestParameters);
}
getRoleMiningSessionStatus(requestParameters: sdk.IAIRoleMiningV2025ApiGetRoleMiningSessionStatusRequest): Promise<AxiosResponse<sdk.RoleMiningSessionStatusV2025, any>> {
    return this.electronAPI.getRoleMiningSessionStatus(requestParameters);
}
getRoleMiningSessions(requestParameters: sdk.IAIRoleMiningV2025ApiGetRoleMiningSessionsRequest): Promise<AxiosResponse<Array<sdk.RoleMiningSessionDtoV2025>, any>> {
    return this.electronAPI.getRoleMiningSessions(requestParameters);
}
getSavedPotentialRoles(requestParameters: sdk.IAIRoleMiningV2025ApiGetSavedPotentialRolesRequest = {}): Promise<AxiosResponse<Array<sdk.RoleMiningSessionDraftRoleDtoV2025>, any>> {
    return this.electronAPI.getSavedPotentialRoles(requestParameters);
}
patchPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiPatchPotentialRoleRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.patchPotentialRole(requestParameters);
}
patchPotentialRole_1(requestParameters: sdk.IAIRoleMiningV2025ApiPatchPotentialRole0Request): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.patchPotentialRole_1(requestParameters);
}
patchRoleMiningSession(requestParameters: sdk.IAIRoleMiningV2025ApiPatchRoleMiningSessionRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.patchRoleMiningSession(requestParameters);
}
updateEntitlementsPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiUpdateEntitlementsPotentialRoleRequest): Promise<AxiosResponse<sdk.RoleMiningPotentialRoleV2025, any>> {
    return this.electronAPI.updateEntitlementsPotentialRole(requestParameters);
}

deleteIcon(requestParameters: sdk.IconsV2025ApiDeleteIconRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteIcon(requestParameters);
}
setIcon(requestParameters: sdk.IconsV2025ApiSetIconRequest): Promise<AxiosResponse<sdk.SetIcon200ResponseV2025, any>> {
    return this.electronAPI.setIcon(requestParameters);
}

deleteIdentity(requestParameters: sdk.IdentitiesV2025ApiDeleteIdentityRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteIdentity(requestParameters);
}
getIdentity(requestParameters: sdk.IdentitiesV2025ApiGetIdentityRequest): Promise<AxiosResponse<sdk.IdentityV2025, any>> {
    return this.electronAPI.getIdentity(requestParameters);
}
getIdentityOwnershipDetails(requestParameters: sdk.IdentitiesV2025ApiGetIdentityOwnershipDetailsRequest): Promise<AxiosResponse<sdk.IdentityOwnershipAssociationDetailsV2025, any>> {
    return this.electronAPI.getIdentityOwnershipDetails(requestParameters);
}
getRoleAssignment(requestParameters: sdk.IdentitiesV2025ApiGetRoleAssignmentRequest): Promise<AxiosResponse<sdk.RoleAssignmentDtoV2025, any>> {
    return this.electronAPI.getRoleAssignment(requestParameters);
}
getRoleAssignments(requestParameters: sdk.IdentitiesV2025ApiGetRoleAssignmentsRequest): Promise<AxiosResponse<Array<sdk.GetRoleAssignments200ResponseInnerV2025>, any>> {
    return this.electronAPI.getRoleAssignments(requestParameters);
}
listIdentities(requestParameters: sdk.IdentitiesV2025ApiListIdentitiesRequest = {}): Promise<AxiosResponse<Array<sdk.IdentityV2025>, any>> {
    return this.electronAPI.listIdentities(requestParameters);
}
resetIdentity(requestParameters: sdk.IdentitiesV2025ApiResetIdentityRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.resetIdentity(requestParameters);
}
sendIdentityVerificationAccountToken(requestParameters: sdk.IdentitiesV2025ApiSendIdentityVerificationAccountTokenRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.sendIdentityVerificationAccountToken(requestParameters);
}
startIdentitiesInvite(requestParameters: sdk.IdentitiesV2025ApiStartIdentitiesInviteRequest): Promise<AxiosResponse<sdk.TaskStatusV2025, any>> {
    return this.electronAPI.startIdentitiesInvite(requestParameters);
}
startIdentityProcessing(requestParameters: sdk.IdentitiesV2025ApiStartIdentityProcessingRequest): Promise<AxiosResponse<sdk.TaskResultResponseV2025, any>> {
    return this.electronAPI.startIdentityProcessing(requestParameters);
}
synchronizeAttributesForIdentity(requestParameters: sdk.IdentitiesV2025ApiSynchronizeAttributesForIdentityRequest): Promise<AxiosResponse<sdk.IdentitySyncJobV2025, any>> {
    return this.electronAPI.synchronizeAttributesForIdentity(requestParameters);
}

createIdentityAttribute(requestParameters: sdk.IdentityAttributesV2025ApiCreateIdentityAttributeRequest): Promise<AxiosResponse<sdk.IdentityAttributeV2025, any>> {
    return this.electronAPI.createIdentityAttribute(requestParameters);
}
deleteIdentityAttribute(requestParameters: sdk.IdentityAttributesV2025ApiDeleteIdentityAttributeRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteIdentityAttribute(requestParameters);
}
deleteIdentityAttributesInBulk(requestParameters: sdk.IdentityAttributesV2025ApiDeleteIdentityAttributesInBulkRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteIdentityAttributesInBulk(requestParameters);
}
getIdentityAttribute(requestParameters: sdk.IdentityAttributesV2025ApiGetIdentityAttributeRequest): Promise<AxiosResponse<sdk.IdentityAttributeV2025, any>> {
    return this.electronAPI.getIdentityAttribute(requestParameters);
}
listIdentityAttributes(requestParameters: sdk.IdentityAttributesV2025ApiListIdentityAttributesRequest = {}): Promise<AxiosResponse<Array<sdk.IdentityAttributeV2025>, any>> {
    return this.electronAPI.listIdentityAttributes(requestParameters);
}
putIdentityAttribute(requestParameters: sdk.IdentityAttributesV2025ApiPutIdentityAttributeRequest): Promise<AxiosResponse<sdk.IdentityAttributeV2025, any>> {
    return this.electronAPI.putIdentityAttribute(requestParameters);
}

compareIdentitySnapshots(requestParameters: sdk.IdentityHistoryV2025ApiCompareIdentitySnapshotsRequest): Promise<AxiosResponse<Array<sdk.IdentityCompareResponseV2025>, any>> {
    return this.electronAPI.compareIdentitySnapshots(requestParameters);
}
compareIdentitySnapshotsAccessType(requestParameters: sdk.IdentityHistoryV2025ApiCompareIdentitySnapshotsAccessTypeRequest): Promise<AxiosResponse<Array<sdk.AccessItemDiffV2025>, any>> {
    return this.electronAPI.compareIdentitySnapshotsAccessType(requestParameters);
}
getHistoricalIdentity(requestParameters: sdk.IdentityHistoryV2025ApiGetHistoricalIdentityRequest): Promise<AxiosResponse<sdk.IdentityHistoryResponseV2025, any>> {
    return this.electronAPI.getHistoricalIdentity(requestParameters);
}
getHistoricalIdentityEvents(requestParameters: sdk.IdentityHistoryV2025ApiGetHistoricalIdentityEventsRequest): Promise<AxiosResponse<Array<sdk.GetHistoricalIdentityEvents200ResponseInnerV2025>, any>> {
    return this.electronAPI.getHistoricalIdentityEvents(requestParameters);
}
getIdentitySnapshot(requestParameters: sdk.IdentityHistoryV2025ApiGetIdentitySnapshotRequest): Promise<AxiosResponse<sdk.IdentityHistoryResponseV2025, any>> {
    return this.electronAPI.getIdentitySnapshot(requestParameters);
}
getIdentitySnapshotSummary(requestParameters: sdk.IdentityHistoryV2025ApiGetIdentitySnapshotSummaryRequest): Promise<AxiosResponse<Array<sdk.MetricResponseV2025>, any>> {
    return this.electronAPI.getIdentitySnapshotSummary(requestParameters);
}
getIdentityStartDate(requestParameters: sdk.IdentityHistoryV2025ApiGetIdentityStartDateRequest): Promise<AxiosResponse<string, any>> {
    return this.electronAPI.getIdentityStartDate(requestParameters);
}
listHistoricalIdentities(requestParameters: sdk.IdentityHistoryV2025ApiListHistoricalIdentitiesRequest = {}): Promise<AxiosResponse<Array<sdk.IdentityListItemV2025>, any>> {
    return this.electronAPI.listHistoricalIdentities(requestParameters);
}
listIdentityAccessItems(requestParameters: sdk.IdentityHistoryV2025ApiListIdentityAccessItemsRequest): Promise<AxiosResponse<Array<sdk.ListIdentityAccessItems200ResponseInnerV2025>, any>> {
    return this.electronAPI.listIdentityAccessItems(requestParameters);
}
listIdentitySnapshotAccessItems(requestParameters: sdk.IdentityHistoryV2025ApiListIdentitySnapshotAccessItemsRequest): Promise<AxiosResponse<Array<sdk.ListIdentityAccessItems200ResponseInnerV2025>, any>> {
    return this.electronAPI.listIdentitySnapshotAccessItems(requestParameters);
}
listIdentitySnapshots(requestParameters: sdk.IdentityHistoryV2025ApiListIdentitySnapshotsRequest): Promise<AxiosResponse<Array<sdk.IdentitySnapshotSummaryResponseV2025>, any>> {
    return this.electronAPI.listIdentitySnapshots(requestParameters);
}

createIdentityProfile(requestParameters: sdk.IdentityProfilesV2025ApiCreateIdentityProfileRequest): Promise<AxiosResponse<sdk.IdentityProfileV2025, any>> {
    return this.electronAPI.createIdentityProfile(requestParameters);
}
deleteIdentityProfile(requestParameters: sdk.IdentityProfilesV2025ApiDeleteIdentityProfileRequest): Promise<AxiosResponse<sdk.TaskResultSimplifiedV2025, any>> {
    return this.electronAPI.deleteIdentityProfile(requestParameters);
}
deleteIdentityProfiles(requestParameters: sdk.IdentityProfilesV2025ApiDeleteIdentityProfilesRequest): Promise<AxiosResponse<sdk.TaskResultSimplifiedV2025, any>> {
    return this.electronAPI.deleteIdentityProfiles(requestParameters);
}
exportIdentityProfiles(requestParameters: sdk.IdentityProfilesV2025ApiExportIdentityProfilesRequest = {}): Promise<AxiosResponse<Array<sdk.IdentityProfileExportedObjectV2025>, any>> {
    return this.electronAPI.exportIdentityProfiles(requestParameters);
}
generateIdentityPreview(requestParameters: sdk.IdentityProfilesV2025ApiGenerateIdentityPreviewRequest): Promise<AxiosResponse<sdk.IdentityPreviewResponseV2025, any>> {
    return this.electronAPI.generateIdentityPreview(requestParameters);
}
getDefaultIdentityAttributeConfig(requestParameters: sdk.IdentityProfilesV2025ApiGetDefaultIdentityAttributeConfigRequest): Promise<AxiosResponse<sdk.IdentityAttributeConfigV2025, any>> {
    return this.electronAPI.getDefaultIdentityAttributeConfig(requestParameters);
}
getIdentityProfile(requestParameters: sdk.IdentityProfilesV2025ApiGetIdentityProfileRequest): Promise<AxiosResponse<sdk.IdentityProfileV2025, any>> {
    return this.electronAPI.getIdentityProfile(requestParameters);
}
importIdentityProfiles(requestParameters: sdk.IdentityProfilesV2025ApiImportIdentityProfilesRequest): Promise<AxiosResponse<sdk.ObjectImportResultV2025, any>> {
    return this.electronAPI.importIdentityProfiles(requestParameters);
}
listIdentityProfiles(requestParameters: sdk.IdentityProfilesV2025ApiListIdentityProfilesRequest = {}): Promise<AxiosResponse<Array<sdk.IdentityProfileV2025>, any>> {
    return this.electronAPI.listIdentityProfiles(requestParameters);
}
syncIdentityProfile(requestParameters: sdk.IdentityProfilesV2025ApiSyncIdentityProfileRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.syncIdentityProfile(requestParameters);
}
updateIdentityProfile(requestParameters: sdk.IdentityProfilesV2025ApiUpdateIdentityProfileRequest): Promise<AxiosResponse<sdk.IdentityProfileV2025, any>> {
    return this.electronAPI.updateIdentityProfile(requestParameters);
}

createLifecycleState(requestParameters: sdk.LifecycleStatesV2025ApiCreateLifecycleStateRequest): Promise<AxiosResponse<sdk.LifecycleStateV2025, any>> {
    return this.electronAPI.createLifecycleState(requestParameters);
}
deleteLifecycleState(requestParameters: sdk.LifecycleStatesV2025ApiDeleteLifecycleStateRequest): Promise<AxiosResponse<sdk.LifecyclestateDeletedV2025, any>> {
    return this.electronAPI.deleteLifecycleState(requestParameters);
}
getLifecycleState(requestParameters: sdk.LifecycleStatesV2025ApiGetLifecycleStateRequest): Promise<AxiosResponse<sdk.LifecycleStateV2025, any>> {
    return this.electronAPI.getLifecycleState(requestParameters);
}
getLifecycleStates(requestParameters: sdk.LifecycleStatesV2025ApiGetLifecycleStatesRequest): Promise<AxiosResponse<Array<sdk.LifecycleStateV2025>, any>> {
    return this.electronAPI.getLifecycleStates(requestParameters);
}
setLifecycleState(requestParameters: sdk.LifecycleStatesV2025ApiSetLifecycleStateRequest): Promise<AxiosResponse<sdk.SetLifecycleState200ResponseV2025, any>> {
    return this.electronAPI.setLifecycleState(requestParameters);
}
updateLifecycleStates(requestParameters: sdk.LifecycleStatesV2025ApiUpdateLifecycleStatesRequest): Promise<AxiosResponse<sdk.LifecycleStateV2025, any>> {
    return this.electronAPI.updateLifecycleStates(requestParameters);
}

getMFADuoConfig(): Promise<AxiosResponse<sdk.MfaDuoConfigV2025, any>> {
    return this.electronAPI.getMFADuoConfig();
}
getMFAKbaConfig(requestParameters: sdk.MFAConfigurationV2025ApiGetMFAKbaConfigRequest = {}): Promise<AxiosResponse<Array<sdk.KbaQuestionV2025>, any>> {
    return this.electronAPI.getMFAKbaConfig(requestParameters);
}
getMFAOktaConfig(): Promise<AxiosResponse<sdk.MfaOktaConfigV2025, any>> {
    return this.electronAPI.getMFAOktaConfig();
}
setMFADuoConfig(requestParameters: sdk.MFAConfigurationV2025ApiSetMFADuoConfigRequest): Promise<AxiosResponse<sdk.MfaDuoConfigV2025, any>> {
    return this.electronAPI.setMFADuoConfig(requestParameters);
}
setMFAKBAConfig(requestParameters: sdk.MFAConfigurationV2025ApiSetMFAKBAConfigRequest): Promise<AxiosResponse<Array<sdk.KbaAnswerResponseItemV2025>, any>> {
    return this.electronAPI.setMFAKBAConfig(requestParameters);
}
setMFAOktaConfig(requestParameters: sdk.MFAConfigurationV2025ApiSetMFAOktaConfigRequest): Promise<AxiosResponse<sdk.MfaOktaConfigV2025, any>> {
    return this.electronAPI.setMFAOktaConfig(requestParameters);
}
testMFAConfig(requestParameters: sdk.MFAConfigurationV2025ApiTestMFAConfigRequest): Promise<AxiosResponse<sdk.MfaConfigTestResponseV2025, any>> {
    return this.electronAPI.testMFAConfig(requestParameters);
}

getMachineAccount(requestParameters: sdk.MachineAccountsV2025ApiGetMachineAccountRequest): Promise<AxiosResponse<sdk.MachineAccountV2025, any>> {
    return this.electronAPI.getMachineAccount(requestParameters);
}
listMachineAccounts(requestParameters: sdk.MachineAccountsV2025ApiListMachineAccountsRequest = {}): Promise<AxiosResponse<Array<sdk.MachineAccountV2025>, any>> {
    return this.electronAPI.listMachineAccounts(requestParameters);
}
updateMachineAccount(requestParameters: sdk.MachineAccountsV2025ApiUpdateMachineAccountRequest): Promise<AxiosResponse<sdk.MachineAccountV2025, any>> {
    return this.electronAPI.updateMachineAccount(requestParameters);
}

createMachineIdentity(requestParameters: sdk.MachineIdentitiesV2025ApiCreateMachineIdentityRequest): Promise<AxiosResponse<sdk.MachineIdentityV2025, any>> {
    return this.electronAPI.createMachineIdentity(requestParameters);
}
deleteMachineIdentity(requestParameters: sdk.MachineIdentitiesV2025ApiDeleteMachineIdentityRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteMachineIdentity(requestParameters);
}
getMachineIdentity(requestParameters: sdk.MachineIdentitiesV2025ApiGetMachineIdentityRequest): Promise<AxiosResponse<sdk.MachineIdentityV2025, any>> {
    return this.electronAPI.getMachineIdentity(requestParameters);
}
listMachineIdentities(requestParameters: sdk.MachineIdentitiesV2025ApiListMachineIdentitiesRequest = {}): Promise<AxiosResponse<Array<sdk.MachineIdentityV2025>, any>> {
    return this.electronAPI.listMachineIdentities(requestParameters);
}
updateMachineIdentity(requestParameters: sdk.MachineIdentitiesV2025ApiUpdateMachineIdentityRequest): Promise<AxiosResponse<sdk.MachineIdentityV2025, any>> {
    return this.electronAPI.updateMachineIdentity(requestParameters);
}

createManagedClient(requestParameters: sdk.ManagedClientsV2025ApiCreateManagedClientRequest): Promise<AxiosResponse<sdk.ManagedClientV2025, any>> {
    return this.electronAPI.createManagedClient(requestParameters);
}
deleteManagedClient(requestParameters: sdk.ManagedClientsV2025ApiDeleteManagedClientRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteManagedClient(requestParameters);
}
getManagedClient(requestParameters: sdk.ManagedClientsV2025ApiGetManagedClientRequest): Promise<AxiosResponse<sdk.ManagedClientV2025, any>> {
    return this.electronAPI.getManagedClient(requestParameters);
}
getManagedClientStatus(requestParameters: sdk.ManagedClientsV2025ApiGetManagedClientStatusRequest): Promise<AxiosResponse<sdk.ManagedClientStatusV2025, any>> {
    return this.electronAPI.getManagedClientStatus(requestParameters);
}
getManagedClients(requestParameters: sdk.ManagedClientsV2025ApiGetManagedClientsRequest = {}): Promise<AxiosResponse<Array<sdk.ManagedClientV2025>, any>> {
    return this.electronAPI.getManagedClients(requestParameters);
}
updateManagedClient(requestParameters: sdk.ManagedClientsV2025ApiUpdateManagedClientRequest): Promise<AxiosResponse<sdk.ManagedClientV2025, any>> {
    return this.electronAPI.updateManagedClient(requestParameters);
}

createManagedClusterType(requestParameters: sdk.ManagedClusterTypesV2025ApiCreateManagedClusterTypeRequest): Promise<AxiosResponse<sdk.ManagedClusterTypeV2025, any>> {
    return this.electronAPI.createManagedClusterType(requestParameters);
}
deleteManagedClusterType(requestParameters: sdk.ManagedClusterTypesV2025ApiDeleteManagedClusterTypeRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteManagedClusterType(requestParameters);
}
getManagedClusterType(requestParameters: sdk.ManagedClusterTypesV2025ApiGetManagedClusterTypeRequest): Promise<AxiosResponse<sdk.ManagedClusterTypeV2025, any>> {
    return this.electronAPI.getManagedClusterType(requestParameters);
}
getManagedClusterTypes(requestParameters: sdk.ManagedClusterTypesV2025ApiGetManagedClusterTypesRequest = {}): Promise<AxiosResponse<Array<sdk.ManagedClusterTypeV2025>, any>> {
    return this.electronAPI.getManagedClusterTypes(requestParameters);
}
updateManagedClusterType(requestParameters: sdk.ManagedClusterTypesV2025ApiUpdateManagedClusterTypeRequest): Promise<AxiosResponse<sdk.ManagedClusterTypeV2025, any>> {
    return this.electronAPI.updateManagedClusterType(requestParameters);
}

createManagedCluster(requestParameters: sdk.ManagedClustersV2025ApiCreateManagedClusterRequest): Promise<AxiosResponse<sdk.ManagedClusterV2025, any>> {
    return this.electronAPI.createManagedCluster(requestParameters);
}
deleteManagedCluster(requestParameters: sdk.ManagedClustersV2025ApiDeleteManagedClusterRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteManagedCluster(requestParameters);
}
getClientLogConfiguration(requestParameters: sdk.ManagedClustersV2025ApiGetClientLogConfigurationRequest): Promise<AxiosResponse<sdk.ClientLogConfigurationV2025, any>> {
    return this.electronAPI.getClientLogConfiguration(requestParameters);
}
getManagedCluster(requestParameters: sdk.ManagedClustersV2025ApiGetManagedClusterRequest): Promise<AxiosResponse<sdk.ManagedClusterV2025, any>> {
    return this.electronAPI.getManagedCluster(requestParameters);
}
getManagedClusters(requestParameters: sdk.ManagedClustersV2025ApiGetManagedClustersRequest = {}): Promise<AxiosResponse<Array<sdk.ManagedClusterV2025>, any>> {
    return this.electronAPI.getManagedClusters(requestParameters);
}
putClientLogConfiguration(requestParameters: sdk.ManagedClustersV2025ApiPutClientLogConfigurationRequest): Promise<AxiosResponse<sdk.ClientLogConfigurationV2025, any>> {
    return this.electronAPI.putClientLogConfiguration(requestParameters);
}
update(requestParameters: sdk.ManagedClustersV2025ApiUpdateRequest): Promise<AxiosResponse<sdk.ClusterManualUpgradeV2025, any>> {
    return this.electronAPI.update(requestParameters);
}
updateManagedCluster(requestParameters: sdk.ManagedClustersV2025ApiUpdateManagedClusterRequest): Promise<AxiosResponse<sdk.ManagedClusterV2025, any>> {
    return this.electronAPI.updateManagedCluster(requestParameters);
}

createMultiHostIntegration(requestParameters: sdk.MultiHostIntegrationV2025ApiCreateMultiHostIntegrationRequest): Promise<AxiosResponse<sdk.MultiHostIntegrationsV2025, any>> {
    return this.electronAPI.createMultiHostIntegration(requestParameters);
}
createSourcesWithinMultiHost(requestParameters: sdk.MultiHostIntegrationV2025ApiCreateSourcesWithinMultiHostRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.createSourcesWithinMultiHost(requestParameters);
}
deleteMultiHost(requestParameters: sdk.MultiHostIntegrationV2025ApiDeleteMultiHostRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteMultiHost(requestParameters);
}
getAcctAggregationGroups(requestParameters: sdk.MultiHostIntegrationV2025ApiGetAcctAggregationGroupsRequest): Promise<AxiosResponse<Array<sdk.MultiHostIntegrationsAggScheduleUpdateV2025>, any>> {
    return this.electronAPI.getAcctAggregationGroups(requestParameters);
}
getEntitlementAggregationGroups(requestParameters: sdk.MultiHostIntegrationV2025ApiGetEntitlementAggregationGroupsRequest): Promise<AxiosResponse<Array<sdk.MultiHostIntegrationsAggScheduleUpdateV2025>, any>> {
    return this.electronAPI.getEntitlementAggregationGroups(requestParameters);
}
getMultiHostIntegrations(requestParameters: sdk.MultiHostIntegrationV2025ApiGetMultiHostIntegrationsRequest): Promise<AxiosResponse<sdk.MultiHostIntegrationsV2025, any>> {
    return this.electronAPI.getMultiHostIntegrations(requestParameters);
}
getMultiHostIntegrationsList(requestParameters: sdk.MultiHostIntegrationV2025ApiGetMultiHostIntegrationsListRequest = {}): Promise<AxiosResponse<Array<sdk.MultiHostIntegrationsV2025>, any>> {
    return this.electronAPI.getMultiHostIntegrationsList(requestParameters);
}
getMultiHostSourceCreationErrors(requestParameters: sdk.MultiHostIntegrationV2025ApiGetMultiHostSourceCreationErrorsRequest): Promise<AxiosResponse<Array<sdk.SourceCreationErrorsV2025>, any>> {
    return this.electronAPI.getMultiHostSourceCreationErrors(requestParameters);
}
getMultihostIntegrationTypes(): Promise<AxiosResponse<Array<sdk.MultiHostIntegrationTemplateTypeV2025>, any>> {
    return this.electronAPI.getMultihostIntegrationTypes();
}
getSourcesWithinMultiHost(requestParameters: sdk.MultiHostIntegrationV2025ApiGetSourcesWithinMultiHostRequest): Promise<AxiosResponse<Array<sdk.MultiHostSourcesV2025>, any>> {
    return this.electronAPI.getSourcesWithinMultiHost(requestParameters);
}
testConnectionMultiHostSources(requestParameters: sdk.MultiHostIntegrationV2025ApiTestConnectionMultiHostSourcesRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.testConnectionMultiHostSources(requestParameters);
}
testSourceConnectionMultihost(requestParameters: sdk.MultiHostIntegrationV2025ApiTestSourceConnectionMultihostRequest): Promise<AxiosResponse<sdk.TestSourceConnectionMultihost200ResponseV2025, any>> {
    return this.electronAPI.testSourceConnectionMultihost(requestParameters);
}
updateMultiHostSources(requestParameters: sdk.MultiHostIntegrationV2025ApiUpdateMultiHostSourcesRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.updateMultiHostSources(requestParameters);
}

approveNonEmployeeRequest(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiApproveNonEmployeeRequestRequest): Promise<AxiosResponse<sdk.NonEmployeeApprovalItemV2025, any>> {
    return this.electronAPI.approveNonEmployeeRequest(requestParameters);
}
createNonEmployeeRecord(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeRecordRequest): Promise<AxiosResponse<sdk.NonEmployeeRecordV2025, any>> {
    return this.electronAPI.createNonEmployeeRecord(requestParameters);
}
createNonEmployeeRequest(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeRequestRequest): Promise<AxiosResponse<sdk.NonEmployeeRequestV2025, any>> {
    return this.electronAPI.createNonEmployeeRequest(requestParameters);
}
createNonEmployeeSource(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeSourceRequest): Promise<AxiosResponse<sdk.NonEmployeeSourceWithCloudExternalIdV2025, any>> {
    return this.electronAPI.createNonEmployeeSource(requestParameters);
}
createNonEmployeeSourceSchemaAttributes(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeSourceSchemaAttributesRequest): Promise<AxiosResponse<sdk.NonEmployeeSchemaAttributeV2025, any>> {
    return this.electronAPI.createNonEmployeeSourceSchemaAttributes(requestParameters);
}
deleteNonEmployeeRecord(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeRecordRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteNonEmployeeRecord(requestParameters);
}
deleteNonEmployeeRecordsInBulk(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeRecordsInBulkRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteNonEmployeeRecordsInBulk(requestParameters);
}
deleteNonEmployeeRequest(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeRequestRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteNonEmployeeRequest(requestParameters);
}
deleteNonEmployeeSchemaAttribute(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeSchemaAttributeRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteNonEmployeeSchemaAttribute(requestParameters);
}
deleteNonEmployeeSource(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeSourceRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteNonEmployeeSource(requestParameters);
}
deleteNonEmployeeSourceSchemaAttributes(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeSourceSchemaAttributesRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteNonEmployeeSourceSchemaAttributes(requestParameters);
}
exportNonEmployeeRecords(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiExportNonEmployeeRecordsRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.exportNonEmployeeRecords(requestParameters);
}
exportNonEmployeeSourceSchemaTemplate(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiExportNonEmployeeSourceSchemaTemplateRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.exportNonEmployeeSourceSchemaTemplate(requestParameters);
}
getNonEmployeeApproval(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeApprovalRequest): Promise<AxiosResponse<sdk.NonEmployeeApprovalItemDetailV2025, any>> {
    return this.electronAPI.getNonEmployeeApproval(requestParameters);
}
getNonEmployeeApprovalSummary(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeApprovalSummaryRequest): Promise<AxiosResponse<sdk.NonEmployeeApprovalSummaryV2025, any>> {
    return this.electronAPI.getNonEmployeeApprovalSummary(requestParameters);
}
getNonEmployeeBulkUploadStatus(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeBulkUploadStatusRequest): Promise<AxiosResponse<sdk.NonEmployeeBulkUploadStatusV2025, any>> {
    return this.electronAPI.getNonEmployeeBulkUploadStatus(requestParameters);
}
getNonEmployeeRecord(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeRecordRequest): Promise<AxiosResponse<sdk.NonEmployeeRecordV2025, any>> {
    return this.electronAPI.getNonEmployeeRecord(requestParameters);
}
getNonEmployeeRequest(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeRequestRequest): Promise<AxiosResponse<sdk.NonEmployeeRequestV2025, any>> {
    return this.electronAPI.getNonEmployeeRequest(requestParameters);
}
getNonEmployeeRequestSummary(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeRequestSummaryRequest): Promise<AxiosResponse<sdk.NonEmployeeRequestSummaryV2025, any>> {
    return this.electronAPI.getNonEmployeeRequestSummary(requestParameters);
}
getNonEmployeeSchemaAttribute(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeSchemaAttributeRequest): Promise<AxiosResponse<sdk.NonEmployeeSchemaAttributeV2025, any>> {
    return this.electronAPI.getNonEmployeeSchemaAttribute(requestParameters);
}
getNonEmployeeSource(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeSourceRequest): Promise<AxiosResponse<sdk.NonEmployeeSourceV2025, any>> {
    return this.electronAPI.getNonEmployeeSource(requestParameters);
}
getNonEmployeeSourceSchemaAttributes(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeSourceSchemaAttributesRequest): Promise<AxiosResponse<Array<sdk.NonEmployeeSchemaAttributeV2025>, any>> {
    return this.electronAPI.getNonEmployeeSourceSchemaAttributes(requestParameters);
}
importNonEmployeeRecordsInBulk(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiImportNonEmployeeRecordsInBulkRequest): Promise<AxiosResponse<sdk.NonEmployeeBulkUploadJobV2025, any>> {
    return this.electronAPI.importNonEmployeeRecordsInBulk(requestParameters);
}
listNonEmployeeApprovals(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiListNonEmployeeApprovalsRequest = {}): Promise<AxiosResponse<Array<sdk.NonEmployeeApprovalItemV2025>, any>> {
    return this.electronAPI.listNonEmployeeApprovals(requestParameters);
}
listNonEmployeeRecords(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiListNonEmployeeRecordsRequest = {}): Promise<AxiosResponse<Array<sdk.NonEmployeeRecordV2025>, any>> {
    return this.electronAPI.listNonEmployeeRecords(requestParameters);
}
listNonEmployeeRequests(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiListNonEmployeeRequestsRequest): Promise<AxiosResponse<Array<sdk.NonEmployeeRequestV2025>, any>> {
    return this.electronAPI.listNonEmployeeRequests(requestParameters);
}
listNonEmployeeSources(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiListNonEmployeeSourcesRequest = {}): Promise<AxiosResponse<Array<sdk.NonEmployeeSourceWithNECountV2025>, any>> {
    return this.electronAPI.listNonEmployeeSources(requestParameters);
}
patchNonEmployeeRecord(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiPatchNonEmployeeRecordRequest): Promise<AxiosResponse<sdk.NonEmployeeRecordV2025, any>> {
    return this.electronAPI.patchNonEmployeeRecord(requestParameters);
}
patchNonEmployeeSchemaAttribute(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiPatchNonEmployeeSchemaAttributeRequest): Promise<AxiosResponse<sdk.NonEmployeeSchemaAttributeV2025, any>> {
    return this.electronAPI.patchNonEmployeeSchemaAttribute(requestParameters);
}
patchNonEmployeeSource(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiPatchNonEmployeeSourceRequest): Promise<AxiosResponse<sdk.NonEmployeeSourceV2025, any>> {
    return this.electronAPI.patchNonEmployeeSource(requestParameters);
}
rejectNonEmployeeRequest(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiRejectNonEmployeeRequestRequest): Promise<AxiosResponse<sdk.NonEmployeeApprovalItemV2025, any>> {
    return this.electronAPI.rejectNonEmployeeRequest(requestParameters);
}
updateNonEmployeeRecord(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiUpdateNonEmployeeRecordRequest): Promise<AxiosResponse<sdk.NonEmployeeRecordV2025, any>> {
    return this.electronAPI.updateNonEmployeeRecord(requestParameters);
}

createDomainDkim(requestParameters: sdk.NotificationsV2025ApiCreateDomainDkimRequest): Promise<AxiosResponse<sdk.DomainStatusDtoV2025, any>> {
    return this.electronAPI.createDomainDkim(requestParameters);
}
createNotificationTemplate(requestParameters: sdk.NotificationsV2025ApiCreateNotificationTemplateRequest): Promise<AxiosResponse<sdk.TemplateDtoV2025, any>> {
    return this.electronAPI.createNotificationTemplate(requestParameters);
}
createVerifiedFromAddress(requestParameters: sdk.NotificationsV2025ApiCreateVerifiedFromAddressRequest): Promise<AxiosResponse<sdk.EmailStatusDtoV2025, any>> {
    return this.electronAPI.createVerifiedFromAddress(requestParameters);
}
deleteNotificationTemplatesInBulk(requestParameters: sdk.NotificationsV2025ApiDeleteNotificationTemplatesInBulkRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteNotificationTemplatesInBulk(requestParameters);
}
deleteVerifiedFromAddress(requestParameters: sdk.NotificationsV2025ApiDeleteVerifiedFromAddressRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteVerifiedFromAddress(requestParameters);
}
getDkimAttributes(requestParameters: sdk.NotificationsV2025ApiGetDkimAttributesRequest = {}): Promise<AxiosResponse<Array<sdk.DkimAttributesV2025>, any>> {
    return this.electronAPI.getDkimAttributes(requestParameters);
}
getMailFromAttributes(requestParameters: sdk.NotificationsV2025ApiGetMailFromAttributesRequest): Promise<AxiosResponse<sdk.MailFromAttributesV2025, any>> {
    return this.electronAPI.getMailFromAttributes(requestParameters);
}
getNotificationTemplate(requestParameters: sdk.NotificationsV2025ApiGetNotificationTemplateRequest): Promise<AxiosResponse<sdk.TemplateDtoV2025, any>> {
    return this.electronAPI.getNotificationTemplate(requestParameters);
}
getNotificationsTemplateContext(requestParameters: sdk.NotificationsV2025ApiGetNotificationsTemplateContextRequest = {}): Promise<AxiosResponse<sdk.NotificationTemplateContextV2025, any>> {
    return this.electronAPI.getNotificationsTemplateContext(requestParameters);
}
listFromAddresses(requestParameters: sdk.NotificationsV2025ApiListFromAddressesRequest = {}): Promise<AxiosResponse<Array<sdk.EmailStatusDtoV2025>, any>> {
    return this.electronAPI.listFromAddresses(requestParameters);
}
listNotificationPreferences(requestParameters: sdk.NotificationsV2025ApiListNotificationPreferencesRequest = {}): Promise<AxiosResponse<sdk.PreferencesDtoV2025, any>> {
    return this.electronAPI.listNotificationPreferences(requestParameters);
}
listNotificationTemplateDefaults(requestParameters: sdk.NotificationsV2025ApiListNotificationTemplateDefaultsRequest = {}): Promise<AxiosResponse<Array<sdk.TemplateDtoDefaultV2025>, any>> {
    return this.electronAPI.listNotificationTemplateDefaults(requestParameters);
}
listNotificationTemplates(requestParameters: sdk.NotificationsV2025ApiListNotificationTemplatesRequest = {}): Promise<AxiosResponse<Array<sdk.TemplateDtoV2025>, any>> {
    return this.electronAPI.listNotificationTemplates(requestParameters);
}
putMailFromAttributes(requestParameters: sdk.NotificationsV2025ApiPutMailFromAttributesRequest): Promise<AxiosResponse<sdk.MailFromAttributesV2025, any>> {
    return this.electronAPI.putMailFromAttributes(requestParameters);
}
sendTestNotification(requestParameters: sdk.NotificationsV2025ApiSendTestNotificationRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.sendTestNotification(requestParameters);
}

createOauthClient(requestParameters: sdk.OAuthClientsV2025ApiCreateOauthClientRequest): Promise<AxiosResponse<sdk.CreateOAuthClientResponseV2025, any>> {
    return this.electronAPI.createOauthClient(requestParameters);
}
deleteOauthClient(requestParameters: sdk.OAuthClientsV2025ApiDeleteOauthClientRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteOauthClient(requestParameters);
}
getOauthClient(requestParameters: sdk.OAuthClientsV2025ApiGetOauthClientRequest): Promise<AxiosResponse<sdk.GetOAuthClientResponseV2025, any>> {
    return this.electronAPI.getOauthClient(requestParameters);
}
listOauthClients(requestParameters: sdk.OAuthClientsV2025ApiListOauthClientsRequest = {}): Promise<AxiosResponse<Array<sdk.GetOAuthClientResponseV2025>, any>> {
    return this.electronAPI.listOauthClients(requestParameters);
}
patchOauthClient(requestParameters: sdk.OAuthClientsV2025ApiPatchOauthClientRequest): Promise<AxiosResponse<sdk.GetOAuthClientResponseV2025, any>> {
    return this.electronAPI.patchOauthClient(requestParameters);
}

getOrgConfig(requestParameters: sdk.OrgConfigV2025ApiGetOrgConfigRequest = {}): Promise<AxiosResponse<sdk.OrgConfigV2025, any>> {
    return this.electronAPI.getOrgConfig(requestParameters);
}
getValidTimeZones(requestParameters: sdk.OrgConfigV2025ApiGetValidTimeZonesRequest = {}): Promise<AxiosResponse<Array<string>, any>> {
    return this.electronAPI.getValidTimeZones(requestParameters);
}
patchOrgConfig(requestParameters: sdk.OrgConfigV2025ApiPatchOrgConfigRequest): Promise<AxiosResponse<sdk.OrgConfigV2025, any>> {
    return this.electronAPI.patchOrgConfig(requestParameters);
}

createPasswordOrgConfig(requestParameters: sdk.PasswordConfigurationV2025ApiCreatePasswordOrgConfigRequest): Promise<AxiosResponse<sdk.PasswordOrgConfigV2025, any>> {
    return this.electronAPI.createPasswordOrgConfig(requestParameters);
}
getPasswordOrgConfig(): Promise<AxiosResponse<sdk.PasswordOrgConfigV2025, any>> {
    return this.electronAPI.getPasswordOrgConfig();
}
putPasswordOrgConfig(requestParameters: sdk.PasswordConfigurationV2025ApiPutPasswordOrgConfigRequest): Promise<AxiosResponse<sdk.PasswordOrgConfigV2025, any>> {
    return this.electronAPI.putPasswordOrgConfig(requestParameters);
}

getPasswordDictionary(): Promise<AxiosResponse<string, any>> {
    return this.electronAPI.getPasswordDictionary();
}
putPasswordDictionary(requestParameters: sdk.PasswordDictionaryV2025ApiPutPasswordDictionaryRequest = {}): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.putPasswordDictionary(requestParameters);
}

createDigitToken(requestParameters: sdk.PasswordManagementV2025ApiCreateDigitTokenRequest): Promise<AxiosResponse<sdk.PasswordDigitTokenV2025, any>> {
    return this.electronAPI.createDigitToken(requestParameters);
}
getPasswordChangeStatus(requestParameters: sdk.PasswordManagementV2025ApiGetPasswordChangeStatusRequest): Promise<AxiosResponse<sdk.PasswordStatusV2025, any>> {
    return this.electronAPI.getPasswordChangeStatus(requestParameters);
}
queryPasswordInfo(requestParameters: sdk.PasswordManagementV2025ApiQueryPasswordInfoRequest): Promise<AxiosResponse<sdk.PasswordInfoV2025, any>> {
    return this.electronAPI.queryPasswordInfo(requestParameters);
}
setPassword(requestParameters: sdk.PasswordManagementV2025ApiSetPasswordRequest): Promise<AxiosResponse<sdk.PasswordChangeResponseV2025, any>> {
    return this.electronAPI.setPassword(requestParameters);
}

createPasswordPolicy(requestParameters: sdk.PasswordPoliciesV2025ApiCreatePasswordPolicyRequest): Promise<AxiosResponse<sdk.PasswordPolicyV3DtoV2025, any>> {
    return this.electronAPI.createPasswordPolicy(requestParameters);
}
deletePasswordPolicy(requestParameters: sdk.PasswordPoliciesV2025ApiDeletePasswordPolicyRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deletePasswordPolicy(requestParameters);
}
getPasswordPolicyById(requestParameters: sdk.PasswordPoliciesV2025ApiGetPasswordPolicyByIdRequest): Promise<AxiosResponse<sdk.PasswordPolicyV3DtoV2025, any>> {
    return this.electronAPI.getPasswordPolicyById(requestParameters);
}
listPasswordPolicies(requestParameters: sdk.PasswordPoliciesV2025ApiListPasswordPoliciesRequest = {}): Promise<AxiosResponse<Array<sdk.PasswordPolicyV3DtoV2025>, any>> {
    return this.electronAPI.listPasswordPolicies(requestParameters);
}
setPasswordPolicy(requestParameters: sdk.PasswordPoliciesV2025ApiSetPasswordPolicyRequest): Promise<AxiosResponse<sdk.PasswordPolicyV3DtoV2025, any>> {
    return this.electronAPI.setPasswordPolicy(requestParameters);
}

createPasswordSyncGroup(requestParameters: sdk.PasswordSyncGroupsV2025ApiCreatePasswordSyncGroupRequest): Promise<AxiosResponse<sdk.PasswordSyncGroupV2025, any>> {
    return this.electronAPI.createPasswordSyncGroup(requestParameters);
}
deletePasswordSyncGroup(requestParameters: sdk.PasswordSyncGroupsV2025ApiDeletePasswordSyncGroupRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deletePasswordSyncGroup(requestParameters);
}
getPasswordSyncGroup(requestParameters: sdk.PasswordSyncGroupsV2025ApiGetPasswordSyncGroupRequest): Promise<AxiosResponse<sdk.PasswordSyncGroupV2025, any>> {
    return this.electronAPI.getPasswordSyncGroup(requestParameters);
}
getPasswordSyncGroups(requestParameters: sdk.PasswordSyncGroupsV2025ApiGetPasswordSyncGroupsRequest = {}): Promise<AxiosResponse<Array<sdk.PasswordSyncGroupV2025>, any>> {
    return this.electronAPI.getPasswordSyncGroups(requestParameters);
}
updatePasswordSyncGroup(requestParameters: sdk.PasswordSyncGroupsV2025ApiUpdatePasswordSyncGroupRequest): Promise<AxiosResponse<sdk.PasswordSyncGroupV2025, any>> {
    return this.electronAPI.updatePasswordSyncGroup(requestParameters);
}

createPersonalAccessToken(requestParameters: sdk.PersonalAccessTokensV2025ApiCreatePersonalAccessTokenRequest): Promise<AxiosResponse<sdk.CreatePersonalAccessTokenResponseV2025, any>> {
    return this.electronAPI.createPersonalAccessToken(requestParameters);
}
deletePersonalAccessToken(requestParameters: sdk.PersonalAccessTokensV2025ApiDeletePersonalAccessTokenRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deletePersonalAccessToken(requestParameters);
}
listPersonalAccessTokens(requestParameters: sdk.PersonalAccessTokensV2025ApiListPersonalAccessTokensRequest = {}): Promise<AxiosResponse<Array<sdk.GetPersonalAccessTokenResponseV2025>, any>> {
    return this.electronAPI.listPersonalAccessTokens(requestParameters);
}
patchPersonalAccessToken(requestParameters: sdk.PersonalAccessTokensV2025ApiPatchPersonalAccessTokenRequest): Promise<AxiosResponse<sdk.GetPersonalAccessTokenResponseV2025, any>> {
    return this.electronAPI.patchPersonalAccessToken(requestParameters);
}

getPublicIdentities(requestParameters: sdk.PublicIdentitiesV2025ApiGetPublicIdentitiesRequest = {}): Promise<AxiosResponse<Array<sdk.PublicIdentityV2025>, any>> {
    return this.electronAPI.getPublicIdentities(requestParameters);
}

getPublicIdentityConfig(): Promise<AxiosResponse<sdk.PublicIdentityConfigV2025, any>> {
    return this.electronAPI.getPublicIdentityConfig();
}
updatePublicIdentityConfig(requestParameters: sdk.PublicIdentitiesConfigV2025ApiUpdatePublicIdentityConfigRequest): Promise<AxiosResponse<sdk.PublicIdentityConfigV2025, any>> {
    return this.electronAPI.updatePublicIdentityConfig(requestParameters);
}

cancelReport(requestParameters: sdk.ReportsDataExtractionV2025ApiCancelReportRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.cancelReport(requestParameters);
}
getReport(requestParameters: sdk.ReportsDataExtractionV2025ApiGetReportRequest): Promise<AxiosResponse<File, any>> {
    return this.electronAPI.getReport(requestParameters);
}
getReportResult(requestParameters: sdk.ReportsDataExtractionV2025ApiGetReportResultRequest): Promise<AxiosResponse<sdk.ReportResultsV2025, any>> {
    return this.electronAPI.getReportResult(requestParameters);
}
startReport(requestParameters: sdk.ReportsDataExtractionV2025ApiStartReportRequest): Promise<AxiosResponse<sdk.TaskResultDetailsV2025, any>> {
    return this.electronAPI.startReport(requestParameters);
}

listRequestableObjects(requestParameters: sdk.RequestableObjectsV2025ApiListRequestableObjectsRequest = {}): Promise<AxiosResponse<Array<sdk.RequestableObjectV2025>, any>> {
    return this.electronAPI.listRequestableObjects(requestParameters);
}

createRoleInsightRequests(requestParameters: sdk.RoleInsightsV2025ApiCreateRoleInsightRequestsRequest = {}): Promise<AxiosResponse<sdk.RoleInsightsResponseV2025, any>> {
    return this.electronAPI.createRoleInsightRequests(requestParameters);
}
downloadRoleInsightsEntitlementsChanges(requestParameters: sdk.RoleInsightsV2025ApiDownloadRoleInsightsEntitlementsChangesRequest): Promise<AxiosResponse<string, any>> {
    return this.electronAPI.downloadRoleInsightsEntitlementsChanges(requestParameters);
}
getEntitlementChangesIdentities(requestParameters: sdk.RoleInsightsV2025ApiGetEntitlementChangesIdentitiesRequest): Promise<AxiosResponse<Array<sdk.RoleInsightsIdentitiesV2025>, any>> {
    return this.electronAPI.getEntitlementChangesIdentities(requestParameters);
}
getRoleInsight(requestParameters: sdk.RoleInsightsV2025ApiGetRoleInsightRequest): Promise<AxiosResponse<sdk.RoleInsightV2025, any>> {
    return this.electronAPI.getRoleInsight(requestParameters);
}
getRoleInsights(requestParameters: sdk.RoleInsightsV2025ApiGetRoleInsightsRequest = {}): Promise<AxiosResponse<Array<sdk.RoleInsightV2025>, any>> {
    return this.electronAPI.getRoleInsights(requestParameters);
}
getRoleInsightsCurrentEntitlements(requestParameters: sdk.RoleInsightsV2025ApiGetRoleInsightsCurrentEntitlementsRequest): Promise<AxiosResponse<Array<sdk.RoleInsightsEntitlementV2025>, any>> {
    return this.electronAPI.getRoleInsightsCurrentEntitlements(requestParameters);
}
getRoleInsightsEntitlementsChanges(requestParameters: sdk.RoleInsightsV2025ApiGetRoleInsightsEntitlementsChangesRequest): Promise<AxiosResponse<Array<sdk.RoleInsightsEntitlementChangesV2025>, any>> {
    return this.electronAPI.getRoleInsightsEntitlementsChanges(requestParameters);
}
getRoleInsightsRequests(requestParameters: sdk.RoleInsightsV2025ApiGetRoleInsightsRequestsRequest): Promise<AxiosResponse<sdk.RoleInsightsResponseV2025, any>> {
    return this.electronAPI.getRoleInsightsRequests(requestParameters);
}
getRoleInsightsSummary(requestParameters: sdk.RoleInsightsV2025ApiGetRoleInsightsSummaryRequest = {}): Promise<AxiosResponse<sdk.RoleInsightsSummaryV2025, any>> {
    return this.electronAPI.getRoleInsightsSummary(requestParameters);
}

createRole(requestParameters: sdk.RolesV2025ApiCreateRoleRequest): Promise<AxiosResponse<sdk.RoleV2025, any>> {
    return this.electronAPI.createRole(requestParameters);
}
deleteBulkRoles(requestParameters: sdk.RolesV2025ApiDeleteBulkRolesRequest): Promise<AxiosResponse<sdk.TaskResultDtoV2025, any>> {
    return this.electronAPI.deleteBulkRoles(requestParameters);
}
deleteMetadataFromRoleByKeyAndValue(requestParameters: sdk.RolesV2025ApiDeleteMetadataFromRoleByKeyAndValueRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteMetadataFromRoleByKeyAndValue(requestParameters);
}
deleteRole(requestParameters: sdk.RolesV2025ApiDeleteRoleRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteRole(requestParameters);
}
getBulkUpdateStatus(): Promise<AxiosResponse<Array<sdk.RoleGetAllBulkUpdateResponseV2025>, any>> {
    return this.electronAPI.getBulkUpdateStatus();
}
getBulkUpdateStatusById(requestParameters: sdk.RolesV2025ApiGetBulkUpdateStatusByIdRequest): Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>> {
    return this.electronAPI.getBulkUpdateStatusById(requestParameters);
}
getRole(requestParameters: sdk.RolesV2025ApiGetRoleRequest): Promise<AxiosResponse<sdk.RoleV2025, any>> {
    return this.electronAPI.getRole(requestParameters);
}
getRoleAssignedIdentities(requestParameters: sdk.RolesV2025ApiGetRoleAssignedIdentitiesRequest): Promise<AxiosResponse<Array<sdk.RoleIdentityV2025>, any>> {
    return this.electronAPI.getRoleAssignedIdentities(requestParameters);
}
getRoleEntitlements(requestParameters: sdk.RolesV2025ApiGetRoleEntitlementsRequest): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>> {
    return this.electronAPI.getRoleEntitlements(requestParameters);
}
listRoles(requestParameters: sdk.RolesV2025ApiListRolesRequest = {}): Promise<AxiosResponse<Array<sdk.RoleV2025>, any>> {
    return this.electronAPI.listRoles(requestParameters);
}
patchRole(requestParameters: sdk.RolesV2025ApiPatchRoleRequest): Promise<AxiosResponse<sdk.RoleV2025, any>> {
    return this.electronAPI.patchRole(requestParameters);
}
searchRolesByFilter(requestParameters: sdk.RolesV2025ApiSearchRolesByFilterRequest = {}): Promise<AxiosResponse<sdk.RoleV2025, any>> {
    return this.electronAPI.searchRolesByFilter(requestParameters);
}
updateAttributeKeyAndValueToRole(requestParameters: sdk.RolesV2025ApiUpdateAttributeKeyAndValueToRoleRequest): Promise<AxiosResponse<sdk.RoleV2025, any>> {
    return this.electronAPI.updateAttributeKeyAndValueToRole(requestParameters);
}
updateRolesMetadataByFilter(requestParameters: sdk.RolesV2025ApiUpdateRolesMetadataByFilterRequest): Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>> {
    return this.electronAPI.updateRolesMetadataByFilter(requestParameters);
}
updateRolesMetadataByIds(requestParameters: sdk.RolesV2025ApiUpdateRolesMetadataByIdsRequest): Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>> {
    return this.electronAPI.updateRolesMetadataByIds(requestParameters);
}
updateRolesMetadataByQuery(requestParameters: sdk.RolesV2025ApiUpdateRolesMetadataByQueryRequest): Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>> {
    return this.electronAPI.updateRolesMetadataByQuery(requestParameters);
}

createSIMIntegration(requestParameters: sdk.SIMIntegrationsV2025ApiCreateSIMIntegrationRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    return this.electronAPI.createSIMIntegration(requestParameters);
}
deleteSIMIntegration(requestParameters: sdk.SIMIntegrationsV2025ApiDeleteSIMIntegrationRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteSIMIntegration(requestParameters);
}
getSIMIntegration(requestParameters: sdk.SIMIntegrationsV2025ApiGetSIMIntegrationRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    return this.electronAPI.getSIMIntegration(requestParameters);
}
getSIMIntegrations(requestParameters: sdk.SIMIntegrationsV2025ApiGetSIMIntegrationsRequest = {}): Promise<AxiosResponse<Array<sdk.ServiceDeskIntegrationDtoV2025>, any>> {
    return this.electronAPI.getSIMIntegrations(requestParameters);
}
patchBeforeProvisioningRule(requestParameters: sdk.SIMIntegrationsV2025ApiPatchBeforeProvisioningRuleRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    return this.electronAPI.patchBeforeProvisioningRule(requestParameters);
}
patchSIMAttributes(requestParameters: sdk.SIMIntegrationsV2025ApiPatchSIMAttributesRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    return this.electronAPI.patchSIMAttributes(requestParameters);
}
putSIMIntegration(requestParameters: sdk.SIMIntegrationsV2025ApiPutSIMIntegrationRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    return this.electronAPI.putSIMIntegration(requestParameters);
}

createSodPolicy(requestParameters: sdk.SODPoliciesV2025ApiCreateSodPolicyRequest): Promise<AxiosResponse<sdk.SodPolicyV2025, any>> {
    return this.electronAPI.createSodPolicy(requestParameters);
}
deleteSodPolicy(requestParameters: sdk.SODPoliciesV2025ApiDeleteSodPolicyRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteSodPolicy(requestParameters);
}
deleteSodPolicySchedule(requestParameters: sdk.SODPoliciesV2025ApiDeleteSodPolicyScheduleRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteSodPolicySchedule(requestParameters);
}
getCustomViolationReport(requestParameters: sdk.SODPoliciesV2025ApiGetCustomViolationReportRequest): Promise<AxiosResponse<File, any>> {
    return this.electronAPI.getCustomViolationReport(requestParameters);
}
getDefaultViolationReport(requestParameters: sdk.SODPoliciesV2025ApiGetDefaultViolationReportRequest): Promise<AxiosResponse<File, any>> {
    return this.electronAPI.getDefaultViolationReport(requestParameters);
}
getSodAllReportRunStatus(): Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>> {
    return this.electronAPI.getSodAllReportRunStatus();
}
getSodPolicy(requestParameters: sdk.SODPoliciesV2025ApiGetSodPolicyRequest): Promise<AxiosResponse<sdk.SodPolicyV2025, any>> {
    return this.electronAPI.getSodPolicy(requestParameters);
}
getSodPolicySchedule(requestParameters: sdk.SODPoliciesV2025ApiGetSodPolicyScheduleRequest): Promise<AxiosResponse<sdk.SodPolicyScheduleV2025, any>> {
    return this.electronAPI.getSodPolicySchedule(requestParameters);
}
getSodViolationReportRunStatus(requestParameters: sdk.SODPoliciesV2025ApiGetSodViolationReportRunStatusRequest): Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>> {
    return this.electronAPI.getSodViolationReportRunStatus(requestParameters);
}
getSodViolationReportStatus(requestParameters: sdk.SODPoliciesV2025ApiGetSodViolationReportStatusRequest): Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>> {
    return this.electronAPI.getSodViolationReportStatus(requestParameters);
}
listSodPolicies(requestParameters: sdk.SODPoliciesV2025ApiListSodPoliciesRequest = {}): Promise<AxiosResponse<Array<sdk.SodPolicyV2025>, any>> {
    return this.electronAPI.listSodPolicies(requestParameters);
}
patchSodPolicy(requestParameters: sdk.SODPoliciesV2025ApiPatchSodPolicyRequest): Promise<AxiosResponse<sdk.SodPolicyV2025, any>> {
    return this.electronAPI.patchSodPolicy(requestParameters);
}
putPolicySchedule(requestParameters: sdk.SODPoliciesV2025ApiPutPolicyScheduleRequest): Promise<AxiosResponse<sdk.SodPolicyScheduleV2025, any>> {
    return this.electronAPI.putPolicySchedule(requestParameters);
}
putSodPolicy(requestParameters: sdk.SODPoliciesV2025ApiPutSodPolicyRequest): Promise<AxiosResponse<sdk.SodPolicyV2025, any>> {
    return this.electronAPI.putSodPolicy(requestParameters);
}
startEvaluateSodPolicy(requestParameters: sdk.SODPoliciesV2025ApiStartEvaluateSodPolicyRequest): Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>> {
    return this.electronAPI.startEvaluateSodPolicy(requestParameters);
}
startSodAllPoliciesForOrg(requestParameters: sdk.SODPoliciesV2025ApiStartSodAllPoliciesForOrgRequest = {}): Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>> {
    return this.electronAPI.startSodAllPoliciesForOrg(requestParameters);
}
startSodPolicy(requestParameters: sdk.SODPoliciesV2025ApiStartSodPolicyRequest): Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>> {
    return this.electronAPI.startSodPolicy(requestParameters);
}

startPredictSodViolations(requestParameters: sdk.SODViolationsV2025ApiStartPredictSodViolationsRequest): Promise<AxiosResponse<sdk.ViolationPredictionV2025, any>> {
    return this.electronAPI.startPredictSodViolations(requestParameters);
}
startViolationCheck(requestParameters: sdk.SODViolationsV2025ApiStartViolationCheckRequest): Promise<AxiosResponse<sdk.SodViolationCheckV2025, any>> {
    return this.electronAPI.startViolationCheck(requestParameters);
}

exportSpConfig(requestParameters: sdk.SPConfigV2025ApiExportSpConfigRequest): Promise<AxiosResponse<sdk.SpConfigExportJobV2025, any>> {
    return this.electronAPI.exportSpConfig(requestParameters);
}
getSpConfigExport(requestParameters: sdk.SPConfigV2025ApiGetSpConfigExportRequest): Promise<AxiosResponse<sdk.SpConfigExportResultsV2025, any>> {
    return this.electronAPI.getSpConfigExport(requestParameters);
}
getSpConfigExportStatus(requestParameters: sdk.SPConfigV2025ApiGetSpConfigExportStatusRequest): Promise<AxiosResponse<sdk.SpConfigExportJobStatusV2025, any>> {
    return this.electronAPI.getSpConfigExportStatus(requestParameters);
}
getSpConfigImport(requestParameters: sdk.SPConfigV2025ApiGetSpConfigImportRequest): Promise<AxiosResponse<sdk.SpConfigImportResultsV2025, any>> {
    return this.electronAPI.getSpConfigImport(requestParameters);
}
getSpConfigImportStatus(requestParameters: sdk.SPConfigV2025ApiGetSpConfigImportStatusRequest): Promise<AxiosResponse<sdk.SpConfigImportJobStatusV2025, any>> {
    return this.electronAPI.getSpConfigImportStatus(requestParameters);
}
importSpConfig(requestParameters: sdk.SPConfigV2025ApiImportSpConfigRequest): Promise<AxiosResponse<sdk.SpConfigJobV2025, any>> {
    return this.electronAPI.importSpConfig(requestParameters);
}
listSpConfigObjects(): Promise<AxiosResponse<Array<sdk.SpConfigObjectV2025>, any>> {
    return this.electronAPI.listSpConfigObjects();
}

createSavedSearch(requestParameters: sdk.SavedSearchV2025ApiCreateSavedSearchRequest): Promise<AxiosResponse<sdk.SavedSearchV2025, any>> {
    return this.electronAPI.createSavedSearch(requestParameters);
}
deleteSavedSearch(requestParameters: sdk.SavedSearchV2025ApiDeleteSavedSearchRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteSavedSearch(requestParameters);
}
executeSavedSearch(requestParameters: sdk.SavedSearchV2025ApiExecuteSavedSearchRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.executeSavedSearch(requestParameters);
}
getSavedSearch(requestParameters: sdk.SavedSearchV2025ApiGetSavedSearchRequest): Promise<AxiosResponse<sdk.SavedSearchV2025, any>> {
    return this.electronAPI.getSavedSearch(requestParameters);
}
listSavedSearches(requestParameters: sdk.SavedSearchV2025ApiListSavedSearchesRequest = {}): Promise<AxiosResponse<Array<sdk.SavedSearchV2025>, any>> {
    return this.electronAPI.listSavedSearches(requestParameters);
}
putSavedSearch(requestParameters: sdk.SavedSearchV2025ApiPutSavedSearchRequest): Promise<AxiosResponse<sdk.SavedSearchV2025, any>> {
    return this.electronAPI.putSavedSearch(requestParameters);
}

createScheduledSearch(requestParameters: sdk.ScheduledSearchV2025ApiCreateScheduledSearchRequest): Promise<AxiosResponse<sdk.ScheduledSearchV2025, any>> {
    return this.electronAPI.createScheduledSearch(requestParameters);
}
deleteScheduledSearch(requestParameters: sdk.ScheduledSearchV2025ApiDeleteScheduledSearchRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteScheduledSearch(requestParameters);
}
getScheduledSearch(requestParameters: sdk.ScheduledSearchV2025ApiGetScheduledSearchRequest): Promise<AxiosResponse<sdk.ScheduledSearchV2025, any>> {
    return this.electronAPI.getScheduledSearch(requestParameters);
}
listScheduledSearch(requestParameters: sdk.ScheduledSearchV2025ApiListScheduledSearchRequest = {}): Promise<AxiosResponse<Array<sdk.ScheduledSearchV2025>, any>> {
    return this.electronAPI.listScheduledSearch(requestParameters);
}
unsubscribeScheduledSearch(requestParameters: sdk.ScheduledSearchV2025ApiUnsubscribeScheduledSearchRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.unsubscribeScheduledSearch(requestParameters);
}
updateScheduledSearch(requestParameters: sdk.ScheduledSearchV2025ApiUpdateScheduledSearchRequest): Promise<AxiosResponse<sdk.ScheduledSearchV2025, any>> {
    return this.electronAPI.updateScheduledSearch(requestParameters);
}

searchAggregate(requestParameters: sdk.SearchV2025ApiSearchAggregateRequest): Promise<AxiosResponse<sdk.AggregationResultV2025, any>> {
    return this.electronAPI.searchAggregate(requestParameters);
}
searchCount(requestParameters: sdk.SearchV2025ApiSearchCountRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.searchCount(requestParameters);
}
searchGet(requestParameters: sdk.SearchV2025ApiSearchGetRequest): Promise<AxiosResponse<sdk.SearchDocumentV2025, any>> {
    return this.electronAPI.searchGet(requestParameters);
}
searchPost(requestParameters: sdk.SearchV2025ApiSearchPostRequest): Promise<AxiosResponse<Array<sdk.SearchDocumentsV2025>, any>> {
    return this.electronAPI.searchPost(requestParameters);
}

createSearchAttributeConfig(requestParameters: sdk.SearchAttributeConfigurationV2025ApiCreateSearchAttributeConfigRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.createSearchAttributeConfig(requestParameters);
}
deleteSearchAttributeConfig(requestParameters: sdk.SearchAttributeConfigurationV2025ApiDeleteSearchAttributeConfigRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteSearchAttributeConfig(requestParameters);
}
getSearchAttributeConfig(requestParameters: sdk.SearchAttributeConfigurationV2025ApiGetSearchAttributeConfigRequest): Promise<AxiosResponse<Array<sdk.SearchAttributeConfigV2025>, any>> {
    return this.electronAPI.getSearchAttributeConfig(requestParameters);
}
getSingleSearchAttributeConfig(requestParameters: sdk.SearchAttributeConfigurationV2025ApiGetSingleSearchAttributeConfigRequest): Promise<AxiosResponse<sdk.SearchAttributeConfigV2025, any>> {
    return this.electronAPI.getSingleSearchAttributeConfig(requestParameters);
}
patchSearchAttributeConfig(requestParameters: sdk.SearchAttributeConfigurationV2025ApiPatchSearchAttributeConfigRequest): Promise<AxiosResponse<sdk.SearchAttributeConfigV2025, any>> {
    return this.electronAPI.patchSearchAttributeConfig(requestParameters);
}

createSegment(requestParameters: sdk.SegmentsV2025ApiCreateSegmentRequest): Promise<AxiosResponse<sdk.SegmentV2025, any>> {
    return this.electronAPI.createSegment(requestParameters);
}
deleteSegment(requestParameters: sdk.SegmentsV2025ApiDeleteSegmentRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteSegment(requestParameters);
}
getSegment(requestParameters: sdk.SegmentsV2025ApiGetSegmentRequest): Promise<AxiosResponse<sdk.SegmentV2025, any>> {
    return this.electronAPI.getSegment(requestParameters);
}
listSegments(requestParameters: sdk.SegmentsV2025ApiListSegmentsRequest = {}): Promise<AxiosResponse<Array<sdk.SegmentV2025>, any>> {
    return this.electronAPI.listSegments(requestParameters);
}
patchSegment(requestParameters: sdk.SegmentsV2025ApiPatchSegmentRequest): Promise<AxiosResponse<sdk.SegmentV2025, any>> {
    return this.electronAPI.patchSegment(requestParameters);
}

createServiceDeskIntegration(requestParameters: sdk.ServiceDeskIntegrationV2025ApiCreateServiceDeskIntegrationRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    return this.electronAPI.createServiceDeskIntegration(requestParameters);
}
deleteServiceDeskIntegration(requestParameters: sdk.ServiceDeskIntegrationV2025ApiDeleteServiceDeskIntegrationRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteServiceDeskIntegration(requestParameters);
}
getServiceDeskIntegration(requestParameters: sdk.ServiceDeskIntegrationV2025ApiGetServiceDeskIntegrationRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    return this.electronAPI.getServiceDeskIntegration(requestParameters);
}
getServiceDeskIntegrationTemplate(requestParameters: sdk.ServiceDeskIntegrationV2025ApiGetServiceDeskIntegrationTemplateRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationTemplateDtoV2025, any>> {
    return this.electronAPI.getServiceDeskIntegrationTemplate(requestParameters);
}
getServiceDeskIntegrationTypes(): Promise<AxiosResponse<Array<sdk.ServiceDeskIntegrationTemplateTypeV2025>, any>> {
    return this.electronAPI.getServiceDeskIntegrationTypes();
}
getServiceDeskIntegrations(requestParameters: sdk.ServiceDeskIntegrationV2025ApiGetServiceDeskIntegrationsRequest = {}): Promise<AxiosResponse<Array<sdk.ServiceDeskIntegrationDtoV2025>, any>> {
    return this.electronAPI.getServiceDeskIntegrations(requestParameters);
}
getStatusCheckDetails(): Promise<AxiosResponse<sdk.QueuedCheckConfigDetailsV2025, any>> {
    return this.electronAPI.getStatusCheckDetails();
}
patchServiceDeskIntegration(requestParameters: sdk.ServiceDeskIntegrationV2025ApiPatchServiceDeskIntegrationRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    return this.electronAPI.patchServiceDeskIntegration(requestParameters);
}
putServiceDeskIntegration(requestParameters: sdk.ServiceDeskIntegrationV2025ApiPutServiceDeskIntegrationRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    return this.electronAPI.putServiceDeskIntegration(requestParameters);
}
updateStatusCheckDetails(requestParameters: sdk.ServiceDeskIntegrationV2025ApiUpdateStatusCheckDetailsRequest): Promise<AxiosResponse<sdk.QueuedCheckConfigDetailsV2025, any>> {
    return this.electronAPI.updateStatusCheckDetails(requestParameters);
}

getStatusBySourceId(requestParameters: sdk.SourceUsagesV2025ApiGetStatusBySourceIdRequest): Promise<AxiosResponse<sdk.SourceUsageStatusV2025, any>> {
    return this.electronAPI.getStatusBySourceId(requestParameters);
}
getUsagesBySourceId(requestParameters: sdk.SourceUsagesV2025ApiGetUsagesBySourceIdRequest): Promise<AxiosResponse<Array<sdk.SourceUsageV2025>, any>> {
    return this.electronAPI.getUsagesBySourceId(requestParameters);
}

createProvisioningPolicy(requestParameters: sdk.SourcesV2025ApiCreateProvisioningPolicyRequest): Promise<AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>> {
    return this.electronAPI.createProvisioningPolicy(requestParameters);
}
createSource(requestParameters: sdk.SourcesV2025ApiCreateSourceRequest): Promise<AxiosResponse<sdk.SourceV2025, any>> {
    return this.electronAPI.createSource(requestParameters);
}
createSourceSchedule(requestParameters: sdk.SourcesV2025ApiCreateSourceScheduleRequest): Promise<AxiosResponse<sdk.Schedule1V2025, any>> {
    return this.electronAPI.createSourceSchedule(requestParameters);
}
createSourceSchema(requestParameters: sdk.SourcesV2025ApiCreateSourceSchemaRequest): Promise<AxiosResponse<sdk.SchemaV2025, any>> {
    return this.electronAPI.createSourceSchema(requestParameters);
}
deleteAccountsAsync(requestParameters: sdk.SourcesV2025ApiDeleteAccountsAsyncRequest): Promise<AxiosResponse<sdk.TaskResultDtoV2025, any>> {
    return this.electronAPI.deleteAccountsAsync(requestParameters);
}
deleteNativeChangeDetectionConfig(requestParameters: sdk.SourcesV2025ApiDeleteNativeChangeDetectionConfigRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteNativeChangeDetectionConfig(requestParameters);
}
deleteProvisioningPolicy(requestParameters: sdk.SourcesV2025ApiDeleteProvisioningPolicyRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteProvisioningPolicy(requestParameters);
}
deleteSource(requestParameters: sdk.SourcesV2025ApiDeleteSourceRequest): Promise<AxiosResponse<sdk.DeleteSource202ResponseV2025, any>> {
    return this.electronAPI.deleteSource(requestParameters);
}
deleteSourceSchedule(requestParameters: sdk.SourcesV2025ApiDeleteSourceScheduleRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteSourceSchedule(requestParameters);
}
deleteSourceSchema(requestParameters: sdk.SourcesV2025ApiDeleteSourceSchemaRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteSourceSchema(requestParameters);
}
getAccountsSchema(requestParameters: sdk.SourcesV2025ApiGetAccountsSchemaRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.getAccountsSchema(requestParameters);
}
getCorrelationConfig(requestParameters: sdk.SourcesV2025ApiGetCorrelationConfigRequest): Promise<AxiosResponse<sdk.CorrelationConfigV2025, any>> {
    return this.electronAPI.getCorrelationConfig(requestParameters);
}
getEntitlementsSchema(requestParameters: sdk.SourcesV2025ApiGetEntitlementsSchemaRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.getEntitlementsSchema(requestParameters);
}
getNativeChangeDetectionConfig(requestParameters: sdk.SourcesV2025ApiGetNativeChangeDetectionConfigRequest): Promise<AxiosResponse<sdk.NativeChangeDetectionConfigV2025, any>> {
    return this.electronAPI.getNativeChangeDetectionConfig(requestParameters);
}
getProvisioningPolicy(requestParameters: sdk.SourcesV2025ApiGetProvisioningPolicyRequest): Promise<AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>> {
    return this.electronAPI.getProvisioningPolicy(requestParameters);
}
getSource(requestParameters: sdk.SourcesV2025ApiGetSourceRequest): Promise<AxiosResponse<sdk.SourceV2025, any>> {
    return this.electronAPI.getSource(requestParameters);
}
getSourceAttrSyncConfig(requestParameters: sdk.SourcesV2025ApiGetSourceAttrSyncConfigRequest): Promise<AxiosResponse<sdk.AttrSyncSourceConfigV2025, any>> {
    return this.electronAPI.getSourceAttrSyncConfig(requestParameters);
}
getSourceConfig(requestParameters: sdk.SourcesV2025ApiGetSourceConfigRequest): Promise<AxiosResponse<sdk.ConnectorDetailV2025, any>> {
    return this.electronAPI.getSourceConfig(requestParameters);
}
getSourceConnections(requestParameters: sdk.SourcesV2025ApiGetSourceConnectionsRequest): Promise<AxiosResponse<sdk.SourceConnectionsDtoV2025, any>> {
    return this.electronAPI.getSourceConnections(requestParameters);
}
getSourceEntitlementRequestConfig(requestParameters: sdk.SourcesV2025ApiGetSourceEntitlementRequestConfigRequest = {}): Promise<AxiosResponse<sdk.SourceEntitlementRequestConfigV2025, any>> {
    return this.electronAPI.getSourceEntitlementRequestConfig(requestParameters);
}
getSourceHealth(requestParameters: sdk.SourcesV2025ApiGetSourceHealthRequest): Promise<AxiosResponse<sdk.SourceHealthDtoV2025, any>> {
    return this.electronAPI.getSourceHealth(requestParameters);
}
getSourceSchedule(requestParameters: sdk.SourcesV2025ApiGetSourceScheduleRequest): Promise<AxiosResponse<sdk.Schedule1V2025, any>> {
    return this.electronAPI.getSourceSchedule(requestParameters);
}
getSourceSchedules(requestParameters: sdk.SourcesV2025ApiGetSourceSchedulesRequest): Promise<AxiosResponse<Array<sdk.Schedule1V2025>, any>> {
    return this.electronAPI.getSourceSchedules(requestParameters);
}
getSourceSchema(requestParameters: sdk.SourcesV2025ApiGetSourceSchemaRequest): Promise<AxiosResponse<sdk.SchemaV2025, any>> {
    return this.electronAPI.getSourceSchema(requestParameters);
}
getSourceSchemas(requestParameters: sdk.SourcesV2025ApiGetSourceSchemasRequest): Promise<AxiosResponse<Array<sdk.SchemaV2025>, any>> {
    return this.electronAPI.getSourceSchemas(requestParameters);
}
importAccounts(requestParameters: sdk.SourcesV2025ApiImportAccountsRequest): Promise<AxiosResponse<sdk.LoadAccountsTaskV2025, any>> {
    return this.electronAPI.importAccounts(requestParameters);
}
importAccountsSchema(requestParameters: sdk.SourcesV2025ApiImportAccountsSchemaRequest): Promise<AxiosResponse<sdk.SchemaV2025, any>> {
    return this.electronAPI.importAccountsSchema(requestParameters);
}
importConnectorFile(requestParameters: sdk.SourcesV2025ApiImportConnectorFileRequest): Promise<AxiosResponse<sdk.SourceV2025, any>> {
    return this.electronAPI.importConnectorFile(requestParameters);
}
importEntitlementsSchema(requestParameters: sdk.SourcesV2025ApiImportEntitlementsSchemaRequest): Promise<AxiosResponse<sdk.SchemaV2025, any>> {
    return this.electronAPI.importEntitlementsSchema(requestParameters);
}
importUncorrelatedAccounts(requestParameters: sdk.SourcesV2025ApiImportUncorrelatedAccountsRequest): Promise<AxiosResponse<sdk.LoadUncorrelatedAccountsTaskV2025, any>> {
    return this.electronAPI.importUncorrelatedAccounts(requestParameters);
}
listProvisioningPolicies(requestParameters: sdk.SourcesV2025ApiListProvisioningPoliciesRequest): Promise<AxiosResponse<Array<sdk.ProvisioningPolicyDtoV2025>, any>> {
    return this.electronAPI.listProvisioningPolicies(requestParameters);
}
listSources(requestParameters: sdk.SourcesV2025ApiListSourcesRequest = {}): Promise<AxiosResponse<Array<sdk.SourceV2025>, any>> {
    return this.electronAPI.listSources(requestParameters);
}
pingCluster(requestParameters: sdk.SourcesV2025ApiPingClusterRequest): Promise<AxiosResponse<sdk.StatusResponseV2025, any>> {
    return this.electronAPI.pingCluster(requestParameters);
}
putCorrelationConfig(requestParameters: sdk.SourcesV2025ApiPutCorrelationConfigRequest): Promise<AxiosResponse<sdk.CorrelationConfigV2025, any>> {
    return this.electronAPI.putCorrelationConfig(requestParameters);
}
putNativeChangeDetectionConfig(requestParameters: sdk.SourcesV2025ApiPutNativeChangeDetectionConfigRequest): Promise<AxiosResponse<sdk.NativeChangeDetectionConfigV2025, any>> {
    return this.electronAPI.putNativeChangeDetectionConfig(requestParameters);
}
putProvisioningPolicy(requestParameters: sdk.SourcesV2025ApiPutProvisioningPolicyRequest): Promise<AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>> {
    return this.electronAPI.putProvisioningPolicy(requestParameters);
}
putSource(requestParameters: sdk.SourcesV2025ApiPutSourceRequest): Promise<AxiosResponse<sdk.SourceV2025, any>> {
    return this.electronAPI.putSource(requestParameters);
}
putSourceAttrSyncConfig(requestParameters: sdk.SourcesV2025ApiPutSourceAttrSyncConfigRequest): Promise<AxiosResponse<sdk.AttrSyncSourceConfigV2025, any>> {
    return this.electronAPI.putSourceAttrSyncConfig(requestParameters);
}
putSourceSchema(requestParameters: sdk.SourcesV2025ApiPutSourceSchemaRequest): Promise<AxiosResponse<sdk.SchemaV2025, any>> {
    return this.electronAPI.putSourceSchema(requestParameters);
}
searchResourceObjects(requestParameters: sdk.SourcesV2025ApiSearchResourceObjectsRequest): Promise<AxiosResponse<sdk.ResourceObjectsResponseV2025, any>> {
    return this.electronAPI.searchResourceObjects(requestParameters);
}
syncAttributesForSource(requestParameters: sdk.SourcesV2025ApiSyncAttributesForSourceRequest): Promise<AxiosResponse<sdk.SourceSyncJobV2025, any>> {
    return this.electronAPI.syncAttributesForSource(requestParameters);
}
testSourceConfiguration(requestParameters: sdk.SourcesV2025ApiTestSourceConfigurationRequest): Promise<AxiosResponse<sdk.StatusResponseV2025, any>> {
    return this.electronAPI.testSourceConfiguration(requestParameters);
}
testSourceConnection(requestParameters: sdk.SourcesV2025ApiTestSourceConnectionRequest): Promise<AxiosResponse<sdk.StatusResponseV2025, any>> {
    return this.electronAPI.testSourceConnection(requestParameters);
}
updatePasswordPolicyHolders(requestParameters: sdk.SourcesV2025ApiUpdatePasswordPolicyHoldersRequest): Promise<AxiosResponse<Array<sdk.PasswordPolicyHoldersDtoInnerV2025>, any>> {
    return this.electronAPI.updatePasswordPolicyHolders(requestParameters);
}
updateProvisioningPoliciesInBulk(requestParameters: sdk.SourcesV2025ApiUpdateProvisioningPoliciesInBulkRequest): Promise<AxiosResponse<Array<sdk.ProvisioningPolicyDtoV2025>, any>> {
    return this.electronAPI.updateProvisioningPoliciesInBulk(requestParameters);
}
updateProvisioningPolicy(requestParameters: sdk.SourcesV2025ApiUpdateProvisioningPolicyRequest): Promise<AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>> {
    return this.electronAPI.updateProvisioningPolicy(requestParameters);
}
updateSource(requestParameters: sdk.SourcesV2025ApiUpdateSourceRequest): Promise<AxiosResponse<sdk.SourceV2025, any>> {
    return this.electronAPI.updateSource(requestParameters);
}
updateSourceEntitlementRequestConfig(requestParameters: sdk.SourcesV2025ApiUpdateSourceEntitlementRequestConfigRequest): Promise<AxiosResponse<sdk.SourceEntitlementRequestConfigV2025, any>> {
    return this.electronAPI.updateSourceEntitlementRequestConfig(requestParameters);
}
updateSourceSchedule(requestParameters: sdk.SourcesV2025ApiUpdateSourceScheduleRequest): Promise<AxiosResponse<sdk.Schedule1V2025, any>> {
    return this.electronAPI.updateSourceSchedule(requestParameters);
}
updateSourceSchema(requestParameters: sdk.SourcesV2025ApiUpdateSourceSchemaRequest): Promise<AxiosResponse<sdk.SchemaV2025, any>> {
    return this.electronAPI.updateSourceSchema(requestParameters);
}

getSedBatchStats(requestParameters: sdk.SuggestedEntitlementDescriptionV2025ApiGetSedBatchStatsRequest): Promise<AxiosResponse<sdk.SedBatchStatsV2025, any>> {
    return this.electronAPI.getSedBatchStats(requestParameters);
}
getSedBatches(): Promise<AxiosResponse<sdk.SedBatchStatusV2025, any>> {
    return this.electronAPI.getSedBatches();
}
listSeds(requestParameters: sdk.SuggestedEntitlementDescriptionV2025ApiListSedsRequest = {}): Promise<AxiosResponse<Array<sdk.SedV2025>, any>> {
    return this.electronAPI.listSeds(requestParameters);
}
patchSed(requestParameters: sdk.SuggestedEntitlementDescriptionV2025ApiPatchSedRequest): Promise<AxiosResponse<sdk.SedV2025, any>> {
    return this.electronAPI.patchSed(requestParameters);
}
submitSedApproval(requestParameters: sdk.SuggestedEntitlementDescriptionV2025ApiSubmitSedApprovalRequest): Promise<AxiosResponse<Array<sdk.SedApprovalStatusV2025>, any>> {
    return this.electronAPI.submitSedApproval(requestParameters);
}
submitSedAssignment(requestParameters: sdk.SuggestedEntitlementDescriptionV2025ApiSubmitSedAssignmentRequest): Promise<AxiosResponse<sdk.SedAssignmentResponseV2025, any>> {
    return this.electronAPI.submitSedAssignment(requestParameters);
}
submitSedBatchRequest(requestParameters: sdk.SuggestedEntitlementDescriptionV2025ApiSubmitSedBatchRequestRequest = {}): Promise<AxiosResponse<sdk.SedBatchResponseV2025, any>> {
    return this.electronAPI.submitSedBatchRequest(requestParameters);
}

deleteTaggedObject(requestParameters: sdk.TaggedObjectsV2025ApiDeleteTaggedObjectRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteTaggedObject(requestParameters);
}
deleteTagsToManyObject(requestParameters: sdk.TaggedObjectsV2025ApiDeleteTagsToManyObjectRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteTagsToManyObject(requestParameters);
}
getTaggedObject(requestParameters: sdk.TaggedObjectsV2025ApiGetTaggedObjectRequest): Promise<AxiosResponse<sdk.TaggedObjectV2025, any>> {
    return this.electronAPI.getTaggedObject(requestParameters);
}
listTaggedObjects(requestParameters: sdk.TaggedObjectsV2025ApiListTaggedObjectsRequest = {}): Promise<AxiosResponse<Array<sdk.TaggedObjectV2025>, any>> {
    return this.electronAPI.listTaggedObjects(requestParameters);
}
listTaggedObjectsByType(requestParameters: sdk.TaggedObjectsV2025ApiListTaggedObjectsByTypeRequest): Promise<AxiosResponse<Array<sdk.TaggedObjectV2025>, any>> {
    return this.electronAPI.listTaggedObjectsByType(requestParameters);
}
putTaggedObject(requestParameters: sdk.TaggedObjectsV2025ApiPutTaggedObjectRequest): Promise<AxiosResponse<sdk.TaggedObjectV2025, any>> {
    return this.electronAPI.putTaggedObject(requestParameters);
}
setTagToObject(requestParameters: sdk.TaggedObjectsV2025ApiSetTagToObjectRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.setTagToObject(requestParameters);
}
setTagsToManyObjects(requestParameters: sdk.TaggedObjectsV2025ApiSetTagsToManyObjectsRequest): Promise<AxiosResponse<Array<sdk.BulkTaggedObjectResponseV2025>, any>> {
    return this.electronAPI.setTagsToManyObjects(requestParameters);
}

getPendingTaskHeaders(requestParameters: sdk.TaskManagementV2025ApiGetPendingTaskHeadersRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.getPendingTaskHeaders(requestParameters);
}
getPendingTasks(requestParameters: sdk.TaskManagementV2025ApiGetPendingTasksRequest = {}): Promise<AxiosResponse<Array<sdk.TaskStatusV2025>, any>> {
    return this.electronAPI.getPendingTasks(requestParameters);
}
getTaskStatus(requestParameters: sdk.TaskManagementV2025ApiGetTaskStatusRequest): Promise<AxiosResponse<sdk.TaskStatusV2025, any>> {
    return this.electronAPI.getTaskStatus(requestParameters);
}
getTaskStatusList(requestParameters: sdk.TaskManagementV2025ApiGetTaskStatusListRequest = {}): Promise<AxiosResponse<Array<sdk.TaskStatusV2025>, any>> {
    return this.electronAPI.getTaskStatusList(requestParameters);
}
updateTaskStatus(requestParameters: sdk.TaskManagementV2025ApiUpdateTaskStatusRequest): Promise<AxiosResponse<sdk.TaskStatusV2025, any>> {
    return this.electronAPI.updateTaskStatus(requestParameters);
}

getTenant(): Promise<AxiosResponse<sdk.TenantV2025, any>> {
    return this.electronAPI.getTenant();
}

getTenantContext(requestParameters: sdk.TenantContextV2025ApiGetTenantContextRequest = {}): Promise<AxiosResponse<Array<sdk.GetTenantContext200ResponseInnerV2025>, any>> {
    return this.electronAPI.getTenantContext(requestParameters);
}
patchTenantContext(requestParameters: sdk.TenantContextV2025ApiPatchTenantContextRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.patchTenantContext(requestParameters);
}

createTransform(requestParameters: sdk.TransformsV2025ApiCreateTransformRequest): Promise<AxiosResponse<sdk.TransformReadV2025, any>> {
    return this.electronAPI.createTransform(requestParameters);
}
deleteTransform(requestParameters: sdk.TransformsV2025ApiDeleteTransformRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteTransform(requestParameters);
}
getTransform(requestParameters: sdk.TransformsV2025ApiGetTransformRequest): Promise<AxiosResponse<sdk.TransformReadV2025, any>> {
    return this.electronAPI.getTransform(requestParameters);
}
listTransforms(requestParameters: sdk.TransformsV2025ApiListTransformsRequest = {}): Promise<AxiosResponse<Array<sdk.TransformReadV2025>, any>> {
    return this.electronAPI.listTransforms(requestParameters);
}
updateTransform(requestParameters: sdk.TransformsV2025ApiUpdateTransformRequest): Promise<AxiosResponse<sdk.TransformReadV2025, any>> {
    return this.electronAPI.updateTransform(requestParameters);
}

completeTriggerInvocation(requestParameters: sdk.TriggersV2025ApiCompleteTriggerInvocationRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.completeTriggerInvocation(requestParameters);
}
createSubscription(requestParameters: sdk.TriggersV2025ApiCreateSubscriptionRequest): Promise<AxiosResponse<sdk.SubscriptionV2025, any>> {
    return this.electronAPI.createSubscription(requestParameters);
}
deleteSubscription(requestParameters: sdk.TriggersV2025ApiDeleteSubscriptionRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteSubscription(requestParameters);
}
listSubscriptions(requestParameters: sdk.TriggersV2025ApiListSubscriptionsRequest): Promise<AxiosResponse<Array<sdk.SubscriptionV2025>, any>> {
    return this.electronAPI.listSubscriptions(requestParameters);
}
listTriggerInvocationStatus(requestParameters: sdk.TriggersV2025ApiListTriggerInvocationStatusRequest = {}): Promise<AxiosResponse<Array<sdk.InvocationStatusV2025>, any>> {
    return this.electronAPI.listTriggerInvocationStatus(requestParameters);
}
listTriggers(requestParameters: sdk.TriggersV2025ApiListTriggersRequest = {}): Promise<AxiosResponse<Array<sdk.TriggerV2025>, any>> {
    return this.electronAPI.listTriggers(requestParameters);
}
patchSubscription(requestParameters: sdk.TriggersV2025ApiPatchSubscriptionRequest): Promise<AxiosResponse<sdk.SubscriptionV2025, any>> {
    return this.electronAPI.patchSubscription(requestParameters);
}
startTestTriggerInvocation(requestParameters: sdk.TriggersV2025ApiStartTestTriggerInvocationRequest): Promise<AxiosResponse<Array<sdk.InvocationV2025>, any>> {
    return this.electronAPI.startTestTriggerInvocation(requestParameters);
}
testSubscriptionFilter(requestParameters: sdk.TriggersV2025ApiTestSubscriptionFilterRequest): Promise<AxiosResponse<sdk.ValidateFilterOutputDtoV2025, any>> {
    return this.electronAPI.testSubscriptionFilter(requestParameters);
}
updateSubscription(requestParameters: sdk.TriggersV2025ApiUpdateSubscriptionRequest): Promise<AxiosResponse<sdk.SubscriptionV2025, any>> {
    return this.electronAPI.updateSubscription(requestParameters);
}

getTenantUiMetadata(requestParameters: sdk.UIMetadataV2025ApiGetTenantUiMetadataRequest = {}): Promise<AxiosResponse<sdk.TenantUiMetadataItemResponseV2025, any>> {
    return this.electronAPI.getTenantUiMetadata(requestParameters);
}
setTenantUiMetadata(requestParameters: sdk.UIMetadataV2025ApiSetTenantUiMetadataRequest): Promise<AxiosResponse<sdk.TenantUiMetadataItemResponseV2025, any>> {
    return this.electronAPI.setTenantUiMetadata(requestParameters);
}

createVendorConnectorMapping(requestParameters: sdk.VendorConnectorMappingsV2025ApiCreateVendorConnectorMappingRequest): Promise<AxiosResponse<sdk.VendorConnectorMappingV2025, any>> {
    return this.electronAPI.createVendorConnectorMapping(requestParameters);
}
deleteVendorConnectorMapping(requestParameters: sdk.VendorConnectorMappingsV2025ApiDeleteVendorConnectorMappingRequest): Promise<AxiosResponse<sdk.DeleteVendorConnectorMapping200ResponseV2025, any>> {
    return this.electronAPI.deleteVendorConnectorMapping(requestParameters);
}
getVendorConnectorMappings(): Promise<AxiosResponse<Array<sdk.VendorConnectorMappingV2025>, any>> {
    return this.electronAPI.getVendorConnectorMappings();
}

approveApprovalItem(requestParameters: sdk.WorkItemsV2025ApiApproveApprovalItemRequest): Promise<AxiosResponse<sdk.WorkItemsV2025, any>> {
    return this.electronAPI.approveApprovalItem(requestParameters);
}
approveApprovalItemsInBulk(requestParameters: sdk.WorkItemsV2025ApiApproveApprovalItemsInBulkRequest): Promise<AxiosResponse<sdk.WorkItemsV2025, any>> {
    return this.electronAPI.approveApprovalItemsInBulk(requestParameters);
}
completeWorkItem(requestParameters: sdk.WorkItemsV2025ApiCompleteWorkItemRequest): Promise<AxiosResponse<sdk.WorkItemsV2025, any>> {
    return this.electronAPI.completeWorkItem(requestParameters);
}
forwardWorkItem(requestParameters: sdk.WorkItemsV2025ApiForwardWorkItemRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.forwardWorkItem(requestParameters);
}
getCompletedWorkItems(requestParameters: sdk.WorkItemsV2025ApiGetCompletedWorkItemsRequest = {}): Promise<AxiosResponse<Array<sdk.WorkItemsV2025>, any>> {
    return this.electronAPI.getCompletedWorkItems(requestParameters);
}
getCountCompletedWorkItems(requestParameters: sdk.WorkItemsV2025ApiGetCountCompletedWorkItemsRequest = {}): Promise<AxiosResponse<sdk.WorkItemsCountV2025, any>> {
    return this.electronAPI.getCountCompletedWorkItems(requestParameters);
}
getCountWorkItems(requestParameters: sdk.WorkItemsV2025ApiGetCountWorkItemsRequest = {}): Promise<AxiosResponse<sdk.WorkItemsCountV2025, any>> {
    return this.electronAPI.getCountWorkItems(requestParameters);
}
getWorkItem(requestParameters: sdk.WorkItemsV2025ApiGetWorkItemRequest): Promise<AxiosResponse<sdk.WorkItemsV2025, any>> {
    return this.electronAPI.getWorkItem(requestParameters);
}
getWorkItemsSummary(requestParameters: sdk.WorkItemsV2025ApiGetWorkItemsSummaryRequest = {}): Promise<AxiosResponse<sdk.WorkItemsSummaryV2025, any>> {
    return this.electronAPI.getWorkItemsSummary(requestParameters);
}
listWorkItems(requestParameters: sdk.WorkItemsV2025ApiListWorkItemsRequest = {}): Promise<AxiosResponse<Array<sdk.WorkItemsV2025>, any>> {
    return this.electronAPI.listWorkItems(requestParameters);
}
rejectApprovalItem(requestParameters: sdk.WorkItemsV2025ApiRejectApprovalItemRequest): Promise<AxiosResponse<sdk.WorkItemsV2025, any>> {
    return this.electronAPI.rejectApprovalItem(requestParameters);
}
rejectApprovalItemsInBulk(requestParameters: sdk.WorkItemsV2025ApiRejectApprovalItemsInBulkRequest): Promise<AxiosResponse<sdk.WorkItemsV2025, any>> {
    return this.electronAPI.rejectApprovalItemsInBulk(requestParameters);
}
submitAccountSelection(requestParameters: sdk.WorkItemsV2025ApiSubmitAccountSelectionRequest): Promise<AxiosResponse<sdk.WorkItemsV2025, any>> {
    return this.electronAPI.submitAccountSelection(requestParameters);
}

createReassignmentConfiguration(requestParameters: sdk.WorkReassignmentV2025ApiCreateReassignmentConfigurationRequest): Promise<AxiosResponse<sdk.ConfigurationItemResponseV2025, any>> {
    return this.electronAPI.createReassignmentConfiguration(requestParameters);
}
deleteReassignmentConfiguration(requestParameters: sdk.WorkReassignmentV2025ApiDeleteReassignmentConfigurationRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteReassignmentConfiguration(requestParameters);
}
getEvaluateReassignmentConfiguration(requestParameters: sdk.WorkReassignmentV2025ApiGetEvaluateReassignmentConfigurationRequest): Promise<AxiosResponse<Array<sdk.EvaluateResponseV2025>, any>> {
    return this.electronAPI.getEvaluateReassignmentConfiguration(requestParameters);
}
getReassignmentConfigTypes(requestParameters: sdk.WorkReassignmentV2025ApiGetReassignmentConfigTypesRequest = {}): Promise<AxiosResponse<Array<sdk.ConfigTypeV2025>, any>> {
    return this.electronAPI.getReassignmentConfigTypes(requestParameters);
}
getReassignmentConfiguration(requestParameters: sdk.WorkReassignmentV2025ApiGetReassignmentConfigurationRequest): Promise<AxiosResponse<sdk.ConfigurationResponseV2025, any>> {
    return this.electronAPI.getReassignmentConfiguration(requestParameters);
}
getTenantConfigConfiguration(requestParameters: sdk.WorkReassignmentV2025ApiGetTenantConfigConfigurationRequest = {}): Promise<AxiosResponse<sdk.TenantConfigurationResponseV2025, any>> {
    return this.electronAPI.getTenantConfigConfiguration(requestParameters);
}
listReassignmentConfigurations(requestParameters: sdk.WorkReassignmentV2025ApiListReassignmentConfigurationsRequest = {}): Promise<AxiosResponse<Array<sdk.ConfigurationResponseV2025>, any>> {
    return this.electronAPI.listReassignmentConfigurations(requestParameters);
}
putReassignmentConfig(requestParameters: sdk.WorkReassignmentV2025ApiPutReassignmentConfigRequest): Promise<AxiosResponse<sdk.ConfigurationItemResponseV2025, any>> {
    return this.electronAPI.putReassignmentConfig(requestParameters);
}
putTenantConfiguration(requestParameters: sdk.WorkReassignmentV2025ApiPutTenantConfigurationRequest): Promise<AxiosResponse<sdk.TenantConfigurationResponseV2025, any>> {
    return this.electronAPI.putTenantConfiguration(requestParameters);
}

cancelWorkflowExecution(requestParameters: sdk.WorkflowsV2025ApiCancelWorkflowExecutionRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.cancelWorkflowExecution(requestParameters);
}
createExternalExecuteWorkflow(requestParameters: sdk.WorkflowsV2025ApiCreateExternalExecuteWorkflowRequest): Promise<AxiosResponse<sdk.CreateExternalExecuteWorkflow200ResponseV2025, any>> {
    return this.electronAPI.createExternalExecuteWorkflow(requestParameters);
}
createWorkflow(requestParameters: sdk.WorkflowsV2025ApiCreateWorkflowRequest): Promise<AxiosResponse<sdk.WorkflowV2025, any>> {
    return this.electronAPI.createWorkflow(requestParameters);
}
createWorkflowExternalTrigger(requestParameters: sdk.WorkflowsV2025ApiCreateWorkflowExternalTriggerRequest): Promise<AxiosResponse<sdk.WorkflowOAuthClientV2025, any>> {
    return this.electronAPI.createWorkflowExternalTrigger(requestParameters);
}
deleteWorkflow(requestParameters: sdk.WorkflowsV2025ApiDeleteWorkflowRequest): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteWorkflow(requestParameters);
}
getWorkflow(requestParameters: sdk.WorkflowsV2025ApiGetWorkflowRequest): Promise<AxiosResponse<sdk.WorkflowV2025, any>> {
    return this.electronAPI.getWorkflow(requestParameters);
}
getWorkflowExecution(requestParameters: sdk.WorkflowsV2025ApiGetWorkflowExecutionRequest): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.getWorkflowExecution(requestParameters);
}
getWorkflowExecutionHistory(requestParameters: sdk.WorkflowsV2025ApiGetWorkflowExecutionHistoryRequest): Promise<AxiosResponse<Array<sdk.WorkflowExecutionEventV2025>, any>> {
    return this.electronAPI.getWorkflowExecutionHistory(requestParameters);
}
getWorkflowExecutions(requestParameters: sdk.WorkflowsV2025ApiGetWorkflowExecutionsRequest): Promise<AxiosResponse<Array<sdk.WorkflowExecutionV2025>, any>> {
    return this.electronAPI.getWorkflowExecutions(requestParameters);
}
listCompleteWorkflowLibrary(requestParameters: sdk.WorkflowsV2025ApiListCompleteWorkflowLibraryRequest = {}): Promise<AxiosResponse<Array<sdk.ListCompleteWorkflowLibrary200ResponseInnerV2025>, any>> {
    return this.electronAPI.listCompleteWorkflowLibrary(requestParameters);
}
listWorkflowLibraryActions(requestParameters: sdk.WorkflowsV2025ApiListWorkflowLibraryActionsRequest = {}): Promise<AxiosResponse<Array<sdk.WorkflowLibraryActionV2025>, any>> {
    return this.electronAPI.listWorkflowLibraryActions(requestParameters);
}
listWorkflowLibraryOperators(): Promise<AxiosResponse<Array<sdk.WorkflowLibraryOperatorV2025>, any>> {
    return this.electronAPI.listWorkflowLibraryOperators();
}
listWorkflowLibraryTriggers(requestParameters: sdk.WorkflowsV2025ApiListWorkflowLibraryTriggersRequest = {}): Promise<AxiosResponse<Array<sdk.WorkflowLibraryTriggerV2025>, any>> {
    return this.electronAPI.listWorkflowLibraryTriggers(requestParameters);
}
listWorkflows(): Promise<AxiosResponse<Array<sdk.WorkflowV2025>, any>> {
    return this.electronAPI.listWorkflows();
}
patchWorkflow(requestParameters: sdk.WorkflowsV2025ApiPatchWorkflowRequest): Promise<AxiosResponse<sdk.WorkflowV2025, any>> {
    return this.electronAPI.patchWorkflow(requestParameters);
}
putWorkflow(requestParameters: sdk.WorkflowsV2025ApiPutWorkflowRequest): Promise<AxiosResponse<sdk.WorkflowV2025, any>> {
    return this.electronAPI.putWorkflow(requestParameters);
}
testExternalExecuteWorkflow(requestParameters: sdk.WorkflowsV2025ApiTestExternalExecuteWorkflowRequest): Promise<AxiosResponse<sdk.TestExternalExecuteWorkflow200ResponseV2025, any>> {
    return this.electronAPI.testExternalExecuteWorkflow(requestParameters);
}
testWorkflow(requestParameters: sdk.WorkflowsV2025ApiTestWorkflowRequest): Promise<AxiosResponse<sdk.TestWorkflow200ResponseV2025, any>> {
    return this.electronAPI.testWorkflow(requestParameters);
}

}