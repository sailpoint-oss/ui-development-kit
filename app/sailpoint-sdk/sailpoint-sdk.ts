import * as sdk from 'sailpoint-api-client';
import { AxiosResponse } from 'axios';
import axios from 'axios';
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

/* tslint:disable */
/* eslint-disable */
/**
 * GENERATED FILE — do not edit by hand.
 * Produced by scripts/build-sailpoint-sdk.js from mustache_templates/electron-sdk-wrapper.mustache.
 */

type ApiResponse<T> = {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
};

async function handleApiCall<T>(
  apiCall: () => Promise<AxiosResponse<T>>
): Promise<ApiResponse<T>> {
  try {
    const response = await apiCall();
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers as Record<string, string>,
    };
  } catch (error) {
    console.error('API call error:', error);
    return generateErrorResponse(error);
  }
}

function generateErrorResponse(error: unknown): ApiResponse<any> {
  // Check if it's an Axios error with a response
  if (axios.isAxiosError(error) && error.response) {
    // Return the actual error response from the API
    return {
      data: error.response.data,
      status: error.response.status,
      statusText: error.response.statusText,
      headers: error.response.headers as Record<string, string>,
    };
  }

  // Handle generic Error instances
  if (error instanceof Error) {
    return {
      data: { error: error.message },
      status: 500,
      statusText: error.message,
      headers: {},
    };
  }

  // Fallback for unknown errors
  return {
    data: { error: 'Unknown error occurred' },
    status: 500,
    statusText: 'Unknown error occurred',
    headers: {},
  };
}


// --- GENERATED SDK METHODS START ---
export const addAccessRequestRecommendationsIgnoredItemV1 = (requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiAddAccessRequestRecommendationsIgnoredItemV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiAccessRequestRecommendationsTypes.AccessRequestRecommendationActionItemResponseDto>> => {
    const iaiaccessrequestrecommendationsapi = new sdk.IAIAccessRequestRecommendationsApi(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsapi.addAccessRequestRecommendationsIgnoredItemV1(requestParameters));
}
export const addAccessRequestRecommendationsRequestedItemV1 = (requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiAddAccessRequestRecommendationsRequestedItemV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiAccessRequestRecommendationsTypes.AccessRequestRecommendationActionItemResponseDto>> => {
    const iaiaccessrequestrecommendationsapi = new sdk.IAIAccessRequestRecommendationsApi(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsapi.addAccessRequestRecommendationsRequestedItemV1(requestParameters));
}
export const addAccessRequestRecommendationsViewedItemsV1 = (requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiAddAccessRequestRecommendationsViewedItemsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiAccessRequestRecommendationsTypes.AccessRequestRecommendationActionItemResponseDto>>> => {
    const iaiaccessrequestrecommendationsapi = new sdk.IAIAccessRequestRecommendationsApi(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsapi.addAccessRequestRecommendationsViewedItemsV1(requestParameters));
}
export const addAccessRequestRecommendationsViewedItemV1 = (requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiAddAccessRequestRecommendationsViewedItemV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiAccessRequestRecommendationsTypes.AccessRequestRecommendationActionItemResponseDto>> => {
    const iaiaccessrequestrecommendationsapi = new sdk.IAIAccessRequestRecommendationsApi(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsapi.addAccessRequestRecommendationsViewedItemV1(requestParameters));
}
export const approveAccessRequestV1 = (requestParameters: accessRequestApprovalsTypes.AccessRequestApprovalsApiApproveAccessRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const accessrequestapprovalsapi = new sdk.AccessRequestApprovalsApi(apiConfig);
    return handleApiCall(() => accessrequestapprovalsapi.approveAccessRequestV1(requestParameters));
}
export const approveApprovalInBulkV1 = (requestParameters: approvalsTypes.ApprovalsApiApproveApprovalInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.approveApprovalInBulkV1(requestParameters));
}
export const approveApprovalItemsInBulkV1 = (requestParameters: workItemsTypes.WorkItemsApiApproveApprovalItemsInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workItemsTypes.WorkItems>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.approveApprovalItemsInBulkV1(requestParameters));
}
export const approveApprovalItemV1 = (requestParameters: workItemsTypes.WorkItemsApiApproveApprovalItemV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workItemsTypes.WorkItems>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.approveApprovalItemV1(requestParameters));
}
export const approveApprovalV1 = (requestParameters: approvalsTypes.ApprovalsApiApproveApprovalV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<approvalsTypes.Approval2>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.approveApprovalV1(requestParameters));
}
export const approveBulkAccessRequestV1 = (requestParameters: accessRequestsTypes.AccessRequestsApiApproveBulkAccessRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.approveBulkAccessRequestV1(requestParameters));
}
export const approveBulkEntitlementRecommendationsV1 = (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiApproveBulkEntitlementRecommendationsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<suggestedEntitlementDescriptionTypes.BulkApproveEntitlementRecommendationResult>>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.approveBulkEntitlementRecommendationsV1(requestParameters));
}
export const approveNonEmployeeRequestV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiApproveNonEmployeeRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeApprovalItem>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.approveNonEmployeeRequestV1(requestParameters));
}
export const cancelAccessRequestInBulkV1 = (requestParameters: accessRequestsTypes.AccessRequestsApiCancelAccessRequestInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.cancelAccessRequestInBulkV1(requestParameters));
}
export const cancelAccessRequestV1 = (requestParameters: accessRequestsTypes.AccessRequestsApiCancelAccessRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.cancelAccessRequestV1(requestParameters));
}
export const cancelApprovalByIdV1 = (requestParameters: approvalsTypes.ApprovalsApiCancelApprovalByIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.cancelApprovalByIdV1(requestParameters));
}
export const cancelApprovalV1 = (requestParameters: approvalsTypes.ApprovalsApiCancelApprovalV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.cancelApprovalV1(requestParameters));
}
export const cancelReportV1 = (requestParameters: reportsDataExtractionTypes.ReportsDataExtractionApiCancelReportV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const reportsdataextractionapi = new sdk.ReportsDataExtractionApi(apiConfig);
    return handleApiCall(() => reportsdataextractionapi.cancelReportV1(requestParameters));
}
export const cancelRolePropagationV1 = (requestParameters: rolePropagationTypes.RolePropagationApiCancelRolePropagationV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const rolepropagationapi = new sdk.RolePropagationApi(apiConfig);
    return handleApiCall(() => rolepropagationapi.cancelRolePropagationV1(requestParameters));
}
export const cancelTaskV1 = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiCancelTaskV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.cancelTaskV1(requestParameters));
}
export const cancelWorkflowExecutionV1 = (requestParameters: workflowsTypes.WorkflowsApiCancelWorkflowExecutionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.cancelWorkflowExecutionV1(requestParameters));
}
export const closeAccessRequestV1 = (requestParameters: accessRequestsTypes.AccessRequestsApiCloseAccessRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.closeAccessRequestV1(requestParameters));
}
export const compareIdentitySnapshotsAccessTypeV1 = (requestParameters: identityHistoryTypes.IdentityHistoryApiCompareIdentitySnapshotsAccessTypeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identityHistoryTypes.AccessItemDiff>>> => {
    const identityhistoryapi = new sdk.IdentityHistoryApi(apiConfig);
    return handleApiCall(() => identityhistoryapi.compareIdentitySnapshotsAccessTypeV1(requestParameters));
}
export const compareIdentitySnapshotsV1 = (requestParameters: identityHistoryTypes.IdentityHistoryApiCompareIdentitySnapshotsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identityHistoryTypes.IdentityCompareResponse>>> => {
    const identityhistoryapi = new sdk.IdentityHistoryApi(apiConfig);
    return handleApiCall(() => identityhistoryapi.compareIdentitySnapshotsV1(requestParameters));
}
export const completeCampaignV1 = (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiCompleteCampaignV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.completeCampaignV1(requestParameters));
}
export const completeTriggerInvocationV1 = (requestParameters: triggersTypes.TriggersApiCompleteTriggerInvocationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const triggersapi = new sdk.TriggersApi(apiConfig);
    return handleApiCall(() => triggersapi.completeTriggerInvocationV1(requestParameters));
}
export const completeWorkItemV1 = (requestParameters: workItemsTypes.WorkItemsApiCompleteWorkItemV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workItemsTypes.WorkItems>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.completeWorkItemV1(requestParameters));
}
export const createAccessModelMetadataAttributeV1 = (requestParameters: accessModelMetadataTypes.AccessModelMetadataApiCreateAccessModelMetadataAttributeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessModelMetadataTypes.AttributeDTO>> => {
    const accessmodelmetadataapi = new sdk.AccessModelMetadataApi(apiConfig);
    return handleApiCall(() => accessmodelmetadataapi.createAccessModelMetadataAttributeV1(requestParameters));
}
export const createAccessModelMetadataAttributeValueV1 = (requestParameters: accessModelMetadataTypes.AccessModelMetadataApiCreateAccessModelMetadataAttributeValueV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessModelMetadataTypes.AttributeValueDTO>> => {
    const accessmodelmetadataapi = new sdk.AccessModelMetadataApi(apiConfig);
    return handleApiCall(() => accessmodelmetadataapi.createAccessModelMetadataAttributeValueV1(requestParameters));
}
export const createAccessModelMetadataForEntitlementV1 = (requestParameters: entitlementsTypes.EntitlementsApiCreateAccessModelMetadataForEntitlementV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<entitlementsTypes.Entitlement>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.createAccessModelMetadataForEntitlementV1(requestParameters));
}
export const createAccessProfileV1 = (requestParameters: accessProfilesTypes.AccessProfilesApiCreateAccessProfileV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessProfilesTypes.AccessProfile>> => {
    const accessprofilesapi = new sdk.AccessProfilesApi(apiConfig);
    return handleApiCall(() => accessprofilesapi.createAccessProfileV1(requestParameters));
}
export const createAccessRequestV1 = (requestParameters: accessRequestsTypes.AccessRequestsApiCreateAccessRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessRequestsTypes.AccessRequestResponse>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.createAccessRequestV1(requestParameters));
}
export const createAccountV1 = (requestParameters: accountsTypes.AccountsApiCreateAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountsTypes.AccountsAsyncResult>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.createAccountV1(requestParameters));
}
export const createApplicationV1 = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiCreateApplicationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.createApplicationV1(requestParameters));
}
export const createApprovalActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateApprovalActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createApprovalAction(requestParameters));
}
export const createAskSecurityQuestionActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateAskSecurityQuestionActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createAskSecurityQuestionAction(requestParameters));
}
export const createAttributeNerm = (requestParameters: sdk.AttributesNERMApiCreateAttributeRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateAttribute201ResponseNERM>> => {
    const attributesnermapi = new sdk.AttributesNERMApi(apiConfig);
    return handleApiCall(() => attributesnermapi.createAttribute(requestParameters));
}
export const createAuthOrgNetworkConfigV1 = (requestParameters: globalTenantSecuritySettingsTypes.GlobalTenantSecuritySettingsApiCreateAuthOrgNetworkConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<globalTenantSecuritySettingsTypes.NetworkConfiguration>> => {
    const globaltenantsecuritysettingsapi = new sdk.GlobalTenantSecuritySettingsApi(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsapi.createAuthOrgNetworkConfigV1(requestParameters));
}
export const createAutoAssignActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateAutoAssignActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createAutoAssignAction(requestParameters));
}
export const createAutomatedWorkflowNerm = (requestParameters: sdk.WorkflowsNERMApiCreateAutomatedWorkflowRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateCreateWorkflow200ResponseNERM>> => {
    const workflowsnermapi = new sdk.WorkflowsNERMApi(apiConfig);
    return handleApiCall(() => workflowsnermapi.createAutomatedWorkflow(requestParameters));
}
export const createAutoWriteSettingsV1 = (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiCreateAutoWriteSettingsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<suggestedEntitlementDescriptionTypes.AutoWriteSettingResponse>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.createAutoWriteSettingsV1(requestParameters));
}
export const createBatchUpdateActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateBatchUpdateActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createBatchUpdateAction(requestParameters));
}
export const createBatchWorkflowNerm = (requestParameters: sdk.WorkflowsNERMApiCreateBatchWorkflowRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateCreateWorkflow200ResponseNERM>> => {
    const workflowsnermapi = new sdk.WorkflowsNERMApi(apiConfig);
    return handleApiCall(() => workflowsnermapi.createBatchWorkflow(requestParameters));
}
export const createBrandingItemV1 = (requestParameters: brandingTypes.BrandingApiCreateBrandingItemV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<brandingTypes.BrandingItem>> => {
    const brandingapi = new sdk.BrandingApi(apiConfig);
    return handleApiCall(() => brandingapi.createBrandingItemV1(requestParameters));
}
export const createCampaignFilterV1 = (requestParameters: certificationCampaignFiltersTypes.CertificationCampaignFiltersApiCreateCampaignFilterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignFiltersTypes.CampaignFilterDetails>> => {
    const certificationcampaignfiltersapi = new sdk.CertificationCampaignFiltersApi(apiConfig);
    return handleApiCall(() => certificationcampaignfiltersapi.createCampaignFilterV1(requestParameters));
}
export const createCampaignTemplateV1 = (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiCreateCampaignTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignsTypes.CampaignTemplate>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.createCampaignTemplateV1(requestParameters));
}
export const createCampaignV1 = (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiCreateCampaignV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignsTypes.Campaign2>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.createCampaignV1(requestParameters));
}
export const createCloseSessionActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateCloseSessionActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createCloseSessionAction(requestParameters));
}
export const createCommonAccessV1 = (requestParameters: iaiCommonAccessTypes.IAICommonAccessApiCreateCommonAccessV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiCommonAccessTypes.CommonAccessItemResponse>> => {
    const iaicommonaccessapi = new sdk.IAICommonAccessApi(apiConfig);
    return handleApiCall(() => iaicommonaccessapi.createCommonAccessV1(requestParameters));
}
export const createConnectorCustomizerV1 = (requestParameters: connectorCustomizersTypes.ConnectorCustomizersApiCreateConnectorCustomizerV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorCustomizersTypes.ConnectorCustomizerCreateResponse>> => {
    const connectorcustomizersapi = new sdk.ConnectorCustomizersApi(apiConfig);
    return handleApiCall(() => connectorcustomizersapi.createConnectorCustomizerV1(requestParameters));
}
export const createConnectorCustomizerVersionV1 = (requestParameters: connectorCustomizersTypes.ConnectorCustomizersApiCreateConnectorCustomizerVersionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorCustomizersTypes.ConnectorCustomizerVersionCreateResponse>> => {
    const connectorcustomizersapi = new sdk.ConnectorCustomizersApi(apiConfig);
    return handleApiCall(() => connectorcustomizersapi.createConnectorCustomizerVersionV1(requestParameters));
}
export const createConnectorRuleV1 = (requestParameters: connectorRuleManagementTypes.ConnectorRuleManagementApiCreateConnectorRuleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorRuleManagementTypes.ConnectorRuleResponse>> => {
    const connectorrulemanagementapi = new sdk.ConnectorRuleManagementApi(apiConfig);
    return handleApiCall(() => connectorrulemanagementapi.createConnectorRuleV1(requestParameters));
}
export const createContributorsActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateContributorsActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createContributorsAction(requestParameters));
}
export const createCreateProfileActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateCreateProfileActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createCreateProfileAction(requestParameters));
}
export const createCreateWorkflowNerm = (requestParameters: sdk.WorkflowsNERMApiCreateCreateWorkflowRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateCreateWorkflow200ResponseNERM>> => {
    const workflowsnermapi = new sdk.WorkflowsNERMApi(apiConfig);
    return handleApiCall(() => workflowsnermapi.createCreateWorkflow(requestParameters));
}
export const createCustomConnectorV1 = (requestParameters: connectorsTypes.ConnectorsApiCreateCustomConnectorV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorsTypes.V3ConnectorDto>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.createCustomConnectorV1(requestParameters));
}
export const createCustomPasswordInstructionsV1 = (requestParameters: customPasswordInstructionsTypes.CustomPasswordInstructionsApiCreateCustomPasswordInstructionsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customPasswordInstructionsTypes.CustomPasswordInstruction>> => {
    const custompasswordinstructionsapi = new sdk.CustomPasswordInstructionsApi(apiConfig);
    return handleApiCall(() => custompasswordinstructionsapi.createCustomPasswordInstructionsV1(requestParameters));
}
export const createCustomPrivilegeCriteriaV1 = (requestParameters: privilegeCriteriaTypes.PrivilegeCriteriaApiCreateCustomPrivilegeCriteriaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<privilegeCriteriaTypes.PrivilegeCriteriaDTO>> => {
    const privilegecriteriaapi = new sdk.PrivilegeCriteriaApi(apiConfig);
    return handleApiCall(() => privilegecriteriaapi.createCustomPrivilegeCriteriaV1(requestParameters));
}
export const createCustomUserLevelV1 = (requestParameters: customUserLevelsTypes.CustomUserLevelsApiCreateCustomUserLevelV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customUserLevelsTypes.UserLevelSummaryDTO>> => {
    const customuserlevelsapi = new sdk.CustomUserLevelsApi(apiConfig);
    return handleApiCall(() => customuserlevelsapi.createCustomUserLevelV1(requestParameters));
}
export const createDataSegmentV1 = (requestParameters: dataSegmentationTypes.DataSegmentationApiCreateDataSegmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<dataSegmentationTypes.DataSegment>> => {
    const datasegmentationapi = new sdk.DataSegmentationApi(apiConfig);
    return handleApiCall(() => datasegmentationapi.createDataSegmentV1(requestParameters));
}
export const createDeployV1 = (requestParameters: configurationHubTypes.ConfigurationHubApiCreateDeployV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<configurationHubTypes.DeployResponse>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.createDeployV1(requestParameters));
}
export const createDigitTokenV1 = (requestParameters: passwordManagementTypes.PasswordManagementApiCreateDigitTokenV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordManagementTypes.PasswordDigitToken>> => {
    const passwordmanagementapi = new sdk.PasswordManagementApi(apiConfig);
    return handleApiCall(() => passwordmanagementapi.createDigitTokenV1(requestParameters));
}
export const createDimensionV1 = (requestParameters: dimensionsTypes.DimensionsApiCreateDimensionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<dimensionsTypes.Dimension>> => {
    const dimensionsapi = new sdk.DimensionsApi(apiConfig);
    return handleApiCall(() => dimensionsapi.createDimensionV1(requestParameters));
}
export const createDomainDkimV1 = (requestParameters: notificationsTypes.NotificationsApiCreateDomainDkimV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<notificationsTypes.DomainStatusDto>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.createDomainDkimV1(requestParameters));
}
export const createDuplicatePreventionActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateDuplicatePreventionActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createDuplicatePreventionAction(requestParameters));
}
export const createEmailVerificationActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateEmailVerificationActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createEmailVerificationAction(requestParameters));
}
export const createExternalExecuteWorkflowV1 = (requestParameters: workflowsTypes.WorkflowsApiCreateExternalExecuteWorkflowV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workflowsTypes.CreateExternalExecuteWorkflowV1200Response>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.createExternalExecuteWorkflowV1(requestParameters));
}
export const createFormAttributeNerm = (requestParameters: sdk.FormAttributesNERMApiCreateFormAttributeRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetFormAttributes200ResponseNERM>> => {
    const formattributesnermapi = new sdk.FormAttributesNERMApi(apiConfig);
    return handleApiCall(() => formattributesnermapi.createFormAttribute(requestParameters));
}
export const createFormDefinitionDynamicSchemaV1 = (requestParameters: customFormsTypes.CustomFormsApiCreateFormDefinitionDynamicSchemaV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.FormDefinitionDynamicSchemaResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.createFormDefinitionDynamicSchemaV1(requestParameters));
}
export const createFormDefinitionFileRequestV1 = (requestParameters: customFormsTypes.CustomFormsApiCreateFormDefinitionFileRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.FormDefinitionFileUploadResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.createFormDefinitionFileRequestV1(requestParameters));
}
export const createFormDefinitionV1 = (requestParameters: customFormsTypes.CustomFormsApiCreateFormDefinitionV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.FormDefinitionResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.createFormDefinitionV1(requestParameters));
}
export const createFormInstanceV1 = (requestParameters: customFormsTypes.CustomFormsApiCreateFormInstanceV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.FormInstanceResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.createFormInstanceV1(requestParameters));
}
export const createFormNerm = (requestParameters: sdk.FormsNERMApiCreateFormRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetForms200ResponseNERM>> => {
    const formsnermapi = new sdk.FormsNERMApi(apiConfig);
    return handleApiCall(() => formsnermapi.createForm(requestParameters));
}
export const createFulfillmentActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateFulfillmentActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createFulfillmentAction(requestParameters));
}
export const createIdentityAttributeV1 = (requestParameters: identityAttributesTypes.IdentityAttributesApiCreateIdentityAttributeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityAttributesTypes.IdentityAttribute2>> => {
    const identityattributesapi = new sdk.IdentityAttributesApi(apiConfig);
    return handleApiCall(() => identityattributesapi.createIdentityAttributeV1(requestParameters));
}
export const createIdentityCollectorV1 = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiCreateIdentityCollectorV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<dataAccessSecurityTypes.CreateIdentityCollectorV1200Response>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.createIdentityCollectorV1(requestParameters));
}
export const createIdentityProfileV1 = (requestParameters: identityProfilesTypes.IdentityProfilesApiCreateIdentityProfileV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityProfilesTypes.IdentityProfile>> => {
    const identityprofilesapi = new sdk.IdentityProfilesApi(apiConfig);
    return handleApiCall(() => identityprofilesapi.createIdentityProfileV1(requestParameters));
}
export const createIdentityProofingActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateIdentityProofingActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createIdentityProofingAction(requestParameters));
}
export const createInvitationActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateInvitationActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createInvitationAction(requestParameters));
}
export const createLauncherV1 = (requestParameters: launchersTypes.LaunchersApiCreateLauncherV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<launchersTypes.Launcher>> => {
    const launchersapi = new sdk.LaunchersApi(apiConfig);
    return handleApiCall(() => launchersapi.createLauncherV1(requestParameters));
}
export const createLdapActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateLdapActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createLdapAction(requestParameters));
}
export const createLifecycleStateV1 = (requestParameters: lifecycleStatesTypes.LifecycleStatesApiCreateLifecycleStateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<lifecycleStatesTypes.LifecycleState>> => {
    const lifecyclestatesapi = new sdk.LifecycleStatesApi(apiConfig);
    return handleApiCall(() => lifecyclestatesapi.createLifecycleStateV1(requestParameters));
}
export const createLoginWorkflowNerm = (requestParameters: sdk.WorkflowsNERMApiCreateLoginWorkflowRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateCreateWorkflow200ResponseNERM>> => {
    const workflowsnermapi = new sdk.WorkflowsNERMApi(apiConfig);
    return handleApiCall(() => workflowsnermapi.createLoginWorkflow(requestParameters));
}
export const createMachineAccountMappingsV1 = (requestParameters: machineAccountMappingsTypes.MachineAccountMappingsApiCreateMachineAccountMappingsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineAccountMappingsTypes.AttributeMappings>>> => {
    const machineaccountmappingsapi = new sdk.MachineAccountMappingsApi(apiConfig);
    return handleApiCall(() => machineaccountmappingsapi.createMachineAccountMappingsV1(requestParameters));
}
export const createMachineAccountRequestV1 = (requestParameters: machineAccountCreationRequestTypes.MachineAccountCreationRequestApiCreateMachineAccountRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountCreationRequestTypes.AccountRequestAsyncResult>> => {
    const machineaccountcreationrequestapi = new sdk.MachineAccountCreationRequestApi(apiConfig);
    return handleApiCall(() => machineaccountcreationrequestapi.createMachineAccountRequestV1(requestParameters));
}
export const createMachineAccountSubtypeV1 = (requestParameters: machineAccountsTypes.MachineAccountsApiCreateMachineAccountSubtypeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountsTypes.SourceSubtype>> => {
    const machineaccountsapi = new sdk.MachineAccountsApi(apiConfig);
    return handleApiCall(() => machineaccountsapi.createMachineAccountSubtypeV1(requestParameters));
}
export const createMachineIdentityV1 = (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiCreateMachineIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineIdentitiesTypes.MachineIdentityResponse>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.createMachineIdentityV1(requestParameters));
}
export const createMachineIdentityV2 = (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiCreateMachineIdentityV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineIdentitiesTypes.Machineidentityv2>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.createMachineIdentityV2(requestParameters));
}
export const createManagedClientV1 = (requestParameters: managedClientsTypes.ManagedClientsApiCreateManagedClientV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClientsTypes.ManagedClient>> => {
    const managedclientsapi = new sdk.ManagedClientsApi(apiConfig);
    return handleApiCall(() => managedclientsapi.createManagedClientV1(requestParameters));
}
export const createManagedClusterTypeV1 = (requestParameters: managedClusterTypesTypes.ManagedClusterTypesApiCreateManagedClusterTypeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClusterTypesTypes.ManagedClusterType>> => {
    const managedclustertypesapi = new sdk.ManagedClusterTypesApi(apiConfig);
    return handleApiCall(() => managedclustertypesapi.createManagedClusterTypeV1(requestParameters));
}
export const createManagedClusterV1 = (requestParameters: managedClustersTypes.ManagedClustersApiCreateManagedClusterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClustersTypes.ManagedCluster>> => {
    const managedclustersapi = new sdk.ManagedClustersApi(apiConfig);
    return handleApiCall(() => managedclustersapi.createManagedClusterV1(requestParameters));
}
export const createMultiHostIntegrationV1 = (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiCreateMultiHostIntegrationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<multiHostIntegrationTypes.MultiHostIntegrations>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.createMultiHostIntegrationV1(requestParameters));
}
export const createNonEmployeeRecordV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiCreateNonEmployeeRecordV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeRecord>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.createNonEmployeeRecordV1(requestParameters));
}
export const createNonEmployeeRequestV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiCreateNonEmployeeRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeRequest>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.createNonEmployeeRequestV1(requestParameters));
}
export const createNonEmployeeSourceSchemaAttributesV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiCreateNonEmployeeSourceSchemaAttributesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeSchemaAttribute>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.createNonEmployeeSourceSchemaAttributesV1(requestParameters));
}
export const createNonEmployeeSourceV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiCreateNonEmployeeSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeSourceWithCloudExternalId>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.createNonEmployeeSourceV1(requestParameters));
}
export const createNotificationActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateNotificationActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createNotificationAction(requestParameters));
}
export const createNotificationTemplateV1 = (requestParameters: notificationsTypes.NotificationsApiCreateNotificationTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<notificationsTypes.TemplateDto>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.createNotificationTemplateV1(requestParameters));
}
export const createOauthClientV1 = (requestParameters: oauthClientsTypes.OAuthClientsApiCreateOauthClientV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<oauthClientsTypes.CreateOAuthClientResponse>> => {
    const oauthclientsapi = new sdk.OAuthClientsApi(apiConfig);
    return handleApiCall(() => oauthclientsapi.createOauthClientV1(requestParameters));
}
export const createObjectMappingsV1 = (requestParameters: configurationHubTypes.ConfigurationHubApiCreateObjectMappingsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<configurationHubTypes.ObjectMappingBulkCreateResponse>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.createObjectMappingsV1(requestParameters));
}
export const createObjectMappingV1 = (requestParameters: configurationHubTypes.ConfigurationHubApiCreateObjectMappingV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<configurationHubTypes.ObjectMappingResponse>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.createObjectMappingV1(requestParameters));
}
export const createPageContentNerm = (requestParameters: sdk.PageContentsNERMApiCreatePageContentRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContents200ResponseNERM>> => {
    const pagecontentsnermapi = new sdk.PageContentsNERMApi(apiConfig);
    return handleApiCall(() => pagecontentsnermapi.createPageContent(requestParameters));
}
export const createPageContentTranslationNerm = (requestParameters: sdk.PageContentTranslationsNERMApiCreatePageContentTranslationRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContentTranslation200ResponseNERM>> => {
    const pagecontenttranslationsnermapi = new sdk.PageContentTranslationsNERMApi(apiConfig);
    return handleApiCall(() => pagecontenttranslationsnermapi.createPageContentTranslation(requestParameters));
}
export const createPageElementNerm = (requestParameters: sdk.PageElementsNERMApiCreatePageElementRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageElements200ResponseNERM>> => {
    const pageelementsnermapi = new sdk.PageElementsNERMApi(apiConfig);
    return handleApiCall(() => pageelementsnermapi.createPageElement(requestParameters));
}
export const createParameterV1 = (requestParameters: parameterStorageTypes.ParameterStorageApiCreateParameterV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<parameterStorageTypes.ParameterStorageParameter>> => {
    const parameterstorageapi = new sdk.ParameterStorageApi(apiConfig);
    return handleApiCall(() => parameterstorageapi.createParameterV1(requestParameters));
}
export const createPasswordOrgConfigV1 = (requestParameters: passwordConfigurationTypes.PasswordConfigurationApiCreatePasswordOrgConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordConfigurationTypes.PasswordOrgConfig>> => {
    const passwordconfigurationapi = new sdk.PasswordConfigurationApi(apiConfig);
    return handleApiCall(() => passwordconfigurationapi.createPasswordOrgConfigV1(requestParameters));
}
export const createPasswordPolicyV1 = (requestParameters: passwordPoliciesTypes.PasswordPoliciesApiCreatePasswordPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordPoliciesTypes.PasswordPolicyV3Dto>> => {
    const passwordpoliciesapi = new sdk.PasswordPoliciesApi(apiConfig);
    return handleApiCall(() => passwordpoliciesapi.createPasswordPolicyV1(requestParameters));
}
export const createPasswordResetActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreatePasswordResetActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createPasswordResetAction(requestParameters));
}
export const createPasswordSyncGroupV1 = (requestParameters: passwordSyncGroupsTypes.PasswordSyncGroupsApiCreatePasswordSyncGroupV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordSyncGroupsTypes.PasswordSyncGroup>> => {
    const passwordsyncgroupsapi = new sdk.PasswordSyncGroupsApi(apiConfig);
    return handleApiCall(() => passwordsyncgroupsapi.createPasswordSyncGroupV1(requestParameters));
}
export const createPasswordUpdateWorkflowNerm = (requestParameters: sdk.WorkflowsNERMApiCreatePasswordUpdateWorkflowRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateCreateWorkflow200ResponseNERM>> => {
    const workflowsnermapi = new sdk.WorkflowsNERMApi(apiConfig);
    return handleApiCall(() => workflowsnermapi.createPasswordUpdateWorkflow(requestParameters));
}
export const createPermissionNerm = (requestParameters: sdk.PermissionsNERMApiCreatePermissionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreatePermission200ResponseNERM>> => {
    const permissionsnermapi = new sdk.PermissionsNERMApi(apiConfig);
    return handleApiCall(() => permissionsnermapi.createPermission(requestParameters));
}
export const createPersonalAccessTokenV1 = (requestParameters: personalAccessTokensTypes.PersonalAccessTokensApiCreatePersonalAccessTokenV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<personalAccessTokensTypes.CreatePersonalAccessTokenResponse>> => {
    const personalaccesstokensapi = new sdk.PersonalAccessTokensApi(apiConfig);
    return handleApiCall(() => personalaccesstokensapi.createPersonalAccessTokenV1(requestParameters));
}
export const createPotentialRoleProvisionRequestV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiCreatePotentialRoleProvisionRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRoleMiningTypes.RoleMiningPotentialRoleSummary>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.createPotentialRoleProvisionRequestV1(requestParameters));
}
export const createProfileCheckActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateProfileCheckActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createProfileCheckAction(requestParameters));
}
export const createProfilePageNerm = (requestParameters: sdk.PagesNERMApiCreateProfilePageRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateProfilePage200ResponseNERM>> => {
    const pagesnermapi = new sdk.PagesNERMApi(apiConfig);
    return handleApiCall(() => pagesnermapi.createProfilePage(requestParameters));
}
export const createProfileSelectActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateProfileSelectActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createProfileSelectAction(requestParameters));
}
export const createProfilesNerm = (requestParameters: sdk.ProfilesNERMApiCreateProfilesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SearchAdvancedSearch200ResponseNERM>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.createProfiles(requestParameters));
}
export const createProfileTypeRoleNerm = (requestParameters: sdk.ProfileTypeRolesNERMApiCreateProfileTypeRoleRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateProfileTypeRole200ResponseNERM>> => {
    const profiletyperolesnermapi = new sdk.ProfileTypeRolesNERMApi(apiConfig);
    return handleApiCall(() => profiletyperolesnermapi.createProfileTypeRole(requestParameters));
}
export const createProvisioningPolicyV1 = (requestParameters: sourcesTypes.SourcesApiCreateProvisioningPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.ProvisioningPolicyDto>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.createProvisioningPolicyV1(requestParameters));
}
export const createProvisioningPolicyV2 = (requestParameters: sourcesTypes.SourcesApiCreateProvisioningPolicyV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.ProvisioningPolicyDtoV2>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.createProvisioningPolicyV2(requestParameters));
}
export const createReassignmentConfigurationV1 = (requestParameters: workReassignmentTypes.WorkReassignmentApiCreateReassignmentConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workReassignmentTypes.ConfigurationItemResponse>> => {
    const workreassignmentapi = new sdk.WorkReassignmentApi(apiConfig);
    return handleApiCall(() => workreassignmentapi.createReassignmentConfigurationV1(requestParameters));
}
export const createRegistrationWorkflowNerm = (requestParameters: sdk.WorkflowsNERMApiCreateRegistrationWorkflowRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateCreateWorkflow200ResponseNERM>> => {
    const workflowsnermapi = new sdk.WorkflowsNERMApi(apiConfig);
    return handleApiCall(() => workflowsnermapi.createRegistrationWorkflow(requestParameters));
}
export const createRequestActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateRequestActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createRequestAction(requestParameters));
}
export const createRestApiActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateRestApiActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createRestApiAction(requestParameters));
}
export const createReviewActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateReviewActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createReviewAction(requestParameters));
}
export const createRoleInsightRequestsV1 = (requestParameters: roleInsightsTypes.RoleInsightsApiCreateRoleInsightRequestsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<roleInsightsTypes.RoleInsightsResponse>> => {
    const roleinsightsapi = new sdk.RoleInsightsApi(apiConfig);
    return handleApiCall(() => roleinsightsapi.createRoleInsightRequestsV1(requestParameters));
}
export const createRoleMiningSessionsV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiCreateRoleMiningSessionsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRoleMiningTypes.RoleMiningSessionResponse>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.createRoleMiningSessionsV1(requestParameters));
}
export const createRoleV1 = (requestParameters: rolesTypes.RolesApiCreateRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<rolesTypes.Role>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.createRoleV1(requestParameters));
}
export const createRunWorkflowActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateRunWorkflowActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createRunWorkflowAction(requestParameters));
}
export const createSavedSearchV1 = (requestParameters: savedSearchTypes.SavedSearchApiCreateSavedSearchV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<savedSearchTypes.SavedSearch>> => {
    const savedsearchapi = new sdk.SavedSearchApi(apiConfig);
    return handleApiCall(() => savedsearchapi.createSavedSearchV1(requestParameters));
}
export const createScheduledActionV1 = (requestParameters: configurationHubTypes.ConfigurationHubApiCreateScheduledActionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<configurationHubTypes.ScheduledActionResponse>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.createScheduledActionV1(requestParameters));
}
export const createScheduledSearchV1 = (requestParameters: scheduledSearchTypes.ScheduledSearchApiCreateScheduledSearchV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<scheduledSearchTypes.ScheduledSearch>> => {
    const scheduledsearchapi = new sdk.ScheduledSearchApi(apiConfig);
    return handleApiCall(() => scheduledsearchapi.createScheduledSearchV1(requestParameters));
}
export const createScheduleV1 = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiCreateScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<number>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.createScheduleV1(requestParameters));
}
export const createSearchAttributeConfigV1 = (requestParameters: searchAttributeConfigurationTypes.SearchAttributeConfigurationApiCreateSearchAttributeConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const searchattributeconfigurationapi = new sdk.SearchAttributeConfigurationApi(apiConfig);
    return handleApiCall(() => searchattributeconfigurationapi.createSearchAttributeConfigV1(requestParameters));
}
export const createSegmentV1 = (requestParameters: segmentsTypes.SegmentsApiCreateSegmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<segmentsTypes.Segment>> => {
    const segmentsapi = new sdk.SegmentsApi(apiConfig);
    return handleApiCall(() => segmentsapi.createSegmentV1(requestParameters));
}
export const createServiceDeskIntegrationV1 = (requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiCreateServiceDeskIntegrationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<serviceDeskIntegrationTypes.ServiceDeskIntegrationDto>> => {
    const servicedeskintegrationapi = new sdk.ServiceDeskIntegrationApi(apiConfig);
    return handleApiCall(() => servicedeskintegrationapi.createServiceDeskIntegrationV1(requestParameters));
}
export const createSetAttributesActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateSetAttributesActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createSetAttributesAction(requestParameters));
}
export const createSetSecurityQuestionActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateSetSecurityQuestionActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createSetSecurityQuestionAction(requestParameters));
}
export const createSIMIntegrationV1 = (requestParameters: simIntegrationsTypes.SIMIntegrationsApiCreateSIMIntegrationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<simIntegrationsTypes.ServiceDeskIntegrationDto>> => {
    const simintegrationsapi = new sdk.SIMIntegrationsApi(apiConfig);
    return handleApiCall(() => simintegrationsapi.createSIMIntegrationV1(requestParameters));
}
export const createSoapApiActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateSoapApiActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createSoapApiAction(requestParameters));
}
export const createSodPolicyV1 = (requestParameters: sodPoliciesTypes.SODPoliciesApiCreateSodPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.SodPolicy>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.createSodPolicyV1(requestParameters));
}
export const createSourceAppV1 = (requestParameters: appsTypes.AppsApiCreateSourceAppV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<appsTypes.SourceApp>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.createSourceAppV1(requestParameters));
}
export const createSourceScheduleV1 = (requestParameters: sourcesTypes.SourcesApiCreateSourceScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Schedule3>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.createSourceScheduleV1(requestParameters));
}
export const createSourceSchemaV1 = (requestParameters: sourcesTypes.SourcesApiCreateSourceSchemaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Schema>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.createSourceSchemaV1(requestParameters));
}
export const createSourceSubtypeV1 = (requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiCreateSourceSubtypeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountSubtypesTypes.SourceSubtypeWithSource>> => {
    const machineaccountsubtypesapi = new sdk.MachineAccountSubtypesApi(apiConfig);
    return handleApiCall(() => machineaccountsubtypesapi.createSourceSubtypeV1(requestParameters));
}
export const createSourcesWithinMultiHostV1 = (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiCreateSourcesWithinMultiHostV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.createSourcesWithinMultiHostV1(requestParameters));
}
export const createSourceV1 = (requestParameters: sourcesTypes.SourcesApiCreateSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Source>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.createSourceV1(requestParameters));
}
export const createStatusChangeActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateStatusChangeActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createStatusChangeAction(requestParameters));
}
export const createStreamV1 = (requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiCreateStreamV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sharedSignalsFrameworkSsfTypes.StreamConfigResponse>> => {
    const sharedsignalsframeworkssfapi = new sdk.SharedSignalsFrameworkSSFApi(apiConfig);
    return handleApiCall(() => sharedsignalsframeworkssfapi.createStreamV1(requestParameters));
}
export const createSubscriptionV1 = (requestParameters: triggersTypes.TriggersApiCreateSubscriptionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<triggersTypes.Subscription>> => {
    const triggersapi = new sdk.TriggersApi(apiConfig);
    return handleApiCall(() => triggersapi.createSubscriptionV1(requestParameters));
}
export const createSyncedAttributeNerm = (requestParameters: sdk.SyncedAttributesNERMApiCreateSyncedAttributeRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateSyncedAttribute201ResponseNERM>> => {
    const syncedattributesnermapi = new sdk.SyncedAttributesNERMApi(apiConfig);
    return handleApiCall(() => syncedattributesnermapi.createSyncedAttribute(requestParameters));
}
export const createSystemRolePermissionNerm = (requestParameters: sdk.SystemRolePermissionsNERMApiCreateSystemRolePermissionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateSystemRolePermission200ResponseNERM>> => {
    const systemrolepermissionsnermapi = new sdk.SystemRolePermissionsNERMApi(apiConfig);
    return handleApiCall(() => systemrolepermissionsnermapi.createSystemRolePermission(requestParameters));
}
export const createTagV1 = (requestParameters: tagsTypes.TagsApiCreateTagV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<tagsTypes.Tag2>> => {
    const tagsapi = new sdk.TagsApi(apiConfig);
    return handleApiCall(() => tagsapi.createTagV1(requestParameters));
}
export const createTransformV1 = (requestParameters: transformsTypes.TransformsApiCreateTransformV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<transformsTypes.TransformRead>> => {
    const transformsapi = new sdk.TransformsApi(apiConfig);
    return handleApiCall(() => transformsapi.createTransformV1(requestParameters));
}
export const createUnassignActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateUnassignActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createUnassignAction(requestParameters));
}
export const createUpdateProfileActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateUpdateProfileActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createUpdateProfileAction(requestParameters));
}
export const createUpdateWorkflowNerm = (requestParameters: sdk.WorkflowsNERMApiCreateUpdateWorkflowRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateCreateWorkflow200ResponseNERM>> => {
    const workflowsnermapi = new sdk.WorkflowsNERMApi(apiConfig);
    return handleApiCall(() => workflowsnermapi.createUpdateWorkflow(requestParameters));
}
export let createUploadedConfigurationV1 = (requestParameters: configurationHubTypes.ConfigurationHubApiCreateUploadedConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<configurationHubTypes.BackupResponse>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.createUploadedConfigurationV1(requestParameters));
}
export const createUsernamePasswordActionNerm = (requestParameters: sdk.WorkflowActionsNERMApiCreateUsernamePasswordActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createUsernamePasswordAction(requestParameters));
}
export const createUserProfilesNerm = (requestParameters: sdk.UserProfilesNERMApiCreateUserProfilesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateUserProfiles200ResponseNERM>> => {
    const userprofilesnermapi = new sdk.UserProfilesNERMApi(apiConfig);
    return handleApiCall(() => userprofilesnermapi.createUserProfiles(requestParameters));
}
export const createVerifiedFromAddressV1 = (requestParameters: notificationsTypes.NotificationsApiCreateVerifiedFromAddressV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<notificationsTypes.EmailStatusDto>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.createVerifiedFromAddressV1(requestParameters));
}
export const createWorkflowActionPerformerNerm = (requestParameters: sdk.WorkflowActionPerformerNERMApiCreateWorkflowActionPerformerRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateWorkflowActionPerformer200ResponseNERM>> => {
    const workflowactionperformernermapi = new sdk.WorkflowActionPerformerNERMApi(apiConfig);
    return handleApiCall(() => workflowactionperformernermapi.createWorkflowActionPerformer(requestParameters));
}
export const createWorkflowExternalTriggerV1 = (requestParameters: workflowsTypes.WorkflowsApiCreateWorkflowExternalTriggerV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workflowsTypes.WorkflowOAuthClient>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.createWorkflowExternalTriggerV1(requestParameters));
}
export const createWorkflowPageNerm = (requestParameters: sdk.PagesNERMApiCreateWorkflowPageRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateProfilePage200ResponseNERM>> => {
    const pagesnermapi = new sdk.PagesNERMApi(apiConfig);
    return handleApiCall(() => pagesnermapi.createWorkflowPage(requestParameters));
}
export const createWorkflowV1 = (requestParameters: workflowsTypes.WorkflowsApiCreateWorkflowV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workflowsTypes.Workflow>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.createWorkflowV1(requestParameters));
}
export const createWorkgroupV1 = (requestParameters: governanceGroupsTypes.GovernanceGroupsApiCreateWorkgroupV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<governanceGroupsTypes.WorkgroupDto>> => {
    const governancegroupsapi = new sdk.GovernanceGroupsApi(apiConfig);
    return handleApiCall(() => governancegroupsapi.createWorkgroupV1(requestParameters));
}
export const dasV1OwnersAssignPost = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDasV1OwnersAssignPostRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<number>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.dasV1OwnersAssignPost(requestParameters));
}
export const dasV1OwnersOwnerIdentityIdResourcesGet = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDasV1OwnersOwnerIdentityIdResourcesGetRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<dataAccessSecurityTypes.ResourceModel>>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.dasV1OwnersOwnerIdentityIdResourcesGet(requestParameters));
}
export const dasV1OwnersReelectPost = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDasV1OwnersReelectPostRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<number>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.dasV1OwnersReelectPost(requestParameters));
}
export const dasV1OwnersResourcesResourceIdGet = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDasV1OwnersResourcesResourceIdGetRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<string>>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.dasV1OwnersResourcesResourceIdGet(requestParameters));
}
export const dasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPost = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPostRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<number>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.dasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPost(requestParameters));
}
export const delegationsGetNerm = (requestParameters: sdk.DelegationsNERMApiDelegationsGetRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DelegationsGet200ResponseNERM>> => {
    const delegationsnermapi = new sdk.DelegationsNERMApi(apiConfig);
    return handleApiCall(() => delegationsnermapi.delegationsGet(requestParameters));
}
export const delegationsGetNermV2025 = (requestParameters: sdk.DelegationsNERMV2025ApiDelegationsGetRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DelegationsGet200ResponseNERMV2025>> => {
    const delegationsnermv2025api = new sdk.DelegationsNERMV2025Api(apiConfig);
    return handleApiCall(() => delegationsnermv2025api.delegationsGet(requestParameters));
}
export const delegationsIdDeleteNerm = (requestParameters: sdk.DelegationsNERMApiDelegationsIdDeleteRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const delegationsnermapi = new sdk.DelegationsNERMApi(apiConfig);
    return handleApiCall(() => delegationsnermapi.delegationsIdDelete(requestParameters));
}
export const delegationsIdDeleteNermV2025 = (requestParameters: sdk.DelegationsNERMV2025ApiDelegationsIdDeleteRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const delegationsnermv2025api = new sdk.DelegationsNERMV2025Api(apiConfig);
    return handleApiCall(() => delegationsnermv2025api.delegationsIdDelete(requestParameters));
}
export const delegationsIdGetNerm = (requestParameters: sdk.DelegationsNERMApiDelegationsIdGetRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DelegationsPost201ResponseNERM>> => {
    const delegationsnermapi = new sdk.DelegationsNERMApi(apiConfig);
    return handleApiCall(() => delegationsnermapi.delegationsIdGet(requestParameters));
}
export const delegationsIdGetNermV2025 = (requestParameters: sdk.DelegationsNERMV2025ApiDelegationsIdGetRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DelegationsPost201ResponseNERMV2025>> => {
    const delegationsnermv2025api = new sdk.DelegationsNERMV2025Api(apiConfig);
    return handleApiCall(() => delegationsnermv2025api.delegationsIdGet(requestParameters));
}
export const delegationsIdPatchNerm = (requestParameters: sdk.DelegationsNERMApiDelegationsIdPatchRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DelegationsPost201ResponseNERM>> => {
    const delegationsnermapi = new sdk.DelegationsNERMApi(apiConfig);
    return handleApiCall(() => delegationsnermapi.delegationsIdPatch(requestParameters));
}
export const delegationsIdPatchNermV2025 = (requestParameters: sdk.DelegationsNERMV2025ApiDelegationsIdPatchRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DelegationsPost201ResponseNERMV2025>> => {
    const delegationsnermv2025api = new sdk.DelegationsNERMV2025Api(apiConfig);
    return handleApiCall(() => delegationsnermv2025api.delegationsIdPatch(requestParameters));
}
export const delegationsPostNerm = (requestParameters: sdk.DelegationsNERMApiDelegationsPostRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DelegationsPost201ResponseNERM>> => {
    const delegationsnermapi = new sdk.DelegationsNERMApi(apiConfig);
    return handleApiCall(() => delegationsnermapi.delegationsPost(requestParameters));
}
export const delegationsPostNermV2025 = (requestParameters: sdk.DelegationsNERMV2025ApiDelegationsPostRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DelegationsPost201ResponseNERMV2025>> => {
    const delegationsnermv2025api = new sdk.DelegationsNERMV2025Api(apiConfig);
    return handleApiCall(() => delegationsnermv2025api.delegationsPost(requestParameters));
}
export const deleteAccessModelMetadataFromEntitlementV1 = (requestParameters: entitlementsTypes.EntitlementsApiDeleteAccessModelMetadataFromEntitlementV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.deleteAccessModelMetadataFromEntitlementV1(requestParameters));
}
export const deleteAccessProfilesFromSourceAppByBulkV1 = (requestParameters: appsTypes.AppsApiDeleteAccessProfilesFromSourceAppByBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<appsTypes.AccessProfileDetails>>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.deleteAccessProfilesFromSourceAppByBulkV1(requestParameters));
}
export const deleteAccessProfilesInBulkV1 = (requestParameters: accessProfilesTypes.AccessProfilesApiDeleteAccessProfilesInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessProfilesTypes.AccessProfileBulkDeleteResponse>> => {
    const accessprofilesapi = new sdk.AccessProfilesApi(apiConfig);
    return handleApiCall(() => accessprofilesapi.deleteAccessProfilesInBulkV1(requestParameters));
}
export const deleteAccessProfileV1 = (requestParameters: accessProfilesTypes.AccessProfilesApiDeleteAccessProfileV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const accessprofilesapi = new sdk.AccessProfilesApi(apiConfig);
    return handleApiCall(() => accessprofilesapi.deleteAccessProfileV1(requestParameters));
}
export const deleteAccountAsyncV1 = (requestParameters: accountsTypes.AccountsApiDeleteAccountAsyncV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountsTypes.TaskResultDto>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.deleteAccountAsyncV1(requestParameters));
}
export const deleteAccountRequestV1 = (requestParameters: accountDeletionRequestsTypes.AccountDeletionRequestsApiDeleteAccountRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountDeletionRequestsTypes.AccountRequestAsyncResult>> => {
    const accountdeletionrequestsapi = new sdk.AccountDeletionRequestsApi(apiConfig);
    return handleApiCall(() => accountdeletionrequestsapi.deleteAccountRequestV1(requestParameters));
}
export const deleteAccountsAsyncV1 = (requestParameters: sourcesTypes.SourcesApiDeleteAccountsAsyncV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.TaskResultDto>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.deleteAccountsAsyncV1(requestParameters));
}
export const deleteAccountV1 = (requestParameters: accountsTypes.AccountsApiDeleteAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountsTypes.AccountsAsyncResult>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.deleteAccountV1(requestParameters));
}
export const deleteApplicationV1 = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDeleteApplicationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.deleteApplicationV1(requestParameters));
}
export const deleteApprovalConfigRequestV1 = (requestParameters: approvalsTypes.ApprovalsApiDeleteApprovalConfigRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.deleteApprovalConfigRequestV1(requestParameters));
}
export const deleteAttributeByIdNerm = (requestParameters: sdk.AttributesNERMApiDeleteAttributeByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateAttribute201ResponseNERM>> => {
    const attributesnermapi = new sdk.AttributesNERMApi(apiConfig);
    return handleApiCall(() => attributesnermapi.deleteAttributeById(requestParameters));
}
export const deleteAttributeByUidNerm = (requestParameters: sdk.AttributesNERMApiDeleteAttributeByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateAttribute201ResponseNERM>> => {
    const attributesnermapi = new sdk.AttributesNERMApi(apiConfig);
    return handleApiCall(() => attributesnermapi.deleteAttributeByUid(requestParameters));
}
export const deleteAttributeOptionByIdNerm = (requestParameters: sdk.AttributeOptionsNERMApiDeleteAttributeOptionByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DeleteAttributeOptionById200ResponseNERM>> => {
    const attributeoptionsnermapi = new sdk.AttributeOptionsNERMApi(apiConfig);
    return handleApiCall(() => attributeoptionsnermapi.deleteAttributeOptionById(requestParameters));
}
export const deleteAttributeOptionByUidNerm = (requestParameters: sdk.AttributeOptionsNERMApiDeleteAttributeOptionByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DeleteAttributeOptionById200ResponseNERM>> => {
    const attributeoptionsnermapi = new sdk.AttributeOptionsNERMApi(apiConfig);
    return handleApiCall(() => attributeoptionsnermapi.deleteAttributeOptionByUid(requestParameters));
}
export const deleteBackupV1 = (requestParameters: configurationHubTypes.ConfigurationHubApiDeleteBackupV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.deleteBackupV1(requestParameters));
}
export const deleteBrandingV1 = (requestParameters: brandingTypes.BrandingApiDeleteBrandingV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const brandingapi = new sdk.BrandingApi(apiConfig);
    return handleApiCall(() => brandingapi.deleteBrandingV1(requestParameters));
}
export const deleteBulkDimensionsV1 = (requestParameters: dimensionsTypes.DimensionsApiDeleteBulkDimensionsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<dimensionsTypes.TaskResultDto>> => {
    const dimensionsapi = new sdk.DimensionsApi(apiConfig);
    return handleApiCall(() => dimensionsapi.deleteBulkDimensionsV1(requestParameters));
}
export const deleteBulkRolesV1 = (requestParameters: rolesTypes.RolesApiDeleteBulkRolesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<rolesTypes.TaskResultDto>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.deleteBulkRolesV1(requestParameters));
}
export const deleteCampaignFiltersV1 = (requestParameters: certificationCampaignFiltersTypes.CertificationCampaignFiltersApiDeleteCampaignFiltersV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const certificationcampaignfiltersapi = new sdk.CertificationCampaignFiltersApi(apiConfig);
    return handleApiCall(() => certificationcampaignfiltersapi.deleteCampaignFiltersV1(requestParameters));
}
export const deleteCampaignsV1 = (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiDeleteCampaignsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.deleteCampaignsV1(requestParameters));
}
export const deleteCampaignTemplateScheduleV1 = (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiDeleteCampaignTemplateScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.deleteCampaignTemplateScheduleV1(requestParameters));
}
export const deleteCampaignTemplateV1 = (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiDeleteCampaignTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.deleteCampaignTemplateV1(requestParameters));
}
export const deleteClassifyMachineAccountFromSourceV1 = (requestParameters: classifySourceTypes.ClassifySourceApiDeleteClassifyMachineAccountFromSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const classifysourceapi = new sdk.ClassifySourceApi(apiConfig);
    return handleApiCall(() => classifysourceapi.deleteClassifyMachineAccountFromSourceV1(requestParameters));
}
export const deleteConnectorCustomizerV1 = (requestParameters: connectorCustomizersTypes.ConnectorCustomizersApiDeleteConnectorCustomizerV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const connectorcustomizersapi = new sdk.ConnectorCustomizersApi(apiConfig);
    return handleApiCall(() => connectorcustomizersapi.deleteConnectorCustomizerV1(requestParameters));
}
export const deleteConnectorRuleV1 = (requestParameters: connectorRuleManagementTypes.ConnectorRuleManagementApiDeleteConnectorRuleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const connectorrulemanagementapi = new sdk.ConnectorRuleManagementApi(apiConfig);
    return handleApiCall(() => connectorrulemanagementapi.deleteConnectorRuleV1(requestParameters));
}
export const deleteCustomConnectorV1 = (requestParameters: connectorsTypes.ConnectorsApiDeleteCustomConnectorV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.deleteCustomConnectorV1(requestParameters));
}
export const deleteCustomPasswordInstructionsV1 = (requestParameters: customPasswordInstructionsTypes.CustomPasswordInstructionsApiDeleteCustomPasswordInstructionsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const custompasswordinstructionsapi = new sdk.CustomPasswordInstructionsApi(apiConfig);
    return handleApiCall(() => custompasswordinstructionsapi.deleteCustomPasswordInstructionsV1(requestParameters));
}
export const deleteCustomPrivilegeCriteriaV1 = (requestParameters: privilegeCriteriaTypes.PrivilegeCriteriaApiDeleteCustomPrivilegeCriteriaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const privilegecriteriaapi = new sdk.PrivilegeCriteriaApi(apiConfig);
    return handleApiCall(() => privilegecriteriaapi.deleteCustomPrivilegeCriteriaV1(requestParameters));
}
export const deleteDataSegmentV1 = (requestParameters: dataSegmentationTypes.DataSegmentationApiDeleteDataSegmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const datasegmentationapi = new sdk.DataSegmentationApi(apiConfig);
    return handleApiCall(() => datasegmentationapi.deleteDataSegmentV1(requestParameters));
}
export const deleteDimensionV1 = (requestParameters: dimensionsTypes.DimensionsApiDeleteDimensionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const dimensionsapi = new sdk.DimensionsApi(apiConfig);
    return handleApiCall(() => dimensionsapi.deleteDimensionV1(requestParameters));
}
export const deleteDraftV1 = (requestParameters: configurationHubTypes.ConfigurationHubApiDeleteDraftV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.deleteDraftV1(requestParameters));
}
export const deleteFormAttributeByIdNerm = (requestParameters: sdk.FormAttributesNERMApiDeleteFormAttributeByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetFormAttributes200ResponseNERM>> => {
    const formattributesnermapi = new sdk.FormAttributesNERMApi(apiConfig);
    return handleApiCall(() => formattributesnermapi.deleteFormAttributeById(requestParameters));
}
export const deleteFormAttributeByUidNerm = (requestParameters: sdk.FormAttributesNERMApiDeleteFormAttributeByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetFormAttributes200ResponseNERM>> => {
    const formattributesnermapi = new sdk.FormAttributesNERMApi(apiConfig);
    return handleApiCall(() => formattributesnermapi.deleteFormAttributeByUid(requestParameters));
}
export const deleteFormByIdNerm = (requestParameters: sdk.FormsNERMApiDeleteFormByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateAttribute201ResponseNERM>> => {
    const formsnermapi = new sdk.FormsNERMApi(apiConfig);
    return handleApiCall(() => formsnermapi.deleteFormById(requestParameters));
}
export const deleteFormByUidNerm = (requestParameters: sdk.FormsNERMApiDeleteFormByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateAttribute201ResponseNERM>> => {
    const formsnermapi = new sdk.FormsNERMApi(apiConfig);
    return handleApiCall(() => formsnermapi.deleteFormByUid(requestParameters));
}
export const deleteFormDefinitionV1 = (requestParameters: customFormsTypes.CustomFormsApiDeleteFormDefinitionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.deleteFormDefinitionV1(requestParameters));
}
export const deleteIconV1 = (requestParameters: iconsTypes.IconsApiDeleteIconV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const iconsapi = new sdk.IconsApi(apiConfig);
    return handleApiCall(() => iconsapi.deleteIconV1(requestParameters));
}
export const deleteIdentityAttributesInBulkV1 = (requestParameters: identityAttributesTypes.IdentityAttributesApiDeleteIdentityAttributesInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const identityattributesapi = new sdk.IdentityAttributesApi(apiConfig);
    return handleApiCall(() => identityattributesapi.deleteIdentityAttributesInBulkV1(requestParameters));
}
export const deleteIdentityAttributeV1 = (requestParameters: identityAttributesTypes.IdentityAttributesApiDeleteIdentityAttributeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const identityattributesapi = new sdk.IdentityAttributesApi(apiConfig);
    return handleApiCall(() => identityattributesapi.deleteIdentityAttributeV1(requestParameters));
}
export const deleteIdentityCollectorV1 = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDeleteIdentityCollectorV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.deleteIdentityCollectorV1(requestParameters));
}
export const deleteIdentityProfilesV1 = (requestParameters: identityProfilesTypes.IdentityProfilesApiDeleteIdentityProfilesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityProfilesTypes.TaskResultSimplified>> => {
    const identityprofilesapi = new sdk.IdentityProfilesApi(apiConfig);
    return handleApiCall(() => identityprofilesapi.deleteIdentityProfilesV1(requestParameters));
}
export const deleteIdentityProfileV1 = (requestParameters: identityProfilesTypes.IdentityProfilesApiDeleteIdentityProfileV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityProfilesTypes.TaskResultSimplified>> => {
    const identityprofilesapi = new sdk.IdentityProfilesApi(apiConfig);
    return handleApiCall(() => identityprofilesapi.deleteIdentityProfileV1(requestParameters));
}
export const deleteIdentityV1 = (requestParameters: identitiesTypes.IdentitiesApiDeleteIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.deleteIdentityV1(requestParameters));
}
export const deleteLauncherV1 = (requestParameters: launchersTypes.LaunchersApiDeleteLauncherV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const launchersapi = new sdk.LaunchersApi(apiConfig);
    return handleApiCall(() => launchersapi.deleteLauncherV1(requestParameters));
}
export const deleteLifecycleStateV1 = (requestParameters: lifecycleStatesTypes.LifecycleStatesApiDeleteLifecycleStateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<lifecycleStatesTypes.LifecyclestateDeleted>> => {
    const lifecyclestatesapi = new sdk.LifecycleStatesApi(apiConfig);
    return handleApiCall(() => lifecyclestatesapi.deleteLifecycleStateV1(requestParameters));
}
export const deleteMachineAccountMappingsV1 = (requestParameters: machineAccountMappingsTypes.MachineAccountMappingsApiDeleteMachineAccountMappingsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const machineaccountmappingsapi = new sdk.MachineAccountMappingsApi(apiConfig);
    return handleApiCall(() => machineaccountmappingsapi.deleteMachineAccountMappingsV1(requestParameters));
}
export const deleteMachineAccountSubtypeByTechnicalNameV1 = (requestParameters: machineAccountsTypes.MachineAccountsApiDeleteMachineAccountSubtypeByTechnicalNameV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const machineaccountsapi = new sdk.MachineAccountsApi(apiConfig);
    return handleApiCall(() => machineaccountsapi.deleteMachineAccountSubtypeByTechnicalNameV1(requestParameters));
}
export const deleteMachineAccountSubtypeV1 = (requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiDeleteMachineAccountSubtypeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const machineaccountsubtypesapi = new sdk.MachineAccountSubtypesApi(apiConfig);
    return handleApiCall(() => machineaccountsubtypesapi.deleteMachineAccountSubtypeV1(requestParameters));
}
export const deleteMachineClassificationConfigV1 = (requestParameters: machineClassificationConfigTypes.MachineClassificationConfigApiDeleteMachineClassificationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const machineclassificationconfigapi = new sdk.MachineClassificationConfigApi(apiConfig);
    return handleApiCall(() => machineclassificationconfigapi.deleteMachineClassificationConfigV1(requestParameters));
}
export const deleteMachineIdentityV1 = (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiDeleteMachineIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.deleteMachineIdentityV1(requestParameters));
}
export const deleteMachineIdentityV2 = (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiDeleteMachineIdentityV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.deleteMachineIdentityV2(requestParameters));
}
export const deleteManagedClientV1 = (requestParameters: managedClientsTypes.ManagedClientsApiDeleteManagedClientV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const managedclientsapi = new sdk.ManagedClientsApi(apiConfig);
    return handleApiCall(() => managedclientsapi.deleteManagedClientV1(requestParameters));
}
export const deleteManagedClusterTypeV1 = (requestParameters: managedClusterTypesTypes.ManagedClusterTypesApiDeleteManagedClusterTypeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const managedclustertypesapi = new sdk.ManagedClusterTypesApi(apiConfig);
    return handleApiCall(() => managedclustertypesapi.deleteManagedClusterTypeV1(requestParameters));
}
export const deleteManagedClusterV1 = (requestParameters: managedClustersTypes.ManagedClustersApiDeleteManagedClusterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const managedclustersapi = new sdk.ManagedClustersApi(apiConfig);
    return handleApiCall(() => managedclustersapi.deleteManagedClusterV1(requestParameters));
}
export const deleteMasterRecordNerm = (requestParameters: sdk.ConsolidationNERMApiDeleteMasterRecordRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const consolidationnermapi = new sdk.ConsolidationNERMApi(apiConfig);
    return handleApiCall(() => consolidationnermapi.deleteMasterRecord(requestParameters));
}
export const deleteMetadataFromRoleByKeyAndValueV1 = (requestParameters: rolesTypes.RolesApiDeleteMetadataFromRoleByKeyAndValueV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.deleteMetadataFromRoleByKeyAndValueV1(requestParameters));
}
export const deleteMultiHostSourcesV1 = (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiDeleteMultiHostSourcesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.deleteMultiHostSourcesV1(requestParameters));
}
export const deleteMultiHostV1 = (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiDeleteMultiHostV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.deleteMultiHostV1(requestParameters));
}
export const deleteNativeChangeDetectionConfigV1 = (requestParameters: sourcesTypes.SourcesApiDeleteNativeChangeDetectionConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.deleteNativeChangeDetectionConfigV1(requestParameters));
}
export const deleteNonEmployeeRecordsInBulkV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeRecordsInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.deleteNonEmployeeRecordsInBulkV1(requestParameters));
}
export const deleteNonEmployeeRecordV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeRecordV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.deleteNonEmployeeRecordV1(requestParameters));
}
export const deleteNonEmployeeRequestV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.deleteNonEmployeeRequestV1(requestParameters));
}
export const deleteNonEmployeeSchemaAttributeV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeSchemaAttributeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.deleteNonEmployeeSchemaAttributeV1(requestParameters));
}
export const deleteNonEmployeeSourceSchemaAttributesV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeSourceSchemaAttributesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.deleteNonEmployeeSourceSchemaAttributesV1(requestParameters));
}
export const deleteNonEmployeeSourceV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.deleteNonEmployeeSourceV1(requestParameters));
}
export const deleteNotificationTemplatesInBulkV1 = (requestParameters: notificationsTypes.NotificationsApiDeleteNotificationTemplatesInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.deleteNotificationTemplatesInBulkV1(requestParameters));
}
export const deleteOauthClientV1 = (requestParameters: oauthClientsTypes.OAuthClientsApiDeleteOauthClientV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const oauthclientsapi = new sdk.OAuthClientsApi(apiConfig);
    return handleApiCall(() => oauthclientsapi.deleteOauthClientV1(requestParameters));
}
export const deleteObjectMappingV1 = (requestParameters: configurationHubTypes.ConfigurationHubApiDeleteObjectMappingV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.deleteObjectMappingV1(requestParameters));
}
export const deleteOwnershipCorrelationConfigV1 = (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiDeleteOwnershipCorrelationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.deleteOwnershipCorrelationConfigV1(requestParameters));
}
export const deletePageContentByIdNerm = (requestParameters: sdk.PageContentsNERMApiDeletePageContentByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContents200ResponseNERM>> => {
    const pagecontentsnermapi = new sdk.PageContentsNERMApi(apiConfig);
    return handleApiCall(() => pagecontentsnermapi.deletePageContentById(requestParameters));
}
export const deletePageContentByUidNerm = (requestParameters: sdk.PageContentsNERMApiDeletePageContentByUidRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContents200ResponseNERM>> => {
    const pagecontentsnermapi = new sdk.PageContentsNERMApi(apiConfig);
    return handleApiCall(() => pagecontentsnermapi.deletePageContentByUid(requestParameters));
}
export const deletePageContentTranslationByIdNerm = (requestParameters: sdk.PageContentTranslationsNERMApiDeletePageContentTranslationByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContentTranslation200ResponseNERM>> => {
    const pagecontenttranslationsnermapi = new sdk.PageContentTranslationsNERMApi(apiConfig);
    return handleApiCall(() => pagecontenttranslationsnermapi.deletePageContentTranslationById(requestParameters));
}
export const deletePageContentTranslationByUidNerm = (requestParameters: sdk.PageContentTranslationsNERMApiDeletePageContentTranslationByUidRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContentTranslation200ResponseNERM>> => {
    const pagecontenttranslationsnermapi = new sdk.PageContentTranslationsNERMApi(apiConfig);
    return handleApiCall(() => pagecontenttranslationsnermapi.deletePageContentTranslationByUid(requestParameters));
}
export const deletePageElementByIdNerm = (requestParameters: sdk.PageElementsNERMApiDeletePageElementByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageElements200ResponseNERM>> => {
    const pageelementsnermapi = new sdk.PageElementsNERMApi(apiConfig);
    return handleApiCall(() => pageelementsnermapi.deletePageElementById(requestParameters));
}
export const deletePageElementByUidNerm = (requestParameters: sdk.PageElementsNERMApiDeletePageElementByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageElements200ResponseNERM>> => {
    const pageelementsnermapi = new sdk.PageElementsNERMApi(apiConfig);
    return handleApiCall(() => pageelementsnermapi.deletePageElementByUid(requestParameters));
}
export const deleteParameterV1 = (requestParameters: parameterStorageTypes.ParameterStorageApiDeleteParameterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const parameterstorageapi = new sdk.ParameterStorageApi(apiConfig);
    return handleApiCall(() => parameterstorageapi.deleteParameterV1(requestParameters));
}
export const deletePasswordPolicyV1 = (requestParameters: passwordPoliciesTypes.PasswordPoliciesApiDeletePasswordPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const passwordpoliciesapi = new sdk.PasswordPoliciesApi(apiConfig);
    return handleApiCall(() => passwordpoliciesapi.deletePasswordPolicyV1(requestParameters));
}
export const deletePasswordSyncGroupV1 = (requestParameters: passwordSyncGroupsTypes.PasswordSyncGroupsApiDeletePasswordSyncGroupV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const passwordsyncgroupsapi = new sdk.PasswordSyncGroupsApi(apiConfig);
    return handleApiCall(() => passwordsyncgroupsapi.deletePasswordSyncGroupV1(requestParameters));
}
export const deletePersonalAccessTokenV1 = (requestParameters: personalAccessTokensTypes.PersonalAccessTokensApiDeletePersonalAccessTokenV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const personalaccesstokensapi = new sdk.PersonalAccessTokensApi(apiConfig);
    return handleApiCall(() => personalaccesstokensapi.deletePersonalAccessTokenV1(requestParameters));
}
export const deleteProfileByIdNerm = (requestParameters: sdk.ProfilesNERMApiDeleteProfileByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.deleteProfileById(requestParameters));
}
export const deleteProfilesNerm = (requestParameters: sdk.ProfilesNERMApiDeleteProfilesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DeleteProfiles200ResponseNERM>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.deleteProfiles(requestParameters));
}
export const deleteProfileTypeByIdNerm = (requestParameters: sdk.ProfileTypesNERMApiDeleteProfileTypeByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DeleteProfileTypeById200ResponseNERM>> => {
    const profiletypesnermapi = new sdk.ProfileTypesNERMApi(apiConfig);
    return handleApiCall(() => profiletypesnermapi.deleteProfileTypeById(requestParameters));
}
export const deleteProfileTypeByUidNerm = (requestParameters: sdk.ProfileTypesNERMApiDeleteProfileTypeByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DeleteProfileTypeById200ResponseNERM>> => {
    const profiletypesnermapi = new sdk.ProfileTypesNERMApi(apiConfig);
    return handleApiCall(() => profiletypesnermapi.deleteProfileTypeByUid(requestParameters));
}
export const deleteProvisioningPolicyV1 = (requestParameters: sourcesTypes.SourcesApiDeleteProvisioningPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.deleteProvisioningPolicyV1(requestParameters));
}
export const deleteProvisioningPolicyV2 = (requestParameters: sourcesTypes.SourcesApiDeleteProvisioningPolicyV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.deleteProvisioningPolicyV2(requestParameters));
}
export const deleteReassignmentConfigurationV1 = (requestParameters: workReassignmentTypes.WorkReassignmentApiDeleteReassignmentConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const workreassignmentapi = new sdk.WorkReassignmentApi(apiConfig);
    return handleApiCall(() => workreassignmentapi.deleteReassignmentConfigurationV1(requestParameters));
}
export const deleteRoleProfileNerm = (requestParameters: sdk.RoleProfilesNERMApiDeleteRoleProfileRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const roleprofilesnermapi = new sdk.RoleProfilesNERMApi(apiConfig);
    return handleApiCall(() => roleprofilesnermapi.deleteRoleProfile(requestParameters));
}
export const deleteRoleV1 = (requestParameters: rolesTypes.RolesApiDeleteRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.deleteRoleV1(requestParameters));
}
export const deleteSavedSearchV1 = (requestParameters: savedSearchTypes.SavedSearchApiDeleteSavedSearchV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const savedsearchapi = new sdk.SavedSearchApi(apiConfig);
    return handleApiCall(() => savedsearchapi.deleteSavedSearchV1(requestParameters));
}
export const deleteScheduledActionV1 = (requestParameters: configurationHubTypes.ConfigurationHubApiDeleteScheduledActionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.deleteScheduledActionV1(requestParameters));
}
export const deleteScheduledSearchV1 = (requestParameters: scheduledSearchTypes.ScheduledSearchApiDeleteScheduledSearchV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const scheduledsearchapi = new sdk.ScheduledSearchApi(apiConfig);
    return handleApiCall(() => scheduledsearchapi.deleteScheduledSearchV1(requestParameters));
}
export const deleteScheduleV1 = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDeleteScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.deleteScheduleV1(requestParameters));
}
export const deleteSearchAttributeConfigV1 = (requestParameters: searchAttributeConfigurationTypes.SearchAttributeConfigurationApiDeleteSearchAttributeConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const searchattributeconfigurationapi = new sdk.SearchAttributeConfigurationApi(apiConfig);
    return handleApiCall(() => searchattributeconfigurationapi.deleteSearchAttributeConfigV1(requestParameters));
}
export const deleteSegmentV1 = (requestParameters: segmentsTypes.SegmentsApiDeleteSegmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const segmentsapi = new sdk.SegmentsApi(apiConfig);
    return handleApiCall(() => segmentsapi.deleteSegmentV1(requestParameters));
}
export const deleteServiceDeskIntegrationV1 = (requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiDeleteServiceDeskIntegrationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const servicedeskintegrationapi = new sdk.ServiceDeskIntegrationApi(apiConfig);
    return handleApiCall(() => servicedeskintegrationapi.deleteServiceDeskIntegrationV1(requestParameters));
}
export const deleteSIMIntegrationV1 = (requestParameters: simIntegrationsTypes.SIMIntegrationsApiDeleteSIMIntegrationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const simintegrationsapi = new sdk.SIMIntegrationsApi(apiConfig);
    return handleApiCall(() => simintegrationsapi.deleteSIMIntegrationV1(requestParameters));
}
export const deleteSodPolicyScheduleV1 = (requestParameters: sodPoliciesTypes.SODPoliciesApiDeleteSodPolicyScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.deleteSodPolicyScheduleV1(requestParameters));
}
export const deleteSodPolicyV1 = (requestParameters: sodPoliciesTypes.SODPoliciesApiDeleteSodPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.deleteSodPolicyV1(requestParameters));
}
export const deleteSourceAppV1 = (requestParameters: appsTypes.AppsApiDeleteSourceAppV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<appsTypes.SourceApp>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.deleteSourceAppV1(requestParameters));
}
export const deleteSourceScheduleV1 = (requestParameters: sourcesTypes.SourcesApiDeleteSourceScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.deleteSourceScheduleV1(requestParameters));
}
export const deleteSourceSchemaV1 = (requestParameters: sourcesTypes.SourcesApiDeleteSourceSchemaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.deleteSourceSchemaV1(requestParameters));
}
export const deleteSourceV1 = (requestParameters: sourcesTypes.SourcesApiDeleteSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.DeleteSourceV1202Response>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.deleteSourceV1(requestParameters));
}
export const deleteStreamV1 = (requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiDeleteStreamV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const sharedsignalsframeworkssfapi = new sdk.SharedSignalsFrameworkSSFApi(apiConfig);
    return handleApiCall(() => sharedsignalsframeworkssfapi.deleteStreamV1(requestParameters));
}
export const deleteSubscriptionV1 = (requestParameters: triggersTypes.TriggersApiDeleteSubscriptionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const triggersapi = new sdk.TriggersApi(apiConfig);
    return handleApiCall(() => triggersapi.deleteSubscriptionV1(requestParameters));
}
export const deleteSyncedAttributeNerm = (requestParameters: sdk.SyncedAttributesNERMApiDeleteSyncedAttributeRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DeleteProfileTypeById200ResponseNERM>> => {
    const syncedattributesnermapi = new sdk.SyncedAttributesNERMApi(apiConfig);
    return handleApiCall(() => syncedattributesnermapi.deleteSyncedAttribute(requestParameters));
}
export const deleteTagByIdV1 = (requestParameters: tagsTypes.TagsApiDeleteTagByIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const tagsapi = new sdk.TagsApi(apiConfig);
    return handleApiCall(() => tagsapi.deleteTagByIdV1(requestParameters));
}
export const deleteTaggedObjectV1 = (requestParameters: taggedObjectsTypes.TaggedObjectsApiDeleteTaggedObjectV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const taggedobjectsapi = new sdk.TaggedObjectsApi(apiConfig);
    return handleApiCall(() => taggedobjectsapi.deleteTaggedObjectV1(requestParameters));
}
export const deleteTagsToManyObjectV1 = (requestParameters: taggedObjectsTypes.TaggedObjectsApiDeleteTagsToManyObjectV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const taggedobjectsapi = new sdk.TaggedObjectsApi(apiConfig);
    return handleApiCall(() => taggedobjectsapi.deleteTagsToManyObjectV1(requestParameters));
}
export const deleteTaskV1 = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDeleteTaskV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.deleteTaskV1(requestParameters));
}
export const deleteTransformV1 = (requestParameters: transformsTypes.TransformsApiDeleteTransformV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const transformsapi = new sdk.TransformsApi(apiConfig);
    return handleApiCall(() => transformsapi.deleteTransformV1(requestParameters));
}
export const deleteUploadedConfigurationV1 = (requestParameters: configurationHubTypes.ConfigurationHubApiDeleteUploadedConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.deleteUploadedConfigurationV1(requestParameters));
}
export const deleteUserLevelV1 = (requestParameters: customUserLevelsTypes.CustomUserLevelsApiDeleteUserLevelV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const customuserlevelsapi = new sdk.CustomUserLevelsApi(apiConfig);
    return handleApiCall(() => customuserlevelsapi.deleteUserLevelV1(requestParameters));
}
export const deleteUserNerm = (requestParameters: sdk.UsersNERMApiDeleteUserRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DeleteProfileTypeById200ResponseNERM>> => {
    const usersnermapi = new sdk.UsersNERMApi(apiConfig);
    return handleApiCall(() => usersnermapi.deleteUser(requestParameters));
}
export const deleteUserProfileNerm = (requestParameters: sdk.UserProfilesNERMApiDeleteUserProfileRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const userprofilesnermapi = new sdk.UserProfilesNERMApi(apiConfig);
    return handleApiCall(() => userprofilesnermapi.deleteUserProfile(requestParameters));
}
export const deleteUserProfilesNerm = (requestParameters: sdk.UserProfilesNERMApiDeleteUserProfilesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateUserProfiles200ResponseNERM>> => {
    const userprofilesnermapi = new sdk.UserProfilesNERMApi(apiConfig);
    return handleApiCall(() => userprofilesnermapi.deleteUserProfiles(requestParameters));
}
export const deleteUserRoleNerm = (requestParameters: sdk.UserRolesNERMApiDeleteUserRoleRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const userrolesnermapi = new sdk.UserRolesNERMApi(apiConfig);
    return handleApiCall(() => userrolesnermapi.deleteUserRole(requestParameters));
}
export const deleteVerifiedFromAddressV1 = (requestParameters: notificationsTypes.NotificationsApiDeleteVerifiedFromAddressV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.deleteVerifiedFromAddressV1(requestParameters));
}
export const deleteWorkflowV1 = (requestParameters: workflowsTypes.WorkflowsApiDeleteWorkflowV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.deleteWorkflowV1(requestParameters));
}
export const deleteWorkgroupMembersV1 = (requestParameters: governanceGroupsTypes.GovernanceGroupsApiDeleteWorkgroupMembersV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<governanceGroupsTypes.WorkgroupMemberDeleteItem>>> => {
    const governancegroupsapi = new sdk.GovernanceGroupsApi(apiConfig);
    return handleApiCall(() => governancegroupsapi.deleteWorkgroupMembersV1(requestParameters));
}
export const deleteWorkgroupsInBulkV1 = (requestParameters: governanceGroupsTypes.GovernanceGroupsApiDeleteWorkgroupsInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<governanceGroupsTypes.WorkgroupDeleteItem>>> => {
    const governancegroupsapi = new sdk.GovernanceGroupsApi(apiConfig);
    return handleApiCall(() => governancegroupsapi.deleteWorkgroupsInBulkV1(requestParameters));
}
export const deleteWorkgroupV1 = (requestParameters: governanceGroupsTypes.GovernanceGroupsApiDeleteWorkgroupV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const governancegroupsapi = new sdk.GovernanceGroupsApi(apiConfig);
    return handleApiCall(() => governancegroupsapi.deleteWorkgroupV1(requestParameters));
}
export const disableAccountForIdentityV1 = (requestParameters: accountsTypes.AccountsApiDisableAccountForIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.disableAccountForIdentityV1(requestParameters));
}
export const disableAccountsForIdentitiesV1 = (requestParameters: accountsTypes.AccountsApiDisableAccountsForIdentitiesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accountsTypes.BulkIdentitiesAccountsResponse>>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.disableAccountsForIdentitiesV1(requestParameters));
}
export const disableAccountV1 = (requestParameters: accountsTypes.AccountsApiDisableAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountsTypes.AccountsAsyncResult>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.disableAccountV1(requestParameters));
}
export const downloadRoleInsightsEntitlementsChangesV1 = (requestParameters: roleInsightsTypes.RoleInsightsApiDownloadRoleInsightsEntitlementsChangesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<string>> => {
    const roleinsightsapi = new sdk.RoleInsightsApi(apiConfig);
    return handleApiCall(() => roleinsightsapi.downloadRoleInsightsEntitlementsChangesV1(requestParameters));
}
export const downloadRoleMiningPotentialRoleZipV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiDownloadRoleMiningPotentialRoleZipV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<File>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.downloadRoleMiningPotentialRoleZipV1(requestParameters));
}
export const enableAccountForIdentityV1 = (requestParameters: accountsTypes.AccountsApiEnableAccountForIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.enableAccountForIdentityV1(requestParameters));
}
export const enableAccountsForIdentitiesV1 = (requestParameters: accountsTypes.AccountsApiEnableAccountsForIdentitiesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accountsTypes.BulkIdentitiesAccountsResponse>>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.enableAccountsForIdentitiesV1(requestParameters));
}
export const enableAccountV1 = (requestParameters: accountsTypes.AccountsApiEnableAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountsTypes.AccountsAsyncResult>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.enableAccountV1(requestParameters));
}
export const executeSavedSearchV1 = (requestParameters: savedSearchTypes.SavedSearchApiExecuteSavedSearchV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const savedsearchapi = new sdk.SavedSearchApi(apiConfig);
    return handleApiCall(() => savedsearchapi.executeSavedSearchV1(requestParameters));
}
export const exportFormDefinitionsByTenantV1 = (requestParameters: customFormsTypes.CustomFormsApiExportFormDefinitionsByTenantV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<customFormsTypes.ExportFormDefinitionsByTenantV1200ResponseInner>>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.exportFormDefinitionsByTenantV1(requestParameters));
}
export const exportIdentityProfilesV1 = (requestParameters: identityProfilesTypes.IdentityProfilesApiExportIdentityProfilesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identityProfilesTypes.IdentityProfileExportedObject>>> => {
    const identityprofilesapi = new sdk.IdentityProfilesApi(apiConfig);
    return handleApiCall(() => identityprofilesapi.exportIdentityProfilesV1(requestParameters));
}
export const exportNonEmployeeRecordsV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiExportNonEmployeeRecordsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.exportNonEmployeeRecordsV1(requestParameters));
}
export const exportNonEmployeeSourceSchemaTemplateV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiExportNonEmployeeSourceSchemaTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.exportNonEmployeeSourceSchemaTemplateV1(requestParameters));
}
export const exportOutliersZipV1 = (requestParameters: iaiOutliersTypes.IAIOutliersApiExportOutliersZipV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<File>> => {
    const iaioutliersapi = new sdk.IAIOutliersApi(apiConfig);
    return handleApiCall(() => iaioutliersapi.exportOutliersZipV1(requestParameters));
}
export const exportRoleMiningPotentialRoleAsyncV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiExportRoleMiningPotentialRoleAsyncV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRoleMiningTypes.RoleMiningPotentialRoleExportResponse>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.exportRoleMiningPotentialRoleAsyncV1(requestParameters));
}
export const exportRoleMiningPotentialRoleStatusV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiExportRoleMiningPotentialRoleStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRoleMiningTypes.RoleMiningPotentialRoleExportResponse>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.exportRoleMiningPotentialRoleStatusV1(requestParameters));
}
export const exportRoleMiningPotentialRoleV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiExportRoleMiningPotentialRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<File>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.exportRoleMiningPotentialRoleV1(requestParameters));
}
export const exportSpConfigV1 = (requestParameters: spConfigTypes.SPConfigApiExportSpConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<spConfigTypes.SpConfigExportJob>> => {
    const spconfigapi = new sdk.SPConfigApi(apiConfig);
    return handleApiCall(() => spconfigapi.exportSpConfigV1(requestParameters));
}
export const forwardAccessRequestV1 = (requestParameters: accessRequestApprovalsTypes.AccessRequestApprovalsApiForwardAccessRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const accessrequestapprovalsapi = new sdk.AccessRequestApprovalsApi(apiConfig);
    return handleApiCall(() => accessrequestapprovalsapi.forwardAccessRequestV1(requestParameters));
}
export const forwardWorkItemV1 = (requestParameters: workItemsTypes.WorkItemsApiForwardWorkItemV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.forwardWorkItemV1(requestParameters));
}
export const generateIdentityPreviewV1 = (requestParameters: identityProfilesTypes.IdentityProfilesApiGenerateIdentityPreviewV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityProfilesTypes.IdentityPreviewResponse>> => {
    const identityprofilesapi = new sdk.IdentityProfilesApi(apiConfig);
    return handleApiCall(() => identityprofilesapi.generateIdentityPreviewV1(requestParameters));
}
export const getAccessModelMetadataAttributeV1 = (requestParameters: accessModelMetadataTypes.AccessModelMetadataApiGetAccessModelMetadataAttributeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessModelMetadataTypes.AttributeDTO>> => {
    const accessmodelmetadataapi = new sdk.AccessModelMetadataApi(apiConfig);
    return handleApiCall(() => accessmodelmetadataapi.getAccessModelMetadataAttributeV1(requestParameters));
}
export const getAccessModelMetadataAttributeValueV1 = (requestParameters: accessModelMetadataTypes.AccessModelMetadataApiGetAccessModelMetadataAttributeValueV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessModelMetadataTypes.AttributeValueDTO>> => {
    const accessmodelmetadataapi = new sdk.AccessModelMetadataApi(apiConfig);
    return handleApiCall(() => accessmodelmetadataapi.getAccessModelMetadataAttributeValueV1(requestParameters));
}
export const getAccessProfileEntitlementsV1 = (requestParameters: accessProfilesTypes.AccessProfilesApiGetAccessProfileEntitlementsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accessProfilesTypes.Entitlement>>> => {
    const accessprofilesapi = new sdk.AccessProfilesApi(apiConfig);
    return handleApiCall(() => accessprofilesapi.getAccessProfileEntitlementsV1(requestParameters));
}
export const getAccessProfileV1 = (requestParameters: accessProfilesTypes.AccessProfilesApiGetAccessProfileV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessProfilesTypes.AccessProfile>> => {
    const accessprofilesapi = new sdk.AccessProfilesApi(apiConfig);
    return handleApiCall(() => accessprofilesapi.getAccessProfileV1(requestParameters));
}
export const getAccessRequestApprovalSummaryV1 = (requestParameters: accessRequestApprovalsTypes.AccessRequestApprovalsApiGetAccessRequestApprovalSummaryV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<accessRequestApprovalsTypes.ApprovalSummary>> => {
    const accessrequestapprovalsapi = new sdk.AccessRequestApprovalsApi(apiConfig);
    return handleApiCall(() => accessrequestapprovalsapi.getAccessRequestApprovalSummaryV1(requestParameters));
}
export const getAccessRequestConfigV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<accessRequestsTypes.AccessRequestConfig>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.getAccessRequestConfigV1());
}
export const getAccessRequestConfigV2 = (apiConfig: sdk.Configuration): Promise<ApiResponse<accessRequestsTypes.AccessRequestConfig2>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.getAccessRequestConfigV2());
}
export const getAccessRequestIdentityMetricsV1 = (requestParameters: accessRequestIdentityMetricsTypes.AccessRequestIdentityMetricsApiGetAccessRequestIdentityMetricsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const accessrequestidentitymetricsapi = new sdk.AccessRequestIdentityMetricsApi(apiConfig);
    return handleApiCall(() => accessrequestidentitymetricsapi.getAccessRequestIdentityMetricsV1(requestParameters));
}
export const getAccessRequestRecommendationsConfigV1 = (requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiGetAccessRequestRecommendationsConfigV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiAccessRequestRecommendationsTypes.AccessRequestRecommendationConfigDto>> => {
    const iaiaccessrequestrecommendationsapi = new sdk.IAIAccessRequestRecommendationsApi(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsapi.getAccessRequestRecommendationsConfigV1(requestParameters));
}
export const getAccessRequestRecommendationsIgnoredItemsV1 = (requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiGetAccessRequestRecommendationsIgnoredItemsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiAccessRequestRecommendationsTypes.AccessRequestRecommendationActionItemResponseDto>>> => {
    const iaiaccessrequestrecommendationsapi = new sdk.IAIAccessRequestRecommendationsApi(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsapi.getAccessRequestRecommendationsIgnoredItemsV1(requestParameters));
}
export const getAccessRequestRecommendationsRequestedItemsV1 = (requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiGetAccessRequestRecommendationsRequestedItemsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiAccessRequestRecommendationsTypes.AccessRequestRecommendationActionItemResponseDto>>> => {
    const iaiaccessrequestrecommendationsapi = new sdk.IAIAccessRequestRecommendationsApi(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsapi.getAccessRequestRecommendationsRequestedItemsV1(requestParameters));
}
export const getAccessRequestRecommendationsV1 = (requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiGetAccessRequestRecommendationsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiAccessRequestRecommendationsTypes.AccessRequestRecommendationItemDetail>>> => {
    const iaiaccessrequestrecommendationsapi = new sdk.IAIAccessRequestRecommendationsApi(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsapi.getAccessRequestRecommendationsV1(requestParameters));
}
export const getAccessRequestRecommendationsViewedItemsV1 = (requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiGetAccessRequestRecommendationsViewedItemsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiAccessRequestRecommendationsTypes.AccessRequestRecommendationActionItemResponseDto>>> => {
    const iaiaccessrequestrecommendationsapi = new sdk.IAIAccessRequestRecommendationsApi(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsapi.getAccessRequestRecommendationsViewedItemsV1(requestParameters));
}
export const getAccountActivityV1 = (requestParameters: accountActivitiesTypes.AccountActivitiesApiGetAccountActivityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountActivitiesTypes.AccountActivity>> => {
    const accountactivitiesapi = new sdk.AccountActivitiesApi(apiConfig);
    return handleApiCall(() => accountactivitiesapi.getAccountActivityV1(requestParameters));
}
export const getAccountAggregationStatusV1 = (requestParameters: accountAggregationsTypes.AccountAggregationsApiGetAccountAggregationStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountAggregationsTypes.AccountAggregationStatus>> => {
    const accountaggregationsapi = new sdk.AccountAggregationsApi(apiConfig);
    return handleApiCall(() => accountaggregationsapi.getAccountAggregationStatusV1(requestParameters));
}
export const getAccountDeleteApprovalConfigV1 = (requestParameters: sourcesTypes.SourcesApiGetAccountDeleteApprovalConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.AccountDeleteConfigDto>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getAccountDeleteApprovalConfigV1(requestParameters));
}
export const getAccountDeletionRequestsV1 = (requestParameters: accountDeletionRequestsTypes.AccountDeletionRequestsApiGetAccountDeletionRequestsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accountDeletionRequestsTypes.AccountActionRequestDto>>> => {
    const accountdeletionrequestsapi = new sdk.AccountDeletionRequestsApi(apiConfig);
    return handleApiCall(() => accountdeletionrequestsapi.getAccountDeletionRequestsV1(requestParameters));
}
export const getAccountEntitlementsV1 = (requestParameters: accountsTypes.AccountsApiGetAccountEntitlementsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accountsTypes.Entitlement>>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.getAccountEntitlementsV1(requestParameters));
}
export const getAccountsSchemaV1 = (requestParameters: sourcesTypes.SourcesApiGetAccountsSchemaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getAccountsSchemaV1(requestParameters));
}
export const getAccountV1 = (requestParameters: accountsTypes.AccountsApiGetAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountsTypes.Account>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.getAccountV1(requestParameters));
}
export const getAcctAggregationGroupsV1 = (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiGetAcctAggregationGroupsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<multiHostIntegrationTypes.MultiHostIntegrationsAggScheduleUpdate>>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.getAcctAggregationGroupsV1(requestParameters));
}
export const getActiveCampaignsV1 = (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiGetActiveCampaignsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<certificationCampaignsTypes.GetActiveCampaignsV1200ResponseInner>>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.getActiveCampaignsV1(requestParameters));
}
export const getAdvancedSearchNerm = (apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetAdvancedSearch200ResponseNERM>> => {
    const advancedsearchnermapi = new sdk.AdvancedSearchNERMApi(apiConfig);
    return handleApiCall(() => advancedsearchnermapi.getAdvancedSearch());
}
export const getAllPotentialRoleSummariesV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetAllPotentialRoleSummariesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiRoleMiningTypes.RoleMiningPotentialRoleSummary>>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getAllPotentialRoleSummariesV1(requestParameters));
}
export const getApplicationsV1 = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiGetApplicationsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<dataAccessSecurityTypes.ApplicationItem>>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.getApplicationsV1(requestParameters));
}
export const getApplicationV1 = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiGetApplicationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<dataAccessSecurityTypes.ApplicationItem>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.getApplicationV1(requestParameters));
}
export const getApprovalsConfigV1 = (requestParameters: approvalsTypes.ApprovalsApiGetApprovalsConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<approvalsTypes.ApprovalConfig>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.getApprovalsConfigV1(requestParameters));
}
export const getApprovalsV1 = (requestParameters: approvalsTypes.ApprovalsApiGetApprovalsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<approvalsTypes.Approval2>>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.getApprovalsV1(requestParameters));
}
export const getApprovalV1 = (requestParameters: approvalsTypes.ApprovalsApiGetApprovalV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<approvalsTypes.Approval2>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.getApprovalV1(requestParameters));
}
export const getAttestationDocumentV1 = (requestParameters: parameterStorageTypes.ParameterStorageApiGetAttestationDocumentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<parameterStorageTypes.ParameterStorageAttestationDocument>> => {
    const parameterstorageapi = new sdk.ParameterStorageApi(apiConfig);
    return handleApiCall(() => parameterstorageapi.getAttestationDocumentV1(requestParameters));
}
export const getAttributeByIdNerm = (requestParameters: sdk.AttributesNERMApiGetAttributeByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateAttribute201ResponseNERM>> => {
    const attributesnermapi = new sdk.AttributesNERMApi(apiConfig);
    return handleApiCall(() => attributesnermapi.getAttributeById(requestParameters));
}
export const getAttributeByUidNerm = (requestParameters: sdk.AttributesNERMApiGetAttributeByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateAttribute201ResponseNERM>> => {
    const attributesnermapi = new sdk.AttributesNERMApi(apiConfig);
    return handleApiCall(() => attributesnermapi.getAttributeByUid(requestParameters));
}
export const getAttributeOptionByIdNerm = (requestParameters: sdk.AttributeOptionsNERMApiGetAttributeOptionByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitAttributeOption200ResponseNERM>> => {
    const attributeoptionsnermapi = new sdk.AttributeOptionsNERMApi(apiConfig);
    return handleApiCall(() => attributeoptionsnermapi.getAttributeOptionById(requestParameters));
}
export const getAttributeOptionByUidNerm = (requestParameters: sdk.AttributeOptionsNERMApiGetAttributeOptionByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitAttributeOption200ResponseNERM>> => {
    const attributeoptionsnermapi = new sdk.AttributeOptionsNERMApi(apiConfig);
    return handleApiCall(() => attributeoptionsnermapi.getAttributeOptionByUid(requestParameters));
}
export const getAttributeOptionsNerm = (requestParameters: sdk.AttributeOptionsNERMApiGetAttributeOptionsRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetAttributeOptions200ResponseNERM>> => {
    const attributeoptionsnermapi = new sdk.AttributeOptionsNERMApi(apiConfig);
    return handleApiCall(() => attributeoptionsnermapi.getAttributeOptions(requestParameters));
}
export const getAttributesNerm = (requestParameters: sdk.AttributesNERMApiGetAttributesRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetAttributes200ResponseNERM>> => {
    const attributesnermapi = new sdk.AttributesNERMApi(apiConfig);
    return handleApiCall(() => attributesnermapi.getAttributes(requestParameters));
}
export const getAuthOrgLockoutConfigV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<globalTenantSecuritySettingsTypes.LockoutConfiguration>> => {
    const globaltenantsecuritysettingsapi = new sdk.GlobalTenantSecuritySettingsApi(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsapi.getAuthOrgLockoutConfigV1());
}
export const getAuthOrgNetworkConfigV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<globalTenantSecuritySettingsTypes.NetworkConfiguration>> => {
    const globaltenantsecuritysettingsapi = new sdk.GlobalTenantSecuritySettingsApi(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsapi.getAuthOrgNetworkConfigV1());
}
export const getAuthOrgServiceProviderConfigV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<globalTenantSecuritySettingsTypes.ServiceProviderConfiguration>> => {
    const globaltenantsecuritysettingsapi = new sdk.GlobalTenantSecuritySettingsApi(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsapi.getAuthOrgServiceProviderConfigV1());
}
export const getAuthOrgSessionConfigV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<globalTenantSecuritySettingsTypes.SessionConfiguration>> => {
    const globaltenantsecuritysettingsapi = new sdk.GlobalTenantSecuritySettingsApi(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsapi.getAuthOrgSessionConfigV1());
}
export const getAuthUserV1 = (requestParameters: authUsersTypes.AuthUsersApiGetAuthUserV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<authUsersTypes.AuthUser>> => {
    const authusersapi = new sdk.AuthUsersApi(apiConfig);
    return handleApiCall(() => authusersapi.getAuthUserV1(requestParameters));
}
export const getAutoWriteSettingsV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<suggestedEntitlementDescriptionTypes.AutoWriteSettingResponse>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.getAutoWriteSettingsV1());
}
export const getBrandingListV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<Array<brandingTypes.BrandingItem>>> => {
    const brandingapi = new sdk.BrandingApi(apiConfig);
    return handleApiCall(() => brandingapi.getBrandingListV1());
}
export const getBrandingV1 = (requestParameters: brandingTypes.BrandingApiGetBrandingV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<brandingTypes.BrandingItem>> => {
    const brandingapi = new sdk.BrandingApi(apiConfig);
    return handleApiCall(() => brandingapi.getBrandingV1(requestParameters));
}
export const getBulkUpdateStatusByIdV1 = (requestParameters: rolesTypes.RolesApiGetBulkUpdateStatusByIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<rolesTypes.RoleBulkUpdateResponse>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.getBulkUpdateStatusByIdV1(requestParameters));
}
export const getBulkUpdateStatusV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<Array<rolesTypes.RoleGetAllBulkUpdateResponse>>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.getBulkUpdateStatusV1());
}
export const getCampaignFilterByIdV1 = (requestParameters: certificationCampaignFiltersTypes.CertificationCampaignFiltersApiGetCampaignFilterByIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignFiltersTypes.CampaignFilterDetails>> => {
    const certificationcampaignfiltersapi = new sdk.CertificationCampaignFiltersApi(apiConfig);
    return handleApiCall(() => certificationcampaignfiltersapi.getCampaignFilterByIdV1(requestParameters));
}
export const getCampaignReportsConfigV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignsTypes.CampaignReportsConfig>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.getCampaignReportsConfigV1());
}
export const getCampaignReportsV1 = (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiGetCampaignReportsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<certificationCampaignsTypes.CampaignReport>>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.getCampaignReportsV1(requestParameters));
}
export const getCampaignTemplateScheduleV1 = (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiGetCampaignTemplateScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignsTypes.Schedule2>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.getCampaignTemplateScheduleV1(requestParameters));
}
export const getCampaignTemplatesV1 = (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiGetCampaignTemplatesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<certificationCampaignsTypes.CampaignTemplate>>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.getCampaignTemplatesV1(requestParameters));
}
export const getCampaignTemplateV1 = (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiGetCampaignTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignsTypes.CampaignTemplate>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.getCampaignTemplateV1(requestParameters));
}
export const getCampaignV1 = (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiGetCampaignV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignsTypes.GetCampaignV1200Response>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.getCampaignV1(requestParameters));
}
export const getCertificationTaskV1 = (requestParameters: certificationsTypes.CertificationsApiGetCertificationTaskV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationsTypes.CertificationTask>> => {
    const certificationsapi = new sdk.CertificationsApi(apiConfig);
    return handleApiCall(() => certificationsapi.getCertificationTaskV1(requestParameters));
}
export const getClassifyMachineAccountFromSourceStatusV1 = (requestParameters: classifySourceTypes.ClassifySourceApiGetClassifyMachineAccountFromSourceStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<classifySourceTypes.SourceClassificationStatus>> => {
    const classifysourceapi = new sdk.ClassifySourceApi(apiConfig);
    return handleApiCall(() => classifysourceapi.getClassifyMachineAccountFromSourceStatusV1(requestParameters));
}
export const getClientLogConfigurationV1 = (requestParameters: managedClustersTypes.ManagedClustersApiGetClientLogConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClustersTypes.ClientLogConfiguration>> => {
    const managedclustersapi = new sdk.ManagedClustersApi(apiConfig);
    return handleApiCall(() => managedclustersapi.getClientLogConfigurationV1(requestParameters));
}
export const getCommonAccessV1 = (requestParameters: iaiCommonAccessTypes.IAICommonAccessApiGetCommonAccessV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiCommonAccessTypes.CommonAccessResponse>>> => {
    const iaicommonaccessapi = new sdk.IAICommonAccessApi(apiConfig);
    return handleApiCall(() => iaicommonaccessapi.getCommonAccessV1(requestParameters));
}
export const getCompletedWorkItemsV1 = (requestParameters: workItemsTypes.WorkItemsApiGetCompletedWorkItemsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workItemsTypes.WorkItems>>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.getCompletedWorkItemsV1(requestParameters));
}
export const getConnectorCorrelationConfigV1 = (requestParameters: connectorsTypes.ConnectorsApiGetConnectorCorrelationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<string>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.getConnectorCorrelationConfigV1(requestParameters));
}
export const getConnectorCustomizerV1 = (requestParameters: connectorCustomizersTypes.ConnectorCustomizersApiGetConnectorCustomizerV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorCustomizersTypes.ConnectorCustomizersResponse>> => {
    const connectorcustomizersapi = new sdk.ConnectorCustomizersApi(apiConfig);
    return handleApiCall(() => connectorcustomizersapi.getConnectorCustomizerV1(requestParameters));
}
export const getConnectorListV1 = (requestParameters: connectorsTypes.ConnectorsApiGetConnectorListV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<connectorsTypes.V3ConnectorDto>>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.getConnectorListV1(requestParameters));
}
export const getConnectorRuleListV1 = (requestParameters: connectorRuleManagementTypes.ConnectorRuleManagementApiGetConnectorRuleListV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<connectorRuleManagementTypes.ConnectorRuleResponse>>> => {
    const connectorrulemanagementapi = new sdk.ConnectorRuleManagementApi(apiConfig);
    return handleApiCall(() => connectorrulemanagementapi.getConnectorRuleListV1(requestParameters));
}
export const getConnectorRuleV1 = (requestParameters: connectorRuleManagementTypes.ConnectorRuleManagementApiGetConnectorRuleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorRuleManagementTypes.ConnectorRuleResponse>> => {
    const connectorrulemanagementapi = new sdk.ConnectorRuleManagementApi(apiConfig);
    return handleApiCall(() => connectorrulemanagementapi.getConnectorRuleV1(requestParameters));
}
export const getConnectorSourceConfigV1 = (requestParameters: connectorsTypes.ConnectorsApiGetConnectorSourceConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<string>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.getConnectorSourceConfigV1(requestParameters));
}
export const getConnectorSourceTemplateV1 = (requestParameters: connectorsTypes.ConnectorsApiGetConnectorSourceTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<string>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.getConnectorSourceTemplateV1(requestParameters));
}
export const getConnectorTranslationsV1 = (requestParameters: connectorsTypes.ConnectorsApiGetConnectorTranslationsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<string>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.getConnectorTranslationsV1(requestParameters));
}
export const getConnectorV1 = (requestParameters: connectorsTypes.ConnectorsApiGetConnectorV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorsTypes.ConnectorDetail>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.getConnectorV1(requestParameters));
}
export const getCorrelationConfigV1 = (requestParameters: sourcesTypes.SourcesApiGetCorrelationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.CorrelationConfig>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getCorrelationConfigV1(requestParameters));
}
export const getCountCompletedWorkItemsV1 = (requestParameters: workItemsTypes.WorkItemsApiGetCountCompletedWorkItemsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<workItemsTypes.WorkItemsCount>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.getCountCompletedWorkItemsV1(requestParameters));
}
export const getCountWorkItemsV1 = (requestParameters: workItemsTypes.WorkItemsApiGetCountWorkItemsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<workItemsTypes.WorkItemsCount>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.getCountWorkItemsV1(requestParameters));
}
export const getCreateMachineAccountRequestV1 = (requestParameters: machineAccountCreationRequestTypes.MachineAccountCreationRequestApiGetCreateMachineAccountRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountCreationRequestTypes.AccountRequestDetailsDto>> => {
    const machineaccountcreationrequestapi = new sdk.MachineAccountCreationRequestApi(apiConfig);
    return handleApiCall(() => machineaccountcreationrequestapi.getCreateMachineAccountRequestV1(requestParameters));
}
export const getCustomPasswordInstructionsV1 = (requestParameters: customPasswordInstructionsTypes.CustomPasswordInstructionsApiGetCustomPasswordInstructionsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customPasswordInstructionsTypes.CustomPasswordInstruction>> => {
    const custompasswordinstructionsapi = new sdk.CustomPasswordInstructionsApi(apiConfig);
    return handleApiCall(() => custompasswordinstructionsapi.getCustomPasswordInstructionsV1(requestParameters));
}
export const getCustomViolationReportV1 = (requestParameters: sodPoliciesTypes.SODPoliciesApiGetCustomViolationReportV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<File>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.getCustomViolationReportV1(requestParameters));
}
export const getDataSegmentationEnabledForUserV1 = (requestParameters: dataSegmentationTypes.DataSegmentationApiGetDataSegmentationEnabledForUserV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<boolean>> => {
    const datasegmentationapi = new sdk.DataSegmentationApi(apiConfig);
    return handleApiCall(() => datasegmentationapi.getDataSegmentationEnabledForUserV1(requestParameters));
}
export const getDataSegmentIdentityMembershipV1 = (requestParameters: dataSegmentationTypes.DataSegmentationApiGetDataSegmentIdentityMembershipV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<dataSegmentationTypes.SegmentMembership>>> => {
    const datasegmentationapi = new sdk.DataSegmentationApi(apiConfig);
    return handleApiCall(() => datasegmentationapi.getDataSegmentIdentityMembershipV1(requestParameters));
}
export const getDataSegmentV1 = (requestParameters: dataSegmentationTypes.DataSegmentationApiGetDataSegmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<dataSegmentationTypes.DataSegment>> => {
    const datasegmentationapi = new sdk.DataSegmentationApi(apiConfig);
    return handleApiCall(() => datasegmentationapi.getDataSegmentV1(requestParameters));
}
export const getDefaultIdentityAttributeConfigV1 = (requestParameters: identityProfilesTypes.IdentityProfilesApiGetDefaultIdentityAttributeConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityProfilesTypes.IdentityAttributeConfig>> => {
    const identityprofilesapi = new sdk.IdentityProfilesApi(apiConfig);
    return handleApiCall(() => identityprofilesapi.getDefaultIdentityAttributeConfigV1(requestParameters));
}
export const getDefaultViolationReportV1 = (requestParameters: sodPoliciesTypes.SODPoliciesApiGetDefaultViolationReportV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<File>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.getDefaultViolationReportV1(requestParameters));
}
export const getDeployV1 = (requestParameters: configurationHubTypes.ConfigurationHubApiGetDeployV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<configurationHubTypes.DeployResponse>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.getDeployV1(requestParameters));
}
export const getDimensionEntitlementsV1 = (requestParameters: dimensionsTypes.DimensionsApiGetDimensionEntitlementsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<dimensionsTypes.Entitlement>>> => {
    const dimensionsapi = new sdk.DimensionsApi(apiConfig);
    return handleApiCall(() => dimensionsapi.getDimensionEntitlementsV1(requestParameters));
}
export const getDimensionV1 = (requestParameters: dimensionsTypes.DimensionsApiGetDimensionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<dimensionsTypes.Dimension>> => {
    const dimensionsapi = new sdk.DimensionsApi(apiConfig);
    return handleApiCall(() => dimensionsapi.getDimensionV1(requestParameters));
}
export const getDiscoveredApplicationsV1 = (requestParameters: applicationDiscoveryTypes.ApplicationDiscoveryApiGetDiscoveredApplicationsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<applicationDiscoveryTypes.GetDiscoveredApplicationsV1200ResponseInner>>> => {
    const applicationdiscoveryapi = new sdk.ApplicationDiscoveryApi(apiConfig);
    return handleApiCall(() => applicationdiscoveryapi.getDiscoveredApplicationsV1(requestParameters));
}
export const getDkimAttributesV1 = (requestParameters: notificationsTypes.NotificationsApiGetDkimAttributesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<notificationsTypes.DkimAttributes>>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.getDkimAttributesV1(requestParameters));
}
export const getEntitlementAggregationGroupsV1 = (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiGetEntitlementAggregationGroupsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<multiHostIntegrationTypes.MultiHostIntegrationsAggScheduleUpdate>>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.getEntitlementAggregationGroupsV1(requestParameters));
}
export const getEntitlementChangesIdentitiesV1 = (requestParameters: roleInsightsTypes.RoleInsightsApiGetEntitlementChangesIdentitiesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<roleInsightsTypes.RoleInsightsIdentities>>> => {
    const roleinsightsapi = new sdk.RoleInsightsApi(apiConfig);
    return handleApiCall(() => roleinsightsapi.getEntitlementChangesIdentitiesV1(requestParameters));
}
export const getEntitlementDetailsForIdentityV1 = (requestParameters: accessRequestsTypes.AccessRequestsApiGetEntitlementDetailsForIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessRequestsTypes.IdentityEntitlementDetails>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.getEntitlementDetailsForIdentityV1(requestParameters));
}
export const getEntitlementDistributionPotentialRoleV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetEntitlementDistributionPotentialRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getEntitlementDistributionPotentialRoleV1(requestParameters));
}
export const getEntitlementRequestConfigV1 = (requestParameters: entitlementsTypes.EntitlementsApiGetEntitlementRequestConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<entitlementsTypes.EntitlementRequestConfig>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.getEntitlementRequestConfigV1(requestParameters));
}
export const getEntitlementsPotentialRoleV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetEntitlementsPotentialRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiRoleMiningTypes.RoleMiningEntitlement>>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getEntitlementsPotentialRoleV1(requestParameters));
}
export const getEntitlementsSchemaV1 = (requestParameters: sourcesTypes.SourcesApiGetEntitlementsSchemaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getEntitlementsSchemaV1(requestParameters));
}
export const getEntitlementV1 = (requestParameters: entitlementsTypes.EntitlementsApiGetEntitlementV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<entitlementsTypes.EntitlementV2>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.getEntitlementV1(requestParameters));
}
export const getEvaluateReassignmentConfigurationV1 = (requestParameters: workReassignmentTypes.WorkReassignmentApiGetEvaluateReassignmentConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workReassignmentTypes.EvaluateResponse>>> => {
    const workreassignmentapi = new sdk.WorkReassignmentApi(apiConfig);
    return handleApiCall(() => workreassignmentapi.getEvaluateReassignmentConfigurationV1(requestParameters));
}
export const getExcludedEntitlementsPotentialRoleV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetExcludedEntitlementsPotentialRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiRoleMiningTypes.RoleMiningEntitlement>>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getExcludedEntitlementsPotentialRoleV1(requestParameters));
}
export const getFileFromS3V1 = (requestParameters: customFormsTypes.CustomFormsApiGetFileFromS3V1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<File>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.getFileFromS3V1(requestParameters));
}
export const getFormAttributeByIdNerm = (requestParameters: sdk.FormAttributesNERMApiGetFormAttributeByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetFormAttributes200ResponseNERM>> => {
    const formattributesnermapi = new sdk.FormAttributesNERMApi(apiConfig);
    return handleApiCall(() => formattributesnermapi.getFormAttributeById(requestParameters));
}
export const getFormAttributeByUidNerm = (requestParameters: sdk.FormAttributesNERMApiGetFormAttributeByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetFormAttributes200ResponseNERM>> => {
    const formattributesnermapi = new sdk.FormAttributesNERMApi(apiConfig);
    return handleApiCall(() => formattributesnermapi.getFormAttributeByUid(requestParameters));
}
export const getFormAttributesNerm = (apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetFormAttributes200ResponseNERM>> => {
    const formattributesnermapi = new sdk.FormAttributesNERMApi(apiConfig);
    return handleApiCall(() => formattributesnermapi.getFormAttributes());
}
export const getFormByIdNerm = (requestParameters: sdk.FormsNERMApiGetFormByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetForms200ResponseNERM>> => {
    const formsnermapi = new sdk.FormsNERMApi(apiConfig);
    return handleApiCall(() => formsnermapi.getFormById(requestParameters));
}
export const getFormByUidNerm = (requestParameters: sdk.FormsNERMApiGetFormByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetForms200ResponseNERM>> => {
    const formsnermapi = new sdk.FormsNERMApi(apiConfig);
    return handleApiCall(() => formsnermapi.getFormByUid(requestParameters));
}
export const getFormDefinitionByKeyV1 = (requestParameters: customFormsTypes.CustomFormsApiGetFormDefinitionByKeyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.FormDefinitionResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.getFormDefinitionByKeyV1(requestParameters));
}
export const getFormInstanceByKeyV1 = (requestParameters: customFormsTypes.CustomFormsApiGetFormInstanceByKeyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.FormInstanceResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.getFormInstanceByKeyV1(requestParameters));
}
export const getFormInstanceFileV1 = (requestParameters: customFormsTypes.CustomFormsApiGetFormInstanceFileV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<File>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.getFormInstanceFileV1(requestParameters));
}
export const getFormsNerm = (apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetForms200ResponseNERM>> => {
    const formsnermapi = new sdk.FormsNERMApi(apiConfig);
    return handleApiCall(() => formsnermapi.getForms());
}
export const getHistoricalIdentityEventsV1 = (requestParameters: identityHistoryTypes.IdentityHistoryApiGetHistoricalIdentityEventsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identityHistoryTypes.GetHistoricalIdentityEventsV1200ResponseInner>>> => {
    const identityhistoryapi = new sdk.IdentityHistoryApi(apiConfig);
    return handleApiCall(() => identityhistoryapi.getHistoricalIdentityEventsV1(requestParameters));
}
export const getHistoricalIdentityV1 = (requestParameters: identityHistoryTypes.IdentityHistoryApiGetHistoricalIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityHistoryTypes.IdentityHistoryResponse>> => {
    const identityhistoryapi = new sdk.IdentityHistoryApi(apiConfig);
    return handleApiCall(() => identityhistoryapi.getHistoricalIdentityV1(requestParameters));
}
export const getIdentitiesPotentialRoleV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetIdentitiesPotentialRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiRoleMiningTypes.RoleMiningIdentity>>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getIdentitiesPotentialRoleV1(requestParameters));
}
export const getIdentityAccessSummariesV1 = (requestParameters: certificationSummariesTypes.CertificationSummariesApiGetIdentityAccessSummariesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<certificationSummariesTypes.AccessSummary>>> => {
    const certificationsummariesapi = new sdk.CertificationSummariesApi(apiConfig);
    return handleApiCall(() => certificationsummariesapi.getIdentityAccessSummariesV1(requestParameters));
}
export const getIdentityAttributeV1 = (requestParameters: identityAttributesTypes.IdentityAttributesApiGetIdentityAttributeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityAttributesTypes.IdentityAttribute2>> => {
    const identityattributesapi = new sdk.IdentityAttributesApi(apiConfig);
    return handleApiCall(() => identityattributesapi.getIdentityAttributeV1(requestParameters));
}
export const getIdentityCertificationItemPermissionsV1 = (requestParameters: certificationsTypes.CertificationsApiGetIdentityCertificationItemPermissionsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<certificationsTypes.PermissionDTO>>> => {
    const certificationsapi = new sdk.CertificationsApi(apiConfig);
    return handleApiCall(() => certificationsapi.getIdentityCertificationItemPermissionsV1(requestParameters));
}
export const getIdentityCertificationV1 = (requestParameters: certificationsTypes.CertificationsApiGetIdentityCertificationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationsTypes.IdentityCertificationDto>> => {
    const certificationsapi = new sdk.CertificationsApi(apiConfig);
    return handleApiCall(() => certificationsapi.getIdentityCertificationV1(requestParameters));
}
export const getIdentityDecisionSummaryV1 = (requestParameters: certificationSummariesTypes.CertificationSummariesApiGetIdentityDecisionSummaryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationSummariesTypes.IdentityCertDecisionSummary>> => {
    const certificationsummariesapi = new sdk.CertificationSummariesApi(apiConfig);
    return handleApiCall(() => certificationsummariesapi.getIdentityDecisionSummaryV1(requestParameters));
}
export const getIdentityIntelligenceV1 = (requestParameters: intelligenceTypes.IntelligenceApiGetIdentityIntelligenceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<intelligenceTypes.IntelIdentityAggregate>> => {
    const intelligenceapi = new sdk.IntelligenceApi(apiConfig);
    return handleApiCall(() => intelligenceapi.getIdentityIntelligenceV1(requestParameters));
}
export const getIdentityOutlierSnapshotsV1 = (requestParameters: iaiOutliersTypes.IAIOutliersApiGetIdentityOutlierSnapshotsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiOutliersTypes.OutlierSummary>>> => {
    const iaioutliersapi = new sdk.IAIOutliersApi(apiConfig);
    return handleApiCall(() => iaioutliersapi.getIdentityOutlierSnapshotsV1(requestParameters));
}
export const getIdentityOutliersV1 = (requestParameters: iaiOutliersTypes.IAIOutliersApiGetIdentityOutliersV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiOutliersTypes.Outlier>>> => {
    const iaioutliersapi = new sdk.IAIOutliersApi(apiConfig);
    return handleApiCall(() => iaioutliersapi.getIdentityOutliersV1(requestParameters));
}
export const getIdentityOwnershipDetailsV1 = (requestParameters: identitiesTypes.IdentitiesApiGetIdentityOwnershipDetailsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identitiesTypes.IdentityOwnershipAssociationDetails>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.getIdentityOwnershipDetailsV1(requestParameters));
}
export const getIdentityProfileV1 = (requestParameters: identityProfilesTypes.IdentityProfilesApiGetIdentityProfileV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityProfilesTypes.IdentityProfile>> => {
    const identityprofilesapi = new sdk.IdentityProfilesApi(apiConfig);
    return handleApiCall(() => identityprofilesapi.getIdentityProfileV1(requestParameters));
}
export const getIdentityProofingResultsNerm = (requestParameters: sdk.IdentityProofingResultsNERMApiGetIdentityProofingResultsRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetIdentityProofingResults200ResponseNERM>> => {
    const identityproofingresultsnermapi = new sdk.IdentityProofingResultsNERMApi(apiConfig);
    return handleApiCall(() => identityproofingresultsnermapi.getIdentityProofingResults(requestParameters));
}
export const getIdentitySnapshotSummaryV1 = (requestParameters: identityHistoryTypes.IdentityHistoryApiGetIdentitySnapshotSummaryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identityHistoryTypes.MetricResponse>>> => {
    const identityhistoryapi = new sdk.IdentityHistoryApi(apiConfig);
    return handleApiCall(() => identityhistoryapi.getIdentitySnapshotSummaryV1(requestParameters));
}
export const getIdentitySnapshotV1 = (requestParameters: identityHistoryTypes.IdentityHistoryApiGetIdentitySnapshotV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityHistoryTypes.IdentityHistoryResponse>> => {
    const identityhistoryapi = new sdk.IdentityHistoryApi(apiConfig);
    return handleApiCall(() => identityhistoryapi.getIdentitySnapshotV1(requestParameters));
}
export const getIdentityStartDateV1 = (requestParameters: identityHistoryTypes.IdentityHistoryApiGetIdentityStartDateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<string>> => {
    const identityhistoryapi = new sdk.IdentityHistoryApi(apiConfig);
    return handleApiCall(() => identityhistoryapi.getIdentityStartDateV1(requestParameters));
}
export const getIdentitySummariesV1 = (requestParameters: certificationSummariesTypes.CertificationSummariesApiGetIdentitySummariesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<certificationSummariesTypes.CertificationIdentitySummary>>> => {
    const certificationsummariesapi = new sdk.CertificationSummariesApi(apiConfig);
    return handleApiCall(() => certificationsummariesapi.getIdentitySummariesV1(requestParameters));
}
export const getIdentitySummaryV1 = (requestParameters: certificationSummariesTypes.CertificationSummariesApiGetIdentitySummaryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationSummariesTypes.CertificationIdentitySummary>> => {
    const certificationsummariesapi = new sdk.CertificationSummariesApi(apiConfig);
    return handleApiCall(() => certificationsummariesapi.getIdentitySummaryV1(requestParameters));
}
export const getIdentityV1 = (requestParameters: identitiesTypes.IdentitiesApiGetIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identitiesTypes.Identity>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.getIdentityV1(requestParameters));
}
export const getIntelIdentityAccessItemHistoryV1 = (requestParameters: intelligenceTypes.IntelligenceApiGetIntelIdentityAccessItemHistoryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<intelligenceTypes.IntelAccessItemHistoryEvent>>> => {
    const intelligenceapi = new sdk.IntelligenceApi(apiConfig);
    return handleApiCall(() => intelligenceapi.getIntelIdentityAccessItemHistoryV1(requestParameters));
}
export const getIntelIdentityAccountsV1 = (requestParameters: intelligenceTypes.IntelligenceApiGetIntelIdentityAccountsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<intelligenceTypes.IntelAccessAccountWire>>> => {
    const intelligenceapi = new sdk.IntelligenceApi(apiConfig);
    return handleApiCall(() => intelligenceapi.getIntelIdentityAccountsV1(requestParameters));
}
export const getIntelIdentityCertificationHistoryV1 = (requestParameters: intelligenceTypes.IntelligenceApiGetIntelIdentityCertificationHistoryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<intelligenceTypes.IntelCertificationHistoryEvent>>> => {
    const intelligenceapi = new sdk.IntelligenceApi(apiConfig);
    return handleApiCall(() => intelligenceapi.getIntelIdentityCertificationHistoryV1(requestParameters));
}
export const getIntelIdentityRareAccessV1 = (requestParameters: intelligenceTypes.IntelligenceApiGetIntelIdentityRareAccessV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<intelligenceTypes.IntelOutlierAccessItem>>> => {
    const intelligenceapi = new sdk.IntelligenceApi(apiConfig);
    return handleApiCall(() => intelligenceapi.getIntelIdentityRareAccessV1(requestParameters));
}
export const getJitActivationConfigV1 = (requestParameters: jitAccessTypes.JITAccessApiGetJitActivationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<jitAccessTypes.JITActivationConfigResponse>> => {
    const jitaccessapi = new sdk.JITAccessApi(apiConfig);
    return handleApiCall(() => jitaccessapi.getJitActivationConfigV1(requestParameters));
}
export const getJobStatusNerm = (requestParameters: sdk.JobStatusNERMApiGetJobStatusRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetJobStatus200ResponseNERM>> => {
    const jobstatusnermapi = new sdk.JobStatusNERMApi(apiConfig);
    return handleApiCall(() => jobstatusnermapi.getJobStatus(requestParameters));
}
export const getJWKSDataV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<sharedSignalsFrameworkSsfTypes.JWKS>> => {
    const sharedsignalsframeworkssfapi = new sdk.SharedSignalsFrameworkSSFApi(apiConfig);
    return handleApiCall(() => sharedsignalsframeworkssfapi.getJWKSDataV1());
}
export const getLatestIdentityOutlierSnapshotsV1 = (requestParameters: iaiOutliersTypes.IAIOutliersApiGetLatestIdentityOutlierSnapshotsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiOutliersTypes.LatestOutlierSummary>>> => {
    const iaioutliersapi = new sdk.IAIOutliersApi(apiConfig);
    return handleApiCall(() => iaioutliersapi.getLatestIdentityOutlierSnapshotsV1(requestParameters));
}
export const getLaunchersV1 = (requestParameters: launchersTypes.LaunchersApiGetLaunchersV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<launchersTypes.GetLaunchersV1200Response>> => {
    const launchersapi = new sdk.LaunchersApi(apiConfig);
    return handleApiCall(() => launchersapi.getLaunchersV1(requestParameters));
}
export const getLauncherV1 = (requestParameters: launchersTypes.LaunchersApiGetLauncherV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<launchersTypes.Launcher>> => {
    const launchersapi = new sdk.LaunchersApi(apiConfig);
    return handleApiCall(() => launchersapi.getLauncherV1(requestParameters));
}
export const getLifecycleStatesV1 = (requestParameters: lifecycleStatesTypes.LifecycleStatesApiGetLifecycleStatesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<lifecycleStatesTypes.LifecycleState>>> => {
    const lifecyclestatesapi = new sdk.LifecycleStatesApi(apiConfig);
    return handleApiCall(() => lifecyclestatesapi.getLifecycleStatesV1(requestParameters));
}
export const getLifecycleStateV1 = (requestParameters: lifecycleStatesTypes.LifecycleStatesApiGetLifecycleStateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<lifecycleStatesTypes.LifecycleState>> => {
    const lifecyclestatesapi = new sdk.LifecycleStatesApi(apiConfig);
    return handleApiCall(() => lifecyclestatesapi.getLifecycleStateV1(requestParameters));
}
export const getMachineAccountCreateAccessInfoV1 = (requestParameters: machineAccountCreationRequestTypes.MachineAccountCreationRequestApiGetMachineAccountCreateAccessInfoV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineAccountCreationRequestTypes.MachineAccountCreateAccessDto>>> => {
    const machineaccountcreationrequestapi = new sdk.MachineAccountCreationRequestApi(apiConfig);
    return handleApiCall(() => machineaccountcreationrequestapi.getMachineAccountCreateAccessInfoV1(requestParameters));
}
export const getMachineAccountDeletionApprovalConfigBySourceV1 = (requestParameters: sourcesTypes.SourcesApiGetMachineAccountDeletionApprovalConfigBySourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.AccountDeleteConfigDto>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getMachineAccountDeletionApprovalConfigBySourceV1(requestParameters));
}
export const getMachineAccountSubtypeApprovalConfigV1 = (requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiGetMachineAccountSubtypeApprovalConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountSubtypesTypes.MachineAccountSubtypeConfigDto>> => {
    const machineaccountsubtypesapi = new sdk.MachineAccountSubtypesApi(apiConfig);
    return handleApiCall(() => machineaccountsubtypesapi.getMachineAccountSubtypeApprovalConfigV1(requestParameters));
}
export const getMachineAccountSubtypeByIdV1 = (requestParameters: machineAccountsTypes.MachineAccountsApiGetMachineAccountSubtypeByIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountsTypes.SourceSubtype>> => {
    const machineaccountsapi = new sdk.MachineAccountsApi(apiConfig);
    return handleApiCall(() => machineaccountsapi.getMachineAccountSubtypeByIdV1(requestParameters));
}
export const getMachineAccountSubtypeByTechnicalNameV1 = (requestParameters: machineAccountsTypes.MachineAccountsApiGetMachineAccountSubtypeByTechnicalNameV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountsTypes.SourceSubtype>> => {
    const machineaccountsapi = new sdk.MachineAccountsApi(apiConfig);
    return handleApiCall(() => machineaccountsapi.getMachineAccountSubtypeByTechnicalNameV1(requestParameters));
}
export const getMachineAccountV1 = (requestParameters: machineAccountsTypes.MachineAccountsApiGetMachineAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountsTypes.MachineAccount>> => {
    const machineaccountsapi = new sdk.MachineAccountsApi(apiConfig);
    return handleApiCall(() => machineaccountsapi.getMachineAccountV1(requestParameters));
}
export const getMachineClassificationConfigV1 = (requestParameters: machineClassificationConfigTypes.MachineClassificationConfigApiGetMachineClassificationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineClassificationConfigTypes.MachineClassificationConfig>> => {
    const machineclassificationconfigapi = new sdk.MachineClassificationConfigApi(apiConfig);
    return handleApiCall(() => machineclassificationconfigapi.getMachineClassificationConfigV1(requestParameters));
}
export const getMachineIdentityV1 = (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiGetMachineIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineIdentitiesTypes.MachineIdentityResponse>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.getMachineIdentityV1(requestParameters));
}
export const getMachineIdentityV2 = (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiGetMachineIdentityV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineIdentitiesTypes.Machineidentityv2>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.getMachineIdentityV2(requestParameters));
}
export const getMailFromAttributesV1 = (requestParameters: notificationsTypes.NotificationsApiGetMailFromAttributesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<notificationsTypes.MailFromAttributes>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.getMailFromAttributesV1(requestParameters));
}
export const getManagedClientHealthIndicatorsV1 = (requestParameters: managedClientsTypes.ManagedClientsApiGetManagedClientHealthIndicatorsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClientsTypes.ManagedClientHealthIndicators>> => {
    const managedclientsapi = new sdk.ManagedClientsApi(apiConfig);
    return handleApiCall(() => managedclientsapi.getManagedClientHealthIndicatorsV1(requestParameters));
}
export const getManagedClientStatusV1 = (requestParameters: managedClientsTypes.ManagedClientsApiGetManagedClientStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClientsTypes.ManagedClientStatus>> => {
    const managedclientsapi = new sdk.ManagedClientsApi(apiConfig);
    return handleApiCall(() => managedclientsapi.getManagedClientStatusV1(requestParameters));
}
export const getManagedClientsV1 = (requestParameters: managedClientsTypes.ManagedClientsApiGetManagedClientsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<managedClientsTypes.ManagedClient>>> => {
    const managedclientsapi = new sdk.ManagedClientsApi(apiConfig);
    return handleApiCall(() => managedclientsapi.getManagedClientsV1(requestParameters));
}
export const getManagedClientV1 = (requestParameters: managedClientsTypes.ManagedClientsApiGetManagedClientV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClientsTypes.ManagedClient>> => {
    const managedclientsapi = new sdk.ManagedClientsApi(apiConfig);
    return handleApiCall(() => managedclientsapi.getManagedClientV1(requestParameters));
}
export const getManagedClustersV1 = (requestParameters: managedClustersTypes.ManagedClustersApiGetManagedClustersV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<managedClustersTypes.ManagedCluster>>> => {
    const managedclustersapi = new sdk.ManagedClustersApi(apiConfig);
    return handleApiCall(() => managedclustersapi.getManagedClustersV1(requestParameters));
}
export const getManagedClusterTypesV1 = (requestParameters: managedClusterTypesTypes.ManagedClusterTypesApiGetManagedClusterTypesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<managedClusterTypesTypes.ManagedClusterType>>> => {
    const managedclustertypesapi = new sdk.ManagedClusterTypesApi(apiConfig);
    return handleApiCall(() => managedclustertypesapi.getManagedClusterTypesV1(requestParameters));
}
export const getManagedClusterTypeV1 = (requestParameters: managedClusterTypesTypes.ManagedClusterTypesApiGetManagedClusterTypeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClusterTypesTypes.ManagedClusterType>> => {
    const managedclustertypesapi = new sdk.ManagedClusterTypesApi(apiConfig);
    return handleApiCall(() => managedclustertypesapi.getManagedClusterTypeV1(requestParameters));
}
export const getManagedClusterV1 = (requestParameters: managedClustersTypes.ManagedClustersApiGetManagedClusterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClustersTypes.ManagedCluster>> => {
    const managedclustersapi = new sdk.ManagedClustersApi(apiConfig);
    return handleApiCall(() => managedclustersapi.getManagedClusterV1(requestParameters));
}
export const getManualDiscoverApplicationsCsvTemplateV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<applicationDiscoveryTypes.ManualDiscoverApplicationsTemplate>> => {
    const applicationdiscoveryapi = new sdk.ApplicationDiscoveryApi(apiConfig);
    return handleApiCall(() => applicationdiscoveryapi.getManualDiscoverApplicationsCsvTemplateV1());
}
export const getMFADuoConfigV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<mfaConfigurationTypes.MfaDuoConfig>> => {
    const mfaconfigurationapi = new sdk.MFAConfigurationApi(apiConfig);
    return handleApiCall(() => mfaconfigurationapi.getMFADuoConfigV1());
}
export const getMFAKbaConfigV1 = (requestParameters: mfaConfigurationTypes.MFAConfigurationApiGetMFAKbaConfigV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<mfaConfigurationTypes.KbaQuestion>>> => {
    const mfaconfigurationapi = new sdk.MFAConfigurationApi(apiConfig);
    return handleApiCall(() => mfaconfigurationapi.getMFAKbaConfigV1(requestParameters));
}
export const getMFAOktaConfigV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<mfaConfigurationTypes.MfaOktaConfig>> => {
    const mfaconfigurationapi = new sdk.MFAConfigurationApi(apiConfig);
    return handleApiCall(() => mfaconfigurationapi.getMFAOktaConfigV1());
}
export const getMultiHostIntegrationsListV1 = (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiGetMultiHostIntegrationsListV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<multiHostIntegrationTypes.MultiHostIntegrations>>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.getMultiHostIntegrationsListV1(requestParameters));
}
export const getMultiHostIntegrationsV1 = (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiGetMultiHostIntegrationsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<multiHostIntegrationTypes.MultiHostIntegrations>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.getMultiHostIntegrationsV1(requestParameters));
}
export const getMultihostIntegrationTypesV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<Array<multiHostIntegrationTypes.MultiHostIntegrationTemplateType>>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.getMultihostIntegrationTypesV1());
}
export const getMultiHostSourceCreationErrorsV1 = (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiGetMultiHostSourceCreationErrorsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<multiHostIntegrationTypes.SourceCreationErrors>>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.getMultiHostSourceCreationErrorsV1(requestParameters));
}
export const getNativeChangeDetectionConfigV1 = (requestParameters: sourcesTypes.SourcesApiGetNativeChangeDetectionConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.NativeChangeDetectionConfig>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getNativeChangeDetectionConfigV1(requestParameters));
}
export const getNonEmployeeApprovalSummaryV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeApprovalSummaryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeApprovalSummary>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.getNonEmployeeApprovalSummaryV1(requestParameters));
}
export const getNonEmployeeApprovalV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeApprovalV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeApprovalItemDetail>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.getNonEmployeeApprovalV1(requestParameters));
}
export const getNonEmployeeBulkUploadStatusV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeBulkUploadStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeBulkUploadStatus>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.getNonEmployeeBulkUploadStatusV1(requestParameters));
}
export const getNonEmployeeRecordV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeRecordV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeRecord>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.getNonEmployeeRecordV1(requestParameters));
}
export const getNonEmployeeRequestSummaryV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeRequestSummaryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeRequestSummary>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.getNonEmployeeRequestSummaryV1(requestParameters));
}
export const getNonEmployeeRequestV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeRequest>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.getNonEmployeeRequestV1(requestParameters));
}
export const getNonEmployeeSchemaAttributeV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeSchemaAttributeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeSchemaAttribute>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.getNonEmployeeSchemaAttributeV1(requestParameters));
}
export const getNonEmployeeSourceSchemaAttributesV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeSourceSchemaAttributesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<nonEmployeeLifecycleManagementTypes.NonEmployeeSchemaAttribute>>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.getNonEmployeeSourceSchemaAttributesV1(requestParameters));
}
export const getNonEmployeeSourceV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeSource>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.getNonEmployeeSourceV1(requestParameters));
}
export const getNotificationPreferencesV1 = (requestParameters: notificationsTypes.NotificationsApiGetNotificationPreferencesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<notificationsTypes.PreferencesDto>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.getNotificationPreferencesV1(requestParameters));
}
export const getNotificationsTemplateContextV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<notificationsTypes.NotificationTemplateContext>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.getNotificationsTemplateContextV1());
}
export const getNotificationTemplateV1 = (requestParameters: notificationsTypes.NotificationsApiGetNotificationTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<notificationsTypes.TemplateDto>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.getNotificationTemplateV1(requestParameters));
}
export const getNotificationTemplateVariablesV1 = (requestParameters: notificationsTypes.NotificationsApiGetNotificationTemplateVariablesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<notificationsTypes.TemplateVariablesDto>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.getNotificationTemplateVariablesV1(requestParameters));
}
export const getOauthClientV1 = (requestParameters: oauthClientsTypes.OAuthClientsApiGetOauthClientV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<oauthClientsTypes.GetOAuthClientResponse>> => {
    const oauthclientsapi = new sdk.OAuthClientsApi(apiConfig);
    return handleApiCall(() => oauthclientsapi.getOauthClientV1(requestParameters));
}
export const getObjectMappingsV1 = (requestParameters: configurationHubTypes.ConfigurationHubApiGetObjectMappingsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<configurationHubTypes.ObjectMappingResponse>>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.getObjectMappingsV1(requestParameters));
}
export const getOngoingRolePropagationV1 = (requestParameters: rolePropagationTypes.RolePropagationApiGetOngoingRolePropagationV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<rolePropagationTypes.Rolepropagationongoingresponse>> => {
    const rolepropagationapi = new sdk.RolePropagationApi(apiConfig);
    return handleApiCall(() => rolepropagationapi.getOngoingRolePropagationV1(requestParameters));
}
export const getOrgConfigV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<orgConfigTypes.OrgConfig>> => {
    const orgconfigapi = new sdk.OrgConfigApi(apiConfig);
    return handleApiCall(() => orgconfigapi.getOrgConfigV1());
}
export const getOutlierContributingFeatureSummaryV1 = (requestParameters: iaiOutliersTypes.IAIOutliersApiGetOutlierContributingFeatureSummaryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiOutliersTypes.OutlierFeatureSummary>> => {
    const iaioutliersapi = new sdk.IAIOutliersApi(apiConfig);
    return handleApiCall(() => iaioutliersapi.getOutlierContributingFeatureSummaryV1(requestParameters));
}
export const getOwnershipCorrelationConfigV1 = (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiGetOwnershipCorrelationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineIdentitiesTypes.CorrelationConfig>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.getOwnershipCorrelationConfigV1(requestParameters));
}
export const getOwnersV1 = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiGetOwnersV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<dataAccessSecurityTypes.DataOwnerModel>>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.getOwnersV1(requestParameters));
}
export const getPageContentByIdNerm = (requestParameters: sdk.PageContentsNERMApiGetPageContentByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContents200ResponseNERM>> => {
    const pagecontentsnermapi = new sdk.PageContentsNERMApi(apiConfig);
    return handleApiCall(() => pagecontentsnermapi.getPageContentById(requestParameters));
}
export const getPageContentByUidNerm = (requestParameters: sdk.PageContentsNERMApiGetPageContentByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContents200ResponseNERM>> => {
    const pagecontentsnermapi = new sdk.PageContentsNERMApi(apiConfig);
    return handleApiCall(() => pagecontentsnermapi.getPageContentByUid(requestParameters));
}
export const getPageContentsNerm = (apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContents200ResponseNERM>> => {
    const pagecontentsnermapi = new sdk.PageContentsNERMApi(apiConfig);
    return handleApiCall(() => pagecontentsnermapi.getPageContents());
}
export const getPageContentTranslationByIdNerm = (requestParameters: sdk.PageContentTranslationsNERMApiGetPageContentTranslationByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContentTranslation200ResponseNERM>> => {
    const pagecontenttranslationsnermapi = new sdk.PageContentTranslationsNERMApi(apiConfig);
    return handleApiCall(() => pagecontenttranslationsnermapi.getPageContentTranslationById(requestParameters));
}
export const getPageContentTranslationByUidNerm = (requestParameters: sdk.PageContentTranslationsNERMApiGetPageContentTranslationByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContentTranslation200ResponseNERM>> => {
    const pagecontenttranslationsnermapi = new sdk.PageContentTranslationsNERMApi(apiConfig);
    return handleApiCall(() => pagecontenttranslationsnermapi.getPageContentTranslationByUid(requestParameters));
}
export const getPageContentTranslationNerm = (apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContentTranslation200ResponseNERM>> => {
    const pagecontenttranslationsnermapi = new sdk.PageContentTranslationsNERMApi(apiConfig);
    return handleApiCall(() => pagecontenttranslationsnermapi.getPageContentTranslation());
}
export const getPageElementByIdNerm = (requestParameters: sdk.PageElementsNERMApiGetPageElementByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageElements200ResponseNERM>> => {
    const pageelementsnermapi = new sdk.PageElementsNERMApi(apiConfig);
    return handleApiCall(() => pageelementsnermapi.getPageElementById(requestParameters));
}
export const getPageElementByUidNerm = (requestParameters: sdk.PageElementsNERMApiGetPageElementByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageElements200ResponseNERM>> => {
    const pageelementsnermapi = new sdk.PageElementsNERMApi(apiConfig);
    return handleApiCall(() => pageelementsnermapi.getPageElementByUid(requestParameters));
}
export const getPageElementsNerm = (apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageElements200ResponseNERM>> => {
    const pageelementsnermapi = new sdk.PageElementsNERMApi(apiConfig);
    return handleApiCall(() => pageelementsnermapi.getPageElements());
}
export const getParameterReferencesV1 = (requestParameters: parameterStorageTypes.ParameterStorageApiGetParameterReferencesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<parameterStorageTypes.ParameterStorageReference>>> => {
    const parameterstorageapi = new sdk.ParameterStorageApi(apiConfig);
    return handleApiCall(() => parameterstorageapi.getParameterReferencesV1(requestParameters));
}
export const getParameterStorageSpecificationV1 = (requestParameters: parameterStorageTypes.ParameterStorageApiGetParameterStorageSpecificationV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const parameterstorageapi = new sdk.ParameterStorageApi(apiConfig);
    return handleApiCall(() => parameterstorageapi.getParameterStorageSpecificationV1(requestParameters));
}
export const getParameterV1 = (requestParameters: parameterStorageTypes.ParameterStorageApiGetParameterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<parameterStorageTypes.ParameterStorageParameter>> => {
    const parameterstorageapi = new sdk.ParameterStorageApi(apiConfig);
    return handleApiCall(() => parameterstorageapi.getParameterV1(requestParameters));
}
export const getPasswordChangeStatusV1 = (requestParameters: passwordManagementTypes.PasswordManagementApiGetPasswordChangeStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordManagementTypes.PasswordStatus>> => {
    const passwordmanagementapi = new sdk.PasswordManagementApi(apiConfig);
    return handleApiCall(() => passwordmanagementapi.getPasswordChangeStatusV1(requestParameters));
}
export const getPasswordDictionaryV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<string>> => {
    const passworddictionaryapi = new sdk.PasswordDictionaryApi(apiConfig);
    return handleApiCall(() => passworddictionaryapi.getPasswordDictionaryV1());
}
export const getPasswordOrgConfigV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<passwordConfigurationTypes.PasswordOrgConfig>> => {
    const passwordconfigurationapi = new sdk.PasswordConfigurationApi(apiConfig);
    return handleApiCall(() => passwordconfigurationapi.getPasswordOrgConfigV1());
}
export const getPasswordPolicyByIdV1 = (requestParameters: passwordPoliciesTypes.PasswordPoliciesApiGetPasswordPolicyByIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordPoliciesTypes.PasswordPolicyV3Dto>> => {
    const passwordpoliciesapi = new sdk.PasswordPoliciesApi(apiConfig);
    return handleApiCall(() => passwordpoliciesapi.getPasswordPolicyByIdV1(requestParameters));
}
export const getPasswordSyncGroupsV1 = (requestParameters: passwordSyncGroupsTypes.PasswordSyncGroupsApiGetPasswordSyncGroupsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<passwordSyncGroupsTypes.PasswordSyncGroup>>> => {
    const passwordsyncgroupsapi = new sdk.PasswordSyncGroupsApi(apiConfig);
    return handleApiCall(() => passwordsyncgroupsapi.getPasswordSyncGroupsV1(requestParameters));
}
export const getPasswordSyncGroupV1 = (requestParameters: passwordSyncGroupsTypes.PasswordSyncGroupsApiGetPasswordSyncGroupV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordSyncGroupsTypes.PasswordSyncGroup>> => {
    const passwordsyncgroupsapi = new sdk.PasswordSyncGroupsApi(apiConfig);
    return handleApiCall(() => passwordsyncgroupsapi.getPasswordSyncGroupV1(requestParameters));
}
export const getPeerGroupOutliersContributingFeaturesV1 = (requestParameters: iaiOutliersTypes.IAIOutliersApiGetPeerGroupOutliersContributingFeaturesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiOutliersTypes.OutlierContributingFeature>>> => {
    const iaioutliersapi = new sdk.IAIOutliersApi(apiConfig);
    return handleApiCall(() => iaioutliersapi.getPeerGroupOutliersContributingFeaturesV1(requestParameters));
}
export const getPeerGroupOutliersV1 = (requestParameters: iaiPeerGroupStrategiesTypes.IAIPeerGroupStrategiesApiGetPeerGroupOutliersV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiPeerGroupStrategiesTypes.PeerGroupMember>>> => {
    const iaipeergroupstrategiesapi = new sdk.IAIPeerGroupStrategiesApi(apiConfig);
    return handleApiCall(() => iaipeergroupstrategiesapi.getPeerGroupOutliersV1(requestParameters));
}
export const getPendingCertificationTasksV1 = (requestParameters: certificationsTypes.CertificationsApiGetPendingCertificationTasksV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<certificationsTypes.CertificationTask>>> => {
    const certificationsapi = new sdk.CertificationsApi(apiConfig);
    return handleApiCall(() => certificationsapi.getPendingCertificationTasksV1(requestParameters));
}
export const getPotentialRoleApplicationsV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetPotentialRoleApplicationsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiRoleMiningTypes.RoleMiningPotentialRoleApplication>>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getPotentialRoleApplicationsV1(requestParameters));
}
export const getPotentialRoleEntitlementsV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetPotentialRoleEntitlementsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiRoleMiningTypes.RoleMiningPotentialRoleEntitlements>>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getPotentialRoleEntitlementsV1(requestParameters));
}
export const getPotentialRoleSourceIdentityUsageV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetPotentialRoleSourceIdentityUsageV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiRoleMiningTypes.RoleMiningPotentialRoleSourceUsage>>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getPotentialRoleSourceIdentityUsageV1(requestParameters));
}
export const getPotentialRoleSummariesV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetPotentialRoleSummariesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiRoleMiningTypes.RoleMiningPotentialRoleSummary>>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getPotentialRoleSummariesV1(requestParameters));
}
export const getPotentialRoleV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetPotentialRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRoleMiningTypes.RoleMiningPotentialRole>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getPotentialRoleV1(requestParameters));
}
export const getPrivilegeCriteriaConfigV1 = (requestParameters: privilegeCriteriaConfigurationTypes.PrivilegeCriteriaConfigurationApiGetPrivilegeCriteriaConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<privilegeCriteriaConfigurationTypes.PrivilegeCriteriaConfigDTO>> => {
    const privilegecriteriaconfigurationapi = new sdk.PrivilegeCriteriaConfigurationApi(apiConfig);
    return handleApiCall(() => privilegecriteriaconfigurationapi.getPrivilegeCriteriaConfigV1(requestParameters));
}
export const getPrivilegeCriteriaV1 = (requestParameters: privilegeCriteriaTypes.PrivilegeCriteriaApiGetPrivilegeCriteriaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<privilegeCriteriaTypes.PrivilegeCriteriaDTO>> => {
    const privilegecriteriaapi = new sdk.PrivilegeCriteriaApi(apiConfig);
    return handleApiCall(() => privilegecriteriaapi.getPrivilegeCriteriaV1(requestParameters));
}
export const getProfileAvatarNerm = (requestParameters: sdk.ProfilesNERMApiGetProfileAvatarRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.UrlNERM>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.getProfileAvatar(requestParameters));
}
export const getProfileByIdNerm = (requestParameters: sdk.ProfilesNERMApiGetProfileByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetSingleSchemaMappedProfile200ResponseNERM>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.getProfileById(requestParameters));
}
export const getProfileConfigListV1 = (requestParameters: authProfileTypes.AuthProfileApiGetProfileConfigListV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<authProfileTypes.AuthProfileSummary>>> => {
    const authprofileapi = new sdk.AuthProfileApi(apiConfig);
    return handleApiCall(() => authprofileapi.getProfileConfigListV1(requestParameters));
}
export const getProfileConfigV1 = (requestParameters: authProfileTypes.AuthProfileApiGetProfileConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<authProfileTypes.AuthProfile>> => {
    const authprofileapi = new sdk.AuthProfileApi(apiConfig);
    return handleApiCall(() => authprofileapi.getProfileConfigV1(requestParameters));
}
export const getProfilesNerm = (requestParameters: sdk.ProfilesNERMApiGetProfilesRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetSchemaMappedProfilesCollection200ResponseNERM>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.getProfiles(requestParameters));
}
export const getProfileTypeAttributesNerm = (requestParameters: sdk.SyncedAttributesNERMApiGetProfileTypeAttributesRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetProfileTypeAttributes200ResponseNERM>> => {
    const syncedattributesnermapi = new sdk.SyncedAttributesNERMApi(apiConfig);
    return handleApiCall(() => syncedattributesnermapi.getProfileTypeAttributes(requestParameters));
}
export const getProfileTypeByIdNerm = (requestParameters: sdk.ProfileTypesNERMApiGetProfileTypeByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitProfileType200ResponseNERM>> => {
    const profiletypesnermapi = new sdk.ProfileTypesNERMApi(apiConfig);
    return handleApiCall(() => profiletypesnermapi.getProfileTypeById(requestParameters));
}
export const getProfileTypeByUidNerm = (requestParameters: sdk.ProfileTypesNERMApiGetProfileTypeByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitProfileType200ResponseNERM>> => {
    const profiletypesnermapi = new sdk.ProfileTypesNERMApi(apiConfig);
    return handleApiCall(() => profiletypesnermapi.getProfileTypeByUid(requestParameters));
}
export const getProfileTypesNerm = (requestParameters: sdk.ProfileTypesNERMApiGetProfileTypesRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetProfileTypes200ResponseNERM>> => {
    const profiletypesnermapi = new sdk.ProfileTypesNERMApi(apiConfig);
    return handleApiCall(() => profiletypesnermapi.getProfileTypes(requestParameters));
}
export const getProfileUploadNerm = (requestParameters: sdk.ProfilesNERMApiGetProfileUploadRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.UrlNERM>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.getProfileUpload(requestParameters));
}
export const getProvisioningPolicyV1 = (requestParameters: sourcesTypes.SourcesApiGetProvisioningPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.ProvisioningPolicyDto>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getProvisioningPolicyV1(requestParameters));
}
export const getProvisioningPolicyV2 = (requestParameters: sourcesTypes.SourcesApiGetProvisioningPolicyV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.ProvisioningPolicyDtoV2>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getProvisioningPolicyV2(requestParameters));
}
export const getPublicIdentitiesV1 = (requestParameters: publicIdentitiesTypes.PublicIdentitiesApiGetPublicIdentitiesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<publicIdentitiesTypes.PublicIdentity>>> => {
    const publicidentitiesapi = new sdk.PublicIdentitiesApi(apiConfig);
    return handleApiCall(() => publicidentitiesapi.getPublicIdentitiesV1(requestParameters));
}
export const getPublicIdentityConfigV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<publicIdentitiesConfigTypes.PublicIdentityConfig>> => {
    const publicidentitiesconfigapi = new sdk.PublicIdentitiesConfigApi(apiConfig);
    return handleApiCall(() => publicidentitiesconfigapi.getPublicIdentityConfigV1());
}
export const getReassignmentConfigTypesV1 = (requestParameters: workReassignmentTypes.WorkReassignmentApiGetReassignmentConfigTypesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workReassignmentTypes.ConfigType>>> => {
    const workreassignmentapi = new sdk.WorkReassignmentApi(apiConfig);
    return handleApiCall(() => workreassignmentapi.getReassignmentConfigTypesV1(requestParameters));
}
export const getReassignmentConfigurationV1 = (requestParameters: workReassignmentTypes.WorkReassignmentApiGetReassignmentConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workReassignmentTypes.ConfigurationResponse>> => {
    const workreassignmentapi = new sdk.WorkReassignmentApi(apiConfig);
    return handleApiCall(() => workreassignmentapi.getReassignmentConfigurationV1(requestParameters));
}
export const getRecommendationsConfigV1 = (requestParameters: iaiRecommendationsTypes.IAIRecommendationsApiGetRecommendationsConfigV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRecommendationsTypes.RecommendationConfigDto>> => {
    const iairecommendationsapi = new sdk.IAIRecommendationsApi(apiConfig);
    return handleApiCall(() => iairecommendationsapi.getRecommendationsConfigV1(requestParameters));
}
export const getRecommendationsV1 = (requestParameters: iaiRecommendationsTypes.IAIRecommendationsApiGetRecommendationsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRecommendationsTypes.RecommendationResponseDto>> => {
    const iairecommendationsapi = new sdk.IAIRecommendationsApi(apiConfig);
    return handleApiCall(() => iairecommendationsapi.getRecommendationsV1(requestParameters));
}
export const getReportResultV1 = (requestParameters: reportsDataExtractionTypes.ReportsDataExtractionApiGetReportResultV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<reportsDataExtractionTypes.ReportResults>> => {
    const reportsdataextractionapi = new sdk.ReportsDataExtractionApi(apiConfig);
    return handleApiCall(() => reportsdataextractionapi.getReportResultV1(requestParameters));
}
export const getReportV1 = (requestParameters: reportsDataExtractionTypes.ReportsDataExtractionApiGetReportV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<File>> => {
    const reportsdataextractionapi = new sdk.ReportsDataExtractionApi(apiConfig);
    return handleApiCall(() => reportsdataextractionapi.getReportV1(requestParameters));
}
export const getRiskLevelNerm = (requestParameters: sdk.RiskLevelsNERMApiGetRiskLevelRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetRiskLevel200ResponseNERM>> => {
    const risklevelsnermapi = new sdk.RiskLevelsNERMApi(apiConfig);
    return handleApiCall(() => risklevelsnermapi.getRiskLevel(requestParameters));
}
export const getRiskLevelsNerm = (requestParameters: sdk.RiskLevelsNERMApiGetRiskLevelsRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetRiskLevels200ResponseNERM>> => {
    const risklevelsnermapi = new sdk.RiskLevelsNERMApi(apiConfig);
    return handleApiCall(() => risklevelsnermapi.getRiskLevels(requestParameters));
}
export const getRiskScoreNerm = (requestParameters: sdk.RiskScoresNERMApiGetRiskScoreRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetRiskScore200ResponseNERM>> => {
    const riskscoresnermapi = new sdk.RiskScoresNERMApi(apiConfig);
    return handleApiCall(() => riskscoresnermapi.getRiskScore(requestParameters));
}
export const getRiskScoresNerm = (requestParameters: sdk.RiskScoresNERMApiGetRiskScoresRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetRiskScores200ResponseNERM>> => {
    const riskscoresnermapi = new sdk.RiskScoresNERMApi(apiConfig);
    return handleApiCall(() => riskscoresnermapi.getRiskScores(requestParameters));
}
export const getRoleAssignedIdentitiesV1 = (requestParameters: rolesTypes.RolesApiGetRoleAssignedIdentitiesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<rolesTypes.RoleIdentity>>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.getRoleAssignedIdentitiesV1(requestParameters));
}
export const getRoleAssignmentsV1 = (requestParameters: identitiesTypes.IdentitiesApiGetRoleAssignmentsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identitiesTypes.GetRoleAssignmentsV1200ResponseInner>>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.getRoleAssignmentsV1(requestParameters));
}
export const getRoleAssignmentV1 = (requestParameters: identitiesTypes.IdentitiesApiGetRoleAssignmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identitiesTypes.RoleAssignmentDto>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.getRoleAssignmentV1(requestParameters));
}
export const getRoleEntitlementsV1 = (requestParameters: rolesTypes.RolesApiGetRoleEntitlementsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<rolesTypes.Entitlement>>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.getRoleEntitlementsV1(requestParameters));
}
export const getRoleInsightsCurrentEntitlementsV1 = (requestParameters: roleInsightsTypes.RoleInsightsApiGetRoleInsightsCurrentEntitlementsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<roleInsightsTypes.RoleInsightsEntitlement>>> => {
    const roleinsightsapi = new sdk.RoleInsightsApi(apiConfig);
    return handleApiCall(() => roleinsightsapi.getRoleInsightsCurrentEntitlementsV1(requestParameters));
}
export const getRoleInsightsEntitlementsChangesV1 = (requestParameters: roleInsightsTypes.RoleInsightsApiGetRoleInsightsEntitlementsChangesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<roleInsightsTypes.RoleInsightsEntitlementChanges>>> => {
    const roleinsightsapi = new sdk.RoleInsightsApi(apiConfig);
    return handleApiCall(() => roleinsightsapi.getRoleInsightsEntitlementsChangesV1(requestParameters));
}
export const getRoleInsightsRequestsV1 = (requestParameters: roleInsightsTypes.RoleInsightsApiGetRoleInsightsRequestsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<roleInsightsTypes.RoleInsightsResponse>> => {
    const roleinsightsapi = new sdk.RoleInsightsApi(apiConfig);
    return handleApiCall(() => roleinsightsapi.getRoleInsightsRequestsV1(requestParameters));
}
export const getRoleInsightsSummaryV1 = (requestParameters: roleInsightsTypes.RoleInsightsApiGetRoleInsightsSummaryV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<roleInsightsTypes.RoleInsightsSummary>> => {
    const roleinsightsapi = new sdk.RoleInsightsApi(apiConfig);
    return handleApiCall(() => roleinsightsapi.getRoleInsightsSummaryV1(requestParameters));
}
export const getRoleInsightsV1 = (requestParameters: roleInsightsTypes.RoleInsightsApiGetRoleInsightsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<roleInsightsTypes.RoleInsight>>> => {
    const roleinsightsapi = new sdk.RoleInsightsApi(apiConfig);
    return handleApiCall(() => roleinsightsapi.getRoleInsightsV1(requestParameters));
}
export const getRoleInsightV1 = (requestParameters: roleInsightsTypes.RoleInsightsApiGetRoleInsightV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<roleInsightsTypes.RoleInsight>> => {
    const roleinsightsapi = new sdk.RoleInsightsApi(apiConfig);
    return handleApiCall(() => roleinsightsapi.getRoleInsightV1(requestParameters));
}
export const getRoleMiningPotentialRoleV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetRoleMiningPotentialRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRoleMiningTypes.RoleMiningPotentialRole>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getRoleMiningPotentialRoleV1(requestParameters));
}
export const getRoleMiningSessionStatusV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetRoleMiningSessionStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRoleMiningTypes.RoleMiningSessionStatus>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getRoleMiningSessionStatusV1(requestParameters));
}
export const getRoleMiningSessionsV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetRoleMiningSessionsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiRoleMiningTypes.RoleMiningSessionDto>>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getRoleMiningSessionsV1(requestParameters));
}
export const getRoleMiningSessionV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetRoleMiningSessionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRoleMiningTypes.RoleMiningSessionResponse>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getRoleMiningSessionV1(requestParameters));
}
export const getRoleNerm = (requestParameters: sdk.RolesNERMApiGetRoleRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitRole200ResponseNERM>> => {
    const rolesnermapi = new sdk.RolesNERMApi(apiConfig);
    return handleApiCall(() => rolesnermapi.getRole(requestParameters));
}
export const getRoleProfileNerm = (requestParameters: sdk.RoleProfilesNERMApiGetRoleProfileRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitRoleProfile200ResponseNERM>> => {
    const roleprofilesnermapi = new sdk.RoleProfilesNERMApi(apiConfig);
    return handleApiCall(() => roleprofilesnermapi.getRoleProfile(requestParameters));
}
export const getRoleProfilesNerm = (requestParameters: sdk.RoleProfilesNERMApiGetRoleProfilesRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetRoleProfiles200ResponseNERM>> => {
    const roleprofilesnermapi = new sdk.RoleProfilesNERMApi(apiConfig);
    return handleApiCall(() => roleprofilesnermapi.getRoleProfiles(requestParameters));
}
export const getRolePropagationConfigV1 = (requestParameters: rolePropagationTypes.RolePropagationApiGetRolePropagationConfigV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<rolePropagationTypes.Rolepropagationconfigresponse>> => {
    const rolepropagationapi = new sdk.RolePropagationApi(apiConfig);
    return handleApiCall(() => rolepropagationapi.getRolePropagationConfigV1(requestParameters));
}
export const getRolePropagationStatusV1 = (requestParameters: rolePropagationTypes.RolePropagationApiGetRolePropagationStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<rolePropagationTypes.Rolepropagationstatusresponse>> => {
    const rolepropagationapi = new sdk.RolePropagationApi(apiConfig);
    return handleApiCall(() => rolepropagationapi.getRolePropagationStatusV1(requestParameters));
}
export const getRolesNerm = (requestParameters: sdk.RolesNERMApiGetRolesRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetRoles200ResponseNERM>> => {
    const rolesnermapi = new sdk.RolesNERMApi(apiConfig);
    return handleApiCall(() => rolesnermapi.getRoles(requestParameters));
}
export const getRoleV1 = (requestParameters: rolesTypes.RolesApiGetRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<rolesTypes.Role>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.getRoleV1(requestParameters));
}
export const getSavedPotentialRolesV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetSavedPotentialRolesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiRoleMiningTypes.RoleMiningSessionDraftRoleDto>>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getSavedPotentialRolesV1(requestParameters));
}
export const getSavedSearchV1 = (requestParameters: savedSearchTypes.SavedSearchApiGetSavedSearchV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<savedSearchTypes.SavedSearch>> => {
    const savedsearchapi = new sdk.SavedSearchApi(apiConfig);
    return handleApiCall(() => savedsearchapi.getSavedSearchV1(requestParameters));
}
export const getScheduledSearchV1 = (requestParameters: scheduledSearchTypes.ScheduledSearchApiGetScheduledSearchV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<scheduledSearchTypes.ScheduledSearch>> => {
    const scheduledsearchapi = new sdk.ScheduledSearchApi(apiConfig);
    return handleApiCall(() => scheduledsearchapi.getScheduledSearchV1(requestParameters));
}
export const getSchedulesV1 = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiGetSchedulesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<dataAccessSecurityTypes.ScheduleInfo>>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.getSchedulesV1(requestParameters));
}
export const getScheduleV1 = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiGetScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<dataAccessSecurityTypes.ScheduleInfo>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.getScheduleV1(requestParameters));
}
export const getSchemaMappedProfilesCollectionNerm = (requestParameters: sdk.IscAccountsNERMApiGetSchemaMappedProfilesCollectionRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetSchemaMappedProfilesCollection200ResponseNERM>> => {
    const iscaccountsnermapi = new sdk.IscAccountsNERMApi(apiConfig);
    return handleApiCall(() => iscaccountsnermapi.getSchemaMappedProfilesCollection(requestParameters));
}
export const getSearchAttributeConfigV1 = (requestParameters: searchAttributeConfigurationTypes.SearchAttributeConfigurationApiGetSearchAttributeConfigV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<searchAttributeConfigurationTypes.SearchAttributeConfig>>> => {
    const searchattributeconfigurationapi = new sdk.SearchAttributeConfigurationApi(apiConfig);
    return handleApiCall(() => searchattributeconfigurationapi.getSearchAttributeConfigV1(requestParameters));
}
export const getSedBatchesV1 = (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiGetSedBatchesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<suggestedEntitlementDescriptionTypes.SedBatchRecord>>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.getSedBatchesV1(requestParameters));
}
export const getSedBatchStatsV1 = (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiGetSedBatchStatsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<suggestedEntitlementDescriptionTypes.SedBatchStats>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.getSedBatchStatsV1(requestParameters));
}
export const getSegmentV1 = (requestParameters: segmentsTypes.SegmentsApiGetSegmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<segmentsTypes.Segment>> => {
    const segmentsapi = new sdk.SegmentsApi(apiConfig);
    return handleApiCall(() => segmentsapi.getSegmentV1(requestParameters));
}
export const getServiceDeskIntegrationsV1 = (requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiGetServiceDeskIntegrationsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<serviceDeskIntegrationTypes.ServiceDeskIntegrationDto>>> => {
    const servicedeskintegrationapi = new sdk.ServiceDeskIntegrationApi(apiConfig);
    return handleApiCall(() => servicedeskintegrationapi.getServiceDeskIntegrationsV1(requestParameters));
}
export const getServiceDeskIntegrationTemplateV1 = (requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiGetServiceDeskIntegrationTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<serviceDeskIntegrationTypes.ServiceDeskIntegrationTemplateDto>> => {
    const servicedeskintegrationapi = new sdk.ServiceDeskIntegrationApi(apiConfig);
    return handleApiCall(() => servicedeskintegrationapi.getServiceDeskIntegrationTemplateV1(requestParameters));
}
export const getServiceDeskIntegrationTypesV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<Array<serviceDeskIntegrationTypes.ServiceDeskIntegrationTemplateType>>> => {
    const servicedeskintegrationapi = new sdk.ServiceDeskIntegrationApi(apiConfig);
    return handleApiCall(() => servicedeskintegrationapi.getServiceDeskIntegrationTypesV1());
}
export const getServiceDeskIntegrationV1 = (requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiGetServiceDeskIntegrationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<serviceDeskIntegrationTypes.ServiceDeskIntegrationDto>> => {
    const servicedeskintegrationapi = new sdk.ServiceDeskIntegrationApi(apiConfig);
    return handleApiCall(() => servicedeskintegrationapi.getServiceDeskIntegrationV1(requestParameters));
}
export const getSIMIntegrationsV1 = (requestParameters: simIntegrationsTypes.SIMIntegrationsApiGetSIMIntegrationsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<simIntegrationsTypes.ServiceDeskIntegrationDto>>> => {
    const simintegrationsapi = new sdk.SIMIntegrationsApi(apiConfig);
    return handleApiCall(() => simintegrationsapi.getSIMIntegrationsV1(requestParameters));
}
export const getSIMIntegrationV1 = (requestParameters: simIntegrationsTypes.SIMIntegrationsApiGetSIMIntegrationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<simIntegrationsTypes.ServiceDeskIntegrationDto>> => {
    const simintegrationsapi = new sdk.SIMIntegrationsApi(apiConfig);
    return handleApiCall(() => simintegrationsapi.getSIMIntegrationV1(requestParameters));
}
export const getSingleSchemaMappedProfileNerm = (requestParameters: sdk.IscAccountsNERMApiGetSingleSchemaMappedProfileRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetSingleSchemaMappedProfile200ResponseNERM>> => {
    const iscaccountsnermapi = new sdk.IscAccountsNERMApi(apiConfig);
    return handleApiCall(() => iscaccountsnermapi.getSingleSchemaMappedProfile(requestParameters));
}
export const getSingleSearchAttributeConfigV1 = (requestParameters: searchAttributeConfigurationTypes.SearchAttributeConfigurationApiGetSingleSearchAttributeConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<searchAttributeConfigurationTypes.SearchAttributeConfig>> => {
    const searchattributeconfigurationapi = new sdk.SearchAttributeConfigurationApi(apiConfig);
    return handleApiCall(() => searchattributeconfigurationapi.getSingleSearchAttributeConfigV1(requestParameters));
}
export const getSodAllReportRunStatusV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.ReportResultReference>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.getSodAllReportRunStatusV1());
}
export const getSodPolicyScheduleV1 = (requestParameters: sodPoliciesTypes.SODPoliciesApiGetSodPolicyScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.SodPolicySchedule>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.getSodPolicyScheduleV1(requestParameters));
}
export const getSodPolicyV1 = (requestParameters: sodPoliciesTypes.SODPoliciesApiGetSodPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.SodPolicy>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.getSodPolicyV1(requestParameters));
}
export const getSodViolationReportRunStatusV1 = (requestParameters: sodPoliciesTypes.SODPoliciesApiGetSodViolationReportRunStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.ReportResultReference>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.getSodViolationReportRunStatusV1(requestParameters));
}
export const getSodViolationReportStatusV1 = (requestParameters: sodPoliciesTypes.SODPoliciesApiGetSodViolationReportStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.ReportResultReference>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.getSodViolationReportStatusV1(requestParameters));
}
export const getSourceAppV1 = (requestParameters: appsTypes.AppsApiGetSourceAppV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<appsTypes.SourceApp>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.getSourceAppV1(requestParameters));
}
export const getSourceAttrSyncConfigV1 = (requestParameters: sourcesTypes.SourcesApiGetSourceAttrSyncConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.AttrSyncSourceConfig>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getSourceAttrSyncConfigV1(requestParameters));
}
export const getSourceConfigV1 = (requestParameters: sourcesTypes.SourcesApiGetSourceConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.ConnectorDetail>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getSourceConfigV1(requestParameters));
}
export const getSourceConnectionsV1 = (requestParameters: sourcesTypes.SourcesApiGetSourceConnectionsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.SourceConnectionsDto>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getSourceConnectionsV1(requestParameters));
}
export const getSourceEntitlementRequestConfigV1 = (requestParameters: sourcesTypes.SourcesApiGetSourceEntitlementRequestConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.SourceEntitlementRequestConfig>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getSourceEntitlementRequestConfigV1(requestParameters));
}
export const getSourceHealthV1 = (requestParameters: sourcesTypes.SourcesApiGetSourceHealthV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.SourceHealthDto>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getSourceHealthV1(requestParameters));
}
export const getSourceSchedulesV1 = (requestParameters: sourcesTypes.SourcesApiGetSourceSchedulesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<sourcesTypes.Schedule3>>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getSourceSchedulesV1(requestParameters));
}
export const getSourceScheduleV1 = (requestParameters: sourcesTypes.SourcesApiGetSourceScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Schedule3>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getSourceScheduleV1(requestParameters));
}
export const getSourceSchemasV1 = (requestParameters: sourcesTypes.SourcesApiGetSourceSchemasV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<sourcesTypes.Schema>>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getSourceSchemasV1(requestParameters));
}
export const getSourceSchemaV1 = (requestParameters: sourcesTypes.SourcesApiGetSourceSchemaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Schema>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getSourceSchemaV1(requestParameters));
}
export const getSourceSubtypeByIdV1 = (requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiGetSourceSubtypeByIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountSubtypesTypes.SourceSubtypeWithSource>> => {
    const machineaccountsubtypesapi = new sdk.MachineAccountSubtypesApi(apiConfig);
    return handleApiCall(() => machineaccountsubtypesapi.getSourceSubtypeByIdV1(requestParameters));
}
export const getSourcesWithinMultiHostV1 = (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiGetSourcesWithinMultiHostV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<multiHostIntegrationTypes.MultiHostSources>>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.getSourcesWithinMultiHostV1(requestParameters));
}
export const getSourceV1 = (requestParameters: sourcesTypes.SourcesApiGetSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Source>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getSourceV1(requestParameters));
}
export const getSpConfigExportStatusV1 = (requestParameters: spConfigTypes.SPConfigApiGetSpConfigExportStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<spConfigTypes.SpConfigExportJobStatus>> => {
    const spconfigapi = new sdk.SPConfigApi(apiConfig);
    return handleApiCall(() => spconfigapi.getSpConfigExportStatusV1(requestParameters));
}
export const getSpConfigExportV1 = (requestParameters: spConfigTypes.SPConfigApiGetSpConfigExportV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<spConfigTypes.SpConfigExportResults>> => {
    const spconfigapi = new sdk.SPConfigApi(apiConfig);
    return handleApiCall(() => spconfigapi.getSpConfigExportV1(requestParameters));
}
export const getSpConfigImportStatusV1 = (requestParameters: spConfigTypes.SPConfigApiGetSpConfigImportStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<spConfigTypes.SpConfigImportJobStatus>> => {
    const spconfigapi = new sdk.SPConfigApi(apiConfig);
    return handleApiCall(() => spconfigapi.getSpConfigImportStatusV1(requestParameters));
}
export const getSpConfigImportV1 = (requestParameters: spConfigTypes.SPConfigApiGetSpConfigImportV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<spConfigTypes.SpConfigImportResults>> => {
    const spconfigapi = new sdk.SPConfigApi(apiConfig);
    return handleApiCall(() => spconfigapi.getSpConfigImportV1(requestParameters));
}
export const getSSFConfigurationV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<sharedSignalsFrameworkSsfTypes.TransmitterMetadata>> => {
    const sharedsignalsframeworkssfapi = new sdk.SharedSignalsFrameworkSSFApi(apiConfig);
    return handleApiCall(() => sharedsignalsframeworkssfapi.getSSFConfigurationV1());
}
export const getStatusBySourceIdV1 = (requestParameters: sourceUsagesTypes.SourceUsagesApiGetStatusBySourceIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourceUsagesTypes.SourceUsageStatus>> => {
    const sourceusagesapi = new sdk.SourceUsagesApi(apiConfig);
    return handleApiCall(() => sourceusagesapi.getStatusBySourceIdV1(requestParameters));
}
export const getStatusCheckDetailsV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<serviceDeskIntegrationTypes.QueuedCheckConfigDetails>> => {
    const servicedeskintegrationapi = new sdk.ServiceDeskIntegrationApi(apiConfig);
    return handleApiCall(() => servicedeskintegrationapi.getStatusCheckDetailsV1());
}
export const getStreamStatusV1 = (requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiGetStreamStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sharedSignalsFrameworkSsfTypes.StreamStatusResponse>> => {
    const sharedsignalsframeworkssfapi = new sdk.SharedSignalsFrameworkSSFApi(apiConfig);
    return handleApiCall(() => sharedsignalsframeworkssfapi.getStreamStatusV1(requestParameters));
}
export const getStreamV1 = (requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiGetStreamV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sharedSignalsFrameworkSsfTypes.GetStreamV1200Response>> => {
    const sharedsignalsframeworkssfapi = new sdk.SharedSignalsFrameworkSSFApi(apiConfig);
    return handleApiCall(() => sharedsignalsframeworkssfapi.getStreamV1(requestParameters));
}
export const getSystemRolesNerm = (requestParameters: sdk.SystemRolesNERMApiGetSystemRolesRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetSystemRoles200ResponseNERM>> => {
    const systemrolesnermapi = new sdk.SystemRolesNERMApi(apiConfig);
    return handleApiCall(() => systemrolesnermapi.getSystemRoles(requestParameters));
}
export const getTagByIdV1 = (requestParameters: tagsTypes.TagsApiGetTagByIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<tagsTypes.Tag2>> => {
    const tagsapi = new sdk.TagsApi(apiConfig);
    return handleApiCall(() => tagsapi.getTagByIdV1(requestParameters));
}
export const getTaggedObjectV1 = (requestParameters: taggedObjectsTypes.TaggedObjectsApiGetTaggedObjectV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<taggedObjectsTypes.TaggedObject>> => {
    const taggedobjectsapi = new sdk.TaggedObjectsApi(apiConfig);
    return handleApiCall(() => taggedobjectsapi.getTaggedObjectV1(requestParameters));
}
export const getTaskStatusListV1 = (requestParameters: taskManagementTypes.TaskManagementApiGetTaskStatusListV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<taskManagementTypes.TaskStatus>>> => {
    const taskmanagementapi = new sdk.TaskManagementApi(apiConfig);
    return handleApiCall(() => taskmanagementapi.getTaskStatusListV1(requestParameters));
}
export const getTaskStatusV1 = (requestParameters: taskManagementTypes.TaskManagementApiGetTaskStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<taskManagementTypes.TaskStatus>> => {
    const taskmanagementapi = new sdk.TaskManagementApi(apiConfig);
    return handleApiCall(() => taskmanagementapi.getTaskStatusV1(requestParameters));
}
export const getTasksV1 = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiGetTasksV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<dataAccessSecurityTypes.TaskInfo>>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.getTasksV1(requestParameters));
}
export const getTaskV1 = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiGetTaskV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<dataAccessSecurityTypes.TaskInfo>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.getTaskV1(requestParameters));
}
export const getTenantConfigConfigurationV1 = (requestParameters: workReassignmentTypes.WorkReassignmentApiGetTenantConfigConfigurationV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<workReassignmentTypes.TenantConfigurationResponse>> => {
    const workreassignmentapi = new sdk.WorkReassignmentApi(apiConfig);
    return handleApiCall(() => workreassignmentapi.getTenantConfigConfigurationV1(requestParameters));
}
export const getTenantContextV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<Array<tenantContextTypes.GetTenantContextV1200ResponseInner>>> => {
    const tenantcontextapi = new sdk.TenantContextApi(apiConfig);
    return handleApiCall(() => tenantcontextapi.getTenantContextV1());
}
export const getTenantUiMetadataV1 = (requestParameters: uiMetadataTypes.UIMetadataApiGetTenantUiMetadataV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<uiMetadataTypes.TenantUiMetadataItemResponse>> => {
    const uimetadataapi = new sdk.UIMetadataApi(apiConfig);
    return handleApiCall(() => uimetadataapi.getTenantUiMetadataV1(requestParameters));
}
export const getTenantV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<tenantTypes.Tenant>> => {
    const tenantapi = new sdk.TenantApi(apiConfig);
    return handleApiCall(() => tenantapi.getTenantV1());
}
export const getTotalCountV1 = (requestParameters: apiUsageTypes.ApiUsageApiGetTotalCountV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const apiusageapi = new sdk.ApiUsageApi(apiConfig);
    return handleApiCall(() => apiusageapi.getTotalCountV1(requestParameters));
}
export const getTransformV1 = (requestParameters: transformsTypes.TransformsApiGetTransformV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<transformsTypes.TransformRead>> => {
    const transformsapi = new sdk.TransformsApi(apiConfig);
    return handleApiCall(() => transformsapi.getTransformV1(requestParameters));
}
export const getUploadedConfigurationV1 = (requestParameters: configurationHubTypes.ConfigurationHubApiGetUploadedConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<configurationHubTypes.BackupResponse>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.getUploadedConfigurationV1(requestParameters));
}
export const getUsagesByAccountIdV1 = (requestParameters: accountUsagesTypes.AccountUsagesApiGetUsagesByAccountIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accountUsagesTypes.AccountUsage>>> => {
    const accountusagesapi = new sdk.AccountUsagesApi(apiConfig);
    return handleApiCall(() => accountusagesapi.getUsagesByAccountIdV1(requestParameters));
}
export const getUsagesBySourceIdV1 = (requestParameters: sourceUsagesTypes.SourceUsagesApiGetUsagesBySourceIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<sourceUsagesTypes.SourceUsage>>> => {
    const sourceusagesapi = new sdk.SourceUsagesApi(apiConfig);
    return handleApiCall(() => sourceusagesapi.getUsagesBySourceIdV1(requestParameters));
}
export const getUserAvatarNerm = (requestParameters: sdk.UsersNERMApiGetUserAvatarRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.UrlNERM>> => {
    const usersnermapi = new sdk.UsersNERMApi(apiConfig);
    return handleApiCall(() => usersnermapi.getUserAvatar(requestParameters));
}
export const getUserLevelV1 = (requestParameters: customUserLevelsTypes.CustomUserLevelsApiGetUserLevelV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customUserLevelsTypes.UserLevelSummaryDTO>> => {
    const customuserlevelsapi = new sdk.CustomUserLevelsApi(apiConfig);
    return handleApiCall(() => customuserlevelsapi.getUserLevelV1(requestParameters));
}
export const getUserManagerNerm = (requestParameters: sdk.UserManagersNERMApiGetUserManagerRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserManager200ResponseNERM>> => {
    const usermanagersnermapi = new sdk.UserManagersNERMApi(apiConfig);
    return handleApiCall(() => usermanagersnermapi.getUserManager(requestParameters));
}
export const getUserManagersNerm = (requestParameters: sdk.UserManagersNERMApiGetUserManagersRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetUserManagers200ResponseNERM>> => {
    const usermanagersnermapi = new sdk.UserManagersNERMApi(apiConfig);
    return handleApiCall(() => usermanagersnermapi.getUserManagers(requestParameters));
}
export const getUserNerm = (requestParameters: sdk.UsersNERMApiGetUserRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUser200ResponseNERM>> => {
    const usersnermapi = new sdk.UsersNERMApi(apiConfig);
    return handleApiCall(() => usersnermapi.getUser(requestParameters));
}
export const getUserProfileNerm = (requestParameters: sdk.UserProfilesNERMApiGetUserProfileRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserProfile200ResponseNERM>> => {
    const userprofilesnermapi = new sdk.UserProfilesNERMApi(apiConfig);
    return handleApiCall(() => userprofilesnermapi.getUserProfile(requestParameters));
}
export const getUserProfilesNerm = (requestParameters: sdk.UserProfilesNERMApiGetUserProfilesRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetUserProfiles200ResponseNERM>> => {
    const userprofilesnermapi = new sdk.UserProfilesNERMApi(apiConfig);
    return handleApiCall(() => userprofilesnermapi.getUserProfiles(requestParameters));
}
export const getUserRoleNerm = (requestParameters: sdk.UserRolesNERMApiGetUserRoleRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserRole200ResponseNERM>> => {
    const userrolesnermapi = new sdk.UserRolesNERMApi(apiConfig);
    return handleApiCall(() => userrolesnermapi.getUserRole(requestParameters));
}
export const getUserRolesNerm = (requestParameters: sdk.UserRolesNERMApiGetUserRolesRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetUserRoles200ResponseNERM>> => {
    const userrolesnermapi = new sdk.UserRolesNERMApi(apiConfig);
    return handleApiCall(() => userrolesnermapi.getUserRoles(requestParameters));
}
export const getUsersNerm = (requestParameters: sdk.UsersNERMApiGetUsersRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetUsers200ResponseNERM>> => {
    const usersnermapi = new sdk.UsersNERMApi(apiConfig);
    return handleApiCall(() => usersnermapi.getUsers(requestParameters));
}
export const getValidTimeZonesV1 = (requestParameters: orgConfigTypes.OrgConfigApiGetValidTimeZonesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<string>>> => {
    const orgconfigapi = new sdk.OrgConfigApi(apiConfig);
    return handleApiCall(() => orgconfigapi.getValidTimeZonesV1(requestParameters));
}
export const getWorkflowActionsNerm = (requestParameters: sdk.WorkflowActionsNERMApiGetWorkflowActionsRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetWorkflowActions200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.getWorkflowActions(requestParameters));
}
export const getWorkflowExecutionHistoryV1 = (requestParameters: workflowsTypes.WorkflowsApiGetWorkflowExecutionHistoryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workflowsTypes.WorkflowExecutionEvent>>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.getWorkflowExecutionHistoryV1(requestParameters));
}
export const getWorkflowExecutionHistoryV2 = (requestParameters: workflowsTypes.WorkflowsApiGetWorkflowExecutionHistoryV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workflowsTypes.WorkflowExecutionHistory>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.getWorkflowExecutionHistoryV2(requestParameters));
}
export const getWorkflowExecutionsV1 = (requestParameters: workflowsTypes.WorkflowsApiGetWorkflowExecutionsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workflowsTypes.WorkflowExecution>>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.getWorkflowExecutionsV1(requestParameters));
}
export const getWorkflowExecutionV1 = (requestParameters: workflowsTypes.WorkflowsApiGetWorkflowExecutionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workflowsTypes.WorkflowExecution>>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.getWorkflowExecutionV1(requestParameters));
}
export const getWorkflowSessionNerm = (requestParameters: sdk.WorkflowSessionsNERMApiGetWorkflowSessionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitWorkflowSession200ResponseNERM>> => {
    const workflowsessionsnermapi = new sdk.WorkflowSessionsNERMApi(apiConfig);
    return handleApiCall(() => workflowsessionsnermapi.getWorkflowSession(requestParameters));
}
export const getWorkflowSessionsNerm = (requestParameters: sdk.WorkflowSessionsNERMApiGetWorkflowSessionsRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetWorkflowSessions200ResponseNERM>> => {
    const workflowsessionsnermapi = new sdk.WorkflowSessionsNERMApi(apiConfig);
    return handleApiCall(() => workflowsessionsnermapi.getWorkflowSessions(requestParameters));
}
export const getWorkflowSessionUploadNerm = (requestParameters: sdk.WorkflowSessionsNERMApiGetWorkflowSessionUploadRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.UrlNERM>> => {
    const workflowsessionsnermapi = new sdk.WorkflowSessionsNERMApi(apiConfig);
    return handleApiCall(() => workflowsessionsnermapi.getWorkflowSessionUpload(requestParameters));
}
export const getWorkflowV1 = (requestParameters: workflowsTypes.WorkflowsApiGetWorkflowV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workflowsTypes.Workflow>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.getWorkflowV1(requestParameters));
}
export const getWorkgroupV1 = (requestParameters: governanceGroupsTypes.GovernanceGroupsApiGetWorkgroupV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<governanceGroupsTypes.WorkgroupDto>> => {
    const governancegroupsapi = new sdk.GovernanceGroupsApi(apiConfig);
    return handleApiCall(() => governancegroupsapi.getWorkgroupV1(requestParameters));
}
export const getWorkItemsSummaryV1 = (requestParameters: workItemsTypes.WorkItemsApiGetWorkItemsSummaryV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<workItemsTypes.WorkItemsSummary>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.getWorkItemsSummaryV1(requestParameters));
}
export const getWorkItemV1 = (requestParameters: workItemsTypes.WorkItemsApiGetWorkItemV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workItemsTypes.WorkItems>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.getWorkItemV1(requestParameters));
}
export const ignoreIdentityOutliersV1 = (requestParameters: iaiOutliersTypes.IAIOutliersApiIgnoreIdentityOutliersV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const iaioutliersapi = new sdk.IAIOutliersApi(apiConfig);
    return handleApiCall(() => iaioutliersapi.ignoreIdentityOutliersV1(requestParameters));
}
export const importAccountsSchemaV1 = (requestParameters: sourcesTypes.SourcesApiImportAccountsSchemaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Schema>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.importAccountsSchemaV1(requestParameters));
}
export const importAccountsV1 = (requestParameters: sourcesTypes.SourcesApiImportAccountsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.LoadAccountsTask>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.importAccountsV1(requestParameters));
}
export const importConnectorFileV1 = (requestParameters: sourcesTypes.SourcesApiImportConnectorFileV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Source>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.importConnectorFileV1(requestParameters));
}
export const importEntitlementsBySourceV1 = (requestParameters: entitlementsTypes.EntitlementsApiImportEntitlementsBySourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<entitlementsTypes.LoadEntitlementTask>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.importEntitlementsBySourceV1(requestParameters));
}
export const importEntitlementsSchemaV1 = (requestParameters: sourcesTypes.SourcesApiImportEntitlementsSchemaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Schema>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.importEntitlementsSchemaV1(requestParameters));
}
export const importEntitlementsV1 = (requestParameters: sourcesTypes.SourcesApiImportEntitlementsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.LoadEntitlementTask>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.importEntitlementsV1(requestParameters));
}
export const importFormDefinitionsV1 = (requestParameters: customFormsTypes.CustomFormsApiImportFormDefinitionsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.ImportFormDefinitionsV1202Response>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.importFormDefinitionsV1(requestParameters));
}
export const importIdentityProfilesV1 = (requestParameters: identityProfilesTypes.IdentityProfilesApiImportIdentityProfilesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityProfilesTypes.ObjectImportResult>> => {
    const identityprofilesapi = new sdk.IdentityProfilesApi(apiConfig);
    return handleApiCall(() => identityprofilesapi.importIdentityProfilesV1(requestParameters));
}
export const importNonEmployeeRecordsInBulkV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiImportNonEmployeeRecordsInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeBulkUploadJob>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.importNonEmployeeRecordsInBulkV1(requestParameters));
}
export const importSpConfigV1 = (requestParameters: spConfigTypes.SPConfigApiImportSpConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<spConfigTypes.SpConfigJob>> => {
    const spconfigapi = new sdk.SPConfigApi(apiConfig);
    return handleApiCall(() => spconfigapi.importSpConfigV1(requestParameters, { headers: { 'Content-Type': null } } as any));
}
export const importUncorrelatedAccountsV1 = (requestParameters: sourcesTypes.SourcesApiImportUncorrelatedAccountsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.LoadUncorrelatedAccountsTask>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.importUncorrelatedAccountsV1(requestParameters));
}
export const listAccessModelMetadataAttributeV1 = (requestParameters: accessModelMetadataTypes.AccessModelMetadataApiListAccessModelMetadataAttributeV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accessModelMetadataTypes.AttributeDTO>>> => {
    const accessmodelmetadataapi = new sdk.AccessModelMetadataApi(apiConfig);
    return handleApiCall(() => accessmodelmetadataapi.listAccessModelMetadataAttributeV1(requestParameters));
}
export const listAccessModelMetadataAttributeValueV1 = (requestParameters: accessModelMetadataTypes.AccessModelMetadataApiListAccessModelMetadataAttributeValueV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accessModelMetadataTypes.AttributeValueDTO>>> => {
    const accessmodelmetadataapi = new sdk.AccessModelMetadataApi(apiConfig);
    return handleApiCall(() => accessmodelmetadataapi.listAccessModelMetadataAttributeValueV1(requestParameters));
}
export const listAccessProfilesForSourceAppV1 = (requestParameters: appsTypes.AppsApiListAccessProfilesForSourceAppV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<appsTypes.AccessProfileDetails>>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.listAccessProfilesForSourceAppV1(requestParameters));
}
export const listAccessProfilesV1 = (requestParameters: accessProfilesTypes.AccessProfilesApiListAccessProfilesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accessProfilesTypes.AccessProfile>>> => {
    const accessprofilesapi = new sdk.AccessProfilesApi(apiConfig);
    return handleApiCall(() => accessprofilesapi.listAccessProfilesV1(requestParameters));
}
export const listAccessRequestApproversV1 = (requestParameters: accessRequestApprovalsTypes.AccessRequestApprovalsApiListAccessRequestApproversV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accessRequestApprovalsTypes.AccessRequestApproversListResponse>>> => {
    const accessrequestapprovalsapi = new sdk.AccessRequestApprovalsApi(apiConfig);
    return handleApiCall(() => accessrequestapprovalsapi.listAccessRequestApproversV1(requestParameters));
}
export const listAccessRequestStatusV1 = (requestParameters: accessRequestsTypes.AccessRequestsApiListAccessRequestStatusV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accessRequestsTypes.RequestedItemStatus>>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.listAccessRequestStatusV1(requestParameters));
}
export const listAccountActivitiesV1 = (requestParameters: accountActivitiesTypes.AccountActivitiesApiListAccountActivitiesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accountActivitiesTypes.AccountActivity>>> => {
    const accountactivitiesapi = new sdk.AccountActivitiesApi(apiConfig);
    return handleApiCall(() => accountactivitiesapi.listAccountActivitiesV1(requestParameters));
}
export const listAccountsV1 = (requestParameters: accountsTypes.AccountsApiListAccountsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accountsTypes.Account>>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.listAccountsV1(requestParameters));
}
export const listAdministratorsAccessRequestStatusV1 = (requestParameters: accessRequestsTypes.AccessRequestsApiListAdministratorsAccessRequestStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accessRequestsTypes.AccessRequestAdminItemStatus>>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.listAdministratorsAccessRequestStatusV1(requestParameters));
}
export const listAllAuthorizationRightSetsV1 = (requestParameters: customUserLevelsTypes.CustomUserLevelsApiListAllAuthorizationRightSetsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<customUserLevelsTypes.HierarchicalRightSet>>> => {
    const customuserlevelsapi = new sdk.CustomUserLevelsApi(apiConfig);
    return handleApiCall(() => customuserlevelsapi.listAllAuthorizationRightSetsV1(requestParameters));
}
export const listAllSourceAppV1 = (requestParameters: appsTypes.AppsApiListAllSourceAppV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<appsTypes.SourceApp>>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.listAllSourceAppV1(requestParameters));
}
export const listAllUserAppsV1 = (requestParameters: appsTypes.AppsApiListAllUserAppsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<appsTypes.UserApp>>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.listAllUserAppsV1(requestParameters));
}
export const listApiSummaryV1 = (requestParameters: apiUsageTypes.ApiUsageApiListApiSummaryV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<apiUsageTypes.SummaryResponse>>> => {
    const apiusageapi = new sdk.ApiUsageApi(apiConfig);
    return handleApiCall(() => apiusageapi.listApiSummaryV1(requestParameters));
}
export const listAssignedSourceAppV1 = (requestParameters: appsTypes.AppsApiListAssignedSourceAppV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<appsTypes.SourceApp>>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.listAssignedSourceAppV1(requestParameters));
}
export const listAvailableAccountsForUserAppV1 = (requestParameters: appsTypes.AppsApiListAvailableAccountsForUserAppV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<appsTypes.AppAccountDetails>>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.listAvailableAccountsForUserAppV1(requestParameters));
}
export const listAvailableSourceAppsV1 = (requestParameters: appsTypes.AppsApiListAvailableSourceAppsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<appsTypes.SourceApp>>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.listAvailableSourceAppsV1(requestParameters));
}
export const listBackupsV1 = (requestParameters: configurationHubTypes.ConfigurationHubApiListBackupsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<configurationHubTypes.BackupResponse>>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.listBackupsV1(requestParameters));
}
export const listCampaignFiltersV1 = (requestParameters: certificationCampaignFiltersTypes.CertificationCampaignFiltersApiListCampaignFiltersV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignFiltersTypes.ListCampaignFiltersV1200Response>> => {
    const certificationcampaignfiltersapi = new sdk.CertificationCampaignFiltersApi(apiConfig);
    return handleApiCall(() => certificationcampaignfiltersapi.listCampaignFiltersV1(requestParameters));
}
export const listCertificationReviewersV1 = (requestParameters: certificationsTypes.CertificationsApiListCertificationReviewersV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<certificationsTypes.IdentityReferenceWithNameAndEmail>>> => {
    const certificationsapi = new sdk.CertificationsApi(apiConfig);
    return handleApiCall(() => certificationsapi.listCertificationReviewersV1(requestParameters));
}
export const listCompletedApprovalsV1 = (requestParameters: accessRequestApprovalsTypes.AccessRequestApprovalsApiListCompletedApprovalsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accessRequestApprovalsTypes.CompletedApproval>>> => {
    const accessrequestapprovalsapi = new sdk.AccessRequestApprovalsApi(apiConfig);
    return handleApiCall(() => accessrequestapprovalsapi.listCompletedApprovalsV1(requestParameters));
}
export const listCompleteWorkflowLibraryV1 = (requestParameters: workflowsTypes.WorkflowsApiListCompleteWorkflowLibraryV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workflowsTypes.ListCompleteWorkflowLibraryV1200ResponseInner>>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.listCompleteWorkflowLibraryV1(requestParameters));
}
export const listConnectionsV1 = (requestParameters: governanceGroupsTypes.GovernanceGroupsApiListConnectionsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<governanceGroupsTypes.WorkgroupConnectionDto>>> => {
    const governancegroupsapi = new sdk.GovernanceGroupsApi(apiConfig);
    return handleApiCall(() => governancegroupsapi.listConnectionsV1(requestParameters));
}
export const listConnectorCustomizersV1 = (requestParameters: connectorCustomizersTypes.ConnectorCustomizersApiListConnectorCustomizersV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<connectorCustomizersTypes.ConnectorCustomizersResponse>>> => {
    const connectorcustomizersapi = new sdk.ConnectorCustomizersApi(apiConfig);
    return handleApiCall(() => connectorcustomizersapi.listConnectorCustomizersV1(requestParameters));
}
export const listDataSegmentsV1 = (requestParameters: dataSegmentationTypes.DataSegmentationApiListDataSegmentsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<dataSegmentationTypes.DataSegment>>> => {
    const datasegmentationapi = new sdk.DataSegmentationApi(apiConfig);
    return handleApiCall(() => datasegmentationapi.listDataSegmentsV1(requestParameters));
}
export const listDeploysV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<configurationHubTypes.ListDeploysV1200Response>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.listDeploysV1());
}
export const listDimensionAccessProfilesV1 = (requestParameters: dimensionsTypes.DimensionsApiListDimensionAccessProfilesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<dimensionsTypes.AccessProfile>>> => {
    const dimensionsapi = new sdk.DimensionsApi(apiConfig);
    return handleApiCall(() => dimensionsapi.listDimensionAccessProfilesV1(requestParameters));
}
export const listDimensionsV1 = (requestParameters: dimensionsTypes.DimensionsApiListDimensionsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<dimensionsTypes.Dimension>>> => {
    const dimensionsapi = new sdk.DimensionsApi(apiConfig);
    return handleApiCall(() => dimensionsapi.listDimensionsV1(requestParameters));
}
export const listDraftsV1 = (requestParameters: configurationHubTypes.ConfigurationHubApiListDraftsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<configurationHubTypes.DraftResponse>>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.listDraftsV1(requestParameters));
}
export const listEntitlementChildrenV1 = (requestParameters: entitlementsTypes.EntitlementsApiListEntitlementChildrenV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<entitlementsTypes.EntitlementV2>>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.listEntitlementChildrenV1(requestParameters));
}
export const listEntitlementConnectionsForCurrentIdentityV1 = (requestParameters: entitlementConnectionsTypes.EntitlementConnectionsApiListEntitlementConnectionsForCurrentIdentityV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<entitlementConnectionsTypes.EntitlementConnectionSearchHit>>> => {
    const entitlementconnectionsapi = new sdk.EntitlementConnectionsApi(apiConfig);
    return handleApiCall(() => entitlementconnectionsapi.listEntitlementConnectionsForCurrentIdentityV1(requestParameters));
}
export const listEntitlementConnectionsV1 = (requestParameters: entitlementConnectionsTypes.EntitlementConnectionsApiListEntitlementConnectionsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<entitlementConnectionsTypes.EntitlementConnectionSearchHit>>> => {
    const entitlementconnectionsapi = new sdk.EntitlementConnectionsApi(apiConfig);
    return handleApiCall(() => entitlementconnectionsapi.listEntitlementConnectionsV1(requestParameters));
}
export const listEntitlementParentsV1 = (requestParameters: entitlementsTypes.EntitlementsApiListEntitlementParentsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<entitlementsTypes.EntitlementV2>>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.listEntitlementParentsV1(requestParameters));
}
export const listEntitlementsByAccountV1 = (requestParameters: entitlementsTypes.EntitlementsApiListEntitlementsByAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<entitlementsTypes.EntitlementV2>>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.listEntitlementsByAccountV1(requestParameters));
}
export const listEntitlementsByIdentityV1 = (requestParameters: identitiesTypes.IdentitiesApiListEntitlementsByIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identitiesTypes.IdentityEntitlements>>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.listEntitlementsByIdentityV1(requestParameters));
}
export const listEntitlementsV1 = (requestParameters: entitlementsTypes.EntitlementsApiListEntitlementsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<entitlementsTypes.EntitlementV2>>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.listEntitlementsV1(requestParameters));
}
export const listFromAddressesV1 = (requestParameters: notificationsTypes.NotificationsApiListFromAddressesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<notificationsTypes.EmailStatusDto>>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.listFromAddressesV1(requestParameters));
}
export const listHistoricalIdentitiesV1 = (requestParameters: identityHistoryTypes.IdentityHistoryApiListHistoricalIdentitiesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identityHistoryTypes.IdentityListItem>>> => {
    const identityhistoryapi = new sdk.IdentityHistoryApi(apiConfig);
    return handleApiCall(() => identityhistoryapi.listHistoricalIdentitiesV1(requestParameters));
}
export const listIdentitiesV1 = (requestParameters: identitiesTypes.IdentitiesApiListIdentitiesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identitiesTypes.Identity>>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.listIdentitiesV1(requestParameters));
}
export const listIdentityAccessItemsV1 = (requestParameters: identityHistoryTypes.IdentityHistoryApiListIdentityAccessItemsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identityHistoryTypes.ListIdentityAccessItemsV1200ResponseInner>>> => {
    const identityhistoryapi = new sdk.IdentityHistoryApi(apiConfig);
    return handleApiCall(() => identityhistoryapi.listIdentityAccessItemsV1(requestParameters));
}
export const listIdentityAccessReviewItemsV1 = (requestParameters: certificationsTypes.CertificationsApiListIdentityAccessReviewItemsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<certificationsTypes.AccessReviewItem>>> => {
    const certificationsapi = new sdk.CertificationsApi(apiConfig);
    return handleApiCall(() => certificationsapi.listIdentityAccessReviewItemsV1(requestParameters));
}
export const listIdentityAttributesV1 = (requestParameters: identityAttributesTypes.IdentityAttributesApiListIdentityAttributesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identityAttributesTypes.IdentityAttribute2>>> => {
    const identityattributesapi = new sdk.IdentityAttributesApi(apiConfig);
    return handleApiCall(() => identityattributesapi.listIdentityAttributesV1(requestParameters));
}
export const listIdentityCertificationsV1 = (requestParameters: certificationsTypes.CertificationsApiListIdentityCertificationsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<certificationsTypes.IdentityCertificationDto>>> => {
    const certificationsapi = new sdk.CertificationsApi(apiConfig);
    return handleApiCall(() => certificationsapi.listIdentityCertificationsV1(requestParameters));
}
export const listIdentityCollectorsV1 = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiListIdentityCollectorsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<dataAccessSecurityTypes.Identitycollectorlistitem>>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.listIdentityCollectorsV1(requestParameters));
}
export const listIdentityProfilesV1 = (requestParameters: identityProfilesTypes.IdentityProfilesApiListIdentityProfilesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identityProfilesTypes.IdentityProfile>>> => {
    const identityprofilesapi = new sdk.IdentityProfilesApi(apiConfig);
    return handleApiCall(() => identityprofilesapi.listIdentityProfilesV1(requestParameters));
}
export const listIdentitySnapshotAccessItemsV1 = (requestParameters: identityHistoryTypes.IdentityHistoryApiListIdentitySnapshotAccessItemsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identityHistoryTypes.ListIdentitySnapshotAccessItemsV1200ResponseInner>>> => {
    const identityhistoryapi = new sdk.IdentityHistoryApi(apiConfig);
    return handleApiCall(() => identityhistoryapi.listIdentitySnapshotAccessItemsV1(requestParameters));
}
export const listIdentitySnapshotsV1 = (requestParameters: identityHistoryTypes.IdentityHistoryApiListIdentitySnapshotsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identityHistoryTypes.IdentitySnapshotSummaryResponse>>> => {
    const identityhistoryapi = new sdk.IdentityHistoryApi(apiConfig);
    return handleApiCall(() => identityhistoryapi.listIdentitySnapshotsV1(requestParameters));
}
export const listMachineAccountMappingsV1 = (requestParameters: machineAccountMappingsTypes.MachineAccountMappingsApiListMachineAccountMappingsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineAccountMappingsTypes.AttributeMappings>>> => {
    const machineaccountmappingsapi = new sdk.MachineAccountMappingsApi(apiConfig);
    return handleApiCall(() => machineaccountmappingsapi.listMachineAccountMappingsV1(requestParameters));
}
export const listMachineAccountSubtypesV1 = (requestParameters: machineAccountsTypes.MachineAccountsApiListMachineAccountSubtypesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineAccountsTypes.SourceSubtype>>> => {
    const machineaccountsapi = new sdk.MachineAccountsApi(apiConfig);
    return handleApiCall(() => machineaccountsapi.listMachineAccountSubtypesV1(requestParameters));
}
export const listMachineAccountsV1 = (requestParameters: machineAccountsTypes.MachineAccountsApiListMachineAccountsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineAccountsTypes.MachineAccount>>> => {
    const machineaccountsapi = new sdk.MachineAccountsApi(apiConfig);
    return handleApiCall(() => machineaccountsapi.listMachineAccountsV1(requestParameters));
}
export const listMachineIdentitiesV1 = (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiListMachineIdentitiesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineIdentitiesTypes.MachineIdentityResponse>>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.listMachineIdentitiesV1(requestParameters));
}
export const listMachineIdentitiesV2 = (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiListMachineIdentitiesV2Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineIdentitiesTypes.Machineidentityv2>>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.listMachineIdentitiesV2(requestParameters));
}
export const listMachineIdentityUserEntitlementsV1 = (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiListMachineIdentityUserEntitlementsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineIdentitiesTypes.MachineIdentityUserEntitlementResponse>>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.listMachineIdentityUserEntitlementsV1(requestParameters));
}
export const listNonEmployeeApprovalsV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiListNonEmployeeApprovalsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<nonEmployeeLifecycleManagementTypes.NonEmployeeApprovalItem>>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.listNonEmployeeApprovalsV1(requestParameters));
}
export const listNonEmployeeRecordsV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiListNonEmployeeRecordsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<nonEmployeeLifecycleManagementTypes.NonEmployeeRecord>>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.listNonEmployeeRecordsV1(requestParameters));
}
export const listNonEmployeeRequestsV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiListNonEmployeeRequestsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<nonEmployeeLifecycleManagementTypes.NonEmployeeRequest>>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.listNonEmployeeRequestsV1(requestParameters));
}
export const listNonEmployeeSourcesV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiListNonEmployeeSourcesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<nonEmployeeLifecycleManagementTypes.NonEmployeeSourceWithNECount>>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.listNonEmployeeSourcesV1(requestParameters));
}
export const listNotificationTemplateDefaultsV1 = (requestParameters: notificationsTypes.NotificationsApiListNotificationTemplateDefaultsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<notificationsTypes.TemplateDtoDefault>>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.listNotificationTemplateDefaultsV1(requestParameters));
}
export const listNotificationTemplatesV1 = (requestParameters: notificationsTypes.NotificationsApiListNotificationTemplatesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<notificationsTypes.TemplateDto>>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.listNotificationTemplatesV1(requestParameters));
}
export const listOauthClientsV1 = (requestParameters: oauthClientsTypes.OAuthClientsApiListOauthClientsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<oauthClientsTypes.GetOAuthClientResponse>>> => {
    const oauthclientsapi = new sdk.OAuthClientsApi(apiConfig);
    return handleApiCall(() => oauthclientsapi.listOauthClientsV1(requestParameters));
}
export const listOutliersContributingFeatureAccessItemsV1 = (requestParameters: iaiOutliersTypes.IAIOutliersApiListOutliersContributingFeatureAccessItemsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiOutliersTypes.OutliersContributingFeatureAccessItems>>> => {
    const iaioutliersapi = new sdk.IAIOutliersApi(apiConfig);
    return handleApiCall(() => iaioutliersapi.listOutliersContributingFeatureAccessItemsV1(requestParameters));
}
export const listOwnedUserAppsV1 = (requestParameters: appsTypes.AppsApiListOwnedUserAppsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<appsTypes.UserApp>>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.listOwnedUserAppsV1(requestParameters));
}
export const listOwnershipCorrelationConfigsV1 = (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiListOwnershipCorrelationConfigsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineIdentitiesTypes.CorrelationConfig>>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.listOwnershipCorrelationConfigsV1(requestParameters));
}
export const listPasswordPoliciesV1 = (requestParameters: passwordPoliciesTypes.PasswordPoliciesApiListPasswordPoliciesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<passwordPoliciesTypes.PasswordPolicyV3Dto>>> => {
    const passwordpoliciesapi = new sdk.PasswordPoliciesApi(apiConfig);
    return handleApiCall(() => passwordpoliciesapi.listPasswordPoliciesV1(requestParameters));
}
export const listPasswordPolicyHoldersOnSourceV1 = (requestParameters: sourcesTypes.SourcesApiListPasswordPolicyHoldersOnSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<sourcesTypes.PasswordPolicyHoldersDtoInner>>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.listPasswordPolicyHoldersOnSourceV1(requestParameters));
}
export const listPendingApprovalsV1 = (requestParameters: accessRequestApprovalsTypes.AccessRequestApprovalsApiListPendingApprovalsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accessRequestApprovalsTypes.PendingApproval>>> => {
    const accessrequestapprovalsapi = new sdk.AccessRequestApprovalsApi(apiConfig);
    return handleApiCall(() => accessrequestapprovalsapi.listPendingApprovalsV1(requestParameters));
}
export const listPendingEntitlementRecommendationApprovalsV1 = (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiListPendingEntitlementRecommendationApprovalsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<suggestedEntitlementDescriptionTypes.EntitlementRecommendationRecord>>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.listPendingEntitlementRecommendationApprovalsV1(requestParameters));
}
export const listPersonalAccessTokensV1 = (requestParameters: personalAccessTokensTypes.PersonalAccessTokensApiListPersonalAccessTokensV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<personalAccessTokensTypes.GetPersonalAccessTokenResponse>>> => {
    const personalaccesstokensapi = new sdk.PersonalAccessTokensApi(apiConfig);
    return handleApiCall(() => personalaccesstokensapi.listPersonalAccessTokensV1(requestParameters));
}
export const listPrivilegeCriteriaConfigV1 = (requestParameters: privilegeCriteriaConfigurationTypes.PrivilegeCriteriaConfigurationApiListPrivilegeCriteriaConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<privilegeCriteriaConfigurationTypes.PrivilegeCriteriaConfigDTO>>> => {
    const privilegecriteriaconfigurationapi = new sdk.PrivilegeCriteriaConfigurationApi(apiConfig);
    return handleApiCall(() => privilegecriteriaconfigurationapi.listPrivilegeCriteriaConfigV1(requestParameters));
}
export const listPrivilegeCriteriaV1 = (requestParameters: privilegeCriteriaTypes.PrivilegeCriteriaApiListPrivilegeCriteriaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<privilegeCriteriaTypes.PrivilegeCriteriaDTO>>> => {
    const privilegecriteriaapi = new sdk.PrivilegeCriteriaApi(apiConfig);
    return handleApiCall(() => privilegecriteriaapi.listPrivilegeCriteriaV1(requestParameters));
}
export const listPrivilegedEntitlementRecommendationsV1 = (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiListPrivilegedEntitlementRecommendationsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<suggestedEntitlementDescriptionTypes.PrivilegedRecommendationGroup>>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.listPrivilegedEntitlementRecommendationsV1(requestParameters));
}
export const listProvisioningPoliciesV1 = (requestParameters: sourcesTypes.SourcesApiListProvisioningPoliciesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<sourcesTypes.ProvisioningPolicyDto>>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.listProvisioningPoliciesV1(requestParameters));
}
export const listProvisioningPoliciesV2 = (requestParameters: sourcesTypes.SourcesApiListProvisioningPoliciesV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<sourcesTypes.ProvisioningPolicyDtoV2>>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.listProvisioningPoliciesV2(requestParameters));
}
export const listReassignmentConfigurationsV1 = (requestParameters: workReassignmentTypes.WorkReassignmentApiListReassignmentConfigurationsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workReassignmentTypes.ConfigurationResponse>>> => {
    const workreassignmentapi = new sdk.WorkReassignmentApi(apiConfig);
    return handleApiCall(() => workreassignmentapi.listReassignmentConfigurationsV1(requestParameters));
}
export const listRequestableObjectsV1 = (requestParameters: requestableObjectsTypes.RequestableObjectsApiListRequestableObjectsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<requestableObjectsTypes.RequestableObject>>> => {
    const requestableobjectsapi = new sdk.RequestableObjectsApi(apiConfig);
    return handleApiCall(() => requestableobjectsapi.listRequestableObjectsV1(requestParameters));
}
export const listRolesV1 = (requestParameters: rolesTypes.RolesApiListRolesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<rolesTypes.Role>>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.listRolesV1(requestParameters));
}
export const listSavedSearchesV1 = (requestParameters: savedSearchTypes.SavedSearchApiListSavedSearchesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<savedSearchTypes.SavedSearch>>> => {
    const savedsearchapi = new sdk.SavedSearchApi(apiConfig);
    return handleApiCall(() => savedsearchapi.listSavedSearchesV1(requestParameters));
}
export const listScheduledActionsV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<Array<configurationHubTypes.ScheduledActionResponse>>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.listScheduledActionsV1());
}
export const listScheduledSearchV1 = (requestParameters: scheduledSearchTypes.ScheduledSearchApiListScheduledSearchV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<scheduledSearchTypes.ScheduledSearch>>> => {
    const scheduledsearchapi = new sdk.ScheduledSearchApi(apiConfig);
    return handleApiCall(() => scheduledsearchapi.listScheduledSearchV1(requestParameters));
}
export const listSedsV1 = (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiListSedsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<suggestedEntitlementDescriptionTypes.Sed>>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.listSedsV1(requestParameters));
}
export const listSegmentsV1 = (requestParameters: segmentsTypes.SegmentsApiListSegmentsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<segmentsTypes.Segment>>> => {
    const segmentsapi = new sdk.SegmentsApi(apiConfig);
    return handleApiCall(() => segmentsapi.listSegmentsV1(requestParameters));
}
export const listSodPoliciesV1 = (requestParameters: sodPoliciesTypes.SODPoliciesApiListSodPoliciesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<sodPoliciesTypes.SodPolicy>>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.listSodPoliciesV1(requestParameters));
}
export const listSourceSubtypesV1 = (requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiListSourceSubtypesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineAccountSubtypesTypes.SourceSubtypeWithSource>>> => {
    const machineaccountsubtypesapi = new sdk.MachineAccountSubtypesApi(apiConfig);
    return handleApiCall(() => machineaccountsubtypesapi.listSourceSubtypesV1(requestParameters));
}
export const listSourcesV1 = (requestParameters: sourcesTypes.SourcesApiListSourcesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<sourcesTypes.Source>>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.listSourcesV1(requestParameters));
}
export const listSpConfigObjectsV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<Array<spConfigTypes.SpConfigObject>>> => {
    const spconfigapi = new sdk.SPConfigApi(apiConfig);
    return handleApiCall(() => spconfigapi.listSpConfigObjectsV1());
}
export const listSubscriptionsV1 = (requestParameters: triggersTypes.TriggersApiListSubscriptionsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<triggersTypes.Subscription>>> => {
    const triggersapi = new sdk.TriggersApi(apiConfig);
    return handleApiCall(() => triggersapi.listSubscriptionsV1(requestParameters));
}
export const listTaggedObjectsByTypeV1 = (requestParameters: taggedObjectsTypes.TaggedObjectsApiListTaggedObjectsByTypeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<taggedObjectsTypes.TaggedObject>>> => {
    const taggedobjectsapi = new sdk.TaggedObjectsApi(apiConfig);
    return handleApiCall(() => taggedobjectsapi.listTaggedObjectsByTypeV1(requestParameters));
}
export const listTaggedObjectsV1 = (requestParameters: taggedObjectsTypes.TaggedObjectsApiListTaggedObjectsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<taggedObjectsTypes.TaggedObject>>> => {
    const taggedobjectsapi = new sdk.TaggedObjectsApi(apiConfig);
    return handleApiCall(() => taggedobjectsapi.listTaggedObjectsV1(requestParameters));
}
export const listTagsV1 = (requestParameters: tagsTypes.TagsApiListTagsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<tagsTypes.Tag2>>> => {
    const tagsapi = new sdk.TagsApi(apiConfig);
    return handleApiCall(() => tagsapi.listTagsV1(requestParameters));
}
export const listTransformsV1 = (requestParameters: transformsTypes.TransformsApiListTransformsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<transformsTypes.TransformRead>>> => {
    const transformsapi = new sdk.TransformsApi(apiConfig);
    return handleApiCall(() => transformsapi.listTransformsV1(requestParameters));
}
export const listTriggerInvocationStatusV1 = (requestParameters: triggersTypes.TriggersApiListTriggerInvocationStatusV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<triggersTypes.InvocationStatus>>> => {
    const triggersapi = new sdk.TriggersApi(apiConfig);
    return handleApiCall(() => triggersapi.listTriggerInvocationStatusV1(requestParameters));
}
export const listTriggersV1 = (requestParameters: triggersTypes.TriggersApiListTriggersV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<triggersTypes.Trigger>>> => {
    const triggersapi = new sdk.TriggersApi(apiConfig);
    return handleApiCall(() => triggersapi.listTriggersV1(requestParameters));
}
export const listUploadedConfigurationsV1 = (requestParameters: configurationHubTypes.ConfigurationHubApiListUploadedConfigurationsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<configurationHubTypes.BackupResponse>>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.listUploadedConfigurationsV1(requestParameters));
}
export const listUserLevelIdentitiesV1 = (requestParameters: customUserLevelsTypes.CustomUserLevelsApiListUserLevelIdentitiesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<customUserLevelsTypes.AuthUserSlimResponse>>> => {
    const customuserlevelsapi = new sdk.CustomUserLevelsApi(apiConfig);
    return handleApiCall(() => customuserlevelsapi.listUserLevelIdentitiesV1(requestParameters));
}
export const listUserLevelsV1 = (requestParameters: customUserLevelsTypes.CustomUserLevelsApiListUserLevelsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<customUserLevelsTypes.UserLevelSummaryDTO>>> => {
    const customuserlevelsapi = new sdk.CustomUserLevelsApi(apiConfig);
    return handleApiCall(() => customuserlevelsapi.listUserLevelsV1(requestParameters));
}
export const listWorkflowLibraryActionsV1 = (requestParameters: workflowsTypes.WorkflowsApiListWorkflowLibraryActionsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workflowsTypes.WorkflowLibraryAction>>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.listWorkflowLibraryActionsV1(requestParameters));
}
export const listWorkflowLibraryOperatorsV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workflowsTypes.WorkflowLibraryOperator>>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.listWorkflowLibraryOperatorsV1());
}
export const listWorkflowLibraryTriggersV1 = (requestParameters: workflowsTypes.WorkflowsApiListWorkflowLibraryTriggersV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workflowsTypes.WorkflowLibraryTrigger>>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.listWorkflowLibraryTriggersV1(requestParameters));
}
export const listWorkflowsV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workflowsTypes.Workflow>>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.listWorkflowsV1());
}
export const listWorkgroupMembersV1 = (requestParameters: governanceGroupsTypes.GovernanceGroupsApiListWorkgroupMembersV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<governanceGroupsTypes.ListWorkgroupMembersV1200ResponseInner>>> => {
    const governancegroupsapi = new sdk.GovernanceGroupsApi(apiConfig);
    return handleApiCall(() => governancegroupsapi.listWorkgroupMembersV1(requestParameters));
}
export const listWorkgroupsV1 = (requestParameters: governanceGroupsTypes.GovernanceGroupsApiListWorkgroupsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<governanceGroupsTypes.WorkgroupDto>>> => {
    const governancegroupsapi = new sdk.GovernanceGroupsApi(apiConfig);
    return handleApiCall(() => governancegroupsapi.listWorkgroupsV1(requestParameters));
}
export const listWorkItemsV1 = (requestParameters: workItemsTypes.WorkItemsApiListWorkItemsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workItemsTypes.WorkItems>>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.listWorkItemsV1(requestParameters));
}
export const loadAccountSelectionsV1 = (requestParameters: accessRequestsTypes.AccessRequestsApiLoadAccountSelectionsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessRequestsTypes.AccountsSelectionResponse>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.loadAccountSelectionsV1(requestParameters));
}
export const loadBulkSourceSubtypesV1 = (requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiLoadBulkSourceSubtypesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineAccountSubtypesTypes.SourceSubtypeWithSource>>> => {
    const machineaccountsubtypesapi = new sdk.MachineAccountSubtypesApi(apiConfig);
    return handleApiCall(() => machineaccountsubtypesapi.loadBulkSourceSubtypesV1(requestParameters));
}
export const makeIdentityDecisionV1 = (requestParameters: certificationsTypes.CertificationsApiMakeIdentityDecisionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationsTypes.IdentityCertificationDto>> => {
    const certificationsapi = new sdk.CertificationsApi(apiConfig);
    return handleApiCall(() => certificationsapi.makeIdentityDecisionV1(requestParameters));
}
export const moveApprovalV1 = (requestParameters: approvalsTypes.ApprovalsApiMoveApprovalV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.moveApprovalV1(requestParameters));
}
export const moveV1 = (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiMoveV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignsTypes.CertificationTask>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.moveV1(requestParameters));
}
export const patchAccessProfileV1 = (requestParameters: accessProfilesTypes.AccessProfilesApiPatchAccessProfileV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessProfilesTypes.AccessProfile>> => {
    const accessprofilesapi = new sdk.AccessProfilesApi(apiConfig);
    return handleApiCall(() => accessprofilesapi.patchAccessProfileV1(requestParameters));
}
export const patchAdvancedSearchNerm = (requestParameters: sdk.AdvancedSearchNERMApiPatchAdvancedSearchRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitAdvancedSearch200ResponseNERM>> => {
    const advancedsearchnermapi = new sdk.AdvancedSearchNERMApi(apiConfig);
    return handleApiCall(() => advancedsearchnermapi.patchAdvancedSearch(requestParameters));
}
export const patchAttributeOptionByIdNerm = (requestParameters: sdk.AttributeOptionsNERMApiPatchAttributeOptionByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitAttributeOption200ResponseNERM>> => {
    const attributeoptionsnermapi = new sdk.AttributeOptionsNERMApi(apiConfig);
    return handleApiCall(() => attributeoptionsnermapi.patchAttributeOptionById(requestParameters));
}
export const patchAttributeOptionByUidNerm = (requestParameters: sdk.AttributeOptionsNERMApiPatchAttributeOptionByUidRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitAttributeOption200ResponseNERM>> => {
    const attributeoptionsnermapi = new sdk.AttributeOptionsNERMApi(apiConfig);
    return handleApiCall(() => attributeoptionsnermapi.patchAttributeOptionByUid(requestParameters));
}
export const patchAttributeOptionsNerm = (requestParameters: sdk.AttributeOptionsNERMApiPatchAttributeOptionsRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitAttributeOptions200ResponseNERM>> => {
    const attributeoptionsnermapi = new sdk.AttributeOptionsNERMApi(apiConfig);
    return handleApiCall(() => attributeoptionsnermapi.patchAttributeOptions(requestParameters));
}
export const patchAuthOrgLockoutConfigV1 = (requestParameters: globalTenantSecuritySettingsTypes.GlobalTenantSecuritySettingsApiPatchAuthOrgLockoutConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<globalTenantSecuritySettingsTypes.LockoutConfiguration>> => {
    const globaltenantsecuritysettingsapi = new sdk.GlobalTenantSecuritySettingsApi(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsapi.patchAuthOrgLockoutConfigV1(requestParameters));
}
export const patchAuthOrgNetworkConfigV1 = (requestParameters: globalTenantSecuritySettingsTypes.GlobalTenantSecuritySettingsApiPatchAuthOrgNetworkConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<globalTenantSecuritySettingsTypes.NetworkConfiguration>> => {
    const globaltenantsecuritysettingsapi = new sdk.GlobalTenantSecuritySettingsApi(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsapi.patchAuthOrgNetworkConfigV1(requestParameters));
}
export const patchAuthOrgServiceProviderConfigV1 = (requestParameters: globalTenantSecuritySettingsTypes.GlobalTenantSecuritySettingsApiPatchAuthOrgServiceProviderConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<globalTenantSecuritySettingsTypes.ServiceProviderConfiguration>> => {
    const globaltenantsecuritysettingsapi = new sdk.GlobalTenantSecuritySettingsApi(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsapi.patchAuthOrgServiceProviderConfigV1(requestParameters));
}
export const patchAuthOrgSessionConfigV1 = (requestParameters: globalTenantSecuritySettingsTypes.GlobalTenantSecuritySettingsApiPatchAuthOrgSessionConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<globalTenantSecuritySettingsTypes.SessionConfiguration>> => {
    const globaltenantsecuritysettingsapi = new sdk.GlobalTenantSecuritySettingsApi(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsapi.patchAuthOrgSessionConfigV1(requestParameters));
}
export const patchAuthUserV1 = (requestParameters: authUsersTypes.AuthUsersApiPatchAuthUserV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<authUsersTypes.AuthUser>> => {
    const authusersapi = new sdk.AuthUsersApi(apiConfig);
    return handleApiCall(() => authusersapi.patchAuthUserV1(requestParameters));
}
export const patchBeforeProvisioningRuleV1 = (requestParameters: simIntegrationsTypes.SIMIntegrationsApiPatchBeforeProvisioningRuleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<simIntegrationsTypes.ServiceDeskIntegrationDto>> => {
    const simintegrationsapi = new sdk.SIMIntegrationsApi(apiConfig);
    return handleApiCall(() => simintegrationsapi.patchBeforeProvisioningRuleV1(requestParameters));
}
export const patchCampaignTemplateV1 = (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiPatchCampaignTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignsTypes.CampaignTemplate>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.patchCampaignTemplateV1(requestParameters));
}
export const patchDataRecordNerm = (requestParameters: sdk.ConsolidationNERMApiPatchDataRecordRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const consolidationnermapi = new sdk.ConsolidationNERMApi(apiConfig);
    return handleApiCall(() => consolidationnermapi.patchDataRecord(requestParameters));
}
export const patchDataSegmentV1 = (requestParameters: dataSegmentationTypes.DataSegmentationApiPatchDataSegmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<dataSegmentationTypes.DataSegment>> => {
    const datasegmentationapi = new sdk.DataSegmentationApi(apiConfig);
    return handleApiCall(() => datasegmentationapi.patchDataSegmentV1(requestParameters));
}
export const patchDimensionV1 = (requestParameters: dimensionsTypes.DimensionsApiPatchDimensionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<dimensionsTypes.Dimension>> => {
    const dimensionsapi = new sdk.DimensionsApi(apiConfig);
    return handleApiCall(() => dimensionsapi.patchDimensionV1(requestParameters));
}
export const patchEntitlementConnectionByIdV1 = (requestParameters: entitlementConnectionsTypes.EntitlementConnectionsApiPatchEntitlementConnectionByIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<entitlementConnectionsTypes.EntitlementConnection>> => {
    const entitlementconnectionsapi = new sdk.EntitlementConnectionsApi(apiConfig);
    return handleApiCall(() => entitlementconnectionsapi.patchEntitlementConnectionByIdV1(requestParameters));
}
export const patchEntitlementConnectionByQueryV1 = (requestParameters: entitlementConnectionsTypes.EntitlementConnectionsApiPatchEntitlementConnectionByQueryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<entitlementConnectionsTypes.EntitlementConnection>> => {
    const entitlementconnectionsapi = new sdk.EntitlementConnectionsApi(apiConfig);
    return handleApiCall(() => entitlementconnectionsapi.patchEntitlementConnectionByQueryV1(requestParameters));
}
export const patchEntitlementRecommendationV1 = (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiPatchEntitlementRecommendationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<suggestedEntitlementDescriptionTypes.EntitlementRecommendationRecord>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.patchEntitlementRecommendationV1(requestParameters));
}
export const patchEntitlementV1 = (requestParameters: entitlementsTypes.EntitlementsApiPatchEntitlementV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<entitlementsTypes.EntitlementV2>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.patchEntitlementV1(requestParameters));
}
export const patchFormDefinitionV1 = (requestParameters: customFormsTypes.CustomFormsApiPatchFormDefinitionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.FormDefinitionResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.patchFormDefinitionV1(requestParameters));
}
export const patchFormInstanceV1 = (requestParameters: customFormsTypes.CustomFormsApiPatchFormInstanceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.FormInstanceResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.patchFormInstanceV1(requestParameters));
}
export const patchJitActivationConfigV1 = (requestParameters: jitAccessTypes.JITAccessApiPatchJitActivationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<jitAccessTypes.JITActivationConfigResponse>> => {
    const jitaccessapi = new sdk.JITAccessApi(apiConfig);
    return handleApiCall(() => jitaccessapi.patchJitActivationConfigV1(requestParameters));
}
export const patchLanguageNerm = (requestParameters: sdk.LanguagesNERMApiPatchLanguageRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.PatchLanguageRequestNERM>> => {
    const languagesnermapi = new sdk.LanguagesNERMApi(apiConfig);
    return handleApiCall(() => languagesnermapi.patchLanguage(requestParameters));
}
export const patchMachineAccountSubtypeByTechnicalNameV1 = (requestParameters: machineAccountsTypes.MachineAccountsApiPatchMachineAccountSubtypeByTechnicalNameV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountsTypes.SourceSubtype>> => {
    const machineaccountsapi = new sdk.MachineAccountsApi(apiConfig);
    return handleApiCall(() => machineaccountsapi.patchMachineAccountSubtypeByTechnicalNameV1(requestParameters));
}
export const patchMachineAccountSubtypeV1 = (requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiPatchMachineAccountSubtypeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountSubtypesTypes.SourceSubtypeWithSource>> => {
    const machineaccountsubtypesapi = new sdk.MachineAccountSubtypesApi(apiConfig);
    return handleApiCall(() => machineaccountsubtypesapi.patchMachineAccountSubtypeV1(requestParameters));
}
export const patchNonEmployeeRecordV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiPatchNonEmployeeRecordV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeRecord>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.patchNonEmployeeRecordV1(requestParameters));
}
export const patchNonEmployeeSchemaAttributeV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiPatchNonEmployeeSchemaAttributeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeSchemaAttribute>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.patchNonEmployeeSchemaAttributeV1(requestParameters));
}
export const patchNonEmployeeSourceV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiPatchNonEmployeeSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeSource>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.patchNonEmployeeSourceV1(requestParameters));
}
export const patchOauthClientV1 = (requestParameters: oauthClientsTypes.OAuthClientsApiPatchOauthClientV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<oauthClientsTypes.GetOAuthClientResponse>> => {
    const oauthclientsapi = new sdk.OAuthClientsApi(apiConfig);
    return handleApiCall(() => oauthclientsapi.patchOauthClientV1(requestParameters));
}
export const patchOrgConfigV1 = (requestParameters: orgConfigTypes.OrgConfigApiPatchOrgConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<orgConfigTypes.OrgConfig>> => {
    const orgconfigapi = new sdk.OrgConfigApi(apiConfig);
    return handleApiCall(() => orgconfigapi.patchOrgConfigV1(requestParameters));
}
export const patchOwnershipCorrelationConfigV1 = (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiPatchOwnershipCorrelationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineIdentitiesTypes.CorrelationConfig>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.patchOwnershipCorrelationConfigV1(requestParameters));
}
export const patchPersonalAccessTokenV1 = (requestParameters: personalAccessTokensTypes.PersonalAccessTokensApiPatchPersonalAccessTokenV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<personalAccessTokensTypes.GetPersonalAccessTokenResponse>> => {
    const personalaccesstokensapi = new sdk.PersonalAccessTokensApi(apiConfig);
    return handleApiCall(() => personalaccesstokensapi.patchPersonalAccessTokenV1(requestParameters));
}
export const patchPotentialRoleSessionV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiPatchPotentialRoleSessionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.patchPotentialRoleSessionV1(requestParameters));
}
export const patchPotentialRoleV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiPatchPotentialRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.patchPotentialRoleV1(requestParameters));
}
export const patchPrivilegeCriteriaConfigV1 = (requestParameters: privilegeCriteriaConfigurationTypes.PrivilegeCriteriaConfigurationApiPatchPrivilegeCriteriaConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<privilegeCriteriaConfigurationTypes.PrivilegeCriteriaConfigDTO>> => {
    const privilegecriteriaconfigurationapi = new sdk.PrivilegeCriteriaConfigurationApi(apiConfig);
    return handleApiCall(() => privilegecriteriaconfigurationapi.patchPrivilegeCriteriaConfigV1(requestParameters));
}
export const patchProfileByIdNerm = (requestParameters: sdk.ProfilesNERMApiPatchProfileByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetSingleSchemaMappedProfile200ResponseNERM>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.patchProfileById(requestParameters));
}
export const patchProfileConfigV1 = (requestParameters: authProfileTypes.AuthProfileApiPatchProfileConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<authProfileTypes.AuthProfile>> => {
    const authprofileapi = new sdk.AuthProfileApi(apiConfig);
    return handleApiCall(() => authprofileapi.patchProfileConfigV1(requestParameters));
}
export const patchProfilesNerm = (requestParameters: sdk.ProfilesNERMApiPatchProfilesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SearchAdvancedSearch200ResponseNERM>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.patchProfiles(requestParameters));
}
export const patchProfileTypeByIdNerm = (requestParameters: sdk.ProfileTypesNERMApiPatchProfileTypeByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitProfileType200ResponseNERM>> => {
    const profiletypesnermapi = new sdk.ProfileTypesNERMApi(apiConfig);
    return handleApiCall(() => profiletypesnermapi.patchProfileTypeById(requestParameters));
}
export const patchProfileTypeByUidNerm = (requestParameters: sdk.ProfileTypesNERMApiPatchProfileTypeByUidRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitProfileType200ResponseNERM>> => {
    const profiletypesnermapi = new sdk.ProfileTypesNERMApi(apiConfig);
    return handleApiCall(() => profiletypesnermapi.patchProfileTypeByUid(requestParameters));
}
export const patchRoleMiningSessionV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiPatchRoleMiningSessionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.patchRoleMiningSessionV1(requestParameters));
}
export const patchRoleNerm = (requestParameters: sdk.RolesNERMApiPatchRoleRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitRole200ResponseNERM>> => {
    const rolesnermapi = new sdk.RolesNERMApi(apiConfig);
    return handleApiCall(() => rolesnermapi.patchRole(requestParameters));
}
export const patchRoleProfileNerm = (requestParameters: sdk.RoleProfilesNERMApiPatchRoleProfileRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitRoleProfile200ResponseNERM>> => {
    const roleprofilesnermapi = new sdk.RoleProfilesNERMApi(apiConfig);
    return handleApiCall(() => roleprofilesnermapi.patchRoleProfile(requestParameters));
}
export const patchRoleProfilesNerm = (requestParameters: sdk.RoleProfilesNERMApiPatchRoleProfilesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitRoleProfiles200ResponseNERM>> => {
    const roleprofilesnermapi = new sdk.RoleProfilesNERMApi(apiConfig);
    return handleApiCall(() => roleprofilesnermapi.patchRoleProfiles(requestParameters));
}
export const patchRolesNerm = (requestParameters: sdk.RolesNERMApiPatchRolesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitRoles200ResponseNERM>> => {
    const rolesnermapi = new sdk.RolesNERMApi(apiConfig);
    return handleApiCall(() => rolesnermapi.patchRoles(requestParameters));
}
export const patchRoleV1 = (requestParameters: rolesTypes.RolesApiPatchRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<rolesTypes.Role>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.patchRoleV1(requestParameters));
}
export const patchSearchAttributeConfigV1 = (requestParameters: searchAttributeConfigurationTypes.SearchAttributeConfigurationApiPatchSearchAttributeConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<searchAttributeConfigurationTypes.SearchAttributeConfig>> => {
    const searchattributeconfigurationapi = new sdk.SearchAttributeConfigurationApi(apiConfig);
    return handleApiCall(() => searchattributeconfigurationapi.patchSearchAttributeConfigV1(requestParameters));
}
export const patchSedV1 = (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiPatchSedV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<suggestedEntitlementDescriptionTypes.Sed>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.patchSedV1(requestParameters));
}
export const patchSegmentV1 = (requestParameters: segmentsTypes.SegmentsApiPatchSegmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<segmentsTypes.Segment>> => {
    const segmentsapi = new sdk.SegmentsApi(apiConfig);
    return handleApiCall(() => segmentsapi.patchSegmentV1(requestParameters));
}
export const patchServiceDeskIntegrationV1 = (requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiPatchServiceDeskIntegrationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<serviceDeskIntegrationTypes.ServiceDeskIntegrationDto>> => {
    const servicedeskintegrationapi = new sdk.ServiceDeskIntegrationApi(apiConfig);
    return handleApiCall(() => servicedeskintegrationapi.patchServiceDeskIntegrationV1(requestParameters));
}
export const patchSIMAttributesV1 = (requestParameters: simIntegrationsTypes.SIMIntegrationsApiPatchSIMAttributesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<simIntegrationsTypes.ServiceDeskIntegrationDto>> => {
    const simintegrationsapi = new sdk.SIMIntegrationsApi(apiConfig);
    return handleApiCall(() => simintegrationsapi.patchSIMAttributesV1(requestParameters));
}
export const patchSodPolicyV1 = (requestParameters: sodPoliciesTypes.SODPoliciesApiPatchSodPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.SodPolicy>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.patchSodPolicyV1(requestParameters));
}
export const patchSourceAppV1 = (requestParameters: appsTypes.AppsApiPatchSourceAppV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<appsTypes.SourceAppPatchDto>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.patchSourceAppV1(requestParameters));
}
export const patchSubscriptionV1 = (requestParameters: triggersTypes.TriggersApiPatchSubscriptionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<triggersTypes.Subscription>> => {
    const triggersapi = new sdk.TriggersApi(apiConfig);
    return handleApiCall(() => triggersapi.patchSubscriptionV1(requestParameters));
}
export const patchTenantContextV1 = (requestParameters: tenantContextTypes.TenantContextApiPatchTenantContextV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const tenantcontextapi = new sdk.TenantContextApi(apiConfig);
    return handleApiCall(() => tenantcontextapi.patchTenantContextV1(requestParameters));
}
export const patchUserAppV1 = (requestParameters: appsTypes.AppsApiPatchUserAppV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<appsTypes.UserApp>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.patchUserAppV1(requestParameters));
}
export const patchUserManagerNerm = (requestParameters: sdk.UserManagersNERMApiPatchUserManagerRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserManager200ResponseNERM>> => {
    const usermanagersnermapi = new sdk.UserManagersNERMApi(apiConfig);
    return handleApiCall(() => usermanagersnermapi.patchUserManager(requestParameters));
}
export const patchUserManagersNerm = (requestParameters: sdk.UserManagersNERMApiPatchUserManagersRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserManagers200ResponseNERM>> => {
    const usermanagersnermapi = new sdk.UserManagersNERMApi(apiConfig);
    return handleApiCall(() => usermanagersnermapi.patchUserManagers(requestParameters));
}
export const patchUserNerm = (requestParameters: sdk.UsersNERMApiPatchUserRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUser200ResponseNERM>> => {
    const usersnermapi = new sdk.UsersNERMApi(apiConfig);
    return handleApiCall(() => usersnermapi.patchUser(requestParameters));
}
export const patchUserProfileNerm = (requestParameters: sdk.UserProfilesNERMApiPatchUserProfileRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserProfile200ResponseNERM>> => {
    const userprofilesnermapi = new sdk.UserProfilesNERMApi(apiConfig);
    return handleApiCall(() => userprofilesnermapi.patchUserProfile(requestParameters));
}
export const patchUserProfilesNerm = (requestParameters: sdk.UserProfilesNERMApiPatchUserProfilesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateUserProfiles200ResponseNERM>> => {
    const userprofilesnermapi = new sdk.UserProfilesNERMApi(apiConfig);
    return handleApiCall(() => userprofilesnermapi.patchUserProfiles(requestParameters));
}
export const patchUserRoleNerm = (requestParameters: sdk.UserRolesNERMApiPatchUserRoleRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserRole200ResponseNERM>> => {
    const userrolesnermapi = new sdk.UserRolesNERMApi(apiConfig);
    return handleApiCall(() => userrolesnermapi.patchUserRole(requestParameters));
}
export const patchUserRolesNerm = (requestParameters: sdk.UserRolesNERMApiPatchUserRolesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserRoles200ResponseNERM>> => {
    const userrolesnermapi = new sdk.UserRolesNERMApi(apiConfig);
    return handleApiCall(() => userrolesnermapi.patchUserRoles(requestParameters));
}
export const patchUsersNerm = (requestParameters: sdk.UsersNERMApiPatchUsersRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUsers200ResponseNERM>> => {
    const usersnermapi = new sdk.UsersNERMApi(apiConfig);
    return handleApiCall(() => usersnermapi.patchUsers(requestParameters));
}
export const patchWorkflowSessionNerm = (requestParameters: sdk.WorkflowSessionsNERMApiPatchWorkflowSessionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitWorkflowSession200ResponseNERM>> => {
    const workflowsessionsnermapi = new sdk.WorkflowSessionsNERMApi(apiConfig);
    return handleApiCall(() => workflowsessionsnermapi.patchWorkflowSession(requestParameters));
}
export const patchWorkflowV1 = (requestParameters: workflowsTypes.WorkflowsApiPatchWorkflowV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workflowsTypes.Workflow>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.patchWorkflowV1(requestParameters));
}
export const patchWorkgroupV1 = (requestParameters: governanceGroupsTypes.GovernanceGroupsApiPatchWorkgroupV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<governanceGroupsTypes.WorkgroupDto>> => {
    const governancegroupsapi = new sdk.GovernanceGroupsApi(apiConfig);
    return handleApiCall(() => governancegroupsapi.patchWorkgroupV1(requestParameters));
}
export const pingClusterV1 = (requestParameters: sourcesTypes.SourcesApiPingClusterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.StatusResponse>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.pingClusterV1(requestParameters));
}
export const publishCustomUserLevelV1 = (requestParameters: customUserLevelsTypes.CustomUserLevelsApiPublishCustomUserLevelV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customUserLevelsTypes.UserLevelPublishSummary>> => {
    const customuserlevelsapi = new sdk.CustomUserLevelsApi(apiConfig);
    return handleApiCall(() => customuserlevelsapi.publishCustomUserLevelV1(requestParameters));
}
export const publishDataSegmentV1 = (requestParameters: dataSegmentationTypes.DataSegmentationApiPublishDataSegmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const datasegmentationapi = new sdk.DataSegmentationApi(apiConfig);
    return handleApiCall(() => datasegmentationapi.publishDataSegmentV1(requestParameters));
}
export const putAccountV1 = (requestParameters: accountsTypes.AccountsApiPutAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountsTypes.AccountsAsyncResult>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.putAccountV1(requestParameters));
}
export const putApplicationV1 = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiPutApplicationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.putApplicationV1(requestParameters));
}
export const putApprovalsConfigV1 = (requestParameters: approvalsTypes.ApprovalsApiPutApprovalsConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<approvalsTypes.ApprovalConfig>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.putApprovalsConfigV1(requestParameters));
}
export const putClientLogConfigurationV1 = (requestParameters: managedClustersTypes.ManagedClustersApiPutClientLogConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClustersTypes.ClientLogConfiguration>> => {
    const managedclustersapi = new sdk.ManagedClustersApi(apiConfig);
    return handleApiCall(() => managedclustersapi.putClientLogConfigurationV1(requestParameters));
}
export const putConnectorCorrelationConfigV1 = (requestParameters: connectorsTypes.ConnectorsApiPutConnectorCorrelationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorsTypes.UpdateDetail>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.putConnectorCorrelationConfigV1(requestParameters));
}
export const putConnectorCustomizerV1 = (requestParameters: connectorCustomizersTypes.ConnectorCustomizersApiPutConnectorCustomizerV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorCustomizersTypes.ConnectorCustomizerUpdateResponse>> => {
    const connectorcustomizersapi = new sdk.ConnectorCustomizersApi(apiConfig);
    return handleApiCall(() => connectorcustomizersapi.putConnectorCustomizerV1(requestParameters));
}
export const putConnectorRuleV1 = (requestParameters: connectorRuleManagementTypes.ConnectorRuleManagementApiPutConnectorRuleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorRuleManagementTypes.ConnectorRuleResponse>> => {
    const connectorrulemanagementapi = new sdk.ConnectorRuleManagementApi(apiConfig);
    return handleApiCall(() => connectorrulemanagementapi.putConnectorRuleV1(requestParameters));
}
export const putConnectorSourceConfigV1 = (requestParameters: connectorsTypes.ConnectorsApiPutConnectorSourceConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorsTypes.UpdateDetail>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.putConnectorSourceConfigV1(requestParameters));
}
export const putConnectorSourceTemplateV1 = (requestParameters: connectorsTypes.ConnectorsApiPutConnectorSourceTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorsTypes.UpdateDetail>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.putConnectorSourceTemplateV1(requestParameters));
}
export const putConnectorTranslationsV1 = (requestParameters: connectorsTypes.ConnectorsApiPutConnectorTranslationsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorsTypes.UpdateDetail>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.putConnectorTranslationsV1(requestParameters));
}
export const putCorrelationConfigV1 = (requestParameters: sourcesTypes.SourcesApiPutCorrelationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.CorrelationConfig>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.putCorrelationConfigV1(requestParameters));
}
export const putCustomPrivilegeCriteriaValueV1 = (requestParameters: privilegeCriteriaTypes.PrivilegeCriteriaApiPutCustomPrivilegeCriteriaValueV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<privilegeCriteriaTypes.PrivilegeCriteriaDTO>> => {
    const privilegecriteriaapi = new sdk.PrivilegeCriteriaApi(apiConfig);
    return handleApiCall(() => privilegecriteriaapi.putCustomPrivilegeCriteriaValueV1(requestParameters));
}
export const putEntitlementRequestConfigV1 = (requestParameters: entitlementsTypes.EntitlementsApiPutEntitlementRequestConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<entitlementsTypes.EntitlementRequestConfig>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.putEntitlementRequestConfigV1(requestParameters));
}
export const putIdentityAttributeV1 = (requestParameters: identityAttributesTypes.IdentityAttributesApiPutIdentityAttributeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityAttributesTypes.IdentityAttribute2>> => {
    const identityattributesapi = new sdk.IdentityAttributesApi(apiConfig);
    return handleApiCall(() => identityattributesapi.putIdentityAttributeV1(requestParameters));
}
export const putIdentityCollectorV1 = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiPutIdentityCollectorV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.putIdentityCollectorV1(requestParameters));
}
export const putLauncherV1 = (requestParameters: launchersTypes.LaunchersApiPutLauncherV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<launchersTypes.Launcher>> => {
    const launchersapi = new sdk.LaunchersApi(apiConfig);
    return handleApiCall(() => launchersapi.putLauncherV1(requestParameters));
}
export const putMailFromAttributesV1 = (requestParameters: notificationsTypes.NotificationsApiPutMailFromAttributesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<notificationsTypes.MailFromAttributes>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.putMailFromAttributesV1(requestParameters));
}
export const putNativeChangeDetectionConfigV1 = (requestParameters: sourcesTypes.SourcesApiPutNativeChangeDetectionConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.NativeChangeDetectionConfig>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.putNativeChangeDetectionConfigV1(requestParameters));
}
export const putPasswordDictionaryV1 = (requestParameters: passwordDictionaryTypes.PasswordDictionaryApiPutPasswordDictionaryV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const passworddictionaryapi = new sdk.PasswordDictionaryApi(apiConfig);
    return handleApiCall(() => passworddictionaryapi.putPasswordDictionaryV1(requestParameters));
}
export const putPasswordOrgConfigV1 = (requestParameters: passwordConfigurationTypes.PasswordConfigurationApiPutPasswordOrgConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordConfigurationTypes.PasswordOrgConfig>> => {
    const passwordconfigurationapi = new sdk.PasswordConfigurationApi(apiConfig);
    return handleApiCall(() => passwordconfigurationapi.putPasswordOrgConfigV1(requestParameters));
}
export const putPolicyScheduleV1 = (requestParameters: sodPoliciesTypes.SODPoliciesApiPutPolicyScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.SodPolicySchedule>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.putPolicyScheduleV1(requestParameters));
}
export const putProvisioningPolicyV1 = (requestParameters: sourcesTypes.SourcesApiPutProvisioningPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.ProvisioningPolicyDto>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.putProvisioningPolicyV1(requestParameters));
}
export const putProvisioningPolicyV2 = (requestParameters: sourcesTypes.SourcesApiPutProvisioningPolicyV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.ProvisioningPolicyDtoV2>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.putProvisioningPolicyV2(requestParameters));
}
export const putReassignmentConfigV1 = (requestParameters: workReassignmentTypes.WorkReassignmentApiPutReassignmentConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workReassignmentTypes.ConfigurationItemResponse>> => {
    const workreassignmentapi = new sdk.WorkReassignmentApi(apiConfig);
    return handleApiCall(() => workreassignmentapi.putReassignmentConfigV1(requestParameters));
}
export const putSavedSearchV1 = (requestParameters: savedSearchTypes.SavedSearchApiPutSavedSearchV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<savedSearchTypes.SavedSearch>> => {
    const savedsearchapi = new sdk.SavedSearchApi(apiConfig);
    return handleApiCall(() => savedsearchapi.putSavedSearchV1(requestParameters));
}
export const putScheduleV1 = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiPutScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.putScheduleV1(requestParameters));
}
export const putServiceDeskIntegrationV1 = (requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiPutServiceDeskIntegrationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<serviceDeskIntegrationTypes.ServiceDeskIntegrationDto>> => {
    const servicedeskintegrationapi = new sdk.ServiceDeskIntegrationApi(apiConfig);
    return handleApiCall(() => servicedeskintegrationapi.putServiceDeskIntegrationV1(requestParameters));
}
export const putSIMIntegrationV1 = (requestParameters: simIntegrationsTypes.SIMIntegrationsApiPutSIMIntegrationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<simIntegrationsTypes.ServiceDeskIntegrationDto>> => {
    const simintegrationsapi = new sdk.SIMIntegrationsApi(apiConfig);
    return handleApiCall(() => simintegrationsapi.putSIMIntegrationV1(requestParameters));
}
export const putSodPolicyV1 = (requestParameters: sodPoliciesTypes.SODPoliciesApiPutSodPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.SodPolicy>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.putSodPolicyV1(requestParameters));
}
export const putSourceAttrSyncConfigV1 = (requestParameters: sourcesTypes.SourcesApiPutSourceAttrSyncConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.AttrSyncSourceConfig>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.putSourceAttrSyncConfigV1(requestParameters));
}
export const putSourceSchemaV1 = (requestParameters: sourcesTypes.SourcesApiPutSourceSchemaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Schema>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.putSourceSchemaV1(requestParameters));
}
export const putSourceV1 = (requestParameters: sourcesTypes.SourcesApiPutSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Source>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.putSourceV1(requestParameters));
}
export const putTaggedObjectV1 = (requestParameters: taggedObjectsTypes.TaggedObjectsApiPutTaggedObjectV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<taggedObjectsTypes.TaggedObject>> => {
    const taggedobjectsapi = new sdk.TaggedObjectsApi(apiConfig);
    return handleApiCall(() => taggedobjectsapi.putTaggedObjectV1(requestParameters));
}
export const putTenantConfigurationV1 = (requestParameters: workReassignmentTypes.WorkReassignmentApiPutTenantConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workReassignmentTypes.TenantConfigurationResponse>> => {
    const workreassignmentapi = new sdk.WorkReassignmentApi(apiConfig);
    return handleApiCall(() => workreassignmentapi.putTenantConfigurationV1(requestParameters));
}
export const putWorkflowV1 = (requestParameters: workflowsTypes.WorkflowsApiPutWorkflowV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workflowsTypes.Workflow>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.putWorkflowV1(requestParameters));
}
export const queryPasswordInfoV1 = (requestParameters: passwordManagementTypes.PasswordManagementApiQueryPasswordInfoV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordManagementTypes.PasswordInfo>> => {
    const passwordmanagementapi = new sdk.PasswordManagementApi(apiConfig);
    return handleApiCall(() => passwordmanagementapi.queryPasswordInfoV1(requestParameters));
}
export const reassignIdentityCertificationsV1 = (requestParameters: certificationsTypes.CertificationsApiReassignIdentityCertificationsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationsTypes.IdentityCertificationDto>> => {
    const certificationsapi = new sdk.CertificationsApi(apiConfig);
    return handleApiCall(() => certificationsapi.reassignIdentityCertificationsV1(requestParameters));
}
export const rejectAccessRequestV1 = (requestParameters: accessRequestApprovalsTypes.AccessRequestApprovalsApiRejectAccessRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const accessrequestapprovalsapi = new sdk.AccessRequestApprovalsApi(apiConfig);
    return handleApiCall(() => accessrequestapprovalsapi.rejectAccessRequestV1(requestParameters));
}
export const rejectApprovalInBulkV1 = (requestParameters: approvalsTypes.ApprovalsApiRejectApprovalInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.rejectApprovalInBulkV1(requestParameters));
}
export const rejectApprovalItemsInBulkV1 = (requestParameters: workItemsTypes.WorkItemsApiRejectApprovalItemsInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workItemsTypes.WorkItems>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.rejectApprovalItemsInBulkV1(requestParameters));
}
export const rejectApprovalItemV1 = (requestParameters: workItemsTypes.WorkItemsApiRejectApprovalItemV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workItemsTypes.WorkItems>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.rejectApprovalItemV1(requestParameters));
}
export const rejectApprovalV1 = (requestParameters: approvalsTypes.ApprovalsApiRejectApprovalV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.rejectApprovalV1(requestParameters));
}
export const rejectNonEmployeeRequestV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiRejectNonEmployeeRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeApprovalItem>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.rejectNonEmployeeRequestV1(requestParameters));
}
export const resetIdentityV1 = (requestParameters: identitiesTypes.IdentitiesApiResetIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.resetIdentityV1(requestParameters));
}
export const resetSourceEntitlementsV1 = (requestParameters: entitlementsTypes.EntitlementsApiResetSourceEntitlementsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<entitlementsTypes.EntitlementSourceResetBaseReferenceDto>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.resetSourceEntitlementsV1(requestParameters));
}
export const searchAdvancedSearchbyIDNerm = (requestParameters: sdk.AdvancedSearchNERMApiSearchAdvancedSearchbyIDRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SearchAdvancedSearch200ResponseNERM>> => {
    const advancedsearchnermapi = new sdk.AdvancedSearchNERMApi(apiConfig);
    return handleApiCall(() => advancedsearchnermapi.searchAdvancedSearchbyID(requestParameters));
}
export const searchAdvancedSearchNerm = (requestParameters: sdk.AdvancedSearchNERMApiSearchAdvancedSearchRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SearchAdvancedSearch200ResponseNERM>> => {
    const advancedsearchnermapi = new sdk.AdvancedSearchNERMApi(apiConfig);
    return handleApiCall(() => advancedsearchnermapi.searchAdvancedSearch(requestParameters));
}
export const searchAggregateV1 = (requestParameters: searchTypes.SearchApiSearchAggregateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<searchTypes.AggregationResult>> => {
    const searchapi = new sdk.SearchApi(apiConfig);
    return handleApiCall(() => searchapi.searchAggregateV1(requestParameters));
}
export const searchCountV1 = (requestParameters: searchTypes.SearchApiSearchCountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const searchapi = new sdk.SearchApi(apiConfig);
    return handleApiCall(() => searchapi.searchCountV1(requestParameters));
}
export const searchFormDefinitionsByTenantV1 = (requestParameters: customFormsTypes.CustomFormsApiSearchFormDefinitionsByTenantV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.ListFormDefinitionsByTenantResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.searchFormDefinitionsByTenantV1(requestParameters));
}
export const searchFormElementDataByElementIDV1 = (requestParameters: customFormsTypes.CustomFormsApiSearchFormElementDataByElementIDV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.ListFormElementDataByElementIDResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.searchFormElementDataByElementIDV1(requestParameters));
}
export const searchFormInstancesByTenantV1 = (requestParameters: customFormsTypes.CustomFormsApiSearchFormInstancesByTenantV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<customFormsTypes.ListFormInstancesByTenantResponse>>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.searchFormInstancesByTenantV1(requestParameters));
}
export const searchGetV1 = (requestParameters: searchTypes.SearchApiSearchGetV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const searchapi = new sdk.SearchApi(apiConfig);
    return handleApiCall(() => searchapi.searchGetV1(requestParameters));
}
export const searchNerm = (requestParameters: sdk.AuditsNERMApiSearchRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.Search200ResponseNERM>> => {
    const auditsnermapi = new sdk.AuditsNERMApi(apiConfig);
    return handleApiCall(() => auditsnermapi.search(requestParameters));
}
export const searchParametersV1 = (requestParameters: parameterStorageTypes.ParameterStorageApiSearchParametersV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<parameterStorageTypes.ParameterStorageParameter>>> => {
    const parameterstorageapi = new sdk.ParameterStorageApi(apiConfig);
    return handleApiCall(() => parameterstorageapi.searchParametersV1(requestParameters));
}
export const searchPostV1 = (requestParameters: searchTypes.SearchApiSearchPostV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<any>>> => {
    const searchapi = new sdk.SearchApi(apiConfig);
    return handleApiCall(() => searchapi.searchPostV1(requestParameters));
}
export const searchPreDefinedSelectOptionsV1 = (apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.ListPredefinedSelectOptionsResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.searchPreDefinedSelectOptionsV1());
}
export const searchResourceObjectsV1 = (requestParameters: sourcesTypes.SourcesApiSearchResourceObjectsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.ResourceObjectsResponse>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.searchResourceObjectsV1(requestParameters));
}
export const searchRolesByFilterV1 = (requestParameters: rolesTypes.RolesApiSearchRolesByFilterV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<rolesTypes.Role>>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.searchRolesByFilterV1(requestParameters));
}
export const sendClassifyMachineAccountFromSourceV1 = (requestParameters: classifySourceTypes.ClassifySourceApiSendClassifyMachineAccountFromSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<classifySourceTypes.SendClassifyMachineAccountFromSourceV1200Response>> => {
    const classifysourceapi = new sdk.ClassifySourceApi(apiConfig);
    return handleApiCall(() => classifysourceapi.sendClassifyMachineAccountFromSourceV1(requestParameters));
}
export const sendClassifyMachineAccountV1 = (requestParameters: machineAccountClassifyTypes.MachineAccountClassifyApiSendClassifyMachineAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountClassifyTypes.SendClassifyMachineAccountV1200Response>> => {
    const machineaccountclassifyapi = new sdk.MachineAccountClassifyApi(apiConfig);
    return handleApiCall(() => machineaccountclassifyapi.sendClassifyMachineAccountV1(requestParameters));
}
export const sendDeclassifyMachineAccountFromSourceV1 = (requestParameters: declassifySourceTypes.DeclassifySourceApiSendDeclassifyMachineAccountFromSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const declassifysourceapi = new sdk.DeclassifySourceApi(apiConfig);
    return handleApiCall(() => declassifysourceapi.sendDeclassifyMachineAccountFromSourceV1(requestParameters));
}
export const sendIdentityVerificationAccountTokenV1 = (requestParameters: identitiesTypes.IdentitiesApiSendIdentityVerificationAccountTokenV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.sendIdentityVerificationAccountTokenV1(requestParameters));
}
export const sendManualDiscoverApplicationsCsvTemplateV1 = (requestParameters: applicationDiscoveryTypes.ApplicationDiscoveryApiSendManualDiscoverApplicationsCsvTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const applicationdiscoveryapi = new sdk.ApplicationDiscoveryApi(apiConfig);
    return handleApiCall(() => applicationdiscoveryapi.sendManualDiscoverApplicationsCsvTemplateV1(requestParameters));
}
export const sendStreamVerificationV1 = (requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiSendStreamVerificationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const sharedsignalsframeworkssfapi = new sdk.SharedSignalsFrameworkSSFApi(apiConfig);
    return handleApiCall(() => sharedsignalsframeworkssfapi.sendStreamVerificationV1(requestParameters));
}
export const sendTestNotificationV1 = (requestParameters: notificationsTypes.NotificationsApiSendTestNotificationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.sendTestNotificationV1(requestParameters));
}
export const setAccessRequestConfigV1 = (requestParameters: accessRequestsTypes.AccessRequestsApiSetAccessRequestConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessRequestsTypes.AccessRequestConfig>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.setAccessRequestConfigV1(requestParameters));
}
export const setAccessRequestConfigV2 = (requestParameters: accessRequestsTypes.AccessRequestsApiSetAccessRequestConfigV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessRequestsTypes.AccessRequestConfig2>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.setAccessRequestConfigV2(requestParameters));
}
export const setAccessRequestRecommendationsConfigV1 = (requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiSetAccessRequestRecommendationsConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiAccessRequestRecommendationsTypes.AccessRequestRecommendationConfigDto>> => {
    const iaiaccessrequestrecommendationsapi = new sdk.IAIAccessRequestRecommendationsApi(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsapi.setAccessRequestRecommendationsConfigV1(requestParameters));
}
export const setBrandingItemV1 = (requestParameters: brandingTypes.BrandingApiSetBrandingItemV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<brandingTypes.BrandingItem>> => {
    const brandingapi = new sdk.BrandingApi(apiConfig);
    return handleApiCall(() => brandingapi.setBrandingItemV1(requestParameters));
}
export const setCampaignReportsConfigV1 = (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiSetCampaignReportsConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignsTypes.CampaignReportsConfig>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.setCampaignReportsConfigV1(requestParameters));
}
export const setCampaignTemplateScheduleV1 = (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiSetCampaignTemplateScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.setCampaignTemplateScheduleV1(requestParameters));
}
export const setIconV1 = (requestParameters: iconsTypes.IconsApiSetIconV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iconsTypes.SetIconV1200Response>> => {
    const iconsapi = new sdk.IconsApi(apiConfig);
    return handleApiCall(() => iconsapi.setIconV1(requestParameters));
}
export const setLifecycleStateV1 = (requestParameters: lifecycleStatesTypes.LifecycleStatesApiSetLifecycleStateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<lifecycleStatesTypes.SetLifecycleStateV1200Response>> => {
    const lifecyclestatesapi = new sdk.LifecycleStatesApi(apiConfig);
    return handleApiCall(() => lifecyclestatesapi.setLifecycleStateV1(requestParameters));
}
export const setMachineAccountMappingsV1 = (requestParameters: machineAccountMappingsTypes.MachineAccountMappingsApiSetMachineAccountMappingsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineAccountMappingsTypes.AttributeMappings>>> => {
    const machineaccountmappingsapi = new sdk.MachineAccountMappingsApi(apiConfig);
    return handleApiCall(() => machineaccountmappingsapi.setMachineAccountMappingsV1(requestParameters));
}
export const setMachineClassificationConfigV1 = (requestParameters: machineClassificationConfigTypes.MachineClassificationConfigApiSetMachineClassificationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineClassificationConfigTypes.MachineClassificationConfig>> => {
    const machineclassificationconfigapi = new sdk.MachineClassificationConfigApi(apiConfig);
    return handleApiCall(() => machineclassificationconfigapi.setMachineClassificationConfigV1(requestParameters));
}
export const setMFADuoConfigV1 = (requestParameters: mfaConfigurationTypes.MFAConfigurationApiSetMFADuoConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<mfaConfigurationTypes.MfaDuoConfig>> => {
    const mfaconfigurationapi = new sdk.MFAConfigurationApi(apiConfig);
    return handleApiCall(() => mfaconfigurationapi.setMFADuoConfigV1(requestParameters));
}
export const setMFAKBAConfigV1 = (requestParameters: mfaConfigurationTypes.MFAConfigurationApiSetMFAKBAConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<mfaConfigurationTypes.KbaAnswerResponseItem>>> => {
    const mfaconfigurationapi = new sdk.MFAConfigurationApi(apiConfig);
    return handleApiCall(() => mfaconfigurationapi.setMFAKBAConfigV1(requestParameters));
}
export const setMFAOktaConfigV1 = (requestParameters: mfaConfigurationTypes.MFAConfigurationApiSetMFAOktaConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<mfaConfigurationTypes.MfaOktaConfig>> => {
    const mfaconfigurationapi = new sdk.MFAConfigurationApi(apiConfig);
    return handleApiCall(() => mfaconfigurationapi.setMFAOktaConfigV1(requestParameters));
}
export const setPasswordPolicyV1 = (requestParameters: passwordPoliciesTypes.PasswordPoliciesApiSetPasswordPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordPoliciesTypes.PasswordPolicyV3Dto>> => {
    const passwordpoliciesapi = new sdk.PasswordPoliciesApi(apiConfig);
    return handleApiCall(() => passwordpoliciesapi.setPasswordPolicyV1(requestParameters));
}
export const setPasswordV1 = (requestParameters: passwordManagementTypes.PasswordManagementApiSetPasswordV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordManagementTypes.PasswordChangeResponse>> => {
    const passwordmanagementapi = new sdk.PasswordManagementApi(apiConfig);
    return handleApiCall(() => passwordmanagementapi.setPasswordV1(requestParameters));
}
export const setRolePropagationConfigV1 = (requestParameters: rolePropagationTypes.RolePropagationApiSetRolePropagationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<rolePropagationTypes.Rolepropagationconfigresponse>> => {
    const rolepropagationapi = new sdk.RolePropagationApi(apiConfig);
    return handleApiCall(() => rolepropagationapi.setRolePropagationConfigV1(requestParameters));
}
export const setStreamConfigurationV1 = (requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiSetStreamConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sharedSignalsFrameworkSsfTypes.UpdateStreamConfigResponse>> => {
    const sharedsignalsframeworkssfapi = new sdk.SharedSignalsFrameworkSSFApi(apiConfig);
    return handleApiCall(() => sharedsignalsframeworkssfapi.setStreamConfigurationV1(requestParameters));
}
export const setTagsToManyObjectsV1 = (requestParameters: taggedObjectsTypes.TaggedObjectsApiSetTagsToManyObjectsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<taggedObjectsTypes.BulkTaggedObjectResponse>>> => {
    const taggedobjectsapi = new sdk.TaggedObjectsApi(apiConfig);
    return handleApiCall(() => taggedobjectsapi.setTagsToManyObjectsV1(requestParameters));
}
export const setTagToObjectV1 = (requestParameters: taggedObjectsTypes.TaggedObjectsApiSetTagToObjectV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const taggedobjectsapi = new sdk.TaggedObjectsApi(apiConfig);
    return handleApiCall(() => taggedobjectsapi.setTagToObjectV1(requestParameters));
}
export const setTenantUiMetadataV1 = (requestParameters: uiMetadataTypes.UIMetadataApiSetTenantUiMetadataV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<uiMetadataTypes.TenantUiMetadataItemResponse>> => {
    const uimetadataapi = new sdk.UIMetadataApi(apiConfig);
    return handleApiCall(() => uimetadataapi.setTenantUiMetadataV1(requestParameters));
}
export const showPreviewDataSourceV1 = (requestParameters: customFormsTypes.CustomFormsApiShowPreviewDataSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.PreviewDataSourceResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.showPreviewDataSourceV1(requestParameters));
}
export const showUserLevelCountsV1 = (requestParameters: customUserLevelsTypes.CustomUserLevelsApiShowUserLevelCountsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<customUserLevelsTypes.AuthUserLevelsIdentityCount>>> => {
    const customuserlevelsapi = new sdk.CustomUserLevelsApi(apiConfig);
    return handleApiCall(() => customuserlevelsapi.showUserLevelCountsV1(requestParameters));
}
export const signOffIdentityCertificationV1 = (requestParameters: certificationsTypes.CertificationsApiSignOffIdentityCertificationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationsTypes.IdentityCertificationDto>> => {
    const certificationsapi = new sdk.CertificationsApi(apiConfig);
    return handleApiCall(() => certificationsapi.signOffIdentityCertificationV1(requestParameters));
}
export const startActivateWorkflowV1 = (requestParameters: jitActivationsTypes.JITActivationsApiStartActivateWorkflowV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<jitActivationsTypes.JitActivationActivateResponse>> => {
    const jitactivationsapi = new sdk.JITActivationsApi(apiConfig);
    return handleApiCall(() => jitactivationsapi.startActivateWorkflowV1(requestParameters));
}
export const startApplicationDiscoveryV1 = (requestParameters: applicationDiscoveryTypes.ApplicationDiscoveryApiStartApplicationDiscoveryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<applicationDiscoveryTypes.ApplicationDiscoveryResponse>> => {
    const applicationdiscoveryapi = new sdk.ApplicationDiscoveryApi(apiConfig);
    return handleApiCall(() => applicationdiscoveryapi.startApplicationDiscoveryV1(requestParameters));
}
export const startCampaignRemediationScanV1 = (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiStartCampaignRemediationScanV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.startCampaignRemediationScanV1(requestParameters));
}
export const startCampaignReportV1 = (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiStartCampaignReportV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.startCampaignReportV1(requestParameters));
}
export const startCampaignV1 = (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiStartCampaignV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.startCampaignV1(requestParameters));
}
export const startDeactivateWorkflowV1 = (requestParameters: jitActivationsTypes.JITActivationsApiStartDeactivateWorkflowV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<jitActivationsTypes.JitActivationDeactivateResponse>> => {
    const jitactivationsapi = new sdk.JITActivationsApi(apiConfig);
    return handleApiCall(() => jitactivationsapi.startDeactivateWorkflowV1(requestParameters));
}
export const startEvaluateSodPolicyV1 = (requestParameters: sodPoliciesTypes.SODPoliciesApiStartEvaluateSodPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.ReportResultReference>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.startEvaluateSodPolicyV1(requestParameters));
}
export const startExtendWorkflowV1 = (requestParameters: jitActivationsTypes.JITActivationsApiStartExtendWorkflowV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<jitActivationsTypes.JitActivationExtendResponse>> => {
    const jitactivationsapi = new sdk.JITActivationsApi(apiConfig);
    return handleApiCall(() => jitactivationsapi.startExtendWorkflowV1(requestParameters));
}
export const startGenerateCampaignTemplateV1 = (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiStartGenerateCampaignTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignsTypes.CampaignReference>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.startGenerateCampaignTemplateV1(requestParameters));
}
export const startIdentitiesInviteV1 = (requestParameters: identitiesTypes.IdentitiesApiStartIdentitiesInviteV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identitiesTypes.TaskStatus>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.startIdentitiesInviteV1(requestParameters));
}
export const startIdentityProcessingV1 = (requestParameters: identitiesTypes.IdentitiesApiStartIdentityProcessingV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identitiesTypes.TaskResultResponse>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.startIdentityProcessingV1(requestParameters));
}
export const startLauncherV1 = (requestParameters: launchersTypes.LaunchersApiStartLauncherV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<launchersTypes.StartLauncherV1200Response>> => {
    const launchersapi = new sdk.LaunchersApi(apiConfig);
    return handleApiCall(() => launchersapi.startLauncherV1(requestParameters));
}
export const startMachineIdentityAggregationV1 = (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiStartMachineIdentityAggregationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineIdentitiesTypes.MachineIdentityAggregationResponse>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.startMachineIdentityAggregationV1(requestParameters));
}
export const startPredictSodViolationsV1 = (requestParameters: sodViolationsTypes.SODViolationsApiStartPredictSodViolationsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodViolationsTypes.ViolationPrediction>> => {
    const sodviolationsapi = new sdk.SODViolationsApi(apiConfig);
    return handleApiCall(() => sodviolationsapi.startPredictSodViolationsV1(requestParameters));
}
export const startReportV1 = (requestParameters: reportsDataExtractionTypes.ReportsDataExtractionApiStartReportV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<reportsDataExtractionTypes.TaskResultDetails>> => {
    const reportsdataextractionapi = new sdk.ReportsDataExtractionApi(apiConfig);
    return handleApiCall(() => reportsdataextractionapi.startReportV1(requestParameters));
}
export const startRolePropagationV1 = (requestParameters: rolePropagationTypes.RolePropagationApiStartRolePropagationV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<rolePropagationTypes.Rolepropagationresponse>> => {
    const rolepropagationapi = new sdk.RolePropagationApi(apiConfig);
    return handleApiCall(() => rolepropagationapi.startRolePropagationV1(requestParameters));
}
export const startSodAllPoliciesForOrgV1 = (requestParameters: sodPoliciesTypes.SODPoliciesApiStartSodAllPoliciesForOrgV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.ReportResultReference>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.startSodAllPoliciesForOrgV1(requestParameters));
}
export const startSodPolicyV1 = (requestParameters: sodPoliciesTypes.SODPoliciesApiStartSodPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.ReportResultReference>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.startSodPolicyV1(requestParameters));
}
export const startTaskRerunV1 = (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiStartTaskRerunV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.startTaskRerunV1(requestParameters));
}
export const startTestTriggerInvocationV1 = (requestParameters: triggersTypes.TriggersApiStartTestTriggerInvocationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<triggersTypes.Invocation>>> => {
    const triggersapi = new sdk.TriggersApi(apiConfig);
    return handleApiCall(() => triggersapi.startTestTriggerInvocationV1(requestParameters));
}
export const startViolationCheckV1 = (requestParameters: sodViolationsTypes.SODViolationsApiStartViolationCheckV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodViolationsTypes.SodViolationCheck>> => {
    const sodviolationsapi = new sdk.SODViolationsApi(apiConfig);
    return handleApiCall(() => sodviolationsapi.startViolationCheckV1(requestParameters));
}
export const submitAccountSelectionV1 = (requestParameters: workItemsTypes.WorkItemsApiSubmitAccountSelectionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workItemsTypes.WorkItems>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.submitAccountSelectionV1(requestParameters));
}
export const submitAdvancedSearchNerm = (requestParameters: sdk.AdvancedSearchNERMApiSubmitAdvancedSearchRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitAdvancedSearch200ResponseNERM>> => {
    const advancedsearchnermapi = new sdk.AdvancedSearchNERMApi(apiConfig);
    return handleApiCall(() => advancedsearchnermapi.submitAdvancedSearch(requestParameters));
}
export const submitAttributeOptionNerm = (requestParameters: sdk.AttributeOptionsNERMApiSubmitAttributeOptionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitAttributeOption200ResponseNERM>> => {
    const attributeoptionsnermapi = new sdk.AttributeOptionsNERMApi(apiConfig);
    return handleApiCall(() => attributeoptionsnermapi.submitAttributeOption(requestParameters));
}
export const submitAttributeOptionsNerm = (requestParameters: sdk.AttributeOptionsNERMApiSubmitAttributeOptionsRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitAttributeOptions200ResponseNERM>> => {
    const attributeoptionsnermapi = new sdk.AttributeOptionsNERMApi(apiConfig);
    return handleApiCall(() => attributeoptionsnermapi.submitAttributeOptions(requestParameters));
}
export const submitEntitlementRecommendationsAssignmentV1 = (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiSubmitEntitlementRecommendationsAssignmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<suggestedEntitlementDescriptionTypes.EntitlementRecommendationAssignResult>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.submitEntitlementRecommendationsAssignmentV1(requestParameters));
}
export const submitProfileAvatarNerm = (requestParameters: sdk.ProfilesNERMApiSubmitProfileAvatarRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.UrlNERM>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.submitProfileAvatar(requestParameters));
}
export const submitProfileNerm = (requestParameters: sdk.ProfilesNERMApiSubmitProfileRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetSingleSchemaMappedProfile200ResponseNERM>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.submitProfile(requestParameters));
}
export const submitProfileTypeNerm = (requestParameters: sdk.ProfileTypesNERMApiSubmitProfileTypeRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitProfileType200ResponseNERM>> => {
    const profiletypesnermapi = new sdk.ProfileTypesNERMApi(apiConfig);
    return handleApiCall(() => profiletypesnermapi.submitProfileType(requestParameters));
}
export const submitProfileUploadNerm = (requestParameters: sdk.ProfilesNERMApiSubmitProfileUploadRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.UrlNERM>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.submitProfileUpload(requestParameters));
}
export const submitReassignCertsAsyncV1 = (requestParameters: certificationsTypes.CertificationsApiSubmitReassignCertsAsyncV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationsTypes.CertificationTask>> => {
    const certificationsapi = new sdk.CertificationsApi(apiConfig);
    return handleApiCall(() => certificationsapi.submitReassignCertsAsyncV1(requestParameters));
}
export const submitReloadAccountV1 = (requestParameters: accountsTypes.AccountsApiSubmitReloadAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountsTypes.AccountsAsyncResult>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.submitReloadAccountV1(requestParameters));
}
export const submitRoleNerm = (requestParameters: sdk.RolesNERMApiSubmitRoleRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitRole200ResponseNERM>> => {
    const rolesnermapi = new sdk.RolesNERMApi(apiConfig);
    return handleApiCall(() => rolesnermapi.submitRole(requestParameters));
}
export const submitRoleProfileNerm = (requestParameters: sdk.RoleProfilesNERMApiSubmitRoleProfileRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitRoleProfile200ResponseNERM>> => {
    const roleprofilesnermapi = new sdk.RoleProfilesNERMApi(apiConfig);
    return handleApiCall(() => roleprofilesnermapi.submitRoleProfile(requestParameters));
}
export const submitRoleProfilesNerm = (requestParameters: sdk.RoleProfilesNERMApiSubmitRoleProfilesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitRoleProfiles200ResponseNERM>> => {
    const roleprofilesnermapi = new sdk.RoleProfilesNERMApi(apiConfig);
    return handleApiCall(() => roleprofilesnermapi.submitRoleProfiles(requestParameters));
}
export const submitRolesNerm = (requestParameters: sdk.RolesNERMApiSubmitRolesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitRoles200ResponseNERM>> => {
    const rolesnermapi = new sdk.RolesNERMApi(apiConfig);
    return handleApiCall(() => rolesnermapi.submitRoles(requestParameters));
}
export const submitSedApprovalV1 = (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiSubmitSedApprovalV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<suggestedEntitlementDescriptionTypes.SedApprovalStatus>>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.submitSedApprovalV1(requestParameters));
}
export const submitSedAssignmentV1 = (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiSubmitSedAssignmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<suggestedEntitlementDescriptionTypes.SedAssignmentResponse>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.submitSedAssignmentV1(requestParameters));
}
export const submitSedBatchRequestV1 = (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiSubmitSedBatchRequestV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<suggestedEntitlementDescriptionTypes.SedBatchResponse>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.submitSedBatchRequestV1(requestParameters));
}
export const submitUserAvatarNerm = (requestParameters: sdk.UsersNERMApiSubmitUserAvatarRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.UrlNERM>> => {
    const usersnermapi = new sdk.UsersNERMApi(apiConfig);
    return handleApiCall(() => usersnermapi.submitUserAvatar(requestParameters));
}
export const submitUserManagerNerm = (requestParameters: sdk.UserManagersNERMApiSubmitUserManagerRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserManager200ResponseNERM>> => {
    const usermanagersnermapi = new sdk.UserManagersNERMApi(apiConfig);
    return handleApiCall(() => usermanagersnermapi.submitUserManager(requestParameters));
}
export const submitUserManagersNerm = (requestParameters: sdk.UserManagersNERMApiSubmitUserManagersRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserManagers200ResponseNERM>> => {
    const usermanagersnermapi = new sdk.UserManagersNERMApi(apiConfig);
    return handleApiCall(() => usermanagersnermapi.submitUserManagers(requestParameters));
}
export const submitUserNerm = (requestParameters: sdk.UsersNERMApiSubmitUserRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUser200ResponseNERM>> => {
    const usersnermapi = new sdk.UsersNERMApi(apiConfig);
    return handleApiCall(() => usersnermapi.submitUser(requestParameters));
}
export const submitUserProfileNerm = (requestParameters: sdk.UserProfilesNERMApiSubmitUserProfileRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserProfile200ResponseNERM>> => {
    const userprofilesnermapi = new sdk.UserProfilesNERMApi(apiConfig);
    return handleApiCall(() => userprofilesnermapi.submitUserProfile(requestParameters));
}
export const submitUserRoleNerm = (requestParameters: sdk.UserRolesNERMApiSubmitUserRoleRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserRole200ResponseNERM>> => {
    const userrolesnermapi = new sdk.UserRolesNERMApi(apiConfig);
    return handleApiCall(() => userrolesnermapi.submitUserRole(requestParameters));
}
export const submitUserRolesNerm = (requestParameters: sdk.UserRolesNERMApiSubmitUserRolesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserRoles200ResponseNERM>> => {
    const userrolesnermapi = new sdk.UserRolesNERMApi(apiConfig);
    return handleApiCall(() => userrolesnermapi.submitUserRoles(requestParameters));
}
export const submitUsersNerm = (requestParameters: sdk.UsersNERMApiSubmitUsersRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUsers200ResponseNERM>> => {
    const usersnermapi = new sdk.UsersNERMApi(apiConfig);
    return handleApiCall(() => usersnermapi.submitUsers(requestParameters));
}
export const submitWorkflowSessionNerm = (requestParameters: sdk.WorkflowSessionsNERMApiSubmitWorkflowSessionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitWorkflowSession200ResponseNERM>> => {
    const workflowsessionsnermapi = new sdk.WorkflowSessionsNERMApi(apiConfig);
    return handleApiCall(() => workflowsessionsnermapi.submitWorkflowSession(requestParameters));
}
export const submitWorkflowSessionUploadNerm = (requestParameters: sdk.WorkflowSessionsNERMApiSubmitWorkflowSessionUploadRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.UrlNERM>> => {
    const workflowsessionsnermapi = new sdk.WorkflowSessionsNERMApi(apiConfig);
    return handleApiCall(() => workflowsessionsnermapi.submitWorkflowSessionUpload(requestParameters));
}
export const syncAttributesForSourceV1 = (requestParameters: sourcesTypes.SourcesApiSyncAttributesForSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.SourceSyncJob>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.syncAttributesForSourceV1(requestParameters));
}
export const synchronizeAttributesForIdentityV1 = (requestParameters: identitiesTypes.IdentitiesApiSynchronizeAttributesForIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identitiesTypes.IdentitySyncJob>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.synchronizeAttributesForIdentityV1(requestParameters));
}
export const syncIdentityProfileV1 = (requestParameters: identityProfilesTypes.IdentityProfilesApiSyncIdentityProfileV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const identityprofilesapi = new sdk.IdentityProfilesApi(apiConfig);
    return handleApiCall(() => identityprofilesapi.syncIdentityProfileV1(requestParameters));
}
export const testConnectionMultiHostSourcesV1 = (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiTestConnectionMultiHostSourcesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.testConnectionMultiHostSourcesV1(requestParameters));
}
export const testConnectorRuleV1 = (requestParameters: connectorRuleManagementTypes.ConnectorRuleManagementApiTestConnectorRuleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorRuleManagementTypes.ConnectorRuleValidationResponse>> => {
    const connectorrulemanagementapi = new sdk.ConnectorRuleManagementApi(apiConfig);
    return handleApiCall(() => connectorrulemanagementapi.testConnectorRuleV1(requestParameters));
}
export const testExternalExecuteWorkflowV1 = (requestParameters: workflowsTypes.WorkflowsApiTestExternalExecuteWorkflowV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workflowsTypes.TestExternalExecuteWorkflowV1200Response>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.testExternalExecuteWorkflowV1(requestParameters));
}
export const testMFAConfigV1 = (requestParameters: mfaConfigurationTypes.MFAConfigurationApiTestMFAConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<mfaConfigurationTypes.MfaConfigTestResponse>> => {
    const mfaconfigurationapi = new sdk.MFAConfigurationApi(apiConfig);
    return handleApiCall(() => mfaconfigurationapi.testMFAConfigV1(requestParameters));
}
export const testSourceConfigurationV1 = (requestParameters: sourcesTypes.SourcesApiTestSourceConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.StatusResponse>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.testSourceConfigurationV1(requestParameters));
}
export const testSourceConnectionMultihostV1 = (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiTestSourceConnectionMultihostV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<multiHostIntegrationTypes.TestSourceConnectionMultihostV1200Response>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.testSourceConnectionMultihostV1(requestParameters));
}
export const testSourceConnectionV1 = (requestParameters: sourcesTypes.SourcesApiTestSourceConnectionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.StatusResponse>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.testSourceConnectionV1(requestParameters));
}
export const testSubscriptionFilterV1 = (requestParameters: triggersTypes.TriggersApiTestSubscriptionFilterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<triggersTypes.ValidateFilterOutputDto>> => {
    const triggersapi = new sdk.TriggersApi(apiConfig);
    return handleApiCall(() => triggersapi.testSubscriptionFilterV1(requestParameters));
}
export const testWorkflowV1 = (requestParameters: workflowsTypes.WorkflowsApiTestWorkflowV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workflowsTypes.TestWorkflowV1200Response>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.testWorkflowV1(requestParameters));
}
export const unIgnoreIdentityOutliersV1 = (requestParameters: iaiOutliersTypes.IAIOutliersApiUnIgnoreIdentityOutliersV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const iaioutliersapi = new sdk.IAIOutliersApi(apiConfig);
    return handleApiCall(() => iaioutliersapi.unIgnoreIdentityOutliersV1(requestParameters));
}
export const unlockAccountV1 = (requestParameters: accountsTypes.AccountsApiUnlockAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountsTypes.AccountsAsyncResult>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.unlockAccountV1(requestParameters));
}
export const unsubscribeScheduledSearchV1 = (requestParameters: scheduledSearchTypes.ScheduledSearchApiUnsubscribeScheduledSearchV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const scheduledsearchapi = new sdk.ScheduledSearchApi(apiConfig);
    return handleApiCall(() => scheduledsearchapi.unsubscribeScheduledSearchV1(requestParameters));
}
export const updateAccessModelMetadataAttributeV1 = (requestParameters: accessModelMetadataTypes.AccessModelMetadataApiUpdateAccessModelMetadataAttributeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessModelMetadataTypes.AttributeDTO>> => {
    const accessmodelmetadataapi = new sdk.AccessModelMetadataApi(apiConfig);
    return handleApiCall(() => accessmodelmetadataapi.updateAccessModelMetadataAttributeV1(requestParameters));
}
export const updateAccessModelMetadataAttributeValueV1 = (requestParameters: accessModelMetadataTypes.AccessModelMetadataApiUpdateAccessModelMetadataAttributeValueV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessModelMetadataTypes.AttributeValueDTO>> => {
    const accessmodelmetadataapi = new sdk.AccessModelMetadataApi(apiConfig);
    return handleApiCall(() => accessmodelmetadataapi.updateAccessModelMetadataAttributeValueV1(requestParameters));
}
export const updateAccessModelMetadataByFilterV1 = (requestParameters: accessModelMetadataTypes.AccessModelMetadataApiUpdateAccessModelMetadataByFilterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessModelMetadataTypes.AccessModelMetadataBulkUpdateResponse>> => {
    const accessmodelmetadataapi = new sdk.AccessModelMetadataApi(apiConfig);
    return handleApiCall(() => accessmodelmetadataapi.updateAccessModelMetadataByFilterV1(requestParameters));
}
export const updateAccessModelMetadataByIdsV1 = (requestParameters: accessModelMetadataTypes.AccessModelMetadataApiUpdateAccessModelMetadataByIdsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessModelMetadataTypes.AccessModelMetadataBulkUpdateResponse>> => {
    const accessmodelmetadataapi = new sdk.AccessModelMetadataApi(apiConfig);
    return handleApiCall(() => accessmodelmetadataapi.updateAccessModelMetadataByIdsV1(requestParameters));
}
export const updateAccessModelMetadataByQueryV1 = (requestParameters: accessModelMetadataTypes.AccessModelMetadataApiUpdateAccessModelMetadataByQueryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessModelMetadataTypes.AccessModelMetadataBulkUpdateResponse>> => {
    const accessmodelmetadataapi = new sdk.AccessModelMetadataApi(apiConfig);
    return handleApiCall(() => accessmodelmetadataapi.updateAccessModelMetadataByQueryV1(requestParameters));
}
export const updateAccessProfilesInBulkV1 = (requestParameters: accessProfilesTypes.AccessProfilesApiUpdateAccessProfilesInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accessProfilesTypes.AccessProfileUpdateItem>>> => {
    const accessprofilesapi = new sdk.AccessProfilesApi(apiConfig);
    return handleApiCall(() => accessprofilesapi.updateAccessProfilesInBulkV1(requestParameters));
}
export const updateAccountDeletionApprovalConfigV1 = (requestParameters: sourcesTypes.SourcesApiUpdateAccountDeletionApprovalConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.AccountDeleteConfigDto>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.updateAccountDeletionApprovalConfigV1(requestParameters));
}
export const updateAccountV1 = (requestParameters: accountsTypes.AccountsApiUpdateAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.updateAccountV1(requestParameters));
}
export const updateApprovalsAttributesV1 = (requestParameters: approvalsTypes.ApprovalsApiUpdateApprovalsAttributesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<approvalsTypes.Approval2>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.updateApprovalsAttributesV1(requestParameters));
}
export const updateApprovalsCommentsV1 = (requestParameters: approvalsTypes.ApprovalsApiUpdateApprovalsCommentsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<approvalsTypes.Approval2>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.updateApprovalsCommentsV1(requestParameters));
}
export const updateApprovalsReassignV1 = (requestParameters: approvalsTypes.ApprovalsApiUpdateApprovalsReassignV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.updateApprovalsReassignV1(requestParameters));
}
export const updateAttributeByIdNerm = (requestParameters: sdk.AttributesNERMApiUpdateAttributeByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateAttribute201ResponseNERM>> => {
    const attributesnermapi = new sdk.AttributesNERMApi(apiConfig);
    return handleApiCall(() => attributesnermapi.updateAttributeById(requestParameters));
}
export const updateAttributeByUidNerm = (requestParameters: sdk.AttributesNERMApiUpdateAttributeByUidRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateAttribute201ResponseNERM>> => {
    const attributesnermapi = new sdk.AttributesNERMApi(apiConfig);
    return handleApiCall(() => attributesnermapi.updateAttributeByUid(requestParameters));
}
export const updateAttributeKeyAndValueToRoleV1 = (requestParameters: rolesTypes.RolesApiUpdateAttributeKeyAndValueToRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<rolesTypes.Role>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.updateAttributeKeyAndValueToRoleV1(requestParameters));
}
export const updateAutoWriteSettingsV1 = (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiUpdateAutoWriteSettingsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<suggestedEntitlementDescriptionTypes.AutoWriteSettingResponse>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.updateAutoWriteSettingsV1(requestParameters));
}
export const updateCampaignFilterV1 = (requestParameters: certificationCampaignFiltersTypes.CertificationCampaignFiltersApiUpdateCampaignFilterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignFiltersTypes.CampaignFilterDetails>> => {
    const certificationcampaignfiltersapi = new sdk.CertificationCampaignFiltersApi(apiConfig);
    return handleApiCall(() => certificationcampaignfiltersapi.updateCampaignFilterV1(requestParameters));
}
export const updateCampaignV1 = (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiUpdateCampaignV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignsTypes.SlimCampaign>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.updateCampaignV1(requestParameters));
}
export const updateCommonAccessStatusInBulkV1 = (requestParameters: iaiCommonAccessTypes.IAICommonAccessApiUpdateCommonAccessStatusInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const iaicommonaccessapi = new sdk.IAICommonAccessApi(apiConfig);
    return handleApiCall(() => iaicommonaccessapi.updateCommonAccessStatusInBulkV1(requestParameters));
}
export const updateConnectorV1 = (requestParameters: connectorsTypes.ConnectorsApiUpdateConnectorV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorsTypes.ConnectorDetail>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.updateConnectorV1(requestParameters));
}
export const updateEntitlementConnectionsBulkV1 = (requestParameters: entitlementConnectionsTypes.EntitlementConnectionsApiUpdateEntitlementConnectionsBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<entitlementConnectionsTypes.EntitlementConnectionBulkUpdateResultItem>>> => {
    const entitlementconnectionsapi = new sdk.EntitlementConnectionsApi(apiConfig);
    return handleApiCall(() => entitlementconnectionsapi.updateEntitlementConnectionsBulkV1(requestParameters));
}
export const updateEntitlementsInBulkV1 = (requestParameters: entitlementsTypes.EntitlementsApiUpdateEntitlementsInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.updateEntitlementsInBulkV1(requestParameters));
}
export const updateEntitlementsPotentialRoleV1 = (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiUpdateEntitlementsPotentialRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRoleMiningTypes.RoleMiningPotentialRole>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.updateEntitlementsPotentialRoleV1(requestParameters));
}
export const updateFormAttributeByIdNerm = (requestParameters: sdk.FormAttributesNERMApiUpdateFormAttributeByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetFormAttributes200ResponseNERM>> => {
    const formattributesnermapi = new sdk.FormAttributesNERMApi(apiConfig);
    return handleApiCall(() => formattributesnermapi.updateFormAttributeById(requestParameters));
}
export const updateFormAttributeByUidNerm = (requestParameters: sdk.FormAttributesNERMApiUpdateFormAttributeByUidRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetFormAttributes200ResponseNERM>> => {
    const formattributesnermapi = new sdk.FormAttributesNERMApi(apiConfig);
    return handleApiCall(() => formattributesnermapi.updateFormAttributeByUid(requestParameters));
}
export const updateFormByIdNerm = (requestParameters: sdk.FormsNERMApiUpdateFormByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateAttribute201ResponseNERM>> => {
    const formsnermapi = new sdk.FormsNERMApi(apiConfig);
    return handleApiCall(() => formsnermapi.updateFormById(requestParameters));
}
export const updateFormByUidNerm = (requestParameters: sdk.FormsNERMApiUpdateFormByUidRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateAttribute201ResponseNERM>> => {
    const formsnermapi = new sdk.FormsNERMApi(apiConfig);
    return handleApiCall(() => formsnermapi.updateFormByUid(requestParameters));
}
export const updateIdentityProfileV1 = (requestParameters: identityProfilesTypes.IdentityProfilesApiUpdateIdentityProfileV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityProfilesTypes.IdentityProfile>> => {
    const identityprofilesapi = new sdk.IdentityProfilesApi(apiConfig);
    return handleApiCall(() => identityprofilesapi.updateIdentityProfileV1(requestParameters));
}
export const updateLifecycleStatesV1 = (requestParameters: lifecycleStatesTypes.LifecycleStatesApiUpdateLifecycleStatesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<lifecycleStatesTypes.LifecycleState>> => {
    const lifecyclestatesapi = new sdk.LifecycleStatesApi(apiConfig);
    return handleApiCall(() => lifecyclestatesapi.updateLifecycleStatesV1(requestParameters));
}
export const updateMachineAccountDeletionApprovalConfigV1 = (requestParameters: sourcesTypes.SourcesApiUpdateMachineAccountDeletionApprovalConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.AccountDeleteConfigDto>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.updateMachineAccountDeletionApprovalConfigV1(requestParameters));
}
export const updateMachineAccountSubtypeApprovalConfigV1 = (requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiUpdateMachineAccountSubtypeApprovalConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountSubtypesTypes.MachineAccountSubtypeConfigDto>> => {
    const machineaccountsubtypesapi = new sdk.MachineAccountSubtypesApi(apiConfig);
    return handleApiCall(() => machineaccountsubtypesapi.updateMachineAccountSubtypeApprovalConfigV1(requestParameters));
}
export const updateMachineAccountV1 = (requestParameters: machineAccountsTypes.MachineAccountsApiUpdateMachineAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountsTypes.MachineAccount>> => {
    const machineaccountsapi = new sdk.MachineAccountsApi(apiConfig);
    return handleApiCall(() => machineaccountsapi.updateMachineAccountV1(requestParameters));
}
export const updateMachineIdentityV1 = (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiUpdateMachineIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineIdentitiesTypes.MachineIdentityResponse>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.updateMachineIdentityV1(requestParameters));
}
export const updateMachineIdentityV2 = (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiUpdateMachineIdentityV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineIdentitiesTypes.Machineidentityv2>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.updateMachineIdentityV2(requestParameters));
}
export const updateManagedClientV1 = (requestParameters: managedClientsTypes.ManagedClientsApiUpdateManagedClientV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClientsTypes.ManagedClient>> => {
    const managedclientsapi = new sdk.ManagedClientsApi(apiConfig);
    return handleApiCall(() => managedclientsapi.updateManagedClientV1(requestParameters));
}
export const updateManagedClusterTypeV1 = (requestParameters: managedClusterTypesTypes.ManagedClusterTypesApiUpdateManagedClusterTypeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClusterTypesTypes.ManagedClusterType>> => {
    const managedclustertypesapi = new sdk.ManagedClusterTypesApi(apiConfig);
    return handleApiCall(() => managedclustertypesapi.updateManagedClusterTypeV1(requestParameters));
}
export const updateManagedClusterV1 = (requestParameters: managedClustersTypes.ManagedClustersApiUpdateManagedClusterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClustersTypes.ManagedCluster>> => {
    const managedclustersapi = new sdk.ManagedClustersApi(apiConfig);
    return handleApiCall(() => managedclustersapi.updateManagedClusterV1(requestParameters));
}
export const updateMultiHostSourcesV1 = (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiUpdateMultiHostSourcesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.updateMultiHostSourcesV1(requestParameters));
}
export const updateNonEmployeeRecordV1 = (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiUpdateNonEmployeeRecordV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeRecord>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.updateNonEmployeeRecordV1(requestParameters));
}
export const updateObjectMappingsV1 = (requestParameters: configurationHubTypes.ConfigurationHubApiUpdateObjectMappingsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<configurationHubTypes.ObjectMappingBulkPatchResponse>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.updateObjectMappingsV1(requestParameters));
}
export const updatePageContentByIdNerm = (requestParameters: sdk.PageContentsNERMApiUpdatePageContentByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContents200ResponseNERM>> => {
    const pagecontentsnermapi = new sdk.PageContentsNERMApi(apiConfig);
    return handleApiCall(() => pagecontentsnermapi.updatePageContentById(requestParameters));
}
export const updatePageContentByUidNerm = (requestParameters: sdk.PageContentsNERMApiUpdatePageContentByUidRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContents200ResponseNERM>> => {
    const pagecontentsnermapi = new sdk.PageContentsNERMApi(apiConfig);
    return handleApiCall(() => pagecontentsnermapi.updatePageContentByUid(requestParameters));
}
export const updatePageContentTranslationByIdNerm = (requestParameters: sdk.PageContentTranslationsNERMApiUpdatePageContentTranslationByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContentTranslation200ResponseNERM>> => {
    const pagecontenttranslationsnermapi = new sdk.PageContentTranslationsNERMApi(apiConfig);
    return handleApiCall(() => pagecontenttranslationsnermapi.updatePageContentTranslationById(requestParameters));
}
export const updatePageContentTranslationByUidNerm = (requestParameters: sdk.PageContentTranslationsNERMApiUpdatePageContentTranslationByUidRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContentTranslation200ResponseNERM>> => {
    const pagecontenttranslationsnermapi = new sdk.PageContentTranslationsNERMApi(apiConfig);
    return handleApiCall(() => pagecontenttranslationsnermapi.updatePageContentTranslationByUid(requestParameters));
}
export const updatePageElementByIdNerm = (requestParameters: sdk.PageElementsNERMApiUpdatePageElementByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageElements200ResponseNERM>> => {
    const pageelementsnermapi = new sdk.PageElementsNERMApi(apiConfig);
    return handleApiCall(() => pageelementsnermapi.updatePageElementById(requestParameters));
}
export const updatePageElementByUidNerm = (requestParameters: sdk.PageElementsNERMApiUpdatePageElementByUidRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageElements200ResponseNERM>> => {
    const pageelementsnermapi = new sdk.PageElementsNERMApi(apiConfig);
    return handleApiCall(() => pageelementsnermapi.updatePageElementByUid(requestParameters));
}
export const updateParameterV1 = (requestParameters: parameterStorageTypes.ParameterStorageApiUpdateParameterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<parameterStorageTypes.ParameterStorageParameter>> => {
    const parameterstorageapi = new sdk.ParameterStorageApi(apiConfig);
    return handleApiCall(() => parameterstorageapi.updateParameterV1(requestParameters));
}
export const updatePasswordPolicyHoldersV1 = (requestParameters: sourcesTypes.SourcesApiUpdatePasswordPolicyHoldersV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<sourcesTypes.PasswordPolicyHoldersDtoInner>>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.updatePasswordPolicyHoldersV1(requestParameters));
}
export const updatePasswordSyncGroupV1 = (requestParameters: passwordSyncGroupsTypes.PasswordSyncGroupsApiUpdatePasswordSyncGroupV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordSyncGroupsTypes.PasswordSyncGroup>> => {
    const passwordsyncgroupsapi = new sdk.PasswordSyncGroupsApi(apiConfig);
    return handleApiCall(() => passwordsyncgroupsapi.updatePasswordSyncGroupV1(requestParameters));
}
export const updateProfileNerm = (requestParameters: sdk.IscAccountsNERMApiUpdateProfileRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetSingleSchemaMappedProfile200ResponseNERM>> => {
    const iscaccountsnermapi = new sdk.IscAccountsNERMApi(apiConfig);
    return handleApiCall(() => iscaccountsnermapi.updateProfile(requestParameters));
}
export const updateProvisioningPoliciesInBulkV1 = (requestParameters: sourcesTypes.SourcesApiUpdateProvisioningPoliciesInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<sourcesTypes.ProvisioningPolicyDto>>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.updateProvisioningPoliciesInBulkV1(requestParameters));
}
export const updateProvisioningPolicyV1 = (requestParameters: sourcesTypes.SourcesApiUpdateProvisioningPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.ProvisioningPolicyDto>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.updateProvisioningPolicyV1(requestParameters));
}
export const updateProvisioningPolicyV2 = (requestParameters: sourcesTypes.SourcesApiUpdateProvisioningPolicyV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.ProvisioningPolicyDtoV2>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.updateProvisioningPolicyV2(requestParameters));
}
export const updatePublicIdentityConfigV1 = (requestParameters: publicIdentitiesConfigTypes.PublicIdentitiesConfigApiUpdatePublicIdentityConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<publicIdentitiesConfigTypes.PublicIdentityConfig>> => {
    const publicidentitiesconfigapi = new sdk.PublicIdentitiesConfigApi(apiConfig);
    return handleApiCall(() => publicidentitiesconfigapi.updatePublicIdentityConfigV1(requestParameters));
}
export const updateRecommendationsConfigV1 = (requestParameters: iaiRecommendationsTypes.IAIRecommendationsApiUpdateRecommendationsConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRecommendationsTypes.RecommendationConfigDto>> => {
    const iairecommendationsapi = new sdk.IAIRecommendationsApi(apiConfig);
    return handleApiCall(() => iairecommendationsapi.updateRecommendationsConfigV1(requestParameters));
}
export const updateRolesMetadataByFilterV1 = (requestParameters: rolesTypes.RolesApiUpdateRolesMetadataByFilterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<rolesTypes.RoleBulkUpdateResponse>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.updateRolesMetadataByFilterV1(requestParameters));
}
export const updateRolesMetadataByIdsV1 = (requestParameters: rolesTypes.RolesApiUpdateRolesMetadataByIdsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<rolesTypes.RoleBulkUpdateResponse>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.updateRolesMetadataByIdsV1(requestParameters));
}
export const updateRolesMetadataByQueryV1 = (requestParameters: rolesTypes.RolesApiUpdateRolesMetadataByQueryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<rolesTypes.RoleBulkUpdateResponse>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.updateRolesMetadataByQueryV1(requestParameters));
}
export const updateScheduledActionV1 = (requestParameters: configurationHubTypes.ConfigurationHubApiUpdateScheduledActionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<configurationHubTypes.ScheduledActionResponse>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.updateScheduledActionV1(requestParameters));
}
export const updateScheduledSearchV1 = (requestParameters: scheduledSearchTypes.ScheduledSearchApiUpdateScheduledSearchV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<scheduledSearchTypes.ScheduledSearch>> => {
    const scheduledsearchapi = new sdk.ScheduledSearchApi(apiConfig);
    return handleApiCall(() => scheduledsearchapi.updateScheduledSearchV1(requestParameters));
}
export const updateSourceAppsInBulkV1 = (requestParameters: appsTypes.AppsApiUpdateSourceAppsInBulkV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.updateSourceAppsInBulkV1(requestParameters));
}
export const updateSourceEntitlementRequestConfigV1 = (requestParameters: sourcesTypes.SourcesApiUpdateSourceEntitlementRequestConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.SourceEntitlementRequestConfig>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.updateSourceEntitlementRequestConfigV1(requestParameters));
}
export const updateSourceScheduleV1 = (requestParameters: sourcesTypes.SourcesApiUpdateSourceScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Schedule3>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.updateSourceScheduleV1(requestParameters));
}
export const updateSourceSchemaV1 = (requestParameters: sourcesTypes.SourcesApiUpdateSourceSchemaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Schema>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.updateSourceSchemaV1(requestParameters));
}
export const updateSourceV1 = (requestParameters: sourcesTypes.SourcesApiUpdateSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Source>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.updateSourceV1(requestParameters));
}
export const updateStatusCheckDetailsV1 = (requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiUpdateStatusCheckDetailsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<serviceDeskIntegrationTypes.QueuedCheckConfigDetails>> => {
    const servicedeskintegrationapi = new sdk.ServiceDeskIntegrationApi(apiConfig);
    return handleApiCall(() => servicedeskintegrationapi.updateStatusCheckDetailsV1(requestParameters));
}
export const updateStreamConfigurationV1 = (requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiUpdateStreamConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sharedSignalsFrameworkSsfTypes.UpdateStreamConfigResponse>> => {
    const sharedsignalsframeworkssfapi = new sdk.SharedSignalsFrameworkSSFApi(apiConfig);
    return handleApiCall(() => sharedsignalsframeworkssfapi.updateStreamConfigurationV1(requestParameters));
}
export const updateStreamStatusV1 = (requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiUpdateStreamStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sharedSignalsFrameworkSsfTypes.StreamStatusResponse>> => {
    const sharedsignalsframeworkssfapi = new sdk.SharedSignalsFrameworkSSFApi(apiConfig);
    return handleApiCall(() => sharedsignalsframeworkssfapi.updateStreamStatusV1(requestParameters));
}
export const updateSubscriptionV1 = (requestParameters: triggersTypes.TriggersApiUpdateSubscriptionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<triggersTypes.Subscription>> => {
    const triggersapi = new sdk.TriggersApi(apiConfig);
    return handleApiCall(() => triggersapi.updateSubscriptionV1(requestParameters));
}
export const updateTaskStatusV1 = (requestParameters: taskManagementTypes.TaskManagementApiUpdateTaskStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<taskManagementTypes.TaskStatus>> => {
    const taskmanagementapi = new sdk.TaskManagementApi(apiConfig);
    return handleApiCall(() => taskmanagementapi.updateTaskStatusV1(requestParameters));
}
export const updateTransformV1 = (requestParameters: transformsTypes.TransformsApiUpdateTransformV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<transformsTypes.TransformRead>> => {
    const transformsapi = new sdk.TransformsApi(apiConfig);
    return handleApiCall(() => transformsapi.updateTransformV1(requestParameters));
}
export const updateUserLevelV1 = (requestParameters: customUserLevelsTypes.CustomUserLevelsApiUpdateUserLevelV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customUserLevelsTypes.UserLevelSummaryDTO>> => {
    const customuserlevelsapi = new sdk.CustomUserLevelsApi(apiConfig);
    return handleApiCall(() => customuserlevelsapi.updateUserLevelV1(requestParameters));
}
export const updateV1 = (requestParameters: managedClustersTypes.ManagedClustersApiUpdateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClustersTypes.ClusterManualUpgrade>> => {
    const managedclustersapi = new sdk.ManagedClustersApi(apiConfig);
    return handleApiCall(() => managedclustersapi.updateV1(requestParameters));
}
export const updateWorkgroupMembersV1 = (requestParameters: governanceGroupsTypes.GovernanceGroupsApiUpdateWorkgroupMembersV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<governanceGroupsTypes.WorkgroupMemberAddItem>>> => {
    const governancegroupsapi = new sdk.GovernanceGroupsApi(apiConfig);
    return handleApiCall(() => governancegroupsapi.updateWorkgroupMembersV1(requestParameters));
}
// --- GENERATED SDK METHODS END ---

export const genericGet = (requestParameters: sdk.DefaultApiGenericGetRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const axiosInstance = new sdk.DefaultApi(apiConfig);
    return handleApiCall(() => axiosInstance.genericGet(requestParameters));
}

export const genericPost = (requestParameters: sdk.DefaultApiGenericPostRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const axiosInstance = new sdk.DefaultApi(apiConfig);
    return handleApiCall(() => axiosInstance.genericPost(requestParameters));
}

export const genericPut = (requestParameters: sdk.DefaultApiGenericPutRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const axiosInstance = new sdk.DefaultApi(apiConfig);
    return handleApiCall(() => axiosInstance.genericPut(requestParameters));
}

export const genericPatch = (requestParameters: sdk.DefaultApiGenericPatchRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const axiosInstance = new sdk.DefaultApi(apiConfig);
    return handleApiCall(() => axiosInstance.genericPatch(requestParameters));
}

export const genericDelete = (requestParameters: sdk.DefaultApiGenericDeleteRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const axiosInstance = new sdk.DefaultApi(apiConfig);
    return handleApiCall(() => axiosInstance.genericDelete(requestParameters));
}

// =========================================================================
// Patches applied by mustache_templates/postscript.js — do not edit manually.
// Re-run `npm run build:sdk` to regenerate with these patches applied.
// =========================================================================

// Override: replace the generated stub with a fetch-based implementation
// that works correctly in Electron's main process (avoids Axios/FormData
// boundary issues and handles IPC-cloned File objects).
createUploadedConfigurationV1 = async (
    requestParameters: configurationHubTypes.ConfigurationHubApiCreateUploadedConfigurationV1Request,
    apiConfig: sdk.Configuration
): Promise<ApiResponse<configurationHubTypes.BackupResponse>> => {
    // Uses fetch() directly to avoid Axios multipart boundary issues in Node.js
    // and IPC Blob serialisation limitations.  Mirrors the restore.mjs approach.
    console.log('[createUploadedConfiguration] Starting upload:', {
        name: requestParameters.name,
        fileName: (requestParameters.data as any)?.name,
    });
    try {
        const anyConfig = apiConfig as any;
        const basePath: string = anyConfig.baseurl || anyConfig.basePath || '';
        console.log('[createUploadedConfiguration] basePath:', basePath);
        console.log('[createUploadedConfiguration] apiConfig keys:',
            Object.keys(anyConfig).filter((k: string) => anyConfig[k] != null));

        let accessToken: string;
        if (anyConfig.accessToken) {
            console.log('[createUploadedConfiguration] Using existing accessToken');
            const raw = anyConfig.accessToken;
            accessToken = typeof raw === 'function' ? await raw() : await Promise.resolve(raw);
            console.log('[createUploadedConfiguration] accessToken resolved, length:', accessToken?.length);
        } else if (anyConfig.clientId && anyConfig.clientSecret && anyConfig.tokenUrl) {
            console.log('[createUploadedConfiguration] Fetching PAT token from:', anyConfig.tokenUrl);
            const tokenRes = await fetch(anyConfig.tokenUrl as string, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    grant_type: 'client_credentials',
                    client_id: anyConfig.clientId,
                    client_secret: anyConfig.clientSecret,
                }).toString(),
            });
            console.log('[createUploadedConfiguration] Token response status:', tokenRes.status);
            if (!tokenRes.ok) {
                const errBody = await tokenRes.text().catch(() => '');
                throw new Error(`Token request failed: HTTP ${tokenRes.status} ${errBody}`);
            }
            const tokenData = await tokenRes.json() as any;
            accessToken = tokenData.access_token;
            console.log('[createUploadedConfiguration] PAT token obtained, length:', accessToken?.length);
        } else {
            console.error('[createUploadedConfiguration] No usable credentials:', {
                hasAccessToken: !!anyConfig.accessToken,
                hasClientId: !!anyConfig.clientId,
                hasClientSecret: !!anyConfig.clientSecret,
                hasTokenUrl: !!anyConfig.tokenUrl,
            });
            throw new Error('No authentication credentials found in apiConfig');
        }

        // Accept either a real Blob/File or the plain proxy { content, name, type }
        // that the Angular renderer sends (File methods are stripped by IPC clone).
        const anyData = requestParameters.data as any;
        const fileName: string = anyData.name ?? 'upload.json';
        const fileType: string = anyData.type ?? 'application/json';
        let blob: Blob;
        if (typeof anyData.content === 'string') {
            blob = new Blob([anyData.content], { type: fileType });
        } else if (typeof anyData.arrayBuffer === 'function') {
            blob = new Blob([await anyData.arrayBuffer()], { type: fileType });
        } else {
            throw new Error('Cannot read file content: no .content string or .arrayBuffer() method');
        }

        const form = new FormData();
        form.append('data', blob, fileName);
        form.append('name', requestParameters.name);
        console.log('[createUploadedConfiguration] FormData built — file:', fileName,
            'size:', blob.size, 'bytes, POSTing to:',
            `${basePath}/configuration-hub/v1/backups/uploads`);

        const response = await fetch(`${basePath}/configuration-hub/v1/backups/uploads`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json',
                // No Content-Type — the runtime sets it with the multipart boundary
            },
            body: form,
        });

        console.log('[createUploadedConfiguration] Response status:', response.status, response.statusText);
        const responseText = await response.text();
        console.log('[createUploadedConfiguration] Response body:', responseText);

        let responseData: configurationHubTypes.BackupResponse;
        try { responseData = JSON.parse(responseText); }
        catch { responseData = {} as configurationHubTypes.BackupResponse; }

        return {
            data: responseData,
            status: response.status,
            statusText: response.statusText,
            headers: Object.fromEntries((response.headers as any).entries()),
        };
    } catch (error) {
        console.error('[createUploadedConfiguration] Error:', error);
        return generateErrorResponse(error);
    }
};
