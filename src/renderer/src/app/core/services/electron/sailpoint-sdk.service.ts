import { Injectable } from "@angular/core";
import { AxiosResponse } from "axios";
import * as sdk from "sailpoint-api-client";
declare const window: any;
@Injectable({
  providedIn: "root",
})
export class SailPointSDKService {
  private electronAPI: any;

  constructor() {
    if (window.electronAPI) {
      this.electronAPI = window.electronAPI;
    } else {
      console.error("Electron API is not available");
    }
  }

  getAccessModelMetadataAttribute(
    requestParameters: sdk.AccessModelMetadataV2025ApiGetAccessModelMetadataAttributeRequest,
  ): Promise<AxiosResponse<sdk.AttributeDTOV2025, any>> {
    return this.electronAPI.getAccessModelMetadataAttribute(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.AttributeDTOV2025, any>>;
  }
  getAccessModelMetadataAttributeValue(
    requestParameters: sdk.AccessModelMetadataV2025ApiGetAccessModelMetadataAttributeValueRequest,
  ): Promise<AxiosResponse<sdk.AttributeValueDTOV2025, any>> {
    return this.electronAPI.getAccessModelMetadataAttributeValue(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.AttributeValueDTOV2025, any>>;
  }
  listAccessModelMetadataAttribute(
    requestParameters: sdk.AccessModelMetadataV2025ApiListAccessModelMetadataAttributeRequest = {},
  ): Promise<AxiosResponse<Array<sdk.AttributeDTOV2025>, any>> {
    return this.electronAPI.listAccessModelMetadataAttribute(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.AttributeDTOV2025>, any>>;
  }
  listAccessModelMetadataAttributeValue(
    requestParameters: sdk.AccessModelMetadataV2025ApiListAccessModelMetadataAttributeValueRequest,
  ): Promise<AxiosResponse<Array<sdk.AttributeValueDTOV2025>, any>> {
    return this.electronAPI.listAccessModelMetadataAttributeValue(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.AttributeValueDTOV2025>, any>>;
  }

  createAccessProfile(
    requestParameters: sdk.AccessProfilesV2025ApiCreateAccessProfileRequest,
  ): Promise<AxiosResponse<sdk.AccessProfileV2025, any>> {
    return this.electronAPI.createAccessProfile(requestParameters) as Promise<
      AxiosResponse<sdk.AccessProfileV2025, any>
    >;
  }
  deleteAccessProfile(
    requestParameters: sdk.AccessProfilesV2025ApiDeleteAccessProfileRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteAccessProfile(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  deleteAccessProfilesInBulk(
    requestParameters: sdk.AccessProfilesV2025ApiDeleteAccessProfilesInBulkRequest,
  ): Promise<AxiosResponse<sdk.AccessProfileBulkDeleteResponseV2025, any>> {
    return this.electronAPI.deleteAccessProfilesInBulk(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.AccessProfileBulkDeleteResponseV2025, any>>;
  }
  getAccessProfile(
    requestParameters: sdk.AccessProfilesV2025ApiGetAccessProfileRequest,
  ): Promise<AxiosResponse<sdk.AccessProfileV2025, any>> {
    return this.electronAPI.getAccessProfile(requestParameters) as Promise<
      AxiosResponse<sdk.AccessProfileV2025, any>
    >;
  }
  getAccessProfileEntitlements(
    requestParameters: sdk.AccessProfilesV2025ApiGetAccessProfileEntitlementsRequest,
  ): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>> {
    return this.electronAPI.getAccessProfileEntitlements(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>>;
  }
  listAccessProfiles(
    requestParameters: sdk.AccessProfilesV2025ApiListAccessProfilesRequest = {},
  ): Promise<AxiosResponse<Array<sdk.AccessProfileV2025>, any>> {
    return this.electronAPI.listAccessProfiles(requestParameters) as Promise<
      AxiosResponse<Array<sdk.AccessProfileV2025>, any>
    >;
  }
  patchAccessProfile(
    requestParameters: sdk.AccessProfilesV2025ApiPatchAccessProfileRequest,
  ): Promise<AxiosResponse<sdk.AccessProfileV2025, any>> {
    return this.electronAPI.patchAccessProfile(requestParameters) as Promise<
      AxiosResponse<sdk.AccessProfileV2025, any>
    >;
  }
  updateAccessProfilesInBulk(
    requestParameters: sdk.AccessProfilesV2025ApiUpdateAccessProfilesInBulkRequest,
  ): Promise<AxiosResponse<Array<sdk.AccessProfileUpdateItemV2025>, any>> {
    return this.electronAPI.updateAccessProfilesInBulk(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.AccessProfileUpdateItemV2025>, any>>;
  }

  approveAccessRequest(
    requestParameters: sdk.AccessRequestApprovalsV2025ApiApproveAccessRequestRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.approveAccessRequest(requestParameters) as Promise<
      AxiosResponse<object, any>
    >;
  }
  forwardAccessRequest(
    requestParameters: sdk.AccessRequestApprovalsV2025ApiForwardAccessRequestRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.forwardAccessRequest(requestParameters) as Promise<
      AxiosResponse<object, any>
    >;
  }
  getAccessRequestApprovalSummary(
    requestParameters: sdk.AccessRequestApprovalsV2025ApiGetAccessRequestApprovalSummaryRequest = {},
  ): Promise<AxiosResponse<sdk.ApprovalSummaryV2025, any>> {
    return this.electronAPI.getAccessRequestApprovalSummary(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ApprovalSummaryV2025, any>>;
  }
  listAccessRequestApprovers(
    requestParameters: sdk.AccessRequestApprovalsV2025ApiListAccessRequestApproversRequest,
  ): Promise<
    AxiosResponse<Array<sdk.AccessRequestApproversListResponseV2025>, any>
  > {
    return this.electronAPI.listAccessRequestApprovers(
      requestParameters,
    ) as Promise<
      AxiosResponse<Array<sdk.AccessRequestApproversListResponseV2025>, any>
    >;
  }
  listCompletedApprovals(
    requestParameters: sdk.AccessRequestApprovalsV2025ApiListCompletedApprovalsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.CompletedApprovalV2025>, any>> {
    return this.electronAPI.listCompletedApprovals(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.CompletedApprovalV2025>, any>>;
  }
  listPendingApprovals(
    requestParameters: sdk.AccessRequestApprovalsV2025ApiListPendingApprovalsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.PendingApprovalV2025>, any>> {
    return this.electronAPI.listPendingApprovals(requestParameters) as Promise<
      AxiosResponse<Array<sdk.PendingApprovalV2025>, any>
    >;
  }
  rejectAccessRequest(
    requestParameters: sdk.AccessRequestApprovalsV2025ApiRejectAccessRequestRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.rejectAccessRequest(requestParameters) as Promise<
      AxiosResponse<object, any>
    >;
  }

  getAccessRequestIdentityMetrics(
    requestParameters: sdk.AccessRequestIdentityMetricsV2025ApiGetAccessRequestIdentityMetricsRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.getAccessRequestIdentityMetrics(
      requestParameters,
    ) as Promise<AxiosResponse<object, any>>;
  }

  approveBulkAccessRequest(
    requestParameters: sdk.AccessRequestsV2025ApiApproveBulkAccessRequestRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.approveBulkAccessRequest(
      requestParameters,
    ) as Promise<AxiosResponse<object, any>>;
  }
  cancelAccessRequest(
    requestParameters: sdk.AccessRequestsV2025ApiCancelAccessRequestRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.cancelAccessRequest(requestParameters) as Promise<
      AxiosResponse<object, any>
    >;
  }
  cancelAccessRequestInBulk(
    requestParameters: sdk.AccessRequestsV2025ApiCancelAccessRequestInBulkRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.cancelAccessRequestInBulk(
      requestParameters,
    ) as Promise<AxiosResponse<object, any>>;
  }
  closeAccessRequest(
    requestParameters: sdk.AccessRequestsV2025ApiCloseAccessRequestRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.closeAccessRequest(requestParameters) as Promise<
      AxiosResponse<object, any>
    >;
  }
  createAccessRequest(
    requestParameters: sdk.AccessRequestsV2025ApiCreateAccessRequestRequest,
  ): Promise<AxiosResponse<sdk.AccessRequestResponseV2025, any>> {
    return this.electronAPI.createAccessRequest(requestParameters) as Promise<
      AxiosResponse<sdk.AccessRequestResponseV2025, any>
    >;
  }
  getAccessRequestConfig(): Promise<
    AxiosResponse<sdk.AccessRequestConfigV2025, any>
  > {
    return this.electronAPI.getAccessRequestConfig() as Promise<
      AxiosResponse<sdk.AccessRequestConfigV2025, any>
    >;
  }
  getEntitlementDetailsForIdentity(
    requestParameters: sdk.AccessRequestsV2025ApiGetEntitlementDetailsForIdentityRequest,
  ): Promise<AxiosResponse<sdk.IdentityEntitlementDetailsV2025, any>> {
    return this.electronAPI.getEntitlementDetailsForIdentity(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.IdentityEntitlementDetailsV2025, any>>;
  }
  listAccessRequestStatus(
    requestParameters: sdk.AccessRequestsV2025ApiListAccessRequestStatusRequest = {},
  ): Promise<AxiosResponse<Array<sdk.RequestedItemStatusV2025>, any>> {
    return this.electronAPI.listAccessRequestStatus(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.RequestedItemStatusV2025>, any>>;
  }
  listAdministratorsAccessRequestStatus(
    requestParameters: sdk.AccessRequestsV2025ApiListAdministratorsAccessRequestStatusRequest = {},
  ): Promise<AxiosResponse<Array<sdk.AccessRequestAdminItemStatusV2025>, any>> {
    return this.electronAPI.listAdministratorsAccessRequestStatus(
      requestParameters,
    ) as Promise<
      AxiosResponse<Array<sdk.AccessRequestAdminItemStatusV2025>, any>
    >;
  }
  loadAccountSelections(
    requestParameters: sdk.AccessRequestsV2025ApiLoadAccountSelectionsRequest,
  ): Promise<AxiosResponse<sdk.AccountsSelectionResponseV2025, any>> {
    return this.electronAPI.loadAccountSelections(requestParameters) as Promise<
      AxiosResponse<sdk.AccountsSelectionResponseV2025, any>
    >;
  }
  setAccessRequestConfig(
    requestParameters: sdk.AccessRequestsV2025ApiSetAccessRequestConfigRequest,
  ): Promise<AxiosResponse<sdk.AccessRequestConfigV2025, any>> {
    return this.electronAPI.setAccessRequestConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.AccessRequestConfigV2025, any>>;
  }

  getAccountActivity(
    requestParameters: sdk.AccountActivitiesV2025ApiGetAccountActivityRequest,
  ): Promise<AxiosResponse<sdk.AccountActivityV2025, any>> {
    return this.electronAPI.getAccountActivity(requestParameters) as Promise<
      AxiosResponse<sdk.AccountActivityV2025, any>
    >;
  }
  listAccountActivities(
    requestParameters: sdk.AccountActivitiesV2025ApiListAccountActivitiesRequest = {},
  ): Promise<AxiosResponse<Array<sdk.AccountActivityV2025>, any>> {
    return this.electronAPI.listAccountActivities(requestParameters) as Promise<
      AxiosResponse<Array<sdk.AccountActivityV2025>, any>
    >;
  }

  getAccountAggregationStatus(
    requestParameters: sdk.AccountAggregationsV2025ApiGetAccountAggregationStatusRequest,
  ): Promise<AxiosResponse<sdk.AccountAggregationStatusV2025, any>> {
    return this.electronAPI.getAccountAggregationStatus(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.AccountAggregationStatusV2025, any>>;
  }

  getUsagesByAccountId(
    requestParameters: sdk.AccountUsagesV2025ApiGetUsagesByAccountIdRequest,
  ): Promise<AxiosResponse<Array<sdk.AccountUsageV2025>, any>> {
    return this.electronAPI.getUsagesByAccountId(requestParameters) as Promise<
      AxiosResponse<Array<sdk.AccountUsageV2025>, any>
    >;
  }

  createAccount(
    requestParameters: sdk.AccountsV2025ApiCreateAccountRequest,
  ): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>> {
    return this.electronAPI.createAccount(requestParameters) as Promise<
      AxiosResponse<sdk.AccountsAsyncResultV2025, any>
    >;
  }
  deleteAccount(
    requestParameters: sdk.AccountsV2025ApiDeleteAccountRequest,
  ): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>> {
    return this.electronAPI.deleteAccount(requestParameters) as Promise<
      AxiosResponse<sdk.AccountsAsyncResultV2025, any>
    >;
  }
  deleteAccountAsync(
    requestParameters: sdk.AccountsV2025ApiDeleteAccountAsyncRequest,
  ): Promise<AxiosResponse<sdk.TaskResultDtoV2025, any>> {
    return this.electronAPI.deleteAccountAsync(requestParameters) as Promise<
      AxiosResponse<sdk.TaskResultDtoV2025, any>
    >;
  }
  disableAccount(
    requestParameters: sdk.AccountsV2025ApiDisableAccountRequest,
  ): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>> {
    return this.electronAPI.disableAccount(requestParameters) as Promise<
      AxiosResponse<sdk.AccountsAsyncResultV2025, any>
    >;
  }
  disableAccountForIdentity(
    requestParameters: sdk.AccountsV2025ApiDisableAccountForIdentityRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.disableAccountForIdentity(
      requestParameters,
    ) as Promise<AxiosResponse<object, any>>;
  }
  disableAccountsForIdentities(
    requestParameters: sdk.AccountsV2025ApiDisableAccountsForIdentitiesRequest,
  ): Promise<
    AxiosResponse<Array<sdk.BulkIdentitiesAccountsResponseV2025>, any>
  > {
    return this.electronAPI.disableAccountsForIdentities(
      requestParameters,
    ) as Promise<
      AxiosResponse<Array<sdk.BulkIdentitiesAccountsResponseV2025>, any>
    >;
  }
  enableAccount(
    requestParameters: sdk.AccountsV2025ApiEnableAccountRequest,
  ): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>> {
    return this.electronAPI.enableAccount(requestParameters) as Promise<
      AxiosResponse<sdk.AccountsAsyncResultV2025, any>
    >;
  }
  enableAccountForIdentity(
    requestParameters: sdk.AccountsV2025ApiEnableAccountForIdentityRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.enableAccountForIdentity(
      requestParameters,
    ) as Promise<AxiosResponse<object, any>>;
  }
  enableAccountsForIdentities(
    requestParameters: sdk.AccountsV2025ApiEnableAccountsForIdentitiesRequest,
  ): Promise<
    AxiosResponse<Array<sdk.BulkIdentitiesAccountsResponseV2025>, any>
  > {
    return this.electronAPI.enableAccountsForIdentities(
      requestParameters,
    ) as Promise<
      AxiosResponse<Array<sdk.BulkIdentitiesAccountsResponseV2025>, any>
    >;
  }
  getAccount(
    requestParameters: sdk.AccountsV2025ApiGetAccountRequest,
  ): Promise<AxiosResponse<sdk.AccountV2025, any>> {
    return this.electronAPI.getAccount(requestParameters) as Promise<
      AxiosResponse<sdk.AccountV2025, any>
    >;
  }
  getAccountEntitlements(
    requestParameters: sdk.AccountsV2025ApiGetAccountEntitlementsRequest,
  ): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>> {
    return this.electronAPI.getAccountEntitlements(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>>;
  }
  listAccounts(
    requestParameters: sdk.AccountsV2025ApiListAccountsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.AccountV2025>, any>> {
    return this.electronAPI.listAccounts(requestParameters) as Promise<
      AxiosResponse<Array<sdk.AccountV2025>, any>
    >;
  }
  putAccount(
    requestParameters: sdk.AccountsV2025ApiPutAccountRequest,
  ): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>> {
    return this.electronAPI.putAccount(requestParameters) as Promise<
      AxiosResponse<sdk.AccountsAsyncResultV2025, any>
    >;
  }
  submitReloadAccount(
    requestParameters: sdk.AccountsV2025ApiSubmitReloadAccountRequest,
  ): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>> {
    return this.electronAPI.submitReloadAccount(requestParameters) as Promise<
      AxiosResponse<sdk.AccountsAsyncResultV2025, any>
    >;
  }
  unlockAccount(
    requestParameters: sdk.AccountsV2025ApiUnlockAccountRequest,
  ): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>> {
    return this.electronAPI.unlockAccount(requestParameters) as Promise<
      AxiosResponse<sdk.AccountsAsyncResultV2025, any>
    >;
  }
  updateAccount(
    requestParameters: sdk.AccountsV2025ApiUpdateAccountRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.updateAccount(requestParameters) as Promise<
      AxiosResponse<object, any>
    >;
  }

  getDiscoveredApplications(
    requestParameters: sdk.ApplicationDiscoveryV2025ApiGetDiscoveredApplicationsRequest = {},
  ): Promise<
    AxiosResponse<
      Array<sdk.GetDiscoveredApplications200ResponseInnerV2025>,
      any
    >
  > {
    return this.electronAPI.getDiscoveredApplications(
      requestParameters,
    ) as Promise<
      AxiosResponse<
        Array<sdk.GetDiscoveredApplications200ResponseInnerV2025>,
        any
      >
    >;
  }
  getManualDiscoverApplicationsCsvTemplate(): Promise<
    AxiosResponse<sdk.ManualDiscoverApplicationsTemplateV2025, any>
  > {
    return this.electronAPI.getManualDiscoverApplicationsCsvTemplate() as Promise<
      AxiosResponse<sdk.ManualDiscoverApplicationsTemplateV2025, any>
    >;
  }
  sendManualDiscoverApplicationsCsvTemplate(
    requestParameters: sdk.ApplicationDiscoveryV2025ApiSendManualDiscoverApplicationsCsvTemplateRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.sendManualDiscoverApplicationsCsvTemplate(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }

  getApproval(
    requestParameters: sdk.ApprovalsV2025ApiGetApprovalRequest,
  ): Promise<AxiosResponse<sdk.ApprovalV2025, any>> {
    return this.electronAPI.getApproval(requestParameters) as Promise<
      AxiosResponse<sdk.ApprovalV2025, any>
    >;
  }
  getApprovals(
    requestParameters: sdk.ApprovalsV2025ApiGetApprovalsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.ApprovalV2025>, any>> {
    return this.electronAPI.getApprovals(requestParameters) as Promise<
      AxiosResponse<Array<sdk.ApprovalV2025>, any>
    >;
  }

  createSourceApp(
    requestParameters: sdk.AppsV2025ApiCreateSourceAppRequest,
  ): Promise<AxiosResponse<sdk.SourceAppV2025, any>> {
    return this.electronAPI.createSourceApp(requestParameters) as Promise<
      AxiosResponse<sdk.SourceAppV2025, any>
    >;
  }
  deleteAccessProfilesFromSourceAppByBulk(
    requestParameters: sdk.AppsV2025ApiDeleteAccessProfilesFromSourceAppByBulkRequest,
  ): Promise<AxiosResponse<Array<sdk.AccessProfileDetailsV2025>, any>> {
    return this.electronAPI.deleteAccessProfilesFromSourceAppByBulk(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.AccessProfileDetailsV2025>, any>>;
  }
  deleteSourceApp(
    requestParameters: sdk.AppsV2025ApiDeleteSourceAppRequest,
  ): Promise<AxiosResponse<sdk.SourceAppV2025, any>> {
    return this.electronAPI.deleteSourceApp(requestParameters) as Promise<
      AxiosResponse<sdk.SourceAppV2025, any>
    >;
  }
  getSourceApp(
    requestParameters: sdk.AppsV2025ApiGetSourceAppRequest,
  ): Promise<AxiosResponse<sdk.SourceAppV2025, any>> {
    return this.electronAPI.getSourceApp(requestParameters) as Promise<
      AxiosResponse<sdk.SourceAppV2025, any>
    >;
  }
  listAccessProfilesForSourceApp(
    requestParameters: sdk.AppsV2025ApiListAccessProfilesForSourceAppRequest,
  ): Promise<AxiosResponse<Array<sdk.AccessProfileDetailsV2025>, any>> {
    return this.electronAPI.listAccessProfilesForSourceApp(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.AccessProfileDetailsV2025>, any>>;
  }
  listAllSourceApp(
    requestParameters: sdk.AppsV2025ApiListAllSourceAppRequest = {},
  ): Promise<AxiosResponse<Array<sdk.SourceAppV2025>, any>> {
    return this.electronAPI.listAllSourceApp(requestParameters) as Promise<
      AxiosResponse<Array<sdk.SourceAppV2025>, any>
    >;
  }
  listAllUserApps(
    requestParameters: sdk.AppsV2025ApiListAllUserAppsRequest,
  ): Promise<AxiosResponse<Array<sdk.UserAppV2025>, any>> {
    return this.electronAPI.listAllUserApps(requestParameters) as Promise<
      AxiosResponse<Array<sdk.UserAppV2025>, any>
    >;
  }
  listAssignedSourceApp(
    requestParameters: sdk.AppsV2025ApiListAssignedSourceAppRequest = {},
  ): Promise<AxiosResponse<Array<sdk.SourceAppV2025>, any>> {
    return this.electronAPI.listAssignedSourceApp(requestParameters) as Promise<
      AxiosResponse<Array<sdk.SourceAppV2025>, any>
    >;
  }
  listAvailableAccountsForUserApp(
    requestParameters: sdk.AppsV2025ApiListAvailableAccountsForUserAppRequest,
  ): Promise<AxiosResponse<Array<sdk.AppAccountDetailsV2025>, any>> {
    return this.electronAPI.listAvailableAccountsForUserApp(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.AppAccountDetailsV2025>, any>>;
  }
  listAvailableSourceApps(
    requestParameters: sdk.AppsV2025ApiListAvailableSourceAppsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.SourceAppV2025>, any>> {
    return this.electronAPI.listAvailableSourceApps(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.SourceAppV2025>, any>>;
  }
  listOwnedUserApps(
    requestParameters: sdk.AppsV2025ApiListOwnedUserAppsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.UserAppV2025>, any>> {
    return this.electronAPI.listOwnedUserApps(requestParameters) as Promise<
      AxiosResponse<Array<sdk.UserAppV2025>, any>
    >;
  }
  patchSourceApp(
    requestParameters: sdk.AppsV2025ApiPatchSourceAppRequest,
  ): Promise<AxiosResponse<sdk.SourceAppPatchDtoV2025, any>> {
    return this.electronAPI.patchSourceApp(requestParameters) as Promise<
      AxiosResponse<sdk.SourceAppPatchDtoV2025, any>
    >;
  }
  patchUserApp(
    requestParameters: sdk.AppsV2025ApiPatchUserAppRequest,
  ): Promise<AxiosResponse<sdk.UserAppV2025, any>> {
    return this.electronAPI.patchUserApp(requestParameters) as Promise<
      AxiosResponse<sdk.UserAppV2025, any>
    >;
  }
  updateSourceAppsInBulk(
    requestParameters: sdk.AppsV2025ApiUpdateSourceAppsInBulkRequest = {},
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.updateSourceAppsInBulk(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }

  getProfileConfig(
    requestParameters: sdk.AuthProfileV2025ApiGetProfileConfigRequest,
  ): Promise<AxiosResponse<sdk.AuthProfileV2025, any>> {
    return this.electronAPI.getProfileConfig(requestParameters) as Promise<
      AxiosResponse<sdk.AuthProfileV2025, any>
    >;
  }
  getProfileConfigList(
    requestParameters: sdk.AuthProfileV2025ApiGetProfileConfigListRequest = {},
  ): Promise<AxiosResponse<Array<sdk.AuthProfileSummaryV2025>, any>> {
    return this.electronAPI.getProfileConfigList(requestParameters) as Promise<
      AxiosResponse<Array<sdk.AuthProfileSummaryV2025>, any>
    >;
  }
  patchProfileConfig(
    requestParameters: sdk.AuthProfileV2025ApiPatchProfileConfigRequest,
  ): Promise<AxiosResponse<sdk.AuthProfileV2025, any>> {
    return this.electronAPI.patchProfileConfig(requestParameters) as Promise<
      AxiosResponse<sdk.AuthProfileV2025, any>
    >;
  }

  getAuthUser(
    requestParameters: sdk.AuthUsersV2025ApiGetAuthUserRequest,
  ): Promise<AxiosResponse<sdk.AuthUserV2025, any>> {
    return this.electronAPI.getAuthUser(requestParameters) as Promise<
      AxiosResponse<sdk.AuthUserV2025, any>
    >;
  }
  patchAuthUser(
    requestParameters: sdk.AuthUsersV2025ApiPatchAuthUserRequest,
  ): Promise<AxiosResponse<sdk.AuthUserV2025, any>> {
    return this.electronAPI.patchAuthUser(requestParameters) as Promise<
      AxiosResponse<sdk.AuthUserV2025, any>
    >;
  }

  createBrandingItem(
    requestParameters: sdk.BrandingV2025ApiCreateBrandingItemRequest,
  ): Promise<AxiosResponse<sdk.BrandingItemV2025, any>> {
    return this.electronAPI.createBrandingItem(requestParameters) as Promise<
      AxiosResponse<sdk.BrandingItemV2025, any>
    >;
  }
  deleteBranding(
    requestParameters: sdk.BrandingV2025ApiDeleteBrandingRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteBranding(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getBranding(
    requestParameters: sdk.BrandingV2025ApiGetBrandingRequest,
  ): Promise<AxiosResponse<sdk.BrandingItemV2025, any>> {
    return this.electronAPI.getBranding(requestParameters) as Promise<
      AxiosResponse<sdk.BrandingItemV2025, any>
    >;
  }
  getBrandingList(): Promise<AxiosResponse<Array<sdk.BrandingItemV2025>, any>> {
    return this.electronAPI.getBrandingList() as Promise<
      AxiosResponse<Array<sdk.BrandingItemV2025>, any>
    >;
  }
  setBrandingItem(
    requestParameters: sdk.BrandingV2025ApiSetBrandingItemRequest,
  ): Promise<AxiosResponse<sdk.BrandingItemV2025, any>> {
    return this.electronAPI.setBrandingItem(requestParameters) as Promise<
      AxiosResponse<sdk.BrandingItemV2025, any>
    >;
  }

  createCampaignFilter(
    requestParameters: sdk.CertificationCampaignFiltersV2025ApiCreateCampaignFilterRequest,
  ): Promise<AxiosResponse<sdk.CampaignFilterDetailsV2025, any>> {
    return this.electronAPI.createCampaignFilter(requestParameters) as Promise<
      AxiosResponse<sdk.CampaignFilterDetailsV2025, any>
    >;
  }
  deleteCampaignFilters(
    requestParameters: sdk.CertificationCampaignFiltersV2025ApiDeleteCampaignFiltersRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteCampaignFilters(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getCampaignFilterById(
    requestParameters: sdk.CertificationCampaignFiltersV2025ApiGetCampaignFilterByIdRequest,
  ): Promise<AxiosResponse<sdk.CampaignFilterDetailsV2025, any>> {
    return this.electronAPI.getCampaignFilterById(requestParameters) as Promise<
      AxiosResponse<sdk.CampaignFilterDetailsV2025, any>
    >;
  }
  listCampaignFilters(
    requestParameters: sdk.CertificationCampaignFiltersV2025ApiListCampaignFiltersRequest = {},
  ): Promise<AxiosResponse<sdk.ListCampaignFilters200ResponseV2025, any>> {
    return this.electronAPI.listCampaignFilters(requestParameters) as Promise<
      AxiosResponse<sdk.ListCampaignFilters200ResponseV2025, any>
    >;
  }
  updateCampaignFilter(
    requestParameters: sdk.CertificationCampaignFiltersV2025ApiUpdateCampaignFilterRequest,
  ): Promise<AxiosResponse<sdk.CampaignFilterDetailsV2025, any>> {
    return this.electronAPI.updateCampaignFilter(requestParameters) as Promise<
      AxiosResponse<sdk.CampaignFilterDetailsV2025, any>
    >;
  }

  completeCampaign(
    requestParameters: sdk.CertificationCampaignsV2025ApiCompleteCampaignRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.completeCampaign(requestParameters) as Promise<
      AxiosResponse<object, any>
    >;
  }
  createCampaign(
    requestParameters: sdk.CertificationCampaignsV2025ApiCreateCampaignRequest,
  ): Promise<AxiosResponse<sdk.CampaignV2025, any>> {
    return this.electronAPI.createCampaign(requestParameters) as Promise<
      AxiosResponse<sdk.CampaignV2025, any>
    >;
  }
  createCampaignTemplate(
    requestParameters: sdk.CertificationCampaignsV2025ApiCreateCampaignTemplateRequest,
  ): Promise<AxiosResponse<sdk.CampaignTemplateV2025, any>> {
    return this.electronAPI.createCampaignTemplate(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.CampaignTemplateV2025, any>>;
  }
  deleteCampaignTemplate(
    requestParameters: sdk.CertificationCampaignsV2025ApiDeleteCampaignTemplateRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteCampaignTemplate(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  deleteCampaignTemplateSchedule(
    requestParameters: sdk.CertificationCampaignsV2025ApiDeleteCampaignTemplateScheduleRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteCampaignTemplateSchedule(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  deleteCampaigns(
    requestParameters: sdk.CertificationCampaignsV2025ApiDeleteCampaignsRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.deleteCampaigns(requestParameters) as Promise<
      AxiosResponse<object, any>
    >;
  }
  getActiveCampaigns(
    requestParameters: sdk.CertificationCampaignsV2025ApiGetActiveCampaignsRequest = {},
  ): Promise<
    AxiosResponse<Array<sdk.GetActiveCampaigns200ResponseInnerV2025>, any>
  > {
    return this.electronAPI.getActiveCampaigns(requestParameters) as Promise<
      AxiosResponse<Array<sdk.GetActiveCampaigns200ResponseInnerV2025>, any>
    >;
  }
  getCampaign(
    requestParameters: sdk.CertificationCampaignsV2025ApiGetCampaignRequest,
  ): Promise<AxiosResponse<sdk.GetCampaign200ResponseV2025, any>> {
    return this.electronAPI.getCampaign(requestParameters) as Promise<
      AxiosResponse<sdk.GetCampaign200ResponseV2025, any>
    >;
  }
  getCampaignReports(
    requestParameters: sdk.CertificationCampaignsV2025ApiGetCampaignReportsRequest,
  ): Promise<AxiosResponse<Array<sdk.CampaignReportV2025>, any>> {
    return this.electronAPI.getCampaignReports(requestParameters) as Promise<
      AxiosResponse<Array<sdk.CampaignReportV2025>, any>
    >;
  }
  getCampaignReportsConfig(): Promise<
    AxiosResponse<sdk.CampaignReportsConfigV2025, any>
  > {
    return this.electronAPI.getCampaignReportsConfig() as Promise<
      AxiosResponse<sdk.CampaignReportsConfigV2025, any>
    >;
  }
  getCampaignTemplate(
    requestParameters: sdk.CertificationCampaignsV2025ApiGetCampaignTemplateRequest,
  ): Promise<AxiosResponse<sdk.CampaignTemplateV2025, any>> {
    return this.electronAPI.getCampaignTemplate(requestParameters) as Promise<
      AxiosResponse<sdk.CampaignTemplateV2025, any>
    >;
  }
  getCampaignTemplateSchedule(
    requestParameters: sdk.CertificationCampaignsV2025ApiGetCampaignTemplateScheduleRequest,
  ): Promise<AxiosResponse<sdk.ScheduleV2025, any>> {
    return this.electronAPI.getCampaignTemplateSchedule(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ScheduleV2025, any>>;
  }
  getCampaignTemplates(
    requestParameters: sdk.CertificationCampaignsV2025ApiGetCampaignTemplatesRequest = {},
  ): Promise<AxiosResponse<Array<sdk.CampaignTemplateV2025>, any>> {
    return this.electronAPI.getCampaignTemplates(requestParameters) as Promise<
      AxiosResponse<Array<sdk.CampaignTemplateV2025>, any>
    >;
  }
  move(
    requestParameters: sdk.CertificationCampaignsV2025ApiMoveRequest,
  ): Promise<AxiosResponse<sdk.CertificationTaskV2025, any>> {
    return this.electronAPI.move(requestParameters) as Promise<
      AxiosResponse<sdk.CertificationTaskV2025, any>
    >;
  }
  patchCampaignTemplate(
    requestParameters: sdk.CertificationCampaignsV2025ApiPatchCampaignTemplateRequest,
  ): Promise<AxiosResponse<sdk.CampaignTemplateV2025, any>> {
    return this.electronAPI.patchCampaignTemplate(requestParameters) as Promise<
      AxiosResponse<sdk.CampaignTemplateV2025, any>
    >;
  }
  setCampaignReportsConfig(
    requestParameters: sdk.CertificationCampaignsV2025ApiSetCampaignReportsConfigRequest,
  ): Promise<AxiosResponse<sdk.CampaignReportsConfigV2025, any>> {
    return this.electronAPI.setCampaignReportsConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.CampaignReportsConfigV2025, any>>;
  }
  setCampaignTemplateSchedule(
    requestParameters: sdk.CertificationCampaignsV2025ApiSetCampaignTemplateScheduleRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.setCampaignTemplateSchedule(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  startCampaign(
    requestParameters: sdk.CertificationCampaignsV2025ApiStartCampaignRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.startCampaign(requestParameters) as Promise<
      AxiosResponse<object, any>
    >;
  }
  startCampaignRemediationScan(
    requestParameters: sdk.CertificationCampaignsV2025ApiStartCampaignRemediationScanRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.startCampaignRemediationScan(
      requestParameters,
    ) as Promise<AxiosResponse<object, any>>;
  }
  startCampaignReport(
    requestParameters: sdk.CertificationCampaignsV2025ApiStartCampaignReportRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.startCampaignReport(requestParameters) as Promise<
      AxiosResponse<object, any>
    >;
  }
  startGenerateCampaignTemplate(
    requestParameters: sdk.CertificationCampaignsV2025ApiStartGenerateCampaignTemplateRequest,
  ): Promise<AxiosResponse<sdk.CampaignReferenceV2025, any>> {
    return this.electronAPI.startGenerateCampaignTemplate(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.CampaignReferenceV2025, any>>;
  }
  updateCampaign(
    requestParameters: sdk.CertificationCampaignsV2025ApiUpdateCampaignRequest,
  ): Promise<AxiosResponse<sdk.SlimCampaignV2025, any>> {
    return this.electronAPI.updateCampaign(requestParameters) as Promise<
      AxiosResponse<sdk.SlimCampaignV2025, any>
    >;
  }

  getIdentityAccessSummaries(
    requestParameters: sdk.CertificationSummariesV2025ApiGetIdentityAccessSummariesRequest,
  ): Promise<AxiosResponse<Array<sdk.AccessSummaryV2025>, any>> {
    return this.electronAPI.getIdentityAccessSummaries(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.AccessSummaryV2025>, any>>;
  }
  getIdentityDecisionSummary(
    requestParameters: sdk.CertificationSummariesV2025ApiGetIdentityDecisionSummaryRequest,
  ): Promise<AxiosResponse<sdk.IdentityCertDecisionSummaryV2025, any>> {
    return this.electronAPI.getIdentityDecisionSummary(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.IdentityCertDecisionSummaryV2025, any>>;
  }
  getIdentitySummaries(
    requestParameters: sdk.CertificationSummariesV2025ApiGetIdentitySummariesRequest,
  ): Promise<AxiosResponse<Array<sdk.CertificationIdentitySummaryV2025>, any>> {
    return this.electronAPI.getIdentitySummaries(requestParameters) as Promise<
      AxiosResponse<Array<sdk.CertificationIdentitySummaryV2025>, any>
    >;
  }
  getIdentitySummary(
    requestParameters: sdk.CertificationSummariesV2025ApiGetIdentitySummaryRequest,
  ): Promise<AxiosResponse<sdk.CertificationIdentitySummaryV2025, any>> {
    return this.electronAPI.getIdentitySummary(requestParameters) as Promise<
      AxiosResponse<sdk.CertificationIdentitySummaryV2025, any>
    >;
  }

  getCertificationTask(
    requestParameters: sdk.CertificationsV2025ApiGetCertificationTaskRequest,
  ): Promise<AxiosResponse<sdk.CertificationTaskV2025, any>> {
    return this.electronAPI.getCertificationTask(requestParameters) as Promise<
      AxiosResponse<sdk.CertificationTaskV2025, any>
    >;
  }
  getIdentityCertification(
    requestParameters: sdk.CertificationsV2025ApiGetIdentityCertificationRequest,
  ): Promise<AxiosResponse<sdk.IdentityCertificationDtoV2025, any>> {
    return this.electronAPI.getIdentityCertification(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.IdentityCertificationDtoV2025, any>>;
  }
  getIdentityCertificationItemPermissions(
    requestParameters: sdk.CertificationsV2025ApiGetIdentityCertificationItemPermissionsRequest,
  ): Promise<AxiosResponse<Array<sdk.PermissionDtoV2025>, any>> {
    return this.electronAPI.getIdentityCertificationItemPermissions(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.PermissionDtoV2025>, any>>;
  }
  getPendingCertificationTasks(
    requestParameters: sdk.CertificationsV2025ApiGetPendingCertificationTasksRequest = {},
  ): Promise<AxiosResponse<Array<sdk.CertificationTaskV2025>, any>> {
    return this.electronAPI.getPendingCertificationTasks(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.CertificationTaskV2025>, any>>;
  }
  listCertificationReviewers(
    requestParameters: sdk.CertificationsV2025ApiListCertificationReviewersRequest,
  ): Promise<
    AxiosResponse<Array<sdk.IdentityReferenceWithNameAndEmailV2025>, any>
  > {
    return this.electronAPI.listCertificationReviewers(
      requestParameters,
    ) as Promise<
      AxiosResponse<Array<sdk.IdentityReferenceWithNameAndEmailV2025>, any>
    >;
  }
  listIdentityAccessReviewItems(
    requestParameters: sdk.CertificationsV2025ApiListIdentityAccessReviewItemsRequest,
  ): Promise<AxiosResponse<Array<sdk.AccessReviewItemV2025>, any>> {
    return this.electronAPI.listIdentityAccessReviewItems(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.AccessReviewItemV2025>, any>>;
  }
  listIdentityCertifications(
    requestParameters: sdk.CertificationsV2025ApiListIdentityCertificationsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.IdentityCertificationDtoV2025>, any>> {
    return this.electronAPI.listIdentityCertifications(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.IdentityCertificationDtoV2025>, any>>;
  }
  makeIdentityDecision(
    requestParameters: sdk.CertificationsV2025ApiMakeIdentityDecisionRequest,
  ): Promise<AxiosResponse<sdk.IdentityCertificationDtoV2025, any>> {
    return this.electronAPI.makeIdentityDecision(requestParameters) as Promise<
      AxiosResponse<sdk.IdentityCertificationDtoV2025, any>
    >;
  }
  reassignIdentityCertifications(
    requestParameters: sdk.CertificationsV2025ApiReassignIdentityCertificationsRequest,
  ): Promise<AxiosResponse<sdk.IdentityCertificationDtoV2025, any>> {
    return this.electronAPI.reassignIdentityCertifications(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.IdentityCertificationDtoV2025, any>>;
  }
  signOffIdentityCertification(
    requestParameters: sdk.CertificationsV2025ApiSignOffIdentityCertificationRequest,
  ): Promise<AxiosResponse<sdk.IdentityCertificationDtoV2025, any>> {
    return this.electronAPI.signOffIdentityCertification(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.IdentityCertificationDtoV2025, any>>;
  }
  submitReassignCertsAsync(
    requestParameters: sdk.CertificationsV2025ApiSubmitReassignCertsAsyncRequest,
  ): Promise<AxiosResponse<sdk.CertificationTaskV2025, any>> {
    return this.electronAPI.submitReassignCertsAsync(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.CertificationTaskV2025, any>>;
  }

  createDeploy(
    requestParameters: sdk.ConfigurationHubV2025ApiCreateDeployRequest,
  ): Promise<AxiosResponse<sdk.DeployResponseV2025, any>> {
    return this.electronAPI.createDeploy(requestParameters) as Promise<
      AxiosResponse<sdk.DeployResponseV2025, any>
    >;
  }
  createObjectMapping(
    requestParameters: sdk.ConfigurationHubV2025ApiCreateObjectMappingRequest,
  ): Promise<AxiosResponse<sdk.ObjectMappingResponseV2025, any>> {
    return this.electronAPI.createObjectMapping(requestParameters) as Promise<
      AxiosResponse<sdk.ObjectMappingResponseV2025, any>
    >;
  }
  createObjectMappings(
    requestParameters: sdk.ConfigurationHubV2025ApiCreateObjectMappingsRequest,
  ): Promise<AxiosResponse<sdk.ObjectMappingBulkCreateResponseV2025, any>> {
    return this.electronAPI.createObjectMappings(requestParameters) as Promise<
      AxiosResponse<sdk.ObjectMappingBulkCreateResponseV2025, any>
    >;
  }
  createScheduledAction(
    requestParameters: sdk.ConfigurationHubV2025ApiCreateScheduledActionRequest,
  ): Promise<AxiosResponse<sdk.ScheduledActionResponseV2025, any>> {
    return this.electronAPI.createScheduledAction(requestParameters) as Promise<
      AxiosResponse<sdk.ScheduledActionResponseV2025, any>
    >;
  }
  createUploadedConfiguration(
    requestParameters: sdk.ConfigurationHubV2025ApiCreateUploadedConfigurationRequest,
  ): Promise<AxiosResponse<sdk.BackupResponseV2025, any>> {
    return this.electronAPI.createUploadedConfiguration(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.BackupResponseV2025, any>>;
  }
  deleteBackup(
    requestParameters: sdk.ConfigurationHubV2025ApiDeleteBackupRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteBackup(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  deleteDraft(
    requestParameters: sdk.ConfigurationHubV2025ApiDeleteDraftRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteDraft(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  deleteObjectMapping(
    requestParameters: sdk.ConfigurationHubV2025ApiDeleteObjectMappingRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteObjectMapping(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  deleteScheduledAction(
    requestParameters: sdk.ConfigurationHubV2025ApiDeleteScheduledActionRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteScheduledAction(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  deleteUploadedConfiguration(
    requestParameters: sdk.ConfigurationHubV2025ApiDeleteUploadedConfigurationRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteUploadedConfiguration(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  getDeploy(
    requestParameters: sdk.ConfigurationHubV2025ApiGetDeployRequest,
  ): Promise<AxiosResponse<sdk.DeployResponseV2025, any>> {
    return this.electronAPI.getDeploy(requestParameters) as Promise<
      AxiosResponse<sdk.DeployResponseV2025, any>
    >;
  }
  getObjectMappings(
    requestParameters: sdk.ConfigurationHubV2025ApiGetObjectMappingsRequest,
  ): Promise<AxiosResponse<Array<sdk.ObjectMappingResponseV2025>, any>> {
    return this.electronAPI.getObjectMappings(requestParameters) as Promise<
      AxiosResponse<Array<sdk.ObjectMappingResponseV2025>, any>
    >;
  }
  getUploadedConfiguration(
    requestParameters: sdk.ConfigurationHubV2025ApiGetUploadedConfigurationRequest,
  ): Promise<AxiosResponse<sdk.BackupResponseV2025, any>> {
    return this.electronAPI.getUploadedConfiguration(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.BackupResponseV2025, any>>;
  }
  listBackups(
    requestParameters: sdk.ConfigurationHubV2025ApiListBackupsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.BackupResponse1V2025>, any>> {
    return this.electronAPI.listBackups(requestParameters) as Promise<
      AxiosResponse<Array<sdk.BackupResponse1V2025>, any>
    >;
  }
  listDeploys(): Promise<AxiosResponse<sdk.ListDeploys200ResponseV2025, any>> {
    return this.electronAPI.listDeploys() as Promise<
      AxiosResponse<sdk.ListDeploys200ResponseV2025, any>
    >;
  }
  listDrafts(
    requestParameters: sdk.ConfigurationHubV2025ApiListDraftsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.DraftResponseV2025>, any>> {
    return this.electronAPI.listDrafts(requestParameters) as Promise<
      AxiosResponse<Array<sdk.DraftResponseV2025>, any>
    >;
  }
  listScheduledActions(): Promise<
    AxiosResponse<Array<sdk.ScheduledActionResponseV2025>, any>
  > {
    return this.electronAPI.listScheduledActions() as Promise<
      AxiosResponse<Array<sdk.ScheduledActionResponseV2025>, any>
    >;
  }
  listUploadedConfigurations(
    requestParameters: sdk.ConfigurationHubV2025ApiListUploadedConfigurationsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.BackupResponseV2025>, any>> {
    return this.electronAPI.listUploadedConfigurations(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.BackupResponseV2025>, any>>;
  }
  updateObjectMappings(
    requestParameters: sdk.ConfigurationHubV2025ApiUpdateObjectMappingsRequest,
  ): Promise<AxiosResponse<sdk.ObjectMappingBulkPatchResponseV2025, any>> {
    return this.electronAPI.updateObjectMappings(requestParameters) as Promise<
      AxiosResponse<sdk.ObjectMappingBulkPatchResponseV2025, any>
    >;
  }
  updateScheduledAction(
    requestParameters: sdk.ConfigurationHubV2025ApiUpdateScheduledActionRequest,
  ): Promise<AxiosResponse<sdk.ScheduledActionResponseV2025, any>> {
    return this.electronAPI.updateScheduledAction(requestParameters) as Promise<
      AxiosResponse<sdk.ScheduledActionResponseV2025, any>
    >;
  }

  createConnectorCustomizer(
    requestParameters: sdk.ConnectorCustomizersV2025ApiCreateConnectorCustomizerRequest,
  ): Promise<AxiosResponse<sdk.ConnectorCustomizerCreateResponseV2025, any>> {
    return this.electronAPI.createConnectorCustomizer(
      requestParameters,
    ) as Promise<
      AxiosResponse<sdk.ConnectorCustomizerCreateResponseV2025, any>
    >;
  }
  createConnectorCustomizerVersion(
    requestParameters: sdk.ConnectorCustomizersV2025ApiCreateConnectorCustomizerVersionRequest,
  ): Promise<
    AxiosResponse<sdk.ConnectorCustomizerVersionCreateResponseV2025, any>
  > {
    return this.electronAPI.createConnectorCustomizerVersion(
      requestParameters,
    ) as Promise<
      AxiosResponse<sdk.ConnectorCustomizerVersionCreateResponseV2025, any>
    >;
  }
  deleteConnectorCustomizer(
    requestParameters: sdk.ConnectorCustomizersV2025ApiDeleteConnectorCustomizerRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteConnectorCustomizer(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  getConnectorCustomizer(
    requestParameters: sdk.ConnectorCustomizersV2025ApiGetConnectorCustomizerRequest,
  ): Promise<AxiosResponse<sdk.ConnectorCustomizersResponseV2025, any>> {
    return this.electronAPI.getConnectorCustomizer(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ConnectorCustomizersResponseV2025, any>>;
  }
  listConnectorCustomizers(
    requestParameters: sdk.ConnectorCustomizersV2025ApiListConnectorCustomizersRequest = {},
  ): Promise<AxiosResponse<Array<sdk.ConnectorCustomizersResponseV2025>, any>> {
    return this.electronAPI.listConnectorCustomizers(
      requestParameters,
    ) as Promise<
      AxiosResponse<Array<sdk.ConnectorCustomizersResponseV2025>, any>
    >;
  }
  putConnectorCustomizer(
    requestParameters: sdk.ConnectorCustomizersV2025ApiPutConnectorCustomizerRequest,
  ): Promise<AxiosResponse<sdk.ConnectorCustomizerUpdateResponseV2025, any>> {
    return this.electronAPI.putConnectorCustomizer(
      requestParameters,
    ) as Promise<
      AxiosResponse<sdk.ConnectorCustomizerUpdateResponseV2025, any>
    >;
  }

  createConnectorRule(
    requestParameters: sdk.ConnectorRuleManagementV2025ApiCreateConnectorRuleRequest,
  ): Promise<AxiosResponse<sdk.ConnectorRuleResponseV2025, any>> {
    return this.electronAPI.createConnectorRule(requestParameters) as Promise<
      AxiosResponse<sdk.ConnectorRuleResponseV2025, any>
    >;
  }
  deleteConnectorRule(
    requestParameters: sdk.ConnectorRuleManagementV2025ApiDeleteConnectorRuleRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteConnectorRule(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getConnectorRule(
    requestParameters: sdk.ConnectorRuleManagementV2025ApiGetConnectorRuleRequest,
  ): Promise<AxiosResponse<sdk.ConnectorRuleResponseV2025, any>> {
    return this.electronAPI.getConnectorRule(requestParameters) as Promise<
      AxiosResponse<sdk.ConnectorRuleResponseV2025, any>
    >;
  }
  getConnectorRuleList(
    requestParameters: sdk.ConnectorRuleManagementV2025ApiGetConnectorRuleListRequest = {},
  ): Promise<AxiosResponse<Array<sdk.ConnectorRuleResponseV2025>, any>> {
    return this.electronAPI.getConnectorRuleList(requestParameters) as Promise<
      AxiosResponse<Array<sdk.ConnectorRuleResponseV2025>, any>
    >;
  }
  putConnectorRule(
    requestParameters: sdk.ConnectorRuleManagementV2025ApiPutConnectorRuleRequest,
  ): Promise<AxiosResponse<sdk.ConnectorRuleResponseV2025, any>> {
    return this.electronAPI.putConnectorRule(requestParameters) as Promise<
      AxiosResponse<sdk.ConnectorRuleResponseV2025, any>
    >;
  }
  testConnectorRule(
    requestParameters: sdk.ConnectorRuleManagementV2025ApiTestConnectorRuleRequest,
  ): Promise<AxiosResponse<sdk.ConnectorRuleValidationResponseV2025, any>> {
    return this.electronAPI.testConnectorRule(requestParameters) as Promise<
      AxiosResponse<sdk.ConnectorRuleValidationResponseV2025, any>
    >;
  }

  createCustomConnector(
    requestParameters: sdk.ConnectorsV2025ApiCreateCustomConnectorRequest,
  ): Promise<AxiosResponse<sdk.V3ConnectorDtoV2025, any>> {
    return this.electronAPI.createCustomConnector(requestParameters) as Promise<
      AxiosResponse<sdk.V3ConnectorDtoV2025, any>
    >;
  }
  deleteCustomConnector(
    requestParameters: sdk.ConnectorsV2025ApiDeleteCustomConnectorRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteCustomConnector(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getConnector(
    requestParameters: sdk.ConnectorsV2025ApiGetConnectorRequest,
  ): Promise<AxiosResponse<sdk.ConnectorDetailV2025, any>> {
    return this.electronAPI.getConnector(requestParameters) as Promise<
      AxiosResponse<sdk.ConnectorDetailV2025, any>
    >;
  }
  getConnectorCorrelationConfig(
    requestParameters: sdk.ConnectorsV2025ApiGetConnectorCorrelationConfigRequest,
  ): Promise<AxiosResponse<string, any>> {
    return this.electronAPI.getConnectorCorrelationConfig(
      requestParameters,
    ) as Promise<AxiosResponse<string, any>>;
  }
  getConnectorList(
    requestParameters: sdk.ConnectorsV2025ApiGetConnectorListRequest = {},
  ): Promise<AxiosResponse<Array<sdk.V3ConnectorDtoV2025>, any>> {
    return this.electronAPI.getConnectorList(requestParameters) as Promise<
      AxiosResponse<Array<sdk.V3ConnectorDtoV2025>, any>
    >;
  }
  getConnectorSourceConfig(
    requestParameters: sdk.ConnectorsV2025ApiGetConnectorSourceConfigRequest,
  ): Promise<AxiosResponse<string, any>> {
    return this.electronAPI.getConnectorSourceConfig(
      requestParameters,
    ) as Promise<AxiosResponse<string, any>>;
  }
  getConnectorSourceTemplate(
    requestParameters: sdk.ConnectorsV2025ApiGetConnectorSourceTemplateRequest,
  ): Promise<AxiosResponse<string, any>> {
    return this.electronAPI.getConnectorSourceTemplate(
      requestParameters,
    ) as Promise<AxiosResponse<string, any>>;
  }
  getConnectorTranslations(
    requestParameters: sdk.ConnectorsV2025ApiGetConnectorTranslationsRequest,
  ): Promise<AxiosResponse<string, any>> {
    return this.electronAPI.getConnectorTranslations(
      requestParameters,
    ) as Promise<AxiosResponse<string, any>>;
  }
  putConnectorCorrelationConfig(
    requestParameters: sdk.ConnectorsV2025ApiPutConnectorCorrelationConfigRequest,
  ): Promise<AxiosResponse<sdk.UpdateDetailV2025, any>> {
    return this.electronAPI.putConnectorCorrelationConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.UpdateDetailV2025, any>>;
  }
  putConnectorSourceConfig(
    requestParameters: sdk.ConnectorsV2025ApiPutConnectorSourceConfigRequest,
  ): Promise<AxiosResponse<sdk.UpdateDetailV2025, any>> {
    return this.electronAPI.putConnectorSourceConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.UpdateDetailV2025, any>>;
  }
  putConnectorSourceTemplate(
    requestParameters: sdk.ConnectorsV2025ApiPutConnectorSourceTemplateRequest,
  ): Promise<AxiosResponse<sdk.UpdateDetailV2025, any>> {
    return this.electronAPI.putConnectorSourceTemplate(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.UpdateDetailV2025, any>>;
  }
  putConnectorTranslations(
    requestParameters: sdk.ConnectorsV2025ApiPutConnectorTranslationsRequest,
  ): Promise<AxiosResponse<sdk.UpdateDetailV2025, any>> {
    return this.electronAPI.putConnectorTranslations(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.UpdateDetailV2025, any>>;
  }
  updateConnector(
    requestParameters: sdk.ConnectorsV2025ApiUpdateConnectorRequest,
  ): Promise<AxiosResponse<sdk.ConnectorDetailV2025, any>> {
    return this.electronAPI.updateConnector(requestParameters) as Promise<
      AxiosResponse<sdk.ConnectorDetailV2025, any>
    >;
  }

  createFormDefinition(
    requestParameters: sdk.CustomFormsV2025ApiCreateFormDefinitionRequest = {},
  ): Promise<AxiosResponse<sdk.FormDefinitionResponseV2025, any>> {
    return this.electronAPI.createFormDefinition(requestParameters) as Promise<
      AxiosResponse<sdk.FormDefinitionResponseV2025, any>
    >;
  }
  createFormDefinitionDynamicSchema(
    requestParameters: sdk.CustomFormsV2025ApiCreateFormDefinitionDynamicSchemaRequest = {},
  ): Promise<AxiosResponse<sdk.FormDefinitionDynamicSchemaResponseV2025, any>> {
    return this.electronAPI.createFormDefinitionDynamicSchema(
      requestParameters,
    ) as Promise<
      AxiosResponse<sdk.FormDefinitionDynamicSchemaResponseV2025, any>
    >;
  }
  createFormDefinitionFileRequest(
    requestParameters: sdk.CustomFormsV2025ApiCreateFormDefinitionFileRequestRequest,
  ): Promise<AxiosResponse<sdk.FormDefinitionFileUploadResponseV2025, any>> {
    return this.electronAPI.createFormDefinitionFileRequest(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.FormDefinitionFileUploadResponseV2025, any>>;
  }
  createFormInstance(
    requestParameters: sdk.CustomFormsV2025ApiCreateFormInstanceRequest = {},
  ): Promise<AxiosResponse<sdk.FormInstanceResponseV2025, any>> {
    return this.electronAPI.createFormInstance(requestParameters) as Promise<
      AxiosResponse<sdk.FormInstanceResponseV2025, any>
    >;
  }
  deleteFormDefinition(
    requestParameters: sdk.CustomFormsV2025ApiDeleteFormDefinitionRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.deleteFormDefinition(requestParameters) as Promise<
      AxiosResponse<object, any>
    >;
  }
  exportFormDefinitionsByTenant(
    requestParameters: sdk.CustomFormsV2025ApiExportFormDefinitionsByTenantRequest = {},
  ): Promise<
    AxiosResponse<
      Array<sdk.ExportFormDefinitionsByTenant200ResponseInnerV2025>,
      any
    >
  > {
    return this.electronAPI.exportFormDefinitionsByTenant(
      requestParameters,
    ) as Promise<
      AxiosResponse<
        Array<sdk.ExportFormDefinitionsByTenant200ResponseInnerV2025>,
        any
      >
    >;
  }
  getFileFromS3(
    requestParameters: sdk.CustomFormsV2025ApiGetFileFromS3Request,
  ): Promise<AxiosResponse<File, any>> {
    return this.electronAPI.getFileFromS3(requestParameters) as Promise<
      AxiosResponse<File, any>
    >;
  }
  getFormDefinitionByKey(
    requestParameters: sdk.CustomFormsV2025ApiGetFormDefinitionByKeyRequest,
  ): Promise<AxiosResponse<sdk.FormDefinitionResponseV2025, any>> {
    return this.electronAPI.getFormDefinitionByKey(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.FormDefinitionResponseV2025, any>>;
  }
  getFormInstanceByKey(
    requestParameters: sdk.CustomFormsV2025ApiGetFormInstanceByKeyRequest,
  ): Promise<AxiosResponse<sdk.FormInstanceResponseV2025, any>> {
    return this.electronAPI.getFormInstanceByKey(requestParameters) as Promise<
      AxiosResponse<sdk.FormInstanceResponseV2025, any>
    >;
  }
  getFormInstanceFile(
    requestParameters: sdk.CustomFormsV2025ApiGetFormInstanceFileRequest,
  ): Promise<AxiosResponse<File, any>> {
    return this.electronAPI.getFormInstanceFile(requestParameters) as Promise<
      AxiosResponse<File, any>
    >;
  }
  importFormDefinitions(
    requestParameters: sdk.CustomFormsV2025ApiImportFormDefinitionsRequest = {},
  ): Promise<AxiosResponse<sdk.ImportFormDefinitions202ResponseV2025, any>> {
    return this.electronAPI.importFormDefinitions(requestParameters) as Promise<
      AxiosResponse<sdk.ImportFormDefinitions202ResponseV2025, any>
    >;
  }
  patchFormDefinition(
    requestParameters: sdk.CustomFormsV2025ApiPatchFormDefinitionRequest,
  ): Promise<AxiosResponse<sdk.FormDefinitionResponseV2025, any>> {
    return this.electronAPI.patchFormDefinition(requestParameters) as Promise<
      AxiosResponse<sdk.FormDefinitionResponseV2025, any>
    >;
  }
  patchFormInstance(
    requestParameters: sdk.CustomFormsV2025ApiPatchFormInstanceRequest,
  ): Promise<AxiosResponse<sdk.FormInstanceResponseV2025, any>> {
    return this.electronAPI.patchFormInstance(requestParameters) as Promise<
      AxiosResponse<sdk.FormInstanceResponseV2025, any>
    >;
  }
  searchFormDefinitionsByTenant(
    requestParameters: sdk.CustomFormsV2025ApiSearchFormDefinitionsByTenantRequest = {},
  ): Promise<AxiosResponse<sdk.ListFormDefinitionsByTenantResponseV2025, any>> {
    return this.electronAPI.searchFormDefinitionsByTenant(
      requestParameters,
    ) as Promise<
      AxiosResponse<sdk.ListFormDefinitionsByTenantResponseV2025, any>
    >;
  }
  searchFormElementDataByElementID(
    requestParameters: sdk.CustomFormsV2025ApiSearchFormElementDataByElementIDRequest,
  ): Promise<
    AxiosResponse<sdk.ListFormElementDataByElementIDResponseV2025, any>
  > {
    return this.electronAPI.searchFormElementDataByElementID(
      requestParameters,
    ) as Promise<
      AxiosResponse<sdk.ListFormElementDataByElementIDResponseV2025, any>
    >;
  }
  searchFormInstancesByTenant(): Promise<
    AxiosResponse<Array<sdk.ListFormInstancesByTenantResponseV2025>, any>
  > {
    return this.electronAPI.searchFormInstancesByTenant() as Promise<
      AxiosResponse<Array<sdk.ListFormInstancesByTenantResponseV2025>, any>
    >;
  }
  searchPreDefinedSelectOptions(): Promise<
    AxiosResponse<sdk.ListPredefinedSelectOptionsResponseV2025, any>
  > {
    return this.electronAPI.searchPreDefinedSelectOptions() as Promise<
      AxiosResponse<sdk.ListPredefinedSelectOptionsResponseV2025, any>
    >;
  }
  showPreviewDataSource(
    requestParameters: sdk.CustomFormsV2025ApiShowPreviewDataSourceRequest,
  ): Promise<AxiosResponse<sdk.PreviewDataSourceResponseV2025, any>> {
    return this.electronAPI.showPreviewDataSource(requestParameters) as Promise<
      AxiosResponse<sdk.PreviewDataSourceResponseV2025, any>
    >;
  }

  createCustomPasswordInstructions(
    requestParameters: sdk.CustomPasswordInstructionsV2025ApiCreateCustomPasswordInstructionsRequest,
  ): Promise<AxiosResponse<sdk.CustomPasswordInstructionV2025, any>> {
    return this.electronAPI.createCustomPasswordInstructions(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.CustomPasswordInstructionV2025, any>>;
  }
  deleteCustomPasswordInstructions(
    requestParameters: sdk.CustomPasswordInstructionsV2025ApiDeleteCustomPasswordInstructionsRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteCustomPasswordInstructions(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  getCustomPasswordInstructions(
    requestParameters: sdk.CustomPasswordInstructionsV2025ApiGetCustomPasswordInstructionsRequest,
  ): Promise<AxiosResponse<sdk.CustomPasswordInstructionV2025, any>> {
    return this.electronAPI.getCustomPasswordInstructions(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.CustomPasswordInstructionV2025, any>>;
  }

  createDataSegment(
    requestParameters: sdk.DataSegmentationV2025ApiCreateDataSegmentRequest,
  ): Promise<AxiosResponse<sdk.DataSegmentV2025, any>> {
    return this.electronAPI.createDataSegment(requestParameters) as Promise<
      AxiosResponse<sdk.DataSegmentV2025, any>
    >;
  }
  deleteDataSegment(
    requestParameters: sdk.DataSegmentationV2025ApiDeleteDataSegmentRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteDataSegment(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getDataSegment(
    requestParameters: sdk.DataSegmentationV2025ApiGetDataSegmentRequest,
  ): Promise<AxiosResponse<sdk.DataSegmentV2025, any>> {
    return this.electronAPI.getDataSegment(requestParameters) as Promise<
      AxiosResponse<sdk.DataSegmentV2025, any>
    >;
  }
  getDataSegmentIdentityMembership(
    requestParameters: sdk.DataSegmentationV2025ApiGetDataSegmentIdentityMembershipRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.getDataSegmentIdentityMembership(
      requestParameters,
    ) as Promise<AxiosResponse<object, any>>;
  }
  getDataSegmentationEnabledForUser(
    requestParameters: sdk.DataSegmentationV2025ApiGetDataSegmentationEnabledForUserRequest,
  ): Promise<AxiosResponse<boolean, any>> {
    return this.electronAPI.getDataSegmentationEnabledForUser(
      requestParameters,
    ) as Promise<AxiosResponse<boolean, any>>;
  }
  listDataSegments(
    requestParameters: sdk.DataSegmentationV2025ApiListDataSegmentsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.DataSegmentV2025>, any>> {
    return this.electronAPI.listDataSegments(requestParameters) as Promise<
      AxiosResponse<Array<sdk.DataSegmentV2025>, any>
    >;
  }
  patchDataSegment(
    requestParameters: sdk.DataSegmentationV2025ApiPatchDataSegmentRequest,
  ): Promise<AxiosResponse<sdk.DataSegmentV2025, any>> {
    return this.electronAPI.patchDataSegment(requestParameters) as Promise<
      AxiosResponse<sdk.DataSegmentV2025, any>
    >;
  }
  publishDataSegment(
    requestParameters: sdk.DataSegmentationV2025ApiPublishDataSegmentRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.publishDataSegment(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }

  createDimension(
    requestParameters: sdk.DimensionsV2025ApiCreateDimensionRequest,
  ): Promise<AxiosResponse<sdk.DimensionV2025, any>> {
    return this.electronAPI.createDimension(requestParameters) as Promise<
      AxiosResponse<sdk.DimensionV2025, any>
    >;
  }
  deleteBulkDimensions(
    requestParameters: sdk.DimensionsV2025ApiDeleteBulkDimensionsRequest,
  ): Promise<AxiosResponse<sdk.TaskResultDtoV2025, any>> {
    return this.electronAPI.deleteBulkDimensions(requestParameters) as Promise<
      AxiosResponse<sdk.TaskResultDtoV2025, any>
    >;
  }
  deleteDimension(
    requestParameters: sdk.DimensionsV2025ApiDeleteDimensionRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteDimension(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getDimension(
    requestParameters: sdk.DimensionsV2025ApiGetDimensionRequest,
  ): Promise<AxiosResponse<sdk.DimensionV2025, any>> {
    return this.electronAPI.getDimension(requestParameters) as Promise<
      AxiosResponse<sdk.DimensionV2025, any>
    >;
  }
  getDimensionEntitlements(
    requestParameters: sdk.DimensionsV2025ApiGetDimensionEntitlementsRequest,
  ): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>> {
    return this.electronAPI.getDimensionEntitlements(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>>;
  }
  listDimensionAccessProfiles(
    requestParameters: sdk.DimensionsV2025ApiListDimensionAccessProfilesRequest,
  ): Promise<AxiosResponse<Array<sdk.AccessProfileV2025>, any>> {
    return this.electronAPI.listDimensionAccessProfiles(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.AccessProfileV2025>, any>>;
  }
  listDimensions(
    requestParameters: sdk.DimensionsV2025ApiListDimensionsRequest,
  ): Promise<AxiosResponse<Array<sdk.DimensionV2025>, any>> {
    return this.electronAPI.listDimensions(requestParameters) as Promise<
      AxiosResponse<Array<sdk.DimensionV2025>, any>
    >;
  }
  patchDimension(
    requestParameters: sdk.DimensionsV2025ApiPatchDimensionRequest,
  ): Promise<AxiosResponse<sdk.DimensionV2025, any>> {
    return this.electronAPI.patchDimension(requestParameters) as Promise<
      AxiosResponse<sdk.DimensionV2025, any>
    >;
  }

  createAccessModelMetadataForEntitlement(
    requestParameters: sdk.EntitlementsV2025ApiCreateAccessModelMetadataForEntitlementRequest,
  ): Promise<AxiosResponse<sdk.EntitlementV2025, any>> {
    return this.electronAPI.createAccessModelMetadataForEntitlement(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.EntitlementV2025, any>>;
  }
  deleteAccessModelMetadataFromEntitlement(
    requestParameters: sdk.EntitlementsV2025ApiDeleteAccessModelMetadataFromEntitlementRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteAccessModelMetadataFromEntitlement(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  getEntitlement(
    requestParameters: sdk.EntitlementsV2025ApiGetEntitlementRequest,
  ): Promise<AxiosResponse<sdk.EntitlementV2025, any>> {
    return this.electronAPI.getEntitlement(requestParameters) as Promise<
      AxiosResponse<sdk.EntitlementV2025, any>
    >;
  }
  getEntitlementRequestConfig(
    requestParameters: sdk.EntitlementsV2025ApiGetEntitlementRequestConfigRequest,
  ): Promise<AxiosResponse<sdk.EntitlementRequestConfigV2025, any>> {
    return this.electronAPI.getEntitlementRequestConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.EntitlementRequestConfigV2025, any>>;
  }
  importEntitlementsBySource(
    requestParameters: sdk.EntitlementsV2025ApiImportEntitlementsBySourceRequest,
  ): Promise<AxiosResponse<sdk.LoadEntitlementTaskV2025, any>> {
    return this.electronAPI.importEntitlementsBySource(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.LoadEntitlementTaskV2025, any>>;
  }
  listEntitlementChildren(
    requestParameters: sdk.EntitlementsV2025ApiListEntitlementChildrenRequest,
  ): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>> {
    return this.electronAPI.listEntitlementChildren(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>>;
  }
  listEntitlementParents(
    requestParameters: sdk.EntitlementsV2025ApiListEntitlementParentsRequest,
  ): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>> {
    return this.electronAPI.listEntitlementParents(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>>;
  }
  listEntitlements(
    requestParameters: sdk.EntitlementsV2025ApiListEntitlementsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>> {
    return this.electronAPI.listEntitlements(requestParameters) as Promise<
      AxiosResponse<Array<sdk.EntitlementV2025>, any>
    >;
  }
  patchEntitlement(
    requestParameters: sdk.EntitlementsV2025ApiPatchEntitlementRequest,
  ): Promise<AxiosResponse<sdk.EntitlementV2025, any>> {
    return this.electronAPI.patchEntitlement(requestParameters) as Promise<
      AxiosResponse<sdk.EntitlementV2025, any>
    >;
  }
  putEntitlementRequestConfig(
    requestParameters: sdk.EntitlementsV2025ApiPutEntitlementRequestConfigRequest,
  ): Promise<AxiosResponse<sdk.EntitlementRequestConfigV2025, any>> {
    return this.electronAPI.putEntitlementRequestConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.EntitlementRequestConfigV2025, any>>;
  }
  resetSourceEntitlements(
    requestParameters: sdk.EntitlementsV2025ApiResetSourceEntitlementsRequest,
  ): Promise<
    AxiosResponse<sdk.EntitlementSourceResetBaseReferenceDtoV2025, any>
  > {
    return this.electronAPI.resetSourceEntitlements(
      requestParameters,
    ) as Promise<
      AxiosResponse<sdk.EntitlementSourceResetBaseReferenceDtoV2025, any>
    >;
  }
  updateEntitlementsInBulk(
    requestParameters: sdk.EntitlementsV2025ApiUpdateEntitlementsInBulkRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.updateEntitlementsInBulk(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }

  createAuthOrgNetworkConfig(
    requestParameters: sdk.GlobalTenantSecuritySettingsV2025ApiCreateAuthOrgNetworkConfigRequest,
  ): Promise<AxiosResponse<sdk.NetworkConfigurationV2025, any>> {
    return this.electronAPI.createAuthOrgNetworkConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.NetworkConfigurationV2025, any>>;
  }
  getAuthOrgLockoutConfig(): Promise<
    AxiosResponse<sdk.LockoutConfigurationV2025, any>
  > {
    return this.electronAPI.getAuthOrgLockoutConfig() as Promise<
      AxiosResponse<sdk.LockoutConfigurationV2025, any>
    >;
  }
  getAuthOrgNetworkConfig(): Promise<
    AxiosResponse<sdk.NetworkConfigurationV2025, any>
  > {
    return this.electronAPI.getAuthOrgNetworkConfig() as Promise<
      AxiosResponse<sdk.NetworkConfigurationV2025, any>
    >;
  }
  getAuthOrgServiceProviderConfig(): Promise<
    AxiosResponse<sdk.ServiceProviderConfigurationV2025, any>
  > {
    return this.electronAPI.getAuthOrgServiceProviderConfig() as Promise<
      AxiosResponse<sdk.ServiceProviderConfigurationV2025, any>
    >;
  }
  getAuthOrgSessionConfig(): Promise<
    AxiosResponse<sdk.SessionConfigurationV2025, any>
  > {
    return this.electronAPI.getAuthOrgSessionConfig() as Promise<
      AxiosResponse<sdk.SessionConfigurationV2025, any>
    >;
  }
  patchAuthOrgLockoutConfig(
    requestParameters: sdk.GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgLockoutConfigRequest,
  ): Promise<AxiosResponse<sdk.LockoutConfigurationV2025, any>> {
    return this.electronAPI.patchAuthOrgLockoutConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.LockoutConfigurationV2025, any>>;
  }
  patchAuthOrgNetworkConfig(
    requestParameters: sdk.GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgNetworkConfigRequest,
  ): Promise<AxiosResponse<sdk.NetworkConfigurationV2025, any>> {
    return this.electronAPI.patchAuthOrgNetworkConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.NetworkConfigurationV2025, any>>;
  }
  patchAuthOrgServiceProviderConfig(
    requestParameters: sdk.GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgServiceProviderConfigRequest,
  ): Promise<AxiosResponse<sdk.ServiceProviderConfigurationV2025, any>> {
    return this.electronAPI.patchAuthOrgServiceProviderConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ServiceProviderConfigurationV2025, any>>;
  }
  patchAuthOrgSessionConfig(
    requestParameters: sdk.GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgSessionConfigRequest,
  ): Promise<AxiosResponse<sdk.SessionConfigurationV2025, any>> {
    return this.electronAPI.patchAuthOrgSessionConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.SessionConfigurationV2025, any>>;
  }

  createWorkgroup(
    requestParameters: sdk.GovernanceGroupsV2025ApiCreateWorkgroupRequest,
  ): Promise<AxiosResponse<sdk.WorkgroupDtoV2025, any>> {
    return this.electronAPI.createWorkgroup(requestParameters) as Promise<
      AxiosResponse<sdk.WorkgroupDtoV2025, any>
    >;
  }
  deleteWorkgroup(
    requestParameters: sdk.GovernanceGroupsV2025ApiDeleteWorkgroupRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteWorkgroup(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  deleteWorkgroupMembers(
    requestParameters: sdk.GovernanceGroupsV2025ApiDeleteWorkgroupMembersRequest,
  ): Promise<AxiosResponse<Array<sdk.WorkgroupMemberDeleteItemV2025>, any>> {
    return this.electronAPI.deleteWorkgroupMembers(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.WorkgroupMemberDeleteItemV2025>, any>>;
  }
  deleteWorkgroupsInBulk(
    requestParameters: sdk.GovernanceGroupsV2025ApiDeleteWorkgroupsInBulkRequest,
  ): Promise<AxiosResponse<Array<sdk.WorkgroupDeleteItemV2025>, any>> {
    return this.electronAPI.deleteWorkgroupsInBulk(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.WorkgroupDeleteItemV2025>, any>>;
  }
  getWorkgroup(
    requestParameters: sdk.GovernanceGroupsV2025ApiGetWorkgroupRequest,
  ): Promise<AxiosResponse<sdk.WorkgroupDtoV2025, any>> {
    return this.electronAPI.getWorkgroup(requestParameters) as Promise<
      AxiosResponse<sdk.WorkgroupDtoV2025, any>
    >;
  }
  listConnections(
    requestParameters: sdk.GovernanceGroupsV2025ApiListConnectionsRequest,
  ): Promise<AxiosResponse<Array<sdk.WorkgroupConnectionDtoV2025>, any>> {
    return this.electronAPI.listConnections(requestParameters) as Promise<
      AxiosResponse<Array<sdk.WorkgroupConnectionDtoV2025>, any>
    >;
  }
  listWorkgroupMembers(
    requestParameters: sdk.GovernanceGroupsV2025ApiListWorkgroupMembersRequest,
  ): Promise<
    AxiosResponse<Array<sdk.ListWorkgroupMembers200ResponseInnerV2025>, any>
  > {
    return this.electronAPI.listWorkgroupMembers(requestParameters) as Promise<
      AxiosResponse<Array<sdk.ListWorkgroupMembers200ResponseInnerV2025>, any>
    >;
  }
  listWorkgroups(
    requestParameters: sdk.GovernanceGroupsV2025ApiListWorkgroupsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.WorkgroupDtoV2025>, any>> {
    return this.electronAPI.listWorkgroups(requestParameters) as Promise<
      AxiosResponse<Array<sdk.WorkgroupDtoV2025>, any>
    >;
  }
  patchWorkgroup(
    requestParameters: sdk.GovernanceGroupsV2025ApiPatchWorkgroupRequest,
  ): Promise<AxiosResponse<sdk.WorkgroupDtoV2025, any>> {
    return this.electronAPI.patchWorkgroup(requestParameters) as Promise<
      AxiosResponse<sdk.WorkgroupDtoV2025, any>
    >;
  }
  updateWorkgroupMembers(
    requestParameters: sdk.GovernanceGroupsV2025ApiUpdateWorkgroupMembersRequest,
  ): Promise<AxiosResponse<Array<sdk.WorkgroupMemberAddItemV2025>, any>> {
    return this.electronAPI.updateWorkgroupMembers(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.WorkgroupMemberAddItemV2025>, any>>;
  }

  addAccessRequestRecommendationsIgnoredItem(
    requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsIgnoredItemRequest,
  ): Promise<
    AxiosResponse<
      sdk.AccessRequestRecommendationActionItemResponseDtoV2025,
      any
    >
  > {
    return this.electronAPI.addAccessRequestRecommendationsIgnoredItem(
      requestParameters,
    ) as Promise<
      AxiosResponse<
        sdk.AccessRequestRecommendationActionItemResponseDtoV2025,
        any
      >
    >;
  }
  addAccessRequestRecommendationsRequestedItem(
    requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsRequestedItemRequest,
  ): Promise<
    AxiosResponse<
      sdk.AccessRequestRecommendationActionItemResponseDtoV2025,
      any
    >
  > {
    return this.electronAPI.addAccessRequestRecommendationsRequestedItem(
      requestParameters,
    ) as Promise<
      AxiosResponse<
        sdk.AccessRequestRecommendationActionItemResponseDtoV2025,
        any
      >
    >;
  }
  addAccessRequestRecommendationsViewedItem(
    requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsViewedItemRequest,
  ): Promise<
    AxiosResponse<
      sdk.AccessRequestRecommendationActionItemResponseDtoV2025,
      any
    >
  > {
    return this.electronAPI.addAccessRequestRecommendationsViewedItem(
      requestParameters,
    ) as Promise<
      AxiosResponse<
        sdk.AccessRequestRecommendationActionItemResponseDtoV2025,
        any
      >
    >;
  }
  addAccessRequestRecommendationsViewedItems(
    requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsViewedItemsRequest,
  ): Promise<
    AxiosResponse<
      Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>,
      any
    >
  > {
    return this.electronAPI.addAccessRequestRecommendationsViewedItems(
      requestParameters,
    ) as Promise<
      AxiosResponse<
        Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>,
        any
      >
    >;
  }
  getAccessRequestRecommendations(
    requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsRequest = {},
  ): Promise<
    AxiosResponse<Array<sdk.AccessRequestRecommendationItemDetailV2025>, any>
  > {
    return this.electronAPI.getAccessRequestRecommendations(
      requestParameters,
    ) as Promise<
      AxiosResponse<Array<sdk.AccessRequestRecommendationItemDetailV2025>, any>
    >;
  }
  getAccessRequestRecommendationsConfig(
    requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsConfigRequest = {},
  ): Promise<
    AxiosResponse<sdk.AccessRequestRecommendationConfigDtoV2025, any>
  > {
    return this.electronAPI.getAccessRequestRecommendationsConfig(
      requestParameters,
    ) as Promise<
      AxiosResponse<sdk.AccessRequestRecommendationConfigDtoV2025, any>
    >;
  }
  getAccessRequestRecommendationsIgnoredItems(
    requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsIgnoredItemsRequest,
  ): Promise<
    AxiosResponse<
      Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>,
      any
    >
  > {
    return this.electronAPI.getAccessRequestRecommendationsIgnoredItems(
      requestParameters,
    ) as Promise<
      AxiosResponse<
        Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>,
        any
      >
    >;
  }
  getAccessRequestRecommendationsRequestedItems(
    requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsRequestedItemsRequest,
  ): Promise<
    AxiosResponse<
      Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>,
      any
    >
  > {
    return this.electronAPI.getAccessRequestRecommendationsRequestedItems(
      requestParameters,
    ) as Promise<
      AxiosResponse<
        Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>,
        any
      >
    >;
  }
  getAccessRequestRecommendationsViewedItems(
    requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsViewedItemsRequest,
  ): Promise<
    AxiosResponse<
      Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>,
      any
    >
  > {
    return this.electronAPI.getAccessRequestRecommendationsViewedItems(
      requestParameters,
    ) as Promise<
      AxiosResponse<
        Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>,
        any
      >
    >;
  }
  setAccessRequestRecommendationsConfig(
    requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiSetAccessRequestRecommendationsConfigRequest,
  ): Promise<
    AxiosResponse<sdk.AccessRequestRecommendationConfigDtoV2025, any>
  > {
    return this.electronAPI.setAccessRequestRecommendationsConfig(
      requestParameters,
    ) as Promise<
      AxiosResponse<sdk.AccessRequestRecommendationConfigDtoV2025, any>
    >;
  }

  createCommonAccess(
    requestParameters: sdk.IAICommonAccessV2025ApiCreateCommonAccessRequest,
  ): Promise<AxiosResponse<sdk.CommonAccessItemResponseV2025, any>> {
    return this.electronAPI.createCommonAccess(requestParameters) as Promise<
      AxiosResponse<sdk.CommonAccessItemResponseV2025, any>
    >;
  }
  getCommonAccess(
    requestParameters: sdk.IAICommonAccessV2025ApiGetCommonAccessRequest = {},
  ): Promise<AxiosResponse<Array<sdk.CommonAccessResponseV2025>, any>> {
    return this.electronAPI.getCommonAccess(requestParameters) as Promise<
      AxiosResponse<Array<sdk.CommonAccessResponseV2025>, any>
    >;
  }
  updateCommonAccessStatusInBulk(
    requestParameters: sdk.IAICommonAccessV2025ApiUpdateCommonAccessStatusInBulkRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.updateCommonAccessStatusInBulk(
      requestParameters,
    ) as Promise<AxiosResponse<object, any>>;
  }

  exportOutliersZip(
    requestParameters: sdk.IAIOutliersV2025ApiExportOutliersZipRequest = {},
  ): Promise<AxiosResponse<File, any>> {
    return this.electronAPI.exportOutliersZip(requestParameters) as Promise<
      AxiosResponse<File, any>
    >;
  }
  getIdentityOutlierSnapshots(
    requestParameters: sdk.IAIOutliersV2025ApiGetIdentityOutlierSnapshotsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.OutlierSummaryV2025>, any>> {
    return this.electronAPI.getIdentityOutlierSnapshots(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.OutlierSummaryV2025>, any>>;
  }
  getIdentityOutliers(
    requestParameters: sdk.IAIOutliersV2025ApiGetIdentityOutliersRequest = {},
  ): Promise<AxiosResponse<Array<sdk.OutlierV2025>, any>> {
    return this.electronAPI.getIdentityOutliers(requestParameters) as Promise<
      AxiosResponse<Array<sdk.OutlierV2025>, any>
    >;
  }
  getLatestIdentityOutlierSnapshots(
    requestParameters: sdk.IAIOutliersV2025ApiGetLatestIdentityOutlierSnapshotsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.LatestOutlierSummaryV2025>, any>> {
    return this.electronAPI.getLatestIdentityOutlierSnapshots(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.LatestOutlierSummaryV2025>, any>>;
  }
  getOutlierContributingFeatureSummary(
    requestParameters: sdk.IAIOutliersV2025ApiGetOutlierContributingFeatureSummaryRequest,
  ): Promise<AxiosResponse<sdk.OutlierFeatureSummaryV2025, any>> {
    return this.electronAPI.getOutlierContributingFeatureSummary(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.OutlierFeatureSummaryV2025, any>>;
  }
  getPeerGroupOutliersContributingFeatures(
    requestParameters: sdk.IAIOutliersV2025ApiGetPeerGroupOutliersContributingFeaturesRequest,
  ): Promise<AxiosResponse<Array<sdk.OutlierContributingFeatureV2025>, any>> {
    return this.electronAPI.getPeerGroupOutliersContributingFeatures(
      requestParameters,
    ) as Promise<
      AxiosResponse<Array<sdk.OutlierContributingFeatureV2025>, any>
    >;
  }
  ignoreIdentityOutliers(
    requestParameters: sdk.IAIOutliersV2025ApiIgnoreIdentityOutliersRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.ignoreIdentityOutliers(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  listOutliersContributingFeatureAccessItems(
    requestParameters: sdk.IAIOutliersV2025ApiListOutliersContributingFeatureAccessItemsRequest,
  ): Promise<
    AxiosResponse<Array<sdk.OutliersContributingFeatureAccessItemsV2025>, any>
  > {
    return this.electronAPI.listOutliersContributingFeatureAccessItems(
      requestParameters,
    ) as Promise<
      AxiosResponse<Array<sdk.OutliersContributingFeatureAccessItemsV2025>, any>
    >;
  }
  unIgnoreIdentityOutliers(
    requestParameters: sdk.IAIOutliersV2025ApiUnIgnoreIdentityOutliersRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.unIgnoreIdentityOutliers(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }

  getPeerGroupOutliers(
    requestParameters: sdk.IAIPeerGroupStrategiesV2025ApiGetPeerGroupOutliersRequest,
  ): Promise<AxiosResponse<Array<sdk.PeerGroupMemberV2025>, any>> {
    return this.electronAPI.getPeerGroupOutliers(requestParameters) as Promise<
      AxiosResponse<Array<sdk.PeerGroupMemberV2025>, any>
    >;
  }

  getRecommendations(
    requestParameters: sdk.IAIRecommendationsV2025ApiGetRecommendationsRequest,
  ): Promise<AxiosResponse<sdk.RecommendationResponseDtoV2025, any>> {
    return this.electronAPI.getRecommendations(requestParameters) as Promise<
      AxiosResponse<sdk.RecommendationResponseDtoV2025, any>
    >;
  }
  getRecommendationsConfig(
    requestParameters: sdk.IAIRecommendationsV2025ApiGetRecommendationsConfigRequest = {},
  ): Promise<AxiosResponse<sdk.RecommendationConfigDtoV2025, any>> {
    return this.electronAPI.getRecommendationsConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.RecommendationConfigDtoV2025, any>>;
  }
  updateRecommendationsConfig(
    requestParameters: sdk.IAIRecommendationsV2025ApiUpdateRecommendationsConfigRequest,
  ): Promise<AxiosResponse<sdk.RecommendationConfigDtoV2025, any>> {
    return this.electronAPI.updateRecommendationsConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.RecommendationConfigDtoV2025, any>>;
  }

  createPotentialRoleProvisionRequest(
    requestParameters: sdk.IAIRoleMiningV2025ApiCreatePotentialRoleProvisionRequestRequest,
  ): Promise<AxiosResponse<sdk.RoleMiningPotentialRoleSummaryV2025, any>> {
    return this.electronAPI.createPotentialRoleProvisionRequest(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.RoleMiningPotentialRoleSummaryV2025, any>>;
  }
  createRoleMiningSessions(
    requestParameters: sdk.IAIRoleMiningV2025ApiCreateRoleMiningSessionsRequest,
  ): Promise<AxiosResponse<sdk.RoleMiningSessionResponseV2025, any>> {
    return this.electronAPI.createRoleMiningSessions(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.RoleMiningSessionResponseV2025, any>>;
  }
  downloadRoleMiningPotentialRoleZip(
    requestParameters: sdk.IAIRoleMiningV2025ApiDownloadRoleMiningPotentialRoleZipRequest,
  ): Promise<AxiosResponse<File, any>> {
    return this.electronAPI.downloadRoleMiningPotentialRoleZip(
      requestParameters,
    ) as Promise<AxiosResponse<File, any>>;
  }
  exportRoleMiningPotentialRole(
    requestParameters: sdk.IAIRoleMiningV2025ApiExportRoleMiningPotentialRoleRequest,
  ): Promise<AxiosResponse<File, any>> {
    return this.electronAPI.exportRoleMiningPotentialRole(
      requestParameters,
    ) as Promise<AxiosResponse<File, any>>;
  }
  exportRoleMiningPotentialRoleAsync(
    requestParameters: sdk.IAIRoleMiningV2025ApiExportRoleMiningPotentialRoleAsyncRequest,
  ): Promise<
    AxiosResponse<sdk.RoleMiningPotentialRoleExportResponseV2025, any>
  > {
    return this.electronAPI.exportRoleMiningPotentialRoleAsync(
      requestParameters,
    ) as Promise<
      AxiosResponse<sdk.RoleMiningPotentialRoleExportResponseV2025, any>
    >;
  }
  exportRoleMiningPotentialRoleStatus(
    requestParameters: sdk.IAIRoleMiningV2025ApiExportRoleMiningPotentialRoleStatusRequest,
  ): Promise<
    AxiosResponse<sdk.RoleMiningPotentialRoleExportResponseV2025, any>
  > {
    return this.electronAPI.exportRoleMiningPotentialRoleStatus(
      requestParameters,
    ) as Promise<
      AxiosResponse<sdk.RoleMiningPotentialRoleExportResponseV2025, any>
    >;
  }
  getAllPotentialRoleSummaries(
    requestParameters: sdk.IAIRoleMiningV2025ApiGetAllPotentialRoleSummariesRequest = {},
  ): Promise<
    AxiosResponse<Array<sdk.RoleMiningPotentialRoleSummaryV2025>, any>
  > {
    return this.electronAPI.getAllPotentialRoleSummaries(
      requestParameters,
    ) as Promise<
      AxiosResponse<Array<sdk.RoleMiningPotentialRoleSummaryV2025>, any>
    >;
  }
  getEntitlementDistributionPotentialRole(
    requestParameters: sdk.IAIRoleMiningV2025ApiGetEntitlementDistributionPotentialRoleRequest,
  ): Promise<AxiosResponse<{ [key: string]: number }, any>> {
    return this.electronAPI.getEntitlementDistributionPotentialRole(
      requestParameters,
    ) as Promise<AxiosResponse<{ [key: string]: number }, any>>;
  }
  getEntitlementsPotentialRole(
    requestParameters: sdk.IAIRoleMiningV2025ApiGetEntitlementsPotentialRoleRequest,
  ): Promise<AxiosResponse<Array<sdk.RoleMiningEntitlementV2025>, any>> {
    return this.electronAPI.getEntitlementsPotentialRole(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.RoleMiningEntitlementV2025>, any>>;
  }
  getExcludedEntitlementsPotentialRole(
    requestParameters: sdk.IAIRoleMiningV2025ApiGetExcludedEntitlementsPotentialRoleRequest,
  ): Promise<AxiosResponse<Array<sdk.RoleMiningEntitlementV2025>, any>> {
    return this.electronAPI.getExcludedEntitlementsPotentialRole(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.RoleMiningEntitlementV2025>, any>>;
  }
  getIdentitiesPotentialRole(
    requestParameters: sdk.IAIRoleMiningV2025ApiGetIdentitiesPotentialRoleRequest,
  ): Promise<AxiosResponse<Array<sdk.RoleMiningIdentityV2025>, any>> {
    return this.electronAPI.getIdentitiesPotentialRole(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.RoleMiningIdentityV2025>, any>>;
  }
  getPotentialRole(
    requestParameters: sdk.IAIRoleMiningV2025ApiGetPotentialRoleRequest,
  ): Promise<AxiosResponse<sdk.RoleMiningPotentialRoleV2025, any>> {
    return this.electronAPI.getPotentialRole(requestParameters) as Promise<
      AxiosResponse<sdk.RoleMiningPotentialRoleV2025, any>
    >;
  }
  getPotentialRoleApplications(
    requestParameters: sdk.IAIRoleMiningV2025ApiGetPotentialRoleApplicationsRequest,
  ): Promise<
    AxiosResponse<Array<sdk.RoleMiningPotentialRoleApplicationV2025>, any>
  > {
    return this.electronAPI.getPotentialRoleApplications(
      requestParameters,
    ) as Promise<
      AxiosResponse<Array<sdk.RoleMiningPotentialRoleApplicationV2025>, any>
    >;
  }
  getPotentialRoleEntitlements(
    requestParameters: sdk.IAIRoleMiningV2025ApiGetPotentialRoleEntitlementsRequest,
  ): Promise<
    AxiosResponse<Array<sdk.RoleMiningPotentialRoleEntitlementsV2025>, any>
  > {
    return this.electronAPI.getPotentialRoleEntitlements(
      requestParameters,
    ) as Promise<
      AxiosResponse<Array<sdk.RoleMiningPotentialRoleEntitlementsV2025>, any>
    >;
  }
  getPotentialRoleSourceIdentityUsage(
    requestParameters: sdk.IAIRoleMiningV2025ApiGetPotentialRoleSourceIdentityUsageRequest,
  ): Promise<
    AxiosResponse<Array<sdk.RoleMiningPotentialRoleSourceUsageV2025>, any>
  > {
    return this.electronAPI.getPotentialRoleSourceIdentityUsage(
      requestParameters,
    ) as Promise<
      AxiosResponse<Array<sdk.RoleMiningPotentialRoleSourceUsageV2025>, any>
    >;
  }
  getPotentialRoleSummaries(
    requestParameters: sdk.IAIRoleMiningV2025ApiGetPotentialRoleSummariesRequest,
  ): Promise<
    AxiosResponse<Array<sdk.RoleMiningPotentialRoleSummaryV2025>, any>
  > {
    return this.electronAPI.getPotentialRoleSummaries(
      requestParameters,
    ) as Promise<
      AxiosResponse<Array<sdk.RoleMiningPotentialRoleSummaryV2025>, any>
    >;
  }
  getRoleMiningPotentialRole(
    requestParameters: sdk.IAIRoleMiningV2025ApiGetRoleMiningPotentialRoleRequest,
  ): Promise<AxiosResponse<sdk.RoleMiningPotentialRoleV2025, any>> {
    return this.electronAPI.getRoleMiningPotentialRole(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.RoleMiningPotentialRoleV2025, any>>;
  }
  getRoleMiningSession(
    requestParameters: sdk.IAIRoleMiningV2025ApiGetRoleMiningSessionRequest,
  ): Promise<AxiosResponse<sdk.RoleMiningSessionResponseV2025, any>> {
    return this.electronAPI.getRoleMiningSession(requestParameters) as Promise<
      AxiosResponse<sdk.RoleMiningSessionResponseV2025, any>
    >;
  }
  getRoleMiningSessionStatus(
    requestParameters: sdk.IAIRoleMiningV2025ApiGetRoleMiningSessionStatusRequest,
  ): Promise<AxiosResponse<sdk.RoleMiningSessionStatusV2025, any>> {
    return this.electronAPI.getRoleMiningSessionStatus(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.RoleMiningSessionStatusV2025, any>>;
  }
  getRoleMiningSessions(
    requestParameters: sdk.IAIRoleMiningV2025ApiGetRoleMiningSessionsRequest,
  ): Promise<AxiosResponse<Array<sdk.RoleMiningSessionDtoV2025>, any>> {
    return this.electronAPI.getRoleMiningSessions(requestParameters) as Promise<
      AxiosResponse<Array<sdk.RoleMiningSessionDtoV2025>, any>
    >;
  }
  getSavedPotentialRoles(
    requestParameters: sdk.IAIRoleMiningV2025ApiGetSavedPotentialRolesRequest = {},
  ): Promise<
    AxiosResponse<Array<sdk.RoleMiningSessionDraftRoleDtoV2025>, any>
  > {
    return this.electronAPI.getSavedPotentialRoles(
      requestParameters,
    ) as Promise<
      AxiosResponse<Array<sdk.RoleMiningSessionDraftRoleDtoV2025>, any>
    >;
  }
  patchPotentialRole(
    requestParameters: sdk.IAIRoleMiningV2025ApiPatchPotentialRoleRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.patchPotentialRole(requestParameters) as Promise<
      AxiosResponse<object, any>
    >;
  }
  patchPotentialRole_1(
    requestParameters: sdk.IAIRoleMiningV2025ApiPatchPotentialRole0Request,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.patchPotentialRole_1(requestParameters) as Promise<
      AxiosResponse<object, any>
    >;
  }
  patchRoleMiningSession(
    requestParameters: sdk.IAIRoleMiningV2025ApiPatchRoleMiningSessionRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.patchRoleMiningSession(
      requestParameters,
    ) as Promise<AxiosResponse<object, any>>;
  }
  updateEntitlementsPotentialRole(
    requestParameters: sdk.IAIRoleMiningV2025ApiUpdateEntitlementsPotentialRoleRequest,
  ): Promise<AxiosResponse<sdk.RoleMiningPotentialRoleV2025, any>> {
    return this.electronAPI.updateEntitlementsPotentialRole(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.RoleMiningPotentialRoleV2025, any>>;
  }

  deleteIcon(
    requestParameters: sdk.IconsV2025ApiDeleteIconRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteIcon(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  setIcon(
    requestParameters: sdk.IconsV2025ApiSetIconRequest,
  ): Promise<AxiosResponse<sdk.SetIcon200ResponseV2025, any>> {
    return this.electronAPI.setIcon(requestParameters) as Promise<
      AxiosResponse<sdk.SetIcon200ResponseV2025, any>
    >;
  }

  deleteIdentity(
    requestParameters: sdk.IdentitiesV2025ApiDeleteIdentityRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteIdentity(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getIdentity(
    requestParameters: sdk.IdentitiesV2025ApiGetIdentityRequest,
  ): Promise<AxiosResponse<sdk.IdentityV2025, any>> {
    return this.electronAPI.getIdentity(requestParameters) as Promise<
      AxiosResponse<sdk.IdentityV2025, any>
    >;
  }
  getIdentityOwnershipDetails(
    requestParameters: sdk.IdentitiesV2025ApiGetIdentityOwnershipDetailsRequest,
  ): Promise<AxiosResponse<sdk.IdentityOwnershipAssociationDetailsV2025, any>> {
    return this.electronAPI.getIdentityOwnershipDetails(
      requestParameters,
    ) as Promise<
      AxiosResponse<sdk.IdentityOwnershipAssociationDetailsV2025, any>
    >;
  }
  getRoleAssignment(
    requestParameters: sdk.IdentitiesV2025ApiGetRoleAssignmentRequest,
  ): Promise<AxiosResponse<sdk.RoleAssignmentDtoV2025, any>> {
    return this.electronAPI.getRoleAssignment(requestParameters) as Promise<
      AxiosResponse<sdk.RoleAssignmentDtoV2025, any>
    >;
  }
  getRoleAssignments(
    requestParameters: sdk.IdentitiesV2025ApiGetRoleAssignmentsRequest,
  ): Promise<
    AxiosResponse<Array<sdk.GetRoleAssignments200ResponseInnerV2025>, any>
  > {
    return this.electronAPI.getRoleAssignments(requestParameters) as Promise<
      AxiosResponse<Array<sdk.GetRoleAssignments200ResponseInnerV2025>, any>
    >;
  }
  listIdentities(
    requestParameters: sdk.IdentitiesV2025ApiListIdentitiesRequest = {},
  ): Promise<AxiosResponse<Array<sdk.IdentityV2025>, any>> {
    return this.electronAPI.listIdentities(requestParameters) as Promise<
      AxiosResponse<Array<sdk.IdentityV2025>, any>
    >;
  }
  resetIdentity(
    requestParameters: sdk.IdentitiesV2025ApiResetIdentityRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.resetIdentity(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  sendIdentityVerificationAccountToken(
    requestParameters: sdk.IdentitiesV2025ApiSendIdentityVerificationAccountTokenRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.sendIdentityVerificationAccountToken(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  startIdentitiesInvite(
    requestParameters: sdk.IdentitiesV2025ApiStartIdentitiesInviteRequest,
  ): Promise<AxiosResponse<sdk.TaskStatusV2025, any>> {
    return this.electronAPI.startIdentitiesInvite(requestParameters) as Promise<
      AxiosResponse<sdk.TaskStatusV2025, any>
    >;
  }
  startIdentityProcessing(
    requestParameters: sdk.IdentitiesV2025ApiStartIdentityProcessingRequest,
  ): Promise<AxiosResponse<sdk.TaskResultResponseV2025, any>> {
    return this.electronAPI.startIdentityProcessing(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.TaskResultResponseV2025, any>>;
  }
  synchronizeAttributesForIdentity(
    requestParameters: sdk.IdentitiesV2025ApiSynchronizeAttributesForIdentityRequest,
  ): Promise<AxiosResponse<sdk.IdentitySyncJobV2025, any>> {
    return this.electronAPI.synchronizeAttributesForIdentity(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.IdentitySyncJobV2025, any>>;
  }

  createIdentityAttribute(
    requestParameters: sdk.IdentityAttributesV2025ApiCreateIdentityAttributeRequest,
  ): Promise<AxiosResponse<sdk.IdentityAttributeV2025, any>> {
    return this.electronAPI.createIdentityAttribute(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.IdentityAttributeV2025, any>>;
  }
  deleteIdentityAttribute(
    requestParameters: sdk.IdentityAttributesV2025ApiDeleteIdentityAttributeRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteIdentityAttribute(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  deleteIdentityAttributesInBulk(
    requestParameters: sdk.IdentityAttributesV2025ApiDeleteIdentityAttributesInBulkRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteIdentityAttributesInBulk(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  getIdentityAttribute(
    requestParameters: sdk.IdentityAttributesV2025ApiGetIdentityAttributeRequest,
  ): Promise<AxiosResponse<sdk.IdentityAttributeV2025, any>> {
    return this.electronAPI.getIdentityAttribute(requestParameters) as Promise<
      AxiosResponse<sdk.IdentityAttributeV2025, any>
    >;
  }
  listIdentityAttributes(
    requestParameters: sdk.IdentityAttributesV2025ApiListIdentityAttributesRequest = {},
  ): Promise<AxiosResponse<Array<sdk.IdentityAttributeV2025>, any>> {
    return this.electronAPI.listIdentityAttributes(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.IdentityAttributeV2025>, any>>;
  }
  putIdentityAttribute(
    requestParameters: sdk.IdentityAttributesV2025ApiPutIdentityAttributeRequest,
  ): Promise<AxiosResponse<sdk.IdentityAttributeV2025, any>> {
    return this.electronAPI.putIdentityAttribute(requestParameters) as Promise<
      AxiosResponse<sdk.IdentityAttributeV2025, any>
    >;
  }

  compareIdentitySnapshots(
    requestParameters: sdk.IdentityHistoryV2025ApiCompareIdentitySnapshotsRequest,
  ): Promise<AxiosResponse<Array<sdk.IdentityCompareResponseV2025>, any>> {
    return this.electronAPI.compareIdentitySnapshots(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.IdentityCompareResponseV2025>, any>>;
  }
  compareIdentitySnapshotsAccessType(
    requestParameters: sdk.IdentityHistoryV2025ApiCompareIdentitySnapshotsAccessTypeRequest,
  ): Promise<AxiosResponse<Array<sdk.AccessItemDiffV2025>, any>> {
    return this.electronAPI.compareIdentitySnapshotsAccessType(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.AccessItemDiffV2025>, any>>;
  }
  getHistoricalIdentity(
    requestParameters: sdk.IdentityHistoryV2025ApiGetHistoricalIdentityRequest,
  ): Promise<AxiosResponse<sdk.IdentityHistoryResponseV2025, any>> {
    return this.electronAPI.getHistoricalIdentity(requestParameters) as Promise<
      AxiosResponse<sdk.IdentityHistoryResponseV2025, any>
    >;
  }
  getHistoricalIdentityEvents(
    requestParameters: sdk.IdentityHistoryV2025ApiGetHistoricalIdentityEventsRequest,
  ): Promise<
    AxiosResponse<
      Array<sdk.GetHistoricalIdentityEvents200ResponseInnerV2025>,
      any
    >
  > {
    return this.electronAPI.getHistoricalIdentityEvents(
      requestParameters,
    ) as Promise<
      AxiosResponse<
        Array<sdk.GetHistoricalIdentityEvents200ResponseInnerV2025>,
        any
      >
    >;
  }
  getIdentitySnapshot(
    requestParameters: sdk.IdentityHistoryV2025ApiGetIdentitySnapshotRequest,
  ): Promise<AxiosResponse<sdk.IdentityHistoryResponseV2025, any>> {
    return this.electronAPI.getIdentitySnapshot(requestParameters) as Promise<
      AxiosResponse<sdk.IdentityHistoryResponseV2025, any>
    >;
  }
  getIdentitySnapshotSummary(
    requestParameters: sdk.IdentityHistoryV2025ApiGetIdentitySnapshotSummaryRequest,
  ): Promise<AxiosResponse<Array<sdk.MetricResponseV2025>, any>> {
    return this.electronAPI.getIdentitySnapshotSummary(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.MetricResponseV2025>, any>>;
  }
  getIdentityStartDate(
    requestParameters: sdk.IdentityHistoryV2025ApiGetIdentityStartDateRequest,
  ): Promise<AxiosResponse<string, any>> {
    return this.electronAPI.getIdentityStartDate(requestParameters) as Promise<
      AxiosResponse<string, any>
    >;
  }
  listHistoricalIdentities(
    requestParameters: sdk.IdentityHistoryV2025ApiListHistoricalIdentitiesRequest = {},
  ): Promise<AxiosResponse<Array<sdk.IdentityListItemV2025>, any>> {
    return this.electronAPI.listHistoricalIdentities(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.IdentityListItemV2025>, any>>;
  }
  listIdentityAccessItems(
    requestParameters: sdk.IdentityHistoryV2025ApiListIdentityAccessItemsRequest,
  ): Promise<
    AxiosResponse<Array<sdk.ListIdentityAccessItems200ResponseInnerV2025>, any>
  > {
    return this.electronAPI.listIdentityAccessItems(
      requestParameters,
    ) as Promise<
      AxiosResponse<
        Array<sdk.ListIdentityAccessItems200ResponseInnerV2025>,
        any
      >
    >;
  }
  listIdentitySnapshotAccessItems(
    requestParameters: sdk.IdentityHistoryV2025ApiListIdentitySnapshotAccessItemsRequest,
  ): Promise<
    AxiosResponse<Array<sdk.ListIdentityAccessItems200ResponseInnerV2025>, any>
  > {
    return this.electronAPI.listIdentitySnapshotAccessItems(
      requestParameters,
    ) as Promise<
      AxiosResponse<
        Array<sdk.ListIdentityAccessItems200ResponseInnerV2025>,
        any
      >
    >;
  }
  listIdentitySnapshots(
    requestParameters: sdk.IdentityHistoryV2025ApiListIdentitySnapshotsRequest,
  ): Promise<
    AxiosResponse<Array<sdk.IdentitySnapshotSummaryResponseV2025>, any>
  > {
    return this.electronAPI.listIdentitySnapshots(requestParameters) as Promise<
      AxiosResponse<Array<sdk.IdentitySnapshotSummaryResponseV2025>, any>
    >;
  }

  createIdentityProfile(
    requestParameters: sdk.IdentityProfilesV2025ApiCreateIdentityProfileRequest,
  ): Promise<AxiosResponse<sdk.IdentityProfileV2025, any>> {
    return this.electronAPI.createIdentityProfile(requestParameters) as Promise<
      AxiosResponse<sdk.IdentityProfileV2025, any>
    >;
  }
  deleteIdentityProfile(
    requestParameters: sdk.IdentityProfilesV2025ApiDeleteIdentityProfileRequest,
  ): Promise<AxiosResponse<sdk.TaskResultSimplifiedV2025, any>> {
    return this.electronAPI.deleteIdentityProfile(requestParameters) as Promise<
      AxiosResponse<sdk.TaskResultSimplifiedV2025, any>
    >;
  }
  deleteIdentityProfiles(
    requestParameters: sdk.IdentityProfilesV2025ApiDeleteIdentityProfilesRequest,
  ): Promise<AxiosResponse<sdk.TaskResultSimplifiedV2025, any>> {
    return this.electronAPI.deleteIdentityProfiles(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.TaskResultSimplifiedV2025, any>>;
  }
  exportIdentityProfiles(
    requestParameters: sdk.IdentityProfilesV2025ApiExportIdentityProfilesRequest = {},
  ): Promise<
    AxiosResponse<Array<sdk.IdentityProfileExportedObjectV2025>, any>
  > {
    return this.electronAPI.exportIdentityProfiles(
      requestParameters,
    ) as Promise<
      AxiosResponse<Array<sdk.IdentityProfileExportedObjectV2025>, any>
    >;
  }
  generateIdentityPreview(
    requestParameters: sdk.IdentityProfilesV2025ApiGenerateIdentityPreviewRequest,
  ): Promise<AxiosResponse<sdk.IdentityPreviewResponseV2025, any>> {
    return this.electronAPI.generateIdentityPreview(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.IdentityPreviewResponseV2025, any>>;
  }
  getDefaultIdentityAttributeConfig(
    requestParameters: sdk.IdentityProfilesV2025ApiGetDefaultIdentityAttributeConfigRequest,
  ): Promise<AxiosResponse<sdk.IdentityAttributeConfigV2025, any>> {
    return this.electronAPI.getDefaultIdentityAttributeConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.IdentityAttributeConfigV2025, any>>;
  }
  getIdentityProfile(
    requestParameters: sdk.IdentityProfilesV2025ApiGetIdentityProfileRequest,
  ): Promise<AxiosResponse<sdk.IdentityProfileV2025, any>> {
    return this.electronAPI.getIdentityProfile(requestParameters) as Promise<
      AxiosResponse<sdk.IdentityProfileV2025, any>
    >;
  }
  importIdentityProfiles(
    requestParameters: sdk.IdentityProfilesV2025ApiImportIdentityProfilesRequest,
  ): Promise<AxiosResponse<sdk.ObjectImportResultV2025, any>> {
    return this.electronAPI.importIdentityProfiles(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ObjectImportResultV2025, any>>;
  }
  listIdentityProfiles(
    requestParameters: sdk.IdentityProfilesV2025ApiListIdentityProfilesRequest = {},
  ): Promise<AxiosResponse<Array<sdk.IdentityProfileV2025>, any>> {
    return this.electronAPI.listIdentityProfiles(requestParameters) as Promise<
      AxiosResponse<Array<sdk.IdentityProfileV2025>, any>
    >;
  }
  syncIdentityProfile(
    requestParameters: sdk.IdentityProfilesV2025ApiSyncIdentityProfileRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.syncIdentityProfile(requestParameters) as Promise<
      AxiosResponse<object, any>
    >;
  }
  updateIdentityProfile(
    requestParameters: sdk.IdentityProfilesV2025ApiUpdateIdentityProfileRequest,
  ): Promise<AxiosResponse<sdk.IdentityProfileV2025, any>> {
    return this.electronAPI.updateIdentityProfile(requestParameters) as Promise<
      AxiosResponse<sdk.IdentityProfileV2025, any>
    >;
  }

  createLifecycleState(
    requestParameters: sdk.LifecycleStatesV2025ApiCreateLifecycleStateRequest,
  ): Promise<AxiosResponse<sdk.LifecycleStateV2025, any>> {
    return this.electronAPI.createLifecycleState(requestParameters) as Promise<
      AxiosResponse<sdk.LifecycleStateV2025, any>
    >;
  }
  deleteLifecycleState(
    requestParameters: sdk.LifecycleStatesV2025ApiDeleteLifecycleStateRequest,
  ): Promise<AxiosResponse<sdk.LifecyclestateDeletedV2025, any>> {
    return this.electronAPI.deleteLifecycleState(requestParameters) as Promise<
      AxiosResponse<sdk.LifecyclestateDeletedV2025, any>
    >;
  }
  getLifecycleState(
    requestParameters: sdk.LifecycleStatesV2025ApiGetLifecycleStateRequest,
  ): Promise<AxiosResponse<sdk.LifecycleStateV2025, any>> {
    return this.electronAPI.getLifecycleState(requestParameters) as Promise<
      AxiosResponse<sdk.LifecycleStateV2025, any>
    >;
  }
  getLifecycleStates(
    requestParameters: sdk.LifecycleStatesV2025ApiGetLifecycleStatesRequest,
  ): Promise<AxiosResponse<Array<sdk.LifecycleStateV2025>, any>> {
    return this.electronAPI.getLifecycleStates(requestParameters) as Promise<
      AxiosResponse<Array<sdk.LifecycleStateV2025>, any>
    >;
  }
  setLifecycleState(
    requestParameters: sdk.LifecycleStatesV2025ApiSetLifecycleStateRequest,
  ): Promise<AxiosResponse<sdk.SetLifecycleState200ResponseV2025, any>> {
    return this.electronAPI.setLifecycleState(requestParameters) as Promise<
      AxiosResponse<sdk.SetLifecycleState200ResponseV2025, any>
    >;
  }
  updateLifecycleStates(
    requestParameters: sdk.LifecycleStatesV2025ApiUpdateLifecycleStatesRequest,
  ): Promise<AxiosResponse<sdk.LifecycleStateV2025, any>> {
    return this.electronAPI.updateLifecycleStates(requestParameters) as Promise<
      AxiosResponse<sdk.LifecycleStateV2025, any>
    >;
  }

  getMFADuoConfig(): Promise<AxiosResponse<sdk.MfaDuoConfigV2025, any>> {
    return this.electronAPI.getMFADuoConfig() as Promise<
      AxiosResponse<sdk.MfaDuoConfigV2025, any>
    >;
  }
  getMFAKbaConfig(
    requestParameters: sdk.MFAConfigurationV2025ApiGetMFAKbaConfigRequest = {},
  ): Promise<AxiosResponse<Array<sdk.KbaQuestionV2025>, any>> {
    return this.electronAPI.getMFAKbaConfig(requestParameters) as Promise<
      AxiosResponse<Array<sdk.KbaQuestionV2025>, any>
    >;
  }
  getMFAOktaConfig(): Promise<AxiosResponse<sdk.MfaOktaConfigV2025, any>> {
    return this.electronAPI.getMFAOktaConfig() as Promise<
      AxiosResponse<sdk.MfaOktaConfigV2025, any>
    >;
  }
  setMFADuoConfig(
    requestParameters: sdk.MFAConfigurationV2025ApiSetMFADuoConfigRequest,
  ): Promise<AxiosResponse<sdk.MfaDuoConfigV2025, any>> {
    return this.electronAPI.setMFADuoConfig(requestParameters) as Promise<
      AxiosResponse<sdk.MfaDuoConfigV2025, any>
    >;
  }
  setMFAKBAConfig(
    requestParameters: sdk.MFAConfigurationV2025ApiSetMFAKBAConfigRequest,
  ): Promise<AxiosResponse<Array<sdk.KbaAnswerResponseItemV2025>, any>> {
    return this.electronAPI.setMFAKBAConfig(requestParameters) as Promise<
      AxiosResponse<Array<sdk.KbaAnswerResponseItemV2025>, any>
    >;
  }
  setMFAOktaConfig(
    requestParameters: sdk.MFAConfigurationV2025ApiSetMFAOktaConfigRequest,
  ): Promise<AxiosResponse<sdk.MfaOktaConfigV2025, any>> {
    return this.electronAPI.setMFAOktaConfig(requestParameters) as Promise<
      AxiosResponse<sdk.MfaOktaConfigV2025, any>
    >;
  }
  testMFAConfig(
    requestParameters: sdk.MFAConfigurationV2025ApiTestMFAConfigRequest,
  ): Promise<AxiosResponse<sdk.MfaConfigTestResponseV2025, any>> {
    return this.electronAPI.testMFAConfig(requestParameters) as Promise<
      AxiosResponse<sdk.MfaConfigTestResponseV2025, any>
    >;
  }

  getMachineAccount(
    requestParameters: sdk.MachineAccountsV2025ApiGetMachineAccountRequest,
  ): Promise<AxiosResponse<sdk.MachineAccountV2025, any>> {
    return this.electronAPI.getMachineAccount(requestParameters) as Promise<
      AxiosResponse<sdk.MachineAccountV2025, any>
    >;
  }
  listMachineAccounts(
    requestParameters: sdk.MachineAccountsV2025ApiListMachineAccountsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.MachineAccountV2025>, any>> {
    return this.electronAPI.listMachineAccounts(requestParameters) as Promise<
      AxiosResponse<Array<sdk.MachineAccountV2025>, any>
    >;
  }
  updateMachineAccount(
    requestParameters: sdk.MachineAccountsV2025ApiUpdateMachineAccountRequest,
  ): Promise<AxiosResponse<sdk.MachineAccountV2025, any>> {
    return this.electronAPI.updateMachineAccount(requestParameters) as Promise<
      AxiosResponse<sdk.MachineAccountV2025, any>
    >;
  }

  createMachineIdentity(
    requestParameters: sdk.MachineIdentitiesV2025ApiCreateMachineIdentityRequest,
  ): Promise<AxiosResponse<sdk.MachineIdentityV2025, any>> {
    return this.electronAPI.createMachineIdentity(requestParameters) as Promise<
      AxiosResponse<sdk.MachineIdentityV2025, any>
    >;
  }
  deleteMachineIdentity(
    requestParameters: sdk.MachineIdentitiesV2025ApiDeleteMachineIdentityRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteMachineIdentity(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getMachineIdentity(
    requestParameters: sdk.MachineIdentitiesV2025ApiGetMachineIdentityRequest,
  ): Promise<AxiosResponse<sdk.MachineIdentityV2025, any>> {
    return this.electronAPI.getMachineIdentity(requestParameters) as Promise<
      AxiosResponse<sdk.MachineIdentityV2025, any>
    >;
  }
  listMachineIdentities(
    requestParameters: sdk.MachineIdentitiesV2025ApiListMachineIdentitiesRequest = {},
  ): Promise<AxiosResponse<Array<sdk.MachineIdentityV2025>, any>> {
    return this.electronAPI.listMachineIdentities(requestParameters) as Promise<
      AxiosResponse<Array<sdk.MachineIdentityV2025>, any>
    >;
  }
  updateMachineIdentity(
    requestParameters: sdk.MachineIdentitiesV2025ApiUpdateMachineIdentityRequest,
  ): Promise<AxiosResponse<sdk.MachineIdentityV2025, any>> {
    return this.electronAPI.updateMachineIdentity(requestParameters) as Promise<
      AxiosResponse<sdk.MachineIdentityV2025, any>
    >;
  }

  createManagedClient(
    requestParameters: sdk.ManagedClientsV2025ApiCreateManagedClientRequest,
  ): Promise<AxiosResponse<sdk.ManagedClientV2025, any>> {
    return this.electronAPI.createManagedClient(requestParameters) as Promise<
      AxiosResponse<sdk.ManagedClientV2025, any>
    >;
  }
  deleteManagedClient(
    requestParameters: sdk.ManagedClientsV2025ApiDeleteManagedClientRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteManagedClient(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getManagedClient(
    requestParameters: sdk.ManagedClientsV2025ApiGetManagedClientRequest,
  ): Promise<AxiosResponse<sdk.ManagedClientV2025, any>> {
    return this.electronAPI.getManagedClient(requestParameters) as Promise<
      AxiosResponse<sdk.ManagedClientV2025, any>
    >;
  }
  getManagedClientStatus(
    requestParameters: sdk.ManagedClientsV2025ApiGetManagedClientStatusRequest,
  ): Promise<AxiosResponse<sdk.ManagedClientStatusV2025, any>> {
    return this.electronAPI.getManagedClientStatus(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ManagedClientStatusV2025, any>>;
  }
  getManagedClients(
    requestParameters: sdk.ManagedClientsV2025ApiGetManagedClientsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.ManagedClientV2025>, any>> {
    return this.electronAPI.getManagedClients(requestParameters) as Promise<
      AxiosResponse<Array<sdk.ManagedClientV2025>, any>
    >;
  }
  updateManagedClient(
    requestParameters: sdk.ManagedClientsV2025ApiUpdateManagedClientRequest,
  ): Promise<AxiosResponse<sdk.ManagedClientV2025, any>> {
    return this.electronAPI.updateManagedClient(requestParameters) as Promise<
      AxiosResponse<sdk.ManagedClientV2025, any>
    >;
  }

  createManagedClusterType(
    requestParameters: sdk.ManagedClusterTypesV2025ApiCreateManagedClusterTypeRequest,
  ): Promise<AxiosResponse<sdk.ManagedClusterTypeV2025, any>> {
    return this.electronAPI.createManagedClusterType(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ManagedClusterTypeV2025, any>>;
  }
  deleteManagedClusterType(
    requestParameters: sdk.ManagedClusterTypesV2025ApiDeleteManagedClusterTypeRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteManagedClusterType(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  getManagedClusterType(
    requestParameters: sdk.ManagedClusterTypesV2025ApiGetManagedClusterTypeRequest,
  ): Promise<AxiosResponse<sdk.ManagedClusterTypeV2025, any>> {
    return this.electronAPI.getManagedClusterType(requestParameters) as Promise<
      AxiosResponse<sdk.ManagedClusterTypeV2025, any>
    >;
  }
  getManagedClusterTypes(
    requestParameters: sdk.ManagedClusterTypesV2025ApiGetManagedClusterTypesRequest = {},
  ): Promise<AxiosResponse<Array<sdk.ManagedClusterTypeV2025>, any>> {
    return this.electronAPI.getManagedClusterTypes(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.ManagedClusterTypeV2025>, any>>;
  }
  updateManagedClusterType(
    requestParameters: sdk.ManagedClusterTypesV2025ApiUpdateManagedClusterTypeRequest,
  ): Promise<AxiosResponse<sdk.ManagedClusterTypeV2025, any>> {
    return this.electronAPI.updateManagedClusterType(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ManagedClusterTypeV2025, any>>;
  }

  createManagedCluster(
    requestParameters: sdk.ManagedClustersV2025ApiCreateManagedClusterRequest,
  ): Promise<AxiosResponse<sdk.ManagedClusterV2025, any>> {
    return this.electronAPI.createManagedCluster(requestParameters) as Promise<
      AxiosResponse<sdk.ManagedClusterV2025, any>
    >;
  }
  deleteManagedCluster(
    requestParameters: sdk.ManagedClustersV2025ApiDeleteManagedClusterRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteManagedCluster(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getClientLogConfiguration(
    requestParameters: sdk.ManagedClustersV2025ApiGetClientLogConfigurationRequest,
  ): Promise<AxiosResponse<sdk.ClientLogConfigurationV2025, any>> {
    return this.electronAPI.getClientLogConfiguration(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ClientLogConfigurationV2025, any>>;
  }
  getManagedCluster(
    requestParameters: sdk.ManagedClustersV2025ApiGetManagedClusterRequest,
  ): Promise<AxiosResponse<sdk.ManagedClusterV2025, any>> {
    return this.electronAPI.getManagedCluster(requestParameters) as Promise<
      AxiosResponse<sdk.ManagedClusterV2025, any>
    >;
  }
  getManagedClusters(
    requestParameters: sdk.ManagedClustersV2025ApiGetManagedClustersRequest = {},
  ): Promise<AxiosResponse<Array<sdk.ManagedClusterV2025>, any>> {
    return this.electronAPI.getManagedClusters(requestParameters) as Promise<
      AxiosResponse<Array<sdk.ManagedClusterV2025>, any>
    >;
  }
  putClientLogConfiguration(
    requestParameters: sdk.ManagedClustersV2025ApiPutClientLogConfigurationRequest,
  ): Promise<AxiosResponse<sdk.ClientLogConfigurationV2025, any>> {
    return this.electronAPI.putClientLogConfiguration(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ClientLogConfigurationV2025, any>>;
  }
  update(
    requestParameters: sdk.ManagedClustersV2025ApiUpdateRequest,
  ): Promise<AxiosResponse<sdk.ClusterManualUpgradeV2025, any>> {
    return this.electronAPI.update(requestParameters) as Promise<
      AxiosResponse<sdk.ClusterManualUpgradeV2025, any>
    >;
  }
  updateManagedCluster(
    requestParameters: sdk.ManagedClustersV2025ApiUpdateManagedClusterRequest,
  ): Promise<AxiosResponse<sdk.ManagedClusterV2025, any>> {
    return this.electronAPI.updateManagedCluster(requestParameters) as Promise<
      AxiosResponse<sdk.ManagedClusterV2025, any>
    >;
  }

  createMultiHostIntegration(
    requestParameters: sdk.MultiHostIntegrationV2025ApiCreateMultiHostIntegrationRequest,
  ): Promise<AxiosResponse<sdk.MultiHostIntegrationsV2025, any>> {
    return this.electronAPI.createMultiHostIntegration(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.MultiHostIntegrationsV2025, any>>;
  }
  createSourcesWithinMultiHost(
    requestParameters: sdk.MultiHostIntegrationV2025ApiCreateSourcesWithinMultiHostRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.createSourcesWithinMultiHost(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  deleteMultiHost(
    requestParameters: sdk.MultiHostIntegrationV2025ApiDeleteMultiHostRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteMultiHost(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getAcctAggregationGroups(
    requestParameters: sdk.MultiHostIntegrationV2025ApiGetAcctAggregationGroupsRequest,
  ): Promise<
    AxiosResponse<Array<sdk.MultiHostIntegrationsAggScheduleUpdateV2025>, any>
  > {
    return this.electronAPI.getAcctAggregationGroups(
      requestParameters,
    ) as Promise<
      AxiosResponse<Array<sdk.MultiHostIntegrationsAggScheduleUpdateV2025>, any>
    >;
  }
  getEntitlementAggregationGroups(
    requestParameters: sdk.MultiHostIntegrationV2025ApiGetEntitlementAggregationGroupsRequest,
  ): Promise<
    AxiosResponse<Array<sdk.MultiHostIntegrationsAggScheduleUpdateV2025>, any>
  > {
    return this.electronAPI.getEntitlementAggregationGroups(
      requestParameters,
    ) as Promise<
      AxiosResponse<Array<sdk.MultiHostIntegrationsAggScheduleUpdateV2025>, any>
    >;
  }
  getMultiHostIntegrations(
    requestParameters: sdk.MultiHostIntegrationV2025ApiGetMultiHostIntegrationsRequest,
  ): Promise<AxiosResponse<sdk.MultiHostIntegrationsV2025, any>> {
    return this.electronAPI.getMultiHostIntegrations(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.MultiHostIntegrationsV2025, any>>;
  }
  getMultiHostIntegrationsList(
    requestParameters: sdk.MultiHostIntegrationV2025ApiGetMultiHostIntegrationsListRequest = {},
  ): Promise<AxiosResponse<Array<sdk.MultiHostIntegrationsV2025>, any>> {
    return this.electronAPI.getMultiHostIntegrationsList(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.MultiHostIntegrationsV2025>, any>>;
  }
  getMultiHostSourceCreationErrors(
    requestParameters: sdk.MultiHostIntegrationV2025ApiGetMultiHostSourceCreationErrorsRequest,
  ): Promise<AxiosResponse<Array<sdk.SourceCreationErrorsV2025>, any>> {
    return this.electronAPI.getMultiHostSourceCreationErrors(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.SourceCreationErrorsV2025>, any>>;
  }
  getMultihostIntegrationTypes(): Promise<
    AxiosResponse<Array<sdk.MultiHostIntegrationTemplateTypeV2025>, any>
  > {
    return this.electronAPI.getMultihostIntegrationTypes() as Promise<
      AxiosResponse<Array<sdk.MultiHostIntegrationTemplateTypeV2025>, any>
    >;
  }
  getSourcesWithinMultiHost(
    requestParameters: sdk.MultiHostIntegrationV2025ApiGetSourcesWithinMultiHostRequest,
  ): Promise<AxiosResponse<Array<sdk.MultiHostSourcesV2025>, any>> {
    return this.electronAPI.getSourcesWithinMultiHost(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.MultiHostSourcesV2025>, any>>;
  }
  testConnectionMultiHostSources(
    requestParameters: sdk.MultiHostIntegrationV2025ApiTestConnectionMultiHostSourcesRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.testConnectionMultiHostSources(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  testSourceConnectionMultihost(
    requestParameters: sdk.MultiHostIntegrationV2025ApiTestSourceConnectionMultihostRequest,
  ): Promise<
    AxiosResponse<sdk.TestSourceConnectionMultihost200ResponseV2025, any>
  > {
    return this.electronAPI.testSourceConnectionMultihost(
      requestParameters,
    ) as Promise<
      AxiosResponse<sdk.TestSourceConnectionMultihost200ResponseV2025, any>
    >;
  }
  updateMultiHostSources(
    requestParameters: sdk.MultiHostIntegrationV2025ApiUpdateMultiHostSourcesRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.updateMultiHostSources(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }

  approveNonEmployeeRequest(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiApproveNonEmployeeRequestRequest,
  ): Promise<AxiosResponse<sdk.NonEmployeeApprovalItemV2025, any>> {
    return this.electronAPI.approveNonEmployeeRequest(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.NonEmployeeApprovalItemV2025, any>>;
  }
  createNonEmployeeRecord(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeRecordRequest,
  ): Promise<AxiosResponse<sdk.NonEmployeeRecordV2025, any>> {
    return this.electronAPI.createNonEmployeeRecord(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.NonEmployeeRecordV2025, any>>;
  }
  createNonEmployeeRequest(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeRequestRequest,
  ): Promise<AxiosResponse<sdk.NonEmployeeRequestV2025, any>> {
    return this.electronAPI.createNonEmployeeRequest(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.NonEmployeeRequestV2025, any>>;
  }
  createNonEmployeeSource(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeSourceRequest,
  ): Promise<
    AxiosResponse<sdk.NonEmployeeSourceWithCloudExternalIdV2025, any>
  > {
    return this.electronAPI.createNonEmployeeSource(
      requestParameters,
    ) as Promise<
      AxiosResponse<sdk.NonEmployeeSourceWithCloudExternalIdV2025, any>
    >;
  }
  createNonEmployeeSourceSchemaAttributes(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeSourceSchemaAttributesRequest,
  ): Promise<AxiosResponse<sdk.NonEmployeeSchemaAttributeV2025, any>> {
    return this.electronAPI.createNonEmployeeSourceSchemaAttributes(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.NonEmployeeSchemaAttributeV2025, any>>;
  }
  deleteNonEmployeeRecord(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeRecordRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteNonEmployeeRecord(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  deleteNonEmployeeRecordsInBulk(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeRecordsInBulkRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteNonEmployeeRecordsInBulk(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  deleteNonEmployeeRequest(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeRequestRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteNonEmployeeRequest(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  deleteNonEmployeeSchemaAttribute(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeSchemaAttributeRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteNonEmployeeSchemaAttribute(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  deleteNonEmployeeSource(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeSourceRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteNonEmployeeSource(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  deleteNonEmployeeSourceSchemaAttributes(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeSourceSchemaAttributesRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteNonEmployeeSourceSchemaAttributes(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  exportNonEmployeeRecords(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiExportNonEmployeeRecordsRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.exportNonEmployeeRecords(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  exportNonEmployeeSourceSchemaTemplate(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiExportNonEmployeeSourceSchemaTemplateRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.exportNonEmployeeSourceSchemaTemplate(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  getNonEmployeeApproval(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeApprovalRequest,
  ): Promise<AxiosResponse<sdk.NonEmployeeApprovalItemDetailV2025, any>> {
    return this.electronAPI.getNonEmployeeApproval(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.NonEmployeeApprovalItemDetailV2025, any>>;
  }
  getNonEmployeeApprovalSummary(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeApprovalSummaryRequest,
  ): Promise<AxiosResponse<sdk.NonEmployeeApprovalSummaryV2025, any>> {
    return this.electronAPI.getNonEmployeeApprovalSummary(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.NonEmployeeApprovalSummaryV2025, any>>;
  }
  getNonEmployeeBulkUploadStatus(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeBulkUploadStatusRequest,
  ): Promise<AxiosResponse<sdk.NonEmployeeBulkUploadStatusV2025, any>> {
    return this.electronAPI.getNonEmployeeBulkUploadStatus(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.NonEmployeeBulkUploadStatusV2025, any>>;
  }
  getNonEmployeeRecord(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeRecordRequest,
  ): Promise<AxiosResponse<sdk.NonEmployeeRecordV2025, any>> {
    return this.electronAPI.getNonEmployeeRecord(requestParameters) as Promise<
      AxiosResponse<sdk.NonEmployeeRecordV2025, any>
    >;
  }
  getNonEmployeeRequest(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeRequestRequest,
  ): Promise<AxiosResponse<sdk.NonEmployeeRequestV2025, any>> {
    return this.electronAPI.getNonEmployeeRequest(requestParameters) as Promise<
      AxiosResponse<sdk.NonEmployeeRequestV2025, any>
    >;
  }
  getNonEmployeeRequestSummary(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeRequestSummaryRequest,
  ): Promise<AxiosResponse<sdk.NonEmployeeRequestSummaryV2025, any>> {
    return this.electronAPI.getNonEmployeeRequestSummary(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.NonEmployeeRequestSummaryV2025, any>>;
  }
  getNonEmployeeSchemaAttribute(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeSchemaAttributeRequest,
  ): Promise<AxiosResponse<sdk.NonEmployeeSchemaAttributeV2025, any>> {
    return this.electronAPI.getNonEmployeeSchemaAttribute(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.NonEmployeeSchemaAttributeV2025, any>>;
  }
  getNonEmployeeSource(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeSourceRequest,
  ): Promise<AxiosResponse<sdk.NonEmployeeSourceV2025, any>> {
    return this.electronAPI.getNonEmployeeSource(requestParameters) as Promise<
      AxiosResponse<sdk.NonEmployeeSourceV2025, any>
    >;
  }
  getNonEmployeeSourceSchemaAttributes(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeSourceSchemaAttributesRequest,
  ): Promise<AxiosResponse<Array<sdk.NonEmployeeSchemaAttributeV2025>, any>> {
    return this.electronAPI.getNonEmployeeSourceSchemaAttributes(
      requestParameters,
    ) as Promise<
      AxiosResponse<Array<sdk.NonEmployeeSchemaAttributeV2025>, any>
    >;
  }
  importNonEmployeeRecordsInBulk(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiImportNonEmployeeRecordsInBulkRequest,
  ): Promise<AxiosResponse<sdk.NonEmployeeBulkUploadJobV2025, any>> {
    return this.electronAPI.importNonEmployeeRecordsInBulk(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.NonEmployeeBulkUploadJobV2025, any>>;
  }
  listNonEmployeeApprovals(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiListNonEmployeeApprovalsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.NonEmployeeApprovalItemV2025>, any>> {
    return this.electronAPI.listNonEmployeeApprovals(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.NonEmployeeApprovalItemV2025>, any>>;
  }
  listNonEmployeeRecords(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiListNonEmployeeRecordsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.NonEmployeeRecordV2025>, any>> {
    return this.electronAPI.listNonEmployeeRecords(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.NonEmployeeRecordV2025>, any>>;
  }
  listNonEmployeeRequests(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiListNonEmployeeRequestsRequest,
  ): Promise<AxiosResponse<Array<sdk.NonEmployeeRequestV2025>, any>> {
    return this.electronAPI.listNonEmployeeRequests(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.NonEmployeeRequestV2025>, any>>;
  }
  listNonEmployeeSources(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiListNonEmployeeSourcesRequest = {},
  ): Promise<AxiosResponse<Array<sdk.NonEmployeeSourceWithNECountV2025>, any>> {
    return this.electronAPI.listNonEmployeeSources(
      requestParameters,
    ) as Promise<
      AxiosResponse<Array<sdk.NonEmployeeSourceWithNECountV2025>, any>
    >;
  }
  patchNonEmployeeRecord(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiPatchNonEmployeeRecordRequest,
  ): Promise<AxiosResponse<sdk.NonEmployeeRecordV2025, any>> {
    return this.electronAPI.patchNonEmployeeRecord(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.NonEmployeeRecordV2025, any>>;
  }
  patchNonEmployeeSchemaAttribute(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiPatchNonEmployeeSchemaAttributeRequest,
  ): Promise<AxiosResponse<sdk.NonEmployeeSchemaAttributeV2025, any>> {
    return this.electronAPI.patchNonEmployeeSchemaAttribute(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.NonEmployeeSchemaAttributeV2025, any>>;
  }
  patchNonEmployeeSource(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiPatchNonEmployeeSourceRequest,
  ): Promise<AxiosResponse<sdk.NonEmployeeSourceV2025, any>> {
    return this.electronAPI.patchNonEmployeeSource(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.NonEmployeeSourceV2025, any>>;
  }
  rejectNonEmployeeRequest(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiRejectNonEmployeeRequestRequest,
  ): Promise<AxiosResponse<sdk.NonEmployeeApprovalItemV2025, any>> {
    return this.electronAPI.rejectNonEmployeeRequest(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.NonEmployeeApprovalItemV2025, any>>;
  }
  updateNonEmployeeRecord(
    requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiUpdateNonEmployeeRecordRequest,
  ): Promise<AxiosResponse<sdk.NonEmployeeRecordV2025, any>> {
    return this.electronAPI.updateNonEmployeeRecord(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.NonEmployeeRecordV2025, any>>;
  }

  createDomainDkim(
    requestParameters: sdk.NotificationsV2025ApiCreateDomainDkimRequest,
  ): Promise<AxiosResponse<sdk.DomainStatusDtoV2025, any>> {
    return this.electronAPI.createDomainDkim(requestParameters) as Promise<
      AxiosResponse<sdk.DomainStatusDtoV2025, any>
    >;
  }
  createNotificationTemplate(
    requestParameters: sdk.NotificationsV2025ApiCreateNotificationTemplateRequest,
  ): Promise<AxiosResponse<sdk.TemplateDtoV2025, any>> {
    return this.electronAPI.createNotificationTemplate(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.TemplateDtoV2025, any>>;
  }
  createVerifiedFromAddress(
    requestParameters: sdk.NotificationsV2025ApiCreateVerifiedFromAddressRequest,
  ): Promise<AxiosResponse<sdk.EmailStatusDtoV2025, any>> {
    return this.electronAPI.createVerifiedFromAddress(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.EmailStatusDtoV2025, any>>;
  }
  deleteNotificationTemplatesInBulk(
    requestParameters: sdk.NotificationsV2025ApiDeleteNotificationTemplatesInBulkRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteNotificationTemplatesInBulk(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  deleteVerifiedFromAddress(
    requestParameters: sdk.NotificationsV2025ApiDeleteVerifiedFromAddressRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteVerifiedFromAddress(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  getDkimAttributes(
    requestParameters: sdk.NotificationsV2025ApiGetDkimAttributesRequest = {},
  ): Promise<AxiosResponse<Array<sdk.DkimAttributesV2025>, any>> {
    return this.electronAPI.getDkimAttributes(requestParameters) as Promise<
      AxiosResponse<Array<sdk.DkimAttributesV2025>, any>
    >;
  }
  getMailFromAttributes(
    requestParameters: sdk.NotificationsV2025ApiGetMailFromAttributesRequest,
  ): Promise<AxiosResponse<sdk.MailFromAttributesV2025, any>> {
    return this.electronAPI.getMailFromAttributes(requestParameters) as Promise<
      AxiosResponse<sdk.MailFromAttributesV2025, any>
    >;
  }
  getNotificationTemplate(
    requestParameters: sdk.NotificationsV2025ApiGetNotificationTemplateRequest,
  ): Promise<AxiosResponse<sdk.TemplateDtoV2025, any>> {
    return this.electronAPI.getNotificationTemplate(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.TemplateDtoV2025, any>>;
  }
  getNotificationsTemplateContext(
    requestParameters: sdk.NotificationsV2025ApiGetNotificationsTemplateContextRequest = {},
  ): Promise<AxiosResponse<sdk.NotificationTemplateContextV2025, any>> {
    return this.electronAPI.getNotificationsTemplateContext(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.NotificationTemplateContextV2025, any>>;
  }
  listFromAddresses(
    requestParameters: sdk.NotificationsV2025ApiListFromAddressesRequest = {},
  ): Promise<AxiosResponse<Array<sdk.EmailStatusDtoV2025>, any>> {
    return this.electronAPI.listFromAddresses(requestParameters) as Promise<
      AxiosResponse<Array<sdk.EmailStatusDtoV2025>, any>
    >;
  }
  listNotificationPreferences(
    requestParameters: sdk.NotificationsV2025ApiListNotificationPreferencesRequest = {},
  ): Promise<AxiosResponse<sdk.PreferencesDtoV2025, any>> {
    return this.electronAPI.listNotificationPreferences(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.PreferencesDtoV2025, any>>;
  }
  listNotificationTemplateDefaults(
    requestParameters: sdk.NotificationsV2025ApiListNotificationTemplateDefaultsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.TemplateDtoDefaultV2025>, any>> {
    return this.electronAPI.listNotificationTemplateDefaults(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.TemplateDtoDefaultV2025>, any>>;
  }
  listNotificationTemplates(
    requestParameters: sdk.NotificationsV2025ApiListNotificationTemplatesRequest = {},
  ): Promise<AxiosResponse<Array<sdk.TemplateDtoV2025>, any>> {
    return this.electronAPI.listNotificationTemplates(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.TemplateDtoV2025>, any>>;
  }
  putMailFromAttributes(
    requestParameters: sdk.NotificationsV2025ApiPutMailFromAttributesRequest,
  ): Promise<AxiosResponse<sdk.MailFromAttributesV2025, any>> {
    return this.electronAPI.putMailFromAttributes(requestParameters) as Promise<
      AxiosResponse<sdk.MailFromAttributesV2025, any>
    >;
  }
  sendTestNotification(
    requestParameters: sdk.NotificationsV2025ApiSendTestNotificationRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.sendTestNotification(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }

  createOauthClient(
    requestParameters: sdk.OAuthClientsV2025ApiCreateOauthClientRequest,
  ): Promise<AxiosResponse<sdk.CreateOAuthClientResponseV2025, any>> {
    return this.electronAPI.createOauthClient(requestParameters) as Promise<
      AxiosResponse<sdk.CreateOAuthClientResponseV2025, any>
    >;
  }
  deleteOauthClient(
    requestParameters: sdk.OAuthClientsV2025ApiDeleteOauthClientRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteOauthClient(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getOauthClient(
    requestParameters: sdk.OAuthClientsV2025ApiGetOauthClientRequest,
  ): Promise<AxiosResponse<sdk.GetOAuthClientResponseV2025, any>> {
    return this.electronAPI.getOauthClient(requestParameters) as Promise<
      AxiosResponse<sdk.GetOAuthClientResponseV2025, any>
    >;
  }
  listOauthClients(
    requestParameters: sdk.OAuthClientsV2025ApiListOauthClientsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.GetOAuthClientResponseV2025>, any>> {
    return this.electronAPI.listOauthClients(requestParameters) as Promise<
      AxiosResponse<Array<sdk.GetOAuthClientResponseV2025>, any>
    >;
  }
  patchOauthClient(
    requestParameters: sdk.OAuthClientsV2025ApiPatchOauthClientRequest,
  ): Promise<AxiosResponse<sdk.GetOAuthClientResponseV2025, any>> {
    return this.electronAPI.patchOauthClient(requestParameters) as Promise<
      AxiosResponse<sdk.GetOAuthClientResponseV2025, any>
    >;
  }

  getOrgConfig(
    requestParameters: sdk.OrgConfigV2025ApiGetOrgConfigRequest = {},
  ): Promise<AxiosResponse<sdk.OrgConfigV2025, any>> {
    return this.electronAPI.getOrgConfig(requestParameters) as Promise<
      AxiosResponse<sdk.OrgConfigV2025, any>
    >;
  }
  getValidTimeZones(
    requestParameters: sdk.OrgConfigV2025ApiGetValidTimeZonesRequest = {},
  ): Promise<AxiosResponse<Array<string>, any>> {
    return this.electronAPI.getValidTimeZones(requestParameters) as Promise<
      AxiosResponse<Array<string>, any>
    >;
  }
  patchOrgConfig(
    requestParameters: sdk.OrgConfigV2025ApiPatchOrgConfigRequest,
  ): Promise<AxiosResponse<sdk.OrgConfigV2025, any>> {
    return this.electronAPI.patchOrgConfig(requestParameters) as Promise<
      AxiosResponse<sdk.OrgConfigV2025, any>
    >;
  }

  createPasswordOrgConfig(
    requestParameters: sdk.PasswordConfigurationV2025ApiCreatePasswordOrgConfigRequest,
  ): Promise<AxiosResponse<sdk.PasswordOrgConfigV2025, any>> {
    return this.electronAPI.createPasswordOrgConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.PasswordOrgConfigV2025, any>>;
  }
  getPasswordOrgConfig(): Promise<
    AxiosResponse<sdk.PasswordOrgConfigV2025, any>
  > {
    return this.electronAPI.getPasswordOrgConfig() as Promise<
      AxiosResponse<sdk.PasswordOrgConfigV2025, any>
    >;
  }
  putPasswordOrgConfig(
    requestParameters: sdk.PasswordConfigurationV2025ApiPutPasswordOrgConfigRequest,
  ): Promise<AxiosResponse<sdk.PasswordOrgConfigV2025, any>> {
    return this.electronAPI.putPasswordOrgConfig(requestParameters) as Promise<
      AxiosResponse<sdk.PasswordOrgConfigV2025, any>
    >;
  }

  getPasswordDictionary(): Promise<AxiosResponse<string, any>> {
    return this.electronAPI.getPasswordDictionary() as Promise<
      AxiosResponse<string, any>
    >;
  }
  putPasswordDictionary(
    requestParameters: sdk.PasswordDictionaryV2025ApiPutPasswordDictionaryRequest = {},
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.putPasswordDictionary(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }

  createDigitToken(
    requestParameters: sdk.PasswordManagementV2025ApiCreateDigitTokenRequest,
  ): Promise<AxiosResponse<sdk.PasswordDigitTokenV2025, any>> {
    return this.electronAPI.createDigitToken(requestParameters) as Promise<
      AxiosResponse<sdk.PasswordDigitTokenV2025, any>
    >;
  }
  getPasswordChangeStatus(
    requestParameters: sdk.PasswordManagementV2025ApiGetPasswordChangeStatusRequest,
  ): Promise<AxiosResponse<sdk.PasswordStatusV2025, any>> {
    return this.electronAPI.getPasswordChangeStatus(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.PasswordStatusV2025, any>>;
  }
  queryPasswordInfo(
    requestParameters: sdk.PasswordManagementV2025ApiQueryPasswordInfoRequest,
  ): Promise<AxiosResponse<sdk.PasswordInfoV2025, any>> {
    return this.electronAPI.queryPasswordInfo(requestParameters) as Promise<
      AxiosResponse<sdk.PasswordInfoV2025, any>
    >;
  }
  setPassword(
    requestParameters: sdk.PasswordManagementV2025ApiSetPasswordRequest,
  ): Promise<AxiosResponse<sdk.PasswordChangeResponseV2025, any>> {
    return this.electronAPI.setPassword(requestParameters) as Promise<
      AxiosResponse<sdk.PasswordChangeResponseV2025, any>
    >;
  }

  createPasswordPolicy(
    requestParameters: sdk.PasswordPoliciesV2025ApiCreatePasswordPolicyRequest,
  ): Promise<AxiosResponse<sdk.PasswordPolicyV3DtoV2025, any>> {
    return this.electronAPI.createPasswordPolicy(requestParameters) as Promise<
      AxiosResponse<sdk.PasswordPolicyV3DtoV2025, any>
    >;
  }
  deletePasswordPolicy(
    requestParameters: sdk.PasswordPoliciesV2025ApiDeletePasswordPolicyRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deletePasswordPolicy(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getPasswordPolicyById(
    requestParameters: sdk.PasswordPoliciesV2025ApiGetPasswordPolicyByIdRequest,
  ): Promise<AxiosResponse<sdk.PasswordPolicyV3DtoV2025, any>> {
    return this.electronAPI.getPasswordPolicyById(requestParameters) as Promise<
      AxiosResponse<sdk.PasswordPolicyV3DtoV2025, any>
    >;
  }
  listPasswordPolicies(
    requestParameters: sdk.PasswordPoliciesV2025ApiListPasswordPoliciesRequest = {},
  ): Promise<AxiosResponse<Array<sdk.PasswordPolicyV3DtoV2025>, any>> {
    return this.electronAPI.listPasswordPolicies(requestParameters) as Promise<
      AxiosResponse<Array<sdk.PasswordPolicyV3DtoV2025>, any>
    >;
  }
  setPasswordPolicy(
    requestParameters: sdk.PasswordPoliciesV2025ApiSetPasswordPolicyRequest,
  ): Promise<AxiosResponse<sdk.PasswordPolicyV3DtoV2025, any>> {
    return this.electronAPI.setPasswordPolicy(requestParameters) as Promise<
      AxiosResponse<sdk.PasswordPolicyV3DtoV2025, any>
    >;
  }

  createPasswordSyncGroup(
    requestParameters: sdk.PasswordSyncGroupsV2025ApiCreatePasswordSyncGroupRequest,
  ): Promise<AxiosResponse<sdk.PasswordSyncGroupV2025, any>> {
    return this.electronAPI.createPasswordSyncGroup(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.PasswordSyncGroupV2025, any>>;
  }
  deletePasswordSyncGroup(
    requestParameters: sdk.PasswordSyncGroupsV2025ApiDeletePasswordSyncGroupRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deletePasswordSyncGroup(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  getPasswordSyncGroup(
    requestParameters: sdk.PasswordSyncGroupsV2025ApiGetPasswordSyncGroupRequest,
  ): Promise<AxiosResponse<sdk.PasswordSyncGroupV2025, any>> {
    return this.electronAPI.getPasswordSyncGroup(requestParameters) as Promise<
      AxiosResponse<sdk.PasswordSyncGroupV2025, any>
    >;
  }
  getPasswordSyncGroups(
    requestParameters: sdk.PasswordSyncGroupsV2025ApiGetPasswordSyncGroupsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.PasswordSyncGroupV2025>, any>> {
    return this.electronAPI.getPasswordSyncGroups(requestParameters) as Promise<
      AxiosResponse<Array<sdk.PasswordSyncGroupV2025>, any>
    >;
  }
  updatePasswordSyncGroup(
    requestParameters: sdk.PasswordSyncGroupsV2025ApiUpdatePasswordSyncGroupRequest,
  ): Promise<AxiosResponse<sdk.PasswordSyncGroupV2025, any>> {
    return this.electronAPI.updatePasswordSyncGroup(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.PasswordSyncGroupV2025, any>>;
  }

  createPersonalAccessToken(
    requestParameters: sdk.PersonalAccessTokensV2025ApiCreatePersonalAccessTokenRequest,
  ): Promise<AxiosResponse<sdk.CreatePersonalAccessTokenResponseV2025, any>> {
    return this.electronAPI.createPersonalAccessToken(
      requestParameters,
    ) as Promise<
      AxiosResponse<sdk.CreatePersonalAccessTokenResponseV2025, any>
    >;
  }
  deletePersonalAccessToken(
    requestParameters: sdk.PersonalAccessTokensV2025ApiDeletePersonalAccessTokenRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deletePersonalAccessToken(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  listPersonalAccessTokens(
    requestParameters: sdk.PersonalAccessTokensV2025ApiListPersonalAccessTokensRequest = {},
  ): Promise<
    AxiosResponse<Array<sdk.GetPersonalAccessTokenResponseV2025>, any>
  > {
    return this.electronAPI.listPersonalAccessTokens(
      requestParameters,
    ) as Promise<
      AxiosResponse<Array<sdk.GetPersonalAccessTokenResponseV2025>, any>
    >;
  }
  patchPersonalAccessToken(
    requestParameters: sdk.PersonalAccessTokensV2025ApiPatchPersonalAccessTokenRequest,
  ): Promise<AxiosResponse<sdk.GetPersonalAccessTokenResponseV2025, any>> {
    return this.electronAPI.patchPersonalAccessToken(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.GetPersonalAccessTokenResponseV2025, any>>;
  }

  getPublicIdentities(
    requestParameters: sdk.PublicIdentitiesV2025ApiGetPublicIdentitiesRequest = {},
  ): Promise<AxiosResponse<Array<sdk.PublicIdentityV2025>, any>> {
    return this.electronAPI.getPublicIdentities(requestParameters) as Promise<
      AxiosResponse<Array<sdk.PublicIdentityV2025>, any>
    >;
  }

  getPublicIdentityConfig(): Promise<
    AxiosResponse<sdk.PublicIdentityConfigV2025, any>
  > {
    return this.electronAPI.getPublicIdentityConfig() as Promise<
      AxiosResponse<sdk.PublicIdentityConfigV2025, any>
    >;
  }
  updatePublicIdentityConfig(
    requestParameters: sdk.PublicIdentitiesConfigV2025ApiUpdatePublicIdentityConfigRequest,
  ): Promise<AxiosResponse<sdk.PublicIdentityConfigV2025, any>> {
    return this.electronAPI.updatePublicIdentityConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.PublicIdentityConfigV2025, any>>;
  }

  cancelReport(
    requestParameters: sdk.ReportsDataExtractionV2025ApiCancelReportRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.cancelReport(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getReport(
    requestParameters: sdk.ReportsDataExtractionV2025ApiGetReportRequest,
  ): Promise<AxiosResponse<File, any>> {
    return this.electronAPI.getReport(requestParameters) as Promise<
      AxiosResponse<File, any>
    >;
  }
  getReportResult(
    requestParameters: sdk.ReportsDataExtractionV2025ApiGetReportResultRequest,
  ): Promise<AxiosResponse<sdk.ReportResultsV2025, any>> {
    return this.electronAPI.getReportResult(requestParameters) as Promise<
      AxiosResponse<sdk.ReportResultsV2025, any>
    >;
  }
  startReport(
    requestParameters: sdk.ReportsDataExtractionV2025ApiStartReportRequest,
  ): Promise<AxiosResponse<sdk.TaskResultDetailsV2025, any>> {
    return this.electronAPI.startReport(requestParameters) as Promise<
      AxiosResponse<sdk.TaskResultDetailsV2025, any>
    >;
  }

  listRequestableObjects(
    requestParameters: sdk.RequestableObjectsV2025ApiListRequestableObjectsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.RequestableObjectV2025>, any>> {
    return this.electronAPI.listRequestableObjects(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.RequestableObjectV2025>, any>>;
  }

  createRoleInsightRequests(
    requestParameters: sdk.RoleInsightsV2025ApiCreateRoleInsightRequestsRequest = {},
  ): Promise<AxiosResponse<sdk.RoleInsightsResponseV2025, any>> {
    return this.electronAPI.createRoleInsightRequests(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.RoleInsightsResponseV2025, any>>;
  }
  downloadRoleInsightsEntitlementsChanges(
    requestParameters: sdk.RoleInsightsV2025ApiDownloadRoleInsightsEntitlementsChangesRequest,
  ): Promise<AxiosResponse<string, any>> {
    return this.electronAPI.downloadRoleInsightsEntitlementsChanges(
      requestParameters,
    ) as Promise<AxiosResponse<string, any>>;
  }
  getEntitlementChangesIdentities(
    requestParameters: sdk.RoleInsightsV2025ApiGetEntitlementChangesIdentitiesRequest,
  ): Promise<AxiosResponse<Array<sdk.RoleInsightsIdentitiesV2025>, any>> {
    return this.electronAPI.getEntitlementChangesIdentities(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.RoleInsightsIdentitiesV2025>, any>>;
  }
  getRoleInsight(
    requestParameters: sdk.RoleInsightsV2025ApiGetRoleInsightRequest,
  ): Promise<AxiosResponse<sdk.RoleInsightV2025, any>> {
    return this.electronAPI.getRoleInsight(requestParameters) as Promise<
      AxiosResponse<sdk.RoleInsightV2025, any>
    >;
  }
  getRoleInsights(
    requestParameters: sdk.RoleInsightsV2025ApiGetRoleInsightsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.RoleInsightV2025>, any>> {
    return this.electronAPI.getRoleInsights(requestParameters) as Promise<
      AxiosResponse<Array<sdk.RoleInsightV2025>, any>
    >;
  }
  getRoleInsightsCurrentEntitlements(
    requestParameters: sdk.RoleInsightsV2025ApiGetRoleInsightsCurrentEntitlementsRequest,
  ): Promise<AxiosResponse<Array<sdk.RoleInsightsEntitlementV2025>, any>> {
    return this.electronAPI.getRoleInsightsCurrentEntitlements(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.RoleInsightsEntitlementV2025>, any>>;
  }
  getRoleInsightsEntitlementsChanges(
    requestParameters: sdk.RoleInsightsV2025ApiGetRoleInsightsEntitlementsChangesRequest,
  ): Promise<
    AxiosResponse<Array<sdk.RoleInsightsEntitlementChangesV2025>, any>
  > {
    return this.electronAPI.getRoleInsightsEntitlementsChanges(
      requestParameters,
    ) as Promise<
      AxiosResponse<Array<sdk.RoleInsightsEntitlementChangesV2025>, any>
    >;
  }
  getRoleInsightsRequests(
    requestParameters: sdk.RoleInsightsV2025ApiGetRoleInsightsRequestsRequest,
  ): Promise<AxiosResponse<sdk.RoleInsightsResponseV2025, any>> {
    return this.electronAPI.getRoleInsightsRequests(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.RoleInsightsResponseV2025, any>>;
  }
  getRoleInsightsSummary(
    requestParameters: sdk.RoleInsightsV2025ApiGetRoleInsightsSummaryRequest = {},
  ): Promise<AxiosResponse<sdk.RoleInsightsSummaryV2025, any>> {
    return this.electronAPI.getRoleInsightsSummary(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.RoleInsightsSummaryV2025, any>>;
  }

  createRole(
    requestParameters: sdk.RolesV2025ApiCreateRoleRequest,
  ): Promise<AxiosResponse<sdk.RoleV2025, any>> {
    return this.electronAPI.createRole(requestParameters) as Promise<
      AxiosResponse<sdk.RoleV2025, any>
    >;
  }
  deleteBulkRoles(
    requestParameters: sdk.RolesV2025ApiDeleteBulkRolesRequest,
  ): Promise<AxiosResponse<sdk.TaskResultDtoV2025, any>> {
    return this.electronAPI.deleteBulkRoles(requestParameters) as Promise<
      AxiosResponse<sdk.TaskResultDtoV2025, any>
    >;
  }
  deleteMetadataFromRoleByKeyAndValue(
    requestParameters: sdk.RolesV2025ApiDeleteMetadataFromRoleByKeyAndValueRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteMetadataFromRoleByKeyAndValue(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  deleteRole(
    requestParameters: sdk.RolesV2025ApiDeleteRoleRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteRole(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getBulkUpdateStatus(): Promise<
    AxiosResponse<Array<sdk.RoleGetAllBulkUpdateResponseV2025>, any>
  > {
    return this.electronAPI.getBulkUpdateStatus() as Promise<
      AxiosResponse<Array<sdk.RoleGetAllBulkUpdateResponseV2025>, any>
    >;
  }
  getBulkUpdateStatusById(
    requestParameters: sdk.RolesV2025ApiGetBulkUpdateStatusByIdRequest,
  ): Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>> {
    return this.electronAPI.getBulkUpdateStatusById(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>>;
  }
  getRole(
    requestParameters: sdk.RolesV2025ApiGetRoleRequest,
  ): Promise<AxiosResponse<sdk.RoleV2025, any>> {
    return this.electronAPI.getRole(requestParameters) as Promise<
      AxiosResponse<sdk.RoleV2025, any>
    >;
  }
  getRoleAssignedIdentities(
    requestParameters: sdk.RolesV2025ApiGetRoleAssignedIdentitiesRequest,
  ): Promise<AxiosResponse<Array<sdk.RoleIdentityV2025>, any>> {
    return this.electronAPI.getRoleAssignedIdentities(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.RoleIdentityV2025>, any>>;
  }
  getRoleEntitlements(
    requestParameters: sdk.RolesV2025ApiGetRoleEntitlementsRequest,
  ): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>> {
    return this.electronAPI.getRoleEntitlements(requestParameters) as Promise<
      AxiosResponse<Array<sdk.EntitlementV2025>, any>
    >;
  }
  listRoles(
    requestParameters: sdk.RolesV2025ApiListRolesRequest = {},
  ): Promise<AxiosResponse<Array<sdk.RoleV2025>, any>> {
    return this.electronAPI.listRoles(requestParameters) as Promise<
      AxiosResponse<Array<sdk.RoleV2025>, any>
    >;
  }
  patchRole(
    requestParameters: sdk.RolesV2025ApiPatchRoleRequest,
  ): Promise<AxiosResponse<sdk.RoleV2025, any>> {
    return this.electronAPI.patchRole(requestParameters) as Promise<
      AxiosResponse<sdk.RoleV2025, any>
    >;
  }
  searchRolesByFilter(
    requestParameters: sdk.RolesV2025ApiSearchRolesByFilterRequest = {},
  ): Promise<AxiosResponse<sdk.RoleV2025, any>> {
    return this.electronAPI.searchRolesByFilter(requestParameters) as Promise<
      AxiosResponse<sdk.RoleV2025, any>
    >;
  }
  updateAttributeKeyAndValueToRole(
    requestParameters: sdk.RolesV2025ApiUpdateAttributeKeyAndValueToRoleRequest,
  ): Promise<AxiosResponse<sdk.RoleV2025, any>> {
    return this.electronAPI.updateAttributeKeyAndValueToRole(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.RoleV2025, any>>;
  }
  updateRolesMetadataByFilter(
    requestParameters: sdk.RolesV2025ApiUpdateRolesMetadataByFilterRequest,
  ): Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>> {
    return this.electronAPI.updateRolesMetadataByFilter(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>>;
  }
  updateRolesMetadataByIds(
    requestParameters: sdk.RolesV2025ApiUpdateRolesMetadataByIdsRequest,
  ): Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>> {
    return this.electronAPI.updateRolesMetadataByIds(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>>;
  }
  updateRolesMetadataByQuery(
    requestParameters: sdk.RolesV2025ApiUpdateRolesMetadataByQueryRequest,
  ): Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>> {
    return this.electronAPI.updateRolesMetadataByQuery(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>>;
  }

  createSIMIntegration(
    requestParameters: sdk.SIMIntegrationsV2025ApiCreateSIMIntegrationRequest,
  ): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    return this.electronAPI.createSIMIntegration(requestParameters) as Promise<
      AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>
    >;
  }
  deleteSIMIntegration(
    requestParameters: sdk.SIMIntegrationsV2025ApiDeleteSIMIntegrationRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteSIMIntegration(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getSIMIntegration(
    requestParameters: sdk.SIMIntegrationsV2025ApiGetSIMIntegrationRequest,
  ): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    return this.electronAPI.getSIMIntegration(requestParameters) as Promise<
      AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>
    >;
  }
  getSIMIntegrations(
    requestParameters: sdk.SIMIntegrationsV2025ApiGetSIMIntegrationsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.ServiceDeskIntegrationDtoV2025>, any>> {
    return this.electronAPI.getSIMIntegrations(requestParameters) as Promise<
      AxiosResponse<Array<sdk.ServiceDeskIntegrationDtoV2025>, any>
    >;
  }
  patchBeforeProvisioningRule(
    requestParameters: sdk.SIMIntegrationsV2025ApiPatchBeforeProvisioningRuleRequest,
  ): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    return this.electronAPI.patchBeforeProvisioningRule(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>>;
  }
  patchSIMAttributes(
    requestParameters: sdk.SIMIntegrationsV2025ApiPatchSIMAttributesRequest,
  ): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    return this.electronAPI.patchSIMAttributes(requestParameters) as Promise<
      AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>
    >;
  }
  putSIMIntegration(
    requestParameters: sdk.SIMIntegrationsV2025ApiPutSIMIntegrationRequest,
  ): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    return this.electronAPI.putSIMIntegration(requestParameters) as Promise<
      AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>
    >;
  }

  createSodPolicy(
    requestParameters: sdk.SODPoliciesV2025ApiCreateSodPolicyRequest,
  ): Promise<AxiosResponse<sdk.SodPolicyV2025, any>> {
    return this.electronAPI.createSodPolicy(requestParameters) as Promise<
      AxiosResponse<sdk.SodPolicyV2025, any>
    >;
  }
  deleteSodPolicy(
    requestParameters: sdk.SODPoliciesV2025ApiDeleteSodPolicyRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteSodPolicy(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  deleteSodPolicySchedule(
    requestParameters: sdk.SODPoliciesV2025ApiDeleteSodPolicyScheduleRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteSodPolicySchedule(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  getCustomViolationReport(
    requestParameters: sdk.SODPoliciesV2025ApiGetCustomViolationReportRequest,
  ): Promise<AxiosResponse<File, any>> {
    return this.electronAPI.getCustomViolationReport(
      requestParameters,
    ) as Promise<AxiosResponse<File, any>>;
  }
  getDefaultViolationReport(
    requestParameters: sdk.SODPoliciesV2025ApiGetDefaultViolationReportRequest,
  ): Promise<AxiosResponse<File, any>> {
    return this.electronAPI.getDefaultViolationReport(
      requestParameters,
    ) as Promise<AxiosResponse<File, any>>;
  }
  getSodAllReportRunStatus(): Promise<
    AxiosResponse<sdk.ReportResultReferenceV2025, any>
  > {
    return this.electronAPI.getSodAllReportRunStatus() as Promise<
      AxiosResponse<sdk.ReportResultReferenceV2025, any>
    >;
  }
  getSodPolicy(
    requestParameters: sdk.SODPoliciesV2025ApiGetSodPolicyRequest,
  ): Promise<AxiosResponse<sdk.SodPolicyV2025, any>> {
    return this.electronAPI.getSodPolicy(requestParameters) as Promise<
      AxiosResponse<sdk.SodPolicyV2025, any>
    >;
  }
  getSodPolicySchedule(
    requestParameters: sdk.SODPoliciesV2025ApiGetSodPolicyScheduleRequest,
  ): Promise<AxiosResponse<sdk.SodPolicyScheduleV2025, any>> {
    return this.electronAPI.getSodPolicySchedule(requestParameters) as Promise<
      AxiosResponse<sdk.SodPolicyScheduleV2025, any>
    >;
  }
  getSodViolationReportRunStatus(
    requestParameters: sdk.SODPoliciesV2025ApiGetSodViolationReportRunStatusRequest,
  ): Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>> {
    return this.electronAPI.getSodViolationReportRunStatus(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>>;
  }
  getSodViolationReportStatus(
    requestParameters: sdk.SODPoliciesV2025ApiGetSodViolationReportStatusRequest,
  ): Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>> {
    return this.electronAPI.getSodViolationReportStatus(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>>;
  }
  listSodPolicies(
    requestParameters: sdk.SODPoliciesV2025ApiListSodPoliciesRequest = {},
  ): Promise<AxiosResponse<Array<sdk.SodPolicyV2025>, any>> {
    return this.electronAPI.listSodPolicies(requestParameters) as Promise<
      AxiosResponse<Array<sdk.SodPolicyV2025>, any>
    >;
  }
  patchSodPolicy(
    requestParameters: sdk.SODPoliciesV2025ApiPatchSodPolicyRequest,
  ): Promise<AxiosResponse<sdk.SodPolicyV2025, any>> {
    return this.electronAPI.patchSodPolicy(requestParameters) as Promise<
      AxiosResponse<sdk.SodPolicyV2025, any>
    >;
  }
  putPolicySchedule(
    requestParameters: sdk.SODPoliciesV2025ApiPutPolicyScheduleRequest,
  ): Promise<AxiosResponse<sdk.SodPolicyScheduleV2025, any>> {
    return this.electronAPI.putPolicySchedule(requestParameters) as Promise<
      AxiosResponse<sdk.SodPolicyScheduleV2025, any>
    >;
  }
  putSodPolicy(
    requestParameters: sdk.SODPoliciesV2025ApiPutSodPolicyRequest,
  ): Promise<AxiosResponse<sdk.SodPolicyV2025, any>> {
    return this.electronAPI.putSodPolicy(requestParameters) as Promise<
      AxiosResponse<sdk.SodPolicyV2025, any>
    >;
  }
  startEvaluateSodPolicy(
    requestParameters: sdk.SODPoliciesV2025ApiStartEvaluateSodPolicyRequest,
  ): Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>> {
    return this.electronAPI.startEvaluateSodPolicy(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>>;
  }
  startSodAllPoliciesForOrg(
    requestParameters: sdk.SODPoliciesV2025ApiStartSodAllPoliciesForOrgRequest = {},
  ): Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>> {
    return this.electronAPI.startSodAllPoliciesForOrg(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>>;
  }
  startSodPolicy(
    requestParameters: sdk.SODPoliciesV2025ApiStartSodPolicyRequest,
  ): Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>> {
    return this.electronAPI.startSodPolicy(requestParameters) as Promise<
      AxiosResponse<sdk.ReportResultReferenceV2025, any>
    >;
  }

  startPredictSodViolations(
    requestParameters: sdk.SODViolationsV2025ApiStartPredictSodViolationsRequest,
  ): Promise<AxiosResponse<sdk.ViolationPredictionV2025, any>> {
    return this.electronAPI.startPredictSodViolations(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ViolationPredictionV2025, any>>;
  }
  startViolationCheck(
    requestParameters: sdk.SODViolationsV2025ApiStartViolationCheckRequest,
  ): Promise<AxiosResponse<sdk.SodViolationCheckV2025, any>> {
    return this.electronAPI.startViolationCheck(requestParameters) as Promise<
      AxiosResponse<sdk.SodViolationCheckV2025, any>
    >;
  }

  exportSpConfig(
    requestParameters: sdk.SPConfigV2025ApiExportSpConfigRequest,
  ): Promise<AxiosResponse<sdk.SpConfigExportJobV2025, any>> {
    return this.electronAPI.exportSpConfig(requestParameters) as Promise<
      AxiosResponse<sdk.SpConfigExportJobV2025, any>
    >;
  }
  getSpConfigExport(
    requestParameters: sdk.SPConfigV2025ApiGetSpConfigExportRequest,
  ): Promise<AxiosResponse<sdk.SpConfigExportResultsV2025, any>> {
    return this.electronAPI.getSpConfigExport(requestParameters) as Promise<
      AxiosResponse<sdk.SpConfigExportResultsV2025, any>
    >;
  }
  getSpConfigExportStatus(
    requestParameters: sdk.SPConfigV2025ApiGetSpConfigExportStatusRequest,
  ): Promise<AxiosResponse<sdk.SpConfigExportJobStatusV2025, any>> {
    return this.electronAPI.getSpConfigExportStatus(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.SpConfigExportJobStatusV2025, any>>;
  }
  getSpConfigImport(
    requestParameters: sdk.SPConfigV2025ApiGetSpConfigImportRequest,
  ): Promise<AxiosResponse<sdk.SpConfigImportResultsV2025, any>> {
    return this.electronAPI.getSpConfigImport(requestParameters) as Promise<
      AxiosResponse<sdk.SpConfigImportResultsV2025, any>
    >;
  }
  getSpConfigImportStatus(
    requestParameters: sdk.SPConfigV2025ApiGetSpConfigImportStatusRequest,
  ): Promise<AxiosResponse<sdk.SpConfigImportJobStatusV2025, any>> {
    return this.electronAPI.getSpConfigImportStatus(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.SpConfigImportJobStatusV2025, any>>;
  }
  importSpConfig(
    requestParameters: sdk.SPConfigV2025ApiImportSpConfigRequest,
  ): Promise<AxiosResponse<sdk.SpConfigJobV2025, any>> {
    return this.electronAPI.importSpConfig(requestParameters) as Promise<
      AxiosResponse<sdk.SpConfigJobV2025, any>
    >;
  }
  listSpConfigObjects(): Promise<
    AxiosResponse<Array<sdk.SpConfigObjectV2025>, any>
  > {
    return this.electronAPI.listSpConfigObjects() as Promise<
      AxiosResponse<Array<sdk.SpConfigObjectV2025>, any>
    >;
  }

  createSavedSearch(
    requestParameters: sdk.SavedSearchV2025ApiCreateSavedSearchRequest,
  ): Promise<AxiosResponse<sdk.SavedSearchV2025, any>> {
    return this.electronAPI.createSavedSearch(requestParameters) as Promise<
      AxiosResponse<sdk.SavedSearchV2025, any>
    >;
  }
  deleteSavedSearch(
    requestParameters: sdk.SavedSearchV2025ApiDeleteSavedSearchRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteSavedSearch(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  executeSavedSearch(
    requestParameters: sdk.SavedSearchV2025ApiExecuteSavedSearchRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.executeSavedSearch(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getSavedSearch(
    requestParameters: sdk.SavedSearchV2025ApiGetSavedSearchRequest,
  ): Promise<AxiosResponse<sdk.SavedSearchV2025, any>> {
    return this.electronAPI.getSavedSearch(requestParameters) as Promise<
      AxiosResponse<sdk.SavedSearchV2025, any>
    >;
  }
  listSavedSearches(
    requestParameters: sdk.SavedSearchV2025ApiListSavedSearchesRequest = {},
  ): Promise<AxiosResponse<Array<sdk.SavedSearchV2025>, any>> {
    return this.electronAPI.listSavedSearches(requestParameters) as Promise<
      AxiosResponse<Array<sdk.SavedSearchV2025>, any>
    >;
  }
  putSavedSearch(
    requestParameters: sdk.SavedSearchV2025ApiPutSavedSearchRequest,
  ): Promise<AxiosResponse<sdk.SavedSearchV2025, any>> {
    return this.electronAPI.putSavedSearch(requestParameters) as Promise<
      AxiosResponse<sdk.SavedSearchV2025, any>
    >;
  }

  createScheduledSearch(
    requestParameters: sdk.ScheduledSearchV2025ApiCreateScheduledSearchRequest,
  ): Promise<AxiosResponse<sdk.ScheduledSearchV2025, any>> {
    return this.electronAPI.createScheduledSearch(requestParameters) as Promise<
      AxiosResponse<sdk.ScheduledSearchV2025, any>
    >;
  }
  deleteScheduledSearch(
    requestParameters: sdk.ScheduledSearchV2025ApiDeleteScheduledSearchRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteScheduledSearch(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getScheduledSearch(
    requestParameters: sdk.ScheduledSearchV2025ApiGetScheduledSearchRequest,
  ): Promise<AxiosResponse<sdk.ScheduledSearchV2025, any>> {
    return this.electronAPI.getScheduledSearch(requestParameters) as Promise<
      AxiosResponse<sdk.ScheduledSearchV2025, any>
    >;
  }
  listScheduledSearch(
    requestParameters: sdk.ScheduledSearchV2025ApiListScheduledSearchRequest = {},
  ): Promise<AxiosResponse<Array<sdk.ScheduledSearchV2025>, any>> {
    return this.electronAPI.listScheduledSearch(requestParameters) as Promise<
      AxiosResponse<Array<sdk.ScheduledSearchV2025>, any>
    >;
  }
  unsubscribeScheduledSearch(
    requestParameters: sdk.ScheduledSearchV2025ApiUnsubscribeScheduledSearchRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.unsubscribeScheduledSearch(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  updateScheduledSearch(
    requestParameters: sdk.ScheduledSearchV2025ApiUpdateScheduledSearchRequest,
  ): Promise<AxiosResponse<sdk.ScheduledSearchV2025, any>> {
    return this.electronAPI.updateScheduledSearch(requestParameters) as Promise<
      AxiosResponse<sdk.ScheduledSearchV2025, any>
    >;
  }

  searchAggregate(
    requestParameters: sdk.SearchV2025ApiSearchAggregateRequest,
  ): Promise<AxiosResponse<sdk.AggregationResultV2025, any>> {
    return this.electronAPI.searchAggregate(requestParameters) as Promise<
      AxiosResponse<sdk.AggregationResultV2025, any>
    >;
  }
  searchCount(
    requestParameters: sdk.SearchV2025ApiSearchCountRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.searchCount(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  searchGet(
    requestParameters: sdk.SearchV2025ApiSearchGetRequest,
  ): Promise<AxiosResponse<sdk.SearchDocumentV2025, any>> {
    return this.electronAPI.searchGet(requestParameters) as Promise<
      AxiosResponse<sdk.SearchDocumentV2025, any>
    >;
  }
  searchPost(
    requestParameters: sdk.SearchV2025ApiSearchPostRequest,
  ): Promise<AxiosResponse<Array<sdk.SearchDocumentsV2025>, any>> {
    return this.electronAPI.searchPost(requestParameters) as Promise<
      AxiosResponse<Array<sdk.SearchDocumentsV2025>, any>
    >;
  }

  createSearchAttributeConfig(
    requestParameters: sdk.SearchAttributeConfigurationV2025ApiCreateSearchAttributeConfigRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.createSearchAttributeConfig(
      requestParameters,
    ) as Promise<AxiosResponse<object, any>>;
  }
  deleteSearchAttributeConfig(
    requestParameters: sdk.SearchAttributeConfigurationV2025ApiDeleteSearchAttributeConfigRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteSearchAttributeConfig(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  getSearchAttributeConfig(
    requestParameters: sdk.SearchAttributeConfigurationV2025ApiGetSearchAttributeConfigRequest,
  ): Promise<AxiosResponse<Array<sdk.SearchAttributeConfigV2025>, any>> {
    return this.electronAPI.getSearchAttributeConfig(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.SearchAttributeConfigV2025>, any>>;
  }
  getSingleSearchAttributeConfig(
    requestParameters: sdk.SearchAttributeConfigurationV2025ApiGetSingleSearchAttributeConfigRequest,
  ): Promise<AxiosResponse<sdk.SearchAttributeConfigV2025, any>> {
    return this.electronAPI.getSingleSearchAttributeConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.SearchAttributeConfigV2025, any>>;
  }
  patchSearchAttributeConfig(
    requestParameters: sdk.SearchAttributeConfigurationV2025ApiPatchSearchAttributeConfigRequest,
  ): Promise<AxiosResponse<sdk.SearchAttributeConfigV2025, any>> {
    return this.electronAPI.patchSearchAttributeConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.SearchAttributeConfigV2025, any>>;
  }

  createSegment(
    requestParameters: sdk.SegmentsV2025ApiCreateSegmentRequest,
  ): Promise<AxiosResponse<sdk.SegmentV2025, any>> {
    return this.electronAPI.createSegment(requestParameters) as Promise<
      AxiosResponse<sdk.SegmentV2025, any>
    >;
  }
  deleteSegment(
    requestParameters: sdk.SegmentsV2025ApiDeleteSegmentRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteSegment(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getSegment(
    requestParameters: sdk.SegmentsV2025ApiGetSegmentRequest,
  ): Promise<AxiosResponse<sdk.SegmentV2025, any>> {
    return this.electronAPI.getSegment(requestParameters) as Promise<
      AxiosResponse<sdk.SegmentV2025, any>
    >;
  }
  listSegments(
    requestParameters: sdk.SegmentsV2025ApiListSegmentsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.SegmentV2025>, any>> {
    return this.electronAPI.listSegments(requestParameters) as Promise<
      AxiosResponse<Array<sdk.SegmentV2025>, any>
    >;
  }
  patchSegment(
    requestParameters: sdk.SegmentsV2025ApiPatchSegmentRequest,
  ): Promise<AxiosResponse<sdk.SegmentV2025, any>> {
    return this.electronAPI.patchSegment(requestParameters) as Promise<
      AxiosResponse<sdk.SegmentV2025, any>
    >;
  }

  createServiceDeskIntegration(
    requestParameters: sdk.ServiceDeskIntegrationV2025ApiCreateServiceDeskIntegrationRequest,
  ): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    return this.electronAPI.createServiceDeskIntegration(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>>;
  }
  deleteServiceDeskIntegration(
    requestParameters: sdk.ServiceDeskIntegrationV2025ApiDeleteServiceDeskIntegrationRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteServiceDeskIntegration(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  getServiceDeskIntegration(
    requestParameters: sdk.ServiceDeskIntegrationV2025ApiGetServiceDeskIntegrationRequest,
  ): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    return this.electronAPI.getServiceDeskIntegration(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>>;
  }
  getServiceDeskIntegrationTemplate(
    requestParameters: sdk.ServiceDeskIntegrationV2025ApiGetServiceDeskIntegrationTemplateRequest,
  ): Promise<AxiosResponse<sdk.ServiceDeskIntegrationTemplateDtoV2025, any>> {
    return this.electronAPI.getServiceDeskIntegrationTemplate(
      requestParameters,
    ) as Promise<
      AxiosResponse<sdk.ServiceDeskIntegrationTemplateDtoV2025, any>
    >;
  }
  getServiceDeskIntegrationTypes(): Promise<
    AxiosResponse<Array<sdk.ServiceDeskIntegrationTemplateTypeV2025>, any>
  > {
    return this.electronAPI.getServiceDeskIntegrationTypes() as Promise<
      AxiosResponse<Array<sdk.ServiceDeskIntegrationTemplateTypeV2025>, any>
    >;
  }
  getServiceDeskIntegrations(
    requestParameters: sdk.ServiceDeskIntegrationV2025ApiGetServiceDeskIntegrationsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.ServiceDeskIntegrationDtoV2025>, any>> {
    return this.electronAPI.getServiceDeskIntegrations(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.ServiceDeskIntegrationDtoV2025>, any>>;
  }
  getStatusCheckDetails(): Promise<
    AxiosResponse<sdk.QueuedCheckConfigDetailsV2025, any>
  > {
    return this.electronAPI.getStatusCheckDetails() as Promise<
      AxiosResponse<sdk.QueuedCheckConfigDetailsV2025, any>
    >;
  }
  patchServiceDeskIntegration(
    requestParameters: sdk.ServiceDeskIntegrationV2025ApiPatchServiceDeskIntegrationRequest,
  ): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    return this.electronAPI.patchServiceDeskIntegration(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>>;
  }
  putServiceDeskIntegration(
    requestParameters: sdk.ServiceDeskIntegrationV2025ApiPutServiceDeskIntegrationRequest,
  ): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    return this.electronAPI.putServiceDeskIntegration(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>>;
  }
  updateStatusCheckDetails(
    requestParameters: sdk.ServiceDeskIntegrationV2025ApiUpdateStatusCheckDetailsRequest,
  ): Promise<AxiosResponse<sdk.QueuedCheckConfigDetailsV2025, any>> {
    return this.electronAPI.updateStatusCheckDetails(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.QueuedCheckConfigDetailsV2025, any>>;
  }

  getStatusBySourceId(
    requestParameters: sdk.SourceUsagesV2025ApiGetStatusBySourceIdRequest,
  ): Promise<AxiosResponse<sdk.SourceUsageStatusV2025, any>> {
    return this.electronAPI.getStatusBySourceId(requestParameters) as Promise<
      AxiosResponse<sdk.SourceUsageStatusV2025, any>
    >;
  }
  getUsagesBySourceId(
    requestParameters: sdk.SourceUsagesV2025ApiGetUsagesBySourceIdRequest,
  ): Promise<AxiosResponse<Array<sdk.SourceUsageV2025>, any>> {
    return this.electronAPI.getUsagesBySourceId(requestParameters) as Promise<
      AxiosResponse<Array<sdk.SourceUsageV2025>, any>
    >;
  }

  createProvisioningPolicy(
    requestParameters: sdk.SourcesV2025ApiCreateProvisioningPolicyRequest,
  ): Promise<AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>> {
    return this.electronAPI.createProvisioningPolicy(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>>;
  }
  createSource(
    requestParameters: sdk.SourcesV2025ApiCreateSourceRequest,
  ): Promise<AxiosResponse<sdk.SourceV2025, any>> {
    return this.electronAPI.createSource(requestParameters) as Promise<
      AxiosResponse<sdk.SourceV2025, any>
    >;
  }
  createSourceSchedule(
    requestParameters: sdk.SourcesV2025ApiCreateSourceScheduleRequest,
  ): Promise<AxiosResponse<sdk.Schedule1V2025, any>> {
    return this.electronAPI.createSourceSchedule(requestParameters) as Promise<
      AxiosResponse<sdk.Schedule1V2025, any>
    >;
  }
  createSourceSchema(
    requestParameters: sdk.SourcesV2025ApiCreateSourceSchemaRequest,
  ): Promise<AxiosResponse<sdk.SchemaV2025, any>> {
    return this.electronAPI.createSourceSchema(requestParameters) as Promise<
      AxiosResponse<sdk.SchemaV2025, any>
    >;
  }
  deleteAccountsAsync(
    requestParameters: sdk.SourcesV2025ApiDeleteAccountsAsyncRequest,
  ): Promise<AxiosResponse<sdk.TaskResultDtoV2025, any>> {
    return this.electronAPI.deleteAccountsAsync(requestParameters) as Promise<
      AxiosResponse<sdk.TaskResultDtoV2025, any>
    >;
  }
  deleteNativeChangeDetectionConfig(
    requestParameters: sdk.SourcesV2025ApiDeleteNativeChangeDetectionConfigRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteNativeChangeDetectionConfig(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  deleteProvisioningPolicy(
    requestParameters: sdk.SourcesV2025ApiDeleteProvisioningPolicyRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteProvisioningPolicy(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  deleteSource(
    requestParameters: sdk.SourcesV2025ApiDeleteSourceRequest,
  ): Promise<AxiosResponse<sdk.DeleteSource202ResponseV2025, any>> {
    return this.electronAPI.deleteSource(requestParameters) as Promise<
      AxiosResponse<sdk.DeleteSource202ResponseV2025, any>
    >;
  }
  deleteSourceSchedule(
    requestParameters: sdk.SourcesV2025ApiDeleteSourceScheduleRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteSourceSchedule(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  deleteSourceSchema(
    requestParameters: sdk.SourcesV2025ApiDeleteSourceSchemaRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteSourceSchema(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getAccountsSchema(
    requestParameters: sdk.SourcesV2025ApiGetAccountsSchemaRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.getAccountsSchema(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getCorrelationConfig(
    requestParameters: sdk.SourcesV2025ApiGetCorrelationConfigRequest,
  ): Promise<AxiosResponse<sdk.CorrelationConfigV2025, any>> {
    return this.electronAPI.getCorrelationConfig(requestParameters) as Promise<
      AxiosResponse<sdk.CorrelationConfigV2025, any>
    >;
  }
  getEntitlementsSchema(
    requestParameters: sdk.SourcesV2025ApiGetEntitlementsSchemaRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.getEntitlementsSchema(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getNativeChangeDetectionConfig(
    requestParameters: sdk.SourcesV2025ApiGetNativeChangeDetectionConfigRequest,
  ): Promise<AxiosResponse<sdk.NativeChangeDetectionConfigV2025, any>> {
    return this.electronAPI.getNativeChangeDetectionConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.NativeChangeDetectionConfigV2025, any>>;
  }
  getProvisioningPolicy(
    requestParameters: sdk.SourcesV2025ApiGetProvisioningPolicyRequest,
  ): Promise<AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>> {
    return this.electronAPI.getProvisioningPolicy(requestParameters) as Promise<
      AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>
    >;
  }
  getSource(
    requestParameters: sdk.SourcesV2025ApiGetSourceRequest,
  ): Promise<AxiosResponse<sdk.SourceV2025, any>> {
    return this.electronAPI.getSource(requestParameters) as Promise<
      AxiosResponse<sdk.SourceV2025, any>
    >;
  }
  getSourceAttrSyncConfig(
    requestParameters: sdk.SourcesV2025ApiGetSourceAttrSyncConfigRequest,
  ): Promise<AxiosResponse<sdk.AttrSyncSourceConfigV2025, any>> {
    return this.electronAPI.getSourceAttrSyncConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.AttrSyncSourceConfigV2025, any>>;
  }
  getSourceConfig(
    requestParameters: sdk.SourcesV2025ApiGetSourceConfigRequest,
  ): Promise<AxiosResponse<sdk.ConnectorDetailV2025, any>> {
    return this.electronAPI.getSourceConfig(requestParameters) as Promise<
      AxiosResponse<sdk.ConnectorDetailV2025, any>
    >;
  }
  getSourceConnections(
    requestParameters: sdk.SourcesV2025ApiGetSourceConnectionsRequest,
  ): Promise<AxiosResponse<sdk.SourceConnectionsDtoV2025, any>> {
    return this.electronAPI.getSourceConnections(requestParameters) as Promise<
      AxiosResponse<sdk.SourceConnectionsDtoV2025, any>
    >;
  }
  getSourceEntitlementRequestConfig(
    requestParameters: sdk.SourcesV2025ApiGetSourceEntitlementRequestConfigRequest = {},
  ): Promise<AxiosResponse<sdk.SourceEntitlementRequestConfigV2025, any>> {
    return this.electronAPI.getSourceEntitlementRequestConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.SourceEntitlementRequestConfigV2025, any>>;
  }
  getSourceHealth(
    requestParameters: sdk.SourcesV2025ApiGetSourceHealthRequest,
  ): Promise<AxiosResponse<sdk.SourceHealthDtoV2025, any>> {
    return this.electronAPI.getSourceHealth(requestParameters) as Promise<
      AxiosResponse<sdk.SourceHealthDtoV2025, any>
    >;
  }
  getSourceSchedule(
    requestParameters: sdk.SourcesV2025ApiGetSourceScheduleRequest,
  ): Promise<AxiosResponse<sdk.Schedule1V2025, any>> {
    return this.electronAPI.getSourceSchedule(requestParameters) as Promise<
      AxiosResponse<sdk.Schedule1V2025, any>
    >;
  }
  getSourceSchedules(
    requestParameters: sdk.SourcesV2025ApiGetSourceSchedulesRequest,
  ): Promise<AxiosResponse<Array<sdk.Schedule1V2025>, any>> {
    return this.electronAPI.getSourceSchedules(requestParameters) as Promise<
      AxiosResponse<Array<sdk.Schedule1V2025>, any>
    >;
  }
  getSourceSchema(
    requestParameters: sdk.SourcesV2025ApiGetSourceSchemaRequest,
  ): Promise<AxiosResponse<sdk.SchemaV2025, any>> {
    return this.electronAPI.getSourceSchema(requestParameters) as Promise<
      AxiosResponse<sdk.SchemaV2025, any>
    >;
  }
  getSourceSchemas(
    requestParameters: sdk.SourcesV2025ApiGetSourceSchemasRequest,
  ): Promise<AxiosResponse<Array<sdk.SchemaV2025>, any>> {
    return this.electronAPI.getSourceSchemas(requestParameters) as Promise<
      AxiosResponse<Array<sdk.SchemaV2025>, any>
    >;
  }
  importAccounts(
    requestParameters: sdk.SourcesV2025ApiImportAccountsRequest,
  ): Promise<AxiosResponse<sdk.LoadAccountsTaskV2025, any>> {
    return this.electronAPI.importAccounts(requestParameters) as Promise<
      AxiosResponse<sdk.LoadAccountsTaskV2025, any>
    >;
  }
  importAccountsSchema(
    requestParameters: sdk.SourcesV2025ApiImportAccountsSchemaRequest,
  ): Promise<AxiosResponse<sdk.SchemaV2025, any>> {
    return this.electronAPI.importAccountsSchema(requestParameters) as Promise<
      AxiosResponse<sdk.SchemaV2025, any>
    >;
  }
  importConnectorFile(
    requestParameters: sdk.SourcesV2025ApiImportConnectorFileRequest,
  ): Promise<AxiosResponse<sdk.SourceV2025, any>> {
    return this.electronAPI.importConnectorFile(requestParameters) as Promise<
      AxiosResponse<sdk.SourceV2025, any>
    >;
  }
  importEntitlementsSchema(
    requestParameters: sdk.SourcesV2025ApiImportEntitlementsSchemaRequest,
  ): Promise<AxiosResponse<sdk.SchemaV2025, any>> {
    return this.electronAPI.importEntitlementsSchema(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.SchemaV2025, any>>;
  }
  importUncorrelatedAccounts(
    requestParameters: sdk.SourcesV2025ApiImportUncorrelatedAccountsRequest,
  ): Promise<AxiosResponse<sdk.LoadUncorrelatedAccountsTaskV2025, any>> {
    return this.electronAPI.importUncorrelatedAccounts(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.LoadUncorrelatedAccountsTaskV2025, any>>;
  }
  listProvisioningPolicies(
    requestParameters: sdk.SourcesV2025ApiListProvisioningPoliciesRequest,
  ): Promise<AxiosResponse<Array<sdk.ProvisioningPolicyDtoV2025>, any>> {
    return this.electronAPI.listProvisioningPolicies(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.ProvisioningPolicyDtoV2025>, any>>;
  }
  listSources(
    requestParameters: sdk.SourcesV2025ApiListSourcesRequest = {},
  ): Promise<AxiosResponse<Array<sdk.SourceV2025>, any>> {
    return this.electronAPI.listSources(requestParameters) as Promise<
      AxiosResponse<Array<sdk.SourceV2025>, any>
    >;
  }
  pingCluster(
    requestParameters: sdk.SourcesV2025ApiPingClusterRequest,
  ): Promise<AxiosResponse<sdk.StatusResponseV2025, any>> {
    return this.electronAPI.pingCluster(requestParameters) as Promise<
      AxiosResponse<sdk.StatusResponseV2025, any>
    >;
  }
  putCorrelationConfig(
    requestParameters: sdk.SourcesV2025ApiPutCorrelationConfigRequest,
  ): Promise<AxiosResponse<sdk.CorrelationConfigV2025, any>> {
    return this.electronAPI.putCorrelationConfig(requestParameters) as Promise<
      AxiosResponse<sdk.CorrelationConfigV2025, any>
    >;
  }
  putNativeChangeDetectionConfig(
    requestParameters: sdk.SourcesV2025ApiPutNativeChangeDetectionConfigRequest,
  ): Promise<AxiosResponse<sdk.NativeChangeDetectionConfigV2025, any>> {
    return this.electronAPI.putNativeChangeDetectionConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.NativeChangeDetectionConfigV2025, any>>;
  }
  putProvisioningPolicy(
    requestParameters: sdk.SourcesV2025ApiPutProvisioningPolicyRequest,
  ): Promise<AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>> {
    return this.electronAPI.putProvisioningPolicy(requestParameters) as Promise<
      AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>
    >;
  }
  putSource(
    requestParameters: sdk.SourcesV2025ApiPutSourceRequest,
  ): Promise<AxiosResponse<sdk.SourceV2025, any>> {
    return this.electronAPI.putSource(requestParameters) as Promise<
      AxiosResponse<sdk.SourceV2025, any>
    >;
  }
  putSourceAttrSyncConfig(
    requestParameters: sdk.SourcesV2025ApiPutSourceAttrSyncConfigRequest,
  ): Promise<AxiosResponse<sdk.AttrSyncSourceConfigV2025, any>> {
    return this.electronAPI.putSourceAttrSyncConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.AttrSyncSourceConfigV2025, any>>;
  }
  putSourceSchema(
    requestParameters: sdk.SourcesV2025ApiPutSourceSchemaRequest,
  ): Promise<AxiosResponse<sdk.SchemaV2025, any>> {
    return this.electronAPI.putSourceSchema(requestParameters) as Promise<
      AxiosResponse<sdk.SchemaV2025, any>
    >;
  }
  searchResourceObjects(
    requestParameters: sdk.SourcesV2025ApiSearchResourceObjectsRequest,
  ): Promise<AxiosResponse<sdk.ResourceObjectsResponseV2025, any>> {
    return this.electronAPI.searchResourceObjects(requestParameters) as Promise<
      AxiosResponse<sdk.ResourceObjectsResponseV2025, any>
    >;
  }
  syncAttributesForSource(
    requestParameters: sdk.SourcesV2025ApiSyncAttributesForSourceRequest,
  ): Promise<AxiosResponse<sdk.SourceSyncJobV2025, any>> {
    return this.electronAPI.syncAttributesForSource(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.SourceSyncJobV2025, any>>;
  }
  testSourceConfiguration(
    requestParameters: sdk.SourcesV2025ApiTestSourceConfigurationRequest,
  ): Promise<AxiosResponse<sdk.StatusResponseV2025, any>> {
    return this.electronAPI.testSourceConfiguration(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.StatusResponseV2025, any>>;
  }
  testSourceConnection(
    requestParameters: sdk.SourcesV2025ApiTestSourceConnectionRequest,
  ): Promise<AxiosResponse<sdk.StatusResponseV2025, any>> {
    return this.electronAPI.testSourceConnection(requestParameters) as Promise<
      AxiosResponse<sdk.StatusResponseV2025, any>
    >;
  }
  updatePasswordPolicyHolders(
    requestParameters: sdk.SourcesV2025ApiUpdatePasswordPolicyHoldersRequest,
  ): Promise<
    AxiosResponse<Array<sdk.PasswordPolicyHoldersDtoInnerV2025>, any>
  > {
    return this.electronAPI.updatePasswordPolicyHolders(
      requestParameters,
    ) as Promise<
      AxiosResponse<Array<sdk.PasswordPolicyHoldersDtoInnerV2025>, any>
    >;
  }
  updateProvisioningPoliciesInBulk(
    requestParameters: sdk.SourcesV2025ApiUpdateProvisioningPoliciesInBulkRequest,
  ): Promise<AxiosResponse<Array<sdk.ProvisioningPolicyDtoV2025>, any>> {
    return this.electronAPI.updateProvisioningPoliciesInBulk(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.ProvisioningPolicyDtoV2025>, any>>;
  }
  updateProvisioningPolicy(
    requestParameters: sdk.SourcesV2025ApiUpdateProvisioningPolicyRequest,
  ): Promise<AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>> {
    return this.electronAPI.updateProvisioningPolicy(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>>;
  }
  updateSource(
    requestParameters: sdk.SourcesV2025ApiUpdateSourceRequest,
  ): Promise<AxiosResponse<sdk.SourceV2025, any>> {
    return this.electronAPI.updateSource(requestParameters) as Promise<
      AxiosResponse<sdk.SourceV2025, any>
    >;
  }
  updateSourceEntitlementRequestConfig(
    requestParameters: sdk.SourcesV2025ApiUpdateSourceEntitlementRequestConfigRequest,
  ): Promise<AxiosResponse<sdk.SourceEntitlementRequestConfigV2025, any>> {
    return this.electronAPI.updateSourceEntitlementRequestConfig(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.SourceEntitlementRequestConfigV2025, any>>;
  }
  updateSourceSchedule(
    requestParameters: sdk.SourcesV2025ApiUpdateSourceScheduleRequest,
  ): Promise<AxiosResponse<sdk.Schedule1V2025, any>> {
    return this.electronAPI.updateSourceSchedule(requestParameters) as Promise<
      AxiosResponse<sdk.Schedule1V2025, any>
    >;
  }
  updateSourceSchema(
    requestParameters: sdk.SourcesV2025ApiUpdateSourceSchemaRequest,
  ): Promise<AxiosResponse<sdk.SchemaV2025, any>> {
    return this.electronAPI.updateSourceSchema(requestParameters) as Promise<
      AxiosResponse<sdk.SchemaV2025, any>
    >;
  }

  getSedBatchStats(
    requestParameters: sdk.SuggestedEntitlementDescriptionV2025ApiGetSedBatchStatsRequest,
  ): Promise<AxiosResponse<sdk.SedBatchStatsV2025, any>> {
    return this.electronAPI.getSedBatchStats(requestParameters) as Promise<
      AxiosResponse<sdk.SedBatchStatsV2025, any>
    >;
  }
  getSedBatches(): Promise<AxiosResponse<sdk.SedBatchStatusV2025, any>> {
    return this.electronAPI.getSedBatches() as Promise<
      AxiosResponse<sdk.SedBatchStatusV2025, any>
    >;
  }
  listSeds(
    requestParameters: sdk.SuggestedEntitlementDescriptionV2025ApiListSedsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.SedV2025>, any>> {
    return this.electronAPI.listSeds(requestParameters) as Promise<
      AxiosResponse<Array<sdk.SedV2025>, any>
    >;
  }
  patchSed(
    requestParameters: sdk.SuggestedEntitlementDescriptionV2025ApiPatchSedRequest,
  ): Promise<AxiosResponse<sdk.SedV2025, any>> {
    return this.electronAPI.patchSed(requestParameters) as Promise<
      AxiosResponse<sdk.SedV2025, any>
    >;
  }
  submitSedApproval(
    requestParameters: sdk.SuggestedEntitlementDescriptionV2025ApiSubmitSedApprovalRequest,
  ): Promise<AxiosResponse<Array<sdk.SedApprovalStatusV2025>, any>> {
    return this.electronAPI.submitSedApproval(requestParameters) as Promise<
      AxiosResponse<Array<sdk.SedApprovalStatusV2025>, any>
    >;
  }
  submitSedAssignment(
    requestParameters: sdk.SuggestedEntitlementDescriptionV2025ApiSubmitSedAssignmentRequest,
  ): Promise<AxiosResponse<sdk.SedAssignmentResponseV2025, any>> {
    return this.electronAPI.submitSedAssignment(requestParameters) as Promise<
      AxiosResponse<sdk.SedAssignmentResponseV2025, any>
    >;
  }
  submitSedBatchRequest(
    requestParameters: sdk.SuggestedEntitlementDescriptionV2025ApiSubmitSedBatchRequestRequest = {},
  ): Promise<AxiosResponse<sdk.SedBatchResponseV2025, any>> {
    return this.electronAPI.submitSedBatchRequest(requestParameters) as Promise<
      AxiosResponse<sdk.SedBatchResponseV2025, any>
    >;
  }

  deleteTaggedObject(
    requestParameters: sdk.TaggedObjectsV2025ApiDeleteTaggedObjectRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteTaggedObject(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  deleteTagsToManyObject(
    requestParameters: sdk.TaggedObjectsV2025ApiDeleteTagsToManyObjectRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteTagsToManyObject(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  getTaggedObject(
    requestParameters: sdk.TaggedObjectsV2025ApiGetTaggedObjectRequest,
  ): Promise<AxiosResponse<sdk.TaggedObjectV2025, any>> {
    return this.electronAPI.getTaggedObject(requestParameters) as Promise<
      AxiosResponse<sdk.TaggedObjectV2025, any>
    >;
  }
  listTaggedObjects(
    requestParameters: sdk.TaggedObjectsV2025ApiListTaggedObjectsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.TaggedObjectV2025>, any>> {
    return this.electronAPI.listTaggedObjects(requestParameters) as Promise<
      AxiosResponse<Array<sdk.TaggedObjectV2025>, any>
    >;
  }
  listTaggedObjectsByType(
    requestParameters: sdk.TaggedObjectsV2025ApiListTaggedObjectsByTypeRequest,
  ): Promise<AxiosResponse<Array<sdk.TaggedObjectV2025>, any>> {
    return this.electronAPI.listTaggedObjectsByType(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.TaggedObjectV2025>, any>>;
  }
  putTaggedObject(
    requestParameters: sdk.TaggedObjectsV2025ApiPutTaggedObjectRequest,
  ): Promise<AxiosResponse<sdk.TaggedObjectV2025, any>> {
    return this.electronAPI.putTaggedObject(requestParameters) as Promise<
      AxiosResponse<sdk.TaggedObjectV2025, any>
    >;
  }
  setTagToObject(
    requestParameters: sdk.TaggedObjectsV2025ApiSetTagToObjectRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.setTagToObject(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  setTagsToManyObjects(
    requestParameters: sdk.TaggedObjectsV2025ApiSetTagsToManyObjectsRequest,
  ): Promise<AxiosResponse<Array<sdk.BulkTaggedObjectResponseV2025>, any>> {
    return this.electronAPI.setTagsToManyObjects(requestParameters) as Promise<
      AxiosResponse<Array<sdk.BulkTaggedObjectResponseV2025>, any>
    >;
  }

  getPendingTaskHeaders(
    requestParameters: sdk.TaskManagementV2025ApiGetPendingTaskHeadersRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.getPendingTaskHeaders(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getPendingTasks(
    requestParameters: sdk.TaskManagementV2025ApiGetPendingTasksRequest = {},
  ): Promise<AxiosResponse<Array<sdk.TaskStatusV2025>, any>> {
    return this.electronAPI.getPendingTasks(requestParameters) as Promise<
      AxiosResponse<Array<sdk.TaskStatusV2025>, any>
    >;
  }
  getTaskStatus(
    requestParameters: sdk.TaskManagementV2025ApiGetTaskStatusRequest,
  ): Promise<AxiosResponse<sdk.TaskStatusV2025, any>> {
    return this.electronAPI.getTaskStatus(requestParameters) as Promise<
      AxiosResponse<sdk.TaskStatusV2025, any>
    >;
  }
  getTaskStatusList(
    requestParameters: sdk.TaskManagementV2025ApiGetTaskStatusListRequest = {},
  ): Promise<AxiosResponse<Array<sdk.TaskStatusV2025>, any>> {
    return this.electronAPI.getTaskStatusList(requestParameters) as Promise<
      AxiosResponse<Array<sdk.TaskStatusV2025>, any>
    >;
  }
  updateTaskStatus(
    requestParameters: sdk.TaskManagementV2025ApiUpdateTaskStatusRequest,
  ): Promise<AxiosResponse<sdk.TaskStatusV2025, any>> {
    return this.electronAPI.updateTaskStatus(requestParameters) as Promise<
      AxiosResponse<sdk.TaskStatusV2025, any>
    >;
  }

  getTenant(): Promise<AxiosResponse<sdk.TenantV2025, any>> {
    return this.electronAPI.getTenant() as Promise<
      AxiosResponse<sdk.TenantV2025, any>
    >;
  }

  getTenantContext(
    requestParameters: sdk.TenantContextV2025ApiGetTenantContextRequest = {},
  ): Promise<
    AxiosResponse<Array<sdk.GetTenantContext200ResponseInnerV2025>, any>
  > {
    return this.electronAPI.getTenantContext(requestParameters) as Promise<
      AxiosResponse<Array<sdk.GetTenantContext200ResponseInnerV2025>, any>
    >;
  }
  patchTenantContext(
    requestParameters: sdk.TenantContextV2025ApiPatchTenantContextRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.patchTenantContext(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }

  createTransform(
    requestParameters: sdk.TransformsV2025ApiCreateTransformRequest,
  ): Promise<AxiosResponse<sdk.TransformReadV2025, any>> {
    return this.electronAPI.createTransform(requestParameters) as Promise<
      AxiosResponse<sdk.TransformReadV2025, any>
    >;
  }
  deleteTransform(
    requestParameters: sdk.TransformsV2025ApiDeleteTransformRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteTransform(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getTransform(
    requestParameters: sdk.TransformsV2025ApiGetTransformRequest,
  ): Promise<AxiosResponse<sdk.TransformReadV2025, any>> {
    return this.electronAPI.getTransform(requestParameters) as Promise<
      AxiosResponse<sdk.TransformReadV2025, any>
    >;
  }
  listTransforms(
    requestParameters: sdk.TransformsV2025ApiListTransformsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.TransformReadV2025>, any>> {
    return this.electronAPI.listTransforms(requestParameters) as Promise<
      AxiosResponse<Array<sdk.TransformReadV2025>, any>
    >;
  }
  updateTransform(
    requestParameters: sdk.TransformsV2025ApiUpdateTransformRequest,
  ): Promise<AxiosResponse<sdk.TransformReadV2025, any>> {
    return this.electronAPI.updateTransform(requestParameters) as Promise<
      AxiosResponse<sdk.TransformReadV2025, any>
    >;
  }

  completeTriggerInvocation(
    requestParameters: sdk.TriggersV2025ApiCompleteTriggerInvocationRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.completeTriggerInvocation(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  createSubscription(
    requestParameters: sdk.TriggersV2025ApiCreateSubscriptionRequest,
  ): Promise<AxiosResponse<sdk.SubscriptionV2025, any>> {
    return this.electronAPI.createSubscription(requestParameters) as Promise<
      AxiosResponse<sdk.SubscriptionV2025, any>
    >;
  }
  deleteSubscription(
    requestParameters: sdk.TriggersV2025ApiDeleteSubscriptionRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteSubscription(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  listSubscriptions(
    requestParameters: sdk.TriggersV2025ApiListSubscriptionsRequest,
  ): Promise<AxiosResponse<Array<sdk.SubscriptionV2025>, any>> {
    return this.electronAPI.listSubscriptions(requestParameters) as Promise<
      AxiosResponse<Array<sdk.SubscriptionV2025>, any>
    >;
  }
  listTriggerInvocationStatus(
    requestParameters: sdk.TriggersV2025ApiListTriggerInvocationStatusRequest = {},
  ): Promise<AxiosResponse<Array<sdk.InvocationStatusV2025>, any>> {
    return this.electronAPI.listTriggerInvocationStatus(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.InvocationStatusV2025>, any>>;
  }
  listTriggers(
    requestParameters: sdk.TriggersV2025ApiListTriggersRequest = {},
  ): Promise<AxiosResponse<Array<sdk.TriggerV2025>, any>> {
    return this.electronAPI.listTriggers(requestParameters) as Promise<
      AxiosResponse<Array<sdk.TriggerV2025>, any>
    >;
  }
  patchSubscription(
    requestParameters: sdk.TriggersV2025ApiPatchSubscriptionRequest,
  ): Promise<AxiosResponse<sdk.SubscriptionV2025, any>> {
    return this.electronAPI.patchSubscription(requestParameters) as Promise<
      AxiosResponse<sdk.SubscriptionV2025, any>
    >;
  }
  startTestTriggerInvocation(
    requestParameters: sdk.TriggersV2025ApiStartTestTriggerInvocationRequest,
  ): Promise<AxiosResponse<Array<sdk.InvocationV2025>, any>> {
    return this.electronAPI.startTestTriggerInvocation(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.InvocationV2025>, any>>;
  }
  testSubscriptionFilter(
    requestParameters: sdk.TriggersV2025ApiTestSubscriptionFilterRequest,
  ): Promise<AxiosResponse<sdk.ValidateFilterOutputDtoV2025, any>> {
    return this.electronAPI.testSubscriptionFilter(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ValidateFilterOutputDtoV2025, any>>;
  }
  updateSubscription(
    requestParameters: sdk.TriggersV2025ApiUpdateSubscriptionRequest,
  ): Promise<AxiosResponse<sdk.SubscriptionV2025, any>> {
    return this.electronAPI.updateSubscription(requestParameters) as Promise<
      AxiosResponse<sdk.SubscriptionV2025, any>
    >;
  }

  getTenantUiMetadata(
    requestParameters: sdk.UIMetadataV2025ApiGetTenantUiMetadataRequest = {},
  ): Promise<AxiosResponse<sdk.TenantUiMetadataItemResponseV2025, any>> {
    return this.electronAPI.getTenantUiMetadata(requestParameters) as Promise<
      AxiosResponse<sdk.TenantUiMetadataItemResponseV2025, any>
    >;
  }
  setTenantUiMetadata(
    requestParameters: sdk.UIMetadataV2025ApiSetTenantUiMetadataRequest,
  ): Promise<AxiosResponse<sdk.TenantUiMetadataItemResponseV2025, any>> {
    return this.electronAPI.setTenantUiMetadata(requestParameters) as Promise<
      AxiosResponse<sdk.TenantUiMetadataItemResponseV2025, any>
    >;
  }

  createVendorConnectorMapping(
    requestParameters: sdk.VendorConnectorMappingsV2025ApiCreateVendorConnectorMappingRequest,
  ): Promise<AxiosResponse<sdk.VendorConnectorMappingV2025, any>> {
    return this.electronAPI.createVendorConnectorMapping(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.VendorConnectorMappingV2025, any>>;
  }
  deleteVendorConnectorMapping(
    requestParameters: sdk.VendorConnectorMappingsV2025ApiDeleteVendorConnectorMappingRequest,
  ): Promise<
    AxiosResponse<sdk.DeleteVendorConnectorMapping200ResponseV2025, any>
  > {
    return this.electronAPI.deleteVendorConnectorMapping(
      requestParameters,
    ) as Promise<
      AxiosResponse<sdk.DeleteVendorConnectorMapping200ResponseV2025, any>
    >;
  }
  getVendorConnectorMappings(): Promise<
    AxiosResponse<Array<sdk.VendorConnectorMappingV2025>, any>
  > {
    return this.electronAPI.getVendorConnectorMappings() as Promise<
      AxiosResponse<Array<sdk.VendorConnectorMappingV2025>, any>
    >;
  }

  approveApprovalItem(
    requestParameters: sdk.WorkItemsV2025ApiApproveApprovalItemRequest,
  ): Promise<AxiosResponse<sdk.WorkItemsV2025, any>> {
    return this.electronAPI.approveApprovalItem(requestParameters) as Promise<
      AxiosResponse<sdk.WorkItemsV2025, any>
    >;
  }
  approveApprovalItemsInBulk(
    requestParameters: sdk.WorkItemsV2025ApiApproveApprovalItemsInBulkRequest,
  ): Promise<AxiosResponse<sdk.WorkItemsV2025, any>> {
    return this.electronAPI.approveApprovalItemsInBulk(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.WorkItemsV2025, any>>;
  }
  completeWorkItem(
    requestParameters: sdk.WorkItemsV2025ApiCompleteWorkItemRequest,
  ): Promise<AxiosResponse<sdk.WorkItemsV2025, any>> {
    return this.electronAPI.completeWorkItem(requestParameters) as Promise<
      AxiosResponse<sdk.WorkItemsV2025, any>
    >;
  }
  forwardWorkItem(
    requestParameters: sdk.WorkItemsV2025ApiForwardWorkItemRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.forwardWorkItem(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getCompletedWorkItems(
    requestParameters: sdk.WorkItemsV2025ApiGetCompletedWorkItemsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.WorkItemsV2025>, any>> {
    return this.electronAPI.getCompletedWorkItems(requestParameters) as Promise<
      AxiosResponse<Array<sdk.WorkItemsV2025>, any>
    >;
  }
  getCountCompletedWorkItems(
    requestParameters: sdk.WorkItemsV2025ApiGetCountCompletedWorkItemsRequest = {},
  ): Promise<AxiosResponse<sdk.WorkItemsCountV2025, any>> {
    return this.electronAPI.getCountCompletedWorkItems(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.WorkItemsCountV2025, any>>;
  }
  getCountWorkItems(
    requestParameters: sdk.WorkItemsV2025ApiGetCountWorkItemsRequest = {},
  ): Promise<AxiosResponse<sdk.WorkItemsCountV2025, any>> {
    return this.electronAPI.getCountWorkItems(requestParameters) as Promise<
      AxiosResponse<sdk.WorkItemsCountV2025, any>
    >;
  }
  getWorkItem(
    requestParameters: sdk.WorkItemsV2025ApiGetWorkItemRequest,
  ): Promise<AxiosResponse<sdk.WorkItemsV2025, any>> {
    return this.electronAPI.getWorkItem(requestParameters) as Promise<
      AxiosResponse<sdk.WorkItemsV2025, any>
    >;
  }
  getWorkItemsSummary(
    requestParameters: sdk.WorkItemsV2025ApiGetWorkItemsSummaryRequest = {},
  ): Promise<AxiosResponse<sdk.WorkItemsSummaryV2025, any>> {
    return this.electronAPI.getWorkItemsSummary(requestParameters) as Promise<
      AxiosResponse<sdk.WorkItemsSummaryV2025, any>
    >;
  }
  listWorkItems(
    requestParameters: sdk.WorkItemsV2025ApiListWorkItemsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.WorkItemsV2025>, any>> {
    return this.electronAPI.listWorkItems(requestParameters) as Promise<
      AxiosResponse<Array<sdk.WorkItemsV2025>, any>
    >;
  }
  rejectApprovalItem(
    requestParameters: sdk.WorkItemsV2025ApiRejectApprovalItemRequest,
  ): Promise<AxiosResponse<sdk.WorkItemsV2025, any>> {
    return this.electronAPI.rejectApprovalItem(requestParameters) as Promise<
      AxiosResponse<sdk.WorkItemsV2025, any>
    >;
  }
  rejectApprovalItemsInBulk(
    requestParameters: sdk.WorkItemsV2025ApiRejectApprovalItemsInBulkRequest,
  ): Promise<AxiosResponse<sdk.WorkItemsV2025, any>> {
    return this.electronAPI.rejectApprovalItemsInBulk(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.WorkItemsV2025, any>>;
  }
  submitAccountSelection(
    requestParameters: sdk.WorkItemsV2025ApiSubmitAccountSelectionRequest,
  ): Promise<AxiosResponse<sdk.WorkItemsV2025, any>> {
    return this.electronAPI.submitAccountSelection(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.WorkItemsV2025, any>>;
  }

  createReassignmentConfiguration(
    requestParameters: sdk.WorkReassignmentV2025ApiCreateReassignmentConfigurationRequest,
  ): Promise<AxiosResponse<sdk.ConfigurationItemResponseV2025, any>> {
    return this.electronAPI.createReassignmentConfiguration(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ConfigurationItemResponseV2025, any>>;
  }
  deleteReassignmentConfiguration(
    requestParameters: sdk.WorkReassignmentV2025ApiDeleteReassignmentConfigurationRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteReassignmentConfiguration(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  getEvaluateReassignmentConfiguration(
    requestParameters: sdk.WorkReassignmentV2025ApiGetEvaluateReassignmentConfigurationRequest,
  ): Promise<AxiosResponse<Array<sdk.EvaluateResponseV2025>, any>> {
    return this.electronAPI.getEvaluateReassignmentConfiguration(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.EvaluateResponseV2025>, any>>;
  }
  getReassignmentConfigTypes(
    requestParameters: sdk.WorkReassignmentV2025ApiGetReassignmentConfigTypesRequest = {},
  ): Promise<AxiosResponse<Array<sdk.ConfigTypeV2025>, any>> {
    return this.electronAPI.getReassignmentConfigTypes(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.ConfigTypeV2025>, any>>;
  }
  getReassignmentConfiguration(
    requestParameters: sdk.WorkReassignmentV2025ApiGetReassignmentConfigurationRequest,
  ): Promise<AxiosResponse<sdk.ConfigurationResponseV2025, any>> {
    return this.electronAPI.getReassignmentConfiguration(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.ConfigurationResponseV2025, any>>;
  }
  getTenantConfigConfiguration(
    requestParameters: sdk.WorkReassignmentV2025ApiGetTenantConfigConfigurationRequest = {},
  ): Promise<AxiosResponse<sdk.TenantConfigurationResponseV2025, any>> {
    return this.electronAPI.getTenantConfigConfiguration(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.TenantConfigurationResponseV2025, any>>;
  }
  listReassignmentConfigurations(
    requestParameters: sdk.WorkReassignmentV2025ApiListReassignmentConfigurationsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.ConfigurationResponseV2025>, any>> {
    return this.electronAPI.listReassignmentConfigurations(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.ConfigurationResponseV2025>, any>>;
  }
  putReassignmentConfig(
    requestParameters: sdk.WorkReassignmentV2025ApiPutReassignmentConfigRequest,
  ): Promise<AxiosResponse<sdk.ConfigurationItemResponseV2025, any>> {
    return this.electronAPI.putReassignmentConfig(requestParameters) as Promise<
      AxiosResponse<sdk.ConfigurationItemResponseV2025, any>
    >;
  }
  putTenantConfiguration(
    requestParameters: sdk.WorkReassignmentV2025ApiPutTenantConfigurationRequest,
  ): Promise<AxiosResponse<sdk.TenantConfigurationResponseV2025, any>> {
    return this.electronAPI.putTenantConfiguration(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.TenantConfigurationResponseV2025, any>>;
  }

  cancelWorkflowExecution(
    requestParameters: sdk.WorkflowsV2025ApiCancelWorkflowExecutionRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.cancelWorkflowExecution(
      requestParameters,
    ) as Promise<AxiosResponse<void, any>>;
  }
  createExternalExecuteWorkflow(
    requestParameters: sdk.WorkflowsV2025ApiCreateExternalExecuteWorkflowRequest,
  ): Promise<
    AxiosResponse<sdk.CreateExternalExecuteWorkflow200ResponseV2025, any>
  > {
    return this.electronAPI.createExternalExecuteWorkflow(
      requestParameters,
    ) as Promise<
      AxiosResponse<sdk.CreateExternalExecuteWorkflow200ResponseV2025, any>
    >;
  }
  createWorkflow(
    requestParameters: sdk.WorkflowsV2025ApiCreateWorkflowRequest,
  ): Promise<AxiosResponse<sdk.WorkflowV2025, any>> {
    return this.electronAPI.createWorkflow(requestParameters) as Promise<
      AxiosResponse<sdk.WorkflowV2025, any>
    >;
  }
  createWorkflowExternalTrigger(
    requestParameters: sdk.WorkflowsV2025ApiCreateWorkflowExternalTriggerRequest,
  ): Promise<AxiosResponse<sdk.WorkflowOAuthClientV2025, any>> {
    return this.electronAPI.createWorkflowExternalTrigger(
      requestParameters,
    ) as Promise<AxiosResponse<sdk.WorkflowOAuthClientV2025, any>>;
  }
  deleteWorkflow(
    requestParameters: sdk.WorkflowsV2025ApiDeleteWorkflowRequest,
  ): Promise<AxiosResponse<void, any>> {
    return this.electronAPI.deleteWorkflow(requestParameters) as Promise<
      AxiosResponse<void, any>
    >;
  }
  getWorkflow(
    requestParameters: sdk.WorkflowsV2025ApiGetWorkflowRequest,
  ): Promise<AxiosResponse<sdk.WorkflowV2025, any>> {
    return this.electronAPI.getWorkflow(requestParameters) as Promise<
      AxiosResponse<sdk.WorkflowV2025, any>
    >;
  }
  getWorkflowExecution(
    requestParameters: sdk.WorkflowsV2025ApiGetWorkflowExecutionRequest,
  ): Promise<AxiosResponse<object, any>> {
    return this.electronAPI.getWorkflowExecution(requestParameters) as Promise<
      AxiosResponse<object, any>
    >;
  }
  getWorkflowExecutionHistory(
    requestParameters: sdk.WorkflowsV2025ApiGetWorkflowExecutionHistoryRequest,
  ): Promise<AxiosResponse<Array<sdk.WorkflowExecutionEventV2025>, any>> {
    return this.electronAPI.getWorkflowExecutionHistory(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.WorkflowExecutionEventV2025>, any>>;
  }
  getWorkflowExecutions(
    requestParameters: sdk.WorkflowsV2025ApiGetWorkflowExecutionsRequest,
  ): Promise<AxiosResponse<Array<sdk.WorkflowExecutionV2025>, any>> {
    return this.electronAPI.getWorkflowExecutions(requestParameters) as Promise<
      AxiosResponse<Array<sdk.WorkflowExecutionV2025>, any>
    >;
  }
  listCompleteWorkflowLibrary(
    requestParameters: sdk.WorkflowsV2025ApiListCompleteWorkflowLibraryRequest = {},
  ): Promise<
    AxiosResponse<
      Array<sdk.ListCompleteWorkflowLibrary200ResponseInnerV2025>,
      any
    >
  > {
    return this.electronAPI.listCompleteWorkflowLibrary(
      requestParameters,
    ) as Promise<
      AxiosResponse<
        Array<sdk.ListCompleteWorkflowLibrary200ResponseInnerV2025>,
        any
      >
    >;
  }
  listWorkflowLibraryActions(
    requestParameters: sdk.WorkflowsV2025ApiListWorkflowLibraryActionsRequest = {},
  ): Promise<AxiosResponse<Array<sdk.WorkflowLibraryActionV2025>, any>> {
    return this.electronAPI.listWorkflowLibraryActions(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.WorkflowLibraryActionV2025>, any>>;
  }
  listWorkflowLibraryOperators(): Promise<
    AxiosResponse<Array<sdk.WorkflowLibraryOperatorV2025>, any>
  > {
    return this.electronAPI.listWorkflowLibraryOperators() as Promise<
      AxiosResponse<Array<sdk.WorkflowLibraryOperatorV2025>, any>
    >;
  }
  listWorkflowLibraryTriggers(
    requestParameters: sdk.WorkflowsV2025ApiListWorkflowLibraryTriggersRequest = {},
  ): Promise<AxiosResponse<Array<sdk.WorkflowLibraryTriggerV2025>, any>> {
    return this.electronAPI.listWorkflowLibraryTriggers(
      requestParameters,
    ) as Promise<AxiosResponse<Array<sdk.WorkflowLibraryTriggerV2025>, any>>;
  }
  listWorkflows(): Promise<AxiosResponse<Array<sdk.WorkflowV2025>, any>> {
    return this.electronAPI.listWorkflows() as Promise<
      AxiosResponse<Array<sdk.WorkflowV2025>, any>
    >;
  }
  patchWorkflow(
    requestParameters: sdk.WorkflowsV2025ApiPatchWorkflowRequest,
  ): Promise<AxiosResponse<sdk.WorkflowV2025, any>> {
    return this.electronAPI.patchWorkflow(requestParameters) as Promise<
      AxiosResponse<sdk.WorkflowV2025, any>
    >;
  }
  putWorkflow(
    requestParameters: sdk.WorkflowsV2025ApiPutWorkflowRequest,
  ): Promise<AxiosResponse<sdk.WorkflowV2025, any>> {
    return this.electronAPI.putWorkflow(requestParameters) as Promise<
      AxiosResponse<sdk.WorkflowV2025, any>
    >;
  }
  testExternalExecuteWorkflow(
    requestParameters: sdk.WorkflowsV2025ApiTestExternalExecuteWorkflowRequest,
  ): Promise<
    AxiosResponse<sdk.TestExternalExecuteWorkflow200ResponseV2025, any>
  > {
    return this.electronAPI.testExternalExecuteWorkflow(
      requestParameters,
    ) as Promise<
      AxiosResponse<sdk.TestExternalExecuteWorkflow200ResponseV2025, any>
    >;
  }
  testWorkflow(
    requestParameters: sdk.WorkflowsV2025ApiTestWorkflowRequest,
  ): Promise<AxiosResponse<sdk.TestWorkflow200ResponseV2025, any>> {
    return this.electronAPI.testWorkflow(requestParameters) as Promise<
      AxiosResponse<sdk.TestWorkflow200ResponseV2025, any>
    >;
  }
}
