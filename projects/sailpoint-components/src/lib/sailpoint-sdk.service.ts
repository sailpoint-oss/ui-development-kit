import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AxiosResponse } from 'axios';
import type * as sdk from 'sailpoint-api-client';
import type * as accessModelMetadataTypes from 'sailpoint-api-client/dist/access_model_metadata/api';
import type * as accessProfilesTypes from 'sailpoint-api-client/dist/access_profiles/api';
import type * as accessRequestApprovalsTypes from 'sailpoint-api-client/dist/access_request_approvals/api';
import type * as accessRequestIdentityMetricsTypes from 'sailpoint-api-client/dist/access_request_identity_metrics/api';
import type * as accessRequestsTypes from 'sailpoint-api-client/dist/access_requests/api';
import type * as accountActivitiesTypes from 'sailpoint-api-client/dist/account_activities/api';
import type * as accountAggregationsTypes from 'sailpoint-api-client/dist/account_aggregations/api';
import type * as accountDeletionRequestsTypes from 'sailpoint-api-client/dist/account_deletion_requests/api';
import type * as accountsTypes from 'sailpoint-api-client/dist/accounts/api';
import type * as accountUsagesTypes from 'sailpoint-api-client/dist/account_usages/api';
import type * as apiUsageTypes from 'sailpoint-api-client/dist/api_usage/api';
import type * as applicationDiscoveryTypes from 'sailpoint-api-client/dist/application_discovery/api';
import type * as approvalsTypes from 'sailpoint-api-client/dist/approvals/api';
import type * as appsTypes from 'sailpoint-api-client/dist/apps/api';
import type * as authProfileTypes from 'sailpoint-api-client/dist/auth_profile/api';
import type * as authUsersTypes from 'sailpoint-api-client/dist/auth_users/api';
import type * as brandingTypes from 'sailpoint-api-client/dist/branding/api';
import type * as certificationCampaignFiltersTypes from 'sailpoint-api-client/dist/certification_campaign_filters/api';
import type * as certificationCampaignsTypes from 'sailpoint-api-client/dist/certification_campaigns/api';
import type * as certificationsTypes from 'sailpoint-api-client/dist/certifications/api';
import type * as certificationSummariesTypes from 'sailpoint-api-client/dist/certification_summaries/api';
import type * as classifySourceTypes from 'sailpoint-api-client/dist/classify_source/api';
import type * as configurationHubTypes from 'sailpoint-api-client/dist/configuration_hub/api';
import type * as connectorCustomizersTypes from 'sailpoint-api-client/dist/connector_customizers/api';
import type * as connectorRuleManagementTypes from 'sailpoint-api-client/dist/connector_rule_management/api';
import type * as connectorsTypes from 'sailpoint-api-client/dist/connectors/api';
import type * as customFormsTypes from 'sailpoint-api-client/dist/custom_forms/api';
import type * as customPasswordInstructionsTypes from 'sailpoint-api-client/dist/custom_password_instructions/api';
import type * as customUserLevelsTypes from 'sailpoint-api-client/dist/custom_user_levels/api';
import type * as dataAccessSecurityTypes from 'sailpoint-api-client/dist/data_access_security/api';
import type * as dataSegmentationTypes from 'sailpoint-api-client/dist/data_segmentation/api';
import type * as declassifySourceTypes from 'sailpoint-api-client/dist/declassify_source/api';
import type * as dimensionsTypes from 'sailpoint-api-client/dist/dimensions/api';
import type * as entitlementConnectionsTypes from 'sailpoint-api-client/dist/entitlement_connections/api';
import type * as entitlementsTypes from 'sailpoint-api-client/dist/entitlements/api';
import type * as globalTenantSecuritySettingsTypes from 'sailpoint-api-client/dist/global_tenant_security_settings/api';
import type * as governanceGroupsTypes from 'sailpoint-api-client/dist/governance_groups/api';
import type * as iaiAccessRequestRecommendationsTypes from 'sailpoint-api-client/dist/iai_access_request_recommendations/api';
import type * as iaiCommonAccessTypes from 'sailpoint-api-client/dist/iai_common_access/api';
import type * as iaiOutliersTypes from 'sailpoint-api-client/dist/iai_outliers/api';
import type * as iaiPeerGroupStrategiesTypes from 'sailpoint-api-client/dist/iai_peer_group_strategies/api';
import type * as iaiRecommendationsTypes from 'sailpoint-api-client/dist/iai_recommendations/api';
import type * as iaiRoleMiningTypes from 'sailpoint-api-client/dist/iai_role_mining/api';
import type * as iconsTypes from 'sailpoint-api-client/dist/icons/api';
import type * as identitiesTypes from 'sailpoint-api-client/dist/identities/api';
import type * as identityAttributesTypes from 'sailpoint-api-client/dist/identity_attributes/api';
import type * as identityHistoryTypes from 'sailpoint-api-client/dist/identity_history/api';
import type * as identityProfilesTypes from 'sailpoint-api-client/dist/identity_profiles/api';
import type * as intelligenceTypes from 'sailpoint-api-client/dist/intelligence/api';
import type * as jitAccessTypes from 'sailpoint-api-client/dist/jit_access/api';
import type * as jitActivationsTypes from 'sailpoint-api-client/dist/jit_activations/api';
import type * as launchersTypes from 'sailpoint-api-client/dist/launchers/api';
import type * as lifecycleStatesTypes from 'sailpoint-api-client/dist/lifecycle_states/api';
import type * as machineAccountClassifyTypes from 'sailpoint-api-client/dist/machine_account_classify/api';
import type * as machineAccountCreationRequestTypes from 'sailpoint-api-client/dist/machine_account_creation_request/api';
import type * as machineAccountMappingsTypes from 'sailpoint-api-client/dist/machine_account_mappings/api';
import type * as machineAccountsTypes from 'sailpoint-api-client/dist/machine_accounts/api';
import type * as machineAccountSubtypesTypes from 'sailpoint-api-client/dist/machine_account_subtypes/api';
import type * as machineClassificationConfigTypes from 'sailpoint-api-client/dist/machine_classification_config/api';
import type * as machineIdentitiesTypes from 'sailpoint-api-client/dist/machine_identities/api';
import type * as managedClientsTypes from 'sailpoint-api-client/dist/managed_clients/api';
import type * as managedClustersTypes from 'sailpoint-api-client/dist/managed_clusters/api';
import type * as managedClusterTypesTypes from 'sailpoint-api-client/dist/managed_cluster_types/api';
import type * as mfaConfigurationTypes from 'sailpoint-api-client/dist/mfa_configuration/api';
import type * as multiHostIntegrationTypes from 'sailpoint-api-client/dist/multi_host_integration/api';
import type * as nonEmployeeLifecycleManagementTypes from 'sailpoint-api-client/dist/non_employee_lifecycle_management/api';
import type * as notificationsTypes from 'sailpoint-api-client/dist/notifications/api';
import type * as oauthClientsTypes from 'sailpoint-api-client/dist/oauth_clients/api';
import type * as orgConfigTypes from 'sailpoint-api-client/dist/org_config/api';
import type * as parameterStorageTypes from 'sailpoint-api-client/dist/parameter_storage/api';
import type * as passwordConfigurationTypes from 'sailpoint-api-client/dist/password_configuration/api';
import type * as passwordDictionaryTypes from 'sailpoint-api-client/dist/password_dictionary/api';
import type * as passwordManagementTypes from 'sailpoint-api-client/dist/password_management/api';
import type * as passwordPoliciesTypes from 'sailpoint-api-client/dist/password_policies/api';
import type * as passwordSyncGroupsTypes from 'sailpoint-api-client/dist/password_sync_groups/api';
import type * as personalAccessTokensTypes from 'sailpoint-api-client/dist/personal_access_tokens/api';
import type * as privilegeCriteriaConfigurationTypes from 'sailpoint-api-client/dist/privilege_criteria_configuration/api';
import type * as privilegeCriteriaTypes from 'sailpoint-api-client/dist/privilege_criteria/api';
import type * as publicIdentitiesConfigTypes from 'sailpoint-api-client/dist/public_identities_config/api';
import type * as publicIdentitiesTypes from 'sailpoint-api-client/dist/public_identities/api';
import type * as reportsDataExtractionTypes from 'sailpoint-api-client/dist/reports_data_extraction/api';
import type * as requestableObjectsTypes from 'sailpoint-api-client/dist/requestable_objects/api';
import type * as roleInsightsTypes from 'sailpoint-api-client/dist/role_insights/api';
import type * as rolePropagationTypes from 'sailpoint-api-client/dist/role_propagation/api';
import type * as rolesTypes from 'sailpoint-api-client/dist/roles/api';
import type * as savedSearchTypes from 'sailpoint-api-client/dist/saved_search/api';
import type * as scheduledSearchTypes from 'sailpoint-api-client/dist/scheduled_search/api';
import type * as searchAttributeConfigurationTypes from 'sailpoint-api-client/dist/search_attribute_configuration/api';
import type * as searchTypes from 'sailpoint-api-client/dist/search/api';
import type * as segmentsTypes from 'sailpoint-api-client/dist/segments/api';
import type * as serviceDeskIntegrationTypes from 'sailpoint-api-client/dist/service_desk_integration/api';
import type * as sharedSignalsFrameworkSsfTypes from 'sailpoint-api-client/dist/shared_signals_framework_ssf/api';
import type * as simIntegrationsTypes from 'sailpoint-api-client/dist/sim_integrations/api';
import type * as sodPoliciesTypes from 'sailpoint-api-client/dist/sod_policies/api';
import type * as sodViolationsTypes from 'sailpoint-api-client/dist/sod_violations/api';
import type * as sourcesTypes from 'sailpoint-api-client/dist/sources/api';
import type * as sourceUsagesTypes from 'sailpoint-api-client/dist/source_usages/api';
import type * as spConfigTypes from 'sailpoint-api-client/dist/sp_config/api';
import type * as suggestedEntitlementDescriptionTypes from 'sailpoint-api-client/dist/suggested_entitlement_description/api';
import type * as taggedObjectsTypes from 'sailpoint-api-client/dist/tagged_objects/api';
import type * as tagsTypes from 'sailpoint-api-client/dist/tags/api';
import type * as taskManagementTypes from 'sailpoint-api-client/dist/task_management/api';
import type * as tenantContextTypes from 'sailpoint-api-client/dist/tenant_context/api';
import type * as tenantTypes from 'sailpoint-api-client/dist/tenant/api';
import type * as transformsTypes from 'sailpoint-api-client/dist/transforms/api';
import type * as triggersTypes from 'sailpoint-api-client/dist/triggers/api';
import type * as uiMetadataTypes from 'sailpoint-api-client/dist/ui_metadata/api';
import type * as workflowsTypes from 'sailpoint-api-client/dist/workflows/api';
import type * as workItemsTypes from 'sailpoint-api-client/dist/work_items/api';
import type * as workReassignmentTypes from 'sailpoint-api-client/dist/work_reassignment/api';
import { ElectronApiFactoryService } from './services/electron-api-factory.service';

/**
 * GENERATED FILE — do not edit by hand.
 * Produced by scripts/build-sailpoint-sdk.js from mustache_templates/sailpoint-sdk-service.mustache.
 */

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

// --- GENERATED SDK METHODS START ---
async addAccessRequestRecommendationsIgnoredItemV1(requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiAddAccessRequestRecommendationsIgnoredItemV1Request): Promise<AxiosResponse<iaiAccessRequestRecommendationsTypes.Accessrequestrecommendationactionitemresponsedto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.addAccessRequestRecommendationsIgnoredItemV1(requestParameters) as Promise<AxiosResponse<iaiAccessRequestRecommendationsTypes.Accessrequestrecommendationactionitemresponsedto, any>>;
}
async addAccessRequestRecommendationsRequestedItemV1(requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiAddAccessRequestRecommendationsRequestedItemV1Request): Promise<AxiosResponse<iaiAccessRequestRecommendationsTypes.Accessrequestrecommendationactionitemresponsedto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.addAccessRequestRecommendationsRequestedItemV1(requestParameters) as Promise<AxiosResponse<iaiAccessRequestRecommendationsTypes.Accessrequestrecommendationactionitemresponsedto, any>>;
}
async addAccessRequestRecommendationsViewedItemsV1(requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiAddAccessRequestRecommendationsViewedItemsV1Request): Promise<AxiosResponse<Array<iaiAccessRequestRecommendationsTypes.Accessrequestrecommendationactionitemresponsedto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.addAccessRequestRecommendationsViewedItemsV1(requestParameters) as Promise<AxiosResponse<Array<iaiAccessRequestRecommendationsTypes.Accessrequestrecommendationactionitemresponsedto>, any>>;
}
async addAccessRequestRecommendationsViewedItemV1(requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiAddAccessRequestRecommendationsViewedItemV1Request): Promise<AxiosResponse<iaiAccessRequestRecommendationsTypes.Accessrequestrecommendationactionitemresponsedto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.addAccessRequestRecommendationsViewedItemV1(requestParameters) as Promise<AxiosResponse<iaiAccessRequestRecommendationsTypes.Accessrequestrecommendationactionitemresponsedto, any>>;
}
async approveAccessRequestV1(requestParameters: accessRequestApprovalsTypes.AccessRequestApprovalsApiApproveAccessRequestV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.approveAccessRequestV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async approveApprovalInBulkV1(requestParameters: approvalsTypes.ApprovalsApiApproveApprovalInBulkV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.approveApprovalInBulkV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async approveApprovalItemsInBulkV1(requestParameters: workItemsTypes.WorkItemsApiApproveApprovalItemsInBulkV1Request): Promise<AxiosResponse<workItemsTypes.Workitems, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.approveApprovalItemsInBulkV1(requestParameters) as Promise<AxiosResponse<workItemsTypes.Workitems, any>>;
}
async approveApprovalItemV1(requestParameters: workItemsTypes.WorkItemsApiApproveApprovalItemV1Request): Promise<AxiosResponse<workItemsTypes.Workitems, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.approveApprovalItemV1(requestParameters) as Promise<AxiosResponse<workItemsTypes.Workitems, any>>;
}
async approveApprovalV1(requestParameters: approvalsTypes.ApprovalsApiApproveApprovalV1Request): Promise<AxiosResponse<approvalsTypes.Approval2, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.approveApprovalV1(requestParameters) as Promise<AxiosResponse<approvalsTypes.Approval2, any>>;
}
async approveBulkAccessRequestV1(requestParameters: accessRequestsTypes.AccessRequestsApiApproveBulkAccessRequestV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.approveBulkAccessRequestV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async approveBulkEntitlementRecommendationsV1(requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiApproveBulkEntitlementRecommendationsV1Request): Promise<AxiosResponse<Array<suggestedEntitlementDescriptionTypes.Bulkapproveentitlementrecommendationresult>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.approveBulkEntitlementRecommendationsV1(requestParameters) as Promise<AxiosResponse<Array<suggestedEntitlementDescriptionTypes.Bulkapproveentitlementrecommendationresult>, any>>;
}
async approveNonEmployeeRequestV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiApproveNonEmployeeRequestV1Request): Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeeapprovalitem, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.approveNonEmployeeRequestV1(requestParameters) as Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeeapprovalitem, any>>;
}
async cancelAccessRequestInBulkV1(requestParameters: accessRequestsTypes.AccessRequestsApiCancelAccessRequestInBulkV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.cancelAccessRequestInBulkV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async cancelAccessRequestV1(requestParameters: accessRequestsTypes.AccessRequestsApiCancelAccessRequestV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.cancelAccessRequestV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async cancelApprovalByIdV1(requestParameters: approvalsTypes.ApprovalsApiCancelApprovalByIdV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.cancelApprovalByIdV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async cancelApprovalV1(requestParameters: approvalsTypes.ApprovalsApiCancelApprovalV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.cancelApprovalV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async cancelReportV1(requestParameters: reportsDataExtractionTypes.ReportsDataExtractionApiCancelReportV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.cancelReportV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async cancelRolePropagationV1(requestParameters: rolePropagationTypes.RolePropagationApiCancelRolePropagationV1Request = {}): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.cancelRolePropagationV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async cancelTaskV1(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiCancelTaskV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.cancelTaskV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async cancelWorkflowExecutionV1(requestParameters: workflowsTypes.WorkflowsApiCancelWorkflowExecutionV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.cancelWorkflowExecutionV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async closeAccessRequestV1(requestParameters: accessRequestsTypes.AccessRequestsApiCloseAccessRequestV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.closeAccessRequestV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async compareIdentitySnapshotsAccessTypeV1(requestParameters: identityHistoryTypes.IdentityHistoryApiCompareIdentitySnapshotsAccessTypeV1Request): Promise<AxiosResponse<Array<identityHistoryTypes.Accessitemdiff>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.compareIdentitySnapshotsAccessTypeV1(requestParameters) as Promise<AxiosResponse<Array<identityHistoryTypes.Accessitemdiff>, any>>;
}
async compareIdentitySnapshotsV1(requestParameters: identityHistoryTypes.IdentityHistoryApiCompareIdentitySnapshotsV1Request): Promise<AxiosResponse<Array<identityHistoryTypes.Identitycompareresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.compareIdentitySnapshotsV1(requestParameters) as Promise<AxiosResponse<Array<identityHistoryTypes.Identitycompareresponse>, any>>;
}
async completeCampaignV1(requestParameters: certificationCampaignsTypes.CertificationCampaignsApiCompleteCampaignV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.completeCampaignV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async completeTriggerInvocationV1(requestParameters: triggersTypes.TriggersApiCompleteTriggerInvocationV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.completeTriggerInvocationV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async completeWorkItemV1(requestParameters: workItemsTypes.WorkItemsApiCompleteWorkItemV1Request): Promise<AxiosResponse<workItemsTypes.Workitems, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.completeWorkItemV1(requestParameters) as Promise<AxiosResponse<workItemsTypes.Workitems, any>>;
}
async createAccessModelMetadataAttributeV1(requestParameters: accessModelMetadataTypes.AccessModelMetadataApiCreateAccessModelMetadataAttributeV1Request): Promise<AxiosResponse<accessModelMetadataTypes.Attributedto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createAccessModelMetadataAttributeV1(requestParameters) as Promise<AxiosResponse<accessModelMetadataTypes.Attributedto, any>>;
}
async createAccessModelMetadataAttributeValueV1(requestParameters: accessModelMetadataTypes.AccessModelMetadataApiCreateAccessModelMetadataAttributeValueV1Request): Promise<AxiosResponse<accessModelMetadataTypes.Attributevaluedto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createAccessModelMetadataAttributeValueV1(requestParameters) as Promise<AxiosResponse<accessModelMetadataTypes.Attributevaluedto, any>>;
}
async createAccessModelMetadataForEntitlementV1(requestParameters: entitlementsTypes.EntitlementsApiCreateAccessModelMetadataForEntitlementV1Request): Promise<AxiosResponse<entitlementsTypes.Entitlement, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createAccessModelMetadataForEntitlementV1(requestParameters) as Promise<AxiosResponse<entitlementsTypes.Entitlement, any>>;
}
async createAccessProfileV1(requestParameters: accessProfilesTypes.AccessProfilesApiCreateAccessProfileV1Request): Promise<AxiosResponse<accessProfilesTypes.Accessprofile, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createAccessProfileV1(requestParameters) as Promise<AxiosResponse<accessProfilesTypes.Accessprofile, any>>;
}
async createAccessRequestV1(requestParameters: accessRequestsTypes.AccessRequestsApiCreateAccessRequestV1Request): Promise<AxiosResponse<accessRequestsTypes.Accessrequestresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createAccessRequestV1(requestParameters) as Promise<AxiosResponse<accessRequestsTypes.Accessrequestresponse, any>>;
}
async createAccountV1(requestParameters: accountsTypes.AccountsApiCreateAccountV1Request): Promise<AxiosResponse<accountsTypes.Accountsasyncresult, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createAccountV1(requestParameters) as Promise<AxiosResponse<accountsTypes.Accountsasyncresult, any>>;
}
async createApplicationV1(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiCreateApplicationV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createApplicationV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async createApprovalActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateApprovalActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createApprovalActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createAskSecurityQuestionActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateAskSecurityQuestionActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createAskSecurityQuestionActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createAttributeNerm(requestParameters: sdk.AttributesNERMApiCreateAttributeRequest): Promise<AxiosResponse<sdk.CreateAttribute201ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createAttributeNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateAttribute201ResponseNERM, any>>;
}
async createAuthOrgNetworkConfigV1(requestParameters: globalTenantSecuritySettingsTypes.GlobalTenantSecuritySettingsApiCreateAuthOrgNetworkConfigV1Request): Promise<AxiosResponse<globalTenantSecuritySettingsTypes.Networkconfiguration, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createAuthOrgNetworkConfigV1(requestParameters) as Promise<AxiosResponse<globalTenantSecuritySettingsTypes.Networkconfiguration, any>>;
}
async createAutoAssignActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateAutoAssignActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createAutoAssignActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createAutomatedWorkflowNerm(requestParameters: sdk.WorkflowsNERMApiCreateAutomatedWorkflowRequest): Promise<AxiosResponse<sdk.CreateCreateWorkflow200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createAutomatedWorkflowNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateCreateWorkflow200ResponseNERM, any>>;
}
async createAutoWriteSettingsV1(requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiCreateAutoWriteSettingsV1Request): Promise<AxiosResponse<suggestedEntitlementDescriptionTypes.Autowritesettingresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createAutoWriteSettingsV1(requestParameters) as Promise<AxiosResponse<suggestedEntitlementDescriptionTypes.Autowritesettingresponse, any>>;
}
async createBatchUpdateActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateBatchUpdateActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createBatchUpdateActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createBatchWorkflowNerm(requestParameters: sdk.WorkflowsNERMApiCreateBatchWorkflowRequest): Promise<AxiosResponse<sdk.CreateCreateWorkflow200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createBatchWorkflowNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateCreateWorkflow200ResponseNERM, any>>;
}
async createBrandingItemV1(requestParameters: brandingTypes.BrandingApiCreateBrandingItemV1Request): Promise<AxiosResponse<brandingTypes.Brandingitem, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createBrandingItemV1(requestParameters) as Promise<AxiosResponse<brandingTypes.Brandingitem, any>>;
}
async createCampaignFilterV1(requestParameters: certificationCampaignFiltersTypes.CertificationCampaignFiltersApiCreateCampaignFilterV1Request): Promise<AxiosResponse<certificationCampaignFiltersTypes.Campaignfilterdetails, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createCampaignFilterV1(requestParameters) as Promise<AxiosResponse<certificationCampaignFiltersTypes.Campaignfilterdetails, any>>;
}
async createCampaignTemplateV1(requestParameters: certificationCampaignsTypes.CertificationCampaignsApiCreateCampaignTemplateV1Request): Promise<AxiosResponse<certificationCampaignsTypes.Campaigntemplate, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createCampaignTemplateV1(requestParameters) as Promise<AxiosResponse<certificationCampaignsTypes.Campaigntemplate, any>>;
}
async createCampaignV1(requestParameters: certificationCampaignsTypes.CertificationCampaignsApiCreateCampaignV1Request): Promise<AxiosResponse<certificationCampaignsTypes.Campaign2, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createCampaignV1(requestParameters) as Promise<AxiosResponse<certificationCampaignsTypes.Campaign2, any>>;
}
async createCloseSessionActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateCloseSessionActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createCloseSessionActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createCommonAccessV1(requestParameters: iaiCommonAccessTypes.IAICommonAccessApiCreateCommonAccessV1Request): Promise<AxiosResponse<iaiCommonAccessTypes.Commonaccessitemresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createCommonAccessV1(requestParameters) as Promise<AxiosResponse<iaiCommonAccessTypes.Commonaccessitemresponse, any>>;
}
async createConnectorCustomizerV1(requestParameters: connectorCustomizersTypes.ConnectorCustomizersApiCreateConnectorCustomizerV1Request): Promise<AxiosResponse<connectorCustomizersTypes.Connectorcustomizercreateresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createConnectorCustomizerV1(requestParameters) as Promise<AxiosResponse<connectorCustomizersTypes.Connectorcustomizercreateresponse, any>>;
}
async createConnectorCustomizerVersionV1(requestParameters: connectorCustomizersTypes.ConnectorCustomizersApiCreateConnectorCustomizerVersionV1Request): Promise<AxiosResponse<connectorCustomizersTypes.Connectorcustomizerversioncreateresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createConnectorCustomizerVersionV1(requestParameters) as Promise<AxiosResponse<connectorCustomizersTypes.Connectorcustomizerversioncreateresponse, any>>;
}
async createConnectorRuleV1(requestParameters: connectorRuleManagementTypes.ConnectorRuleManagementApiCreateConnectorRuleV1Request): Promise<AxiosResponse<connectorRuleManagementTypes.Connectorruleresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createConnectorRuleV1(requestParameters) as Promise<AxiosResponse<connectorRuleManagementTypes.Connectorruleresponse, any>>;
}
async createContributorsActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateContributorsActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createContributorsActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createCreateProfileActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateCreateProfileActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createCreateProfileActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createCreateWorkflowNerm(requestParameters: sdk.WorkflowsNERMApiCreateCreateWorkflowRequest): Promise<AxiosResponse<sdk.CreateCreateWorkflow200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createCreateWorkflowNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateCreateWorkflow200ResponseNERM, any>>;
}
async createCustomConnectorV1(requestParameters: connectorsTypes.ConnectorsApiCreateCustomConnectorV1Request): Promise<AxiosResponse<connectorsTypes.V3connectordto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createCustomConnectorV1(requestParameters) as Promise<AxiosResponse<connectorsTypes.V3connectordto, any>>;
}
async createCustomPasswordInstructionsV1(requestParameters: customPasswordInstructionsTypes.CustomPasswordInstructionsApiCreateCustomPasswordInstructionsV1Request): Promise<AxiosResponse<customPasswordInstructionsTypes.Custompasswordinstruction, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createCustomPasswordInstructionsV1(requestParameters) as Promise<AxiosResponse<customPasswordInstructionsTypes.Custompasswordinstruction, any>>;
}
async createCustomPrivilegeCriteriaV1(requestParameters: privilegeCriteriaTypes.PrivilegeCriteriaApiCreateCustomPrivilegeCriteriaV1Request): Promise<AxiosResponse<privilegeCriteriaTypes.Privilegecriteriadto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createCustomPrivilegeCriteriaV1(requestParameters) as Promise<AxiosResponse<privilegeCriteriaTypes.Privilegecriteriadto, any>>;
}
async createCustomUserLevelV1(requestParameters: customUserLevelsTypes.CustomUserLevelsApiCreateCustomUserLevelV1Request): Promise<AxiosResponse<customUserLevelsTypes.Userlevelsummarydto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createCustomUserLevelV1(requestParameters) as Promise<AxiosResponse<customUserLevelsTypes.Userlevelsummarydto, any>>;
}
async createDataSegmentV1(requestParameters: dataSegmentationTypes.DataSegmentationApiCreateDataSegmentV1Request): Promise<AxiosResponse<dataSegmentationTypes.DataSegment, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createDataSegmentV1(requestParameters) as Promise<AxiosResponse<dataSegmentationTypes.DataSegment, any>>;
}
async createDeployV1(requestParameters: configurationHubTypes.ConfigurationHubApiCreateDeployV1Request): Promise<AxiosResponse<configurationHubTypes.Deployresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createDeployV1(requestParameters) as Promise<AxiosResponse<configurationHubTypes.Deployresponse, any>>;
}
async createDigitTokenV1(requestParameters: passwordManagementTypes.PasswordManagementApiCreateDigitTokenV1Request): Promise<AxiosResponse<passwordManagementTypes.Passworddigittoken, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createDigitTokenV1(requestParameters) as Promise<AxiosResponse<passwordManagementTypes.Passworddigittoken, any>>;
}
async createDimensionV1(requestParameters: dimensionsTypes.DimensionsApiCreateDimensionV1Request): Promise<AxiosResponse<dimensionsTypes.Dimension, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createDimensionV1(requestParameters) as Promise<AxiosResponse<dimensionsTypes.Dimension, any>>;
}
async createDomainDkimV1(requestParameters: notificationsTypes.NotificationsApiCreateDomainDkimV1Request): Promise<AxiosResponse<notificationsTypes.Domainstatusdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createDomainDkimV1(requestParameters) as Promise<AxiosResponse<notificationsTypes.Domainstatusdto, any>>;
}
async createDuplicatePreventionActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateDuplicatePreventionActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createDuplicatePreventionActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createEmailVerificationActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateEmailVerificationActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createEmailVerificationActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createExternalExecuteWorkflowV1(requestParameters: workflowsTypes.WorkflowsApiCreateExternalExecuteWorkflowV1Request): Promise<AxiosResponse<workflowsTypes.CreateExternalExecuteWorkflowV1200Response, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createExternalExecuteWorkflowV1(requestParameters) as Promise<AxiosResponse<workflowsTypes.CreateExternalExecuteWorkflowV1200Response, any>>;
}
async createFormAttributeNerm(requestParameters: sdk.FormAttributesNERMApiCreateFormAttributeRequest): Promise<AxiosResponse<sdk.GetFormAttributes200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createFormAttributeNerm(requestParameters) as Promise<AxiosResponse<sdk.GetFormAttributes200ResponseNERM, any>>;
}
async createFormDefinitionDynamicSchemaV1(requestParameters: customFormsTypes.CustomFormsApiCreateFormDefinitionDynamicSchemaV1Request = {}): Promise<AxiosResponse<customFormsTypes.Formdefinitiondynamicschemaresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createFormDefinitionDynamicSchemaV1(requestParameters) as Promise<AxiosResponse<customFormsTypes.Formdefinitiondynamicschemaresponse, any>>;
}
async createFormDefinitionFileRequestV1(requestParameters: customFormsTypes.CustomFormsApiCreateFormDefinitionFileRequestV1Request): Promise<AxiosResponse<customFormsTypes.Formdefinitionfileuploadresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createFormDefinitionFileRequestV1(requestParameters) as Promise<AxiosResponse<customFormsTypes.Formdefinitionfileuploadresponse, any>>;
}
async createFormDefinitionV1(requestParameters: customFormsTypes.CustomFormsApiCreateFormDefinitionV1Request = {}): Promise<AxiosResponse<customFormsTypes.Formdefinitionresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createFormDefinitionV1(requestParameters) as Promise<AxiosResponse<customFormsTypes.Formdefinitionresponse, any>>;
}
async createFormInstanceV1(requestParameters: customFormsTypes.CustomFormsApiCreateFormInstanceV1Request = {}): Promise<AxiosResponse<customFormsTypes.Forminstanceresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createFormInstanceV1(requestParameters) as Promise<AxiosResponse<customFormsTypes.Forminstanceresponse, any>>;
}
async createFormNerm(requestParameters: sdk.FormsNERMApiCreateFormRequest): Promise<AxiosResponse<sdk.GetForms200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createFormNerm(requestParameters) as Promise<AxiosResponse<sdk.GetForms200ResponseNERM, any>>;
}
async createFulfillmentActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateFulfillmentActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createFulfillmentActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createIdentityAttributeV1(requestParameters: identityAttributesTypes.IdentityAttributesApiCreateIdentityAttributeV1Request): Promise<AxiosResponse<identityAttributesTypes.Identityattribute2, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createIdentityAttributeV1(requestParameters) as Promise<AxiosResponse<identityAttributesTypes.Identityattribute2, any>>;
}
async createIdentityCollectorV1(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiCreateIdentityCollectorV1Request): Promise<AxiosResponse<dataAccessSecurityTypes.CreateIdentityCollectorV1200Response, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createIdentityCollectorV1(requestParameters) as Promise<AxiosResponse<dataAccessSecurityTypes.CreateIdentityCollectorV1200Response, any>>;
}
async createIdentityProfileV1(requestParameters: identityProfilesTypes.IdentityProfilesApiCreateIdentityProfileV1Request): Promise<AxiosResponse<identityProfilesTypes.Identityprofile, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createIdentityProfileV1(requestParameters) as Promise<AxiosResponse<identityProfilesTypes.Identityprofile, any>>;
}
async createIdentityProofingActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateIdentityProofingActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createIdentityProofingActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createInvitationActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateInvitationActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createInvitationActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createLauncherV1(requestParameters: launchersTypes.LaunchersApiCreateLauncherV1Request): Promise<AxiosResponse<launchersTypes.Launcher, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createLauncherV1(requestParameters) as Promise<AxiosResponse<launchersTypes.Launcher, any>>;
}
async createLdapActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateLdapActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createLdapActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createLifecycleStateV1(requestParameters: lifecycleStatesTypes.LifecycleStatesApiCreateLifecycleStateV1Request): Promise<AxiosResponse<lifecycleStatesTypes.Lifecyclestate, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createLifecycleStateV1(requestParameters) as Promise<AxiosResponse<lifecycleStatesTypes.Lifecyclestate, any>>;
}
async createLoginWorkflowNerm(requestParameters: sdk.WorkflowsNERMApiCreateLoginWorkflowRequest): Promise<AxiosResponse<sdk.CreateCreateWorkflow200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createLoginWorkflowNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateCreateWorkflow200ResponseNERM, any>>;
}
async createMachineAccountMappingsV1(requestParameters: machineAccountMappingsTypes.MachineAccountMappingsApiCreateMachineAccountMappingsV1Request): Promise<AxiosResponse<Array<machineAccountMappingsTypes.Attributemappings>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createMachineAccountMappingsV1(requestParameters) as Promise<AxiosResponse<Array<machineAccountMappingsTypes.Attributemappings>, any>>;
}
async createMachineAccountRequestV1(requestParameters: machineAccountCreationRequestTypes.MachineAccountCreationRequestApiCreateMachineAccountRequestV1Request): Promise<AxiosResponse<machineAccountCreationRequestTypes.Accountrequestasyncresult, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createMachineAccountRequestV1(requestParameters) as Promise<AxiosResponse<machineAccountCreationRequestTypes.Accountrequestasyncresult, any>>;
}
async createMachineAccountSubtypeV1(requestParameters: machineAccountsTypes.MachineAccountsApiCreateMachineAccountSubtypeV1Request): Promise<AxiosResponse<machineAccountsTypes.Sourcesubtype, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createMachineAccountSubtypeV1(requestParameters) as Promise<AxiosResponse<machineAccountsTypes.Sourcesubtype, any>>;
}
async createMachineIdentityV1(requestParameters: machineIdentitiesTypes.MachineIdentitiesApiCreateMachineIdentityV1Request): Promise<AxiosResponse<machineIdentitiesTypes.Machineidentityresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createMachineIdentityV1(requestParameters) as Promise<AxiosResponse<machineIdentitiesTypes.Machineidentityresponse, any>>;
}
async createManagedClientV1(requestParameters: managedClientsTypes.ManagedClientsApiCreateManagedClientV1Request): Promise<AxiosResponse<managedClientsTypes.Managedclient, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createManagedClientV1(requestParameters) as Promise<AxiosResponse<managedClientsTypes.Managedclient, any>>;
}
async createManagedClusterTypeV1(requestParameters: managedClusterTypesTypes.ManagedClusterTypesApiCreateManagedClusterTypeV1Request): Promise<AxiosResponse<managedClusterTypesTypes.Managedclustertype, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createManagedClusterTypeV1(requestParameters) as Promise<AxiosResponse<managedClusterTypesTypes.Managedclustertype, any>>;
}
async createManagedClusterV1(requestParameters: managedClustersTypes.ManagedClustersApiCreateManagedClusterV1Request): Promise<AxiosResponse<managedClustersTypes.Managedcluster, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createManagedClusterV1(requestParameters) as Promise<AxiosResponse<managedClustersTypes.Managedcluster, any>>;
}
async createMultiHostIntegrationV1(requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiCreateMultiHostIntegrationV1Request): Promise<AxiosResponse<multiHostIntegrationTypes.Multihostintegrations, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createMultiHostIntegrationV1(requestParameters) as Promise<AxiosResponse<multiHostIntegrationTypes.Multihostintegrations, any>>;
}
async createNonEmployeeRecordV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiCreateNonEmployeeRecordV1Request): Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeerecord, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createNonEmployeeRecordV1(requestParameters) as Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeerecord, any>>;
}
async createNonEmployeeRequestV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiCreateNonEmployeeRequestV1Request): Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeerequest, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createNonEmployeeRequestV1(requestParameters) as Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeerequest, any>>;
}
async createNonEmployeeSourceSchemaAttributesV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiCreateNonEmployeeSourceSchemaAttributesV1Request): Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeeschemaattribute, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createNonEmployeeSourceSchemaAttributesV1(requestParameters) as Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeeschemaattribute, any>>;
}
async createNonEmployeeSourceV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiCreateNonEmployeeSourceV1Request): Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeesourcewithcloudexternalid, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createNonEmployeeSourceV1(requestParameters) as Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeesourcewithcloudexternalid, any>>;
}
async createNotificationActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateNotificationActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createNotificationActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createNotificationTemplateV1(requestParameters: notificationsTypes.NotificationsApiCreateNotificationTemplateV1Request): Promise<AxiosResponse<notificationsTypes.Templatedto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createNotificationTemplateV1(requestParameters) as Promise<AxiosResponse<notificationsTypes.Templatedto, any>>;
}
async createOauthClientV1(requestParameters: oauthClientsTypes.OAuthClientsApiCreateOauthClientV1Request): Promise<AxiosResponse<oauthClientsTypes.Createoauthclientresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createOauthClientV1(requestParameters) as Promise<AxiosResponse<oauthClientsTypes.Createoauthclientresponse, any>>;
}
async createObjectMappingsV1(requestParameters: configurationHubTypes.ConfigurationHubApiCreateObjectMappingsV1Request): Promise<AxiosResponse<configurationHubTypes.Objectmappingbulkcreateresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createObjectMappingsV1(requestParameters) as Promise<AxiosResponse<configurationHubTypes.Objectmappingbulkcreateresponse, any>>;
}
async createObjectMappingV1(requestParameters: configurationHubTypes.ConfigurationHubApiCreateObjectMappingV1Request): Promise<AxiosResponse<configurationHubTypes.Objectmappingresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createObjectMappingV1(requestParameters) as Promise<AxiosResponse<configurationHubTypes.Objectmappingresponse, any>>;
}
async createPageContentNerm(requestParameters: sdk.PageContentsNERMApiCreatePageContentRequest): Promise<AxiosResponse<sdk.GetPageContents200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createPageContentNerm(requestParameters) as Promise<AxiosResponse<sdk.GetPageContents200ResponseNERM, any>>;
}
async createPageContentTranslationNerm(requestParameters: sdk.PageContentTranslationsNERMApiCreatePageContentTranslationRequest): Promise<AxiosResponse<sdk.GetPageContentTranslation200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createPageContentTranslationNerm(requestParameters) as Promise<AxiosResponse<sdk.GetPageContentTranslation200ResponseNERM, any>>;
}
async createPageElementNerm(requestParameters: sdk.PageElementsNERMApiCreatePageElementRequest): Promise<AxiosResponse<sdk.GetPageElements200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createPageElementNerm(requestParameters) as Promise<AxiosResponse<sdk.GetPageElements200ResponseNERM, any>>;
}
async createParameterV1(requestParameters: parameterStorageTypes.ParameterStorageApiCreateParameterV1Request = {}): Promise<AxiosResponse<parameterStorageTypes.Parameterstorageparameter, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createParameterV1(requestParameters) as Promise<AxiosResponse<parameterStorageTypes.Parameterstorageparameter, any>>;
}
async createPasswordOrgConfigV1(requestParameters: passwordConfigurationTypes.PasswordConfigurationApiCreatePasswordOrgConfigV1Request): Promise<AxiosResponse<passwordConfigurationTypes.Passwordorgconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createPasswordOrgConfigV1(requestParameters) as Promise<AxiosResponse<passwordConfigurationTypes.Passwordorgconfig, any>>;
}
async createPasswordPolicyV1(requestParameters: passwordPoliciesTypes.PasswordPoliciesApiCreatePasswordPolicyV1Request): Promise<AxiosResponse<passwordPoliciesTypes.Passwordpolicyv3dto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createPasswordPolicyV1(requestParameters) as Promise<AxiosResponse<passwordPoliciesTypes.Passwordpolicyv3dto, any>>;
}
async createPasswordResetActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreatePasswordResetActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createPasswordResetActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createPasswordSyncGroupV1(requestParameters: passwordSyncGroupsTypes.PasswordSyncGroupsApiCreatePasswordSyncGroupV1Request): Promise<AxiosResponse<passwordSyncGroupsTypes.Passwordsyncgroup, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createPasswordSyncGroupV1(requestParameters) as Promise<AxiosResponse<passwordSyncGroupsTypes.Passwordsyncgroup, any>>;
}
async createPasswordUpdateWorkflowNerm(requestParameters: sdk.WorkflowsNERMApiCreatePasswordUpdateWorkflowRequest): Promise<AxiosResponse<sdk.CreateCreateWorkflow200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createPasswordUpdateWorkflowNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateCreateWorkflow200ResponseNERM, any>>;
}
async createPermissionNerm(requestParameters: sdk.PermissionsNERMApiCreatePermissionRequest): Promise<AxiosResponse<sdk.CreatePermission200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createPermissionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreatePermission200ResponseNERM, any>>;
}
async createPersonalAccessTokenV1(requestParameters: personalAccessTokensTypes.PersonalAccessTokensApiCreatePersonalAccessTokenV1Request): Promise<AxiosResponse<personalAccessTokensTypes.Createpersonalaccesstokenresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createPersonalAccessTokenV1(requestParameters) as Promise<AxiosResponse<personalAccessTokensTypes.Createpersonalaccesstokenresponse, any>>;
}
async createPotentialRoleProvisionRequestV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiCreatePotentialRoleProvisionRequestV1Request): Promise<AxiosResponse<iaiRoleMiningTypes.Roleminingpotentialrolesummary, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createPotentialRoleProvisionRequestV1(requestParameters) as Promise<AxiosResponse<iaiRoleMiningTypes.Roleminingpotentialrolesummary, any>>;
}
async createProfileCheckActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateProfileCheckActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createProfileCheckActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createProfilePageNerm(requestParameters: sdk.PagesNERMApiCreateProfilePageRequest): Promise<AxiosResponse<sdk.CreateProfilePage200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createProfilePageNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateProfilePage200ResponseNERM, any>>;
}
async createProfileSelectActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateProfileSelectActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createProfileSelectActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createProfilesNerm(requestParameters: sdk.ProfilesNERMApiCreateProfilesRequest): Promise<AxiosResponse<sdk.SearchAdvancedSearch200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createProfilesNerm(requestParameters) as Promise<AxiosResponse<sdk.SearchAdvancedSearch200ResponseNERM, any>>;
}
async createProfileTypeRoleNerm(requestParameters: sdk.ProfileTypeRolesNERMApiCreateProfileTypeRoleRequest): Promise<AxiosResponse<sdk.CreateProfileTypeRole200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createProfileTypeRoleNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateProfileTypeRole200ResponseNERM, any>>;
}
async createProvisioningPolicyV1(requestParameters: sourcesTypes.SourcesApiCreateProvisioningPolicyV1Request): Promise<AxiosResponse<sourcesTypes.Provisioningpolicydto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createProvisioningPolicyV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Provisioningpolicydto, any>>;
}
async createProvisioningPolicyV2(requestParameters: sourcesTypes.SourcesApiCreateProvisioningPolicyV2Request): Promise<AxiosResponse<sourcesTypes.Provisioningpolicydtov2, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createProvisioningPolicyV2(requestParameters) as Promise<AxiosResponse<sourcesTypes.Provisioningpolicydtov2, any>>;
}
async createReassignmentConfigurationV1(requestParameters: workReassignmentTypes.WorkReassignmentApiCreateReassignmentConfigurationV1Request): Promise<AxiosResponse<workReassignmentTypes.Configurationitemresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createReassignmentConfigurationV1(requestParameters) as Promise<AxiosResponse<workReassignmentTypes.Configurationitemresponse, any>>;
}
async createRegistrationWorkflowNerm(requestParameters: sdk.WorkflowsNERMApiCreateRegistrationWorkflowRequest): Promise<AxiosResponse<sdk.CreateCreateWorkflow200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createRegistrationWorkflowNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateCreateWorkflow200ResponseNERM, any>>;
}
async createRequestActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateRequestActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createRequestActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createRestApiActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateRestApiActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createRestApiActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createReviewActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateReviewActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createReviewActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createRoleInsightRequestsV1(requestParameters: roleInsightsTypes.RoleInsightsApiCreateRoleInsightRequestsV1Request = {}): Promise<AxiosResponse<roleInsightsTypes.Roleinsightsresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createRoleInsightRequestsV1(requestParameters) as Promise<AxiosResponse<roleInsightsTypes.Roleinsightsresponse, any>>;
}
async createRoleMiningSessionsV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiCreateRoleMiningSessionsV1Request): Promise<AxiosResponse<iaiRoleMiningTypes.Roleminingsessionresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createRoleMiningSessionsV1(requestParameters) as Promise<AxiosResponse<iaiRoleMiningTypes.Roleminingsessionresponse, any>>;
}
async createRoleV1(requestParameters: rolesTypes.RolesApiCreateRoleV1Request): Promise<AxiosResponse<rolesTypes.Role, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createRoleV1(requestParameters) as Promise<AxiosResponse<rolesTypes.Role, any>>;
}
async createRunWorkflowActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateRunWorkflowActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createRunWorkflowActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createSavedSearchV1(requestParameters: savedSearchTypes.SavedSearchApiCreateSavedSearchV1Request): Promise<AxiosResponse<savedSearchTypes.Savedsearch, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSavedSearchV1(requestParameters) as Promise<AxiosResponse<savedSearchTypes.Savedsearch, any>>;
}
async createScheduledActionV1(requestParameters: configurationHubTypes.ConfigurationHubApiCreateScheduledActionV1Request): Promise<AxiosResponse<configurationHubTypes.Scheduledactionresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createScheduledActionV1(requestParameters) as Promise<AxiosResponse<configurationHubTypes.Scheduledactionresponse, any>>;
}
async createScheduledSearchV1(requestParameters: scheduledSearchTypes.ScheduledSearchApiCreateScheduledSearchV1Request): Promise<AxiosResponse<scheduledSearchTypes.Scheduledsearch, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createScheduledSearchV1(requestParameters) as Promise<AxiosResponse<scheduledSearchTypes.Scheduledsearch, any>>;
}
async createScheduleV1(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiCreateScheduleV1Request): Promise<AxiosResponse<number, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createScheduleV1(requestParameters) as Promise<AxiosResponse<number, any>>;
}
async createSearchAttributeConfigV1(requestParameters: searchAttributeConfigurationTypes.SearchAttributeConfigurationApiCreateSearchAttributeConfigV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSearchAttributeConfigV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async createSegmentV1(requestParameters: segmentsTypes.SegmentsApiCreateSegmentV1Request): Promise<AxiosResponse<segmentsTypes.Segment, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSegmentV1(requestParameters) as Promise<AxiosResponse<segmentsTypes.Segment, any>>;
}
async createServiceDeskIntegrationV1(requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiCreateServiceDeskIntegrationV1Request): Promise<AxiosResponse<serviceDeskIntegrationTypes.Servicedeskintegrationdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createServiceDeskIntegrationV1(requestParameters) as Promise<AxiosResponse<serviceDeskIntegrationTypes.Servicedeskintegrationdto, any>>;
}
async createSetAttributesActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateSetAttributesActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSetAttributesActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createSetSecurityQuestionActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateSetSecurityQuestionActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSetSecurityQuestionActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createSIMIntegrationV1(requestParameters: simIntegrationsTypes.SIMIntegrationsApiCreateSIMIntegrationV1Request): Promise<AxiosResponse<simIntegrationsTypes.Servicedeskintegrationdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSIMIntegrationV1(requestParameters) as Promise<AxiosResponse<simIntegrationsTypes.Servicedeskintegrationdto, any>>;
}
async createSoapApiActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateSoapApiActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSoapApiActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createSodPolicyV1(requestParameters: sodPoliciesTypes.SODPoliciesApiCreateSodPolicyV1Request): Promise<AxiosResponse<sodPoliciesTypes.Sodpolicy, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSodPolicyV1(requestParameters) as Promise<AxiosResponse<sodPoliciesTypes.Sodpolicy, any>>;
}
async createSourceAppV1(requestParameters: appsTypes.AppsApiCreateSourceAppV1Request): Promise<AxiosResponse<appsTypes.Sourceapp, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSourceAppV1(requestParameters) as Promise<AxiosResponse<appsTypes.Sourceapp, any>>;
}
async createSourceScheduleV1(requestParameters: sourcesTypes.SourcesApiCreateSourceScheduleV1Request): Promise<AxiosResponse<sourcesTypes.Schedule3, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSourceScheduleV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Schedule3, any>>;
}
async createSourceSchemaV1(requestParameters: sourcesTypes.SourcesApiCreateSourceSchemaV1Request): Promise<AxiosResponse<sourcesTypes.Schema, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSourceSchemaV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Schema, any>>;
}
async createSourceSubtypeV1(requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiCreateSourceSubtypeV1Request): Promise<AxiosResponse<machineAccountSubtypesTypes.Sourcesubtypewithsource, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSourceSubtypeV1(requestParameters) as Promise<AxiosResponse<machineAccountSubtypesTypes.Sourcesubtypewithsource, any>>;
}
async createSourcesWithinMultiHostV1(requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiCreateSourcesWithinMultiHostV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSourcesWithinMultiHostV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async createSourceV1(requestParameters: sourcesTypes.SourcesApiCreateSourceV1Request): Promise<AxiosResponse<sourcesTypes.Source, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSourceV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Source, any>>;
}
async createStatusChangeActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateStatusChangeActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createStatusChangeActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createStreamV1(requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiCreateStreamV1Request): Promise<AxiosResponse<sharedSignalsFrameworkSsfTypes.Streamconfigresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createStreamV1(requestParameters) as Promise<AxiosResponse<sharedSignalsFrameworkSsfTypes.Streamconfigresponse, any>>;
}
async createSubscriptionV1(requestParameters: triggersTypes.TriggersApiCreateSubscriptionV1Request): Promise<AxiosResponse<triggersTypes.Subscription, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSubscriptionV1(requestParameters) as Promise<AxiosResponse<triggersTypes.Subscription, any>>;
}
async createSyncedAttributeNerm(requestParameters: sdk.SyncedAttributesNERMApiCreateSyncedAttributeRequest): Promise<AxiosResponse<sdk.CreateSyncedAttribute201ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSyncedAttributeNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateSyncedAttribute201ResponseNERM, any>>;
}
async createSystemRolePermissionNerm(requestParameters: sdk.SystemRolePermissionsNERMApiCreateSystemRolePermissionRequest): Promise<AxiosResponse<sdk.CreateSystemRolePermission200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createSystemRolePermissionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateSystemRolePermission200ResponseNERM, any>>;
}
async createTagV1(requestParameters: tagsTypes.TagsApiCreateTagV1Request): Promise<AxiosResponse<tagsTypes.Tag2, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createTagV1(requestParameters) as Promise<AxiosResponse<tagsTypes.Tag2, any>>;
}
async createTransformV1(requestParameters: transformsTypes.TransformsApiCreateTransformV1Request): Promise<AxiosResponse<transformsTypes.Transformread, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createTransformV1(requestParameters) as Promise<AxiosResponse<transformsTypes.Transformread, any>>;
}
async createUnassignActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateUnassignActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createUnassignActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createUpdateProfileActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateUpdateProfileActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createUpdateProfileActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createUpdateWorkflowNerm(requestParameters: sdk.WorkflowsNERMApiCreateUpdateWorkflowRequest): Promise<AxiosResponse<sdk.CreateCreateWorkflow200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createUpdateWorkflowNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateCreateWorkflow200ResponseNERM, any>>;
}
async createUploadedConfigurationV1(requestParameters: configurationHubTypes.ConfigurationHubApiCreateUploadedConfigurationV1Request): Promise<AxiosResponse<configurationHubTypes.Backupresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createUploadedConfigurationV1(requestParameters) as Promise<AxiosResponse<configurationHubTypes.Backupresponse, any>>;
}
async createUsernamePasswordActionNerm(requestParameters: sdk.WorkflowActionsNERMApiCreateUsernamePasswordActionRequest): Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createUsernamePasswordActionNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateApprovalAction200ResponseNERM, any>>;
}
async createUserProfilesNerm(requestParameters: sdk.UserProfilesNERMApiCreateUserProfilesRequest): Promise<AxiosResponse<sdk.CreateUserProfiles200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createUserProfilesNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateUserProfiles200ResponseNERM, any>>;
}
async createVerifiedFromAddressV1(requestParameters: notificationsTypes.NotificationsApiCreateVerifiedFromAddressV1Request): Promise<AxiosResponse<notificationsTypes.Emailstatusdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createVerifiedFromAddressV1(requestParameters) as Promise<AxiosResponse<notificationsTypes.Emailstatusdto, any>>;
}
async createWorkflowActionPerformerNerm(requestParameters: sdk.WorkflowActionPerformerNERMApiCreateWorkflowActionPerformerRequest): Promise<AxiosResponse<sdk.CreateWorkflowActionPerformer200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createWorkflowActionPerformerNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateWorkflowActionPerformer200ResponseNERM, any>>;
}
async createWorkflowExternalTriggerV1(requestParameters: workflowsTypes.WorkflowsApiCreateWorkflowExternalTriggerV1Request): Promise<AxiosResponse<workflowsTypes.Workflowoauthclient, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createWorkflowExternalTriggerV1(requestParameters) as Promise<AxiosResponse<workflowsTypes.Workflowoauthclient, any>>;
}
async createWorkflowPageNerm(requestParameters: sdk.PagesNERMApiCreateWorkflowPageRequest): Promise<AxiosResponse<sdk.CreateProfilePage200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createWorkflowPageNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateProfilePage200ResponseNERM, any>>;
}
async createWorkflowV1(requestParameters: workflowsTypes.WorkflowsApiCreateWorkflowV1Request): Promise<AxiosResponse<workflowsTypes.Workflow, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createWorkflowV1(requestParameters) as Promise<AxiosResponse<workflowsTypes.Workflow, any>>;
}
async createWorkgroupV1(requestParameters: governanceGroupsTypes.GovernanceGroupsApiCreateWorkgroupV1Request): Promise<AxiosResponse<governanceGroupsTypes.Workgroupdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.createWorkgroupV1(requestParameters) as Promise<AxiosResponse<governanceGroupsTypes.Workgroupdto, any>>;
}
async dasV1OwnersAssignPost(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDasV1OwnersAssignPostRequest): Promise<AxiosResponse<number, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.dasV1OwnersAssignPost(requestParameters) as Promise<AxiosResponse<number, any>>;
}
async dasV1OwnersOwnerIdentityIdResourcesGet(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDasV1OwnersOwnerIdentityIdResourcesGetRequest): Promise<AxiosResponse<Array<dataAccessSecurityTypes.Resourcemodel>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.dasV1OwnersOwnerIdentityIdResourcesGet(requestParameters) as Promise<AxiosResponse<Array<dataAccessSecurityTypes.Resourcemodel>, any>>;
}
async dasV1OwnersReelectPost(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDasV1OwnersReelectPostRequest): Promise<AxiosResponse<number, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.dasV1OwnersReelectPost(requestParameters) as Promise<AxiosResponse<number, any>>;
}
async dasV1OwnersResourcesResourceIdGet(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDasV1OwnersResourcesResourceIdGetRequest): Promise<AxiosResponse<Array<string>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.dasV1OwnersResourcesResourceIdGet(requestParameters) as Promise<AxiosResponse<Array<string>, any>>;
}
async dasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPost(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPostRequest): Promise<AxiosResponse<number, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.dasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPost(requestParameters) as Promise<AxiosResponse<number, any>>;
}
async delegationsGetNerm(requestParameters: sdk.DelegationsNERMApiDelegationsGetRequest = {}): Promise<AxiosResponse<sdk.DelegationsGet200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.delegationsGetNerm(requestParameters) as Promise<AxiosResponse<sdk.DelegationsGet200ResponseNERM, any>>;
}
async delegationsGetNermV2025(requestParameters: sdk.DelegationsNERMV2025ApiDelegationsGetRequest = {}): Promise<AxiosResponse<sdk.DelegationsGet200ResponseNERMV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.delegationsGetNermV2025(requestParameters) as Promise<AxiosResponse<sdk.DelegationsGet200ResponseNERMV2025, any>>;
}
async delegationsIdDeleteNerm(requestParameters: sdk.DelegationsNERMApiDelegationsIdDeleteRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.delegationsIdDeleteNerm(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async delegationsIdDeleteNermV2025(requestParameters: sdk.DelegationsNERMV2025ApiDelegationsIdDeleteRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.delegationsIdDeleteNermV2025(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async delegationsIdGetNerm(requestParameters: sdk.DelegationsNERMApiDelegationsIdGetRequest): Promise<AxiosResponse<sdk.DelegationsPost201ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.delegationsIdGetNerm(requestParameters) as Promise<AxiosResponse<sdk.DelegationsPost201ResponseNERM, any>>;
}
async delegationsIdGetNermV2025(requestParameters: sdk.DelegationsNERMV2025ApiDelegationsIdGetRequest): Promise<AxiosResponse<sdk.DelegationsPost201ResponseNERMV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.delegationsIdGetNermV2025(requestParameters) as Promise<AxiosResponse<sdk.DelegationsPost201ResponseNERMV2025, any>>;
}
async delegationsIdPatchNerm(requestParameters: sdk.DelegationsNERMApiDelegationsIdPatchRequest): Promise<AxiosResponse<sdk.DelegationsPost201ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.delegationsIdPatchNerm(requestParameters) as Promise<AxiosResponse<sdk.DelegationsPost201ResponseNERM, any>>;
}
async delegationsIdPatchNermV2025(requestParameters: sdk.DelegationsNERMV2025ApiDelegationsIdPatchRequest): Promise<AxiosResponse<sdk.DelegationsPost201ResponseNERMV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.delegationsIdPatchNermV2025(requestParameters) as Promise<AxiosResponse<sdk.DelegationsPost201ResponseNERMV2025, any>>;
}
async delegationsPostNerm(requestParameters: sdk.DelegationsNERMApiDelegationsPostRequest): Promise<AxiosResponse<sdk.DelegationsPost201ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.delegationsPostNerm(requestParameters) as Promise<AxiosResponse<sdk.DelegationsPost201ResponseNERM, any>>;
}
async delegationsPostNermV2025(requestParameters: sdk.DelegationsNERMV2025ApiDelegationsPostRequest): Promise<AxiosResponse<sdk.DelegationsPost201ResponseNERMV2025, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.delegationsPostNermV2025(requestParameters) as Promise<AxiosResponse<sdk.DelegationsPost201ResponseNERMV2025, any>>;
}
async deleteAccessModelMetadataFromEntitlementV1(requestParameters: entitlementsTypes.EntitlementsApiDeleteAccessModelMetadataFromEntitlementV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteAccessModelMetadataFromEntitlementV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteAccessProfilesFromSourceAppByBulkV1(requestParameters: appsTypes.AppsApiDeleteAccessProfilesFromSourceAppByBulkV1Request): Promise<AxiosResponse<Array<appsTypes.Accessprofiledetails>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteAccessProfilesFromSourceAppByBulkV1(requestParameters) as Promise<AxiosResponse<Array<appsTypes.Accessprofiledetails>, any>>;
}
async deleteAccessProfilesInBulkV1(requestParameters: accessProfilesTypes.AccessProfilesApiDeleteAccessProfilesInBulkV1Request): Promise<AxiosResponse<accessProfilesTypes.Accessprofilebulkdeleteresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteAccessProfilesInBulkV1(requestParameters) as Promise<AxiosResponse<accessProfilesTypes.Accessprofilebulkdeleteresponse, any>>;
}
async deleteAccessProfileV1(requestParameters: accessProfilesTypes.AccessProfilesApiDeleteAccessProfileV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteAccessProfileV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteAccountAsyncV1(requestParameters: accountsTypes.AccountsApiDeleteAccountAsyncV1Request): Promise<AxiosResponse<accountsTypes.Taskresultdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteAccountAsyncV1(requestParameters) as Promise<AxiosResponse<accountsTypes.Taskresultdto, any>>;
}
async deleteAccountRequestV1(requestParameters: accountDeletionRequestsTypes.AccountDeletionRequestsApiDeleteAccountRequestV1Request): Promise<AxiosResponse<accountDeletionRequestsTypes.Accountrequestasyncresult, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteAccountRequestV1(requestParameters) as Promise<AxiosResponse<accountDeletionRequestsTypes.Accountrequestasyncresult, any>>;
}
async deleteAccountsAsyncV1(requestParameters: sourcesTypes.SourcesApiDeleteAccountsAsyncV1Request): Promise<AxiosResponse<sourcesTypes.Taskresultdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteAccountsAsyncV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Taskresultdto, any>>;
}
async deleteAccountV1(requestParameters: accountsTypes.AccountsApiDeleteAccountV1Request): Promise<AxiosResponse<accountsTypes.Accountsasyncresult, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteAccountV1(requestParameters) as Promise<AxiosResponse<accountsTypes.Accountsasyncresult, any>>;
}
async deleteApplicationV1(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDeleteApplicationV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteApplicationV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteApprovalConfigRequestV1(requestParameters: approvalsTypes.ApprovalsApiDeleteApprovalConfigRequestV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteApprovalConfigRequestV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteAttributeByIdNerm(requestParameters: sdk.AttributesNERMApiDeleteAttributeByIdRequest): Promise<AxiosResponse<sdk.CreateAttribute201ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteAttributeByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateAttribute201ResponseNERM, any>>;
}
async deleteAttributeByUidNerm(requestParameters: sdk.AttributesNERMApiDeleteAttributeByUidRequest = {}): Promise<AxiosResponse<sdk.CreateAttribute201ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteAttributeByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateAttribute201ResponseNERM, any>>;
}
async deleteAttributeOptionByIdNerm(requestParameters: sdk.AttributeOptionsNERMApiDeleteAttributeOptionByIdRequest): Promise<AxiosResponse<sdk.DeleteAttributeOptionById200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteAttributeOptionByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.DeleteAttributeOptionById200ResponseNERM, any>>;
}
async deleteAttributeOptionByUidNerm(requestParameters: sdk.AttributeOptionsNERMApiDeleteAttributeOptionByUidRequest = {}): Promise<AxiosResponse<sdk.DeleteAttributeOptionById200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteAttributeOptionByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.DeleteAttributeOptionById200ResponseNERM, any>>;
}
async deleteBackupV1(requestParameters: configurationHubTypes.ConfigurationHubApiDeleteBackupV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteBackupV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteBrandingV1(requestParameters: brandingTypes.BrandingApiDeleteBrandingV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteBrandingV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteBulkDimensionsV1(requestParameters: dimensionsTypes.DimensionsApiDeleteBulkDimensionsV1Request): Promise<AxiosResponse<dimensionsTypes.Taskresultdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteBulkDimensionsV1(requestParameters) as Promise<AxiosResponse<dimensionsTypes.Taskresultdto, any>>;
}
async deleteBulkRolesV1(requestParameters: rolesTypes.RolesApiDeleteBulkRolesV1Request): Promise<AxiosResponse<rolesTypes.Taskresultdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteBulkRolesV1(requestParameters) as Promise<AxiosResponse<rolesTypes.Taskresultdto, any>>;
}
async deleteCampaignFiltersV1(requestParameters: certificationCampaignFiltersTypes.CertificationCampaignFiltersApiDeleteCampaignFiltersV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteCampaignFiltersV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteCampaignsV1(requestParameters: certificationCampaignsTypes.CertificationCampaignsApiDeleteCampaignsV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteCampaignsV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async deleteCampaignTemplateScheduleV1(requestParameters: certificationCampaignsTypes.CertificationCampaignsApiDeleteCampaignTemplateScheduleV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteCampaignTemplateScheduleV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteCampaignTemplateV1(requestParameters: certificationCampaignsTypes.CertificationCampaignsApiDeleteCampaignTemplateV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteCampaignTemplateV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteClassifyMachineAccountFromSourceV1(requestParameters: classifySourceTypes.ClassifySourceApiDeleteClassifyMachineAccountFromSourceV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteClassifyMachineAccountFromSourceV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteConnectorCustomizerV1(requestParameters: connectorCustomizersTypes.ConnectorCustomizersApiDeleteConnectorCustomizerV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteConnectorCustomizerV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteConnectorRuleV1(requestParameters: connectorRuleManagementTypes.ConnectorRuleManagementApiDeleteConnectorRuleV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteConnectorRuleV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteCustomConnectorV1(requestParameters: connectorsTypes.ConnectorsApiDeleteCustomConnectorV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteCustomConnectorV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteCustomPasswordInstructionsV1(requestParameters: customPasswordInstructionsTypes.CustomPasswordInstructionsApiDeleteCustomPasswordInstructionsV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteCustomPasswordInstructionsV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteCustomPrivilegeCriteriaV1(requestParameters: privilegeCriteriaTypes.PrivilegeCriteriaApiDeleteCustomPrivilegeCriteriaV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteCustomPrivilegeCriteriaV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteDataSegmentV1(requestParameters: dataSegmentationTypes.DataSegmentationApiDeleteDataSegmentV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteDataSegmentV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteDimensionV1(requestParameters: dimensionsTypes.DimensionsApiDeleteDimensionV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteDimensionV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteDraftV1(requestParameters: configurationHubTypes.ConfigurationHubApiDeleteDraftV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteDraftV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteFormAttributeByIdNerm(requestParameters: sdk.FormAttributesNERMApiDeleteFormAttributeByIdRequest): Promise<AxiosResponse<sdk.GetFormAttributes200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteFormAttributeByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.GetFormAttributes200ResponseNERM, any>>;
}
async deleteFormAttributeByUidNerm(requestParameters: sdk.FormAttributesNERMApiDeleteFormAttributeByUidRequest = {}): Promise<AxiosResponse<sdk.GetFormAttributes200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteFormAttributeByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.GetFormAttributes200ResponseNERM, any>>;
}
async deleteFormByIdNerm(requestParameters: sdk.FormsNERMApiDeleteFormByIdRequest): Promise<AxiosResponse<sdk.CreateAttribute201ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteFormByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateAttribute201ResponseNERM, any>>;
}
async deleteFormByUidNerm(requestParameters: sdk.FormsNERMApiDeleteFormByUidRequest = {}): Promise<AxiosResponse<sdk.CreateAttribute201ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteFormByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateAttribute201ResponseNERM, any>>;
}
async deleteFormDefinitionV1(requestParameters: customFormsTypes.CustomFormsApiDeleteFormDefinitionV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteFormDefinitionV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async deleteIconV1(requestParameters: iconsTypes.IconsApiDeleteIconV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteIconV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteIdentityAttributesInBulkV1(requestParameters: identityAttributesTypes.IdentityAttributesApiDeleteIdentityAttributesInBulkV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteIdentityAttributesInBulkV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteIdentityAttributeV1(requestParameters: identityAttributesTypes.IdentityAttributesApiDeleteIdentityAttributeV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteIdentityAttributeV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteIdentityCollectorV1(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDeleteIdentityCollectorV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteIdentityCollectorV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteIdentityProfilesV1(requestParameters: identityProfilesTypes.IdentityProfilesApiDeleteIdentityProfilesV1Request): Promise<AxiosResponse<identityProfilesTypes.Taskresultsimplified, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteIdentityProfilesV1(requestParameters) as Promise<AxiosResponse<identityProfilesTypes.Taskresultsimplified, any>>;
}
async deleteIdentityProfileV1(requestParameters: identityProfilesTypes.IdentityProfilesApiDeleteIdentityProfileV1Request): Promise<AxiosResponse<identityProfilesTypes.Taskresultsimplified, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteIdentityProfileV1(requestParameters) as Promise<AxiosResponse<identityProfilesTypes.Taskresultsimplified, any>>;
}
async deleteIdentityV1(requestParameters: identitiesTypes.IdentitiesApiDeleteIdentityV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteIdentityV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteLauncherV1(requestParameters: launchersTypes.LaunchersApiDeleteLauncherV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteLauncherV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteLifecycleStateV1(requestParameters: lifecycleStatesTypes.LifecycleStatesApiDeleteLifecycleStateV1Request): Promise<AxiosResponse<lifecycleStatesTypes.Lifecyclestatedeleted, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteLifecycleStateV1(requestParameters) as Promise<AxiosResponse<lifecycleStatesTypes.Lifecyclestatedeleted, any>>;
}
async deleteMachineAccountMappingsV1(requestParameters: machineAccountMappingsTypes.MachineAccountMappingsApiDeleteMachineAccountMappingsV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteMachineAccountMappingsV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteMachineAccountSubtypeByTechnicalNameV1(requestParameters: machineAccountsTypes.MachineAccountsApiDeleteMachineAccountSubtypeByTechnicalNameV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteMachineAccountSubtypeByTechnicalNameV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteMachineAccountSubtypeV1(requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiDeleteMachineAccountSubtypeV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteMachineAccountSubtypeV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteMachineClassificationConfigV1(requestParameters: machineClassificationConfigTypes.MachineClassificationConfigApiDeleteMachineClassificationConfigV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteMachineClassificationConfigV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteMachineIdentityV1(requestParameters: machineIdentitiesTypes.MachineIdentitiesApiDeleteMachineIdentityV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteMachineIdentityV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteManagedClientV1(requestParameters: managedClientsTypes.ManagedClientsApiDeleteManagedClientV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteManagedClientV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteManagedClusterTypeV1(requestParameters: managedClusterTypesTypes.ManagedClusterTypesApiDeleteManagedClusterTypeV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteManagedClusterTypeV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteManagedClusterV1(requestParameters: managedClustersTypes.ManagedClustersApiDeleteManagedClusterV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteManagedClusterV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteMasterRecordNerm(requestParameters: sdk.ConsolidationNERMApiDeleteMasterRecordRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteMasterRecordNerm(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteMetadataFromRoleByKeyAndValueV1(requestParameters: rolesTypes.RolesApiDeleteMetadataFromRoleByKeyAndValueV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteMetadataFromRoleByKeyAndValueV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteMultiHostSourcesV1(requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiDeleteMultiHostSourcesV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteMultiHostSourcesV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteMultiHostV1(requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiDeleteMultiHostV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteMultiHostV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteNativeChangeDetectionConfigV1(requestParameters: sourcesTypes.SourcesApiDeleteNativeChangeDetectionConfigV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteNativeChangeDetectionConfigV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteNonEmployeeRecordsInBulkV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeRecordsInBulkV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteNonEmployeeRecordsInBulkV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteNonEmployeeRecordV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeRecordV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteNonEmployeeRecordV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteNonEmployeeRequestV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeRequestV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteNonEmployeeRequestV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteNonEmployeeSchemaAttributeV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeSchemaAttributeV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteNonEmployeeSchemaAttributeV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteNonEmployeeSourceSchemaAttributesV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeSourceSchemaAttributesV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteNonEmployeeSourceSchemaAttributesV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteNonEmployeeSourceV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeSourceV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteNonEmployeeSourceV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteNotificationTemplatesInBulkV1(requestParameters: notificationsTypes.NotificationsApiDeleteNotificationTemplatesInBulkV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteNotificationTemplatesInBulkV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteOauthClientV1(requestParameters: oauthClientsTypes.OAuthClientsApiDeleteOauthClientV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteOauthClientV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteObjectMappingV1(requestParameters: configurationHubTypes.ConfigurationHubApiDeleteObjectMappingV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteObjectMappingV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deletePageContentByIdNerm(requestParameters: sdk.PageContentsNERMApiDeletePageContentByIdRequest): Promise<AxiosResponse<sdk.GetPageContents200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deletePageContentByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.GetPageContents200ResponseNERM, any>>;
}
async deletePageContentByUidNerm(requestParameters: sdk.PageContentsNERMApiDeletePageContentByUidRequest): Promise<AxiosResponse<sdk.GetPageContents200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deletePageContentByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.GetPageContents200ResponseNERM, any>>;
}
async deletePageContentTranslationByIdNerm(requestParameters: sdk.PageContentTranslationsNERMApiDeletePageContentTranslationByIdRequest): Promise<AxiosResponse<sdk.GetPageContentTranslation200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deletePageContentTranslationByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.GetPageContentTranslation200ResponseNERM, any>>;
}
async deletePageContentTranslationByUidNerm(requestParameters: sdk.PageContentTranslationsNERMApiDeletePageContentTranslationByUidRequest): Promise<AxiosResponse<sdk.GetPageContentTranslation200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deletePageContentTranslationByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.GetPageContentTranslation200ResponseNERM, any>>;
}
async deletePageElementByIdNerm(requestParameters: sdk.PageElementsNERMApiDeletePageElementByIdRequest): Promise<AxiosResponse<sdk.GetPageElements200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deletePageElementByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.GetPageElements200ResponseNERM, any>>;
}
async deletePageElementByUidNerm(requestParameters: sdk.PageElementsNERMApiDeletePageElementByUidRequest = {}): Promise<AxiosResponse<sdk.GetPageElements200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deletePageElementByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.GetPageElements200ResponseNERM, any>>;
}
async deleteParameterV1(requestParameters: parameterStorageTypes.ParameterStorageApiDeleteParameterV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteParameterV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deletePasswordPolicyV1(requestParameters: passwordPoliciesTypes.PasswordPoliciesApiDeletePasswordPolicyV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deletePasswordPolicyV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deletePasswordSyncGroupV1(requestParameters: passwordSyncGroupsTypes.PasswordSyncGroupsApiDeletePasswordSyncGroupV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deletePasswordSyncGroupV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deletePersonalAccessTokenV1(requestParameters: personalAccessTokensTypes.PersonalAccessTokensApiDeletePersonalAccessTokenV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deletePersonalAccessTokenV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteProfileByIdNerm(requestParameters: sdk.ProfilesNERMApiDeleteProfileByIdRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteProfileByIdNerm(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteProfilesNerm(requestParameters: sdk.ProfilesNERMApiDeleteProfilesRequest): Promise<AxiosResponse<sdk.DeleteProfiles200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteProfilesNerm(requestParameters) as Promise<AxiosResponse<sdk.DeleteProfiles200ResponseNERM, any>>;
}
async deleteProfileTypeByIdNerm(requestParameters: sdk.ProfileTypesNERMApiDeleteProfileTypeByIdRequest): Promise<AxiosResponse<sdk.DeleteProfileTypeById200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteProfileTypeByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.DeleteProfileTypeById200ResponseNERM, any>>;
}
async deleteProfileTypeByUidNerm(requestParameters: sdk.ProfileTypesNERMApiDeleteProfileTypeByUidRequest = {}): Promise<AxiosResponse<sdk.DeleteProfileTypeById200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteProfileTypeByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.DeleteProfileTypeById200ResponseNERM, any>>;
}
async deleteProvisioningPolicyV1(requestParameters: sourcesTypes.SourcesApiDeleteProvisioningPolicyV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteProvisioningPolicyV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteProvisioningPolicyV2(requestParameters: sourcesTypes.SourcesApiDeleteProvisioningPolicyV2Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteProvisioningPolicyV2(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteReassignmentConfigurationV1(requestParameters: workReassignmentTypes.WorkReassignmentApiDeleteReassignmentConfigurationV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteReassignmentConfigurationV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteRoleProfileNerm(requestParameters: sdk.RoleProfilesNERMApiDeleteRoleProfileRequest): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteRoleProfileNerm(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async deleteRoleV1(requestParameters: rolesTypes.RolesApiDeleteRoleV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteRoleV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteSavedSearchV1(requestParameters: savedSearchTypes.SavedSearchApiDeleteSavedSearchV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteSavedSearchV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteScheduledActionV1(requestParameters: configurationHubTypes.ConfigurationHubApiDeleteScheduledActionV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteScheduledActionV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteScheduledSearchV1(requestParameters: scheduledSearchTypes.ScheduledSearchApiDeleteScheduledSearchV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteScheduledSearchV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteScheduleV1(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDeleteScheduleV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteScheduleV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteSearchAttributeConfigV1(requestParameters: searchAttributeConfigurationTypes.SearchAttributeConfigurationApiDeleteSearchAttributeConfigV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteSearchAttributeConfigV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteSegmentV1(requestParameters: segmentsTypes.SegmentsApiDeleteSegmentV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteSegmentV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteServiceDeskIntegrationV1(requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiDeleteServiceDeskIntegrationV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteServiceDeskIntegrationV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteSIMIntegrationV1(requestParameters: simIntegrationsTypes.SIMIntegrationsApiDeleteSIMIntegrationV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteSIMIntegrationV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteSodPolicyScheduleV1(requestParameters: sodPoliciesTypes.SODPoliciesApiDeleteSodPolicyScheduleV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteSodPolicyScheduleV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteSodPolicyV1(requestParameters: sodPoliciesTypes.SODPoliciesApiDeleteSodPolicyV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteSodPolicyV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteSourceAppV1(requestParameters: appsTypes.AppsApiDeleteSourceAppV1Request): Promise<AxiosResponse<appsTypes.Sourceapp, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteSourceAppV1(requestParameters) as Promise<AxiosResponse<appsTypes.Sourceapp, any>>;
}
async deleteSourceScheduleV1(requestParameters: sourcesTypes.SourcesApiDeleteSourceScheduleV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteSourceScheduleV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteSourceSchemaV1(requestParameters: sourcesTypes.SourcesApiDeleteSourceSchemaV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteSourceSchemaV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteSourceV1(requestParameters: sourcesTypes.SourcesApiDeleteSourceV1Request): Promise<AxiosResponse<sourcesTypes.DeleteSourceV1202Response, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteSourceV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.DeleteSourceV1202Response, any>>;
}
async deleteStreamV1(requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiDeleteStreamV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteStreamV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteSubscriptionV1(requestParameters: triggersTypes.TriggersApiDeleteSubscriptionV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteSubscriptionV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteSyncedAttributeNerm(requestParameters: sdk.SyncedAttributesNERMApiDeleteSyncedAttributeRequest = {}): Promise<AxiosResponse<sdk.DeleteProfileTypeById200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteSyncedAttributeNerm(requestParameters) as Promise<AxiosResponse<sdk.DeleteProfileTypeById200ResponseNERM, any>>;
}
async deleteTagByIdV1(requestParameters: tagsTypes.TagsApiDeleteTagByIdV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteTagByIdV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteTaggedObjectV1(requestParameters: taggedObjectsTypes.TaggedObjectsApiDeleteTaggedObjectV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteTaggedObjectV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteTagsToManyObjectV1(requestParameters: taggedObjectsTypes.TaggedObjectsApiDeleteTagsToManyObjectV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteTagsToManyObjectV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteTaskV1(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDeleteTaskV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteTaskV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteTransformV1(requestParameters: transformsTypes.TransformsApiDeleteTransformV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteTransformV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteUploadedConfigurationV1(requestParameters: configurationHubTypes.ConfigurationHubApiDeleteUploadedConfigurationV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteUploadedConfigurationV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteUserLevelV1(requestParameters: customUserLevelsTypes.CustomUserLevelsApiDeleteUserLevelV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteUserLevelV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteUserNerm(requestParameters: sdk.UsersNERMApiDeleteUserRequest): Promise<AxiosResponse<sdk.DeleteProfileTypeById200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteUserNerm(requestParameters) as Promise<AxiosResponse<sdk.DeleteProfileTypeById200ResponseNERM, any>>;
}
async deleteUserProfileNerm(requestParameters: sdk.UserProfilesNERMApiDeleteUserProfileRequest): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteUserProfileNerm(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async deleteUserProfilesNerm(requestParameters: sdk.UserProfilesNERMApiDeleteUserProfilesRequest): Promise<AxiosResponse<sdk.CreateUserProfiles200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteUserProfilesNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateUserProfiles200ResponseNERM, any>>;
}
async deleteUserRoleNerm(requestParameters: sdk.UserRolesNERMApiDeleteUserRoleRequest): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteUserRoleNerm(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async deleteVerifiedFromAddressV1(requestParameters: notificationsTypes.NotificationsApiDeleteVerifiedFromAddressV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteVerifiedFromAddressV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteWorkflowV1(requestParameters: workflowsTypes.WorkflowsApiDeleteWorkflowV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteWorkflowV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async deleteWorkgroupMembersV1(requestParameters: governanceGroupsTypes.GovernanceGroupsApiDeleteWorkgroupMembersV1Request): Promise<AxiosResponse<Array<governanceGroupsTypes.Workgroupmemberdeleteitem>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteWorkgroupMembersV1(requestParameters) as Promise<AxiosResponse<Array<governanceGroupsTypes.Workgroupmemberdeleteitem>, any>>;
}
async deleteWorkgroupsInBulkV1(requestParameters: governanceGroupsTypes.GovernanceGroupsApiDeleteWorkgroupsInBulkV1Request): Promise<AxiosResponse<Array<governanceGroupsTypes.Workgroupdeleteitem>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteWorkgroupsInBulkV1(requestParameters) as Promise<AxiosResponse<Array<governanceGroupsTypes.Workgroupdeleteitem>, any>>;
}
async deleteWorkgroupV1(requestParameters: governanceGroupsTypes.GovernanceGroupsApiDeleteWorkgroupV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.deleteWorkgroupV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async disableAccountForIdentityV1(requestParameters: accountsTypes.AccountsApiDisableAccountForIdentityV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.disableAccountForIdentityV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async disableAccountsForIdentitiesV1(requestParameters: accountsTypes.AccountsApiDisableAccountsForIdentitiesV1Request): Promise<AxiosResponse<Array<accountsTypes.Bulkidentitiesaccountsresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.disableAccountsForIdentitiesV1(requestParameters) as Promise<AxiosResponse<Array<accountsTypes.Bulkidentitiesaccountsresponse>, any>>;
}
async disableAccountV1(requestParameters: accountsTypes.AccountsApiDisableAccountV1Request): Promise<AxiosResponse<accountsTypes.Accountsasyncresult, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.disableAccountV1(requestParameters) as Promise<AxiosResponse<accountsTypes.Accountsasyncresult, any>>;
}
async downloadRoleInsightsEntitlementsChangesV1(requestParameters: roleInsightsTypes.RoleInsightsApiDownloadRoleInsightsEntitlementsChangesV1Request): Promise<AxiosResponse<string, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.downloadRoleInsightsEntitlementsChangesV1(requestParameters) as Promise<AxiosResponse<string, any>>;
}
async downloadRoleMiningPotentialRoleZipV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiDownloadRoleMiningPotentialRoleZipV1Request): Promise<AxiosResponse<File, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.downloadRoleMiningPotentialRoleZipV1(requestParameters) as Promise<AxiosResponse<File, any>>;
}
async enableAccountForIdentityV1(requestParameters: accountsTypes.AccountsApiEnableAccountForIdentityV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.enableAccountForIdentityV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async enableAccountsForIdentitiesV1(requestParameters: accountsTypes.AccountsApiEnableAccountsForIdentitiesV1Request): Promise<AxiosResponse<Array<accountsTypes.Bulkidentitiesaccountsresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.enableAccountsForIdentitiesV1(requestParameters) as Promise<AxiosResponse<Array<accountsTypes.Bulkidentitiesaccountsresponse>, any>>;
}
async enableAccountV1(requestParameters: accountsTypes.AccountsApiEnableAccountV1Request): Promise<AxiosResponse<accountsTypes.Accountsasyncresult, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.enableAccountV1(requestParameters) as Promise<AxiosResponse<accountsTypes.Accountsasyncresult, any>>;
}
async executeSavedSearchV1(requestParameters: savedSearchTypes.SavedSearchApiExecuteSavedSearchV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.executeSavedSearchV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async exportFormDefinitionsByTenantV1(requestParameters: customFormsTypes.CustomFormsApiExportFormDefinitionsByTenantV1Request = {}): Promise<AxiosResponse<Array<customFormsTypes.ExportFormDefinitionsByTenantV1200ResponseInner>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.exportFormDefinitionsByTenantV1(requestParameters) as Promise<AxiosResponse<Array<customFormsTypes.ExportFormDefinitionsByTenantV1200ResponseInner>, any>>;
}
async exportIdentityProfilesV1(requestParameters: identityProfilesTypes.IdentityProfilesApiExportIdentityProfilesV1Request = {}): Promise<AxiosResponse<Array<identityProfilesTypes.Identityprofileexportedobject>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.exportIdentityProfilesV1(requestParameters) as Promise<AxiosResponse<Array<identityProfilesTypes.Identityprofileexportedobject>, any>>;
}
async exportNonEmployeeRecordsV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiExportNonEmployeeRecordsV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.exportNonEmployeeRecordsV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async exportNonEmployeeSourceSchemaTemplateV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiExportNonEmployeeSourceSchemaTemplateV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.exportNonEmployeeSourceSchemaTemplateV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async exportOutliersZipV1(requestParameters: iaiOutliersTypes.IAIOutliersApiExportOutliersZipV1Request = {}): Promise<AxiosResponse<File, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.exportOutliersZipV1(requestParameters) as Promise<AxiosResponse<File, any>>;
}
async exportRoleMiningPotentialRoleAsyncV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiExportRoleMiningPotentialRoleAsyncV1Request): Promise<AxiosResponse<iaiRoleMiningTypes.Roleminingpotentialroleexportresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.exportRoleMiningPotentialRoleAsyncV1(requestParameters) as Promise<AxiosResponse<iaiRoleMiningTypes.Roleminingpotentialroleexportresponse, any>>;
}
async exportRoleMiningPotentialRoleStatusV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiExportRoleMiningPotentialRoleStatusV1Request): Promise<AxiosResponse<iaiRoleMiningTypes.Roleminingpotentialroleexportresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.exportRoleMiningPotentialRoleStatusV1(requestParameters) as Promise<AxiosResponse<iaiRoleMiningTypes.Roleminingpotentialroleexportresponse, any>>;
}
async exportRoleMiningPotentialRoleV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiExportRoleMiningPotentialRoleV1Request): Promise<AxiosResponse<File, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.exportRoleMiningPotentialRoleV1(requestParameters) as Promise<AxiosResponse<File, any>>;
}
async exportSpConfigV1(requestParameters: spConfigTypes.SPConfigApiExportSpConfigV1Request): Promise<AxiosResponse<spConfigTypes.Spconfigexportjob, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.exportSpConfigV1(requestParameters) as Promise<AxiosResponse<spConfigTypes.Spconfigexportjob, any>>;
}
async forwardAccessRequestV1(requestParameters: accessRequestApprovalsTypes.AccessRequestApprovalsApiForwardAccessRequestV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.forwardAccessRequestV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async forwardWorkItemV1(requestParameters: workItemsTypes.WorkItemsApiForwardWorkItemV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.forwardWorkItemV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async generateIdentityPreviewV1(requestParameters: identityProfilesTypes.IdentityProfilesApiGenerateIdentityPreviewV1Request): Promise<AxiosResponse<identityProfilesTypes.Identitypreviewresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.generateIdentityPreviewV1(requestParameters) as Promise<AxiosResponse<identityProfilesTypes.Identitypreviewresponse, any>>;
}
async getAccessModelMetadataAttributeV1(requestParameters: accessModelMetadataTypes.AccessModelMetadataApiGetAccessModelMetadataAttributeV1Request): Promise<AxiosResponse<accessModelMetadataTypes.Attributedto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessModelMetadataAttributeV1(requestParameters) as Promise<AxiosResponse<accessModelMetadataTypes.Attributedto, any>>;
}
async getAccessModelMetadataAttributeValueV1(requestParameters: accessModelMetadataTypes.AccessModelMetadataApiGetAccessModelMetadataAttributeValueV1Request): Promise<AxiosResponse<accessModelMetadataTypes.Attributevaluedto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessModelMetadataAttributeValueV1(requestParameters) as Promise<AxiosResponse<accessModelMetadataTypes.Attributevaluedto, any>>;
}
async getAccessProfileEntitlementsV1(requestParameters: accessProfilesTypes.AccessProfilesApiGetAccessProfileEntitlementsV1Request): Promise<AxiosResponse<Array<accessProfilesTypes.Entitlement>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessProfileEntitlementsV1(requestParameters) as Promise<AxiosResponse<Array<accessProfilesTypes.Entitlement>, any>>;
}
async getAccessProfileV1(requestParameters: accessProfilesTypes.AccessProfilesApiGetAccessProfileV1Request): Promise<AxiosResponse<accessProfilesTypes.Accessprofile, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessProfileV1(requestParameters) as Promise<AxiosResponse<accessProfilesTypes.Accessprofile, any>>;
}
async getAccessRequestApprovalSummaryV1(requestParameters: accessRequestApprovalsTypes.AccessRequestApprovalsApiGetAccessRequestApprovalSummaryV1Request = {}): Promise<AxiosResponse<accessRequestApprovalsTypes.Approvalsummary, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessRequestApprovalSummaryV1(requestParameters) as Promise<AxiosResponse<accessRequestApprovalsTypes.Approvalsummary, any>>;
}
async getAccessRequestConfigV1(): Promise<AxiosResponse<accessRequestsTypes.Accessrequestconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessRequestConfigV1() as Promise<AxiosResponse<accessRequestsTypes.Accessrequestconfig, any>>;
}
async getAccessRequestConfigV2(): Promise<AxiosResponse<accessRequestsTypes.Accessrequestconfigv2, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessRequestConfigV2() as Promise<AxiosResponse<accessRequestsTypes.Accessrequestconfigv2, any>>;
}
async getAccessRequestIdentityMetricsV1(requestParameters: accessRequestIdentityMetricsTypes.AccessRequestIdentityMetricsApiGetAccessRequestIdentityMetricsV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessRequestIdentityMetricsV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async getAccessRequestRecommendationsConfigV1(requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiGetAccessRequestRecommendationsConfigV1Request = {}): Promise<AxiosResponse<iaiAccessRequestRecommendationsTypes.Accessrequestrecommendationconfigdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessRequestRecommendationsConfigV1(requestParameters) as Promise<AxiosResponse<iaiAccessRequestRecommendationsTypes.Accessrequestrecommendationconfigdto, any>>;
}
async getAccessRequestRecommendationsIgnoredItemsV1(requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiGetAccessRequestRecommendationsIgnoredItemsV1Request = {}): Promise<AxiosResponse<Array<iaiAccessRequestRecommendationsTypes.Accessrequestrecommendationactionitemresponsedto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessRequestRecommendationsIgnoredItemsV1(requestParameters) as Promise<AxiosResponse<Array<iaiAccessRequestRecommendationsTypes.Accessrequestrecommendationactionitemresponsedto>, any>>;
}
async getAccessRequestRecommendationsRequestedItemsV1(requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiGetAccessRequestRecommendationsRequestedItemsV1Request = {}): Promise<AxiosResponse<Array<iaiAccessRequestRecommendationsTypes.Accessrequestrecommendationactionitemresponsedto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessRequestRecommendationsRequestedItemsV1(requestParameters) as Promise<AxiosResponse<Array<iaiAccessRequestRecommendationsTypes.Accessrequestrecommendationactionitemresponsedto>, any>>;
}
async getAccessRequestRecommendationsV1(requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiGetAccessRequestRecommendationsV1Request = {}): Promise<AxiosResponse<Array<iaiAccessRequestRecommendationsTypes.Accessrequestrecommendationitemdetail>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessRequestRecommendationsV1(requestParameters) as Promise<AxiosResponse<Array<iaiAccessRequestRecommendationsTypes.Accessrequestrecommendationitemdetail>, any>>;
}
async getAccessRequestRecommendationsViewedItemsV1(requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiGetAccessRequestRecommendationsViewedItemsV1Request = {}): Promise<AxiosResponse<Array<iaiAccessRequestRecommendationsTypes.Accessrequestrecommendationactionitemresponsedto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccessRequestRecommendationsViewedItemsV1(requestParameters) as Promise<AxiosResponse<Array<iaiAccessRequestRecommendationsTypes.Accessrequestrecommendationactionitemresponsedto>, any>>;
}
async getAccountActivityV1(requestParameters: accountActivitiesTypes.AccountActivitiesApiGetAccountActivityV1Request): Promise<AxiosResponse<accountActivitiesTypes.Accountactivity, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccountActivityV1(requestParameters) as Promise<AxiosResponse<accountActivitiesTypes.Accountactivity, any>>;
}
async getAccountAggregationStatusV1(requestParameters: accountAggregationsTypes.AccountAggregationsApiGetAccountAggregationStatusV1Request): Promise<AxiosResponse<accountAggregationsTypes.Accountaggregationstatus, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccountAggregationStatusV1(requestParameters) as Promise<AxiosResponse<accountAggregationsTypes.Accountaggregationstatus, any>>;
}
async getAccountDeleteApprovalConfigV1(requestParameters: sourcesTypes.SourcesApiGetAccountDeleteApprovalConfigV1Request): Promise<AxiosResponse<sourcesTypes.Accountdeleteconfigdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccountDeleteApprovalConfigV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Accountdeleteconfigdto, any>>;
}
async getAccountDeletionRequestsV1(requestParameters: accountDeletionRequestsTypes.AccountDeletionRequestsApiGetAccountDeletionRequestsV1Request = {}): Promise<AxiosResponse<Array<accountDeletionRequestsTypes.Accountactionrequestdto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccountDeletionRequestsV1(requestParameters) as Promise<AxiosResponse<Array<accountDeletionRequestsTypes.Accountactionrequestdto>, any>>;
}
async getAccountEntitlementsV1(requestParameters: accountsTypes.AccountsApiGetAccountEntitlementsV1Request): Promise<AxiosResponse<Array<accountsTypes.Entitlement>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccountEntitlementsV1(requestParameters) as Promise<AxiosResponse<Array<accountsTypes.Entitlement>, any>>;
}
async getAccountsSchemaV1(requestParameters: sourcesTypes.SourcesApiGetAccountsSchemaV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccountsSchemaV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getAccountV1(requestParameters: accountsTypes.AccountsApiGetAccountV1Request): Promise<AxiosResponse<accountsTypes.Account, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAccountV1(requestParameters) as Promise<AxiosResponse<accountsTypes.Account, any>>;
}
async getAcctAggregationGroupsV1(requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiGetAcctAggregationGroupsV1Request): Promise<AxiosResponse<Array<multiHostIntegrationTypes.Multihostintegrationsaggscheduleupdate>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAcctAggregationGroupsV1(requestParameters) as Promise<AxiosResponse<Array<multiHostIntegrationTypes.Multihostintegrationsaggscheduleupdate>, any>>;
}
async getActiveCampaignsV1(requestParameters: certificationCampaignsTypes.CertificationCampaignsApiGetActiveCampaignsV1Request = {}): Promise<AxiosResponse<Array<certificationCampaignsTypes.GetActiveCampaignsV1200ResponseInner>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getActiveCampaignsV1(requestParameters) as Promise<AxiosResponse<Array<certificationCampaignsTypes.GetActiveCampaignsV1200ResponseInner>, any>>;
}
async getAdvancedSearchNerm(): Promise<AxiosResponse<sdk.GetAdvancedSearch200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAdvancedSearchNerm() as Promise<AxiosResponse<sdk.GetAdvancedSearch200ResponseNERM, any>>;
}
async getAllPotentialRoleSummariesV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetAllPotentialRoleSummariesV1Request = {}): Promise<AxiosResponse<Array<iaiRoleMiningTypes.Roleminingpotentialrolesummary>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAllPotentialRoleSummariesV1(requestParameters) as Promise<AxiosResponse<Array<iaiRoleMiningTypes.Roleminingpotentialrolesummary>, any>>;
}
async getApplicationsV1(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiGetApplicationsV1Request = {}): Promise<AxiosResponse<Array<dataAccessSecurityTypes.Applicationitem>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getApplicationsV1(requestParameters) as Promise<AxiosResponse<Array<dataAccessSecurityTypes.Applicationitem>, any>>;
}
async getApplicationV1(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiGetApplicationV1Request): Promise<AxiosResponse<dataAccessSecurityTypes.Applicationitem, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getApplicationV1(requestParameters) as Promise<AxiosResponse<dataAccessSecurityTypes.Applicationitem, any>>;
}
async getApprovalsConfigV1(requestParameters: approvalsTypes.ApprovalsApiGetApprovalsConfigV1Request): Promise<AxiosResponse<approvalsTypes.Approvalconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getApprovalsConfigV1(requestParameters) as Promise<AxiosResponse<approvalsTypes.Approvalconfig, any>>;
}
async getApprovalsV1(requestParameters: approvalsTypes.ApprovalsApiGetApprovalsV1Request = {}): Promise<AxiosResponse<Array<approvalsTypes.Approval2>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getApprovalsV1(requestParameters) as Promise<AxiosResponse<Array<approvalsTypes.Approval2>, any>>;
}
async getApprovalV1(requestParameters: approvalsTypes.ApprovalsApiGetApprovalV1Request): Promise<AxiosResponse<approvalsTypes.Approval2, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getApprovalV1(requestParameters) as Promise<AxiosResponse<approvalsTypes.Approval2, any>>;
}
async getAttestationDocumentV1(requestParameters: parameterStorageTypes.ParameterStorageApiGetAttestationDocumentV1Request): Promise<AxiosResponse<parameterStorageTypes.Parameterstorageattestationdocument, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAttestationDocumentV1(requestParameters) as Promise<AxiosResponse<parameterStorageTypes.Parameterstorageattestationdocument, any>>;
}
async getAttributeByIdNerm(requestParameters: sdk.AttributesNERMApiGetAttributeByIdRequest): Promise<AxiosResponse<sdk.CreateAttribute201ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAttributeByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateAttribute201ResponseNERM, any>>;
}
async getAttributeByUidNerm(requestParameters: sdk.AttributesNERMApiGetAttributeByUidRequest = {}): Promise<AxiosResponse<sdk.CreateAttribute201ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAttributeByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateAttribute201ResponseNERM, any>>;
}
async getAttributeOptionByIdNerm(requestParameters: sdk.AttributeOptionsNERMApiGetAttributeOptionByIdRequest): Promise<AxiosResponse<sdk.SubmitAttributeOption200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAttributeOptionByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitAttributeOption200ResponseNERM, any>>;
}
async getAttributeOptionByUidNerm(requestParameters: sdk.AttributeOptionsNERMApiGetAttributeOptionByUidRequest = {}): Promise<AxiosResponse<sdk.SubmitAttributeOption200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAttributeOptionByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitAttributeOption200ResponseNERM, any>>;
}
async getAttributeOptionsNerm(requestParameters: sdk.AttributeOptionsNERMApiGetAttributeOptionsRequest = {}): Promise<AxiosResponse<sdk.GetAttributeOptions200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAttributeOptionsNerm(requestParameters) as Promise<AxiosResponse<sdk.GetAttributeOptions200ResponseNERM, any>>;
}
async getAttributesNerm(requestParameters: sdk.AttributesNERMApiGetAttributesRequest = {}): Promise<AxiosResponse<sdk.GetAttributes200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAttributesNerm(requestParameters) as Promise<AxiosResponse<sdk.GetAttributes200ResponseNERM, any>>;
}
async getAuthOrgLockoutConfigV1(): Promise<AxiosResponse<globalTenantSecuritySettingsTypes.Lockoutconfiguration, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAuthOrgLockoutConfigV1() as Promise<AxiosResponse<globalTenantSecuritySettingsTypes.Lockoutconfiguration, any>>;
}
async getAuthOrgNetworkConfigV1(): Promise<AxiosResponse<globalTenantSecuritySettingsTypes.Networkconfiguration, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAuthOrgNetworkConfigV1() as Promise<AxiosResponse<globalTenantSecuritySettingsTypes.Networkconfiguration, any>>;
}
async getAuthOrgServiceProviderConfigV1(): Promise<AxiosResponse<globalTenantSecuritySettingsTypes.Serviceproviderconfiguration, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAuthOrgServiceProviderConfigV1() as Promise<AxiosResponse<globalTenantSecuritySettingsTypes.Serviceproviderconfiguration, any>>;
}
async getAuthOrgSessionConfigV1(): Promise<AxiosResponse<globalTenantSecuritySettingsTypes.Sessionconfiguration, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAuthOrgSessionConfigV1() as Promise<AxiosResponse<globalTenantSecuritySettingsTypes.Sessionconfiguration, any>>;
}
async getAuthUserV1(requestParameters: authUsersTypes.AuthUsersApiGetAuthUserV1Request): Promise<AxiosResponse<authUsersTypes.Authuser, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAuthUserV1(requestParameters) as Promise<AxiosResponse<authUsersTypes.Authuser, any>>;
}
async getAutoWriteSettingsV1(): Promise<AxiosResponse<suggestedEntitlementDescriptionTypes.Autowritesettingresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getAutoWriteSettingsV1() as Promise<AxiosResponse<suggestedEntitlementDescriptionTypes.Autowritesettingresponse, any>>;
}
async getBrandingListV1(): Promise<AxiosResponse<Array<brandingTypes.Brandingitem>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getBrandingListV1() as Promise<AxiosResponse<Array<brandingTypes.Brandingitem>, any>>;
}
async getBrandingV1(requestParameters: brandingTypes.BrandingApiGetBrandingV1Request): Promise<AxiosResponse<brandingTypes.Brandingitem, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getBrandingV1(requestParameters) as Promise<AxiosResponse<brandingTypes.Brandingitem, any>>;
}
async getBulkUpdateStatusByIdV1(requestParameters: rolesTypes.RolesApiGetBulkUpdateStatusByIdV1Request): Promise<AxiosResponse<rolesTypes.Rolebulkupdateresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getBulkUpdateStatusByIdV1(requestParameters) as Promise<AxiosResponse<rolesTypes.Rolebulkupdateresponse, any>>;
}
async getBulkUpdateStatusV1(): Promise<AxiosResponse<Array<rolesTypes.Rolegetallbulkupdateresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getBulkUpdateStatusV1() as Promise<AxiosResponse<Array<rolesTypes.Rolegetallbulkupdateresponse>, any>>;
}
async getCampaignFilterByIdV1(requestParameters: certificationCampaignFiltersTypes.CertificationCampaignFiltersApiGetCampaignFilterByIdV1Request): Promise<AxiosResponse<certificationCampaignFiltersTypes.Campaignfilterdetails, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCampaignFilterByIdV1(requestParameters) as Promise<AxiosResponse<certificationCampaignFiltersTypes.Campaignfilterdetails, any>>;
}
async getCampaignReportsConfigV1(): Promise<AxiosResponse<certificationCampaignsTypes.Campaignreportsconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCampaignReportsConfigV1() as Promise<AxiosResponse<certificationCampaignsTypes.Campaignreportsconfig, any>>;
}
async getCampaignReportsV1(requestParameters: certificationCampaignsTypes.CertificationCampaignsApiGetCampaignReportsV1Request): Promise<AxiosResponse<Array<certificationCampaignsTypes.Campaignreport>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCampaignReportsV1(requestParameters) as Promise<AxiosResponse<Array<certificationCampaignsTypes.Campaignreport>, any>>;
}
async getCampaignTemplateScheduleV1(requestParameters: certificationCampaignsTypes.CertificationCampaignsApiGetCampaignTemplateScheduleV1Request): Promise<AxiosResponse<certificationCampaignsTypes.Schedule2, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCampaignTemplateScheduleV1(requestParameters) as Promise<AxiosResponse<certificationCampaignsTypes.Schedule2, any>>;
}
async getCampaignTemplatesV1(requestParameters: certificationCampaignsTypes.CertificationCampaignsApiGetCampaignTemplatesV1Request = {}): Promise<AxiosResponse<Array<certificationCampaignsTypes.Campaigntemplate>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCampaignTemplatesV1(requestParameters) as Promise<AxiosResponse<Array<certificationCampaignsTypes.Campaigntemplate>, any>>;
}
async getCampaignTemplateV1(requestParameters: certificationCampaignsTypes.CertificationCampaignsApiGetCampaignTemplateV1Request): Promise<AxiosResponse<certificationCampaignsTypes.Campaigntemplate, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCampaignTemplateV1(requestParameters) as Promise<AxiosResponse<certificationCampaignsTypes.Campaigntemplate, any>>;
}
async getCampaignV1(requestParameters: certificationCampaignsTypes.CertificationCampaignsApiGetCampaignV1Request): Promise<AxiosResponse<certificationCampaignsTypes.GetCampaignV1200Response, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCampaignV1(requestParameters) as Promise<AxiosResponse<certificationCampaignsTypes.GetCampaignV1200Response, any>>;
}
async getCertificationTaskV1(requestParameters: certificationsTypes.CertificationsApiGetCertificationTaskV1Request): Promise<AxiosResponse<certificationsTypes.Certificationtask, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCertificationTaskV1(requestParameters) as Promise<AxiosResponse<certificationsTypes.Certificationtask, any>>;
}
async getClassifyMachineAccountFromSourceStatusV1(requestParameters: classifySourceTypes.ClassifySourceApiGetClassifyMachineAccountFromSourceStatusV1Request): Promise<AxiosResponse<classifySourceTypes.Sourceclassificationstatus, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getClassifyMachineAccountFromSourceStatusV1(requestParameters) as Promise<AxiosResponse<classifySourceTypes.Sourceclassificationstatus, any>>;
}
async getClientLogConfigurationV1(requestParameters: managedClustersTypes.ManagedClustersApiGetClientLogConfigurationV1Request): Promise<AxiosResponse<managedClustersTypes.Clientlogconfiguration, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getClientLogConfigurationV1(requestParameters) as Promise<AxiosResponse<managedClustersTypes.Clientlogconfiguration, any>>;
}
async getCommonAccessV1(requestParameters: iaiCommonAccessTypes.IAICommonAccessApiGetCommonAccessV1Request = {}): Promise<AxiosResponse<Array<iaiCommonAccessTypes.Commonaccessresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCommonAccessV1(requestParameters) as Promise<AxiosResponse<Array<iaiCommonAccessTypes.Commonaccessresponse>, any>>;
}
async getCompletedWorkItemsV1(requestParameters: workItemsTypes.WorkItemsApiGetCompletedWorkItemsV1Request = {}): Promise<AxiosResponse<Array<workItemsTypes.Workitems>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCompletedWorkItemsV1(requestParameters) as Promise<AxiosResponse<Array<workItemsTypes.Workitems>, any>>;
}
async getConnectorCorrelationConfigV1(requestParameters: connectorsTypes.ConnectorsApiGetConnectorCorrelationConfigV1Request): Promise<AxiosResponse<string, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getConnectorCorrelationConfigV1(requestParameters) as Promise<AxiosResponse<string, any>>;
}
async getConnectorCustomizerV1(requestParameters: connectorCustomizersTypes.ConnectorCustomizersApiGetConnectorCustomizerV1Request): Promise<AxiosResponse<connectorCustomizersTypes.Connectorcustomizersresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getConnectorCustomizerV1(requestParameters) as Promise<AxiosResponse<connectorCustomizersTypes.Connectorcustomizersresponse, any>>;
}
async getConnectorListV1(requestParameters: connectorsTypes.ConnectorsApiGetConnectorListV1Request = {}): Promise<AxiosResponse<Array<connectorsTypes.V3connectordto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getConnectorListV1(requestParameters) as Promise<AxiosResponse<Array<connectorsTypes.V3connectordto>, any>>;
}
async getConnectorRuleListV1(requestParameters: connectorRuleManagementTypes.ConnectorRuleManagementApiGetConnectorRuleListV1Request = {}): Promise<AxiosResponse<Array<connectorRuleManagementTypes.Connectorruleresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getConnectorRuleListV1(requestParameters) as Promise<AxiosResponse<Array<connectorRuleManagementTypes.Connectorruleresponse>, any>>;
}
async getConnectorRuleV1(requestParameters: connectorRuleManagementTypes.ConnectorRuleManagementApiGetConnectorRuleV1Request): Promise<AxiosResponse<connectorRuleManagementTypes.Connectorruleresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getConnectorRuleV1(requestParameters) as Promise<AxiosResponse<connectorRuleManagementTypes.Connectorruleresponse, any>>;
}
async getConnectorSourceConfigV1(requestParameters: connectorsTypes.ConnectorsApiGetConnectorSourceConfigV1Request): Promise<AxiosResponse<string, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getConnectorSourceConfigV1(requestParameters) as Promise<AxiosResponse<string, any>>;
}
async getConnectorSourceTemplateV1(requestParameters: connectorsTypes.ConnectorsApiGetConnectorSourceTemplateV1Request): Promise<AxiosResponse<string, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getConnectorSourceTemplateV1(requestParameters) as Promise<AxiosResponse<string, any>>;
}
async getConnectorTranslationsV1(requestParameters: connectorsTypes.ConnectorsApiGetConnectorTranslationsV1Request): Promise<AxiosResponse<string, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getConnectorTranslationsV1(requestParameters) as Promise<AxiosResponse<string, any>>;
}
async getConnectorV1(requestParameters: connectorsTypes.ConnectorsApiGetConnectorV1Request): Promise<AxiosResponse<connectorsTypes.Connectordetail, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getConnectorV1(requestParameters) as Promise<AxiosResponse<connectorsTypes.Connectordetail, any>>;
}
async getCorrelationConfigV1(requestParameters: sourcesTypes.SourcesApiGetCorrelationConfigV1Request): Promise<AxiosResponse<sourcesTypes.Correlationconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCorrelationConfigV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Correlationconfig, any>>;
}
async getCountCompletedWorkItemsV1(requestParameters: workItemsTypes.WorkItemsApiGetCountCompletedWorkItemsV1Request = {}): Promise<AxiosResponse<workItemsTypes.Workitemscount, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCountCompletedWorkItemsV1(requestParameters) as Promise<AxiosResponse<workItemsTypes.Workitemscount, any>>;
}
async getCountWorkItemsV1(requestParameters: workItemsTypes.WorkItemsApiGetCountWorkItemsV1Request = {}): Promise<AxiosResponse<workItemsTypes.Workitemscount, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCountWorkItemsV1(requestParameters) as Promise<AxiosResponse<workItemsTypes.Workitemscount, any>>;
}
async getCreateMachineAccountRequestV1(requestParameters: machineAccountCreationRequestTypes.MachineAccountCreationRequestApiGetCreateMachineAccountRequestV1Request): Promise<AxiosResponse<machineAccountCreationRequestTypes.Accountrequestdetailsdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCreateMachineAccountRequestV1(requestParameters) as Promise<AxiosResponse<machineAccountCreationRequestTypes.Accountrequestdetailsdto, any>>;
}
async getCustomPasswordInstructionsV1(requestParameters: customPasswordInstructionsTypes.CustomPasswordInstructionsApiGetCustomPasswordInstructionsV1Request): Promise<AxiosResponse<customPasswordInstructionsTypes.Custompasswordinstruction, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCustomPasswordInstructionsV1(requestParameters) as Promise<AxiosResponse<customPasswordInstructionsTypes.Custompasswordinstruction, any>>;
}
async getCustomViolationReportV1(requestParameters: sodPoliciesTypes.SODPoliciesApiGetCustomViolationReportV1Request): Promise<AxiosResponse<File, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getCustomViolationReportV1(requestParameters) as Promise<AxiosResponse<File, any>>;
}
async getDataSegmentationEnabledForUserV1(requestParameters: dataSegmentationTypes.DataSegmentationApiGetDataSegmentationEnabledForUserV1Request): Promise<AxiosResponse<boolean, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getDataSegmentationEnabledForUserV1(requestParameters) as Promise<AxiosResponse<boolean, any>>;
}
async getDataSegmentIdentityMembershipV1(requestParameters: dataSegmentationTypes.DataSegmentationApiGetDataSegmentIdentityMembershipV1Request): Promise<AxiosResponse<Array<dataSegmentationTypes.Segmentmembership>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getDataSegmentIdentityMembershipV1(requestParameters) as Promise<AxiosResponse<Array<dataSegmentationTypes.Segmentmembership>, any>>;
}
async getDataSegmentV1(requestParameters: dataSegmentationTypes.DataSegmentationApiGetDataSegmentV1Request): Promise<AxiosResponse<dataSegmentationTypes.DataSegment, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getDataSegmentV1(requestParameters) as Promise<AxiosResponse<dataSegmentationTypes.DataSegment, any>>;
}
async getDefaultIdentityAttributeConfigV1(requestParameters: identityProfilesTypes.IdentityProfilesApiGetDefaultIdentityAttributeConfigV1Request): Promise<AxiosResponse<identityProfilesTypes.Identityattributeconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getDefaultIdentityAttributeConfigV1(requestParameters) as Promise<AxiosResponse<identityProfilesTypes.Identityattributeconfig, any>>;
}
async getDefaultViolationReportV1(requestParameters: sodPoliciesTypes.SODPoliciesApiGetDefaultViolationReportV1Request): Promise<AxiosResponse<File, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getDefaultViolationReportV1(requestParameters) as Promise<AxiosResponse<File, any>>;
}
async getDeployV1(requestParameters: configurationHubTypes.ConfigurationHubApiGetDeployV1Request): Promise<AxiosResponse<configurationHubTypes.Deployresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getDeployV1(requestParameters) as Promise<AxiosResponse<configurationHubTypes.Deployresponse, any>>;
}
async getDimensionEntitlementsV1(requestParameters: dimensionsTypes.DimensionsApiGetDimensionEntitlementsV1Request): Promise<AxiosResponse<Array<dimensionsTypes.Entitlement>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getDimensionEntitlementsV1(requestParameters) as Promise<AxiosResponse<Array<dimensionsTypes.Entitlement>, any>>;
}
async getDimensionV1(requestParameters: dimensionsTypes.DimensionsApiGetDimensionV1Request): Promise<AxiosResponse<dimensionsTypes.Dimension, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getDimensionV1(requestParameters) as Promise<AxiosResponse<dimensionsTypes.Dimension, any>>;
}
async getDiscoveredApplicationsV1(requestParameters: applicationDiscoveryTypes.ApplicationDiscoveryApiGetDiscoveredApplicationsV1Request = {}): Promise<AxiosResponse<Array<applicationDiscoveryTypes.GetDiscoveredApplicationsV1200ResponseInner>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getDiscoveredApplicationsV1(requestParameters) as Promise<AxiosResponse<Array<applicationDiscoveryTypes.GetDiscoveredApplicationsV1200ResponseInner>, any>>;
}
async getDkimAttributesV1(requestParameters: notificationsTypes.NotificationsApiGetDkimAttributesV1Request = {}): Promise<AxiosResponse<Array<notificationsTypes.Dkimattributes>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getDkimAttributesV1(requestParameters) as Promise<AxiosResponse<Array<notificationsTypes.Dkimattributes>, any>>;
}
async getEntitlementAggregationGroupsV1(requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiGetEntitlementAggregationGroupsV1Request): Promise<AxiosResponse<Array<multiHostIntegrationTypes.Multihostintegrationsaggscheduleupdate>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getEntitlementAggregationGroupsV1(requestParameters) as Promise<AxiosResponse<Array<multiHostIntegrationTypes.Multihostintegrationsaggscheduleupdate>, any>>;
}
async getEntitlementChangesIdentitiesV1(requestParameters: roleInsightsTypes.RoleInsightsApiGetEntitlementChangesIdentitiesV1Request): Promise<AxiosResponse<Array<roleInsightsTypes.Roleinsightsidentities>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getEntitlementChangesIdentitiesV1(requestParameters) as Promise<AxiosResponse<Array<roleInsightsTypes.Roleinsightsidentities>, any>>;
}
async getEntitlementDetailsForIdentityV1(requestParameters: accessRequestsTypes.AccessRequestsApiGetEntitlementDetailsForIdentityV1Request): Promise<AxiosResponse<accessRequestsTypes.Identityentitlementdetails, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getEntitlementDetailsForIdentityV1(requestParameters) as Promise<AxiosResponse<accessRequestsTypes.Identityentitlementdetails, any>>;
}
async getEntitlementDistributionPotentialRoleV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetEntitlementDistributionPotentialRoleV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getEntitlementDistributionPotentialRoleV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async getEntitlementRequestConfigV1(requestParameters: entitlementsTypes.EntitlementsApiGetEntitlementRequestConfigV1Request): Promise<AxiosResponse<entitlementsTypes.Entitlementrequestconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getEntitlementRequestConfigV1(requestParameters) as Promise<AxiosResponse<entitlementsTypes.Entitlementrequestconfig, any>>;
}
async getEntitlementsPotentialRoleV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetEntitlementsPotentialRoleV1Request): Promise<AxiosResponse<Array<iaiRoleMiningTypes.Roleminingentitlement>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getEntitlementsPotentialRoleV1(requestParameters) as Promise<AxiosResponse<Array<iaiRoleMiningTypes.Roleminingentitlement>, any>>;
}
async getEntitlementsSchemaV1(requestParameters: sourcesTypes.SourcesApiGetEntitlementsSchemaV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getEntitlementsSchemaV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getEntitlementV1(requestParameters: entitlementsTypes.EntitlementsApiGetEntitlementV1Request): Promise<AxiosResponse<entitlementsTypes.Entitlementv2, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getEntitlementV1(requestParameters) as Promise<AxiosResponse<entitlementsTypes.Entitlementv2, any>>;
}
async getEvaluateReassignmentConfigurationV1(requestParameters: workReassignmentTypes.WorkReassignmentApiGetEvaluateReassignmentConfigurationV1Request): Promise<AxiosResponse<Array<workReassignmentTypes.Evaluateresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getEvaluateReassignmentConfigurationV1(requestParameters) as Promise<AxiosResponse<Array<workReassignmentTypes.Evaluateresponse>, any>>;
}
async getExcludedEntitlementsPotentialRoleV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetExcludedEntitlementsPotentialRoleV1Request): Promise<AxiosResponse<Array<iaiRoleMiningTypes.Roleminingentitlement>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getExcludedEntitlementsPotentialRoleV1(requestParameters) as Promise<AxiosResponse<Array<iaiRoleMiningTypes.Roleminingentitlement>, any>>;
}
async getFileFromS3V1(requestParameters: customFormsTypes.CustomFormsApiGetFileFromS3V1Request): Promise<AxiosResponse<File, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getFileFromS3V1(requestParameters) as Promise<AxiosResponse<File, any>>;
}
async getFormAttributeByIdNerm(requestParameters: sdk.FormAttributesNERMApiGetFormAttributeByIdRequest): Promise<AxiosResponse<sdk.GetFormAttributes200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getFormAttributeByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.GetFormAttributes200ResponseNERM, any>>;
}
async getFormAttributeByUidNerm(requestParameters: sdk.FormAttributesNERMApiGetFormAttributeByUidRequest = {}): Promise<AxiosResponse<sdk.GetFormAttributes200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getFormAttributeByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.GetFormAttributes200ResponseNERM, any>>;
}
async getFormAttributesNerm(): Promise<AxiosResponse<sdk.GetFormAttributes200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getFormAttributesNerm() as Promise<AxiosResponse<sdk.GetFormAttributes200ResponseNERM, any>>;
}
async getFormByIdNerm(requestParameters: sdk.FormsNERMApiGetFormByIdRequest): Promise<AxiosResponse<sdk.GetForms200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getFormByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.GetForms200ResponseNERM, any>>;
}
async getFormByUidNerm(requestParameters: sdk.FormsNERMApiGetFormByUidRequest = {}): Promise<AxiosResponse<sdk.GetForms200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getFormByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.GetForms200ResponseNERM, any>>;
}
async getFormDefinitionByKeyV1(requestParameters: customFormsTypes.CustomFormsApiGetFormDefinitionByKeyV1Request): Promise<AxiosResponse<customFormsTypes.Formdefinitionresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getFormDefinitionByKeyV1(requestParameters) as Promise<AxiosResponse<customFormsTypes.Formdefinitionresponse, any>>;
}
async getFormInstanceByKeyV1(requestParameters: customFormsTypes.CustomFormsApiGetFormInstanceByKeyV1Request): Promise<AxiosResponse<customFormsTypes.Forminstanceresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getFormInstanceByKeyV1(requestParameters) as Promise<AxiosResponse<customFormsTypes.Forminstanceresponse, any>>;
}
async getFormInstanceFileV1(requestParameters: customFormsTypes.CustomFormsApiGetFormInstanceFileV1Request): Promise<AxiosResponse<File, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getFormInstanceFileV1(requestParameters) as Promise<AxiosResponse<File, any>>;
}
async getFormsNerm(): Promise<AxiosResponse<sdk.GetForms200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getFormsNerm() as Promise<AxiosResponse<sdk.GetForms200ResponseNERM, any>>;
}
async getHistoricalIdentityEventsV1(requestParameters: identityHistoryTypes.IdentityHistoryApiGetHistoricalIdentityEventsV1Request): Promise<AxiosResponse<Array<identityHistoryTypes.GetHistoricalIdentityEventsV1200ResponseInner>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getHistoricalIdentityEventsV1(requestParameters) as Promise<AxiosResponse<Array<identityHistoryTypes.GetHistoricalIdentityEventsV1200ResponseInner>, any>>;
}
async getHistoricalIdentityV1(requestParameters: identityHistoryTypes.IdentityHistoryApiGetHistoricalIdentityV1Request): Promise<AxiosResponse<identityHistoryTypes.Identityhistoryresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getHistoricalIdentityV1(requestParameters) as Promise<AxiosResponse<identityHistoryTypes.Identityhistoryresponse, any>>;
}
async getIdentitiesPotentialRoleV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetIdentitiesPotentialRoleV1Request): Promise<AxiosResponse<Array<iaiRoleMiningTypes.Roleminingidentity>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentitiesPotentialRoleV1(requestParameters) as Promise<AxiosResponse<Array<iaiRoleMiningTypes.Roleminingidentity>, any>>;
}
async getIdentityAccessSummariesV1(requestParameters: certificationSummariesTypes.CertificationSummariesApiGetIdentityAccessSummariesV1Request): Promise<AxiosResponse<Array<certificationSummariesTypes.Accesssummary>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentityAccessSummariesV1(requestParameters) as Promise<AxiosResponse<Array<certificationSummariesTypes.Accesssummary>, any>>;
}
async getIdentityAttributeV1(requestParameters: identityAttributesTypes.IdentityAttributesApiGetIdentityAttributeV1Request): Promise<AxiosResponse<identityAttributesTypes.Identityattribute2, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentityAttributeV1(requestParameters) as Promise<AxiosResponse<identityAttributesTypes.Identityattribute2, any>>;
}
async getIdentityCertificationItemPermissionsV1(requestParameters: certificationsTypes.CertificationsApiGetIdentityCertificationItemPermissionsV1Request): Promise<AxiosResponse<Array<certificationsTypes.Permissiondto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentityCertificationItemPermissionsV1(requestParameters) as Promise<AxiosResponse<Array<certificationsTypes.Permissiondto>, any>>;
}
async getIdentityCertificationV1(requestParameters: certificationsTypes.CertificationsApiGetIdentityCertificationV1Request): Promise<AxiosResponse<certificationsTypes.Identitycertificationdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentityCertificationV1(requestParameters) as Promise<AxiosResponse<certificationsTypes.Identitycertificationdto, any>>;
}
async getIdentityDecisionSummaryV1(requestParameters: certificationSummariesTypes.CertificationSummariesApiGetIdentityDecisionSummaryV1Request): Promise<AxiosResponse<certificationSummariesTypes.Identitycertdecisionsummary, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentityDecisionSummaryV1(requestParameters) as Promise<AxiosResponse<certificationSummariesTypes.Identitycertdecisionsummary, any>>;
}
async getIdentityIntelligenceV1(requestParameters: intelligenceTypes.IntelligenceApiGetIdentityIntelligenceV1Request): Promise<AxiosResponse<intelligenceTypes.Intelidentityaggregate, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentityIntelligenceV1(requestParameters) as Promise<AxiosResponse<intelligenceTypes.Intelidentityaggregate, any>>;
}
async getIdentityOutlierSnapshotsV1(requestParameters: iaiOutliersTypes.IAIOutliersApiGetIdentityOutlierSnapshotsV1Request = {}): Promise<AxiosResponse<Array<iaiOutliersTypes.Outliersummary>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentityOutlierSnapshotsV1(requestParameters) as Promise<AxiosResponse<Array<iaiOutliersTypes.Outliersummary>, any>>;
}
async getIdentityOutliersV1(requestParameters: iaiOutliersTypes.IAIOutliersApiGetIdentityOutliersV1Request = {}): Promise<AxiosResponse<Array<iaiOutliersTypes.Outlier>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentityOutliersV1(requestParameters) as Promise<AxiosResponse<Array<iaiOutliersTypes.Outlier>, any>>;
}
async getIdentityOwnershipDetailsV1(requestParameters: identitiesTypes.IdentitiesApiGetIdentityOwnershipDetailsV1Request): Promise<AxiosResponse<identitiesTypes.Identityownershipassociationdetails, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentityOwnershipDetailsV1(requestParameters) as Promise<AxiosResponse<identitiesTypes.Identityownershipassociationdetails, any>>;
}
async getIdentityProfileV1(requestParameters: identityProfilesTypes.IdentityProfilesApiGetIdentityProfileV1Request): Promise<AxiosResponse<identityProfilesTypes.Identityprofile, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentityProfileV1(requestParameters) as Promise<AxiosResponse<identityProfilesTypes.Identityprofile, any>>;
}
async getIdentityProofingResultsNerm(requestParameters: sdk.IdentityProofingResultsNERMApiGetIdentityProofingResultsRequest = {}): Promise<AxiosResponse<sdk.GetIdentityProofingResults200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentityProofingResultsNerm(requestParameters) as Promise<AxiosResponse<sdk.GetIdentityProofingResults200ResponseNERM, any>>;
}
async getIdentitySnapshotSummaryV1(requestParameters: identityHistoryTypes.IdentityHistoryApiGetIdentitySnapshotSummaryV1Request): Promise<AxiosResponse<Array<identityHistoryTypes.Metricresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentitySnapshotSummaryV1(requestParameters) as Promise<AxiosResponse<Array<identityHistoryTypes.Metricresponse>, any>>;
}
async getIdentitySnapshotV1(requestParameters: identityHistoryTypes.IdentityHistoryApiGetIdentitySnapshotV1Request): Promise<AxiosResponse<identityHistoryTypes.Identityhistoryresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentitySnapshotV1(requestParameters) as Promise<AxiosResponse<identityHistoryTypes.Identityhistoryresponse, any>>;
}
async getIdentityStartDateV1(requestParameters: identityHistoryTypes.IdentityHistoryApiGetIdentityStartDateV1Request): Promise<AxiosResponse<string, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentityStartDateV1(requestParameters) as Promise<AxiosResponse<string, any>>;
}
async getIdentitySummariesV1(requestParameters: certificationSummariesTypes.CertificationSummariesApiGetIdentitySummariesV1Request): Promise<AxiosResponse<Array<certificationSummariesTypes.Certificationidentitysummary>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentitySummariesV1(requestParameters) as Promise<AxiosResponse<Array<certificationSummariesTypes.Certificationidentitysummary>, any>>;
}
async getIdentitySummaryV1(requestParameters: certificationSummariesTypes.CertificationSummariesApiGetIdentitySummaryV1Request): Promise<AxiosResponse<certificationSummariesTypes.Certificationidentitysummary, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentitySummaryV1(requestParameters) as Promise<AxiosResponse<certificationSummariesTypes.Certificationidentitysummary, any>>;
}
async getIdentityV1(requestParameters: identitiesTypes.IdentitiesApiGetIdentityV1Request): Promise<AxiosResponse<identitiesTypes.Identity, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIdentityV1(requestParameters) as Promise<AxiosResponse<identitiesTypes.Identity, any>>;
}
async getIntelIdentityAccessItemHistoryV1(requestParameters: intelligenceTypes.IntelligenceApiGetIntelIdentityAccessItemHistoryV1Request): Promise<AxiosResponse<Array<intelligenceTypes.Intelaccessitemhistoryevent>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIntelIdentityAccessItemHistoryV1(requestParameters) as Promise<AxiosResponse<Array<intelligenceTypes.Intelaccessitemhistoryevent>, any>>;
}
async getIntelIdentityAccountsV1(requestParameters: intelligenceTypes.IntelligenceApiGetIntelIdentityAccountsV1Request): Promise<AxiosResponse<Array<intelligenceTypes.Intelaccessaccountwire>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIntelIdentityAccountsV1(requestParameters) as Promise<AxiosResponse<Array<intelligenceTypes.Intelaccessaccountwire>, any>>;
}
async getIntelIdentityCertificationHistoryV1(requestParameters: intelligenceTypes.IntelligenceApiGetIntelIdentityCertificationHistoryV1Request): Promise<AxiosResponse<Array<intelligenceTypes.Intelcertificationhistoryevent>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIntelIdentityCertificationHistoryV1(requestParameters) as Promise<AxiosResponse<Array<intelligenceTypes.Intelcertificationhistoryevent>, any>>;
}
async getIntelIdentityRareAccessV1(requestParameters: intelligenceTypes.IntelligenceApiGetIntelIdentityRareAccessV1Request): Promise<AxiosResponse<Array<intelligenceTypes.Inteloutlieraccessitem>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getIntelIdentityRareAccessV1(requestParameters) as Promise<AxiosResponse<Array<intelligenceTypes.Inteloutlieraccessitem>, any>>;
}
async getJitActivationConfigV1(requestParameters: jitAccessTypes.JITAccessApiGetJitActivationConfigV1Request): Promise<AxiosResponse<jitAccessTypes.Jitactivationconfigresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getJitActivationConfigV1(requestParameters) as Promise<AxiosResponse<jitAccessTypes.Jitactivationconfigresponse, any>>;
}
async getJobStatusNerm(requestParameters: sdk.JobStatusNERMApiGetJobStatusRequest): Promise<AxiosResponse<sdk.GetJobStatus200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getJobStatusNerm(requestParameters) as Promise<AxiosResponse<sdk.GetJobStatus200ResponseNERM, any>>;
}
async getJWKSDataV1(): Promise<AxiosResponse<sharedSignalsFrameworkSsfTypes.Jwks, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getJWKSDataV1() as Promise<AxiosResponse<sharedSignalsFrameworkSsfTypes.Jwks, any>>;
}
async getLatestIdentityOutlierSnapshotsV1(requestParameters: iaiOutliersTypes.IAIOutliersApiGetLatestIdentityOutlierSnapshotsV1Request = {}): Promise<AxiosResponse<Array<iaiOutliersTypes.Latestoutliersummary>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getLatestIdentityOutlierSnapshotsV1(requestParameters) as Promise<AxiosResponse<Array<iaiOutliersTypes.Latestoutliersummary>, any>>;
}
async getLaunchersV1(requestParameters: launchersTypes.LaunchersApiGetLaunchersV1Request = {}): Promise<AxiosResponse<launchersTypes.GetLaunchersV1200Response, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getLaunchersV1(requestParameters) as Promise<AxiosResponse<launchersTypes.GetLaunchersV1200Response, any>>;
}
async getLauncherV1(requestParameters: launchersTypes.LaunchersApiGetLauncherV1Request): Promise<AxiosResponse<launchersTypes.Launcher, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getLauncherV1(requestParameters) as Promise<AxiosResponse<launchersTypes.Launcher, any>>;
}
async getLifecycleStatesV1(requestParameters: lifecycleStatesTypes.LifecycleStatesApiGetLifecycleStatesV1Request): Promise<AxiosResponse<Array<lifecycleStatesTypes.Lifecyclestate>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getLifecycleStatesV1(requestParameters) as Promise<AxiosResponse<Array<lifecycleStatesTypes.Lifecyclestate>, any>>;
}
async getLifecycleStateV1(requestParameters: lifecycleStatesTypes.LifecycleStatesApiGetLifecycleStateV1Request): Promise<AxiosResponse<lifecycleStatesTypes.Lifecyclestate, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getLifecycleStateV1(requestParameters) as Promise<AxiosResponse<lifecycleStatesTypes.Lifecyclestate, any>>;
}
async getMachineAccountCreateAccessInfoV1(requestParameters: machineAccountCreationRequestTypes.MachineAccountCreationRequestApiGetMachineAccountCreateAccessInfoV1Request): Promise<AxiosResponse<Array<machineAccountCreationRequestTypes.Machineaccountcreateaccessdto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMachineAccountCreateAccessInfoV1(requestParameters) as Promise<AxiosResponse<Array<machineAccountCreationRequestTypes.Machineaccountcreateaccessdto>, any>>;
}
async getMachineAccountDeletionApprovalConfigBySourceV1(requestParameters: sourcesTypes.SourcesApiGetMachineAccountDeletionApprovalConfigBySourceV1Request): Promise<AxiosResponse<sourcesTypes.Accountdeleteconfigdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMachineAccountDeletionApprovalConfigBySourceV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Accountdeleteconfigdto, any>>;
}
async getMachineAccountSubtypeApprovalConfigV1(requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiGetMachineAccountSubtypeApprovalConfigV1Request): Promise<AxiosResponse<machineAccountSubtypesTypes.Machineaccountsubtypeconfigdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMachineAccountSubtypeApprovalConfigV1(requestParameters) as Promise<AxiosResponse<machineAccountSubtypesTypes.Machineaccountsubtypeconfigdto, any>>;
}
async getMachineAccountSubtypeByIdV1(requestParameters: machineAccountsTypes.MachineAccountsApiGetMachineAccountSubtypeByIdV1Request): Promise<AxiosResponse<machineAccountsTypes.Sourcesubtype, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMachineAccountSubtypeByIdV1(requestParameters) as Promise<AxiosResponse<machineAccountsTypes.Sourcesubtype, any>>;
}
async getMachineAccountSubtypeByTechnicalNameV1(requestParameters: machineAccountsTypes.MachineAccountsApiGetMachineAccountSubtypeByTechnicalNameV1Request): Promise<AxiosResponse<machineAccountsTypes.Sourcesubtype, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMachineAccountSubtypeByTechnicalNameV1(requestParameters) as Promise<AxiosResponse<machineAccountsTypes.Sourcesubtype, any>>;
}
async getMachineAccountV1(requestParameters: machineAccountsTypes.MachineAccountsApiGetMachineAccountV1Request): Promise<AxiosResponse<machineAccountsTypes.Machineaccount, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMachineAccountV1(requestParameters) as Promise<AxiosResponse<machineAccountsTypes.Machineaccount, any>>;
}
async getMachineClassificationConfigV1(requestParameters: machineClassificationConfigTypes.MachineClassificationConfigApiGetMachineClassificationConfigV1Request): Promise<AxiosResponse<machineClassificationConfigTypes.Machineclassificationconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMachineClassificationConfigV1(requestParameters) as Promise<AxiosResponse<machineClassificationConfigTypes.Machineclassificationconfig, any>>;
}
async getMachineIdentityV1(requestParameters: machineIdentitiesTypes.MachineIdentitiesApiGetMachineIdentityV1Request): Promise<AxiosResponse<machineIdentitiesTypes.Machineidentityresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMachineIdentityV1(requestParameters) as Promise<AxiosResponse<machineIdentitiesTypes.Machineidentityresponse, any>>;
}
async getMailFromAttributesV1(requestParameters: notificationsTypes.NotificationsApiGetMailFromAttributesV1Request): Promise<AxiosResponse<notificationsTypes.Mailfromattributes, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMailFromAttributesV1(requestParameters) as Promise<AxiosResponse<notificationsTypes.Mailfromattributes, any>>;
}
async getManagedClientHealthIndicatorsV1(requestParameters: managedClientsTypes.ManagedClientsApiGetManagedClientHealthIndicatorsV1Request): Promise<AxiosResponse<managedClientsTypes.Managedclienthealthindicators, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getManagedClientHealthIndicatorsV1(requestParameters) as Promise<AxiosResponse<managedClientsTypes.Managedclienthealthindicators, any>>;
}
async getManagedClientStatusV1(requestParameters: managedClientsTypes.ManagedClientsApiGetManagedClientStatusV1Request): Promise<AxiosResponse<managedClientsTypes.Managedclientstatus, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getManagedClientStatusV1(requestParameters) as Promise<AxiosResponse<managedClientsTypes.Managedclientstatus, any>>;
}
async getManagedClientsV1(requestParameters: managedClientsTypes.ManagedClientsApiGetManagedClientsV1Request = {}): Promise<AxiosResponse<Array<managedClientsTypes.Managedclient>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getManagedClientsV1(requestParameters) as Promise<AxiosResponse<Array<managedClientsTypes.Managedclient>, any>>;
}
async getManagedClientV1(requestParameters: managedClientsTypes.ManagedClientsApiGetManagedClientV1Request): Promise<AxiosResponse<managedClientsTypes.Managedclient, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getManagedClientV1(requestParameters) as Promise<AxiosResponse<managedClientsTypes.Managedclient, any>>;
}
async getManagedClustersV1(requestParameters: managedClustersTypes.ManagedClustersApiGetManagedClustersV1Request = {}): Promise<AxiosResponse<Array<managedClustersTypes.Managedcluster>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getManagedClustersV1(requestParameters) as Promise<AxiosResponse<Array<managedClustersTypes.Managedcluster>, any>>;
}
async getManagedClusterTypesV1(requestParameters: managedClusterTypesTypes.ManagedClusterTypesApiGetManagedClusterTypesV1Request = {}): Promise<AxiosResponse<Array<managedClusterTypesTypes.Managedclustertype>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getManagedClusterTypesV1(requestParameters) as Promise<AxiosResponse<Array<managedClusterTypesTypes.Managedclustertype>, any>>;
}
async getManagedClusterTypeV1(requestParameters: managedClusterTypesTypes.ManagedClusterTypesApiGetManagedClusterTypeV1Request): Promise<AxiosResponse<managedClusterTypesTypes.Managedclustertype, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getManagedClusterTypeV1(requestParameters) as Promise<AxiosResponse<managedClusterTypesTypes.Managedclustertype, any>>;
}
async getManagedClusterV1(requestParameters: managedClustersTypes.ManagedClustersApiGetManagedClusterV1Request): Promise<AxiosResponse<managedClustersTypes.Managedcluster, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getManagedClusterV1(requestParameters) as Promise<AxiosResponse<managedClustersTypes.Managedcluster, any>>;
}
async getManualDiscoverApplicationsCsvTemplateV1(): Promise<AxiosResponse<applicationDiscoveryTypes.Manualdiscoverapplicationstemplate, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getManualDiscoverApplicationsCsvTemplateV1() as Promise<AxiosResponse<applicationDiscoveryTypes.Manualdiscoverapplicationstemplate, any>>;
}
async getMFADuoConfigV1(): Promise<AxiosResponse<mfaConfigurationTypes.Mfaduoconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMFADuoConfigV1() as Promise<AxiosResponse<mfaConfigurationTypes.Mfaduoconfig, any>>;
}
async getMFAKbaConfigV1(requestParameters: mfaConfigurationTypes.MFAConfigurationApiGetMFAKbaConfigV1Request = {}): Promise<AxiosResponse<Array<mfaConfigurationTypes.Kbaquestion>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMFAKbaConfigV1(requestParameters) as Promise<AxiosResponse<Array<mfaConfigurationTypes.Kbaquestion>, any>>;
}
async getMFAOktaConfigV1(): Promise<AxiosResponse<mfaConfigurationTypes.Mfaoktaconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMFAOktaConfigV1() as Promise<AxiosResponse<mfaConfigurationTypes.Mfaoktaconfig, any>>;
}
async getMultiHostIntegrationsListV1(requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiGetMultiHostIntegrationsListV1Request = {}): Promise<AxiosResponse<Array<multiHostIntegrationTypes.Multihostintegrations>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMultiHostIntegrationsListV1(requestParameters) as Promise<AxiosResponse<Array<multiHostIntegrationTypes.Multihostintegrations>, any>>;
}
async getMultiHostIntegrationsV1(requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiGetMultiHostIntegrationsV1Request): Promise<AxiosResponse<multiHostIntegrationTypes.Multihostintegrations, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMultiHostIntegrationsV1(requestParameters) as Promise<AxiosResponse<multiHostIntegrationTypes.Multihostintegrations, any>>;
}
async getMultihostIntegrationTypesV1(): Promise<AxiosResponse<Array<multiHostIntegrationTypes.Multihostintegrationtemplatetype>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMultihostIntegrationTypesV1() as Promise<AxiosResponse<Array<multiHostIntegrationTypes.Multihostintegrationtemplatetype>, any>>;
}
async getMultiHostSourceCreationErrorsV1(requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiGetMultiHostSourceCreationErrorsV1Request): Promise<AxiosResponse<Array<multiHostIntegrationTypes.Sourcecreationerrors>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getMultiHostSourceCreationErrorsV1(requestParameters) as Promise<AxiosResponse<Array<multiHostIntegrationTypes.Sourcecreationerrors>, any>>;
}
async getNativeChangeDetectionConfigV1(requestParameters: sourcesTypes.SourcesApiGetNativeChangeDetectionConfigV1Request): Promise<AxiosResponse<sourcesTypes.Nativechangedetectionconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNativeChangeDetectionConfigV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Nativechangedetectionconfig, any>>;
}
async getNonEmployeeApprovalSummaryV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeApprovalSummaryV1Request): Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeeapprovalsummary, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNonEmployeeApprovalSummaryV1(requestParameters) as Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeeapprovalsummary, any>>;
}
async getNonEmployeeApprovalV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeApprovalV1Request): Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeeapprovalitemdetail, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNonEmployeeApprovalV1(requestParameters) as Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeeapprovalitemdetail, any>>;
}
async getNonEmployeeBulkUploadStatusV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeBulkUploadStatusV1Request): Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeebulkuploadstatus, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNonEmployeeBulkUploadStatusV1(requestParameters) as Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeebulkuploadstatus, any>>;
}
async getNonEmployeeRecordV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeRecordV1Request): Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeerecord, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNonEmployeeRecordV1(requestParameters) as Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeerecord, any>>;
}
async getNonEmployeeRequestSummaryV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeRequestSummaryV1Request): Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeerequestsummary, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNonEmployeeRequestSummaryV1(requestParameters) as Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeerequestsummary, any>>;
}
async getNonEmployeeRequestV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeRequestV1Request): Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeerequest, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNonEmployeeRequestV1(requestParameters) as Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeerequest, any>>;
}
async getNonEmployeeSchemaAttributeV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeSchemaAttributeV1Request): Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeeschemaattribute, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNonEmployeeSchemaAttributeV1(requestParameters) as Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeeschemaattribute, any>>;
}
async getNonEmployeeSourceSchemaAttributesV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeSourceSchemaAttributesV1Request): Promise<AxiosResponse<Array<nonEmployeeLifecycleManagementTypes.Nonemployeeschemaattribute>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNonEmployeeSourceSchemaAttributesV1(requestParameters) as Promise<AxiosResponse<Array<nonEmployeeLifecycleManagementTypes.Nonemployeeschemaattribute>, any>>;
}
async getNonEmployeeSourceV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeSourceV1Request): Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeesource, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNonEmployeeSourceV1(requestParameters) as Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeesource, any>>;
}
async getNotificationPreferencesV1(requestParameters: notificationsTypes.NotificationsApiGetNotificationPreferencesV1Request): Promise<AxiosResponse<notificationsTypes.Preferencesdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNotificationPreferencesV1(requestParameters) as Promise<AxiosResponse<notificationsTypes.Preferencesdto, any>>;
}
async getNotificationsTemplateContextV1(): Promise<AxiosResponse<notificationsTypes.Notificationtemplatecontext, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNotificationsTemplateContextV1() as Promise<AxiosResponse<notificationsTypes.Notificationtemplatecontext, any>>;
}
async getNotificationTemplateV1(requestParameters: notificationsTypes.NotificationsApiGetNotificationTemplateV1Request): Promise<AxiosResponse<notificationsTypes.Templatedto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNotificationTemplateV1(requestParameters) as Promise<AxiosResponse<notificationsTypes.Templatedto, any>>;
}
async getNotificationTemplateVariablesV1(requestParameters: notificationsTypes.NotificationsApiGetNotificationTemplateVariablesV1Request): Promise<AxiosResponse<notificationsTypes.Templatevariablesdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getNotificationTemplateVariablesV1(requestParameters) as Promise<AxiosResponse<notificationsTypes.Templatevariablesdto, any>>;
}
async getOauthClientV1(requestParameters: oauthClientsTypes.OAuthClientsApiGetOauthClientV1Request): Promise<AxiosResponse<oauthClientsTypes.Getoauthclientresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getOauthClientV1(requestParameters) as Promise<AxiosResponse<oauthClientsTypes.Getoauthclientresponse, any>>;
}
async getObjectMappingsV1(requestParameters: configurationHubTypes.ConfigurationHubApiGetObjectMappingsV1Request): Promise<AxiosResponse<Array<configurationHubTypes.Objectmappingresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getObjectMappingsV1(requestParameters) as Promise<AxiosResponse<Array<configurationHubTypes.Objectmappingresponse>, any>>;
}
async getOngoingRolePropagationV1(requestParameters: rolePropagationTypes.RolePropagationApiGetOngoingRolePropagationV1Request = {}): Promise<AxiosResponse<rolePropagationTypes.RolePropagationOngoingResponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getOngoingRolePropagationV1(requestParameters) as Promise<AxiosResponse<rolePropagationTypes.RolePropagationOngoingResponse, any>>;
}
async getOrgConfigV1(): Promise<AxiosResponse<orgConfigTypes.Orgconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getOrgConfigV1() as Promise<AxiosResponse<orgConfigTypes.Orgconfig, any>>;
}
async getOutlierContributingFeatureSummaryV1(requestParameters: iaiOutliersTypes.IAIOutliersApiGetOutlierContributingFeatureSummaryV1Request): Promise<AxiosResponse<iaiOutliersTypes.Outlierfeaturesummary, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getOutlierContributingFeatureSummaryV1(requestParameters) as Promise<AxiosResponse<iaiOutliersTypes.Outlierfeaturesummary, any>>;
}
async getOwnersV1(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiGetOwnersV1Request): Promise<AxiosResponse<Array<dataAccessSecurityTypes.Dataownermodel>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getOwnersV1(requestParameters) as Promise<AxiosResponse<Array<dataAccessSecurityTypes.Dataownermodel>, any>>;
}
async getPageContentByIdNerm(requestParameters: sdk.PageContentsNERMApiGetPageContentByIdRequest): Promise<AxiosResponse<sdk.GetPageContents200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPageContentByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.GetPageContents200ResponseNERM, any>>;
}
async getPageContentByUidNerm(requestParameters: sdk.PageContentsNERMApiGetPageContentByUidRequest = {}): Promise<AxiosResponse<sdk.GetPageContents200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPageContentByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.GetPageContents200ResponseNERM, any>>;
}
async getPageContentsNerm(): Promise<AxiosResponse<sdk.GetPageContents200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPageContentsNerm() as Promise<AxiosResponse<sdk.GetPageContents200ResponseNERM, any>>;
}
async getPageContentTranslationByIdNerm(requestParameters: sdk.PageContentTranslationsNERMApiGetPageContentTranslationByIdRequest): Promise<AxiosResponse<sdk.GetPageContentTranslation200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPageContentTranslationByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.GetPageContentTranslation200ResponseNERM, any>>;
}
async getPageContentTranslationByUidNerm(requestParameters: sdk.PageContentTranslationsNERMApiGetPageContentTranslationByUidRequest = {}): Promise<AxiosResponse<sdk.GetPageContentTranslation200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPageContentTranslationByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.GetPageContentTranslation200ResponseNERM, any>>;
}
async getPageContentTranslationNerm(): Promise<AxiosResponse<sdk.GetPageContentTranslation200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPageContentTranslationNerm() as Promise<AxiosResponse<sdk.GetPageContentTranslation200ResponseNERM, any>>;
}
async getPageElementByIdNerm(requestParameters: sdk.PageElementsNERMApiGetPageElementByIdRequest): Promise<AxiosResponse<sdk.GetPageElements200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPageElementByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.GetPageElements200ResponseNERM, any>>;
}
async getPageElementByUidNerm(requestParameters: sdk.PageElementsNERMApiGetPageElementByUidRequest = {}): Promise<AxiosResponse<sdk.GetPageElements200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPageElementByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.GetPageElements200ResponseNERM, any>>;
}
async getPageElementsNerm(): Promise<AxiosResponse<sdk.GetPageElements200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPageElementsNerm() as Promise<AxiosResponse<sdk.GetPageElements200ResponseNERM, any>>;
}
async getParameterReferencesV1(requestParameters: parameterStorageTypes.ParameterStorageApiGetParameterReferencesV1Request): Promise<AxiosResponse<Array<parameterStorageTypes.Parameterstoragereference>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getParameterReferencesV1(requestParameters) as Promise<AxiosResponse<Array<parameterStorageTypes.Parameterstoragereference>, any>>;
}
async getParameterStorageSpecificationV1(requestParameters: parameterStorageTypes.ParameterStorageApiGetParameterStorageSpecificationV1Request = {}): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getParameterStorageSpecificationV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async getParameterV1(requestParameters: parameterStorageTypes.ParameterStorageApiGetParameterV1Request): Promise<AxiosResponse<parameterStorageTypes.Parameterstorageparameter, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getParameterV1(requestParameters) as Promise<AxiosResponse<parameterStorageTypes.Parameterstorageparameter, any>>;
}
async getPasswordChangeStatusV1(requestParameters: passwordManagementTypes.PasswordManagementApiGetPasswordChangeStatusV1Request): Promise<AxiosResponse<passwordManagementTypes.Passwordstatus, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPasswordChangeStatusV1(requestParameters) as Promise<AxiosResponse<passwordManagementTypes.Passwordstatus, any>>;
}
async getPasswordDictionaryV1(): Promise<AxiosResponse<string, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPasswordDictionaryV1() as Promise<AxiosResponse<string, any>>;
}
async getPasswordOrgConfigV1(): Promise<AxiosResponse<passwordConfigurationTypes.Passwordorgconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPasswordOrgConfigV1() as Promise<AxiosResponse<passwordConfigurationTypes.Passwordorgconfig, any>>;
}
async getPasswordPolicyByIdV1(requestParameters: passwordPoliciesTypes.PasswordPoliciesApiGetPasswordPolicyByIdV1Request): Promise<AxiosResponse<passwordPoliciesTypes.Passwordpolicyv3dto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPasswordPolicyByIdV1(requestParameters) as Promise<AxiosResponse<passwordPoliciesTypes.Passwordpolicyv3dto, any>>;
}
async getPasswordSyncGroupsV1(requestParameters: passwordSyncGroupsTypes.PasswordSyncGroupsApiGetPasswordSyncGroupsV1Request = {}): Promise<AxiosResponse<Array<passwordSyncGroupsTypes.Passwordsyncgroup>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPasswordSyncGroupsV1(requestParameters) as Promise<AxiosResponse<Array<passwordSyncGroupsTypes.Passwordsyncgroup>, any>>;
}
async getPasswordSyncGroupV1(requestParameters: passwordSyncGroupsTypes.PasswordSyncGroupsApiGetPasswordSyncGroupV1Request): Promise<AxiosResponse<passwordSyncGroupsTypes.Passwordsyncgroup, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPasswordSyncGroupV1(requestParameters) as Promise<AxiosResponse<passwordSyncGroupsTypes.Passwordsyncgroup, any>>;
}
async getPeerGroupOutliersContributingFeaturesV1(requestParameters: iaiOutliersTypes.IAIOutliersApiGetPeerGroupOutliersContributingFeaturesV1Request): Promise<AxiosResponse<Array<iaiOutliersTypes.Outliercontributingfeature>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPeerGroupOutliersContributingFeaturesV1(requestParameters) as Promise<AxiosResponse<Array<iaiOutliersTypes.Outliercontributingfeature>, any>>;
}
async getPeerGroupOutliersV1(requestParameters: iaiPeerGroupStrategiesTypes.IAIPeerGroupStrategiesApiGetPeerGroupOutliersV1Request): Promise<AxiosResponse<Array<iaiPeerGroupStrategiesTypes.Peergroupmember>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPeerGroupOutliersV1(requestParameters) as Promise<AxiosResponse<Array<iaiPeerGroupStrategiesTypes.Peergroupmember>, any>>;
}
async getPendingCertificationTasksV1(requestParameters: certificationsTypes.CertificationsApiGetPendingCertificationTasksV1Request = {}): Promise<AxiosResponse<Array<certificationsTypes.Certificationtask>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPendingCertificationTasksV1(requestParameters) as Promise<AxiosResponse<Array<certificationsTypes.Certificationtask>, any>>;
}
async getPotentialRoleApplicationsV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetPotentialRoleApplicationsV1Request): Promise<AxiosResponse<Array<iaiRoleMiningTypes.Roleminingpotentialroleapplication>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPotentialRoleApplicationsV1(requestParameters) as Promise<AxiosResponse<Array<iaiRoleMiningTypes.Roleminingpotentialroleapplication>, any>>;
}
async getPotentialRoleEntitlementsV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetPotentialRoleEntitlementsV1Request): Promise<AxiosResponse<Array<iaiRoleMiningTypes.Roleminingpotentialroleentitlements>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPotentialRoleEntitlementsV1(requestParameters) as Promise<AxiosResponse<Array<iaiRoleMiningTypes.Roleminingpotentialroleentitlements>, any>>;
}
async getPotentialRoleSourceIdentityUsageV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetPotentialRoleSourceIdentityUsageV1Request): Promise<AxiosResponse<Array<iaiRoleMiningTypes.Roleminingpotentialrolesourceusage>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPotentialRoleSourceIdentityUsageV1(requestParameters) as Promise<AxiosResponse<Array<iaiRoleMiningTypes.Roleminingpotentialrolesourceusage>, any>>;
}
async getPotentialRoleSummariesV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetPotentialRoleSummariesV1Request): Promise<AxiosResponse<Array<iaiRoleMiningTypes.Roleminingpotentialrolesummary>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPotentialRoleSummariesV1(requestParameters) as Promise<AxiosResponse<Array<iaiRoleMiningTypes.Roleminingpotentialrolesummary>, any>>;
}
async getPotentialRoleV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetPotentialRoleV1Request): Promise<AxiosResponse<iaiRoleMiningTypes.Roleminingpotentialrole, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPotentialRoleV1(requestParameters) as Promise<AxiosResponse<iaiRoleMiningTypes.Roleminingpotentialrole, any>>;
}
async getPrivilegeCriteriaConfigV1(requestParameters: privilegeCriteriaConfigurationTypes.PrivilegeCriteriaConfigurationApiGetPrivilegeCriteriaConfigV1Request): Promise<AxiosResponse<privilegeCriteriaConfigurationTypes.Privilegecriteriaconfigdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPrivilegeCriteriaConfigV1(requestParameters) as Promise<AxiosResponse<privilegeCriteriaConfigurationTypes.Privilegecriteriaconfigdto, any>>;
}
async getPrivilegeCriteriaV1(requestParameters: privilegeCriteriaTypes.PrivilegeCriteriaApiGetPrivilegeCriteriaV1Request): Promise<AxiosResponse<privilegeCriteriaTypes.Privilegecriteriadto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPrivilegeCriteriaV1(requestParameters) as Promise<AxiosResponse<privilegeCriteriaTypes.Privilegecriteriadto, any>>;
}
async getProfileAvatarNerm(requestParameters: sdk.ProfilesNERMApiGetProfileAvatarRequest): Promise<AxiosResponse<sdk.UrlNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getProfileAvatarNerm(requestParameters) as Promise<AxiosResponse<sdk.UrlNERM, any>>;
}
async getProfileByIdNerm(requestParameters: sdk.ProfilesNERMApiGetProfileByIdRequest): Promise<AxiosResponse<sdk.GetSingleSchemaMappedProfile200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getProfileByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.GetSingleSchemaMappedProfile200ResponseNERM, any>>;
}
async getProfileConfigListV1(requestParameters: authProfileTypes.AuthProfileApiGetProfileConfigListV1Request = {}): Promise<AxiosResponse<Array<authProfileTypes.Authprofilesummary>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getProfileConfigListV1(requestParameters) as Promise<AxiosResponse<Array<authProfileTypes.Authprofilesummary>, any>>;
}
async getProfileConfigV1(requestParameters: authProfileTypes.AuthProfileApiGetProfileConfigV1Request): Promise<AxiosResponse<authProfileTypes.Authprofile, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getProfileConfigV1(requestParameters) as Promise<AxiosResponse<authProfileTypes.Authprofile, any>>;
}
async getProfilesNerm(requestParameters: sdk.ProfilesNERMApiGetProfilesRequest = {}): Promise<AxiosResponse<sdk.GetSchemaMappedProfilesCollection200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getProfilesNerm(requestParameters) as Promise<AxiosResponse<sdk.GetSchemaMappedProfilesCollection200ResponseNERM, any>>;
}
async getProfileTypeAttributesNerm(requestParameters: sdk.SyncedAttributesNERMApiGetProfileTypeAttributesRequest = {}): Promise<AxiosResponse<sdk.GetProfileTypeAttributes200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getProfileTypeAttributesNerm(requestParameters) as Promise<AxiosResponse<sdk.GetProfileTypeAttributes200ResponseNERM, any>>;
}
async getProfileTypeByIdNerm(requestParameters: sdk.ProfileTypesNERMApiGetProfileTypeByIdRequest): Promise<AxiosResponse<sdk.SubmitProfileType200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getProfileTypeByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitProfileType200ResponseNERM, any>>;
}
async getProfileTypeByUidNerm(requestParameters: sdk.ProfileTypesNERMApiGetProfileTypeByUidRequest = {}): Promise<AxiosResponse<sdk.SubmitProfileType200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getProfileTypeByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitProfileType200ResponseNERM, any>>;
}
async getProfileTypesNerm(requestParameters: sdk.ProfileTypesNERMApiGetProfileTypesRequest = {}): Promise<AxiosResponse<sdk.GetProfileTypes200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getProfileTypesNerm(requestParameters) as Promise<AxiosResponse<sdk.GetProfileTypes200ResponseNERM, any>>;
}
async getProfileUploadNerm(requestParameters: sdk.ProfilesNERMApiGetProfileUploadRequest): Promise<AxiosResponse<sdk.UrlNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getProfileUploadNerm(requestParameters) as Promise<AxiosResponse<sdk.UrlNERM, any>>;
}
async getProvisioningPolicyV1(requestParameters: sourcesTypes.SourcesApiGetProvisioningPolicyV1Request): Promise<AxiosResponse<sourcesTypes.Provisioningpolicydto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getProvisioningPolicyV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Provisioningpolicydto, any>>;
}
async getProvisioningPolicyV2(requestParameters: sourcesTypes.SourcesApiGetProvisioningPolicyV2Request): Promise<AxiosResponse<sourcesTypes.Provisioningpolicydtov2, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getProvisioningPolicyV2(requestParameters) as Promise<AxiosResponse<sourcesTypes.Provisioningpolicydtov2, any>>;
}
async getPublicIdentitiesV1(requestParameters: publicIdentitiesTypes.PublicIdentitiesApiGetPublicIdentitiesV1Request = {}): Promise<AxiosResponse<Array<publicIdentitiesTypes.Publicidentity>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPublicIdentitiesV1(requestParameters) as Promise<AxiosResponse<Array<publicIdentitiesTypes.Publicidentity>, any>>;
}
async getPublicIdentityConfigV1(): Promise<AxiosResponse<publicIdentitiesConfigTypes.Publicidentityconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getPublicIdentityConfigV1() as Promise<AxiosResponse<publicIdentitiesConfigTypes.Publicidentityconfig, any>>;
}
async getReassignmentConfigTypesV1(requestParameters: workReassignmentTypes.WorkReassignmentApiGetReassignmentConfigTypesV1Request = {}): Promise<AxiosResponse<Array<workReassignmentTypes.Configtype>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getReassignmentConfigTypesV1(requestParameters) as Promise<AxiosResponse<Array<workReassignmentTypes.Configtype>, any>>;
}
async getReassignmentConfigurationV1(requestParameters: workReassignmentTypes.WorkReassignmentApiGetReassignmentConfigurationV1Request): Promise<AxiosResponse<workReassignmentTypes.Configurationresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getReassignmentConfigurationV1(requestParameters) as Promise<AxiosResponse<workReassignmentTypes.Configurationresponse, any>>;
}
async getRecommendationsConfigV1(requestParameters: iaiRecommendationsTypes.IAIRecommendationsApiGetRecommendationsConfigV1Request = {}): Promise<AxiosResponse<iaiRecommendationsTypes.Recommendationconfigdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRecommendationsConfigV1(requestParameters) as Promise<AxiosResponse<iaiRecommendationsTypes.Recommendationconfigdto, any>>;
}
async getRecommendationsV1(requestParameters: iaiRecommendationsTypes.IAIRecommendationsApiGetRecommendationsV1Request): Promise<AxiosResponse<iaiRecommendationsTypes.Recommendationresponsedto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRecommendationsV1(requestParameters) as Promise<AxiosResponse<iaiRecommendationsTypes.Recommendationresponsedto, any>>;
}
async getReportResultV1(requestParameters: reportsDataExtractionTypes.ReportsDataExtractionApiGetReportResultV1Request): Promise<AxiosResponse<reportsDataExtractionTypes.Reportresults, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getReportResultV1(requestParameters) as Promise<AxiosResponse<reportsDataExtractionTypes.Reportresults, any>>;
}
async getReportV1(requestParameters: reportsDataExtractionTypes.ReportsDataExtractionApiGetReportV1Request): Promise<AxiosResponse<File, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getReportV1(requestParameters) as Promise<AxiosResponse<File, any>>;
}
async getRiskLevelNerm(requestParameters: sdk.RiskLevelsNERMApiGetRiskLevelRequest): Promise<AxiosResponse<sdk.GetRiskLevel200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRiskLevelNerm(requestParameters) as Promise<AxiosResponse<sdk.GetRiskLevel200ResponseNERM, any>>;
}
async getRiskLevelsNerm(requestParameters: sdk.RiskLevelsNERMApiGetRiskLevelsRequest = {}): Promise<AxiosResponse<sdk.GetRiskLevels200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRiskLevelsNerm(requestParameters) as Promise<AxiosResponse<sdk.GetRiskLevels200ResponseNERM, any>>;
}
async getRiskScoreNerm(requestParameters: sdk.RiskScoresNERMApiGetRiskScoreRequest): Promise<AxiosResponse<sdk.GetRiskScore200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRiskScoreNerm(requestParameters) as Promise<AxiosResponse<sdk.GetRiskScore200ResponseNERM, any>>;
}
async getRiskScoresNerm(requestParameters: sdk.RiskScoresNERMApiGetRiskScoresRequest = {}): Promise<AxiosResponse<sdk.GetRiskScores200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRiskScoresNerm(requestParameters) as Promise<AxiosResponse<sdk.GetRiskScores200ResponseNERM, any>>;
}
async getRoleAssignedIdentitiesV1(requestParameters: rolesTypes.RolesApiGetRoleAssignedIdentitiesV1Request): Promise<AxiosResponse<Array<rolesTypes.Roleidentity>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleAssignedIdentitiesV1(requestParameters) as Promise<AxiosResponse<Array<rolesTypes.Roleidentity>, any>>;
}
async getRoleAssignmentsV1(requestParameters: identitiesTypes.IdentitiesApiGetRoleAssignmentsV1Request): Promise<AxiosResponse<Array<identitiesTypes.GetRoleAssignmentsV1200ResponseInner>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleAssignmentsV1(requestParameters) as Promise<AxiosResponse<Array<identitiesTypes.GetRoleAssignmentsV1200ResponseInner>, any>>;
}
async getRoleAssignmentV1(requestParameters: identitiesTypes.IdentitiesApiGetRoleAssignmentV1Request): Promise<AxiosResponse<identitiesTypes.Roleassignmentdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleAssignmentV1(requestParameters) as Promise<AxiosResponse<identitiesTypes.Roleassignmentdto, any>>;
}
async getRoleEntitlementsV1(requestParameters: rolesTypes.RolesApiGetRoleEntitlementsV1Request): Promise<AxiosResponse<Array<rolesTypes.Entitlement>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleEntitlementsV1(requestParameters) as Promise<AxiosResponse<Array<rolesTypes.Entitlement>, any>>;
}
async getRoleInsightsCurrentEntitlementsV1(requestParameters: roleInsightsTypes.RoleInsightsApiGetRoleInsightsCurrentEntitlementsV1Request): Promise<AxiosResponse<Array<roleInsightsTypes.Roleinsightsentitlement>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleInsightsCurrentEntitlementsV1(requestParameters) as Promise<AxiosResponse<Array<roleInsightsTypes.Roleinsightsentitlement>, any>>;
}
async getRoleInsightsEntitlementsChangesV1(requestParameters: roleInsightsTypes.RoleInsightsApiGetRoleInsightsEntitlementsChangesV1Request): Promise<AxiosResponse<Array<roleInsightsTypes.Roleinsightsentitlementchanges>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleInsightsEntitlementsChangesV1(requestParameters) as Promise<AxiosResponse<Array<roleInsightsTypes.Roleinsightsentitlementchanges>, any>>;
}
async getRoleInsightsRequestsV1(requestParameters: roleInsightsTypes.RoleInsightsApiGetRoleInsightsRequestsV1Request): Promise<AxiosResponse<roleInsightsTypes.Roleinsightsresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleInsightsRequestsV1(requestParameters) as Promise<AxiosResponse<roleInsightsTypes.Roleinsightsresponse, any>>;
}
async getRoleInsightsSummaryV1(requestParameters: roleInsightsTypes.RoleInsightsApiGetRoleInsightsSummaryV1Request = {}): Promise<AxiosResponse<roleInsightsTypes.Roleinsightssummary, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleInsightsSummaryV1(requestParameters) as Promise<AxiosResponse<roleInsightsTypes.Roleinsightssummary, any>>;
}
async getRoleInsightsV1(requestParameters: roleInsightsTypes.RoleInsightsApiGetRoleInsightsV1Request = {}): Promise<AxiosResponse<Array<roleInsightsTypes.Roleinsight>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleInsightsV1(requestParameters) as Promise<AxiosResponse<Array<roleInsightsTypes.Roleinsight>, any>>;
}
async getRoleInsightV1(requestParameters: roleInsightsTypes.RoleInsightsApiGetRoleInsightV1Request): Promise<AxiosResponse<roleInsightsTypes.Roleinsight, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleInsightV1(requestParameters) as Promise<AxiosResponse<roleInsightsTypes.Roleinsight, any>>;
}
async getRoleMiningPotentialRoleV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetRoleMiningPotentialRoleV1Request): Promise<AxiosResponse<iaiRoleMiningTypes.Roleminingpotentialrole, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleMiningPotentialRoleV1(requestParameters) as Promise<AxiosResponse<iaiRoleMiningTypes.Roleminingpotentialrole, any>>;
}
async getRoleMiningSessionStatusV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetRoleMiningSessionStatusV1Request): Promise<AxiosResponse<iaiRoleMiningTypes.Roleminingsessionstatus, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleMiningSessionStatusV1(requestParameters) as Promise<AxiosResponse<iaiRoleMiningTypes.Roleminingsessionstatus, any>>;
}
async getRoleMiningSessionsV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetRoleMiningSessionsV1Request = {}): Promise<AxiosResponse<Array<iaiRoleMiningTypes.Roleminingsessiondto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleMiningSessionsV1(requestParameters) as Promise<AxiosResponse<Array<iaiRoleMiningTypes.Roleminingsessiondto>, any>>;
}
async getRoleMiningSessionV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetRoleMiningSessionV1Request): Promise<AxiosResponse<iaiRoleMiningTypes.Roleminingsessionresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleMiningSessionV1(requestParameters) as Promise<AxiosResponse<iaiRoleMiningTypes.Roleminingsessionresponse, any>>;
}
async getRoleNerm(requestParameters: sdk.RolesNERMApiGetRoleRequest): Promise<AxiosResponse<sdk.SubmitRole200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitRole200ResponseNERM, any>>;
}
async getRoleProfileNerm(requestParameters: sdk.RoleProfilesNERMApiGetRoleProfileRequest): Promise<AxiosResponse<sdk.SubmitRoleProfile200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleProfileNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitRoleProfile200ResponseNERM, any>>;
}
async getRoleProfilesNerm(requestParameters: sdk.RoleProfilesNERMApiGetRoleProfilesRequest = {}): Promise<AxiosResponse<sdk.GetRoleProfiles200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleProfilesNerm(requestParameters) as Promise<AxiosResponse<sdk.GetRoleProfiles200ResponseNERM, any>>;
}
async getRolePropagationConfigV1(requestParameters: rolePropagationTypes.RolePropagationApiGetRolePropagationConfigV1Request = {}): Promise<AxiosResponse<rolePropagationTypes.RolePropagationConfigResponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRolePropagationConfigV1(requestParameters) as Promise<AxiosResponse<rolePropagationTypes.RolePropagationConfigResponse, any>>;
}
async getRolePropagationStatusV1(requestParameters: rolePropagationTypes.RolePropagationApiGetRolePropagationStatusV1Request): Promise<AxiosResponse<rolePropagationTypes.RolePropagationStatusResponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRolePropagationStatusV1(requestParameters) as Promise<AxiosResponse<rolePropagationTypes.RolePropagationStatusResponse, any>>;
}
async getRolesNerm(requestParameters: sdk.RolesNERMApiGetRolesRequest = {}): Promise<AxiosResponse<sdk.GetRoles200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRolesNerm(requestParameters) as Promise<AxiosResponse<sdk.GetRoles200ResponseNERM, any>>;
}
async getRoleV1(requestParameters: rolesTypes.RolesApiGetRoleV1Request): Promise<AxiosResponse<rolesTypes.Role, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getRoleV1(requestParameters) as Promise<AxiosResponse<rolesTypes.Role, any>>;
}
async getSavedPotentialRolesV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetSavedPotentialRolesV1Request = {}): Promise<AxiosResponse<Array<iaiRoleMiningTypes.Roleminingsessiondraftroledto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSavedPotentialRolesV1(requestParameters) as Promise<AxiosResponse<Array<iaiRoleMiningTypes.Roleminingsessiondraftroledto>, any>>;
}
async getSavedSearchV1(requestParameters: savedSearchTypes.SavedSearchApiGetSavedSearchV1Request): Promise<AxiosResponse<savedSearchTypes.Savedsearch, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSavedSearchV1(requestParameters) as Promise<AxiosResponse<savedSearchTypes.Savedsearch, any>>;
}
async getScheduledSearchV1(requestParameters: scheduledSearchTypes.ScheduledSearchApiGetScheduledSearchV1Request): Promise<AxiosResponse<scheduledSearchTypes.Scheduledsearch, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getScheduledSearchV1(requestParameters) as Promise<AxiosResponse<scheduledSearchTypes.Scheduledsearch, any>>;
}
async getSchedulesV1(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiGetSchedulesV1Request = {}): Promise<AxiosResponse<Array<dataAccessSecurityTypes.Scheduleinfo>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSchedulesV1(requestParameters) as Promise<AxiosResponse<Array<dataAccessSecurityTypes.Scheduleinfo>, any>>;
}
async getScheduleV1(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiGetScheduleV1Request): Promise<AxiosResponse<dataAccessSecurityTypes.Scheduleinfo, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getScheduleV1(requestParameters) as Promise<AxiosResponse<dataAccessSecurityTypes.Scheduleinfo, any>>;
}
async getSchemaMappedProfilesCollectionNerm(requestParameters: sdk.IscAccountsNERMApiGetSchemaMappedProfilesCollectionRequest = {}): Promise<AxiosResponse<sdk.GetSchemaMappedProfilesCollection200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSchemaMappedProfilesCollectionNerm(requestParameters) as Promise<AxiosResponse<sdk.GetSchemaMappedProfilesCollection200ResponseNERM, any>>;
}
async getSearchAttributeConfigV1(requestParameters: searchAttributeConfigurationTypes.SearchAttributeConfigurationApiGetSearchAttributeConfigV1Request = {}): Promise<AxiosResponse<Array<searchAttributeConfigurationTypes.Searchattributeconfig>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSearchAttributeConfigV1(requestParameters) as Promise<AxiosResponse<Array<searchAttributeConfigurationTypes.Searchattributeconfig>, any>>;
}
async getSedBatchesV1(requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiGetSedBatchesV1Request = {}): Promise<AxiosResponse<Array<suggestedEntitlementDescriptionTypes.Sedbatchrecord>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSedBatchesV1(requestParameters) as Promise<AxiosResponse<Array<suggestedEntitlementDescriptionTypes.Sedbatchrecord>, any>>;
}
async getSedBatchStatsV1(requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiGetSedBatchStatsV1Request): Promise<AxiosResponse<suggestedEntitlementDescriptionTypes.Sedbatchstats, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSedBatchStatsV1(requestParameters) as Promise<AxiosResponse<suggestedEntitlementDescriptionTypes.Sedbatchstats, any>>;
}
async getSegmentV1(requestParameters: segmentsTypes.SegmentsApiGetSegmentV1Request): Promise<AxiosResponse<segmentsTypes.Segment, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSegmentV1(requestParameters) as Promise<AxiosResponse<segmentsTypes.Segment, any>>;
}
async getServiceDeskIntegrationsV1(requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiGetServiceDeskIntegrationsV1Request = {}): Promise<AxiosResponse<Array<serviceDeskIntegrationTypes.Servicedeskintegrationdto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getServiceDeskIntegrationsV1(requestParameters) as Promise<AxiosResponse<Array<serviceDeskIntegrationTypes.Servicedeskintegrationdto>, any>>;
}
async getServiceDeskIntegrationTemplateV1(requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiGetServiceDeskIntegrationTemplateV1Request): Promise<AxiosResponse<serviceDeskIntegrationTypes.Servicedeskintegrationtemplatedto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getServiceDeskIntegrationTemplateV1(requestParameters) as Promise<AxiosResponse<serviceDeskIntegrationTypes.Servicedeskintegrationtemplatedto, any>>;
}
async getServiceDeskIntegrationTypesV1(): Promise<AxiosResponse<Array<serviceDeskIntegrationTypes.Servicedeskintegrationtemplatetype>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getServiceDeskIntegrationTypesV1() as Promise<AxiosResponse<Array<serviceDeskIntegrationTypes.Servicedeskintegrationtemplatetype>, any>>;
}
async getServiceDeskIntegrationV1(requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiGetServiceDeskIntegrationV1Request): Promise<AxiosResponse<serviceDeskIntegrationTypes.Servicedeskintegrationdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getServiceDeskIntegrationV1(requestParameters) as Promise<AxiosResponse<serviceDeskIntegrationTypes.Servicedeskintegrationdto, any>>;
}
async getSIMIntegrationsV1(requestParameters: simIntegrationsTypes.SIMIntegrationsApiGetSIMIntegrationsV1Request = {}): Promise<AxiosResponse<Array<simIntegrationsTypes.Servicedeskintegrationdto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSIMIntegrationsV1(requestParameters) as Promise<AxiosResponse<Array<simIntegrationsTypes.Servicedeskintegrationdto>, any>>;
}
async getSIMIntegrationV1(requestParameters: simIntegrationsTypes.SIMIntegrationsApiGetSIMIntegrationV1Request): Promise<AxiosResponse<simIntegrationsTypes.Servicedeskintegrationdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSIMIntegrationV1(requestParameters) as Promise<AxiosResponse<simIntegrationsTypes.Servicedeskintegrationdto, any>>;
}
async getSingleSchemaMappedProfileNerm(requestParameters: sdk.IscAccountsNERMApiGetSingleSchemaMappedProfileRequest): Promise<AxiosResponse<sdk.GetSingleSchemaMappedProfile200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSingleSchemaMappedProfileNerm(requestParameters) as Promise<AxiosResponse<sdk.GetSingleSchemaMappedProfile200ResponseNERM, any>>;
}
async getSingleSearchAttributeConfigV1(requestParameters: searchAttributeConfigurationTypes.SearchAttributeConfigurationApiGetSingleSearchAttributeConfigV1Request): Promise<AxiosResponse<searchAttributeConfigurationTypes.Searchattributeconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSingleSearchAttributeConfigV1(requestParameters) as Promise<AxiosResponse<searchAttributeConfigurationTypes.Searchattributeconfig, any>>;
}
async getSodAllReportRunStatusV1(): Promise<AxiosResponse<sodPoliciesTypes.Reportresultreference, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSodAllReportRunStatusV1() as Promise<AxiosResponse<sodPoliciesTypes.Reportresultreference, any>>;
}
async getSodPolicyScheduleV1(requestParameters: sodPoliciesTypes.SODPoliciesApiGetSodPolicyScheduleV1Request): Promise<AxiosResponse<sodPoliciesTypes.Sodpolicyschedule, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSodPolicyScheduleV1(requestParameters) as Promise<AxiosResponse<sodPoliciesTypes.Sodpolicyschedule, any>>;
}
async getSodPolicyV1(requestParameters: sodPoliciesTypes.SODPoliciesApiGetSodPolicyV1Request): Promise<AxiosResponse<sodPoliciesTypes.Sodpolicy, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSodPolicyV1(requestParameters) as Promise<AxiosResponse<sodPoliciesTypes.Sodpolicy, any>>;
}
async getSodViolationReportRunStatusV1(requestParameters: sodPoliciesTypes.SODPoliciesApiGetSodViolationReportRunStatusV1Request): Promise<AxiosResponse<sodPoliciesTypes.Reportresultreference, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSodViolationReportRunStatusV1(requestParameters) as Promise<AxiosResponse<sodPoliciesTypes.Reportresultreference, any>>;
}
async getSodViolationReportStatusV1(requestParameters: sodPoliciesTypes.SODPoliciesApiGetSodViolationReportStatusV1Request): Promise<AxiosResponse<sodPoliciesTypes.Reportresultreference, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSodViolationReportStatusV1(requestParameters) as Promise<AxiosResponse<sodPoliciesTypes.Reportresultreference, any>>;
}
async getSourceAppV1(requestParameters: appsTypes.AppsApiGetSourceAppV1Request): Promise<AxiosResponse<appsTypes.Sourceapp, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourceAppV1(requestParameters) as Promise<AxiosResponse<appsTypes.Sourceapp, any>>;
}
async getSourceAttrSyncConfigV1(requestParameters: sourcesTypes.SourcesApiGetSourceAttrSyncConfigV1Request): Promise<AxiosResponse<sourcesTypes.Attrsyncsourceconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourceAttrSyncConfigV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Attrsyncsourceconfig, any>>;
}
async getSourceConfigV1(requestParameters: sourcesTypes.SourcesApiGetSourceConfigV1Request): Promise<AxiosResponse<sourcesTypes.Connectordetail, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourceConfigV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Connectordetail, any>>;
}
async getSourceConnectionsV1(requestParameters: sourcesTypes.SourcesApiGetSourceConnectionsV1Request): Promise<AxiosResponse<sourcesTypes.Sourceconnectionsdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourceConnectionsV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Sourceconnectionsdto, any>>;
}
async getSourceEntitlementRequestConfigV1(requestParameters: sourcesTypes.SourcesApiGetSourceEntitlementRequestConfigV1Request): Promise<AxiosResponse<sourcesTypes.Sourceentitlementrequestconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourceEntitlementRequestConfigV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Sourceentitlementrequestconfig, any>>;
}
async getSourceHealthV1(requestParameters: sourcesTypes.SourcesApiGetSourceHealthV1Request): Promise<AxiosResponse<sourcesTypes.Sourcehealthdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourceHealthV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Sourcehealthdto, any>>;
}
async getSourceSchedulesV1(requestParameters: sourcesTypes.SourcesApiGetSourceSchedulesV1Request): Promise<AxiosResponse<Array<sourcesTypes.Schedule3>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourceSchedulesV1(requestParameters) as Promise<AxiosResponse<Array<sourcesTypes.Schedule3>, any>>;
}
async getSourceScheduleV1(requestParameters: sourcesTypes.SourcesApiGetSourceScheduleV1Request): Promise<AxiosResponse<sourcesTypes.Schedule3, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourceScheduleV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Schedule3, any>>;
}
async getSourceSchemasV1(requestParameters: sourcesTypes.SourcesApiGetSourceSchemasV1Request): Promise<AxiosResponse<Array<sourcesTypes.Schema>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourceSchemasV1(requestParameters) as Promise<AxiosResponse<Array<sourcesTypes.Schema>, any>>;
}
async getSourceSchemaV1(requestParameters: sourcesTypes.SourcesApiGetSourceSchemaV1Request): Promise<AxiosResponse<sourcesTypes.Schema, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourceSchemaV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Schema, any>>;
}
async getSourceSubtypeByIdV1(requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiGetSourceSubtypeByIdV1Request): Promise<AxiosResponse<machineAccountSubtypesTypes.Sourcesubtypewithsource, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourceSubtypeByIdV1(requestParameters) as Promise<AxiosResponse<machineAccountSubtypesTypes.Sourcesubtypewithsource, any>>;
}
async getSourcesWithinMultiHostV1(requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiGetSourcesWithinMultiHostV1Request): Promise<AxiosResponse<Array<multiHostIntegrationTypes.Multihostsources>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourcesWithinMultiHostV1(requestParameters) as Promise<AxiosResponse<Array<multiHostIntegrationTypes.Multihostsources>, any>>;
}
async getSourceV1(requestParameters: sourcesTypes.SourcesApiGetSourceV1Request): Promise<AxiosResponse<sourcesTypes.Source, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSourceV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Source, any>>;
}
async getSpConfigExportStatusV1(requestParameters: spConfigTypes.SPConfigApiGetSpConfigExportStatusV1Request): Promise<AxiosResponse<spConfigTypes.Spconfigexportjobstatus, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSpConfigExportStatusV1(requestParameters) as Promise<AxiosResponse<spConfigTypes.Spconfigexportjobstatus, any>>;
}
async getSpConfigExportV1(requestParameters: spConfigTypes.SPConfigApiGetSpConfigExportV1Request): Promise<AxiosResponse<spConfigTypes.Spconfigexportresults, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSpConfigExportV1(requestParameters) as Promise<AxiosResponse<spConfigTypes.Spconfigexportresults, any>>;
}
async getSpConfigImportStatusV1(requestParameters: spConfigTypes.SPConfigApiGetSpConfigImportStatusV1Request): Promise<AxiosResponse<spConfigTypes.Spconfigimportjobstatus, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSpConfigImportStatusV1(requestParameters) as Promise<AxiosResponse<spConfigTypes.Spconfigimportjobstatus, any>>;
}
async getSpConfigImportV1(requestParameters: spConfigTypes.SPConfigApiGetSpConfigImportV1Request): Promise<AxiosResponse<spConfigTypes.Spconfigimportresults, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSpConfigImportV1(requestParameters) as Promise<AxiosResponse<spConfigTypes.Spconfigimportresults, any>>;
}
async getSSFConfigurationV1(): Promise<AxiosResponse<sharedSignalsFrameworkSsfTypes.Transmittermetadata, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSSFConfigurationV1() as Promise<AxiosResponse<sharedSignalsFrameworkSsfTypes.Transmittermetadata, any>>;
}
async getStatusBySourceIdV1(requestParameters: sourceUsagesTypes.SourceUsagesApiGetStatusBySourceIdV1Request): Promise<AxiosResponse<sourceUsagesTypes.Sourceusagestatus, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getStatusBySourceIdV1(requestParameters) as Promise<AxiosResponse<sourceUsagesTypes.Sourceusagestatus, any>>;
}
async getStatusCheckDetailsV1(): Promise<AxiosResponse<serviceDeskIntegrationTypes.Queuedcheckconfigdetails, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getStatusCheckDetailsV1() as Promise<AxiosResponse<serviceDeskIntegrationTypes.Queuedcheckconfigdetails, any>>;
}
async getStreamStatusV1(requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiGetStreamStatusV1Request): Promise<AxiosResponse<sharedSignalsFrameworkSsfTypes.Streamstatusresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getStreamStatusV1(requestParameters) as Promise<AxiosResponse<sharedSignalsFrameworkSsfTypes.Streamstatusresponse, any>>;
}
async getStreamV1(requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiGetStreamV1Request = {}): Promise<AxiosResponse<sharedSignalsFrameworkSsfTypes.GetStreamV1200Response, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getStreamV1(requestParameters) as Promise<AxiosResponse<sharedSignalsFrameworkSsfTypes.GetStreamV1200Response, any>>;
}
async getSystemRolesNerm(requestParameters: sdk.SystemRolesNERMApiGetSystemRolesRequest = {}): Promise<AxiosResponse<sdk.GetSystemRoles200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getSystemRolesNerm(requestParameters) as Promise<AxiosResponse<sdk.GetSystemRoles200ResponseNERM, any>>;
}
async getTagByIdV1(requestParameters: tagsTypes.TagsApiGetTagByIdV1Request): Promise<AxiosResponse<tagsTypes.Tag2, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getTagByIdV1(requestParameters) as Promise<AxiosResponse<tagsTypes.Tag2, any>>;
}
async getTaggedObjectV1(requestParameters: taggedObjectsTypes.TaggedObjectsApiGetTaggedObjectV1Request): Promise<AxiosResponse<taggedObjectsTypes.Taggedobject, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getTaggedObjectV1(requestParameters) as Promise<AxiosResponse<taggedObjectsTypes.Taggedobject, any>>;
}
async getTaskStatusListV1(requestParameters: taskManagementTypes.TaskManagementApiGetTaskStatusListV1Request = {}): Promise<AxiosResponse<Array<taskManagementTypes.Taskstatus>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getTaskStatusListV1(requestParameters) as Promise<AxiosResponse<Array<taskManagementTypes.Taskstatus>, any>>;
}
async getTaskStatusV1(requestParameters: taskManagementTypes.TaskManagementApiGetTaskStatusV1Request): Promise<AxiosResponse<taskManagementTypes.Taskstatus, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getTaskStatusV1(requestParameters) as Promise<AxiosResponse<taskManagementTypes.Taskstatus, any>>;
}
async getTasksV1(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiGetTasksV1Request = {}): Promise<AxiosResponse<Array<dataAccessSecurityTypes.Taskinfo>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getTasksV1(requestParameters) as Promise<AxiosResponse<Array<dataAccessSecurityTypes.Taskinfo>, any>>;
}
async getTaskV1(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiGetTaskV1Request): Promise<AxiosResponse<dataAccessSecurityTypes.Taskinfo, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getTaskV1(requestParameters) as Promise<AxiosResponse<dataAccessSecurityTypes.Taskinfo, any>>;
}
async getTenantConfigConfigurationV1(requestParameters: workReassignmentTypes.WorkReassignmentApiGetTenantConfigConfigurationV1Request = {}): Promise<AxiosResponse<workReassignmentTypes.Tenantconfigurationresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getTenantConfigConfigurationV1(requestParameters) as Promise<AxiosResponse<workReassignmentTypes.Tenantconfigurationresponse, any>>;
}
async getTenantContextV1(): Promise<AxiosResponse<Array<tenantContextTypes.GetTenantContextV1200ResponseInner>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getTenantContextV1() as Promise<AxiosResponse<Array<tenantContextTypes.GetTenantContextV1200ResponseInner>, any>>;
}
async getTenantUiMetadataV1(requestParameters: uiMetadataTypes.UIMetadataApiGetTenantUiMetadataV1Request = {}): Promise<AxiosResponse<uiMetadataTypes.Tenantuimetadataitemresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getTenantUiMetadataV1(requestParameters) as Promise<AxiosResponse<uiMetadataTypes.Tenantuimetadataitemresponse, any>>;
}
async getTenantV1(): Promise<AxiosResponse<tenantTypes.Tenant, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getTenantV1() as Promise<AxiosResponse<tenantTypes.Tenant, any>>;
}
async getTotalCountV1(requestParameters: apiUsageTypes.ApiUsageApiGetTotalCountV1Request = {}): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getTotalCountV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async getTransformV1(requestParameters: transformsTypes.TransformsApiGetTransformV1Request): Promise<AxiosResponse<transformsTypes.Transformread, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getTransformV1(requestParameters) as Promise<AxiosResponse<transformsTypes.Transformread, any>>;
}
async getUploadedConfigurationV1(requestParameters: configurationHubTypes.ConfigurationHubApiGetUploadedConfigurationV1Request): Promise<AxiosResponse<configurationHubTypes.Backupresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getUploadedConfigurationV1(requestParameters) as Promise<AxiosResponse<configurationHubTypes.Backupresponse, any>>;
}
async getUsagesByAccountIdV1(requestParameters: accountUsagesTypes.AccountUsagesApiGetUsagesByAccountIdV1Request): Promise<AxiosResponse<Array<accountUsagesTypes.Accountusage>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getUsagesByAccountIdV1(requestParameters) as Promise<AxiosResponse<Array<accountUsagesTypes.Accountusage>, any>>;
}
async getUsagesBySourceIdV1(requestParameters: sourceUsagesTypes.SourceUsagesApiGetUsagesBySourceIdV1Request): Promise<AxiosResponse<Array<sourceUsagesTypes.Sourceusage>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getUsagesBySourceIdV1(requestParameters) as Promise<AxiosResponse<Array<sourceUsagesTypes.Sourceusage>, any>>;
}
async getUserAvatarNerm(requestParameters: sdk.UsersNERMApiGetUserAvatarRequest): Promise<AxiosResponse<sdk.UrlNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getUserAvatarNerm(requestParameters) as Promise<AxiosResponse<sdk.UrlNERM, any>>;
}
async getUserLevelV1(requestParameters: customUserLevelsTypes.CustomUserLevelsApiGetUserLevelV1Request): Promise<AxiosResponse<customUserLevelsTypes.Userlevelsummarydto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getUserLevelV1(requestParameters) as Promise<AxiosResponse<customUserLevelsTypes.Userlevelsummarydto, any>>;
}
async getUserManagerNerm(requestParameters: sdk.UserManagersNERMApiGetUserManagerRequest): Promise<AxiosResponse<sdk.SubmitUserManager200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getUserManagerNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitUserManager200ResponseNERM, any>>;
}
async getUserManagersNerm(requestParameters: sdk.UserManagersNERMApiGetUserManagersRequest = {}): Promise<AxiosResponse<sdk.GetUserManagers200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getUserManagersNerm(requestParameters) as Promise<AxiosResponse<sdk.GetUserManagers200ResponseNERM, any>>;
}
async getUserNerm(requestParameters: sdk.UsersNERMApiGetUserRequest): Promise<AxiosResponse<sdk.SubmitUser200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getUserNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitUser200ResponseNERM, any>>;
}
async getUserProfileNerm(requestParameters: sdk.UserProfilesNERMApiGetUserProfileRequest): Promise<AxiosResponse<sdk.SubmitUserProfile200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getUserProfileNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitUserProfile200ResponseNERM, any>>;
}
async getUserProfilesNerm(requestParameters: sdk.UserProfilesNERMApiGetUserProfilesRequest = {}): Promise<AxiosResponse<sdk.GetUserProfiles200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getUserProfilesNerm(requestParameters) as Promise<AxiosResponse<sdk.GetUserProfiles200ResponseNERM, any>>;
}
async getUserRoleNerm(requestParameters: sdk.UserRolesNERMApiGetUserRoleRequest): Promise<AxiosResponse<sdk.SubmitUserRole200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getUserRoleNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitUserRole200ResponseNERM, any>>;
}
async getUserRolesNerm(requestParameters: sdk.UserRolesNERMApiGetUserRolesRequest = {}): Promise<AxiosResponse<sdk.GetUserRoles200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getUserRolesNerm(requestParameters) as Promise<AxiosResponse<sdk.GetUserRoles200ResponseNERM, any>>;
}
async getUsersNerm(requestParameters: sdk.UsersNERMApiGetUsersRequest = {}): Promise<AxiosResponse<sdk.GetUsers200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getUsersNerm(requestParameters) as Promise<AxiosResponse<sdk.GetUsers200ResponseNERM, any>>;
}
async getValidTimeZonesV1(requestParameters: orgConfigTypes.OrgConfigApiGetValidTimeZonesV1Request = {}): Promise<AxiosResponse<Array<string>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getValidTimeZonesV1(requestParameters) as Promise<AxiosResponse<Array<string>, any>>;
}
async getWorkflowActionsNerm(requestParameters: sdk.WorkflowActionsNERMApiGetWorkflowActionsRequest = {}): Promise<AxiosResponse<sdk.GetWorkflowActions200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getWorkflowActionsNerm(requestParameters) as Promise<AxiosResponse<sdk.GetWorkflowActions200ResponseNERM, any>>;
}
async getWorkflowExecutionHistoryV1(requestParameters: workflowsTypes.WorkflowsApiGetWorkflowExecutionHistoryV1Request): Promise<AxiosResponse<Array<workflowsTypes.Workflowexecutionevent>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getWorkflowExecutionHistoryV1(requestParameters) as Promise<AxiosResponse<Array<workflowsTypes.Workflowexecutionevent>, any>>;
}
async getWorkflowExecutionHistoryV2(requestParameters: workflowsTypes.WorkflowsApiGetWorkflowExecutionHistoryV2Request): Promise<AxiosResponse<workflowsTypes.Workflowexecutionhistory, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getWorkflowExecutionHistoryV2(requestParameters) as Promise<AxiosResponse<workflowsTypes.Workflowexecutionhistory, any>>;
}
async getWorkflowExecutionsV1(requestParameters: workflowsTypes.WorkflowsApiGetWorkflowExecutionsV1Request): Promise<AxiosResponse<Array<workflowsTypes.Workflowexecution>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getWorkflowExecutionsV1(requestParameters) as Promise<AxiosResponse<Array<workflowsTypes.Workflowexecution>, any>>;
}
async getWorkflowExecutionV1(requestParameters: workflowsTypes.WorkflowsApiGetWorkflowExecutionV1Request): Promise<AxiosResponse<Array<workflowsTypes.Workflowexecution>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getWorkflowExecutionV1(requestParameters) as Promise<AxiosResponse<Array<workflowsTypes.Workflowexecution>, any>>;
}
async getWorkflowSessionNerm(requestParameters: sdk.WorkflowSessionsNERMApiGetWorkflowSessionRequest): Promise<AxiosResponse<sdk.SubmitWorkflowSession200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getWorkflowSessionNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitWorkflowSession200ResponseNERM, any>>;
}
async getWorkflowSessionsNerm(requestParameters: sdk.WorkflowSessionsNERMApiGetWorkflowSessionsRequest = {}): Promise<AxiosResponse<sdk.GetWorkflowSessions200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getWorkflowSessionsNerm(requestParameters) as Promise<AxiosResponse<sdk.GetWorkflowSessions200ResponseNERM, any>>;
}
async getWorkflowSessionUploadNerm(requestParameters: sdk.WorkflowSessionsNERMApiGetWorkflowSessionUploadRequest): Promise<AxiosResponse<sdk.UrlNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getWorkflowSessionUploadNerm(requestParameters) as Promise<AxiosResponse<sdk.UrlNERM, any>>;
}
async getWorkflowV1(requestParameters: workflowsTypes.WorkflowsApiGetWorkflowV1Request): Promise<AxiosResponse<workflowsTypes.Workflow, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getWorkflowV1(requestParameters) as Promise<AxiosResponse<workflowsTypes.Workflow, any>>;
}
async getWorkgroupV1(requestParameters: governanceGroupsTypes.GovernanceGroupsApiGetWorkgroupV1Request): Promise<AxiosResponse<governanceGroupsTypes.Workgroupdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getWorkgroupV1(requestParameters) as Promise<AxiosResponse<governanceGroupsTypes.Workgroupdto, any>>;
}
async getWorkItemsSummaryV1(requestParameters: workItemsTypes.WorkItemsApiGetWorkItemsSummaryV1Request = {}): Promise<AxiosResponse<workItemsTypes.Workitemssummary, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getWorkItemsSummaryV1(requestParameters) as Promise<AxiosResponse<workItemsTypes.Workitemssummary, any>>;
}
async getWorkItemV1(requestParameters: workItemsTypes.WorkItemsApiGetWorkItemV1Request): Promise<AxiosResponse<workItemsTypes.Workitems, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.getWorkItemV1(requestParameters) as Promise<AxiosResponse<workItemsTypes.Workitems, any>>;
}
async ignoreIdentityOutliersV1(requestParameters: iaiOutliersTypes.IAIOutliersApiIgnoreIdentityOutliersV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.ignoreIdentityOutliersV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async importAccountsSchemaV1(requestParameters: sourcesTypes.SourcesApiImportAccountsSchemaV1Request): Promise<AxiosResponse<sourcesTypes.Schema, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.importAccountsSchemaV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Schema, any>>;
}
async importAccountsV1(requestParameters: sourcesTypes.SourcesApiImportAccountsV1Request): Promise<AxiosResponse<sourcesTypes.Loadaccountstask, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.importAccountsV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Loadaccountstask, any>>;
}
async importConnectorFileV1(requestParameters: sourcesTypes.SourcesApiImportConnectorFileV1Request): Promise<AxiosResponse<sourcesTypes.Source, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.importConnectorFileV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Source, any>>;
}
async importEntitlementsBySourceV1(requestParameters: entitlementsTypes.EntitlementsApiImportEntitlementsBySourceV1Request): Promise<AxiosResponse<entitlementsTypes.Loadentitlementtask, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.importEntitlementsBySourceV1(requestParameters) as Promise<AxiosResponse<entitlementsTypes.Loadentitlementtask, any>>;
}
async importEntitlementsSchemaV1(requestParameters: sourcesTypes.SourcesApiImportEntitlementsSchemaV1Request): Promise<AxiosResponse<sourcesTypes.Schema, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.importEntitlementsSchemaV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Schema, any>>;
}
async importEntitlementsV1(requestParameters: sourcesTypes.SourcesApiImportEntitlementsV1Request): Promise<AxiosResponse<sourcesTypes.Loadentitlementtask, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.importEntitlementsV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Loadentitlementtask, any>>;
}
async importFormDefinitionsV1(requestParameters: customFormsTypes.CustomFormsApiImportFormDefinitionsV1Request = {}): Promise<AxiosResponse<customFormsTypes.ImportFormDefinitionsV1202Response, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.importFormDefinitionsV1(requestParameters) as Promise<AxiosResponse<customFormsTypes.ImportFormDefinitionsV1202Response, any>>;
}
async importIdentityProfilesV1(requestParameters: identityProfilesTypes.IdentityProfilesApiImportIdentityProfilesV1Request): Promise<AxiosResponse<identityProfilesTypes.Objectimportresult, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.importIdentityProfilesV1(requestParameters) as Promise<AxiosResponse<identityProfilesTypes.Objectimportresult, any>>;
}
async importNonEmployeeRecordsInBulkV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiImportNonEmployeeRecordsInBulkV1Request): Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeebulkuploadjob, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.importNonEmployeeRecordsInBulkV1(requestParameters) as Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeebulkuploadjob, any>>;
}
async importSpConfigV1(requestParameters: spConfigTypes.SPConfigApiImportSpConfigV1Request): Promise<AxiosResponse<spConfigTypes.Spconfigjob, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.importSpConfigV1(requestParameters) as Promise<AxiosResponse<spConfigTypes.Spconfigjob, any>>;
}
async importUncorrelatedAccountsV1(requestParameters: sourcesTypes.SourcesApiImportUncorrelatedAccountsV1Request): Promise<AxiosResponse<sourcesTypes.Loaduncorrelatedaccountstask, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.importUncorrelatedAccountsV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Loaduncorrelatedaccountstask, any>>;
}
async listAccessModelMetadataAttributeV1(requestParameters: accessModelMetadataTypes.AccessModelMetadataApiListAccessModelMetadataAttributeV1Request = {}): Promise<AxiosResponse<Array<accessModelMetadataTypes.Attributedto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAccessModelMetadataAttributeV1(requestParameters) as Promise<AxiosResponse<Array<accessModelMetadataTypes.Attributedto>, any>>;
}
async listAccessModelMetadataAttributeValueV1(requestParameters: accessModelMetadataTypes.AccessModelMetadataApiListAccessModelMetadataAttributeValueV1Request): Promise<AxiosResponse<Array<accessModelMetadataTypes.Attributevaluedto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAccessModelMetadataAttributeValueV1(requestParameters) as Promise<AxiosResponse<Array<accessModelMetadataTypes.Attributevaluedto>, any>>;
}
async listAccessProfilesForSourceAppV1(requestParameters: appsTypes.AppsApiListAccessProfilesForSourceAppV1Request): Promise<AxiosResponse<Array<appsTypes.Accessprofiledetails>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAccessProfilesForSourceAppV1(requestParameters) as Promise<AxiosResponse<Array<appsTypes.Accessprofiledetails>, any>>;
}
async listAccessProfilesV1(requestParameters: accessProfilesTypes.AccessProfilesApiListAccessProfilesV1Request = {}): Promise<AxiosResponse<Array<accessProfilesTypes.Accessprofile>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAccessProfilesV1(requestParameters) as Promise<AxiosResponse<Array<accessProfilesTypes.Accessprofile>, any>>;
}
async listAccessRequestApproversV1(requestParameters: accessRequestApprovalsTypes.AccessRequestApprovalsApiListAccessRequestApproversV1Request): Promise<AxiosResponse<Array<accessRequestApprovalsTypes.Accessrequestapproverslistresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAccessRequestApproversV1(requestParameters) as Promise<AxiosResponse<Array<accessRequestApprovalsTypes.Accessrequestapproverslistresponse>, any>>;
}
async listAccessRequestStatusV1(requestParameters: accessRequestsTypes.AccessRequestsApiListAccessRequestStatusV1Request = {}): Promise<AxiosResponse<Array<accessRequestsTypes.Requesteditemstatus>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAccessRequestStatusV1(requestParameters) as Promise<AxiosResponse<Array<accessRequestsTypes.Requesteditemstatus>, any>>;
}
async listAccountActivitiesV1(requestParameters: accountActivitiesTypes.AccountActivitiesApiListAccountActivitiesV1Request = {}): Promise<AxiosResponse<Array<accountActivitiesTypes.Accountactivity>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAccountActivitiesV1(requestParameters) as Promise<AxiosResponse<Array<accountActivitiesTypes.Accountactivity>, any>>;
}
async listAccountsV1(requestParameters: accountsTypes.AccountsApiListAccountsV1Request = {}): Promise<AxiosResponse<Array<accountsTypes.Account>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAccountsV1(requestParameters) as Promise<AxiosResponse<Array<accountsTypes.Account>, any>>;
}
async listAdministratorsAccessRequestStatusV1(requestParameters: accessRequestsTypes.AccessRequestsApiListAdministratorsAccessRequestStatusV1Request): Promise<AxiosResponse<Array<accessRequestsTypes.Accessrequestadminitemstatus>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAdministratorsAccessRequestStatusV1(requestParameters) as Promise<AxiosResponse<Array<accessRequestsTypes.Accessrequestadminitemstatus>, any>>;
}
async listAllAuthorizationRightSetsV1(requestParameters: customUserLevelsTypes.CustomUserLevelsApiListAllAuthorizationRightSetsV1Request = {}): Promise<AxiosResponse<Array<customUserLevelsTypes.Hierarchicalrightset>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAllAuthorizationRightSetsV1(requestParameters) as Promise<AxiosResponse<Array<customUserLevelsTypes.Hierarchicalrightset>, any>>;
}
async listAllSourceAppV1(requestParameters: appsTypes.AppsApiListAllSourceAppV1Request = {}): Promise<AxiosResponse<Array<appsTypes.Sourceapp>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAllSourceAppV1(requestParameters) as Promise<AxiosResponse<Array<appsTypes.Sourceapp>, any>>;
}
async listAllUserAppsV1(requestParameters: appsTypes.AppsApiListAllUserAppsV1Request): Promise<AxiosResponse<Array<appsTypes.Userapp>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAllUserAppsV1(requestParameters) as Promise<AxiosResponse<Array<appsTypes.Userapp>, any>>;
}
async listApiSummaryV1(requestParameters: apiUsageTypes.ApiUsageApiListApiSummaryV1Request = {}): Promise<AxiosResponse<Array<apiUsageTypes.Summaryresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listApiSummaryV1(requestParameters) as Promise<AxiosResponse<Array<apiUsageTypes.Summaryresponse>, any>>;
}
async listAssignedSourceAppV1(requestParameters: appsTypes.AppsApiListAssignedSourceAppV1Request = {}): Promise<AxiosResponse<Array<appsTypes.Sourceapp>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAssignedSourceAppV1(requestParameters) as Promise<AxiosResponse<Array<appsTypes.Sourceapp>, any>>;
}
async listAvailableAccountsForUserAppV1(requestParameters: appsTypes.AppsApiListAvailableAccountsForUserAppV1Request): Promise<AxiosResponse<Array<appsTypes.Appaccountdetails>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAvailableAccountsForUserAppV1(requestParameters) as Promise<AxiosResponse<Array<appsTypes.Appaccountdetails>, any>>;
}
async listAvailableSourceAppsV1(requestParameters: appsTypes.AppsApiListAvailableSourceAppsV1Request = {}): Promise<AxiosResponse<Array<appsTypes.Sourceapp>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listAvailableSourceAppsV1(requestParameters) as Promise<AxiosResponse<Array<appsTypes.Sourceapp>, any>>;
}
async listBackupsV1(requestParameters: configurationHubTypes.ConfigurationHubApiListBackupsV1Request = {}): Promise<AxiosResponse<Array<configurationHubTypes.Backupresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listBackupsV1(requestParameters) as Promise<AxiosResponse<Array<configurationHubTypes.Backupresponse>, any>>;
}
async listCampaignFiltersV1(requestParameters: certificationCampaignFiltersTypes.CertificationCampaignFiltersApiListCampaignFiltersV1Request = {}): Promise<AxiosResponse<certificationCampaignFiltersTypes.ListCampaignFiltersV1200Response, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listCampaignFiltersV1(requestParameters) as Promise<AxiosResponse<certificationCampaignFiltersTypes.ListCampaignFiltersV1200Response, any>>;
}
async listCertificationReviewersV1(requestParameters: certificationsTypes.CertificationsApiListCertificationReviewersV1Request): Promise<AxiosResponse<Array<certificationsTypes.Identityreferencewithnameandemail>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listCertificationReviewersV1(requestParameters) as Promise<AxiosResponse<Array<certificationsTypes.Identityreferencewithnameandemail>, any>>;
}
async listCompletedApprovalsV1(requestParameters: accessRequestApprovalsTypes.AccessRequestApprovalsApiListCompletedApprovalsV1Request = {}): Promise<AxiosResponse<Array<accessRequestApprovalsTypes.Completedapproval>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listCompletedApprovalsV1(requestParameters) as Promise<AxiosResponse<Array<accessRequestApprovalsTypes.Completedapproval>, any>>;
}
async listCompleteWorkflowLibraryV1(requestParameters: workflowsTypes.WorkflowsApiListCompleteWorkflowLibraryV1Request = {}): Promise<AxiosResponse<Array<workflowsTypes.ListCompleteWorkflowLibraryV1200ResponseInner>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listCompleteWorkflowLibraryV1(requestParameters) as Promise<AxiosResponse<Array<workflowsTypes.ListCompleteWorkflowLibraryV1200ResponseInner>, any>>;
}
async listConnectionsV1(requestParameters: governanceGroupsTypes.GovernanceGroupsApiListConnectionsV1Request): Promise<AxiosResponse<Array<governanceGroupsTypes.Workgroupconnectiondto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listConnectionsV1(requestParameters) as Promise<AxiosResponse<Array<governanceGroupsTypes.Workgroupconnectiondto>, any>>;
}
async listConnectorCustomizersV1(requestParameters: connectorCustomizersTypes.ConnectorCustomizersApiListConnectorCustomizersV1Request = {}): Promise<AxiosResponse<Array<connectorCustomizersTypes.Connectorcustomizersresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listConnectorCustomizersV1(requestParameters) as Promise<AxiosResponse<Array<connectorCustomizersTypes.Connectorcustomizersresponse>, any>>;
}
async listDataSegmentsV1(requestParameters: dataSegmentationTypes.DataSegmentationApiListDataSegmentsV1Request = {}): Promise<AxiosResponse<Array<dataSegmentationTypes.DataSegment>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listDataSegmentsV1(requestParameters) as Promise<AxiosResponse<Array<dataSegmentationTypes.DataSegment>, any>>;
}
async listDeploysV1(): Promise<AxiosResponse<configurationHubTypes.ListDeploysV1200Response, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listDeploysV1() as Promise<AxiosResponse<configurationHubTypes.ListDeploysV1200Response, any>>;
}
async listDimensionAccessProfilesV1(requestParameters: dimensionsTypes.DimensionsApiListDimensionAccessProfilesV1Request): Promise<AxiosResponse<Array<dimensionsTypes.Accessprofile>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listDimensionAccessProfilesV1(requestParameters) as Promise<AxiosResponse<Array<dimensionsTypes.Accessprofile>, any>>;
}
async listDimensionsV1(requestParameters: dimensionsTypes.DimensionsApiListDimensionsV1Request): Promise<AxiosResponse<Array<dimensionsTypes.Dimension>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listDimensionsV1(requestParameters) as Promise<AxiosResponse<Array<dimensionsTypes.Dimension>, any>>;
}
async listDraftsV1(requestParameters: configurationHubTypes.ConfigurationHubApiListDraftsV1Request = {}): Promise<AxiosResponse<Array<configurationHubTypes.Draftresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listDraftsV1(requestParameters) as Promise<AxiosResponse<Array<configurationHubTypes.Draftresponse>, any>>;
}
async listEntitlementChildrenV1(requestParameters: entitlementsTypes.EntitlementsApiListEntitlementChildrenV1Request): Promise<AxiosResponse<Array<entitlementsTypes.Entitlementv2>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listEntitlementChildrenV1(requestParameters) as Promise<AxiosResponse<Array<entitlementsTypes.Entitlementv2>, any>>;
}
async listEntitlementConnectionsForCurrentIdentityV1(requestParameters: entitlementConnectionsTypes.EntitlementConnectionsApiListEntitlementConnectionsForCurrentIdentityV1Request = {}): Promise<AxiosResponse<Array<entitlementConnectionsTypes.Entitlementconnectionsearchhit>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listEntitlementConnectionsForCurrentIdentityV1(requestParameters) as Promise<AxiosResponse<Array<entitlementConnectionsTypes.Entitlementconnectionsearchhit>, any>>;
}
async listEntitlementConnectionsV1(requestParameters: entitlementConnectionsTypes.EntitlementConnectionsApiListEntitlementConnectionsV1Request = {}): Promise<AxiosResponse<Array<entitlementConnectionsTypes.Entitlementconnectionsearchhit>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listEntitlementConnectionsV1(requestParameters) as Promise<AxiosResponse<Array<entitlementConnectionsTypes.Entitlementconnectionsearchhit>, any>>;
}
async listEntitlementParentsV1(requestParameters: entitlementsTypes.EntitlementsApiListEntitlementParentsV1Request): Promise<AxiosResponse<Array<entitlementsTypes.Entitlementv2>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listEntitlementParentsV1(requestParameters) as Promise<AxiosResponse<Array<entitlementsTypes.Entitlementv2>, any>>;
}
async listEntitlementsByAccountV1(requestParameters: entitlementsTypes.EntitlementsApiListEntitlementsByAccountV1Request): Promise<AxiosResponse<Array<entitlementsTypes.Entitlementv2>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listEntitlementsByAccountV1(requestParameters) as Promise<AxiosResponse<Array<entitlementsTypes.Entitlementv2>, any>>;
}
async listEntitlementsByIdentityV1(requestParameters: identitiesTypes.IdentitiesApiListEntitlementsByIdentityV1Request): Promise<AxiosResponse<Array<identitiesTypes.Identityentitlements>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listEntitlementsByIdentityV1(requestParameters) as Promise<AxiosResponse<Array<identitiesTypes.Identityentitlements>, any>>;
}
async listEntitlementsV1(requestParameters: entitlementsTypes.EntitlementsApiListEntitlementsV1Request = {}): Promise<AxiosResponse<Array<entitlementsTypes.Entitlementv2>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listEntitlementsV1(requestParameters) as Promise<AxiosResponse<Array<entitlementsTypes.Entitlementv2>, any>>;
}
async listFromAddressesV1(requestParameters: notificationsTypes.NotificationsApiListFromAddressesV1Request = {}): Promise<AxiosResponse<Array<notificationsTypes.Emailstatusdto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listFromAddressesV1(requestParameters) as Promise<AxiosResponse<Array<notificationsTypes.Emailstatusdto>, any>>;
}
async listHistoricalIdentitiesV1(requestParameters: identityHistoryTypes.IdentityHistoryApiListHistoricalIdentitiesV1Request = {}): Promise<AxiosResponse<Array<identityHistoryTypes.Identitylistitem>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listHistoricalIdentitiesV1(requestParameters) as Promise<AxiosResponse<Array<identityHistoryTypes.Identitylistitem>, any>>;
}
async listIdentitiesV1(requestParameters: identitiesTypes.IdentitiesApiListIdentitiesV1Request = {}): Promise<AxiosResponse<Array<identitiesTypes.Identity>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listIdentitiesV1(requestParameters) as Promise<AxiosResponse<Array<identitiesTypes.Identity>, any>>;
}
async listIdentityAccessItemsV1(requestParameters: identityHistoryTypes.IdentityHistoryApiListIdentityAccessItemsV1Request): Promise<AxiosResponse<Array<identityHistoryTypes.ListIdentityAccessItemsV1200ResponseInner>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listIdentityAccessItemsV1(requestParameters) as Promise<AxiosResponse<Array<identityHistoryTypes.ListIdentityAccessItemsV1200ResponseInner>, any>>;
}
async listIdentityAccessReviewItemsV1(requestParameters: certificationsTypes.CertificationsApiListIdentityAccessReviewItemsV1Request): Promise<AxiosResponse<Array<certificationsTypes.Accessreviewitem>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listIdentityAccessReviewItemsV1(requestParameters) as Promise<AxiosResponse<Array<certificationsTypes.Accessreviewitem>, any>>;
}
async listIdentityAttributesV1(requestParameters: identityAttributesTypes.IdentityAttributesApiListIdentityAttributesV1Request = {}): Promise<AxiosResponse<Array<identityAttributesTypes.Identityattribute2>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listIdentityAttributesV1(requestParameters) as Promise<AxiosResponse<Array<identityAttributesTypes.Identityattribute2>, any>>;
}
async listIdentityCertificationsV1(requestParameters: certificationsTypes.CertificationsApiListIdentityCertificationsV1Request = {}): Promise<AxiosResponse<Array<certificationsTypes.Identitycertificationdto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listIdentityCertificationsV1(requestParameters) as Promise<AxiosResponse<Array<certificationsTypes.Identitycertificationdto>, any>>;
}
async listIdentityCollectorsV1(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiListIdentityCollectorsV1Request = {}): Promise<AxiosResponse<Array<dataAccessSecurityTypes.Identitycollectorlistitem>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listIdentityCollectorsV1(requestParameters) as Promise<AxiosResponse<Array<dataAccessSecurityTypes.Identitycollectorlistitem>, any>>;
}
async listIdentityProfilesV1(requestParameters: identityProfilesTypes.IdentityProfilesApiListIdentityProfilesV1Request = {}): Promise<AxiosResponse<Array<identityProfilesTypes.Identityprofile>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listIdentityProfilesV1(requestParameters) as Promise<AxiosResponse<Array<identityProfilesTypes.Identityprofile>, any>>;
}
async listIdentitySnapshotAccessItemsV1(requestParameters: identityHistoryTypes.IdentityHistoryApiListIdentitySnapshotAccessItemsV1Request): Promise<AxiosResponse<Array<identityHistoryTypes.ListIdentitySnapshotAccessItemsV1200ResponseInner>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listIdentitySnapshotAccessItemsV1(requestParameters) as Promise<AxiosResponse<Array<identityHistoryTypes.ListIdentitySnapshotAccessItemsV1200ResponseInner>, any>>;
}
async listIdentitySnapshotsV1(requestParameters: identityHistoryTypes.IdentityHistoryApiListIdentitySnapshotsV1Request): Promise<AxiosResponse<Array<identityHistoryTypes.Identitysnapshotsummaryresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listIdentitySnapshotsV1(requestParameters) as Promise<AxiosResponse<Array<identityHistoryTypes.Identitysnapshotsummaryresponse>, any>>;
}
async listMachineAccountMappingsV1(requestParameters: machineAccountMappingsTypes.MachineAccountMappingsApiListMachineAccountMappingsV1Request): Promise<AxiosResponse<Array<machineAccountMappingsTypes.Attributemappings>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listMachineAccountMappingsV1(requestParameters) as Promise<AxiosResponse<Array<machineAccountMappingsTypes.Attributemappings>, any>>;
}
async listMachineAccountSubtypesV1(requestParameters: machineAccountsTypes.MachineAccountsApiListMachineAccountSubtypesV1Request): Promise<AxiosResponse<Array<machineAccountsTypes.Sourcesubtype>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listMachineAccountSubtypesV1(requestParameters) as Promise<AxiosResponse<Array<machineAccountsTypes.Sourcesubtype>, any>>;
}
async listMachineAccountsV1(requestParameters: machineAccountsTypes.MachineAccountsApiListMachineAccountsV1Request = {}): Promise<AxiosResponse<Array<machineAccountsTypes.Machineaccount>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listMachineAccountsV1(requestParameters) as Promise<AxiosResponse<Array<machineAccountsTypes.Machineaccount>, any>>;
}
async listMachineIdentitiesV1(requestParameters: machineIdentitiesTypes.MachineIdentitiesApiListMachineIdentitiesV1Request = {}): Promise<AxiosResponse<Array<machineIdentitiesTypes.Machineidentityresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listMachineIdentitiesV1(requestParameters) as Promise<AxiosResponse<Array<machineIdentitiesTypes.Machineidentityresponse>, any>>;
}
async listMachineIdentityUserEntitlementsV1(requestParameters: machineIdentitiesTypes.MachineIdentitiesApiListMachineIdentityUserEntitlementsV1Request = {}): Promise<AxiosResponse<Array<machineIdentitiesTypes.Machineidentityuserentitlementresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listMachineIdentityUserEntitlementsV1(requestParameters) as Promise<AxiosResponse<Array<machineIdentitiesTypes.Machineidentityuserentitlementresponse>, any>>;
}
async listNonEmployeeApprovalsV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiListNonEmployeeApprovalsV1Request = {}): Promise<AxiosResponse<Array<nonEmployeeLifecycleManagementTypes.Nonemployeeapprovalitem>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listNonEmployeeApprovalsV1(requestParameters) as Promise<AxiosResponse<Array<nonEmployeeLifecycleManagementTypes.Nonemployeeapprovalitem>, any>>;
}
async listNonEmployeeRecordsV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiListNonEmployeeRecordsV1Request = {}): Promise<AxiosResponse<Array<nonEmployeeLifecycleManagementTypes.Nonemployeerecord>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listNonEmployeeRecordsV1(requestParameters) as Promise<AxiosResponse<Array<nonEmployeeLifecycleManagementTypes.Nonemployeerecord>, any>>;
}
async listNonEmployeeRequestsV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiListNonEmployeeRequestsV1Request): Promise<AxiosResponse<Array<nonEmployeeLifecycleManagementTypes.Nonemployeerequest>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listNonEmployeeRequestsV1(requestParameters) as Promise<AxiosResponse<Array<nonEmployeeLifecycleManagementTypes.Nonemployeerequest>, any>>;
}
async listNonEmployeeSourcesV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiListNonEmployeeSourcesV1Request = {}): Promise<AxiosResponse<Array<nonEmployeeLifecycleManagementTypes.Nonemployeesourcewithnecount>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listNonEmployeeSourcesV1(requestParameters) as Promise<AxiosResponse<Array<nonEmployeeLifecycleManagementTypes.Nonemployeesourcewithnecount>, any>>;
}
async listNotificationTemplateDefaultsV1(requestParameters: notificationsTypes.NotificationsApiListNotificationTemplateDefaultsV1Request = {}): Promise<AxiosResponse<Array<notificationsTypes.Templatedtodefault>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listNotificationTemplateDefaultsV1(requestParameters) as Promise<AxiosResponse<Array<notificationsTypes.Templatedtodefault>, any>>;
}
async listNotificationTemplatesV1(requestParameters: notificationsTypes.NotificationsApiListNotificationTemplatesV1Request = {}): Promise<AxiosResponse<Array<notificationsTypes.Templatedto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listNotificationTemplatesV1(requestParameters) as Promise<AxiosResponse<Array<notificationsTypes.Templatedto>, any>>;
}
async listOauthClientsV1(requestParameters: oauthClientsTypes.OAuthClientsApiListOauthClientsV1Request = {}): Promise<AxiosResponse<Array<oauthClientsTypes.Getoauthclientresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listOauthClientsV1(requestParameters) as Promise<AxiosResponse<Array<oauthClientsTypes.Getoauthclientresponse>, any>>;
}
async listOutliersContributingFeatureAccessItemsV1(requestParameters: iaiOutliersTypes.IAIOutliersApiListOutliersContributingFeatureAccessItemsV1Request): Promise<AxiosResponse<Array<iaiOutliersTypes.Outlierscontributingfeatureaccessitems>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listOutliersContributingFeatureAccessItemsV1(requestParameters) as Promise<AxiosResponse<Array<iaiOutliersTypes.Outlierscontributingfeatureaccessitems>, any>>;
}
async listOwnedUserAppsV1(requestParameters: appsTypes.AppsApiListOwnedUserAppsV1Request = {}): Promise<AxiosResponse<Array<appsTypes.Userapp>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listOwnedUserAppsV1(requestParameters) as Promise<AxiosResponse<Array<appsTypes.Userapp>, any>>;
}
async listPasswordPoliciesV1(requestParameters: passwordPoliciesTypes.PasswordPoliciesApiListPasswordPoliciesV1Request = {}): Promise<AxiosResponse<Array<passwordPoliciesTypes.Passwordpolicyv3dto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listPasswordPoliciesV1(requestParameters) as Promise<AxiosResponse<Array<passwordPoliciesTypes.Passwordpolicyv3dto>, any>>;
}
async listPasswordPolicyHoldersOnSourceV1(requestParameters: sourcesTypes.SourcesApiListPasswordPolicyHoldersOnSourceV1Request): Promise<AxiosResponse<Array<sourcesTypes.PasswordpolicyholdersdtoInner>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listPasswordPolicyHoldersOnSourceV1(requestParameters) as Promise<AxiosResponse<Array<sourcesTypes.PasswordpolicyholdersdtoInner>, any>>;
}
async listPendingApprovalsV1(requestParameters: accessRequestApprovalsTypes.AccessRequestApprovalsApiListPendingApprovalsV1Request = {}): Promise<AxiosResponse<Array<accessRequestApprovalsTypes.Pendingapproval>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listPendingApprovalsV1(requestParameters) as Promise<AxiosResponse<Array<accessRequestApprovalsTypes.Pendingapproval>, any>>;
}
async listPendingEntitlementRecommendationApprovalsV1(requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiListPendingEntitlementRecommendationApprovalsV1Request = {}): Promise<AxiosResponse<Array<suggestedEntitlementDescriptionTypes.Entitlementrecommendationrecord>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listPendingEntitlementRecommendationApprovalsV1(requestParameters) as Promise<AxiosResponse<Array<suggestedEntitlementDescriptionTypes.Entitlementrecommendationrecord>, any>>;
}
async listPersonalAccessTokensV1(requestParameters: personalAccessTokensTypes.PersonalAccessTokensApiListPersonalAccessTokensV1Request = {}): Promise<AxiosResponse<Array<personalAccessTokensTypes.Getpersonalaccesstokenresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listPersonalAccessTokensV1(requestParameters) as Promise<AxiosResponse<Array<personalAccessTokensTypes.Getpersonalaccesstokenresponse>, any>>;
}
async listPrivilegeCriteriaConfigV1(requestParameters: privilegeCriteriaConfigurationTypes.PrivilegeCriteriaConfigurationApiListPrivilegeCriteriaConfigV1Request): Promise<AxiosResponse<Array<privilegeCriteriaConfigurationTypes.Privilegecriteriaconfigdto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listPrivilegeCriteriaConfigV1(requestParameters) as Promise<AxiosResponse<Array<privilegeCriteriaConfigurationTypes.Privilegecriteriaconfigdto>, any>>;
}
async listPrivilegeCriteriaV1(requestParameters: privilegeCriteriaTypes.PrivilegeCriteriaApiListPrivilegeCriteriaV1Request): Promise<AxiosResponse<Array<privilegeCriteriaTypes.Privilegecriteriadto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listPrivilegeCriteriaV1(requestParameters) as Promise<AxiosResponse<Array<privilegeCriteriaTypes.Privilegecriteriadto>, any>>;
}
async listPrivilegedEntitlementRecommendationsV1(requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiListPrivilegedEntitlementRecommendationsV1Request = {}): Promise<AxiosResponse<Array<suggestedEntitlementDescriptionTypes.Privilegedrecommendationgroup>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listPrivilegedEntitlementRecommendationsV1(requestParameters) as Promise<AxiosResponse<Array<suggestedEntitlementDescriptionTypes.Privilegedrecommendationgroup>, any>>;
}
async listProvisioningPoliciesV1(requestParameters: sourcesTypes.SourcesApiListProvisioningPoliciesV1Request): Promise<AxiosResponse<Array<sourcesTypes.Provisioningpolicydto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listProvisioningPoliciesV1(requestParameters) as Promise<AxiosResponse<Array<sourcesTypes.Provisioningpolicydto>, any>>;
}
async listProvisioningPoliciesV2(requestParameters: sourcesTypes.SourcesApiListProvisioningPoliciesV2Request): Promise<AxiosResponse<Array<sourcesTypes.Provisioningpolicydtov2>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listProvisioningPoliciesV2(requestParameters) as Promise<AxiosResponse<Array<sourcesTypes.Provisioningpolicydtov2>, any>>;
}
async listReassignmentConfigurationsV1(requestParameters: workReassignmentTypes.WorkReassignmentApiListReassignmentConfigurationsV1Request = {}): Promise<AxiosResponse<Array<workReassignmentTypes.Configurationresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listReassignmentConfigurationsV1(requestParameters) as Promise<AxiosResponse<Array<workReassignmentTypes.Configurationresponse>, any>>;
}
async listRequestableObjectsV1(requestParameters: requestableObjectsTypes.RequestableObjectsApiListRequestableObjectsV1Request = {}): Promise<AxiosResponse<Array<requestableObjectsTypes.Requestableobject>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listRequestableObjectsV1(requestParameters) as Promise<AxiosResponse<Array<requestableObjectsTypes.Requestableobject>, any>>;
}
async listRolesV1(requestParameters: rolesTypes.RolesApiListRolesV1Request = {}): Promise<AxiosResponse<Array<rolesTypes.Role>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listRolesV1(requestParameters) as Promise<AxiosResponse<Array<rolesTypes.Role>, any>>;
}
async listSavedSearchesV1(requestParameters: savedSearchTypes.SavedSearchApiListSavedSearchesV1Request = {}): Promise<AxiosResponse<Array<savedSearchTypes.Savedsearch>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listSavedSearchesV1(requestParameters) as Promise<AxiosResponse<Array<savedSearchTypes.Savedsearch>, any>>;
}
async listScheduledActionsV1(): Promise<AxiosResponse<Array<configurationHubTypes.Scheduledactionresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listScheduledActionsV1() as Promise<AxiosResponse<Array<configurationHubTypes.Scheduledactionresponse>, any>>;
}
async listScheduledSearchV1(requestParameters: scheduledSearchTypes.ScheduledSearchApiListScheduledSearchV1Request = {}): Promise<AxiosResponse<Array<scheduledSearchTypes.Scheduledsearch>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listScheduledSearchV1(requestParameters) as Promise<AxiosResponse<Array<scheduledSearchTypes.Scheduledsearch>, any>>;
}
async listSedsV1(requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiListSedsV1Request = {}): Promise<AxiosResponse<Array<suggestedEntitlementDescriptionTypes.Sed>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listSedsV1(requestParameters) as Promise<AxiosResponse<Array<suggestedEntitlementDescriptionTypes.Sed>, any>>;
}
async listSegmentsV1(requestParameters: segmentsTypes.SegmentsApiListSegmentsV1Request = {}): Promise<AxiosResponse<Array<segmentsTypes.Segment>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listSegmentsV1(requestParameters) as Promise<AxiosResponse<Array<segmentsTypes.Segment>, any>>;
}
async listSodPoliciesV1(requestParameters: sodPoliciesTypes.SODPoliciesApiListSodPoliciesV1Request = {}): Promise<AxiosResponse<Array<sodPoliciesTypes.Sodpolicy>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listSodPoliciesV1(requestParameters) as Promise<AxiosResponse<Array<sodPoliciesTypes.Sodpolicy>, any>>;
}
async listSourceSubtypesV1(requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiListSourceSubtypesV1Request = {}): Promise<AxiosResponse<Array<machineAccountSubtypesTypes.Sourcesubtypewithsource>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listSourceSubtypesV1(requestParameters) as Promise<AxiosResponse<Array<machineAccountSubtypesTypes.Sourcesubtypewithsource>, any>>;
}
async listSourcesV1(requestParameters: sourcesTypes.SourcesApiListSourcesV1Request = {}): Promise<AxiosResponse<Array<sourcesTypes.Source>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listSourcesV1(requestParameters) as Promise<AxiosResponse<Array<sourcesTypes.Source>, any>>;
}
async listSpConfigObjectsV1(): Promise<AxiosResponse<Array<spConfigTypes.Spconfigobject>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listSpConfigObjectsV1() as Promise<AxiosResponse<Array<spConfigTypes.Spconfigobject>, any>>;
}
async listSubscriptionsV1(requestParameters: triggersTypes.TriggersApiListSubscriptionsV1Request = {}): Promise<AxiosResponse<Array<triggersTypes.Subscription>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listSubscriptionsV1(requestParameters) as Promise<AxiosResponse<Array<triggersTypes.Subscription>, any>>;
}
async listTaggedObjectsByTypeV1(requestParameters: taggedObjectsTypes.TaggedObjectsApiListTaggedObjectsByTypeV1Request): Promise<AxiosResponse<Array<taggedObjectsTypes.Taggedobject>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listTaggedObjectsByTypeV1(requestParameters) as Promise<AxiosResponse<Array<taggedObjectsTypes.Taggedobject>, any>>;
}
async listTaggedObjectsV1(requestParameters: taggedObjectsTypes.TaggedObjectsApiListTaggedObjectsV1Request = {}): Promise<AxiosResponse<Array<taggedObjectsTypes.Taggedobject>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listTaggedObjectsV1(requestParameters) as Promise<AxiosResponse<Array<taggedObjectsTypes.Taggedobject>, any>>;
}
async listTagsV1(requestParameters: tagsTypes.TagsApiListTagsV1Request = {}): Promise<AxiosResponse<Array<tagsTypes.Tag2>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listTagsV1(requestParameters) as Promise<AxiosResponse<Array<tagsTypes.Tag2>, any>>;
}
async listTransformsV1(requestParameters: transformsTypes.TransformsApiListTransformsV1Request = {}): Promise<AxiosResponse<Array<transformsTypes.Transformread>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listTransformsV1(requestParameters) as Promise<AxiosResponse<Array<transformsTypes.Transformread>, any>>;
}
async listTriggerInvocationStatusV1(requestParameters: triggersTypes.TriggersApiListTriggerInvocationStatusV1Request = {}): Promise<AxiosResponse<Array<triggersTypes.Invocationstatus>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listTriggerInvocationStatusV1(requestParameters) as Promise<AxiosResponse<Array<triggersTypes.Invocationstatus>, any>>;
}
async listTriggersV1(requestParameters: triggersTypes.TriggersApiListTriggersV1Request = {}): Promise<AxiosResponse<Array<triggersTypes.Trigger>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listTriggersV1(requestParameters) as Promise<AxiosResponse<Array<triggersTypes.Trigger>, any>>;
}
async listUploadedConfigurationsV1(requestParameters: configurationHubTypes.ConfigurationHubApiListUploadedConfigurationsV1Request = {}): Promise<AxiosResponse<Array<configurationHubTypes.Backupresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listUploadedConfigurationsV1(requestParameters) as Promise<AxiosResponse<Array<configurationHubTypes.Backupresponse>, any>>;
}
async listUserLevelIdentitiesV1(requestParameters: customUserLevelsTypes.CustomUserLevelsApiListUserLevelIdentitiesV1Request): Promise<AxiosResponse<Array<customUserLevelsTypes.Authuserslimresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listUserLevelIdentitiesV1(requestParameters) as Promise<AxiosResponse<Array<customUserLevelsTypes.Authuserslimresponse>, any>>;
}
async listUserLevelsV1(requestParameters: customUserLevelsTypes.CustomUserLevelsApiListUserLevelsV1Request = {}): Promise<AxiosResponse<Array<customUserLevelsTypes.Userlevelsummarydto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listUserLevelsV1(requestParameters) as Promise<AxiosResponse<Array<customUserLevelsTypes.Userlevelsummarydto>, any>>;
}
async listWorkflowLibraryActionsV1(requestParameters: workflowsTypes.WorkflowsApiListWorkflowLibraryActionsV1Request = {}): Promise<AxiosResponse<Array<workflowsTypes.Workflowlibraryaction>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listWorkflowLibraryActionsV1(requestParameters) as Promise<AxiosResponse<Array<workflowsTypes.Workflowlibraryaction>, any>>;
}
async listWorkflowLibraryOperatorsV1(): Promise<AxiosResponse<Array<workflowsTypes.Workflowlibraryoperator>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listWorkflowLibraryOperatorsV1() as Promise<AxiosResponse<Array<workflowsTypes.Workflowlibraryoperator>, any>>;
}
async listWorkflowLibraryTriggersV1(requestParameters: workflowsTypes.WorkflowsApiListWorkflowLibraryTriggersV1Request = {}): Promise<AxiosResponse<Array<workflowsTypes.Workflowlibrarytrigger>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listWorkflowLibraryTriggersV1(requestParameters) as Promise<AxiosResponse<Array<workflowsTypes.Workflowlibrarytrigger>, any>>;
}
async listWorkflowsV1(): Promise<AxiosResponse<Array<workflowsTypes.Workflow>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listWorkflowsV1() as Promise<AxiosResponse<Array<workflowsTypes.Workflow>, any>>;
}
async listWorkgroupMembersV1(requestParameters: governanceGroupsTypes.GovernanceGroupsApiListWorkgroupMembersV1Request): Promise<AxiosResponse<Array<governanceGroupsTypes.ListWorkgroupMembersV1200ResponseInner>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listWorkgroupMembersV1(requestParameters) as Promise<AxiosResponse<Array<governanceGroupsTypes.ListWorkgroupMembersV1200ResponseInner>, any>>;
}
async listWorkgroupsV1(requestParameters: governanceGroupsTypes.GovernanceGroupsApiListWorkgroupsV1Request = {}): Promise<AxiosResponse<Array<governanceGroupsTypes.Workgroupdto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listWorkgroupsV1(requestParameters) as Promise<AxiosResponse<Array<governanceGroupsTypes.Workgroupdto>, any>>;
}
async listWorkItemsV1(requestParameters: workItemsTypes.WorkItemsApiListWorkItemsV1Request = {}): Promise<AxiosResponse<Array<workItemsTypes.Workitems>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.listWorkItemsV1(requestParameters) as Promise<AxiosResponse<Array<workItemsTypes.Workitems>, any>>;
}
async loadAccountSelectionsV1(requestParameters: accessRequestsTypes.AccessRequestsApiLoadAccountSelectionsV1Request): Promise<AxiosResponse<accessRequestsTypes.Accountsselectionresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.loadAccountSelectionsV1(requestParameters) as Promise<AxiosResponse<accessRequestsTypes.Accountsselectionresponse, any>>;
}
async loadBulkSourceSubtypesV1(requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiLoadBulkSourceSubtypesV1Request): Promise<AxiosResponse<Array<machineAccountSubtypesTypes.Sourcesubtypewithsource>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.loadBulkSourceSubtypesV1(requestParameters) as Promise<AxiosResponse<Array<machineAccountSubtypesTypes.Sourcesubtypewithsource>, any>>;
}
async makeIdentityDecisionV1(requestParameters: certificationsTypes.CertificationsApiMakeIdentityDecisionV1Request): Promise<AxiosResponse<certificationsTypes.Identitycertificationdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.makeIdentityDecisionV1(requestParameters) as Promise<AxiosResponse<certificationsTypes.Identitycertificationdto, any>>;
}
async moveApprovalV1(requestParameters: approvalsTypes.ApprovalsApiMoveApprovalV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.moveApprovalV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async moveV1(requestParameters: certificationCampaignsTypes.CertificationCampaignsApiMoveV1Request): Promise<AxiosResponse<certificationCampaignsTypes.Certificationtask, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.moveV1(requestParameters) as Promise<AxiosResponse<certificationCampaignsTypes.Certificationtask, any>>;
}
async patchAccessProfileV1(requestParameters: accessProfilesTypes.AccessProfilesApiPatchAccessProfileV1Request): Promise<AxiosResponse<accessProfilesTypes.Accessprofile, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchAccessProfileV1(requestParameters) as Promise<AxiosResponse<accessProfilesTypes.Accessprofile, any>>;
}
async patchAdvancedSearchNerm(requestParameters: sdk.AdvancedSearchNERMApiPatchAdvancedSearchRequest): Promise<AxiosResponse<sdk.SubmitAdvancedSearch200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchAdvancedSearchNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitAdvancedSearch200ResponseNERM, any>>;
}
async patchAttributeOptionByIdNerm(requestParameters: sdk.AttributeOptionsNERMApiPatchAttributeOptionByIdRequest): Promise<AxiosResponse<sdk.SubmitAttributeOption200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchAttributeOptionByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitAttributeOption200ResponseNERM, any>>;
}
async patchAttributeOptionByUidNerm(requestParameters: sdk.AttributeOptionsNERMApiPatchAttributeOptionByUidRequest): Promise<AxiosResponse<sdk.SubmitAttributeOption200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchAttributeOptionByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitAttributeOption200ResponseNERM, any>>;
}
async patchAttributeOptionsNerm(requestParameters: sdk.AttributeOptionsNERMApiPatchAttributeOptionsRequest): Promise<AxiosResponse<sdk.SubmitAttributeOptions200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchAttributeOptionsNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitAttributeOptions200ResponseNERM, any>>;
}
async patchAuthOrgLockoutConfigV1(requestParameters: globalTenantSecuritySettingsTypes.GlobalTenantSecuritySettingsApiPatchAuthOrgLockoutConfigV1Request): Promise<AxiosResponse<globalTenantSecuritySettingsTypes.Lockoutconfiguration, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchAuthOrgLockoutConfigV1(requestParameters) as Promise<AxiosResponse<globalTenantSecuritySettingsTypes.Lockoutconfiguration, any>>;
}
async patchAuthOrgNetworkConfigV1(requestParameters: globalTenantSecuritySettingsTypes.GlobalTenantSecuritySettingsApiPatchAuthOrgNetworkConfigV1Request): Promise<AxiosResponse<globalTenantSecuritySettingsTypes.Networkconfiguration, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchAuthOrgNetworkConfigV1(requestParameters) as Promise<AxiosResponse<globalTenantSecuritySettingsTypes.Networkconfiguration, any>>;
}
async patchAuthOrgServiceProviderConfigV1(requestParameters: globalTenantSecuritySettingsTypes.GlobalTenantSecuritySettingsApiPatchAuthOrgServiceProviderConfigV1Request): Promise<AxiosResponse<globalTenantSecuritySettingsTypes.Serviceproviderconfiguration, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchAuthOrgServiceProviderConfigV1(requestParameters) as Promise<AxiosResponse<globalTenantSecuritySettingsTypes.Serviceproviderconfiguration, any>>;
}
async patchAuthOrgSessionConfigV1(requestParameters: globalTenantSecuritySettingsTypes.GlobalTenantSecuritySettingsApiPatchAuthOrgSessionConfigV1Request): Promise<AxiosResponse<globalTenantSecuritySettingsTypes.Sessionconfiguration, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchAuthOrgSessionConfigV1(requestParameters) as Promise<AxiosResponse<globalTenantSecuritySettingsTypes.Sessionconfiguration, any>>;
}
async patchAuthUserV1(requestParameters: authUsersTypes.AuthUsersApiPatchAuthUserV1Request): Promise<AxiosResponse<authUsersTypes.Authuser, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchAuthUserV1(requestParameters) as Promise<AxiosResponse<authUsersTypes.Authuser, any>>;
}
async patchBeforeProvisioningRuleV1(requestParameters: simIntegrationsTypes.SIMIntegrationsApiPatchBeforeProvisioningRuleV1Request): Promise<AxiosResponse<simIntegrationsTypes.Servicedeskintegrationdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchBeforeProvisioningRuleV1(requestParameters) as Promise<AxiosResponse<simIntegrationsTypes.Servicedeskintegrationdto, any>>;
}
async patchCampaignTemplateV1(requestParameters: certificationCampaignsTypes.CertificationCampaignsApiPatchCampaignTemplateV1Request): Promise<AxiosResponse<certificationCampaignsTypes.Campaigntemplate, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchCampaignTemplateV1(requestParameters) as Promise<AxiosResponse<certificationCampaignsTypes.Campaigntemplate, any>>;
}
async patchDataRecordNerm(requestParameters: sdk.ConsolidationNERMApiPatchDataRecordRequest): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchDataRecordNerm(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async patchDataSegmentV1(requestParameters: dataSegmentationTypes.DataSegmentationApiPatchDataSegmentV1Request): Promise<AxiosResponse<dataSegmentationTypes.DataSegment, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchDataSegmentV1(requestParameters) as Promise<AxiosResponse<dataSegmentationTypes.DataSegment, any>>;
}
async patchDimensionV1(requestParameters: dimensionsTypes.DimensionsApiPatchDimensionV1Request): Promise<AxiosResponse<dimensionsTypes.Dimension, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchDimensionV1(requestParameters) as Promise<AxiosResponse<dimensionsTypes.Dimension, any>>;
}
async patchEntitlementConnectionByIdV1(requestParameters: entitlementConnectionsTypes.EntitlementConnectionsApiPatchEntitlementConnectionByIdV1Request): Promise<AxiosResponse<entitlementConnectionsTypes.Entitlementconnection, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchEntitlementConnectionByIdV1(requestParameters) as Promise<AxiosResponse<entitlementConnectionsTypes.Entitlementconnection, any>>;
}
async patchEntitlementConnectionByQueryV1(requestParameters: entitlementConnectionsTypes.EntitlementConnectionsApiPatchEntitlementConnectionByQueryV1Request): Promise<AxiosResponse<entitlementConnectionsTypes.Entitlementconnection, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchEntitlementConnectionByQueryV1(requestParameters) as Promise<AxiosResponse<entitlementConnectionsTypes.Entitlementconnection, any>>;
}
async patchEntitlementRecommendationV1(requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiPatchEntitlementRecommendationV1Request): Promise<AxiosResponse<suggestedEntitlementDescriptionTypes.Entitlementrecommendationrecord, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchEntitlementRecommendationV1(requestParameters) as Promise<AxiosResponse<suggestedEntitlementDescriptionTypes.Entitlementrecommendationrecord, any>>;
}
async patchEntitlementV1(requestParameters: entitlementsTypes.EntitlementsApiPatchEntitlementV1Request): Promise<AxiosResponse<entitlementsTypes.Entitlementv2, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchEntitlementV1(requestParameters) as Promise<AxiosResponse<entitlementsTypes.Entitlementv2, any>>;
}
async patchFormDefinitionV1(requestParameters: customFormsTypes.CustomFormsApiPatchFormDefinitionV1Request): Promise<AxiosResponse<customFormsTypes.Formdefinitionresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchFormDefinitionV1(requestParameters) as Promise<AxiosResponse<customFormsTypes.Formdefinitionresponse, any>>;
}
async patchFormInstanceV1(requestParameters: customFormsTypes.CustomFormsApiPatchFormInstanceV1Request): Promise<AxiosResponse<customFormsTypes.Forminstanceresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchFormInstanceV1(requestParameters) as Promise<AxiosResponse<customFormsTypes.Forminstanceresponse, any>>;
}
async patchJitActivationConfigV1(requestParameters: jitAccessTypes.JITAccessApiPatchJitActivationConfigV1Request): Promise<AxiosResponse<jitAccessTypes.Jitactivationconfigresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchJitActivationConfigV1(requestParameters) as Promise<AxiosResponse<jitAccessTypes.Jitactivationconfigresponse, any>>;
}
async patchLanguageNerm(requestParameters: sdk.LanguagesNERMApiPatchLanguageRequest): Promise<AxiosResponse<sdk.PatchLanguageRequestNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchLanguageNerm(requestParameters) as Promise<AxiosResponse<sdk.PatchLanguageRequestNERM, any>>;
}
async patchMachineAccountSubtypeByTechnicalNameV1(requestParameters: machineAccountsTypes.MachineAccountsApiPatchMachineAccountSubtypeByTechnicalNameV1Request): Promise<AxiosResponse<machineAccountsTypes.Sourcesubtype, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchMachineAccountSubtypeByTechnicalNameV1(requestParameters) as Promise<AxiosResponse<machineAccountsTypes.Sourcesubtype, any>>;
}
async patchMachineAccountSubtypeV1(requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiPatchMachineAccountSubtypeV1Request): Promise<AxiosResponse<machineAccountSubtypesTypes.Sourcesubtypewithsource, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchMachineAccountSubtypeV1(requestParameters) as Promise<AxiosResponse<machineAccountSubtypesTypes.Sourcesubtypewithsource, any>>;
}
async patchNonEmployeeRecordV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiPatchNonEmployeeRecordV1Request): Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeerecord, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchNonEmployeeRecordV1(requestParameters) as Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeerecord, any>>;
}
async patchNonEmployeeSchemaAttributeV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiPatchNonEmployeeSchemaAttributeV1Request): Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeeschemaattribute, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchNonEmployeeSchemaAttributeV1(requestParameters) as Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeeschemaattribute, any>>;
}
async patchNonEmployeeSourceV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiPatchNonEmployeeSourceV1Request): Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeesource, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchNonEmployeeSourceV1(requestParameters) as Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeesource, any>>;
}
async patchOauthClientV1(requestParameters: oauthClientsTypes.OAuthClientsApiPatchOauthClientV1Request): Promise<AxiosResponse<oauthClientsTypes.Getoauthclientresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchOauthClientV1(requestParameters) as Promise<AxiosResponse<oauthClientsTypes.Getoauthclientresponse, any>>;
}
async patchOrgConfigV1(requestParameters: orgConfigTypes.OrgConfigApiPatchOrgConfigV1Request): Promise<AxiosResponse<orgConfigTypes.Orgconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchOrgConfigV1(requestParameters) as Promise<AxiosResponse<orgConfigTypes.Orgconfig, any>>;
}
async patchPersonalAccessTokenV1(requestParameters: personalAccessTokensTypes.PersonalAccessTokensApiPatchPersonalAccessTokenV1Request): Promise<AxiosResponse<personalAccessTokensTypes.Getpersonalaccesstokenresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchPersonalAccessTokenV1(requestParameters) as Promise<AxiosResponse<personalAccessTokensTypes.Getpersonalaccesstokenresponse, any>>;
}
async patchPotentialRoleSessionV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiPatchPotentialRoleSessionV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchPotentialRoleSessionV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async patchPotentialRoleV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiPatchPotentialRoleV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchPotentialRoleV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async patchPrivilegeCriteriaConfigV1(requestParameters: privilegeCriteriaConfigurationTypes.PrivilegeCriteriaConfigurationApiPatchPrivilegeCriteriaConfigV1Request): Promise<AxiosResponse<privilegeCriteriaConfigurationTypes.Privilegecriteriaconfigdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchPrivilegeCriteriaConfigV1(requestParameters) as Promise<AxiosResponse<privilegeCriteriaConfigurationTypes.Privilegecriteriaconfigdto, any>>;
}
async patchProfileByIdNerm(requestParameters: sdk.ProfilesNERMApiPatchProfileByIdRequest): Promise<AxiosResponse<sdk.GetSingleSchemaMappedProfile200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchProfileByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.GetSingleSchemaMappedProfile200ResponseNERM, any>>;
}
async patchProfileConfigV1(requestParameters: authProfileTypes.AuthProfileApiPatchProfileConfigV1Request): Promise<AxiosResponse<authProfileTypes.Authprofile, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchProfileConfigV1(requestParameters) as Promise<AxiosResponse<authProfileTypes.Authprofile, any>>;
}
async patchProfilesNerm(requestParameters: sdk.ProfilesNERMApiPatchProfilesRequest): Promise<AxiosResponse<sdk.SearchAdvancedSearch200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchProfilesNerm(requestParameters) as Promise<AxiosResponse<sdk.SearchAdvancedSearch200ResponseNERM, any>>;
}
async patchProfileTypeByIdNerm(requestParameters: sdk.ProfileTypesNERMApiPatchProfileTypeByIdRequest): Promise<AxiosResponse<sdk.SubmitProfileType200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchProfileTypeByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitProfileType200ResponseNERM, any>>;
}
async patchProfileTypeByUidNerm(requestParameters: sdk.ProfileTypesNERMApiPatchProfileTypeByUidRequest): Promise<AxiosResponse<sdk.SubmitProfileType200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchProfileTypeByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitProfileType200ResponseNERM, any>>;
}
async patchRoleMiningSessionV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiPatchRoleMiningSessionV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchRoleMiningSessionV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async patchRoleNerm(requestParameters: sdk.RolesNERMApiPatchRoleRequest): Promise<AxiosResponse<sdk.SubmitRole200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchRoleNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitRole200ResponseNERM, any>>;
}
async patchRoleProfileNerm(requestParameters: sdk.RoleProfilesNERMApiPatchRoleProfileRequest): Promise<AxiosResponse<sdk.SubmitRoleProfile200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchRoleProfileNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitRoleProfile200ResponseNERM, any>>;
}
async patchRoleProfilesNerm(requestParameters: sdk.RoleProfilesNERMApiPatchRoleProfilesRequest): Promise<AxiosResponse<sdk.SubmitRoleProfiles200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchRoleProfilesNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitRoleProfiles200ResponseNERM, any>>;
}
async patchRolesNerm(requestParameters: sdk.RolesNERMApiPatchRolesRequest): Promise<AxiosResponse<sdk.SubmitRoles200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchRolesNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitRoles200ResponseNERM, any>>;
}
async patchRoleV1(requestParameters: rolesTypes.RolesApiPatchRoleV1Request): Promise<AxiosResponse<rolesTypes.Role, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchRoleV1(requestParameters) as Promise<AxiosResponse<rolesTypes.Role, any>>;
}
async patchSearchAttributeConfigV1(requestParameters: searchAttributeConfigurationTypes.SearchAttributeConfigurationApiPatchSearchAttributeConfigV1Request): Promise<AxiosResponse<searchAttributeConfigurationTypes.Searchattributeconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchSearchAttributeConfigV1(requestParameters) as Promise<AxiosResponse<searchAttributeConfigurationTypes.Searchattributeconfig, any>>;
}
async patchSedV1(requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiPatchSedV1Request): Promise<AxiosResponse<suggestedEntitlementDescriptionTypes.Sed, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchSedV1(requestParameters) as Promise<AxiosResponse<suggestedEntitlementDescriptionTypes.Sed, any>>;
}
async patchSegmentV1(requestParameters: segmentsTypes.SegmentsApiPatchSegmentV1Request): Promise<AxiosResponse<segmentsTypes.Segment, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchSegmentV1(requestParameters) as Promise<AxiosResponse<segmentsTypes.Segment, any>>;
}
async patchServiceDeskIntegrationV1(requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiPatchServiceDeskIntegrationV1Request): Promise<AxiosResponse<serviceDeskIntegrationTypes.Servicedeskintegrationdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchServiceDeskIntegrationV1(requestParameters) as Promise<AxiosResponse<serviceDeskIntegrationTypes.Servicedeskintegrationdto, any>>;
}
async patchSIMAttributesV1(requestParameters: simIntegrationsTypes.SIMIntegrationsApiPatchSIMAttributesV1Request): Promise<AxiosResponse<simIntegrationsTypes.Servicedeskintegrationdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchSIMAttributesV1(requestParameters) as Promise<AxiosResponse<simIntegrationsTypes.Servicedeskintegrationdto, any>>;
}
async patchSodPolicyV1(requestParameters: sodPoliciesTypes.SODPoliciesApiPatchSodPolicyV1Request): Promise<AxiosResponse<sodPoliciesTypes.Sodpolicy, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchSodPolicyV1(requestParameters) as Promise<AxiosResponse<sodPoliciesTypes.Sodpolicy, any>>;
}
async patchSourceAppV1(requestParameters: appsTypes.AppsApiPatchSourceAppV1Request): Promise<AxiosResponse<appsTypes.Sourceapppatchdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchSourceAppV1(requestParameters) as Promise<AxiosResponse<appsTypes.Sourceapppatchdto, any>>;
}
async patchSubscriptionV1(requestParameters: triggersTypes.TriggersApiPatchSubscriptionV1Request): Promise<AxiosResponse<triggersTypes.Subscription, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchSubscriptionV1(requestParameters) as Promise<AxiosResponse<triggersTypes.Subscription, any>>;
}
async patchTenantContextV1(requestParameters: tenantContextTypes.TenantContextApiPatchTenantContextV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchTenantContextV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async patchUserAppV1(requestParameters: appsTypes.AppsApiPatchUserAppV1Request): Promise<AxiosResponse<appsTypes.Userapp, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchUserAppV1(requestParameters) as Promise<AxiosResponse<appsTypes.Userapp, any>>;
}
async patchUserManagerNerm(requestParameters: sdk.UserManagersNERMApiPatchUserManagerRequest): Promise<AxiosResponse<sdk.SubmitUserManager200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchUserManagerNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitUserManager200ResponseNERM, any>>;
}
async patchUserManagersNerm(requestParameters: sdk.UserManagersNERMApiPatchUserManagersRequest): Promise<AxiosResponse<sdk.SubmitUserManagers200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchUserManagersNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitUserManagers200ResponseNERM, any>>;
}
async patchUserNerm(requestParameters: sdk.UsersNERMApiPatchUserRequest): Promise<AxiosResponse<sdk.SubmitUser200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchUserNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitUser200ResponseNERM, any>>;
}
async patchUserProfileNerm(requestParameters: sdk.UserProfilesNERMApiPatchUserProfileRequest): Promise<AxiosResponse<sdk.SubmitUserProfile200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchUserProfileNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitUserProfile200ResponseNERM, any>>;
}
async patchUserProfilesNerm(requestParameters: sdk.UserProfilesNERMApiPatchUserProfilesRequest): Promise<AxiosResponse<sdk.CreateUserProfiles200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchUserProfilesNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateUserProfiles200ResponseNERM, any>>;
}
async patchUserRoleNerm(requestParameters: sdk.UserRolesNERMApiPatchUserRoleRequest): Promise<AxiosResponse<sdk.SubmitUserRole200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchUserRoleNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitUserRole200ResponseNERM, any>>;
}
async patchUserRolesNerm(requestParameters: sdk.UserRolesNERMApiPatchUserRolesRequest): Promise<AxiosResponse<sdk.SubmitUserRoles200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchUserRolesNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitUserRoles200ResponseNERM, any>>;
}
async patchUsersNerm(requestParameters: sdk.UsersNERMApiPatchUsersRequest): Promise<AxiosResponse<sdk.SubmitUsers200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchUsersNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitUsers200ResponseNERM, any>>;
}
async patchWorkflowSessionNerm(requestParameters: sdk.WorkflowSessionsNERMApiPatchWorkflowSessionRequest): Promise<AxiosResponse<sdk.SubmitWorkflowSession200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchWorkflowSessionNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitWorkflowSession200ResponseNERM, any>>;
}
async patchWorkflowV1(requestParameters: workflowsTypes.WorkflowsApiPatchWorkflowV1Request): Promise<AxiosResponse<workflowsTypes.Workflow, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchWorkflowV1(requestParameters) as Promise<AxiosResponse<workflowsTypes.Workflow, any>>;
}
async patchWorkgroupV1(requestParameters: governanceGroupsTypes.GovernanceGroupsApiPatchWorkgroupV1Request): Promise<AxiosResponse<governanceGroupsTypes.Workgroupdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.patchWorkgroupV1(requestParameters) as Promise<AxiosResponse<governanceGroupsTypes.Workgroupdto, any>>;
}
async pingClusterV1(requestParameters: sourcesTypes.SourcesApiPingClusterV1Request): Promise<AxiosResponse<sourcesTypes.Statusresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.pingClusterV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Statusresponse, any>>;
}
async publishCustomUserLevelV1(requestParameters: customUserLevelsTypes.CustomUserLevelsApiPublishCustomUserLevelV1Request): Promise<AxiosResponse<customUserLevelsTypes.Userlevelpublishsummary, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.publishCustomUserLevelV1(requestParameters) as Promise<AxiosResponse<customUserLevelsTypes.Userlevelpublishsummary, any>>;
}
async publishDataSegmentV1(requestParameters: dataSegmentationTypes.DataSegmentationApiPublishDataSegmentV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.publishDataSegmentV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async putAccountV1(requestParameters: accountsTypes.AccountsApiPutAccountV1Request): Promise<AxiosResponse<accountsTypes.Accountsasyncresult, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putAccountV1(requestParameters) as Promise<AxiosResponse<accountsTypes.Accountsasyncresult, any>>;
}
async putApplicationV1(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiPutApplicationV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putApplicationV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async putApprovalsConfigV1(requestParameters: approvalsTypes.ApprovalsApiPutApprovalsConfigV1Request): Promise<AxiosResponse<approvalsTypes.Approvalconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putApprovalsConfigV1(requestParameters) as Promise<AxiosResponse<approvalsTypes.Approvalconfig, any>>;
}
async putClientLogConfigurationV1(requestParameters: managedClustersTypes.ManagedClustersApiPutClientLogConfigurationV1Request): Promise<AxiosResponse<managedClustersTypes.Clientlogconfiguration, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putClientLogConfigurationV1(requestParameters) as Promise<AxiosResponse<managedClustersTypes.Clientlogconfiguration, any>>;
}
async putConnectorCorrelationConfigV1(requestParameters: connectorsTypes.ConnectorsApiPutConnectorCorrelationConfigV1Request): Promise<AxiosResponse<connectorsTypes.Updatedetail, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putConnectorCorrelationConfigV1(requestParameters) as Promise<AxiosResponse<connectorsTypes.Updatedetail, any>>;
}
async putConnectorCustomizerV1(requestParameters: connectorCustomizersTypes.ConnectorCustomizersApiPutConnectorCustomizerV1Request): Promise<AxiosResponse<connectorCustomizersTypes.Connectorcustomizerupdateresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putConnectorCustomizerV1(requestParameters) as Promise<AxiosResponse<connectorCustomizersTypes.Connectorcustomizerupdateresponse, any>>;
}
async putConnectorRuleV1(requestParameters: connectorRuleManagementTypes.ConnectorRuleManagementApiPutConnectorRuleV1Request): Promise<AxiosResponse<connectorRuleManagementTypes.Connectorruleresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putConnectorRuleV1(requestParameters) as Promise<AxiosResponse<connectorRuleManagementTypes.Connectorruleresponse, any>>;
}
async putConnectorSourceConfigV1(requestParameters: connectorsTypes.ConnectorsApiPutConnectorSourceConfigV1Request): Promise<AxiosResponse<connectorsTypes.Updatedetail, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putConnectorSourceConfigV1(requestParameters) as Promise<AxiosResponse<connectorsTypes.Updatedetail, any>>;
}
async putConnectorSourceTemplateV1(requestParameters: connectorsTypes.ConnectorsApiPutConnectorSourceTemplateV1Request): Promise<AxiosResponse<connectorsTypes.Updatedetail, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putConnectorSourceTemplateV1(requestParameters) as Promise<AxiosResponse<connectorsTypes.Updatedetail, any>>;
}
async putConnectorTranslationsV1(requestParameters: connectorsTypes.ConnectorsApiPutConnectorTranslationsV1Request): Promise<AxiosResponse<connectorsTypes.Updatedetail, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putConnectorTranslationsV1(requestParameters) as Promise<AxiosResponse<connectorsTypes.Updatedetail, any>>;
}
async putCorrelationConfigV1(requestParameters: sourcesTypes.SourcesApiPutCorrelationConfigV1Request): Promise<AxiosResponse<sourcesTypes.Correlationconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putCorrelationConfigV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Correlationconfig, any>>;
}
async putCustomPrivilegeCriteriaValueV1(requestParameters: privilegeCriteriaTypes.PrivilegeCriteriaApiPutCustomPrivilegeCriteriaValueV1Request): Promise<AxiosResponse<privilegeCriteriaTypes.Privilegecriteriadto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putCustomPrivilegeCriteriaValueV1(requestParameters) as Promise<AxiosResponse<privilegeCriteriaTypes.Privilegecriteriadto, any>>;
}
async putEntitlementRequestConfigV1(requestParameters: entitlementsTypes.EntitlementsApiPutEntitlementRequestConfigV1Request): Promise<AxiosResponse<entitlementsTypes.Entitlementrequestconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putEntitlementRequestConfigV1(requestParameters) as Promise<AxiosResponse<entitlementsTypes.Entitlementrequestconfig, any>>;
}
async putIdentityAttributeV1(requestParameters: identityAttributesTypes.IdentityAttributesApiPutIdentityAttributeV1Request): Promise<AxiosResponse<identityAttributesTypes.Identityattribute2, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putIdentityAttributeV1(requestParameters) as Promise<AxiosResponse<identityAttributesTypes.Identityattribute2, any>>;
}
async putIdentityCollectorV1(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiPutIdentityCollectorV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putIdentityCollectorV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async putLauncherV1(requestParameters: launchersTypes.LaunchersApiPutLauncherV1Request): Promise<AxiosResponse<launchersTypes.Launcher, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putLauncherV1(requestParameters) as Promise<AxiosResponse<launchersTypes.Launcher, any>>;
}
async putMailFromAttributesV1(requestParameters: notificationsTypes.NotificationsApiPutMailFromAttributesV1Request): Promise<AxiosResponse<notificationsTypes.Mailfromattributes, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putMailFromAttributesV1(requestParameters) as Promise<AxiosResponse<notificationsTypes.Mailfromattributes, any>>;
}
async putNativeChangeDetectionConfigV1(requestParameters: sourcesTypes.SourcesApiPutNativeChangeDetectionConfigV1Request): Promise<AxiosResponse<sourcesTypes.Nativechangedetectionconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putNativeChangeDetectionConfigV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Nativechangedetectionconfig, any>>;
}
async putPasswordDictionaryV1(requestParameters: passwordDictionaryTypes.PasswordDictionaryApiPutPasswordDictionaryV1Request = {}): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putPasswordDictionaryV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async putPasswordOrgConfigV1(requestParameters: passwordConfigurationTypes.PasswordConfigurationApiPutPasswordOrgConfigV1Request): Promise<AxiosResponse<passwordConfigurationTypes.Passwordorgconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putPasswordOrgConfigV1(requestParameters) as Promise<AxiosResponse<passwordConfigurationTypes.Passwordorgconfig, any>>;
}
async putPolicyScheduleV1(requestParameters: sodPoliciesTypes.SODPoliciesApiPutPolicyScheduleV1Request): Promise<AxiosResponse<sodPoliciesTypes.Sodpolicyschedule, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putPolicyScheduleV1(requestParameters) as Promise<AxiosResponse<sodPoliciesTypes.Sodpolicyschedule, any>>;
}
async putProvisioningPolicyV1(requestParameters: sourcesTypes.SourcesApiPutProvisioningPolicyV1Request): Promise<AxiosResponse<sourcesTypes.Provisioningpolicydto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putProvisioningPolicyV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Provisioningpolicydto, any>>;
}
async putProvisioningPolicyV2(requestParameters: sourcesTypes.SourcesApiPutProvisioningPolicyV2Request): Promise<AxiosResponse<sourcesTypes.Provisioningpolicydtov2, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putProvisioningPolicyV2(requestParameters) as Promise<AxiosResponse<sourcesTypes.Provisioningpolicydtov2, any>>;
}
async putReassignmentConfigV1(requestParameters: workReassignmentTypes.WorkReassignmentApiPutReassignmentConfigV1Request): Promise<AxiosResponse<workReassignmentTypes.Configurationitemresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putReassignmentConfigV1(requestParameters) as Promise<AxiosResponse<workReassignmentTypes.Configurationitemresponse, any>>;
}
async putSavedSearchV1(requestParameters: savedSearchTypes.SavedSearchApiPutSavedSearchV1Request): Promise<AxiosResponse<savedSearchTypes.Savedsearch, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putSavedSearchV1(requestParameters) as Promise<AxiosResponse<savedSearchTypes.Savedsearch, any>>;
}
async putScheduleV1(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiPutScheduleV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putScheduleV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async putServiceDeskIntegrationV1(requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiPutServiceDeskIntegrationV1Request): Promise<AxiosResponse<serviceDeskIntegrationTypes.Servicedeskintegrationdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putServiceDeskIntegrationV1(requestParameters) as Promise<AxiosResponse<serviceDeskIntegrationTypes.Servicedeskintegrationdto, any>>;
}
async putSIMIntegrationV1(requestParameters: simIntegrationsTypes.SIMIntegrationsApiPutSIMIntegrationV1Request): Promise<AxiosResponse<simIntegrationsTypes.Servicedeskintegrationdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putSIMIntegrationV1(requestParameters) as Promise<AxiosResponse<simIntegrationsTypes.Servicedeskintegrationdto, any>>;
}
async putSodPolicyV1(requestParameters: sodPoliciesTypes.SODPoliciesApiPutSodPolicyV1Request): Promise<AxiosResponse<sodPoliciesTypes.Sodpolicy, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putSodPolicyV1(requestParameters) as Promise<AxiosResponse<sodPoliciesTypes.Sodpolicy, any>>;
}
async putSourceAttrSyncConfigV1(requestParameters: sourcesTypes.SourcesApiPutSourceAttrSyncConfigV1Request): Promise<AxiosResponse<sourcesTypes.Attrsyncsourceconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putSourceAttrSyncConfigV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Attrsyncsourceconfig, any>>;
}
async putSourceSchemaV1(requestParameters: sourcesTypes.SourcesApiPutSourceSchemaV1Request): Promise<AxiosResponse<sourcesTypes.Schema, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putSourceSchemaV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Schema, any>>;
}
async putSourceV1(requestParameters: sourcesTypes.SourcesApiPutSourceV1Request): Promise<AxiosResponse<sourcesTypes.Source, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putSourceV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Source, any>>;
}
async putTaggedObjectV1(requestParameters: taggedObjectsTypes.TaggedObjectsApiPutTaggedObjectV1Request): Promise<AxiosResponse<taggedObjectsTypes.Taggedobject, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putTaggedObjectV1(requestParameters) as Promise<AxiosResponse<taggedObjectsTypes.Taggedobject, any>>;
}
async putTenantConfigurationV1(requestParameters: workReassignmentTypes.WorkReassignmentApiPutTenantConfigurationV1Request): Promise<AxiosResponse<workReassignmentTypes.Tenantconfigurationresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putTenantConfigurationV1(requestParameters) as Promise<AxiosResponse<workReassignmentTypes.Tenantconfigurationresponse, any>>;
}
async putWorkflowV1(requestParameters: workflowsTypes.WorkflowsApiPutWorkflowV1Request): Promise<AxiosResponse<workflowsTypes.Workflow, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.putWorkflowV1(requestParameters) as Promise<AxiosResponse<workflowsTypes.Workflow, any>>;
}
async queryPasswordInfoV1(requestParameters: passwordManagementTypes.PasswordManagementApiQueryPasswordInfoV1Request): Promise<AxiosResponse<passwordManagementTypes.Passwordinfo, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.queryPasswordInfoV1(requestParameters) as Promise<AxiosResponse<passwordManagementTypes.Passwordinfo, any>>;
}
async reassignIdentityCertificationsV1(requestParameters: certificationsTypes.CertificationsApiReassignIdentityCertificationsV1Request): Promise<AxiosResponse<certificationsTypes.Identitycertificationdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.reassignIdentityCertificationsV1(requestParameters) as Promise<AxiosResponse<certificationsTypes.Identitycertificationdto, any>>;
}
async rejectAccessRequestV1(requestParameters: accessRequestApprovalsTypes.AccessRequestApprovalsApiRejectAccessRequestV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.rejectAccessRequestV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async rejectApprovalInBulkV1(requestParameters: approvalsTypes.ApprovalsApiRejectApprovalInBulkV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.rejectApprovalInBulkV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async rejectApprovalItemsInBulkV1(requestParameters: workItemsTypes.WorkItemsApiRejectApprovalItemsInBulkV1Request): Promise<AxiosResponse<workItemsTypes.Workitems, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.rejectApprovalItemsInBulkV1(requestParameters) as Promise<AxiosResponse<workItemsTypes.Workitems, any>>;
}
async rejectApprovalItemV1(requestParameters: workItemsTypes.WorkItemsApiRejectApprovalItemV1Request): Promise<AxiosResponse<workItemsTypes.Workitems, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.rejectApprovalItemV1(requestParameters) as Promise<AxiosResponse<workItemsTypes.Workitems, any>>;
}
async rejectApprovalV1(requestParameters: approvalsTypes.ApprovalsApiRejectApprovalV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.rejectApprovalV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async rejectNonEmployeeRequestV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiRejectNonEmployeeRequestV1Request): Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeeapprovalitem, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.rejectNonEmployeeRequestV1(requestParameters) as Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeeapprovalitem, any>>;
}
async resetIdentityV1(requestParameters: identitiesTypes.IdentitiesApiResetIdentityV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.resetIdentityV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async resetSourceEntitlementsV1(requestParameters: entitlementsTypes.EntitlementsApiResetSourceEntitlementsV1Request): Promise<AxiosResponse<entitlementsTypes.Entitlementsourceresetbasereferencedto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.resetSourceEntitlementsV1(requestParameters) as Promise<AxiosResponse<entitlementsTypes.Entitlementsourceresetbasereferencedto, any>>;
}
async searchAdvancedSearchbyIDNerm(requestParameters: sdk.AdvancedSearchNERMApiSearchAdvancedSearchbyIDRequest): Promise<AxiosResponse<sdk.SearchAdvancedSearch200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchAdvancedSearchbyIDNerm(requestParameters) as Promise<AxiosResponse<sdk.SearchAdvancedSearch200ResponseNERM, any>>;
}
async searchAdvancedSearchNerm(requestParameters: sdk.AdvancedSearchNERMApiSearchAdvancedSearchRequest): Promise<AxiosResponse<sdk.SearchAdvancedSearch200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchAdvancedSearchNerm(requestParameters) as Promise<AxiosResponse<sdk.SearchAdvancedSearch200ResponseNERM, any>>;
}
async searchAggregateV1(requestParameters: searchTypes.SearchApiSearchAggregateV1Request): Promise<AxiosResponse<searchTypes.Aggregationresult, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchAggregateV1(requestParameters) as Promise<AxiosResponse<searchTypes.Aggregationresult, any>>;
}
async searchCountV1(requestParameters: searchTypes.SearchApiSearchCountV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchCountV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async searchFormDefinitionsByTenantV1(requestParameters: customFormsTypes.CustomFormsApiSearchFormDefinitionsByTenantV1Request = {}): Promise<AxiosResponse<customFormsTypes.Listformdefinitionsbytenantresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchFormDefinitionsByTenantV1(requestParameters) as Promise<AxiosResponse<customFormsTypes.Listformdefinitionsbytenantresponse, any>>;
}
async searchFormElementDataByElementIDV1(requestParameters: customFormsTypes.CustomFormsApiSearchFormElementDataByElementIDV1Request): Promise<AxiosResponse<customFormsTypes.Listformelementdatabyelementidresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchFormElementDataByElementIDV1(requestParameters) as Promise<AxiosResponse<customFormsTypes.Listformelementdatabyelementidresponse, any>>;
}
async searchFormInstancesByTenantV1(requestParameters: customFormsTypes.CustomFormsApiSearchFormInstancesByTenantV1Request = {}): Promise<AxiosResponse<Array<customFormsTypes.Listforminstancesbytenantresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchFormInstancesByTenantV1(requestParameters) as Promise<AxiosResponse<Array<customFormsTypes.Listforminstancesbytenantresponse>, any>>;
}
async searchGetV1(requestParameters: searchTypes.SearchApiSearchGetV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchGetV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async searchNerm(requestParameters: sdk.AuditsNERMApiSearchRequest): Promise<AxiosResponse<sdk.Search200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchNerm(requestParameters) as Promise<AxiosResponse<sdk.Search200ResponseNERM, any>>;
}
async searchParametersV1(requestParameters: parameterStorageTypes.ParameterStorageApiSearchParametersV1Request = {}): Promise<AxiosResponse<Array<parameterStorageTypes.Parameterstorageparameter>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchParametersV1(requestParameters) as Promise<AxiosResponse<Array<parameterStorageTypes.Parameterstorageparameter>, any>>;
}
async searchPostV1(requestParameters: searchTypes.SearchApiSearchPostV1Request): Promise<AxiosResponse<Array<any>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchPostV1(requestParameters) as Promise<AxiosResponse<Array<any>, any>>;
}
async searchPreDefinedSelectOptionsV1(): Promise<AxiosResponse<customFormsTypes.Listpredefinedselectoptionsresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchPreDefinedSelectOptionsV1() as Promise<AxiosResponse<customFormsTypes.Listpredefinedselectoptionsresponse, any>>;
}
async searchResourceObjectsV1(requestParameters: sourcesTypes.SourcesApiSearchResourceObjectsV1Request): Promise<AxiosResponse<sourcesTypes.Resourceobjectsresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchResourceObjectsV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Resourceobjectsresponse, any>>;
}
async searchRolesByFilterV1(requestParameters: rolesTypes.RolesApiSearchRolesByFilterV1Request = {}): Promise<AxiosResponse<Array<rolesTypes.Role>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.searchRolesByFilterV1(requestParameters) as Promise<AxiosResponse<Array<rolesTypes.Role>, any>>;
}
async sendClassifyMachineAccountFromSourceV1(requestParameters: classifySourceTypes.ClassifySourceApiSendClassifyMachineAccountFromSourceV1Request): Promise<AxiosResponse<classifySourceTypes.SendClassifyMachineAccountFromSourceV1200Response, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.sendClassifyMachineAccountFromSourceV1(requestParameters) as Promise<AxiosResponse<classifySourceTypes.SendClassifyMachineAccountFromSourceV1200Response, any>>;
}
async sendClassifyMachineAccountV1(requestParameters: machineAccountClassifyTypes.MachineAccountClassifyApiSendClassifyMachineAccountV1Request): Promise<AxiosResponse<machineAccountClassifyTypes.SendClassifyMachineAccountV1200Response, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.sendClassifyMachineAccountV1(requestParameters) as Promise<AxiosResponse<machineAccountClassifyTypes.SendClassifyMachineAccountV1200Response, any>>;
}
async sendDeclassifyMachineAccountFromSourceV1(requestParameters: declassifySourceTypes.DeclassifySourceApiSendDeclassifyMachineAccountFromSourceV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.sendDeclassifyMachineAccountFromSourceV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async sendIdentityVerificationAccountTokenV1(requestParameters: identitiesTypes.IdentitiesApiSendIdentityVerificationAccountTokenV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.sendIdentityVerificationAccountTokenV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async sendManualDiscoverApplicationsCsvTemplateV1(requestParameters: applicationDiscoveryTypes.ApplicationDiscoveryApiSendManualDiscoverApplicationsCsvTemplateV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.sendManualDiscoverApplicationsCsvTemplateV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async sendStreamVerificationV1(requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiSendStreamVerificationV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.sendStreamVerificationV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async sendTestNotificationV1(requestParameters: notificationsTypes.NotificationsApiSendTestNotificationV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.sendTestNotificationV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async setAccessRequestConfigV1(requestParameters: accessRequestsTypes.AccessRequestsApiSetAccessRequestConfigV1Request): Promise<AxiosResponse<accessRequestsTypes.Accessrequestconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setAccessRequestConfigV1(requestParameters) as Promise<AxiosResponse<accessRequestsTypes.Accessrequestconfig, any>>;
}
async setAccessRequestConfigV2(requestParameters: accessRequestsTypes.AccessRequestsApiSetAccessRequestConfigV2Request): Promise<AxiosResponse<accessRequestsTypes.Accessrequestconfigv2, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setAccessRequestConfigV2(requestParameters) as Promise<AxiosResponse<accessRequestsTypes.Accessrequestconfigv2, any>>;
}
async setAccessRequestRecommendationsConfigV1(requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiSetAccessRequestRecommendationsConfigV1Request): Promise<AxiosResponse<iaiAccessRequestRecommendationsTypes.Accessrequestrecommendationconfigdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setAccessRequestRecommendationsConfigV1(requestParameters) as Promise<AxiosResponse<iaiAccessRequestRecommendationsTypes.Accessrequestrecommendationconfigdto, any>>;
}
async setBrandingItemV1(requestParameters: brandingTypes.BrandingApiSetBrandingItemV1Request): Promise<AxiosResponse<brandingTypes.Brandingitem, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setBrandingItemV1(requestParameters) as Promise<AxiosResponse<brandingTypes.Brandingitem, any>>;
}
async setCampaignReportsConfigV1(requestParameters: certificationCampaignsTypes.CertificationCampaignsApiSetCampaignReportsConfigV1Request): Promise<AxiosResponse<certificationCampaignsTypes.Campaignreportsconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setCampaignReportsConfigV1(requestParameters) as Promise<AxiosResponse<certificationCampaignsTypes.Campaignreportsconfig, any>>;
}
async setCampaignTemplateScheduleV1(requestParameters: certificationCampaignsTypes.CertificationCampaignsApiSetCampaignTemplateScheduleV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setCampaignTemplateScheduleV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async setIconV1(requestParameters: iconsTypes.IconsApiSetIconV1Request): Promise<AxiosResponse<iconsTypes.SetIconV1200Response, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setIconV1(requestParameters) as Promise<AxiosResponse<iconsTypes.SetIconV1200Response, any>>;
}
async setLifecycleStateV1(requestParameters: lifecycleStatesTypes.LifecycleStatesApiSetLifecycleStateV1Request): Promise<AxiosResponse<lifecycleStatesTypes.SetLifecycleStateV1200Response, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setLifecycleStateV1(requestParameters) as Promise<AxiosResponse<lifecycleStatesTypes.SetLifecycleStateV1200Response, any>>;
}
async setMachineAccountMappingsV1(requestParameters: machineAccountMappingsTypes.MachineAccountMappingsApiSetMachineAccountMappingsV1Request): Promise<AxiosResponse<Array<machineAccountMappingsTypes.Attributemappings>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setMachineAccountMappingsV1(requestParameters) as Promise<AxiosResponse<Array<machineAccountMappingsTypes.Attributemappings>, any>>;
}
async setMachineClassificationConfigV1(requestParameters: machineClassificationConfigTypes.MachineClassificationConfigApiSetMachineClassificationConfigV1Request): Promise<AxiosResponse<machineClassificationConfigTypes.Machineclassificationconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setMachineClassificationConfigV1(requestParameters) as Promise<AxiosResponse<machineClassificationConfigTypes.Machineclassificationconfig, any>>;
}
async setMFADuoConfigV1(requestParameters: mfaConfigurationTypes.MFAConfigurationApiSetMFADuoConfigV1Request): Promise<AxiosResponse<mfaConfigurationTypes.Mfaduoconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setMFADuoConfigV1(requestParameters) as Promise<AxiosResponse<mfaConfigurationTypes.Mfaduoconfig, any>>;
}
async setMFAKBAConfigV1(requestParameters: mfaConfigurationTypes.MFAConfigurationApiSetMFAKBAConfigV1Request): Promise<AxiosResponse<Array<mfaConfigurationTypes.Kbaanswerresponseitem>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setMFAKBAConfigV1(requestParameters) as Promise<AxiosResponse<Array<mfaConfigurationTypes.Kbaanswerresponseitem>, any>>;
}
async setMFAOktaConfigV1(requestParameters: mfaConfigurationTypes.MFAConfigurationApiSetMFAOktaConfigV1Request): Promise<AxiosResponse<mfaConfigurationTypes.Mfaoktaconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setMFAOktaConfigV1(requestParameters) as Promise<AxiosResponse<mfaConfigurationTypes.Mfaoktaconfig, any>>;
}
async setPasswordPolicyV1(requestParameters: passwordPoliciesTypes.PasswordPoliciesApiSetPasswordPolicyV1Request): Promise<AxiosResponse<passwordPoliciesTypes.Passwordpolicyv3dto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setPasswordPolicyV1(requestParameters) as Promise<AxiosResponse<passwordPoliciesTypes.Passwordpolicyv3dto, any>>;
}
async setPasswordV1(requestParameters: passwordManagementTypes.PasswordManagementApiSetPasswordV1Request): Promise<AxiosResponse<passwordManagementTypes.Passwordchangeresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setPasswordV1(requestParameters) as Promise<AxiosResponse<passwordManagementTypes.Passwordchangeresponse, any>>;
}
async setRolePropagationConfigV1(requestParameters: rolePropagationTypes.RolePropagationApiSetRolePropagationConfigV1Request): Promise<AxiosResponse<rolePropagationTypes.RolePropagationConfigResponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setRolePropagationConfigV1(requestParameters) as Promise<AxiosResponse<rolePropagationTypes.RolePropagationConfigResponse, any>>;
}
async setStreamConfigurationV1(requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiSetStreamConfigurationV1Request): Promise<AxiosResponse<sharedSignalsFrameworkSsfTypes.Updatestreamconfigresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setStreamConfigurationV1(requestParameters) as Promise<AxiosResponse<sharedSignalsFrameworkSsfTypes.Updatestreamconfigresponse, any>>;
}
async setTagsToManyObjectsV1(requestParameters: taggedObjectsTypes.TaggedObjectsApiSetTagsToManyObjectsV1Request): Promise<AxiosResponse<Array<taggedObjectsTypes.Bulktaggedobjectresponse>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setTagsToManyObjectsV1(requestParameters) as Promise<AxiosResponse<Array<taggedObjectsTypes.Bulktaggedobjectresponse>, any>>;
}
async setTagToObjectV1(requestParameters: taggedObjectsTypes.TaggedObjectsApiSetTagToObjectV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setTagToObjectV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async setTenantUiMetadataV1(requestParameters: uiMetadataTypes.UIMetadataApiSetTenantUiMetadataV1Request): Promise<AxiosResponse<uiMetadataTypes.Tenantuimetadataitemresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.setTenantUiMetadataV1(requestParameters) as Promise<AxiosResponse<uiMetadataTypes.Tenantuimetadataitemresponse, any>>;
}
async showPreviewDataSourceV1(requestParameters: customFormsTypes.CustomFormsApiShowPreviewDataSourceV1Request): Promise<AxiosResponse<customFormsTypes.Previewdatasourceresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.showPreviewDataSourceV1(requestParameters) as Promise<AxiosResponse<customFormsTypes.Previewdatasourceresponse, any>>;
}
async showUserLevelCountsV1(requestParameters: customUserLevelsTypes.CustomUserLevelsApiShowUserLevelCountsV1Request): Promise<AxiosResponse<Array<customUserLevelsTypes.Authuserlevelsidentitycount>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.showUserLevelCountsV1(requestParameters) as Promise<AxiosResponse<Array<customUserLevelsTypes.Authuserlevelsidentitycount>, any>>;
}
async signOffIdentityCertificationV1(requestParameters: certificationsTypes.CertificationsApiSignOffIdentityCertificationV1Request): Promise<AxiosResponse<certificationsTypes.Identitycertificationdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.signOffIdentityCertificationV1(requestParameters) as Promise<AxiosResponse<certificationsTypes.Identitycertificationdto, any>>;
}
async startActivateWorkflowV1(requestParameters: jitActivationsTypes.JITActivationsApiStartActivateWorkflowV1Request): Promise<AxiosResponse<jitActivationsTypes.Jitactivationactivateresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startActivateWorkflowV1(requestParameters) as Promise<AxiosResponse<jitActivationsTypes.Jitactivationactivateresponse, any>>;
}
async startApplicationDiscoveryV1(requestParameters: applicationDiscoveryTypes.ApplicationDiscoveryApiStartApplicationDiscoveryV1Request): Promise<AxiosResponse<applicationDiscoveryTypes.Applicationdiscoveryresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startApplicationDiscoveryV1(requestParameters) as Promise<AxiosResponse<applicationDiscoveryTypes.Applicationdiscoveryresponse, any>>;
}
async startCampaignRemediationScanV1(requestParameters: certificationCampaignsTypes.CertificationCampaignsApiStartCampaignRemediationScanV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startCampaignRemediationScanV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async startCampaignReportV1(requestParameters: certificationCampaignsTypes.CertificationCampaignsApiStartCampaignReportV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startCampaignReportV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async startCampaignV1(requestParameters: certificationCampaignsTypes.CertificationCampaignsApiStartCampaignV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startCampaignV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async startDeactivateWorkflowV1(requestParameters: jitActivationsTypes.JITActivationsApiStartDeactivateWorkflowV1Request): Promise<AxiosResponse<jitActivationsTypes.Jitactivationdeactivateresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startDeactivateWorkflowV1(requestParameters) as Promise<AxiosResponse<jitActivationsTypes.Jitactivationdeactivateresponse, any>>;
}
async startEvaluateSodPolicyV1(requestParameters: sodPoliciesTypes.SODPoliciesApiStartEvaluateSodPolicyV1Request): Promise<AxiosResponse<sodPoliciesTypes.Reportresultreference, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startEvaluateSodPolicyV1(requestParameters) as Promise<AxiosResponse<sodPoliciesTypes.Reportresultreference, any>>;
}
async startExtendWorkflowV1(requestParameters: jitActivationsTypes.JITActivationsApiStartExtendWorkflowV1Request): Promise<AxiosResponse<jitActivationsTypes.Jitactivationextendresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startExtendWorkflowV1(requestParameters) as Promise<AxiosResponse<jitActivationsTypes.Jitactivationextendresponse, any>>;
}
async startGenerateCampaignTemplateV1(requestParameters: certificationCampaignsTypes.CertificationCampaignsApiStartGenerateCampaignTemplateV1Request): Promise<AxiosResponse<certificationCampaignsTypes.Campaignreference, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startGenerateCampaignTemplateV1(requestParameters) as Promise<AxiosResponse<certificationCampaignsTypes.Campaignreference, any>>;
}
async startIdentitiesInviteV1(requestParameters: identitiesTypes.IdentitiesApiStartIdentitiesInviteV1Request): Promise<AxiosResponse<identitiesTypes.Taskstatus, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startIdentitiesInviteV1(requestParameters) as Promise<AxiosResponse<identitiesTypes.Taskstatus, any>>;
}
async startIdentityProcessingV1(requestParameters: identitiesTypes.IdentitiesApiStartIdentityProcessingV1Request): Promise<AxiosResponse<identitiesTypes.Taskresultresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startIdentityProcessingV1(requestParameters) as Promise<AxiosResponse<identitiesTypes.Taskresultresponse, any>>;
}
async startLauncherV1(requestParameters: launchersTypes.LaunchersApiStartLauncherV1Request): Promise<AxiosResponse<launchersTypes.StartLauncherV1200Response, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startLauncherV1(requestParameters) as Promise<AxiosResponse<launchersTypes.StartLauncherV1200Response, any>>;
}
async startMachineIdentityAggregationV1(requestParameters: machineIdentitiesTypes.MachineIdentitiesApiStartMachineIdentityAggregationV1Request): Promise<AxiosResponse<machineIdentitiesTypes.Machineidentityaggregationresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startMachineIdentityAggregationV1(requestParameters) as Promise<AxiosResponse<machineIdentitiesTypes.Machineidentityaggregationresponse, any>>;
}
async startPredictSodViolationsV1(requestParameters: sodViolationsTypes.SODViolationsApiStartPredictSodViolationsV1Request): Promise<AxiosResponse<sodViolationsTypes.Violationprediction, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startPredictSodViolationsV1(requestParameters) as Promise<AxiosResponse<sodViolationsTypes.Violationprediction, any>>;
}
async startReportV1(requestParameters: reportsDataExtractionTypes.ReportsDataExtractionApiStartReportV1Request): Promise<AxiosResponse<reportsDataExtractionTypes.Taskresultdetails, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startReportV1(requestParameters) as Promise<AxiosResponse<reportsDataExtractionTypes.Taskresultdetails, any>>;
}
async startRolePropagationV1(requestParameters: rolePropagationTypes.RolePropagationApiStartRolePropagationV1Request = {}): Promise<AxiosResponse<rolePropagationTypes.RolePropagationResponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startRolePropagationV1(requestParameters) as Promise<AxiosResponse<rolePropagationTypes.RolePropagationResponse, any>>;
}
async startSodAllPoliciesForOrgV1(requestParameters: sodPoliciesTypes.SODPoliciesApiStartSodAllPoliciesForOrgV1Request = {}): Promise<AxiosResponse<sodPoliciesTypes.Reportresultreference, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startSodAllPoliciesForOrgV1(requestParameters) as Promise<AxiosResponse<sodPoliciesTypes.Reportresultreference, any>>;
}
async startSodPolicyV1(requestParameters: sodPoliciesTypes.SODPoliciesApiStartSodPolicyV1Request): Promise<AxiosResponse<sodPoliciesTypes.Reportresultreference, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startSodPolicyV1(requestParameters) as Promise<AxiosResponse<sodPoliciesTypes.Reportresultreference, any>>;
}
async startTaskRerunV1(requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiStartTaskRerunV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startTaskRerunV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async startTestTriggerInvocationV1(requestParameters: triggersTypes.TriggersApiStartTestTriggerInvocationV1Request): Promise<AxiosResponse<Array<triggersTypes.Invocation>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startTestTriggerInvocationV1(requestParameters) as Promise<AxiosResponse<Array<triggersTypes.Invocation>, any>>;
}
async startViolationCheckV1(requestParameters: sodViolationsTypes.SODViolationsApiStartViolationCheckV1Request): Promise<AxiosResponse<sodViolationsTypes.Sodviolationcheck, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.startViolationCheckV1(requestParameters) as Promise<AxiosResponse<sodViolationsTypes.Sodviolationcheck, any>>;
}
async submitAccountSelectionV1(requestParameters: workItemsTypes.WorkItemsApiSubmitAccountSelectionV1Request): Promise<AxiosResponse<workItemsTypes.Workitems, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitAccountSelectionV1(requestParameters) as Promise<AxiosResponse<workItemsTypes.Workitems, any>>;
}
async submitAdvancedSearchNerm(requestParameters: sdk.AdvancedSearchNERMApiSubmitAdvancedSearchRequest): Promise<AxiosResponse<sdk.SubmitAdvancedSearch200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitAdvancedSearchNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitAdvancedSearch200ResponseNERM, any>>;
}
async submitAttributeOptionNerm(requestParameters: sdk.AttributeOptionsNERMApiSubmitAttributeOptionRequest): Promise<AxiosResponse<sdk.SubmitAttributeOption200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitAttributeOptionNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitAttributeOption200ResponseNERM, any>>;
}
async submitAttributeOptionsNerm(requestParameters: sdk.AttributeOptionsNERMApiSubmitAttributeOptionsRequest): Promise<AxiosResponse<sdk.SubmitAttributeOptions200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitAttributeOptionsNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitAttributeOptions200ResponseNERM, any>>;
}
async submitEntitlementRecommendationsAssignmentV1(requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiSubmitEntitlementRecommendationsAssignmentV1Request): Promise<AxiosResponse<suggestedEntitlementDescriptionTypes.Entitlementrecommendationassignresult, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitEntitlementRecommendationsAssignmentV1(requestParameters) as Promise<AxiosResponse<suggestedEntitlementDescriptionTypes.Entitlementrecommendationassignresult, any>>;
}
async submitProfileAvatarNerm(requestParameters: sdk.ProfilesNERMApiSubmitProfileAvatarRequest): Promise<AxiosResponse<sdk.UrlNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitProfileAvatarNerm(requestParameters) as Promise<AxiosResponse<sdk.UrlNERM, any>>;
}
async submitProfileNerm(requestParameters: sdk.ProfilesNERMApiSubmitProfileRequest): Promise<AxiosResponse<sdk.GetSingleSchemaMappedProfile200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitProfileNerm(requestParameters) as Promise<AxiosResponse<sdk.GetSingleSchemaMappedProfile200ResponseNERM, any>>;
}
async submitProfileTypeNerm(requestParameters: sdk.ProfileTypesNERMApiSubmitProfileTypeRequest): Promise<AxiosResponse<sdk.SubmitProfileType200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitProfileTypeNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitProfileType200ResponseNERM, any>>;
}
async submitProfileUploadNerm(requestParameters: sdk.ProfilesNERMApiSubmitProfileUploadRequest): Promise<AxiosResponse<sdk.UrlNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitProfileUploadNerm(requestParameters) as Promise<AxiosResponse<sdk.UrlNERM, any>>;
}
async submitReassignCertsAsyncV1(requestParameters: certificationsTypes.CertificationsApiSubmitReassignCertsAsyncV1Request): Promise<AxiosResponse<certificationsTypes.Certificationtask, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitReassignCertsAsyncV1(requestParameters) as Promise<AxiosResponse<certificationsTypes.Certificationtask, any>>;
}
async submitReloadAccountV1(requestParameters: accountsTypes.AccountsApiSubmitReloadAccountV1Request): Promise<AxiosResponse<accountsTypes.Accountsasyncresult, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitReloadAccountV1(requestParameters) as Promise<AxiosResponse<accountsTypes.Accountsasyncresult, any>>;
}
async submitRoleNerm(requestParameters: sdk.RolesNERMApiSubmitRoleRequest): Promise<AxiosResponse<sdk.SubmitRole200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitRoleNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitRole200ResponseNERM, any>>;
}
async submitRoleProfileNerm(requestParameters: sdk.RoleProfilesNERMApiSubmitRoleProfileRequest): Promise<AxiosResponse<sdk.SubmitRoleProfile200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitRoleProfileNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitRoleProfile200ResponseNERM, any>>;
}
async submitRoleProfilesNerm(requestParameters: sdk.RoleProfilesNERMApiSubmitRoleProfilesRequest): Promise<AxiosResponse<sdk.SubmitRoleProfiles200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitRoleProfilesNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitRoleProfiles200ResponseNERM, any>>;
}
async submitRolesNerm(requestParameters: sdk.RolesNERMApiSubmitRolesRequest): Promise<AxiosResponse<sdk.SubmitRoles200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitRolesNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitRoles200ResponseNERM, any>>;
}
async submitSedApprovalV1(requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiSubmitSedApprovalV1Request): Promise<AxiosResponse<Array<suggestedEntitlementDescriptionTypes.Sedapprovalstatus>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitSedApprovalV1(requestParameters) as Promise<AxiosResponse<Array<suggestedEntitlementDescriptionTypes.Sedapprovalstatus>, any>>;
}
async submitSedAssignmentV1(requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiSubmitSedAssignmentV1Request): Promise<AxiosResponse<suggestedEntitlementDescriptionTypes.Sedassignmentresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitSedAssignmentV1(requestParameters) as Promise<AxiosResponse<suggestedEntitlementDescriptionTypes.Sedassignmentresponse, any>>;
}
async submitSedBatchRequestV1(requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiSubmitSedBatchRequestV1Request = {}): Promise<AxiosResponse<suggestedEntitlementDescriptionTypes.Sedbatchresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitSedBatchRequestV1(requestParameters) as Promise<AxiosResponse<suggestedEntitlementDescriptionTypes.Sedbatchresponse, any>>;
}
async submitUserAvatarNerm(requestParameters: sdk.UsersNERMApiSubmitUserAvatarRequest): Promise<AxiosResponse<sdk.UrlNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitUserAvatarNerm(requestParameters) as Promise<AxiosResponse<sdk.UrlNERM, any>>;
}
async submitUserManagerNerm(requestParameters: sdk.UserManagersNERMApiSubmitUserManagerRequest): Promise<AxiosResponse<sdk.SubmitUserManager200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitUserManagerNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitUserManager200ResponseNERM, any>>;
}
async submitUserManagersNerm(requestParameters: sdk.UserManagersNERMApiSubmitUserManagersRequest): Promise<AxiosResponse<sdk.SubmitUserManagers200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitUserManagersNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitUserManagers200ResponseNERM, any>>;
}
async submitUserNerm(requestParameters: sdk.UsersNERMApiSubmitUserRequest): Promise<AxiosResponse<sdk.SubmitUser200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitUserNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitUser200ResponseNERM, any>>;
}
async submitUserProfileNerm(requestParameters: sdk.UserProfilesNERMApiSubmitUserProfileRequest): Promise<AxiosResponse<sdk.SubmitUserProfile200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitUserProfileNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitUserProfile200ResponseNERM, any>>;
}
async submitUserRoleNerm(requestParameters: sdk.UserRolesNERMApiSubmitUserRoleRequest): Promise<AxiosResponse<sdk.SubmitUserRole200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitUserRoleNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitUserRole200ResponseNERM, any>>;
}
async submitUserRolesNerm(requestParameters: sdk.UserRolesNERMApiSubmitUserRolesRequest): Promise<AxiosResponse<sdk.SubmitUserRoles200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitUserRolesNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitUserRoles200ResponseNERM, any>>;
}
async submitUsersNerm(requestParameters: sdk.UsersNERMApiSubmitUsersRequest): Promise<AxiosResponse<sdk.SubmitUsers200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitUsersNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitUsers200ResponseNERM, any>>;
}
async submitWorkflowSessionNerm(requestParameters: sdk.WorkflowSessionsNERMApiSubmitWorkflowSessionRequest): Promise<AxiosResponse<sdk.SubmitWorkflowSession200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitWorkflowSessionNerm(requestParameters) as Promise<AxiosResponse<sdk.SubmitWorkflowSession200ResponseNERM, any>>;
}
async submitWorkflowSessionUploadNerm(requestParameters: sdk.WorkflowSessionsNERMApiSubmitWorkflowSessionUploadRequest): Promise<AxiosResponse<sdk.UrlNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.submitWorkflowSessionUploadNerm(requestParameters) as Promise<AxiosResponse<sdk.UrlNERM, any>>;
}
async syncAttributesForSourceV1(requestParameters: sourcesTypes.SourcesApiSyncAttributesForSourceV1Request): Promise<AxiosResponse<sourcesTypes.Sourcesyncjob, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.syncAttributesForSourceV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Sourcesyncjob, any>>;
}
async synchronizeAttributesForIdentityV1(requestParameters: identitiesTypes.IdentitiesApiSynchronizeAttributesForIdentityV1Request): Promise<AxiosResponse<identitiesTypes.Identitysyncjob, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.synchronizeAttributesForIdentityV1(requestParameters) as Promise<AxiosResponse<identitiesTypes.Identitysyncjob, any>>;
}
async syncIdentityProfileV1(requestParameters: identityProfilesTypes.IdentityProfilesApiSyncIdentityProfileV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.syncIdentityProfileV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async testConnectionMultiHostSourcesV1(requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiTestConnectionMultiHostSourcesV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.testConnectionMultiHostSourcesV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async testConnectorRuleV1(requestParameters: connectorRuleManagementTypes.ConnectorRuleManagementApiTestConnectorRuleV1Request): Promise<AxiosResponse<connectorRuleManagementTypes.Connectorrulevalidationresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.testConnectorRuleV1(requestParameters) as Promise<AxiosResponse<connectorRuleManagementTypes.Connectorrulevalidationresponse, any>>;
}
async testExternalExecuteWorkflowV1(requestParameters: workflowsTypes.WorkflowsApiTestExternalExecuteWorkflowV1Request): Promise<AxiosResponse<workflowsTypes.TestExternalExecuteWorkflowV1200Response, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.testExternalExecuteWorkflowV1(requestParameters) as Promise<AxiosResponse<workflowsTypes.TestExternalExecuteWorkflowV1200Response, any>>;
}
async testMFAConfigV1(requestParameters: mfaConfigurationTypes.MFAConfigurationApiTestMFAConfigV1Request): Promise<AxiosResponse<mfaConfigurationTypes.Mfaconfigtestresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.testMFAConfigV1(requestParameters) as Promise<AxiosResponse<mfaConfigurationTypes.Mfaconfigtestresponse, any>>;
}
async testSourceConfigurationV1(requestParameters: sourcesTypes.SourcesApiTestSourceConfigurationV1Request): Promise<AxiosResponse<sourcesTypes.Statusresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.testSourceConfigurationV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Statusresponse, any>>;
}
async testSourceConnectionMultihostV1(requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiTestSourceConnectionMultihostV1Request): Promise<AxiosResponse<multiHostIntegrationTypes.TestSourceConnectionMultihostV1200Response, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.testSourceConnectionMultihostV1(requestParameters) as Promise<AxiosResponse<multiHostIntegrationTypes.TestSourceConnectionMultihostV1200Response, any>>;
}
async testSourceConnectionV1(requestParameters: sourcesTypes.SourcesApiTestSourceConnectionV1Request): Promise<AxiosResponse<sourcesTypes.Statusresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.testSourceConnectionV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Statusresponse, any>>;
}
async testSubscriptionFilterV1(requestParameters: triggersTypes.TriggersApiTestSubscriptionFilterV1Request): Promise<AxiosResponse<triggersTypes.Validatefilteroutputdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.testSubscriptionFilterV1(requestParameters) as Promise<AxiosResponse<triggersTypes.Validatefilteroutputdto, any>>;
}
async testWorkflowV1(requestParameters: workflowsTypes.WorkflowsApiTestWorkflowV1Request): Promise<AxiosResponse<workflowsTypes.TestWorkflowV1200Response, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.testWorkflowV1(requestParameters) as Promise<AxiosResponse<workflowsTypes.TestWorkflowV1200Response, any>>;
}
async unIgnoreIdentityOutliersV1(requestParameters: iaiOutliersTypes.IAIOutliersApiUnIgnoreIdentityOutliersV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.unIgnoreIdentityOutliersV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async unlockAccountV1(requestParameters: accountsTypes.AccountsApiUnlockAccountV1Request): Promise<AxiosResponse<accountsTypes.Accountsasyncresult, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.unlockAccountV1(requestParameters) as Promise<AxiosResponse<accountsTypes.Accountsasyncresult, any>>;
}
async unsubscribeScheduledSearchV1(requestParameters: scheduledSearchTypes.ScheduledSearchApiUnsubscribeScheduledSearchV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.unsubscribeScheduledSearchV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async updateAccessModelMetadataAttributeV1(requestParameters: accessModelMetadataTypes.AccessModelMetadataApiUpdateAccessModelMetadataAttributeV1Request): Promise<AxiosResponse<accessModelMetadataTypes.Attributedto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateAccessModelMetadataAttributeV1(requestParameters) as Promise<AxiosResponse<accessModelMetadataTypes.Attributedto, any>>;
}
async updateAccessModelMetadataAttributeValueV1(requestParameters: accessModelMetadataTypes.AccessModelMetadataApiUpdateAccessModelMetadataAttributeValueV1Request): Promise<AxiosResponse<accessModelMetadataTypes.Attributevaluedto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateAccessModelMetadataAttributeValueV1(requestParameters) as Promise<AxiosResponse<accessModelMetadataTypes.Attributevaluedto, any>>;
}
async updateAccessModelMetadataByFilterV1(requestParameters: accessModelMetadataTypes.AccessModelMetadataApiUpdateAccessModelMetadataByFilterV1Request): Promise<AxiosResponse<accessModelMetadataTypes.Accessmodelmetadatabulkupdateresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateAccessModelMetadataByFilterV1(requestParameters) as Promise<AxiosResponse<accessModelMetadataTypes.Accessmodelmetadatabulkupdateresponse, any>>;
}
async updateAccessModelMetadataByIdsV1(requestParameters: accessModelMetadataTypes.AccessModelMetadataApiUpdateAccessModelMetadataByIdsV1Request): Promise<AxiosResponse<accessModelMetadataTypes.Accessmodelmetadatabulkupdateresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateAccessModelMetadataByIdsV1(requestParameters) as Promise<AxiosResponse<accessModelMetadataTypes.Accessmodelmetadatabulkupdateresponse, any>>;
}
async updateAccessModelMetadataByQueryV1(requestParameters: accessModelMetadataTypes.AccessModelMetadataApiUpdateAccessModelMetadataByQueryV1Request): Promise<AxiosResponse<accessModelMetadataTypes.Accessmodelmetadatabulkupdateresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateAccessModelMetadataByQueryV1(requestParameters) as Promise<AxiosResponse<accessModelMetadataTypes.Accessmodelmetadatabulkupdateresponse, any>>;
}
async updateAccessProfilesInBulkV1(requestParameters: accessProfilesTypes.AccessProfilesApiUpdateAccessProfilesInBulkV1Request): Promise<AxiosResponse<Array<accessProfilesTypes.Accessprofileupdateitem>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateAccessProfilesInBulkV1(requestParameters) as Promise<AxiosResponse<Array<accessProfilesTypes.Accessprofileupdateitem>, any>>;
}
async updateAccountDeletionApprovalConfigV1(requestParameters: sourcesTypes.SourcesApiUpdateAccountDeletionApprovalConfigV1Request): Promise<AxiosResponse<sourcesTypes.Accountdeleteconfigdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateAccountDeletionApprovalConfigV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Accountdeleteconfigdto, any>>;
}
async updateAccountV1(requestParameters: accountsTypes.AccountsApiUpdateAccountV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateAccountV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async updateApprovalsAttributesV1(requestParameters: approvalsTypes.ApprovalsApiUpdateApprovalsAttributesV1Request): Promise<AxiosResponse<approvalsTypes.Approval2, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateApprovalsAttributesV1(requestParameters) as Promise<AxiosResponse<approvalsTypes.Approval2, any>>;
}
async updateApprovalsCommentsV1(requestParameters: approvalsTypes.ApprovalsApiUpdateApprovalsCommentsV1Request): Promise<AxiosResponse<approvalsTypes.Approval2, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateApprovalsCommentsV1(requestParameters) as Promise<AxiosResponse<approvalsTypes.Approval2, any>>;
}
async updateApprovalsReassignV1(requestParameters: approvalsTypes.ApprovalsApiUpdateApprovalsReassignV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateApprovalsReassignV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async updateAttributeByIdNerm(requestParameters: sdk.AttributesNERMApiUpdateAttributeByIdRequest): Promise<AxiosResponse<sdk.CreateAttribute201ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateAttributeByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateAttribute201ResponseNERM, any>>;
}
async updateAttributeByUidNerm(requestParameters: sdk.AttributesNERMApiUpdateAttributeByUidRequest): Promise<AxiosResponse<sdk.CreateAttribute201ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateAttributeByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateAttribute201ResponseNERM, any>>;
}
async updateAttributeKeyAndValueToRoleV1(requestParameters: rolesTypes.RolesApiUpdateAttributeKeyAndValueToRoleV1Request): Promise<AxiosResponse<rolesTypes.Role, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateAttributeKeyAndValueToRoleV1(requestParameters) as Promise<AxiosResponse<rolesTypes.Role, any>>;
}
async updateAutoWriteSettingsV1(requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiUpdateAutoWriteSettingsV1Request): Promise<AxiosResponse<suggestedEntitlementDescriptionTypes.Autowritesettingresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateAutoWriteSettingsV1(requestParameters) as Promise<AxiosResponse<suggestedEntitlementDescriptionTypes.Autowritesettingresponse, any>>;
}
async updateCampaignFilterV1(requestParameters: certificationCampaignFiltersTypes.CertificationCampaignFiltersApiUpdateCampaignFilterV1Request): Promise<AxiosResponse<certificationCampaignFiltersTypes.Campaignfilterdetails, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateCampaignFilterV1(requestParameters) as Promise<AxiosResponse<certificationCampaignFiltersTypes.Campaignfilterdetails, any>>;
}
async updateCampaignV1(requestParameters: certificationCampaignsTypes.CertificationCampaignsApiUpdateCampaignV1Request): Promise<AxiosResponse<certificationCampaignsTypes.Slimcampaign, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateCampaignV1(requestParameters) as Promise<AxiosResponse<certificationCampaignsTypes.Slimcampaign, any>>;
}
async updateCommonAccessStatusInBulkV1(requestParameters: iaiCommonAccessTypes.IAICommonAccessApiUpdateCommonAccessStatusInBulkV1Request): Promise<AxiosResponse<any, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateCommonAccessStatusInBulkV1(requestParameters) as Promise<AxiosResponse<any, any>>;
}
async updateConnectorV1(requestParameters: connectorsTypes.ConnectorsApiUpdateConnectorV1Request): Promise<AxiosResponse<connectorsTypes.Connectordetail, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateConnectorV1(requestParameters) as Promise<AxiosResponse<connectorsTypes.Connectordetail, any>>;
}
async updateEntitlementConnectionsBulkV1(requestParameters: entitlementConnectionsTypes.EntitlementConnectionsApiUpdateEntitlementConnectionsBulkV1Request): Promise<AxiosResponse<Array<entitlementConnectionsTypes.Entitlementconnectionbulkupdateresultitem>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateEntitlementConnectionsBulkV1(requestParameters) as Promise<AxiosResponse<Array<entitlementConnectionsTypes.Entitlementconnectionbulkupdateresultitem>, any>>;
}
async updateEntitlementsInBulkV1(requestParameters: entitlementsTypes.EntitlementsApiUpdateEntitlementsInBulkV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateEntitlementsInBulkV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async updateEntitlementsPotentialRoleV1(requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiUpdateEntitlementsPotentialRoleV1Request): Promise<AxiosResponse<iaiRoleMiningTypes.Roleminingpotentialrole, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateEntitlementsPotentialRoleV1(requestParameters) as Promise<AxiosResponse<iaiRoleMiningTypes.Roleminingpotentialrole, any>>;
}
async updateFormAttributeByIdNerm(requestParameters: sdk.FormAttributesNERMApiUpdateFormAttributeByIdRequest): Promise<AxiosResponse<sdk.GetFormAttributes200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateFormAttributeByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.GetFormAttributes200ResponseNERM, any>>;
}
async updateFormAttributeByUidNerm(requestParameters: sdk.FormAttributesNERMApiUpdateFormAttributeByUidRequest): Promise<AxiosResponse<sdk.GetFormAttributes200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateFormAttributeByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.GetFormAttributes200ResponseNERM, any>>;
}
async updateFormByIdNerm(requestParameters: sdk.FormsNERMApiUpdateFormByIdRequest): Promise<AxiosResponse<sdk.CreateAttribute201ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateFormByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateAttribute201ResponseNERM, any>>;
}
async updateFormByUidNerm(requestParameters: sdk.FormsNERMApiUpdateFormByUidRequest): Promise<AxiosResponse<sdk.CreateAttribute201ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateFormByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.CreateAttribute201ResponseNERM, any>>;
}
async updateIdentityProfileV1(requestParameters: identityProfilesTypes.IdentityProfilesApiUpdateIdentityProfileV1Request): Promise<AxiosResponse<identityProfilesTypes.Identityprofile, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateIdentityProfileV1(requestParameters) as Promise<AxiosResponse<identityProfilesTypes.Identityprofile, any>>;
}
async updateLifecycleStatesV1(requestParameters: lifecycleStatesTypes.LifecycleStatesApiUpdateLifecycleStatesV1Request): Promise<AxiosResponse<lifecycleStatesTypes.Lifecyclestate, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateLifecycleStatesV1(requestParameters) as Promise<AxiosResponse<lifecycleStatesTypes.Lifecyclestate, any>>;
}
async updateMachineAccountDeletionApprovalConfigV1(requestParameters: sourcesTypes.SourcesApiUpdateMachineAccountDeletionApprovalConfigV1Request): Promise<AxiosResponse<sourcesTypes.Accountdeleteconfigdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateMachineAccountDeletionApprovalConfigV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Accountdeleteconfigdto, any>>;
}
async updateMachineAccountSubtypeApprovalConfigV1(requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiUpdateMachineAccountSubtypeApprovalConfigV1Request): Promise<AxiosResponse<machineAccountSubtypesTypes.Machineaccountsubtypeconfigdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateMachineAccountSubtypeApprovalConfigV1(requestParameters) as Promise<AxiosResponse<machineAccountSubtypesTypes.Machineaccountsubtypeconfigdto, any>>;
}
async updateMachineAccountV1(requestParameters: machineAccountsTypes.MachineAccountsApiUpdateMachineAccountV1Request): Promise<AxiosResponse<machineAccountsTypes.Machineaccount, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateMachineAccountV1(requestParameters) as Promise<AxiosResponse<machineAccountsTypes.Machineaccount, any>>;
}
async updateMachineIdentityV1(requestParameters: machineIdentitiesTypes.MachineIdentitiesApiUpdateMachineIdentityV1Request): Promise<AxiosResponse<machineIdentitiesTypes.Machineidentityresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateMachineIdentityV1(requestParameters) as Promise<AxiosResponse<machineIdentitiesTypes.Machineidentityresponse, any>>;
}
async updateManagedClientV1(requestParameters: managedClientsTypes.ManagedClientsApiUpdateManagedClientV1Request): Promise<AxiosResponse<managedClientsTypes.Managedclient, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateManagedClientV1(requestParameters) as Promise<AxiosResponse<managedClientsTypes.Managedclient, any>>;
}
async updateManagedClusterTypeV1(requestParameters: managedClusterTypesTypes.ManagedClusterTypesApiUpdateManagedClusterTypeV1Request): Promise<AxiosResponse<managedClusterTypesTypes.Managedclustertype, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateManagedClusterTypeV1(requestParameters) as Promise<AxiosResponse<managedClusterTypesTypes.Managedclustertype, any>>;
}
async updateManagedClusterV1(requestParameters: managedClustersTypes.ManagedClustersApiUpdateManagedClusterV1Request): Promise<AxiosResponse<managedClustersTypes.Managedcluster, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateManagedClusterV1(requestParameters) as Promise<AxiosResponse<managedClustersTypes.Managedcluster, any>>;
}
async updateMultiHostSourcesV1(requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiUpdateMultiHostSourcesV1Request): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateMultiHostSourcesV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async updateNonEmployeeRecordV1(requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiUpdateNonEmployeeRecordV1Request): Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeerecord, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateNonEmployeeRecordV1(requestParameters) as Promise<AxiosResponse<nonEmployeeLifecycleManagementTypes.Nonemployeerecord, any>>;
}
async updateObjectMappingsV1(requestParameters: configurationHubTypes.ConfigurationHubApiUpdateObjectMappingsV1Request): Promise<AxiosResponse<configurationHubTypes.Objectmappingbulkpatchresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateObjectMappingsV1(requestParameters) as Promise<AxiosResponse<configurationHubTypes.Objectmappingbulkpatchresponse, any>>;
}
async updatePageContentByIdNerm(requestParameters: sdk.PageContentsNERMApiUpdatePageContentByIdRequest): Promise<AxiosResponse<sdk.GetPageContents200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updatePageContentByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.GetPageContents200ResponseNERM, any>>;
}
async updatePageContentByUidNerm(requestParameters: sdk.PageContentsNERMApiUpdatePageContentByUidRequest): Promise<AxiosResponse<sdk.GetPageContents200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updatePageContentByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.GetPageContents200ResponseNERM, any>>;
}
async updatePageContentTranslationByIdNerm(requestParameters: sdk.PageContentTranslationsNERMApiUpdatePageContentTranslationByIdRequest): Promise<AxiosResponse<sdk.GetPageContentTranslation200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updatePageContentTranslationByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.GetPageContentTranslation200ResponseNERM, any>>;
}
async updatePageContentTranslationByUidNerm(requestParameters: sdk.PageContentTranslationsNERMApiUpdatePageContentTranslationByUidRequest): Promise<AxiosResponse<sdk.GetPageContentTranslation200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updatePageContentTranslationByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.GetPageContentTranslation200ResponseNERM, any>>;
}
async updatePageElementByIdNerm(requestParameters: sdk.PageElementsNERMApiUpdatePageElementByIdRequest): Promise<AxiosResponse<sdk.GetPageElements200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updatePageElementByIdNerm(requestParameters) as Promise<AxiosResponse<sdk.GetPageElements200ResponseNERM, any>>;
}
async updatePageElementByUidNerm(requestParameters: sdk.PageElementsNERMApiUpdatePageElementByUidRequest): Promise<AxiosResponse<sdk.GetPageElements200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updatePageElementByUidNerm(requestParameters) as Promise<AxiosResponse<sdk.GetPageElements200ResponseNERM, any>>;
}
async updateParameterV1(requestParameters: parameterStorageTypes.ParameterStorageApiUpdateParameterV1Request): Promise<AxiosResponse<parameterStorageTypes.Parameterstorageparameter, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateParameterV1(requestParameters) as Promise<AxiosResponse<parameterStorageTypes.Parameterstorageparameter, any>>;
}
async updatePasswordPolicyHoldersV1(requestParameters: sourcesTypes.SourcesApiUpdatePasswordPolicyHoldersV1Request): Promise<AxiosResponse<Array<sourcesTypes.PasswordpolicyholdersdtoInner>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updatePasswordPolicyHoldersV1(requestParameters) as Promise<AxiosResponse<Array<sourcesTypes.PasswordpolicyholdersdtoInner>, any>>;
}
async updatePasswordSyncGroupV1(requestParameters: passwordSyncGroupsTypes.PasswordSyncGroupsApiUpdatePasswordSyncGroupV1Request): Promise<AxiosResponse<passwordSyncGroupsTypes.Passwordsyncgroup, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updatePasswordSyncGroupV1(requestParameters) as Promise<AxiosResponse<passwordSyncGroupsTypes.Passwordsyncgroup, any>>;
}
async updateProfileNerm(requestParameters: sdk.IscAccountsNERMApiUpdateProfileRequest): Promise<AxiosResponse<sdk.GetSingleSchemaMappedProfile200ResponseNERM, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateProfileNerm(requestParameters) as Promise<AxiosResponse<sdk.GetSingleSchemaMappedProfile200ResponseNERM, any>>;
}
async updateProvisioningPoliciesInBulkV1(requestParameters: sourcesTypes.SourcesApiUpdateProvisioningPoliciesInBulkV1Request): Promise<AxiosResponse<Array<sourcesTypes.Provisioningpolicydto>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateProvisioningPoliciesInBulkV1(requestParameters) as Promise<AxiosResponse<Array<sourcesTypes.Provisioningpolicydto>, any>>;
}
async updateProvisioningPolicyV1(requestParameters: sourcesTypes.SourcesApiUpdateProvisioningPolicyV1Request): Promise<AxiosResponse<sourcesTypes.Provisioningpolicydto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateProvisioningPolicyV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Provisioningpolicydto, any>>;
}
async updateProvisioningPolicyV2(requestParameters: sourcesTypes.SourcesApiUpdateProvisioningPolicyV2Request): Promise<AxiosResponse<sourcesTypes.Provisioningpolicydtov2, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateProvisioningPolicyV2(requestParameters) as Promise<AxiosResponse<sourcesTypes.Provisioningpolicydtov2, any>>;
}
async updatePublicIdentityConfigV1(requestParameters: publicIdentitiesConfigTypes.PublicIdentitiesConfigApiUpdatePublicIdentityConfigV1Request): Promise<AxiosResponse<publicIdentitiesConfigTypes.Publicidentityconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updatePublicIdentityConfigV1(requestParameters) as Promise<AxiosResponse<publicIdentitiesConfigTypes.Publicidentityconfig, any>>;
}
async updateRecommendationsConfigV1(requestParameters: iaiRecommendationsTypes.IAIRecommendationsApiUpdateRecommendationsConfigV1Request): Promise<AxiosResponse<iaiRecommendationsTypes.Recommendationconfigdto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateRecommendationsConfigV1(requestParameters) as Promise<AxiosResponse<iaiRecommendationsTypes.Recommendationconfigdto, any>>;
}
async updateRolesMetadataByFilterV1(requestParameters: rolesTypes.RolesApiUpdateRolesMetadataByFilterV1Request): Promise<AxiosResponse<rolesTypes.Rolebulkupdateresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateRolesMetadataByFilterV1(requestParameters) as Promise<AxiosResponse<rolesTypes.Rolebulkupdateresponse, any>>;
}
async updateRolesMetadataByIdsV1(requestParameters: rolesTypes.RolesApiUpdateRolesMetadataByIdsV1Request): Promise<AxiosResponse<rolesTypes.Rolebulkupdateresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateRolesMetadataByIdsV1(requestParameters) as Promise<AxiosResponse<rolesTypes.Rolebulkupdateresponse, any>>;
}
async updateRolesMetadataByQueryV1(requestParameters: rolesTypes.RolesApiUpdateRolesMetadataByQueryV1Request): Promise<AxiosResponse<rolesTypes.Rolebulkupdateresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateRolesMetadataByQueryV1(requestParameters) as Promise<AxiosResponse<rolesTypes.Rolebulkupdateresponse, any>>;
}
async updateScheduledActionV1(requestParameters: configurationHubTypes.ConfigurationHubApiUpdateScheduledActionV1Request): Promise<AxiosResponse<configurationHubTypes.Scheduledactionresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateScheduledActionV1(requestParameters) as Promise<AxiosResponse<configurationHubTypes.Scheduledactionresponse, any>>;
}
async updateScheduledSearchV1(requestParameters: scheduledSearchTypes.ScheduledSearchApiUpdateScheduledSearchV1Request): Promise<AxiosResponse<scheduledSearchTypes.Scheduledsearch, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateScheduledSearchV1(requestParameters) as Promise<AxiosResponse<scheduledSearchTypes.Scheduledsearch, any>>;
}
async updateSourceAppsInBulkV1(requestParameters: appsTypes.AppsApiUpdateSourceAppsInBulkV1Request = {}): Promise<AxiosResponse<void, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateSourceAppsInBulkV1(requestParameters) as Promise<AxiosResponse<void, any>>;
}
async updateSourceEntitlementRequestConfigV1(requestParameters: sourcesTypes.SourcesApiUpdateSourceEntitlementRequestConfigV1Request): Promise<AxiosResponse<sourcesTypes.Sourceentitlementrequestconfig, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateSourceEntitlementRequestConfigV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Sourceentitlementrequestconfig, any>>;
}
async updateSourceScheduleV1(requestParameters: sourcesTypes.SourcesApiUpdateSourceScheduleV1Request): Promise<AxiosResponse<sourcesTypes.Schedule3, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateSourceScheduleV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Schedule3, any>>;
}
async updateSourceSchemaV1(requestParameters: sourcesTypes.SourcesApiUpdateSourceSchemaV1Request): Promise<AxiosResponse<sourcesTypes.Schema, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateSourceSchemaV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Schema, any>>;
}
async updateSourceV1(requestParameters: sourcesTypes.SourcesApiUpdateSourceV1Request): Promise<AxiosResponse<sourcesTypes.Source, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateSourceV1(requestParameters) as Promise<AxiosResponse<sourcesTypes.Source, any>>;
}
async updateStatusCheckDetailsV1(requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiUpdateStatusCheckDetailsV1Request): Promise<AxiosResponse<serviceDeskIntegrationTypes.Queuedcheckconfigdetails, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateStatusCheckDetailsV1(requestParameters) as Promise<AxiosResponse<serviceDeskIntegrationTypes.Queuedcheckconfigdetails, any>>;
}
async updateStreamConfigurationV1(requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiUpdateStreamConfigurationV1Request): Promise<AxiosResponse<sharedSignalsFrameworkSsfTypes.Updatestreamconfigresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateStreamConfigurationV1(requestParameters) as Promise<AxiosResponse<sharedSignalsFrameworkSsfTypes.Updatestreamconfigresponse, any>>;
}
async updateStreamStatusV1(requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiUpdateStreamStatusV1Request): Promise<AxiosResponse<sharedSignalsFrameworkSsfTypes.Streamstatusresponse, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateStreamStatusV1(requestParameters) as Promise<AxiosResponse<sharedSignalsFrameworkSsfTypes.Streamstatusresponse, any>>;
}
async updateSubscriptionV1(requestParameters: triggersTypes.TriggersApiUpdateSubscriptionV1Request): Promise<AxiosResponse<triggersTypes.Subscription, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateSubscriptionV1(requestParameters) as Promise<AxiosResponse<triggersTypes.Subscription, any>>;
}
async updateTaskStatusV1(requestParameters: taskManagementTypes.TaskManagementApiUpdateTaskStatusV1Request): Promise<AxiosResponse<taskManagementTypes.Taskstatus, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateTaskStatusV1(requestParameters) as Promise<AxiosResponse<taskManagementTypes.Taskstatus, any>>;
}
async updateTransformV1(requestParameters: transformsTypes.TransformsApiUpdateTransformV1Request): Promise<AxiosResponse<transformsTypes.Transformread, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateTransformV1(requestParameters) as Promise<AxiosResponse<transformsTypes.Transformread, any>>;
}
async updateUserLevelV1(requestParameters: customUserLevelsTypes.CustomUserLevelsApiUpdateUserLevelV1Request): Promise<AxiosResponse<customUserLevelsTypes.Userlevelsummarydto, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateUserLevelV1(requestParameters) as Promise<AxiosResponse<customUserLevelsTypes.Userlevelsummarydto, any>>;
}
async updateV1(requestParameters: managedClustersTypes.ManagedClustersApiUpdateV1Request): Promise<AxiosResponse<managedClustersTypes.Clustermanualupgrade, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateV1(requestParameters) as Promise<AxiosResponse<managedClustersTypes.Clustermanualupgrade, any>>;
}
async updateWorkgroupMembersV1(requestParameters: governanceGroupsTypes.GovernanceGroupsApiUpdateWorkgroupMembersV1Request): Promise<AxiosResponse<Array<governanceGroupsTypes.Workgroupmemberadditem>, any>> {
    await this.checkSessionBeforeCall();
    return this.electronAPI.updateWorkgroupMembersV1(requestParameters) as Promise<AxiosResponse<Array<governanceGroupsTypes.Workgroupmemberadditem>, any>>;
}
// --- GENERATED SDK METHODS END ---

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
