import * as sdk from 'sailpoint-api-client';
import { AxiosResponse } from 'axios';
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
 * Produced by scripts/build-sailpoint-sdk.js from mustache_templates/web-sdk-wrapper.mustache.
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
  if (error instanceof Error) {
    return {
      data: [],
      status: 500,
      statusText: error.message,
      headers: {},
    };
  }
  return {
    data: [],
    status: 500,
    statusText: 'Unknown error occurred',
    headers: {},
  };
}

/**
 * Create SDK configuration using access token
 */
export function createSdkConfiguration(accessToken: string, basePath: string): sdk.Configuration {
  return new sdk.Configuration({
    accessToken: accessToken,
    baseurl: basePath
  });
}

/**
 * Object containing all SDK functions for web API calls
 */
const sdkFunctionsObject: { [key: string]: (params: any, config: sdk.Configuration) => Promise<ApiResponse<any>> } = {
// --- GENERATED SDK METHODS START ---
  addAccessRequestRecommendationsIgnoredItemV1: (requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiAddAccessRequestRecommendationsIgnoredItemV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiAccessRequestRecommendationsTypes.AccessRequestRecommendationActionItemResponseDto>> => {
    const iaiaccessrequestrecommendationsapi = new sdk.IAIAccessRequestRecommendationsApi(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsapi.addAccessRequestRecommendationsIgnoredItemV1(requestParameters));
  },
  addAccessRequestRecommendationsRequestedItemV1: (requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiAddAccessRequestRecommendationsRequestedItemV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiAccessRequestRecommendationsTypes.AccessRequestRecommendationActionItemResponseDto>> => {
    const iaiaccessrequestrecommendationsapi = new sdk.IAIAccessRequestRecommendationsApi(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsapi.addAccessRequestRecommendationsRequestedItemV1(requestParameters));
  },
  addAccessRequestRecommendationsViewedItemsV1: (requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiAddAccessRequestRecommendationsViewedItemsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiAccessRequestRecommendationsTypes.AccessRequestRecommendationActionItemResponseDto>>> => {
    const iaiaccessrequestrecommendationsapi = new sdk.IAIAccessRequestRecommendationsApi(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsapi.addAccessRequestRecommendationsViewedItemsV1(requestParameters));
  },
  addAccessRequestRecommendationsViewedItemV1: (requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiAddAccessRequestRecommendationsViewedItemV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiAccessRequestRecommendationsTypes.AccessRequestRecommendationActionItemResponseDto>> => {
    const iaiaccessrequestrecommendationsapi = new sdk.IAIAccessRequestRecommendationsApi(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsapi.addAccessRequestRecommendationsViewedItemV1(requestParameters));
  },
  approveAccessRequestV1: (requestParameters: accessRequestApprovalsTypes.AccessRequestApprovalsApiApproveAccessRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const accessrequestapprovalsapi = new sdk.AccessRequestApprovalsApi(apiConfig);
    return handleApiCall(() => accessrequestapprovalsapi.approveAccessRequestV1(requestParameters));
  },
  approveApprovalInBulkV1: (requestParameters: approvalsTypes.ApprovalsApiApproveApprovalInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.approveApprovalInBulkV1(requestParameters));
  },
  approveApprovalItemsInBulkV1: (requestParameters: workItemsTypes.WorkItemsApiApproveApprovalItemsInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workItemsTypes.WorkItems>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.approveApprovalItemsInBulkV1(requestParameters));
  },
  approveApprovalItemV1: (requestParameters: workItemsTypes.WorkItemsApiApproveApprovalItemV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workItemsTypes.WorkItems>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.approveApprovalItemV1(requestParameters));
  },
  approveApprovalV1: (requestParameters: approvalsTypes.ApprovalsApiApproveApprovalV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<approvalsTypes.Approval2>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.approveApprovalV1(requestParameters));
  },
  approveBulkAccessRequestV1: (requestParameters: accessRequestsTypes.AccessRequestsApiApproveBulkAccessRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.approveBulkAccessRequestV1(requestParameters));
  },
  approveBulkEntitlementRecommendationsV1: (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiApproveBulkEntitlementRecommendationsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<suggestedEntitlementDescriptionTypes.BulkApproveEntitlementRecommendationResult>>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.approveBulkEntitlementRecommendationsV1(requestParameters));
  },
  approveNonEmployeeRequestV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiApproveNonEmployeeRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeApprovalItem>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.approveNonEmployeeRequestV1(requestParameters));
  },
  cancelAccessRequestInBulkV1: (requestParameters: accessRequestsTypes.AccessRequestsApiCancelAccessRequestInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.cancelAccessRequestInBulkV1(requestParameters));
  },
  cancelAccessRequestV1: (requestParameters: accessRequestsTypes.AccessRequestsApiCancelAccessRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.cancelAccessRequestV1(requestParameters));
  },
  cancelApprovalByIdV1: (requestParameters: approvalsTypes.ApprovalsApiCancelApprovalByIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.cancelApprovalByIdV1(requestParameters));
  },
  cancelApprovalV1: (requestParameters: approvalsTypes.ApprovalsApiCancelApprovalV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.cancelApprovalV1(requestParameters));
  },
  cancelReportV1: (requestParameters: reportsDataExtractionTypes.ReportsDataExtractionApiCancelReportV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const reportsdataextractionapi = new sdk.ReportsDataExtractionApi(apiConfig);
    return handleApiCall(() => reportsdataextractionapi.cancelReportV1(requestParameters));
  },
  cancelRolePropagationV1: (requestParameters: rolePropagationTypes.RolePropagationApiCancelRolePropagationV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const rolepropagationapi = new sdk.RolePropagationApi(apiConfig);
    return handleApiCall(() => rolepropagationapi.cancelRolePropagationV1(requestParameters));
  },
  cancelTaskV1: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiCancelTaskV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.cancelTaskV1(requestParameters));
  },
  cancelWorkflowExecutionV1: (requestParameters: workflowsTypes.WorkflowsApiCancelWorkflowExecutionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.cancelWorkflowExecutionV1(requestParameters));
  },
  closeAccessRequestV1: (requestParameters: accessRequestsTypes.AccessRequestsApiCloseAccessRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.closeAccessRequestV1(requestParameters));
  },
  compareIdentitySnapshotsAccessTypeV1: (requestParameters: identityHistoryTypes.IdentityHistoryApiCompareIdentitySnapshotsAccessTypeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identityHistoryTypes.AccessItemDiff>>> => {
    const identityhistoryapi = new sdk.IdentityHistoryApi(apiConfig);
    return handleApiCall(() => identityhistoryapi.compareIdentitySnapshotsAccessTypeV1(requestParameters));
  },
  compareIdentitySnapshotsV1: (requestParameters: identityHistoryTypes.IdentityHistoryApiCompareIdentitySnapshotsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identityHistoryTypes.IdentityCompareResponse>>> => {
    const identityhistoryapi = new sdk.IdentityHistoryApi(apiConfig);
    return handleApiCall(() => identityhistoryapi.compareIdentitySnapshotsV1(requestParameters));
  },
  completeCampaignV1: (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiCompleteCampaignV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.completeCampaignV1(requestParameters));
  },
  completeTriggerInvocationV1: (requestParameters: triggersTypes.TriggersApiCompleteTriggerInvocationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const triggersapi = new sdk.TriggersApi(apiConfig);
    return handleApiCall(() => triggersapi.completeTriggerInvocationV1(requestParameters));
  },
  completeWorkItemV1: (requestParameters: workItemsTypes.WorkItemsApiCompleteWorkItemV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workItemsTypes.WorkItems>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.completeWorkItemV1(requestParameters));
  },
  createAccessModelMetadataAttributeV1: (requestParameters: accessModelMetadataTypes.AccessModelMetadataApiCreateAccessModelMetadataAttributeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessModelMetadataTypes.AttributeDTO>> => {
    const accessmodelmetadataapi = new sdk.AccessModelMetadataApi(apiConfig);
    return handleApiCall(() => accessmodelmetadataapi.createAccessModelMetadataAttributeV1(requestParameters));
  },
  createAccessModelMetadataAttributeValueV1: (requestParameters: accessModelMetadataTypes.AccessModelMetadataApiCreateAccessModelMetadataAttributeValueV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessModelMetadataTypes.AttributeValueDTO>> => {
    const accessmodelmetadataapi = new sdk.AccessModelMetadataApi(apiConfig);
    return handleApiCall(() => accessmodelmetadataapi.createAccessModelMetadataAttributeValueV1(requestParameters));
  },
  createAccessModelMetadataForEntitlementV1: (requestParameters: entitlementsTypes.EntitlementsApiCreateAccessModelMetadataForEntitlementV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<entitlementsTypes.Entitlement>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.createAccessModelMetadataForEntitlementV1(requestParameters));
  },
  createAccessProfileV1: (requestParameters: accessProfilesTypes.AccessProfilesApiCreateAccessProfileV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessProfilesTypes.AccessProfile>> => {
    const accessprofilesapi = new sdk.AccessProfilesApi(apiConfig);
    return handleApiCall(() => accessprofilesapi.createAccessProfileV1(requestParameters));
  },
  createAccessRequestV1: (requestParameters: accessRequestsTypes.AccessRequestsApiCreateAccessRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessRequestsTypes.AccessRequestResponse>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.createAccessRequestV1(requestParameters));
  },
  createAccountV1: (requestParameters: accountsTypes.AccountsApiCreateAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountsTypes.AccountsAsyncResult>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.createAccountV1(requestParameters));
  },
  createApplicationV1: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiCreateApplicationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.createApplicationV1(requestParameters));
  },
  createApprovalActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateApprovalActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createApprovalAction(requestParameters));
  },
  createAskSecurityQuestionActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateAskSecurityQuestionActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createAskSecurityQuestionAction(requestParameters));
  },
  createAttributeNerm: (requestParameters: sdk.AttributesNERMApiCreateAttributeRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateAttribute201ResponseNERM>> => {
    const attributesnermapi = new sdk.AttributesNERMApi(apiConfig);
    return handleApiCall(() => attributesnermapi.createAttribute(requestParameters));
  },
  createAuthOrgNetworkConfigV1: (requestParameters: globalTenantSecuritySettingsTypes.GlobalTenantSecuritySettingsApiCreateAuthOrgNetworkConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<globalTenantSecuritySettingsTypes.NetworkConfiguration>> => {
    const globaltenantsecuritysettingsapi = new sdk.GlobalTenantSecuritySettingsApi(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsapi.createAuthOrgNetworkConfigV1(requestParameters));
  },
  createAutoAssignActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateAutoAssignActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createAutoAssignAction(requestParameters));
  },
  createAutomatedWorkflowNerm: (requestParameters: sdk.WorkflowsNERMApiCreateAutomatedWorkflowRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateCreateWorkflow200ResponseNERM>> => {
    const workflowsnermapi = new sdk.WorkflowsNERMApi(apiConfig);
    return handleApiCall(() => workflowsnermapi.createAutomatedWorkflow(requestParameters));
  },
  createAutoWriteSettingsV1: (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiCreateAutoWriteSettingsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<suggestedEntitlementDescriptionTypes.AutoWriteSettingResponse>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.createAutoWriteSettingsV1(requestParameters));
  },
  createBatchUpdateActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateBatchUpdateActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createBatchUpdateAction(requestParameters));
  },
  createBatchWorkflowNerm: (requestParameters: sdk.WorkflowsNERMApiCreateBatchWorkflowRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateCreateWorkflow200ResponseNERM>> => {
    const workflowsnermapi = new sdk.WorkflowsNERMApi(apiConfig);
    return handleApiCall(() => workflowsnermapi.createBatchWorkflow(requestParameters));
  },
  createBrandingItemV1: (requestParameters: brandingTypes.BrandingApiCreateBrandingItemV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<brandingTypes.BrandingItem>> => {
    const brandingapi = new sdk.BrandingApi(apiConfig);
    return handleApiCall(() => brandingapi.createBrandingItemV1(requestParameters));
  },
  createCampaignFilterV1: (requestParameters: certificationCampaignFiltersTypes.CertificationCampaignFiltersApiCreateCampaignFilterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignFiltersTypes.CampaignFilterDetails>> => {
    const certificationcampaignfiltersapi = new sdk.CertificationCampaignFiltersApi(apiConfig);
    return handleApiCall(() => certificationcampaignfiltersapi.createCampaignFilterV1(requestParameters));
  },
  createCampaignTemplateV1: (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiCreateCampaignTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignsTypes.CampaignTemplate>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.createCampaignTemplateV1(requestParameters));
  },
  createCampaignV1: (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiCreateCampaignV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignsTypes.Campaign2>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.createCampaignV1(requestParameters));
  },
  createCloseSessionActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateCloseSessionActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createCloseSessionAction(requestParameters));
  },
  createCommonAccessV1: (requestParameters: iaiCommonAccessTypes.IAICommonAccessApiCreateCommonAccessV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiCommonAccessTypes.CommonAccessItemResponse>> => {
    const iaicommonaccessapi = new sdk.IAICommonAccessApi(apiConfig);
    return handleApiCall(() => iaicommonaccessapi.createCommonAccessV1(requestParameters));
  },
  createConnectorCustomizerV1: (requestParameters: connectorCustomizersTypes.ConnectorCustomizersApiCreateConnectorCustomizerV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorCustomizersTypes.ConnectorCustomizerCreateResponse>> => {
    const connectorcustomizersapi = new sdk.ConnectorCustomizersApi(apiConfig);
    return handleApiCall(() => connectorcustomizersapi.createConnectorCustomizerV1(requestParameters));
  },
  createConnectorCustomizerVersionV1: (requestParameters: connectorCustomizersTypes.ConnectorCustomizersApiCreateConnectorCustomizerVersionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorCustomizersTypes.ConnectorCustomizerVersionCreateResponse>> => {
    const connectorcustomizersapi = new sdk.ConnectorCustomizersApi(apiConfig);
    return handleApiCall(() => connectorcustomizersapi.createConnectorCustomizerVersionV1(requestParameters));
  },
  createConnectorRuleV1: (requestParameters: connectorRuleManagementTypes.ConnectorRuleManagementApiCreateConnectorRuleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorRuleManagementTypes.ConnectorRuleResponse>> => {
    const connectorrulemanagementapi = new sdk.ConnectorRuleManagementApi(apiConfig);
    return handleApiCall(() => connectorrulemanagementapi.createConnectorRuleV1(requestParameters));
  },
  createContributorsActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateContributorsActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createContributorsAction(requestParameters));
  },
  createCreateProfileActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateCreateProfileActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createCreateProfileAction(requestParameters));
  },
  createCreateWorkflowNerm: (requestParameters: sdk.WorkflowsNERMApiCreateCreateWorkflowRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateCreateWorkflow200ResponseNERM>> => {
    const workflowsnermapi = new sdk.WorkflowsNERMApi(apiConfig);
    return handleApiCall(() => workflowsnermapi.createCreateWorkflow(requestParameters));
  },
  createCustomConnectorV1: (requestParameters: connectorsTypes.ConnectorsApiCreateCustomConnectorV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorsTypes.V3ConnectorDto>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.createCustomConnectorV1(requestParameters));
  },
  createCustomPasswordInstructionsV1: (requestParameters: customPasswordInstructionsTypes.CustomPasswordInstructionsApiCreateCustomPasswordInstructionsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customPasswordInstructionsTypes.CustomPasswordInstruction>> => {
    const custompasswordinstructionsapi = new sdk.CustomPasswordInstructionsApi(apiConfig);
    return handleApiCall(() => custompasswordinstructionsapi.createCustomPasswordInstructionsV1(requestParameters));
  },
  createCustomPrivilegeCriteriaV1: (requestParameters: privilegeCriteriaTypes.PrivilegeCriteriaApiCreateCustomPrivilegeCriteriaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<privilegeCriteriaTypes.PrivilegeCriteriaDTO>> => {
    const privilegecriteriaapi = new sdk.PrivilegeCriteriaApi(apiConfig);
    return handleApiCall(() => privilegecriteriaapi.createCustomPrivilegeCriteriaV1(requestParameters));
  },
  createCustomUserLevelV1: (requestParameters: customUserLevelsTypes.CustomUserLevelsApiCreateCustomUserLevelV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customUserLevelsTypes.UserLevelSummaryDTO>> => {
    const customuserlevelsapi = new sdk.CustomUserLevelsApi(apiConfig);
    return handleApiCall(() => customuserlevelsapi.createCustomUserLevelV1(requestParameters));
  },
  createDataSegmentV1: (requestParameters: dataSegmentationTypes.DataSegmentationApiCreateDataSegmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<dataSegmentationTypes.DataSegment>> => {
    const datasegmentationapi = new sdk.DataSegmentationApi(apiConfig);
    return handleApiCall(() => datasegmentationapi.createDataSegmentV1(requestParameters));
  },
  createDeployV1: (requestParameters: configurationHubTypes.ConfigurationHubApiCreateDeployV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<configurationHubTypes.DeployResponse>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.createDeployV1(requestParameters));
  },
  createDigitTokenV1: (requestParameters: passwordManagementTypes.PasswordManagementApiCreateDigitTokenV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordManagementTypes.PasswordDigitToken>> => {
    const passwordmanagementapi = new sdk.PasswordManagementApi(apiConfig);
    return handleApiCall(() => passwordmanagementapi.createDigitTokenV1(requestParameters));
  },
  createDimensionV1: (requestParameters: dimensionsTypes.DimensionsApiCreateDimensionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<dimensionsTypes.Dimension>> => {
    const dimensionsapi = new sdk.DimensionsApi(apiConfig);
    return handleApiCall(() => dimensionsapi.createDimensionV1(requestParameters));
  },
  createDomainDkimV1: (requestParameters: notificationsTypes.NotificationsApiCreateDomainDkimV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<notificationsTypes.DomainStatusDto>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.createDomainDkimV1(requestParameters));
  },
  createDuplicatePreventionActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateDuplicatePreventionActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createDuplicatePreventionAction(requestParameters));
  },
  createEmailVerificationActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateEmailVerificationActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createEmailVerificationAction(requestParameters));
  },
  createExternalExecuteWorkflowV1: (requestParameters: workflowsTypes.WorkflowsApiCreateExternalExecuteWorkflowV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workflowsTypes.CreateExternalExecuteWorkflowV1200Response>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.createExternalExecuteWorkflowV1(requestParameters));
  },
  createFormAttributeNerm: (requestParameters: sdk.FormAttributesNERMApiCreateFormAttributeRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetFormAttributes200ResponseNERM>> => {
    const formattributesnermapi = new sdk.FormAttributesNERMApi(apiConfig);
    return handleApiCall(() => formattributesnermapi.createFormAttribute(requestParameters));
  },
  createFormDefinitionDynamicSchemaV1: (requestParameters: customFormsTypes.CustomFormsApiCreateFormDefinitionDynamicSchemaV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.FormDefinitionDynamicSchemaResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.createFormDefinitionDynamicSchemaV1(requestParameters));
  },
  createFormDefinitionFileRequestV1: (requestParameters: customFormsTypes.CustomFormsApiCreateFormDefinitionFileRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.FormDefinitionFileUploadResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.createFormDefinitionFileRequestV1(requestParameters));
  },
  createFormDefinitionV1: (requestParameters: customFormsTypes.CustomFormsApiCreateFormDefinitionV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.FormDefinitionResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.createFormDefinitionV1(requestParameters));
  },
  createFormInstanceV1: (requestParameters: customFormsTypes.CustomFormsApiCreateFormInstanceV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.FormInstanceResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.createFormInstanceV1(requestParameters));
  },
  createFormNerm: (requestParameters: sdk.FormsNERMApiCreateFormRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetForms200ResponseNERM>> => {
    const formsnermapi = new sdk.FormsNERMApi(apiConfig);
    return handleApiCall(() => formsnermapi.createForm(requestParameters));
  },
  createFulfillmentActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateFulfillmentActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createFulfillmentAction(requestParameters));
  },
  createIdentityAttributeV1: (requestParameters: identityAttributesTypes.IdentityAttributesApiCreateIdentityAttributeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityAttributesTypes.IdentityAttribute2>> => {
    const identityattributesapi = new sdk.IdentityAttributesApi(apiConfig);
    return handleApiCall(() => identityattributesapi.createIdentityAttributeV1(requestParameters));
  },
  createIdentityCollectorV1: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiCreateIdentityCollectorV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<dataAccessSecurityTypes.CreateIdentityCollectorV1200Response>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.createIdentityCollectorV1(requestParameters));
  },
  createIdentityProfileV1: (requestParameters: identityProfilesTypes.IdentityProfilesApiCreateIdentityProfileV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityProfilesTypes.IdentityProfile>> => {
    const identityprofilesapi = new sdk.IdentityProfilesApi(apiConfig);
    return handleApiCall(() => identityprofilesapi.createIdentityProfileV1(requestParameters));
  },
  createIdentityProofingActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateIdentityProofingActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createIdentityProofingAction(requestParameters));
  },
  createInvitationActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateInvitationActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createInvitationAction(requestParameters));
  },
  createLauncherV1: (requestParameters: launchersTypes.LaunchersApiCreateLauncherV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<launchersTypes.Launcher>> => {
    const launchersapi = new sdk.LaunchersApi(apiConfig);
    return handleApiCall(() => launchersapi.createLauncherV1(requestParameters));
  },
  createLdapActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateLdapActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createLdapAction(requestParameters));
  },
  createLifecycleStateV1: (requestParameters: lifecycleStatesTypes.LifecycleStatesApiCreateLifecycleStateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<lifecycleStatesTypes.LifecycleState>> => {
    const lifecyclestatesapi = new sdk.LifecycleStatesApi(apiConfig);
    return handleApiCall(() => lifecyclestatesapi.createLifecycleStateV1(requestParameters));
  },
  createLoginWorkflowNerm: (requestParameters: sdk.WorkflowsNERMApiCreateLoginWorkflowRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateCreateWorkflow200ResponseNERM>> => {
    const workflowsnermapi = new sdk.WorkflowsNERMApi(apiConfig);
    return handleApiCall(() => workflowsnermapi.createLoginWorkflow(requestParameters));
  },
  createMachineAccountMappingsV1: (requestParameters: machineAccountMappingsTypes.MachineAccountMappingsApiCreateMachineAccountMappingsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineAccountMappingsTypes.AttributeMappings>>> => {
    const machineaccountmappingsapi = new sdk.MachineAccountMappingsApi(apiConfig);
    return handleApiCall(() => machineaccountmappingsapi.createMachineAccountMappingsV1(requestParameters));
  },
  createMachineAccountRequestV1: (requestParameters: machineAccountCreationRequestTypes.MachineAccountCreationRequestApiCreateMachineAccountRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountCreationRequestTypes.AccountRequestAsyncResult>> => {
    const machineaccountcreationrequestapi = new sdk.MachineAccountCreationRequestApi(apiConfig);
    return handleApiCall(() => machineaccountcreationrequestapi.createMachineAccountRequestV1(requestParameters));
  },
  createMachineAccountSubtypeV1: (requestParameters: machineAccountsTypes.MachineAccountsApiCreateMachineAccountSubtypeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountsTypes.SourceSubtype>> => {
    const machineaccountsapi = new sdk.MachineAccountsApi(apiConfig);
    return handleApiCall(() => machineaccountsapi.createMachineAccountSubtypeV1(requestParameters));
  },
  createMachineIdentityV1: (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiCreateMachineIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineIdentitiesTypes.MachineIdentityResponse>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.createMachineIdentityV1(requestParameters));
  },
  createMachineIdentityV2: (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiCreateMachineIdentityV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineIdentitiesTypes.Machineidentityv2>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.createMachineIdentityV2(requestParameters));
  },
  createManagedClientV1: (requestParameters: managedClientsTypes.ManagedClientsApiCreateManagedClientV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClientsTypes.ManagedClient>> => {
    const managedclientsapi = new sdk.ManagedClientsApi(apiConfig);
    return handleApiCall(() => managedclientsapi.createManagedClientV1(requestParameters));
  },
  createManagedClusterTypeV1: (requestParameters: managedClusterTypesTypes.ManagedClusterTypesApiCreateManagedClusterTypeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClusterTypesTypes.ManagedClusterType>> => {
    const managedclustertypesapi = new sdk.ManagedClusterTypesApi(apiConfig);
    return handleApiCall(() => managedclustertypesapi.createManagedClusterTypeV1(requestParameters));
  },
  createManagedClusterV1: (requestParameters: managedClustersTypes.ManagedClustersApiCreateManagedClusterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClustersTypes.ManagedCluster>> => {
    const managedclustersapi = new sdk.ManagedClustersApi(apiConfig);
    return handleApiCall(() => managedclustersapi.createManagedClusterV1(requestParameters));
  },
  createMultiHostIntegrationV1: (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiCreateMultiHostIntegrationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<multiHostIntegrationTypes.MultiHostIntegrations>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.createMultiHostIntegrationV1(requestParameters));
  },
  createNonEmployeeRecordV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiCreateNonEmployeeRecordV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeRecord>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.createNonEmployeeRecordV1(requestParameters));
  },
  createNonEmployeeRequestV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiCreateNonEmployeeRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeRequest>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.createNonEmployeeRequestV1(requestParameters));
  },
  createNonEmployeeSourceSchemaAttributesV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiCreateNonEmployeeSourceSchemaAttributesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeSchemaAttribute>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.createNonEmployeeSourceSchemaAttributesV1(requestParameters));
  },
  createNonEmployeeSourceV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiCreateNonEmployeeSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeSourceWithCloudExternalId>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.createNonEmployeeSourceV1(requestParameters));
  },
  createNotificationActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateNotificationActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createNotificationAction(requestParameters));
  },
  createNotificationTemplateV1: (requestParameters: notificationsTypes.NotificationsApiCreateNotificationTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<notificationsTypes.TemplateDto>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.createNotificationTemplateV1(requestParameters));
  },
  createOauthClientV1: (requestParameters: oauthClientsTypes.OAuthClientsApiCreateOauthClientV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<oauthClientsTypes.CreateOAuthClientResponse>> => {
    const oauthclientsapi = new sdk.OAuthClientsApi(apiConfig);
    return handleApiCall(() => oauthclientsapi.createOauthClientV1(requestParameters));
  },
  createObjectMappingsV1: (requestParameters: configurationHubTypes.ConfigurationHubApiCreateObjectMappingsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<configurationHubTypes.ObjectMappingBulkCreateResponse>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.createObjectMappingsV1(requestParameters));
  },
  createObjectMappingV1: (requestParameters: configurationHubTypes.ConfigurationHubApiCreateObjectMappingV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<configurationHubTypes.ObjectMappingResponse>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.createObjectMappingV1(requestParameters));
  },
  createPageContentNerm: (requestParameters: sdk.PageContentsNERMApiCreatePageContentRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContents200ResponseNERM>> => {
    const pagecontentsnermapi = new sdk.PageContentsNERMApi(apiConfig);
    return handleApiCall(() => pagecontentsnermapi.createPageContent(requestParameters));
  },
  createPageContentTranslationNerm: (requestParameters: sdk.PageContentTranslationsNERMApiCreatePageContentTranslationRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContentTranslation200ResponseNERM>> => {
    const pagecontenttranslationsnermapi = new sdk.PageContentTranslationsNERMApi(apiConfig);
    return handleApiCall(() => pagecontenttranslationsnermapi.createPageContentTranslation(requestParameters));
  },
  createPageElementNerm: (requestParameters: sdk.PageElementsNERMApiCreatePageElementRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageElements200ResponseNERM>> => {
    const pageelementsnermapi = new sdk.PageElementsNERMApi(apiConfig);
    return handleApiCall(() => pageelementsnermapi.createPageElement(requestParameters));
  },
  createParameterV1: (requestParameters: parameterStorageTypes.ParameterStorageApiCreateParameterV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<parameterStorageTypes.ParameterStorageParameter>> => {
    const parameterstorageapi = new sdk.ParameterStorageApi(apiConfig);
    return handleApiCall(() => parameterstorageapi.createParameterV1(requestParameters));
  },
  createPasswordOrgConfigV1: (requestParameters: passwordConfigurationTypes.PasswordConfigurationApiCreatePasswordOrgConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordConfigurationTypes.PasswordOrgConfig>> => {
    const passwordconfigurationapi = new sdk.PasswordConfigurationApi(apiConfig);
    return handleApiCall(() => passwordconfigurationapi.createPasswordOrgConfigV1(requestParameters));
  },
  createPasswordPolicyV1: (requestParameters: passwordPoliciesTypes.PasswordPoliciesApiCreatePasswordPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordPoliciesTypes.PasswordPolicyV3Dto>> => {
    const passwordpoliciesapi = new sdk.PasswordPoliciesApi(apiConfig);
    return handleApiCall(() => passwordpoliciesapi.createPasswordPolicyV1(requestParameters));
  },
  createPasswordResetActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreatePasswordResetActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createPasswordResetAction(requestParameters));
  },
  createPasswordSyncGroupV1: (requestParameters: passwordSyncGroupsTypes.PasswordSyncGroupsApiCreatePasswordSyncGroupV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordSyncGroupsTypes.PasswordSyncGroup>> => {
    const passwordsyncgroupsapi = new sdk.PasswordSyncGroupsApi(apiConfig);
    return handleApiCall(() => passwordsyncgroupsapi.createPasswordSyncGroupV1(requestParameters));
  },
  createPasswordUpdateWorkflowNerm: (requestParameters: sdk.WorkflowsNERMApiCreatePasswordUpdateWorkflowRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateCreateWorkflow200ResponseNERM>> => {
    const workflowsnermapi = new sdk.WorkflowsNERMApi(apiConfig);
    return handleApiCall(() => workflowsnermapi.createPasswordUpdateWorkflow(requestParameters));
  },
  createPermissionNerm: (requestParameters: sdk.PermissionsNERMApiCreatePermissionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreatePermission200ResponseNERM>> => {
    const permissionsnermapi = new sdk.PermissionsNERMApi(apiConfig);
    return handleApiCall(() => permissionsnermapi.createPermission(requestParameters));
  },
  createPersonalAccessTokenV1: (requestParameters: personalAccessTokensTypes.PersonalAccessTokensApiCreatePersonalAccessTokenV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<personalAccessTokensTypes.CreatePersonalAccessTokenResponse>> => {
    const personalaccesstokensapi = new sdk.PersonalAccessTokensApi(apiConfig);
    return handleApiCall(() => personalaccesstokensapi.createPersonalAccessTokenV1(requestParameters));
  },
  createPotentialRoleProvisionRequestV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiCreatePotentialRoleProvisionRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRoleMiningTypes.RoleMiningPotentialRoleSummary>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.createPotentialRoleProvisionRequestV1(requestParameters));
  },
  createProfileCheckActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateProfileCheckActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createProfileCheckAction(requestParameters));
  },
  createProfilePageNerm: (requestParameters: sdk.PagesNERMApiCreateProfilePageRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateProfilePage200ResponseNERM>> => {
    const pagesnermapi = new sdk.PagesNERMApi(apiConfig);
    return handleApiCall(() => pagesnermapi.createProfilePage(requestParameters));
  },
  createProfileSelectActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateProfileSelectActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createProfileSelectAction(requestParameters));
  },
  createProfilesNerm: (requestParameters: sdk.ProfilesNERMApiCreateProfilesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SearchAdvancedSearch200ResponseNERM>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.createProfiles(requestParameters));
  },
  createProfileTypeRoleNerm: (requestParameters: sdk.ProfileTypeRolesNERMApiCreateProfileTypeRoleRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateProfileTypeRole200ResponseNERM>> => {
    const profiletyperolesnermapi = new sdk.ProfileTypeRolesNERMApi(apiConfig);
    return handleApiCall(() => profiletyperolesnermapi.createProfileTypeRole(requestParameters));
  },
  createProvisioningPolicyV1: (requestParameters: sourcesTypes.SourcesApiCreateProvisioningPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.ProvisioningPolicyDto>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.createProvisioningPolicyV1(requestParameters));
  },
  createProvisioningPolicyV2: (requestParameters: sourcesTypes.SourcesApiCreateProvisioningPolicyV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.ProvisioningPolicyDtoV2>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.createProvisioningPolicyV2(requestParameters));
  },
  createReassignmentConfigurationV1: (requestParameters: workReassignmentTypes.WorkReassignmentApiCreateReassignmentConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workReassignmentTypes.ConfigurationItemResponse>> => {
    const workreassignmentapi = new sdk.WorkReassignmentApi(apiConfig);
    return handleApiCall(() => workreassignmentapi.createReassignmentConfigurationV1(requestParameters));
  },
  createRegistrationWorkflowNerm: (requestParameters: sdk.WorkflowsNERMApiCreateRegistrationWorkflowRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateCreateWorkflow200ResponseNERM>> => {
    const workflowsnermapi = new sdk.WorkflowsNERMApi(apiConfig);
    return handleApiCall(() => workflowsnermapi.createRegistrationWorkflow(requestParameters));
  },
  createRequestActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateRequestActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createRequestAction(requestParameters));
  },
  createRestApiActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateRestApiActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createRestApiAction(requestParameters));
  },
  createReviewActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateReviewActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createReviewAction(requestParameters));
  },
  createRoleInsightRequestsV1: (requestParameters: roleInsightsTypes.RoleInsightsApiCreateRoleInsightRequestsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<roleInsightsTypes.RoleInsightsResponse>> => {
    const roleinsightsapi = new sdk.RoleInsightsApi(apiConfig);
    return handleApiCall(() => roleinsightsapi.createRoleInsightRequestsV1(requestParameters));
  },
  createRoleMiningSessionsV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiCreateRoleMiningSessionsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRoleMiningTypes.RoleMiningSessionResponse>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.createRoleMiningSessionsV1(requestParameters));
  },
  createRoleV1: (requestParameters: rolesTypes.RolesApiCreateRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<rolesTypes.Role>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.createRoleV1(requestParameters));
  },
  createRunWorkflowActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateRunWorkflowActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createRunWorkflowAction(requestParameters));
  },
  createSavedSearchV1: (requestParameters: savedSearchTypes.SavedSearchApiCreateSavedSearchV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<savedSearchTypes.SavedSearch>> => {
    const savedsearchapi = new sdk.SavedSearchApi(apiConfig);
    return handleApiCall(() => savedsearchapi.createSavedSearchV1(requestParameters));
  },
  createScheduledActionV1: (requestParameters: configurationHubTypes.ConfigurationHubApiCreateScheduledActionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<configurationHubTypes.ScheduledActionResponse>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.createScheduledActionV1(requestParameters));
  },
  createScheduledSearchV1: (requestParameters: scheduledSearchTypes.ScheduledSearchApiCreateScheduledSearchV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<scheduledSearchTypes.ScheduledSearch>> => {
    const scheduledsearchapi = new sdk.ScheduledSearchApi(apiConfig);
    return handleApiCall(() => scheduledsearchapi.createScheduledSearchV1(requestParameters));
  },
  createScheduleV1: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiCreateScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<number>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.createScheduleV1(requestParameters));
  },
  createSearchAttributeConfigV1: (requestParameters: searchAttributeConfigurationTypes.SearchAttributeConfigurationApiCreateSearchAttributeConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const searchattributeconfigurationapi = new sdk.SearchAttributeConfigurationApi(apiConfig);
    return handleApiCall(() => searchattributeconfigurationapi.createSearchAttributeConfigV1(requestParameters));
  },
  createSegmentV1: (requestParameters: segmentsTypes.SegmentsApiCreateSegmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<segmentsTypes.Segment>> => {
    const segmentsapi = new sdk.SegmentsApi(apiConfig);
    return handleApiCall(() => segmentsapi.createSegmentV1(requestParameters));
  },
  createServiceDeskIntegrationV1: (requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiCreateServiceDeskIntegrationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<serviceDeskIntegrationTypes.ServiceDeskIntegrationDto>> => {
    const servicedeskintegrationapi = new sdk.ServiceDeskIntegrationApi(apiConfig);
    return handleApiCall(() => servicedeskintegrationapi.createServiceDeskIntegrationV1(requestParameters));
  },
  createSetAttributesActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateSetAttributesActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createSetAttributesAction(requestParameters));
  },
  createSetSecurityQuestionActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateSetSecurityQuestionActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createSetSecurityQuestionAction(requestParameters));
  },
  createSIMIntegrationV1: (requestParameters: simIntegrationsTypes.SIMIntegrationsApiCreateSIMIntegrationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<simIntegrationsTypes.ServiceDeskIntegrationDto>> => {
    const simintegrationsapi = new sdk.SIMIntegrationsApi(apiConfig);
    return handleApiCall(() => simintegrationsapi.createSIMIntegrationV1(requestParameters));
  },
  createSoapApiActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateSoapApiActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createSoapApiAction(requestParameters));
  },
  createSodPolicyV1: (requestParameters: sodPoliciesTypes.SODPoliciesApiCreateSodPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.SodPolicy>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.createSodPolicyV1(requestParameters));
  },
  createSourceAppV1: (requestParameters: appsTypes.AppsApiCreateSourceAppV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<appsTypes.SourceApp>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.createSourceAppV1(requestParameters));
  },
  createSourceScheduleV1: (requestParameters: sourcesTypes.SourcesApiCreateSourceScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Schedule3>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.createSourceScheduleV1(requestParameters));
  },
  createSourceSchemaV1: (requestParameters: sourcesTypes.SourcesApiCreateSourceSchemaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Schema>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.createSourceSchemaV1(requestParameters));
  },
  createSourceSubtypeV1: (requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiCreateSourceSubtypeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountSubtypesTypes.SourceSubtypeWithSource>> => {
    const machineaccountsubtypesapi = new sdk.MachineAccountSubtypesApi(apiConfig);
    return handleApiCall(() => machineaccountsubtypesapi.createSourceSubtypeV1(requestParameters));
  },
  createSourcesWithinMultiHostV1: (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiCreateSourcesWithinMultiHostV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.createSourcesWithinMultiHostV1(requestParameters));
  },
  createSourceV1: (requestParameters: sourcesTypes.SourcesApiCreateSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Source>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.createSourceV1(requestParameters));
  },
  createStatusChangeActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateStatusChangeActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createStatusChangeAction(requestParameters));
  },
  createStreamV1: (requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiCreateStreamV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sharedSignalsFrameworkSsfTypes.StreamConfigResponse>> => {
    const sharedsignalsframeworkssfapi = new sdk.SharedSignalsFrameworkSSFApi(apiConfig);
    return handleApiCall(() => sharedsignalsframeworkssfapi.createStreamV1(requestParameters));
  },
  createSubscriptionV1: (requestParameters: triggersTypes.TriggersApiCreateSubscriptionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<triggersTypes.Subscription>> => {
    const triggersapi = new sdk.TriggersApi(apiConfig);
    return handleApiCall(() => triggersapi.createSubscriptionV1(requestParameters));
  },
  createSyncedAttributeNerm: (requestParameters: sdk.SyncedAttributesNERMApiCreateSyncedAttributeRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateSyncedAttribute201ResponseNERM>> => {
    const syncedattributesnermapi = new sdk.SyncedAttributesNERMApi(apiConfig);
    return handleApiCall(() => syncedattributesnermapi.createSyncedAttribute(requestParameters));
  },
  createSystemRolePermissionNerm: (requestParameters: sdk.SystemRolePermissionsNERMApiCreateSystemRolePermissionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateSystemRolePermission200ResponseNERM>> => {
    const systemrolepermissionsnermapi = new sdk.SystemRolePermissionsNERMApi(apiConfig);
    return handleApiCall(() => systemrolepermissionsnermapi.createSystemRolePermission(requestParameters));
  },
  createTagV1: (requestParameters: tagsTypes.TagsApiCreateTagV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<tagsTypes.Tag2>> => {
    const tagsapi = new sdk.TagsApi(apiConfig);
    return handleApiCall(() => tagsapi.createTagV1(requestParameters));
  },
  createTransformV1: (requestParameters: transformsTypes.TransformsApiCreateTransformV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<transformsTypes.TransformRead>> => {
    const transformsapi = new sdk.TransformsApi(apiConfig);
    return handleApiCall(() => transformsapi.createTransformV1(requestParameters));
  },
  createUnassignActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateUnassignActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createUnassignAction(requestParameters));
  },
  createUpdateProfileActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateUpdateProfileActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createUpdateProfileAction(requestParameters));
  },
  createUpdateWorkflowNerm: (requestParameters: sdk.WorkflowsNERMApiCreateUpdateWorkflowRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateCreateWorkflow200ResponseNERM>> => {
    const workflowsnermapi = new sdk.WorkflowsNERMApi(apiConfig);
    return handleApiCall(() => workflowsnermapi.createUpdateWorkflow(requestParameters));
  },
  createUploadedConfigurationV1: (requestParameters: configurationHubTypes.ConfigurationHubApiCreateUploadedConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<configurationHubTypes.BackupResponse>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.createUploadedConfigurationV1(requestParameters));
  },
  createUsernamePasswordActionNerm: (requestParameters: sdk.WorkflowActionsNERMApiCreateUsernamePasswordActionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateApprovalAction200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.createUsernamePasswordAction(requestParameters));
  },
  createUserProfilesNerm: (requestParameters: sdk.UserProfilesNERMApiCreateUserProfilesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateUserProfiles200ResponseNERM>> => {
    const userprofilesnermapi = new sdk.UserProfilesNERMApi(apiConfig);
    return handleApiCall(() => userprofilesnermapi.createUserProfiles(requestParameters));
  },
  createVerifiedFromAddressV1: (requestParameters: notificationsTypes.NotificationsApiCreateVerifiedFromAddressV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<notificationsTypes.EmailStatusDto>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.createVerifiedFromAddressV1(requestParameters));
  },
  createWorkflowActionPerformerNerm: (requestParameters: sdk.WorkflowActionPerformerNERMApiCreateWorkflowActionPerformerRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateWorkflowActionPerformer200ResponseNERM>> => {
    const workflowactionperformernermapi = new sdk.WorkflowActionPerformerNERMApi(apiConfig);
    return handleApiCall(() => workflowactionperformernermapi.createWorkflowActionPerformer(requestParameters));
  },
  createWorkflowExternalTriggerV1: (requestParameters: workflowsTypes.WorkflowsApiCreateWorkflowExternalTriggerV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workflowsTypes.WorkflowOAuthClient>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.createWorkflowExternalTriggerV1(requestParameters));
  },
  createWorkflowPageNerm: (requestParameters: sdk.PagesNERMApiCreateWorkflowPageRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateProfilePage200ResponseNERM>> => {
    const pagesnermapi = new sdk.PagesNERMApi(apiConfig);
    return handleApiCall(() => pagesnermapi.createWorkflowPage(requestParameters));
  },
  createWorkflowV1: (requestParameters: workflowsTypes.WorkflowsApiCreateWorkflowV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workflowsTypes.Workflow>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.createWorkflowV1(requestParameters));
  },
  createWorkgroupV1: (requestParameters: governanceGroupsTypes.GovernanceGroupsApiCreateWorkgroupV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<governanceGroupsTypes.WorkgroupDto>> => {
    const governancegroupsapi = new sdk.GovernanceGroupsApi(apiConfig);
    return handleApiCall(() => governancegroupsapi.createWorkgroupV1(requestParameters));
  },
  dasV1OwnersAssignPost: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDasV1OwnersAssignPostRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<number>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.dasV1OwnersAssignPost(requestParameters));
  },
  dasV1OwnersOwnerIdentityIdResourcesGet: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDasV1OwnersOwnerIdentityIdResourcesGetRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<dataAccessSecurityTypes.ResourceModel>>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.dasV1OwnersOwnerIdentityIdResourcesGet(requestParameters));
  },
  dasV1OwnersReelectPost: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDasV1OwnersReelectPostRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<number>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.dasV1OwnersReelectPost(requestParameters));
  },
  dasV1OwnersResourcesResourceIdGet: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDasV1OwnersResourcesResourceIdGetRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<string>>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.dasV1OwnersResourcesResourceIdGet(requestParameters));
  },
  dasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPost: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPostRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<number>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.dasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPost(requestParameters));
  },
  delegationsGetNerm: (requestParameters: sdk.DelegationsNERMApiDelegationsGetRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DelegationsGet200ResponseNERM>> => {
    const delegationsnermapi = new sdk.DelegationsNERMApi(apiConfig);
    return handleApiCall(() => delegationsnermapi.delegationsGet(requestParameters));
  },
  delegationsGetNermV2025: (requestParameters: sdk.DelegationsNERMV2025ApiDelegationsGetRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DelegationsGet200ResponseNERMV2025>> => {
    const delegationsnermv2025api = new sdk.DelegationsNERMV2025Api(apiConfig);
    return handleApiCall(() => delegationsnermv2025api.delegationsGet(requestParameters));
  },
  delegationsIdDeleteNerm: (requestParameters: sdk.DelegationsNERMApiDelegationsIdDeleteRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const delegationsnermapi = new sdk.DelegationsNERMApi(apiConfig);
    return handleApiCall(() => delegationsnermapi.delegationsIdDelete(requestParameters));
  },
  delegationsIdDeleteNermV2025: (requestParameters: sdk.DelegationsNERMV2025ApiDelegationsIdDeleteRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const delegationsnermv2025api = new sdk.DelegationsNERMV2025Api(apiConfig);
    return handleApiCall(() => delegationsnermv2025api.delegationsIdDelete(requestParameters));
  },
  delegationsIdGetNerm: (requestParameters: sdk.DelegationsNERMApiDelegationsIdGetRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DelegationsPost201ResponseNERM>> => {
    const delegationsnermapi = new sdk.DelegationsNERMApi(apiConfig);
    return handleApiCall(() => delegationsnermapi.delegationsIdGet(requestParameters));
  },
  delegationsIdGetNermV2025: (requestParameters: sdk.DelegationsNERMV2025ApiDelegationsIdGetRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DelegationsPost201ResponseNERMV2025>> => {
    const delegationsnermv2025api = new sdk.DelegationsNERMV2025Api(apiConfig);
    return handleApiCall(() => delegationsnermv2025api.delegationsIdGet(requestParameters));
  },
  delegationsIdPatchNerm: (requestParameters: sdk.DelegationsNERMApiDelegationsIdPatchRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DelegationsPost201ResponseNERM>> => {
    const delegationsnermapi = new sdk.DelegationsNERMApi(apiConfig);
    return handleApiCall(() => delegationsnermapi.delegationsIdPatch(requestParameters));
  },
  delegationsIdPatchNermV2025: (requestParameters: sdk.DelegationsNERMV2025ApiDelegationsIdPatchRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DelegationsPost201ResponseNERMV2025>> => {
    const delegationsnermv2025api = new sdk.DelegationsNERMV2025Api(apiConfig);
    return handleApiCall(() => delegationsnermv2025api.delegationsIdPatch(requestParameters));
  },
  delegationsPostNerm: (requestParameters: sdk.DelegationsNERMApiDelegationsPostRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DelegationsPost201ResponseNERM>> => {
    const delegationsnermapi = new sdk.DelegationsNERMApi(apiConfig);
    return handleApiCall(() => delegationsnermapi.delegationsPost(requestParameters));
  },
  delegationsPostNermV2025: (requestParameters: sdk.DelegationsNERMV2025ApiDelegationsPostRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DelegationsPost201ResponseNERMV2025>> => {
    const delegationsnermv2025api = new sdk.DelegationsNERMV2025Api(apiConfig);
    return handleApiCall(() => delegationsnermv2025api.delegationsPost(requestParameters));
  },
  deleteAccessModelMetadataFromEntitlementV1: (requestParameters: entitlementsTypes.EntitlementsApiDeleteAccessModelMetadataFromEntitlementV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.deleteAccessModelMetadataFromEntitlementV1(requestParameters));
  },
  deleteAccessProfilesFromSourceAppByBulkV1: (requestParameters: appsTypes.AppsApiDeleteAccessProfilesFromSourceAppByBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<appsTypes.AccessProfileDetails>>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.deleteAccessProfilesFromSourceAppByBulkV1(requestParameters));
  },
  deleteAccessProfilesInBulkV1: (requestParameters: accessProfilesTypes.AccessProfilesApiDeleteAccessProfilesInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessProfilesTypes.AccessProfileBulkDeleteResponse>> => {
    const accessprofilesapi = new sdk.AccessProfilesApi(apiConfig);
    return handleApiCall(() => accessprofilesapi.deleteAccessProfilesInBulkV1(requestParameters));
  },
  deleteAccessProfileV1: (requestParameters: accessProfilesTypes.AccessProfilesApiDeleteAccessProfileV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const accessprofilesapi = new sdk.AccessProfilesApi(apiConfig);
    return handleApiCall(() => accessprofilesapi.deleteAccessProfileV1(requestParameters));
  },
  deleteAccountAsyncV1: (requestParameters: accountsTypes.AccountsApiDeleteAccountAsyncV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountsTypes.TaskResultDto>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.deleteAccountAsyncV1(requestParameters));
  },
  deleteAccountRequestV1: (requestParameters: accountDeletionRequestsTypes.AccountDeletionRequestsApiDeleteAccountRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountDeletionRequestsTypes.AccountRequestAsyncResult>> => {
    const accountdeletionrequestsapi = new sdk.AccountDeletionRequestsApi(apiConfig);
    return handleApiCall(() => accountdeletionrequestsapi.deleteAccountRequestV1(requestParameters));
  },
  deleteAccountsAsyncV1: (requestParameters: sourcesTypes.SourcesApiDeleteAccountsAsyncV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.TaskResultDto>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.deleteAccountsAsyncV1(requestParameters));
  },
  deleteAccountV1: (requestParameters: accountsTypes.AccountsApiDeleteAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountsTypes.AccountsAsyncResult>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.deleteAccountV1(requestParameters));
  },
  deleteApplicationV1: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDeleteApplicationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.deleteApplicationV1(requestParameters));
  },
  deleteApprovalConfigRequestV1: (requestParameters: approvalsTypes.ApprovalsApiDeleteApprovalConfigRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.deleteApprovalConfigRequestV1(requestParameters));
  },
  deleteAttributeByIdNerm: (requestParameters: sdk.AttributesNERMApiDeleteAttributeByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateAttribute201ResponseNERM>> => {
    const attributesnermapi = new sdk.AttributesNERMApi(apiConfig);
    return handleApiCall(() => attributesnermapi.deleteAttributeById(requestParameters));
  },
  deleteAttributeByUidNerm: (requestParameters: sdk.AttributesNERMApiDeleteAttributeByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateAttribute201ResponseNERM>> => {
    const attributesnermapi = new sdk.AttributesNERMApi(apiConfig);
    return handleApiCall(() => attributesnermapi.deleteAttributeByUid(requestParameters));
  },
  deleteAttributeOptionByIdNerm: (requestParameters: sdk.AttributeOptionsNERMApiDeleteAttributeOptionByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DeleteAttributeOptionById200ResponseNERM>> => {
    const attributeoptionsnermapi = new sdk.AttributeOptionsNERMApi(apiConfig);
    return handleApiCall(() => attributeoptionsnermapi.deleteAttributeOptionById(requestParameters));
  },
  deleteAttributeOptionByUidNerm: (requestParameters: sdk.AttributeOptionsNERMApiDeleteAttributeOptionByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DeleteAttributeOptionById200ResponseNERM>> => {
    const attributeoptionsnermapi = new sdk.AttributeOptionsNERMApi(apiConfig);
    return handleApiCall(() => attributeoptionsnermapi.deleteAttributeOptionByUid(requestParameters));
  },
  deleteBackupV1: (requestParameters: configurationHubTypes.ConfigurationHubApiDeleteBackupV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.deleteBackupV1(requestParameters));
  },
  deleteBrandingV1: (requestParameters: brandingTypes.BrandingApiDeleteBrandingV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const brandingapi = new sdk.BrandingApi(apiConfig);
    return handleApiCall(() => brandingapi.deleteBrandingV1(requestParameters));
  },
  deleteBulkDimensionsV1: (requestParameters: dimensionsTypes.DimensionsApiDeleteBulkDimensionsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<dimensionsTypes.TaskResultDto>> => {
    const dimensionsapi = new sdk.DimensionsApi(apiConfig);
    return handleApiCall(() => dimensionsapi.deleteBulkDimensionsV1(requestParameters));
  },
  deleteBulkRolesV1: (requestParameters: rolesTypes.RolesApiDeleteBulkRolesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<rolesTypes.TaskResultDto>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.deleteBulkRolesV1(requestParameters));
  },
  deleteCampaignFiltersV1: (requestParameters: certificationCampaignFiltersTypes.CertificationCampaignFiltersApiDeleteCampaignFiltersV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const certificationcampaignfiltersapi = new sdk.CertificationCampaignFiltersApi(apiConfig);
    return handleApiCall(() => certificationcampaignfiltersapi.deleteCampaignFiltersV1(requestParameters));
  },
  deleteCampaignsV1: (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiDeleteCampaignsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.deleteCampaignsV1(requestParameters));
  },
  deleteCampaignTemplateScheduleV1: (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiDeleteCampaignTemplateScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.deleteCampaignTemplateScheduleV1(requestParameters));
  },
  deleteCampaignTemplateV1: (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiDeleteCampaignTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.deleteCampaignTemplateV1(requestParameters));
  },
  deleteClassifyMachineAccountFromSourceV1: (requestParameters: classifySourceTypes.ClassifySourceApiDeleteClassifyMachineAccountFromSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const classifysourceapi = new sdk.ClassifySourceApi(apiConfig);
    return handleApiCall(() => classifysourceapi.deleteClassifyMachineAccountFromSourceV1(requestParameters));
  },
  deleteConnectorCustomizerV1: (requestParameters: connectorCustomizersTypes.ConnectorCustomizersApiDeleteConnectorCustomizerV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const connectorcustomizersapi = new sdk.ConnectorCustomizersApi(apiConfig);
    return handleApiCall(() => connectorcustomizersapi.deleteConnectorCustomizerV1(requestParameters));
  },
  deleteConnectorRuleV1: (requestParameters: connectorRuleManagementTypes.ConnectorRuleManagementApiDeleteConnectorRuleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const connectorrulemanagementapi = new sdk.ConnectorRuleManagementApi(apiConfig);
    return handleApiCall(() => connectorrulemanagementapi.deleteConnectorRuleV1(requestParameters));
  },
  deleteCustomConnectorV1: (requestParameters: connectorsTypes.ConnectorsApiDeleteCustomConnectorV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.deleteCustomConnectorV1(requestParameters));
  },
  deleteCustomPasswordInstructionsV1: (requestParameters: customPasswordInstructionsTypes.CustomPasswordInstructionsApiDeleteCustomPasswordInstructionsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const custompasswordinstructionsapi = new sdk.CustomPasswordInstructionsApi(apiConfig);
    return handleApiCall(() => custompasswordinstructionsapi.deleteCustomPasswordInstructionsV1(requestParameters));
  },
  deleteCustomPrivilegeCriteriaV1: (requestParameters: privilegeCriteriaTypes.PrivilegeCriteriaApiDeleteCustomPrivilegeCriteriaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const privilegecriteriaapi = new sdk.PrivilegeCriteriaApi(apiConfig);
    return handleApiCall(() => privilegecriteriaapi.deleteCustomPrivilegeCriteriaV1(requestParameters));
  },
  deleteDataSegmentV1: (requestParameters: dataSegmentationTypes.DataSegmentationApiDeleteDataSegmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const datasegmentationapi = new sdk.DataSegmentationApi(apiConfig);
    return handleApiCall(() => datasegmentationapi.deleteDataSegmentV1(requestParameters));
  },
  deleteDimensionV1: (requestParameters: dimensionsTypes.DimensionsApiDeleteDimensionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const dimensionsapi = new sdk.DimensionsApi(apiConfig);
    return handleApiCall(() => dimensionsapi.deleteDimensionV1(requestParameters));
  },
  deleteDraftV1: (requestParameters: configurationHubTypes.ConfigurationHubApiDeleteDraftV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.deleteDraftV1(requestParameters));
  },
  deleteFormAttributeByIdNerm: (requestParameters: sdk.FormAttributesNERMApiDeleteFormAttributeByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetFormAttributes200ResponseNERM>> => {
    const formattributesnermapi = new sdk.FormAttributesNERMApi(apiConfig);
    return handleApiCall(() => formattributesnermapi.deleteFormAttributeById(requestParameters));
  },
  deleteFormAttributeByUidNerm: (requestParameters: sdk.FormAttributesNERMApiDeleteFormAttributeByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetFormAttributes200ResponseNERM>> => {
    const formattributesnermapi = new sdk.FormAttributesNERMApi(apiConfig);
    return handleApiCall(() => formattributesnermapi.deleteFormAttributeByUid(requestParameters));
  },
  deleteFormByIdNerm: (requestParameters: sdk.FormsNERMApiDeleteFormByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateAttribute201ResponseNERM>> => {
    const formsnermapi = new sdk.FormsNERMApi(apiConfig);
    return handleApiCall(() => formsnermapi.deleteFormById(requestParameters));
  },
  deleteFormByUidNerm: (requestParameters: sdk.FormsNERMApiDeleteFormByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateAttribute201ResponseNERM>> => {
    const formsnermapi = new sdk.FormsNERMApi(apiConfig);
    return handleApiCall(() => formsnermapi.deleteFormByUid(requestParameters));
  },
  deleteFormDefinitionV1: (requestParameters: customFormsTypes.CustomFormsApiDeleteFormDefinitionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.deleteFormDefinitionV1(requestParameters));
  },
  deleteIconV1: (requestParameters: iconsTypes.IconsApiDeleteIconV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const iconsapi = new sdk.IconsApi(apiConfig);
    return handleApiCall(() => iconsapi.deleteIconV1(requestParameters));
  },
  deleteIdentityAttributesInBulkV1: (requestParameters: identityAttributesTypes.IdentityAttributesApiDeleteIdentityAttributesInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const identityattributesapi = new sdk.IdentityAttributesApi(apiConfig);
    return handleApiCall(() => identityattributesapi.deleteIdentityAttributesInBulkV1(requestParameters));
  },
  deleteIdentityAttributeV1: (requestParameters: identityAttributesTypes.IdentityAttributesApiDeleteIdentityAttributeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const identityattributesapi = new sdk.IdentityAttributesApi(apiConfig);
    return handleApiCall(() => identityattributesapi.deleteIdentityAttributeV1(requestParameters));
  },
  deleteIdentityCollectorV1: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDeleteIdentityCollectorV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.deleteIdentityCollectorV1(requestParameters));
  },
  deleteIdentityProfilesV1: (requestParameters: identityProfilesTypes.IdentityProfilesApiDeleteIdentityProfilesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityProfilesTypes.TaskResultSimplified>> => {
    const identityprofilesapi = new sdk.IdentityProfilesApi(apiConfig);
    return handleApiCall(() => identityprofilesapi.deleteIdentityProfilesV1(requestParameters));
  },
  deleteIdentityProfileV1: (requestParameters: identityProfilesTypes.IdentityProfilesApiDeleteIdentityProfileV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityProfilesTypes.TaskResultSimplified>> => {
    const identityprofilesapi = new sdk.IdentityProfilesApi(apiConfig);
    return handleApiCall(() => identityprofilesapi.deleteIdentityProfileV1(requestParameters));
  },
  deleteIdentityV1: (requestParameters: identitiesTypes.IdentitiesApiDeleteIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.deleteIdentityV1(requestParameters));
  },
  deleteLauncherV1: (requestParameters: launchersTypes.LaunchersApiDeleteLauncherV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const launchersapi = new sdk.LaunchersApi(apiConfig);
    return handleApiCall(() => launchersapi.deleteLauncherV1(requestParameters));
  },
  deleteLifecycleStateV1: (requestParameters: lifecycleStatesTypes.LifecycleStatesApiDeleteLifecycleStateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<lifecycleStatesTypes.LifecyclestateDeleted>> => {
    const lifecyclestatesapi = new sdk.LifecycleStatesApi(apiConfig);
    return handleApiCall(() => lifecyclestatesapi.deleteLifecycleStateV1(requestParameters));
  },
  deleteMachineAccountMappingsV1: (requestParameters: machineAccountMappingsTypes.MachineAccountMappingsApiDeleteMachineAccountMappingsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const machineaccountmappingsapi = new sdk.MachineAccountMappingsApi(apiConfig);
    return handleApiCall(() => machineaccountmappingsapi.deleteMachineAccountMappingsV1(requestParameters));
  },
  deleteMachineAccountSubtypeByTechnicalNameV1: (requestParameters: machineAccountsTypes.MachineAccountsApiDeleteMachineAccountSubtypeByTechnicalNameV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const machineaccountsapi = new sdk.MachineAccountsApi(apiConfig);
    return handleApiCall(() => machineaccountsapi.deleteMachineAccountSubtypeByTechnicalNameV1(requestParameters));
  },
  deleteMachineAccountSubtypeV1: (requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiDeleteMachineAccountSubtypeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const machineaccountsubtypesapi = new sdk.MachineAccountSubtypesApi(apiConfig);
    return handleApiCall(() => machineaccountsubtypesapi.deleteMachineAccountSubtypeV1(requestParameters));
  },
  deleteMachineClassificationConfigV1: (requestParameters: machineClassificationConfigTypes.MachineClassificationConfigApiDeleteMachineClassificationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const machineclassificationconfigapi = new sdk.MachineClassificationConfigApi(apiConfig);
    return handleApiCall(() => machineclassificationconfigapi.deleteMachineClassificationConfigV1(requestParameters));
  },
  deleteMachineIdentityV1: (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiDeleteMachineIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.deleteMachineIdentityV1(requestParameters));
  },
  deleteMachineIdentityV2: (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiDeleteMachineIdentityV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.deleteMachineIdentityV2(requestParameters));
  },
  deleteManagedClientV1: (requestParameters: managedClientsTypes.ManagedClientsApiDeleteManagedClientV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const managedclientsapi = new sdk.ManagedClientsApi(apiConfig);
    return handleApiCall(() => managedclientsapi.deleteManagedClientV1(requestParameters));
  },
  deleteManagedClusterTypeV1: (requestParameters: managedClusterTypesTypes.ManagedClusterTypesApiDeleteManagedClusterTypeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const managedclustertypesapi = new sdk.ManagedClusterTypesApi(apiConfig);
    return handleApiCall(() => managedclustertypesapi.deleteManagedClusterTypeV1(requestParameters));
  },
  deleteManagedClusterV1: (requestParameters: managedClustersTypes.ManagedClustersApiDeleteManagedClusterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const managedclustersapi = new sdk.ManagedClustersApi(apiConfig);
    return handleApiCall(() => managedclustersapi.deleteManagedClusterV1(requestParameters));
  },
  deleteMasterRecordNerm: (requestParameters: sdk.ConsolidationNERMApiDeleteMasterRecordRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const consolidationnermapi = new sdk.ConsolidationNERMApi(apiConfig);
    return handleApiCall(() => consolidationnermapi.deleteMasterRecord(requestParameters));
  },
  deleteMetadataFromRoleByKeyAndValueV1: (requestParameters: rolesTypes.RolesApiDeleteMetadataFromRoleByKeyAndValueV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.deleteMetadataFromRoleByKeyAndValueV1(requestParameters));
  },
  deleteMultiHostSourcesV1: (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiDeleteMultiHostSourcesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.deleteMultiHostSourcesV1(requestParameters));
  },
  deleteMultiHostV1: (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiDeleteMultiHostV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.deleteMultiHostV1(requestParameters));
  },
  deleteNativeChangeDetectionConfigV1: (requestParameters: sourcesTypes.SourcesApiDeleteNativeChangeDetectionConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.deleteNativeChangeDetectionConfigV1(requestParameters));
  },
  deleteNonEmployeeRecordsInBulkV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeRecordsInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.deleteNonEmployeeRecordsInBulkV1(requestParameters));
  },
  deleteNonEmployeeRecordV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeRecordV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.deleteNonEmployeeRecordV1(requestParameters));
  },
  deleteNonEmployeeRequestV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.deleteNonEmployeeRequestV1(requestParameters));
  },
  deleteNonEmployeeSchemaAttributeV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeSchemaAttributeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.deleteNonEmployeeSchemaAttributeV1(requestParameters));
  },
  deleteNonEmployeeSourceSchemaAttributesV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeSourceSchemaAttributesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.deleteNonEmployeeSourceSchemaAttributesV1(requestParameters));
  },
  deleteNonEmployeeSourceV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.deleteNonEmployeeSourceV1(requestParameters));
  },
  deleteNotificationTemplatesInBulkV1: (requestParameters: notificationsTypes.NotificationsApiDeleteNotificationTemplatesInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.deleteNotificationTemplatesInBulkV1(requestParameters));
  },
  deleteOauthClientV1: (requestParameters: oauthClientsTypes.OAuthClientsApiDeleteOauthClientV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const oauthclientsapi = new sdk.OAuthClientsApi(apiConfig);
    return handleApiCall(() => oauthclientsapi.deleteOauthClientV1(requestParameters));
  },
  deleteObjectMappingV1: (requestParameters: configurationHubTypes.ConfigurationHubApiDeleteObjectMappingV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.deleteObjectMappingV1(requestParameters));
  },
  deleteOwnershipCorrelationConfigV1: (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiDeleteOwnershipCorrelationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.deleteOwnershipCorrelationConfigV1(requestParameters));
  },
  deletePageContentByIdNerm: (requestParameters: sdk.PageContentsNERMApiDeletePageContentByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContents200ResponseNERM>> => {
    const pagecontentsnermapi = new sdk.PageContentsNERMApi(apiConfig);
    return handleApiCall(() => pagecontentsnermapi.deletePageContentById(requestParameters));
  },
  deletePageContentByUidNerm: (requestParameters: sdk.PageContentsNERMApiDeletePageContentByUidRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContents200ResponseNERM>> => {
    const pagecontentsnermapi = new sdk.PageContentsNERMApi(apiConfig);
    return handleApiCall(() => pagecontentsnermapi.deletePageContentByUid(requestParameters));
  },
  deletePageContentTranslationByIdNerm: (requestParameters: sdk.PageContentTranslationsNERMApiDeletePageContentTranslationByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContentTranslation200ResponseNERM>> => {
    const pagecontenttranslationsnermapi = new sdk.PageContentTranslationsNERMApi(apiConfig);
    return handleApiCall(() => pagecontenttranslationsnermapi.deletePageContentTranslationById(requestParameters));
  },
  deletePageContentTranslationByUidNerm: (requestParameters: sdk.PageContentTranslationsNERMApiDeletePageContentTranslationByUidRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContentTranslation200ResponseNERM>> => {
    const pagecontenttranslationsnermapi = new sdk.PageContentTranslationsNERMApi(apiConfig);
    return handleApiCall(() => pagecontenttranslationsnermapi.deletePageContentTranslationByUid(requestParameters));
  },
  deletePageElementByIdNerm: (requestParameters: sdk.PageElementsNERMApiDeletePageElementByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageElements200ResponseNERM>> => {
    const pageelementsnermapi = new sdk.PageElementsNERMApi(apiConfig);
    return handleApiCall(() => pageelementsnermapi.deletePageElementById(requestParameters));
  },
  deletePageElementByUidNerm: (requestParameters: sdk.PageElementsNERMApiDeletePageElementByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageElements200ResponseNERM>> => {
    const pageelementsnermapi = new sdk.PageElementsNERMApi(apiConfig);
    return handleApiCall(() => pageelementsnermapi.deletePageElementByUid(requestParameters));
  },
  deleteParameterV1: (requestParameters: parameterStorageTypes.ParameterStorageApiDeleteParameterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const parameterstorageapi = new sdk.ParameterStorageApi(apiConfig);
    return handleApiCall(() => parameterstorageapi.deleteParameterV1(requestParameters));
  },
  deletePasswordPolicyV1: (requestParameters: passwordPoliciesTypes.PasswordPoliciesApiDeletePasswordPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const passwordpoliciesapi = new sdk.PasswordPoliciesApi(apiConfig);
    return handleApiCall(() => passwordpoliciesapi.deletePasswordPolicyV1(requestParameters));
  },
  deletePasswordSyncGroupV1: (requestParameters: passwordSyncGroupsTypes.PasswordSyncGroupsApiDeletePasswordSyncGroupV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const passwordsyncgroupsapi = new sdk.PasswordSyncGroupsApi(apiConfig);
    return handleApiCall(() => passwordsyncgroupsapi.deletePasswordSyncGroupV1(requestParameters));
  },
  deletePersonalAccessTokenV1: (requestParameters: personalAccessTokensTypes.PersonalAccessTokensApiDeletePersonalAccessTokenV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const personalaccesstokensapi = new sdk.PersonalAccessTokensApi(apiConfig);
    return handleApiCall(() => personalaccesstokensapi.deletePersonalAccessTokenV1(requestParameters));
  },
  deleteProfileByIdNerm: (requestParameters: sdk.ProfilesNERMApiDeleteProfileByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.deleteProfileById(requestParameters));
  },
  deleteProfilesNerm: (requestParameters: sdk.ProfilesNERMApiDeleteProfilesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DeleteProfiles200ResponseNERM>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.deleteProfiles(requestParameters));
  },
  deleteProfileTypeByIdNerm: (requestParameters: sdk.ProfileTypesNERMApiDeleteProfileTypeByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DeleteProfileTypeById200ResponseNERM>> => {
    const profiletypesnermapi = new sdk.ProfileTypesNERMApi(apiConfig);
    return handleApiCall(() => profiletypesnermapi.deleteProfileTypeById(requestParameters));
  },
  deleteProfileTypeByUidNerm: (requestParameters: sdk.ProfileTypesNERMApiDeleteProfileTypeByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DeleteProfileTypeById200ResponseNERM>> => {
    const profiletypesnermapi = new sdk.ProfileTypesNERMApi(apiConfig);
    return handleApiCall(() => profiletypesnermapi.deleteProfileTypeByUid(requestParameters));
  },
  deleteProvisioningPolicyV1: (requestParameters: sourcesTypes.SourcesApiDeleteProvisioningPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.deleteProvisioningPolicyV1(requestParameters));
  },
  deleteProvisioningPolicyV2: (requestParameters: sourcesTypes.SourcesApiDeleteProvisioningPolicyV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.deleteProvisioningPolicyV2(requestParameters));
  },
  deleteReassignmentConfigurationV1: (requestParameters: workReassignmentTypes.WorkReassignmentApiDeleteReassignmentConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const workreassignmentapi = new sdk.WorkReassignmentApi(apiConfig);
    return handleApiCall(() => workreassignmentapi.deleteReassignmentConfigurationV1(requestParameters));
  },
  deleteRoleProfileNerm: (requestParameters: sdk.RoleProfilesNERMApiDeleteRoleProfileRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const roleprofilesnermapi = new sdk.RoleProfilesNERMApi(apiConfig);
    return handleApiCall(() => roleprofilesnermapi.deleteRoleProfile(requestParameters));
  },
  deleteRoleV1: (requestParameters: rolesTypes.RolesApiDeleteRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.deleteRoleV1(requestParameters));
  },
  deleteSavedSearchV1: (requestParameters: savedSearchTypes.SavedSearchApiDeleteSavedSearchV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const savedsearchapi = new sdk.SavedSearchApi(apiConfig);
    return handleApiCall(() => savedsearchapi.deleteSavedSearchV1(requestParameters));
  },
  deleteScheduledActionV1: (requestParameters: configurationHubTypes.ConfigurationHubApiDeleteScheduledActionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.deleteScheduledActionV1(requestParameters));
  },
  deleteScheduledSearchV1: (requestParameters: scheduledSearchTypes.ScheduledSearchApiDeleteScheduledSearchV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const scheduledsearchapi = new sdk.ScheduledSearchApi(apiConfig);
    return handleApiCall(() => scheduledsearchapi.deleteScheduledSearchV1(requestParameters));
  },
  deleteScheduleV1: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDeleteScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.deleteScheduleV1(requestParameters));
  },
  deleteSearchAttributeConfigV1: (requestParameters: searchAttributeConfigurationTypes.SearchAttributeConfigurationApiDeleteSearchAttributeConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const searchattributeconfigurationapi = new sdk.SearchAttributeConfigurationApi(apiConfig);
    return handleApiCall(() => searchattributeconfigurationapi.deleteSearchAttributeConfigV1(requestParameters));
  },
  deleteSegmentV1: (requestParameters: segmentsTypes.SegmentsApiDeleteSegmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const segmentsapi = new sdk.SegmentsApi(apiConfig);
    return handleApiCall(() => segmentsapi.deleteSegmentV1(requestParameters));
  },
  deleteServiceDeskIntegrationV1: (requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiDeleteServiceDeskIntegrationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const servicedeskintegrationapi = new sdk.ServiceDeskIntegrationApi(apiConfig);
    return handleApiCall(() => servicedeskintegrationapi.deleteServiceDeskIntegrationV1(requestParameters));
  },
  deleteSIMIntegrationV1: (requestParameters: simIntegrationsTypes.SIMIntegrationsApiDeleteSIMIntegrationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const simintegrationsapi = new sdk.SIMIntegrationsApi(apiConfig);
    return handleApiCall(() => simintegrationsapi.deleteSIMIntegrationV1(requestParameters));
  },
  deleteSodPolicyScheduleV1: (requestParameters: sodPoliciesTypes.SODPoliciesApiDeleteSodPolicyScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.deleteSodPolicyScheduleV1(requestParameters));
  },
  deleteSodPolicyV1: (requestParameters: sodPoliciesTypes.SODPoliciesApiDeleteSodPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.deleteSodPolicyV1(requestParameters));
  },
  deleteSourceAppV1: (requestParameters: appsTypes.AppsApiDeleteSourceAppV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<appsTypes.SourceApp>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.deleteSourceAppV1(requestParameters));
  },
  deleteSourceScheduleV1: (requestParameters: sourcesTypes.SourcesApiDeleteSourceScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.deleteSourceScheduleV1(requestParameters));
  },
  deleteSourceSchemaV1: (requestParameters: sourcesTypes.SourcesApiDeleteSourceSchemaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.deleteSourceSchemaV1(requestParameters));
  },
  deleteSourceV1: (requestParameters: sourcesTypes.SourcesApiDeleteSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.DeleteSourceV1202Response>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.deleteSourceV1(requestParameters));
  },
  deleteStreamV1: (requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiDeleteStreamV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const sharedsignalsframeworkssfapi = new sdk.SharedSignalsFrameworkSSFApi(apiConfig);
    return handleApiCall(() => sharedsignalsframeworkssfapi.deleteStreamV1(requestParameters));
  },
  deleteSubscriptionV1: (requestParameters: triggersTypes.TriggersApiDeleteSubscriptionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const triggersapi = new sdk.TriggersApi(apiConfig);
    return handleApiCall(() => triggersapi.deleteSubscriptionV1(requestParameters));
  },
  deleteSyncedAttributeNerm: (requestParameters: sdk.SyncedAttributesNERMApiDeleteSyncedAttributeRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DeleteProfileTypeById200ResponseNERM>> => {
    const syncedattributesnermapi = new sdk.SyncedAttributesNERMApi(apiConfig);
    return handleApiCall(() => syncedattributesnermapi.deleteSyncedAttribute(requestParameters));
  },
  deleteTagByIdV1: (requestParameters: tagsTypes.TagsApiDeleteTagByIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const tagsapi = new sdk.TagsApi(apiConfig);
    return handleApiCall(() => tagsapi.deleteTagByIdV1(requestParameters));
  },
  deleteTaggedObjectV1: (requestParameters: taggedObjectsTypes.TaggedObjectsApiDeleteTaggedObjectV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const taggedobjectsapi = new sdk.TaggedObjectsApi(apiConfig);
    return handleApiCall(() => taggedobjectsapi.deleteTaggedObjectV1(requestParameters));
  },
  deleteTagsToManyObjectV1: (requestParameters: taggedObjectsTypes.TaggedObjectsApiDeleteTagsToManyObjectV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const taggedobjectsapi = new sdk.TaggedObjectsApi(apiConfig);
    return handleApiCall(() => taggedobjectsapi.deleteTagsToManyObjectV1(requestParameters));
  },
  deleteTaskV1: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiDeleteTaskV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.deleteTaskV1(requestParameters));
  },
  deleteTransformV1: (requestParameters: transformsTypes.TransformsApiDeleteTransformV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const transformsapi = new sdk.TransformsApi(apiConfig);
    return handleApiCall(() => transformsapi.deleteTransformV1(requestParameters));
  },
  deleteUploadedConfigurationV1: (requestParameters: configurationHubTypes.ConfigurationHubApiDeleteUploadedConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.deleteUploadedConfigurationV1(requestParameters));
  },
  deleteUserLevelV1: (requestParameters: customUserLevelsTypes.CustomUserLevelsApiDeleteUserLevelV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const customuserlevelsapi = new sdk.CustomUserLevelsApi(apiConfig);
    return handleApiCall(() => customuserlevelsapi.deleteUserLevelV1(requestParameters));
  },
  deleteUserNerm: (requestParameters: sdk.UsersNERMApiDeleteUserRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.DeleteProfileTypeById200ResponseNERM>> => {
    const usersnermapi = new sdk.UsersNERMApi(apiConfig);
    return handleApiCall(() => usersnermapi.deleteUser(requestParameters));
  },
  deleteUserProfileNerm: (requestParameters: sdk.UserProfilesNERMApiDeleteUserProfileRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const userprofilesnermapi = new sdk.UserProfilesNERMApi(apiConfig);
    return handleApiCall(() => userprofilesnermapi.deleteUserProfile(requestParameters));
  },
  deleteUserProfilesNerm: (requestParameters: sdk.UserProfilesNERMApiDeleteUserProfilesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateUserProfiles200ResponseNERM>> => {
    const userprofilesnermapi = new sdk.UserProfilesNERMApi(apiConfig);
    return handleApiCall(() => userprofilesnermapi.deleteUserProfiles(requestParameters));
  },
  deleteUserRoleNerm: (requestParameters: sdk.UserRolesNERMApiDeleteUserRoleRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const userrolesnermapi = new sdk.UserRolesNERMApi(apiConfig);
    return handleApiCall(() => userrolesnermapi.deleteUserRole(requestParameters));
  },
  deleteVerifiedFromAddressV1: (requestParameters: notificationsTypes.NotificationsApiDeleteVerifiedFromAddressV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.deleteVerifiedFromAddressV1(requestParameters));
  },
  deleteWorkflowV1: (requestParameters: workflowsTypes.WorkflowsApiDeleteWorkflowV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.deleteWorkflowV1(requestParameters));
  },
  deleteWorkgroupMembersV1: (requestParameters: governanceGroupsTypes.GovernanceGroupsApiDeleteWorkgroupMembersV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<governanceGroupsTypes.WorkgroupMemberDeleteItem>>> => {
    const governancegroupsapi = new sdk.GovernanceGroupsApi(apiConfig);
    return handleApiCall(() => governancegroupsapi.deleteWorkgroupMembersV1(requestParameters));
  },
  deleteWorkgroupsInBulkV1: (requestParameters: governanceGroupsTypes.GovernanceGroupsApiDeleteWorkgroupsInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<governanceGroupsTypes.WorkgroupDeleteItem>>> => {
    const governancegroupsapi = new sdk.GovernanceGroupsApi(apiConfig);
    return handleApiCall(() => governancegroupsapi.deleteWorkgroupsInBulkV1(requestParameters));
  },
  deleteWorkgroupV1: (requestParameters: governanceGroupsTypes.GovernanceGroupsApiDeleteWorkgroupV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const governancegroupsapi = new sdk.GovernanceGroupsApi(apiConfig);
    return handleApiCall(() => governancegroupsapi.deleteWorkgroupV1(requestParameters));
  },
  disableAccountForIdentityV1: (requestParameters: accountsTypes.AccountsApiDisableAccountForIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.disableAccountForIdentityV1(requestParameters));
  },
  disableAccountsForIdentitiesV1: (requestParameters: accountsTypes.AccountsApiDisableAccountsForIdentitiesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accountsTypes.BulkIdentitiesAccountsResponse>>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.disableAccountsForIdentitiesV1(requestParameters));
  },
  disableAccountV1: (requestParameters: accountsTypes.AccountsApiDisableAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountsTypes.AccountsAsyncResult>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.disableAccountV1(requestParameters));
  },
  downloadRoleInsightsEntitlementsChangesV1: (requestParameters: roleInsightsTypes.RoleInsightsApiDownloadRoleInsightsEntitlementsChangesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<string>> => {
    const roleinsightsapi = new sdk.RoleInsightsApi(apiConfig);
    return handleApiCall(() => roleinsightsapi.downloadRoleInsightsEntitlementsChangesV1(requestParameters));
  },
  downloadRoleMiningPotentialRoleZipV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiDownloadRoleMiningPotentialRoleZipV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<File>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.downloadRoleMiningPotentialRoleZipV1(requestParameters));
  },
  enableAccountForIdentityV1: (requestParameters: accountsTypes.AccountsApiEnableAccountForIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.enableAccountForIdentityV1(requestParameters));
  },
  enableAccountsForIdentitiesV1: (requestParameters: accountsTypes.AccountsApiEnableAccountsForIdentitiesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accountsTypes.BulkIdentitiesAccountsResponse>>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.enableAccountsForIdentitiesV1(requestParameters));
  },
  enableAccountV1: (requestParameters: accountsTypes.AccountsApiEnableAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountsTypes.AccountsAsyncResult>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.enableAccountV1(requestParameters));
  },
  executeSavedSearchV1: (requestParameters: savedSearchTypes.SavedSearchApiExecuteSavedSearchV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const savedsearchapi = new sdk.SavedSearchApi(apiConfig);
    return handleApiCall(() => savedsearchapi.executeSavedSearchV1(requestParameters));
  },
  exportFormDefinitionsByTenantV1: (requestParameters: customFormsTypes.CustomFormsApiExportFormDefinitionsByTenantV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<customFormsTypes.ExportFormDefinitionsByTenantV1200ResponseInner>>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.exportFormDefinitionsByTenantV1(requestParameters));
  },
  exportIdentityProfilesV1: (requestParameters: identityProfilesTypes.IdentityProfilesApiExportIdentityProfilesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identityProfilesTypes.IdentityProfileExportedObject>>> => {
    const identityprofilesapi = new sdk.IdentityProfilesApi(apiConfig);
    return handleApiCall(() => identityprofilesapi.exportIdentityProfilesV1(requestParameters));
  },
  exportNonEmployeeRecordsV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiExportNonEmployeeRecordsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.exportNonEmployeeRecordsV1(requestParameters));
  },
  exportNonEmployeeSourceSchemaTemplateV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiExportNonEmployeeSourceSchemaTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.exportNonEmployeeSourceSchemaTemplateV1(requestParameters));
  },
  exportOutliersZipV1: (requestParameters: iaiOutliersTypes.IAIOutliersApiExportOutliersZipV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<File>> => {
    const iaioutliersapi = new sdk.IAIOutliersApi(apiConfig);
    return handleApiCall(() => iaioutliersapi.exportOutliersZipV1(requestParameters));
  },
  exportRoleMiningPotentialRoleAsyncV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiExportRoleMiningPotentialRoleAsyncV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRoleMiningTypes.RoleMiningPotentialRoleExportResponse>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.exportRoleMiningPotentialRoleAsyncV1(requestParameters));
  },
  exportRoleMiningPotentialRoleStatusV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiExportRoleMiningPotentialRoleStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRoleMiningTypes.RoleMiningPotentialRoleExportResponse>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.exportRoleMiningPotentialRoleStatusV1(requestParameters));
  },
  exportRoleMiningPotentialRoleV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiExportRoleMiningPotentialRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<File>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.exportRoleMiningPotentialRoleV1(requestParameters));
  },
  exportSpConfigV1: (requestParameters: spConfigTypes.SPConfigApiExportSpConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<spConfigTypes.SpConfigExportJob>> => {
    const spconfigapi = new sdk.SPConfigApi(apiConfig);
    return handleApiCall(() => spconfigapi.exportSpConfigV1(requestParameters));
  },
  forwardAccessRequestV1: (requestParameters: accessRequestApprovalsTypes.AccessRequestApprovalsApiForwardAccessRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const accessrequestapprovalsapi = new sdk.AccessRequestApprovalsApi(apiConfig);
    return handleApiCall(() => accessrequestapprovalsapi.forwardAccessRequestV1(requestParameters));
  },
  forwardWorkItemV1: (requestParameters: workItemsTypes.WorkItemsApiForwardWorkItemV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.forwardWorkItemV1(requestParameters));
  },
  generateIdentityPreviewV1: (requestParameters: identityProfilesTypes.IdentityProfilesApiGenerateIdentityPreviewV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityProfilesTypes.IdentityPreviewResponse>> => {
    const identityprofilesapi = new sdk.IdentityProfilesApi(apiConfig);
    return handleApiCall(() => identityprofilesapi.generateIdentityPreviewV1(requestParameters));
  },
  getAccessModelMetadataAttributeV1: (requestParameters: accessModelMetadataTypes.AccessModelMetadataApiGetAccessModelMetadataAttributeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessModelMetadataTypes.AttributeDTO>> => {
    const accessmodelmetadataapi = new sdk.AccessModelMetadataApi(apiConfig);
    return handleApiCall(() => accessmodelmetadataapi.getAccessModelMetadataAttributeV1(requestParameters));
  },
  getAccessModelMetadataAttributeValueV1: (requestParameters: accessModelMetadataTypes.AccessModelMetadataApiGetAccessModelMetadataAttributeValueV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessModelMetadataTypes.AttributeValueDTO>> => {
    const accessmodelmetadataapi = new sdk.AccessModelMetadataApi(apiConfig);
    return handleApiCall(() => accessmodelmetadataapi.getAccessModelMetadataAttributeValueV1(requestParameters));
  },
  getAccessProfileEntitlementsV1: (requestParameters: accessProfilesTypes.AccessProfilesApiGetAccessProfileEntitlementsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accessProfilesTypes.Entitlement>>> => {
    const accessprofilesapi = new sdk.AccessProfilesApi(apiConfig);
    return handleApiCall(() => accessprofilesapi.getAccessProfileEntitlementsV1(requestParameters));
  },
  getAccessProfileV1: (requestParameters: accessProfilesTypes.AccessProfilesApiGetAccessProfileV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessProfilesTypes.AccessProfile>> => {
    const accessprofilesapi = new sdk.AccessProfilesApi(apiConfig);
    return handleApiCall(() => accessprofilesapi.getAccessProfileV1(requestParameters));
  },
  getAccessRequestApprovalSummaryV1: (requestParameters: accessRequestApprovalsTypes.AccessRequestApprovalsApiGetAccessRequestApprovalSummaryV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<accessRequestApprovalsTypes.ApprovalSummary>> => {
    const accessrequestapprovalsapi = new sdk.AccessRequestApprovalsApi(apiConfig);
    return handleApiCall(() => accessrequestapprovalsapi.getAccessRequestApprovalSummaryV1(requestParameters));
  },
  getAccessRequestConfigV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<accessRequestsTypes.AccessRequestConfig>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.getAccessRequestConfigV1());
  },
  getAccessRequestConfigV2: (apiConfig: sdk.Configuration): Promise<ApiResponse<accessRequestsTypes.AccessRequestConfig2>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.getAccessRequestConfigV2());
  },
  getAccessRequestIdentityMetricsV1: (requestParameters: accessRequestIdentityMetricsTypes.AccessRequestIdentityMetricsApiGetAccessRequestIdentityMetricsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const accessrequestidentitymetricsapi = new sdk.AccessRequestIdentityMetricsApi(apiConfig);
    return handleApiCall(() => accessrequestidentitymetricsapi.getAccessRequestIdentityMetricsV1(requestParameters));
  },
  getAccessRequestRecommendationsConfigV1: (requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiGetAccessRequestRecommendationsConfigV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiAccessRequestRecommendationsTypes.AccessRequestRecommendationConfigDto>> => {
    const iaiaccessrequestrecommendationsapi = new sdk.IAIAccessRequestRecommendationsApi(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsapi.getAccessRequestRecommendationsConfigV1(requestParameters));
  },
  getAccessRequestRecommendationsIgnoredItemsV1: (requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiGetAccessRequestRecommendationsIgnoredItemsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiAccessRequestRecommendationsTypes.AccessRequestRecommendationActionItemResponseDto>>> => {
    const iaiaccessrequestrecommendationsapi = new sdk.IAIAccessRequestRecommendationsApi(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsapi.getAccessRequestRecommendationsIgnoredItemsV1(requestParameters));
  },
  getAccessRequestRecommendationsRequestedItemsV1: (requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiGetAccessRequestRecommendationsRequestedItemsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiAccessRequestRecommendationsTypes.AccessRequestRecommendationActionItemResponseDto>>> => {
    const iaiaccessrequestrecommendationsapi = new sdk.IAIAccessRequestRecommendationsApi(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsapi.getAccessRequestRecommendationsRequestedItemsV1(requestParameters));
  },
  getAccessRequestRecommendationsV1: (requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiGetAccessRequestRecommendationsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiAccessRequestRecommendationsTypes.AccessRequestRecommendationItemDetail>>> => {
    const iaiaccessrequestrecommendationsapi = new sdk.IAIAccessRequestRecommendationsApi(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsapi.getAccessRequestRecommendationsV1(requestParameters));
  },
  getAccessRequestRecommendationsViewedItemsV1: (requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiGetAccessRequestRecommendationsViewedItemsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiAccessRequestRecommendationsTypes.AccessRequestRecommendationActionItemResponseDto>>> => {
    const iaiaccessrequestrecommendationsapi = new sdk.IAIAccessRequestRecommendationsApi(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsapi.getAccessRequestRecommendationsViewedItemsV1(requestParameters));
  },
  getAccountActivityV1: (requestParameters: accountActivitiesTypes.AccountActivitiesApiGetAccountActivityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountActivitiesTypes.AccountActivity>> => {
    const accountactivitiesapi = new sdk.AccountActivitiesApi(apiConfig);
    return handleApiCall(() => accountactivitiesapi.getAccountActivityV1(requestParameters));
  },
  getAccountAggregationStatusV1: (requestParameters: accountAggregationsTypes.AccountAggregationsApiGetAccountAggregationStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountAggregationsTypes.AccountAggregationStatus>> => {
    const accountaggregationsapi = new sdk.AccountAggregationsApi(apiConfig);
    return handleApiCall(() => accountaggregationsapi.getAccountAggregationStatusV1(requestParameters));
  },
  getAccountDeleteApprovalConfigV1: (requestParameters: sourcesTypes.SourcesApiGetAccountDeleteApprovalConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.AccountDeleteConfigDto>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getAccountDeleteApprovalConfigV1(requestParameters));
  },
  getAccountDeletionRequestsV1: (requestParameters: accountDeletionRequestsTypes.AccountDeletionRequestsApiGetAccountDeletionRequestsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accountDeletionRequestsTypes.AccountActionRequestDto>>> => {
    const accountdeletionrequestsapi = new sdk.AccountDeletionRequestsApi(apiConfig);
    return handleApiCall(() => accountdeletionrequestsapi.getAccountDeletionRequestsV1(requestParameters));
  },
  getAccountEntitlementsV1: (requestParameters: accountsTypes.AccountsApiGetAccountEntitlementsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accountsTypes.Entitlement>>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.getAccountEntitlementsV1(requestParameters));
  },
  getAccountsSchemaV1: (requestParameters: sourcesTypes.SourcesApiGetAccountsSchemaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getAccountsSchemaV1(requestParameters));
  },
  getAccountV1: (requestParameters: accountsTypes.AccountsApiGetAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountsTypes.Account>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.getAccountV1(requestParameters));
  },
  getAcctAggregationGroupsV1: (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiGetAcctAggregationGroupsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<multiHostIntegrationTypes.MultiHostIntegrationsAggScheduleUpdate>>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.getAcctAggregationGroupsV1(requestParameters));
  },
  getActiveCampaignsV1: (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiGetActiveCampaignsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<certificationCampaignsTypes.GetActiveCampaignsV1200ResponseInner>>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.getActiveCampaignsV1(requestParameters));
  },
  getAdvancedSearchNerm: (apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetAdvancedSearch200ResponseNERM>> => {
    const advancedsearchnermapi = new sdk.AdvancedSearchNERMApi(apiConfig);
    return handleApiCall(() => advancedsearchnermapi.getAdvancedSearch());
  },
  getAllPotentialRoleSummariesV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetAllPotentialRoleSummariesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiRoleMiningTypes.RoleMiningPotentialRoleSummary>>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getAllPotentialRoleSummariesV1(requestParameters));
  },
  getApplicationsV1: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiGetApplicationsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<dataAccessSecurityTypes.ApplicationItem>>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.getApplicationsV1(requestParameters));
  },
  getApplicationV1: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiGetApplicationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<dataAccessSecurityTypes.ApplicationItem>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.getApplicationV1(requestParameters));
  },
  getApprovalsConfigV1: (requestParameters: approvalsTypes.ApprovalsApiGetApprovalsConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<approvalsTypes.ApprovalConfig>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.getApprovalsConfigV1(requestParameters));
  },
  getApprovalsV1: (requestParameters: approvalsTypes.ApprovalsApiGetApprovalsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<approvalsTypes.Approval2>>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.getApprovalsV1(requestParameters));
  },
  getApprovalV1: (requestParameters: approvalsTypes.ApprovalsApiGetApprovalV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<approvalsTypes.Approval2>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.getApprovalV1(requestParameters));
  },
  getAttestationDocumentV1: (requestParameters: parameterStorageTypes.ParameterStorageApiGetAttestationDocumentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<parameterStorageTypes.ParameterStorageAttestationDocument>> => {
    const parameterstorageapi = new sdk.ParameterStorageApi(apiConfig);
    return handleApiCall(() => parameterstorageapi.getAttestationDocumentV1(requestParameters));
  },
  getAttributeByIdNerm: (requestParameters: sdk.AttributesNERMApiGetAttributeByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateAttribute201ResponseNERM>> => {
    const attributesnermapi = new sdk.AttributesNERMApi(apiConfig);
    return handleApiCall(() => attributesnermapi.getAttributeById(requestParameters));
  },
  getAttributeByUidNerm: (requestParameters: sdk.AttributesNERMApiGetAttributeByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateAttribute201ResponseNERM>> => {
    const attributesnermapi = new sdk.AttributesNERMApi(apiConfig);
    return handleApiCall(() => attributesnermapi.getAttributeByUid(requestParameters));
  },
  getAttributeOptionByIdNerm: (requestParameters: sdk.AttributeOptionsNERMApiGetAttributeOptionByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitAttributeOption200ResponseNERM>> => {
    const attributeoptionsnermapi = new sdk.AttributeOptionsNERMApi(apiConfig);
    return handleApiCall(() => attributeoptionsnermapi.getAttributeOptionById(requestParameters));
  },
  getAttributeOptionByUidNerm: (requestParameters: sdk.AttributeOptionsNERMApiGetAttributeOptionByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitAttributeOption200ResponseNERM>> => {
    const attributeoptionsnermapi = new sdk.AttributeOptionsNERMApi(apiConfig);
    return handleApiCall(() => attributeoptionsnermapi.getAttributeOptionByUid(requestParameters));
  },
  getAttributeOptionsNerm: (requestParameters: sdk.AttributeOptionsNERMApiGetAttributeOptionsRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetAttributeOptions200ResponseNERM>> => {
    const attributeoptionsnermapi = new sdk.AttributeOptionsNERMApi(apiConfig);
    return handleApiCall(() => attributeoptionsnermapi.getAttributeOptions(requestParameters));
  },
  getAttributesNerm: (requestParameters: sdk.AttributesNERMApiGetAttributesRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetAttributes200ResponseNERM>> => {
    const attributesnermapi = new sdk.AttributesNERMApi(apiConfig);
    return handleApiCall(() => attributesnermapi.getAttributes(requestParameters));
  },
  getAuthOrgLockoutConfigV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<globalTenantSecuritySettingsTypes.LockoutConfiguration>> => {
    const globaltenantsecuritysettingsapi = new sdk.GlobalTenantSecuritySettingsApi(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsapi.getAuthOrgLockoutConfigV1());
  },
  getAuthOrgNetworkConfigV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<globalTenantSecuritySettingsTypes.NetworkConfiguration>> => {
    const globaltenantsecuritysettingsapi = new sdk.GlobalTenantSecuritySettingsApi(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsapi.getAuthOrgNetworkConfigV1());
  },
  getAuthOrgServiceProviderConfigV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<globalTenantSecuritySettingsTypes.ServiceProviderConfiguration>> => {
    const globaltenantsecuritysettingsapi = new sdk.GlobalTenantSecuritySettingsApi(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsapi.getAuthOrgServiceProviderConfigV1());
  },
  getAuthOrgSessionConfigV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<globalTenantSecuritySettingsTypes.SessionConfiguration>> => {
    const globaltenantsecuritysettingsapi = new sdk.GlobalTenantSecuritySettingsApi(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsapi.getAuthOrgSessionConfigV1());
  },
  getAuthUserV1: (requestParameters: authUsersTypes.AuthUsersApiGetAuthUserV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<authUsersTypes.AuthUser>> => {
    const authusersapi = new sdk.AuthUsersApi(apiConfig);
    return handleApiCall(() => authusersapi.getAuthUserV1(requestParameters));
  },
  getAutoWriteSettingsV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<suggestedEntitlementDescriptionTypes.AutoWriteSettingResponse>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.getAutoWriteSettingsV1());
  },
  getBrandingListV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<Array<brandingTypes.BrandingItem>>> => {
    const brandingapi = new sdk.BrandingApi(apiConfig);
    return handleApiCall(() => brandingapi.getBrandingListV1());
  },
  getBrandingV1: (requestParameters: brandingTypes.BrandingApiGetBrandingV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<brandingTypes.BrandingItem>> => {
    const brandingapi = new sdk.BrandingApi(apiConfig);
    return handleApiCall(() => brandingapi.getBrandingV1(requestParameters));
  },
  getBulkUpdateStatusByIdV1: (requestParameters: rolesTypes.RolesApiGetBulkUpdateStatusByIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<rolesTypes.RoleBulkUpdateResponse>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.getBulkUpdateStatusByIdV1(requestParameters));
  },
  getBulkUpdateStatusV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<Array<rolesTypes.RoleGetAllBulkUpdateResponse>>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.getBulkUpdateStatusV1());
  },
  getCampaignFilterByIdV1: (requestParameters: certificationCampaignFiltersTypes.CertificationCampaignFiltersApiGetCampaignFilterByIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignFiltersTypes.CampaignFilterDetails>> => {
    const certificationcampaignfiltersapi = new sdk.CertificationCampaignFiltersApi(apiConfig);
    return handleApiCall(() => certificationcampaignfiltersapi.getCampaignFilterByIdV1(requestParameters));
  },
  getCampaignReportsConfigV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignsTypes.CampaignReportsConfig>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.getCampaignReportsConfigV1());
  },
  getCampaignReportsV1: (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiGetCampaignReportsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<certificationCampaignsTypes.CampaignReport>>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.getCampaignReportsV1(requestParameters));
  },
  getCampaignTemplateScheduleV1: (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiGetCampaignTemplateScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignsTypes.Schedule2>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.getCampaignTemplateScheduleV1(requestParameters));
  },
  getCampaignTemplatesV1: (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiGetCampaignTemplatesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<certificationCampaignsTypes.CampaignTemplate>>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.getCampaignTemplatesV1(requestParameters));
  },
  getCampaignTemplateV1: (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiGetCampaignTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignsTypes.CampaignTemplate>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.getCampaignTemplateV1(requestParameters));
  },
  getCampaignV1: (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiGetCampaignV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignsTypes.GetCampaignV1200Response>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.getCampaignV1(requestParameters));
  },
  getCertificationTaskV1: (requestParameters: certificationsTypes.CertificationsApiGetCertificationTaskV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationsTypes.CertificationTask>> => {
    const certificationsapi = new sdk.CertificationsApi(apiConfig);
    return handleApiCall(() => certificationsapi.getCertificationTaskV1(requestParameters));
  },
  getClassifyMachineAccountFromSourceStatusV1: (requestParameters: classifySourceTypes.ClassifySourceApiGetClassifyMachineAccountFromSourceStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<classifySourceTypes.SourceClassificationStatus>> => {
    const classifysourceapi = new sdk.ClassifySourceApi(apiConfig);
    return handleApiCall(() => classifysourceapi.getClassifyMachineAccountFromSourceStatusV1(requestParameters));
  },
  getClientLogConfigurationV1: (requestParameters: managedClustersTypes.ManagedClustersApiGetClientLogConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClustersTypes.ClientLogConfiguration>> => {
    const managedclustersapi = new sdk.ManagedClustersApi(apiConfig);
    return handleApiCall(() => managedclustersapi.getClientLogConfigurationV1(requestParameters));
  },
  getCommonAccessV1: (requestParameters: iaiCommonAccessTypes.IAICommonAccessApiGetCommonAccessV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiCommonAccessTypes.CommonAccessResponse>>> => {
    const iaicommonaccessapi = new sdk.IAICommonAccessApi(apiConfig);
    return handleApiCall(() => iaicommonaccessapi.getCommonAccessV1(requestParameters));
  },
  getCompletedWorkItemsV1: (requestParameters: workItemsTypes.WorkItemsApiGetCompletedWorkItemsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workItemsTypes.WorkItems>>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.getCompletedWorkItemsV1(requestParameters));
  },
  getConnectorCorrelationConfigV1: (requestParameters: connectorsTypes.ConnectorsApiGetConnectorCorrelationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<string>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.getConnectorCorrelationConfigV1(requestParameters));
  },
  getConnectorCustomizerV1: (requestParameters: connectorCustomizersTypes.ConnectorCustomizersApiGetConnectorCustomizerV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorCustomizersTypes.ConnectorCustomizersResponse>> => {
    const connectorcustomizersapi = new sdk.ConnectorCustomizersApi(apiConfig);
    return handleApiCall(() => connectorcustomizersapi.getConnectorCustomizerV1(requestParameters));
  },
  getConnectorListV1: (requestParameters: connectorsTypes.ConnectorsApiGetConnectorListV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<connectorsTypes.V3ConnectorDto>>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.getConnectorListV1(requestParameters));
  },
  getConnectorRuleListV1: (requestParameters: connectorRuleManagementTypes.ConnectorRuleManagementApiGetConnectorRuleListV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<connectorRuleManagementTypes.ConnectorRuleResponse>>> => {
    const connectorrulemanagementapi = new sdk.ConnectorRuleManagementApi(apiConfig);
    return handleApiCall(() => connectorrulemanagementapi.getConnectorRuleListV1(requestParameters));
  },
  getConnectorRuleV1: (requestParameters: connectorRuleManagementTypes.ConnectorRuleManagementApiGetConnectorRuleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorRuleManagementTypes.ConnectorRuleResponse>> => {
    const connectorrulemanagementapi = new sdk.ConnectorRuleManagementApi(apiConfig);
    return handleApiCall(() => connectorrulemanagementapi.getConnectorRuleV1(requestParameters));
  },
  getConnectorSourceConfigV1: (requestParameters: connectorsTypes.ConnectorsApiGetConnectorSourceConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<string>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.getConnectorSourceConfigV1(requestParameters));
  },
  getConnectorSourceTemplateV1: (requestParameters: connectorsTypes.ConnectorsApiGetConnectorSourceTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<string>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.getConnectorSourceTemplateV1(requestParameters));
  },
  getConnectorTranslationsV1: (requestParameters: connectorsTypes.ConnectorsApiGetConnectorTranslationsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<string>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.getConnectorTranslationsV1(requestParameters));
  },
  getConnectorV1: (requestParameters: connectorsTypes.ConnectorsApiGetConnectorV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorsTypes.ConnectorDetail>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.getConnectorV1(requestParameters));
  },
  getCorrelationConfigV1: (requestParameters: sourcesTypes.SourcesApiGetCorrelationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.CorrelationConfig>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getCorrelationConfigV1(requestParameters));
  },
  getCountCompletedWorkItemsV1: (requestParameters: workItemsTypes.WorkItemsApiGetCountCompletedWorkItemsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<workItemsTypes.WorkItemsCount>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.getCountCompletedWorkItemsV1(requestParameters));
  },
  getCountWorkItemsV1: (requestParameters: workItemsTypes.WorkItemsApiGetCountWorkItemsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<workItemsTypes.WorkItemsCount>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.getCountWorkItemsV1(requestParameters));
  },
  getCreateMachineAccountRequestV1: (requestParameters: machineAccountCreationRequestTypes.MachineAccountCreationRequestApiGetCreateMachineAccountRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountCreationRequestTypes.AccountRequestDetailsDto>> => {
    const machineaccountcreationrequestapi = new sdk.MachineAccountCreationRequestApi(apiConfig);
    return handleApiCall(() => machineaccountcreationrequestapi.getCreateMachineAccountRequestV1(requestParameters));
  },
  getCustomPasswordInstructionsV1: (requestParameters: customPasswordInstructionsTypes.CustomPasswordInstructionsApiGetCustomPasswordInstructionsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customPasswordInstructionsTypes.CustomPasswordInstruction>> => {
    const custompasswordinstructionsapi = new sdk.CustomPasswordInstructionsApi(apiConfig);
    return handleApiCall(() => custompasswordinstructionsapi.getCustomPasswordInstructionsV1(requestParameters));
  },
  getCustomViolationReportV1: (requestParameters: sodPoliciesTypes.SODPoliciesApiGetCustomViolationReportV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<File>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.getCustomViolationReportV1(requestParameters));
  },
  getDataSegmentationEnabledForUserV1: (requestParameters: dataSegmentationTypes.DataSegmentationApiGetDataSegmentationEnabledForUserV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<boolean>> => {
    const datasegmentationapi = new sdk.DataSegmentationApi(apiConfig);
    return handleApiCall(() => datasegmentationapi.getDataSegmentationEnabledForUserV1(requestParameters));
  },
  getDataSegmentIdentityMembershipV1: (requestParameters: dataSegmentationTypes.DataSegmentationApiGetDataSegmentIdentityMembershipV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<dataSegmentationTypes.SegmentMembership>>> => {
    const datasegmentationapi = new sdk.DataSegmentationApi(apiConfig);
    return handleApiCall(() => datasegmentationapi.getDataSegmentIdentityMembershipV1(requestParameters));
  },
  getDataSegmentV1: (requestParameters: dataSegmentationTypes.DataSegmentationApiGetDataSegmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<dataSegmentationTypes.DataSegment>> => {
    const datasegmentationapi = new sdk.DataSegmentationApi(apiConfig);
    return handleApiCall(() => datasegmentationapi.getDataSegmentV1(requestParameters));
  },
  getDefaultIdentityAttributeConfigV1: (requestParameters: identityProfilesTypes.IdentityProfilesApiGetDefaultIdentityAttributeConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityProfilesTypes.IdentityAttributeConfig>> => {
    const identityprofilesapi = new sdk.IdentityProfilesApi(apiConfig);
    return handleApiCall(() => identityprofilesapi.getDefaultIdentityAttributeConfigV1(requestParameters));
  },
  getDefaultViolationReportV1: (requestParameters: sodPoliciesTypes.SODPoliciesApiGetDefaultViolationReportV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<File>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.getDefaultViolationReportV1(requestParameters));
  },
  getDeployV1: (requestParameters: configurationHubTypes.ConfigurationHubApiGetDeployV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<configurationHubTypes.DeployResponse>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.getDeployV1(requestParameters));
  },
  getDimensionEntitlementsV1: (requestParameters: dimensionsTypes.DimensionsApiGetDimensionEntitlementsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<dimensionsTypes.Entitlement>>> => {
    const dimensionsapi = new sdk.DimensionsApi(apiConfig);
    return handleApiCall(() => dimensionsapi.getDimensionEntitlementsV1(requestParameters));
  },
  getDimensionV1: (requestParameters: dimensionsTypes.DimensionsApiGetDimensionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<dimensionsTypes.Dimension>> => {
    const dimensionsapi = new sdk.DimensionsApi(apiConfig);
    return handleApiCall(() => dimensionsapi.getDimensionV1(requestParameters));
  },
  getDiscoveredApplicationsV1: (requestParameters: applicationDiscoveryTypes.ApplicationDiscoveryApiGetDiscoveredApplicationsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<applicationDiscoveryTypes.GetDiscoveredApplicationsV1200ResponseInner>>> => {
    const applicationdiscoveryapi = new sdk.ApplicationDiscoveryApi(apiConfig);
    return handleApiCall(() => applicationdiscoveryapi.getDiscoveredApplicationsV1(requestParameters));
  },
  getDkimAttributesV1: (requestParameters: notificationsTypes.NotificationsApiGetDkimAttributesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<notificationsTypes.DkimAttributes>>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.getDkimAttributesV1(requestParameters));
  },
  getEntitlementAggregationGroupsV1: (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiGetEntitlementAggregationGroupsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<multiHostIntegrationTypes.MultiHostIntegrationsAggScheduleUpdate>>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.getEntitlementAggregationGroupsV1(requestParameters));
  },
  getEntitlementChangesIdentitiesV1: (requestParameters: roleInsightsTypes.RoleInsightsApiGetEntitlementChangesIdentitiesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<roleInsightsTypes.RoleInsightsIdentities>>> => {
    const roleinsightsapi = new sdk.RoleInsightsApi(apiConfig);
    return handleApiCall(() => roleinsightsapi.getEntitlementChangesIdentitiesV1(requestParameters));
  },
  getEntitlementDetailsForIdentityV1: (requestParameters: accessRequestsTypes.AccessRequestsApiGetEntitlementDetailsForIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessRequestsTypes.IdentityEntitlementDetails>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.getEntitlementDetailsForIdentityV1(requestParameters));
  },
  getEntitlementDistributionPotentialRoleV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetEntitlementDistributionPotentialRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getEntitlementDistributionPotentialRoleV1(requestParameters));
  },
  getEntitlementRequestConfigV1: (requestParameters: entitlementsTypes.EntitlementsApiGetEntitlementRequestConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<entitlementsTypes.EntitlementRequestConfig>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.getEntitlementRequestConfigV1(requestParameters));
  },
  getEntitlementsPotentialRoleV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetEntitlementsPotentialRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiRoleMiningTypes.RoleMiningEntitlement>>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getEntitlementsPotentialRoleV1(requestParameters));
  },
  getEntitlementsSchemaV1: (requestParameters: sourcesTypes.SourcesApiGetEntitlementsSchemaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getEntitlementsSchemaV1(requestParameters));
  },
  getEntitlementV1: (requestParameters: entitlementsTypes.EntitlementsApiGetEntitlementV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<entitlementsTypes.EntitlementV2>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.getEntitlementV1(requestParameters));
  },
  getEvaluateReassignmentConfigurationV1: (requestParameters: workReassignmentTypes.WorkReassignmentApiGetEvaluateReassignmentConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workReassignmentTypes.EvaluateResponse>>> => {
    const workreassignmentapi = new sdk.WorkReassignmentApi(apiConfig);
    return handleApiCall(() => workreassignmentapi.getEvaluateReassignmentConfigurationV1(requestParameters));
  },
  getExcludedEntitlementsPotentialRoleV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetExcludedEntitlementsPotentialRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiRoleMiningTypes.RoleMiningEntitlement>>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getExcludedEntitlementsPotentialRoleV1(requestParameters));
  },
  getFileFromS3V1: (requestParameters: customFormsTypes.CustomFormsApiGetFileFromS3V1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<File>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.getFileFromS3V1(requestParameters));
  },
  getFormAttributeByIdNerm: (requestParameters: sdk.FormAttributesNERMApiGetFormAttributeByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetFormAttributes200ResponseNERM>> => {
    const formattributesnermapi = new sdk.FormAttributesNERMApi(apiConfig);
    return handleApiCall(() => formattributesnermapi.getFormAttributeById(requestParameters));
  },
  getFormAttributeByUidNerm: (requestParameters: sdk.FormAttributesNERMApiGetFormAttributeByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetFormAttributes200ResponseNERM>> => {
    const formattributesnermapi = new sdk.FormAttributesNERMApi(apiConfig);
    return handleApiCall(() => formattributesnermapi.getFormAttributeByUid(requestParameters));
  },
  getFormAttributesNerm: (apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetFormAttributes200ResponseNERM>> => {
    const formattributesnermapi = new sdk.FormAttributesNERMApi(apiConfig);
    return handleApiCall(() => formattributesnermapi.getFormAttributes());
  },
  getFormByIdNerm: (requestParameters: sdk.FormsNERMApiGetFormByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetForms200ResponseNERM>> => {
    const formsnermapi = new sdk.FormsNERMApi(apiConfig);
    return handleApiCall(() => formsnermapi.getFormById(requestParameters));
  },
  getFormByUidNerm: (requestParameters: sdk.FormsNERMApiGetFormByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetForms200ResponseNERM>> => {
    const formsnermapi = new sdk.FormsNERMApi(apiConfig);
    return handleApiCall(() => formsnermapi.getFormByUid(requestParameters));
  },
  getFormDefinitionByKeyV1: (requestParameters: customFormsTypes.CustomFormsApiGetFormDefinitionByKeyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.FormDefinitionResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.getFormDefinitionByKeyV1(requestParameters));
  },
  getFormInstanceByKeyV1: (requestParameters: customFormsTypes.CustomFormsApiGetFormInstanceByKeyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.FormInstanceResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.getFormInstanceByKeyV1(requestParameters));
  },
  getFormInstanceFileV1: (requestParameters: customFormsTypes.CustomFormsApiGetFormInstanceFileV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<File>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.getFormInstanceFileV1(requestParameters));
  },
  getFormsNerm: (apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetForms200ResponseNERM>> => {
    const formsnermapi = new sdk.FormsNERMApi(apiConfig);
    return handleApiCall(() => formsnermapi.getForms());
  },
  getHistoricalIdentityEventsV1: (requestParameters: identityHistoryTypes.IdentityHistoryApiGetHistoricalIdentityEventsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identityHistoryTypes.GetHistoricalIdentityEventsV1200ResponseInner>>> => {
    const identityhistoryapi = new sdk.IdentityHistoryApi(apiConfig);
    return handleApiCall(() => identityhistoryapi.getHistoricalIdentityEventsV1(requestParameters));
  },
  getHistoricalIdentityV1: (requestParameters: identityHistoryTypes.IdentityHistoryApiGetHistoricalIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityHistoryTypes.IdentityHistoryResponse>> => {
    const identityhistoryapi = new sdk.IdentityHistoryApi(apiConfig);
    return handleApiCall(() => identityhistoryapi.getHistoricalIdentityV1(requestParameters));
  },
  getIdentitiesPotentialRoleV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetIdentitiesPotentialRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiRoleMiningTypes.RoleMiningIdentity>>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getIdentitiesPotentialRoleV1(requestParameters));
  },
  getIdentityAccessSummariesV1: (requestParameters: certificationSummariesTypes.CertificationSummariesApiGetIdentityAccessSummariesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<certificationSummariesTypes.AccessSummary>>> => {
    const certificationsummariesapi = new sdk.CertificationSummariesApi(apiConfig);
    return handleApiCall(() => certificationsummariesapi.getIdentityAccessSummariesV1(requestParameters));
  },
  getIdentityAttributeV1: (requestParameters: identityAttributesTypes.IdentityAttributesApiGetIdentityAttributeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityAttributesTypes.IdentityAttribute2>> => {
    const identityattributesapi = new sdk.IdentityAttributesApi(apiConfig);
    return handleApiCall(() => identityattributesapi.getIdentityAttributeV1(requestParameters));
  },
  getIdentityCertificationItemPermissionsV1: (requestParameters: certificationsTypes.CertificationsApiGetIdentityCertificationItemPermissionsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<certificationsTypes.PermissionDTO>>> => {
    const certificationsapi = new sdk.CertificationsApi(apiConfig);
    return handleApiCall(() => certificationsapi.getIdentityCertificationItemPermissionsV1(requestParameters));
  },
  getIdentityCertificationV1: (requestParameters: certificationsTypes.CertificationsApiGetIdentityCertificationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationsTypes.IdentityCertificationDto>> => {
    const certificationsapi = new sdk.CertificationsApi(apiConfig);
    return handleApiCall(() => certificationsapi.getIdentityCertificationV1(requestParameters));
  },
  getIdentityDecisionSummaryV1: (requestParameters: certificationSummariesTypes.CertificationSummariesApiGetIdentityDecisionSummaryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationSummariesTypes.IdentityCertDecisionSummary>> => {
    const certificationsummariesapi = new sdk.CertificationSummariesApi(apiConfig);
    return handleApiCall(() => certificationsummariesapi.getIdentityDecisionSummaryV1(requestParameters));
  },
  getIdentityIntelligenceV1: (requestParameters: intelligenceTypes.IntelligenceApiGetIdentityIntelligenceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<intelligenceTypes.IntelIdentityAggregate>> => {
    const intelligenceapi = new sdk.IntelligenceApi(apiConfig);
    return handleApiCall(() => intelligenceapi.getIdentityIntelligenceV1(requestParameters));
  },
  getIdentityOutlierSnapshotsV1: (requestParameters: iaiOutliersTypes.IAIOutliersApiGetIdentityOutlierSnapshotsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiOutliersTypes.OutlierSummary>>> => {
    const iaioutliersapi = new sdk.IAIOutliersApi(apiConfig);
    return handleApiCall(() => iaioutliersapi.getIdentityOutlierSnapshotsV1(requestParameters));
  },
  getIdentityOutliersV1: (requestParameters: iaiOutliersTypes.IAIOutliersApiGetIdentityOutliersV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiOutliersTypes.Outlier>>> => {
    const iaioutliersapi = new sdk.IAIOutliersApi(apiConfig);
    return handleApiCall(() => iaioutliersapi.getIdentityOutliersV1(requestParameters));
  },
  getIdentityOwnershipDetailsV1: (requestParameters: identitiesTypes.IdentitiesApiGetIdentityOwnershipDetailsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identitiesTypes.IdentityOwnershipAssociationDetails>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.getIdentityOwnershipDetailsV1(requestParameters));
  },
  getIdentityProfileV1: (requestParameters: identityProfilesTypes.IdentityProfilesApiGetIdentityProfileV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityProfilesTypes.IdentityProfile>> => {
    const identityprofilesapi = new sdk.IdentityProfilesApi(apiConfig);
    return handleApiCall(() => identityprofilesapi.getIdentityProfileV1(requestParameters));
  },
  getIdentityProofingResultsNerm: (requestParameters: sdk.IdentityProofingResultsNERMApiGetIdentityProofingResultsRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetIdentityProofingResults200ResponseNERM>> => {
    const identityproofingresultsnermapi = new sdk.IdentityProofingResultsNERMApi(apiConfig);
    return handleApiCall(() => identityproofingresultsnermapi.getIdentityProofingResults(requestParameters));
  },
  getIdentitySnapshotSummaryV1: (requestParameters: identityHistoryTypes.IdentityHistoryApiGetIdentitySnapshotSummaryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identityHistoryTypes.MetricResponse>>> => {
    const identityhistoryapi = new sdk.IdentityHistoryApi(apiConfig);
    return handleApiCall(() => identityhistoryapi.getIdentitySnapshotSummaryV1(requestParameters));
  },
  getIdentitySnapshotV1: (requestParameters: identityHistoryTypes.IdentityHistoryApiGetIdentitySnapshotV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityHistoryTypes.IdentityHistoryResponse>> => {
    const identityhistoryapi = new sdk.IdentityHistoryApi(apiConfig);
    return handleApiCall(() => identityhistoryapi.getIdentitySnapshotV1(requestParameters));
  },
  getIdentityStartDateV1: (requestParameters: identityHistoryTypes.IdentityHistoryApiGetIdentityStartDateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<string>> => {
    const identityhistoryapi = new sdk.IdentityHistoryApi(apiConfig);
    return handleApiCall(() => identityhistoryapi.getIdentityStartDateV1(requestParameters));
  },
  getIdentitySummariesV1: (requestParameters: certificationSummariesTypes.CertificationSummariesApiGetIdentitySummariesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<certificationSummariesTypes.CertificationIdentitySummary>>> => {
    const certificationsummariesapi = new sdk.CertificationSummariesApi(apiConfig);
    return handleApiCall(() => certificationsummariesapi.getIdentitySummariesV1(requestParameters));
  },
  getIdentitySummaryV1: (requestParameters: certificationSummariesTypes.CertificationSummariesApiGetIdentitySummaryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationSummariesTypes.CertificationIdentitySummary>> => {
    const certificationsummariesapi = new sdk.CertificationSummariesApi(apiConfig);
    return handleApiCall(() => certificationsummariesapi.getIdentitySummaryV1(requestParameters));
  },
  getIdentityV1: (requestParameters: identitiesTypes.IdentitiesApiGetIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identitiesTypes.Identity>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.getIdentityV1(requestParameters));
  },
  getIntelIdentityAccessItemHistoryV1: (requestParameters: intelligenceTypes.IntelligenceApiGetIntelIdentityAccessItemHistoryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<intelligenceTypes.IntelAccessItemHistoryEvent>>> => {
    const intelligenceapi = new sdk.IntelligenceApi(apiConfig);
    return handleApiCall(() => intelligenceapi.getIntelIdentityAccessItemHistoryV1(requestParameters));
  },
  getIntelIdentityAccountsV1: (requestParameters: intelligenceTypes.IntelligenceApiGetIntelIdentityAccountsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<intelligenceTypes.IntelAccessAccountWire>>> => {
    const intelligenceapi = new sdk.IntelligenceApi(apiConfig);
    return handleApiCall(() => intelligenceapi.getIntelIdentityAccountsV1(requestParameters));
  },
  getIntelIdentityCertificationHistoryV1: (requestParameters: intelligenceTypes.IntelligenceApiGetIntelIdentityCertificationHistoryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<intelligenceTypes.IntelCertificationHistoryEvent>>> => {
    const intelligenceapi = new sdk.IntelligenceApi(apiConfig);
    return handleApiCall(() => intelligenceapi.getIntelIdentityCertificationHistoryV1(requestParameters));
  },
  getIntelIdentityRareAccessV1: (requestParameters: intelligenceTypes.IntelligenceApiGetIntelIdentityRareAccessV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<intelligenceTypes.IntelOutlierAccessItem>>> => {
    const intelligenceapi = new sdk.IntelligenceApi(apiConfig);
    return handleApiCall(() => intelligenceapi.getIntelIdentityRareAccessV1(requestParameters));
  },
  getJitActivationConfigV1: (requestParameters: jitAccessTypes.JITAccessApiGetJitActivationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<jitAccessTypes.JITActivationConfigResponse>> => {
    const jitaccessapi = new sdk.JITAccessApi(apiConfig);
    return handleApiCall(() => jitaccessapi.getJitActivationConfigV1(requestParameters));
  },
  getJobStatusNerm: (requestParameters: sdk.JobStatusNERMApiGetJobStatusRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetJobStatus200ResponseNERM>> => {
    const jobstatusnermapi = new sdk.JobStatusNERMApi(apiConfig);
    return handleApiCall(() => jobstatusnermapi.getJobStatus(requestParameters));
  },
  getJWKSDataV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<sharedSignalsFrameworkSsfTypes.JWKS>> => {
    const sharedsignalsframeworkssfapi = new sdk.SharedSignalsFrameworkSSFApi(apiConfig);
    return handleApiCall(() => sharedsignalsframeworkssfapi.getJWKSDataV1());
  },
  getLatestIdentityOutlierSnapshotsV1: (requestParameters: iaiOutliersTypes.IAIOutliersApiGetLatestIdentityOutlierSnapshotsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiOutliersTypes.LatestOutlierSummary>>> => {
    const iaioutliersapi = new sdk.IAIOutliersApi(apiConfig);
    return handleApiCall(() => iaioutliersapi.getLatestIdentityOutlierSnapshotsV1(requestParameters));
  },
  getLaunchersV1: (requestParameters: launchersTypes.LaunchersApiGetLaunchersV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<launchersTypes.GetLaunchersV1200Response>> => {
    const launchersapi = new sdk.LaunchersApi(apiConfig);
    return handleApiCall(() => launchersapi.getLaunchersV1(requestParameters));
  },
  getLauncherV1: (requestParameters: launchersTypes.LaunchersApiGetLauncherV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<launchersTypes.Launcher>> => {
    const launchersapi = new sdk.LaunchersApi(apiConfig);
    return handleApiCall(() => launchersapi.getLauncherV1(requestParameters));
  },
  getLifecycleStatesV1: (requestParameters: lifecycleStatesTypes.LifecycleStatesApiGetLifecycleStatesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<lifecycleStatesTypes.LifecycleState>>> => {
    const lifecyclestatesapi = new sdk.LifecycleStatesApi(apiConfig);
    return handleApiCall(() => lifecyclestatesapi.getLifecycleStatesV1(requestParameters));
  },
  getLifecycleStateV1: (requestParameters: lifecycleStatesTypes.LifecycleStatesApiGetLifecycleStateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<lifecycleStatesTypes.LifecycleState>> => {
    const lifecyclestatesapi = new sdk.LifecycleStatesApi(apiConfig);
    return handleApiCall(() => lifecyclestatesapi.getLifecycleStateV1(requestParameters));
  },
  getMachineAccountCreateAccessInfoV1: (requestParameters: machineAccountCreationRequestTypes.MachineAccountCreationRequestApiGetMachineAccountCreateAccessInfoV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineAccountCreationRequestTypes.MachineAccountCreateAccessDto>>> => {
    const machineaccountcreationrequestapi = new sdk.MachineAccountCreationRequestApi(apiConfig);
    return handleApiCall(() => machineaccountcreationrequestapi.getMachineAccountCreateAccessInfoV1(requestParameters));
  },
  getMachineAccountDeletionApprovalConfigBySourceV1: (requestParameters: sourcesTypes.SourcesApiGetMachineAccountDeletionApprovalConfigBySourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.AccountDeleteConfigDto>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getMachineAccountDeletionApprovalConfigBySourceV1(requestParameters));
  },
  getMachineAccountSubtypeApprovalConfigV1: (requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiGetMachineAccountSubtypeApprovalConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountSubtypesTypes.MachineAccountSubtypeConfigDto>> => {
    const machineaccountsubtypesapi = new sdk.MachineAccountSubtypesApi(apiConfig);
    return handleApiCall(() => machineaccountsubtypesapi.getMachineAccountSubtypeApprovalConfigV1(requestParameters));
  },
  getMachineAccountSubtypeByIdV1: (requestParameters: machineAccountsTypes.MachineAccountsApiGetMachineAccountSubtypeByIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountsTypes.SourceSubtype>> => {
    const machineaccountsapi = new sdk.MachineAccountsApi(apiConfig);
    return handleApiCall(() => machineaccountsapi.getMachineAccountSubtypeByIdV1(requestParameters));
  },
  getMachineAccountSubtypeByTechnicalNameV1: (requestParameters: machineAccountsTypes.MachineAccountsApiGetMachineAccountSubtypeByTechnicalNameV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountsTypes.SourceSubtype>> => {
    const machineaccountsapi = new sdk.MachineAccountsApi(apiConfig);
    return handleApiCall(() => machineaccountsapi.getMachineAccountSubtypeByTechnicalNameV1(requestParameters));
  },
  getMachineAccountV1: (requestParameters: machineAccountsTypes.MachineAccountsApiGetMachineAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountsTypes.MachineAccount>> => {
    const machineaccountsapi = new sdk.MachineAccountsApi(apiConfig);
    return handleApiCall(() => machineaccountsapi.getMachineAccountV1(requestParameters));
  },
  getMachineClassificationConfigV1: (requestParameters: machineClassificationConfigTypes.MachineClassificationConfigApiGetMachineClassificationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineClassificationConfigTypes.MachineClassificationConfig>> => {
    const machineclassificationconfigapi = new sdk.MachineClassificationConfigApi(apiConfig);
    return handleApiCall(() => machineclassificationconfigapi.getMachineClassificationConfigV1(requestParameters));
  },
  getMachineIdentityV1: (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiGetMachineIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineIdentitiesTypes.MachineIdentityResponse>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.getMachineIdentityV1(requestParameters));
  },
  getMachineIdentityV2: (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiGetMachineIdentityV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineIdentitiesTypes.Machineidentityv2>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.getMachineIdentityV2(requestParameters));
  },
  getMailFromAttributesV1: (requestParameters: notificationsTypes.NotificationsApiGetMailFromAttributesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<notificationsTypes.MailFromAttributes>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.getMailFromAttributesV1(requestParameters));
  },
  getManagedClientHealthIndicatorsV1: (requestParameters: managedClientsTypes.ManagedClientsApiGetManagedClientHealthIndicatorsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClientsTypes.ManagedClientHealthIndicators>> => {
    const managedclientsapi = new sdk.ManagedClientsApi(apiConfig);
    return handleApiCall(() => managedclientsapi.getManagedClientHealthIndicatorsV1(requestParameters));
  },
  getManagedClientStatusV1: (requestParameters: managedClientsTypes.ManagedClientsApiGetManagedClientStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClientsTypes.ManagedClientStatus>> => {
    const managedclientsapi = new sdk.ManagedClientsApi(apiConfig);
    return handleApiCall(() => managedclientsapi.getManagedClientStatusV1(requestParameters));
  },
  getManagedClientsV1: (requestParameters: managedClientsTypes.ManagedClientsApiGetManagedClientsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<managedClientsTypes.ManagedClient>>> => {
    const managedclientsapi = new sdk.ManagedClientsApi(apiConfig);
    return handleApiCall(() => managedclientsapi.getManagedClientsV1(requestParameters));
  },
  getManagedClientV1: (requestParameters: managedClientsTypes.ManagedClientsApiGetManagedClientV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClientsTypes.ManagedClient>> => {
    const managedclientsapi = new sdk.ManagedClientsApi(apiConfig);
    return handleApiCall(() => managedclientsapi.getManagedClientV1(requestParameters));
  },
  getManagedClustersV1: (requestParameters: managedClustersTypes.ManagedClustersApiGetManagedClustersV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<managedClustersTypes.ManagedCluster>>> => {
    const managedclustersapi = new sdk.ManagedClustersApi(apiConfig);
    return handleApiCall(() => managedclustersapi.getManagedClustersV1(requestParameters));
  },
  getManagedClusterTypesV1: (requestParameters: managedClusterTypesTypes.ManagedClusterTypesApiGetManagedClusterTypesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<managedClusterTypesTypes.ManagedClusterType>>> => {
    const managedclustertypesapi = new sdk.ManagedClusterTypesApi(apiConfig);
    return handleApiCall(() => managedclustertypesapi.getManagedClusterTypesV1(requestParameters));
  },
  getManagedClusterTypeV1: (requestParameters: managedClusterTypesTypes.ManagedClusterTypesApiGetManagedClusterTypeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClusterTypesTypes.ManagedClusterType>> => {
    const managedclustertypesapi = new sdk.ManagedClusterTypesApi(apiConfig);
    return handleApiCall(() => managedclustertypesapi.getManagedClusterTypeV1(requestParameters));
  },
  getManagedClusterV1: (requestParameters: managedClustersTypes.ManagedClustersApiGetManagedClusterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClustersTypes.ManagedCluster>> => {
    const managedclustersapi = new sdk.ManagedClustersApi(apiConfig);
    return handleApiCall(() => managedclustersapi.getManagedClusterV1(requestParameters));
  },
  getManualDiscoverApplicationsCsvTemplateV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<applicationDiscoveryTypes.ManualDiscoverApplicationsTemplate>> => {
    const applicationdiscoveryapi = new sdk.ApplicationDiscoveryApi(apiConfig);
    return handleApiCall(() => applicationdiscoveryapi.getManualDiscoverApplicationsCsvTemplateV1());
  },
  getMFADuoConfigV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<mfaConfigurationTypes.MfaDuoConfig>> => {
    const mfaconfigurationapi = new sdk.MFAConfigurationApi(apiConfig);
    return handleApiCall(() => mfaconfigurationapi.getMFADuoConfigV1());
  },
  getMFAKbaConfigV1: (requestParameters: mfaConfigurationTypes.MFAConfigurationApiGetMFAKbaConfigV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<mfaConfigurationTypes.KbaQuestion>>> => {
    const mfaconfigurationapi = new sdk.MFAConfigurationApi(apiConfig);
    return handleApiCall(() => mfaconfigurationapi.getMFAKbaConfigV1(requestParameters));
  },
  getMFAOktaConfigV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<mfaConfigurationTypes.MfaOktaConfig>> => {
    const mfaconfigurationapi = new sdk.MFAConfigurationApi(apiConfig);
    return handleApiCall(() => mfaconfigurationapi.getMFAOktaConfigV1());
  },
  getMultiHostIntegrationsListV1: (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiGetMultiHostIntegrationsListV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<multiHostIntegrationTypes.MultiHostIntegrations>>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.getMultiHostIntegrationsListV1(requestParameters));
  },
  getMultiHostIntegrationsV1: (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiGetMultiHostIntegrationsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<multiHostIntegrationTypes.MultiHostIntegrations>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.getMultiHostIntegrationsV1(requestParameters));
  },
  getMultihostIntegrationTypesV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<Array<multiHostIntegrationTypes.MultiHostIntegrationTemplateType>>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.getMultihostIntegrationTypesV1());
  },
  getMultiHostSourceCreationErrorsV1: (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiGetMultiHostSourceCreationErrorsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<multiHostIntegrationTypes.SourceCreationErrors>>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.getMultiHostSourceCreationErrorsV1(requestParameters));
  },
  getNativeChangeDetectionConfigV1: (requestParameters: sourcesTypes.SourcesApiGetNativeChangeDetectionConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.NativeChangeDetectionConfig>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getNativeChangeDetectionConfigV1(requestParameters));
  },
  getNonEmployeeApprovalSummaryV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeApprovalSummaryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeApprovalSummary>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.getNonEmployeeApprovalSummaryV1(requestParameters));
  },
  getNonEmployeeApprovalV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeApprovalV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeApprovalItemDetail>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.getNonEmployeeApprovalV1(requestParameters));
  },
  getNonEmployeeBulkUploadStatusV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeBulkUploadStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeBulkUploadStatus>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.getNonEmployeeBulkUploadStatusV1(requestParameters));
  },
  getNonEmployeeRecordV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeRecordV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeRecord>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.getNonEmployeeRecordV1(requestParameters));
  },
  getNonEmployeeRequestSummaryV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeRequestSummaryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeRequestSummary>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.getNonEmployeeRequestSummaryV1(requestParameters));
  },
  getNonEmployeeRequestV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeRequest>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.getNonEmployeeRequestV1(requestParameters));
  },
  getNonEmployeeSchemaAttributeV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeSchemaAttributeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeSchemaAttribute>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.getNonEmployeeSchemaAttributeV1(requestParameters));
  },
  getNonEmployeeSourceSchemaAttributesV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeSourceSchemaAttributesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<nonEmployeeLifecycleManagementTypes.NonEmployeeSchemaAttribute>>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.getNonEmployeeSourceSchemaAttributesV1(requestParameters));
  },
  getNonEmployeeSourceV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeSource>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.getNonEmployeeSourceV1(requestParameters));
  },
  getNotificationPreferencesV1: (requestParameters: notificationsTypes.NotificationsApiGetNotificationPreferencesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<notificationsTypes.PreferencesDto>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.getNotificationPreferencesV1(requestParameters));
  },
  getNotificationsTemplateContextV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<notificationsTypes.NotificationTemplateContext>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.getNotificationsTemplateContextV1());
  },
  getNotificationTemplateV1: (requestParameters: notificationsTypes.NotificationsApiGetNotificationTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<notificationsTypes.TemplateDto>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.getNotificationTemplateV1(requestParameters));
  },
  getNotificationTemplateVariablesV1: (requestParameters: notificationsTypes.NotificationsApiGetNotificationTemplateVariablesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<notificationsTypes.TemplateVariablesDto>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.getNotificationTemplateVariablesV1(requestParameters));
  },
  getOauthClientV1: (requestParameters: oauthClientsTypes.OAuthClientsApiGetOauthClientV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<oauthClientsTypes.GetOAuthClientResponse>> => {
    const oauthclientsapi = new sdk.OAuthClientsApi(apiConfig);
    return handleApiCall(() => oauthclientsapi.getOauthClientV1(requestParameters));
  },
  getObjectMappingsV1: (requestParameters: configurationHubTypes.ConfigurationHubApiGetObjectMappingsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<configurationHubTypes.ObjectMappingResponse>>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.getObjectMappingsV1(requestParameters));
  },
  getOngoingRolePropagationV1: (requestParameters: rolePropagationTypes.RolePropagationApiGetOngoingRolePropagationV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<rolePropagationTypes.Rolepropagationongoingresponse>> => {
    const rolepropagationapi = new sdk.RolePropagationApi(apiConfig);
    return handleApiCall(() => rolepropagationapi.getOngoingRolePropagationV1(requestParameters));
  },
  getOrgConfigV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<orgConfigTypes.OrgConfig>> => {
    const orgconfigapi = new sdk.OrgConfigApi(apiConfig);
    return handleApiCall(() => orgconfigapi.getOrgConfigV1());
  },
  getOutlierContributingFeatureSummaryV1: (requestParameters: iaiOutliersTypes.IAIOutliersApiGetOutlierContributingFeatureSummaryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiOutliersTypes.OutlierFeatureSummary>> => {
    const iaioutliersapi = new sdk.IAIOutliersApi(apiConfig);
    return handleApiCall(() => iaioutliersapi.getOutlierContributingFeatureSummaryV1(requestParameters));
  },
  getOwnershipCorrelationConfigV1: (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiGetOwnershipCorrelationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineIdentitiesTypes.CorrelationConfig>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.getOwnershipCorrelationConfigV1(requestParameters));
  },
  getOwnersV1: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiGetOwnersV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<dataAccessSecurityTypes.DataOwnerModel>>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.getOwnersV1(requestParameters));
  },
  getPageContentByIdNerm: (requestParameters: sdk.PageContentsNERMApiGetPageContentByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContents200ResponseNERM>> => {
    const pagecontentsnermapi = new sdk.PageContentsNERMApi(apiConfig);
    return handleApiCall(() => pagecontentsnermapi.getPageContentById(requestParameters));
  },
  getPageContentByUidNerm: (requestParameters: sdk.PageContentsNERMApiGetPageContentByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContents200ResponseNERM>> => {
    const pagecontentsnermapi = new sdk.PageContentsNERMApi(apiConfig);
    return handleApiCall(() => pagecontentsnermapi.getPageContentByUid(requestParameters));
  },
  getPageContentsNerm: (apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContents200ResponseNERM>> => {
    const pagecontentsnermapi = new sdk.PageContentsNERMApi(apiConfig);
    return handleApiCall(() => pagecontentsnermapi.getPageContents());
  },
  getPageContentTranslationByIdNerm: (requestParameters: sdk.PageContentTranslationsNERMApiGetPageContentTranslationByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContentTranslation200ResponseNERM>> => {
    const pagecontenttranslationsnermapi = new sdk.PageContentTranslationsNERMApi(apiConfig);
    return handleApiCall(() => pagecontenttranslationsnermapi.getPageContentTranslationById(requestParameters));
  },
  getPageContentTranslationByUidNerm: (requestParameters: sdk.PageContentTranslationsNERMApiGetPageContentTranslationByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContentTranslation200ResponseNERM>> => {
    const pagecontenttranslationsnermapi = new sdk.PageContentTranslationsNERMApi(apiConfig);
    return handleApiCall(() => pagecontenttranslationsnermapi.getPageContentTranslationByUid(requestParameters));
  },
  getPageContentTranslationNerm: (apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContentTranslation200ResponseNERM>> => {
    const pagecontenttranslationsnermapi = new sdk.PageContentTranslationsNERMApi(apiConfig);
    return handleApiCall(() => pagecontenttranslationsnermapi.getPageContentTranslation());
  },
  getPageElementByIdNerm: (requestParameters: sdk.PageElementsNERMApiGetPageElementByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageElements200ResponseNERM>> => {
    const pageelementsnermapi = new sdk.PageElementsNERMApi(apiConfig);
    return handleApiCall(() => pageelementsnermapi.getPageElementById(requestParameters));
  },
  getPageElementByUidNerm: (requestParameters: sdk.PageElementsNERMApiGetPageElementByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageElements200ResponseNERM>> => {
    const pageelementsnermapi = new sdk.PageElementsNERMApi(apiConfig);
    return handleApiCall(() => pageelementsnermapi.getPageElementByUid(requestParameters));
  },
  getPageElementsNerm: (apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageElements200ResponseNERM>> => {
    const pageelementsnermapi = new sdk.PageElementsNERMApi(apiConfig);
    return handleApiCall(() => pageelementsnermapi.getPageElements());
  },
  getParameterReferencesV1: (requestParameters: parameterStorageTypes.ParameterStorageApiGetParameterReferencesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<parameterStorageTypes.ParameterStorageReference>>> => {
    const parameterstorageapi = new sdk.ParameterStorageApi(apiConfig);
    return handleApiCall(() => parameterstorageapi.getParameterReferencesV1(requestParameters));
  },
  getParameterStorageSpecificationV1: (requestParameters: parameterStorageTypes.ParameterStorageApiGetParameterStorageSpecificationV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const parameterstorageapi = new sdk.ParameterStorageApi(apiConfig);
    return handleApiCall(() => parameterstorageapi.getParameterStorageSpecificationV1(requestParameters));
  },
  getParameterV1: (requestParameters: parameterStorageTypes.ParameterStorageApiGetParameterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<parameterStorageTypes.ParameterStorageParameter>> => {
    const parameterstorageapi = new sdk.ParameterStorageApi(apiConfig);
    return handleApiCall(() => parameterstorageapi.getParameterV1(requestParameters));
  },
  getPasswordChangeStatusV1: (requestParameters: passwordManagementTypes.PasswordManagementApiGetPasswordChangeStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordManagementTypes.PasswordStatus>> => {
    const passwordmanagementapi = new sdk.PasswordManagementApi(apiConfig);
    return handleApiCall(() => passwordmanagementapi.getPasswordChangeStatusV1(requestParameters));
  },
  getPasswordDictionaryV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<string>> => {
    const passworddictionaryapi = new sdk.PasswordDictionaryApi(apiConfig);
    return handleApiCall(() => passworddictionaryapi.getPasswordDictionaryV1());
  },
  getPasswordOrgConfigV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<passwordConfigurationTypes.PasswordOrgConfig>> => {
    const passwordconfigurationapi = new sdk.PasswordConfigurationApi(apiConfig);
    return handleApiCall(() => passwordconfigurationapi.getPasswordOrgConfigV1());
  },
  getPasswordPolicyByIdV1: (requestParameters: passwordPoliciesTypes.PasswordPoliciesApiGetPasswordPolicyByIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordPoliciesTypes.PasswordPolicyV3Dto>> => {
    const passwordpoliciesapi = new sdk.PasswordPoliciesApi(apiConfig);
    return handleApiCall(() => passwordpoliciesapi.getPasswordPolicyByIdV1(requestParameters));
  },
  getPasswordSyncGroupsV1: (requestParameters: passwordSyncGroupsTypes.PasswordSyncGroupsApiGetPasswordSyncGroupsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<passwordSyncGroupsTypes.PasswordSyncGroup>>> => {
    const passwordsyncgroupsapi = new sdk.PasswordSyncGroupsApi(apiConfig);
    return handleApiCall(() => passwordsyncgroupsapi.getPasswordSyncGroupsV1(requestParameters));
  },
  getPasswordSyncGroupV1: (requestParameters: passwordSyncGroupsTypes.PasswordSyncGroupsApiGetPasswordSyncGroupV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordSyncGroupsTypes.PasswordSyncGroup>> => {
    const passwordsyncgroupsapi = new sdk.PasswordSyncGroupsApi(apiConfig);
    return handleApiCall(() => passwordsyncgroupsapi.getPasswordSyncGroupV1(requestParameters));
  },
  getPeerGroupOutliersContributingFeaturesV1: (requestParameters: iaiOutliersTypes.IAIOutliersApiGetPeerGroupOutliersContributingFeaturesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiOutliersTypes.OutlierContributingFeature>>> => {
    const iaioutliersapi = new sdk.IAIOutliersApi(apiConfig);
    return handleApiCall(() => iaioutliersapi.getPeerGroupOutliersContributingFeaturesV1(requestParameters));
  },
  getPeerGroupOutliersV1: (requestParameters: iaiPeerGroupStrategiesTypes.IAIPeerGroupStrategiesApiGetPeerGroupOutliersV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiPeerGroupStrategiesTypes.PeerGroupMember>>> => {
    const iaipeergroupstrategiesapi = new sdk.IAIPeerGroupStrategiesApi(apiConfig);
    return handleApiCall(() => iaipeergroupstrategiesapi.getPeerGroupOutliersV1(requestParameters));
  },
  getPendingCertificationTasksV1: (requestParameters: certificationsTypes.CertificationsApiGetPendingCertificationTasksV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<certificationsTypes.CertificationTask>>> => {
    const certificationsapi = new sdk.CertificationsApi(apiConfig);
    return handleApiCall(() => certificationsapi.getPendingCertificationTasksV1(requestParameters));
  },
  getPotentialRoleApplicationsV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetPotentialRoleApplicationsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiRoleMiningTypes.RoleMiningPotentialRoleApplication>>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getPotentialRoleApplicationsV1(requestParameters));
  },
  getPotentialRoleEntitlementsV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetPotentialRoleEntitlementsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiRoleMiningTypes.RoleMiningPotentialRoleEntitlements>>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getPotentialRoleEntitlementsV1(requestParameters));
  },
  getPotentialRoleSourceIdentityUsageV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetPotentialRoleSourceIdentityUsageV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiRoleMiningTypes.RoleMiningPotentialRoleSourceUsage>>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getPotentialRoleSourceIdentityUsageV1(requestParameters));
  },
  getPotentialRoleSummariesV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetPotentialRoleSummariesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiRoleMiningTypes.RoleMiningPotentialRoleSummary>>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getPotentialRoleSummariesV1(requestParameters));
  },
  getPotentialRoleV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetPotentialRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRoleMiningTypes.RoleMiningPotentialRole>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getPotentialRoleV1(requestParameters));
  },
  getPrivilegeCriteriaConfigV1: (requestParameters: privilegeCriteriaConfigurationTypes.PrivilegeCriteriaConfigurationApiGetPrivilegeCriteriaConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<privilegeCriteriaConfigurationTypes.PrivilegeCriteriaConfigDTO>> => {
    const privilegecriteriaconfigurationapi = new sdk.PrivilegeCriteriaConfigurationApi(apiConfig);
    return handleApiCall(() => privilegecriteriaconfigurationapi.getPrivilegeCriteriaConfigV1(requestParameters));
  },
  getPrivilegeCriteriaV1: (requestParameters: privilegeCriteriaTypes.PrivilegeCriteriaApiGetPrivilegeCriteriaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<privilegeCriteriaTypes.PrivilegeCriteriaDTO>> => {
    const privilegecriteriaapi = new sdk.PrivilegeCriteriaApi(apiConfig);
    return handleApiCall(() => privilegecriteriaapi.getPrivilegeCriteriaV1(requestParameters));
  },
  getProfileAvatarNerm: (requestParameters: sdk.ProfilesNERMApiGetProfileAvatarRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.UrlNERM>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.getProfileAvatar(requestParameters));
  },
  getProfileByIdNerm: (requestParameters: sdk.ProfilesNERMApiGetProfileByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetSingleSchemaMappedProfile200ResponseNERM>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.getProfileById(requestParameters));
  },
  getProfileConfigListV1: (requestParameters: authProfileTypes.AuthProfileApiGetProfileConfigListV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<authProfileTypes.AuthProfileSummary>>> => {
    const authprofileapi = new sdk.AuthProfileApi(apiConfig);
    return handleApiCall(() => authprofileapi.getProfileConfigListV1(requestParameters));
  },
  getProfileConfigV1: (requestParameters: authProfileTypes.AuthProfileApiGetProfileConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<authProfileTypes.AuthProfile>> => {
    const authprofileapi = new sdk.AuthProfileApi(apiConfig);
    return handleApiCall(() => authprofileapi.getProfileConfigV1(requestParameters));
  },
  getProfilesNerm: (requestParameters: sdk.ProfilesNERMApiGetProfilesRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetSchemaMappedProfilesCollection200ResponseNERM>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.getProfiles(requestParameters));
  },
  getProfileTypeAttributesNerm: (requestParameters: sdk.SyncedAttributesNERMApiGetProfileTypeAttributesRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetProfileTypeAttributes200ResponseNERM>> => {
    const syncedattributesnermapi = new sdk.SyncedAttributesNERMApi(apiConfig);
    return handleApiCall(() => syncedattributesnermapi.getProfileTypeAttributes(requestParameters));
  },
  getProfileTypeByIdNerm: (requestParameters: sdk.ProfileTypesNERMApiGetProfileTypeByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitProfileType200ResponseNERM>> => {
    const profiletypesnermapi = new sdk.ProfileTypesNERMApi(apiConfig);
    return handleApiCall(() => profiletypesnermapi.getProfileTypeById(requestParameters));
  },
  getProfileTypeByUidNerm: (requestParameters: sdk.ProfileTypesNERMApiGetProfileTypeByUidRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitProfileType200ResponseNERM>> => {
    const profiletypesnermapi = new sdk.ProfileTypesNERMApi(apiConfig);
    return handleApiCall(() => profiletypesnermapi.getProfileTypeByUid(requestParameters));
  },
  getProfileTypesNerm: (requestParameters: sdk.ProfileTypesNERMApiGetProfileTypesRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetProfileTypes200ResponseNERM>> => {
    const profiletypesnermapi = new sdk.ProfileTypesNERMApi(apiConfig);
    return handleApiCall(() => profiletypesnermapi.getProfileTypes(requestParameters));
  },
  getProfileUploadNerm: (requestParameters: sdk.ProfilesNERMApiGetProfileUploadRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.UrlNERM>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.getProfileUpload(requestParameters));
  },
  getProvisioningPolicyV1: (requestParameters: sourcesTypes.SourcesApiGetProvisioningPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.ProvisioningPolicyDto>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getProvisioningPolicyV1(requestParameters));
  },
  getProvisioningPolicyV2: (requestParameters: sourcesTypes.SourcesApiGetProvisioningPolicyV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.ProvisioningPolicyDtoV2>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getProvisioningPolicyV2(requestParameters));
  },
  getPublicIdentitiesV1: (requestParameters: publicIdentitiesTypes.PublicIdentitiesApiGetPublicIdentitiesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<publicIdentitiesTypes.PublicIdentity>>> => {
    const publicidentitiesapi = new sdk.PublicIdentitiesApi(apiConfig);
    return handleApiCall(() => publicidentitiesapi.getPublicIdentitiesV1(requestParameters));
  },
  getPublicIdentityConfigV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<publicIdentitiesConfigTypes.PublicIdentityConfig>> => {
    const publicidentitiesconfigapi = new sdk.PublicIdentitiesConfigApi(apiConfig);
    return handleApiCall(() => publicidentitiesconfigapi.getPublicIdentityConfigV1());
  },
  getReassignmentConfigTypesV1: (requestParameters: workReassignmentTypes.WorkReassignmentApiGetReassignmentConfigTypesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workReassignmentTypes.ConfigType>>> => {
    const workreassignmentapi = new sdk.WorkReassignmentApi(apiConfig);
    return handleApiCall(() => workreassignmentapi.getReassignmentConfigTypesV1(requestParameters));
  },
  getReassignmentConfigurationV1: (requestParameters: workReassignmentTypes.WorkReassignmentApiGetReassignmentConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workReassignmentTypes.ConfigurationResponse>> => {
    const workreassignmentapi = new sdk.WorkReassignmentApi(apiConfig);
    return handleApiCall(() => workreassignmentapi.getReassignmentConfigurationV1(requestParameters));
  },
  getRecommendationsConfigV1: (requestParameters: iaiRecommendationsTypes.IAIRecommendationsApiGetRecommendationsConfigV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRecommendationsTypes.RecommendationConfigDto>> => {
    const iairecommendationsapi = new sdk.IAIRecommendationsApi(apiConfig);
    return handleApiCall(() => iairecommendationsapi.getRecommendationsConfigV1(requestParameters));
  },
  getRecommendationsV1: (requestParameters: iaiRecommendationsTypes.IAIRecommendationsApiGetRecommendationsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRecommendationsTypes.RecommendationResponseDto>> => {
    const iairecommendationsapi = new sdk.IAIRecommendationsApi(apiConfig);
    return handleApiCall(() => iairecommendationsapi.getRecommendationsV1(requestParameters));
  },
  getReportResultV1: (requestParameters: reportsDataExtractionTypes.ReportsDataExtractionApiGetReportResultV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<reportsDataExtractionTypes.ReportResults>> => {
    const reportsdataextractionapi = new sdk.ReportsDataExtractionApi(apiConfig);
    return handleApiCall(() => reportsdataextractionapi.getReportResultV1(requestParameters));
  },
  getReportV1: (requestParameters: reportsDataExtractionTypes.ReportsDataExtractionApiGetReportV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<File>> => {
    const reportsdataextractionapi = new sdk.ReportsDataExtractionApi(apiConfig);
    return handleApiCall(() => reportsdataextractionapi.getReportV1(requestParameters));
  },
  getRiskLevelNerm: (requestParameters: sdk.RiskLevelsNERMApiGetRiskLevelRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetRiskLevel200ResponseNERM>> => {
    const risklevelsnermapi = new sdk.RiskLevelsNERMApi(apiConfig);
    return handleApiCall(() => risklevelsnermapi.getRiskLevel(requestParameters));
  },
  getRiskLevelsNerm: (requestParameters: sdk.RiskLevelsNERMApiGetRiskLevelsRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetRiskLevels200ResponseNERM>> => {
    const risklevelsnermapi = new sdk.RiskLevelsNERMApi(apiConfig);
    return handleApiCall(() => risklevelsnermapi.getRiskLevels(requestParameters));
  },
  getRiskScoreNerm: (requestParameters: sdk.RiskScoresNERMApiGetRiskScoreRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetRiskScore200ResponseNERM>> => {
    const riskscoresnermapi = new sdk.RiskScoresNERMApi(apiConfig);
    return handleApiCall(() => riskscoresnermapi.getRiskScore(requestParameters));
  },
  getRiskScoresNerm: (requestParameters: sdk.RiskScoresNERMApiGetRiskScoresRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetRiskScores200ResponseNERM>> => {
    const riskscoresnermapi = new sdk.RiskScoresNERMApi(apiConfig);
    return handleApiCall(() => riskscoresnermapi.getRiskScores(requestParameters));
  },
  getRoleAssignedIdentitiesV1: (requestParameters: rolesTypes.RolesApiGetRoleAssignedIdentitiesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<rolesTypes.RoleIdentity>>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.getRoleAssignedIdentitiesV1(requestParameters));
  },
  getRoleAssignmentsV1: (requestParameters: identitiesTypes.IdentitiesApiGetRoleAssignmentsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identitiesTypes.GetRoleAssignmentsV1200ResponseInner>>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.getRoleAssignmentsV1(requestParameters));
  },
  getRoleAssignmentV1: (requestParameters: identitiesTypes.IdentitiesApiGetRoleAssignmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identitiesTypes.RoleAssignmentDto>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.getRoleAssignmentV1(requestParameters));
  },
  getRoleEntitlementsV1: (requestParameters: rolesTypes.RolesApiGetRoleEntitlementsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<rolesTypes.Entitlement>>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.getRoleEntitlementsV1(requestParameters));
  },
  getRoleInsightsCurrentEntitlementsV1: (requestParameters: roleInsightsTypes.RoleInsightsApiGetRoleInsightsCurrentEntitlementsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<roleInsightsTypes.RoleInsightsEntitlement>>> => {
    const roleinsightsapi = new sdk.RoleInsightsApi(apiConfig);
    return handleApiCall(() => roleinsightsapi.getRoleInsightsCurrentEntitlementsV1(requestParameters));
  },
  getRoleInsightsEntitlementsChangesV1: (requestParameters: roleInsightsTypes.RoleInsightsApiGetRoleInsightsEntitlementsChangesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<roleInsightsTypes.RoleInsightsEntitlementChanges>>> => {
    const roleinsightsapi = new sdk.RoleInsightsApi(apiConfig);
    return handleApiCall(() => roleinsightsapi.getRoleInsightsEntitlementsChangesV1(requestParameters));
  },
  getRoleInsightsRequestsV1: (requestParameters: roleInsightsTypes.RoleInsightsApiGetRoleInsightsRequestsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<roleInsightsTypes.RoleInsightsResponse>> => {
    const roleinsightsapi = new sdk.RoleInsightsApi(apiConfig);
    return handleApiCall(() => roleinsightsapi.getRoleInsightsRequestsV1(requestParameters));
  },
  getRoleInsightsSummaryV1: (requestParameters: roleInsightsTypes.RoleInsightsApiGetRoleInsightsSummaryV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<roleInsightsTypes.RoleInsightsSummary>> => {
    const roleinsightsapi = new sdk.RoleInsightsApi(apiConfig);
    return handleApiCall(() => roleinsightsapi.getRoleInsightsSummaryV1(requestParameters));
  },
  getRoleInsightsV1: (requestParameters: roleInsightsTypes.RoleInsightsApiGetRoleInsightsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<roleInsightsTypes.RoleInsight>>> => {
    const roleinsightsapi = new sdk.RoleInsightsApi(apiConfig);
    return handleApiCall(() => roleinsightsapi.getRoleInsightsV1(requestParameters));
  },
  getRoleInsightV1: (requestParameters: roleInsightsTypes.RoleInsightsApiGetRoleInsightV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<roleInsightsTypes.RoleInsight>> => {
    const roleinsightsapi = new sdk.RoleInsightsApi(apiConfig);
    return handleApiCall(() => roleinsightsapi.getRoleInsightV1(requestParameters));
  },
  getRoleMiningPotentialRoleV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetRoleMiningPotentialRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRoleMiningTypes.RoleMiningPotentialRole>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getRoleMiningPotentialRoleV1(requestParameters));
  },
  getRoleMiningSessionStatusV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetRoleMiningSessionStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRoleMiningTypes.RoleMiningSessionStatus>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getRoleMiningSessionStatusV1(requestParameters));
  },
  getRoleMiningSessionsV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetRoleMiningSessionsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiRoleMiningTypes.RoleMiningSessionDto>>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getRoleMiningSessionsV1(requestParameters));
  },
  getRoleMiningSessionV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetRoleMiningSessionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRoleMiningTypes.RoleMiningSessionResponse>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getRoleMiningSessionV1(requestParameters));
  },
  getRoleNerm: (requestParameters: sdk.RolesNERMApiGetRoleRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitRole200ResponseNERM>> => {
    const rolesnermapi = new sdk.RolesNERMApi(apiConfig);
    return handleApiCall(() => rolesnermapi.getRole(requestParameters));
  },
  getRoleProfileNerm: (requestParameters: sdk.RoleProfilesNERMApiGetRoleProfileRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitRoleProfile200ResponseNERM>> => {
    const roleprofilesnermapi = new sdk.RoleProfilesNERMApi(apiConfig);
    return handleApiCall(() => roleprofilesnermapi.getRoleProfile(requestParameters));
  },
  getRoleProfilesNerm: (requestParameters: sdk.RoleProfilesNERMApiGetRoleProfilesRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetRoleProfiles200ResponseNERM>> => {
    const roleprofilesnermapi = new sdk.RoleProfilesNERMApi(apiConfig);
    return handleApiCall(() => roleprofilesnermapi.getRoleProfiles(requestParameters));
  },
  getRolePropagationConfigV1: (requestParameters: rolePropagationTypes.RolePropagationApiGetRolePropagationConfigV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<rolePropagationTypes.Rolepropagationconfigresponse>> => {
    const rolepropagationapi = new sdk.RolePropagationApi(apiConfig);
    return handleApiCall(() => rolepropagationapi.getRolePropagationConfigV1(requestParameters));
  },
  getRolePropagationStatusV1: (requestParameters: rolePropagationTypes.RolePropagationApiGetRolePropagationStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<rolePropagationTypes.Rolepropagationstatusresponse>> => {
    const rolepropagationapi = new sdk.RolePropagationApi(apiConfig);
    return handleApiCall(() => rolepropagationapi.getRolePropagationStatusV1(requestParameters));
  },
  getRolesNerm: (requestParameters: sdk.RolesNERMApiGetRolesRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetRoles200ResponseNERM>> => {
    const rolesnermapi = new sdk.RolesNERMApi(apiConfig);
    return handleApiCall(() => rolesnermapi.getRoles(requestParameters));
  },
  getRoleV1: (requestParameters: rolesTypes.RolesApiGetRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<rolesTypes.Role>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.getRoleV1(requestParameters));
  },
  getSavedPotentialRolesV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiGetSavedPotentialRolesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiRoleMiningTypes.RoleMiningSessionDraftRoleDto>>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.getSavedPotentialRolesV1(requestParameters));
  },
  getSavedSearchV1: (requestParameters: savedSearchTypes.SavedSearchApiGetSavedSearchV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<savedSearchTypes.SavedSearch>> => {
    const savedsearchapi = new sdk.SavedSearchApi(apiConfig);
    return handleApiCall(() => savedsearchapi.getSavedSearchV1(requestParameters));
  },
  getScheduledSearchV1: (requestParameters: scheduledSearchTypes.ScheduledSearchApiGetScheduledSearchV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<scheduledSearchTypes.ScheduledSearch>> => {
    const scheduledsearchapi = new sdk.ScheduledSearchApi(apiConfig);
    return handleApiCall(() => scheduledsearchapi.getScheduledSearchV1(requestParameters));
  },
  getSchedulesV1: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiGetSchedulesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<dataAccessSecurityTypes.ScheduleInfo>>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.getSchedulesV1(requestParameters));
  },
  getScheduleV1: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiGetScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<dataAccessSecurityTypes.ScheduleInfo>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.getScheduleV1(requestParameters));
  },
  getSchemaMappedProfilesCollectionNerm: (requestParameters: sdk.IscAccountsNERMApiGetSchemaMappedProfilesCollectionRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetSchemaMappedProfilesCollection200ResponseNERM>> => {
    const iscaccountsnermapi = new sdk.IscAccountsNERMApi(apiConfig);
    return handleApiCall(() => iscaccountsnermapi.getSchemaMappedProfilesCollection(requestParameters));
  },
  getSearchAttributeConfigV1: (requestParameters: searchAttributeConfigurationTypes.SearchAttributeConfigurationApiGetSearchAttributeConfigV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<searchAttributeConfigurationTypes.SearchAttributeConfig>>> => {
    const searchattributeconfigurationapi = new sdk.SearchAttributeConfigurationApi(apiConfig);
    return handleApiCall(() => searchattributeconfigurationapi.getSearchAttributeConfigV1(requestParameters));
  },
  getSedBatchesV1: (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiGetSedBatchesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<suggestedEntitlementDescriptionTypes.SedBatchRecord>>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.getSedBatchesV1(requestParameters));
  },
  getSedBatchStatsV1: (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiGetSedBatchStatsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<suggestedEntitlementDescriptionTypes.SedBatchStats>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.getSedBatchStatsV1(requestParameters));
  },
  getSegmentV1: (requestParameters: segmentsTypes.SegmentsApiGetSegmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<segmentsTypes.Segment>> => {
    const segmentsapi = new sdk.SegmentsApi(apiConfig);
    return handleApiCall(() => segmentsapi.getSegmentV1(requestParameters));
  },
  getServiceDeskIntegrationsV1: (requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiGetServiceDeskIntegrationsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<serviceDeskIntegrationTypes.ServiceDeskIntegrationDto>>> => {
    const servicedeskintegrationapi = new sdk.ServiceDeskIntegrationApi(apiConfig);
    return handleApiCall(() => servicedeskintegrationapi.getServiceDeskIntegrationsV1(requestParameters));
  },
  getServiceDeskIntegrationTemplateV1: (requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiGetServiceDeskIntegrationTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<serviceDeskIntegrationTypes.ServiceDeskIntegrationTemplateDto>> => {
    const servicedeskintegrationapi = new sdk.ServiceDeskIntegrationApi(apiConfig);
    return handleApiCall(() => servicedeskintegrationapi.getServiceDeskIntegrationTemplateV1(requestParameters));
  },
  getServiceDeskIntegrationTypesV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<Array<serviceDeskIntegrationTypes.ServiceDeskIntegrationTemplateType>>> => {
    const servicedeskintegrationapi = new sdk.ServiceDeskIntegrationApi(apiConfig);
    return handleApiCall(() => servicedeskintegrationapi.getServiceDeskIntegrationTypesV1());
  },
  getServiceDeskIntegrationV1: (requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiGetServiceDeskIntegrationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<serviceDeskIntegrationTypes.ServiceDeskIntegrationDto>> => {
    const servicedeskintegrationapi = new sdk.ServiceDeskIntegrationApi(apiConfig);
    return handleApiCall(() => servicedeskintegrationapi.getServiceDeskIntegrationV1(requestParameters));
  },
  getSIMIntegrationsV1: (requestParameters: simIntegrationsTypes.SIMIntegrationsApiGetSIMIntegrationsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<simIntegrationsTypes.ServiceDeskIntegrationDto>>> => {
    const simintegrationsapi = new sdk.SIMIntegrationsApi(apiConfig);
    return handleApiCall(() => simintegrationsapi.getSIMIntegrationsV1(requestParameters));
  },
  getSIMIntegrationV1: (requestParameters: simIntegrationsTypes.SIMIntegrationsApiGetSIMIntegrationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<simIntegrationsTypes.ServiceDeskIntegrationDto>> => {
    const simintegrationsapi = new sdk.SIMIntegrationsApi(apiConfig);
    return handleApiCall(() => simintegrationsapi.getSIMIntegrationV1(requestParameters));
  },
  getSingleSchemaMappedProfileNerm: (requestParameters: sdk.IscAccountsNERMApiGetSingleSchemaMappedProfileRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetSingleSchemaMappedProfile200ResponseNERM>> => {
    const iscaccountsnermapi = new sdk.IscAccountsNERMApi(apiConfig);
    return handleApiCall(() => iscaccountsnermapi.getSingleSchemaMappedProfile(requestParameters));
  },
  getSingleSearchAttributeConfigV1: (requestParameters: searchAttributeConfigurationTypes.SearchAttributeConfigurationApiGetSingleSearchAttributeConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<searchAttributeConfigurationTypes.SearchAttributeConfig>> => {
    const searchattributeconfigurationapi = new sdk.SearchAttributeConfigurationApi(apiConfig);
    return handleApiCall(() => searchattributeconfigurationapi.getSingleSearchAttributeConfigV1(requestParameters));
  },
  getSodAllReportRunStatusV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.ReportResultReference>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.getSodAllReportRunStatusV1());
  },
  getSodPolicyScheduleV1: (requestParameters: sodPoliciesTypes.SODPoliciesApiGetSodPolicyScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.SodPolicySchedule>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.getSodPolicyScheduleV1(requestParameters));
  },
  getSodPolicyV1: (requestParameters: sodPoliciesTypes.SODPoliciesApiGetSodPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.SodPolicy>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.getSodPolicyV1(requestParameters));
  },
  getSodViolationReportRunStatusV1: (requestParameters: sodPoliciesTypes.SODPoliciesApiGetSodViolationReportRunStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.ReportResultReference>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.getSodViolationReportRunStatusV1(requestParameters));
  },
  getSodViolationReportStatusV1: (requestParameters: sodPoliciesTypes.SODPoliciesApiGetSodViolationReportStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.ReportResultReference>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.getSodViolationReportStatusV1(requestParameters));
  },
  getSourceAppV1: (requestParameters: appsTypes.AppsApiGetSourceAppV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<appsTypes.SourceApp>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.getSourceAppV1(requestParameters));
  },
  getSourceAttrSyncConfigV1: (requestParameters: sourcesTypes.SourcesApiGetSourceAttrSyncConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.AttrSyncSourceConfig>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getSourceAttrSyncConfigV1(requestParameters));
  },
  getSourceConfigV1: (requestParameters: sourcesTypes.SourcesApiGetSourceConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.ConnectorDetail>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getSourceConfigV1(requestParameters));
  },
  getSourceConnectionsV1: (requestParameters: sourcesTypes.SourcesApiGetSourceConnectionsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.SourceConnectionsDto>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getSourceConnectionsV1(requestParameters));
  },
  getSourceEntitlementRequestConfigV1: (requestParameters: sourcesTypes.SourcesApiGetSourceEntitlementRequestConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.SourceEntitlementRequestConfig>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getSourceEntitlementRequestConfigV1(requestParameters));
  },
  getSourceHealthV1: (requestParameters: sourcesTypes.SourcesApiGetSourceHealthV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.SourceHealthDto>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getSourceHealthV1(requestParameters));
  },
  getSourceSchedulesV1: (requestParameters: sourcesTypes.SourcesApiGetSourceSchedulesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<sourcesTypes.Schedule3>>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getSourceSchedulesV1(requestParameters));
  },
  getSourceScheduleV1: (requestParameters: sourcesTypes.SourcesApiGetSourceScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Schedule3>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getSourceScheduleV1(requestParameters));
  },
  getSourceSchemasV1: (requestParameters: sourcesTypes.SourcesApiGetSourceSchemasV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<sourcesTypes.Schema>>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getSourceSchemasV1(requestParameters));
  },
  getSourceSchemaV1: (requestParameters: sourcesTypes.SourcesApiGetSourceSchemaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Schema>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getSourceSchemaV1(requestParameters));
  },
  getSourceSubtypeByIdV1: (requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiGetSourceSubtypeByIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountSubtypesTypes.SourceSubtypeWithSource>> => {
    const machineaccountsubtypesapi = new sdk.MachineAccountSubtypesApi(apiConfig);
    return handleApiCall(() => machineaccountsubtypesapi.getSourceSubtypeByIdV1(requestParameters));
  },
  getSourcesWithinMultiHostV1: (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiGetSourcesWithinMultiHostV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<multiHostIntegrationTypes.MultiHostSources>>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.getSourcesWithinMultiHostV1(requestParameters));
  },
  getSourceV1: (requestParameters: sourcesTypes.SourcesApiGetSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Source>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.getSourceV1(requestParameters));
  },
  getSpConfigExportStatusV1: (requestParameters: spConfigTypes.SPConfigApiGetSpConfigExportStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<spConfigTypes.SpConfigExportJobStatus>> => {
    const spconfigapi = new sdk.SPConfigApi(apiConfig);
    return handleApiCall(() => spconfigapi.getSpConfigExportStatusV1(requestParameters));
  },
  getSpConfigExportV1: (requestParameters: spConfigTypes.SPConfigApiGetSpConfigExportV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<spConfigTypes.SpConfigExportResults>> => {
    const spconfigapi = new sdk.SPConfigApi(apiConfig);
    return handleApiCall(() => spconfigapi.getSpConfigExportV1(requestParameters));
  },
  getSpConfigImportStatusV1: (requestParameters: spConfigTypes.SPConfigApiGetSpConfigImportStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<spConfigTypes.SpConfigImportJobStatus>> => {
    const spconfigapi = new sdk.SPConfigApi(apiConfig);
    return handleApiCall(() => spconfigapi.getSpConfigImportStatusV1(requestParameters));
  },
  getSpConfigImportV1: (requestParameters: spConfigTypes.SPConfigApiGetSpConfigImportV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<spConfigTypes.SpConfigImportResults>> => {
    const spconfigapi = new sdk.SPConfigApi(apiConfig);
    return handleApiCall(() => spconfigapi.getSpConfigImportV1(requestParameters));
  },
  getSSFConfigurationV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<sharedSignalsFrameworkSsfTypes.TransmitterMetadata>> => {
    const sharedsignalsframeworkssfapi = new sdk.SharedSignalsFrameworkSSFApi(apiConfig);
    return handleApiCall(() => sharedsignalsframeworkssfapi.getSSFConfigurationV1());
  },
  getStatusBySourceIdV1: (requestParameters: sourceUsagesTypes.SourceUsagesApiGetStatusBySourceIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourceUsagesTypes.SourceUsageStatus>> => {
    const sourceusagesapi = new sdk.SourceUsagesApi(apiConfig);
    return handleApiCall(() => sourceusagesapi.getStatusBySourceIdV1(requestParameters));
  },
  getStatusCheckDetailsV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<serviceDeskIntegrationTypes.QueuedCheckConfigDetails>> => {
    const servicedeskintegrationapi = new sdk.ServiceDeskIntegrationApi(apiConfig);
    return handleApiCall(() => servicedeskintegrationapi.getStatusCheckDetailsV1());
  },
  getStreamStatusV1: (requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiGetStreamStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sharedSignalsFrameworkSsfTypes.StreamStatusResponse>> => {
    const sharedsignalsframeworkssfapi = new sdk.SharedSignalsFrameworkSSFApi(apiConfig);
    return handleApiCall(() => sharedsignalsframeworkssfapi.getStreamStatusV1(requestParameters));
  },
  getStreamV1: (requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiGetStreamV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sharedSignalsFrameworkSsfTypes.GetStreamV1200Response>> => {
    const sharedsignalsframeworkssfapi = new sdk.SharedSignalsFrameworkSSFApi(apiConfig);
    return handleApiCall(() => sharedsignalsframeworkssfapi.getStreamV1(requestParameters));
  },
  getSystemRolesNerm: (requestParameters: sdk.SystemRolesNERMApiGetSystemRolesRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetSystemRoles200ResponseNERM>> => {
    const systemrolesnermapi = new sdk.SystemRolesNERMApi(apiConfig);
    return handleApiCall(() => systemrolesnermapi.getSystemRoles(requestParameters));
  },
  getTagByIdV1: (requestParameters: tagsTypes.TagsApiGetTagByIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<tagsTypes.Tag2>> => {
    const tagsapi = new sdk.TagsApi(apiConfig);
    return handleApiCall(() => tagsapi.getTagByIdV1(requestParameters));
  },
  getTaggedObjectV1: (requestParameters: taggedObjectsTypes.TaggedObjectsApiGetTaggedObjectV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<taggedObjectsTypes.TaggedObject>> => {
    const taggedobjectsapi = new sdk.TaggedObjectsApi(apiConfig);
    return handleApiCall(() => taggedobjectsapi.getTaggedObjectV1(requestParameters));
  },
  getTaskStatusListV1: (requestParameters: taskManagementTypes.TaskManagementApiGetTaskStatusListV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<taskManagementTypes.TaskStatus>>> => {
    const taskmanagementapi = new sdk.TaskManagementApi(apiConfig);
    return handleApiCall(() => taskmanagementapi.getTaskStatusListV1(requestParameters));
  },
  getTaskStatusV1: (requestParameters: taskManagementTypes.TaskManagementApiGetTaskStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<taskManagementTypes.TaskStatus>> => {
    const taskmanagementapi = new sdk.TaskManagementApi(apiConfig);
    return handleApiCall(() => taskmanagementapi.getTaskStatusV1(requestParameters));
  },
  getTasksV1: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiGetTasksV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<dataAccessSecurityTypes.TaskInfo>>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.getTasksV1(requestParameters));
  },
  getTaskV1: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiGetTaskV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<dataAccessSecurityTypes.TaskInfo>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.getTaskV1(requestParameters));
  },
  getTenantConfigConfigurationV1: (requestParameters: workReassignmentTypes.WorkReassignmentApiGetTenantConfigConfigurationV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<workReassignmentTypes.TenantConfigurationResponse>> => {
    const workreassignmentapi = new sdk.WorkReassignmentApi(apiConfig);
    return handleApiCall(() => workreassignmentapi.getTenantConfigConfigurationV1(requestParameters));
  },
  getTenantContextV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<Array<tenantContextTypes.GetTenantContextV1200ResponseInner>>> => {
    const tenantcontextapi = new sdk.TenantContextApi(apiConfig);
    return handleApiCall(() => tenantcontextapi.getTenantContextV1());
  },
  getTenantUiMetadataV1: (requestParameters: uiMetadataTypes.UIMetadataApiGetTenantUiMetadataV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<uiMetadataTypes.TenantUiMetadataItemResponse>> => {
    const uimetadataapi = new sdk.UIMetadataApi(apiConfig);
    return handleApiCall(() => uimetadataapi.getTenantUiMetadataV1(requestParameters));
  },
  getTenantV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<tenantTypes.Tenant>> => {
    const tenantapi = new sdk.TenantApi(apiConfig);
    return handleApiCall(() => tenantapi.getTenantV1());
  },
  getTotalCountV1: (requestParameters: apiUsageTypes.ApiUsageApiGetTotalCountV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const apiusageapi = new sdk.ApiUsageApi(apiConfig);
    return handleApiCall(() => apiusageapi.getTotalCountV1(requestParameters));
  },
  getTransformV1: (requestParameters: transformsTypes.TransformsApiGetTransformV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<transformsTypes.TransformRead>> => {
    const transformsapi = new sdk.TransformsApi(apiConfig);
    return handleApiCall(() => transformsapi.getTransformV1(requestParameters));
  },
  getUploadedConfigurationV1: (requestParameters: configurationHubTypes.ConfigurationHubApiGetUploadedConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<configurationHubTypes.BackupResponse>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.getUploadedConfigurationV1(requestParameters));
  },
  getUsagesByAccountIdV1: (requestParameters: accountUsagesTypes.AccountUsagesApiGetUsagesByAccountIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accountUsagesTypes.AccountUsage>>> => {
    const accountusagesapi = new sdk.AccountUsagesApi(apiConfig);
    return handleApiCall(() => accountusagesapi.getUsagesByAccountIdV1(requestParameters));
  },
  getUsagesBySourceIdV1: (requestParameters: sourceUsagesTypes.SourceUsagesApiGetUsagesBySourceIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<sourceUsagesTypes.SourceUsage>>> => {
    const sourceusagesapi = new sdk.SourceUsagesApi(apiConfig);
    return handleApiCall(() => sourceusagesapi.getUsagesBySourceIdV1(requestParameters));
  },
  getUserAvatarNerm: (requestParameters: sdk.UsersNERMApiGetUserAvatarRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.UrlNERM>> => {
    const usersnermapi = new sdk.UsersNERMApi(apiConfig);
    return handleApiCall(() => usersnermapi.getUserAvatar(requestParameters));
  },
  getUserLevelV1: (requestParameters: customUserLevelsTypes.CustomUserLevelsApiGetUserLevelV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customUserLevelsTypes.UserLevelSummaryDTO>> => {
    const customuserlevelsapi = new sdk.CustomUserLevelsApi(apiConfig);
    return handleApiCall(() => customuserlevelsapi.getUserLevelV1(requestParameters));
  },
  getUserManagerNerm: (requestParameters: sdk.UserManagersNERMApiGetUserManagerRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserManager200ResponseNERM>> => {
    const usermanagersnermapi = new sdk.UserManagersNERMApi(apiConfig);
    return handleApiCall(() => usermanagersnermapi.getUserManager(requestParameters));
  },
  getUserManagersNerm: (requestParameters: sdk.UserManagersNERMApiGetUserManagersRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetUserManagers200ResponseNERM>> => {
    const usermanagersnermapi = new sdk.UserManagersNERMApi(apiConfig);
    return handleApiCall(() => usermanagersnermapi.getUserManagers(requestParameters));
  },
  getUserNerm: (requestParameters: sdk.UsersNERMApiGetUserRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUser200ResponseNERM>> => {
    const usersnermapi = new sdk.UsersNERMApi(apiConfig);
    return handleApiCall(() => usersnermapi.getUser(requestParameters));
  },
  getUserProfileNerm: (requestParameters: sdk.UserProfilesNERMApiGetUserProfileRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserProfile200ResponseNERM>> => {
    const userprofilesnermapi = new sdk.UserProfilesNERMApi(apiConfig);
    return handleApiCall(() => userprofilesnermapi.getUserProfile(requestParameters));
  },
  getUserProfilesNerm: (requestParameters: sdk.UserProfilesNERMApiGetUserProfilesRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetUserProfiles200ResponseNERM>> => {
    const userprofilesnermapi = new sdk.UserProfilesNERMApi(apiConfig);
    return handleApiCall(() => userprofilesnermapi.getUserProfiles(requestParameters));
  },
  getUserRoleNerm: (requestParameters: sdk.UserRolesNERMApiGetUserRoleRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserRole200ResponseNERM>> => {
    const userrolesnermapi = new sdk.UserRolesNERMApi(apiConfig);
    return handleApiCall(() => userrolesnermapi.getUserRole(requestParameters));
  },
  getUserRolesNerm: (requestParameters: sdk.UserRolesNERMApiGetUserRolesRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetUserRoles200ResponseNERM>> => {
    const userrolesnermapi = new sdk.UserRolesNERMApi(apiConfig);
    return handleApiCall(() => userrolesnermapi.getUserRoles(requestParameters));
  },
  getUsersNerm: (requestParameters: sdk.UsersNERMApiGetUsersRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetUsers200ResponseNERM>> => {
    const usersnermapi = new sdk.UsersNERMApi(apiConfig);
    return handleApiCall(() => usersnermapi.getUsers(requestParameters));
  },
  getValidTimeZonesV1: (requestParameters: orgConfigTypes.OrgConfigApiGetValidTimeZonesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<string>>> => {
    const orgconfigapi = new sdk.OrgConfigApi(apiConfig);
    return handleApiCall(() => orgconfigapi.getValidTimeZonesV1(requestParameters));
  },
  getWorkflowActionsNerm: (requestParameters: sdk.WorkflowActionsNERMApiGetWorkflowActionsRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetWorkflowActions200ResponseNERM>> => {
    const workflowactionsnermapi = new sdk.WorkflowActionsNERMApi(apiConfig);
    return handleApiCall(() => workflowactionsnermapi.getWorkflowActions(requestParameters));
  },
  getWorkflowExecutionHistoryV1: (requestParameters: workflowsTypes.WorkflowsApiGetWorkflowExecutionHistoryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workflowsTypes.WorkflowExecutionEvent>>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.getWorkflowExecutionHistoryV1(requestParameters));
  },
  getWorkflowExecutionHistoryV2: (requestParameters: workflowsTypes.WorkflowsApiGetWorkflowExecutionHistoryV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workflowsTypes.WorkflowExecutionHistory>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.getWorkflowExecutionHistoryV2(requestParameters));
  },
  getWorkflowExecutionsV1: (requestParameters: workflowsTypes.WorkflowsApiGetWorkflowExecutionsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workflowsTypes.WorkflowExecution>>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.getWorkflowExecutionsV1(requestParameters));
  },
  getWorkflowExecutionV1: (requestParameters: workflowsTypes.WorkflowsApiGetWorkflowExecutionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workflowsTypes.WorkflowExecution>>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.getWorkflowExecutionV1(requestParameters));
  },
  getWorkflowSessionNerm: (requestParameters: sdk.WorkflowSessionsNERMApiGetWorkflowSessionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitWorkflowSession200ResponseNERM>> => {
    const workflowsessionsnermapi = new sdk.WorkflowSessionsNERMApi(apiConfig);
    return handleApiCall(() => workflowsessionsnermapi.getWorkflowSession(requestParameters));
  },
  getWorkflowSessionsNerm: (requestParameters: sdk.WorkflowSessionsNERMApiGetWorkflowSessionsRequest = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetWorkflowSessions200ResponseNERM>> => {
    const workflowsessionsnermapi = new sdk.WorkflowSessionsNERMApi(apiConfig);
    return handleApiCall(() => workflowsessionsnermapi.getWorkflowSessions(requestParameters));
  },
  getWorkflowSessionUploadNerm: (requestParameters: sdk.WorkflowSessionsNERMApiGetWorkflowSessionUploadRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.UrlNERM>> => {
    const workflowsessionsnermapi = new sdk.WorkflowSessionsNERMApi(apiConfig);
    return handleApiCall(() => workflowsessionsnermapi.getWorkflowSessionUpload(requestParameters));
  },
  getWorkflowV1: (requestParameters: workflowsTypes.WorkflowsApiGetWorkflowV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workflowsTypes.Workflow>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.getWorkflowV1(requestParameters));
  },
  getWorkgroupV1: (requestParameters: governanceGroupsTypes.GovernanceGroupsApiGetWorkgroupV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<governanceGroupsTypes.WorkgroupDto>> => {
    const governancegroupsapi = new sdk.GovernanceGroupsApi(apiConfig);
    return handleApiCall(() => governancegroupsapi.getWorkgroupV1(requestParameters));
  },
  getWorkItemsSummaryV1: (requestParameters: workItemsTypes.WorkItemsApiGetWorkItemsSummaryV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<workItemsTypes.WorkItemsSummary>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.getWorkItemsSummaryV1(requestParameters));
  },
  getWorkItemV1: (requestParameters: workItemsTypes.WorkItemsApiGetWorkItemV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workItemsTypes.WorkItems>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.getWorkItemV1(requestParameters));
  },
  ignoreIdentityOutliersV1: (requestParameters: iaiOutliersTypes.IAIOutliersApiIgnoreIdentityOutliersV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const iaioutliersapi = new sdk.IAIOutliersApi(apiConfig);
    return handleApiCall(() => iaioutliersapi.ignoreIdentityOutliersV1(requestParameters));
  },
  importAccountsSchemaV1: (requestParameters: sourcesTypes.SourcesApiImportAccountsSchemaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Schema>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.importAccountsSchemaV1(requestParameters));
  },
  importAccountsV1: (requestParameters: sourcesTypes.SourcesApiImportAccountsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.LoadAccountsTask>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.importAccountsV1(requestParameters));
  },
  importConnectorFileV1: (requestParameters: sourcesTypes.SourcesApiImportConnectorFileV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Source>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.importConnectorFileV1(requestParameters));
  },
  importEntitlementsBySourceV1: (requestParameters: entitlementsTypes.EntitlementsApiImportEntitlementsBySourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<entitlementsTypes.LoadEntitlementTask>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.importEntitlementsBySourceV1(requestParameters));
  },
  importEntitlementsSchemaV1: (requestParameters: sourcesTypes.SourcesApiImportEntitlementsSchemaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Schema>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.importEntitlementsSchemaV1(requestParameters));
  },
  importEntitlementsV1: (requestParameters: sourcesTypes.SourcesApiImportEntitlementsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.LoadEntitlementTask>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.importEntitlementsV1(requestParameters));
  },
  importFormDefinitionsV1: (requestParameters: customFormsTypes.CustomFormsApiImportFormDefinitionsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.ImportFormDefinitionsV1202Response>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.importFormDefinitionsV1(requestParameters));
  },
  importIdentityProfilesV1: (requestParameters: identityProfilesTypes.IdentityProfilesApiImportIdentityProfilesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityProfilesTypes.ObjectImportResult>> => {
    const identityprofilesapi = new sdk.IdentityProfilesApi(apiConfig);
    return handleApiCall(() => identityprofilesapi.importIdentityProfilesV1(requestParameters));
  },
  importNonEmployeeRecordsInBulkV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiImportNonEmployeeRecordsInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeBulkUploadJob>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.importNonEmployeeRecordsInBulkV1(requestParameters));
  },
  importSpConfigV1: (requestParameters: spConfigTypes.SPConfigApiImportSpConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<spConfigTypes.SpConfigJob>> => {
    const spconfigapi = new sdk.SPConfigApi(apiConfig);
    return handleApiCall(() => spconfigapi.importSpConfigV1(requestParameters, { headers: { 'Content-Type': null } } as any));
  },
  importUncorrelatedAccountsV1: (requestParameters: sourcesTypes.SourcesApiImportUncorrelatedAccountsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.LoadUncorrelatedAccountsTask>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.importUncorrelatedAccountsV1(requestParameters));
  },
  listAccessModelMetadataAttributeV1: (requestParameters: accessModelMetadataTypes.AccessModelMetadataApiListAccessModelMetadataAttributeV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accessModelMetadataTypes.AttributeDTO>>> => {
    const accessmodelmetadataapi = new sdk.AccessModelMetadataApi(apiConfig);
    return handleApiCall(() => accessmodelmetadataapi.listAccessModelMetadataAttributeV1(requestParameters));
  },
  listAccessModelMetadataAttributeValueV1: (requestParameters: accessModelMetadataTypes.AccessModelMetadataApiListAccessModelMetadataAttributeValueV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accessModelMetadataTypes.AttributeValueDTO>>> => {
    const accessmodelmetadataapi = new sdk.AccessModelMetadataApi(apiConfig);
    return handleApiCall(() => accessmodelmetadataapi.listAccessModelMetadataAttributeValueV1(requestParameters));
  },
  listAccessProfilesForSourceAppV1: (requestParameters: appsTypes.AppsApiListAccessProfilesForSourceAppV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<appsTypes.AccessProfileDetails>>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.listAccessProfilesForSourceAppV1(requestParameters));
  },
  listAccessProfilesV1: (requestParameters: accessProfilesTypes.AccessProfilesApiListAccessProfilesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accessProfilesTypes.AccessProfile>>> => {
    const accessprofilesapi = new sdk.AccessProfilesApi(apiConfig);
    return handleApiCall(() => accessprofilesapi.listAccessProfilesV1(requestParameters));
  },
  listAccessRequestApproversV1: (requestParameters: accessRequestApprovalsTypes.AccessRequestApprovalsApiListAccessRequestApproversV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accessRequestApprovalsTypes.AccessRequestApproversListResponse>>> => {
    const accessrequestapprovalsapi = new sdk.AccessRequestApprovalsApi(apiConfig);
    return handleApiCall(() => accessrequestapprovalsapi.listAccessRequestApproversV1(requestParameters));
  },
  listAccessRequestStatusV1: (requestParameters: accessRequestsTypes.AccessRequestsApiListAccessRequestStatusV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accessRequestsTypes.RequestedItemStatus>>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.listAccessRequestStatusV1(requestParameters));
  },
  listAccountActivitiesV1: (requestParameters: accountActivitiesTypes.AccountActivitiesApiListAccountActivitiesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accountActivitiesTypes.AccountActivity>>> => {
    const accountactivitiesapi = new sdk.AccountActivitiesApi(apiConfig);
    return handleApiCall(() => accountactivitiesapi.listAccountActivitiesV1(requestParameters));
  },
  listAccountsV1: (requestParameters: accountsTypes.AccountsApiListAccountsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accountsTypes.Account>>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.listAccountsV1(requestParameters));
  },
  listAdministratorsAccessRequestStatusV1: (requestParameters: accessRequestsTypes.AccessRequestsApiListAdministratorsAccessRequestStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accessRequestsTypes.AccessRequestAdminItemStatus>>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.listAdministratorsAccessRequestStatusV1(requestParameters));
  },
  listAllAuthorizationRightSetsV1: (requestParameters: customUserLevelsTypes.CustomUserLevelsApiListAllAuthorizationRightSetsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<customUserLevelsTypes.HierarchicalRightSet>>> => {
    const customuserlevelsapi = new sdk.CustomUserLevelsApi(apiConfig);
    return handleApiCall(() => customuserlevelsapi.listAllAuthorizationRightSetsV1(requestParameters));
  },
  listAllSourceAppV1: (requestParameters: appsTypes.AppsApiListAllSourceAppV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<appsTypes.SourceApp>>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.listAllSourceAppV1(requestParameters));
  },
  listAllUserAppsV1: (requestParameters: appsTypes.AppsApiListAllUserAppsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<appsTypes.UserApp>>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.listAllUserAppsV1(requestParameters));
  },
  listApiSummaryV1: (requestParameters: apiUsageTypes.ApiUsageApiListApiSummaryV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<apiUsageTypes.SummaryResponse>>> => {
    const apiusageapi = new sdk.ApiUsageApi(apiConfig);
    return handleApiCall(() => apiusageapi.listApiSummaryV1(requestParameters));
  },
  listAssignedSourceAppV1: (requestParameters: appsTypes.AppsApiListAssignedSourceAppV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<appsTypes.SourceApp>>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.listAssignedSourceAppV1(requestParameters));
  },
  listAvailableAccountsForUserAppV1: (requestParameters: appsTypes.AppsApiListAvailableAccountsForUserAppV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<appsTypes.AppAccountDetails>>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.listAvailableAccountsForUserAppV1(requestParameters));
  },
  listAvailableSourceAppsV1: (requestParameters: appsTypes.AppsApiListAvailableSourceAppsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<appsTypes.SourceApp>>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.listAvailableSourceAppsV1(requestParameters));
  },
  listBackupsV1: (requestParameters: configurationHubTypes.ConfigurationHubApiListBackupsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<configurationHubTypes.BackupResponse>>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.listBackupsV1(requestParameters));
  },
  listCampaignFiltersV1: (requestParameters: certificationCampaignFiltersTypes.CertificationCampaignFiltersApiListCampaignFiltersV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignFiltersTypes.ListCampaignFiltersV1200Response>> => {
    const certificationcampaignfiltersapi = new sdk.CertificationCampaignFiltersApi(apiConfig);
    return handleApiCall(() => certificationcampaignfiltersapi.listCampaignFiltersV1(requestParameters));
  },
  listCertificationReviewersV1: (requestParameters: certificationsTypes.CertificationsApiListCertificationReviewersV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<certificationsTypes.IdentityReferenceWithNameAndEmail>>> => {
    const certificationsapi = new sdk.CertificationsApi(apiConfig);
    return handleApiCall(() => certificationsapi.listCertificationReviewersV1(requestParameters));
  },
  listCompletedApprovalsV1: (requestParameters: accessRequestApprovalsTypes.AccessRequestApprovalsApiListCompletedApprovalsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accessRequestApprovalsTypes.CompletedApproval>>> => {
    const accessrequestapprovalsapi = new sdk.AccessRequestApprovalsApi(apiConfig);
    return handleApiCall(() => accessrequestapprovalsapi.listCompletedApprovalsV1(requestParameters));
  },
  listCompleteWorkflowLibraryV1: (requestParameters: workflowsTypes.WorkflowsApiListCompleteWorkflowLibraryV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workflowsTypes.ListCompleteWorkflowLibraryV1200ResponseInner>>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.listCompleteWorkflowLibraryV1(requestParameters));
  },
  listConnectionsV1: (requestParameters: governanceGroupsTypes.GovernanceGroupsApiListConnectionsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<governanceGroupsTypes.WorkgroupConnectionDto>>> => {
    const governancegroupsapi = new sdk.GovernanceGroupsApi(apiConfig);
    return handleApiCall(() => governancegroupsapi.listConnectionsV1(requestParameters));
  },
  listConnectorCustomizersV1: (requestParameters: connectorCustomizersTypes.ConnectorCustomizersApiListConnectorCustomizersV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<connectorCustomizersTypes.ConnectorCustomizersResponse>>> => {
    const connectorcustomizersapi = new sdk.ConnectorCustomizersApi(apiConfig);
    return handleApiCall(() => connectorcustomizersapi.listConnectorCustomizersV1(requestParameters));
  },
  listDataSegmentsV1: (requestParameters: dataSegmentationTypes.DataSegmentationApiListDataSegmentsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<dataSegmentationTypes.DataSegment>>> => {
    const datasegmentationapi = new sdk.DataSegmentationApi(apiConfig);
    return handleApiCall(() => datasegmentationapi.listDataSegmentsV1(requestParameters));
  },
  listDeploysV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<configurationHubTypes.ListDeploysV1200Response>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.listDeploysV1());
  },
  listDimensionAccessProfilesV1: (requestParameters: dimensionsTypes.DimensionsApiListDimensionAccessProfilesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<dimensionsTypes.AccessProfile>>> => {
    const dimensionsapi = new sdk.DimensionsApi(apiConfig);
    return handleApiCall(() => dimensionsapi.listDimensionAccessProfilesV1(requestParameters));
  },
  listDimensionsV1: (requestParameters: dimensionsTypes.DimensionsApiListDimensionsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<dimensionsTypes.Dimension>>> => {
    const dimensionsapi = new sdk.DimensionsApi(apiConfig);
    return handleApiCall(() => dimensionsapi.listDimensionsV1(requestParameters));
  },
  listDraftsV1: (requestParameters: configurationHubTypes.ConfigurationHubApiListDraftsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<configurationHubTypes.DraftResponse>>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.listDraftsV1(requestParameters));
  },
  listEntitlementChildrenV1: (requestParameters: entitlementsTypes.EntitlementsApiListEntitlementChildrenV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<entitlementsTypes.EntitlementV2>>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.listEntitlementChildrenV1(requestParameters));
  },
  listEntitlementConnectionsForCurrentIdentityV1: (requestParameters: entitlementConnectionsTypes.EntitlementConnectionsApiListEntitlementConnectionsForCurrentIdentityV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<entitlementConnectionsTypes.EntitlementConnectionSearchHit>>> => {
    const entitlementconnectionsapi = new sdk.EntitlementConnectionsApi(apiConfig);
    return handleApiCall(() => entitlementconnectionsapi.listEntitlementConnectionsForCurrentIdentityV1(requestParameters));
  },
  listEntitlementConnectionsV1: (requestParameters: entitlementConnectionsTypes.EntitlementConnectionsApiListEntitlementConnectionsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<entitlementConnectionsTypes.EntitlementConnectionSearchHit>>> => {
    const entitlementconnectionsapi = new sdk.EntitlementConnectionsApi(apiConfig);
    return handleApiCall(() => entitlementconnectionsapi.listEntitlementConnectionsV1(requestParameters));
  },
  listEntitlementParentsV1: (requestParameters: entitlementsTypes.EntitlementsApiListEntitlementParentsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<entitlementsTypes.EntitlementV2>>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.listEntitlementParentsV1(requestParameters));
  },
  listEntitlementsByAccountV1: (requestParameters: entitlementsTypes.EntitlementsApiListEntitlementsByAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<entitlementsTypes.EntitlementV2>>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.listEntitlementsByAccountV1(requestParameters));
  },
  listEntitlementsByIdentityV1: (requestParameters: identitiesTypes.IdentitiesApiListEntitlementsByIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identitiesTypes.IdentityEntitlements>>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.listEntitlementsByIdentityV1(requestParameters));
  },
  listEntitlementsV1: (requestParameters: entitlementsTypes.EntitlementsApiListEntitlementsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<entitlementsTypes.EntitlementV2>>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.listEntitlementsV1(requestParameters));
  },
  listFromAddressesV1: (requestParameters: notificationsTypes.NotificationsApiListFromAddressesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<notificationsTypes.EmailStatusDto>>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.listFromAddressesV1(requestParameters));
  },
  listHistoricalIdentitiesV1: (requestParameters: identityHistoryTypes.IdentityHistoryApiListHistoricalIdentitiesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identityHistoryTypes.IdentityListItem>>> => {
    const identityhistoryapi = new sdk.IdentityHistoryApi(apiConfig);
    return handleApiCall(() => identityhistoryapi.listHistoricalIdentitiesV1(requestParameters));
  },
  listIdentitiesV1: (requestParameters: identitiesTypes.IdentitiesApiListIdentitiesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identitiesTypes.Identity>>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.listIdentitiesV1(requestParameters));
  },
  listIdentityAccessItemsV1: (requestParameters: identityHistoryTypes.IdentityHistoryApiListIdentityAccessItemsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identityHistoryTypes.ListIdentityAccessItemsV1200ResponseInner>>> => {
    const identityhistoryapi = new sdk.IdentityHistoryApi(apiConfig);
    return handleApiCall(() => identityhistoryapi.listIdentityAccessItemsV1(requestParameters));
  },
  listIdentityAccessReviewItemsV1: (requestParameters: certificationsTypes.CertificationsApiListIdentityAccessReviewItemsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<certificationsTypes.AccessReviewItem>>> => {
    const certificationsapi = new sdk.CertificationsApi(apiConfig);
    return handleApiCall(() => certificationsapi.listIdentityAccessReviewItemsV1(requestParameters));
  },
  listIdentityAttributesV1: (requestParameters: identityAttributesTypes.IdentityAttributesApiListIdentityAttributesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identityAttributesTypes.IdentityAttribute2>>> => {
    const identityattributesapi = new sdk.IdentityAttributesApi(apiConfig);
    return handleApiCall(() => identityattributesapi.listIdentityAttributesV1(requestParameters));
  },
  listIdentityCertificationsV1: (requestParameters: certificationsTypes.CertificationsApiListIdentityCertificationsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<certificationsTypes.IdentityCertificationDto>>> => {
    const certificationsapi = new sdk.CertificationsApi(apiConfig);
    return handleApiCall(() => certificationsapi.listIdentityCertificationsV1(requestParameters));
  },
  listIdentityCollectorsV1: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiListIdentityCollectorsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<dataAccessSecurityTypes.Identitycollectorlistitem>>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.listIdentityCollectorsV1(requestParameters));
  },
  listIdentityProfilesV1: (requestParameters: identityProfilesTypes.IdentityProfilesApiListIdentityProfilesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identityProfilesTypes.IdentityProfile>>> => {
    const identityprofilesapi = new sdk.IdentityProfilesApi(apiConfig);
    return handleApiCall(() => identityprofilesapi.listIdentityProfilesV1(requestParameters));
  },
  listIdentitySnapshotAccessItemsV1: (requestParameters: identityHistoryTypes.IdentityHistoryApiListIdentitySnapshotAccessItemsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identityHistoryTypes.ListIdentitySnapshotAccessItemsV1200ResponseInner>>> => {
    const identityhistoryapi = new sdk.IdentityHistoryApi(apiConfig);
    return handleApiCall(() => identityhistoryapi.listIdentitySnapshotAccessItemsV1(requestParameters));
  },
  listIdentitySnapshotsV1: (requestParameters: identityHistoryTypes.IdentityHistoryApiListIdentitySnapshotsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<identityHistoryTypes.IdentitySnapshotSummaryResponse>>> => {
    const identityhistoryapi = new sdk.IdentityHistoryApi(apiConfig);
    return handleApiCall(() => identityhistoryapi.listIdentitySnapshotsV1(requestParameters));
  },
  listMachineAccountMappingsV1: (requestParameters: machineAccountMappingsTypes.MachineAccountMappingsApiListMachineAccountMappingsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineAccountMappingsTypes.AttributeMappings>>> => {
    const machineaccountmappingsapi = new sdk.MachineAccountMappingsApi(apiConfig);
    return handleApiCall(() => machineaccountmappingsapi.listMachineAccountMappingsV1(requestParameters));
  },
  listMachineAccountSubtypesV1: (requestParameters: machineAccountsTypes.MachineAccountsApiListMachineAccountSubtypesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineAccountsTypes.SourceSubtype>>> => {
    const machineaccountsapi = new sdk.MachineAccountsApi(apiConfig);
    return handleApiCall(() => machineaccountsapi.listMachineAccountSubtypesV1(requestParameters));
  },
  listMachineAccountsV1: (requestParameters: machineAccountsTypes.MachineAccountsApiListMachineAccountsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineAccountsTypes.MachineAccount>>> => {
    const machineaccountsapi = new sdk.MachineAccountsApi(apiConfig);
    return handleApiCall(() => machineaccountsapi.listMachineAccountsV1(requestParameters));
  },
  listMachineIdentitiesV1: (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiListMachineIdentitiesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineIdentitiesTypes.MachineIdentityResponse>>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.listMachineIdentitiesV1(requestParameters));
  },
  listMachineIdentitiesV2: (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiListMachineIdentitiesV2Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineIdentitiesTypes.Machineidentityv2>>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.listMachineIdentitiesV2(requestParameters));
  },
  listMachineIdentityUserEntitlementsV1: (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiListMachineIdentityUserEntitlementsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineIdentitiesTypes.MachineIdentityUserEntitlementResponse>>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.listMachineIdentityUserEntitlementsV1(requestParameters));
  },
  listNonEmployeeApprovalsV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiListNonEmployeeApprovalsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<nonEmployeeLifecycleManagementTypes.NonEmployeeApprovalItem>>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.listNonEmployeeApprovalsV1(requestParameters));
  },
  listNonEmployeeRecordsV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiListNonEmployeeRecordsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<nonEmployeeLifecycleManagementTypes.NonEmployeeRecord>>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.listNonEmployeeRecordsV1(requestParameters));
  },
  listNonEmployeeRequestsV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiListNonEmployeeRequestsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<nonEmployeeLifecycleManagementTypes.NonEmployeeRequest>>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.listNonEmployeeRequestsV1(requestParameters));
  },
  listNonEmployeeSourcesV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiListNonEmployeeSourcesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<nonEmployeeLifecycleManagementTypes.NonEmployeeSourceWithNECount>>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.listNonEmployeeSourcesV1(requestParameters));
  },
  listNotificationTemplateDefaultsV1: (requestParameters: notificationsTypes.NotificationsApiListNotificationTemplateDefaultsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<notificationsTypes.TemplateDtoDefault>>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.listNotificationTemplateDefaultsV1(requestParameters));
  },
  listNotificationTemplatesV1: (requestParameters: notificationsTypes.NotificationsApiListNotificationTemplatesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<notificationsTypes.TemplateDto>>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.listNotificationTemplatesV1(requestParameters));
  },
  listOauthClientsV1: (requestParameters: oauthClientsTypes.OAuthClientsApiListOauthClientsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<oauthClientsTypes.GetOAuthClientResponse>>> => {
    const oauthclientsapi = new sdk.OAuthClientsApi(apiConfig);
    return handleApiCall(() => oauthclientsapi.listOauthClientsV1(requestParameters));
  },
  listOutliersContributingFeatureAccessItemsV1: (requestParameters: iaiOutliersTypes.IAIOutliersApiListOutliersContributingFeatureAccessItemsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<iaiOutliersTypes.OutliersContributingFeatureAccessItems>>> => {
    const iaioutliersapi = new sdk.IAIOutliersApi(apiConfig);
    return handleApiCall(() => iaioutliersapi.listOutliersContributingFeatureAccessItemsV1(requestParameters));
  },
  listOwnedUserAppsV1: (requestParameters: appsTypes.AppsApiListOwnedUserAppsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<appsTypes.UserApp>>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.listOwnedUserAppsV1(requestParameters));
  },
  listOwnershipCorrelationConfigsV1: (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiListOwnershipCorrelationConfigsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineIdentitiesTypes.CorrelationConfig>>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.listOwnershipCorrelationConfigsV1(requestParameters));
  },
  listPasswordPoliciesV1: (requestParameters: passwordPoliciesTypes.PasswordPoliciesApiListPasswordPoliciesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<passwordPoliciesTypes.PasswordPolicyV3Dto>>> => {
    const passwordpoliciesapi = new sdk.PasswordPoliciesApi(apiConfig);
    return handleApiCall(() => passwordpoliciesapi.listPasswordPoliciesV1(requestParameters));
  },
  listPasswordPolicyHoldersOnSourceV1: (requestParameters: sourcesTypes.SourcesApiListPasswordPolicyHoldersOnSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<sourcesTypes.PasswordPolicyHoldersDtoInner>>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.listPasswordPolicyHoldersOnSourceV1(requestParameters));
  },
  listPendingApprovalsV1: (requestParameters: accessRequestApprovalsTypes.AccessRequestApprovalsApiListPendingApprovalsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accessRequestApprovalsTypes.PendingApproval>>> => {
    const accessrequestapprovalsapi = new sdk.AccessRequestApprovalsApi(apiConfig);
    return handleApiCall(() => accessrequestapprovalsapi.listPendingApprovalsV1(requestParameters));
  },
  listPendingEntitlementRecommendationApprovalsV1: (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiListPendingEntitlementRecommendationApprovalsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<suggestedEntitlementDescriptionTypes.EntitlementRecommendationRecord>>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.listPendingEntitlementRecommendationApprovalsV1(requestParameters));
  },
  listPersonalAccessTokensV1: (requestParameters: personalAccessTokensTypes.PersonalAccessTokensApiListPersonalAccessTokensV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<personalAccessTokensTypes.GetPersonalAccessTokenResponse>>> => {
    const personalaccesstokensapi = new sdk.PersonalAccessTokensApi(apiConfig);
    return handleApiCall(() => personalaccesstokensapi.listPersonalAccessTokensV1(requestParameters));
  },
  listPrivilegeCriteriaConfigV1: (requestParameters: privilegeCriteriaConfigurationTypes.PrivilegeCriteriaConfigurationApiListPrivilegeCriteriaConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<privilegeCriteriaConfigurationTypes.PrivilegeCriteriaConfigDTO>>> => {
    const privilegecriteriaconfigurationapi = new sdk.PrivilegeCriteriaConfigurationApi(apiConfig);
    return handleApiCall(() => privilegecriteriaconfigurationapi.listPrivilegeCriteriaConfigV1(requestParameters));
  },
  listPrivilegeCriteriaV1: (requestParameters: privilegeCriteriaTypes.PrivilegeCriteriaApiListPrivilegeCriteriaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<privilegeCriteriaTypes.PrivilegeCriteriaDTO>>> => {
    const privilegecriteriaapi = new sdk.PrivilegeCriteriaApi(apiConfig);
    return handleApiCall(() => privilegecriteriaapi.listPrivilegeCriteriaV1(requestParameters));
  },
  listPrivilegedEntitlementRecommendationsV1: (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiListPrivilegedEntitlementRecommendationsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<suggestedEntitlementDescriptionTypes.PrivilegedRecommendationGroup>>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.listPrivilegedEntitlementRecommendationsV1(requestParameters));
  },
  listProvisioningPoliciesV1: (requestParameters: sourcesTypes.SourcesApiListProvisioningPoliciesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<sourcesTypes.ProvisioningPolicyDto>>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.listProvisioningPoliciesV1(requestParameters));
  },
  listProvisioningPoliciesV2: (requestParameters: sourcesTypes.SourcesApiListProvisioningPoliciesV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<sourcesTypes.ProvisioningPolicyDtoV2>>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.listProvisioningPoliciesV2(requestParameters));
  },
  listReassignmentConfigurationsV1: (requestParameters: workReassignmentTypes.WorkReassignmentApiListReassignmentConfigurationsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workReassignmentTypes.ConfigurationResponse>>> => {
    const workreassignmentapi = new sdk.WorkReassignmentApi(apiConfig);
    return handleApiCall(() => workreassignmentapi.listReassignmentConfigurationsV1(requestParameters));
  },
  listRequestableObjectsV1: (requestParameters: requestableObjectsTypes.RequestableObjectsApiListRequestableObjectsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<requestableObjectsTypes.RequestableObject>>> => {
    const requestableobjectsapi = new sdk.RequestableObjectsApi(apiConfig);
    return handleApiCall(() => requestableobjectsapi.listRequestableObjectsV1(requestParameters));
  },
  listRolesV1: (requestParameters: rolesTypes.RolesApiListRolesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<rolesTypes.Role>>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.listRolesV1(requestParameters));
  },
  listSavedSearchesV1: (requestParameters: savedSearchTypes.SavedSearchApiListSavedSearchesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<savedSearchTypes.SavedSearch>>> => {
    const savedsearchapi = new sdk.SavedSearchApi(apiConfig);
    return handleApiCall(() => savedsearchapi.listSavedSearchesV1(requestParameters));
  },
  listScheduledActionsV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<Array<configurationHubTypes.ScheduledActionResponse>>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.listScheduledActionsV1());
  },
  listScheduledSearchV1: (requestParameters: scheduledSearchTypes.ScheduledSearchApiListScheduledSearchV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<scheduledSearchTypes.ScheduledSearch>>> => {
    const scheduledsearchapi = new sdk.ScheduledSearchApi(apiConfig);
    return handleApiCall(() => scheduledsearchapi.listScheduledSearchV1(requestParameters));
  },
  listSedsV1: (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiListSedsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<suggestedEntitlementDescriptionTypes.Sed>>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.listSedsV1(requestParameters));
  },
  listSegmentsV1: (requestParameters: segmentsTypes.SegmentsApiListSegmentsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<segmentsTypes.Segment>>> => {
    const segmentsapi = new sdk.SegmentsApi(apiConfig);
    return handleApiCall(() => segmentsapi.listSegmentsV1(requestParameters));
  },
  listSodPoliciesV1: (requestParameters: sodPoliciesTypes.SODPoliciesApiListSodPoliciesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<sodPoliciesTypes.SodPolicy>>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.listSodPoliciesV1(requestParameters));
  },
  listSourceSubtypesV1: (requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiListSourceSubtypesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineAccountSubtypesTypes.SourceSubtypeWithSource>>> => {
    const machineaccountsubtypesapi = new sdk.MachineAccountSubtypesApi(apiConfig);
    return handleApiCall(() => machineaccountsubtypesapi.listSourceSubtypesV1(requestParameters));
  },
  listSourcesV1: (requestParameters: sourcesTypes.SourcesApiListSourcesV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<sourcesTypes.Source>>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.listSourcesV1(requestParameters));
  },
  listSpConfigObjectsV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<Array<spConfigTypes.SpConfigObject>>> => {
    const spconfigapi = new sdk.SPConfigApi(apiConfig);
    return handleApiCall(() => spconfigapi.listSpConfigObjectsV1());
  },
  listSubscriptionsV1: (requestParameters: triggersTypes.TriggersApiListSubscriptionsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<triggersTypes.Subscription>>> => {
    const triggersapi = new sdk.TriggersApi(apiConfig);
    return handleApiCall(() => triggersapi.listSubscriptionsV1(requestParameters));
  },
  listTaggedObjectsByTypeV1: (requestParameters: taggedObjectsTypes.TaggedObjectsApiListTaggedObjectsByTypeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<taggedObjectsTypes.TaggedObject>>> => {
    const taggedobjectsapi = new sdk.TaggedObjectsApi(apiConfig);
    return handleApiCall(() => taggedobjectsapi.listTaggedObjectsByTypeV1(requestParameters));
  },
  listTaggedObjectsV1: (requestParameters: taggedObjectsTypes.TaggedObjectsApiListTaggedObjectsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<taggedObjectsTypes.TaggedObject>>> => {
    const taggedobjectsapi = new sdk.TaggedObjectsApi(apiConfig);
    return handleApiCall(() => taggedobjectsapi.listTaggedObjectsV1(requestParameters));
  },
  listTagsV1: (requestParameters: tagsTypes.TagsApiListTagsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<tagsTypes.Tag2>>> => {
    const tagsapi = new sdk.TagsApi(apiConfig);
    return handleApiCall(() => tagsapi.listTagsV1(requestParameters));
  },
  listTransformsV1: (requestParameters: transformsTypes.TransformsApiListTransformsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<transformsTypes.TransformRead>>> => {
    const transformsapi = new sdk.TransformsApi(apiConfig);
    return handleApiCall(() => transformsapi.listTransformsV1(requestParameters));
  },
  listTriggerInvocationStatusV1: (requestParameters: triggersTypes.TriggersApiListTriggerInvocationStatusV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<triggersTypes.InvocationStatus>>> => {
    const triggersapi = new sdk.TriggersApi(apiConfig);
    return handleApiCall(() => triggersapi.listTriggerInvocationStatusV1(requestParameters));
  },
  listTriggersV1: (requestParameters: triggersTypes.TriggersApiListTriggersV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<triggersTypes.Trigger>>> => {
    const triggersapi = new sdk.TriggersApi(apiConfig);
    return handleApiCall(() => triggersapi.listTriggersV1(requestParameters));
  },
  listUploadedConfigurationsV1: (requestParameters: configurationHubTypes.ConfigurationHubApiListUploadedConfigurationsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<configurationHubTypes.BackupResponse>>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.listUploadedConfigurationsV1(requestParameters));
  },
  listUserLevelIdentitiesV1: (requestParameters: customUserLevelsTypes.CustomUserLevelsApiListUserLevelIdentitiesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<customUserLevelsTypes.AuthUserSlimResponse>>> => {
    const customuserlevelsapi = new sdk.CustomUserLevelsApi(apiConfig);
    return handleApiCall(() => customuserlevelsapi.listUserLevelIdentitiesV1(requestParameters));
  },
  listUserLevelsV1: (requestParameters: customUserLevelsTypes.CustomUserLevelsApiListUserLevelsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<customUserLevelsTypes.UserLevelSummaryDTO>>> => {
    const customuserlevelsapi = new sdk.CustomUserLevelsApi(apiConfig);
    return handleApiCall(() => customuserlevelsapi.listUserLevelsV1(requestParameters));
  },
  listWorkflowLibraryActionsV1: (requestParameters: workflowsTypes.WorkflowsApiListWorkflowLibraryActionsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workflowsTypes.WorkflowLibraryAction>>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.listWorkflowLibraryActionsV1(requestParameters));
  },
  listWorkflowLibraryOperatorsV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workflowsTypes.WorkflowLibraryOperator>>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.listWorkflowLibraryOperatorsV1());
  },
  listWorkflowLibraryTriggersV1: (requestParameters: workflowsTypes.WorkflowsApiListWorkflowLibraryTriggersV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workflowsTypes.WorkflowLibraryTrigger>>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.listWorkflowLibraryTriggersV1(requestParameters));
  },
  listWorkflowsV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workflowsTypes.Workflow>>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.listWorkflowsV1());
  },
  listWorkgroupMembersV1: (requestParameters: governanceGroupsTypes.GovernanceGroupsApiListWorkgroupMembersV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<governanceGroupsTypes.ListWorkgroupMembersV1200ResponseInner>>> => {
    const governancegroupsapi = new sdk.GovernanceGroupsApi(apiConfig);
    return handleApiCall(() => governancegroupsapi.listWorkgroupMembersV1(requestParameters));
  },
  listWorkgroupsV1: (requestParameters: governanceGroupsTypes.GovernanceGroupsApiListWorkgroupsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<governanceGroupsTypes.WorkgroupDto>>> => {
    const governancegroupsapi = new sdk.GovernanceGroupsApi(apiConfig);
    return handleApiCall(() => governancegroupsapi.listWorkgroupsV1(requestParameters));
  },
  listWorkItemsV1: (requestParameters: workItemsTypes.WorkItemsApiListWorkItemsV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<workItemsTypes.WorkItems>>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.listWorkItemsV1(requestParameters));
  },
  loadAccountSelectionsV1: (requestParameters: accessRequestsTypes.AccessRequestsApiLoadAccountSelectionsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessRequestsTypes.AccountsSelectionResponse>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.loadAccountSelectionsV1(requestParameters));
  },
  loadBulkSourceSubtypesV1: (requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiLoadBulkSourceSubtypesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineAccountSubtypesTypes.SourceSubtypeWithSource>>> => {
    const machineaccountsubtypesapi = new sdk.MachineAccountSubtypesApi(apiConfig);
    return handleApiCall(() => machineaccountsubtypesapi.loadBulkSourceSubtypesV1(requestParameters));
  },
  makeIdentityDecisionV1: (requestParameters: certificationsTypes.CertificationsApiMakeIdentityDecisionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationsTypes.IdentityCertificationDto>> => {
    const certificationsapi = new sdk.CertificationsApi(apiConfig);
    return handleApiCall(() => certificationsapi.makeIdentityDecisionV1(requestParameters));
  },
  moveApprovalV1: (requestParameters: approvalsTypes.ApprovalsApiMoveApprovalV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.moveApprovalV1(requestParameters));
  },
  moveV1: (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiMoveV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignsTypes.CertificationTask>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.moveV1(requestParameters));
  },
  patchAccessProfileV1: (requestParameters: accessProfilesTypes.AccessProfilesApiPatchAccessProfileV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessProfilesTypes.AccessProfile>> => {
    const accessprofilesapi = new sdk.AccessProfilesApi(apiConfig);
    return handleApiCall(() => accessprofilesapi.patchAccessProfileV1(requestParameters));
  },
  patchAdvancedSearchNerm: (requestParameters: sdk.AdvancedSearchNERMApiPatchAdvancedSearchRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitAdvancedSearch200ResponseNERM>> => {
    const advancedsearchnermapi = new sdk.AdvancedSearchNERMApi(apiConfig);
    return handleApiCall(() => advancedsearchnermapi.patchAdvancedSearch(requestParameters));
  },
  patchAttributeOptionByIdNerm: (requestParameters: sdk.AttributeOptionsNERMApiPatchAttributeOptionByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitAttributeOption200ResponseNERM>> => {
    const attributeoptionsnermapi = new sdk.AttributeOptionsNERMApi(apiConfig);
    return handleApiCall(() => attributeoptionsnermapi.patchAttributeOptionById(requestParameters));
  },
  patchAttributeOptionByUidNerm: (requestParameters: sdk.AttributeOptionsNERMApiPatchAttributeOptionByUidRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitAttributeOption200ResponseNERM>> => {
    const attributeoptionsnermapi = new sdk.AttributeOptionsNERMApi(apiConfig);
    return handleApiCall(() => attributeoptionsnermapi.patchAttributeOptionByUid(requestParameters));
  },
  patchAttributeOptionsNerm: (requestParameters: sdk.AttributeOptionsNERMApiPatchAttributeOptionsRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitAttributeOptions200ResponseNERM>> => {
    const attributeoptionsnermapi = new sdk.AttributeOptionsNERMApi(apiConfig);
    return handleApiCall(() => attributeoptionsnermapi.patchAttributeOptions(requestParameters));
  },
  patchAuthOrgLockoutConfigV1: (requestParameters: globalTenantSecuritySettingsTypes.GlobalTenantSecuritySettingsApiPatchAuthOrgLockoutConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<globalTenantSecuritySettingsTypes.LockoutConfiguration>> => {
    const globaltenantsecuritysettingsapi = new sdk.GlobalTenantSecuritySettingsApi(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsapi.patchAuthOrgLockoutConfigV1(requestParameters));
  },
  patchAuthOrgNetworkConfigV1: (requestParameters: globalTenantSecuritySettingsTypes.GlobalTenantSecuritySettingsApiPatchAuthOrgNetworkConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<globalTenantSecuritySettingsTypes.NetworkConfiguration>> => {
    const globaltenantsecuritysettingsapi = new sdk.GlobalTenantSecuritySettingsApi(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsapi.patchAuthOrgNetworkConfigV1(requestParameters));
  },
  patchAuthOrgServiceProviderConfigV1: (requestParameters: globalTenantSecuritySettingsTypes.GlobalTenantSecuritySettingsApiPatchAuthOrgServiceProviderConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<globalTenantSecuritySettingsTypes.ServiceProviderConfiguration>> => {
    const globaltenantsecuritysettingsapi = new sdk.GlobalTenantSecuritySettingsApi(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsapi.patchAuthOrgServiceProviderConfigV1(requestParameters));
  },
  patchAuthOrgSessionConfigV1: (requestParameters: globalTenantSecuritySettingsTypes.GlobalTenantSecuritySettingsApiPatchAuthOrgSessionConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<globalTenantSecuritySettingsTypes.SessionConfiguration>> => {
    const globaltenantsecuritysettingsapi = new sdk.GlobalTenantSecuritySettingsApi(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsapi.patchAuthOrgSessionConfigV1(requestParameters));
  },
  patchAuthUserV1: (requestParameters: authUsersTypes.AuthUsersApiPatchAuthUserV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<authUsersTypes.AuthUser>> => {
    const authusersapi = new sdk.AuthUsersApi(apiConfig);
    return handleApiCall(() => authusersapi.patchAuthUserV1(requestParameters));
  },
  patchBeforeProvisioningRuleV1: (requestParameters: simIntegrationsTypes.SIMIntegrationsApiPatchBeforeProvisioningRuleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<simIntegrationsTypes.ServiceDeskIntegrationDto>> => {
    const simintegrationsapi = new sdk.SIMIntegrationsApi(apiConfig);
    return handleApiCall(() => simintegrationsapi.patchBeforeProvisioningRuleV1(requestParameters));
  },
  patchCampaignTemplateV1: (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiPatchCampaignTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignsTypes.CampaignTemplate>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.patchCampaignTemplateV1(requestParameters));
  },
  patchDataRecordNerm: (requestParameters: sdk.ConsolidationNERMApiPatchDataRecordRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const consolidationnermapi = new sdk.ConsolidationNERMApi(apiConfig);
    return handleApiCall(() => consolidationnermapi.patchDataRecord(requestParameters));
  },
  patchDataSegmentV1: (requestParameters: dataSegmentationTypes.DataSegmentationApiPatchDataSegmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<dataSegmentationTypes.DataSegment>> => {
    const datasegmentationapi = new sdk.DataSegmentationApi(apiConfig);
    return handleApiCall(() => datasegmentationapi.patchDataSegmentV1(requestParameters));
  },
  patchDimensionV1: (requestParameters: dimensionsTypes.DimensionsApiPatchDimensionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<dimensionsTypes.Dimension>> => {
    const dimensionsapi = new sdk.DimensionsApi(apiConfig);
    return handleApiCall(() => dimensionsapi.patchDimensionV1(requestParameters));
  },
  patchEntitlementConnectionByIdV1: (requestParameters: entitlementConnectionsTypes.EntitlementConnectionsApiPatchEntitlementConnectionByIdV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<entitlementConnectionsTypes.EntitlementConnection>> => {
    const entitlementconnectionsapi = new sdk.EntitlementConnectionsApi(apiConfig);
    return handleApiCall(() => entitlementconnectionsapi.patchEntitlementConnectionByIdV1(requestParameters));
  },
  patchEntitlementConnectionByQueryV1: (requestParameters: entitlementConnectionsTypes.EntitlementConnectionsApiPatchEntitlementConnectionByQueryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<entitlementConnectionsTypes.EntitlementConnection>> => {
    const entitlementconnectionsapi = new sdk.EntitlementConnectionsApi(apiConfig);
    return handleApiCall(() => entitlementconnectionsapi.patchEntitlementConnectionByQueryV1(requestParameters));
  },
  patchEntitlementRecommendationV1: (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiPatchEntitlementRecommendationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<suggestedEntitlementDescriptionTypes.EntitlementRecommendationRecord>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.patchEntitlementRecommendationV1(requestParameters));
  },
  patchEntitlementV1: (requestParameters: entitlementsTypes.EntitlementsApiPatchEntitlementV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<entitlementsTypes.EntitlementV2>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.patchEntitlementV1(requestParameters));
  },
  patchFormDefinitionV1: (requestParameters: customFormsTypes.CustomFormsApiPatchFormDefinitionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.FormDefinitionResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.patchFormDefinitionV1(requestParameters));
  },
  patchFormInstanceV1: (requestParameters: customFormsTypes.CustomFormsApiPatchFormInstanceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.FormInstanceResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.patchFormInstanceV1(requestParameters));
  },
  patchJitActivationConfigV1: (requestParameters: jitAccessTypes.JITAccessApiPatchJitActivationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<jitAccessTypes.JITActivationConfigResponse>> => {
    const jitaccessapi = new sdk.JITAccessApi(apiConfig);
    return handleApiCall(() => jitaccessapi.patchJitActivationConfigV1(requestParameters));
  },
  patchLanguageNerm: (requestParameters: sdk.LanguagesNERMApiPatchLanguageRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.PatchLanguageRequestNERM>> => {
    const languagesnermapi = new sdk.LanguagesNERMApi(apiConfig);
    return handleApiCall(() => languagesnermapi.patchLanguage(requestParameters));
  },
  patchMachineAccountSubtypeByTechnicalNameV1: (requestParameters: machineAccountsTypes.MachineAccountsApiPatchMachineAccountSubtypeByTechnicalNameV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountsTypes.SourceSubtype>> => {
    const machineaccountsapi = new sdk.MachineAccountsApi(apiConfig);
    return handleApiCall(() => machineaccountsapi.patchMachineAccountSubtypeByTechnicalNameV1(requestParameters));
  },
  patchMachineAccountSubtypeV1: (requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiPatchMachineAccountSubtypeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountSubtypesTypes.SourceSubtypeWithSource>> => {
    const machineaccountsubtypesapi = new sdk.MachineAccountSubtypesApi(apiConfig);
    return handleApiCall(() => machineaccountsubtypesapi.patchMachineAccountSubtypeV1(requestParameters));
  },
  patchNonEmployeeRecordV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiPatchNonEmployeeRecordV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeRecord>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.patchNonEmployeeRecordV1(requestParameters));
  },
  patchNonEmployeeSchemaAttributeV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiPatchNonEmployeeSchemaAttributeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeSchemaAttribute>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.patchNonEmployeeSchemaAttributeV1(requestParameters));
  },
  patchNonEmployeeSourceV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiPatchNonEmployeeSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeSource>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.patchNonEmployeeSourceV1(requestParameters));
  },
  patchOauthClientV1: (requestParameters: oauthClientsTypes.OAuthClientsApiPatchOauthClientV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<oauthClientsTypes.GetOAuthClientResponse>> => {
    const oauthclientsapi = new sdk.OAuthClientsApi(apiConfig);
    return handleApiCall(() => oauthclientsapi.patchOauthClientV1(requestParameters));
  },
  patchOrgConfigV1: (requestParameters: orgConfigTypes.OrgConfigApiPatchOrgConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<orgConfigTypes.OrgConfig>> => {
    const orgconfigapi = new sdk.OrgConfigApi(apiConfig);
    return handleApiCall(() => orgconfigapi.patchOrgConfigV1(requestParameters));
  },
  patchOwnershipCorrelationConfigV1: (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiPatchOwnershipCorrelationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineIdentitiesTypes.CorrelationConfig>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.patchOwnershipCorrelationConfigV1(requestParameters));
  },
  patchPersonalAccessTokenV1: (requestParameters: personalAccessTokensTypes.PersonalAccessTokensApiPatchPersonalAccessTokenV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<personalAccessTokensTypes.GetPersonalAccessTokenResponse>> => {
    const personalaccesstokensapi = new sdk.PersonalAccessTokensApi(apiConfig);
    return handleApiCall(() => personalaccesstokensapi.patchPersonalAccessTokenV1(requestParameters));
  },
  patchPotentialRoleSessionV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiPatchPotentialRoleSessionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.patchPotentialRoleSessionV1(requestParameters));
  },
  patchPotentialRoleV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiPatchPotentialRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.patchPotentialRoleV1(requestParameters));
  },
  patchPrivilegeCriteriaConfigV1: (requestParameters: privilegeCriteriaConfigurationTypes.PrivilegeCriteriaConfigurationApiPatchPrivilegeCriteriaConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<privilegeCriteriaConfigurationTypes.PrivilegeCriteriaConfigDTO>> => {
    const privilegecriteriaconfigurationapi = new sdk.PrivilegeCriteriaConfigurationApi(apiConfig);
    return handleApiCall(() => privilegecriteriaconfigurationapi.patchPrivilegeCriteriaConfigV1(requestParameters));
  },
  patchProfileByIdNerm: (requestParameters: sdk.ProfilesNERMApiPatchProfileByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetSingleSchemaMappedProfile200ResponseNERM>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.patchProfileById(requestParameters));
  },
  patchProfileConfigV1: (requestParameters: authProfileTypes.AuthProfileApiPatchProfileConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<authProfileTypes.AuthProfile>> => {
    const authprofileapi = new sdk.AuthProfileApi(apiConfig);
    return handleApiCall(() => authprofileapi.patchProfileConfigV1(requestParameters));
  },
  patchProfilesNerm: (requestParameters: sdk.ProfilesNERMApiPatchProfilesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SearchAdvancedSearch200ResponseNERM>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.patchProfiles(requestParameters));
  },
  patchProfileTypeByIdNerm: (requestParameters: sdk.ProfileTypesNERMApiPatchProfileTypeByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitProfileType200ResponseNERM>> => {
    const profiletypesnermapi = new sdk.ProfileTypesNERMApi(apiConfig);
    return handleApiCall(() => profiletypesnermapi.patchProfileTypeById(requestParameters));
  },
  patchProfileTypeByUidNerm: (requestParameters: sdk.ProfileTypesNERMApiPatchProfileTypeByUidRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitProfileType200ResponseNERM>> => {
    const profiletypesnermapi = new sdk.ProfileTypesNERMApi(apiConfig);
    return handleApiCall(() => profiletypesnermapi.patchProfileTypeByUid(requestParameters));
  },
  patchRoleMiningSessionV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiPatchRoleMiningSessionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.patchRoleMiningSessionV1(requestParameters));
  },
  patchRoleNerm: (requestParameters: sdk.RolesNERMApiPatchRoleRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitRole200ResponseNERM>> => {
    const rolesnermapi = new sdk.RolesNERMApi(apiConfig);
    return handleApiCall(() => rolesnermapi.patchRole(requestParameters));
  },
  patchRoleProfileNerm: (requestParameters: sdk.RoleProfilesNERMApiPatchRoleProfileRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitRoleProfile200ResponseNERM>> => {
    const roleprofilesnermapi = new sdk.RoleProfilesNERMApi(apiConfig);
    return handleApiCall(() => roleprofilesnermapi.patchRoleProfile(requestParameters));
  },
  patchRoleProfilesNerm: (requestParameters: sdk.RoleProfilesNERMApiPatchRoleProfilesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitRoleProfiles200ResponseNERM>> => {
    const roleprofilesnermapi = new sdk.RoleProfilesNERMApi(apiConfig);
    return handleApiCall(() => roleprofilesnermapi.patchRoleProfiles(requestParameters));
  },
  patchRolesNerm: (requestParameters: sdk.RolesNERMApiPatchRolesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitRoles200ResponseNERM>> => {
    const rolesnermapi = new sdk.RolesNERMApi(apiConfig);
    return handleApiCall(() => rolesnermapi.patchRoles(requestParameters));
  },
  patchRoleV1: (requestParameters: rolesTypes.RolesApiPatchRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<rolesTypes.Role>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.patchRoleV1(requestParameters));
  },
  patchSearchAttributeConfigV1: (requestParameters: searchAttributeConfigurationTypes.SearchAttributeConfigurationApiPatchSearchAttributeConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<searchAttributeConfigurationTypes.SearchAttributeConfig>> => {
    const searchattributeconfigurationapi = new sdk.SearchAttributeConfigurationApi(apiConfig);
    return handleApiCall(() => searchattributeconfigurationapi.patchSearchAttributeConfigV1(requestParameters));
  },
  patchSedV1: (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiPatchSedV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<suggestedEntitlementDescriptionTypes.Sed>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.patchSedV1(requestParameters));
  },
  patchSegmentV1: (requestParameters: segmentsTypes.SegmentsApiPatchSegmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<segmentsTypes.Segment>> => {
    const segmentsapi = new sdk.SegmentsApi(apiConfig);
    return handleApiCall(() => segmentsapi.patchSegmentV1(requestParameters));
  },
  patchServiceDeskIntegrationV1: (requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiPatchServiceDeskIntegrationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<serviceDeskIntegrationTypes.ServiceDeskIntegrationDto>> => {
    const servicedeskintegrationapi = new sdk.ServiceDeskIntegrationApi(apiConfig);
    return handleApiCall(() => servicedeskintegrationapi.patchServiceDeskIntegrationV1(requestParameters));
  },
  patchSIMAttributesV1: (requestParameters: simIntegrationsTypes.SIMIntegrationsApiPatchSIMAttributesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<simIntegrationsTypes.ServiceDeskIntegrationDto>> => {
    const simintegrationsapi = new sdk.SIMIntegrationsApi(apiConfig);
    return handleApiCall(() => simintegrationsapi.patchSIMAttributesV1(requestParameters));
  },
  patchSodPolicyV1: (requestParameters: sodPoliciesTypes.SODPoliciesApiPatchSodPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.SodPolicy>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.patchSodPolicyV1(requestParameters));
  },
  patchSourceAppV1: (requestParameters: appsTypes.AppsApiPatchSourceAppV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<appsTypes.SourceAppPatchDto>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.patchSourceAppV1(requestParameters));
  },
  patchSubscriptionV1: (requestParameters: triggersTypes.TriggersApiPatchSubscriptionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<triggersTypes.Subscription>> => {
    const triggersapi = new sdk.TriggersApi(apiConfig);
    return handleApiCall(() => triggersapi.patchSubscriptionV1(requestParameters));
  },
  patchTenantContextV1: (requestParameters: tenantContextTypes.TenantContextApiPatchTenantContextV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const tenantcontextapi = new sdk.TenantContextApi(apiConfig);
    return handleApiCall(() => tenantcontextapi.patchTenantContextV1(requestParameters));
  },
  patchUserAppV1: (requestParameters: appsTypes.AppsApiPatchUserAppV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<appsTypes.UserApp>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.patchUserAppV1(requestParameters));
  },
  patchUserManagerNerm: (requestParameters: sdk.UserManagersNERMApiPatchUserManagerRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserManager200ResponseNERM>> => {
    const usermanagersnermapi = new sdk.UserManagersNERMApi(apiConfig);
    return handleApiCall(() => usermanagersnermapi.patchUserManager(requestParameters));
  },
  patchUserManagersNerm: (requestParameters: sdk.UserManagersNERMApiPatchUserManagersRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserManagers200ResponseNERM>> => {
    const usermanagersnermapi = new sdk.UserManagersNERMApi(apiConfig);
    return handleApiCall(() => usermanagersnermapi.patchUserManagers(requestParameters));
  },
  patchUserNerm: (requestParameters: sdk.UsersNERMApiPatchUserRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUser200ResponseNERM>> => {
    const usersnermapi = new sdk.UsersNERMApi(apiConfig);
    return handleApiCall(() => usersnermapi.patchUser(requestParameters));
  },
  patchUserProfileNerm: (requestParameters: sdk.UserProfilesNERMApiPatchUserProfileRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserProfile200ResponseNERM>> => {
    const userprofilesnermapi = new sdk.UserProfilesNERMApi(apiConfig);
    return handleApiCall(() => userprofilesnermapi.patchUserProfile(requestParameters));
  },
  patchUserProfilesNerm: (requestParameters: sdk.UserProfilesNERMApiPatchUserProfilesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateUserProfiles200ResponseNERM>> => {
    const userprofilesnermapi = new sdk.UserProfilesNERMApi(apiConfig);
    return handleApiCall(() => userprofilesnermapi.patchUserProfiles(requestParameters));
  },
  patchUserRoleNerm: (requestParameters: sdk.UserRolesNERMApiPatchUserRoleRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserRole200ResponseNERM>> => {
    const userrolesnermapi = new sdk.UserRolesNERMApi(apiConfig);
    return handleApiCall(() => userrolesnermapi.patchUserRole(requestParameters));
  },
  patchUserRolesNerm: (requestParameters: sdk.UserRolesNERMApiPatchUserRolesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserRoles200ResponseNERM>> => {
    const userrolesnermapi = new sdk.UserRolesNERMApi(apiConfig);
    return handleApiCall(() => userrolesnermapi.patchUserRoles(requestParameters));
  },
  patchUsersNerm: (requestParameters: sdk.UsersNERMApiPatchUsersRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUsers200ResponseNERM>> => {
    const usersnermapi = new sdk.UsersNERMApi(apiConfig);
    return handleApiCall(() => usersnermapi.patchUsers(requestParameters));
  },
  patchWorkflowSessionNerm: (requestParameters: sdk.WorkflowSessionsNERMApiPatchWorkflowSessionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitWorkflowSession200ResponseNERM>> => {
    const workflowsessionsnermapi = new sdk.WorkflowSessionsNERMApi(apiConfig);
    return handleApiCall(() => workflowsessionsnermapi.patchWorkflowSession(requestParameters));
  },
  patchWorkflowV1: (requestParameters: workflowsTypes.WorkflowsApiPatchWorkflowV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workflowsTypes.Workflow>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.patchWorkflowV1(requestParameters));
  },
  patchWorkgroupV1: (requestParameters: governanceGroupsTypes.GovernanceGroupsApiPatchWorkgroupV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<governanceGroupsTypes.WorkgroupDto>> => {
    const governancegroupsapi = new sdk.GovernanceGroupsApi(apiConfig);
    return handleApiCall(() => governancegroupsapi.patchWorkgroupV1(requestParameters));
  },
  pingClusterV1: (requestParameters: sourcesTypes.SourcesApiPingClusterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.StatusResponse>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.pingClusterV1(requestParameters));
  },
  publishCustomUserLevelV1: (requestParameters: customUserLevelsTypes.CustomUserLevelsApiPublishCustomUserLevelV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customUserLevelsTypes.UserLevelPublishSummary>> => {
    const customuserlevelsapi = new sdk.CustomUserLevelsApi(apiConfig);
    return handleApiCall(() => customuserlevelsapi.publishCustomUserLevelV1(requestParameters));
  },
  publishDataSegmentV1: (requestParameters: dataSegmentationTypes.DataSegmentationApiPublishDataSegmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const datasegmentationapi = new sdk.DataSegmentationApi(apiConfig);
    return handleApiCall(() => datasegmentationapi.publishDataSegmentV1(requestParameters));
  },
  putAccountV1: (requestParameters: accountsTypes.AccountsApiPutAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountsTypes.AccountsAsyncResult>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.putAccountV1(requestParameters));
  },
  putApplicationV1: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiPutApplicationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.putApplicationV1(requestParameters));
  },
  putApprovalsConfigV1: (requestParameters: approvalsTypes.ApprovalsApiPutApprovalsConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<approvalsTypes.ApprovalConfig>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.putApprovalsConfigV1(requestParameters));
  },
  putClientLogConfigurationV1: (requestParameters: managedClustersTypes.ManagedClustersApiPutClientLogConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClustersTypes.ClientLogConfiguration>> => {
    const managedclustersapi = new sdk.ManagedClustersApi(apiConfig);
    return handleApiCall(() => managedclustersapi.putClientLogConfigurationV1(requestParameters));
  },
  putConnectorCorrelationConfigV1: (requestParameters: connectorsTypes.ConnectorsApiPutConnectorCorrelationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorsTypes.UpdateDetail>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.putConnectorCorrelationConfigV1(requestParameters));
  },
  putConnectorCustomizerV1: (requestParameters: connectorCustomizersTypes.ConnectorCustomizersApiPutConnectorCustomizerV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorCustomizersTypes.ConnectorCustomizerUpdateResponse>> => {
    const connectorcustomizersapi = new sdk.ConnectorCustomizersApi(apiConfig);
    return handleApiCall(() => connectorcustomizersapi.putConnectorCustomizerV1(requestParameters));
  },
  putConnectorRuleV1: (requestParameters: connectorRuleManagementTypes.ConnectorRuleManagementApiPutConnectorRuleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorRuleManagementTypes.ConnectorRuleResponse>> => {
    const connectorrulemanagementapi = new sdk.ConnectorRuleManagementApi(apiConfig);
    return handleApiCall(() => connectorrulemanagementapi.putConnectorRuleV1(requestParameters));
  },
  putConnectorSourceConfigV1: (requestParameters: connectorsTypes.ConnectorsApiPutConnectorSourceConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorsTypes.UpdateDetail>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.putConnectorSourceConfigV1(requestParameters));
  },
  putConnectorSourceTemplateV1: (requestParameters: connectorsTypes.ConnectorsApiPutConnectorSourceTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorsTypes.UpdateDetail>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.putConnectorSourceTemplateV1(requestParameters));
  },
  putConnectorTranslationsV1: (requestParameters: connectorsTypes.ConnectorsApiPutConnectorTranslationsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorsTypes.UpdateDetail>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.putConnectorTranslationsV1(requestParameters));
  },
  putCorrelationConfigV1: (requestParameters: sourcesTypes.SourcesApiPutCorrelationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.CorrelationConfig>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.putCorrelationConfigV1(requestParameters));
  },
  putCustomPrivilegeCriteriaValueV1: (requestParameters: privilegeCriteriaTypes.PrivilegeCriteriaApiPutCustomPrivilegeCriteriaValueV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<privilegeCriteriaTypes.PrivilegeCriteriaDTO>> => {
    const privilegecriteriaapi = new sdk.PrivilegeCriteriaApi(apiConfig);
    return handleApiCall(() => privilegecriteriaapi.putCustomPrivilegeCriteriaValueV1(requestParameters));
  },
  putEntitlementRequestConfigV1: (requestParameters: entitlementsTypes.EntitlementsApiPutEntitlementRequestConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<entitlementsTypes.EntitlementRequestConfig>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.putEntitlementRequestConfigV1(requestParameters));
  },
  putIdentityAttributeV1: (requestParameters: identityAttributesTypes.IdentityAttributesApiPutIdentityAttributeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityAttributesTypes.IdentityAttribute2>> => {
    const identityattributesapi = new sdk.IdentityAttributesApi(apiConfig);
    return handleApiCall(() => identityattributesapi.putIdentityAttributeV1(requestParameters));
  },
  putIdentityCollectorV1: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiPutIdentityCollectorV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.putIdentityCollectorV1(requestParameters));
  },
  putLauncherV1: (requestParameters: launchersTypes.LaunchersApiPutLauncherV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<launchersTypes.Launcher>> => {
    const launchersapi = new sdk.LaunchersApi(apiConfig);
    return handleApiCall(() => launchersapi.putLauncherV1(requestParameters));
  },
  putMailFromAttributesV1: (requestParameters: notificationsTypes.NotificationsApiPutMailFromAttributesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<notificationsTypes.MailFromAttributes>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.putMailFromAttributesV1(requestParameters));
  },
  putNativeChangeDetectionConfigV1: (requestParameters: sourcesTypes.SourcesApiPutNativeChangeDetectionConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.NativeChangeDetectionConfig>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.putNativeChangeDetectionConfigV1(requestParameters));
  },
  putPasswordDictionaryV1: (requestParameters: passwordDictionaryTypes.PasswordDictionaryApiPutPasswordDictionaryV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const passworddictionaryapi = new sdk.PasswordDictionaryApi(apiConfig);
    return handleApiCall(() => passworddictionaryapi.putPasswordDictionaryV1(requestParameters));
  },
  putPasswordOrgConfigV1: (requestParameters: passwordConfigurationTypes.PasswordConfigurationApiPutPasswordOrgConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordConfigurationTypes.PasswordOrgConfig>> => {
    const passwordconfigurationapi = new sdk.PasswordConfigurationApi(apiConfig);
    return handleApiCall(() => passwordconfigurationapi.putPasswordOrgConfigV1(requestParameters));
  },
  putPolicyScheduleV1: (requestParameters: sodPoliciesTypes.SODPoliciesApiPutPolicyScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.SodPolicySchedule>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.putPolicyScheduleV1(requestParameters));
  },
  putProvisioningPolicyV1: (requestParameters: sourcesTypes.SourcesApiPutProvisioningPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.ProvisioningPolicyDto>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.putProvisioningPolicyV1(requestParameters));
  },
  putProvisioningPolicyV2: (requestParameters: sourcesTypes.SourcesApiPutProvisioningPolicyV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.ProvisioningPolicyDtoV2>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.putProvisioningPolicyV2(requestParameters));
  },
  putReassignmentConfigV1: (requestParameters: workReassignmentTypes.WorkReassignmentApiPutReassignmentConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workReassignmentTypes.ConfigurationItemResponse>> => {
    const workreassignmentapi = new sdk.WorkReassignmentApi(apiConfig);
    return handleApiCall(() => workreassignmentapi.putReassignmentConfigV1(requestParameters));
  },
  putSavedSearchV1: (requestParameters: savedSearchTypes.SavedSearchApiPutSavedSearchV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<savedSearchTypes.SavedSearch>> => {
    const savedsearchapi = new sdk.SavedSearchApi(apiConfig);
    return handleApiCall(() => savedsearchapi.putSavedSearchV1(requestParameters));
  },
  putScheduleV1: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiPutScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.putScheduleV1(requestParameters));
  },
  putServiceDeskIntegrationV1: (requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiPutServiceDeskIntegrationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<serviceDeskIntegrationTypes.ServiceDeskIntegrationDto>> => {
    const servicedeskintegrationapi = new sdk.ServiceDeskIntegrationApi(apiConfig);
    return handleApiCall(() => servicedeskintegrationapi.putServiceDeskIntegrationV1(requestParameters));
  },
  putSIMIntegrationV1: (requestParameters: simIntegrationsTypes.SIMIntegrationsApiPutSIMIntegrationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<simIntegrationsTypes.ServiceDeskIntegrationDto>> => {
    const simintegrationsapi = new sdk.SIMIntegrationsApi(apiConfig);
    return handleApiCall(() => simintegrationsapi.putSIMIntegrationV1(requestParameters));
  },
  putSodPolicyV1: (requestParameters: sodPoliciesTypes.SODPoliciesApiPutSodPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.SodPolicy>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.putSodPolicyV1(requestParameters));
  },
  putSourceAttrSyncConfigV1: (requestParameters: sourcesTypes.SourcesApiPutSourceAttrSyncConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.AttrSyncSourceConfig>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.putSourceAttrSyncConfigV1(requestParameters));
  },
  putSourceSchemaV1: (requestParameters: sourcesTypes.SourcesApiPutSourceSchemaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Schema>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.putSourceSchemaV1(requestParameters));
  },
  putSourceV1: (requestParameters: sourcesTypes.SourcesApiPutSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Source>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.putSourceV1(requestParameters));
  },
  putTaggedObjectV1: (requestParameters: taggedObjectsTypes.TaggedObjectsApiPutTaggedObjectV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<taggedObjectsTypes.TaggedObject>> => {
    const taggedobjectsapi = new sdk.TaggedObjectsApi(apiConfig);
    return handleApiCall(() => taggedobjectsapi.putTaggedObjectV1(requestParameters));
  },
  putTenantConfigurationV1: (requestParameters: workReassignmentTypes.WorkReassignmentApiPutTenantConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workReassignmentTypes.TenantConfigurationResponse>> => {
    const workreassignmentapi = new sdk.WorkReassignmentApi(apiConfig);
    return handleApiCall(() => workreassignmentapi.putTenantConfigurationV1(requestParameters));
  },
  putWorkflowV1: (requestParameters: workflowsTypes.WorkflowsApiPutWorkflowV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workflowsTypes.Workflow>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.putWorkflowV1(requestParameters));
  },
  queryPasswordInfoV1: (requestParameters: passwordManagementTypes.PasswordManagementApiQueryPasswordInfoV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordManagementTypes.PasswordInfo>> => {
    const passwordmanagementapi = new sdk.PasswordManagementApi(apiConfig);
    return handleApiCall(() => passwordmanagementapi.queryPasswordInfoV1(requestParameters));
  },
  reassignIdentityCertificationsV1: (requestParameters: certificationsTypes.CertificationsApiReassignIdentityCertificationsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationsTypes.IdentityCertificationDto>> => {
    const certificationsapi = new sdk.CertificationsApi(apiConfig);
    return handleApiCall(() => certificationsapi.reassignIdentityCertificationsV1(requestParameters));
  },
  rejectAccessRequestV1: (requestParameters: accessRequestApprovalsTypes.AccessRequestApprovalsApiRejectAccessRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const accessrequestapprovalsapi = new sdk.AccessRequestApprovalsApi(apiConfig);
    return handleApiCall(() => accessrequestapprovalsapi.rejectAccessRequestV1(requestParameters));
  },
  rejectApprovalInBulkV1: (requestParameters: approvalsTypes.ApprovalsApiRejectApprovalInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.rejectApprovalInBulkV1(requestParameters));
  },
  rejectApprovalItemsInBulkV1: (requestParameters: workItemsTypes.WorkItemsApiRejectApprovalItemsInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workItemsTypes.WorkItems>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.rejectApprovalItemsInBulkV1(requestParameters));
  },
  rejectApprovalItemV1: (requestParameters: workItemsTypes.WorkItemsApiRejectApprovalItemV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workItemsTypes.WorkItems>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.rejectApprovalItemV1(requestParameters));
  },
  rejectApprovalV1: (requestParameters: approvalsTypes.ApprovalsApiRejectApprovalV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.rejectApprovalV1(requestParameters));
  },
  rejectNonEmployeeRequestV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiRejectNonEmployeeRequestV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeApprovalItem>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.rejectNonEmployeeRequestV1(requestParameters));
  },
  resetIdentityV1: (requestParameters: identitiesTypes.IdentitiesApiResetIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.resetIdentityV1(requestParameters));
  },
  resetSourceEntitlementsV1: (requestParameters: entitlementsTypes.EntitlementsApiResetSourceEntitlementsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<entitlementsTypes.EntitlementSourceResetBaseReferenceDto>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.resetSourceEntitlementsV1(requestParameters));
  },
  searchAdvancedSearchbyIDNerm: (requestParameters: sdk.AdvancedSearchNERMApiSearchAdvancedSearchbyIDRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SearchAdvancedSearch200ResponseNERM>> => {
    const advancedsearchnermapi = new sdk.AdvancedSearchNERMApi(apiConfig);
    return handleApiCall(() => advancedsearchnermapi.searchAdvancedSearchbyID(requestParameters));
  },
  searchAdvancedSearchNerm: (requestParameters: sdk.AdvancedSearchNERMApiSearchAdvancedSearchRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SearchAdvancedSearch200ResponseNERM>> => {
    const advancedsearchnermapi = new sdk.AdvancedSearchNERMApi(apiConfig);
    return handleApiCall(() => advancedsearchnermapi.searchAdvancedSearch(requestParameters));
  },
  searchAggregateV1: (requestParameters: searchTypes.SearchApiSearchAggregateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<searchTypes.AggregationResult>> => {
    const searchapi = new sdk.SearchApi(apiConfig);
    return handleApiCall(() => searchapi.searchAggregateV1(requestParameters));
  },
  searchCountV1: (requestParameters: searchTypes.SearchApiSearchCountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const searchapi = new sdk.SearchApi(apiConfig);
    return handleApiCall(() => searchapi.searchCountV1(requestParameters));
  },
  searchFormDefinitionsByTenantV1: (requestParameters: customFormsTypes.CustomFormsApiSearchFormDefinitionsByTenantV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.ListFormDefinitionsByTenantResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.searchFormDefinitionsByTenantV1(requestParameters));
  },
  searchFormElementDataByElementIDV1: (requestParameters: customFormsTypes.CustomFormsApiSearchFormElementDataByElementIDV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.ListFormElementDataByElementIDResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.searchFormElementDataByElementIDV1(requestParameters));
  },
  searchFormInstancesByTenantV1: (requestParameters: customFormsTypes.CustomFormsApiSearchFormInstancesByTenantV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<customFormsTypes.ListFormInstancesByTenantResponse>>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.searchFormInstancesByTenantV1(requestParameters));
  },
  searchGetV1: (requestParameters: searchTypes.SearchApiSearchGetV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const searchapi = new sdk.SearchApi(apiConfig);
    return handleApiCall(() => searchapi.searchGetV1(requestParameters));
  },
  searchNerm: (requestParameters: sdk.AuditsNERMApiSearchRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.Search200ResponseNERM>> => {
    const auditsnermapi = new sdk.AuditsNERMApi(apiConfig);
    return handleApiCall(() => auditsnermapi.search(requestParameters));
  },
  searchParametersV1: (requestParameters: parameterStorageTypes.ParameterStorageApiSearchParametersV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<parameterStorageTypes.ParameterStorageParameter>>> => {
    const parameterstorageapi = new sdk.ParameterStorageApi(apiConfig);
    return handleApiCall(() => parameterstorageapi.searchParametersV1(requestParameters));
  },
  searchPostV1: (requestParameters: searchTypes.SearchApiSearchPostV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<any>>> => {
    const searchapi = new sdk.SearchApi(apiConfig);
    return handleApiCall(() => searchapi.searchPostV1(requestParameters));
  },
  searchPreDefinedSelectOptionsV1: (apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.ListPredefinedSelectOptionsResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.searchPreDefinedSelectOptionsV1());
  },
  searchResourceObjectsV1: (requestParameters: sourcesTypes.SourcesApiSearchResourceObjectsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.ResourceObjectsResponse>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.searchResourceObjectsV1(requestParameters));
  },
  searchRolesByFilterV1: (requestParameters: rolesTypes.RolesApiSearchRolesByFilterV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<rolesTypes.Role>>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.searchRolesByFilterV1(requestParameters));
  },
  sendClassifyMachineAccountFromSourceV1: (requestParameters: classifySourceTypes.ClassifySourceApiSendClassifyMachineAccountFromSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<classifySourceTypes.SendClassifyMachineAccountFromSourceV1200Response>> => {
    const classifysourceapi = new sdk.ClassifySourceApi(apiConfig);
    return handleApiCall(() => classifysourceapi.sendClassifyMachineAccountFromSourceV1(requestParameters));
  },
  sendClassifyMachineAccountV1: (requestParameters: machineAccountClassifyTypes.MachineAccountClassifyApiSendClassifyMachineAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountClassifyTypes.SendClassifyMachineAccountV1200Response>> => {
    const machineaccountclassifyapi = new sdk.MachineAccountClassifyApi(apiConfig);
    return handleApiCall(() => machineaccountclassifyapi.sendClassifyMachineAccountV1(requestParameters));
  },
  sendDeclassifyMachineAccountFromSourceV1: (requestParameters: declassifySourceTypes.DeclassifySourceApiSendDeclassifyMachineAccountFromSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const declassifysourceapi = new sdk.DeclassifySourceApi(apiConfig);
    return handleApiCall(() => declassifysourceapi.sendDeclassifyMachineAccountFromSourceV1(requestParameters));
  },
  sendIdentityVerificationAccountTokenV1: (requestParameters: identitiesTypes.IdentitiesApiSendIdentityVerificationAccountTokenV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.sendIdentityVerificationAccountTokenV1(requestParameters));
  },
  sendManualDiscoverApplicationsCsvTemplateV1: (requestParameters: applicationDiscoveryTypes.ApplicationDiscoveryApiSendManualDiscoverApplicationsCsvTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const applicationdiscoveryapi = new sdk.ApplicationDiscoveryApi(apiConfig);
    return handleApiCall(() => applicationdiscoveryapi.sendManualDiscoverApplicationsCsvTemplateV1(requestParameters));
  },
  sendStreamVerificationV1: (requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiSendStreamVerificationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const sharedsignalsframeworkssfapi = new sdk.SharedSignalsFrameworkSSFApi(apiConfig);
    return handleApiCall(() => sharedsignalsframeworkssfapi.sendStreamVerificationV1(requestParameters));
  },
  sendTestNotificationV1: (requestParameters: notificationsTypes.NotificationsApiSendTestNotificationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const notificationsapi = new sdk.NotificationsApi(apiConfig);
    return handleApiCall(() => notificationsapi.sendTestNotificationV1(requestParameters));
  },
  setAccessRequestConfigV1: (requestParameters: accessRequestsTypes.AccessRequestsApiSetAccessRequestConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessRequestsTypes.AccessRequestConfig>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.setAccessRequestConfigV1(requestParameters));
  },
  setAccessRequestConfigV2: (requestParameters: accessRequestsTypes.AccessRequestsApiSetAccessRequestConfigV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessRequestsTypes.AccessRequestConfig2>> => {
    const accessrequestsapi = new sdk.AccessRequestsApi(apiConfig);
    return handleApiCall(() => accessrequestsapi.setAccessRequestConfigV2(requestParameters));
  },
  setAccessRequestRecommendationsConfigV1: (requestParameters: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiSetAccessRequestRecommendationsConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiAccessRequestRecommendationsTypes.AccessRequestRecommendationConfigDto>> => {
    const iaiaccessrequestrecommendationsapi = new sdk.IAIAccessRequestRecommendationsApi(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsapi.setAccessRequestRecommendationsConfigV1(requestParameters));
  },
  setBrandingItemV1: (requestParameters: brandingTypes.BrandingApiSetBrandingItemV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<brandingTypes.BrandingItem>> => {
    const brandingapi = new sdk.BrandingApi(apiConfig);
    return handleApiCall(() => brandingapi.setBrandingItemV1(requestParameters));
  },
  setCampaignReportsConfigV1: (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiSetCampaignReportsConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignsTypes.CampaignReportsConfig>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.setCampaignReportsConfigV1(requestParameters));
  },
  setCampaignTemplateScheduleV1: (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiSetCampaignTemplateScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.setCampaignTemplateScheduleV1(requestParameters));
  },
  setIconV1: (requestParameters: iconsTypes.IconsApiSetIconV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iconsTypes.SetIconV1200Response>> => {
    const iconsapi = new sdk.IconsApi(apiConfig);
    return handleApiCall(() => iconsapi.setIconV1(requestParameters));
  },
  setLifecycleStateV1: (requestParameters: lifecycleStatesTypes.LifecycleStatesApiSetLifecycleStateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<lifecycleStatesTypes.SetLifecycleStateV1200Response>> => {
    const lifecyclestatesapi = new sdk.LifecycleStatesApi(apiConfig);
    return handleApiCall(() => lifecyclestatesapi.setLifecycleStateV1(requestParameters));
  },
  setMachineAccountMappingsV1: (requestParameters: machineAccountMappingsTypes.MachineAccountMappingsApiSetMachineAccountMappingsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<machineAccountMappingsTypes.AttributeMappings>>> => {
    const machineaccountmappingsapi = new sdk.MachineAccountMappingsApi(apiConfig);
    return handleApiCall(() => machineaccountmappingsapi.setMachineAccountMappingsV1(requestParameters));
  },
  setMachineClassificationConfigV1: (requestParameters: machineClassificationConfigTypes.MachineClassificationConfigApiSetMachineClassificationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineClassificationConfigTypes.MachineClassificationConfig>> => {
    const machineclassificationconfigapi = new sdk.MachineClassificationConfigApi(apiConfig);
    return handleApiCall(() => machineclassificationconfigapi.setMachineClassificationConfigV1(requestParameters));
  },
  setMFADuoConfigV1: (requestParameters: mfaConfigurationTypes.MFAConfigurationApiSetMFADuoConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<mfaConfigurationTypes.MfaDuoConfig>> => {
    const mfaconfigurationapi = new sdk.MFAConfigurationApi(apiConfig);
    return handleApiCall(() => mfaconfigurationapi.setMFADuoConfigV1(requestParameters));
  },
  setMFAKBAConfigV1: (requestParameters: mfaConfigurationTypes.MFAConfigurationApiSetMFAKBAConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<mfaConfigurationTypes.KbaAnswerResponseItem>>> => {
    const mfaconfigurationapi = new sdk.MFAConfigurationApi(apiConfig);
    return handleApiCall(() => mfaconfigurationapi.setMFAKBAConfigV1(requestParameters));
  },
  setMFAOktaConfigV1: (requestParameters: mfaConfigurationTypes.MFAConfigurationApiSetMFAOktaConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<mfaConfigurationTypes.MfaOktaConfig>> => {
    const mfaconfigurationapi = new sdk.MFAConfigurationApi(apiConfig);
    return handleApiCall(() => mfaconfigurationapi.setMFAOktaConfigV1(requestParameters));
  },
  setPasswordPolicyV1: (requestParameters: passwordPoliciesTypes.PasswordPoliciesApiSetPasswordPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordPoliciesTypes.PasswordPolicyV3Dto>> => {
    const passwordpoliciesapi = new sdk.PasswordPoliciesApi(apiConfig);
    return handleApiCall(() => passwordpoliciesapi.setPasswordPolicyV1(requestParameters));
  },
  setPasswordV1: (requestParameters: passwordManagementTypes.PasswordManagementApiSetPasswordV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordManagementTypes.PasswordChangeResponse>> => {
    const passwordmanagementapi = new sdk.PasswordManagementApi(apiConfig);
    return handleApiCall(() => passwordmanagementapi.setPasswordV1(requestParameters));
  },
  setRolePropagationConfigV1: (requestParameters: rolePropagationTypes.RolePropagationApiSetRolePropagationConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<rolePropagationTypes.Rolepropagationconfigresponse>> => {
    const rolepropagationapi = new sdk.RolePropagationApi(apiConfig);
    return handleApiCall(() => rolepropagationapi.setRolePropagationConfigV1(requestParameters));
  },
  setStreamConfigurationV1: (requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiSetStreamConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sharedSignalsFrameworkSsfTypes.UpdateStreamConfigResponse>> => {
    const sharedsignalsframeworkssfapi = new sdk.SharedSignalsFrameworkSSFApi(apiConfig);
    return handleApiCall(() => sharedsignalsframeworkssfapi.setStreamConfigurationV1(requestParameters));
  },
  setTagsToManyObjectsV1: (requestParameters: taggedObjectsTypes.TaggedObjectsApiSetTagsToManyObjectsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<taggedObjectsTypes.BulkTaggedObjectResponse>>> => {
    const taggedobjectsapi = new sdk.TaggedObjectsApi(apiConfig);
    return handleApiCall(() => taggedobjectsapi.setTagsToManyObjectsV1(requestParameters));
  },
  setTagToObjectV1: (requestParameters: taggedObjectsTypes.TaggedObjectsApiSetTagToObjectV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const taggedobjectsapi = new sdk.TaggedObjectsApi(apiConfig);
    return handleApiCall(() => taggedobjectsapi.setTagToObjectV1(requestParameters));
  },
  setTenantUiMetadataV1: (requestParameters: uiMetadataTypes.UIMetadataApiSetTenantUiMetadataV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<uiMetadataTypes.TenantUiMetadataItemResponse>> => {
    const uimetadataapi = new sdk.UIMetadataApi(apiConfig);
    return handleApiCall(() => uimetadataapi.setTenantUiMetadataV1(requestParameters));
  },
  showPreviewDataSourceV1: (requestParameters: customFormsTypes.CustomFormsApiShowPreviewDataSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customFormsTypes.PreviewDataSourceResponse>> => {
    const customformsapi = new sdk.CustomFormsApi(apiConfig);
    return handleApiCall(() => customformsapi.showPreviewDataSourceV1(requestParameters));
  },
  showUserLevelCountsV1: (requestParameters: customUserLevelsTypes.CustomUserLevelsApiShowUserLevelCountsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<customUserLevelsTypes.AuthUserLevelsIdentityCount>>> => {
    const customuserlevelsapi = new sdk.CustomUserLevelsApi(apiConfig);
    return handleApiCall(() => customuserlevelsapi.showUserLevelCountsV1(requestParameters));
  },
  signOffIdentityCertificationV1: (requestParameters: certificationsTypes.CertificationsApiSignOffIdentityCertificationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationsTypes.IdentityCertificationDto>> => {
    const certificationsapi = new sdk.CertificationsApi(apiConfig);
    return handleApiCall(() => certificationsapi.signOffIdentityCertificationV1(requestParameters));
  },
  startActivateWorkflowV1: (requestParameters: jitActivationsTypes.JITActivationsApiStartActivateWorkflowV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<jitActivationsTypes.JitActivationActivateResponse>> => {
    const jitactivationsapi = new sdk.JITActivationsApi(apiConfig);
    return handleApiCall(() => jitactivationsapi.startActivateWorkflowV1(requestParameters));
  },
  startApplicationDiscoveryV1: (requestParameters: applicationDiscoveryTypes.ApplicationDiscoveryApiStartApplicationDiscoveryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<applicationDiscoveryTypes.ApplicationDiscoveryResponse>> => {
    const applicationdiscoveryapi = new sdk.ApplicationDiscoveryApi(apiConfig);
    return handleApiCall(() => applicationdiscoveryapi.startApplicationDiscoveryV1(requestParameters));
  },
  startCampaignRemediationScanV1: (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiStartCampaignRemediationScanV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.startCampaignRemediationScanV1(requestParameters));
  },
  startCampaignReportV1: (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiStartCampaignReportV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.startCampaignReportV1(requestParameters));
  },
  startCampaignV1: (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiStartCampaignV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.startCampaignV1(requestParameters));
  },
  startDeactivateWorkflowV1: (requestParameters: jitActivationsTypes.JITActivationsApiStartDeactivateWorkflowV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<jitActivationsTypes.JitActivationDeactivateResponse>> => {
    const jitactivationsapi = new sdk.JITActivationsApi(apiConfig);
    return handleApiCall(() => jitactivationsapi.startDeactivateWorkflowV1(requestParameters));
  },
  startEvaluateSodPolicyV1: (requestParameters: sodPoliciesTypes.SODPoliciesApiStartEvaluateSodPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.ReportResultReference>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.startEvaluateSodPolicyV1(requestParameters));
  },
  startExtendWorkflowV1: (requestParameters: jitActivationsTypes.JITActivationsApiStartExtendWorkflowV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<jitActivationsTypes.JitActivationExtendResponse>> => {
    const jitactivationsapi = new sdk.JITActivationsApi(apiConfig);
    return handleApiCall(() => jitactivationsapi.startExtendWorkflowV1(requestParameters));
  },
  startGenerateCampaignTemplateV1: (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiStartGenerateCampaignTemplateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignsTypes.CampaignReference>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.startGenerateCampaignTemplateV1(requestParameters));
  },
  startIdentitiesInviteV1: (requestParameters: identitiesTypes.IdentitiesApiStartIdentitiesInviteV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identitiesTypes.TaskStatus>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.startIdentitiesInviteV1(requestParameters));
  },
  startIdentityProcessingV1: (requestParameters: identitiesTypes.IdentitiesApiStartIdentityProcessingV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identitiesTypes.TaskResultResponse>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.startIdentityProcessingV1(requestParameters));
  },
  startLauncherV1: (requestParameters: launchersTypes.LaunchersApiStartLauncherV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<launchersTypes.StartLauncherV1200Response>> => {
    const launchersapi = new sdk.LaunchersApi(apiConfig);
    return handleApiCall(() => launchersapi.startLauncherV1(requestParameters));
  },
  startMachineIdentityAggregationV1: (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiStartMachineIdentityAggregationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineIdentitiesTypes.MachineIdentityAggregationResponse>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.startMachineIdentityAggregationV1(requestParameters));
  },
  startPredictSodViolationsV1: (requestParameters: sodViolationsTypes.SODViolationsApiStartPredictSodViolationsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodViolationsTypes.ViolationPrediction>> => {
    const sodviolationsapi = new sdk.SODViolationsApi(apiConfig);
    return handleApiCall(() => sodviolationsapi.startPredictSodViolationsV1(requestParameters));
  },
  startReportV1: (requestParameters: reportsDataExtractionTypes.ReportsDataExtractionApiStartReportV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<reportsDataExtractionTypes.TaskResultDetails>> => {
    const reportsdataextractionapi = new sdk.ReportsDataExtractionApi(apiConfig);
    return handleApiCall(() => reportsdataextractionapi.startReportV1(requestParameters));
  },
  startRolePropagationV1: (requestParameters: rolePropagationTypes.RolePropagationApiStartRolePropagationV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<rolePropagationTypes.Rolepropagationresponse>> => {
    const rolepropagationapi = new sdk.RolePropagationApi(apiConfig);
    return handleApiCall(() => rolepropagationapi.startRolePropagationV1(requestParameters));
  },
  startSodAllPoliciesForOrgV1: (requestParameters: sodPoliciesTypes.SODPoliciesApiStartSodAllPoliciesForOrgV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.ReportResultReference>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.startSodAllPoliciesForOrgV1(requestParameters));
  },
  startSodPolicyV1: (requestParameters: sodPoliciesTypes.SODPoliciesApiStartSodPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodPoliciesTypes.ReportResultReference>> => {
    const sodpoliciesapi = new sdk.SODPoliciesApi(apiConfig);
    return handleApiCall(() => sodpoliciesapi.startSodPolicyV1(requestParameters));
  },
  startTaskRerunV1: (requestParameters: dataAccessSecurityTypes.DataAccessSecurityApiStartTaskRerunV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const dataaccesssecurityapi = new sdk.DataAccessSecurityApi(apiConfig);
    return handleApiCall(() => dataaccesssecurityapi.startTaskRerunV1(requestParameters));
  },
  startTestTriggerInvocationV1: (requestParameters: triggersTypes.TriggersApiStartTestTriggerInvocationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<triggersTypes.Invocation>>> => {
    const triggersapi = new sdk.TriggersApi(apiConfig);
    return handleApiCall(() => triggersapi.startTestTriggerInvocationV1(requestParameters));
  },
  startViolationCheckV1: (requestParameters: sodViolationsTypes.SODViolationsApiStartViolationCheckV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sodViolationsTypes.SodViolationCheck>> => {
    const sodviolationsapi = new sdk.SODViolationsApi(apiConfig);
    return handleApiCall(() => sodviolationsapi.startViolationCheckV1(requestParameters));
  },
  submitAccountSelectionV1: (requestParameters: workItemsTypes.WorkItemsApiSubmitAccountSelectionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workItemsTypes.WorkItems>> => {
    const workitemsapi = new sdk.WorkItemsApi(apiConfig);
    return handleApiCall(() => workitemsapi.submitAccountSelectionV1(requestParameters));
  },
  submitAdvancedSearchNerm: (requestParameters: sdk.AdvancedSearchNERMApiSubmitAdvancedSearchRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitAdvancedSearch200ResponseNERM>> => {
    const advancedsearchnermapi = new sdk.AdvancedSearchNERMApi(apiConfig);
    return handleApiCall(() => advancedsearchnermapi.submitAdvancedSearch(requestParameters));
  },
  submitAttributeOptionNerm: (requestParameters: sdk.AttributeOptionsNERMApiSubmitAttributeOptionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitAttributeOption200ResponseNERM>> => {
    const attributeoptionsnermapi = new sdk.AttributeOptionsNERMApi(apiConfig);
    return handleApiCall(() => attributeoptionsnermapi.submitAttributeOption(requestParameters));
  },
  submitAttributeOptionsNerm: (requestParameters: sdk.AttributeOptionsNERMApiSubmitAttributeOptionsRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitAttributeOptions200ResponseNERM>> => {
    const attributeoptionsnermapi = new sdk.AttributeOptionsNERMApi(apiConfig);
    return handleApiCall(() => attributeoptionsnermapi.submitAttributeOptions(requestParameters));
  },
  submitEntitlementRecommendationsAssignmentV1: (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiSubmitEntitlementRecommendationsAssignmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<suggestedEntitlementDescriptionTypes.EntitlementRecommendationAssignResult>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.submitEntitlementRecommendationsAssignmentV1(requestParameters));
  },
  submitProfileAvatarNerm: (requestParameters: sdk.ProfilesNERMApiSubmitProfileAvatarRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.UrlNERM>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.submitProfileAvatar(requestParameters));
  },
  submitProfileNerm: (requestParameters: sdk.ProfilesNERMApiSubmitProfileRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetSingleSchemaMappedProfile200ResponseNERM>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.submitProfile(requestParameters));
  },
  submitProfileTypeNerm: (requestParameters: sdk.ProfileTypesNERMApiSubmitProfileTypeRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitProfileType200ResponseNERM>> => {
    const profiletypesnermapi = new sdk.ProfileTypesNERMApi(apiConfig);
    return handleApiCall(() => profiletypesnermapi.submitProfileType(requestParameters));
  },
  submitProfileUploadNerm: (requestParameters: sdk.ProfilesNERMApiSubmitProfileUploadRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.UrlNERM>> => {
    const profilesnermapi = new sdk.ProfilesNERMApi(apiConfig);
    return handleApiCall(() => profilesnermapi.submitProfileUpload(requestParameters));
  },
  submitReassignCertsAsyncV1: (requestParameters: certificationsTypes.CertificationsApiSubmitReassignCertsAsyncV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationsTypes.CertificationTask>> => {
    const certificationsapi = new sdk.CertificationsApi(apiConfig);
    return handleApiCall(() => certificationsapi.submitReassignCertsAsyncV1(requestParameters));
  },
  submitReloadAccountV1: (requestParameters: accountsTypes.AccountsApiSubmitReloadAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountsTypes.AccountsAsyncResult>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.submitReloadAccountV1(requestParameters));
  },
  submitRoleNerm: (requestParameters: sdk.RolesNERMApiSubmitRoleRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitRole200ResponseNERM>> => {
    const rolesnermapi = new sdk.RolesNERMApi(apiConfig);
    return handleApiCall(() => rolesnermapi.submitRole(requestParameters));
  },
  submitRoleProfileNerm: (requestParameters: sdk.RoleProfilesNERMApiSubmitRoleProfileRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitRoleProfile200ResponseNERM>> => {
    const roleprofilesnermapi = new sdk.RoleProfilesNERMApi(apiConfig);
    return handleApiCall(() => roleprofilesnermapi.submitRoleProfile(requestParameters));
  },
  submitRoleProfilesNerm: (requestParameters: sdk.RoleProfilesNERMApiSubmitRoleProfilesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitRoleProfiles200ResponseNERM>> => {
    const roleprofilesnermapi = new sdk.RoleProfilesNERMApi(apiConfig);
    return handleApiCall(() => roleprofilesnermapi.submitRoleProfiles(requestParameters));
  },
  submitRolesNerm: (requestParameters: sdk.RolesNERMApiSubmitRolesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitRoles200ResponseNERM>> => {
    const rolesnermapi = new sdk.RolesNERMApi(apiConfig);
    return handleApiCall(() => rolesnermapi.submitRoles(requestParameters));
  },
  submitSedApprovalV1: (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiSubmitSedApprovalV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<suggestedEntitlementDescriptionTypes.SedApprovalStatus>>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.submitSedApprovalV1(requestParameters));
  },
  submitSedAssignmentV1: (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiSubmitSedAssignmentV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<suggestedEntitlementDescriptionTypes.SedAssignmentResponse>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.submitSedAssignmentV1(requestParameters));
  },
  submitSedBatchRequestV1: (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiSubmitSedBatchRequestV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<suggestedEntitlementDescriptionTypes.SedBatchResponse>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.submitSedBatchRequestV1(requestParameters));
  },
  submitUserAvatarNerm: (requestParameters: sdk.UsersNERMApiSubmitUserAvatarRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.UrlNERM>> => {
    const usersnermapi = new sdk.UsersNERMApi(apiConfig);
    return handleApiCall(() => usersnermapi.submitUserAvatar(requestParameters));
  },
  submitUserManagerNerm: (requestParameters: sdk.UserManagersNERMApiSubmitUserManagerRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserManager200ResponseNERM>> => {
    const usermanagersnermapi = new sdk.UserManagersNERMApi(apiConfig);
    return handleApiCall(() => usermanagersnermapi.submitUserManager(requestParameters));
  },
  submitUserManagersNerm: (requestParameters: sdk.UserManagersNERMApiSubmitUserManagersRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserManagers200ResponseNERM>> => {
    const usermanagersnermapi = new sdk.UserManagersNERMApi(apiConfig);
    return handleApiCall(() => usermanagersnermapi.submitUserManagers(requestParameters));
  },
  submitUserNerm: (requestParameters: sdk.UsersNERMApiSubmitUserRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUser200ResponseNERM>> => {
    const usersnermapi = new sdk.UsersNERMApi(apiConfig);
    return handleApiCall(() => usersnermapi.submitUser(requestParameters));
  },
  submitUserProfileNerm: (requestParameters: sdk.UserProfilesNERMApiSubmitUserProfileRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserProfile200ResponseNERM>> => {
    const userprofilesnermapi = new sdk.UserProfilesNERMApi(apiConfig);
    return handleApiCall(() => userprofilesnermapi.submitUserProfile(requestParameters));
  },
  submitUserRoleNerm: (requestParameters: sdk.UserRolesNERMApiSubmitUserRoleRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserRole200ResponseNERM>> => {
    const userrolesnermapi = new sdk.UserRolesNERMApi(apiConfig);
    return handleApiCall(() => userrolesnermapi.submitUserRole(requestParameters));
  },
  submitUserRolesNerm: (requestParameters: sdk.UserRolesNERMApiSubmitUserRolesRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUserRoles200ResponseNERM>> => {
    const userrolesnermapi = new sdk.UserRolesNERMApi(apiConfig);
    return handleApiCall(() => userrolesnermapi.submitUserRoles(requestParameters));
  },
  submitUsersNerm: (requestParameters: sdk.UsersNERMApiSubmitUsersRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitUsers200ResponseNERM>> => {
    const usersnermapi = new sdk.UsersNERMApi(apiConfig);
    return handleApiCall(() => usersnermapi.submitUsers(requestParameters));
  },
  submitWorkflowSessionNerm: (requestParameters: sdk.WorkflowSessionsNERMApiSubmitWorkflowSessionRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.SubmitWorkflowSession200ResponseNERM>> => {
    const workflowsessionsnermapi = new sdk.WorkflowSessionsNERMApi(apiConfig);
    return handleApiCall(() => workflowsessionsnermapi.submitWorkflowSession(requestParameters));
  },
  submitWorkflowSessionUploadNerm: (requestParameters: sdk.WorkflowSessionsNERMApiSubmitWorkflowSessionUploadRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.UrlNERM>> => {
    const workflowsessionsnermapi = new sdk.WorkflowSessionsNERMApi(apiConfig);
    return handleApiCall(() => workflowsessionsnermapi.submitWorkflowSessionUpload(requestParameters));
  },
  syncAttributesForSourceV1: (requestParameters: sourcesTypes.SourcesApiSyncAttributesForSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.SourceSyncJob>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.syncAttributesForSourceV1(requestParameters));
  },
  synchronizeAttributesForIdentityV1: (requestParameters: identitiesTypes.IdentitiesApiSynchronizeAttributesForIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identitiesTypes.IdentitySyncJob>> => {
    const identitiesapi = new sdk.IdentitiesApi(apiConfig);
    return handleApiCall(() => identitiesapi.synchronizeAttributesForIdentityV1(requestParameters));
  },
  syncIdentityProfileV1: (requestParameters: identityProfilesTypes.IdentityProfilesApiSyncIdentityProfileV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const identityprofilesapi = new sdk.IdentityProfilesApi(apiConfig);
    return handleApiCall(() => identityprofilesapi.syncIdentityProfileV1(requestParameters));
  },
  testConnectionMultiHostSourcesV1: (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiTestConnectionMultiHostSourcesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.testConnectionMultiHostSourcesV1(requestParameters));
  },
  testConnectorRuleV1: (requestParameters: connectorRuleManagementTypes.ConnectorRuleManagementApiTestConnectorRuleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorRuleManagementTypes.ConnectorRuleValidationResponse>> => {
    const connectorrulemanagementapi = new sdk.ConnectorRuleManagementApi(apiConfig);
    return handleApiCall(() => connectorrulemanagementapi.testConnectorRuleV1(requestParameters));
  },
  testExternalExecuteWorkflowV1: (requestParameters: workflowsTypes.WorkflowsApiTestExternalExecuteWorkflowV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workflowsTypes.TestExternalExecuteWorkflowV1200Response>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.testExternalExecuteWorkflowV1(requestParameters));
  },
  testMFAConfigV1: (requestParameters: mfaConfigurationTypes.MFAConfigurationApiTestMFAConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<mfaConfigurationTypes.MfaConfigTestResponse>> => {
    const mfaconfigurationapi = new sdk.MFAConfigurationApi(apiConfig);
    return handleApiCall(() => mfaconfigurationapi.testMFAConfigV1(requestParameters));
  },
  testSourceConfigurationV1: (requestParameters: sourcesTypes.SourcesApiTestSourceConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.StatusResponse>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.testSourceConfigurationV1(requestParameters));
  },
  testSourceConnectionMultihostV1: (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiTestSourceConnectionMultihostV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<multiHostIntegrationTypes.TestSourceConnectionMultihostV1200Response>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.testSourceConnectionMultihostV1(requestParameters));
  },
  testSourceConnectionV1: (requestParameters: sourcesTypes.SourcesApiTestSourceConnectionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.StatusResponse>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.testSourceConnectionV1(requestParameters));
  },
  testSubscriptionFilterV1: (requestParameters: triggersTypes.TriggersApiTestSubscriptionFilterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<triggersTypes.ValidateFilterOutputDto>> => {
    const triggersapi = new sdk.TriggersApi(apiConfig);
    return handleApiCall(() => triggersapi.testSubscriptionFilterV1(requestParameters));
  },
  testWorkflowV1: (requestParameters: workflowsTypes.WorkflowsApiTestWorkflowV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<workflowsTypes.TestWorkflowV1200Response>> => {
    const workflowsapi = new sdk.WorkflowsApi(apiConfig);
    return handleApiCall(() => workflowsapi.testWorkflowV1(requestParameters));
  },
  unIgnoreIdentityOutliersV1: (requestParameters: iaiOutliersTypes.IAIOutliersApiUnIgnoreIdentityOutliersV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const iaioutliersapi = new sdk.IAIOutliersApi(apiConfig);
    return handleApiCall(() => iaioutliersapi.unIgnoreIdentityOutliersV1(requestParameters));
  },
  unlockAccountV1: (requestParameters: accountsTypes.AccountsApiUnlockAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accountsTypes.AccountsAsyncResult>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.unlockAccountV1(requestParameters));
  },
  unsubscribeScheduledSearchV1: (requestParameters: scheduledSearchTypes.ScheduledSearchApiUnsubscribeScheduledSearchV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const scheduledsearchapi = new sdk.ScheduledSearchApi(apiConfig);
    return handleApiCall(() => scheduledsearchapi.unsubscribeScheduledSearchV1(requestParameters));
  },
  updateAccessModelMetadataAttributeV1: (requestParameters: accessModelMetadataTypes.AccessModelMetadataApiUpdateAccessModelMetadataAttributeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessModelMetadataTypes.AttributeDTO>> => {
    const accessmodelmetadataapi = new sdk.AccessModelMetadataApi(apiConfig);
    return handleApiCall(() => accessmodelmetadataapi.updateAccessModelMetadataAttributeV1(requestParameters));
  },
  updateAccessModelMetadataAttributeValueV1: (requestParameters: accessModelMetadataTypes.AccessModelMetadataApiUpdateAccessModelMetadataAttributeValueV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessModelMetadataTypes.AttributeValueDTO>> => {
    const accessmodelmetadataapi = new sdk.AccessModelMetadataApi(apiConfig);
    return handleApiCall(() => accessmodelmetadataapi.updateAccessModelMetadataAttributeValueV1(requestParameters));
  },
  updateAccessModelMetadataByFilterV1: (requestParameters: accessModelMetadataTypes.AccessModelMetadataApiUpdateAccessModelMetadataByFilterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessModelMetadataTypes.AccessModelMetadataBulkUpdateResponse>> => {
    const accessmodelmetadataapi = new sdk.AccessModelMetadataApi(apiConfig);
    return handleApiCall(() => accessmodelmetadataapi.updateAccessModelMetadataByFilterV1(requestParameters));
  },
  updateAccessModelMetadataByIdsV1: (requestParameters: accessModelMetadataTypes.AccessModelMetadataApiUpdateAccessModelMetadataByIdsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessModelMetadataTypes.AccessModelMetadataBulkUpdateResponse>> => {
    const accessmodelmetadataapi = new sdk.AccessModelMetadataApi(apiConfig);
    return handleApiCall(() => accessmodelmetadataapi.updateAccessModelMetadataByIdsV1(requestParameters));
  },
  updateAccessModelMetadataByQueryV1: (requestParameters: accessModelMetadataTypes.AccessModelMetadataApiUpdateAccessModelMetadataByQueryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<accessModelMetadataTypes.AccessModelMetadataBulkUpdateResponse>> => {
    const accessmodelmetadataapi = new sdk.AccessModelMetadataApi(apiConfig);
    return handleApiCall(() => accessmodelmetadataapi.updateAccessModelMetadataByQueryV1(requestParameters));
  },
  updateAccessProfilesInBulkV1: (requestParameters: accessProfilesTypes.AccessProfilesApiUpdateAccessProfilesInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<accessProfilesTypes.AccessProfileUpdateItem>>> => {
    const accessprofilesapi = new sdk.AccessProfilesApi(apiConfig);
    return handleApiCall(() => accessprofilesapi.updateAccessProfilesInBulkV1(requestParameters));
  },
  updateAccountDeletionApprovalConfigV1: (requestParameters: sourcesTypes.SourcesApiUpdateAccountDeletionApprovalConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.AccountDeleteConfigDto>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.updateAccountDeletionApprovalConfigV1(requestParameters));
  },
  updateAccountV1: (requestParameters: accountsTypes.AccountsApiUpdateAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const accountsapi = new sdk.AccountsApi(apiConfig);
    return handleApiCall(() => accountsapi.updateAccountV1(requestParameters));
  },
  updateApprovalsAttributesV1: (requestParameters: approvalsTypes.ApprovalsApiUpdateApprovalsAttributesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<approvalsTypes.Approval2>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.updateApprovalsAttributesV1(requestParameters));
  },
  updateApprovalsCommentsV1: (requestParameters: approvalsTypes.ApprovalsApiUpdateApprovalsCommentsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<approvalsTypes.Approval2>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.updateApprovalsCommentsV1(requestParameters));
  },
  updateApprovalsReassignV1: (requestParameters: approvalsTypes.ApprovalsApiUpdateApprovalsReassignV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const approvalsapi = new sdk.ApprovalsApi(apiConfig);
    return handleApiCall(() => approvalsapi.updateApprovalsReassignV1(requestParameters));
  },
  updateAttributeByIdNerm: (requestParameters: sdk.AttributesNERMApiUpdateAttributeByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateAttribute201ResponseNERM>> => {
    const attributesnermapi = new sdk.AttributesNERMApi(apiConfig);
    return handleApiCall(() => attributesnermapi.updateAttributeById(requestParameters));
  },
  updateAttributeByUidNerm: (requestParameters: sdk.AttributesNERMApiUpdateAttributeByUidRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateAttribute201ResponseNERM>> => {
    const attributesnermapi = new sdk.AttributesNERMApi(apiConfig);
    return handleApiCall(() => attributesnermapi.updateAttributeByUid(requestParameters));
  },
  updateAttributeKeyAndValueToRoleV1: (requestParameters: rolesTypes.RolesApiUpdateAttributeKeyAndValueToRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<rolesTypes.Role>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.updateAttributeKeyAndValueToRoleV1(requestParameters));
  },
  updateAutoWriteSettingsV1: (requestParameters: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiUpdateAutoWriteSettingsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<suggestedEntitlementDescriptionTypes.AutoWriteSettingResponse>> => {
    const suggestedentitlementdescriptionapi = new sdk.SuggestedEntitlementDescriptionApi(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionapi.updateAutoWriteSettingsV1(requestParameters));
  },
  updateCampaignFilterV1: (requestParameters: certificationCampaignFiltersTypes.CertificationCampaignFiltersApiUpdateCampaignFilterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignFiltersTypes.CampaignFilterDetails>> => {
    const certificationcampaignfiltersapi = new sdk.CertificationCampaignFiltersApi(apiConfig);
    return handleApiCall(() => certificationcampaignfiltersapi.updateCampaignFilterV1(requestParameters));
  },
  updateCampaignV1: (requestParameters: certificationCampaignsTypes.CertificationCampaignsApiUpdateCampaignV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<certificationCampaignsTypes.SlimCampaign>> => {
    const certificationcampaignsapi = new sdk.CertificationCampaignsApi(apiConfig);
    return handleApiCall(() => certificationcampaignsapi.updateCampaignV1(requestParameters));
  },
  updateCommonAccessStatusInBulkV1: (requestParameters: iaiCommonAccessTypes.IAICommonAccessApiUpdateCommonAccessStatusInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const iaicommonaccessapi = new sdk.IAICommonAccessApi(apiConfig);
    return handleApiCall(() => iaicommonaccessapi.updateCommonAccessStatusInBulkV1(requestParameters));
  },
  updateConnectorV1: (requestParameters: connectorsTypes.ConnectorsApiUpdateConnectorV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<connectorsTypes.ConnectorDetail>> => {
    const connectorsapi = new sdk.ConnectorsApi(apiConfig);
    return handleApiCall(() => connectorsapi.updateConnectorV1(requestParameters));
  },
  updateEntitlementConnectionsBulkV1: (requestParameters: entitlementConnectionsTypes.EntitlementConnectionsApiUpdateEntitlementConnectionsBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<entitlementConnectionsTypes.EntitlementConnectionBulkUpdateResultItem>>> => {
    const entitlementconnectionsapi = new sdk.EntitlementConnectionsApi(apiConfig);
    return handleApiCall(() => entitlementconnectionsapi.updateEntitlementConnectionsBulkV1(requestParameters));
  },
  updateEntitlementsInBulkV1: (requestParameters: entitlementsTypes.EntitlementsApiUpdateEntitlementsInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const entitlementsapi = new sdk.EntitlementsApi(apiConfig);
    return handleApiCall(() => entitlementsapi.updateEntitlementsInBulkV1(requestParameters));
  },
  updateEntitlementsPotentialRoleV1: (requestParameters: iaiRoleMiningTypes.IAIRoleMiningApiUpdateEntitlementsPotentialRoleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRoleMiningTypes.RoleMiningPotentialRole>> => {
    const iairoleminingapi = new sdk.IAIRoleMiningApi(apiConfig);
    return handleApiCall(() => iairoleminingapi.updateEntitlementsPotentialRoleV1(requestParameters));
  },
  updateFormAttributeByIdNerm: (requestParameters: sdk.FormAttributesNERMApiUpdateFormAttributeByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetFormAttributes200ResponseNERM>> => {
    const formattributesnermapi = new sdk.FormAttributesNERMApi(apiConfig);
    return handleApiCall(() => formattributesnermapi.updateFormAttributeById(requestParameters));
  },
  updateFormAttributeByUidNerm: (requestParameters: sdk.FormAttributesNERMApiUpdateFormAttributeByUidRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetFormAttributes200ResponseNERM>> => {
    const formattributesnermapi = new sdk.FormAttributesNERMApi(apiConfig);
    return handleApiCall(() => formattributesnermapi.updateFormAttributeByUid(requestParameters));
  },
  updateFormByIdNerm: (requestParameters: sdk.FormsNERMApiUpdateFormByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateAttribute201ResponseNERM>> => {
    const formsnermapi = new sdk.FormsNERMApi(apiConfig);
    return handleApiCall(() => formsnermapi.updateFormById(requestParameters));
  },
  updateFormByUidNerm: (requestParameters: sdk.FormsNERMApiUpdateFormByUidRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.CreateAttribute201ResponseNERM>> => {
    const formsnermapi = new sdk.FormsNERMApi(apiConfig);
    return handleApiCall(() => formsnermapi.updateFormByUid(requestParameters));
  },
  updateIdentityProfileV1: (requestParameters: identityProfilesTypes.IdentityProfilesApiUpdateIdentityProfileV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<identityProfilesTypes.IdentityProfile>> => {
    const identityprofilesapi = new sdk.IdentityProfilesApi(apiConfig);
    return handleApiCall(() => identityprofilesapi.updateIdentityProfileV1(requestParameters));
  },
  updateLifecycleStatesV1: (requestParameters: lifecycleStatesTypes.LifecycleStatesApiUpdateLifecycleStatesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<lifecycleStatesTypes.LifecycleState>> => {
    const lifecyclestatesapi = new sdk.LifecycleStatesApi(apiConfig);
    return handleApiCall(() => lifecyclestatesapi.updateLifecycleStatesV1(requestParameters));
  },
  updateMachineAccountDeletionApprovalConfigV1: (requestParameters: sourcesTypes.SourcesApiUpdateMachineAccountDeletionApprovalConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.AccountDeleteConfigDto>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.updateMachineAccountDeletionApprovalConfigV1(requestParameters));
  },
  updateMachineAccountSubtypeApprovalConfigV1: (requestParameters: machineAccountSubtypesTypes.MachineAccountSubtypesApiUpdateMachineAccountSubtypeApprovalConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountSubtypesTypes.MachineAccountSubtypeConfigDto>> => {
    const machineaccountsubtypesapi = new sdk.MachineAccountSubtypesApi(apiConfig);
    return handleApiCall(() => machineaccountsubtypesapi.updateMachineAccountSubtypeApprovalConfigV1(requestParameters));
  },
  updateMachineAccountV1: (requestParameters: machineAccountsTypes.MachineAccountsApiUpdateMachineAccountV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineAccountsTypes.MachineAccount>> => {
    const machineaccountsapi = new sdk.MachineAccountsApi(apiConfig);
    return handleApiCall(() => machineaccountsapi.updateMachineAccountV1(requestParameters));
  },
  updateMachineIdentityV1: (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiUpdateMachineIdentityV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineIdentitiesTypes.MachineIdentityResponse>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.updateMachineIdentityV1(requestParameters));
  },
  updateMachineIdentityV2: (requestParameters: machineIdentitiesTypes.MachineIdentitiesApiUpdateMachineIdentityV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<machineIdentitiesTypes.Machineidentityv2>> => {
    const machineidentitiesapi = new sdk.MachineIdentitiesApi(apiConfig);
    return handleApiCall(() => machineidentitiesapi.updateMachineIdentityV2(requestParameters));
  },
  updateManagedClientV1: (requestParameters: managedClientsTypes.ManagedClientsApiUpdateManagedClientV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClientsTypes.ManagedClient>> => {
    const managedclientsapi = new sdk.ManagedClientsApi(apiConfig);
    return handleApiCall(() => managedclientsapi.updateManagedClientV1(requestParameters));
  },
  updateManagedClusterTypeV1: (requestParameters: managedClusterTypesTypes.ManagedClusterTypesApiUpdateManagedClusterTypeV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClusterTypesTypes.ManagedClusterType>> => {
    const managedclustertypesapi = new sdk.ManagedClusterTypesApi(apiConfig);
    return handleApiCall(() => managedclustertypesapi.updateManagedClusterTypeV1(requestParameters));
  },
  updateManagedClusterV1: (requestParameters: managedClustersTypes.ManagedClustersApiUpdateManagedClusterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClustersTypes.ManagedCluster>> => {
    const managedclustersapi = new sdk.ManagedClustersApi(apiConfig);
    return handleApiCall(() => managedclustersapi.updateManagedClusterV1(requestParameters));
  },
  updateMultiHostSourcesV1: (requestParameters: multiHostIntegrationTypes.MultiHostIntegrationApiUpdateMultiHostSourcesV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const multihostintegrationapi = new sdk.MultiHostIntegrationApi(apiConfig);
    return handleApiCall(() => multihostintegrationapi.updateMultiHostSourcesV1(requestParameters));
  },
  updateNonEmployeeRecordV1: (requestParameters: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiUpdateNonEmployeeRecordV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<nonEmployeeLifecycleManagementTypes.NonEmployeeRecord>> => {
    const nonemployeelifecyclemanagementapi = new sdk.NonEmployeeLifecycleManagementApi(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementapi.updateNonEmployeeRecordV1(requestParameters));
  },
  updateObjectMappingsV1: (requestParameters: configurationHubTypes.ConfigurationHubApiUpdateObjectMappingsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<configurationHubTypes.ObjectMappingBulkPatchResponse>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.updateObjectMappingsV1(requestParameters));
  },
  updatePageContentByIdNerm: (requestParameters: sdk.PageContentsNERMApiUpdatePageContentByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContents200ResponseNERM>> => {
    const pagecontentsnermapi = new sdk.PageContentsNERMApi(apiConfig);
    return handleApiCall(() => pagecontentsnermapi.updatePageContentById(requestParameters));
  },
  updatePageContentByUidNerm: (requestParameters: sdk.PageContentsNERMApiUpdatePageContentByUidRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContents200ResponseNERM>> => {
    const pagecontentsnermapi = new sdk.PageContentsNERMApi(apiConfig);
    return handleApiCall(() => pagecontentsnermapi.updatePageContentByUid(requestParameters));
  },
  updatePageContentTranslationByIdNerm: (requestParameters: sdk.PageContentTranslationsNERMApiUpdatePageContentTranslationByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContentTranslation200ResponseNERM>> => {
    const pagecontenttranslationsnermapi = new sdk.PageContentTranslationsNERMApi(apiConfig);
    return handleApiCall(() => pagecontenttranslationsnermapi.updatePageContentTranslationById(requestParameters));
  },
  updatePageContentTranslationByUidNerm: (requestParameters: sdk.PageContentTranslationsNERMApiUpdatePageContentTranslationByUidRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageContentTranslation200ResponseNERM>> => {
    const pagecontenttranslationsnermapi = new sdk.PageContentTranslationsNERMApi(apiConfig);
    return handleApiCall(() => pagecontenttranslationsnermapi.updatePageContentTranslationByUid(requestParameters));
  },
  updatePageElementByIdNerm: (requestParameters: sdk.PageElementsNERMApiUpdatePageElementByIdRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageElements200ResponseNERM>> => {
    const pageelementsnermapi = new sdk.PageElementsNERMApi(apiConfig);
    return handleApiCall(() => pageelementsnermapi.updatePageElementById(requestParameters));
  },
  updatePageElementByUidNerm: (requestParameters: sdk.PageElementsNERMApiUpdatePageElementByUidRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetPageElements200ResponseNERM>> => {
    const pageelementsnermapi = new sdk.PageElementsNERMApi(apiConfig);
    return handleApiCall(() => pageelementsnermapi.updatePageElementByUid(requestParameters));
  },
  updateParameterV1: (requestParameters: parameterStorageTypes.ParameterStorageApiUpdateParameterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<parameterStorageTypes.ParameterStorageParameter>> => {
    const parameterstorageapi = new sdk.ParameterStorageApi(apiConfig);
    return handleApiCall(() => parameterstorageapi.updateParameterV1(requestParameters));
  },
  updatePasswordPolicyHoldersV1: (requestParameters: sourcesTypes.SourcesApiUpdatePasswordPolicyHoldersV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<sourcesTypes.PasswordPolicyHoldersDtoInner>>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.updatePasswordPolicyHoldersV1(requestParameters));
  },
  updatePasswordSyncGroupV1: (requestParameters: passwordSyncGroupsTypes.PasswordSyncGroupsApiUpdatePasswordSyncGroupV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<passwordSyncGroupsTypes.PasswordSyncGroup>> => {
    const passwordsyncgroupsapi = new sdk.PasswordSyncGroupsApi(apiConfig);
    return handleApiCall(() => passwordsyncgroupsapi.updatePasswordSyncGroupV1(requestParameters));
  },
  updateProfileNerm: (requestParameters: sdk.IscAccountsNERMApiUpdateProfileRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<sdk.GetSingleSchemaMappedProfile200ResponseNERM>> => {
    const iscaccountsnermapi = new sdk.IscAccountsNERMApi(apiConfig);
    return handleApiCall(() => iscaccountsnermapi.updateProfile(requestParameters));
  },
  updateProvisioningPoliciesInBulkV1: (requestParameters: sourcesTypes.SourcesApiUpdateProvisioningPoliciesInBulkV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<sourcesTypes.ProvisioningPolicyDto>>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.updateProvisioningPoliciesInBulkV1(requestParameters));
  },
  updateProvisioningPolicyV1: (requestParameters: sourcesTypes.SourcesApiUpdateProvisioningPolicyV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.ProvisioningPolicyDto>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.updateProvisioningPolicyV1(requestParameters));
  },
  updateProvisioningPolicyV2: (requestParameters: sourcesTypes.SourcesApiUpdateProvisioningPolicyV2Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.ProvisioningPolicyDtoV2>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.updateProvisioningPolicyV2(requestParameters));
  },
  updatePublicIdentityConfigV1: (requestParameters: publicIdentitiesConfigTypes.PublicIdentitiesConfigApiUpdatePublicIdentityConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<publicIdentitiesConfigTypes.PublicIdentityConfig>> => {
    const publicidentitiesconfigapi = new sdk.PublicIdentitiesConfigApi(apiConfig);
    return handleApiCall(() => publicidentitiesconfigapi.updatePublicIdentityConfigV1(requestParameters));
  },
  updateRecommendationsConfigV1: (requestParameters: iaiRecommendationsTypes.IAIRecommendationsApiUpdateRecommendationsConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<iaiRecommendationsTypes.RecommendationConfigDto>> => {
    const iairecommendationsapi = new sdk.IAIRecommendationsApi(apiConfig);
    return handleApiCall(() => iairecommendationsapi.updateRecommendationsConfigV1(requestParameters));
  },
  updateRolesMetadataByFilterV1: (requestParameters: rolesTypes.RolesApiUpdateRolesMetadataByFilterV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<rolesTypes.RoleBulkUpdateResponse>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.updateRolesMetadataByFilterV1(requestParameters));
  },
  updateRolesMetadataByIdsV1: (requestParameters: rolesTypes.RolesApiUpdateRolesMetadataByIdsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<rolesTypes.RoleBulkUpdateResponse>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.updateRolesMetadataByIdsV1(requestParameters));
  },
  updateRolesMetadataByQueryV1: (requestParameters: rolesTypes.RolesApiUpdateRolesMetadataByQueryV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<rolesTypes.RoleBulkUpdateResponse>> => {
    const rolesapi = new sdk.RolesApi(apiConfig);
    return handleApiCall(() => rolesapi.updateRolesMetadataByQueryV1(requestParameters));
  },
  updateScheduledActionV1: (requestParameters: configurationHubTypes.ConfigurationHubApiUpdateScheduledActionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<configurationHubTypes.ScheduledActionResponse>> => {
    const configurationhubapi = new sdk.ConfigurationHubApi(apiConfig);
    return handleApiCall(() => configurationhubapi.updateScheduledActionV1(requestParameters));
  },
  updateScheduledSearchV1: (requestParameters: scheduledSearchTypes.ScheduledSearchApiUpdateScheduledSearchV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<scheduledSearchTypes.ScheduledSearch>> => {
    const scheduledsearchapi = new sdk.ScheduledSearchApi(apiConfig);
    return handleApiCall(() => scheduledsearchapi.updateScheduledSearchV1(requestParameters));
  },
  updateSourceAppsInBulkV1: (requestParameters: appsTypes.AppsApiUpdateSourceAppsInBulkV1Request = {}, apiConfig: sdk.Configuration): Promise<ApiResponse<void>> => {
    const appsapi = new sdk.AppsApi(apiConfig);
    return handleApiCall(() => appsapi.updateSourceAppsInBulkV1(requestParameters));
  },
  updateSourceEntitlementRequestConfigV1: (requestParameters: sourcesTypes.SourcesApiUpdateSourceEntitlementRequestConfigV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.SourceEntitlementRequestConfig>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.updateSourceEntitlementRequestConfigV1(requestParameters));
  },
  updateSourceScheduleV1: (requestParameters: sourcesTypes.SourcesApiUpdateSourceScheduleV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Schedule3>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.updateSourceScheduleV1(requestParameters));
  },
  updateSourceSchemaV1: (requestParameters: sourcesTypes.SourcesApiUpdateSourceSchemaV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Schema>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.updateSourceSchemaV1(requestParameters));
  },
  updateSourceV1: (requestParameters: sourcesTypes.SourcesApiUpdateSourceV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sourcesTypes.Source>> => {
    const sourcesapi = new sdk.SourcesApi(apiConfig);
    return handleApiCall(() => sourcesapi.updateSourceV1(requestParameters));
  },
  updateStatusCheckDetailsV1: (requestParameters: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiUpdateStatusCheckDetailsV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<serviceDeskIntegrationTypes.QueuedCheckConfigDetails>> => {
    const servicedeskintegrationapi = new sdk.ServiceDeskIntegrationApi(apiConfig);
    return handleApiCall(() => servicedeskintegrationapi.updateStatusCheckDetailsV1(requestParameters));
  },
  updateStreamConfigurationV1: (requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiUpdateStreamConfigurationV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sharedSignalsFrameworkSsfTypes.UpdateStreamConfigResponse>> => {
    const sharedsignalsframeworkssfapi = new sdk.SharedSignalsFrameworkSSFApi(apiConfig);
    return handleApiCall(() => sharedsignalsframeworkssfapi.updateStreamConfigurationV1(requestParameters));
  },
  updateStreamStatusV1: (requestParameters: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiUpdateStreamStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<sharedSignalsFrameworkSsfTypes.StreamStatusResponse>> => {
    const sharedsignalsframeworkssfapi = new sdk.SharedSignalsFrameworkSSFApi(apiConfig);
    return handleApiCall(() => sharedsignalsframeworkssfapi.updateStreamStatusV1(requestParameters));
  },
  updateSubscriptionV1: (requestParameters: triggersTypes.TriggersApiUpdateSubscriptionV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<triggersTypes.Subscription>> => {
    const triggersapi = new sdk.TriggersApi(apiConfig);
    return handleApiCall(() => triggersapi.updateSubscriptionV1(requestParameters));
  },
  updateTaskStatusV1: (requestParameters: taskManagementTypes.TaskManagementApiUpdateTaskStatusV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<taskManagementTypes.TaskStatus>> => {
    const taskmanagementapi = new sdk.TaskManagementApi(apiConfig);
    return handleApiCall(() => taskmanagementapi.updateTaskStatusV1(requestParameters));
  },
  updateTransformV1: (requestParameters: transformsTypes.TransformsApiUpdateTransformV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<transformsTypes.TransformRead>> => {
    const transformsapi = new sdk.TransformsApi(apiConfig);
    return handleApiCall(() => transformsapi.updateTransformV1(requestParameters));
  },
  updateUserLevelV1: (requestParameters: customUserLevelsTypes.CustomUserLevelsApiUpdateUserLevelV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<customUserLevelsTypes.UserLevelSummaryDTO>> => {
    const customuserlevelsapi = new sdk.CustomUserLevelsApi(apiConfig);
    return handleApiCall(() => customuserlevelsapi.updateUserLevelV1(requestParameters));
  },
  updateV1: (requestParameters: managedClustersTypes.ManagedClustersApiUpdateV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<managedClustersTypes.ClusterManualUpgrade>> => {
    const managedclustersapi = new sdk.ManagedClustersApi(apiConfig);
    return handleApiCall(() => managedclustersapi.updateV1(requestParameters));
  },
  updateWorkgroupMembersV1: (requestParameters: governanceGroupsTypes.GovernanceGroupsApiUpdateWorkgroupMembersV1Request, apiConfig: sdk.Configuration): Promise<ApiResponse<Array<governanceGroupsTypes.WorkgroupMemberAddItem>>> => {
    const governancegroupsapi = new sdk.GovernanceGroupsApi(apiConfig);
    return handleApiCall(() => governancegroupsapi.updateWorkgroupMembersV1(requestParameters));
  },
// --- GENERATED SDK METHODS END ---

  // Generic REST operations
  genericGet: (requestParameters: sdk.DefaultApiGenericGetRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const axiosInstance = new sdk.DefaultApi(apiConfig);
    return handleApiCall(() => axiosInstance.genericGet(requestParameters));
  },

  genericPost: (requestParameters: sdk.DefaultApiGenericPostRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const axiosInstance = new sdk.DefaultApi(apiConfig);
    return handleApiCall(() => axiosInstance.genericPost(requestParameters));
  },

  genericPut: (requestParameters: sdk.DefaultApiGenericPutRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const axiosInstance = new sdk.DefaultApi(apiConfig);
    return handleApiCall(() => axiosInstance.genericPut(requestParameters));
  },

  genericPatch: (requestParameters: sdk.DefaultApiGenericPatchRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const axiosInstance = new sdk.DefaultApi(apiConfig);
    return handleApiCall(() => axiosInstance.genericPatch(requestParameters));
  },

  genericDelete: (requestParameters: sdk.DefaultApiGenericDeleteRequest, apiConfig: sdk.Configuration): Promise<ApiResponse<any>> => {
    const axiosInstance = new sdk.DefaultApi(apiConfig);
    return handleApiCall(() => axiosInstance.genericDelete(requestParameters));
  }
};

/**
 * Secure Map of all SDK functions for safe method lookup
 * This prevents prototype pollution and unauthorized method access
 */
const sdkFunctions = new Map<string, (params: any, config: sdk.Configuration) => Promise<ApiResponse<any>>>();

// Populate the Map with all SDK functions
Object.entries(sdkFunctionsObject).forEach(([key, value]) => {
  sdkFunctions.set(key, value);
});

/**
 * Execute an SDK method by name with parameters
 * Uses secure Map lookup to prevent prototype pollution attacks
 */
export async function executeSdkMethod(
  methodName: string,
  params: any,
  accessToken: string,
  basePath: string
): Promise<ApiResponse<any>> {
  // SECURITY: Use Map.has() to safely check if the method exists
  // This prevents prototype pollution attacks and unauthorized method access
  if (!sdkFunctions.has(methodName)) {
    return {
      data: null,
      status: 404,
      statusText: `SDK method '${methodName}' not found`,
      headers: {}
    };
  }

  // SECURITY: Use Map.get() for safe method retrieval
  const sdkFunction = sdkFunctions.get(methodName);

  // Additional type safety check
  if (typeof sdkFunction !== 'function') {
    return {
      data: null,
      status: 500,
      statusText: `SDK method '${methodName}' is not a valid function`,
      headers: {}
    };
  }

  const config = createSdkConfiguration(accessToken, basePath);

  // Check the function signature to determine how to call it
  // Some functions take (params, config), others take just (config)
  const functionLength = sdkFunction.length;

  let result: ApiResponse<any>;
  if (functionLength === 1) {
    // Function only takes config parameter: (config: Configuration)
    console.log('Calling SDK function with config only');
    result = await (sdkFunction as (config: sdk.Configuration) => Promise<ApiResponse<any>>)(config);
  } else {
    // Function takes params and config: (params: any, config: Configuration)
    console.log('Calling SDK function with params and config');
    result = await sdkFunction(params, config);
  }

  return result;
}

// =========================================================================
// Patches applied by mustache_templates/postscript.js — do not edit manually.
// Re-run `npm run build:sdk` to regenerate with these patches applied.
// =========================================================================

// Override: replace the generated stub with a fetch-based implementation.
sdkFunctionsObject.createUploadedConfigurationV1 = async (
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
// Keep the Map in sync so executeSdkMethod routes to the new implementation.
sdkFunctions.set('createUploadedConfigurationV1', sdkFunctionsObject.createUploadedConfigurationV1 as any);
