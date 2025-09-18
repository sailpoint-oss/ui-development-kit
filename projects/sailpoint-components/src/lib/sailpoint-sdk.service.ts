import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AxiosResponse } from 'axios';
import * as sdk from 'sailpoint-api-client';
import { ElectronApiFactoryService } from './services/electron-api-factory.service';

@Injectable({
  providedIn: 'root'
})
export class SailPointSDKService {
  private electronAPI: any;

  constructor(private apiFactory: ElectronApiFactoryService, private router: Router) {
    this.electronAPI = this.apiFactory.getApi();
  }

  private async checkSessionBeforeCall(): Promise<void> {
    try {
      const sessionStatus = await this.electronAPI.checkAccessTokenStatus();
      if (sessionStatus && sessionStatus.expiry) {
        const now = new Date();
        const expiryDate = new Date(sessionStatus.expiry);
        
        if (now >= expiryDate) {
          console.log('Session expired during SDK call - notifying electron');
          const refreshState = await this.electronAPI.refreshTokens();
          if (!refreshState.success) {
            console.error('Token refresh failed:', refreshState.error);
            this.router.navigate(['/home']).catch((error) => {
                console.error('Navigation error:', error);
              });
          }
        }
      } else {
        console.log('No valid session - navigating to home');
        this.router.navigate(['/home']).catch((error) => {
            console.error('Navigation error:', error);
          });
      }
    } catch (error) {
      console.error('Error checking session status:', error);
      throw error;
    }
  }


async getAccessModelMetadataAttribute(requestParameters: sdk.AccessModelMetadataV2025ApiGetAccessModelMetadataAttributeRequest): Promise<AxiosResponse<sdk.AttributeDTOV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessModelMetadataAttribute(requestParameters) as Promise<AxiosResponse<sdk.AttributeDTOV2025, any>>;
}
async getAccessModelMetadataAttributeValue(requestParameters: sdk.AccessModelMetadataV2025ApiGetAccessModelMetadataAttributeValueRequest): Promise<AxiosResponse<sdk.AttributeValueDTOV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessModelMetadataAttributeValue(requestParameters) as Promise<AxiosResponse<sdk.AttributeValueDTOV2025, any>>;
}
async listAccessModelMetadataAttribute(requestParameters: sdk.AccessModelMetadataV2025ApiListAccessModelMetadataAttributeRequest = {}): Promise<AxiosResponse<Array<sdk.AttributeDTOV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAccessModelMetadataAttribute(requestParameters) as Promise<AxiosResponse<Array<sdk.AttributeDTOV2025>, any>>;
}
async listAccessModelMetadataAttributeValue(requestParameters: sdk.AccessModelMetadataV2025ApiListAccessModelMetadataAttributeValueRequest): Promise<AxiosResponse<Array<sdk.AttributeValueDTOV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAccessModelMetadataAttributeValue(requestParameters) as Promise<AxiosResponse<Array<sdk.AttributeValueDTOV2025>, any>>;
}
async updateAccessModelMetadataByFilter(requestParameters: sdk.AccessModelMetadataV2025ApiUpdateAccessModelMetadataByFilterRequest): Promise<AxiosResponse<sdk.AccessModelMetadataBulkUpdateResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateAccessModelMetadataByFilter(requestParameters) as Promise<AxiosResponse<sdk.AccessModelMetadataBulkUpdateResponseV2025, any>>;
}
async updateAccessModelMetadataByIds(requestParameters: sdk.AccessModelMetadataV2025ApiUpdateAccessModelMetadataByIdsRequest): Promise<AxiosResponse<sdk.AccessModelMetadataBulkUpdateResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateAccessModelMetadataByIds(requestParameters) as Promise<AxiosResponse<sdk.AccessModelMetadataBulkUpdateResponseV2025, any>>;
}
async updateAccessModelMetadataByQuery(requestParameters: sdk.AccessModelMetadataV2025ApiUpdateAccessModelMetadataByQueryRequest): Promise<AxiosResponse<sdk.AccessModelMetadataBulkUpdateResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateAccessModelMetadataByQuery(requestParameters) as Promise<AxiosResponse<sdk.AccessModelMetadataBulkUpdateResponseV2025, any>>;
}

async createAccessProfile(requestParameters: sdk.AccessProfilesV2025ApiCreateAccessProfileRequest): Promise<AxiosResponse<sdk.AccessProfileV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createAccessProfile(requestParameters) as Promise<AxiosResponse<sdk.AccessProfileV2025, any>>;
}
async deleteAccessProfile(requestParameters: sdk.AccessProfilesV2025ApiDeleteAccessProfileRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteAccessProfile(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteAccessProfilesInBulk(requestParameters: sdk.AccessProfilesV2025ApiDeleteAccessProfilesInBulkRequest): Promise<AxiosResponse<sdk.AccessProfileBulkDeleteResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteAccessProfilesInBulk(requestParameters) as Promise<AxiosResponse<sdk.AccessProfileBulkDeleteResponseV2025, any>>;
}
async getAccessProfile(requestParameters: sdk.AccessProfilesV2025ApiGetAccessProfileRequest): Promise<AxiosResponse<sdk.AccessProfileV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessProfile(requestParameters) as Promise<AxiosResponse<sdk.AccessProfileV2025, any>>;
}
async getAccessProfileEntitlements(requestParameters: sdk.AccessProfilesV2025ApiGetAccessProfileEntitlementsRequest): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessProfileEntitlements(requestParameters) as Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>>;
}
async listAccessProfiles(requestParameters: sdk.AccessProfilesV2025ApiListAccessProfilesRequest = {}): Promise<AxiosResponse<Array<sdk.AccessProfileV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAccessProfiles(requestParameters) as Promise<AxiosResponse<Array<sdk.AccessProfileV2025>, any>>;
}
async patchAccessProfile(requestParameters: sdk.AccessProfilesV2025ApiPatchAccessProfileRequest): Promise<AxiosResponse<sdk.AccessProfileV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchAccessProfile(requestParameters) as Promise<AxiosResponse<sdk.AccessProfileV2025, any>>;
}
async updateAccessProfilesInBulk(requestParameters: sdk.AccessProfilesV2025ApiUpdateAccessProfilesInBulkRequest): Promise<AxiosResponse<Array<sdk.AccessProfileUpdateItemV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateAccessProfilesInBulk(requestParameters) as Promise<AxiosResponse<Array<sdk.AccessProfileUpdateItemV2025>, any>>;
}

async approveAccessRequest(requestParameters: sdk.AccessRequestApprovalsV2025ApiApproveAccessRequestRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.approveAccessRequest(requestParameters) as Promise<AxiosResponse<object, any>>;
}
async forwardAccessRequest(requestParameters: sdk.AccessRequestApprovalsV2025ApiForwardAccessRequestRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.forwardAccessRequest(requestParameters) as Promise<AxiosResponse<object, any>>;
}
async getAccessRequestApprovalSummary(requestParameters: sdk.AccessRequestApprovalsV2025ApiGetAccessRequestApprovalSummaryRequest = {}): Promise<AxiosResponse<sdk.ApprovalSummaryV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessRequestApprovalSummary(requestParameters) as Promise<AxiosResponse<sdk.ApprovalSummaryV2025, any>>;
}
async listAccessRequestApprovers(requestParameters: sdk.AccessRequestApprovalsV2025ApiListAccessRequestApproversRequest): Promise<AxiosResponse<Array<sdk.AccessRequestApproversListResponseV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAccessRequestApprovers(requestParameters) as Promise<AxiosResponse<Array<sdk.AccessRequestApproversListResponseV2025>, any>>;
}
async listCompletedApprovals(requestParameters: sdk.AccessRequestApprovalsV2025ApiListCompletedApprovalsRequest = {}): Promise<AxiosResponse<Array<sdk.CompletedApprovalV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listCompletedApprovals(requestParameters) as Promise<AxiosResponse<Array<sdk.CompletedApprovalV2025>, any>>;
}
async listPendingApprovals(requestParameters: sdk.AccessRequestApprovalsV2025ApiListPendingApprovalsRequest = {}): Promise<AxiosResponse<Array<sdk.PendingApprovalV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listPendingApprovals(requestParameters) as Promise<AxiosResponse<Array<sdk.PendingApprovalV2025>, any>>;
}
async rejectAccessRequest(requestParameters: sdk.AccessRequestApprovalsV2025ApiRejectAccessRequestRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.rejectAccessRequest(requestParameters) as Promise<AxiosResponse<object, any>>;
}

async getAccessRequestIdentityMetrics(requestParameters: sdk.AccessRequestIdentityMetricsV2025ApiGetAccessRequestIdentityMetricsRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessRequestIdentityMetrics(requestParameters) as Promise<AxiosResponse<object, any>>;
}

async approveBulkAccessRequest(requestParameters: sdk.AccessRequestsV2025ApiApproveBulkAccessRequestRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.approveBulkAccessRequest(requestParameters) as Promise<AxiosResponse<object, any>>;
}
async cancelAccessRequest(requestParameters: sdk.AccessRequestsV2025ApiCancelAccessRequestRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.cancelAccessRequest(requestParameters) as Promise<AxiosResponse<object, any>>;
}
async cancelAccessRequestInBulk(requestParameters: sdk.AccessRequestsV2025ApiCancelAccessRequestInBulkRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.cancelAccessRequestInBulk(requestParameters) as Promise<AxiosResponse<object, any>>;
}
async closeAccessRequest(requestParameters: sdk.AccessRequestsV2025ApiCloseAccessRequestRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.closeAccessRequest(requestParameters) as Promise<AxiosResponse<object, any>>;
}
async createAccessRequest(requestParameters: sdk.AccessRequestsV2025ApiCreateAccessRequestRequest): Promise<AxiosResponse<sdk.AccessRequestResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createAccessRequest(requestParameters) as Promise<AxiosResponse<sdk.AccessRequestResponseV2025, any>>;
}
async getAccessRequestConfig(): Promise<AxiosResponse<sdk.AccessRequestConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessRequestConfig() as Promise<AxiosResponse<sdk.AccessRequestConfigV2025, any>>;
}
async getEntitlementDetailsForIdentity(requestParameters: sdk.AccessRequestsV2025ApiGetEntitlementDetailsForIdentityRequest): Promise<AxiosResponse<sdk.IdentityEntitlementDetailsV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getEntitlementDetailsForIdentity(requestParameters) as Promise<AxiosResponse<sdk.IdentityEntitlementDetailsV2025, any>>;
}
async listAccessRequestStatus(requestParameters: sdk.AccessRequestsV2025ApiListAccessRequestStatusRequest = {}): Promise<AxiosResponse<Array<sdk.RequestedItemStatusV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAccessRequestStatus(requestParameters) as Promise<AxiosResponse<Array<sdk.RequestedItemStatusV2025>, any>>;
}
async listAdministratorsAccessRequestStatus(requestParameters: sdk.AccessRequestsV2025ApiListAdministratorsAccessRequestStatusRequest): Promise<AxiosResponse<Array<sdk.AccessRequestAdminItemStatusV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAdministratorsAccessRequestStatus(requestParameters) as Promise<AxiosResponse<Array<sdk.AccessRequestAdminItemStatusV2025>, any>>;
}
async loadAccountSelections(requestParameters: sdk.AccessRequestsV2025ApiLoadAccountSelectionsRequest): Promise<AxiosResponse<sdk.AccountsSelectionResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.loadAccountSelections(requestParameters) as Promise<AxiosResponse<sdk.AccountsSelectionResponseV2025, any>>;
}
async setAccessRequestConfig(requestParameters: sdk.AccessRequestsV2025ApiSetAccessRequestConfigRequest): Promise<AxiosResponse<sdk.AccessRequestConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setAccessRequestConfig(requestParameters) as Promise<AxiosResponse<sdk.AccessRequestConfigV2025, any>>;
}

async getAccountActivity(requestParameters: sdk.AccountActivitiesV2025ApiGetAccountActivityRequest): Promise<AxiosResponse<sdk.AccountActivityV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccountActivity(requestParameters) as Promise<AxiosResponse<sdk.AccountActivityV2025, any>>;
}
async listAccountActivities(requestParameters: sdk.AccountActivitiesV2025ApiListAccountActivitiesRequest = {}): Promise<AxiosResponse<Array<sdk.AccountActivityV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAccountActivities(requestParameters) as Promise<AxiosResponse<Array<sdk.AccountActivityV2025>, any>>;
}

async getAccountAggregationStatus(requestParameters: sdk.AccountAggregationsV2025ApiGetAccountAggregationStatusRequest): Promise<AxiosResponse<sdk.AccountAggregationStatusV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccountAggregationStatus(requestParameters) as Promise<AxiosResponse<sdk.AccountAggregationStatusV2025, any>>;
}

async getUsagesByAccountId(requestParameters: sdk.AccountUsagesV2025ApiGetUsagesByAccountIdRequest): Promise<AxiosResponse<Array<sdk.AccountUsageV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getUsagesByAccountId(requestParameters) as Promise<AxiosResponse<Array<sdk.AccountUsageV2025>, any>>;
}

async createAccount(requestParameters: sdk.AccountsV2025ApiCreateAccountRequest): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createAccount(requestParameters) as Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>>;
}
async deleteAccount(requestParameters: sdk.AccountsV2025ApiDeleteAccountRequest): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteAccount(requestParameters) as Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>>;
}
async deleteAccountAsync(requestParameters: sdk.AccountsV2025ApiDeleteAccountAsyncRequest): Promise<AxiosResponse<sdk.TaskResultDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteAccountAsync(requestParameters) as Promise<AxiosResponse<sdk.TaskResultDtoV2025, any>>;
}
async disableAccount(requestParameters: sdk.AccountsV2025ApiDisableAccountRequest): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.disableAccount(requestParameters) as Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>>;
}
async disableAccountForIdentity(requestParameters: sdk.AccountsV2025ApiDisableAccountForIdentityRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.disableAccountForIdentity(requestParameters) as Promise<AxiosResponse<object, any>>;
}
async disableAccountsForIdentities(requestParameters: sdk.AccountsV2025ApiDisableAccountsForIdentitiesRequest): Promise<AxiosResponse<Array<sdk.BulkIdentitiesAccountsResponseV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.disableAccountsForIdentities(requestParameters) as Promise<AxiosResponse<Array<sdk.BulkIdentitiesAccountsResponseV2025>, any>>;
}
async enableAccount(requestParameters: sdk.AccountsV2025ApiEnableAccountRequest): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.enableAccount(requestParameters) as Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>>;
}
async enableAccountForIdentity(requestParameters: sdk.AccountsV2025ApiEnableAccountForIdentityRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.enableAccountForIdentity(requestParameters) as Promise<AxiosResponse<object, any>>;
}
async enableAccountsForIdentities(requestParameters: sdk.AccountsV2025ApiEnableAccountsForIdentitiesRequest): Promise<AxiosResponse<Array<sdk.BulkIdentitiesAccountsResponseV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.enableAccountsForIdentities(requestParameters) as Promise<AxiosResponse<Array<sdk.BulkIdentitiesAccountsResponseV2025>, any>>;
}
async getAccount(requestParameters: sdk.AccountsV2025ApiGetAccountRequest): Promise<AxiosResponse<sdk.AccountV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccount(requestParameters) as Promise<AxiosResponse<sdk.AccountV2025, any>>;
}
async getAccountEntitlements(requestParameters: sdk.AccountsV2025ApiGetAccountEntitlementsRequest): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccountEntitlements(requestParameters) as Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>>;
}
async listAccounts(requestParameters: sdk.AccountsV2025ApiListAccountsRequest = {}): Promise<AxiosResponse<Array<sdk.AccountV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAccounts(requestParameters) as Promise<AxiosResponse<Array<sdk.AccountV2025>, any>>;
}
async putAccount(requestParameters: sdk.AccountsV2025ApiPutAccountRequest): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putAccount(requestParameters) as Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>>;
}
async submitReloadAccount(requestParameters: sdk.AccountsV2025ApiSubmitReloadAccountRequest): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitReloadAccount(requestParameters) as Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>>;
}
async unlockAccount(requestParameters: sdk.AccountsV2025ApiUnlockAccountRequest): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.unlockAccount(requestParameters) as Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>>;
}
async updateAccount(requestParameters: sdk.AccountsV2025ApiUpdateAccountRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateAccount(requestParameters) as Promise<AxiosResponse<object, any>>;
}

async getDiscoveredApplications(requestParameters: sdk.ApplicationDiscoveryV2025ApiGetDiscoveredApplicationsRequest = {}): Promise<AxiosResponse<Array<sdk.GetDiscoveredApplications200ResponseInnerV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getDiscoveredApplications(requestParameters) as Promise<AxiosResponse<Array<sdk.GetDiscoveredApplications200ResponseInnerV2025>, any>>;
}
async getManualDiscoverApplicationsCsvTemplate(): Promise<AxiosResponse<sdk.ManualDiscoverApplicationsTemplateV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getManualDiscoverApplicationsCsvTemplate() as Promise<AxiosResponse<sdk.ManualDiscoverApplicationsTemplateV2025, any>>;
}
async sendManualDiscoverApplicationsCsvTemplate(requestParameters: sdk.ApplicationDiscoveryV2025ApiSendManualDiscoverApplicationsCsvTemplateRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.sendManualDiscoverApplicationsCsvTemplate(requestParameters) as Promise<AxiosResponse<void, any>>;
}

async approveApproval(requestParameters: sdk.ApprovalsV2025ApiApproveApprovalRequest): Promise<AxiosResponse<sdk.ApprovalV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.approveApproval(requestParameters) as Promise<AxiosResponse<sdk.ApprovalV2025, any>>;
}
async getApproval(requestParameters: sdk.ApprovalsV2025ApiGetApprovalRequest): Promise<AxiosResponse<sdk.ApprovalV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getApproval(requestParameters) as Promise<AxiosResponse<sdk.ApprovalV2025, any>>;
}
async getApprovals(requestParameters: sdk.ApprovalsV2025ApiGetApprovalsRequest = {}): Promise<AxiosResponse<Array<sdk.ApprovalV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getApprovals(requestParameters) as Promise<AxiosResponse<Array<sdk.ApprovalV2025>, any>>;
}
async rejectApproval(requestParameters: sdk.ApprovalsV2025ApiRejectApprovalRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.rejectApproval(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async updateApprovalsAttributes(requestParameters: sdk.ApprovalsV2025ApiUpdateApprovalsAttributesRequest): Promise<AxiosResponse<sdk.ApprovalV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateApprovalsAttributes(requestParameters) as Promise<AxiosResponse<sdk.ApprovalV2025, any>>;
}
async updateApprovalsComments(requestParameters: sdk.ApprovalsV2025ApiUpdateApprovalsCommentsRequest): Promise<AxiosResponse<sdk.ApprovalV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateApprovalsComments(requestParameters) as Promise<AxiosResponse<sdk.ApprovalV2025, any>>;
}
async updateApprovalsReassign(requestParameters: sdk.ApprovalsV2025ApiUpdateApprovalsReassignRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateApprovalsReassign(requestParameters) as Promise<AxiosResponse<void, any>>;
}

async createSourceApp(requestParameters: sdk.AppsV2025ApiCreateSourceAppRequest): Promise<AxiosResponse<sdk.SourceAppV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSourceApp(requestParameters) as Promise<AxiosResponse<sdk.SourceAppV2025, any>>;
}
async deleteAccessProfilesFromSourceAppByBulk(requestParameters: sdk.AppsV2025ApiDeleteAccessProfilesFromSourceAppByBulkRequest): Promise<AxiosResponse<Array<sdk.AccessProfileDetailsV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteAccessProfilesFromSourceAppByBulk(requestParameters) as Promise<AxiosResponse<Array<sdk.AccessProfileDetailsV2025>, any>>;
}
async deleteSourceApp(requestParameters: sdk.AppsV2025ApiDeleteSourceAppRequest): Promise<AxiosResponse<sdk.SourceAppV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteSourceApp(requestParameters) as Promise<AxiosResponse<sdk.SourceAppV2025, any>>;
}
async getSourceApp(requestParameters: sdk.AppsV2025ApiGetSourceAppRequest): Promise<AxiosResponse<sdk.SourceAppV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourceApp(requestParameters) as Promise<AxiosResponse<sdk.SourceAppV2025, any>>;
}
async listAccessProfilesForSourceApp(requestParameters: sdk.AppsV2025ApiListAccessProfilesForSourceAppRequest): Promise<AxiosResponse<Array<sdk.AccessProfileDetailsV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAccessProfilesForSourceApp(requestParameters) as Promise<AxiosResponse<Array<sdk.AccessProfileDetailsV2025>, any>>;
}
async listAllSourceApp(requestParameters: sdk.AppsV2025ApiListAllSourceAppRequest = {}): Promise<AxiosResponse<Array<sdk.SourceAppV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAllSourceApp(requestParameters) as Promise<AxiosResponse<Array<sdk.SourceAppV2025>, any>>;
}
async listAllUserApps(requestParameters: sdk.AppsV2025ApiListAllUserAppsRequest): Promise<AxiosResponse<Array<sdk.UserAppV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAllUserApps(requestParameters) as Promise<AxiosResponse<Array<sdk.UserAppV2025>, any>>;
}
async listAssignedSourceApp(requestParameters: sdk.AppsV2025ApiListAssignedSourceAppRequest = {}): Promise<AxiosResponse<Array<sdk.SourceAppV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAssignedSourceApp(requestParameters) as Promise<AxiosResponse<Array<sdk.SourceAppV2025>, any>>;
}
async listAvailableAccountsForUserApp(requestParameters: sdk.AppsV2025ApiListAvailableAccountsForUserAppRequest): Promise<AxiosResponse<Array<sdk.AppAccountDetailsV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAvailableAccountsForUserApp(requestParameters) as Promise<AxiosResponse<Array<sdk.AppAccountDetailsV2025>, any>>;
}
async listAvailableSourceApps(requestParameters: sdk.AppsV2025ApiListAvailableSourceAppsRequest = {}): Promise<AxiosResponse<Array<sdk.SourceAppV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAvailableSourceApps(requestParameters) as Promise<AxiosResponse<Array<sdk.SourceAppV2025>, any>>;
}
async listOwnedUserApps(requestParameters: sdk.AppsV2025ApiListOwnedUserAppsRequest = {}): Promise<AxiosResponse<Array<sdk.UserAppV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listOwnedUserApps(requestParameters) as Promise<AxiosResponse<Array<sdk.UserAppV2025>, any>>;
}
async patchSourceApp(requestParameters: sdk.AppsV2025ApiPatchSourceAppRequest): Promise<AxiosResponse<sdk.SourceAppPatchDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchSourceApp(requestParameters) as Promise<AxiosResponse<sdk.SourceAppPatchDtoV2025, any>>;
}
async patchUserApp(requestParameters: sdk.AppsV2025ApiPatchUserAppRequest): Promise<AxiosResponse<sdk.UserAppV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchUserApp(requestParameters) as Promise<AxiosResponse<sdk.UserAppV2025, any>>;
}
async updateSourceAppsInBulk(requestParameters: sdk.AppsV2025ApiUpdateSourceAppsInBulkRequest = {}): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateSourceAppsInBulk(requestParameters) as Promise<AxiosResponse<void, any>>;
}

async getProfileConfig(requestParameters: sdk.AuthProfileV2025ApiGetProfileConfigRequest): Promise<AxiosResponse<sdk.AuthProfileV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getProfileConfig(requestParameters) as Promise<AxiosResponse<sdk.AuthProfileV2025, any>>;
}
async getProfileConfigList(requestParameters: sdk.AuthProfileV2025ApiGetProfileConfigListRequest = {}): Promise<AxiosResponse<Array<sdk.AuthProfileSummaryV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getProfileConfigList(requestParameters) as Promise<AxiosResponse<Array<sdk.AuthProfileSummaryV2025>, any>>;
}
async patchProfileConfig(requestParameters: sdk.AuthProfileV2025ApiPatchProfileConfigRequest): Promise<AxiosResponse<sdk.AuthProfileV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchProfileConfig(requestParameters) as Promise<AxiosResponse<sdk.AuthProfileV2025, any>>;
}

async getAuthUser(requestParameters: sdk.AuthUsersV2025ApiGetAuthUserRequest): Promise<AxiosResponse<sdk.AuthUserV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAuthUser(requestParameters) as Promise<AxiosResponse<sdk.AuthUserV2025, any>>;
}
async patchAuthUser(requestParameters: sdk.AuthUsersV2025ApiPatchAuthUserRequest): Promise<AxiosResponse<sdk.AuthUserV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchAuthUser(requestParameters) as Promise<AxiosResponse<sdk.AuthUserV2025, any>>;
}

async createBrandingItem(requestParameters: sdk.BrandingV2025ApiCreateBrandingItemRequest): Promise<AxiosResponse<sdk.BrandingItemV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createBrandingItem(requestParameters) as Promise<AxiosResponse<sdk.BrandingItemV2025, any>>;
}
async deleteBranding(requestParameters: sdk.BrandingV2025ApiDeleteBrandingRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteBranding(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getBranding(requestParameters: sdk.BrandingV2025ApiGetBrandingRequest): Promise<AxiosResponse<sdk.BrandingItemV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getBranding(requestParameters) as Promise<AxiosResponse<sdk.BrandingItemV2025, any>>;
}
async getBrandingList(): Promise<AxiosResponse<Array<sdk.BrandingItemV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getBrandingList() as Promise<AxiosResponse<Array<sdk.BrandingItemV2025>, any>>;
}
async setBrandingItem(requestParameters: sdk.BrandingV2025ApiSetBrandingItemRequest): Promise<AxiosResponse<sdk.BrandingItemV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setBrandingItem(requestParameters) as Promise<AxiosResponse<sdk.BrandingItemV2025, any>>;
}

async createCampaignFilter(requestParameters: sdk.CertificationCampaignFiltersV2025ApiCreateCampaignFilterRequest): Promise<AxiosResponse<sdk.CampaignFilterDetailsV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createCampaignFilter(requestParameters) as Promise<AxiosResponse<sdk.CampaignFilterDetailsV2025, any>>;
}
async deleteCampaignFilters(requestParameters: sdk.CertificationCampaignFiltersV2025ApiDeleteCampaignFiltersRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteCampaignFilters(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getCampaignFilterById(requestParameters: sdk.CertificationCampaignFiltersV2025ApiGetCampaignFilterByIdRequest): Promise<AxiosResponse<sdk.CampaignFilterDetailsV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCampaignFilterById(requestParameters) as Promise<AxiosResponse<sdk.CampaignFilterDetailsV2025, any>>;
}
async listCampaignFilters(requestParameters: sdk.CertificationCampaignFiltersV2025ApiListCampaignFiltersRequest = {}): Promise<AxiosResponse<sdk.ListCampaignFilters200ResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listCampaignFilters(requestParameters) as Promise<AxiosResponse<sdk.ListCampaignFilters200ResponseV2025, any>>;
}
async updateCampaignFilter(requestParameters: sdk.CertificationCampaignFiltersV2025ApiUpdateCampaignFilterRequest): Promise<AxiosResponse<sdk.CampaignFilterDetailsV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateCampaignFilter(requestParameters) as Promise<AxiosResponse<sdk.CampaignFilterDetailsV2025, any>>;
}

async completeCampaign(requestParameters: sdk.CertificationCampaignsV2025ApiCompleteCampaignRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.completeCampaign(requestParameters) as Promise<AxiosResponse<object, any>>;
}
async createCampaign(requestParameters: sdk.CertificationCampaignsV2025ApiCreateCampaignRequest): Promise<AxiosResponse<sdk.CampaignV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createCampaign(requestParameters) as Promise<AxiosResponse<sdk.CampaignV2025, any>>;
}
async createCampaignTemplate(requestParameters: sdk.CertificationCampaignsV2025ApiCreateCampaignTemplateRequest): Promise<AxiosResponse<sdk.CampaignTemplateV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createCampaignTemplate(requestParameters) as Promise<AxiosResponse<sdk.CampaignTemplateV2025, any>>;
}
async deleteCampaignTemplate(requestParameters: sdk.CertificationCampaignsV2025ApiDeleteCampaignTemplateRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteCampaignTemplate(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteCampaignTemplateSchedule(requestParameters: sdk.CertificationCampaignsV2025ApiDeleteCampaignTemplateScheduleRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteCampaignTemplateSchedule(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteCampaigns(requestParameters: sdk.CertificationCampaignsV2025ApiDeleteCampaignsRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteCampaigns(requestParameters) as Promise<AxiosResponse<object, any>>;
}
async getActiveCampaigns(requestParameters: sdk.CertificationCampaignsV2025ApiGetActiveCampaignsRequest = {}): Promise<AxiosResponse<Array<sdk.GetActiveCampaigns200ResponseInnerV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getActiveCampaigns(requestParameters) as Promise<AxiosResponse<Array<sdk.GetActiveCampaigns200ResponseInnerV2025>, any>>;
}
async getCampaign(requestParameters: sdk.CertificationCampaignsV2025ApiGetCampaignRequest): Promise<AxiosResponse<sdk.GetCampaign200ResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCampaign(requestParameters) as Promise<AxiosResponse<sdk.GetCampaign200ResponseV2025, any>>;
}
async getCampaignReports(requestParameters: sdk.CertificationCampaignsV2025ApiGetCampaignReportsRequest): Promise<AxiosResponse<Array<sdk.CampaignReportV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCampaignReports(requestParameters) as Promise<AxiosResponse<Array<sdk.CampaignReportV2025>, any>>;
}
async getCampaignReportsConfig(): Promise<AxiosResponse<sdk.CampaignReportsConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCampaignReportsConfig() as Promise<AxiosResponse<sdk.CampaignReportsConfigV2025, any>>;
}
async getCampaignTemplate(requestParameters: sdk.CertificationCampaignsV2025ApiGetCampaignTemplateRequest): Promise<AxiosResponse<sdk.CampaignTemplateV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCampaignTemplate(requestParameters) as Promise<AxiosResponse<sdk.CampaignTemplateV2025, any>>;
}
async getCampaignTemplateSchedule(requestParameters: sdk.CertificationCampaignsV2025ApiGetCampaignTemplateScheduleRequest): Promise<AxiosResponse<sdk.ScheduleV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCampaignTemplateSchedule(requestParameters) as Promise<AxiosResponse<sdk.ScheduleV2025, any>>;
}
async getCampaignTemplates(requestParameters: sdk.CertificationCampaignsV2025ApiGetCampaignTemplatesRequest = {}): Promise<AxiosResponse<Array<sdk.CampaignTemplateV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCampaignTemplates(requestParameters) as Promise<AxiosResponse<Array<sdk.CampaignTemplateV2025>, any>>;
}
async move(requestParameters: sdk.CertificationCampaignsV2025ApiMoveRequest): Promise<AxiosResponse<sdk.CertificationTaskV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.move(requestParameters) as Promise<AxiosResponse<sdk.CertificationTaskV2025, any>>;
}
async patchCampaignTemplate(requestParameters: sdk.CertificationCampaignsV2025ApiPatchCampaignTemplateRequest): Promise<AxiosResponse<sdk.CampaignTemplateV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchCampaignTemplate(requestParameters) as Promise<AxiosResponse<sdk.CampaignTemplateV2025, any>>;
}
async setCampaignReportsConfig(requestParameters: sdk.CertificationCampaignsV2025ApiSetCampaignReportsConfigRequest): Promise<AxiosResponse<sdk.CampaignReportsConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setCampaignReportsConfig(requestParameters) as Promise<AxiosResponse<sdk.CampaignReportsConfigV2025, any>>;
}
async setCampaignTemplateSchedule(requestParameters: sdk.CertificationCampaignsV2025ApiSetCampaignTemplateScheduleRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setCampaignTemplateSchedule(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async startCampaign(requestParameters: sdk.CertificationCampaignsV2025ApiStartCampaignRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startCampaign(requestParameters) as Promise<AxiosResponse<object, any>>;
}
async startCampaignRemediationScan(requestParameters: sdk.CertificationCampaignsV2025ApiStartCampaignRemediationScanRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startCampaignRemediationScan(requestParameters) as Promise<AxiosResponse<object, any>>;
}
async startCampaignReport(requestParameters: sdk.CertificationCampaignsV2025ApiStartCampaignReportRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startCampaignReport(requestParameters) as Promise<AxiosResponse<object, any>>;
}
async startGenerateCampaignTemplate(requestParameters: sdk.CertificationCampaignsV2025ApiStartGenerateCampaignTemplateRequest): Promise<AxiosResponse<sdk.CampaignReferenceV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startGenerateCampaignTemplate(requestParameters) as Promise<AxiosResponse<sdk.CampaignReferenceV2025, any>>;
}
async updateCampaign(requestParameters: sdk.CertificationCampaignsV2025ApiUpdateCampaignRequest): Promise<AxiosResponse<sdk.SlimCampaignV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateCampaign(requestParameters) as Promise<AxiosResponse<sdk.SlimCampaignV2025, any>>;
}

async getIdentityAccessSummaries(requestParameters: sdk.CertificationSummariesV2025ApiGetIdentityAccessSummariesRequest): Promise<AxiosResponse<Array<sdk.AccessSummaryV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentityAccessSummaries(requestParameters) as Promise<AxiosResponse<Array<sdk.AccessSummaryV2025>, any>>;
}
async getIdentityDecisionSummary(requestParameters: sdk.CertificationSummariesV2025ApiGetIdentityDecisionSummaryRequest): Promise<AxiosResponse<sdk.IdentityCertDecisionSummaryV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentityDecisionSummary(requestParameters) as Promise<AxiosResponse<sdk.IdentityCertDecisionSummaryV2025, any>>;
}
async getIdentitySummaries(requestParameters: sdk.CertificationSummariesV2025ApiGetIdentitySummariesRequest): Promise<AxiosResponse<Array<sdk.CertificationIdentitySummaryV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentitySummaries(requestParameters) as Promise<AxiosResponse<Array<sdk.CertificationIdentitySummaryV2025>, any>>;
}
async getIdentitySummary(requestParameters: sdk.CertificationSummariesV2025ApiGetIdentitySummaryRequest): Promise<AxiosResponse<sdk.CertificationIdentitySummaryV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentitySummary(requestParameters) as Promise<AxiosResponse<sdk.CertificationIdentitySummaryV2025, any>>;
}

async getCertificationTask(requestParameters: sdk.CertificationsV2025ApiGetCertificationTaskRequest): Promise<AxiosResponse<sdk.CertificationTaskV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCertificationTask(requestParameters) as Promise<AxiosResponse<sdk.CertificationTaskV2025, any>>;
}
async getIdentityCertification(requestParameters: sdk.CertificationsV2025ApiGetIdentityCertificationRequest): Promise<AxiosResponse<sdk.IdentityCertificationDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentityCertification(requestParameters) as Promise<AxiosResponse<sdk.IdentityCertificationDtoV2025, any>>;
}
async getIdentityCertificationItemPermissions(requestParameters: sdk.CertificationsV2025ApiGetIdentityCertificationItemPermissionsRequest): Promise<AxiosResponse<Array<sdk.PermissionDtoV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentityCertificationItemPermissions(requestParameters) as Promise<AxiosResponse<Array<sdk.PermissionDtoV2025>, any>>;
}
async getPendingCertificationTasks(requestParameters: sdk.CertificationsV2025ApiGetPendingCertificationTasksRequest = {}): Promise<AxiosResponse<Array<sdk.CertificationTaskV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPendingCertificationTasks(requestParameters) as Promise<AxiosResponse<Array<sdk.CertificationTaskV2025>, any>>;
}
async listCertificationReviewers(requestParameters: sdk.CertificationsV2025ApiListCertificationReviewersRequest): Promise<AxiosResponse<Array<sdk.IdentityReferenceWithNameAndEmailV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listCertificationReviewers(requestParameters) as Promise<AxiosResponse<Array<sdk.IdentityReferenceWithNameAndEmailV2025>, any>>;
}
async listIdentityAccessReviewItems(requestParameters: sdk.CertificationsV2025ApiListIdentityAccessReviewItemsRequest): Promise<AxiosResponse<Array<sdk.AccessReviewItemV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listIdentityAccessReviewItems(requestParameters) as Promise<AxiosResponse<Array<sdk.AccessReviewItemV2025>, any>>;
}
async listIdentityCertifications(requestParameters: sdk.CertificationsV2025ApiListIdentityCertificationsRequest = {}): Promise<AxiosResponse<Array<sdk.IdentityCertificationDtoV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listIdentityCertifications(requestParameters) as Promise<AxiosResponse<Array<sdk.IdentityCertificationDtoV2025>, any>>;
}
async makeIdentityDecision(requestParameters: sdk.CertificationsV2025ApiMakeIdentityDecisionRequest): Promise<AxiosResponse<sdk.IdentityCertificationDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.makeIdentityDecision(requestParameters) as Promise<AxiosResponse<sdk.IdentityCertificationDtoV2025, any>>;
}
async reassignIdentityCertifications(requestParameters: sdk.CertificationsV2025ApiReassignIdentityCertificationsRequest): Promise<AxiosResponse<sdk.IdentityCertificationDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.reassignIdentityCertifications(requestParameters) as Promise<AxiosResponse<sdk.IdentityCertificationDtoV2025, any>>;
}
async signOffIdentityCertification(requestParameters: sdk.CertificationsV2025ApiSignOffIdentityCertificationRequest): Promise<AxiosResponse<sdk.IdentityCertificationDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.signOffIdentityCertification(requestParameters) as Promise<AxiosResponse<sdk.IdentityCertificationDtoV2025, any>>;
}
async submitReassignCertsAsync(requestParameters: sdk.CertificationsV2025ApiSubmitReassignCertsAsyncRequest): Promise<AxiosResponse<sdk.CertificationTaskV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitReassignCertsAsync(requestParameters) as Promise<AxiosResponse<sdk.CertificationTaskV2025, any>>;
}

async deleteClassifyMachineAccountFromSource(requestParameters: sdk.ClassifySourceV2025ApiDeleteClassifyMachineAccountFromSourceRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteClassifyMachineAccountFromSource(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getClassifyMachineAccountFromSourceStatus(requestParameters: sdk.ClassifySourceV2025ApiGetClassifyMachineAccountFromSourceStatusRequest): Promise<AxiosResponse<sdk.SourceClassificationStatusV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getClassifyMachineAccountFromSourceStatus(requestParameters) as Promise<AxiosResponse<sdk.SourceClassificationStatusV2025, any>>;
}
async sendClassifyMachineAccountFromSource(requestParameters: sdk.ClassifySourceV2025ApiSendClassifyMachineAccountFromSourceRequest): Promise<AxiosResponse<sdk.SendClassifyMachineAccountFromSource200ResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.sendClassifyMachineAccountFromSource(requestParameters) as Promise<AxiosResponse<sdk.SendClassifyMachineAccountFromSource200ResponseV2025, any>>;
}

async createDeploy(requestParameters: sdk.ConfigurationHubV2025ApiCreateDeployRequest): Promise<AxiosResponse<sdk.DeployResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createDeploy(requestParameters) as Promise<AxiosResponse<sdk.DeployResponseV2025, any>>;
}
async createObjectMapping(requestParameters: sdk.ConfigurationHubV2025ApiCreateObjectMappingRequest): Promise<AxiosResponse<sdk.ObjectMappingResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createObjectMapping(requestParameters) as Promise<AxiosResponse<sdk.ObjectMappingResponseV2025, any>>;
}
async createObjectMappings(requestParameters: sdk.ConfigurationHubV2025ApiCreateObjectMappingsRequest): Promise<AxiosResponse<sdk.ObjectMappingBulkCreateResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createObjectMappings(requestParameters) as Promise<AxiosResponse<sdk.ObjectMappingBulkCreateResponseV2025, any>>;
}
async createScheduledAction(requestParameters: sdk.ConfigurationHubV2025ApiCreateScheduledActionRequest): Promise<AxiosResponse<sdk.ScheduledActionResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createScheduledAction(requestParameters) as Promise<AxiosResponse<sdk.ScheduledActionResponseV2025, any>>;
}
async createUploadedConfiguration(requestParameters: sdk.ConfigurationHubV2025ApiCreateUploadedConfigurationRequest): Promise<AxiosResponse<sdk.BackupResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createUploadedConfiguration(requestParameters) as Promise<AxiosResponse<sdk.BackupResponseV2025, any>>;
}
async deleteBackup(requestParameters: sdk.ConfigurationHubV2025ApiDeleteBackupRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteBackup(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteDraft(requestParameters: sdk.ConfigurationHubV2025ApiDeleteDraftRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteDraft(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteObjectMapping(requestParameters: sdk.ConfigurationHubV2025ApiDeleteObjectMappingRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteObjectMapping(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteScheduledAction(requestParameters: sdk.ConfigurationHubV2025ApiDeleteScheduledActionRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteScheduledAction(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteUploadedConfiguration(requestParameters: sdk.ConfigurationHubV2025ApiDeleteUploadedConfigurationRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteUploadedConfiguration(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getDeploy(requestParameters: sdk.ConfigurationHubV2025ApiGetDeployRequest): Promise<AxiosResponse<sdk.DeployResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getDeploy(requestParameters) as Promise<AxiosResponse<sdk.DeployResponseV2025, any>>;
}
async getObjectMappings(requestParameters: sdk.ConfigurationHubV2025ApiGetObjectMappingsRequest): Promise<AxiosResponse<Array<sdk.ObjectMappingResponseV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getObjectMappings(requestParameters) as Promise<AxiosResponse<Array<sdk.ObjectMappingResponseV2025>, any>>;
}
async getUploadedConfiguration(requestParameters: sdk.ConfigurationHubV2025ApiGetUploadedConfigurationRequest): Promise<AxiosResponse<sdk.BackupResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getUploadedConfiguration(requestParameters) as Promise<AxiosResponse<sdk.BackupResponseV2025, any>>;
}
async listBackups(requestParameters: sdk.ConfigurationHubV2025ApiListBackupsRequest = {}): Promise<AxiosResponse<Array<sdk.BackupResponse1V2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listBackups(requestParameters) as Promise<AxiosResponse<Array<sdk.BackupResponse1V2025>, any>>;
}
async listDeploys(): Promise<AxiosResponse<sdk.ListDeploys200ResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listDeploys() as Promise<AxiosResponse<sdk.ListDeploys200ResponseV2025, any>>;
}
async listDrafts(requestParameters: sdk.ConfigurationHubV2025ApiListDraftsRequest = {}): Promise<AxiosResponse<Array<sdk.DraftResponseV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listDrafts(requestParameters) as Promise<AxiosResponse<Array<sdk.DraftResponseV2025>, any>>;
}
async listScheduledActions(): Promise<AxiosResponse<Array<sdk.ScheduledActionResponseV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listScheduledActions() as Promise<AxiosResponse<Array<sdk.ScheduledActionResponseV2025>, any>>;
}
async listUploadedConfigurations(requestParameters: sdk.ConfigurationHubV2025ApiListUploadedConfigurationsRequest = {}): Promise<AxiosResponse<Array<sdk.BackupResponseV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listUploadedConfigurations(requestParameters) as Promise<AxiosResponse<Array<sdk.BackupResponseV2025>, any>>;
}
async updateObjectMappings(requestParameters: sdk.ConfigurationHubV2025ApiUpdateObjectMappingsRequest): Promise<AxiosResponse<sdk.ObjectMappingBulkPatchResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateObjectMappings(requestParameters) as Promise<AxiosResponse<sdk.ObjectMappingBulkPatchResponseV2025, any>>;
}
async updateScheduledAction(requestParameters: sdk.ConfigurationHubV2025ApiUpdateScheduledActionRequest): Promise<AxiosResponse<sdk.ScheduledActionResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateScheduledAction(requestParameters) as Promise<AxiosResponse<sdk.ScheduledActionResponseV2025, any>>;
}

async createConnectorCustomizer(requestParameters: sdk.ConnectorCustomizersV2025ApiCreateConnectorCustomizerRequest): Promise<AxiosResponse<sdk.ConnectorCustomizerCreateResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createConnectorCustomizer(requestParameters) as Promise<AxiosResponse<sdk.ConnectorCustomizerCreateResponseV2025, any>>;
}
async createConnectorCustomizerVersion(requestParameters: sdk.ConnectorCustomizersV2025ApiCreateConnectorCustomizerVersionRequest): Promise<AxiosResponse<sdk.ConnectorCustomizerVersionCreateResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createConnectorCustomizerVersion(requestParameters) as Promise<AxiosResponse<sdk.ConnectorCustomizerVersionCreateResponseV2025, any>>;
}
async deleteConnectorCustomizer(requestParameters: sdk.ConnectorCustomizersV2025ApiDeleteConnectorCustomizerRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteConnectorCustomizer(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getConnectorCustomizer(requestParameters: sdk.ConnectorCustomizersV2025ApiGetConnectorCustomizerRequest): Promise<AxiosResponse<sdk.ConnectorCustomizersResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getConnectorCustomizer(requestParameters) as Promise<AxiosResponse<sdk.ConnectorCustomizersResponseV2025, any>>;
}
async listConnectorCustomizers(requestParameters: sdk.ConnectorCustomizersV2025ApiListConnectorCustomizersRequest = {}): Promise<AxiosResponse<Array<sdk.ConnectorCustomizersResponseV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listConnectorCustomizers(requestParameters) as Promise<AxiosResponse<Array<sdk.ConnectorCustomizersResponseV2025>, any>>;
}
async putConnectorCustomizer(requestParameters: sdk.ConnectorCustomizersV2025ApiPutConnectorCustomizerRequest): Promise<AxiosResponse<sdk.ConnectorCustomizerUpdateResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putConnectorCustomizer(requestParameters) as Promise<AxiosResponse<sdk.ConnectorCustomizerUpdateResponseV2025, any>>;
}

async createConnectorRule(requestParameters: sdk.ConnectorRuleManagementV2025ApiCreateConnectorRuleRequest): Promise<AxiosResponse<sdk.ConnectorRuleResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createConnectorRule(requestParameters) as Promise<AxiosResponse<sdk.ConnectorRuleResponseV2025, any>>;
}
async deleteConnectorRule(requestParameters: sdk.ConnectorRuleManagementV2025ApiDeleteConnectorRuleRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteConnectorRule(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getConnectorRule(requestParameters: sdk.ConnectorRuleManagementV2025ApiGetConnectorRuleRequest): Promise<AxiosResponse<sdk.ConnectorRuleResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getConnectorRule(requestParameters) as Promise<AxiosResponse<sdk.ConnectorRuleResponseV2025, any>>;
}
async getConnectorRuleList(requestParameters: sdk.ConnectorRuleManagementV2025ApiGetConnectorRuleListRequest = {}): Promise<AxiosResponse<Array<sdk.ConnectorRuleResponseV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getConnectorRuleList(requestParameters) as Promise<AxiosResponse<Array<sdk.ConnectorRuleResponseV2025>, any>>;
}
async putConnectorRule(requestParameters: sdk.ConnectorRuleManagementV2025ApiPutConnectorRuleRequest): Promise<AxiosResponse<sdk.ConnectorRuleResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putConnectorRule(requestParameters) as Promise<AxiosResponse<sdk.ConnectorRuleResponseV2025, any>>;
}
async testConnectorRule(requestParameters: sdk.ConnectorRuleManagementV2025ApiTestConnectorRuleRequest): Promise<AxiosResponse<sdk.ConnectorRuleValidationResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.testConnectorRule(requestParameters) as Promise<AxiosResponse<sdk.ConnectorRuleValidationResponseV2025, any>>;
}

async createCustomConnector(requestParameters: sdk.ConnectorsV2025ApiCreateCustomConnectorRequest): Promise<AxiosResponse<sdk.V3ConnectorDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createCustomConnector(requestParameters) as Promise<AxiosResponse<sdk.V3ConnectorDtoV2025, any>>;
}
async deleteCustomConnector(requestParameters: sdk.ConnectorsV2025ApiDeleteCustomConnectorRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteCustomConnector(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getConnector(requestParameters: sdk.ConnectorsV2025ApiGetConnectorRequest): Promise<AxiosResponse<sdk.ConnectorDetailV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getConnector(requestParameters) as Promise<AxiosResponse<sdk.ConnectorDetailV2025, any>>;
}
async getConnectorCorrelationConfig(requestParameters: sdk.ConnectorsV2025ApiGetConnectorCorrelationConfigRequest): Promise<AxiosResponse<string, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getConnectorCorrelationConfig(requestParameters) as Promise<AxiosResponse<string, any>>;
}
async getConnectorList(requestParameters: sdk.ConnectorsV2025ApiGetConnectorListRequest = {}): Promise<AxiosResponse<Array<sdk.V3ConnectorDtoV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getConnectorList(requestParameters) as Promise<AxiosResponse<Array<sdk.V3ConnectorDtoV2025>, any>>;
}
async getConnectorSourceConfig(requestParameters: sdk.ConnectorsV2025ApiGetConnectorSourceConfigRequest): Promise<AxiosResponse<string, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getConnectorSourceConfig(requestParameters) as Promise<AxiosResponse<string, any>>;
}
async getConnectorSourceTemplate(requestParameters: sdk.ConnectorsV2025ApiGetConnectorSourceTemplateRequest): Promise<AxiosResponse<string, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getConnectorSourceTemplate(requestParameters) as Promise<AxiosResponse<string, any>>;
}
async getConnectorTranslations(requestParameters: sdk.ConnectorsV2025ApiGetConnectorTranslationsRequest): Promise<AxiosResponse<string, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getConnectorTranslations(requestParameters) as Promise<AxiosResponse<string, any>>;
}
async putConnectorCorrelationConfig(requestParameters: sdk.ConnectorsV2025ApiPutConnectorCorrelationConfigRequest): Promise<AxiosResponse<sdk.UpdateDetailV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putConnectorCorrelationConfig(requestParameters) as Promise<AxiosResponse<sdk.UpdateDetailV2025, any>>;
}
async putConnectorSourceConfig(requestParameters: sdk.ConnectorsV2025ApiPutConnectorSourceConfigRequest): Promise<AxiosResponse<sdk.UpdateDetailV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putConnectorSourceConfig(requestParameters) as Promise<AxiosResponse<sdk.UpdateDetailV2025, any>>;
}
async putConnectorSourceTemplate(requestParameters: sdk.ConnectorsV2025ApiPutConnectorSourceTemplateRequest): Promise<AxiosResponse<sdk.UpdateDetailV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putConnectorSourceTemplate(requestParameters) as Promise<AxiosResponse<sdk.UpdateDetailV2025, any>>;
}
async putConnectorTranslations(requestParameters: sdk.ConnectorsV2025ApiPutConnectorTranslationsRequest): Promise<AxiosResponse<sdk.UpdateDetailV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putConnectorTranslations(requestParameters) as Promise<AxiosResponse<sdk.UpdateDetailV2025, any>>;
}
async updateConnector(requestParameters: sdk.ConnectorsV2025ApiUpdateConnectorRequest): Promise<AxiosResponse<sdk.ConnectorDetailV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateConnector(requestParameters) as Promise<AxiosResponse<sdk.ConnectorDetailV2025, any>>;
}

async createFormDefinition(requestParameters: sdk.CustomFormsV2025ApiCreateFormDefinitionRequest = {}): Promise<AxiosResponse<sdk.FormDefinitionResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createFormDefinition(requestParameters) as Promise<AxiosResponse<sdk.FormDefinitionResponseV2025, any>>;
}
async createFormDefinitionDynamicSchema(requestParameters: sdk.CustomFormsV2025ApiCreateFormDefinitionDynamicSchemaRequest = {}): Promise<AxiosResponse<sdk.FormDefinitionDynamicSchemaResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createFormDefinitionDynamicSchema(requestParameters) as Promise<AxiosResponse<sdk.FormDefinitionDynamicSchemaResponseV2025, any>>;
}
async createFormDefinitionFileRequest(requestParameters: sdk.CustomFormsV2025ApiCreateFormDefinitionFileRequestRequest): Promise<AxiosResponse<sdk.FormDefinitionFileUploadResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createFormDefinitionFileRequest(requestParameters) as Promise<AxiosResponse<sdk.FormDefinitionFileUploadResponseV2025, any>>;
}
async createFormInstance(requestParameters: sdk.CustomFormsV2025ApiCreateFormInstanceRequest = {}): Promise<AxiosResponse<sdk.FormInstanceResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createFormInstance(requestParameters) as Promise<AxiosResponse<sdk.FormInstanceResponseV2025, any>>;
}
async deleteFormDefinition(requestParameters: sdk.CustomFormsV2025ApiDeleteFormDefinitionRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteFormDefinition(requestParameters) as Promise<AxiosResponse<object, any>>;
}
async exportFormDefinitionsByTenant(requestParameters: sdk.CustomFormsV2025ApiExportFormDefinitionsByTenantRequest = {}): Promise<AxiosResponse<Array<sdk.ExportFormDefinitionsByTenant200ResponseInnerV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.exportFormDefinitionsByTenant(requestParameters) as Promise<AxiosResponse<Array<sdk.ExportFormDefinitionsByTenant200ResponseInnerV2025>, any>>;
}
async getFileFromS3(requestParameters: sdk.CustomFormsV2025ApiGetFileFromS3Request): Promise<AxiosResponse<File, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getFileFromS3(requestParameters) as Promise<AxiosResponse<File, any>>;
}
async getFormDefinitionByKey(requestParameters: sdk.CustomFormsV2025ApiGetFormDefinitionByKeyRequest): Promise<AxiosResponse<sdk.FormDefinitionResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getFormDefinitionByKey(requestParameters) as Promise<AxiosResponse<sdk.FormDefinitionResponseV2025, any>>;
}
async getFormInstanceByKey(requestParameters: sdk.CustomFormsV2025ApiGetFormInstanceByKeyRequest): Promise<AxiosResponse<sdk.FormInstanceResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getFormInstanceByKey(requestParameters) as Promise<AxiosResponse<sdk.FormInstanceResponseV2025, any>>;
}
async getFormInstanceFile(requestParameters: sdk.CustomFormsV2025ApiGetFormInstanceFileRequest): Promise<AxiosResponse<File, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getFormInstanceFile(requestParameters) as Promise<AxiosResponse<File, any>>;
}
async importFormDefinitions(requestParameters: sdk.CustomFormsV2025ApiImportFormDefinitionsRequest = {}): Promise<AxiosResponse<sdk.ImportFormDefinitions202ResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.importFormDefinitions(requestParameters) as Promise<AxiosResponse<sdk.ImportFormDefinitions202ResponseV2025, any>>;
}
async patchFormDefinition(requestParameters: sdk.CustomFormsV2025ApiPatchFormDefinitionRequest): Promise<AxiosResponse<sdk.FormDefinitionResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchFormDefinition(requestParameters) as Promise<AxiosResponse<sdk.FormDefinitionResponseV2025, any>>;
}
async patchFormInstance(requestParameters: sdk.CustomFormsV2025ApiPatchFormInstanceRequest): Promise<AxiosResponse<sdk.FormInstanceResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchFormInstance(requestParameters) as Promise<AxiosResponse<sdk.FormInstanceResponseV2025, any>>;
}
async searchFormDefinitionsByTenant(requestParameters: sdk.CustomFormsV2025ApiSearchFormDefinitionsByTenantRequest = {}): Promise<AxiosResponse<sdk.ListFormDefinitionsByTenantResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchFormDefinitionsByTenant(requestParameters) as Promise<AxiosResponse<sdk.ListFormDefinitionsByTenantResponseV2025, any>>;
}
async searchFormElementDataByElementID(requestParameters: sdk.CustomFormsV2025ApiSearchFormElementDataByElementIDRequest): Promise<AxiosResponse<sdk.ListFormElementDataByElementIDResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchFormElementDataByElementID(requestParameters) as Promise<AxiosResponse<sdk.ListFormElementDataByElementIDResponseV2025, any>>;
}
async searchFormInstancesByTenant(): Promise<AxiosResponse<Array<sdk.ListFormInstancesByTenantResponseV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchFormInstancesByTenant() as Promise<AxiosResponse<Array<sdk.ListFormInstancesByTenantResponseV2025>, any>>;
}
async searchPreDefinedSelectOptions(): Promise<AxiosResponse<sdk.ListPredefinedSelectOptionsResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchPreDefinedSelectOptions() as Promise<AxiosResponse<sdk.ListPredefinedSelectOptionsResponseV2025, any>>;
}
async showPreviewDataSource(requestParameters: sdk.CustomFormsV2025ApiShowPreviewDataSourceRequest): Promise<AxiosResponse<sdk.PreviewDataSourceResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.showPreviewDataSource(requestParameters) as Promise<AxiosResponse<sdk.PreviewDataSourceResponseV2025, any>>;
}

async createCustomPasswordInstructions(requestParameters: sdk.CustomPasswordInstructionsV2025ApiCreateCustomPasswordInstructionsRequest): Promise<AxiosResponse<sdk.CustomPasswordInstructionV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createCustomPasswordInstructions(requestParameters) as Promise<AxiosResponse<sdk.CustomPasswordInstructionV2025, any>>;
}
async deleteCustomPasswordInstructions(requestParameters: sdk.CustomPasswordInstructionsV2025ApiDeleteCustomPasswordInstructionsRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteCustomPasswordInstructions(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getCustomPasswordInstructions(requestParameters: sdk.CustomPasswordInstructionsV2025ApiGetCustomPasswordInstructionsRequest): Promise<AxiosResponse<sdk.CustomPasswordInstructionV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCustomPasswordInstructions(requestParameters) as Promise<AxiosResponse<sdk.CustomPasswordInstructionV2025, any>>;
}

async createCustomUserLevel(requestParameters: sdk.CustomUserLevelsV2025ApiCreateCustomUserLevelRequest): Promise<AxiosResponse<sdk.UserLevelSummaryDTOV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createCustomUserLevel(requestParameters) as Promise<AxiosResponse<sdk.UserLevelSummaryDTOV2025, any>>;
}
async deleteUserLevel(requestParameters: sdk.CustomUserLevelsV2025ApiDeleteUserLevelRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteUserLevel(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getUserLevel(requestParameters: sdk.CustomUserLevelsV2025ApiGetUserLevelRequest): Promise<AxiosResponse<sdk.UserLevelSummaryDTOV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getUserLevel(requestParameters) as Promise<AxiosResponse<sdk.UserLevelSummaryDTOV2025, any>>;
}
async listAllAuthorizationRightSets(requestParameters: sdk.CustomUserLevelsV2025ApiListAllAuthorizationRightSetsRequest = {}): Promise<AxiosResponse<Array<sdk.HierarchicalRightSetV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAllAuthorizationRightSets(requestParameters) as Promise<AxiosResponse<Array<sdk.HierarchicalRightSetV2025>, any>>;
}
async listUserLevels(requestParameters: sdk.CustomUserLevelsV2025ApiListUserLevelsRequest = {}): Promise<AxiosResponse<Array<sdk.UserLevelSummaryDTOV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listUserLevels(requestParameters) as Promise<AxiosResponse<Array<sdk.UserLevelSummaryDTOV2025>, any>>;
}
async publishCustomUserLevel(requestParameters: sdk.CustomUserLevelsV2025ApiPublishCustomUserLevelRequest): Promise<AxiosResponse<sdk.UserLevelPublishSummaryV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.publishCustomUserLevel(requestParameters) as Promise<AxiosResponse<sdk.UserLevelPublishSummaryV2025, any>>;
}
async updateUserLevel(requestParameters: sdk.CustomUserLevelsV2025ApiUpdateUserLevelRequest): Promise<AxiosResponse<sdk.UserLevelSummaryDTOV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateUserLevel(requestParameters) as Promise<AxiosResponse<sdk.UserLevelSummaryDTOV2025, any>>;
}

async createDataSegment(requestParameters: sdk.DataSegmentationV2025ApiCreateDataSegmentRequest): Promise<AxiosResponse<sdk.DataSegmentV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createDataSegment(requestParameters) as Promise<AxiosResponse<sdk.DataSegmentV2025, any>>;
}
async deleteDataSegment(requestParameters: sdk.DataSegmentationV2025ApiDeleteDataSegmentRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteDataSegment(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getDataSegment(requestParameters: sdk.DataSegmentationV2025ApiGetDataSegmentRequest): Promise<AxiosResponse<sdk.DataSegmentV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getDataSegment(requestParameters) as Promise<AxiosResponse<sdk.DataSegmentV2025, any>>;
}
async getDataSegmentIdentityMembership(requestParameters: sdk.DataSegmentationV2025ApiGetDataSegmentIdentityMembershipRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getDataSegmentIdentityMembership(requestParameters) as Promise<AxiosResponse<object, any>>;
}
async getDataSegmentationEnabledForUser(requestParameters: sdk.DataSegmentationV2025ApiGetDataSegmentationEnabledForUserRequest): Promise<AxiosResponse<boolean, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getDataSegmentationEnabledForUser(requestParameters) as Promise<AxiosResponse<boolean, any>>;
}
async listDataSegments(requestParameters: sdk.DataSegmentationV2025ApiListDataSegmentsRequest = {}): Promise<AxiosResponse<Array<sdk.DataSegmentV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listDataSegments(requestParameters) as Promise<AxiosResponse<Array<sdk.DataSegmentV2025>, any>>;
}
async patchDataSegment(requestParameters: sdk.DataSegmentationV2025ApiPatchDataSegmentRequest): Promise<AxiosResponse<sdk.DataSegmentV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchDataSegment(requestParameters) as Promise<AxiosResponse<sdk.DataSegmentV2025, any>>;
}
async publishDataSegment(requestParameters: sdk.DataSegmentationV2025ApiPublishDataSegmentRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.publishDataSegment(requestParameters) as Promise<AxiosResponse<void, any>>;
}

async createDimension(requestParameters: sdk.DimensionsV2025ApiCreateDimensionRequest): Promise<AxiosResponse<sdk.DimensionV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createDimension(requestParameters) as Promise<AxiosResponse<sdk.DimensionV2025, any>>;
}
async deleteBulkDimensions(requestParameters: sdk.DimensionsV2025ApiDeleteBulkDimensionsRequest): Promise<AxiosResponse<sdk.TaskResultDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteBulkDimensions(requestParameters) as Promise<AxiosResponse<sdk.TaskResultDtoV2025, any>>;
}
async deleteDimension(requestParameters: sdk.DimensionsV2025ApiDeleteDimensionRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteDimension(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getDimension(requestParameters: sdk.DimensionsV2025ApiGetDimensionRequest): Promise<AxiosResponse<sdk.DimensionV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getDimension(requestParameters) as Promise<AxiosResponse<sdk.DimensionV2025, any>>;
}
async getDimensionEntitlements(requestParameters: sdk.DimensionsV2025ApiGetDimensionEntitlementsRequest): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getDimensionEntitlements(requestParameters) as Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>>;
}
async listDimensionAccessProfiles(requestParameters: sdk.DimensionsV2025ApiListDimensionAccessProfilesRequest): Promise<AxiosResponse<Array<sdk.AccessProfileV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listDimensionAccessProfiles(requestParameters) as Promise<AxiosResponse<Array<sdk.AccessProfileV2025>, any>>;
}
async listDimensions(requestParameters: sdk.DimensionsV2025ApiListDimensionsRequest): Promise<AxiosResponse<Array<sdk.DimensionV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listDimensions(requestParameters) as Promise<AxiosResponse<Array<sdk.DimensionV2025>, any>>;
}
async patchDimension(requestParameters: sdk.DimensionsV2025ApiPatchDimensionRequest): Promise<AxiosResponse<sdk.DimensionV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchDimension(requestParameters) as Promise<AxiosResponse<sdk.DimensionV2025, any>>;
}

async createAccessModelMetadataForEntitlement(requestParameters: sdk.EntitlementsV2025ApiCreateAccessModelMetadataForEntitlementRequest): Promise<AxiosResponse<sdk.EntitlementV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createAccessModelMetadataForEntitlement(requestParameters) as Promise<AxiosResponse<sdk.EntitlementV2025, any>>;
}
async deleteAccessModelMetadataFromEntitlement(requestParameters: sdk.EntitlementsV2025ApiDeleteAccessModelMetadataFromEntitlementRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteAccessModelMetadataFromEntitlement(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getEntitlement(requestParameters: sdk.EntitlementsV2025ApiGetEntitlementRequest): Promise<AxiosResponse<sdk.EntitlementV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getEntitlement(requestParameters) as Promise<AxiosResponse<sdk.EntitlementV2025, any>>;
}
async getEntitlementRequestConfig(requestParameters: sdk.EntitlementsV2025ApiGetEntitlementRequestConfigRequest): Promise<AxiosResponse<sdk.EntitlementRequestConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getEntitlementRequestConfig(requestParameters) as Promise<AxiosResponse<sdk.EntitlementRequestConfigV2025, any>>;
}
async importEntitlementsBySource(requestParameters: sdk.EntitlementsV2025ApiImportEntitlementsBySourceRequest): Promise<AxiosResponse<sdk.LoadEntitlementTaskV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.importEntitlementsBySource(requestParameters) as Promise<AxiosResponse<sdk.LoadEntitlementTaskV2025, any>>;
}
async listEntitlementChildren(requestParameters: sdk.EntitlementsV2025ApiListEntitlementChildrenRequest): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listEntitlementChildren(requestParameters) as Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>>;
}
async listEntitlementParents(requestParameters: sdk.EntitlementsV2025ApiListEntitlementParentsRequest): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listEntitlementParents(requestParameters) as Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>>;
}
async listEntitlements(requestParameters: sdk.EntitlementsV2025ApiListEntitlementsRequest = {}): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listEntitlements(requestParameters) as Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>>;
}
async patchEntitlement(requestParameters: sdk.EntitlementsV2025ApiPatchEntitlementRequest): Promise<AxiosResponse<sdk.EntitlementV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchEntitlement(requestParameters) as Promise<AxiosResponse<sdk.EntitlementV2025, any>>;
}
async putEntitlementRequestConfig(requestParameters: sdk.EntitlementsV2025ApiPutEntitlementRequestConfigRequest): Promise<AxiosResponse<sdk.EntitlementRequestConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putEntitlementRequestConfig(requestParameters) as Promise<AxiosResponse<sdk.EntitlementRequestConfigV2025, any>>;
}
async resetSourceEntitlements(requestParameters: sdk.EntitlementsV2025ApiResetSourceEntitlementsRequest): Promise<AxiosResponse<sdk.EntitlementSourceResetBaseReferenceDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.resetSourceEntitlements(requestParameters) as Promise<AxiosResponse<sdk.EntitlementSourceResetBaseReferenceDtoV2025, any>>;
}
async updateEntitlementsInBulk(requestParameters: sdk.EntitlementsV2025ApiUpdateEntitlementsInBulkRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateEntitlementsInBulk(requestParameters) as Promise<AxiosResponse<void, any>>;
}

async createAuthOrgNetworkConfig(requestParameters: sdk.GlobalTenantSecuritySettingsV2025ApiCreateAuthOrgNetworkConfigRequest): Promise<AxiosResponse<sdk.NetworkConfigurationV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createAuthOrgNetworkConfig(requestParameters) as Promise<AxiosResponse<sdk.NetworkConfigurationV2025, any>>;
}
async getAuthOrgLockoutConfig(): Promise<AxiosResponse<sdk.LockoutConfigurationV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAuthOrgLockoutConfig() as Promise<AxiosResponse<sdk.LockoutConfigurationV2025, any>>;
}
async getAuthOrgNetworkConfig(): Promise<AxiosResponse<sdk.NetworkConfigurationV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAuthOrgNetworkConfig() as Promise<AxiosResponse<sdk.NetworkConfigurationV2025, any>>;
}
async getAuthOrgServiceProviderConfig(): Promise<AxiosResponse<sdk.ServiceProviderConfigurationV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAuthOrgServiceProviderConfig() as Promise<AxiosResponse<sdk.ServiceProviderConfigurationV2025, any>>;
}
async getAuthOrgSessionConfig(): Promise<AxiosResponse<sdk.SessionConfigurationV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAuthOrgSessionConfig() as Promise<AxiosResponse<sdk.SessionConfigurationV2025, any>>;
}
async patchAuthOrgLockoutConfig(requestParameters: sdk.GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgLockoutConfigRequest): Promise<AxiosResponse<sdk.LockoutConfigurationV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchAuthOrgLockoutConfig(requestParameters) as Promise<AxiosResponse<sdk.LockoutConfigurationV2025, any>>;
}
async patchAuthOrgNetworkConfig(requestParameters: sdk.GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgNetworkConfigRequest): Promise<AxiosResponse<sdk.NetworkConfigurationV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchAuthOrgNetworkConfig(requestParameters) as Promise<AxiosResponse<sdk.NetworkConfigurationV2025, any>>;
}
async patchAuthOrgServiceProviderConfig(requestParameters: sdk.GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgServiceProviderConfigRequest): Promise<AxiosResponse<sdk.ServiceProviderConfigurationV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchAuthOrgServiceProviderConfig(requestParameters) as Promise<AxiosResponse<sdk.ServiceProviderConfigurationV2025, any>>;
}
async patchAuthOrgSessionConfig(requestParameters: sdk.GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgSessionConfigRequest): Promise<AxiosResponse<sdk.SessionConfigurationV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchAuthOrgSessionConfig(requestParameters) as Promise<AxiosResponse<sdk.SessionConfigurationV2025, any>>;
}

async createWorkgroup(requestParameters: sdk.GovernanceGroupsV2025ApiCreateWorkgroupRequest): Promise<AxiosResponse<sdk.WorkgroupDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createWorkgroup(requestParameters) as Promise<AxiosResponse<sdk.WorkgroupDtoV2025, any>>;
}
async deleteWorkgroup(requestParameters: sdk.GovernanceGroupsV2025ApiDeleteWorkgroupRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteWorkgroup(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteWorkgroupMembers(requestParameters: sdk.GovernanceGroupsV2025ApiDeleteWorkgroupMembersRequest): Promise<AxiosResponse<Array<sdk.WorkgroupMemberDeleteItemV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteWorkgroupMembers(requestParameters) as Promise<AxiosResponse<Array<sdk.WorkgroupMemberDeleteItemV2025>, any>>;
}
async deleteWorkgroupsInBulk(requestParameters: sdk.GovernanceGroupsV2025ApiDeleteWorkgroupsInBulkRequest): Promise<AxiosResponse<Array<sdk.WorkgroupDeleteItemV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteWorkgroupsInBulk(requestParameters) as Promise<AxiosResponse<Array<sdk.WorkgroupDeleteItemV2025>, any>>;
}
async getWorkgroup(requestParameters: sdk.GovernanceGroupsV2025ApiGetWorkgroupRequest): Promise<AxiosResponse<sdk.WorkgroupDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getWorkgroup(requestParameters) as Promise<AxiosResponse<sdk.WorkgroupDtoV2025, any>>;
}
async listConnections(requestParameters: sdk.GovernanceGroupsV2025ApiListConnectionsRequest): Promise<AxiosResponse<Array<sdk.WorkgroupConnectionDtoV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listConnections(requestParameters) as Promise<AxiosResponse<Array<sdk.WorkgroupConnectionDtoV2025>, any>>;
}
async listWorkgroupMembers(requestParameters: sdk.GovernanceGroupsV2025ApiListWorkgroupMembersRequest): Promise<AxiosResponse<Array<sdk.ListWorkgroupMembers200ResponseInnerV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listWorkgroupMembers(requestParameters) as Promise<AxiosResponse<Array<sdk.ListWorkgroupMembers200ResponseInnerV2025>, any>>;
}
async listWorkgroups(requestParameters: sdk.GovernanceGroupsV2025ApiListWorkgroupsRequest = {}): Promise<AxiosResponse<Array<sdk.WorkgroupDtoV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listWorkgroups(requestParameters) as Promise<AxiosResponse<Array<sdk.WorkgroupDtoV2025>, any>>;
}
async patchWorkgroup(requestParameters: sdk.GovernanceGroupsV2025ApiPatchWorkgroupRequest): Promise<AxiosResponse<sdk.WorkgroupDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchWorkgroup(requestParameters) as Promise<AxiosResponse<sdk.WorkgroupDtoV2025, any>>;
}
async updateWorkgroupMembers(requestParameters: sdk.GovernanceGroupsV2025ApiUpdateWorkgroupMembersRequest): Promise<AxiosResponse<Array<sdk.WorkgroupMemberAddItemV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateWorkgroupMembers(requestParameters) as Promise<AxiosResponse<Array<sdk.WorkgroupMemberAddItemV2025>, any>>;
}

async addAccessRequestRecommendationsIgnoredItem(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsIgnoredItemRequest): Promise<AxiosResponse<sdk.AccessRequestRecommendationActionItemResponseDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.addAccessRequestRecommendationsIgnoredItem(requestParameters) as Promise<AxiosResponse<sdk.AccessRequestRecommendationActionItemResponseDtoV2025, any>>;
}
async addAccessRequestRecommendationsRequestedItem(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsRequestedItemRequest): Promise<AxiosResponse<sdk.AccessRequestRecommendationActionItemResponseDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.addAccessRequestRecommendationsRequestedItem(requestParameters) as Promise<AxiosResponse<sdk.AccessRequestRecommendationActionItemResponseDtoV2025, any>>;
}
async addAccessRequestRecommendationsViewedItem(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsViewedItemRequest): Promise<AxiosResponse<sdk.AccessRequestRecommendationActionItemResponseDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.addAccessRequestRecommendationsViewedItem(requestParameters) as Promise<AxiosResponse<sdk.AccessRequestRecommendationActionItemResponseDtoV2025, any>>;
}
async addAccessRequestRecommendationsViewedItems(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsViewedItemsRequest): Promise<AxiosResponse<Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.addAccessRequestRecommendationsViewedItems(requestParameters) as Promise<AxiosResponse<Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>, any>>;
}
async getAccessRequestRecommendations(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsRequest = {}): Promise<AxiosResponse<Array<sdk.AccessRequestRecommendationItemDetailV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessRequestRecommendations(requestParameters) as Promise<AxiosResponse<Array<sdk.AccessRequestRecommendationItemDetailV2025>, any>>;
}
async getAccessRequestRecommendationsConfig(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsConfigRequest = {}): Promise<AxiosResponse<sdk.AccessRequestRecommendationConfigDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessRequestRecommendationsConfig(requestParameters) as Promise<AxiosResponse<sdk.AccessRequestRecommendationConfigDtoV2025, any>>;
}
async getAccessRequestRecommendationsIgnoredItems(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsIgnoredItemsRequest = {}): Promise<AxiosResponse<Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessRequestRecommendationsIgnoredItems(requestParameters) as Promise<AxiosResponse<Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>, any>>;
}
async getAccessRequestRecommendationsRequestedItems(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsRequestedItemsRequest = {}): Promise<AxiosResponse<Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessRequestRecommendationsRequestedItems(requestParameters) as Promise<AxiosResponse<Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>, any>>;
}
async getAccessRequestRecommendationsViewedItems(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsViewedItemsRequest = {}): Promise<AxiosResponse<Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessRequestRecommendationsViewedItems(requestParameters) as Promise<AxiosResponse<Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>, any>>;
}
async setAccessRequestRecommendationsConfig(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiSetAccessRequestRecommendationsConfigRequest): Promise<AxiosResponse<sdk.AccessRequestRecommendationConfigDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setAccessRequestRecommendationsConfig(requestParameters) as Promise<AxiosResponse<sdk.AccessRequestRecommendationConfigDtoV2025, any>>;
}

async createCommonAccess(requestParameters: sdk.IAICommonAccessV2025ApiCreateCommonAccessRequest): Promise<AxiosResponse<sdk.CommonAccessItemResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createCommonAccess(requestParameters) as Promise<AxiosResponse<sdk.CommonAccessItemResponseV2025, any>>;
}
async getCommonAccess(requestParameters: sdk.IAICommonAccessV2025ApiGetCommonAccessRequest = {}): Promise<AxiosResponse<Array<sdk.CommonAccessResponseV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCommonAccess(requestParameters) as Promise<AxiosResponse<Array<sdk.CommonAccessResponseV2025>, any>>;
}
async updateCommonAccessStatusInBulk(requestParameters: sdk.IAICommonAccessV2025ApiUpdateCommonAccessStatusInBulkRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateCommonAccessStatusInBulk(requestParameters) as Promise<AxiosResponse<object, any>>;
}

async exportOutliersZip(requestParameters: sdk.IAIOutliersV2025ApiExportOutliersZipRequest = {}): Promise<AxiosResponse<File, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.exportOutliersZip(requestParameters) as Promise<AxiosResponse<File, any>>;
}
async getIdentityOutlierSnapshots(requestParameters: sdk.IAIOutliersV2025ApiGetIdentityOutlierSnapshotsRequest = {}): Promise<AxiosResponse<Array<sdk.OutlierSummaryV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentityOutlierSnapshots(requestParameters) as Promise<AxiosResponse<Array<sdk.OutlierSummaryV2025>, any>>;
}
async getIdentityOutliers(requestParameters: sdk.IAIOutliersV2025ApiGetIdentityOutliersRequest = {}): Promise<AxiosResponse<Array<sdk.OutlierV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentityOutliers(requestParameters) as Promise<AxiosResponse<Array<sdk.OutlierV2025>, any>>;
}
async getLatestIdentityOutlierSnapshots(requestParameters: sdk.IAIOutliersV2025ApiGetLatestIdentityOutlierSnapshotsRequest = {}): Promise<AxiosResponse<Array<sdk.LatestOutlierSummaryV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getLatestIdentityOutlierSnapshots(requestParameters) as Promise<AxiosResponse<Array<sdk.LatestOutlierSummaryV2025>, any>>;
}
async getOutlierContributingFeatureSummary(requestParameters: sdk.IAIOutliersV2025ApiGetOutlierContributingFeatureSummaryRequest): Promise<AxiosResponse<sdk.OutlierFeatureSummaryV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getOutlierContributingFeatureSummary(requestParameters) as Promise<AxiosResponse<sdk.OutlierFeatureSummaryV2025, any>>;
}
async getPeerGroupOutliersContributingFeatures(requestParameters: sdk.IAIOutliersV2025ApiGetPeerGroupOutliersContributingFeaturesRequest): Promise<AxiosResponse<Array<sdk.OutlierContributingFeatureV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPeerGroupOutliersContributingFeatures(requestParameters) as Promise<AxiosResponse<Array<sdk.OutlierContributingFeatureV2025>, any>>;
}
async ignoreIdentityOutliers(requestParameters: sdk.IAIOutliersV2025ApiIgnoreIdentityOutliersRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.ignoreIdentityOutliers(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async listOutliersContributingFeatureAccessItems(requestParameters: sdk.IAIOutliersV2025ApiListOutliersContributingFeatureAccessItemsRequest): Promise<AxiosResponse<Array<sdk.OutliersContributingFeatureAccessItemsV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listOutliersContributingFeatureAccessItems(requestParameters) as Promise<AxiosResponse<Array<sdk.OutliersContributingFeatureAccessItemsV2025>, any>>;
}
async unIgnoreIdentityOutliers(requestParameters: sdk.IAIOutliersV2025ApiUnIgnoreIdentityOutliersRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.unIgnoreIdentityOutliers(requestParameters) as Promise<AxiosResponse<void, any>>;
}

async getPeerGroupOutliers(requestParameters: sdk.IAIPeerGroupStrategiesV2025ApiGetPeerGroupOutliersRequest): Promise<AxiosResponse<Array<sdk.PeerGroupMemberV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPeerGroupOutliers(requestParameters) as Promise<AxiosResponse<Array<sdk.PeerGroupMemberV2025>, any>>;
}

async getRecommendations(requestParameters: sdk.IAIRecommendationsV2025ApiGetRecommendationsRequest): Promise<AxiosResponse<sdk.RecommendationResponseDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRecommendations(requestParameters) as Promise<AxiosResponse<sdk.RecommendationResponseDtoV2025, any>>;
}
async getRecommendationsConfig(requestParameters: sdk.IAIRecommendationsV2025ApiGetRecommendationsConfigRequest = {}): Promise<AxiosResponse<sdk.RecommendationConfigDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRecommendationsConfig(requestParameters) as Promise<AxiosResponse<sdk.RecommendationConfigDtoV2025, any>>;
}
async updateRecommendationsConfig(requestParameters: sdk.IAIRecommendationsV2025ApiUpdateRecommendationsConfigRequest): Promise<AxiosResponse<sdk.RecommendationConfigDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateRecommendationsConfig(requestParameters) as Promise<AxiosResponse<sdk.RecommendationConfigDtoV2025, any>>;
}

async createPotentialRoleProvisionRequest(requestParameters: sdk.IAIRoleMiningV2025ApiCreatePotentialRoleProvisionRequestRequest): Promise<AxiosResponse<sdk.RoleMiningPotentialRoleSummaryV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createPotentialRoleProvisionRequest(requestParameters) as Promise<AxiosResponse<sdk.RoleMiningPotentialRoleSummaryV2025, any>>;
}
async createRoleMiningSessions(requestParameters: sdk.IAIRoleMiningV2025ApiCreateRoleMiningSessionsRequest): Promise<AxiosResponse<sdk.RoleMiningSessionResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createRoleMiningSessions(requestParameters) as Promise<AxiosResponse<sdk.RoleMiningSessionResponseV2025, any>>;
}
async downloadRoleMiningPotentialRoleZip(requestParameters: sdk.IAIRoleMiningV2025ApiDownloadRoleMiningPotentialRoleZipRequest): Promise<AxiosResponse<File, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.downloadRoleMiningPotentialRoleZip(requestParameters) as Promise<AxiosResponse<File, any>>;
}
async exportRoleMiningPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiExportRoleMiningPotentialRoleRequest): Promise<AxiosResponse<File, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.exportRoleMiningPotentialRole(requestParameters) as Promise<AxiosResponse<File, any>>;
}
async exportRoleMiningPotentialRoleAsync(requestParameters: sdk.IAIRoleMiningV2025ApiExportRoleMiningPotentialRoleAsyncRequest): Promise<AxiosResponse<sdk.RoleMiningPotentialRoleExportResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.exportRoleMiningPotentialRoleAsync(requestParameters) as Promise<AxiosResponse<sdk.RoleMiningPotentialRoleExportResponseV2025, any>>;
}
async exportRoleMiningPotentialRoleStatus(requestParameters: sdk.IAIRoleMiningV2025ApiExportRoleMiningPotentialRoleStatusRequest): Promise<AxiosResponse<sdk.RoleMiningPotentialRoleExportResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.exportRoleMiningPotentialRoleStatus(requestParameters) as Promise<AxiosResponse<sdk.RoleMiningPotentialRoleExportResponseV2025, any>>;
}
async getAllPotentialRoleSummaries(requestParameters: sdk.IAIRoleMiningV2025ApiGetAllPotentialRoleSummariesRequest = {}): Promise<AxiosResponse<Array<sdk.RoleMiningPotentialRoleSummaryV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAllPotentialRoleSummaries(requestParameters) as Promise<AxiosResponse<Array<sdk.RoleMiningPotentialRoleSummaryV2025>, any>>;
}
async getEntitlementDistributionPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiGetEntitlementDistributionPotentialRoleRequest): Promise<AxiosResponse<{ [key: string]: number; }, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getEntitlementDistributionPotentialRole(requestParameters) as Promise<AxiosResponse<{ [key: string]: number; }, any>>;
}
async getEntitlementsPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiGetEntitlementsPotentialRoleRequest): Promise<AxiosResponse<Array<sdk.RoleMiningEntitlementV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getEntitlementsPotentialRole(requestParameters) as Promise<AxiosResponse<Array<sdk.RoleMiningEntitlementV2025>, any>>;
}
async getExcludedEntitlementsPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiGetExcludedEntitlementsPotentialRoleRequest): Promise<AxiosResponse<Array<sdk.RoleMiningEntitlementV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getExcludedEntitlementsPotentialRole(requestParameters) as Promise<AxiosResponse<Array<sdk.RoleMiningEntitlementV2025>, any>>;
}
async getIdentitiesPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiGetIdentitiesPotentialRoleRequest): Promise<AxiosResponse<Array<sdk.RoleMiningIdentityV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentitiesPotentialRole(requestParameters) as Promise<AxiosResponse<Array<sdk.RoleMiningIdentityV2025>, any>>;
}
async getPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiGetPotentialRoleRequest): Promise<AxiosResponse<sdk.RoleMiningPotentialRoleV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPotentialRole(requestParameters) as Promise<AxiosResponse<sdk.RoleMiningPotentialRoleV2025, any>>;
}
async getPotentialRoleApplications(requestParameters: sdk.IAIRoleMiningV2025ApiGetPotentialRoleApplicationsRequest): Promise<AxiosResponse<Array<sdk.RoleMiningPotentialRoleApplicationV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPotentialRoleApplications(requestParameters) as Promise<AxiosResponse<Array<sdk.RoleMiningPotentialRoleApplicationV2025>, any>>;
}
async getPotentialRoleEntitlements(requestParameters: sdk.IAIRoleMiningV2025ApiGetPotentialRoleEntitlementsRequest): Promise<AxiosResponse<Array<sdk.RoleMiningPotentialRoleEntitlementsV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPotentialRoleEntitlements(requestParameters) as Promise<AxiosResponse<Array<sdk.RoleMiningPotentialRoleEntitlementsV2025>, any>>;
}
async getPotentialRoleSourceIdentityUsage(requestParameters: sdk.IAIRoleMiningV2025ApiGetPotentialRoleSourceIdentityUsageRequest): Promise<AxiosResponse<Array<sdk.RoleMiningPotentialRoleSourceUsageV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPotentialRoleSourceIdentityUsage(requestParameters) as Promise<AxiosResponse<Array<sdk.RoleMiningPotentialRoleSourceUsageV2025>, any>>;
}
async getPotentialRoleSummaries(requestParameters: sdk.IAIRoleMiningV2025ApiGetPotentialRoleSummariesRequest): Promise<AxiosResponse<Array<sdk.RoleMiningPotentialRoleSummaryV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPotentialRoleSummaries(requestParameters) as Promise<AxiosResponse<Array<sdk.RoleMiningPotentialRoleSummaryV2025>, any>>;
}
async getRoleMiningPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiGetRoleMiningPotentialRoleRequest): Promise<AxiosResponse<sdk.RoleMiningPotentialRoleV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleMiningPotentialRole(requestParameters) as Promise<AxiosResponse<sdk.RoleMiningPotentialRoleV2025, any>>;
}
async getRoleMiningSession(requestParameters: sdk.IAIRoleMiningV2025ApiGetRoleMiningSessionRequest): Promise<AxiosResponse<sdk.RoleMiningSessionResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleMiningSession(requestParameters) as Promise<AxiosResponse<sdk.RoleMiningSessionResponseV2025, any>>;
}
async getRoleMiningSessionStatus(requestParameters: sdk.IAIRoleMiningV2025ApiGetRoleMiningSessionStatusRequest): Promise<AxiosResponse<sdk.RoleMiningSessionStatusV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleMiningSessionStatus(requestParameters) as Promise<AxiosResponse<sdk.RoleMiningSessionStatusV2025, any>>;
}
async getRoleMiningSessions(requestParameters: sdk.IAIRoleMiningV2025ApiGetRoleMiningSessionsRequest = {}): Promise<AxiosResponse<Array<sdk.RoleMiningSessionDtoV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleMiningSessions(requestParameters) as Promise<AxiosResponse<Array<sdk.RoleMiningSessionDtoV2025>, any>>;
}
async getSavedPotentialRoles(requestParameters: sdk.IAIRoleMiningV2025ApiGetSavedPotentialRolesRequest = {}): Promise<AxiosResponse<Array<sdk.RoleMiningSessionDraftRoleDtoV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSavedPotentialRoles(requestParameters) as Promise<AxiosResponse<Array<sdk.RoleMiningSessionDraftRoleDtoV2025>, any>>;
}
async patchPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiPatchPotentialRoleRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchPotentialRole(requestParameters) as Promise<AxiosResponse<object, any>>;
}
async patchPotentialRole_1(requestParameters: sdk.IAIRoleMiningV2025ApiPatchPotentialRole0Request): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchPotentialRole_1(requestParameters) as Promise<AxiosResponse<object, any>>;
}
async patchRoleMiningSession(requestParameters: sdk.IAIRoleMiningV2025ApiPatchRoleMiningSessionRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchRoleMiningSession(requestParameters) as Promise<AxiosResponse<object, any>>;
}
async updateEntitlementsPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiUpdateEntitlementsPotentialRoleRequest): Promise<AxiosResponse<sdk.RoleMiningPotentialRoleV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateEntitlementsPotentialRole(requestParameters) as Promise<AxiosResponse<sdk.RoleMiningPotentialRoleV2025, any>>;
}

async deleteIcon(requestParameters: sdk.IconsV2025ApiDeleteIconRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteIcon(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async setIcon(requestParameters: sdk.IconsV2025ApiSetIconRequest): Promise<AxiosResponse<sdk.SetIcon200ResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setIcon(requestParameters) as Promise<AxiosResponse<sdk.SetIcon200ResponseV2025, any>>;
}

async deleteIdentity(requestParameters: sdk.IdentitiesV2025ApiDeleteIdentityRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteIdentity(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getIdentity(requestParameters: sdk.IdentitiesV2025ApiGetIdentityRequest): Promise<AxiosResponse<sdk.IdentityV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentity(requestParameters) as Promise<AxiosResponse<sdk.IdentityV2025, any>>;
}
async getIdentityOwnershipDetails(requestParameters: sdk.IdentitiesV2025ApiGetIdentityOwnershipDetailsRequest): Promise<AxiosResponse<sdk.IdentityOwnershipAssociationDetailsV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentityOwnershipDetails(requestParameters) as Promise<AxiosResponse<sdk.IdentityOwnershipAssociationDetailsV2025, any>>;
}
async getRoleAssignment(requestParameters: sdk.IdentitiesV2025ApiGetRoleAssignmentRequest): Promise<AxiosResponse<sdk.RoleAssignmentDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleAssignment(requestParameters) as Promise<AxiosResponse<sdk.RoleAssignmentDtoV2025, any>>;
}
async getRoleAssignments(requestParameters: sdk.IdentitiesV2025ApiGetRoleAssignmentsRequest): Promise<AxiosResponse<Array<sdk.GetRoleAssignments200ResponseInnerV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleAssignments(requestParameters) as Promise<AxiosResponse<Array<sdk.GetRoleAssignments200ResponseInnerV2025>, any>>;
}
async listEntitlementsByIdentity(requestParameters: sdk.IdentitiesV2025ApiListEntitlementsByIdentityRequest): Promise<AxiosResponse<Array<sdk.IdentityEntitlementsV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listEntitlementsByIdentity(requestParameters) as Promise<AxiosResponse<Array<sdk.IdentityEntitlementsV2025>, any>>;
}
async listIdentities(requestParameters: sdk.IdentitiesV2025ApiListIdentitiesRequest = {}): Promise<AxiosResponse<Array<sdk.IdentityV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listIdentities(requestParameters) as Promise<AxiosResponse<Array<sdk.IdentityV2025>, any>>;
}
async resetIdentity(requestParameters: sdk.IdentitiesV2025ApiResetIdentityRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.resetIdentity(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async sendIdentityVerificationAccountToken(requestParameters: sdk.IdentitiesV2025ApiSendIdentityVerificationAccountTokenRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.sendIdentityVerificationAccountToken(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async startIdentitiesInvite(requestParameters: sdk.IdentitiesV2025ApiStartIdentitiesInviteRequest): Promise<AxiosResponse<sdk.TaskStatusV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startIdentitiesInvite(requestParameters) as Promise<AxiosResponse<sdk.TaskStatusV2025, any>>;
}
async startIdentityProcessing(requestParameters: sdk.IdentitiesV2025ApiStartIdentityProcessingRequest): Promise<AxiosResponse<sdk.TaskResultResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startIdentityProcessing(requestParameters) as Promise<AxiosResponse<sdk.TaskResultResponseV2025, any>>;
}
async synchronizeAttributesForIdentity(requestParameters: sdk.IdentitiesV2025ApiSynchronizeAttributesForIdentityRequest): Promise<AxiosResponse<sdk.IdentitySyncJobV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.synchronizeAttributesForIdentity(requestParameters) as Promise<AxiosResponse<sdk.IdentitySyncJobV2025, any>>;
}

async createIdentityAttribute(requestParameters: sdk.IdentityAttributesV2025ApiCreateIdentityAttributeRequest): Promise<AxiosResponse<sdk.IdentityAttributeV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createIdentityAttribute(requestParameters) as Promise<AxiosResponse<sdk.IdentityAttributeV2025, any>>;
}
async deleteIdentityAttribute(requestParameters: sdk.IdentityAttributesV2025ApiDeleteIdentityAttributeRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteIdentityAttribute(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteIdentityAttributesInBulk(requestParameters: sdk.IdentityAttributesV2025ApiDeleteIdentityAttributesInBulkRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteIdentityAttributesInBulk(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getIdentityAttribute(requestParameters: sdk.IdentityAttributesV2025ApiGetIdentityAttributeRequest): Promise<AxiosResponse<sdk.IdentityAttributeV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentityAttribute(requestParameters) as Promise<AxiosResponse<sdk.IdentityAttributeV2025, any>>;
}
async listIdentityAttributes(requestParameters: sdk.IdentityAttributesV2025ApiListIdentityAttributesRequest = {}): Promise<AxiosResponse<Array<sdk.IdentityAttributeV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listIdentityAttributes(requestParameters) as Promise<AxiosResponse<Array<sdk.IdentityAttributeV2025>, any>>;
}
async putIdentityAttribute(requestParameters: sdk.IdentityAttributesV2025ApiPutIdentityAttributeRequest): Promise<AxiosResponse<sdk.IdentityAttributeV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putIdentityAttribute(requestParameters) as Promise<AxiosResponse<sdk.IdentityAttributeV2025, any>>;
}

async compareIdentitySnapshots(requestParameters: sdk.IdentityHistoryV2025ApiCompareIdentitySnapshotsRequest): Promise<AxiosResponse<Array<sdk.IdentityCompareResponseV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.compareIdentitySnapshots(requestParameters) as Promise<AxiosResponse<Array<sdk.IdentityCompareResponseV2025>, any>>;
}
async compareIdentitySnapshotsAccessType(requestParameters: sdk.IdentityHistoryV2025ApiCompareIdentitySnapshotsAccessTypeRequest): Promise<AxiosResponse<Array<sdk.AccessItemDiffV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.compareIdentitySnapshotsAccessType(requestParameters) as Promise<AxiosResponse<Array<sdk.AccessItemDiffV2025>, any>>;
}
async getHistoricalIdentity(requestParameters: sdk.IdentityHistoryV2025ApiGetHistoricalIdentityRequest): Promise<AxiosResponse<sdk.IdentityHistoryResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getHistoricalIdentity(requestParameters) as Promise<AxiosResponse<sdk.IdentityHistoryResponseV2025, any>>;
}
async getHistoricalIdentityEvents(requestParameters: sdk.IdentityHistoryV2025ApiGetHistoricalIdentityEventsRequest): Promise<AxiosResponse<Array<sdk.GetHistoricalIdentityEvents200ResponseInnerV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getHistoricalIdentityEvents(requestParameters) as Promise<AxiosResponse<Array<sdk.GetHistoricalIdentityEvents200ResponseInnerV2025>, any>>;
}
async getIdentitySnapshot(requestParameters: sdk.IdentityHistoryV2025ApiGetIdentitySnapshotRequest): Promise<AxiosResponse<sdk.IdentityHistoryResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentitySnapshot(requestParameters) as Promise<AxiosResponse<sdk.IdentityHistoryResponseV2025, any>>;
}
async getIdentitySnapshotSummary(requestParameters: sdk.IdentityHistoryV2025ApiGetIdentitySnapshotSummaryRequest): Promise<AxiosResponse<Array<sdk.MetricResponseV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentitySnapshotSummary(requestParameters) as Promise<AxiosResponse<Array<sdk.MetricResponseV2025>, any>>;
}
async getIdentityStartDate(requestParameters: sdk.IdentityHistoryV2025ApiGetIdentityStartDateRequest): Promise<AxiosResponse<string, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentityStartDate(requestParameters) as Promise<AxiosResponse<string, any>>;
}
async listHistoricalIdentities(requestParameters: sdk.IdentityHistoryV2025ApiListHistoricalIdentitiesRequest = {}): Promise<AxiosResponse<Array<sdk.IdentityListItemV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listHistoricalIdentities(requestParameters) as Promise<AxiosResponse<Array<sdk.IdentityListItemV2025>, any>>;
}
async listIdentityAccessItems(requestParameters: sdk.IdentityHistoryV2025ApiListIdentityAccessItemsRequest): Promise<AxiosResponse<Array<sdk.ListIdentityAccessItems200ResponseInnerV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listIdentityAccessItems(requestParameters) as Promise<AxiosResponse<Array<sdk.ListIdentityAccessItems200ResponseInnerV2025>, any>>;
}
async listIdentitySnapshotAccessItems(requestParameters: sdk.IdentityHistoryV2025ApiListIdentitySnapshotAccessItemsRequest): Promise<AxiosResponse<Array<sdk.ListIdentitySnapshotAccessItems200ResponseInnerV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listIdentitySnapshotAccessItems(requestParameters) as Promise<AxiosResponse<Array<sdk.ListIdentitySnapshotAccessItems200ResponseInnerV2025>, any>>;
}
async listIdentitySnapshots(requestParameters: sdk.IdentityHistoryV2025ApiListIdentitySnapshotsRequest): Promise<AxiosResponse<Array<sdk.IdentitySnapshotSummaryResponseV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listIdentitySnapshots(requestParameters) as Promise<AxiosResponse<Array<sdk.IdentitySnapshotSummaryResponseV2025>, any>>;
}

async createIdentityProfile(requestParameters: sdk.IdentityProfilesV2025ApiCreateIdentityProfileRequest): Promise<AxiosResponse<sdk.IdentityProfileV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createIdentityProfile(requestParameters) as Promise<AxiosResponse<sdk.IdentityProfileV2025, any>>;
}
async deleteIdentityProfile(requestParameters: sdk.IdentityProfilesV2025ApiDeleteIdentityProfileRequest): Promise<AxiosResponse<sdk.TaskResultSimplifiedV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteIdentityProfile(requestParameters) as Promise<AxiosResponse<sdk.TaskResultSimplifiedV2025, any>>;
}
async deleteIdentityProfiles(requestParameters: sdk.IdentityProfilesV2025ApiDeleteIdentityProfilesRequest): Promise<AxiosResponse<sdk.TaskResultSimplifiedV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteIdentityProfiles(requestParameters) as Promise<AxiosResponse<sdk.TaskResultSimplifiedV2025, any>>;
}
async exportIdentityProfiles(requestParameters: sdk.IdentityProfilesV2025ApiExportIdentityProfilesRequest = {}): Promise<AxiosResponse<Array<sdk.IdentityProfileExportedObjectV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.exportIdentityProfiles(requestParameters) as Promise<AxiosResponse<Array<sdk.IdentityProfileExportedObjectV2025>, any>>;
}
async generateIdentityPreview(requestParameters: sdk.IdentityProfilesV2025ApiGenerateIdentityPreviewRequest): Promise<AxiosResponse<sdk.IdentityPreviewResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.generateIdentityPreview(requestParameters) as Promise<AxiosResponse<sdk.IdentityPreviewResponseV2025, any>>;
}
async getDefaultIdentityAttributeConfig(requestParameters: sdk.IdentityProfilesV2025ApiGetDefaultIdentityAttributeConfigRequest): Promise<AxiosResponse<sdk.IdentityAttributeConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getDefaultIdentityAttributeConfig(requestParameters) as Promise<AxiosResponse<sdk.IdentityAttributeConfigV2025, any>>;
}
async getIdentityProfile(requestParameters: sdk.IdentityProfilesV2025ApiGetIdentityProfileRequest): Promise<AxiosResponse<sdk.IdentityProfileV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentityProfile(requestParameters) as Promise<AxiosResponse<sdk.IdentityProfileV2025, any>>;
}
async importIdentityProfiles(requestParameters: sdk.IdentityProfilesV2025ApiImportIdentityProfilesRequest): Promise<AxiosResponse<sdk.ObjectImportResultV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.importIdentityProfiles(requestParameters) as Promise<AxiosResponse<sdk.ObjectImportResultV2025, any>>;
}
async listIdentityProfiles(requestParameters: sdk.IdentityProfilesV2025ApiListIdentityProfilesRequest = {}): Promise<AxiosResponse<Array<sdk.IdentityProfileV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listIdentityProfiles(requestParameters) as Promise<AxiosResponse<Array<sdk.IdentityProfileV2025>, any>>;
}
async syncIdentityProfile(requestParameters: sdk.IdentityProfilesV2025ApiSyncIdentityProfileRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.syncIdentityProfile(requestParameters) as Promise<AxiosResponse<object, any>>;
}
async updateIdentityProfile(requestParameters: sdk.IdentityProfilesV2025ApiUpdateIdentityProfileRequest): Promise<AxiosResponse<sdk.IdentityProfileV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateIdentityProfile(requestParameters) as Promise<AxiosResponse<sdk.IdentityProfileV2025, any>>;
}

async createLauncher(requestParameters: sdk.LaunchersV2025ApiCreateLauncherRequest): Promise<AxiosResponse<sdk.LauncherV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createLauncher(requestParameters) as Promise<AxiosResponse<sdk.LauncherV2025, any>>;
}
async deleteLauncher(requestParameters: sdk.LaunchersV2025ApiDeleteLauncherRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteLauncher(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getLauncher(requestParameters: sdk.LaunchersV2025ApiGetLauncherRequest): Promise<AxiosResponse<sdk.LauncherV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getLauncher(requestParameters) as Promise<AxiosResponse<sdk.LauncherV2025, any>>;
}
async getLaunchers(requestParameters: sdk.LaunchersV2025ApiGetLaunchersRequest = {}): Promise<AxiosResponse<sdk.GetLaunchers200ResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getLaunchers(requestParameters) as Promise<AxiosResponse<sdk.GetLaunchers200ResponseV2025, any>>;
}
async putLauncher(requestParameters: sdk.LaunchersV2025ApiPutLauncherRequest): Promise<AxiosResponse<sdk.LauncherV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putLauncher(requestParameters) as Promise<AxiosResponse<sdk.LauncherV2025, any>>;
}
async startLauncher(requestParameters: sdk.LaunchersV2025ApiStartLauncherRequest): Promise<AxiosResponse<sdk.StartLauncher200ResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startLauncher(requestParameters) as Promise<AxiosResponse<sdk.StartLauncher200ResponseV2025, any>>;
}

async createLifecycleState(requestParameters: sdk.LifecycleStatesV2025ApiCreateLifecycleStateRequest): Promise<AxiosResponse<sdk.LifecycleStateV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createLifecycleState(requestParameters) as Promise<AxiosResponse<sdk.LifecycleStateV2025, any>>;
}
async deleteLifecycleState(requestParameters: sdk.LifecycleStatesV2025ApiDeleteLifecycleStateRequest): Promise<AxiosResponse<sdk.LifecyclestateDeletedV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteLifecycleState(requestParameters) as Promise<AxiosResponse<sdk.LifecyclestateDeletedV2025, any>>;
}
async getLifecycleState(requestParameters: sdk.LifecycleStatesV2025ApiGetLifecycleStateRequest): Promise<AxiosResponse<sdk.LifecycleStateV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getLifecycleState(requestParameters) as Promise<AxiosResponse<sdk.LifecycleStateV2025, any>>;
}
async getLifecycleStates(requestParameters: sdk.LifecycleStatesV2025ApiGetLifecycleStatesRequest): Promise<AxiosResponse<Array<sdk.LifecycleStateV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getLifecycleStates(requestParameters) as Promise<AxiosResponse<Array<sdk.LifecycleStateV2025>, any>>;
}
async setLifecycleState(requestParameters: sdk.LifecycleStatesV2025ApiSetLifecycleStateRequest): Promise<AxiosResponse<sdk.SetLifecycleState200ResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setLifecycleState(requestParameters) as Promise<AxiosResponse<sdk.SetLifecycleState200ResponseV2025, any>>;
}
async updateLifecycleStates(requestParameters: sdk.LifecycleStatesV2025ApiUpdateLifecycleStatesRequest): Promise<AxiosResponse<sdk.LifecycleStateV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateLifecycleStates(requestParameters) as Promise<AxiosResponse<sdk.LifecycleStateV2025, any>>;
}

async getMFADuoConfig(): Promise<AxiosResponse<sdk.MfaDuoConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMFADuoConfig() as Promise<AxiosResponse<sdk.MfaDuoConfigV2025, any>>;
}
async getMFAKbaConfig(requestParameters: sdk.MFAConfigurationV2025ApiGetMFAKbaConfigRequest = {}): Promise<AxiosResponse<Array<sdk.KbaQuestionV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMFAKbaConfig(requestParameters) as Promise<AxiosResponse<Array<sdk.KbaQuestionV2025>, any>>;
}
async getMFAOktaConfig(): Promise<AxiosResponse<sdk.MfaOktaConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMFAOktaConfig() as Promise<AxiosResponse<sdk.MfaOktaConfigV2025, any>>;
}
async setMFADuoConfig(requestParameters: sdk.MFAConfigurationV2025ApiSetMFADuoConfigRequest): Promise<AxiosResponse<sdk.MfaDuoConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setMFADuoConfig(requestParameters) as Promise<AxiosResponse<sdk.MfaDuoConfigV2025, any>>;
}
async setMFAKBAConfig(requestParameters: sdk.MFAConfigurationV2025ApiSetMFAKBAConfigRequest): Promise<AxiosResponse<Array<sdk.KbaAnswerResponseItemV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setMFAKBAConfig(requestParameters) as Promise<AxiosResponse<Array<sdk.KbaAnswerResponseItemV2025>, any>>;
}
async setMFAOktaConfig(requestParameters: sdk.MFAConfigurationV2025ApiSetMFAOktaConfigRequest): Promise<AxiosResponse<sdk.MfaOktaConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setMFAOktaConfig(requestParameters) as Promise<AxiosResponse<sdk.MfaOktaConfigV2025, any>>;
}
async testMFAConfig(requestParameters: sdk.MFAConfigurationV2025ApiTestMFAConfigRequest): Promise<AxiosResponse<sdk.MfaConfigTestResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.testMFAConfig(requestParameters) as Promise<AxiosResponse<sdk.MfaConfigTestResponseV2025, any>>;
}

async sendClassifyMachineAccount(requestParameters: sdk.MachineAccountClassifyV2025ApiSendClassifyMachineAccountRequest): Promise<AxiosResponse<sdk.SendClassifyMachineAccount200ResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.sendClassifyMachineAccount(requestParameters) as Promise<AxiosResponse<sdk.SendClassifyMachineAccount200ResponseV2025, any>>;
}

async createMachineAccountMappings(requestParameters: sdk.MachineAccountMappingsV2025ApiCreateMachineAccountMappingsRequest): Promise<AxiosResponse<Array<sdk.AttributeMappingsV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createMachineAccountMappings(requestParameters) as Promise<AxiosResponse<Array<sdk.AttributeMappingsV2025>, any>>;
}
async deleteMachineAccountMappings(requestParameters: sdk.MachineAccountMappingsV2025ApiDeleteMachineAccountMappingsRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteMachineAccountMappings(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async listMachineAccountMappings(requestParameters: sdk.MachineAccountMappingsV2025ApiListMachineAccountMappingsRequest): Promise<AxiosResponse<Array<sdk.AttributeMappingsV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listMachineAccountMappings(requestParameters) as Promise<AxiosResponse<Array<sdk.AttributeMappingsV2025>, any>>;
}
async setMachineAccountMappings(requestParameters: sdk.MachineAccountMappingsV2025ApiSetMachineAccountMappingsRequest): Promise<AxiosResponse<Array<sdk.AttributeMappingsV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setMachineAccountMappings(requestParameters) as Promise<AxiosResponse<Array<sdk.AttributeMappingsV2025>, any>>;
}

async createMachineAccountSubtype(requestParameters: sdk.MachineAccountsV2025ApiCreateMachineAccountSubtypeRequest): Promise<AxiosResponse<sdk.SourceSubtypeV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createMachineAccountSubtype(requestParameters) as Promise<AxiosResponse<sdk.SourceSubtypeV2025, any>>;
}
async deleteMachineAccountSubtype(requestParameters: sdk.MachineAccountsV2025ApiDeleteMachineAccountSubtypeRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteMachineAccountSubtype(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getMachineAccount(requestParameters: sdk.MachineAccountsV2025ApiGetMachineAccountRequest): Promise<AxiosResponse<sdk.MachineAccountV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMachineAccount(requestParameters) as Promise<AxiosResponse<sdk.MachineAccountV2025, any>>;
}
async getMachineAccountSubtypeById(requestParameters: sdk.MachineAccountsV2025ApiGetMachineAccountSubtypeByIdRequest): Promise<AxiosResponse<sdk.SourceSubtypeV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMachineAccountSubtypeById(requestParameters) as Promise<AxiosResponse<sdk.SourceSubtypeV2025, any>>;
}
async getMachineAccountSubtypeByTechnicalName(requestParameters: sdk.MachineAccountsV2025ApiGetMachineAccountSubtypeByTechnicalNameRequest): Promise<AxiosResponse<sdk.SourceSubtypeV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMachineAccountSubtypeByTechnicalName(requestParameters) as Promise<AxiosResponse<sdk.SourceSubtypeV2025, any>>;
}
async listMachineAccountSubtypes(requestParameters: sdk.MachineAccountsV2025ApiListMachineAccountSubtypesRequest): Promise<AxiosResponse<Array<sdk.SourceSubtypeV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listMachineAccountSubtypes(requestParameters) as Promise<AxiosResponse<Array<sdk.SourceSubtypeV2025>, any>>;
}
async listMachineAccounts(requestParameters: sdk.MachineAccountsV2025ApiListMachineAccountsRequest = {}): Promise<AxiosResponse<Array<sdk.MachineAccountV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listMachineAccounts(requestParameters) as Promise<AxiosResponse<Array<sdk.MachineAccountV2025>, any>>;
}
async patchMachineAccountSubtype(requestParameters: sdk.MachineAccountsV2025ApiPatchMachineAccountSubtypeRequest): Promise<AxiosResponse<sdk.SourceSubtypeV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchMachineAccountSubtype(requestParameters) as Promise<AxiosResponse<sdk.SourceSubtypeV2025, any>>;
}
async updateMachineAccount(requestParameters: sdk.MachineAccountsV2025ApiUpdateMachineAccountRequest): Promise<AxiosResponse<sdk.MachineAccountV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateMachineAccount(requestParameters) as Promise<AxiosResponse<sdk.MachineAccountV2025, any>>;
}

async deleteMachineClassificationConfig(requestParameters: sdk.MachineClassificationConfigV2025ApiDeleteMachineClassificationConfigRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteMachineClassificationConfig(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getMachineClassificationConfig(requestParameters: sdk.MachineClassificationConfigV2025ApiGetMachineClassificationConfigRequest): Promise<AxiosResponse<sdk.MachineClassificationConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMachineClassificationConfig(requestParameters) as Promise<AxiosResponse<sdk.MachineClassificationConfigV2025, any>>;
}
async setMachineClassificationConfig(requestParameters: sdk.MachineClassificationConfigV2025ApiSetMachineClassificationConfigRequest): Promise<AxiosResponse<sdk.MachineClassificationConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setMachineClassificationConfig(requestParameters) as Promise<AxiosResponse<sdk.MachineClassificationConfigV2025, any>>;
}

async createMachineIdentity(requestParameters: sdk.MachineIdentitiesV2025ApiCreateMachineIdentityRequest): Promise<AxiosResponse<sdk.MachineIdentityResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createMachineIdentity(requestParameters) as Promise<AxiosResponse<sdk.MachineIdentityResponseV2025, any>>;
}
async deleteMachineIdentity(requestParameters: sdk.MachineIdentitiesV2025ApiDeleteMachineIdentityRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteMachineIdentity(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getMachineIdentity(requestParameters: sdk.MachineIdentitiesV2025ApiGetMachineIdentityRequest): Promise<AxiosResponse<sdk.MachineIdentityResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMachineIdentity(requestParameters) as Promise<AxiosResponse<sdk.MachineIdentityResponseV2025, any>>;
}
async listMachineIdentities(requestParameters: sdk.MachineIdentitiesV2025ApiListMachineIdentitiesRequest = {}): Promise<AxiosResponse<Array<sdk.MachineIdentityResponseV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listMachineIdentities(requestParameters) as Promise<AxiosResponse<Array<sdk.MachineIdentityResponseV2025>, any>>;
}
async listMachineIdentityUserEntitlements(requestParameters: sdk.MachineIdentitiesV2025ApiListMachineIdentityUserEntitlementsRequest = {}): Promise<AxiosResponse<Array<sdk.MachineIdentityUserEntitlementResponseV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listMachineIdentityUserEntitlements(requestParameters) as Promise<AxiosResponse<Array<sdk.MachineIdentityUserEntitlementResponseV2025>, any>>;
}
async startMachineIdentityAggregation(requestParameters: sdk.MachineIdentitiesV2025ApiStartMachineIdentityAggregationRequest): Promise<AxiosResponse<sdk.MachineIdentityAggregationResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startMachineIdentityAggregation(requestParameters) as Promise<AxiosResponse<sdk.MachineIdentityAggregationResponseV2025, any>>;
}
async updateMachineIdentity(requestParameters: sdk.MachineIdentitiesV2025ApiUpdateMachineIdentityRequest): Promise<AxiosResponse<sdk.MachineIdentityResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateMachineIdentity(requestParameters) as Promise<AxiosResponse<sdk.MachineIdentityResponseV2025, any>>;
}

async createManagedClient(requestParameters: sdk.ManagedClientsV2025ApiCreateManagedClientRequest): Promise<AxiosResponse<sdk.ManagedClientV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createManagedClient(requestParameters) as Promise<AxiosResponse<sdk.ManagedClientV2025, any>>;
}
async deleteManagedClient(requestParameters: sdk.ManagedClientsV2025ApiDeleteManagedClientRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteManagedClient(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getManagedClient(requestParameters: sdk.ManagedClientsV2025ApiGetManagedClientRequest): Promise<AxiosResponse<sdk.ManagedClientV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getManagedClient(requestParameters) as Promise<AxiosResponse<sdk.ManagedClientV2025, any>>;
}
async getManagedClientHealthIndicators(requestParameters: sdk.ManagedClientsV2025ApiGetManagedClientHealthIndicatorsRequest): Promise<AxiosResponse<sdk.ManagedClientHealthIndicatorsV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getManagedClientHealthIndicators(requestParameters) as Promise<AxiosResponse<sdk.ManagedClientHealthIndicatorsV2025, any>>;
}
async getManagedClientStatus(requestParameters: sdk.ManagedClientsV2025ApiGetManagedClientStatusRequest): Promise<AxiosResponse<sdk.ManagedClientStatusV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getManagedClientStatus(requestParameters) as Promise<AxiosResponse<sdk.ManagedClientStatusV2025, any>>;
}
async getManagedClients(requestParameters: sdk.ManagedClientsV2025ApiGetManagedClientsRequest = {}): Promise<AxiosResponse<Array<sdk.ManagedClientV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getManagedClients(requestParameters) as Promise<AxiosResponse<Array<sdk.ManagedClientV2025>, any>>;
}
async updateManagedClient(requestParameters: sdk.ManagedClientsV2025ApiUpdateManagedClientRequest): Promise<AxiosResponse<sdk.ManagedClientV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateManagedClient(requestParameters) as Promise<AxiosResponse<sdk.ManagedClientV2025, any>>;
}

async createManagedClusterType(requestParameters: sdk.ManagedClusterTypesV2025ApiCreateManagedClusterTypeRequest): Promise<AxiosResponse<sdk.ManagedClusterTypeV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createManagedClusterType(requestParameters) as Promise<AxiosResponse<sdk.ManagedClusterTypeV2025, any>>;
}
async deleteManagedClusterType(requestParameters: sdk.ManagedClusterTypesV2025ApiDeleteManagedClusterTypeRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteManagedClusterType(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getManagedClusterType(requestParameters: sdk.ManagedClusterTypesV2025ApiGetManagedClusterTypeRequest): Promise<AxiosResponse<sdk.ManagedClusterTypeV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getManagedClusterType(requestParameters) as Promise<AxiosResponse<sdk.ManagedClusterTypeV2025, any>>;
}
async getManagedClusterTypes(requestParameters: sdk.ManagedClusterTypesV2025ApiGetManagedClusterTypesRequest = {}): Promise<AxiosResponse<Array<sdk.ManagedClusterTypeV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getManagedClusterTypes(requestParameters) as Promise<AxiosResponse<Array<sdk.ManagedClusterTypeV2025>, any>>;
}
async updateManagedClusterType(requestParameters: sdk.ManagedClusterTypesV2025ApiUpdateManagedClusterTypeRequest): Promise<AxiosResponse<sdk.ManagedClusterTypeV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateManagedClusterType(requestParameters) as Promise<AxiosResponse<sdk.ManagedClusterTypeV2025, any>>;
}

async createManagedCluster(requestParameters: sdk.ManagedClustersV2025ApiCreateManagedClusterRequest): Promise<AxiosResponse<sdk.ManagedClusterV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createManagedCluster(requestParameters) as Promise<AxiosResponse<sdk.ManagedClusterV2025, any>>;
}
async deleteManagedCluster(requestParameters: sdk.ManagedClustersV2025ApiDeleteManagedClusterRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteManagedCluster(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getClientLogConfiguration(requestParameters: sdk.ManagedClustersV2025ApiGetClientLogConfigurationRequest): Promise<AxiosResponse<sdk.ClientLogConfigurationV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getClientLogConfiguration(requestParameters) as Promise<AxiosResponse<sdk.ClientLogConfigurationV2025, any>>;
}
async getManagedCluster(requestParameters: sdk.ManagedClustersV2025ApiGetManagedClusterRequest): Promise<AxiosResponse<sdk.ManagedClusterV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getManagedCluster(requestParameters) as Promise<AxiosResponse<sdk.ManagedClusterV2025, any>>;
}
async getManagedClusters(requestParameters: sdk.ManagedClustersV2025ApiGetManagedClustersRequest = {}): Promise<AxiosResponse<Array<sdk.ManagedClusterV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getManagedClusters(requestParameters) as Promise<AxiosResponse<Array<sdk.ManagedClusterV2025>, any>>;
}
async putClientLogConfiguration(requestParameters: sdk.ManagedClustersV2025ApiPutClientLogConfigurationRequest): Promise<AxiosResponse<sdk.ClientLogConfigurationV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putClientLogConfiguration(requestParameters) as Promise<AxiosResponse<sdk.ClientLogConfigurationV2025, any>>;
}
async update(requestParameters: sdk.ManagedClustersV2025ApiUpdateRequest): Promise<AxiosResponse<sdk.ClusterManualUpgradeV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.update(requestParameters) as Promise<AxiosResponse<sdk.ClusterManualUpgradeV2025, any>>;
}
async updateManagedCluster(requestParameters: sdk.ManagedClustersV2025ApiUpdateManagedClusterRequest): Promise<AxiosResponse<sdk.ManagedClusterV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateManagedCluster(requestParameters) as Promise<AxiosResponse<sdk.ManagedClusterV2025, any>>;
}

async createMultiHostIntegration(requestParameters: sdk.MultiHostIntegrationV2025ApiCreateMultiHostIntegrationRequest): Promise<AxiosResponse<sdk.MultiHostIntegrationsV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createMultiHostIntegration(requestParameters) as Promise<AxiosResponse<sdk.MultiHostIntegrationsV2025, any>>;
}
async createSourcesWithinMultiHost(requestParameters: sdk.MultiHostIntegrationV2025ApiCreateSourcesWithinMultiHostRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSourcesWithinMultiHost(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteMultiHost(requestParameters: sdk.MultiHostIntegrationV2025ApiDeleteMultiHostRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteMultiHost(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteMultiHostSources(requestParameters: sdk.MultiHostIntegrationV2025ApiDeleteMultiHostSourcesRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteMultiHostSources(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getAcctAggregationGroups(requestParameters: sdk.MultiHostIntegrationV2025ApiGetAcctAggregationGroupsRequest): Promise<AxiosResponse<Array<sdk.MultiHostIntegrationsAggScheduleUpdateV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAcctAggregationGroups(requestParameters) as Promise<AxiosResponse<Array<sdk.MultiHostIntegrationsAggScheduleUpdateV2025>, any>>;
}
async getEntitlementAggregationGroups(requestParameters: sdk.MultiHostIntegrationV2025ApiGetEntitlementAggregationGroupsRequest): Promise<AxiosResponse<Array<sdk.MultiHostIntegrationsAggScheduleUpdateV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getEntitlementAggregationGroups(requestParameters) as Promise<AxiosResponse<Array<sdk.MultiHostIntegrationsAggScheduleUpdateV2025>, any>>;
}
async getMultiHostIntegrations(requestParameters: sdk.MultiHostIntegrationV2025ApiGetMultiHostIntegrationsRequest): Promise<AxiosResponse<sdk.MultiHostIntegrationsV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMultiHostIntegrations(requestParameters) as Promise<AxiosResponse<sdk.MultiHostIntegrationsV2025, any>>;
}
async getMultiHostIntegrationsList(requestParameters: sdk.MultiHostIntegrationV2025ApiGetMultiHostIntegrationsListRequest = {}): Promise<AxiosResponse<Array<sdk.MultiHostIntegrationsV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMultiHostIntegrationsList(requestParameters) as Promise<AxiosResponse<Array<sdk.MultiHostIntegrationsV2025>, any>>;
}
async getMultiHostSourceCreationErrors(requestParameters: sdk.MultiHostIntegrationV2025ApiGetMultiHostSourceCreationErrorsRequest): Promise<AxiosResponse<Array<sdk.SourceCreationErrorsV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMultiHostSourceCreationErrors(requestParameters) as Promise<AxiosResponse<Array<sdk.SourceCreationErrorsV2025>, any>>;
}
async getMultihostIntegrationTypes(): Promise<AxiosResponse<Array<sdk.MultiHostIntegrationTemplateTypeV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMultihostIntegrationTypes() as Promise<AxiosResponse<Array<sdk.MultiHostIntegrationTemplateTypeV2025>, any>>;
}
async getSourcesWithinMultiHost(requestParameters: sdk.MultiHostIntegrationV2025ApiGetSourcesWithinMultiHostRequest): Promise<AxiosResponse<Array<sdk.MultiHostSourcesV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourcesWithinMultiHost(requestParameters) as Promise<AxiosResponse<Array<sdk.MultiHostSourcesV2025>, any>>;
}
async testConnectionMultiHostSources(requestParameters: sdk.MultiHostIntegrationV2025ApiTestConnectionMultiHostSourcesRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.testConnectionMultiHostSources(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async testSourceConnectionMultihost(requestParameters: sdk.MultiHostIntegrationV2025ApiTestSourceConnectionMultihostRequest): Promise<AxiosResponse<sdk.TestSourceConnectionMultihost200ResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.testSourceConnectionMultihost(requestParameters) as Promise<AxiosResponse<sdk.TestSourceConnectionMultihost200ResponseV2025, any>>;
}
async updateMultiHostSources(requestParameters: sdk.MultiHostIntegrationV2025ApiUpdateMultiHostSourcesRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateMultiHostSources(requestParameters) as Promise<AxiosResponse<void, any>>;
}

async approveNonEmployeeRequest(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiApproveNonEmployeeRequestRequest): Promise<AxiosResponse<sdk.NonEmployeeApprovalItemV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.approveNonEmployeeRequest(requestParameters) as Promise<AxiosResponse<sdk.NonEmployeeApprovalItemV2025, any>>;
}
async createNonEmployeeRecord(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeRecordRequest): Promise<AxiosResponse<sdk.NonEmployeeRecordV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createNonEmployeeRecord(requestParameters) as Promise<AxiosResponse<sdk.NonEmployeeRecordV2025, any>>;
}
async createNonEmployeeRequest(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeRequestRequest): Promise<AxiosResponse<sdk.NonEmployeeRequestV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createNonEmployeeRequest(requestParameters) as Promise<AxiosResponse<sdk.NonEmployeeRequestV2025, any>>;
}
async createNonEmployeeSource(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeSourceRequest): Promise<AxiosResponse<sdk.NonEmployeeSourceWithCloudExternalIdV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createNonEmployeeSource(requestParameters) as Promise<AxiosResponse<sdk.NonEmployeeSourceWithCloudExternalIdV2025, any>>;
}
async createNonEmployeeSourceSchemaAttributes(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeSourceSchemaAttributesRequest): Promise<AxiosResponse<sdk.NonEmployeeSchemaAttributeV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createNonEmployeeSourceSchemaAttributes(requestParameters) as Promise<AxiosResponse<sdk.NonEmployeeSchemaAttributeV2025, any>>;
}
async deleteNonEmployeeRecord(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeRecordRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteNonEmployeeRecord(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteNonEmployeeRecordsInBulk(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeRecordsInBulkRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteNonEmployeeRecordsInBulk(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteNonEmployeeRequest(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeRequestRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteNonEmployeeRequest(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteNonEmployeeSchemaAttribute(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeSchemaAttributeRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteNonEmployeeSchemaAttribute(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteNonEmployeeSource(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeSourceRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteNonEmployeeSource(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteNonEmployeeSourceSchemaAttributes(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeSourceSchemaAttributesRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteNonEmployeeSourceSchemaAttributes(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async exportNonEmployeeRecords(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiExportNonEmployeeRecordsRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.exportNonEmployeeRecords(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async exportNonEmployeeSourceSchemaTemplate(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiExportNonEmployeeSourceSchemaTemplateRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.exportNonEmployeeSourceSchemaTemplate(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getNonEmployeeApproval(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeApprovalRequest): Promise<AxiosResponse<sdk.NonEmployeeApprovalItemDetailV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNonEmployeeApproval(requestParameters) as Promise<AxiosResponse<sdk.NonEmployeeApprovalItemDetailV2025, any>>;
}
async getNonEmployeeApprovalSummary(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeApprovalSummaryRequest): Promise<AxiosResponse<sdk.NonEmployeeApprovalSummaryV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNonEmployeeApprovalSummary(requestParameters) as Promise<AxiosResponse<sdk.NonEmployeeApprovalSummaryV2025, any>>;
}
async getNonEmployeeBulkUploadStatus(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeBulkUploadStatusRequest): Promise<AxiosResponse<sdk.NonEmployeeBulkUploadStatusV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNonEmployeeBulkUploadStatus(requestParameters) as Promise<AxiosResponse<sdk.NonEmployeeBulkUploadStatusV2025, any>>;
}
async getNonEmployeeRecord(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeRecordRequest): Promise<AxiosResponse<sdk.NonEmployeeRecordV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNonEmployeeRecord(requestParameters) as Promise<AxiosResponse<sdk.NonEmployeeRecordV2025, any>>;
}
async getNonEmployeeRequest(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeRequestRequest): Promise<AxiosResponse<sdk.NonEmployeeRequestV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNonEmployeeRequest(requestParameters) as Promise<AxiosResponse<sdk.NonEmployeeRequestV2025, any>>;
}
async getNonEmployeeRequestSummary(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeRequestSummaryRequest): Promise<AxiosResponse<sdk.NonEmployeeRequestSummaryV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNonEmployeeRequestSummary(requestParameters) as Promise<AxiosResponse<sdk.NonEmployeeRequestSummaryV2025, any>>;
}
async getNonEmployeeSchemaAttribute(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeSchemaAttributeRequest): Promise<AxiosResponse<sdk.NonEmployeeSchemaAttributeV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNonEmployeeSchemaAttribute(requestParameters) as Promise<AxiosResponse<sdk.NonEmployeeSchemaAttributeV2025, any>>;
}
async getNonEmployeeSource(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeSourceRequest): Promise<AxiosResponse<sdk.NonEmployeeSourceV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNonEmployeeSource(requestParameters) as Promise<AxiosResponse<sdk.NonEmployeeSourceV2025, any>>;
}
async getNonEmployeeSourceSchemaAttributes(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeSourceSchemaAttributesRequest): Promise<AxiosResponse<Array<sdk.NonEmployeeSchemaAttributeV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNonEmployeeSourceSchemaAttributes(requestParameters) as Promise<AxiosResponse<Array<sdk.NonEmployeeSchemaAttributeV2025>, any>>;
}
async importNonEmployeeRecordsInBulk(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiImportNonEmployeeRecordsInBulkRequest): Promise<AxiosResponse<sdk.NonEmployeeBulkUploadJobV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.importNonEmployeeRecordsInBulk(requestParameters) as Promise<AxiosResponse<sdk.NonEmployeeBulkUploadJobV2025, any>>;
}
async listNonEmployeeApprovals(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiListNonEmployeeApprovalsRequest = {}): Promise<AxiosResponse<Array<sdk.NonEmployeeApprovalItemV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listNonEmployeeApprovals(requestParameters) as Promise<AxiosResponse<Array<sdk.NonEmployeeApprovalItemV2025>, any>>;
}
async listNonEmployeeRecords(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiListNonEmployeeRecordsRequest = {}): Promise<AxiosResponse<Array<sdk.NonEmployeeRecordV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listNonEmployeeRecords(requestParameters) as Promise<AxiosResponse<Array<sdk.NonEmployeeRecordV2025>, any>>;
}
async listNonEmployeeRequests(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiListNonEmployeeRequestsRequest): Promise<AxiosResponse<Array<sdk.NonEmployeeRequestV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listNonEmployeeRequests(requestParameters) as Promise<AxiosResponse<Array<sdk.NonEmployeeRequestV2025>, any>>;
}
async listNonEmployeeSources(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiListNonEmployeeSourcesRequest = {}): Promise<AxiosResponse<Array<sdk.NonEmployeeSourceWithNECountV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listNonEmployeeSources(requestParameters) as Promise<AxiosResponse<Array<sdk.NonEmployeeSourceWithNECountV2025>, any>>;
}
async patchNonEmployeeRecord(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiPatchNonEmployeeRecordRequest): Promise<AxiosResponse<sdk.NonEmployeeRecordV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchNonEmployeeRecord(requestParameters) as Promise<AxiosResponse<sdk.NonEmployeeRecordV2025, any>>;
}
async patchNonEmployeeSchemaAttribute(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiPatchNonEmployeeSchemaAttributeRequest): Promise<AxiosResponse<sdk.NonEmployeeSchemaAttributeV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchNonEmployeeSchemaAttribute(requestParameters) as Promise<AxiosResponse<sdk.NonEmployeeSchemaAttributeV2025, any>>;
}
async patchNonEmployeeSource(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiPatchNonEmployeeSourceRequest): Promise<AxiosResponse<sdk.NonEmployeeSourceV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchNonEmployeeSource(requestParameters) as Promise<AxiosResponse<sdk.NonEmployeeSourceV2025, any>>;
}
async rejectNonEmployeeRequest(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiRejectNonEmployeeRequestRequest): Promise<AxiosResponse<sdk.NonEmployeeApprovalItemV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.rejectNonEmployeeRequest(requestParameters) as Promise<AxiosResponse<sdk.NonEmployeeApprovalItemV2025, any>>;
}
async updateNonEmployeeRecord(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiUpdateNonEmployeeRecordRequest): Promise<AxiosResponse<sdk.NonEmployeeRecordV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateNonEmployeeRecord(requestParameters) as Promise<AxiosResponse<sdk.NonEmployeeRecordV2025, any>>;
}

async createDomainDkim(requestParameters: sdk.NotificationsV2025ApiCreateDomainDkimRequest): Promise<AxiosResponse<sdk.DomainStatusDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createDomainDkim(requestParameters) as Promise<AxiosResponse<sdk.DomainStatusDtoV2025, any>>;
}
async createNotificationTemplate(requestParameters: sdk.NotificationsV2025ApiCreateNotificationTemplateRequest): Promise<AxiosResponse<sdk.TemplateDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createNotificationTemplate(requestParameters) as Promise<AxiosResponse<sdk.TemplateDtoV2025, any>>;
}
async createVerifiedFromAddress(requestParameters: sdk.NotificationsV2025ApiCreateVerifiedFromAddressRequest): Promise<AxiosResponse<sdk.EmailStatusDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createVerifiedFromAddress(requestParameters) as Promise<AxiosResponse<sdk.EmailStatusDtoV2025, any>>;
}
async deleteNotificationTemplatesInBulk(requestParameters: sdk.NotificationsV2025ApiDeleteNotificationTemplatesInBulkRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteNotificationTemplatesInBulk(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteVerifiedFromAddress(requestParameters: sdk.NotificationsV2025ApiDeleteVerifiedFromAddressRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteVerifiedFromAddress(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getDkimAttributes(requestParameters: sdk.NotificationsV2025ApiGetDkimAttributesRequest = {}): Promise<AxiosResponse<Array<sdk.DkimAttributesV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getDkimAttributes(requestParameters) as Promise<AxiosResponse<Array<sdk.DkimAttributesV2025>, any>>;
}
async getMailFromAttributes(requestParameters: sdk.NotificationsV2025ApiGetMailFromAttributesRequest): Promise<AxiosResponse<sdk.MailFromAttributesV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMailFromAttributes(requestParameters) as Promise<AxiosResponse<sdk.MailFromAttributesV2025, any>>;
}
async getNotificationTemplate(requestParameters: sdk.NotificationsV2025ApiGetNotificationTemplateRequest): Promise<AxiosResponse<sdk.TemplateDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNotificationTemplate(requestParameters) as Promise<AxiosResponse<sdk.TemplateDtoV2025, any>>;
}
async getNotificationsTemplateContext(requestParameters: sdk.NotificationsV2025ApiGetNotificationsTemplateContextRequest = {}): Promise<AxiosResponse<sdk.NotificationTemplateContextV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNotificationsTemplateContext(requestParameters) as Promise<AxiosResponse<sdk.NotificationTemplateContextV2025, any>>;
}
async listFromAddresses(requestParameters: sdk.NotificationsV2025ApiListFromAddressesRequest = {}): Promise<AxiosResponse<Array<sdk.EmailStatusDtoV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listFromAddresses(requestParameters) as Promise<AxiosResponse<Array<sdk.EmailStatusDtoV2025>, any>>;
}
async listNotificationPreferences(requestParameters: sdk.NotificationsV2025ApiListNotificationPreferencesRequest = {}): Promise<AxiosResponse<sdk.PreferencesDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listNotificationPreferences(requestParameters) as Promise<AxiosResponse<sdk.PreferencesDtoV2025, any>>;
}
async listNotificationTemplateDefaults(requestParameters: sdk.NotificationsV2025ApiListNotificationTemplateDefaultsRequest = {}): Promise<AxiosResponse<Array<sdk.TemplateDtoDefaultV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listNotificationTemplateDefaults(requestParameters) as Promise<AxiosResponse<Array<sdk.TemplateDtoDefaultV2025>, any>>;
}
async listNotificationTemplates(requestParameters: sdk.NotificationsV2025ApiListNotificationTemplatesRequest = {}): Promise<AxiosResponse<Array<sdk.TemplateDtoV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listNotificationTemplates(requestParameters) as Promise<AxiosResponse<Array<sdk.TemplateDtoV2025>, any>>;
}
async putMailFromAttributes(requestParameters: sdk.NotificationsV2025ApiPutMailFromAttributesRequest): Promise<AxiosResponse<sdk.MailFromAttributesV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putMailFromAttributes(requestParameters) as Promise<AxiosResponse<sdk.MailFromAttributesV2025, any>>;
}
async sendTestNotification(requestParameters: sdk.NotificationsV2025ApiSendTestNotificationRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.sendTestNotification(requestParameters) as Promise<AxiosResponse<void, any>>;
}

async createOauthClient(requestParameters: sdk.OAuthClientsV2025ApiCreateOauthClientRequest): Promise<AxiosResponse<sdk.CreateOAuthClientResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createOauthClient(requestParameters) as Promise<AxiosResponse<sdk.CreateOAuthClientResponseV2025, any>>;
}
async deleteOauthClient(requestParameters: sdk.OAuthClientsV2025ApiDeleteOauthClientRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteOauthClient(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getOauthClient(requestParameters: sdk.OAuthClientsV2025ApiGetOauthClientRequest): Promise<AxiosResponse<sdk.GetOAuthClientResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getOauthClient(requestParameters) as Promise<AxiosResponse<sdk.GetOAuthClientResponseV2025, any>>;
}
async listOauthClients(requestParameters: sdk.OAuthClientsV2025ApiListOauthClientsRequest = {}): Promise<AxiosResponse<Array<sdk.GetOAuthClientResponseV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listOauthClients(requestParameters) as Promise<AxiosResponse<Array<sdk.GetOAuthClientResponseV2025>, any>>;
}
async patchOauthClient(requestParameters: sdk.OAuthClientsV2025ApiPatchOauthClientRequest): Promise<AxiosResponse<sdk.GetOAuthClientResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchOauthClient(requestParameters) as Promise<AxiosResponse<sdk.GetOAuthClientResponseV2025, any>>;
}

async getOrgConfig(): Promise<AxiosResponse<sdk.OrgConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getOrgConfig() as Promise<AxiosResponse<sdk.OrgConfigV2025, any>>;
}
async getValidTimeZones(requestParameters: sdk.OrgConfigV2025ApiGetValidTimeZonesRequest = {}): Promise<AxiosResponse<Array<string>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getValidTimeZones(requestParameters) as Promise<AxiosResponse<Array<string>, any>>;
}
async patchOrgConfig(requestParameters: sdk.OrgConfigV2025ApiPatchOrgConfigRequest): Promise<AxiosResponse<sdk.OrgConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchOrgConfig(requestParameters) as Promise<AxiosResponse<sdk.OrgConfigV2025, any>>;
}

async createPasswordOrgConfig(requestParameters: sdk.PasswordConfigurationV2025ApiCreatePasswordOrgConfigRequest): Promise<AxiosResponse<sdk.PasswordOrgConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createPasswordOrgConfig(requestParameters) as Promise<AxiosResponse<sdk.PasswordOrgConfigV2025, any>>;
}
async getPasswordOrgConfig(): Promise<AxiosResponse<sdk.PasswordOrgConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPasswordOrgConfig() as Promise<AxiosResponse<sdk.PasswordOrgConfigV2025, any>>;
}
async putPasswordOrgConfig(requestParameters: sdk.PasswordConfigurationV2025ApiPutPasswordOrgConfigRequest): Promise<AxiosResponse<sdk.PasswordOrgConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putPasswordOrgConfig(requestParameters) as Promise<AxiosResponse<sdk.PasswordOrgConfigV2025, any>>;
}

async getPasswordDictionary(): Promise<AxiosResponse<string, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPasswordDictionary() as Promise<AxiosResponse<string, any>>;
}
async putPasswordDictionary(requestParameters: sdk.PasswordDictionaryV2025ApiPutPasswordDictionaryRequest = {}): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putPasswordDictionary(requestParameters) as Promise<AxiosResponse<void, any>>;
}

async createDigitToken(requestParameters: sdk.PasswordManagementV2025ApiCreateDigitTokenRequest): Promise<AxiosResponse<sdk.PasswordDigitTokenV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createDigitToken(requestParameters) as Promise<AxiosResponse<sdk.PasswordDigitTokenV2025, any>>;
}
async getPasswordChangeStatus(requestParameters: sdk.PasswordManagementV2025ApiGetPasswordChangeStatusRequest): Promise<AxiosResponse<sdk.PasswordStatusV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPasswordChangeStatus(requestParameters) as Promise<AxiosResponse<sdk.PasswordStatusV2025, any>>;
}
async queryPasswordInfo(requestParameters: sdk.PasswordManagementV2025ApiQueryPasswordInfoRequest): Promise<AxiosResponse<sdk.PasswordInfoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.queryPasswordInfo(requestParameters) as Promise<AxiosResponse<sdk.PasswordInfoV2025, any>>;
}
async setPassword(requestParameters: sdk.PasswordManagementV2025ApiSetPasswordRequest): Promise<AxiosResponse<sdk.PasswordChangeResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setPassword(requestParameters) as Promise<AxiosResponse<sdk.PasswordChangeResponseV2025, any>>;
}

async createPasswordPolicy(requestParameters: sdk.PasswordPoliciesV2025ApiCreatePasswordPolicyRequest): Promise<AxiosResponse<sdk.PasswordPolicyV3DtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createPasswordPolicy(requestParameters) as Promise<AxiosResponse<sdk.PasswordPolicyV3DtoV2025, any>>;
}
async deletePasswordPolicy(requestParameters: sdk.PasswordPoliciesV2025ApiDeletePasswordPolicyRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deletePasswordPolicy(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getPasswordPolicyById(requestParameters: sdk.PasswordPoliciesV2025ApiGetPasswordPolicyByIdRequest): Promise<AxiosResponse<sdk.PasswordPolicyV3DtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPasswordPolicyById(requestParameters) as Promise<AxiosResponse<sdk.PasswordPolicyV3DtoV2025, any>>;
}
async listPasswordPolicies(requestParameters: sdk.PasswordPoliciesV2025ApiListPasswordPoliciesRequest = {}): Promise<AxiosResponse<Array<sdk.PasswordPolicyV3DtoV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listPasswordPolicies(requestParameters) as Promise<AxiosResponse<Array<sdk.PasswordPolicyV3DtoV2025>, any>>;
}
async setPasswordPolicy(requestParameters: sdk.PasswordPoliciesV2025ApiSetPasswordPolicyRequest): Promise<AxiosResponse<sdk.PasswordPolicyV3DtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setPasswordPolicy(requestParameters) as Promise<AxiosResponse<sdk.PasswordPolicyV3DtoV2025, any>>;
}

async createPasswordSyncGroup(requestParameters: sdk.PasswordSyncGroupsV2025ApiCreatePasswordSyncGroupRequest): Promise<AxiosResponse<sdk.PasswordSyncGroupV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createPasswordSyncGroup(requestParameters) as Promise<AxiosResponse<sdk.PasswordSyncGroupV2025, any>>;
}
async deletePasswordSyncGroup(requestParameters: sdk.PasswordSyncGroupsV2025ApiDeletePasswordSyncGroupRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deletePasswordSyncGroup(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getPasswordSyncGroup(requestParameters: sdk.PasswordSyncGroupsV2025ApiGetPasswordSyncGroupRequest): Promise<AxiosResponse<sdk.PasswordSyncGroupV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPasswordSyncGroup(requestParameters) as Promise<AxiosResponse<sdk.PasswordSyncGroupV2025, any>>;
}
async getPasswordSyncGroups(requestParameters: sdk.PasswordSyncGroupsV2025ApiGetPasswordSyncGroupsRequest = {}): Promise<AxiosResponse<Array<sdk.PasswordSyncGroupV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPasswordSyncGroups(requestParameters) as Promise<AxiosResponse<Array<sdk.PasswordSyncGroupV2025>, any>>;
}
async updatePasswordSyncGroup(requestParameters: sdk.PasswordSyncGroupsV2025ApiUpdatePasswordSyncGroupRequest): Promise<AxiosResponse<sdk.PasswordSyncGroupV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updatePasswordSyncGroup(requestParameters) as Promise<AxiosResponse<sdk.PasswordSyncGroupV2025, any>>;
}

async createPersonalAccessToken(requestParameters: sdk.PersonalAccessTokensV2025ApiCreatePersonalAccessTokenRequest): Promise<AxiosResponse<sdk.CreatePersonalAccessTokenResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createPersonalAccessToken(requestParameters) as Promise<AxiosResponse<sdk.CreatePersonalAccessTokenResponseV2025, any>>;
}
async deletePersonalAccessToken(requestParameters: sdk.PersonalAccessTokensV2025ApiDeletePersonalAccessTokenRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deletePersonalAccessToken(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async listPersonalAccessTokens(requestParameters: sdk.PersonalAccessTokensV2025ApiListPersonalAccessTokensRequest = {}): Promise<AxiosResponse<Array<sdk.GetPersonalAccessTokenResponseV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listPersonalAccessTokens(requestParameters) as Promise<AxiosResponse<Array<sdk.GetPersonalAccessTokenResponseV2025>, any>>;
}
async patchPersonalAccessToken(requestParameters: sdk.PersonalAccessTokensV2025ApiPatchPersonalAccessTokenRequest): Promise<AxiosResponse<sdk.GetPersonalAccessTokenResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchPersonalAccessToken(requestParameters) as Promise<AxiosResponse<sdk.GetPersonalAccessTokenResponseV2025, any>>;
}

async getPublicIdentities(requestParameters: sdk.PublicIdentitiesV2025ApiGetPublicIdentitiesRequest = {}): Promise<AxiosResponse<Array<sdk.PublicIdentityV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPublicIdentities(requestParameters) as Promise<AxiosResponse<Array<sdk.PublicIdentityV2025>, any>>;
}

async getPublicIdentityConfig(): Promise<AxiosResponse<sdk.PublicIdentityConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPublicIdentityConfig() as Promise<AxiosResponse<sdk.PublicIdentityConfigV2025, any>>;
}
async updatePublicIdentityConfig(requestParameters: sdk.PublicIdentitiesConfigV2025ApiUpdatePublicIdentityConfigRequest): Promise<AxiosResponse<sdk.PublicIdentityConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updatePublicIdentityConfig(requestParameters) as Promise<AxiosResponse<sdk.PublicIdentityConfigV2025, any>>;
}

async cancelReport(requestParameters: sdk.ReportsDataExtractionV2025ApiCancelReportRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.cancelReport(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getReport(requestParameters: sdk.ReportsDataExtractionV2025ApiGetReportRequest): Promise<AxiosResponse<File, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getReport(requestParameters) as Promise<AxiosResponse<File, any>>;
}
async getReportResult(requestParameters: sdk.ReportsDataExtractionV2025ApiGetReportResultRequest): Promise<AxiosResponse<sdk.ReportResultsV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getReportResult(requestParameters) as Promise<AxiosResponse<sdk.ReportResultsV2025, any>>;
}
async startReport(requestParameters: sdk.ReportsDataExtractionV2025ApiStartReportRequest): Promise<AxiosResponse<sdk.TaskResultDetailsV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startReport(requestParameters) as Promise<AxiosResponse<sdk.TaskResultDetailsV2025, any>>;
}

async listRequestableObjects(requestParameters: sdk.RequestableObjectsV2025ApiListRequestableObjectsRequest = {}): Promise<AxiosResponse<Array<sdk.RequestableObjectV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listRequestableObjects(requestParameters) as Promise<AxiosResponse<Array<sdk.RequestableObjectV2025>, any>>;
}

async createRoleInsightRequests(requestParameters: sdk.RoleInsightsV2025ApiCreateRoleInsightRequestsRequest = {}): Promise<AxiosResponse<sdk.RoleInsightsResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createRoleInsightRequests(requestParameters) as Promise<AxiosResponse<sdk.RoleInsightsResponseV2025, any>>;
}
async downloadRoleInsightsEntitlementsChanges(requestParameters: sdk.RoleInsightsV2025ApiDownloadRoleInsightsEntitlementsChangesRequest): Promise<AxiosResponse<string, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.downloadRoleInsightsEntitlementsChanges(requestParameters) as Promise<AxiosResponse<string, any>>;
}
async getEntitlementChangesIdentities(requestParameters: sdk.RoleInsightsV2025ApiGetEntitlementChangesIdentitiesRequest): Promise<AxiosResponse<Array<sdk.RoleInsightsIdentitiesV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getEntitlementChangesIdentities(requestParameters) as Promise<AxiosResponse<Array<sdk.RoleInsightsIdentitiesV2025>, any>>;
}
async getRoleInsight(requestParameters: sdk.RoleInsightsV2025ApiGetRoleInsightRequest): Promise<AxiosResponse<sdk.RoleInsightV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleInsight(requestParameters) as Promise<AxiosResponse<sdk.RoleInsightV2025, any>>;
}
async getRoleInsights(requestParameters: sdk.RoleInsightsV2025ApiGetRoleInsightsRequest = {}): Promise<AxiosResponse<Array<sdk.RoleInsightV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleInsights(requestParameters) as Promise<AxiosResponse<Array<sdk.RoleInsightV2025>, any>>;
}
async getRoleInsightsCurrentEntitlements(requestParameters: sdk.RoleInsightsV2025ApiGetRoleInsightsCurrentEntitlementsRequest): Promise<AxiosResponse<Array<sdk.RoleInsightsEntitlementV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleInsightsCurrentEntitlements(requestParameters) as Promise<AxiosResponse<Array<sdk.RoleInsightsEntitlementV2025>, any>>;
}
async getRoleInsightsEntitlementsChanges(requestParameters: sdk.RoleInsightsV2025ApiGetRoleInsightsEntitlementsChangesRequest): Promise<AxiosResponse<Array<sdk.RoleInsightsEntitlementChangesV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleInsightsEntitlementsChanges(requestParameters) as Promise<AxiosResponse<Array<sdk.RoleInsightsEntitlementChangesV2025>, any>>;
}
async getRoleInsightsRequests(requestParameters: sdk.RoleInsightsV2025ApiGetRoleInsightsRequestsRequest): Promise<AxiosResponse<sdk.RoleInsightsResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleInsightsRequests(requestParameters) as Promise<AxiosResponse<sdk.RoleInsightsResponseV2025, any>>;
}
async getRoleInsightsSummary(requestParameters: sdk.RoleInsightsV2025ApiGetRoleInsightsSummaryRequest = {}): Promise<AxiosResponse<sdk.RoleInsightsSummaryV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleInsightsSummary(requestParameters) as Promise<AxiosResponse<sdk.RoleInsightsSummaryV2025, any>>;
}

async createRole(requestParameters: sdk.RolesV2025ApiCreateRoleRequest): Promise<AxiosResponse<sdk.RoleV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createRole(requestParameters) as Promise<AxiosResponse<sdk.RoleV2025, any>>;
}
async deleteBulkRoles(requestParameters: sdk.RolesV2025ApiDeleteBulkRolesRequest): Promise<AxiosResponse<sdk.TaskResultDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteBulkRoles(requestParameters) as Promise<AxiosResponse<sdk.TaskResultDtoV2025, any>>;
}
async deleteMetadataFromRoleByKeyAndValue(requestParameters: sdk.RolesV2025ApiDeleteMetadataFromRoleByKeyAndValueRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteMetadataFromRoleByKeyAndValue(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteRole(requestParameters: sdk.RolesV2025ApiDeleteRoleRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteRole(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getBulkUpdateStatus(): Promise<AxiosResponse<Array<sdk.RoleGetAllBulkUpdateResponseV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getBulkUpdateStatus() as Promise<AxiosResponse<Array<sdk.RoleGetAllBulkUpdateResponseV2025>, any>>;
}
async getBulkUpdateStatusById(requestParameters: sdk.RolesV2025ApiGetBulkUpdateStatusByIdRequest): Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getBulkUpdateStatusById(requestParameters) as Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>>;
}
async getRole(requestParameters: sdk.RolesV2025ApiGetRoleRequest): Promise<AxiosResponse<sdk.RoleV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRole(requestParameters) as Promise<AxiosResponse<sdk.RoleV2025, any>>;
}
async getRoleAssignedIdentities(requestParameters: sdk.RolesV2025ApiGetRoleAssignedIdentitiesRequest): Promise<AxiosResponse<Array<sdk.RoleIdentityV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleAssignedIdentities(requestParameters) as Promise<AxiosResponse<Array<sdk.RoleIdentityV2025>, any>>;
}
async getRoleEntitlements(requestParameters: sdk.RolesV2025ApiGetRoleEntitlementsRequest): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleEntitlements(requestParameters) as Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>>;
}
async listRoles(requestParameters: sdk.RolesV2025ApiListRolesRequest = {}): Promise<AxiosResponse<Array<sdk.RoleV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listRoles(requestParameters) as Promise<AxiosResponse<Array<sdk.RoleV2025>, any>>;
}
async patchRole(requestParameters: sdk.RolesV2025ApiPatchRoleRequest): Promise<AxiosResponse<sdk.RoleV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchRole(requestParameters) as Promise<AxiosResponse<sdk.RoleV2025, any>>;
}
async searchRolesByFilter(requestParameters: sdk.RolesV2025ApiSearchRolesByFilterRequest = {}): Promise<AxiosResponse<sdk.RoleV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchRolesByFilter(requestParameters) as Promise<AxiosResponse<sdk.RoleV2025, any>>;
}
async updateAttributeKeyAndValueToRole(requestParameters: sdk.RolesV2025ApiUpdateAttributeKeyAndValueToRoleRequest): Promise<AxiosResponse<sdk.RoleV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateAttributeKeyAndValueToRole(requestParameters) as Promise<AxiosResponse<sdk.RoleV2025, any>>;
}
async updateRolesMetadataByFilter(requestParameters: sdk.RolesV2025ApiUpdateRolesMetadataByFilterRequest): Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateRolesMetadataByFilter(requestParameters) as Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>>;
}
async updateRolesMetadataByIds(requestParameters: sdk.RolesV2025ApiUpdateRolesMetadataByIdsRequest): Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateRolesMetadataByIds(requestParameters) as Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>>;
}
async updateRolesMetadataByQuery(requestParameters: sdk.RolesV2025ApiUpdateRolesMetadataByQueryRequest): Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateRolesMetadataByQuery(requestParameters) as Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>>;
}

async createSIMIntegration(requestParameters: sdk.SIMIntegrationsV2025ApiCreateSIMIntegrationRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSIMIntegration(requestParameters) as Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>>;
}
async deleteSIMIntegration(requestParameters: sdk.SIMIntegrationsV2025ApiDeleteSIMIntegrationRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteSIMIntegration(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getSIMIntegration(requestParameters: sdk.SIMIntegrationsV2025ApiGetSIMIntegrationRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSIMIntegration(requestParameters) as Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>>;
}
async getSIMIntegrations(requestParameters: sdk.SIMIntegrationsV2025ApiGetSIMIntegrationsRequest = {}): Promise<AxiosResponse<Array<sdk.ServiceDeskIntegrationDtoV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSIMIntegrations(requestParameters) as Promise<AxiosResponse<Array<sdk.ServiceDeskIntegrationDtoV2025>, any>>;
}
async patchBeforeProvisioningRule(requestParameters: sdk.SIMIntegrationsV2025ApiPatchBeforeProvisioningRuleRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchBeforeProvisioningRule(requestParameters) as Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>>;
}
async patchSIMAttributes(requestParameters: sdk.SIMIntegrationsV2025ApiPatchSIMAttributesRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchSIMAttributes(requestParameters) as Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>>;
}
async putSIMIntegration(requestParameters: sdk.SIMIntegrationsV2025ApiPutSIMIntegrationRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putSIMIntegration(requestParameters) as Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>>;
}

async createSodPolicy(requestParameters: sdk.SODPoliciesV2025ApiCreateSodPolicyRequest): Promise<AxiosResponse<sdk.SodPolicyV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSodPolicy(requestParameters) as Promise<AxiosResponse<sdk.SodPolicyV2025, any>>;
}
async deleteSodPolicy(requestParameters: sdk.SODPoliciesV2025ApiDeleteSodPolicyRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteSodPolicy(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteSodPolicySchedule(requestParameters: sdk.SODPoliciesV2025ApiDeleteSodPolicyScheduleRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteSodPolicySchedule(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getCustomViolationReport(requestParameters: sdk.SODPoliciesV2025ApiGetCustomViolationReportRequest): Promise<AxiosResponse<File, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCustomViolationReport(requestParameters) as Promise<AxiosResponse<File, any>>;
}
async getDefaultViolationReport(requestParameters: sdk.SODPoliciesV2025ApiGetDefaultViolationReportRequest): Promise<AxiosResponse<File, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getDefaultViolationReport(requestParameters) as Promise<AxiosResponse<File, any>>;
}
async getSodAllReportRunStatus(): Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSodAllReportRunStatus() as Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>>;
}
async getSodPolicy(requestParameters: sdk.SODPoliciesV2025ApiGetSodPolicyRequest): Promise<AxiosResponse<sdk.SodPolicyV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSodPolicy(requestParameters) as Promise<AxiosResponse<sdk.SodPolicyV2025, any>>;
}
async getSodPolicySchedule(requestParameters: sdk.SODPoliciesV2025ApiGetSodPolicyScheduleRequest): Promise<AxiosResponse<sdk.SodPolicyScheduleV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSodPolicySchedule(requestParameters) as Promise<AxiosResponse<sdk.SodPolicyScheduleV2025, any>>;
}
async getSodViolationReportRunStatus(requestParameters: sdk.SODPoliciesV2025ApiGetSodViolationReportRunStatusRequest): Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSodViolationReportRunStatus(requestParameters) as Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>>;
}
async getSodViolationReportStatus(requestParameters: sdk.SODPoliciesV2025ApiGetSodViolationReportStatusRequest): Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSodViolationReportStatus(requestParameters) as Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>>;
}
async listSodPolicies(requestParameters: sdk.SODPoliciesV2025ApiListSodPoliciesRequest = {}): Promise<AxiosResponse<Array<sdk.SodPolicyV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listSodPolicies(requestParameters) as Promise<AxiosResponse<Array<sdk.SodPolicyV2025>, any>>;
}
async patchSodPolicy(requestParameters: sdk.SODPoliciesV2025ApiPatchSodPolicyRequest): Promise<AxiosResponse<sdk.SodPolicyV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchSodPolicy(requestParameters) as Promise<AxiosResponse<sdk.SodPolicyV2025, any>>;
}
async putPolicySchedule(requestParameters: sdk.SODPoliciesV2025ApiPutPolicyScheduleRequest): Promise<AxiosResponse<sdk.SodPolicyScheduleV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putPolicySchedule(requestParameters) as Promise<AxiosResponse<sdk.SodPolicyScheduleV2025, any>>;
}
async putSodPolicy(requestParameters: sdk.SODPoliciesV2025ApiPutSodPolicyRequest): Promise<AxiosResponse<sdk.SodPolicyV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putSodPolicy(requestParameters) as Promise<AxiosResponse<sdk.SodPolicyV2025, any>>;
}
async startEvaluateSodPolicy(requestParameters: sdk.SODPoliciesV2025ApiStartEvaluateSodPolicyRequest): Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startEvaluateSodPolicy(requestParameters) as Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>>;
}
async startSodAllPoliciesForOrg(requestParameters: sdk.SODPoliciesV2025ApiStartSodAllPoliciesForOrgRequest = {}): Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startSodAllPoliciesForOrg(requestParameters) as Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>>;
}
async startSodPolicy(requestParameters: sdk.SODPoliciesV2025ApiStartSodPolicyRequest): Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startSodPolicy(requestParameters) as Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>>;
}

async startPredictSodViolations(requestParameters: sdk.SODViolationsV2025ApiStartPredictSodViolationsRequest): Promise<AxiosResponse<sdk.ViolationPredictionV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startPredictSodViolations(requestParameters) as Promise<AxiosResponse<sdk.ViolationPredictionV2025, any>>;
}
async startViolationCheck(requestParameters: sdk.SODViolationsV2025ApiStartViolationCheckRequest): Promise<AxiosResponse<sdk.SodViolationCheckV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startViolationCheck(requestParameters) as Promise<AxiosResponse<sdk.SodViolationCheckV2025, any>>;
}

async exportSpConfig(requestParameters: sdk.SPConfigV2025ApiExportSpConfigRequest): Promise<AxiosResponse<sdk.SpConfigExportJobV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.exportSpConfig(requestParameters) as Promise<AxiosResponse<sdk.SpConfigExportJobV2025, any>>;
}
async getSpConfigExport(requestParameters: sdk.SPConfigV2025ApiGetSpConfigExportRequest): Promise<AxiosResponse<sdk.SpConfigExportResultsV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSpConfigExport(requestParameters) as Promise<AxiosResponse<sdk.SpConfigExportResultsV2025, any>>;
}
async getSpConfigExportStatus(requestParameters: sdk.SPConfigV2025ApiGetSpConfigExportStatusRequest): Promise<AxiosResponse<sdk.SpConfigExportJobStatusV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSpConfigExportStatus(requestParameters) as Promise<AxiosResponse<sdk.SpConfigExportJobStatusV2025, any>>;
}
async getSpConfigImport(requestParameters: sdk.SPConfigV2025ApiGetSpConfigImportRequest): Promise<AxiosResponse<sdk.SpConfigImportResultsV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSpConfigImport(requestParameters) as Promise<AxiosResponse<sdk.SpConfigImportResultsV2025, any>>;
}
async getSpConfigImportStatus(requestParameters: sdk.SPConfigV2025ApiGetSpConfigImportStatusRequest): Promise<AxiosResponse<sdk.SpConfigImportJobStatusV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSpConfigImportStatus(requestParameters) as Promise<AxiosResponse<sdk.SpConfigImportJobStatusV2025, any>>;
}
async importSpConfig(requestParameters: sdk.SPConfigV2025ApiImportSpConfigRequest): Promise<AxiosResponse<sdk.SpConfigJobV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.importSpConfig(requestParameters) as Promise<AxiosResponse<sdk.SpConfigJobV2025, any>>;
}
async listSpConfigObjects(): Promise<AxiosResponse<Array<sdk.SpConfigObjectV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listSpConfigObjects() as Promise<AxiosResponse<Array<sdk.SpConfigObjectV2025>, any>>;
}

async createSavedSearch(requestParameters: sdk.SavedSearchV2025ApiCreateSavedSearchRequest): Promise<AxiosResponse<sdk.SavedSearchV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSavedSearch(requestParameters) as Promise<AxiosResponse<sdk.SavedSearchV2025, any>>;
}
async deleteSavedSearch(requestParameters: sdk.SavedSearchV2025ApiDeleteSavedSearchRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteSavedSearch(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async executeSavedSearch(requestParameters: sdk.SavedSearchV2025ApiExecuteSavedSearchRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.executeSavedSearch(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getSavedSearch(requestParameters: sdk.SavedSearchV2025ApiGetSavedSearchRequest): Promise<AxiosResponse<sdk.SavedSearchV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSavedSearch(requestParameters) as Promise<AxiosResponse<sdk.SavedSearchV2025, any>>;
}
async listSavedSearches(requestParameters: sdk.SavedSearchV2025ApiListSavedSearchesRequest = {}): Promise<AxiosResponse<Array<sdk.SavedSearchV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listSavedSearches(requestParameters) as Promise<AxiosResponse<Array<sdk.SavedSearchV2025>, any>>;
}
async putSavedSearch(requestParameters: sdk.SavedSearchV2025ApiPutSavedSearchRequest): Promise<AxiosResponse<sdk.SavedSearchV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putSavedSearch(requestParameters) as Promise<AxiosResponse<sdk.SavedSearchV2025, any>>;
}

async createScheduledSearch(requestParameters: sdk.ScheduledSearchV2025ApiCreateScheduledSearchRequest): Promise<AxiosResponse<sdk.ScheduledSearchV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createScheduledSearch(requestParameters) as Promise<AxiosResponse<sdk.ScheduledSearchV2025, any>>;
}
async deleteScheduledSearch(requestParameters: sdk.ScheduledSearchV2025ApiDeleteScheduledSearchRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteScheduledSearch(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getScheduledSearch(requestParameters: sdk.ScheduledSearchV2025ApiGetScheduledSearchRequest): Promise<AxiosResponse<sdk.ScheduledSearchV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getScheduledSearch(requestParameters) as Promise<AxiosResponse<sdk.ScheduledSearchV2025, any>>;
}
async listScheduledSearch(requestParameters: sdk.ScheduledSearchV2025ApiListScheduledSearchRequest = {}): Promise<AxiosResponse<Array<sdk.ScheduledSearchV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listScheduledSearch(requestParameters) as Promise<AxiosResponse<Array<sdk.ScheduledSearchV2025>, any>>;
}
async unsubscribeScheduledSearch(requestParameters: sdk.ScheduledSearchV2025ApiUnsubscribeScheduledSearchRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.unsubscribeScheduledSearch(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async updateScheduledSearch(requestParameters: sdk.ScheduledSearchV2025ApiUpdateScheduledSearchRequest): Promise<AxiosResponse<sdk.ScheduledSearchV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateScheduledSearch(requestParameters) as Promise<AxiosResponse<sdk.ScheduledSearchV2025, any>>;
}

async searchAggregate(requestParameters: sdk.SearchV2025ApiSearchAggregateRequest): Promise<AxiosResponse<sdk.AggregationResultV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchAggregate(requestParameters) as Promise<AxiosResponse<sdk.AggregationResultV2025, any>>;
}
async searchCount(requestParameters: sdk.SearchV2025ApiSearchCountRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchCount(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async searchGet(requestParameters: sdk.SearchV2025ApiSearchGetRequest): Promise<AxiosResponse<sdk.SearchDocumentV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchGet(requestParameters) as Promise<AxiosResponse<sdk.SearchDocumentV2025, any>>;
}
async searchPost(requestParameters: sdk.SearchV2025ApiSearchPostRequest): Promise<AxiosResponse<Array<sdk.SearchDocumentsV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchPost(requestParameters) as Promise<AxiosResponse<Array<sdk.SearchDocumentsV2025>, any>>;
}

async createSearchAttributeConfig(requestParameters: sdk.SearchAttributeConfigurationV2025ApiCreateSearchAttributeConfigRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSearchAttributeConfig(requestParameters) as Promise<AxiosResponse<object, any>>;
}
async deleteSearchAttributeConfig(requestParameters: sdk.SearchAttributeConfigurationV2025ApiDeleteSearchAttributeConfigRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteSearchAttributeConfig(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getSearchAttributeConfig(requestParameters: sdk.SearchAttributeConfigurationV2025ApiGetSearchAttributeConfigRequest = {}): Promise<AxiosResponse<Array<sdk.SearchAttributeConfigV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSearchAttributeConfig(requestParameters) as Promise<AxiosResponse<Array<sdk.SearchAttributeConfigV2025>, any>>;
}
async getSingleSearchAttributeConfig(requestParameters: sdk.SearchAttributeConfigurationV2025ApiGetSingleSearchAttributeConfigRequest): Promise<AxiosResponse<sdk.SearchAttributeConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSingleSearchAttributeConfig(requestParameters) as Promise<AxiosResponse<sdk.SearchAttributeConfigV2025, any>>;
}
async patchSearchAttributeConfig(requestParameters: sdk.SearchAttributeConfigurationV2025ApiPatchSearchAttributeConfigRequest): Promise<AxiosResponse<sdk.SearchAttributeConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchSearchAttributeConfig(requestParameters) as Promise<AxiosResponse<sdk.SearchAttributeConfigV2025, any>>;
}

async createSegment(requestParameters: sdk.SegmentsV2025ApiCreateSegmentRequest): Promise<AxiosResponse<sdk.SegmentV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSegment(requestParameters) as Promise<AxiosResponse<sdk.SegmentV2025, any>>;
}
async deleteSegment(requestParameters: sdk.SegmentsV2025ApiDeleteSegmentRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteSegment(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getSegment(requestParameters: sdk.SegmentsV2025ApiGetSegmentRequest): Promise<AxiosResponse<sdk.SegmentV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSegment(requestParameters) as Promise<AxiosResponse<sdk.SegmentV2025, any>>;
}
async listSegments(requestParameters: sdk.SegmentsV2025ApiListSegmentsRequest = {}): Promise<AxiosResponse<Array<sdk.SegmentV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listSegments(requestParameters) as Promise<AxiosResponse<Array<sdk.SegmentV2025>, any>>;
}
async patchSegment(requestParameters: sdk.SegmentsV2025ApiPatchSegmentRequest): Promise<AxiosResponse<sdk.SegmentV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchSegment(requestParameters) as Promise<AxiosResponse<sdk.SegmentV2025, any>>;
}

async createServiceDeskIntegration(requestParameters: sdk.ServiceDeskIntegrationV2025ApiCreateServiceDeskIntegrationRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createServiceDeskIntegration(requestParameters) as Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>>;
}
async deleteServiceDeskIntegration(requestParameters: sdk.ServiceDeskIntegrationV2025ApiDeleteServiceDeskIntegrationRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteServiceDeskIntegration(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getServiceDeskIntegration(requestParameters: sdk.ServiceDeskIntegrationV2025ApiGetServiceDeskIntegrationRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getServiceDeskIntegration(requestParameters) as Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>>;
}
async getServiceDeskIntegrationTemplate(requestParameters: sdk.ServiceDeskIntegrationV2025ApiGetServiceDeskIntegrationTemplateRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationTemplateDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getServiceDeskIntegrationTemplate(requestParameters) as Promise<AxiosResponse<sdk.ServiceDeskIntegrationTemplateDtoV2025, any>>;
}
async getServiceDeskIntegrationTypes(): Promise<AxiosResponse<Array<sdk.ServiceDeskIntegrationTemplateTypeV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getServiceDeskIntegrationTypes() as Promise<AxiosResponse<Array<sdk.ServiceDeskIntegrationTemplateTypeV2025>, any>>;
}
async getServiceDeskIntegrations(requestParameters: sdk.ServiceDeskIntegrationV2025ApiGetServiceDeskIntegrationsRequest = {}): Promise<AxiosResponse<Array<sdk.ServiceDeskIntegrationDtoV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getServiceDeskIntegrations(requestParameters) as Promise<AxiosResponse<Array<sdk.ServiceDeskIntegrationDtoV2025>, any>>;
}
async getStatusCheckDetails(): Promise<AxiosResponse<sdk.QueuedCheckConfigDetailsV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getStatusCheckDetails() as Promise<AxiosResponse<sdk.QueuedCheckConfigDetailsV2025, any>>;
}
async patchServiceDeskIntegration(requestParameters: sdk.ServiceDeskIntegrationV2025ApiPatchServiceDeskIntegrationRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchServiceDeskIntegration(requestParameters) as Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>>;
}
async putServiceDeskIntegration(requestParameters: sdk.ServiceDeskIntegrationV2025ApiPutServiceDeskIntegrationRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putServiceDeskIntegration(requestParameters) as Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>>;
}
async updateStatusCheckDetails(requestParameters: sdk.ServiceDeskIntegrationV2025ApiUpdateStatusCheckDetailsRequest): Promise<AxiosResponse<sdk.QueuedCheckConfigDetailsV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateStatusCheckDetails(requestParameters) as Promise<AxiosResponse<sdk.QueuedCheckConfigDetailsV2025, any>>;
}

async getStatusBySourceId(requestParameters: sdk.SourceUsagesV2025ApiGetStatusBySourceIdRequest): Promise<AxiosResponse<sdk.SourceUsageStatusV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getStatusBySourceId(requestParameters) as Promise<AxiosResponse<sdk.SourceUsageStatusV2025, any>>;
}
async getUsagesBySourceId(requestParameters: sdk.SourceUsagesV2025ApiGetUsagesBySourceIdRequest): Promise<AxiosResponse<Array<sdk.SourceUsageV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getUsagesBySourceId(requestParameters) as Promise<AxiosResponse<Array<sdk.SourceUsageV2025>, any>>;
}

async createProvisioningPolicy(requestParameters: sdk.SourcesV2025ApiCreateProvisioningPolicyRequest): Promise<AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createProvisioningPolicy(requestParameters) as Promise<AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>>;
}
async createSource(requestParameters: sdk.SourcesV2025ApiCreateSourceRequest): Promise<AxiosResponse<sdk.SourceV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSource(requestParameters) as Promise<AxiosResponse<sdk.SourceV2025, any>>;
}
async createSourceSchedule(requestParameters: sdk.SourcesV2025ApiCreateSourceScheduleRequest): Promise<AxiosResponse<sdk.Schedule1V2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSourceSchedule(requestParameters) as Promise<AxiosResponse<sdk.Schedule1V2025, any>>;
}
async createSourceSchema(requestParameters: sdk.SourcesV2025ApiCreateSourceSchemaRequest): Promise<AxiosResponse<sdk.SchemaV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSourceSchema(requestParameters) as Promise<AxiosResponse<sdk.SchemaV2025, any>>;
}
async deleteAccountsAsync(requestParameters: sdk.SourcesV2025ApiDeleteAccountsAsyncRequest): Promise<AxiosResponse<sdk.TaskResultDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteAccountsAsync(requestParameters) as Promise<AxiosResponse<sdk.TaskResultDtoV2025, any>>;
}
async deleteNativeChangeDetectionConfig(requestParameters: sdk.SourcesV2025ApiDeleteNativeChangeDetectionConfigRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteNativeChangeDetectionConfig(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteProvisioningPolicy(requestParameters: sdk.SourcesV2025ApiDeleteProvisioningPolicyRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteProvisioningPolicy(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteSource(requestParameters: sdk.SourcesV2025ApiDeleteSourceRequest): Promise<AxiosResponse<sdk.DeleteSource202ResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteSource(requestParameters) as Promise<AxiosResponse<sdk.DeleteSource202ResponseV2025, any>>;
}
async deleteSourceSchedule(requestParameters: sdk.SourcesV2025ApiDeleteSourceScheduleRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteSourceSchedule(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteSourceSchema(requestParameters: sdk.SourcesV2025ApiDeleteSourceSchemaRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteSourceSchema(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getAccountsSchema(requestParameters: sdk.SourcesV2025ApiGetAccountsSchemaRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccountsSchema(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getCorrelationConfig(requestParameters: sdk.SourcesV2025ApiGetCorrelationConfigRequest): Promise<AxiosResponse<sdk.CorrelationConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCorrelationConfig(requestParameters) as Promise<AxiosResponse<sdk.CorrelationConfigV2025, any>>;
}
async getEntitlementsSchema(requestParameters: sdk.SourcesV2025ApiGetEntitlementsSchemaRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getEntitlementsSchema(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getNativeChangeDetectionConfig(requestParameters: sdk.SourcesV2025ApiGetNativeChangeDetectionConfigRequest): Promise<AxiosResponse<sdk.NativeChangeDetectionConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNativeChangeDetectionConfig(requestParameters) as Promise<AxiosResponse<sdk.NativeChangeDetectionConfigV2025, any>>;
}
async getProvisioningPolicy(requestParameters: sdk.SourcesV2025ApiGetProvisioningPolicyRequest): Promise<AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getProvisioningPolicy(requestParameters) as Promise<AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>>;
}
async getSource(requestParameters: sdk.SourcesV2025ApiGetSourceRequest): Promise<AxiosResponse<sdk.SourceV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSource(requestParameters) as Promise<AxiosResponse<sdk.SourceV2025, any>>;
}
async getSourceAttrSyncConfig(requestParameters: sdk.SourcesV2025ApiGetSourceAttrSyncConfigRequest): Promise<AxiosResponse<sdk.AttrSyncSourceConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourceAttrSyncConfig(requestParameters) as Promise<AxiosResponse<sdk.AttrSyncSourceConfigV2025, any>>;
}
async getSourceConfig(requestParameters: sdk.SourcesV2025ApiGetSourceConfigRequest): Promise<AxiosResponse<sdk.ConnectorDetailV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourceConfig(requestParameters) as Promise<AxiosResponse<sdk.ConnectorDetailV2025, any>>;
}
async getSourceConnections(requestParameters: sdk.SourcesV2025ApiGetSourceConnectionsRequest): Promise<AxiosResponse<sdk.SourceConnectionsDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourceConnections(requestParameters) as Promise<AxiosResponse<sdk.SourceConnectionsDtoV2025, any>>;
}
async getSourceEntitlementRequestConfig(requestParameters: sdk.SourcesV2025ApiGetSourceEntitlementRequestConfigRequest = {}): Promise<AxiosResponse<sdk.SourceEntitlementRequestConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourceEntitlementRequestConfig(requestParameters) as Promise<AxiosResponse<sdk.SourceEntitlementRequestConfigV2025, any>>;
}
async getSourceHealth(requestParameters: sdk.SourcesV2025ApiGetSourceHealthRequest): Promise<AxiosResponse<sdk.SourceHealthDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourceHealth(requestParameters) as Promise<AxiosResponse<sdk.SourceHealthDtoV2025, any>>;
}
async getSourceSchedule(requestParameters: sdk.SourcesV2025ApiGetSourceScheduleRequest): Promise<AxiosResponse<sdk.Schedule1V2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourceSchedule(requestParameters) as Promise<AxiosResponse<sdk.Schedule1V2025, any>>;
}
async getSourceSchedules(requestParameters: sdk.SourcesV2025ApiGetSourceSchedulesRequest): Promise<AxiosResponse<Array<sdk.Schedule1V2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourceSchedules(requestParameters) as Promise<AxiosResponse<Array<sdk.Schedule1V2025>, any>>;
}
async getSourceSchema(requestParameters: sdk.SourcesV2025ApiGetSourceSchemaRequest): Promise<AxiosResponse<sdk.SchemaV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourceSchema(requestParameters) as Promise<AxiosResponse<sdk.SchemaV2025, any>>;
}
async getSourceSchemas(requestParameters: sdk.SourcesV2025ApiGetSourceSchemasRequest): Promise<AxiosResponse<Array<sdk.SchemaV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourceSchemas(requestParameters) as Promise<AxiosResponse<Array<sdk.SchemaV2025>, any>>;
}
async importAccounts(requestParameters: sdk.SourcesV2025ApiImportAccountsRequest): Promise<AxiosResponse<sdk.LoadAccountsTaskV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.importAccounts(requestParameters) as Promise<AxiosResponse<sdk.LoadAccountsTaskV2025, any>>;
}
async importAccountsSchema(requestParameters: sdk.SourcesV2025ApiImportAccountsSchemaRequest): Promise<AxiosResponse<sdk.SchemaV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.importAccountsSchema(requestParameters) as Promise<AxiosResponse<sdk.SchemaV2025, any>>;
}
async importConnectorFile(requestParameters: sdk.SourcesV2025ApiImportConnectorFileRequest): Promise<AxiosResponse<sdk.SourceV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.importConnectorFile(requestParameters) as Promise<AxiosResponse<sdk.SourceV2025, any>>;
}
async importEntitlements(requestParameters: sdk.SourcesV2025ApiImportEntitlementsRequest): Promise<AxiosResponse<sdk.LoadEntitlementTaskV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.importEntitlements(requestParameters) as Promise<AxiosResponse<sdk.LoadEntitlementTaskV2025, any>>;
}
async importEntitlementsSchema(requestParameters: sdk.SourcesV2025ApiImportEntitlementsSchemaRequest): Promise<AxiosResponse<sdk.SchemaV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.importEntitlementsSchema(requestParameters) as Promise<AxiosResponse<sdk.SchemaV2025, any>>;
}
async importUncorrelatedAccounts(requestParameters: sdk.SourcesV2025ApiImportUncorrelatedAccountsRequest): Promise<AxiosResponse<sdk.LoadUncorrelatedAccountsTaskV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.importUncorrelatedAccounts(requestParameters) as Promise<AxiosResponse<sdk.LoadUncorrelatedAccountsTaskV2025, any>>;
}
async listProvisioningPolicies(requestParameters: sdk.SourcesV2025ApiListProvisioningPoliciesRequest): Promise<AxiosResponse<Array<sdk.ProvisioningPolicyDtoV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listProvisioningPolicies(requestParameters) as Promise<AxiosResponse<Array<sdk.ProvisioningPolicyDtoV2025>, any>>;
}
async listSources(requestParameters: sdk.SourcesV2025ApiListSourcesRequest = {}): Promise<AxiosResponse<Array<sdk.SourceV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listSources(requestParameters) as Promise<AxiosResponse<Array<sdk.SourceV2025>, any>>;
}
async pingCluster(requestParameters: sdk.SourcesV2025ApiPingClusterRequest): Promise<AxiosResponse<sdk.StatusResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.pingCluster(requestParameters) as Promise<AxiosResponse<sdk.StatusResponseV2025, any>>;
}
async putCorrelationConfig(requestParameters: sdk.SourcesV2025ApiPutCorrelationConfigRequest): Promise<AxiosResponse<sdk.CorrelationConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putCorrelationConfig(requestParameters) as Promise<AxiosResponse<sdk.CorrelationConfigV2025, any>>;
}
async putNativeChangeDetectionConfig(requestParameters: sdk.SourcesV2025ApiPutNativeChangeDetectionConfigRequest): Promise<AxiosResponse<sdk.NativeChangeDetectionConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putNativeChangeDetectionConfig(requestParameters) as Promise<AxiosResponse<sdk.NativeChangeDetectionConfigV2025, any>>;
}
async putProvisioningPolicy(requestParameters: sdk.SourcesV2025ApiPutProvisioningPolicyRequest): Promise<AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putProvisioningPolicy(requestParameters) as Promise<AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>>;
}
async putSource(requestParameters: sdk.SourcesV2025ApiPutSourceRequest): Promise<AxiosResponse<sdk.SourceV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putSource(requestParameters) as Promise<AxiosResponse<sdk.SourceV2025, any>>;
}
async putSourceAttrSyncConfig(requestParameters: sdk.SourcesV2025ApiPutSourceAttrSyncConfigRequest): Promise<AxiosResponse<sdk.AttrSyncSourceConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putSourceAttrSyncConfig(requestParameters) as Promise<AxiosResponse<sdk.AttrSyncSourceConfigV2025, any>>;
}
async putSourceSchema(requestParameters: sdk.SourcesV2025ApiPutSourceSchemaRequest): Promise<AxiosResponse<sdk.SchemaV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putSourceSchema(requestParameters) as Promise<AxiosResponse<sdk.SchemaV2025, any>>;
}
async searchResourceObjects(requestParameters: sdk.SourcesV2025ApiSearchResourceObjectsRequest): Promise<AxiosResponse<sdk.ResourceObjectsResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchResourceObjects(requestParameters) as Promise<AxiosResponse<sdk.ResourceObjectsResponseV2025, any>>;
}
async syncAttributesForSource(requestParameters: sdk.SourcesV2025ApiSyncAttributesForSourceRequest): Promise<AxiosResponse<sdk.SourceSyncJobV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.syncAttributesForSource(requestParameters) as Promise<AxiosResponse<sdk.SourceSyncJobV2025, any>>;
}
async testSourceConfiguration(requestParameters: sdk.SourcesV2025ApiTestSourceConfigurationRequest): Promise<AxiosResponse<sdk.StatusResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.testSourceConfiguration(requestParameters) as Promise<AxiosResponse<sdk.StatusResponseV2025, any>>;
}
async testSourceConnection(requestParameters: sdk.SourcesV2025ApiTestSourceConnectionRequest): Promise<AxiosResponse<sdk.StatusResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.testSourceConnection(requestParameters) as Promise<AxiosResponse<sdk.StatusResponseV2025, any>>;
}
async updatePasswordPolicyHolders(requestParameters: sdk.SourcesV2025ApiUpdatePasswordPolicyHoldersRequest): Promise<AxiosResponse<Array<sdk.PasswordPolicyHoldersDtoInnerV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updatePasswordPolicyHolders(requestParameters) as Promise<AxiosResponse<Array<sdk.PasswordPolicyHoldersDtoInnerV2025>, any>>;
}
async updateProvisioningPoliciesInBulk(requestParameters: sdk.SourcesV2025ApiUpdateProvisioningPoliciesInBulkRequest): Promise<AxiosResponse<Array<sdk.ProvisioningPolicyDtoV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateProvisioningPoliciesInBulk(requestParameters) as Promise<AxiosResponse<Array<sdk.ProvisioningPolicyDtoV2025>, any>>;
}
async updateProvisioningPolicy(requestParameters: sdk.SourcesV2025ApiUpdateProvisioningPolicyRequest): Promise<AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateProvisioningPolicy(requestParameters) as Promise<AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>>;
}
async updateSource(requestParameters: sdk.SourcesV2025ApiUpdateSourceRequest): Promise<AxiosResponse<sdk.SourceV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateSource(requestParameters) as Promise<AxiosResponse<sdk.SourceV2025, any>>;
}
async updateSourceEntitlementRequestConfig(requestParameters: sdk.SourcesV2025ApiUpdateSourceEntitlementRequestConfigRequest): Promise<AxiosResponse<sdk.SourceEntitlementRequestConfigV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateSourceEntitlementRequestConfig(requestParameters) as Promise<AxiosResponse<sdk.SourceEntitlementRequestConfigV2025, any>>;
}
async updateSourceSchedule(requestParameters: sdk.SourcesV2025ApiUpdateSourceScheduleRequest): Promise<AxiosResponse<sdk.Schedule1V2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateSourceSchedule(requestParameters) as Promise<AxiosResponse<sdk.Schedule1V2025, any>>;
}
async updateSourceSchema(requestParameters: sdk.SourcesV2025ApiUpdateSourceSchemaRequest): Promise<AxiosResponse<sdk.SchemaV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateSourceSchema(requestParameters) as Promise<AxiosResponse<sdk.SchemaV2025, any>>;
}

async getSedBatchStats(requestParameters: sdk.SuggestedEntitlementDescriptionV2025ApiGetSedBatchStatsRequest): Promise<AxiosResponse<sdk.SedBatchStatsV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSedBatchStats(requestParameters) as Promise<AxiosResponse<sdk.SedBatchStatsV2025, any>>;
}
async getSedBatches(requestParameters: sdk.SuggestedEntitlementDescriptionV2025ApiGetSedBatchesRequest = {}): Promise<AxiosResponse<Array<sdk.SedBatchRecordV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSedBatches(requestParameters) as Promise<AxiosResponse<Array<sdk.SedBatchRecordV2025>, any>>;
}
async listSeds(requestParameters: sdk.SuggestedEntitlementDescriptionV2025ApiListSedsRequest = {}): Promise<AxiosResponse<Array<sdk.SedV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listSeds(requestParameters) as Promise<AxiosResponse<Array<sdk.SedV2025>, any>>;
}
async patchSed(requestParameters: sdk.SuggestedEntitlementDescriptionV2025ApiPatchSedRequest): Promise<AxiosResponse<sdk.SedV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchSed(requestParameters) as Promise<AxiosResponse<sdk.SedV2025, any>>;
}
async submitSedApproval(requestParameters: sdk.SuggestedEntitlementDescriptionV2025ApiSubmitSedApprovalRequest): Promise<AxiosResponse<Array<sdk.SedApprovalStatusV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitSedApproval(requestParameters) as Promise<AxiosResponse<Array<sdk.SedApprovalStatusV2025>, any>>;
}
async submitSedAssignment(requestParameters: sdk.SuggestedEntitlementDescriptionV2025ApiSubmitSedAssignmentRequest): Promise<AxiosResponse<sdk.SedAssignmentResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitSedAssignment(requestParameters) as Promise<AxiosResponse<sdk.SedAssignmentResponseV2025, any>>;
}
async submitSedBatchRequest(requestParameters: sdk.SuggestedEntitlementDescriptionV2025ApiSubmitSedBatchRequestRequest = {}): Promise<AxiosResponse<sdk.SedBatchResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitSedBatchRequest(requestParameters) as Promise<AxiosResponse<sdk.SedBatchResponseV2025, any>>;
}

async deleteTaggedObject(requestParameters: sdk.TaggedObjectsV2025ApiDeleteTaggedObjectRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteTaggedObject(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteTagsToManyObject(requestParameters: sdk.TaggedObjectsV2025ApiDeleteTagsToManyObjectRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteTagsToManyObject(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getTaggedObject(requestParameters: sdk.TaggedObjectsV2025ApiGetTaggedObjectRequest): Promise<AxiosResponse<sdk.TaggedObjectV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getTaggedObject(requestParameters) as Promise<AxiosResponse<sdk.TaggedObjectV2025, any>>;
}
async listTaggedObjects(requestParameters: sdk.TaggedObjectsV2025ApiListTaggedObjectsRequest = {}): Promise<AxiosResponse<Array<sdk.TaggedObjectV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listTaggedObjects(requestParameters) as Promise<AxiosResponse<Array<sdk.TaggedObjectV2025>, any>>;
}
async listTaggedObjectsByType(requestParameters: sdk.TaggedObjectsV2025ApiListTaggedObjectsByTypeRequest): Promise<AxiosResponse<Array<sdk.TaggedObjectV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listTaggedObjectsByType(requestParameters) as Promise<AxiosResponse<Array<sdk.TaggedObjectV2025>, any>>;
}
async putTaggedObject(requestParameters: sdk.TaggedObjectsV2025ApiPutTaggedObjectRequest): Promise<AxiosResponse<sdk.TaggedObjectV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putTaggedObject(requestParameters) as Promise<AxiosResponse<sdk.TaggedObjectV2025, any>>;
}
async setTagToObject(requestParameters: sdk.TaggedObjectsV2025ApiSetTagToObjectRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setTagToObject(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async setTagsToManyObjects(requestParameters: sdk.TaggedObjectsV2025ApiSetTagsToManyObjectsRequest): Promise<AxiosResponse<Array<sdk.BulkTaggedObjectResponseV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setTagsToManyObjects(requestParameters) as Promise<AxiosResponse<Array<sdk.BulkTaggedObjectResponseV2025>, any>>;
}

async createTag(requestParameters: sdk.TagsV2025ApiCreateTagRequest): Promise<AxiosResponse<sdk.TagV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createTag(requestParameters) as Promise<AxiosResponse<sdk.TagV2025, any>>;
}
async deleteTagById(requestParameters: sdk.TagsV2025ApiDeleteTagByIdRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteTagById(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getTagById(requestParameters: sdk.TagsV2025ApiGetTagByIdRequest): Promise<AxiosResponse<sdk.TagV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getTagById(requestParameters) as Promise<AxiosResponse<sdk.TagV2025, any>>;
}
async listTags(requestParameters: sdk.TagsV2025ApiListTagsRequest = {}): Promise<AxiosResponse<Array<sdk.TagV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listTags(requestParameters) as Promise<AxiosResponse<Array<sdk.TagV2025>, any>>;
}

async getPendingTaskHeaders(requestParameters: sdk.TaskManagementV2025ApiGetPendingTaskHeadersRequest = {}): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPendingTaskHeaders(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getPendingTasks(requestParameters: sdk.TaskManagementV2025ApiGetPendingTasksRequest = {}): Promise<AxiosResponse<Array<sdk.TaskStatusV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPendingTasks(requestParameters) as Promise<AxiosResponse<Array<sdk.TaskStatusV2025>, any>>;
}
async getTaskStatus(requestParameters: sdk.TaskManagementV2025ApiGetTaskStatusRequest): Promise<AxiosResponse<sdk.TaskStatusV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getTaskStatus(requestParameters) as Promise<AxiosResponse<sdk.TaskStatusV2025, any>>;
}
async getTaskStatusList(requestParameters: sdk.TaskManagementV2025ApiGetTaskStatusListRequest = {}): Promise<AxiosResponse<Array<sdk.TaskStatusV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getTaskStatusList(requestParameters) as Promise<AxiosResponse<Array<sdk.TaskStatusV2025>, any>>;
}
async updateTaskStatus(requestParameters: sdk.TaskManagementV2025ApiUpdateTaskStatusRequest): Promise<AxiosResponse<sdk.TaskStatusV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateTaskStatus(requestParameters) as Promise<AxiosResponse<sdk.TaskStatusV2025, any>>;
}

async getTenant(): Promise<AxiosResponse<sdk.TenantV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getTenant() as Promise<AxiosResponse<sdk.TenantV2025, any>>;
}

async getTenantContext(requestParameters: sdk.TenantContextV2025ApiGetTenantContextRequest = {}): Promise<AxiosResponse<Array<sdk.GetTenantContext200ResponseInnerV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getTenantContext(requestParameters) as Promise<AxiosResponse<Array<sdk.GetTenantContext200ResponseInnerV2025>, any>>;
}
async patchTenantContext(requestParameters: sdk.TenantContextV2025ApiPatchTenantContextRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchTenantContext(requestParameters) as Promise<AxiosResponse<void, any>>;
}

async createTransform(requestParameters: sdk.TransformsV2025ApiCreateTransformRequest): Promise<AxiosResponse<sdk.TransformReadV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createTransform(requestParameters) as Promise<AxiosResponse<sdk.TransformReadV2025, any>>;
}
async deleteTransform(requestParameters: sdk.TransformsV2025ApiDeleteTransformRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteTransform(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getTransform(requestParameters: sdk.TransformsV2025ApiGetTransformRequest): Promise<AxiosResponse<sdk.TransformReadV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getTransform(requestParameters) as Promise<AxiosResponse<sdk.TransformReadV2025, any>>;
}
async listTransforms(requestParameters: sdk.TransformsV2025ApiListTransformsRequest = {}): Promise<AxiosResponse<Array<sdk.TransformReadV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listTransforms(requestParameters) as Promise<AxiosResponse<Array<sdk.TransformReadV2025>, any>>;
}
async updateTransform(requestParameters: sdk.TransformsV2025ApiUpdateTransformRequest): Promise<AxiosResponse<sdk.TransformReadV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateTransform(requestParameters) as Promise<AxiosResponse<sdk.TransformReadV2025, any>>;
}

async completeTriggerInvocation(requestParameters: sdk.TriggersV2025ApiCompleteTriggerInvocationRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.completeTriggerInvocation(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async createSubscription(requestParameters: sdk.TriggersV2025ApiCreateSubscriptionRequest): Promise<AxiosResponse<sdk.SubscriptionV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSubscription(requestParameters) as Promise<AxiosResponse<sdk.SubscriptionV2025, any>>;
}
async deleteSubscription(requestParameters: sdk.TriggersV2025ApiDeleteSubscriptionRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteSubscription(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async listSubscriptions(requestParameters: sdk.TriggersV2025ApiListSubscriptionsRequest = {}): Promise<AxiosResponse<Array<sdk.SubscriptionV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listSubscriptions(requestParameters) as Promise<AxiosResponse<Array<sdk.SubscriptionV2025>, any>>;
}
async listTriggerInvocationStatus(requestParameters: sdk.TriggersV2025ApiListTriggerInvocationStatusRequest = {}): Promise<AxiosResponse<Array<sdk.InvocationStatusV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listTriggerInvocationStatus(requestParameters) as Promise<AxiosResponse<Array<sdk.InvocationStatusV2025>, any>>;
}
async listTriggers(requestParameters: sdk.TriggersV2025ApiListTriggersRequest = {}): Promise<AxiosResponse<Array<sdk.TriggerV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listTriggers(requestParameters) as Promise<AxiosResponse<Array<sdk.TriggerV2025>, any>>;
}
async patchSubscription(requestParameters: sdk.TriggersV2025ApiPatchSubscriptionRequest): Promise<AxiosResponse<sdk.SubscriptionV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchSubscription(requestParameters) as Promise<AxiosResponse<sdk.SubscriptionV2025, any>>;
}
async startTestTriggerInvocation(requestParameters: sdk.TriggersV2025ApiStartTestTriggerInvocationRequest): Promise<AxiosResponse<Array<sdk.InvocationV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startTestTriggerInvocation(requestParameters) as Promise<AxiosResponse<Array<sdk.InvocationV2025>, any>>;
}
async testSubscriptionFilter(requestParameters: sdk.TriggersV2025ApiTestSubscriptionFilterRequest): Promise<AxiosResponse<sdk.ValidateFilterOutputDtoV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.testSubscriptionFilter(requestParameters) as Promise<AxiosResponse<sdk.ValidateFilterOutputDtoV2025, any>>;
}
async updateSubscription(requestParameters: sdk.TriggersV2025ApiUpdateSubscriptionRequest): Promise<AxiosResponse<sdk.SubscriptionV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateSubscription(requestParameters) as Promise<AxiosResponse<sdk.SubscriptionV2025, any>>;
}

async getTenantUiMetadata(requestParameters: sdk.UIMetadataV2025ApiGetTenantUiMetadataRequest = {}): Promise<AxiosResponse<sdk.TenantUiMetadataItemResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getTenantUiMetadata(requestParameters) as Promise<AxiosResponse<sdk.TenantUiMetadataItemResponseV2025, any>>;
}
async setTenantUiMetadata(requestParameters: sdk.UIMetadataV2025ApiSetTenantUiMetadataRequest): Promise<AxiosResponse<sdk.TenantUiMetadataItemResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setTenantUiMetadata(requestParameters) as Promise<AxiosResponse<sdk.TenantUiMetadataItemResponseV2025, any>>;
}

async createVendorConnectorMapping(requestParameters: sdk.VendorConnectorMappingsV2025ApiCreateVendorConnectorMappingRequest): Promise<AxiosResponse<sdk.VendorConnectorMappingV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createVendorConnectorMapping(requestParameters) as Promise<AxiosResponse<sdk.VendorConnectorMappingV2025, any>>;
}
async deleteVendorConnectorMapping(requestParameters: sdk.VendorConnectorMappingsV2025ApiDeleteVendorConnectorMappingRequest): Promise<AxiosResponse<sdk.DeleteVendorConnectorMapping200ResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteVendorConnectorMapping(requestParameters) as Promise<AxiosResponse<sdk.DeleteVendorConnectorMapping200ResponseV2025, any>>;
}
async getVendorConnectorMappings(): Promise<AxiosResponse<Array<sdk.VendorConnectorMappingV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getVendorConnectorMappings() as Promise<AxiosResponse<Array<sdk.VendorConnectorMappingV2025>, any>>;
}

async approveApprovalItem(requestParameters: sdk.WorkItemsV2025ApiApproveApprovalItemRequest): Promise<AxiosResponse<sdk.WorkItemsV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.approveApprovalItem(requestParameters) as Promise<AxiosResponse<sdk.WorkItemsV2025, any>>;
}
async approveApprovalItemsInBulk(requestParameters: sdk.WorkItemsV2025ApiApproveApprovalItemsInBulkRequest): Promise<AxiosResponse<sdk.WorkItemsV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.approveApprovalItemsInBulk(requestParameters) as Promise<AxiosResponse<sdk.WorkItemsV2025, any>>;
}
async completeWorkItem(requestParameters: sdk.WorkItemsV2025ApiCompleteWorkItemRequest): Promise<AxiosResponse<sdk.WorkItemsV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.completeWorkItem(requestParameters) as Promise<AxiosResponse<sdk.WorkItemsV2025, any>>;
}
async forwardWorkItem(requestParameters: sdk.WorkItemsV2025ApiForwardWorkItemRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.forwardWorkItem(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getCompletedWorkItems(requestParameters: sdk.WorkItemsV2025ApiGetCompletedWorkItemsRequest = {}): Promise<AxiosResponse<Array<sdk.WorkItemsV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCompletedWorkItems(requestParameters) as Promise<AxiosResponse<Array<sdk.WorkItemsV2025>, any>>;
}
async getCountCompletedWorkItems(requestParameters: sdk.WorkItemsV2025ApiGetCountCompletedWorkItemsRequest = {}): Promise<AxiosResponse<sdk.WorkItemsCountV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCountCompletedWorkItems(requestParameters) as Promise<AxiosResponse<sdk.WorkItemsCountV2025, any>>;
}
async getCountWorkItems(requestParameters: sdk.WorkItemsV2025ApiGetCountWorkItemsRequest = {}): Promise<AxiosResponse<sdk.WorkItemsCountV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCountWorkItems(requestParameters) as Promise<AxiosResponse<sdk.WorkItemsCountV2025, any>>;
}
async getWorkItem(requestParameters: sdk.WorkItemsV2025ApiGetWorkItemRequest): Promise<AxiosResponse<sdk.WorkItemsV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getWorkItem(requestParameters) as Promise<AxiosResponse<sdk.WorkItemsV2025, any>>;
}
async getWorkItemsSummary(requestParameters: sdk.WorkItemsV2025ApiGetWorkItemsSummaryRequest = {}): Promise<AxiosResponse<sdk.WorkItemsSummaryV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getWorkItemsSummary(requestParameters) as Promise<AxiosResponse<sdk.WorkItemsSummaryV2025, any>>;
}
async listWorkItems(requestParameters: sdk.WorkItemsV2025ApiListWorkItemsRequest = {}): Promise<AxiosResponse<Array<sdk.WorkItemsV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listWorkItems(requestParameters) as Promise<AxiosResponse<Array<sdk.WorkItemsV2025>, any>>;
}
async rejectApprovalItem(requestParameters: sdk.WorkItemsV2025ApiRejectApprovalItemRequest): Promise<AxiosResponse<sdk.WorkItemsV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.rejectApprovalItem(requestParameters) as Promise<AxiosResponse<sdk.WorkItemsV2025, any>>;
}
async rejectApprovalItemsInBulk(requestParameters: sdk.WorkItemsV2025ApiRejectApprovalItemsInBulkRequest): Promise<AxiosResponse<sdk.WorkItemsV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.rejectApprovalItemsInBulk(requestParameters) as Promise<AxiosResponse<sdk.WorkItemsV2025, any>>;
}
async submitAccountSelection(requestParameters: sdk.WorkItemsV2025ApiSubmitAccountSelectionRequest): Promise<AxiosResponse<sdk.WorkItemsV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitAccountSelection(requestParameters) as Promise<AxiosResponse<sdk.WorkItemsV2025, any>>;
}

async createReassignmentConfiguration(requestParameters: sdk.WorkReassignmentV2025ApiCreateReassignmentConfigurationRequest): Promise<AxiosResponse<sdk.ConfigurationItemResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createReassignmentConfiguration(requestParameters) as Promise<AxiosResponse<sdk.ConfigurationItemResponseV2025, any>>;
}
async deleteReassignmentConfiguration(requestParameters: sdk.WorkReassignmentV2025ApiDeleteReassignmentConfigurationRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteReassignmentConfiguration(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getEvaluateReassignmentConfiguration(requestParameters: sdk.WorkReassignmentV2025ApiGetEvaluateReassignmentConfigurationRequest): Promise<AxiosResponse<Array<sdk.EvaluateResponseV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getEvaluateReassignmentConfiguration(requestParameters) as Promise<AxiosResponse<Array<sdk.EvaluateResponseV2025>, any>>;
}
async getReassignmentConfigTypes(requestParameters: sdk.WorkReassignmentV2025ApiGetReassignmentConfigTypesRequest = {}): Promise<AxiosResponse<Array<sdk.ConfigTypeV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getReassignmentConfigTypes(requestParameters) as Promise<AxiosResponse<Array<sdk.ConfigTypeV2025>, any>>;
}
async getReassignmentConfiguration(requestParameters: sdk.WorkReassignmentV2025ApiGetReassignmentConfigurationRequest): Promise<AxiosResponse<sdk.ConfigurationResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getReassignmentConfiguration(requestParameters) as Promise<AxiosResponse<sdk.ConfigurationResponseV2025, any>>;
}
async getTenantConfigConfiguration(requestParameters: sdk.WorkReassignmentV2025ApiGetTenantConfigConfigurationRequest = {}): Promise<AxiosResponse<sdk.TenantConfigurationResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getTenantConfigConfiguration(requestParameters) as Promise<AxiosResponse<sdk.TenantConfigurationResponseV2025, any>>;
}
async listReassignmentConfigurations(requestParameters: sdk.WorkReassignmentV2025ApiListReassignmentConfigurationsRequest = {}): Promise<AxiosResponse<Array<sdk.ConfigurationResponseV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listReassignmentConfigurations(requestParameters) as Promise<AxiosResponse<Array<sdk.ConfigurationResponseV2025>, any>>;
}
async putReassignmentConfig(requestParameters: sdk.WorkReassignmentV2025ApiPutReassignmentConfigRequest): Promise<AxiosResponse<sdk.ConfigurationItemResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putReassignmentConfig(requestParameters) as Promise<AxiosResponse<sdk.ConfigurationItemResponseV2025, any>>;
}
async putTenantConfiguration(requestParameters: sdk.WorkReassignmentV2025ApiPutTenantConfigurationRequest): Promise<AxiosResponse<sdk.TenantConfigurationResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putTenantConfiguration(requestParameters) as Promise<AxiosResponse<sdk.TenantConfigurationResponseV2025, any>>;
}

async cancelWorkflowExecution(requestParameters: sdk.WorkflowsV2025ApiCancelWorkflowExecutionRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.cancelWorkflowExecution(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async createExternalExecuteWorkflow(requestParameters: sdk.WorkflowsV2025ApiCreateExternalExecuteWorkflowRequest): Promise<AxiosResponse<sdk.CreateExternalExecuteWorkflow200ResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createExternalExecuteWorkflow(requestParameters) as Promise<AxiosResponse<sdk.CreateExternalExecuteWorkflow200ResponseV2025, any>>;
}
async createWorkflow(requestParameters: sdk.WorkflowsV2025ApiCreateWorkflowRequest): Promise<AxiosResponse<sdk.WorkflowV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createWorkflow(requestParameters) as Promise<AxiosResponse<sdk.WorkflowV2025, any>>;
}
async createWorkflowExternalTrigger(requestParameters: sdk.WorkflowsV2025ApiCreateWorkflowExternalTriggerRequest): Promise<AxiosResponse<sdk.WorkflowOAuthClientV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createWorkflowExternalTrigger(requestParameters) as Promise<AxiosResponse<sdk.WorkflowOAuthClientV2025, any>>;
}
async deleteWorkflow(requestParameters: sdk.WorkflowsV2025ApiDeleteWorkflowRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteWorkflow(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getWorkflow(requestParameters: sdk.WorkflowsV2025ApiGetWorkflowRequest): Promise<AxiosResponse<sdk.WorkflowV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getWorkflow(requestParameters) as Promise<AxiosResponse<sdk.WorkflowV2025, any>>;
}
async getWorkflowExecution(requestParameters: sdk.WorkflowsV2025ApiGetWorkflowExecutionRequest): Promise<AxiosResponse<object, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getWorkflowExecution(requestParameters) as Promise<AxiosResponse<object, any>>;
}
async getWorkflowExecutionHistory(requestParameters: sdk.WorkflowsV2025ApiGetWorkflowExecutionHistoryRequest): Promise<AxiosResponse<Array<sdk.WorkflowExecutionEventV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getWorkflowExecutionHistory(requestParameters) as Promise<AxiosResponse<Array<sdk.WorkflowExecutionEventV2025>, any>>;
}
async getWorkflowExecutionHistoryV2(requestParameters: sdk.WorkflowsV2025ApiGetWorkflowExecutionHistoryV2Request): Promise<AxiosResponse<sdk.WorkflowExecutionHistoryV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getWorkflowExecutionHistoryV2(requestParameters) as Promise<AxiosResponse<sdk.WorkflowExecutionHistoryV2025, any>>;
}
async getWorkflowExecutions(requestParameters: sdk.WorkflowsV2025ApiGetWorkflowExecutionsRequest): Promise<AxiosResponse<Array<sdk.WorkflowExecutionV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getWorkflowExecutions(requestParameters) as Promise<AxiosResponse<Array<sdk.WorkflowExecutionV2025>, any>>;
}
async listCompleteWorkflowLibrary(requestParameters: sdk.WorkflowsV2025ApiListCompleteWorkflowLibraryRequest = {}): Promise<AxiosResponse<Array<sdk.ListCompleteWorkflowLibrary200ResponseInnerV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listCompleteWorkflowLibrary(requestParameters) as Promise<AxiosResponse<Array<sdk.ListCompleteWorkflowLibrary200ResponseInnerV2025>, any>>;
}
async listWorkflowLibraryActions(requestParameters: sdk.WorkflowsV2025ApiListWorkflowLibraryActionsRequest = {}): Promise<AxiosResponse<Array<sdk.WorkflowLibraryActionV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listWorkflowLibraryActions(requestParameters) as Promise<AxiosResponse<Array<sdk.WorkflowLibraryActionV2025>, any>>;
}
async listWorkflowLibraryOperators(): Promise<AxiosResponse<Array<sdk.WorkflowLibraryOperatorV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listWorkflowLibraryOperators() as Promise<AxiosResponse<Array<sdk.WorkflowLibraryOperatorV2025>, any>>;
}
async listWorkflowLibraryTriggers(requestParameters: sdk.WorkflowsV2025ApiListWorkflowLibraryTriggersRequest = {}): Promise<AxiosResponse<Array<sdk.WorkflowLibraryTriggerV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listWorkflowLibraryTriggers(requestParameters) as Promise<AxiosResponse<Array<sdk.WorkflowLibraryTriggerV2025>, any>>;
}
async listWorkflows(): Promise<AxiosResponse<Array<sdk.WorkflowV2025>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listWorkflows() as Promise<AxiosResponse<Array<sdk.WorkflowV2025>, any>>;
}
async patchWorkflow(requestParameters: sdk.WorkflowsV2025ApiPatchWorkflowRequest): Promise<AxiosResponse<sdk.WorkflowV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchWorkflow(requestParameters) as Promise<AxiosResponse<sdk.WorkflowV2025, any>>;
}
async putWorkflow(requestParameters: sdk.WorkflowsV2025ApiPutWorkflowRequest): Promise<AxiosResponse<sdk.WorkflowV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putWorkflow(requestParameters) as Promise<AxiosResponse<sdk.WorkflowV2025, any>>;
}
async testExternalExecuteWorkflow(requestParameters: sdk.WorkflowsV2025ApiTestExternalExecuteWorkflowRequest): Promise<AxiosResponse<sdk.TestExternalExecuteWorkflow200ResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.testExternalExecuteWorkflow(requestParameters) as Promise<AxiosResponse<sdk.TestExternalExecuteWorkflow200ResponseV2025, any>>;
}
async testWorkflow(requestParameters: sdk.WorkflowsV2025ApiTestWorkflowRequest): Promise<AxiosResponse<sdk.TestWorkflow200ResponseV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.testWorkflow(requestParameters) as Promise<AxiosResponse<sdk.TestWorkflow200ResponseV2025, any>>;
}


async genericGet(requestParameters: sdk.DefaultApiGenericGetRequest): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.genericGet(requestParameters) as Promise<AxiosResponse<any, any>>;
}

async genericPost(requestParameters: sdk.DefaultApiGenericPostRequest): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.genericPost(requestParameters) as Promise<AxiosResponse<any, any>>;
}

async genericPut(requestParameters: sdk.DefaultApiGenericPutRequest): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.genericPut(requestParameters) as Promise<AxiosResponse<any, any>>;
}

async genericPatch(requestParameters: sdk.DefaultApiGenericPatchRequest): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.genericPatch(requestParameters) as Promise<AxiosResponse<any, any>>;
}

async genericDelete(requestParameters: sdk.DefaultApiGenericDeleteRequest): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.genericDelete(requestParameters) as Promise<AxiosResponse<any, any>>;
}
}