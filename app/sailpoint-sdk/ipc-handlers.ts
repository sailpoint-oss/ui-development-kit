import { ipcMain } from 'electron';
import * as sdkWrapper from './sailpoint-sdk';
import * as sdk from 'sailpoint-api-client';
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
import { apiConfig } from '../authentication/auth';

/**
 * GENERATED FILE — do not edit by hand.
 * Produced by scripts/build-sailpoint-sdk.js from mustache_templates/electron-icp-handlers.mustache.
 */

export function setupSailPointSDKHandlers() {

// --- GENERATED SDK METHODS START ---
ipcMain.handle('add-access-request-recommendations-ignored-item-v-1', async (event, request: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiAddAccessRequestRecommendationsIgnoredItemV1Request) => {
    return await sdkWrapper.addAccessRequestRecommendationsIgnoredItemV1(request, apiConfig);
});
ipcMain.handle('add-access-request-recommendations-requested-item-v-1', async (event, request: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiAddAccessRequestRecommendationsRequestedItemV1Request) => {
    return await sdkWrapper.addAccessRequestRecommendationsRequestedItemV1(request, apiConfig);
});
ipcMain.handle('add-access-request-recommendations-viewed-items-v-1', async (event, request: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiAddAccessRequestRecommendationsViewedItemsV1Request) => {
    return await sdkWrapper.addAccessRequestRecommendationsViewedItemsV1(request, apiConfig);
});
ipcMain.handle('add-access-request-recommendations-viewed-item-v-1', async (event, request: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiAddAccessRequestRecommendationsViewedItemV1Request) => {
    return await sdkWrapper.addAccessRequestRecommendationsViewedItemV1(request, apiConfig);
});
ipcMain.handle('approve-access-request-v-1', async (event, request: accessRequestApprovalsTypes.AccessRequestApprovalsApiApproveAccessRequestV1Request) => {
    return await sdkWrapper.approveAccessRequestV1(request, apiConfig);
});
ipcMain.handle('approve-approval-in-bulk-v-1', async (event, request: approvalsTypes.ApprovalsApiApproveApprovalInBulkV1Request) => {
    return await sdkWrapper.approveApprovalInBulkV1(request, apiConfig);
});
ipcMain.handle('approve-approval-items-in-bulk-v-1', async (event, request: workItemsTypes.WorkItemsApiApproveApprovalItemsInBulkV1Request) => {
    return await sdkWrapper.approveApprovalItemsInBulkV1(request, apiConfig);
});
ipcMain.handle('approve-approval-item-v-1', async (event, request: workItemsTypes.WorkItemsApiApproveApprovalItemV1Request) => {
    return await sdkWrapper.approveApprovalItemV1(request, apiConfig);
});
ipcMain.handle('approve-approval-v-1', async (event, request: approvalsTypes.ApprovalsApiApproveApprovalV1Request) => {
    return await sdkWrapper.approveApprovalV1(request, apiConfig);
});
ipcMain.handle('approve-bulk-access-request-v-1', async (event, request: accessRequestsTypes.AccessRequestsApiApproveBulkAccessRequestV1Request) => {
    return await sdkWrapper.approveBulkAccessRequestV1(request, apiConfig);
});
ipcMain.handle('approve-bulk-entitlement-recommendations-v-1', async (event, request: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiApproveBulkEntitlementRecommendationsV1Request) => {
    return await sdkWrapper.approveBulkEntitlementRecommendationsV1(request, apiConfig);
});
ipcMain.handle('approve-non-employee-request-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiApproveNonEmployeeRequestV1Request) => {
    return await sdkWrapper.approveNonEmployeeRequestV1(request, apiConfig);
});
ipcMain.handle('cancel-access-request-in-bulk-v-1', async (event, request: accessRequestsTypes.AccessRequestsApiCancelAccessRequestInBulkV1Request) => {
    return await sdkWrapper.cancelAccessRequestInBulkV1(request, apiConfig);
});
ipcMain.handle('cancel-access-request-v-1', async (event, request: accessRequestsTypes.AccessRequestsApiCancelAccessRequestV1Request) => {
    return await sdkWrapper.cancelAccessRequestV1(request, apiConfig);
});
ipcMain.handle('cancel-approval-by-id-v-1', async (event, request: approvalsTypes.ApprovalsApiCancelApprovalByIdV1Request) => {
    return await sdkWrapper.cancelApprovalByIdV1(request, apiConfig);
});
ipcMain.handle('cancel-approval-v-1', async (event, request: approvalsTypes.ApprovalsApiCancelApprovalV1Request) => {
    return await sdkWrapper.cancelApprovalV1(request, apiConfig);
});
ipcMain.handle('cancel-report-v-1', async (event, request: reportsDataExtractionTypes.ReportsDataExtractionApiCancelReportV1Request) => {
    return await sdkWrapper.cancelReportV1(request, apiConfig);
});
ipcMain.handle('cancel-role-propagation-v-1', async (event, request: rolePropagationTypes.RolePropagationApiCancelRolePropagationV1Request = {}) => {
    return await sdkWrapper.cancelRolePropagationV1(request, apiConfig);
});
ipcMain.handle('cancel-task-v-1', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiCancelTaskV1Request) => {
    return await sdkWrapper.cancelTaskV1(request, apiConfig);
});
ipcMain.handle('cancel-workflow-execution-v-1', async (event, request: workflowsTypes.WorkflowsApiCancelWorkflowExecutionV1Request) => {
    return await sdkWrapper.cancelWorkflowExecutionV1(request, apiConfig);
});
ipcMain.handle('close-access-request-v-1', async (event, request: accessRequestsTypes.AccessRequestsApiCloseAccessRequestV1Request) => {
    return await sdkWrapper.closeAccessRequestV1(request, apiConfig);
});
ipcMain.handle('compare-identity-snapshots-access-type-v-1', async (event, request: identityHistoryTypes.IdentityHistoryApiCompareIdentitySnapshotsAccessTypeV1Request) => {
    return await sdkWrapper.compareIdentitySnapshotsAccessTypeV1(request, apiConfig);
});
ipcMain.handle('compare-identity-snapshots-v-1', async (event, request: identityHistoryTypes.IdentityHistoryApiCompareIdentitySnapshotsV1Request) => {
    return await sdkWrapper.compareIdentitySnapshotsV1(request, apiConfig);
});
ipcMain.handle('complete-campaign-v-1', async (event, request: certificationCampaignsTypes.CertificationCampaignsApiCompleteCampaignV1Request) => {
    return await sdkWrapper.completeCampaignV1(request, apiConfig);
});
ipcMain.handle('complete-trigger-invocation-v-1', async (event, request: triggersTypes.TriggersApiCompleteTriggerInvocationV1Request) => {
    return await sdkWrapper.completeTriggerInvocationV1(request, apiConfig);
});
ipcMain.handle('complete-work-item-v-1', async (event, request: workItemsTypes.WorkItemsApiCompleteWorkItemV1Request) => {
    return await sdkWrapper.completeWorkItemV1(request, apiConfig);
});
ipcMain.handle('create-access-model-metadata-attribute-v-1', async (event, request: accessModelMetadataTypes.AccessModelMetadataApiCreateAccessModelMetadataAttributeV1Request) => {
    return await sdkWrapper.createAccessModelMetadataAttributeV1(request, apiConfig);
});
ipcMain.handle('create-access-model-metadata-attribute-value-v-1', async (event, request: accessModelMetadataTypes.AccessModelMetadataApiCreateAccessModelMetadataAttributeValueV1Request) => {
    return await sdkWrapper.createAccessModelMetadataAttributeValueV1(request, apiConfig);
});
ipcMain.handle('create-access-model-metadata-for-entitlement-v-1', async (event, request: entitlementsTypes.EntitlementsApiCreateAccessModelMetadataForEntitlementV1Request) => {
    return await sdkWrapper.createAccessModelMetadataForEntitlementV1(request, apiConfig);
});
ipcMain.handle('create-access-profile-v-1', async (event, request: accessProfilesTypes.AccessProfilesApiCreateAccessProfileV1Request) => {
    return await sdkWrapper.createAccessProfileV1(request, apiConfig);
});
ipcMain.handle('create-access-request-v-1', async (event, request: accessRequestsTypes.AccessRequestsApiCreateAccessRequestV1Request) => {
    return await sdkWrapper.createAccessRequestV1(request, apiConfig);
});
ipcMain.handle('create-account-v-1', async (event, request: accountsTypes.AccountsApiCreateAccountV1Request) => {
    return await sdkWrapper.createAccountV1(request, apiConfig);
});
ipcMain.handle('create-application-v-1', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiCreateApplicationV1Request) => {
    return await sdkWrapper.createApplicationV1(request, apiConfig);
});
ipcMain.handle('create-approval-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateApprovalActionRequest) => {
    return await sdkWrapper.createApprovalActionNerm(request, apiConfig);
});
ipcMain.handle('create-ask-security-question-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateAskSecurityQuestionActionRequest) => {
    return await sdkWrapper.createAskSecurityQuestionActionNerm(request, apiConfig);
});
ipcMain.handle('create-attribute-nerm', async (event, request: sdk.AttributesNERMApiCreateAttributeRequest) => {
    return await sdkWrapper.createAttributeNerm(request, apiConfig);
});
ipcMain.handle('create-auth-org-network-config-v-1', async (event, request: globalTenantSecuritySettingsTypes.GlobalTenantSecuritySettingsApiCreateAuthOrgNetworkConfigV1Request) => {
    return await sdkWrapper.createAuthOrgNetworkConfigV1(request, apiConfig);
});
ipcMain.handle('create-auto-assign-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateAutoAssignActionRequest) => {
    return await sdkWrapper.createAutoAssignActionNerm(request, apiConfig);
});
ipcMain.handle('create-automated-workflow-nerm', async (event, request: sdk.WorkflowsNERMApiCreateAutomatedWorkflowRequest) => {
    return await sdkWrapper.createAutomatedWorkflowNerm(request, apiConfig);
});
ipcMain.handle('create-auto-write-settings-v-1', async (event, request: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiCreateAutoWriteSettingsV1Request) => {
    return await sdkWrapper.createAutoWriteSettingsV1(request, apiConfig);
});
ipcMain.handle('create-batch-update-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateBatchUpdateActionRequest) => {
    return await sdkWrapper.createBatchUpdateActionNerm(request, apiConfig);
});
ipcMain.handle('create-batch-workflow-nerm', async (event, request: sdk.WorkflowsNERMApiCreateBatchWorkflowRequest) => {
    return await sdkWrapper.createBatchWorkflowNerm(request, apiConfig);
});
ipcMain.handle('create-branding-item-v-1', async (event, request: brandingTypes.BrandingApiCreateBrandingItemV1Request) => {
    return await sdkWrapper.createBrandingItemV1(request, apiConfig);
});
ipcMain.handle('create-campaign-filter-v-1', async (event, request: certificationCampaignFiltersTypes.CertificationCampaignFiltersApiCreateCampaignFilterV1Request) => {
    return await sdkWrapper.createCampaignFilterV1(request, apiConfig);
});
ipcMain.handle('create-campaign-template-v-1', async (event, request: certificationCampaignsTypes.CertificationCampaignsApiCreateCampaignTemplateV1Request) => {
    return await sdkWrapper.createCampaignTemplateV1(request, apiConfig);
});
ipcMain.handle('create-campaign-v-1', async (event, request: certificationCampaignsTypes.CertificationCampaignsApiCreateCampaignV1Request) => {
    return await sdkWrapper.createCampaignV1(request, apiConfig);
});
ipcMain.handle('create-close-session-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateCloseSessionActionRequest) => {
    return await sdkWrapper.createCloseSessionActionNerm(request, apiConfig);
});
ipcMain.handle('create-common-access-v-1', async (event, request: iaiCommonAccessTypes.IAICommonAccessApiCreateCommonAccessV1Request) => {
    return await sdkWrapper.createCommonAccessV1(request, apiConfig);
});
ipcMain.handle('create-connector-customizer-v-1', async (event, request: connectorCustomizersTypes.ConnectorCustomizersApiCreateConnectorCustomizerV1Request) => {
    return await sdkWrapper.createConnectorCustomizerV1(request, apiConfig);
});
ipcMain.handle('create-connector-customizer-version-v-1', async (event, request: connectorCustomizersTypes.ConnectorCustomizersApiCreateConnectorCustomizerVersionV1Request) => {
    return await sdkWrapper.createConnectorCustomizerVersionV1(request, apiConfig);
});
ipcMain.handle('create-connector-rule-v-1', async (event, request: connectorRuleManagementTypes.ConnectorRuleManagementApiCreateConnectorRuleV1Request) => {
    return await sdkWrapper.createConnectorRuleV1(request, apiConfig);
});
ipcMain.handle('create-contributors-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateContributorsActionRequest) => {
    return await sdkWrapper.createContributorsActionNerm(request, apiConfig);
});
ipcMain.handle('create-create-profile-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateCreateProfileActionRequest) => {
    return await sdkWrapper.createCreateProfileActionNerm(request, apiConfig);
});
ipcMain.handle('create-create-workflow-nerm', async (event, request: sdk.WorkflowsNERMApiCreateCreateWorkflowRequest) => {
    return await sdkWrapper.createCreateWorkflowNerm(request, apiConfig);
});
ipcMain.handle('create-custom-connector-v-1', async (event, request: connectorsTypes.ConnectorsApiCreateCustomConnectorV1Request) => {
    return await sdkWrapper.createCustomConnectorV1(request, apiConfig);
});
ipcMain.handle('create-custom-password-instructions-v-1', async (event, request: customPasswordInstructionsTypes.CustomPasswordInstructionsApiCreateCustomPasswordInstructionsV1Request) => {
    return await sdkWrapper.createCustomPasswordInstructionsV1(request, apiConfig);
});
ipcMain.handle('create-custom-privilege-criteria-v-1', async (event, request: privilegeCriteriaTypes.PrivilegeCriteriaApiCreateCustomPrivilegeCriteriaV1Request) => {
    return await sdkWrapper.createCustomPrivilegeCriteriaV1(request, apiConfig);
});
ipcMain.handle('create-custom-user-level-v-1', async (event, request: customUserLevelsTypes.CustomUserLevelsApiCreateCustomUserLevelV1Request) => {
    return await sdkWrapper.createCustomUserLevelV1(request, apiConfig);
});
ipcMain.handle('create-data-segment-v-1', async (event, request: dataSegmentationTypes.DataSegmentationApiCreateDataSegmentV1Request) => {
    return await sdkWrapper.createDataSegmentV1(request, apiConfig);
});
ipcMain.handle('create-deploy-v-1', async (event, request: configurationHubTypes.ConfigurationHubApiCreateDeployV1Request) => {
    return await sdkWrapper.createDeployV1(request, apiConfig);
});
ipcMain.handle('create-digit-token-v-1', async (event, request: passwordManagementTypes.PasswordManagementApiCreateDigitTokenV1Request) => {
    return await sdkWrapper.createDigitTokenV1(request, apiConfig);
});
ipcMain.handle('create-dimension-v-1', async (event, request: dimensionsTypes.DimensionsApiCreateDimensionV1Request) => {
    return await sdkWrapper.createDimensionV1(request, apiConfig);
});
ipcMain.handle('create-domain-dkim-v-1', async (event, request: notificationsTypes.NotificationsApiCreateDomainDkimV1Request) => {
    return await sdkWrapper.createDomainDkimV1(request, apiConfig);
});
ipcMain.handle('create-duplicate-prevention-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateDuplicatePreventionActionRequest) => {
    return await sdkWrapper.createDuplicatePreventionActionNerm(request, apiConfig);
});
ipcMain.handle('create-email-verification-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateEmailVerificationActionRequest) => {
    return await sdkWrapper.createEmailVerificationActionNerm(request, apiConfig);
});
ipcMain.handle('create-external-execute-workflow-v-1', async (event, request: workflowsTypes.WorkflowsApiCreateExternalExecuteWorkflowV1Request) => {
    return await sdkWrapper.createExternalExecuteWorkflowV1(request, apiConfig);
});
ipcMain.handle('create-form-attribute-nerm', async (event, request: sdk.FormAttributesNERMApiCreateFormAttributeRequest) => {
    return await sdkWrapper.createFormAttributeNerm(request, apiConfig);
});
ipcMain.handle('create-form-definition-dynamic-schema-v-1', async (event, request: customFormsTypes.CustomFormsApiCreateFormDefinitionDynamicSchemaV1Request = {}) => {
    return await sdkWrapper.createFormDefinitionDynamicSchemaV1(request, apiConfig);
});
ipcMain.handle('create-form-definition-file-request-v-1', async (event, request: customFormsTypes.CustomFormsApiCreateFormDefinitionFileRequestV1Request) => {
    return await sdkWrapper.createFormDefinitionFileRequestV1(request, apiConfig);
});
ipcMain.handle('create-form-definition-v-1', async (event, request: customFormsTypes.CustomFormsApiCreateFormDefinitionV1Request = {}) => {
    return await sdkWrapper.createFormDefinitionV1(request, apiConfig);
});
ipcMain.handle('create-form-instance-v-1', async (event, request: customFormsTypes.CustomFormsApiCreateFormInstanceV1Request = {}) => {
    return await sdkWrapper.createFormInstanceV1(request, apiConfig);
});
ipcMain.handle('create-form-nerm', async (event, request: sdk.FormsNERMApiCreateFormRequest) => {
    return await sdkWrapper.createFormNerm(request, apiConfig);
});
ipcMain.handle('create-fulfillment-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateFulfillmentActionRequest) => {
    return await sdkWrapper.createFulfillmentActionNerm(request, apiConfig);
});
ipcMain.handle('create-identity-attribute-v-1', async (event, request: identityAttributesTypes.IdentityAttributesApiCreateIdentityAttributeV1Request) => {
    return await sdkWrapper.createIdentityAttributeV1(request, apiConfig);
});
ipcMain.handle('create-identity-collector-v-1', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiCreateIdentityCollectorV1Request) => {
    return await sdkWrapper.createIdentityCollectorV1(request, apiConfig);
});
ipcMain.handle('create-identity-profile-v-1', async (event, request: identityProfilesTypes.IdentityProfilesApiCreateIdentityProfileV1Request) => {
    return await sdkWrapper.createIdentityProfileV1(request, apiConfig);
});
ipcMain.handle('create-identity-proofing-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateIdentityProofingActionRequest) => {
    return await sdkWrapper.createIdentityProofingActionNerm(request, apiConfig);
});
ipcMain.handle('create-invitation-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateInvitationActionRequest) => {
    return await sdkWrapper.createInvitationActionNerm(request, apiConfig);
});
ipcMain.handle('create-launcher-v-1', async (event, request: launchersTypes.LaunchersApiCreateLauncherV1Request) => {
    return await sdkWrapper.createLauncherV1(request, apiConfig);
});
ipcMain.handle('create-ldap-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateLdapActionRequest) => {
    return await sdkWrapper.createLdapActionNerm(request, apiConfig);
});
ipcMain.handle('create-lifecycle-state-v-1', async (event, request: lifecycleStatesTypes.LifecycleStatesApiCreateLifecycleStateV1Request) => {
    return await sdkWrapper.createLifecycleStateV1(request, apiConfig);
});
ipcMain.handle('create-login-workflow-nerm', async (event, request: sdk.WorkflowsNERMApiCreateLoginWorkflowRequest) => {
    return await sdkWrapper.createLoginWorkflowNerm(request, apiConfig);
});
ipcMain.handle('create-machine-account-mappings-v-1', async (event, request: machineAccountMappingsTypes.MachineAccountMappingsApiCreateMachineAccountMappingsV1Request) => {
    return await sdkWrapper.createMachineAccountMappingsV1(request, apiConfig);
});
ipcMain.handle('create-machine-account-request-v-1', async (event, request: machineAccountCreationRequestTypes.MachineAccountCreationRequestApiCreateMachineAccountRequestV1Request) => {
    return await sdkWrapper.createMachineAccountRequestV1(request, apiConfig);
});
ipcMain.handle('create-machine-account-subtype-v-1', async (event, request: machineAccountsTypes.MachineAccountsApiCreateMachineAccountSubtypeV1Request) => {
    return await sdkWrapper.createMachineAccountSubtypeV1(request, apiConfig);
});
ipcMain.handle('create-machine-identity-v-1', async (event, request: machineIdentitiesTypes.MachineIdentitiesApiCreateMachineIdentityV1Request) => {
    return await sdkWrapper.createMachineIdentityV1(request, apiConfig);
});
ipcMain.handle('create-managed-client-v-1', async (event, request: managedClientsTypes.ManagedClientsApiCreateManagedClientV1Request) => {
    return await sdkWrapper.createManagedClientV1(request, apiConfig);
});
ipcMain.handle('create-managed-cluster-type-v-1', async (event, request: managedClusterTypesTypes.ManagedClusterTypesApiCreateManagedClusterTypeV1Request) => {
    return await sdkWrapper.createManagedClusterTypeV1(request, apiConfig);
});
ipcMain.handle('create-managed-cluster-v-1', async (event, request: managedClustersTypes.ManagedClustersApiCreateManagedClusterV1Request) => {
    return await sdkWrapper.createManagedClusterV1(request, apiConfig);
});
ipcMain.handle('create-multi-host-integration-v-1', async (event, request: multiHostIntegrationTypes.MultiHostIntegrationApiCreateMultiHostIntegrationV1Request) => {
    return await sdkWrapper.createMultiHostIntegrationV1(request, apiConfig);
});
ipcMain.handle('create-non-employee-record-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiCreateNonEmployeeRecordV1Request) => {
    return await sdkWrapper.createNonEmployeeRecordV1(request, apiConfig);
});
ipcMain.handle('create-non-employee-request-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiCreateNonEmployeeRequestV1Request) => {
    return await sdkWrapper.createNonEmployeeRequestV1(request, apiConfig);
});
ipcMain.handle('create-non-employee-source-schema-attributes-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiCreateNonEmployeeSourceSchemaAttributesV1Request) => {
    return await sdkWrapper.createNonEmployeeSourceSchemaAttributesV1(request, apiConfig);
});
ipcMain.handle('create-non-employee-source-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiCreateNonEmployeeSourceV1Request) => {
    return await sdkWrapper.createNonEmployeeSourceV1(request, apiConfig);
});
ipcMain.handle('create-notification-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateNotificationActionRequest) => {
    return await sdkWrapper.createNotificationActionNerm(request, apiConfig);
});
ipcMain.handle('create-notification-template-v-1', async (event, request: notificationsTypes.NotificationsApiCreateNotificationTemplateV1Request) => {
    return await sdkWrapper.createNotificationTemplateV1(request, apiConfig);
});
ipcMain.handle('create-oauth-client-v-1', async (event, request: oauthClientsTypes.OAuthClientsApiCreateOauthClientV1Request) => {
    return await sdkWrapper.createOauthClientV1(request, apiConfig);
});
ipcMain.handle('create-object-mappings-v-1', async (event, request: configurationHubTypes.ConfigurationHubApiCreateObjectMappingsV1Request) => {
    return await sdkWrapper.createObjectMappingsV1(request, apiConfig);
});
ipcMain.handle('create-object-mapping-v-1', async (event, request: configurationHubTypes.ConfigurationHubApiCreateObjectMappingV1Request) => {
    return await sdkWrapper.createObjectMappingV1(request, apiConfig);
});
ipcMain.handle('create-page-content-nerm', async (event, request: sdk.PageContentsNERMApiCreatePageContentRequest) => {
    return await sdkWrapper.createPageContentNerm(request, apiConfig);
});
ipcMain.handle('create-page-content-translation-nerm', async (event, request: sdk.PageContentTranslationsNERMApiCreatePageContentTranslationRequest) => {
    return await sdkWrapper.createPageContentTranslationNerm(request, apiConfig);
});
ipcMain.handle('create-page-element-nerm', async (event, request: sdk.PageElementsNERMApiCreatePageElementRequest) => {
    return await sdkWrapper.createPageElementNerm(request, apiConfig);
});
ipcMain.handle('create-parameter-v-1', async (event, request: parameterStorageTypes.ParameterStorageApiCreateParameterV1Request = {}) => {
    return await sdkWrapper.createParameterV1(request, apiConfig);
});
ipcMain.handle('create-password-org-config-v-1', async (event, request: passwordConfigurationTypes.PasswordConfigurationApiCreatePasswordOrgConfigV1Request) => {
    return await sdkWrapper.createPasswordOrgConfigV1(request, apiConfig);
});
ipcMain.handle('create-password-policy-v-1', async (event, request: passwordPoliciesTypes.PasswordPoliciesApiCreatePasswordPolicyV1Request) => {
    return await sdkWrapper.createPasswordPolicyV1(request, apiConfig);
});
ipcMain.handle('create-password-reset-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreatePasswordResetActionRequest) => {
    return await sdkWrapper.createPasswordResetActionNerm(request, apiConfig);
});
ipcMain.handle('create-password-sync-group-v-1', async (event, request: passwordSyncGroupsTypes.PasswordSyncGroupsApiCreatePasswordSyncGroupV1Request) => {
    return await sdkWrapper.createPasswordSyncGroupV1(request, apiConfig);
});
ipcMain.handle('create-password-update-workflow-nerm', async (event, request: sdk.WorkflowsNERMApiCreatePasswordUpdateWorkflowRequest) => {
    return await sdkWrapper.createPasswordUpdateWorkflowNerm(request, apiConfig);
});
ipcMain.handle('create-permission-nerm', async (event, request: sdk.PermissionsNERMApiCreatePermissionRequest) => {
    return await sdkWrapper.createPermissionNerm(request, apiConfig);
});
ipcMain.handle('create-personal-access-token-v-1', async (event, request: personalAccessTokensTypes.PersonalAccessTokensApiCreatePersonalAccessTokenV1Request) => {
    return await sdkWrapper.createPersonalAccessTokenV1(request, apiConfig);
});
ipcMain.handle('create-potential-role-provision-request-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiCreatePotentialRoleProvisionRequestV1Request) => {
    return await sdkWrapper.createPotentialRoleProvisionRequestV1(request, apiConfig);
});
ipcMain.handle('create-profile-check-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateProfileCheckActionRequest) => {
    return await sdkWrapper.createProfileCheckActionNerm(request, apiConfig);
});
ipcMain.handle('create-profile-page-nerm', async (event, request: sdk.PagesNERMApiCreateProfilePageRequest) => {
    return await sdkWrapper.createProfilePageNerm(request, apiConfig);
});
ipcMain.handle('create-profile-select-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateProfileSelectActionRequest) => {
    return await sdkWrapper.createProfileSelectActionNerm(request, apiConfig);
});
ipcMain.handle('create-profiles-nerm', async (event, request: sdk.ProfilesNERMApiCreateProfilesRequest) => {
    return await sdkWrapper.createProfilesNerm(request, apiConfig);
});
ipcMain.handle('create-profile-type-role-nerm', async (event, request: sdk.ProfileTypeRolesNERMApiCreateProfileTypeRoleRequest) => {
    return await sdkWrapper.createProfileTypeRoleNerm(request, apiConfig);
});
ipcMain.handle('create-provisioning-policy-v-1', async (event, request: sourcesTypes.SourcesApiCreateProvisioningPolicyV1Request) => {
    return await sdkWrapper.createProvisioningPolicyV1(request, apiConfig);
});
ipcMain.handle('create-provisioning-policy-v-2', async (event, request: sourcesTypes.SourcesApiCreateProvisioningPolicyV2Request) => {
    return await sdkWrapper.createProvisioningPolicyV2(request, apiConfig);
});
ipcMain.handle('create-reassignment-configuration-v-1', async (event, request: workReassignmentTypes.WorkReassignmentApiCreateReassignmentConfigurationV1Request) => {
    return await sdkWrapper.createReassignmentConfigurationV1(request, apiConfig);
});
ipcMain.handle('create-registration-workflow-nerm', async (event, request: sdk.WorkflowsNERMApiCreateRegistrationWorkflowRequest) => {
    return await sdkWrapper.createRegistrationWorkflowNerm(request, apiConfig);
});
ipcMain.handle('create-request-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateRequestActionRequest) => {
    return await sdkWrapper.createRequestActionNerm(request, apiConfig);
});
ipcMain.handle('create-rest-api-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateRestApiActionRequest) => {
    return await sdkWrapper.createRestApiActionNerm(request, apiConfig);
});
ipcMain.handle('create-review-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateReviewActionRequest) => {
    return await sdkWrapper.createReviewActionNerm(request, apiConfig);
});
ipcMain.handle('create-role-insight-requests-v-1', async (event, request: roleInsightsTypes.RoleInsightsApiCreateRoleInsightRequestsV1Request = {}) => {
    return await sdkWrapper.createRoleInsightRequestsV1(request, apiConfig);
});
ipcMain.handle('create-role-mining-sessions-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiCreateRoleMiningSessionsV1Request) => {
    return await sdkWrapper.createRoleMiningSessionsV1(request, apiConfig);
});
ipcMain.handle('create-role-v-1', async (event, request: rolesTypes.RolesApiCreateRoleV1Request) => {
    return await sdkWrapper.createRoleV1(request, apiConfig);
});
ipcMain.handle('create-run-workflow-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateRunWorkflowActionRequest) => {
    return await sdkWrapper.createRunWorkflowActionNerm(request, apiConfig);
});
ipcMain.handle('create-saved-search-v-1', async (event, request: savedSearchTypes.SavedSearchApiCreateSavedSearchV1Request) => {
    return await sdkWrapper.createSavedSearchV1(request, apiConfig);
});
ipcMain.handle('create-scheduled-action-v-1', async (event, request: configurationHubTypes.ConfigurationHubApiCreateScheduledActionV1Request) => {
    return await sdkWrapper.createScheduledActionV1(request, apiConfig);
});
ipcMain.handle('create-scheduled-search-v-1', async (event, request: scheduledSearchTypes.ScheduledSearchApiCreateScheduledSearchV1Request) => {
    return await sdkWrapper.createScheduledSearchV1(request, apiConfig);
});
ipcMain.handle('create-schedule-v-1', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiCreateScheduleV1Request) => {
    return await sdkWrapper.createScheduleV1(request, apiConfig);
});
ipcMain.handle('create-search-attribute-config-v-1', async (event, request: searchAttributeConfigurationTypes.SearchAttributeConfigurationApiCreateSearchAttributeConfigV1Request) => {
    return await sdkWrapper.createSearchAttributeConfigV1(request, apiConfig);
});
ipcMain.handle('create-segment-v-1', async (event, request: segmentsTypes.SegmentsApiCreateSegmentV1Request) => {
    return await sdkWrapper.createSegmentV1(request, apiConfig);
});
ipcMain.handle('create-service-desk-integration-v-1', async (event, request: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiCreateServiceDeskIntegrationV1Request) => {
    return await sdkWrapper.createServiceDeskIntegrationV1(request, apiConfig);
});
ipcMain.handle('create-set-attributes-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateSetAttributesActionRequest) => {
    return await sdkWrapper.createSetAttributesActionNerm(request, apiConfig);
});
ipcMain.handle('create-set-security-question-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateSetSecurityQuestionActionRequest) => {
    return await sdkWrapper.createSetSecurityQuestionActionNerm(request, apiConfig);
});
ipcMain.handle('create-simintegration-v-1', async (event, request: simIntegrationsTypes.SIMIntegrationsApiCreateSIMIntegrationV1Request) => {
    return await sdkWrapper.createSIMIntegrationV1(request, apiConfig);
});
ipcMain.handle('create-soap-api-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateSoapApiActionRequest) => {
    return await sdkWrapper.createSoapApiActionNerm(request, apiConfig);
});
ipcMain.handle('create-sod-policy-v-1', async (event, request: sodPoliciesTypes.SODPoliciesApiCreateSodPolicyV1Request) => {
    return await sdkWrapper.createSodPolicyV1(request, apiConfig);
});
ipcMain.handle('create-source-app-v-1', async (event, request: appsTypes.AppsApiCreateSourceAppV1Request) => {
    return await sdkWrapper.createSourceAppV1(request, apiConfig);
});
ipcMain.handle('create-source-schedule-v-1', async (event, request: sourcesTypes.SourcesApiCreateSourceScheduleV1Request) => {
    return await sdkWrapper.createSourceScheduleV1(request, apiConfig);
});
ipcMain.handle('create-source-schema-v-1', async (event, request: sourcesTypes.SourcesApiCreateSourceSchemaV1Request) => {
    return await sdkWrapper.createSourceSchemaV1(request, apiConfig);
});
ipcMain.handle('create-source-subtype-v-1', async (event, request: machineAccountSubtypesTypes.MachineAccountSubtypesApiCreateSourceSubtypeV1Request) => {
    return await sdkWrapper.createSourceSubtypeV1(request, apiConfig);
});
ipcMain.handle('create-sources-within-multi-host-v-1', async (event, request: multiHostIntegrationTypes.MultiHostIntegrationApiCreateSourcesWithinMultiHostV1Request) => {
    return await sdkWrapper.createSourcesWithinMultiHostV1(request, apiConfig);
});
ipcMain.handle('create-source-v-1', async (event, request: sourcesTypes.SourcesApiCreateSourceV1Request) => {
    return await sdkWrapper.createSourceV1(request, apiConfig);
});
ipcMain.handle('create-status-change-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateStatusChangeActionRequest) => {
    return await sdkWrapper.createStatusChangeActionNerm(request, apiConfig);
});
ipcMain.handle('create-stream-v-1', async (event, request: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiCreateStreamV1Request) => {
    return await sdkWrapper.createStreamV1(request, apiConfig);
});
ipcMain.handle('create-subscription-v-1', async (event, request: triggersTypes.TriggersApiCreateSubscriptionV1Request) => {
    return await sdkWrapper.createSubscriptionV1(request, apiConfig);
});
ipcMain.handle('create-synced-attribute-nerm', async (event, request: sdk.SyncedAttributesNERMApiCreateSyncedAttributeRequest) => {
    return await sdkWrapper.createSyncedAttributeNerm(request, apiConfig);
});
ipcMain.handle('create-system-role-permission-nerm', async (event, request: sdk.SystemRolePermissionsNERMApiCreateSystemRolePermissionRequest) => {
    return await sdkWrapper.createSystemRolePermissionNerm(request, apiConfig);
});
ipcMain.handle('create-tag-v-1', async (event, request: tagsTypes.TagsApiCreateTagV1Request) => {
    return await sdkWrapper.createTagV1(request, apiConfig);
});
ipcMain.handle('create-transform-v-1', async (event, request: transformsTypes.TransformsApiCreateTransformV1Request) => {
    return await sdkWrapper.createTransformV1(request, apiConfig);
});
ipcMain.handle('create-unassign-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateUnassignActionRequest) => {
    return await sdkWrapper.createUnassignActionNerm(request, apiConfig);
});
ipcMain.handle('create-update-profile-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateUpdateProfileActionRequest) => {
    return await sdkWrapper.createUpdateProfileActionNerm(request, apiConfig);
});
ipcMain.handle('create-update-workflow-nerm', async (event, request: sdk.WorkflowsNERMApiCreateUpdateWorkflowRequest) => {
    return await sdkWrapper.createUpdateWorkflowNerm(request, apiConfig);
});
ipcMain.handle('create-uploaded-configuration-v-1', async (event, request: configurationHubTypes.ConfigurationHubApiCreateUploadedConfigurationV1Request) => {
    return await sdkWrapper.createUploadedConfigurationV1(request, apiConfig);
});
ipcMain.handle('create-username-password-action-nerm', async (event, request: sdk.WorkflowActionsNERMApiCreateUsernamePasswordActionRequest) => {
    return await sdkWrapper.createUsernamePasswordActionNerm(request, apiConfig);
});
ipcMain.handle('create-user-profiles-nerm', async (event, request: sdk.UserProfilesNERMApiCreateUserProfilesRequest) => {
    return await sdkWrapper.createUserProfilesNerm(request, apiConfig);
});
ipcMain.handle('create-verified-from-address-v-1', async (event, request: notificationsTypes.NotificationsApiCreateVerifiedFromAddressV1Request) => {
    return await sdkWrapper.createVerifiedFromAddressV1(request, apiConfig);
});
ipcMain.handle('create-workflow-action-performer-nerm', async (event, request: sdk.WorkflowActionPerformerNERMApiCreateWorkflowActionPerformerRequest) => {
    return await sdkWrapper.createWorkflowActionPerformerNerm(request, apiConfig);
});
ipcMain.handle('create-workflow-external-trigger-v-1', async (event, request: workflowsTypes.WorkflowsApiCreateWorkflowExternalTriggerV1Request) => {
    return await sdkWrapper.createWorkflowExternalTriggerV1(request, apiConfig);
});
ipcMain.handle('create-workflow-page-nerm', async (event, request: sdk.PagesNERMApiCreateWorkflowPageRequest) => {
    return await sdkWrapper.createWorkflowPageNerm(request, apiConfig);
});
ipcMain.handle('create-workflow-v-1', async (event, request: workflowsTypes.WorkflowsApiCreateWorkflowV1Request) => {
    return await sdkWrapper.createWorkflowV1(request, apiConfig);
});
ipcMain.handle('create-workgroup-v-1', async (event, request: governanceGroupsTypes.GovernanceGroupsApiCreateWorkgroupV1Request) => {
    return await sdkWrapper.createWorkgroupV1(request, apiConfig);
});
ipcMain.handle('das-v-1-owners-assign-post', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiDasV1OwnersAssignPostRequest) => {
    return await sdkWrapper.dasV1OwnersAssignPost(request, apiConfig);
});
ipcMain.handle('das-v-1-owners-owner-identity-id-resources-get', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiDasV1OwnersOwnerIdentityIdResourcesGetRequest) => {
    return await sdkWrapper.dasV1OwnersOwnerIdentityIdResourcesGet(request, apiConfig);
});
ipcMain.handle('das-v-1-owners-reelect-post', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiDasV1OwnersReelectPostRequest) => {
    return await sdkWrapper.dasV1OwnersReelectPost(request, apiConfig);
});
ipcMain.handle('das-v-1-owners-resources-resource-id-get', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiDasV1OwnersResourcesResourceIdGetRequest) => {
    return await sdkWrapper.dasV1OwnersResourcesResourceIdGet(request, apiConfig);
});
ipcMain.handle('das-v-1-owners-source-identity-id-reassign-destination-identity-id-post', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiDasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPostRequest) => {
    return await sdkWrapper.dasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPost(request, apiConfig);
});
ipcMain.handle('delegations-get-nerm', async (event, request: sdk.DelegationsNERMApiDelegationsGetRequest = {}) => {
    return await sdkWrapper.delegationsGetNerm(request, apiConfig);
});
ipcMain.handle('delegations-get-nerm-v-2025', async (event, request: sdk.DelegationsNERMV2025ApiDelegationsGetRequest = {}) => {
    return await sdkWrapper.delegationsGetNermV2025(request, apiConfig);
});
ipcMain.handle('delegations-id-delete-nerm', async (event, request: sdk.DelegationsNERMApiDelegationsIdDeleteRequest) => {
    return await sdkWrapper.delegationsIdDeleteNerm(request, apiConfig);
});
ipcMain.handle('delegations-id-delete-nerm-v-2025', async (event, request: sdk.DelegationsNERMV2025ApiDelegationsIdDeleteRequest) => {
    return await sdkWrapper.delegationsIdDeleteNermV2025(request, apiConfig);
});
ipcMain.handle('delegations-id-get-nerm', async (event, request: sdk.DelegationsNERMApiDelegationsIdGetRequest) => {
    return await sdkWrapper.delegationsIdGetNerm(request, apiConfig);
});
ipcMain.handle('delegations-id-get-nerm-v-2025', async (event, request: sdk.DelegationsNERMV2025ApiDelegationsIdGetRequest) => {
    return await sdkWrapper.delegationsIdGetNermV2025(request, apiConfig);
});
ipcMain.handle('delegations-id-patch-nerm', async (event, request: sdk.DelegationsNERMApiDelegationsIdPatchRequest) => {
    return await sdkWrapper.delegationsIdPatchNerm(request, apiConfig);
});
ipcMain.handle('delegations-id-patch-nerm-v-2025', async (event, request: sdk.DelegationsNERMV2025ApiDelegationsIdPatchRequest) => {
    return await sdkWrapper.delegationsIdPatchNermV2025(request, apiConfig);
});
ipcMain.handle('delegations-post-nerm', async (event, request: sdk.DelegationsNERMApiDelegationsPostRequest) => {
    return await sdkWrapper.delegationsPostNerm(request, apiConfig);
});
ipcMain.handle('delegations-post-nerm-v-2025', async (event, request: sdk.DelegationsNERMV2025ApiDelegationsPostRequest) => {
    return await sdkWrapper.delegationsPostNermV2025(request, apiConfig);
});
ipcMain.handle('delete-access-model-metadata-from-entitlement-v-1', async (event, request: entitlementsTypes.EntitlementsApiDeleteAccessModelMetadataFromEntitlementV1Request) => {
    return await sdkWrapper.deleteAccessModelMetadataFromEntitlementV1(request, apiConfig);
});
ipcMain.handle('delete-access-profiles-from-source-app-by-bulk-v-1', async (event, request: appsTypes.AppsApiDeleteAccessProfilesFromSourceAppByBulkV1Request) => {
    return await sdkWrapper.deleteAccessProfilesFromSourceAppByBulkV1(request, apiConfig);
});
ipcMain.handle('delete-access-profiles-in-bulk-v-1', async (event, request: accessProfilesTypes.AccessProfilesApiDeleteAccessProfilesInBulkV1Request) => {
    return await sdkWrapper.deleteAccessProfilesInBulkV1(request, apiConfig);
});
ipcMain.handle('delete-access-profile-v-1', async (event, request: accessProfilesTypes.AccessProfilesApiDeleteAccessProfileV1Request) => {
    return await sdkWrapper.deleteAccessProfileV1(request, apiConfig);
});
ipcMain.handle('delete-account-async-v-1', async (event, request: accountsTypes.AccountsApiDeleteAccountAsyncV1Request) => {
    return await sdkWrapper.deleteAccountAsyncV1(request, apiConfig);
});
ipcMain.handle('delete-account-request-v-1', async (event, request: accountDeletionRequestsTypes.AccountDeletionRequestsApiDeleteAccountRequestV1Request) => {
    return await sdkWrapper.deleteAccountRequestV1(request, apiConfig);
});
ipcMain.handle('delete-accounts-async-v-1', async (event, request: sourcesTypes.SourcesApiDeleteAccountsAsyncV1Request) => {
    return await sdkWrapper.deleteAccountsAsyncV1(request, apiConfig);
});
ipcMain.handle('delete-account-v-1', async (event, request: accountsTypes.AccountsApiDeleteAccountV1Request) => {
    return await sdkWrapper.deleteAccountV1(request, apiConfig);
});
ipcMain.handle('delete-application-v-1', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiDeleteApplicationV1Request) => {
    return await sdkWrapper.deleteApplicationV1(request, apiConfig);
});
ipcMain.handle('delete-approval-config-request-v-1', async (event, request: approvalsTypes.ApprovalsApiDeleteApprovalConfigRequestV1Request) => {
    return await sdkWrapper.deleteApprovalConfigRequestV1(request, apiConfig);
});
ipcMain.handle('delete-attribute-by-id-nerm', async (event, request: sdk.AttributesNERMApiDeleteAttributeByIdRequest) => {
    return await sdkWrapper.deleteAttributeByIdNerm(request, apiConfig);
});
ipcMain.handle('delete-attribute-by-uid-nerm', async (event, request: sdk.AttributesNERMApiDeleteAttributeByUidRequest = {}) => {
    return await sdkWrapper.deleteAttributeByUidNerm(request, apiConfig);
});
ipcMain.handle('delete-attribute-option-by-id-nerm', async (event, request: sdk.AttributeOptionsNERMApiDeleteAttributeOptionByIdRequest) => {
    return await sdkWrapper.deleteAttributeOptionByIdNerm(request, apiConfig);
});
ipcMain.handle('delete-attribute-option-by-uid-nerm', async (event, request: sdk.AttributeOptionsNERMApiDeleteAttributeOptionByUidRequest = {}) => {
    return await sdkWrapper.deleteAttributeOptionByUidNerm(request, apiConfig);
});
ipcMain.handle('delete-backup-v-1', async (event, request: configurationHubTypes.ConfigurationHubApiDeleteBackupV1Request) => {
    return await sdkWrapper.deleteBackupV1(request, apiConfig);
});
ipcMain.handle('delete-branding-v-1', async (event, request: brandingTypes.BrandingApiDeleteBrandingV1Request) => {
    return await sdkWrapper.deleteBrandingV1(request, apiConfig);
});
ipcMain.handle('delete-bulk-dimensions-v-1', async (event, request: dimensionsTypes.DimensionsApiDeleteBulkDimensionsV1Request) => {
    return await sdkWrapper.deleteBulkDimensionsV1(request, apiConfig);
});
ipcMain.handle('delete-bulk-roles-v-1', async (event, request: rolesTypes.RolesApiDeleteBulkRolesV1Request) => {
    return await sdkWrapper.deleteBulkRolesV1(request, apiConfig);
});
ipcMain.handle('delete-campaign-filters-v-1', async (event, request: certificationCampaignFiltersTypes.CertificationCampaignFiltersApiDeleteCampaignFiltersV1Request) => {
    return await sdkWrapper.deleteCampaignFiltersV1(request, apiConfig);
});
ipcMain.handle('delete-campaigns-v-1', async (event, request: certificationCampaignsTypes.CertificationCampaignsApiDeleteCampaignsV1Request) => {
    return await sdkWrapper.deleteCampaignsV1(request, apiConfig);
});
ipcMain.handle('delete-campaign-template-schedule-v-1', async (event, request: certificationCampaignsTypes.CertificationCampaignsApiDeleteCampaignTemplateScheduleV1Request) => {
    return await sdkWrapper.deleteCampaignTemplateScheduleV1(request, apiConfig);
});
ipcMain.handle('delete-campaign-template-v-1', async (event, request: certificationCampaignsTypes.CertificationCampaignsApiDeleteCampaignTemplateV1Request) => {
    return await sdkWrapper.deleteCampaignTemplateV1(request, apiConfig);
});
ipcMain.handle('delete-classify-machine-account-from-source-v-1', async (event, request: classifySourceTypes.ClassifySourceApiDeleteClassifyMachineAccountFromSourceV1Request) => {
    return await sdkWrapper.deleteClassifyMachineAccountFromSourceV1(request, apiConfig);
});
ipcMain.handle('delete-connector-customizer-v-1', async (event, request: connectorCustomizersTypes.ConnectorCustomizersApiDeleteConnectorCustomizerV1Request) => {
    return await sdkWrapper.deleteConnectorCustomizerV1(request, apiConfig);
});
ipcMain.handle('delete-connector-rule-v-1', async (event, request: connectorRuleManagementTypes.ConnectorRuleManagementApiDeleteConnectorRuleV1Request) => {
    return await sdkWrapper.deleteConnectorRuleV1(request, apiConfig);
});
ipcMain.handle('delete-custom-connector-v-1', async (event, request: connectorsTypes.ConnectorsApiDeleteCustomConnectorV1Request) => {
    return await sdkWrapper.deleteCustomConnectorV1(request, apiConfig);
});
ipcMain.handle('delete-custom-password-instructions-v-1', async (event, request: customPasswordInstructionsTypes.CustomPasswordInstructionsApiDeleteCustomPasswordInstructionsV1Request) => {
    return await sdkWrapper.deleteCustomPasswordInstructionsV1(request, apiConfig);
});
ipcMain.handle('delete-custom-privilege-criteria-v-1', async (event, request: privilegeCriteriaTypes.PrivilegeCriteriaApiDeleteCustomPrivilegeCriteriaV1Request) => {
    return await sdkWrapper.deleteCustomPrivilegeCriteriaV1(request, apiConfig);
});
ipcMain.handle('delete-data-segment-v-1', async (event, request: dataSegmentationTypes.DataSegmentationApiDeleteDataSegmentV1Request) => {
    return await sdkWrapper.deleteDataSegmentV1(request, apiConfig);
});
ipcMain.handle('delete-dimension-v-1', async (event, request: dimensionsTypes.DimensionsApiDeleteDimensionV1Request) => {
    return await sdkWrapper.deleteDimensionV1(request, apiConfig);
});
ipcMain.handle('delete-draft-v-1', async (event, request: configurationHubTypes.ConfigurationHubApiDeleteDraftV1Request) => {
    return await sdkWrapper.deleteDraftV1(request, apiConfig);
});
ipcMain.handle('delete-form-attribute-by-id-nerm', async (event, request: sdk.FormAttributesNERMApiDeleteFormAttributeByIdRequest) => {
    return await sdkWrapper.deleteFormAttributeByIdNerm(request, apiConfig);
});
ipcMain.handle('delete-form-attribute-by-uid-nerm', async (event, request: sdk.FormAttributesNERMApiDeleteFormAttributeByUidRequest = {}) => {
    return await sdkWrapper.deleteFormAttributeByUidNerm(request, apiConfig);
});
ipcMain.handle('delete-form-by-id-nerm', async (event, request: sdk.FormsNERMApiDeleteFormByIdRequest) => {
    return await sdkWrapper.deleteFormByIdNerm(request, apiConfig);
});
ipcMain.handle('delete-form-by-uid-nerm', async (event, request: sdk.FormsNERMApiDeleteFormByUidRequest = {}) => {
    return await sdkWrapper.deleteFormByUidNerm(request, apiConfig);
});
ipcMain.handle('delete-form-definition-v-1', async (event, request: customFormsTypes.CustomFormsApiDeleteFormDefinitionV1Request) => {
    return await sdkWrapper.deleteFormDefinitionV1(request, apiConfig);
});
ipcMain.handle('delete-icon-v-1', async (event, request: iconsTypes.IconsApiDeleteIconV1Request) => {
    return await sdkWrapper.deleteIconV1(request, apiConfig);
});
ipcMain.handle('delete-identity-attributes-in-bulk-v-1', async (event, request: identityAttributesTypes.IdentityAttributesApiDeleteIdentityAttributesInBulkV1Request) => {
    return await sdkWrapper.deleteIdentityAttributesInBulkV1(request, apiConfig);
});
ipcMain.handle('delete-identity-attribute-v-1', async (event, request: identityAttributesTypes.IdentityAttributesApiDeleteIdentityAttributeV1Request) => {
    return await sdkWrapper.deleteIdentityAttributeV1(request, apiConfig);
});
ipcMain.handle('delete-identity-collector-v-1', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiDeleteIdentityCollectorV1Request) => {
    return await sdkWrapper.deleteIdentityCollectorV1(request, apiConfig);
});
ipcMain.handle('delete-identity-profiles-v-1', async (event, request: identityProfilesTypes.IdentityProfilesApiDeleteIdentityProfilesV1Request) => {
    return await sdkWrapper.deleteIdentityProfilesV1(request, apiConfig);
});
ipcMain.handle('delete-identity-profile-v-1', async (event, request: identityProfilesTypes.IdentityProfilesApiDeleteIdentityProfileV1Request) => {
    return await sdkWrapper.deleteIdentityProfileV1(request, apiConfig);
});
ipcMain.handle('delete-identity-v-1', async (event, request: identitiesTypes.IdentitiesApiDeleteIdentityV1Request) => {
    return await sdkWrapper.deleteIdentityV1(request, apiConfig);
});
ipcMain.handle('delete-launcher-v-1', async (event, request: launchersTypes.LaunchersApiDeleteLauncherV1Request) => {
    return await sdkWrapper.deleteLauncherV1(request, apiConfig);
});
ipcMain.handle('delete-lifecycle-state-v-1', async (event, request: lifecycleStatesTypes.LifecycleStatesApiDeleteLifecycleStateV1Request) => {
    return await sdkWrapper.deleteLifecycleStateV1(request, apiConfig);
});
ipcMain.handle('delete-machine-account-mappings-v-1', async (event, request: machineAccountMappingsTypes.MachineAccountMappingsApiDeleteMachineAccountMappingsV1Request) => {
    return await sdkWrapper.deleteMachineAccountMappingsV1(request, apiConfig);
});
ipcMain.handle('delete-machine-account-subtype-by-technical-name-v-1', async (event, request: machineAccountsTypes.MachineAccountsApiDeleteMachineAccountSubtypeByTechnicalNameV1Request) => {
    return await sdkWrapper.deleteMachineAccountSubtypeByTechnicalNameV1(request, apiConfig);
});
ipcMain.handle('delete-machine-account-subtype-v-1', async (event, request: machineAccountSubtypesTypes.MachineAccountSubtypesApiDeleteMachineAccountSubtypeV1Request) => {
    return await sdkWrapper.deleteMachineAccountSubtypeV1(request, apiConfig);
});
ipcMain.handle('delete-machine-classification-config-v-1', async (event, request: machineClassificationConfigTypes.MachineClassificationConfigApiDeleteMachineClassificationConfigV1Request) => {
    return await sdkWrapper.deleteMachineClassificationConfigV1(request, apiConfig);
});
ipcMain.handle('delete-machine-identity-v-1', async (event, request: machineIdentitiesTypes.MachineIdentitiesApiDeleteMachineIdentityV1Request) => {
    return await sdkWrapper.deleteMachineIdentityV1(request, apiConfig);
});
ipcMain.handle('delete-managed-client-v-1', async (event, request: managedClientsTypes.ManagedClientsApiDeleteManagedClientV1Request) => {
    return await sdkWrapper.deleteManagedClientV1(request, apiConfig);
});
ipcMain.handle('delete-managed-cluster-type-v-1', async (event, request: managedClusterTypesTypes.ManagedClusterTypesApiDeleteManagedClusterTypeV1Request) => {
    return await sdkWrapper.deleteManagedClusterTypeV1(request, apiConfig);
});
ipcMain.handle('delete-managed-cluster-v-1', async (event, request: managedClustersTypes.ManagedClustersApiDeleteManagedClusterV1Request) => {
    return await sdkWrapper.deleteManagedClusterV1(request, apiConfig);
});
ipcMain.handle('delete-master-record-nerm', async (event, request: sdk.ConsolidationNERMApiDeleteMasterRecordRequest) => {
    return await sdkWrapper.deleteMasterRecordNerm(request, apiConfig);
});
ipcMain.handle('delete-metadata-from-role-by-key-and-value-v-1', async (event, request: rolesTypes.RolesApiDeleteMetadataFromRoleByKeyAndValueV1Request) => {
    return await sdkWrapper.deleteMetadataFromRoleByKeyAndValueV1(request, apiConfig);
});
ipcMain.handle('delete-multi-host-sources-v-1', async (event, request: multiHostIntegrationTypes.MultiHostIntegrationApiDeleteMultiHostSourcesV1Request) => {
    return await sdkWrapper.deleteMultiHostSourcesV1(request, apiConfig);
});
ipcMain.handle('delete-multi-host-v-1', async (event, request: multiHostIntegrationTypes.MultiHostIntegrationApiDeleteMultiHostV1Request) => {
    return await sdkWrapper.deleteMultiHostV1(request, apiConfig);
});
ipcMain.handle('delete-native-change-detection-config-v-1', async (event, request: sourcesTypes.SourcesApiDeleteNativeChangeDetectionConfigV1Request) => {
    return await sdkWrapper.deleteNativeChangeDetectionConfigV1(request, apiConfig);
});
ipcMain.handle('delete-non-employee-records-in-bulk-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeRecordsInBulkV1Request) => {
    return await sdkWrapper.deleteNonEmployeeRecordsInBulkV1(request, apiConfig);
});
ipcMain.handle('delete-non-employee-record-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeRecordV1Request) => {
    return await sdkWrapper.deleteNonEmployeeRecordV1(request, apiConfig);
});
ipcMain.handle('delete-non-employee-request-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeRequestV1Request) => {
    return await sdkWrapper.deleteNonEmployeeRequestV1(request, apiConfig);
});
ipcMain.handle('delete-non-employee-schema-attribute-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeSchemaAttributeV1Request) => {
    return await sdkWrapper.deleteNonEmployeeSchemaAttributeV1(request, apiConfig);
});
ipcMain.handle('delete-non-employee-source-schema-attributes-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeSourceSchemaAttributesV1Request) => {
    return await sdkWrapper.deleteNonEmployeeSourceSchemaAttributesV1(request, apiConfig);
});
ipcMain.handle('delete-non-employee-source-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiDeleteNonEmployeeSourceV1Request) => {
    return await sdkWrapper.deleteNonEmployeeSourceV1(request, apiConfig);
});
ipcMain.handle('delete-notification-templates-in-bulk-v-1', async (event, request: notificationsTypes.NotificationsApiDeleteNotificationTemplatesInBulkV1Request) => {
    return await sdkWrapper.deleteNotificationTemplatesInBulkV1(request, apiConfig);
});
ipcMain.handle('delete-oauth-client-v-1', async (event, request: oauthClientsTypes.OAuthClientsApiDeleteOauthClientV1Request) => {
    return await sdkWrapper.deleteOauthClientV1(request, apiConfig);
});
ipcMain.handle('delete-object-mapping-v-1', async (event, request: configurationHubTypes.ConfigurationHubApiDeleteObjectMappingV1Request) => {
    return await sdkWrapper.deleteObjectMappingV1(request, apiConfig);
});
ipcMain.handle('delete-page-content-by-id-nerm', async (event, request: sdk.PageContentsNERMApiDeletePageContentByIdRequest) => {
    return await sdkWrapper.deletePageContentByIdNerm(request, apiConfig);
});
ipcMain.handle('delete-page-content-by-uid-nerm', async (event, request: sdk.PageContentsNERMApiDeletePageContentByUidRequest) => {
    return await sdkWrapper.deletePageContentByUidNerm(request, apiConfig);
});
ipcMain.handle('delete-page-content-translation-by-id-nerm', async (event, request: sdk.PageContentTranslationsNERMApiDeletePageContentTranslationByIdRequest) => {
    return await sdkWrapper.deletePageContentTranslationByIdNerm(request, apiConfig);
});
ipcMain.handle('delete-page-content-translation-by-uid-nerm', async (event, request: sdk.PageContentTranslationsNERMApiDeletePageContentTranslationByUidRequest) => {
    return await sdkWrapper.deletePageContentTranslationByUidNerm(request, apiConfig);
});
ipcMain.handle('delete-page-element-by-id-nerm', async (event, request: sdk.PageElementsNERMApiDeletePageElementByIdRequest) => {
    return await sdkWrapper.deletePageElementByIdNerm(request, apiConfig);
});
ipcMain.handle('delete-page-element-by-uid-nerm', async (event, request: sdk.PageElementsNERMApiDeletePageElementByUidRequest = {}) => {
    return await sdkWrapper.deletePageElementByUidNerm(request, apiConfig);
});
ipcMain.handle('delete-parameter-v-1', async (event, request: parameterStorageTypes.ParameterStorageApiDeleteParameterV1Request) => {
    return await sdkWrapper.deleteParameterV1(request, apiConfig);
});
ipcMain.handle('delete-password-policy-v-1', async (event, request: passwordPoliciesTypes.PasswordPoliciesApiDeletePasswordPolicyV1Request) => {
    return await sdkWrapper.deletePasswordPolicyV1(request, apiConfig);
});
ipcMain.handle('delete-password-sync-group-v-1', async (event, request: passwordSyncGroupsTypes.PasswordSyncGroupsApiDeletePasswordSyncGroupV1Request) => {
    return await sdkWrapper.deletePasswordSyncGroupV1(request, apiConfig);
});
ipcMain.handle('delete-personal-access-token-v-1', async (event, request: personalAccessTokensTypes.PersonalAccessTokensApiDeletePersonalAccessTokenV1Request) => {
    return await sdkWrapper.deletePersonalAccessTokenV1(request, apiConfig);
});
ipcMain.handle('delete-profile-by-id-nerm', async (event, request: sdk.ProfilesNERMApiDeleteProfileByIdRequest) => {
    return await sdkWrapper.deleteProfileByIdNerm(request, apiConfig);
});
ipcMain.handle('delete-profiles-nerm', async (event, request: sdk.ProfilesNERMApiDeleteProfilesRequest) => {
    return await sdkWrapper.deleteProfilesNerm(request, apiConfig);
});
ipcMain.handle('delete-profile-type-by-id-nerm', async (event, request: sdk.ProfileTypesNERMApiDeleteProfileTypeByIdRequest) => {
    return await sdkWrapper.deleteProfileTypeByIdNerm(request, apiConfig);
});
ipcMain.handle('delete-profile-type-by-uid-nerm', async (event, request: sdk.ProfileTypesNERMApiDeleteProfileTypeByUidRequest = {}) => {
    return await sdkWrapper.deleteProfileTypeByUidNerm(request, apiConfig);
});
ipcMain.handle('delete-provisioning-policy-v-1', async (event, request: sourcesTypes.SourcesApiDeleteProvisioningPolicyV1Request) => {
    return await sdkWrapper.deleteProvisioningPolicyV1(request, apiConfig);
});
ipcMain.handle('delete-provisioning-policy-v-2', async (event, request: sourcesTypes.SourcesApiDeleteProvisioningPolicyV2Request) => {
    return await sdkWrapper.deleteProvisioningPolicyV2(request, apiConfig);
});
ipcMain.handle('delete-reassignment-configuration-v-1', async (event, request: workReassignmentTypes.WorkReassignmentApiDeleteReassignmentConfigurationV1Request) => {
    return await sdkWrapper.deleteReassignmentConfigurationV1(request, apiConfig);
});
ipcMain.handle('delete-role-profile-nerm', async (event, request: sdk.RoleProfilesNERMApiDeleteRoleProfileRequest) => {
    return await sdkWrapper.deleteRoleProfileNerm(request, apiConfig);
});
ipcMain.handle('delete-role-v-1', async (event, request: rolesTypes.RolesApiDeleteRoleV1Request) => {
    return await sdkWrapper.deleteRoleV1(request, apiConfig);
});
ipcMain.handle('delete-saved-search-v-1', async (event, request: savedSearchTypes.SavedSearchApiDeleteSavedSearchV1Request) => {
    return await sdkWrapper.deleteSavedSearchV1(request, apiConfig);
});
ipcMain.handle('delete-scheduled-action-v-1', async (event, request: configurationHubTypes.ConfigurationHubApiDeleteScheduledActionV1Request) => {
    return await sdkWrapper.deleteScheduledActionV1(request, apiConfig);
});
ipcMain.handle('delete-scheduled-search-v-1', async (event, request: scheduledSearchTypes.ScheduledSearchApiDeleteScheduledSearchV1Request) => {
    return await sdkWrapper.deleteScheduledSearchV1(request, apiConfig);
});
ipcMain.handle('delete-schedule-v-1', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiDeleteScheduleV1Request) => {
    return await sdkWrapper.deleteScheduleV1(request, apiConfig);
});
ipcMain.handle('delete-search-attribute-config-v-1', async (event, request: searchAttributeConfigurationTypes.SearchAttributeConfigurationApiDeleteSearchAttributeConfigV1Request) => {
    return await sdkWrapper.deleteSearchAttributeConfigV1(request, apiConfig);
});
ipcMain.handle('delete-segment-v-1', async (event, request: segmentsTypes.SegmentsApiDeleteSegmentV1Request) => {
    return await sdkWrapper.deleteSegmentV1(request, apiConfig);
});
ipcMain.handle('delete-service-desk-integration-v-1', async (event, request: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiDeleteServiceDeskIntegrationV1Request) => {
    return await sdkWrapper.deleteServiceDeskIntegrationV1(request, apiConfig);
});
ipcMain.handle('delete-simintegration-v-1', async (event, request: simIntegrationsTypes.SIMIntegrationsApiDeleteSIMIntegrationV1Request) => {
    return await sdkWrapper.deleteSIMIntegrationV1(request, apiConfig);
});
ipcMain.handle('delete-sod-policy-schedule-v-1', async (event, request: sodPoliciesTypes.SODPoliciesApiDeleteSodPolicyScheduleV1Request) => {
    return await sdkWrapper.deleteSodPolicyScheduleV1(request, apiConfig);
});
ipcMain.handle('delete-sod-policy-v-1', async (event, request: sodPoliciesTypes.SODPoliciesApiDeleteSodPolicyV1Request) => {
    return await sdkWrapper.deleteSodPolicyV1(request, apiConfig);
});
ipcMain.handle('delete-source-app-v-1', async (event, request: appsTypes.AppsApiDeleteSourceAppV1Request) => {
    return await sdkWrapper.deleteSourceAppV1(request, apiConfig);
});
ipcMain.handle('delete-source-schedule-v-1', async (event, request: sourcesTypes.SourcesApiDeleteSourceScheduleV1Request) => {
    return await sdkWrapper.deleteSourceScheduleV1(request, apiConfig);
});
ipcMain.handle('delete-source-schema-v-1', async (event, request: sourcesTypes.SourcesApiDeleteSourceSchemaV1Request) => {
    return await sdkWrapper.deleteSourceSchemaV1(request, apiConfig);
});
ipcMain.handle('delete-source-v-1', async (event, request: sourcesTypes.SourcesApiDeleteSourceV1Request) => {
    return await sdkWrapper.deleteSourceV1(request, apiConfig);
});
ipcMain.handle('delete-stream-v-1', async (event, request: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiDeleteStreamV1Request) => {
    return await sdkWrapper.deleteStreamV1(request, apiConfig);
});
ipcMain.handle('delete-subscription-v-1', async (event, request: triggersTypes.TriggersApiDeleteSubscriptionV1Request) => {
    return await sdkWrapper.deleteSubscriptionV1(request, apiConfig);
});
ipcMain.handle('delete-synced-attribute-nerm', async (event, request: sdk.SyncedAttributesNERMApiDeleteSyncedAttributeRequest = {}) => {
    return await sdkWrapper.deleteSyncedAttributeNerm(request, apiConfig);
});
ipcMain.handle('delete-tag-by-id-v-1', async (event, request: tagsTypes.TagsApiDeleteTagByIdV1Request) => {
    return await sdkWrapper.deleteTagByIdV1(request, apiConfig);
});
ipcMain.handle('delete-tagged-object-v-1', async (event, request: taggedObjectsTypes.TaggedObjectsApiDeleteTaggedObjectV1Request) => {
    return await sdkWrapper.deleteTaggedObjectV1(request, apiConfig);
});
ipcMain.handle('delete-tags-to-many-object-v-1', async (event, request: taggedObjectsTypes.TaggedObjectsApiDeleteTagsToManyObjectV1Request) => {
    return await sdkWrapper.deleteTagsToManyObjectV1(request, apiConfig);
});
ipcMain.handle('delete-task-v-1', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiDeleteTaskV1Request) => {
    return await sdkWrapper.deleteTaskV1(request, apiConfig);
});
ipcMain.handle('delete-transform-v-1', async (event, request: transformsTypes.TransformsApiDeleteTransformV1Request) => {
    return await sdkWrapper.deleteTransformV1(request, apiConfig);
});
ipcMain.handle('delete-uploaded-configuration-v-1', async (event, request: configurationHubTypes.ConfigurationHubApiDeleteUploadedConfigurationV1Request) => {
    return await sdkWrapper.deleteUploadedConfigurationV1(request, apiConfig);
});
ipcMain.handle('delete-user-level-v-1', async (event, request: customUserLevelsTypes.CustomUserLevelsApiDeleteUserLevelV1Request) => {
    return await sdkWrapper.deleteUserLevelV1(request, apiConfig);
});
ipcMain.handle('delete-user-nerm', async (event, request: sdk.UsersNERMApiDeleteUserRequest) => {
    return await sdkWrapper.deleteUserNerm(request, apiConfig);
});
ipcMain.handle('delete-user-profile-nerm', async (event, request: sdk.UserProfilesNERMApiDeleteUserProfileRequest) => {
    return await sdkWrapper.deleteUserProfileNerm(request, apiConfig);
});
ipcMain.handle('delete-user-profiles-nerm', async (event, request: sdk.UserProfilesNERMApiDeleteUserProfilesRequest) => {
    return await sdkWrapper.deleteUserProfilesNerm(request, apiConfig);
});
ipcMain.handle('delete-user-role-nerm', async (event, request: sdk.UserRolesNERMApiDeleteUserRoleRequest) => {
    return await sdkWrapper.deleteUserRoleNerm(request, apiConfig);
});
ipcMain.handle('delete-verified-from-address-v-1', async (event, request: notificationsTypes.NotificationsApiDeleteVerifiedFromAddressV1Request) => {
    return await sdkWrapper.deleteVerifiedFromAddressV1(request, apiConfig);
});
ipcMain.handle('delete-workflow-v-1', async (event, request: workflowsTypes.WorkflowsApiDeleteWorkflowV1Request) => {
    return await sdkWrapper.deleteWorkflowV1(request, apiConfig);
});
ipcMain.handle('delete-workgroup-members-v-1', async (event, request: governanceGroupsTypes.GovernanceGroupsApiDeleteWorkgroupMembersV1Request) => {
    return await sdkWrapper.deleteWorkgroupMembersV1(request, apiConfig);
});
ipcMain.handle('delete-workgroups-in-bulk-v-1', async (event, request: governanceGroupsTypes.GovernanceGroupsApiDeleteWorkgroupsInBulkV1Request) => {
    return await sdkWrapper.deleteWorkgroupsInBulkV1(request, apiConfig);
});
ipcMain.handle('delete-workgroup-v-1', async (event, request: governanceGroupsTypes.GovernanceGroupsApiDeleteWorkgroupV1Request) => {
    return await sdkWrapper.deleteWorkgroupV1(request, apiConfig);
});
ipcMain.handle('disable-account-for-identity-v-1', async (event, request: accountsTypes.AccountsApiDisableAccountForIdentityV1Request) => {
    return await sdkWrapper.disableAccountForIdentityV1(request, apiConfig);
});
ipcMain.handle('disable-accounts-for-identities-v-1', async (event, request: accountsTypes.AccountsApiDisableAccountsForIdentitiesV1Request) => {
    return await sdkWrapper.disableAccountsForIdentitiesV1(request, apiConfig);
});
ipcMain.handle('disable-account-v-1', async (event, request: accountsTypes.AccountsApiDisableAccountV1Request) => {
    return await sdkWrapper.disableAccountV1(request, apiConfig);
});
ipcMain.handle('download-role-insights-entitlements-changes-v-1', async (event, request: roleInsightsTypes.RoleInsightsApiDownloadRoleInsightsEntitlementsChangesV1Request) => {
    return await sdkWrapper.downloadRoleInsightsEntitlementsChangesV1(request, apiConfig);
});
ipcMain.handle('download-role-mining-potential-role-zip-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiDownloadRoleMiningPotentialRoleZipV1Request) => {
    return await sdkWrapper.downloadRoleMiningPotentialRoleZipV1(request, apiConfig);
});
ipcMain.handle('enable-account-for-identity-v-1', async (event, request: accountsTypes.AccountsApiEnableAccountForIdentityV1Request) => {
    return await sdkWrapper.enableAccountForIdentityV1(request, apiConfig);
});
ipcMain.handle('enable-accounts-for-identities-v-1', async (event, request: accountsTypes.AccountsApiEnableAccountsForIdentitiesV1Request) => {
    return await sdkWrapper.enableAccountsForIdentitiesV1(request, apiConfig);
});
ipcMain.handle('enable-account-v-1', async (event, request: accountsTypes.AccountsApiEnableAccountV1Request) => {
    return await sdkWrapper.enableAccountV1(request, apiConfig);
});
ipcMain.handle('execute-saved-search-v-1', async (event, request: savedSearchTypes.SavedSearchApiExecuteSavedSearchV1Request) => {
    return await sdkWrapper.executeSavedSearchV1(request, apiConfig);
});
ipcMain.handle('export-form-definitions-by-tenant-v-1', async (event, request: customFormsTypes.CustomFormsApiExportFormDefinitionsByTenantV1Request = {}) => {
    return await sdkWrapper.exportFormDefinitionsByTenantV1(request, apiConfig);
});
ipcMain.handle('export-identity-profiles-v-1', async (event, request: identityProfilesTypes.IdentityProfilesApiExportIdentityProfilesV1Request = {}) => {
    return await sdkWrapper.exportIdentityProfilesV1(request, apiConfig);
});
ipcMain.handle('export-non-employee-records-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiExportNonEmployeeRecordsV1Request) => {
    return await sdkWrapper.exportNonEmployeeRecordsV1(request, apiConfig);
});
ipcMain.handle('export-non-employee-source-schema-template-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiExportNonEmployeeSourceSchemaTemplateV1Request) => {
    return await sdkWrapper.exportNonEmployeeSourceSchemaTemplateV1(request, apiConfig);
});
ipcMain.handle('export-outliers-zip-v-1', async (event, request: iaiOutliersTypes.IAIOutliersApiExportOutliersZipV1Request = {}) => {
    return await sdkWrapper.exportOutliersZipV1(request, apiConfig);
});
ipcMain.handle('export-role-mining-potential-role-async-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiExportRoleMiningPotentialRoleAsyncV1Request) => {
    return await sdkWrapper.exportRoleMiningPotentialRoleAsyncV1(request, apiConfig);
});
ipcMain.handle('export-role-mining-potential-role-status-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiExportRoleMiningPotentialRoleStatusV1Request) => {
    return await sdkWrapper.exportRoleMiningPotentialRoleStatusV1(request, apiConfig);
});
ipcMain.handle('export-role-mining-potential-role-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiExportRoleMiningPotentialRoleV1Request) => {
    return await sdkWrapper.exportRoleMiningPotentialRoleV1(request, apiConfig);
});
ipcMain.handle('export-sp-config-v-1', async (event, request: spConfigTypes.SPConfigApiExportSpConfigV1Request) => {
    return await sdkWrapper.exportSpConfigV1(request, apiConfig);
});
ipcMain.handle('forward-access-request-v-1', async (event, request: accessRequestApprovalsTypes.AccessRequestApprovalsApiForwardAccessRequestV1Request) => {
    return await sdkWrapper.forwardAccessRequestV1(request, apiConfig);
});
ipcMain.handle('forward-work-item-v-1', async (event, request: workItemsTypes.WorkItemsApiForwardWorkItemV1Request) => {
    return await sdkWrapper.forwardWorkItemV1(request, apiConfig);
});
ipcMain.handle('generate-identity-preview-v-1', async (event, request: identityProfilesTypes.IdentityProfilesApiGenerateIdentityPreviewV1Request) => {
    return await sdkWrapper.generateIdentityPreviewV1(request, apiConfig);
});
ipcMain.handle('get-access-model-metadata-attribute-v-1', async (event, request: accessModelMetadataTypes.AccessModelMetadataApiGetAccessModelMetadataAttributeV1Request) => {
    return await sdkWrapper.getAccessModelMetadataAttributeV1(request, apiConfig);
});
ipcMain.handle('get-access-model-metadata-attribute-value-v-1', async (event, request: accessModelMetadataTypes.AccessModelMetadataApiGetAccessModelMetadataAttributeValueV1Request) => {
    return await sdkWrapper.getAccessModelMetadataAttributeValueV1(request, apiConfig);
});
ipcMain.handle('get-access-profile-entitlements-v-1', async (event, request: accessProfilesTypes.AccessProfilesApiGetAccessProfileEntitlementsV1Request) => {
    return await sdkWrapper.getAccessProfileEntitlementsV1(request, apiConfig);
});
ipcMain.handle('get-access-profile-v-1', async (event, request: accessProfilesTypes.AccessProfilesApiGetAccessProfileV1Request) => {
    return await sdkWrapper.getAccessProfileV1(request, apiConfig);
});
ipcMain.handle('get-access-request-approval-summary-v-1', async (event, request: accessRequestApprovalsTypes.AccessRequestApprovalsApiGetAccessRequestApprovalSummaryV1Request = {}) => {
    return await sdkWrapper.getAccessRequestApprovalSummaryV1(request, apiConfig);
});
ipcMain.handle('get-access-request-config-v-1', async (event) => {
    return await sdkWrapper.getAccessRequestConfigV1(apiConfig);
});
ipcMain.handle('get-access-request-config-v-2', async (event) => {
    return await sdkWrapper.getAccessRequestConfigV2(apiConfig);
});
ipcMain.handle('get-access-request-identity-metrics-v-1', async (event, request: accessRequestIdentityMetricsTypes.AccessRequestIdentityMetricsApiGetAccessRequestIdentityMetricsV1Request) => {
    return await sdkWrapper.getAccessRequestIdentityMetricsV1(request, apiConfig);
});
ipcMain.handle('get-access-request-recommendations-config-v-1', async (event, request: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiGetAccessRequestRecommendationsConfigV1Request = {}) => {
    return await sdkWrapper.getAccessRequestRecommendationsConfigV1(request, apiConfig);
});
ipcMain.handle('get-access-request-recommendations-ignored-items-v-1', async (event, request: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiGetAccessRequestRecommendationsIgnoredItemsV1Request = {}) => {
    return await sdkWrapper.getAccessRequestRecommendationsIgnoredItemsV1(request, apiConfig);
});
ipcMain.handle('get-access-request-recommendations-requested-items-v-1', async (event, request: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiGetAccessRequestRecommendationsRequestedItemsV1Request = {}) => {
    return await sdkWrapper.getAccessRequestRecommendationsRequestedItemsV1(request, apiConfig);
});
ipcMain.handle('get-access-request-recommendations-v-1', async (event, request: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiGetAccessRequestRecommendationsV1Request = {}) => {
    return await sdkWrapper.getAccessRequestRecommendationsV1(request, apiConfig);
});
ipcMain.handle('get-access-request-recommendations-viewed-items-v-1', async (event, request: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiGetAccessRequestRecommendationsViewedItemsV1Request = {}) => {
    return await sdkWrapper.getAccessRequestRecommendationsViewedItemsV1(request, apiConfig);
});
ipcMain.handle('get-account-activity-v-1', async (event, request: accountActivitiesTypes.AccountActivitiesApiGetAccountActivityV1Request) => {
    return await sdkWrapper.getAccountActivityV1(request, apiConfig);
});
ipcMain.handle('get-account-aggregation-status-v-1', async (event, request: accountAggregationsTypes.AccountAggregationsApiGetAccountAggregationStatusV1Request) => {
    return await sdkWrapper.getAccountAggregationStatusV1(request, apiConfig);
});
ipcMain.handle('get-account-delete-approval-config-v-1', async (event, request: sourcesTypes.SourcesApiGetAccountDeleteApprovalConfigV1Request) => {
    return await sdkWrapper.getAccountDeleteApprovalConfigV1(request, apiConfig);
});
ipcMain.handle('get-account-deletion-requests-v-1', async (event, request: accountDeletionRequestsTypes.AccountDeletionRequestsApiGetAccountDeletionRequestsV1Request = {}) => {
    return await sdkWrapper.getAccountDeletionRequestsV1(request, apiConfig);
});
ipcMain.handle('get-account-entitlements-v-1', async (event, request: accountsTypes.AccountsApiGetAccountEntitlementsV1Request) => {
    return await sdkWrapper.getAccountEntitlementsV1(request, apiConfig);
});
ipcMain.handle('get-accounts-schema-v-1', async (event, request: sourcesTypes.SourcesApiGetAccountsSchemaV1Request) => {
    return await sdkWrapper.getAccountsSchemaV1(request, apiConfig);
});
ipcMain.handle('get-account-v-1', async (event, request: accountsTypes.AccountsApiGetAccountV1Request) => {
    return await sdkWrapper.getAccountV1(request, apiConfig);
});
ipcMain.handle('get-acct-aggregation-groups-v-1', async (event, request: multiHostIntegrationTypes.MultiHostIntegrationApiGetAcctAggregationGroupsV1Request) => {
    return await sdkWrapper.getAcctAggregationGroupsV1(request, apiConfig);
});
ipcMain.handle('get-active-campaigns-v-1', async (event, request: certificationCampaignsTypes.CertificationCampaignsApiGetActiveCampaignsV1Request = {}) => {
    return await sdkWrapper.getActiveCampaignsV1(request, apiConfig);
});
ipcMain.handle('get-advanced-search-nerm', async (event) => {
    return await sdkWrapper.getAdvancedSearchNerm(apiConfig);
});
ipcMain.handle('get-all-potential-role-summaries-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiGetAllPotentialRoleSummariesV1Request = {}) => {
    return await sdkWrapper.getAllPotentialRoleSummariesV1(request, apiConfig);
});
ipcMain.handle('get-applications-v-1', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiGetApplicationsV1Request = {}) => {
    return await sdkWrapper.getApplicationsV1(request, apiConfig);
});
ipcMain.handle('get-application-v-1', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiGetApplicationV1Request) => {
    return await sdkWrapper.getApplicationV1(request, apiConfig);
});
ipcMain.handle('get-approvals-config-v-1', async (event, request: approvalsTypes.ApprovalsApiGetApprovalsConfigV1Request) => {
    return await sdkWrapper.getApprovalsConfigV1(request, apiConfig);
});
ipcMain.handle('get-approvals-v-1', async (event, request: approvalsTypes.ApprovalsApiGetApprovalsV1Request = {}) => {
    return await sdkWrapper.getApprovalsV1(request, apiConfig);
});
ipcMain.handle('get-approval-v-1', async (event, request: approvalsTypes.ApprovalsApiGetApprovalV1Request) => {
    return await sdkWrapper.getApprovalV1(request, apiConfig);
});
ipcMain.handle('get-attestation-document-v-1', async (event, request: parameterStorageTypes.ParameterStorageApiGetAttestationDocumentV1Request) => {
    return await sdkWrapper.getAttestationDocumentV1(request, apiConfig);
});
ipcMain.handle('get-attribute-by-id-nerm', async (event, request: sdk.AttributesNERMApiGetAttributeByIdRequest) => {
    return await sdkWrapper.getAttributeByIdNerm(request, apiConfig);
});
ipcMain.handle('get-attribute-by-uid-nerm', async (event, request: sdk.AttributesNERMApiGetAttributeByUidRequest = {}) => {
    return await sdkWrapper.getAttributeByUidNerm(request, apiConfig);
});
ipcMain.handle('get-attribute-option-by-id-nerm', async (event, request: sdk.AttributeOptionsNERMApiGetAttributeOptionByIdRequest) => {
    return await sdkWrapper.getAttributeOptionByIdNerm(request, apiConfig);
});
ipcMain.handle('get-attribute-option-by-uid-nerm', async (event, request: sdk.AttributeOptionsNERMApiGetAttributeOptionByUidRequest = {}) => {
    return await sdkWrapper.getAttributeOptionByUidNerm(request, apiConfig);
});
ipcMain.handle('get-attribute-options-nerm', async (event, request: sdk.AttributeOptionsNERMApiGetAttributeOptionsRequest = {}) => {
    return await sdkWrapper.getAttributeOptionsNerm(request, apiConfig);
});
ipcMain.handle('get-attributes-nerm', async (event, request: sdk.AttributesNERMApiGetAttributesRequest = {}) => {
    return await sdkWrapper.getAttributesNerm(request, apiConfig);
});
ipcMain.handle('get-auth-org-lockout-config-v-1', async (event) => {
    return await sdkWrapper.getAuthOrgLockoutConfigV1(apiConfig);
});
ipcMain.handle('get-auth-org-network-config-v-1', async (event) => {
    return await sdkWrapper.getAuthOrgNetworkConfigV1(apiConfig);
});
ipcMain.handle('get-auth-org-service-provider-config-v-1', async (event) => {
    return await sdkWrapper.getAuthOrgServiceProviderConfigV1(apiConfig);
});
ipcMain.handle('get-auth-org-session-config-v-1', async (event) => {
    return await sdkWrapper.getAuthOrgSessionConfigV1(apiConfig);
});
ipcMain.handle('get-auth-user-v-1', async (event, request: authUsersTypes.AuthUsersApiGetAuthUserV1Request) => {
    return await sdkWrapper.getAuthUserV1(request, apiConfig);
});
ipcMain.handle('get-auto-write-settings-v-1', async (event) => {
    return await sdkWrapper.getAutoWriteSettingsV1(apiConfig);
});
ipcMain.handle('get-branding-list-v-1', async (event) => {
    return await sdkWrapper.getBrandingListV1(apiConfig);
});
ipcMain.handle('get-branding-v-1', async (event, request: brandingTypes.BrandingApiGetBrandingV1Request) => {
    return await sdkWrapper.getBrandingV1(request, apiConfig);
});
ipcMain.handle('get-bulk-update-status-by-id-v-1', async (event, request: rolesTypes.RolesApiGetBulkUpdateStatusByIdV1Request) => {
    return await sdkWrapper.getBulkUpdateStatusByIdV1(request, apiConfig);
});
ipcMain.handle('get-bulk-update-status-v-1', async (event) => {
    return await sdkWrapper.getBulkUpdateStatusV1(apiConfig);
});
ipcMain.handle('get-campaign-filter-by-id-v-1', async (event, request: certificationCampaignFiltersTypes.CertificationCampaignFiltersApiGetCampaignFilterByIdV1Request) => {
    return await sdkWrapper.getCampaignFilterByIdV1(request, apiConfig);
});
ipcMain.handle('get-campaign-reports-config-v-1', async (event) => {
    return await sdkWrapper.getCampaignReportsConfigV1(apiConfig);
});
ipcMain.handle('get-campaign-reports-v-1', async (event, request: certificationCampaignsTypes.CertificationCampaignsApiGetCampaignReportsV1Request) => {
    return await sdkWrapper.getCampaignReportsV1(request, apiConfig);
});
ipcMain.handle('get-campaign-template-schedule-v-1', async (event, request: certificationCampaignsTypes.CertificationCampaignsApiGetCampaignTemplateScheduleV1Request) => {
    return await sdkWrapper.getCampaignTemplateScheduleV1(request, apiConfig);
});
ipcMain.handle('get-campaign-templates-v-1', async (event, request: certificationCampaignsTypes.CertificationCampaignsApiGetCampaignTemplatesV1Request = {}) => {
    return await sdkWrapper.getCampaignTemplatesV1(request, apiConfig);
});
ipcMain.handle('get-campaign-template-v-1', async (event, request: certificationCampaignsTypes.CertificationCampaignsApiGetCampaignTemplateV1Request) => {
    return await sdkWrapper.getCampaignTemplateV1(request, apiConfig);
});
ipcMain.handle('get-campaign-v-1', async (event, request: certificationCampaignsTypes.CertificationCampaignsApiGetCampaignV1Request) => {
    return await sdkWrapper.getCampaignV1(request, apiConfig);
});
ipcMain.handle('get-certification-task-v-1', async (event, request: certificationsTypes.CertificationsApiGetCertificationTaskV1Request) => {
    return await sdkWrapper.getCertificationTaskV1(request, apiConfig);
});
ipcMain.handle('get-classify-machine-account-from-source-status-v-1', async (event, request: classifySourceTypes.ClassifySourceApiGetClassifyMachineAccountFromSourceStatusV1Request) => {
    return await sdkWrapper.getClassifyMachineAccountFromSourceStatusV1(request, apiConfig);
});
ipcMain.handle('get-client-log-configuration-v-1', async (event, request: managedClustersTypes.ManagedClustersApiGetClientLogConfigurationV1Request) => {
    return await sdkWrapper.getClientLogConfigurationV1(request, apiConfig);
});
ipcMain.handle('get-common-access-v-1', async (event, request: iaiCommonAccessTypes.IAICommonAccessApiGetCommonAccessV1Request = {}) => {
    return await sdkWrapper.getCommonAccessV1(request, apiConfig);
});
ipcMain.handle('get-completed-work-items-v-1', async (event, request: workItemsTypes.WorkItemsApiGetCompletedWorkItemsV1Request = {}) => {
    return await sdkWrapper.getCompletedWorkItemsV1(request, apiConfig);
});
ipcMain.handle('get-connector-correlation-config-v-1', async (event, request: connectorsTypes.ConnectorsApiGetConnectorCorrelationConfigV1Request) => {
    return await sdkWrapper.getConnectorCorrelationConfigV1(request, apiConfig);
});
ipcMain.handle('get-connector-customizer-v-1', async (event, request: connectorCustomizersTypes.ConnectorCustomizersApiGetConnectorCustomizerV1Request) => {
    return await sdkWrapper.getConnectorCustomizerV1(request, apiConfig);
});
ipcMain.handle('get-connector-list-v-1', async (event, request: connectorsTypes.ConnectorsApiGetConnectorListV1Request = {}) => {
    return await sdkWrapper.getConnectorListV1(request, apiConfig);
});
ipcMain.handle('get-connector-rule-list-v-1', async (event, request: connectorRuleManagementTypes.ConnectorRuleManagementApiGetConnectorRuleListV1Request = {}) => {
    return await sdkWrapper.getConnectorRuleListV1(request, apiConfig);
});
ipcMain.handle('get-connector-rule-v-1', async (event, request: connectorRuleManagementTypes.ConnectorRuleManagementApiGetConnectorRuleV1Request) => {
    return await sdkWrapper.getConnectorRuleV1(request, apiConfig);
});
ipcMain.handle('get-connector-source-config-v-1', async (event, request: connectorsTypes.ConnectorsApiGetConnectorSourceConfigV1Request) => {
    return await sdkWrapper.getConnectorSourceConfigV1(request, apiConfig);
});
ipcMain.handle('get-connector-source-template-v-1', async (event, request: connectorsTypes.ConnectorsApiGetConnectorSourceTemplateV1Request) => {
    return await sdkWrapper.getConnectorSourceTemplateV1(request, apiConfig);
});
ipcMain.handle('get-connector-translations-v-1', async (event, request: connectorsTypes.ConnectorsApiGetConnectorTranslationsV1Request) => {
    return await sdkWrapper.getConnectorTranslationsV1(request, apiConfig);
});
ipcMain.handle('get-connector-v-1', async (event, request: connectorsTypes.ConnectorsApiGetConnectorV1Request) => {
    return await sdkWrapper.getConnectorV1(request, apiConfig);
});
ipcMain.handle('get-correlation-config-v-1', async (event, request: sourcesTypes.SourcesApiGetCorrelationConfigV1Request) => {
    return await sdkWrapper.getCorrelationConfigV1(request, apiConfig);
});
ipcMain.handle('get-count-completed-work-items-v-1', async (event, request: workItemsTypes.WorkItemsApiGetCountCompletedWorkItemsV1Request = {}) => {
    return await sdkWrapper.getCountCompletedWorkItemsV1(request, apiConfig);
});
ipcMain.handle('get-count-work-items-v-1', async (event, request: workItemsTypes.WorkItemsApiGetCountWorkItemsV1Request = {}) => {
    return await sdkWrapper.getCountWorkItemsV1(request, apiConfig);
});
ipcMain.handle('get-create-machine-account-request-v-1', async (event, request: machineAccountCreationRequestTypes.MachineAccountCreationRequestApiGetCreateMachineAccountRequestV1Request) => {
    return await sdkWrapper.getCreateMachineAccountRequestV1(request, apiConfig);
});
ipcMain.handle('get-custom-password-instructions-v-1', async (event, request: customPasswordInstructionsTypes.CustomPasswordInstructionsApiGetCustomPasswordInstructionsV1Request) => {
    return await sdkWrapper.getCustomPasswordInstructionsV1(request, apiConfig);
});
ipcMain.handle('get-custom-violation-report-v-1', async (event, request: sodPoliciesTypes.SODPoliciesApiGetCustomViolationReportV1Request) => {
    return await sdkWrapper.getCustomViolationReportV1(request, apiConfig);
});
ipcMain.handle('get-data-segmentation-enabled-for-user-v-1', async (event, request: dataSegmentationTypes.DataSegmentationApiGetDataSegmentationEnabledForUserV1Request) => {
    return await sdkWrapper.getDataSegmentationEnabledForUserV1(request, apiConfig);
});
ipcMain.handle('get-data-segment-identity-membership-v-1', async (event, request: dataSegmentationTypes.DataSegmentationApiGetDataSegmentIdentityMembershipV1Request) => {
    return await sdkWrapper.getDataSegmentIdentityMembershipV1(request, apiConfig);
});
ipcMain.handle('get-data-segment-v-1', async (event, request: dataSegmentationTypes.DataSegmentationApiGetDataSegmentV1Request) => {
    return await sdkWrapper.getDataSegmentV1(request, apiConfig);
});
ipcMain.handle('get-default-identity-attribute-config-v-1', async (event, request: identityProfilesTypes.IdentityProfilesApiGetDefaultIdentityAttributeConfigV1Request) => {
    return await sdkWrapper.getDefaultIdentityAttributeConfigV1(request, apiConfig);
});
ipcMain.handle('get-default-violation-report-v-1', async (event, request: sodPoliciesTypes.SODPoliciesApiGetDefaultViolationReportV1Request) => {
    return await sdkWrapper.getDefaultViolationReportV1(request, apiConfig);
});
ipcMain.handle('get-deploy-v-1', async (event, request: configurationHubTypes.ConfigurationHubApiGetDeployV1Request) => {
    return await sdkWrapper.getDeployV1(request, apiConfig);
});
ipcMain.handle('get-dimension-entitlements-v-1', async (event, request: dimensionsTypes.DimensionsApiGetDimensionEntitlementsV1Request) => {
    return await sdkWrapper.getDimensionEntitlementsV1(request, apiConfig);
});
ipcMain.handle('get-dimension-v-1', async (event, request: dimensionsTypes.DimensionsApiGetDimensionV1Request) => {
    return await sdkWrapper.getDimensionV1(request, apiConfig);
});
ipcMain.handle('get-discovered-applications-v-1', async (event, request: applicationDiscoveryTypes.ApplicationDiscoveryApiGetDiscoveredApplicationsV1Request = {}) => {
    return await sdkWrapper.getDiscoveredApplicationsV1(request, apiConfig);
});
ipcMain.handle('get-dkim-attributes-v-1', async (event, request: notificationsTypes.NotificationsApiGetDkimAttributesV1Request = {}) => {
    return await sdkWrapper.getDkimAttributesV1(request, apiConfig);
});
ipcMain.handle('get-entitlement-aggregation-groups-v-1', async (event, request: multiHostIntegrationTypes.MultiHostIntegrationApiGetEntitlementAggregationGroupsV1Request) => {
    return await sdkWrapper.getEntitlementAggregationGroupsV1(request, apiConfig);
});
ipcMain.handle('get-entitlement-changes-identities-v-1', async (event, request: roleInsightsTypes.RoleInsightsApiGetEntitlementChangesIdentitiesV1Request) => {
    return await sdkWrapper.getEntitlementChangesIdentitiesV1(request, apiConfig);
});
ipcMain.handle('get-entitlement-details-for-identity-v-1', async (event, request: accessRequestsTypes.AccessRequestsApiGetEntitlementDetailsForIdentityV1Request) => {
    return await sdkWrapper.getEntitlementDetailsForIdentityV1(request, apiConfig);
});
ipcMain.handle('get-entitlement-distribution-potential-role-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiGetEntitlementDistributionPotentialRoleV1Request) => {
    return await sdkWrapper.getEntitlementDistributionPotentialRoleV1(request, apiConfig);
});
ipcMain.handle('get-entitlement-request-config-v-1', async (event, request: entitlementsTypes.EntitlementsApiGetEntitlementRequestConfigV1Request) => {
    return await sdkWrapper.getEntitlementRequestConfigV1(request, apiConfig);
});
ipcMain.handle('get-entitlements-potential-role-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiGetEntitlementsPotentialRoleV1Request) => {
    return await sdkWrapper.getEntitlementsPotentialRoleV1(request, apiConfig);
});
ipcMain.handle('get-entitlements-schema-v-1', async (event, request: sourcesTypes.SourcesApiGetEntitlementsSchemaV1Request) => {
    return await sdkWrapper.getEntitlementsSchemaV1(request, apiConfig);
});
ipcMain.handle('get-entitlement-v-1', async (event, request: entitlementsTypes.EntitlementsApiGetEntitlementV1Request) => {
    return await sdkWrapper.getEntitlementV1(request, apiConfig);
});
ipcMain.handle('get-evaluate-reassignment-configuration-v-1', async (event, request: workReassignmentTypes.WorkReassignmentApiGetEvaluateReassignmentConfigurationV1Request) => {
    return await sdkWrapper.getEvaluateReassignmentConfigurationV1(request, apiConfig);
});
ipcMain.handle('get-excluded-entitlements-potential-role-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiGetExcludedEntitlementsPotentialRoleV1Request) => {
    return await sdkWrapper.getExcludedEntitlementsPotentialRoleV1(request, apiConfig);
});
ipcMain.handle('get-file-from-s-3-v-1', async (event, request: customFormsTypes.CustomFormsApiGetFileFromS3V1Request) => {
    return await sdkWrapper.getFileFromS3V1(request, apiConfig);
});
ipcMain.handle('get-form-attribute-by-id-nerm', async (event, request: sdk.FormAttributesNERMApiGetFormAttributeByIdRequest) => {
    return await sdkWrapper.getFormAttributeByIdNerm(request, apiConfig);
});
ipcMain.handle('get-form-attribute-by-uid-nerm', async (event, request: sdk.FormAttributesNERMApiGetFormAttributeByUidRequest = {}) => {
    return await sdkWrapper.getFormAttributeByUidNerm(request, apiConfig);
});
ipcMain.handle('get-form-attributes-nerm', async (event) => {
    return await sdkWrapper.getFormAttributesNerm(apiConfig);
});
ipcMain.handle('get-form-by-id-nerm', async (event, request: sdk.FormsNERMApiGetFormByIdRequest) => {
    return await sdkWrapper.getFormByIdNerm(request, apiConfig);
});
ipcMain.handle('get-form-by-uid-nerm', async (event, request: sdk.FormsNERMApiGetFormByUidRequest = {}) => {
    return await sdkWrapper.getFormByUidNerm(request, apiConfig);
});
ipcMain.handle('get-form-definition-by-key-v-1', async (event, request: customFormsTypes.CustomFormsApiGetFormDefinitionByKeyV1Request) => {
    return await sdkWrapper.getFormDefinitionByKeyV1(request, apiConfig);
});
ipcMain.handle('get-form-instance-by-key-v-1', async (event, request: customFormsTypes.CustomFormsApiGetFormInstanceByKeyV1Request) => {
    return await sdkWrapper.getFormInstanceByKeyV1(request, apiConfig);
});
ipcMain.handle('get-form-instance-file-v-1', async (event, request: customFormsTypes.CustomFormsApiGetFormInstanceFileV1Request) => {
    return await sdkWrapper.getFormInstanceFileV1(request, apiConfig);
});
ipcMain.handle('get-forms-nerm', async (event) => {
    return await sdkWrapper.getFormsNerm(apiConfig);
});
ipcMain.handle('get-historical-identity-events-v-1', async (event, request: identityHistoryTypes.IdentityHistoryApiGetHistoricalIdentityEventsV1Request) => {
    return await sdkWrapper.getHistoricalIdentityEventsV1(request, apiConfig);
});
ipcMain.handle('get-historical-identity-v-1', async (event, request: identityHistoryTypes.IdentityHistoryApiGetHistoricalIdentityV1Request) => {
    return await sdkWrapper.getHistoricalIdentityV1(request, apiConfig);
});
ipcMain.handle('get-identities-potential-role-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiGetIdentitiesPotentialRoleV1Request) => {
    return await sdkWrapper.getIdentitiesPotentialRoleV1(request, apiConfig);
});
ipcMain.handle('get-identity-access-summaries-v-1', async (event, request: certificationSummariesTypes.CertificationSummariesApiGetIdentityAccessSummariesV1Request) => {
    return await sdkWrapper.getIdentityAccessSummariesV1(request, apiConfig);
});
ipcMain.handle('get-identity-attribute-v-1', async (event, request: identityAttributesTypes.IdentityAttributesApiGetIdentityAttributeV1Request) => {
    return await sdkWrapper.getIdentityAttributeV1(request, apiConfig);
});
ipcMain.handle('get-identity-certification-item-permissions-v-1', async (event, request: certificationsTypes.CertificationsApiGetIdentityCertificationItemPermissionsV1Request) => {
    return await sdkWrapper.getIdentityCertificationItemPermissionsV1(request, apiConfig);
});
ipcMain.handle('get-identity-certification-v-1', async (event, request: certificationsTypes.CertificationsApiGetIdentityCertificationV1Request) => {
    return await sdkWrapper.getIdentityCertificationV1(request, apiConfig);
});
ipcMain.handle('get-identity-decision-summary-v-1', async (event, request: certificationSummariesTypes.CertificationSummariesApiGetIdentityDecisionSummaryV1Request) => {
    return await sdkWrapper.getIdentityDecisionSummaryV1(request, apiConfig);
});
ipcMain.handle('get-identity-intelligence-v-1', async (event, request: intelligenceTypes.IntelligenceApiGetIdentityIntelligenceV1Request) => {
    return await sdkWrapper.getIdentityIntelligenceV1(request, apiConfig);
});
ipcMain.handle('get-identity-outlier-snapshots-v-1', async (event, request: iaiOutliersTypes.IAIOutliersApiGetIdentityOutlierSnapshotsV1Request = {}) => {
    return await sdkWrapper.getIdentityOutlierSnapshotsV1(request, apiConfig);
});
ipcMain.handle('get-identity-outliers-v-1', async (event, request: iaiOutliersTypes.IAIOutliersApiGetIdentityOutliersV1Request = {}) => {
    return await sdkWrapper.getIdentityOutliersV1(request, apiConfig);
});
ipcMain.handle('get-identity-ownership-details-v-1', async (event, request: identitiesTypes.IdentitiesApiGetIdentityOwnershipDetailsV1Request) => {
    return await sdkWrapper.getIdentityOwnershipDetailsV1(request, apiConfig);
});
ipcMain.handle('get-identity-profile-v-1', async (event, request: identityProfilesTypes.IdentityProfilesApiGetIdentityProfileV1Request) => {
    return await sdkWrapper.getIdentityProfileV1(request, apiConfig);
});
ipcMain.handle('get-identity-proofing-results-nerm', async (event, request: sdk.IdentityProofingResultsNERMApiGetIdentityProofingResultsRequest = {}) => {
    return await sdkWrapper.getIdentityProofingResultsNerm(request, apiConfig);
});
ipcMain.handle('get-identity-snapshot-summary-v-1', async (event, request: identityHistoryTypes.IdentityHistoryApiGetIdentitySnapshotSummaryV1Request) => {
    return await sdkWrapper.getIdentitySnapshotSummaryV1(request, apiConfig);
});
ipcMain.handle('get-identity-snapshot-v-1', async (event, request: identityHistoryTypes.IdentityHistoryApiGetIdentitySnapshotV1Request) => {
    return await sdkWrapper.getIdentitySnapshotV1(request, apiConfig);
});
ipcMain.handle('get-identity-start-date-v-1', async (event, request: identityHistoryTypes.IdentityHistoryApiGetIdentityStartDateV1Request) => {
    return await sdkWrapper.getIdentityStartDateV1(request, apiConfig);
});
ipcMain.handle('get-identity-summaries-v-1', async (event, request: certificationSummariesTypes.CertificationSummariesApiGetIdentitySummariesV1Request) => {
    return await sdkWrapper.getIdentitySummariesV1(request, apiConfig);
});
ipcMain.handle('get-identity-summary-v-1', async (event, request: certificationSummariesTypes.CertificationSummariesApiGetIdentitySummaryV1Request) => {
    return await sdkWrapper.getIdentitySummaryV1(request, apiConfig);
});
ipcMain.handle('get-identity-v-1', async (event, request: identitiesTypes.IdentitiesApiGetIdentityV1Request) => {
    return await sdkWrapper.getIdentityV1(request, apiConfig);
});
ipcMain.handle('get-intel-identity-access-item-history-v-1', async (event, request: intelligenceTypes.IntelligenceApiGetIntelIdentityAccessItemHistoryV1Request) => {
    return await sdkWrapper.getIntelIdentityAccessItemHistoryV1(request, apiConfig);
});
ipcMain.handle('get-intel-identity-accounts-v-1', async (event, request: intelligenceTypes.IntelligenceApiGetIntelIdentityAccountsV1Request) => {
    return await sdkWrapper.getIntelIdentityAccountsV1(request, apiConfig);
});
ipcMain.handle('get-intel-identity-certification-history-v-1', async (event, request: intelligenceTypes.IntelligenceApiGetIntelIdentityCertificationHistoryV1Request) => {
    return await sdkWrapper.getIntelIdentityCertificationHistoryV1(request, apiConfig);
});
ipcMain.handle('get-intel-identity-rare-access-v-1', async (event, request: intelligenceTypes.IntelligenceApiGetIntelIdentityRareAccessV1Request) => {
    return await sdkWrapper.getIntelIdentityRareAccessV1(request, apiConfig);
});
ipcMain.handle('get-jit-activation-config-v-1', async (event, request: jitAccessTypes.JITAccessApiGetJitActivationConfigV1Request) => {
    return await sdkWrapper.getJitActivationConfigV1(request, apiConfig);
});
ipcMain.handle('get-job-status-nerm', async (event, request: sdk.JobStatusNERMApiGetJobStatusRequest) => {
    return await sdkWrapper.getJobStatusNerm(request, apiConfig);
});
ipcMain.handle('get-jwksdata-v-1', async (event) => {
    return await sdkWrapper.getJWKSDataV1(apiConfig);
});
ipcMain.handle('get-latest-identity-outlier-snapshots-v-1', async (event, request: iaiOutliersTypes.IAIOutliersApiGetLatestIdentityOutlierSnapshotsV1Request = {}) => {
    return await sdkWrapper.getLatestIdentityOutlierSnapshotsV1(request, apiConfig);
});
ipcMain.handle('get-launchers-v-1', async (event, request: launchersTypes.LaunchersApiGetLaunchersV1Request = {}) => {
    return await sdkWrapper.getLaunchersV1(request, apiConfig);
});
ipcMain.handle('get-launcher-v-1', async (event, request: launchersTypes.LaunchersApiGetLauncherV1Request) => {
    return await sdkWrapper.getLauncherV1(request, apiConfig);
});
ipcMain.handle('get-lifecycle-states-v-1', async (event, request: lifecycleStatesTypes.LifecycleStatesApiGetLifecycleStatesV1Request) => {
    return await sdkWrapper.getLifecycleStatesV1(request, apiConfig);
});
ipcMain.handle('get-lifecycle-state-v-1', async (event, request: lifecycleStatesTypes.LifecycleStatesApiGetLifecycleStateV1Request) => {
    return await sdkWrapper.getLifecycleStateV1(request, apiConfig);
});
ipcMain.handle('get-machine-account-create-access-info-v-1', async (event, request: machineAccountCreationRequestTypes.MachineAccountCreationRequestApiGetMachineAccountCreateAccessInfoV1Request) => {
    return await sdkWrapper.getMachineAccountCreateAccessInfoV1(request, apiConfig);
});
ipcMain.handle('get-machine-account-deletion-approval-config-by-source-v-1', async (event, request: sourcesTypes.SourcesApiGetMachineAccountDeletionApprovalConfigBySourceV1Request) => {
    return await sdkWrapper.getMachineAccountDeletionApprovalConfigBySourceV1(request, apiConfig);
});
ipcMain.handle('get-machine-account-subtype-approval-config-v-1', async (event, request: machineAccountSubtypesTypes.MachineAccountSubtypesApiGetMachineAccountSubtypeApprovalConfigV1Request) => {
    return await sdkWrapper.getMachineAccountSubtypeApprovalConfigV1(request, apiConfig);
});
ipcMain.handle('get-machine-account-subtype-by-id-v-1', async (event, request: machineAccountsTypes.MachineAccountsApiGetMachineAccountSubtypeByIdV1Request) => {
    return await sdkWrapper.getMachineAccountSubtypeByIdV1(request, apiConfig);
});
ipcMain.handle('get-machine-account-subtype-by-technical-name-v-1', async (event, request: machineAccountsTypes.MachineAccountsApiGetMachineAccountSubtypeByTechnicalNameV1Request) => {
    return await sdkWrapper.getMachineAccountSubtypeByTechnicalNameV1(request, apiConfig);
});
ipcMain.handle('get-machine-account-v-1', async (event, request: machineAccountsTypes.MachineAccountsApiGetMachineAccountV1Request) => {
    return await sdkWrapper.getMachineAccountV1(request, apiConfig);
});
ipcMain.handle('get-machine-classification-config-v-1', async (event, request: machineClassificationConfigTypes.MachineClassificationConfigApiGetMachineClassificationConfigV1Request) => {
    return await sdkWrapper.getMachineClassificationConfigV1(request, apiConfig);
});
ipcMain.handle('get-machine-identity-v-1', async (event, request: machineIdentitiesTypes.MachineIdentitiesApiGetMachineIdentityV1Request) => {
    return await sdkWrapper.getMachineIdentityV1(request, apiConfig);
});
ipcMain.handle('get-mail-from-attributes-v-1', async (event, request: notificationsTypes.NotificationsApiGetMailFromAttributesV1Request) => {
    return await sdkWrapper.getMailFromAttributesV1(request, apiConfig);
});
ipcMain.handle('get-managed-client-health-indicators-v-1', async (event, request: managedClientsTypes.ManagedClientsApiGetManagedClientHealthIndicatorsV1Request) => {
    return await sdkWrapper.getManagedClientHealthIndicatorsV1(request, apiConfig);
});
ipcMain.handle('get-managed-client-status-v-1', async (event, request: managedClientsTypes.ManagedClientsApiGetManagedClientStatusV1Request) => {
    return await sdkWrapper.getManagedClientStatusV1(request, apiConfig);
});
ipcMain.handle('get-managed-clients-v-1', async (event, request: managedClientsTypes.ManagedClientsApiGetManagedClientsV1Request = {}) => {
    return await sdkWrapper.getManagedClientsV1(request, apiConfig);
});
ipcMain.handle('get-managed-client-v-1', async (event, request: managedClientsTypes.ManagedClientsApiGetManagedClientV1Request) => {
    return await sdkWrapper.getManagedClientV1(request, apiConfig);
});
ipcMain.handle('get-managed-clusters-v-1', async (event, request: managedClustersTypes.ManagedClustersApiGetManagedClustersV1Request = {}) => {
    return await sdkWrapper.getManagedClustersV1(request, apiConfig);
});
ipcMain.handle('get-managed-cluster-types-v-1', async (event, request: managedClusterTypesTypes.ManagedClusterTypesApiGetManagedClusterTypesV1Request = {}) => {
    return await sdkWrapper.getManagedClusterTypesV1(request, apiConfig);
});
ipcMain.handle('get-managed-cluster-type-v-1', async (event, request: managedClusterTypesTypes.ManagedClusterTypesApiGetManagedClusterTypeV1Request) => {
    return await sdkWrapper.getManagedClusterTypeV1(request, apiConfig);
});
ipcMain.handle('get-managed-cluster-v-1', async (event, request: managedClustersTypes.ManagedClustersApiGetManagedClusterV1Request) => {
    return await sdkWrapper.getManagedClusterV1(request, apiConfig);
});
ipcMain.handle('get-manual-discover-applications-csv-template-v-1', async (event) => {
    return await sdkWrapper.getManualDiscoverApplicationsCsvTemplateV1(apiConfig);
});
ipcMain.handle('get-mfaduo-config-v-1', async (event) => {
    return await sdkWrapper.getMFADuoConfigV1(apiConfig);
});
ipcMain.handle('get-mfakba-config-v-1', async (event, request: mfaConfigurationTypes.MFAConfigurationApiGetMFAKbaConfigV1Request = {}) => {
    return await sdkWrapper.getMFAKbaConfigV1(request, apiConfig);
});
ipcMain.handle('get-mfaokta-config-v-1', async (event) => {
    return await sdkWrapper.getMFAOktaConfigV1(apiConfig);
});
ipcMain.handle('get-multi-host-integrations-list-v-1', async (event, request: multiHostIntegrationTypes.MultiHostIntegrationApiGetMultiHostIntegrationsListV1Request = {}) => {
    return await sdkWrapper.getMultiHostIntegrationsListV1(request, apiConfig);
});
ipcMain.handle('get-multi-host-integrations-v-1', async (event, request: multiHostIntegrationTypes.MultiHostIntegrationApiGetMultiHostIntegrationsV1Request) => {
    return await sdkWrapper.getMultiHostIntegrationsV1(request, apiConfig);
});
ipcMain.handle('get-multihost-integration-types-v-1', async (event) => {
    return await sdkWrapper.getMultihostIntegrationTypesV1(apiConfig);
});
ipcMain.handle('get-multi-host-source-creation-errors-v-1', async (event, request: multiHostIntegrationTypes.MultiHostIntegrationApiGetMultiHostSourceCreationErrorsV1Request) => {
    return await sdkWrapper.getMultiHostSourceCreationErrorsV1(request, apiConfig);
});
ipcMain.handle('get-native-change-detection-config-v-1', async (event, request: sourcesTypes.SourcesApiGetNativeChangeDetectionConfigV1Request) => {
    return await sdkWrapper.getNativeChangeDetectionConfigV1(request, apiConfig);
});
ipcMain.handle('get-non-employee-approval-summary-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeApprovalSummaryV1Request) => {
    return await sdkWrapper.getNonEmployeeApprovalSummaryV1(request, apiConfig);
});
ipcMain.handle('get-non-employee-approval-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeApprovalV1Request) => {
    return await sdkWrapper.getNonEmployeeApprovalV1(request, apiConfig);
});
ipcMain.handle('get-non-employee-bulk-upload-status-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeBulkUploadStatusV1Request) => {
    return await sdkWrapper.getNonEmployeeBulkUploadStatusV1(request, apiConfig);
});
ipcMain.handle('get-non-employee-record-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeRecordV1Request) => {
    return await sdkWrapper.getNonEmployeeRecordV1(request, apiConfig);
});
ipcMain.handle('get-non-employee-request-summary-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeRequestSummaryV1Request) => {
    return await sdkWrapper.getNonEmployeeRequestSummaryV1(request, apiConfig);
});
ipcMain.handle('get-non-employee-request-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeRequestV1Request) => {
    return await sdkWrapper.getNonEmployeeRequestV1(request, apiConfig);
});
ipcMain.handle('get-non-employee-schema-attribute-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeSchemaAttributeV1Request) => {
    return await sdkWrapper.getNonEmployeeSchemaAttributeV1(request, apiConfig);
});
ipcMain.handle('get-non-employee-source-schema-attributes-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeSourceSchemaAttributesV1Request) => {
    return await sdkWrapper.getNonEmployeeSourceSchemaAttributesV1(request, apiConfig);
});
ipcMain.handle('get-non-employee-source-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiGetNonEmployeeSourceV1Request) => {
    return await sdkWrapper.getNonEmployeeSourceV1(request, apiConfig);
});
ipcMain.handle('get-notification-preferences-v-1', async (event, request: notificationsTypes.NotificationsApiGetNotificationPreferencesV1Request) => {
    return await sdkWrapper.getNotificationPreferencesV1(request, apiConfig);
});
ipcMain.handle('get-notifications-template-context-v-1', async (event) => {
    return await sdkWrapper.getNotificationsTemplateContextV1(apiConfig);
});
ipcMain.handle('get-notification-template-v-1', async (event, request: notificationsTypes.NotificationsApiGetNotificationTemplateV1Request) => {
    return await sdkWrapper.getNotificationTemplateV1(request, apiConfig);
});
ipcMain.handle('get-notification-template-variables-v-1', async (event, request: notificationsTypes.NotificationsApiGetNotificationTemplateVariablesV1Request) => {
    return await sdkWrapper.getNotificationTemplateVariablesV1(request, apiConfig);
});
ipcMain.handle('get-oauth-client-v-1', async (event, request: oauthClientsTypes.OAuthClientsApiGetOauthClientV1Request) => {
    return await sdkWrapper.getOauthClientV1(request, apiConfig);
});
ipcMain.handle('get-object-mappings-v-1', async (event, request: configurationHubTypes.ConfigurationHubApiGetObjectMappingsV1Request) => {
    return await sdkWrapper.getObjectMappingsV1(request, apiConfig);
});
ipcMain.handle('get-ongoing-role-propagation-v-1', async (event, request: rolePropagationTypes.RolePropagationApiGetOngoingRolePropagationV1Request = {}) => {
    return await sdkWrapper.getOngoingRolePropagationV1(request, apiConfig);
});
ipcMain.handle('get-org-config-v-1', async (event) => {
    return await sdkWrapper.getOrgConfigV1(apiConfig);
});
ipcMain.handle('get-outlier-contributing-feature-summary-v-1', async (event, request: iaiOutliersTypes.IAIOutliersApiGetOutlierContributingFeatureSummaryV1Request) => {
    return await sdkWrapper.getOutlierContributingFeatureSummaryV1(request, apiConfig);
});
ipcMain.handle('get-owners-v-1', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiGetOwnersV1Request) => {
    return await sdkWrapper.getOwnersV1(request, apiConfig);
});
ipcMain.handle('get-page-content-by-id-nerm', async (event, request: sdk.PageContentsNERMApiGetPageContentByIdRequest) => {
    return await sdkWrapper.getPageContentByIdNerm(request, apiConfig);
});
ipcMain.handle('get-page-content-by-uid-nerm', async (event, request: sdk.PageContentsNERMApiGetPageContentByUidRequest = {}) => {
    return await sdkWrapper.getPageContentByUidNerm(request, apiConfig);
});
ipcMain.handle('get-page-contents-nerm', async (event) => {
    return await sdkWrapper.getPageContentsNerm(apiConfig);
});
ipcMain.handle('get-page-content-translation-by-id-nerm', async (event, request: sdk.PageContentTranslationsNERMApiGetPageContentTranslationByIdRequest) => {
    return await sdkWrapper.getPageContentTranslationByIdNerm(request, apiConfig);
});
ipcMain.handle('get-page-content-translation-by-uid-nerm', async (event, request: sdk.PageContentTranslationsNERMApiGetPageContentTranslationByUidRequest = {}) => {
    return await sdkWrapper.getPageContentTranslationByUidNerm(request, apiConfig);
});
ipcMain.handle('get-page-content-translation-nerm', async (event) => {
    return await sdkWrapper.getPageContentTranslationNerm(apiConfig);
});
ipcMain.handle('get-page-element-by-id-nerm', async (event, request: sdk.PageElementsNERMApiGetPageElementByIdRequest) => {
    return await sdkWrapper.getPageElementByIdNerm(request, apiConfig);
});
ipcMain.handle('get-page-element-by-uid-nerm', async (event, request: sdk.PageElementsNERMApiGetPageElementByUidRequest = {}) => {
    return await sdkWrapper.getPageElementByUidNerm(request, apiConfig);
});
ipcMain.handle('get-page-elements-nerm', async (event) => {
    return await sdkWrapper.getPageElementsNerm(apiConfig);
});
ipcMain.handle('get-parameter-references-v-1', async (event, request: parameterStorageTypes.ParameterStorageApiGetParameterReferencesV1Request) => {
    return await sdkWrapper.getParameterReferencesV1(request, apiConfig);
});
ipcMain.handle('get-parameter-storage-specification-v-1', async (event, request: parameterStorageTypes.ParameterStorageApiGetParameterStorageSpecificationV1Request = {}) => {
    return await sdkWrapper.getParameterStorageSpecificationV1(request, apiConfig);
});
ipcMain.handle('get-parameter-v-1', async (event, request: parameterStorageTypes.ParameterStorageApiGetParameterV1Request) => {
    return await sdkWrapper.getParameterV1(request, apiConfig);
});
ipcMain.handle('get-password-change-status-v-1', async (event, request: passwordManagementTypes.PasswordManagementApiGetPasswordChangeStatusV1Request) => {
    return await sdkWrapper.getPasswordChangeStatusV1(request, apiConfig);
});
ipcMain.handle('get-password-dictionary-v-1', async (event) => {
    return await sdkWrapper.getPasswordDictionaryV1(apiConfig);
});
ipcMain.handle('get-password-org-config-v-1', async (event) => {
    return await sdkWrapper.getPasswordOrgConfigV1(apiConfig);
});
ipcMain.handle('get-password-policy-by-id-v-1', async (event, request: passwordPoliciesTypes.PasswordPoliciesApiGetPasswordPolicyByIdV1Request) => {
    return await sdkWrapper.getPasswordPolicyByIdV1(request, apiConfig);
});
ipcMain.handle('get-password-sync-groups-v-1', async (event, request: passwordSyncGroupsTypes.PasswordSyncGroupsApiGetPasswordSyncGroupsV1Request = {}) => {
    return await sdkWrapper.getPasswordSyncGroupsV1(request, apiConfig);
});
ipcMain.handle('get-password-sync-group-v-1', async (event, request: passwordSyncGroupsTypes.PasswordSyncGroupsApiGetPasswordSyncGroupV1Request) => {
    return await sdkWrapper.getPasswordSyncGroupV1(request, apiConfig);
});
ipcMain.handle('get-peer-group-outliers-contributing-features-v-1', async (event, request: iaiOutliersTypes.IAIOutliersApiGetPeerGroupOutliersContributingFeaturesV1Request) => {
    return await sdkWrapper.getPeerGroupOutliersContributingFeaturesV1(request, apiConfig);
});
ipcMain.handle('get-peer-group-outliers-v-1', async (event, request: iaiPeerGroupStrategiesTypes.IAIPeerGroupStrategiesApiGetPeerGroupOutliersV1Request) => {
    return await sdkWrapper.getPeerGroupOutliersV1(request, apiConfig);
});
ipcMain.handle('get-pending-certification-tasks-v-1', async (event, request: certificationsTypes.CertificationsApiGetPendingCertificationTasksV1Request = {}) => {
    return await sdkWrapper.getPendingCertificationTasksV1(request, apiConfig);
});
ipcMain.handle('get-potential-role-applications-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiGetPotentialRoleApplicationsV1Request) => {
    return await sdkWrapper.getPotentialRoleApplicationsV1(request, apiConfig);
});
ipcMain.handle('get-potential-role-entitlements-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiGetPotentialRoleEntitlementsV1Request) => {
    return await sdkWrapper.getPotentialRoleEntitlementsV1(request, apiConfig);
});
ipcMain.handle('get-potential-role-source-identity-usage-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiGetPotentialRoleSourceIdentityUsageV1Request) => {
    return await sdkWrapper.getPotentialRoleSourceIdentityUsageV1(request, apiConfig);
});
ipcMain.handle('get-potential-role-summaries-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiGetPotentialRoleSummariesV1Request) => {
    return await sdkWrapper.getPotentialRoleSummariesV1(request, apiConfig);
});
ipcMain.handle('get-potential-role-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiGetPotentialRoleV1Request) => {
    return await sdkWrapper.getPotentialRoleV1(request, apiConfig);
});
ipcMain.handle('get-privilege-criteria-config-v-1', async (event, request: privilegeCriteriaConfigurationTypes.PrivilegeCriteriaConfigurationApiGetPrivilegeCriteriaConfigV1Request) => {
    return await sdkWrapper.getPrivilegeCriteriaConfigV1(request, apiConfig);
});
ipcMain.handle('get-privilege-criteria-v-1', async (event, request: privilegeCriteriaTypes.PrivilegeCriteriaApiGetPrivilegeCriteriaV1Request) => {
    return await sdkWrapper.getPrivilegeCriteriaV1(request, apiConfig);
});
ipcMain.handle('get-profile-avatar-nerm', async (event, request: sdk.ProfilesNERMApiGetProfileAvatarRequest) => {
    return await sdkWrapper.getProfileAvatarNerm(request, apiConfig);
});
ipcMain.handle('get-profile-by-id-nerm', async (event, request: sdk.ProfilesNERMApiGetProfileByIdRequest) => {
    return await sdkWrapper.getProfileByIdNerm(request, apiConfig);
});
ipcMain.handle('get-profile-config-list-v-1', async (event, request: authProfileTypes.AuthProfileApiGetProfileConfigListV1Request = {}) => {
    return await sdkWrapper.getProfileConfigListV1(request, apiConfig);
});
ipcMain.handle('get-profile-config-v-1', async (event, request: authProfileTypes.AuthProfileApiGetProfileConfigV1Request) => {
    return await sdkWrapper.getProfileConfigV1(request, apiConfig);
});
ipcMain.handle('get-profiles-nerm', async (event, request: sdk.ProfilesNERMApiGetProfilesRequest = {}) => {
    return await sdkWrapper.getProfilesNerm(request, apiConfig);
});
ipcMain.handle('get-profile-type-attributes-nerm', async (event, request: sdk.SyncedAttributesNERMApiGetProfileTypeAttributesRequest = {}) => {
    return await sdkWrapper.getProfileTypeAttributesNerm(request, apiConfig);
});
ipcMain.handle('get-profile-type-by-id-nerm', async (event, request: sdk.ProfileTypesNERMApiGetProfileTypeByIdRequest) => {
    return await sdkWrapper.getProfileTypeByIdNerm(request, apiConfig);
});
ipcMain.handle('get-profile-type-by-uid-nerm', async (event, request: sdk.ProfileTypesNERMApiGetProfileTypeByUidRequest = {}) => {
    return await sdkWrapper.getProfileTypeByUidNerm(request, apiConfig);
});
ipcMain.handle('get-profile-types-nerm', async (event, request: sdk.ProfileTypesNERMApiGetProfileTypesRequest = {}) => {
    return await sdkWrapper.getProfileTypesNerm(request, apiConfig);
});
ipcMain.handle('get-profile-upload-nerm', async (event, request: sdk.ProfilesNERMApiGetProfileUploadRequest) => {
    return await sdkWrapper.getProfileUploadNerm(request, apiConfig);
});
ipcMain.handle('get-provisioning-policy-v-1', async (event, request: sourcesTypes.SourcesApiGetProvisioningPolicyV1Request) => {
    return await sdkWrapper.getProvisioningPolicyV1(request, apiConfig);
});
ipcMain.handle('get-provisioning-policy-v-2', async (event, request: sourcesTypes.SourcesApiGetProvisioningPolicyV2Request) => {
    return await sdkWrapper.getProvisioningPolicyV2(request, apiConfig);
});
ipcMain.handle('get-public-identities-v-1', async (event, request: publicIdentitiesTypes.PublicIdentitiesApiGetPublicIdentitiesV1Request = {}) => {
    return await sdkWrapper.getPublicIdentitiesV1(request, apiConfig);
});
ipcMain.handle('get-public-identity-config-v-1', async (event) => {
    return await sdkWrapper.getPublicIdentityConfigV1(apiConfig);
});
ipcMain.handle('get-reassignment-config-types-v-1', async (event, request: workReassignmentTypes.WorkReassignmentApiGetReassignmentConfigTypesV1Request = {}) => {
    return await sdkWrapper.getReassignmentConfigTypesV1(request, apiConfig);
});
ipcMain.handle('get-reassignment-configuration-v-1', async (event, request: workReassignmentTypes.WorkReassignmentApiGetReassignmentConfigurationV1Request) => {
    return await sdkWrapper.getReassignmentConfigurationV1(request, apiConfig);
});
ipcMain.handle('get-recommendations-config-v-1', async (event, request: iaiRecommendationsTypes.IAIRecommendationsApiGetRecommendationsConfigV1Request = {}) => {
    return await sdkWrapper.getRecommendationsConfigV1(request, apiConfig);
});
ipcMain.handle('get-recommendations-v-1', async (event, request: iaiRecommendationsTypes.IAIRecommendationsApiGetRecommendationsV1Request) => {
    return await sdkWrapper.getRecommendationsV1(request, apiConfig);
});
ipcMain.handle('get-report-result-v-1', async (event, request: reportsDataExtractionTypes.ReportsDataExtractionApiGetReportResultV1Request) => {
    return await sdkWrapper.getReportResultV1(request, apiConfig);
});
ipcMain.handle('get-report-v-1', async (event, request: reportsDataExtractionTypes.ReportsDataExtractionApiGetReportV1Request) => {
    return await sdkWrapper.getReportV1(request, apiConfig);
});
ipcMain.handle('get-risk-level-nerm', async (event, request: sdk.RiskLevelsNERMApiGetRiskLevelRequest) => {
    return await sdkWrapper.getRiskLevelNerm(request, apiConfig);
});
ipcMain.handle('get-risk-levels-nerm', async (event, request: sdk.RiskLevelsNERMApiGetRiskLevelsRequest = {}) => {
    return await sdkWrapper.getRiskLevelsNerm(request, apiConfig);
});
ipcMain.handle('get-risk-score-nerm', async (event, request: sdk.RiskScoresNERMApiGetRiskScoreRequest) => {
    return await sdkWrapper.getRiskScoreNerm(request, apiConfig);
});
ipcMain.handle('get-risk-scores-nerm', async (event, request: sdk.RiskScoresNERMApiGetRiskScoresRequest = {}) => {
    return await sdkWrapper.getRiskScoresNerm(request, apiConfig);
});
ipcMain.handle('get-role-assigned-identities-v-1', async (event, request: rolesTypes.RolesApiGetRoleAssignedIdentitiesV1Request) => {
    return await sdkWrapper.getRoleAssignedIdentitiesV1(request, apiConfig);
});
ipcMain.handle('get-role-assignments-v-1', async (event, request: identitiesTypes.IdentitiesApiGetRoleAssignmentsV1Request) => {
    return await sdkWrapper.getRoleAssignmentsV1(request, apiConfig);
});
ipcMain.handle('get-role-assignment-v-1', async (event, request: identitiesTypes.IdentitiesApiGetRoleAssignmentV1Request) => {
    return await sdkWrapper.getRoleAssignmentV1(request, apiConfig);
});
ipcMain.handle('get-role-entitlements-v-1', async (event, request: rolesTypes.RolesApiGetRoleEntitlementsV1Request) => {
    return await sdkWrapper.getRoleEntitlementsV1(request, apiConfig);
});
ipcMain.handle('get-role-insights-current-entitlements-v-1', async (event, request: roleInsightsTypes.RoleInsightsApiGetRoleInsightsCurrentEntitlementsV1Request) => {
    return await sdkWrapper.getRoleInsightsCurrentEntitlementsV1(request, apiConfig);
});
ipcMain.handle('get-role-insights-entitlements-changes-v-1', async (event, request: roleInsightsTypes.RoleInsightsApiGetRoleInsightsEntitlementsChangesV1Request) => {
    return await sdkWrapper.getRoleInsightsEntitlementsChangesV1(request, apiConfig);
});
ipcMain.handle('get-role-insights-requests-v-1', async (event, request: roleInsightsTypes.RoleInsightsApiGetRoleInsightsRequestsV1Request) => {
    return await sdkWrapper.getRoleInsightsRequestsV1(request, apiConfig);
});
ipcMain.handle('get-role-insights-summary-v-1', async (event, request: roleInsightsTypes.RoleInsightsApiGetRoleInsightsSummaryV1Request = {}) => {
    return await sdkWrapper.getRoleInsightsSummaryV1(request, apiConfig);
});
ipcMain.handle('get-role-insights-v-1', async (event, request: roleInsightsTypes.RoleInsightsApiGetRoleInsightsV1Request = {}) => {
    return await sdkWrapper.getRoleInsightsV1(request, apiConfig);
});
ipcMain.handle('get-role-insight-v-1', async (event, request: roleInsightsTypes.RoleInsightsApiGetRoleInsightV1Request) => {
    return await sdkWrapper.getRoleInsightV1(request, apiConfig);
});
ipcMain.handle('get-role-mining-potential-role-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiGetRoleMiningPotentialRoleV1Request) => {
    return await sdkWrapper.getRoleMiningPotentialRoleV1(request, apiConfig);
});
ipcMain.handle('get-role-mining-session-status-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiGetRoleMiningSessionStatusV1Request) => {
    return await sdkWrapper.getRoleMiningSessionStatusV1(request, apiConfig);
});
ipcMain.handle('get-role-mining-sessions-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiGetRoleMiningSessionsV1Request = {}) => {
    return await sdkWrapper.getRoleMiningSessionsV1(request, apiConfig);
});
ipcMain.handle('get-role-mining-session-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiGetRoleMiningSessionV1Request) => {
    return await sdkWrapper.getRoleMiningSessionV1(request, apiConfig);
});
ipcMain.handle('get-role-nerm', async (event, request: sdk.RolesNERMApiGetRoleRequest) => {
    return await sdkWrapper.getRoleNerm(request, apiConfig);
});
ipcMain.handle('get-role-profile-nerm', async (event, request: sdk.RoleProfilesNERMApiGetRoleProfileRequest) => {
    return await sdkWrapper.getRoleProfileNerm(request, apiConfig);
});
ipcMain.handle('get-role-profiles-nerm', async (event, request: sdk.RoleProfilesNERMApiGetRoleProfilesRequest = {}) => {
    return await sdkWrapper.getRoleProfilesNerm(request, apiConfig);
});
ipcMain.handle('get-role-propagation-config-v-1', async (event, request: rolePropagationTypes.RolePropagationApiGetRolePropagationConfigV1Request = {}) => {
    return await sdkWrapper.getRolePropagationConfigV1(request, apiConfig);
});
ipcMain.handle('get-role-propagation-status-v-1', async (event, request: rolePropagationTypes.RolePropagationApiGetRolePropagationStatusV1Request) => {
    return await sdkWrapper.getRolePropagationStatusV1(request, apiConfig);
});
ipcMain.handle('get-roles-nerm', async (event, request: sdk.RolesNERMApiGetRolesRequest = {}) => {
    return await sdkWrapper.getRolesNerm(request, apiConfig);
});
ipcMain.handle('get-role-v-1', async (event, request: rolesTypes.RolesApiGetRoleV1Request) => {
    return await sdkWrapper.getRoleV1(request, apiConfig);
});
ipcMain.handle('get-saved-potential-roles-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiGetSavedPotentialRolesV1Request = {}) => {
    return await sdkWrapper.getSavedPotentialRolesV1(request, apiConfig);
});
ipcMain.handle('get-saved-search-v-1', async (event, request: savedSearchTypes.SavedSearchApiGetSavedSearchV1Request) => {
    return await sdkWrapper.getSavedSearchV1(request, apiConfig);
});
ipcMain.handle('get-scheduled-search-v-1', async (event, request: scheduledSearchTypes.ScheduledSearchApiGetScheduledSearchV1Request) => {
    return await sdkWrapper.getScheduledSearchV1(request, apiConfig);
});
ipcMain.handle('get-schedules-v-1', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiGetSchedulesV1Request = {}) => {
    return await sdkWrapper.getSchedulesV1(request, apiConfig);
});
ipcMain.handle('get-schedule-v-1', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiGetScheduleV1Request) => {
    return await sdkWrapper.getScheduleV1(request, apiConfig);
});
ipcMain.handle('get-schema-mapped-profiles-collection-nerm', async (event, request: sdk.IscAccountsNERMApiGetSchemaMappedProfilesCollectionRequest = {}) => {
    return await sdkWrapper.getSchemaMappedProfilesCollectionNerm(request, apiConfig);
});
ipcMain.handle('get-search-attribute-config-v-1', async (event, request: searchAttributeConfigurationTypes.SearchAttributeConfigurationApiGetSearchAttributeConfigV1Request = {}) => {
    return await sdkWrapper.getSearchAttributeConfigV1(request, apiConfig);
});
ipcMain.handle('get-sed-batches-v-1', async (event, request: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiGetSedBatchesV1Request = {}) => {
    return await sdkWrapper.getSedBatchesV1(request, apiConfig);
});
ipcMain.handle('get-sed-batch-stats-v-1', async (event, request: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiGetSedBatchStatsV1Request) => {
    return await sdkWrapper.getSedBatchStatsV1(request, apiConfig);
});
ipcMain.handle('get-segment-v-1', async (event, request: segmentsTypes.SegmentsApiGetSegmentV1Request) => {
    return await sdkWrapper.getSegmentV1(request, apiConfig);
});
ipcMain.handle('get-service-desk-integrations-v-1', async (event, request: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiGetServiceDeskIntegrationsV1Request = {}) => {
    return await sdkWrapper.getServiceDeskIntegrationsV1(request, apiConfig);
});
ipcMain.handle('get-service-desk-integration-template-v-1', async (event, request: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiGetServiceDeskIntegrationTemplateV1Request) => {
    return await sdkWrapper.getServiceDeskIntegrationTemplateV1(request, apiConfig);
});
ipcMain.handle('get-service-desk-integration-types-v-1', async (event) => {
    return await sdkWrapper.getServiceDeskIntegrationTypesV1(apiConfig);
});
ipcMain.handle('get-service-desk-integration-v-1', async (event, request: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiGetServiceDeskIntegrationV1Request) => {
    return await sdkWrapper.getServiceDeskIntegrationV1(request, apiConfig);
});
ipcMain.handle('get-simintegrations-v-1', async (event, request: simIntegrationsTypes.SIMIntegrationsApiGetSIMIntegrationsV1Request = {}) => {
    return await sdkWrapper.getSIMIntegrationsV1(request, apiConfig);
});
ipcMain.handle('get-simintegration-v-1', async (event, request: simIntegrationsTypes.SIMIntegrationsApiGetSIMIntegrationV1Request) => {
    return await sdkWrapper.getSIMIntegrationV1(request, apiConfig);
});
ipcMain.handle('get-single-schema-mapped-profile-nerm', async (event, request: sdk.IscAccountsNERMApiGetSingleSchemaMappedProfileRequest) => {
    return await sdkWrapper.getSingleSchemaMappedProfileNerm(request, apiConfig);
});
ipcMain.handle('get-single-search-attribute-config-v-1', async (event, request: searchAttributeConfigurationTypes.SearchAttributeConfigurationApiGetSingleSearchAttributeConfigV1Request) => {
    return await sdkWrapper.getSingleSearchAttributeConfigV1(request, apiConfig);
});
ipcMain.handle('get-sod-all-report-run-status-v-1', async (event) => {
    return await sdkWrapper.getSodAllReportRunStatusV1(apiConfig);
});
ipcMain.handle('get-sod-policy-schedule-v-1', async (event, request: sodPoliciesTypes.SODPoliciesApiGetSodPolicyScheduleV1Request) => {
    return await sdkWrapper.getSodPolicyScheduleV1(request, apiConfig);
});
ipcMain.handle('get-sod-policy-v-1', async (event, request: sodPoliciesTypes.SODPoliciesApiGetSodPolicyV1Request) => {
    return await sdkWrapper.getSodPolicyV1(request, apiConfig);
});
ipcMain.handle('get-sod-violation-report-run-status-v-1', async (event, request: sodPoliciesTypes.SODPoliciesApiGetSodViolationReportRunStatusV1Request) => {
    return await sdkWrapper.getSodViolationReportRunStatusV1(request, apiConfig);
});
ipcMain.handle('get-sod-violation-report-status-v-1', async (event, request: sodPoliciesTypes.SODPoliciesApiGetSodViolationReportStatusV1Request) => {
    return await sdkWrapper.getSodViolationReportStatusV1(request, apiConfig);
});
ipcMain.handle('get-source-app-v-1', async (event, request: appsTypes.AppsApiGetSourceAppV1Request) => {
    return await sdkWrapper.getSourceAppV1(request, apiConfig);
});
ipcMain.handle('get-source-attr-sync-config-v-1', async (event, request: sourcesTypes.SourcesApiGetSourceAttrSyncConfigV1Request) => {
    return await sdkWrapper.getSourceAttrSyncConfigV1(request, apiConfig);
});
ipcMain.handle('get-source-config-v-1', async (event, request: sourcesTypes.SourcesApiGetSourceConfigV1Request) => {
    return await sdkWrapper.getSourceConfigV1(request, apiConfig);
});
ipcMain.handle('get-source-connections-v-1', async (event, request: sourcesTypes.SourcesApiGetSourceConnectionsV1Request) => {
    return await sdkWrapper.getSourceConnectionsV1(request, apiConfig);
});
ipcMain.handle('get-source-entitlement-request-config-v-1', async (event, request: sourcesTypes.SourcesApiGetSourceEntitlementRequestConfigV1Request) => {
    return await sdkWrapper.getSourceEntitlementRequestConfigV1(request, apiConfig);
});
ipcMain.handle('get-source-health-v-1', async (event, request: sourcesTypes.SourcesApiGetSourceHealthV1Request) => {
    return await sdkWrapper.getSourceHealthV1(request, apiConfig);
});
ipcMain.handle('get-source-schedules-v-1', async (event, request: sourcesTypes.SourcesApiGetSourceSchedulesV1Request) => {
    return await sdkWrapper.getSourceSchedulesV1(request, apiConfig);
});
ipcMain.handle('get-source-schedule-v-1', async (event, request: sourcesTypes.SourcesApiGetSourceScheduleV1Request) => {
    return await sdkWrapper.getSourceScheduleV1(request, apiConfig);
});
ipcMain.handle('get-source-schemas-v-1', async (event, request: sourcesTypes.SourcesApiGetSourceSchemasV1Request) => {
    return await sdkWrapper.getSourceSchemasV1(request, apiConfig);
});
ipcMain.handle('get-source-schema-v-1', async (event, request: sourcesTypes.SourcesApiGetSourceSchemaV1Request) => {
    return await sdkWrapper.getSourceSchemaV1(request, apiConfig);
});
ipcMain.handle('get-source-subtype-by-id-v-1', async (event, request: machineAccountSubtypesTypes.MachineAccountSubtypesApiGetSourceSubtypeByIdV1Request) => {
    return await sdkWrapper.getSourceSubtypeByIdV1(request, apiConfig);
});
ipcMain.handle('get-sources-within-multi-host-v-1', async (event, request: multiHostIntegrationTypes.MultiHostIntegrationApiGetSourcesWithinMultiHostV1Request) => {
    return await sdkWrapper.getSourcesWithinMultiHostV1(request, apiConfig);
});
ipcMain.handle('get-source-v-1', async (event, request: sourcesTypes.SourcesApiGetSourceV1Request) => {
    return await sdkWrapper.getSourceV1(request, apiConfig);
});
ipcMain.handle('get-sp-config-export-status-v-1', async (event, request: spConfigTypes.SPConfigApiGetSpConfigExportStatusV1Request) => {
    return await sdkWrapper.getSpConfigExportStatusV1(request, apiConfig);
});
ipcMain.handle('get-sp-config-export-v-1', async (event, request: spConfigTypes.SPConfigApiGetSpConfigExportV1Request) => {
    return await sdkWrapper.getSpConfigExportV1(request, apiConfig);
});
ipcMain.handle('get-sp-config-import-status-v-1', async (event, request: spConfigTypes.SPConfigApiGetSpConfigImportStatusV1Request) => {
    return await sdkWrapper.getSpConfigImportStatusV1(request, apiConfig);
});
ipcMain.handle('get-sp-config-import-v-1', async (event, request: spConfigTypes.SPConfigApiGetSpConfigImportV1Request) => {
    return await sdkWrapper.getSpConfigImportV1(request, apiConfig);
});
ipcMain.handle('get-ssfconfiguration-v-1', async (event) => {
    return await sdkWrapper.getSSFConfigurationV1(apiConfig);
});
ipcMain.handle('get-status-by-source-id-v-1', async (event, request: sourceUsagesTypes.SourceUsagesApiGetStatusBySourceIdV1Request) => {
    return await sdkWrapper.getStatusBySourceIdV1(request, apiConfig);
});
ipcMain.handle('get-status-check-details-v-1', async (event) => {
    return await sdkWrapper.getStatusCheckDetailsV1(apiConfig);
});
ipcMain.handle('get-stream-status-v-1', async (event, request: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiGetStreamStatusV1Request) => {
    return await sdkWrapper.getStreamStatusV1(request, apiConfig);
});
ipcMain.handle('get-stream-v-1', async (event, request: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiGetStreamV1Request = {}) => {
    return await sdkWrapper.getStreamV1(request, apiConfig);
});
ipcMain.handle('get-system-roles-nerm', async (event, request: sdk.SystemRolesNERMApiGetSystemRolesRequest = {}) => {
    return await sdkWrapper.getSystemRolesNerm(request, apiConfig);
});
ipcMain.handle('get-tag-by-id-v-1', async (event, request: tagsTypes.TagsApiGetTagByIdV1Request) => {
    return await sdkWrapper.getTagByIdV1(request, apiConfig);
});
ipcMain.handle('get-tagged-object-v-1', async (event, request: taggedObjectsTypes.TaggedObjectsApiGetTaggedObjectV1Request) => {
    return await sdkWrapper.getTaggedObjectV1(request, apiConfig);
});
ipcMain.handle('get-task-status-list-v-1', async (event, request: taskManagementTypes.TaskManagementApiGetTaskStatusListV1Request = {}) => {
    return await sdkWrapper.getTaskStatusListV1(request, apiConfig);
});
ipcMain.handle('get-task-status-v-1', async (event, request: taskManagementTypes.TaskManagementApiGetTaskStatusV1Request) => {
    return await sdkWrapper.getTaskStatusV1(request, apiConfig);
});
ipcMain.handle('get-tasks-v-1', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiGetTasksV1Request = {}) => {
    return await sdkWrapper.getTasksV1(request, apiConfig);
});
ipcMain.handle('get-task-v-1', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiGetTaskV1Request) => {
    return await sdkWrapper.getTaskV1(request, apiConfig);
});
ipcMain.handle('get-tenant-config-configuration-v-1', async (event, request: workReassignmentTypes.WorkReassignmentApiGetTenantConfigConfigurationV1Request = {}) => {
    return await sdkWrapper.getTenantConfigConfigurationV1(request, apiConfig);
});
ipcMain.handle('get-tenant-context-v-1', async (event) => {
    return await sdkWrapper.getTenantContextV1(apiConfig);
});
ipcMain.handle('get-tenant-ui-metadata-v-1', async (event, request: uiMetadataTypes.UIMetadataApiGetTenantUiMetadataV1Request = {}) => {
    return await sdkWrapper.getTenantUiMetadataV1(request, apiConfig);
});
ipcMain.handle('get-tenant-v-1', async (event) => {
    return await sdkWrapper.getTenantV1(apiConfig);
});
ipcMain.handle('get-total-count-v-1', async (event, request: apiUsageTypes.ApiUsageApiGetTotalCountV1Request = {}) => {
    return await sdkWrapper.getTotalCountV1(request, apiConfig);
});
ipcMain.handle('get-transform-v-1', async (event, request: transformsTypes.TransformsApiGetTransformV1Request) => {
    return await sdkWrapper.getTransformV1(request, apiConfig);
});
ipcMain.handle('get-uploaded-configuration-v-1', async (event, request: configurationHubTypes.ConfigurationHubApiGetUploadedConfigurationV1Request) => {
    return await sdkWrapper.getUploadedConfigurationV1(request, apiConfig);
});
ipcMain.handle('get-usages-by-account-id-v-1', async (event, request: accountUsagesTypes.AccountUsagesApiGetUsagesByAccountIdV1Request) => {
    return await sdkWrapper.getUsagesByAccountIdV1(request, apiConfig);
});
ipcMain.handle('get-usages-by-source-id-v-1', async (event, request: sourceUsagesTypes.SourceUsagesApiGetUsagesBySourceIdV1Request) => {
    return await sdkWrapper.getUsagesBySourceIdV1(request, apiConfig);
});
ipcMain.handle('get-user-avatar-nerm', async (event, request: sdk.UsersNERMApiGetUserAvatarRequest) => {
    return await sdkWrapper.getUserAvatarNerm(request, apiConfig);
});
ipcMain.handle('get-user-level-v-1', async (event, request: customUserLevelsTypes.CustomUserLevelsApiGetUserLevelV1Request) => {
    return await sdkWrapper.getUserLevelV1(request, apiConfig);
});
ipcMain.handle('get-user-manager-nerm', async (event, request: sdk.UserManagersNERMApiGetUserManagerRequest) => {
    return await sdkWrapper.getUserManagerNerm(request, apiConfig);
});
ipcMain.handle('get-user-managers-nerm', async (event, request: sdk.UserManagersNERMApiGetUserManagersRequest = {}) => {
    return await sdkWrapper.getUserManagersNerm(request, apiConfig);
});
ipcMain.handle('get-user-nerm', async (event, request: sdk.UsersNERMApiGetUserRequest) => {
    return await sdkWrapper.getUserNerm(request, apiConfig);
});
ipcMain.handle('get-user-profile-nerm', async (event, request: sdk.UserProfilesNERMApiGetUserProfileRequest) => {
    return await sdkWrapper.getUserProfileNerm(request, apiConfig);
});
ipcMain.handle('get-user-profiles-nerm', async (event, request: sdk.UserProfilesNERMApiGetUserProfilesRequest = {}) => {
    return await sdkWrapper.getUserProfilesNerm(request, apiConfig);
});
ipcMain.handle('get-user-role-nerm', async (event, request: sdk.UserRolesNERMApiGetUserRoleRequest) => {
    return await sdkWrapper.getUserRoleNerm(request, apiConfig);
});
ipcMain.handle('get-user-roles-nerm', async (event, request: sdk.UserRolesNERMApiGetUserRolesRequest = {}) => {
    return await sdkWrapper.getUserRolesNerm(request, apiConfig);
});
ipcMain.handle('get-users-nerm', async (event, request: sdk.UsersNERMApiGetUsersRequest = {}) => {
    return await sdkWrapper.getUsersNerm(request, apiConfig);
});
ipcMain.handle('get-valid-time-zones-v-1', async (event, request: orgConfigTypes.OrgConfigApiGetValidTimeZonesV1Request = {}) => {
    return await sdkWrapper.getValidTimeZonesV1(request, apiConfig);
});
ipcMain.handle('get-workflow-actions-nerm', async (event, request: sdk.WorkflowActionsNERMApiGetWorkflowActionsRequest = {}) => {
    return await sdkWrapper.getWorkflowActionsNerm(request, apiConfig);
});
ipcMain.handle('get-workflow-execution-history-v-1', async (event, request: workflowsTypes.WorkflowsApiGetWorkflowExecutionHistoryV1Request) => {
    return await sdkWrapper.getWorkflowExecutionHistoryV1(request, apiConfig);
});
ipcMain.handle('get-workflow-execution-history-v-2', async (event, request: workflowsTypes.WorkflowsApiGetWorkflowExecutionHistoryV2Request) => {
    return await sdkWrapper.getWorkflowExecutionHistoryV2(request, apiConfig);
});
ipcMain.handle('get-workflow-executions-v-1', async (event, request: workflowsTypes.WorkflowsApiGetWorkflowExecutionsV1Request) => {
    return await sdkWrapper.getWorkflowExecutionsV1(request, apiConfig);
});
ipcMain.handle('get-workflow-execution-v-1', async (event, request: workflowsTypes.WorkflowsApiGetWorkflowExecutionV1Request) => {
    return await sdkWrapper.getWorkflowExecutionV1(request, apiConfig);
});
ipcMain.handle('get-workflow-session-nerm', async (event, request: sdk.WorkflowSessionsNERMApiGetWorkflowSessionRequest) => {
    return await sdkWrapper.getWorkflowSessionNerm(request, apiConfig);
});
ipcMain.handle('get-workflow-sessions-nerm', async (event, request: sdk.WorkflowSessionsNERMApiGetWorkflowSessionsRequest = {}) => {
    return await sdkWrapper.getWorkflowSessionsNerm(request, apiConfig);
});
ipcMain.handle('get-workflow-session-upload-nerm', async (event, request: sdk.WorkflowSessionsNERMApiGetWorkflowSessionUploadRequest) => {
    return await sdkWrapper.getWorkflowSessionUploadNerm(request, apiConfig);
});
ipcMain.handle('get-workflow-v-1', async (event, request: workflowsTypes.WorkflowsApiGetWorkflowV1Request) => {
    return await sdkWrapper.getWorkflowV1(request, apiConfig);
});
ipcMain.handle('get-workgroup-v-1', async (event, request: governanceGroupsTypes.GovernanceGroupsApiGetWorkgroupV1Request) => {
    return await sdkWrapper.getWorkgroupV1(request, apiConfig);
});
ipcMain.handle('get-work-items-summary-v-1', async (event, request: workItemsTypes.WorkItemsApiGetWorkItemsSummaryV1Request = {}) => {
    return await sdkWrapper.getWorkItemsSummaryV1(request, apiConfig);
});
ipcMain.handle('get-work-item-v-1', async (event, request: workItemsTypes.WorkItemsApiGetWorkItemV1Request) => {
    return await sdkWrapper.getWorkItemV1(request, apiConfig);
});
ipcMain.handle('ignore-identity-outliers-v-1', async (event, request: iaiOutliersTypes.IAIOutliersApiIgnoreIdentityOutliersV1Request) => {
    return await sdkWrapper.ignoreIdentityOutliersV1(request, apiConfig);
});
ipcMain.handle('import-accounts-schema-v-1', async (event, request: sourcesTypes.SourcesApiImportAccountsSchemaV1Request) => {
    return await sdkWrapper.importAccountsSchemaV1(request, apiConfig);
});
ipcMain.handle('import-accounts-v-1', async (event, request: sourcesTypes.SourcesApiImportAccountsV1Request) => {
    return await sdkWrapper.importAccountsV1(request, apiConfig);
});
ipcMain.handle('import-connector-file-v-1', async (event, request: sourcesTypes.SourcesApiImportConnectorFileV1Request) => {
    return await sdkWrapper.importConnectorFileV1(request, apiConfig);
});
ipcMain.handle('import-entitlements-by-source-v-1', async (event, request: entitlementsTypes.EntitlementsApiImportEntitlementsBySourceV1Request) => {
    return await sdkWrapper.importEntitlementsBySourceV1(request, apiConfig);
});
ipcMain.handle('import-entitlements-schema-v-1', async (event, request: sourcesTypes.SourcesApiImportEntitlementsSchemaV1Request) => {
    return await sdkWrapper.importEntitlementsSchemaV1(request, apiConfig);
});
ipcMain.handle('import-entitlements-v-1', async (event, request: sourcesTypes.SourcesApiImportEntitlementsV1Request) => {
    return await sdkWrapper.importEntitlementsV1(request, apiConfig);
});
ipcMain.handle('import-form-definitions-v-1', async (event, request: customFormsTypes.CustomFormsApiImportFormDefinitionsV1Request = {}) => {
    return await sdkWrapper.importFormDefinitionsV1(request, apiConfig);
});
ipcMain.handle('import-identity-profiles-v-1', async (event, request: identityProfilesTypes.IdentityProfilesApiImportIdentityProfilesV1Request) => {
    return await sdkWrapper.importIdentityProfilesV1(request, apiConfig);
});
ipcMain.handle('import-non-employee-records-in-bulk-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiImportNonEmployeeRecordsInBulkV1Request) => {
    return await sdkWrapper.importNonEmployeeRecordsInBulkV1(request, apiConfig);
});
ipcMain.handle('import-sp-config-v-1', async (event, request: spConfigTypes.SPConfigApiImportSpConfigV1Request) => {
    return await sdkWrapper.importSpConfigV1(request, apiConfig);
});
ipcMain.handle('import-uncorrelated-accounts-v-1', async (event, request: sourcesTypes.SourcesApiImportUncorrelatedAccountsV1Request) => {
    return await sdkWrapper.importUncorrelatedAccountsV1(request, apiConfig);
});
ipcMain.handle('list-access-model-metadata-attribute-v-1', async (event, request: accessModelMetadataTypes.AccessModelMetadataApiListAccessModelMetadataAttributeV1Request = {}) => {
    return await sdkWrapper.listAccessModelMetadataAttributeV1(request, apiConfig);
});
ipcMain.handle('list-access-model-metadata-attribute-value-v-1', async (event, request: accessModelMetadataTypes.AccessModelMetadataApiListAccessModelMetadataAttributeValueV1Request) => {
    return await sdkWrapper.listAccessModelMetadataAttributeValueV1(request, apiConfig);
});
ipcMain.handle('list-access-profiles-for-source-app-v-1', async (event, request: appsTypes.AppsApiListAccessProfilesForSourceAppV1Request) => {
    return await sdkWrapper.listAccessProfilesForSourceAppV1(request, apiConfig);
});
ipcMain.handle('list-access-profiles-v-1', async (event, request: accessProfilesTypes.AccessProfilesApiListAccessProfilesV1Request = {}) => {
    return await sdkWrapper.listAccessProfilesV1(request, apiConfig);
});
ipcMain.handle('list-access-request-approvers-v-1', async (event, request: accessRequestApprovalsTypes.AccessRequestApprovalsApiListAccessRequestApproversV1Request) => {
    return await sdkWrapper.listAccessRequestApproversV1(request, apiConfig);
});
ipcMain.handle('list-access-request-status-v-1', async (event, request: accessRequestsTypes.AccessRequestsApiListAccessRequestStatusV1Request = {}) => {
    return await sdkWrapper.listAccessRequestStatusV1(request, apiConfig);
});
ipcMain.handle('list-account-activities-v-1', async (event, request: accountActivitiesTypes.AccountActivitiesApiListAccountActivitiesV1Request = {}) => {
    return await sdkWrapper.listAccountActivitiesV1(request, apiConfig);
});
ipcMain.handle('list-accounts-v-1', async (event, request: accountsTypes.AccountsApiListAccountsV1Request = {}) => {
    return await sdkWrapper.listAccountsV1(request, apiConfig);
});
ipcMain.handle('list-administrators-access-request-status-v-1', async (event, request: accessRequestsTypes.AccessRequestsApiListAdministratorsAccessRequestStatusV1Request) => {
    return await sdkWrapper.listAdministratorsAccessRequestStatusV1(request, apiConfig);
});
ipcMain.handle('list-all-authorization-right-sets-v-1', async (event, request: customUserLevelsTypes.CustomUserLevelsApiListAllAuthorizationRightSetsV1Request = {}) => {
    return await sdkWrapper.listAllAuthorizationRightSetsV1(request, apiConfig);
});
ipcMain.handle('list-all-source-app-v-1', async (event, request: appsTypes.AppsApiListAllSourceAppV1Request = {}) => {
    return await sdkWrapper.listAllSourceAppV1(request, apiConfig);
});
ipcMain.handle('list-all-user-apps-v-1', async (event, request: appsTypes.AppsApiListAllUserAppsV1Request) => {
    return await sdkWrapper.listAllUserAppsV1(request, apiConfig);
});
ipcMain.handle('list-api-summary-v-1', async (event, request: apiUsageTypes.ApiUsageApiListApiSummaryV1Request = {}) => {
    return await sdkWrapper.listApiSummaryV1(request, apiConfig);
});
ipcMain.handle('list-assigned-source-app-v-1', async (event, request: appsTypes.AppsApiListAssignedSourceAppV1Request = {}) => {
    return await sdkWrapper.listAssignedSourceAppV1(request, apiConfig);
});
ipcMain.handle('list-available-accounts-for-user-app-v-1', async (event, request: appsTypes.AppsApiListAvailableAccountsForUserAppV1Request) => {
    return await sdkWrapper.listAvailableAccountsForUserAppV1(request, apiConfig);
});
ipcMain.handle('list-available-source-apps-v-1', async (event, request: appsTypes.AppsApiListAvailableSourceAppsV1Request = {}) => {
    return await sdkWrapper.listAvailableSourceAppsV1(request, apiConfig);
});
ipcMain.handle('list-backups-v-1', async (event, request: configurationHubTypes.ConfigurationHubApiListBackupsV1Request = {}) => {
    return await sdkWrapper.listBackupsV1(request, apiConfig);
});
ipcMain.handle('list-campaign-filters-v-1', async (event, request: certificationCampaignFiltersTypes.CertificationCampaignFiltersApiListCampaignFiltersV1Request = {}) => {
    return await sdkWrapper.listCampaignFiltersV1(request, apiConfig);
});
ipcMain.handle('list-certification-reviewers-v-1', async (event, request: certificationsTypes.CertificationsApiListCertificationReviewersV1Request) => {
    return await sdkWrapper.listCertificationReviewersV1(request, apiConfig);
});
ipcMain.handle('list-completed-approvals-v-1', async (event, request: accessRequestApprovalsTypes.AccessRequestApprovalsApiListCompletedApprovalsV1Request = {}) => {
    return await sdkWrapper.listCompletedApprovalsV1(request, apiConfig);
});
ipcMain.handle('list-complete-workflow-library-v-1', async (event, request: workflowsTypes.WorkflowsApiListCompleteWorkflowLibraryV1Request = {}) => {
    return await sdkWrapper.listCompleteWorkflowLibraryV1(request, apiConfig);
});
ipcMain.handle('list-connections-v-1', async (event, request: governanceGroupsTypes.GovernanceGroupsApiListConnectionsV1Request) => {
    return await sdkWrapper.listConnectionsV1(request, apiConfig);
});
ipcMain.handle('list-connector-customizers-v-1', async (event, request: connectorCustomizersTypes.ConnectorCustomizersApiListConnectorCustomizersV1Request = {}) => {
    return await sdkWrapper.listConnectorCustomizersV1(request, apiConfig);
});
ipcMain.handle('list-data-segments-v-1', async (event, request: dataSegmentationTypes.DataSegmentationApiListDataSegmentsV1Request = {}) => {
    return await sdkWrapper.listDataSegmentsV1(request, apiConfig);
});
ipcMain.handle('list-deploys-v-1', async (event) => {
    return await sdkWrapper.listDeploysV1(apiConfig);
});
ipcMain.handle('list-dimension-access-profiles-v-1', async (event, request: dimensionsTypes.DimensionsApiListDimensionAccessProfilesV1Request) => {
    return await sdkWrapper.listDimensionAccessProfilesV1(request, apiConfig);
});
ipcMain.handle('list-dimensions-v-1', async (event, request: dimensionsTypes.DimensionsApiListDimensionsV1Request) => {
    return await sdkWrapper.listDimensionsV1(request, apiConfig);
});
ipcMain.handle('list-drafts-v-1', async (event, request: configurationHubTypes.ConfigurationHubApiListDraftsV1Request = {}) => {
    return await sdkWrapper.listDraftsV1(request, apiConfig);
});
ipcMain.handle('list-entitlement-children-v-1', async (event, request: entitlementsTypes.EntitlementsApiListEntitlementChildrenV1Request) => {
    return await sdkWrapper.listEntitlementChildrenV1(request, apiConfig);
});
ipcMain.handle('list-entitlement-connections-for-current-identity-v-1', async (event, request: entitlementConnectionsTypes.EntitlementConnectionsApiListEntitlementConnectionsForCurrentIdentityV1Request = {}) => {
    return await sdkWrapper.listEntitlementConnectionsForCurrentIdentityV1(request, apiConfig);
});
ipcMain.handle('list-entitlement-connections-v-1', async (event, request: entitlementConnectionsTypes.EntitlementConnectionsApiListEntitlementConnectionsV1Request = {}) => {
    return await sdkWrapper.listEntitlementConnectionsV1(request, apiConfig);
});
ipcMain.handle('list-entitlement-parents-v-1', async (event, request: entitlementsTypes.EntitlementsApiListEntitlementParentsV1Request) => {
    return await sdkWrapper.listEntitlementParentsV1(request, apiConfig);
});
ipcMain.handle('list-entitlements-by-account-v-1', async (event, request: entitlementsTypes.EntitlementsApiListEntitlementsByAccountV1Request) => {
    return await sdkWrapper.listEntitlementsByAccountV1(request, apiConfig);
});
ipcMain.handle('list-entitlements-by-identity-v-1', async (event, request: identitiesTypes.IdentitiesApiListEntitlementsByIdentityV1Request) => {
    return await sdkWrapper.listEntitlementsByIdentityV1(request, apiConfig);
});
ipcMain.handle('list-entitlements-v-1', async (event, request: entitlementsTypes.EntitlementsApiListEntitlementsV1Request = {}) => {
    return await sdkWrapper.listEntitlementsV1(request, apiConfig);
});
ipcMain.handle('list-from-addresses-v-1', async (event, request: notificationsTypes.NotificationsApiListFromAddressesV1Request = {}) => {
    return await sdkWrapper.listFromAddressesV1(request, apiConfig);
});
ipcMain.handle('list-historical-identities-v-1', async (event, request: identityHistoryTypes.IdentityHistoryApiListHistoricalIdentitiesV1Request = {}) => {
    return await sdkWrapper.listHistoricalIdentitiesV1(request, apiConfig);
});
ipcMain.handle('list-identities-v-1', async (event, request: identitiesTypes.IdentitiesApiListIdentitiesV1Request = {}) => {
    return await sdkWrapper.listIdentitiesV1(request, apiConfig);
});
ipcMain.handle('list-identity-access-items-v-1', async (event, request: identityHistoryTypes.IdentityHistoryApiListIdentityAccessItemsV1Request) => {
    return await sdkWrapper.listIdentityAccessItemsV1(request, apiConfig);
});
ipcMain.handle('list-identity-access-review-items-v-1', async (event, request: certificationsTypes.CertificationsApiListIdentityAccessReviewItemsV1Request) => {
    return await sdkWrapper.listIdentityAccessReviewItemsV1(request, apiConfig);
});
ipcMain.handle('list-identity-attributes-v-1', async (event, request: identityAttributesTypes.IdentityAttributesApiListIdentityAttributesV1Request = {}) => {
    return await sdkWrapper.listIdentityAttributesV1(request, apiConfig);
});
ipcMain.handle('list-identity-certifications-v-1', async (event, request: certificationsTypes.CertificationsApiListIdentityCertificationsV1Request = {}) => {
    return await sdkWrapper.listIdentityCertificationsV1(request, apiConfig);
});
ipcMain.handle('list-identity-collectors-v-1', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiListIdentityCollectorsV1Request = {}) => {
    return await sdkWrapper.listIdentityCollectorsV1(request, apiConfig);
});
ipcMain.handle('list-identity-profiles-v-1', async (event, request: identityProfilesTypes.IdentityProfilesApiListIdentityProfilesV1Request = {}) => {
    return await sdkWrapper.listIdentityProfilesV1(request, apiConfig);
});
ipcMain.handle('list-identity-snapshot-access-items-v-1', async (event, request: identityHistoryTypes.IdentityHistoryApiListIdentitySnapshotAccessItemsV1Request) => {
    return await sdkWrapper.listIdentitySnapshotAccessItemsV1(request, apiConfig);
});
ipcMain.handle('list-identity-snapshots-v-1', async (event, request: identityHistoryTypes.IdentityHistoryApiListIdentitySnapshotsV1Request) => {
    return await sdkWrapper.listIdentitySnapshotsV1(request, apiConfig);
});
ipcMain.handle('list-machine-account-mappings-v-1', async (event, request: machineAccountMappingsTypes.MachineAccountMappingsApiListMachineAccountMappingsV1Request) => {
    return await sdkWrapper.listMachineAccountMappingsV1(request, apiConfig);
});
ipcMain.handle('list-machine-account-subtypes-v-1', async (event, request: machineAccountsTypes.MachineAccountsApiListMachineAccountSubtypesV1Request) => {
    return await sdkWrapper.listMachineAccountSubtypesV1(request, apiConfig);
});
ipcMain.handle('list-machine-accounts-v-1', async (event, request: machineAccountsTypes.MachineAccountsApiListMachineAccountsV1Request = {}) => {
    return await sdkWrapper.listMachineAccountsV1(request, apiConfig);
});
ipcMain.handle('list-machine-identities-v-1', async (event, request: machineIdentitiesTypes.MachineIdentitiesApiListMachineIdentitiesV1Request = {}) => {
    return await sdkWrapper.listMachineIdentitiesV1(request, apiConfig);
});
ipcMain.handle('list-machine-identity-user-entitlements-v-1', async (event, request: machineIdentitiesTypes.MachineIdentitiesApiListMachineIdentityUserEntitlementsV1Request = {}) => {
    return await sdkWrapper.listMachineIdentityUserEntitlementsV1(request, apiConfig);
});
ipcMain.handle('list-non-employee-approvals-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiListNonEmployeeApprovalsV1Request = {}) => {
    return await sdkWrapper.listNonEmployeeApprovalsV1(request, apiConfig);
});
ipcMain.handle('list-non-employee-records-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiListNonEmployeeRecordsV1Request = {}) => {
    return await sdkWrapper.listNonEmployeeRecordsV1(request, apiConfig);
});
ipcMain.handle('list-non-employee-requests-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiListNonEmployeeRequestsV1Request) => {
    return await sdkWrapper.listNonEmployeeRequestsV1(request, apiConfig);
});
ipcMain.handle('list-non-employee-sources-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiListNonEmployeeSourcesV1Request = {}) => {
    return await sdkWrapper.listNonEmployeeSourcesV1(request, apiConfig);
});
ipcMain.handle('list-notification-template-defaults-v-1', async (event, request: notificationsTypes.NotificationsApiListNotificationTemplateDefaultsV1Request = {}) => {
    return await sdkWrapper.listNotificationTemplateDefaultsV1(request, apiConfig);
});
ipcMain.handle('list-notification-templates-v-1', async (event, request: notificationsTypes.NotificationsApiListNotificationTemplatesV1Request = {}) => {
    return await sdkWrapper.listNotificationTemplatesV1(request, apiConfig);
});
ipcMain.handle('list-oauth-clients-v-1', async (event, request: oauthClientsTypes.OAuthClientsApiListOauthClientsV1Request = {}) => {
    return await sdkWrapper.listOauthClientsV1(request, apiConfig);
});
ipcMain.handle('list-outliers-contributing-feature-access-items-v-1', async (event, request: iaiOutliersTypes.IAIOutliersApiListOutliersContributingFeatureAccessItemsV1Request) => {
    return await sdkWrapper.listOutliersContributingFeatureAccessItemsV1(request, apiConfig);
});
ipcMain.handle('list-owned-user-apps-v-1', async (event, request: appsTypes.AppsApiListOwnedUserAppsV1Request = {}) => {
    return await sdkWrapper.listOwnedUserAppsV1(request, apiConfig);
});
ipcMain.handle('list-password-policies-v-1', async (event, request: passwordPoliciesTypes.PasswordPoliciesApiListPasswordPoliciesV1Request = {}) => {
    return await sdkWrapper.listPasswordPoliciesV1(request, apiConfig);
});
ipcMain.handle('list-password-policy-holders-on-source-v-1', async (event, request: sourcesTypes.SourcesApiListPasswordPolicyHoldersOnSourceV1Request) => {
    return await sdkWrapper.listPasswordPolicyHoldersOnSourceV1(request, apiConfig);
});
ipcMain.handle('list-pending-approvals-v-1', async (event, request: accessRequestApprovalsTypes.AccessRequestApprovalsApiListPendingApprovalsV1Request = {}) => {
    return await sdkWrapper.listPendingApprovalsV1(request, apiConfig);
});
ipcMain.handle('list-pending-entitlement-recommendation-approvals-v-1', async (event, request: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiListPendingEntitlementRecommendationApprovalsV1Request = {}) => {
    return await sdkWrapper.listPendingEntitlementRecommendationApprovalsV1(request, apiConfig);
});
ipcMain.handle('list-personal-access-tokens-v-1', async (event, request: personalAccessTokensTypes.PersonalAccessTokensApiListPersonalAccessTokensV1Request = {}) => {
    return await sdkWrapper.listPersonalAccessTokensV1(request, apiConfig);
});
ipcMain.handle('list-privilege-criteria-config-v-1', async (event, request: privilegeCriteriaConfigurationTypes.PrivilegeCriteriaConfigurationApiListPrivilegeCriteriaConfigV1Request) => {
    return await sdkWrapper.listPrivilegeCriteriaConfigV1(request, apiConfig);
});
ipcMain.handle('list-privilege-criteria-v-1', async (event, request: privilegeCriteriaTypes.PrivilegeCriteriaApiListPrivilegeCriteriaV1Request) => {
    return await sdkWrapper.listPrivilegeCriteriaV1(request, apiConfig);
});
ipcMain.handle('list-privileged-entitlement-recommendations-v-1', async (event, request: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiListPrivilegedEntitlementRecommendationsV1Request = {}) => {
    return await sdkWrapper.listPrivilegedEntitlementRecommendationsV1(request, apiConfig);
});
ipcMain.handle('list-provisioning-policies-v-1', async (event, request: sourcesTypes.SourcesApiListProvisioningPoliciesV1Request) => {
    return await sdkWrapper.listProvisioningPoliciesV1(request, apiConfig);
});
ipcMain.handle('list-provisioning-policies-v-2', async (event, request: sourcesTypes.SourcesApiListProvisioningPoliciesV2Request) => {
    return await sdkWrapper.listProvisioningPoliciesV2(request, apiConfig);
});
ipcMain.handle('list-reassignment-configurations-v-1', async (event, request: workReassignmentTypes.WorkReassignmentApiListReassignmentConfigurationsV1Request = {}) => {
    return await sdkWrapper.listReassignmentConfigurationsV1(request, apiConfig);
});
ipcMain.handle('list-requestable-objects-v-1', async (event, request: requestableObjectsTypes.RequestableObjectsApiListRequestableObjectsV1Request = {}) => {
    return await sdkWrapper.listRequestableObjectsV1(request, apiConfig);
});
ipcMain.handle('list-roles-v-1', async (event, request: rolesTypes.RolesApiListRolesV1Request = {}) => {
    return await sdkWrapper.listRolesV1(request, apiConfig);
});
ipcMain.handle('list-saved-searches-v-1', async (event, request: savedSearchTypes.SavedSearchApiListSavedSearchesV1Request = {}) => {
    return await sdkWrapper.listSavedSearchesV1(request, apiConfig);
});
ipcMain.handle('list-scheduled-actions-v-1', async (event) => {
    return await sdkWrapper.listScheduledActionsV1(apiConfig);
});
ipcMain.handle('list-scheduled-search-v-1', async (event, request: scheduledSearchTypes.ScheduledSearchApiListScheduledSearchV1Request = {}) => {
    return await sdkWrapper.listScheduledSearchV1(request, apiConfig);
});
ipcMain.handle('list-seds-v-1', async (event, request: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiListSedsV1Request = {}) => {
    return await sdkWrapper.listSedsV1(request, apiConfig);
});
ipcMain.handle('list-segments-v-1', async (event, request: segmentsTypes.SegmentsApiListSegmentsV1Request = {}) => {
    return await sdkWrapper.listSegmentsV1(request, apiConfig);
});
ipcMain.handle('list-sod-policies-v-1', async (event, request: sodPoliciesTypes.SODPoliciesApiListSodPoliciesV1Request = {}) => {
    return await sdkWrapper.listSodPoliciesV1(request, apiConfig);
});
ipcMain.handle('list-source-subtypes-v-1', async (event, request: machineAccountSubtypesTypes.MachineAccountSubtypesApiListSourceSubtypesV1Request = {}) => {
    return await sdkWrapper.listSourceSubtypesV1(request, apiConfig);
});
ipcMain.handle('list-sources-v-1', async (event, request: sourcesTypes.SourcesApiListSourcesV1Request = {}) => {
    return await sdkWrapper.listSourcesV1(request, apiConfig);
});
ipcMain.handle('list-sp-config-objects-v-1', async (event) => {
    return await sdkWrapper.listSpConfigObjectsV1(apiConfig);
});
ipcMain.handle('list-subscriptions-v-1', async (event, request: triggersTypes.TriggersApiListSubscriptionsV1Request = {}) => {
    return await sdkWrapper.listSubscriptionsV1(request, apiConfig);
});
ipcMain.handle('list-tagged-objects-by-type-v-1', async (event, request: taggedObjectsTypes.TaggedObjectsApiListTaggedObjectsByTypeV1Request) => {
    return await sdkWrapper.listTaggedObjectsByTypeV1(request, apiConfig);
});
ipcMain.handle('list-tagged-objects-v-1', async (event, request: taggedObjectsTypes.TaggedObjectsApiListTaggedObjectsV1Request = {}) => {
    return await sdkWrapper.listTaggedObjectsV1(request, apiConfig);
});
ipcMain.handle('list-tags-v-1', async (event, request: tagsTypes.TagsApiListTagsV1Request = {}) => {
    return await sdkWrapper.listTagsV1(request, apiConfig);
});
ipcMain.handle('list-transforms-v-1', async (event, request: transformsTypes.TransformsApiListTransformsV1Request = {}) => {
    return await sdkWrapper.listTransformsV1(request, apiConfig);
});
ipcMain.handle('list-trigger-invocation-status-v-1', async (event, request: triggersTypes.TriggersApiListTriggerInvocationStatusV1Request = {}) => {
    return await sdkWrapper.listTriggerInvocationStatusV1(request, apiConfig);
});
ipcMain.handle('list-triggers-v-1', async (event, request: triggersTypes.TriggersApiListTriggersV1Request = {}) => {
    return await sdkWrapper.listTriggersV1(request, apiConfig);
});
ipcMain.handle('list-uploaded-configurations-v-1', async (event, request: configurationHubTypes.ConfigurationHubApiListUploadedConfigurationsV1Request = {}) => {
    return await sdkWrapper.listUploadedConfigurationsV1(request, apiConfig);
});
ipcMain.handle('list-user-level-identities-v-1', async (event, request: customUserLevelsTypes.CustomUserLevelsApiListUserLevelIdentitiesV1Request) => {
    return await sdkWrapper.listUserLevelIdentitiesV1(request, apiConfig);
});
ipcMain.handle('list-user-levels-v-1', async (event, request: customUserLevelsTypes.CustomUserLevelsApiListUserLevelsV1Request = {}) => {
    return await sdkWrapper.listUserLevelsV1(request, apiConfig);
});
ipcMain.handle('list-workflow-library-actions-v-1', async (event, request: workflowsTypes.WorkflowsApiListWorkflowLibraryActionsV1Request = {}) => {
    return await sdkWrapper.listWorkflowLibraryActionsV1(request, apiConfig);
});
ipcMain.handle('list-workflow-library-operators-v-1', async (event) => {
    return await sdkWrapper.listWorkflowLibraryOperatorsV1(apiConfig);
});
ipcMain.handle('list-workflow-library-triggers-v-1', async (event, request: workflowsTypes.WorkflowsApiListWorkflowLibraryTriggersV1Request = {}) => {
    return await sdkWrapper.listWorkflowLibraryTriggersV1(request, apiConfig);
});
ipcMain.handle('list-workflows-v-1', async (event) => {
    return await sdkWrapper.listWorkflowsV1(apiConfig);
});
ipcMain.handle('list-workgroup-members-v-1', async (event, request: governanceGroupsTypes.GovernanceGroupsApiListWorkgroupMembersV1Request) => {
    return await sdkWrapper.listWorkgroupMembersV1(request, apiConfig);
});
ipcMain.handle('list-workgroups-v-1', async (event, request: governanceGroupsTypes.GovernanceGroupsApiListWorkgroupsV1Request = {}) => {
    return await sdkWrapper.listWorkgroupsV1(request, apiConfig);
});
ipcMain.handle('list-work-items-v-1', async (event, request: workItemsTypes.WorkItemsApiListWorkItemsV1Request = {}) => {
    return await sdkWrapper.listWorkItemsV1(request, apiConfig);
});
ipcMain.handle('load-account-selections-v-1', async (event, request: accessRequestsTypes.AccessRequestsApiLoadAccountSelectionsV1Request) => {
    return await sdkWrapper.loadAccountSelectionsV1(request, apiConfig);
});
ipcMain.handle('load-bulk-source-subtypes-v-1', async (event, request: machineAccountSubtypesTypes.MachineAccountSubtypesApiLoadBulkSourceSubtypesV1Request) => {
    return await sdkWrapper.loadBulkSourceSubtypesV1(request, apiConfig);
});
ipcMain.handle('make-identity-decision-v-1', async (event, request: certificationsTypes.CertificationsApiMakeIdentityDecisionV1Request) => {
    return await sdkWrapper.makeIdentityDecisionV1(request, apiConfig);
});
ipcMain.handle('move-approval-v-1', async (event, request: approvalsTypes.ApprovalsApiMoveApprovalV1Request) => {
    return await sdkWrapper.moveApprovalV1(request, apiConfig);
});
ipcMain.handle('move-v-1', async (event, request: certificationCampaignsTypes.CertificationCampaignsApiMoveV1Request) => {
    return await sdkWrapper.moveV1(request, apiConfig);
});
ipcMain.handle('patch-access-profile-v-1', async (event, request: accessProfilesTypes.AccessProfilesApiPatchAccessProfileV1Request) => {
    return await sdkWrapper.patchAccessProfileV1(request, apiConfig);
});
ipcMain.handle('patch-advanced-search-nerm', async (event, request: sdk.AdvancedSearchNERMApiPatchAdvancedSearchRequest) => {
    return await sdkWrapper.patchAdvancedSearchNerm(request, apiConfig);
});
ipcMain.handle('patch-attribute-option-by-id-nerm', async (event, request: sdk.AttributeOptionsNERMApiPatchAttributeOptionByIdRequest) => {
    return await sdkWrapper.patchAttributeOptionByIdNerm(request, apiConfig);
});
ipcMain.handle('patch-attribute-option-by-uid-nerm', async (event, request: sdk.AttributeOptionsNERMApiPatchAttributeOptionByUidRequest) => {
    return await sdkWrapper.patchAttributeOptionByUidNerm(request, apiConfig);
});
ipcMain.handle('patch-attribute-options-nerm', async (event, request: sdk.AttributeOptionsNERMApiPatchAttributeOptionsRequest) => {
    return await sdkWrapper.patchAttributeOptionsNerm(request, apiConfig);
});
ipcMain.handle('patch-auth-org-lockout-config-v-1', async (event, request: globalTenantSecuritySettingsTypes.GlobalTenantSecuritySettingsApiPatchAuthOrgLockoutConfigV1Request) => {
    return await sdkWrapper.patchAuthOrgLockoutConfigV1(request, apiConfig);
});
ipcMain.handle('patch-auth-org-network-config-v-1', async (event, request: globalTenantSecuritySettingsTypes.GlobalTenantSecuritySettingsApiPatchAuthOrgNetworkConfigV1Request) => {
    return await sdkWrapper.patchAuthOrgNetworkConfigV1(request, apiConfig);
});
ipcMain.handle('patch-auth-org-service-provider-config-v-1', async (event, request: globalTenantSecuritySettingsTypes.GlobalTenantSecuritySettingsApiPatchAuthOrgServiceProviderConfigV1Request) => {
    return await sdkWrapper.patchAuthOrgServiceProviderConfigV1(request, apiConfig);
});
ipcMain.handle('patch-auth-org-session-config-v-1', async (event, request: globalTenantSecuritySettingsTypes.GlobalTenantSecuritySettingsApiPatchAuthOrgSessionConfigV1Request) => {
    return await sdkWrapper.patchAuthOrgSessionConfigV1(request, apiConfig);
});
ipcMain.handle('patch-auth-user-v-1', async (event, request: authUsersTypes.AuthUsersApiPatchAuthUserV1Request) => {
    return await sdkWrapper.patchAuthUserV1(request, apiConfig);
});
ipcMain.handle('patch-before-provisioning-rule-v-1', async (event, request: simIntegrationsTypes.SIMIntegrationsApiPatchBeforeProvisioningRuleV1Request) => {
    return await sdkWrapper.patchBeforeProvisioningRuleV1(request, apiConfig);
});
ipcMain.handle('patch-campaign-template-v-1', async (event, request: certificationCampaignsTypes.CertificationCampaignsApiPatchCampaignTemplateV1Request) => {
    return await sdkWrapper.patchCampaignTemplateV1(request, apiConfig);
});
ipcMain.handle('patch-data-record-nerm', async (event, request: sdk.ConsolidationNERMApiPatchDataRecordRequest) => {
    return await sdkWrapper.patchDataRecordNerm(request, apiConfig);
});
ipcMain.handle('patch-data-segment-v-1', async (event, request: dataSegmentationTypes.DataSegmentationApiPatchDataSegmentV1Request) => {
    return await sdkWrapper.patchDataSegmentV1(request, apiConfig);
});
ipcMain.handle('patch-dimension-v-1', async (event, request: dimensionsTypes.DimensionsApiPatchDimensionV1Request) => {
    return await sdkWrapper.patchDimensionV1(request, apiConfig);
});
ipcMain.handle('patch-entitlement-connection-by-id-v-1', async (event, request: entitlementConnectionsTypes.EntitlementConnectionsApiPatchEntitlementConnectionByIdV1Request) => {
    return await sdkWrapper.patchEntitlementConnectionByIdV1(request, apiConfig);
});
ipcMain.handle('patch-entitlement-connection-by-query-v-1', async (event, request: entitlementConnectionsTypes.EntitlementConnectionsApiPatchEntitlementConnectionByQueryV1Request) => {
    return await sdkWrapper.patchEntitlementConnectionByQueryV1(request, apiConfig);
});
ipcMain.handle('patch-entitlement-recommendation-v-1', async (event, request: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiPatchEntitlementRecommendationV1Request) => {
    return await sdkWrapper.patchEntitlementRecommendationV1(request, apiConfig);
});
ipcMain.handle('patch-entitlement-v-1', async (event, request: entitlementsTypes.EntitlementsApiPatchEntitlementV1Request) => {
    return await sdkWrapper.patchEntitlementV1(request, apiConfig);
});
ipcMain.handle('patch-form-definition-v-1', async (event, request: customFormsTypes.CustomFormsApiPatchFormDefinitionV1Request) => {
    return await sdkWrapper.patchFormDefinitionV1(request, apiConfig);
});
ipcMain.handle('patch-form-instance-v-1', async (event, request: customFormsTypes.CustomFormsApiPatchFormInstanceV1Request) => {
    return await sdkWrapper.patchFormInstanceV1(request, apiConfig);
});
ipcMain.handle('patch-jit-activation-config-v-1', async (event, request: jitAccessTypes.JITAccessApiPatchJitActivationConfigV1Request) => {
    return await sdkWrapper.patchJitActivationConfigV1(request, apiConfig);
});
ipcMain.handle('patch-language-nerm', async (event, request: sdk.LanguagesNERMApiPatchLanguageRequest) => {
    return await sdkWrapper.patchLanguageNerm(request, apiConfig);
});
ipcMain.handle('patch-machine-account-subtype-by-technical-name-v-1', async (event, request: machineAccountsTypes.MachineAccountsApiPatchMachineAccountSubtypeByTechnicalNameV1Request) => {
    return await sdkWrapper.patchMachineAccountSubtypeByTechnicalNameV1(request, apiConfig);
});
ipcMain.handle('patch-machine-account-subtype-v-1', async (event, request: machineAccountSubtypesTypes.MachineAccountSubtypesApiPatchMachineAccountSubtypeV1Request) => {
    return await sdkWrapper.patchMachineAccountSubtypeV1(request, apiConfig);
});
ipcMain.handle('patch-non-employee-record-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiPatchNonEmployeeRecordV1Request) => {
    return await sdkWrapper.patchNonEmployeeRecordV1(request, apiConfig);
});
ipcMain.handle('patch-non-employee-schema-attribute-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiPatchNonEmployeeSchemaAttributeV1Request) => {
    return await sdkWrapper.patchNonEmployeeSchemaAttributeV1(request, apiConfig);
});
ipcMain.handle('patch-non-employee-source-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiPatchNonEmployeeSourceV1Request) => {
    return await sdkWrapper.patchNonEmployeeSourceV1(request, apiConfig);
});
ipcMain.handle('patch-oauth-client-v-1', async (event, request: oauthClientsTypes.OAuthClientsApiPatchOauthClientV1Request) => {
    return await sdkWrapper.patchOauthClientV1(request, apiConfig);
});
ipcMain.handle('patch-org-config-v-1', async (event, request: orgConfigTypes.OrgConfigApiPatchOrgConfigV1Request) => {
    return await sdkWrapper.patchOrgConfigV1(request, apiConfig);
});
ipcMain.handle('patch-personal-access-token-v-1', async (event, request: personalAccessTokensTypes.PersonalAccessTokensApiPatchPersonalAccessTokenV1Request) => {
    return await sdkWrapper.patchPersonalAccessTokenV1(request, apiConfig);
});
ipcMain.handle('patch-potential-role-session-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiPatchPotentialRoleSessionV1Request) => {
    return await sdkWrapper.patchPotentialRoleSessionV1(request, apiConfig);
});
ipcMain.handle('patch-potential-role-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiPatchPotentialRoleV1Request) => {
    return await sdkWrapper.patchPotentialRoleV1(request, apiConfig);
});
ipcMain.handle('patch-privilege-criteria-config-v-1', async (event, request: privilegeCriteriaConfigurationTypes.PrivilegeCriteriaConfigurationApiPatchPrivilegeCriteriaConfigV1Request) => {
    return await sdkWrapper.patchPrivilegeCriteriaConfigV1(request, apiConfig);
});
ipcMain.handle('patch-profile-by-id-nerm', async (event, request: sdk.ProfilesNERMApiPatchProfileByIdRequest) => {
    return await sdkWrapper.patchProfileByIdNerm(request, apiConfig);
});
ipcMain.handle('patch-profile-config-v-1', async (event, request: authProfileTypes.AuthProfileApiPatchProfileConfigV1Request) => {
    return await sdkWrapper.patchProfileConfigV1(request, apiConfig);
});
ipcMain.handle('patch-profiles-nerm', async (event, request: sdk.ProfilesNERMApiPatchProfilesRequest) => {
    return await sdkWrapper.patchProfilesNerm(request, apiConfig);
});
ipcMain.handle('patch-profile-type-by-id-nerm', async (event, request: sdk.ProfileTypesNERMApiPatchProfileTypeByIdRequest) => {
    return await sdkWrapper.patchProfileTypeByIdNerm(request, apiConfig);
});
ipcMain.handle('patch-profile-type-by-uid-nerm', async (event, request: sdk.ProfileTypesNERMApiPatchProfileTypeByUidRequest) => {
    return await sdkWrapper.patchProfileTypeByUidNerm(request, apiConfig);
});
ipcMain.handle('patch-role-mining-session-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiPatchRoleMiningSessionV1Request) => {
    return await sdkWrapper.patchRoleMiningSessionV1(request, apiConfig);
});
ipcMain.handle('patch-role-nerm', async (event, request: sdk.RolesNERMApiPatchRoleRequest) => {
    return await sdkWrapper.patchRoleNerm(request, apiConfig);
});
ipcMain.handle('patch-role-profile-nerm', async (event, request: sdk.RoleProfilesNERMApiPatchRoleProfileRequest) => {
    return await sdkWrapper.patchRoleProfileNerm(request, apiConfig);
});
ipcMain.handle('patch-role-profiles-nerm', async (event, request: sdk.RoleProfilesNERMApiPatchRoleProfilesRequest) => {
    return await sdkWrapper.patchRoleProfilesNerm(request, apiConfig);
});
ipcMain.handle('patch-roles-nerm', async (event, request: sdk.RolesNERMApiPatchRolesRequest) => {
    return await sdkWrapper.patchRolesNerm(request, apiConfig);
});
ipcMain.handle('patch-role-v-1', async (event, request: rolesTypes.RolesApiPatchRoleV1Request) => {
    return await sdkWrapper.patchRoleV1(request, apiConfig);
});
ipcMain.handle('patch-search-attribute-config-v-1', async (event, request: searchAttributeConfigurationTypes.SearchAttributeConfigurationApiPatchSearchAttributeConfigV1Request) => {
    return await sdkWrapper.patchSearchAttributeConfigV1(request, apiConfig);
});
ipcMain.handle('patch-sed-v-1', async (event, request: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiPatchSedV1Request) => {
    return await sdkWrapper.patchSedV1(request, apiConfig);
});
ipcMain.handle('patch-segment-v-1', async (event, request: segmentsTypes.SegmentsApiPatchSegmentV1Request) => {
    return await sdkWrapper.patchSegmentV1(request, apiConfig);
});
ipcMain.handle('patch-service-desk-integration-v-1', async (event, request: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiPatchServiceDeskIntegrationV1Request) => {
    return await sdkWrapper.patchServiceDeskIntegrationV1(request, apiConfig);
});
ipcMain.handle('patch-simattributes-v-1', async (event, request: simIntegrationsTypes.SIMIntegrationsApiPatchSIMAttributesV1Request) => {
    return await sdkWrapper.patchSIMAttributesV1(request, apiConfig);
});
ipcMain.handle('patch-sod-policy-v-1', async (event, request: sodPoliciesTypes.SODPoliciesApiPatchSodPolicyV1Request) => {
    return await sdkWrapper.patchSodPolicyV1(request, apiConfig);
});
ipcMain.handle('patch-source-app-v-1', async (event, request: appsTypes.AppsApiPatchSourceAppV1Request) => {
    return await sdkWrapper.patchSourceAppV1(request, apiConfig);
});
ipcMain.handle('patch-subscription-v-1', async (event, request: triggersTypes.TriggersApiPatchSubscriptionV1Request) => {
    return await sdkWrapper.patchSubscriptionV1(request, apiConfig);
});
ipcMain.handle('patch-tenant-context-v-1', async (event, request: tenantContextTypes.TenantContextApiPatchTenantContextV1Request) => {
    return await sdkWrapper.patchTenantContextV1(request, apiConfig);
});
ipcMain.handle('patch-user-app-v-1', async (event, request: appsTypes.AppsApiPatchUserAppV1Request) => {
    return await sdkWrapper.patchUserAppV1(request, apiConfig);
});
ipcMain.handle('patch-user-manager-nerm', async (event, request: sdk.UserManagersNERMApiPatchUserManagerRequest) => {
    return await sdkWrapper.patchUserManagerNerm(request, apiConfig);
});
ipcMain.handle('patch-user-managers-nerm', async (event, request: sdk.UserManagersNERMApiPatchUserManagersRequest) => {
    return await sdkWrapper.patchUserManagersNerm(request, apiConfig);
});
ipcMain.handle('patch-user-nerm', async (event, request: sdk.UsersNERMApiPatchUserRequest) => {
    return await sdkWrapper.patchUserNerm(request, apiConfig);
});
ipcMain.handle('patch-user-profile-nerm', async (event, request: sdk.UserProfilesNERMApiPatchUserProfileRequest) => {
    return await sdkWrapper.patchUserProfileNerm(request, apiConfig);
});
ipcMain.handle('patch-user-profiles-nerm', async (event, request: sdk.UserProfilesNERMApiPatchUserProfilesRequest) => {
    return await sdkWrapper.patchUserProfilesNerm(request, apiConfig);
});
ipcMain.handle('patch-user-role-nerm', async (event, request: sdk.UserRolesNERMApiPatchUserRoleRequest) => {
    return await sdkWrapper.patchUserRoleNerm(request, apiConfig);
});
ipcMain.handle('patch-user-roles-nerm', async (event, request: sdk.UserRolesNERMApiPatchUserRolesRequest) => {
    return await sdkWrapper.patchUserRolesNerm(request, apiConfig);
});
ipcMain.handle('patch-users-nerm', async (event, request: sdk.UsersNERMApiPatchUsersRequest) => {
    return await sdkWrapper.patchUsersNerm(request, apiConfig);
});
ipcMain.handle('patch-workflow-session-nerm', async (event, request: sdk.WorkflowSessionsNERMApiPatchWorkflowSessionRequest) => {
    return await sdkWrapper.patchWorkflowSessionNerm(request, apiConfig);
});
ipcMain.handle('patch-workflow-v-1', async (event, request: workflowsTypes.WorkflowsApiPatchWorkflowV1Request) => {
    return await sdkWrapper.patchWorkflowV1(request, apiConfig);
});
ipcMain.handle('patch-workgroup-v-1', async (event, request: governanceGroupsTypes.GovernanceGroupsApiPatchWorkgroupV1Request) => {
    return await sdkWrapper.patchWorkgroupV1(request, apiConfig);
});
ipcMain.handle('ping-cluster-v-1', async (event, request: sourcesTypes.SourcesApiPingClusterV1Request) => {
    return await sdkWrapper.pingClusterV1(request, apiConfig);
});
ipcMain.handle('publish-custom-user-level-v-1', async (event, request: customUserLevelsTypes.CustomUserLevelsApiPublishCustomUserLevelV1Request) => {
    return await sdkWrapper.publishCustomUserLevelV1(request, apiConfig);
});
ipcMain.handle('publish-data-segment-v-1', async (event, request: dataSegmentationTypes.DataSegmentationApiPublishDataSegmentV1Request) => {
    return await sdkWrapper.publishDataSegmentV1(request, apiConfig);
});
ipcMain.handle('put-account-v-1', async (event, request: accountsTypes.AccountsApiPutAccountV1Request) => {
    return await sdkWrapper.putAccountV1(request, apiConfig);
});
ipcMain.handle('put-application-v-1', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiPutApplicationV1Request) => {
    return await sdkWrapper.putApplicationV1(request, apiConfig);
});
ipcMain.handle('put-approvals-config-v-1', async (event, request: approvalsTypes.ApprovalsApiPutApprovalsConfigV1Request) => {
    return await sdkWrapper.putApprovalsConfigV1(request, apiConfig);
});
ipcMain.handle('put-client-log-configuration-v-1', async (event, request: managedClustersTypes.ManagedClustersApiPutClientLogConfigurationV1Request) => {
    return await sdkWrapper.putClientLogConfigurationV1(request, apiConfig);
});
ipcMain.handle('put-connector-correlation-config-v-1', async (event, request: connectorsTypes.ConnectorsApiPutConnectorCorrelationConfigV1Request) => {
    return await sdkWrapper.putConnectorCorrelationConfigV1(request, apiConfig);
});
ipcMain.handle('put-connector-customizer-v-1', async (event, request: connectorCustomizersTypes.ConnectorCustomizersApiPutConnectorCustomizerV1Request) => {
    return await sdkWrapper.putConnectorCustomizerV1(request, apiConfig);
});
ipcMain.handle('put-connector-rule-v-1', async (event, request: connectorRuleManagementTypes.ConnectorRuleManagementApiPutConnectorRuleV1Request) => {
    return await sdkWrapper.putConnectorRuleV1(request, apiConfig);
});
ipcMain.handle('put-connector-source-config-v-1', async (event, request: connectorsTypes.ConnectorsApiPutConnectorSourceConfigV1Request) => {
    return await sdkWrapper.putConnectorSourceConfigV1(request, apiConfig);
});
ipcMain.handle('put-connector-source-template-v-1', async (event, request: connectorsTypes.ConnectorsApiPutConnectorSourceTemplateV1Request) => {
    return await sdkWrapper.putConnectorSourceTemplateV1(request, apiConfig);
});
ipcMain.handle('put-connector-translations-v-1', async (event, request: connectorsTypes.ConnectorsApiPutConnectorTranslationsV1Request) => {
    return await sdkWrapper.putConnectorTranslationsV1(request, apiConfig);
});
ipcMain.handle('put-correlation-config-v-1', async (event, request: sourcesTypes.SourcesApiPutCorrelationConfigV1Request) => {
    return await sdkWrapper.putCorrelationConfigV1(request, apiConfig);
});
ipcMain.handle('put-custom-privilege-criteria-value-v-1', async (event, request: privilegeCriteriaTypes.PrivilegeCriteriaApiPutCustomPrivilegeCriteriaValueV1Request) => {
    return await sdkWrapper.putCustomPrivilegeCriteriaValueV1(request, apiConfig);
});
ipcMain.handle('put-entitlement-request-config-v-1', async (event, request: entitlementsTypes.EntitlementsApiPutEntitlementRequestConfigV1Request) => {
    return await sdkWrapper.putEntitlementRequestConfigV1(request, apiConfig);
});
ipcMain.handle('put-identity-attribute-v-1', async (event, request: identityAttributesTypes.IdentityAttributesApiPutIdentityAttributeV1Request) => {
    return await sdkWrapper.putIdentityAttributeV1(request, apiConfig);
});
ipcMain.handle('put-identity-collector-v-1', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiPutIdentityCollectorV1Request) => {
    return await sdkWrapper.putIdentityCollectorV1(request, apiConfig);
});
ipcMain.handle('put-launcher-v-1', async (event, request: launchersTypes.LaunchersApiPutLauncherV1Request) => {
    return await sdkWrapper.putLauncherV1(request, apiConfig);
});
ipcMain.handle('put-mail-from-attributes-v-1', async (event, request: notificationsTypes.NotificationsApiPutMailFromAttributesV1Request) => {
    return await sdkWrapper.putMailFromAttributesV1(request, apiConfig);
});
ipcMain.handle('put-native-change-detection-config-v-1', async (event, request: sourcesTypes.SourcesApiPutNativeChangeDetectionConfigV1Request) => {
    return await sdkWrapper.putNativeChangeDetectionConfigV1(request, apiConfig);
});
ipcMain.handle('put-password-dictionary-v-1', async (event, request: passwordDictionaryTypes.PasswordDictionaryApiPutPasswordDictionaryV1Request = {}) => {
    return await sdkWrapper.putPasswordDictionaryV1(request, apiConfig);
});
ipcMain.handle('put-password-org-config-v-1', async (event, request: passwordConfigurationTypes.PasswordConfigurationApiPutPasswordOrgConfigV1Request) => {
    return await sdkWrapper.putPasswordOrgConfigV1(request, apiConfig);
});
ipcMain.handle('put-policy-schedule-v-1', async (event, request: sodPoliciesTypes.SODPoliciesApiPutPolicyScheduleV1Request) => {
    return await sdkWrapper.putPolicyScheduleV1(request, apiConfig);
});
ipcMain.handle('put-provisioning-policy-v-1', async (event, request: sourcesTypes.SourcesApiPutProvisioningPolicyV1Request) => {
    return await sdkWrapper.putProvisioningPolicyV1(request, apiConfig);
});
ipcMain.handle('put-provisioning-policy-v-2', async (event, request: sourcesTypes.SourcesApiPutProvisioningPolicyV2Request) => {
    return await sdkWrapper.putProvisioningPolicyV2(request, apiConfig);
});
ipcMain.handle('put-reassignment-config-v-1', async (event, request: workReassignmentTypes.WorkReassignmentApiPutReassignmentConfigV1Request) => {
    return await sdkWrapper.putReassignmentConfigV1(request, apiConfig);
});
ipcMain.handle('put-saved-search-v-1', async (event, request: savedSearchTypes.SavedSearchApiPutSavedSearchV1Request) => {
    return await sdkWrapper.putSavedSearchV1(request, apiConfig);
});
ipcMain.handle('put-schedule-v-1', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiPutScheduleV1Request) => {
    return await sdkWrapper.putScheduleV1(request, apiConfig);
});
ipcMain.handle('put-service-desk-integration-v-1', async (event, request: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiPutServiceDeskIntegrationV1Request) => {
    return await sdkWrapper.putServiceDeskIntegrationV1(request, apiConfig);
});
ipcMain.handle('put-simintegration-v-1', async (event, request: simIntegrationsTypes.SIMIntegrationsApiPutSIMIntegrationV1Request) => {
    return await sdkWrapper.putSIMIntegrationV1(request, apiConfig);
});
ipcMain.handle('put-sod-policy-v-1', async (event, request: sodPoliciesTypes.SODPoliciesApiPutSodPolicyV1Request) => {
    return await sdkWrapper.putSodPolicyV1(request, apiConfig);
});
ipcMain.handle('put-source-attr-sync-config-v-1', async (event, request: sourcesTypes.SourcesApiPutSourceAttrSyncConfigV1Request) => {
    return await sdkWrapper.putSourceAttrSyncConfigV1(request, apiConfig);
});
ipcMain.handle('put-source-schema-v-1', async (event, request: sourcesTypes.SourcesApiPutSourceSchemaV1Request) => {
    return await sdkWrapper.putSourceSchemaV1(request, apiConfig);
});
ipcMain.handle('put-source-v-1', async (event, request: sourcesTypes.SourcesApiPutSourceV1Request) => {
    return await sdkWrapper.putSourceV1(request, apiConfig);
});
ipcMain.handle('put-tagged-object-v-1', async (event, request: taggedObjectsTypes.TaggedObjectsApiPutTaggedObjectV1Request) => {
    return await sdkWrapper.putTaggedObjectV1(request, apiConfig);
});
ipcMain.handle('put-tenant-configuration-v-1', async (event, request: workReassignmentTypes.WorkReassignmentApiPutTenantConfigurationV1Request) => {
    return await sdkWrapper.putTenantConfigurationV1(request, apiConfig);
});
ipcMain.handle('put-workflow-v-1', async (event, request: workflowsTypes.WorkflowsApiPutWorkflowV1Request) => {
    return await sdkWrapper.putWorkflowV1(request, apiConfig);
});
ipcMain.handle('query-password-info-v-1', async (event, request: passwordManagementTypes.PasswordManagementApiQueryPasswordInfoV1Request) => {
    return await sdkWrapper.queryPasswordInfoV1(request, apiConfig);
});
ipcMain.handle('reassign-identity-certifications-v-1', async (event, request: certificationsTypes.CertificationsApiReassignIdentityCertificationsV1Request) => {
    return await sdkWrapper.reassignIdentityCertificationsV1(request, apiConfig);
});
ipcMain.handle('reject-access-request-v-1', async (event, request: accessRequestApprovalsTypes.AccessRequestApprovalsApiRejectAccessRequestV1Request) => {
    return await sdkWrapper.rejectAccessRequestV1(request, apiConfig);
});
ipcMain.handle('reject-approval-in-bulk-v-1', async (event, request: approvalsTypes.ApprovalsApiRejectApprovalInBulkV1Request) => {
    return await sdkWrapper.rejectApprovalInBulkV1(request, apiConfig);
});
ipcMain.handle('reject-approval-items-in-bulk-v-1', async (event, request: workItemsTypes.WorkItemsApiRejectApprovalItemsInBulkV1Request) => {
    return await sdkWrapper.rejectApprovalItemsInBulkV1(request, apiConfig);
});
ipcMain.handle('reject-approval-item-v-1', async (event, request: workItemsTypes.WorkItemsApiRejectApprovalItemV1Request) => {
    return await sdkWrapper.rejectApprovalItemV1(request, apiConfig);
});
ipcMain.handle('reject-approval-v-1', async (event, request: approvalsTypes.ApprovalsApiRejectApprovalV1Request) => {
    return await sdkWrapper.rejectApprovalV1(request, apiConfig);
});
ipcMain.handle('reject-non-employee-request-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiRejectNonEmployeeRequestV1Request) => {
    return await sdkWrapper.rejectNonEmployeeRequestV1(request, apiConfig);
});
ipcMain.handle('reset-identity-v-1', async (event, request: identitiesTypes.IdentitiesApiResetIdentityV1Request) => {
    return await sdkWrapper.resetIdentityV1(request, apiConfig);
});
ipcMain.handle('reset-source-entitlements-v-1', async (event, request: entitlementsTypes.EntitlementsApiResetSourceEntitlementsV1Request) => {
    return await sdkWrapper.resetSourceEntitlementsV1(request, apiConfig);
});
ipcMain.handle('search-advanced-searchby-idnerm', async (event, request: sdk.AdvancedSearchNERMApiSearchAdvancedSearchbyIDRequest) => {
    return await sdkWrapper.searchAdvancedSearchbyIDNerm(request, apiConfig);
});
ipcMain.handle('search-advanced-search-nerm', async (event, request: sdk.AdvancedSearchNERMApiSearchAdvancedSearchRequest) => {
    return await sdkWrapper.searchAdvancedSearchNerm(request, apiConfig);
});
ipcMain.handle('search-aggregate-v-1', async (event, request: searchTypes.SearchApiSearchAggregateV1Request) => {
    return await sdkWrapper.searchAggregateV1(request, apiConfig);
});
ipcMain.handle('search-count-v-1', async (event, request: searchTypes.SearchApiSearchCountV1Request) => {
    return await sdkWrapper.searchCountV1(request, apiConfig);
});
ipcMain.handle('search-form-definitions-by-tenant-v-1', async (event, request: customFormsTypes.CustomFormsApiSearchFormDefinitionsByTenantV1Request = {}) => {
    return await sdkWrapper.searchFormDefinitionsByTenantV1(request, apiConfig);
});
ipcMain.handle('search-form-element-data-by-element-idv-1', async (event, request: customFormsTypes.CustomFormsApiSearchFormElementDataByElementIDV1Request) => {
    return await sdkWrapper.searchFormElementDataByElementIDV1(request, apiConfig);
});
ipcMain.handle('search-form-instances-by-tenant-v-1', async (event, request: customFormsTypes.CustomFormsApiSearchFormInstancesByTenantV1Request = {}) => {
    return await sdkWrapper.searchFormInstancesByTenantV1(request, apiConfig);
});
ipcMain.handle('search-get-v-1', async (event, request: searchTypes.SearchApiSearchGetV1Request) => {
    return await sdkWrapper.searchGetV1(request, apiConfig);
});
ipcMain.handle('search-nerm', async (event, request: sdk.AuditsNERMApiSearchRequest) => {
    return await sdkWrapper.searchNerm(request, apiConfig);
});
ipcMain.handle('search-parameters-v-1', async (event, request: parameterStorageTypes.ParameterStorageApiSearchParametersV1Request = {}) => {
    return await sdkWrapper.searchParametersV1(request, apiConfig);
});
ipcMain.handle('search-post-v-1', async (event, request: searchTypes.SearchApiSearchPostV1Request) => {
    return await sdkWrapper.searchPostV1(request, apiConfig);
});
ipcMain.handle('search-pre-defined-select-options-v-1', async (event) => {
    return await sdkWrapper.searchPreDefinedSelectOptionsV1(apiConfig);
});
ipcMain.handle('search-resource-objects-v-1', async (event, request: sourcesTypes.SourcesApiSearchResourceObjectsV1Request) => {
    return await sdkWrapper.searchResourceObjectsV1(request, apiConfig);
});
ipcMain.handle('search-roles-by-filter-v-1', async (event, request: rolesTypes.RolesApiSearchRolesByFilterV1Request = {}) => {
    return await sdkWrapper.searchRolesByFilterV1(request, apiConfig);
});
ipcMain.handle('send-classify-machine-account-from-source-v-1', async (event, request: classifySourceTypes.ClassifySourceApiSendClassifyMachineAccountFromSourceV1Request) => {
    return await sdkWrapper.sendClassifyMachineAccountFromSourceV1(request, apiConfig);
});
ipcMain.handle('send-classify-machine-account-v-1', async (event, request: machineAccountClassifyTypes.MachineAccountClassifyApiSendClassifyMachineAccountV1Request) => {
    return await sdkWrapper.sendClassifyMachineAccountV1(request, apiConfig);
});
ipcMain.handle('send-declassify-machine-account-from-source-v-1', async (event, request: declassifySourceTypes.DeclassifySourceApiSendDeclassifyMachineAccountFromSourceV1Request) => {
    return await sdkWrapper.sendDeclassifyMachineAccountFromSourceV1(request, apiConfig);
});
ipcMain.handle('send-identity-verification-account-token-v-1', async (event, request: identitiesTypes.IdentitiesApiSendIdentityVerificationAccountTokenV1Request) => {
    return await sdkWrapper.sendIdentityVerificationAccountTokenV1(request, apiConfig);
});
ipcMain.handle('send-manual-discover-applications-csv-template-v-1', async (event, request: applicationDiscoveryTypes.ApplicationDiscoveryApiSendManualDiscoverApplicationsCsvTemplateV1Request) => {
    return await sdkWrapper.sendManualDiscoverApplicationsCsvTemplateV1(request, apiConfig);
});
ipcMain.handle('send-stream-verification-v-1', async (event, request: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiSendStreamVerificationV1Request) => {
    return await sdkWrapper.sendStreamVerificationV1(request, apiConfig);
});
ipcMain.handle('send-test-notification-v-1', async (event, request: notificationsTypes.NotificationsApiSendTestNotificationV1Request) => {
    return await sdkWrapper.sendTestNotificationV1(request, apiConfig);
});
ipcMain.handle('set-access-request-config-v-1', async (event, request: accessRequestsTypes.AccessRequestsApiSetAccessRequestConfigV1Request) => {
    return await sdkWrapper.setAccessRequestConfigV1(request, apiConfig);
});
ipcMain.handle('set-access-request-config-v-2', async (event, request: accessRequestsTypes.AccessRequestsApiSetAccessRequestConfigV2Request) => {
    return await sdkWrapper.setAccessRequestConfigV2(request, apiConfig);
});
ipcMain.handle('set-access-request-recommendations-config-v-1', async (event, request: iaiAccessRequestRecommendationsTypes.IAIAccessRequestRecommendationsApiSetAccessRequestRecommendationsConfigV1Request) => {
    return await sdkWrapper.setAccessRequestRecommendationsConfigV1(request, apiConfig);
});
ipcMain.handle('set-branding-item-v-1', async (event, request: brandingTypes.BrandingApiSetBrandingItemV1Request) => {
    return await sdkWrapper.setBrandingItemV1(request, apiConfig);
});
ipcMain.handle('set-campaign-reports-config-v-1', async (event, request: certificationCampaignsTypes.CertificationCampaignsApiSetCampaignReportsConfigV1Request) => {
    return await sdkWrapper.setCampaignReportsConfigV1(request, apiConfig);
});
ipcMain.handle('set-campaign-template-schedule-v-1', async (event, request: certificationCampaignsTypes.CertificationCampaignsApiSetCampaignTemplateScheduleV1Request) => {
    return await sdkWrapper.setCampaignTemplateScheduleV1(request, apiConfig);
});
ipcMain.handle('set-icon-v-1', async (event, request: iconsTypes.IconsApiSetIconV1Request) => {
    return await sdkWrapper.setIconV1(request, apiConfig);
});
ipcMain.handle('set-lifecycle-state-v-1', async (event, request: lifecycleStatesTypes.LifecycleStatesApiSetLifecycleStateV1Request) => {
    return await sdkWrapper.setLifecycleStateV1(request, apiConfig);
});
ipcMain.handle('set-machine-account-mappings-v-1', async (event, request: machineAccountMappingsTypes.MachineAccountMappingsApiSetMachineAccountMappingsV1Request) => {
    return await sdkWrapper.setMachineAccountMappingsV1(request, apiConfig);
});
ipcMain.handle('set-machine-classification-config-v-1', async (event, request: machineClassificationConfigTypes.MachineClassificationConfigApiSetMachineClassificationConfigV1Request) => {
    return await sdkWrapper.setMachineClassificationConfigV1(request, apiConfig);
});
ipcMain.handle('set-mfaduo-config-v-1', async (event, request: mfaConfigurationTypes.MFAConfigurationApiSetMFADuoConfigV1Request) => {
    return await sdkWrapper.setMFADuoConfigV1(request, apiConfig);
});
ipcMain.handle('set-mfakbaconfig-v-1', async (event, request: mfaConfigurationTypes.MFAConfigurationApiSetMFAKBAConfigV1Request) => {
    return await sdkWrapper.setMFAKBAConfigV1(request, apiConfig);
});
ipcMain.handle('set-mfaokta-config-v-1', async (event, request: mfaConfigurationTypes.MFAConfigurationApiSetMFAOktaConfigV1Request) => {
    return await sdkWrapper.setMFAOktaConfigV1(request, apiConfig);
});
ipcMain.handle('set-password-policy-v-1', async (event, request: passwordPoliciesTypes.PasswordPoliciesApiSetPasswordPolicyV1Request) => {
    return await sdkWrapper.setPasswordPolicyV1(request, apiConfig);
});
ipcMain.handle('set-password-v-1', async (event, request: passwordManagementTypes.PasswordManagementApiSetPasswordV1Request) => {
    return await sdkWrapper.setPasswordV1(request, apiConfig);
});
ipcMain.handle('set-role-propagation-config-v-1', async (event, request: rolePropagationTypes.RolePropagationApiSetRolePropagationConfigV1Request) => {
    return await sdkWrapper.setRolePropagationConfigV1(request, apiConfig);
});
ipcMain.handle('set-stream-configuration-v-1', async (event, request: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiSetStreamConfigurationV1Request) => {
    return await sdkWrapper.setStreamConfigurationV1(request, apiConfig);
});
ipcMain.handle('set-tags-to-many-objects-v-1', async (event, request: taggedObjectsTypes.TaggedObjectsApiSetTagsToManyObjectsV1Request) => {
    return await sdkWrapper.setTagsToManyObjectsV1(request, apiConfig);
});
ipcMain.handle('set-tag-to-object-v-1', async (event, request: taggedObjectsTypes.TaggedObjectsApiSetTagToObjectV1Request) => {
    return await sdkWrapper.setTagToObjectV1(request, apiConfig);
});
ipcMain.handle('set-tenant-ui-metadata-v-1', async (event, request: uiMetadataTypes.UIMetadataApiSetTenantUiMetadataV1Request) => {
    return await sdkWrapper.setTenantUiMetadataV1(request, apiConfig);
});
ipcMain.handle('show-preview-data-source-v-1', async (event, request: customFormsTypes.CustomFormsApiShowPreviewDataSourceV1Request) => {
    return await sdkWrapper.showPreviewDataSourceV1(request, apiConfig);
});
ipcMain.handle('show-user-level-counts-v-1', async (event, request: customUserLevelsTypes.CustomUserLevelsApiShowUserLevelCountsV1Request) => {
    return await sdkWrapper.showUserLevelCountsV1(request, apiConfig);
});
ipcMain.handle('sign-off-identity-certification-v-1', async (event, request: certificationsTypes.CertificationsApiSignOffIdentityCertificationV1Request) => {
    return await sdkWrapper.signOffIdentityCertificationV1(request, apiConfig);
});
ipcMain.handle('start-activate-workflow-v-1', async (event, request: jitActivationsTypes.JITActivationsApiStartActivateWorkflowV1Request) => {
    return await sdkWrapper.startActivateWorkflowV1(request, apiConfig);
});
ipcMain.handle('start-application-discovery-v-1', async (event, request: applicationDiscoveryTypes.ApplicationDiscoveryApiStartApplicationDiscoveryV1Request) => {
    return await sdkWrapper.startApplicationDiscoveryV1(request, apiConfig);
});
ipcMain.handle('start-campaign-remediation-scan-v-1', async (event, request: certificationCampaignsTypes.CertificationCampaignsApiStartCampaignRemediationScanV1Request) => {
    return await sdkWrapper.startCampaignRemediationScanV1(request, apiConfig);
});
ipcMain.handle('start-campaign-report-v-1', async (event, request: certificationCampaignsTypes.CertificationCampaignsApiStartCampaignReportV1Request) => {
    return await sdkWrapper.startCampaignReportV1(request, apiConfig);
});
ipcMain.handle('start-campaign-v-1', async (event, request: certificationCampaignsTypes.CertificationCampaignsApiStartCampaignV1Request) => {
    return await sdkWrapper.startCampaignV1(request, apiConfig);
});
ipcMain.handle('start-deactivate-workflow-v-1', async (event, request: jitActivationsTypes.JITActivationsApiStartDeactivateWorkflowV1Request) => {
    return await sdkWrapper.startDeactivateWorkflowV1(request, apiConfig);
});
ipcMain.handle('start-evaluate-sod-policy-v-1', async (event, request: sodPoliciesTypes.SODPoliciesApiStartEvaluateSodPolicyV1Request) => {
    return await sdkWrapper.startEvaluateSodPolicyV1(request, apiConfig);
});
ipcMain.handle('start-extend-workflow-v-1', async (event, request: jitActivationsTypes.JITActivationsApiStartExtendWorkflowV1Request) => {
    return await sdkWrapper.startExtendWorkflowV1(request, apiConfig);
});
ipcMain.handle('start-generate-campaign-template-v-1', async (event, request: certificationCampaignsTypes.CertificationCampaignsApiStartGenerateCampaignTemplateV1Request) => {
    return await sdkWrapper.startGenerateCampaignTemplateV1(request, apiConfig);
});
ipcMain.handle('start-identities-invite-v-1', async (event, request: identitiesTypes.IdentitiesApiStartIdentitiesInviteV1Request) => {
    return await sdkWrapper.startIdentitiesInviteV1(request, apiConfig);
});
ipcMain.handle('start-identity-processing-v-1', async (event, request: identitiesTypes.IdentitiesApiStartIdentityProcessingV1Request) => {
    return await sdkWrapper.startIdentityProcessingV1(request, apiConfig);
});
ipcMain.handle('start-launcher-v-1', async (event, request: launchersTypes.LaunchersApiStartLauncherV1Request) => {
    return await sdkWrapper.startLauncherV1(request, apiConfig);
});
ipcMain.handle('start-machine-identity-aggregation-v-1', async (event, request: machineIdentitiesTypes.MachineIdentitiesApiStartMachineIdentityAggregationV1Request) => {
    return await sdkWrapper.startMachineIdentityAggregationV1(request, apiConfig);
});
ipcMain.handle('start-predict-sod-violations-v-1', async (event, request: sodViolationsTypes.SODViolationsApiStartPredictSodViolationsV1Request) => {
    return await sdkWrapper.startPredictSodViolationsV1(request, apiConfig);
});
ipcMain.handle('start-report-v-1', async (event, request: reportsDataExtractionTypes.ReportsDataExtractionApiStartReportV1Request) => {
    return await sdkWrapper.startReportV1(request, apiConfig);
});
ipcMain.handle('start-role-propagation-v-1', async (event, request: rolePropagationTypes.RolePropagationApiStartRolePropagationV1Request = {}) => {
    return await sdkWrapper.startRolePropagationV1(request, apiConfig);
});
ipcMain.handle('start-sod-all-policies-for-org-v-1', async (event, request: sodPoliciesTypes.SODPoliciesApiStartSodAllPoliciesForOrgV1Request = {}) => {
    return await sdkWrapper.startSodAllPoliciesForOrgV1(request, apiConfig);
});
ipcMain.handle('start-sod-policy-v-1', async (event, request: sodPoliciesTypes.SODPoliciesApiStartSodPolicyV1Request) => {
    return await sdkWrapper.startSodPolicyV1(request, apiConfig);
});
ipcMain.handle('start-task-rerun-v-1', async (event, request: dataAccessSecurityTypes.DataAccessSecurityApiStartTaskRerunV1Request) => {
    return await sdkWrapper.startTaskRerunV1(request, apiConfig);
});
ipcMain.handle('start-test-trigger-invocation-v-1', async (event, request: triggersTypes.TriggersApiStartTestTriggerInvocationV1Request) => {
    return await sdkWrapper.startTestTriggerInvocationV1(request, apiConfig);
});
ipcMain.handle('start-violation-check-v-1', async (event, request: sodViolationsTypes.SODViolationsApiStartViolationCheckV1Request) => {
    return await sdkWrapper.startViolationCheckV1(request, apiConfig);
});
ipcMain.handle('submit-account-selection-v-1', async (event, request: workItemsTypes.WorkItemsApiSubmitAccountSelectionV1Request) => {
    return await sdkWrapper.submitAccountSelectionV1(request, apiConfig);
});
ipcMain.handle('submit-advanced-search-nerm', async (event, request: sdk.AdvancedSearchNERMApiSubmitAdvancedSearchRequest) => {
    return await sdkWrapper.submitAdvancedSearchNerm(request, apiConfig);
});
ipcMain.handle('submit-attribute-option-nerm', async (event, request: sdk.AttributeOptionsNERMApiSubmitAttributeOptionRequest) => {
    return await sdkWrapper.submitAttributeOptionNerm(request, apiConfig);
});
ipcMain.handle('submit-attribute-options-nerm', async (event, request: sdk.AttributeOptionsNERMApiSubmitAttributeOptionsRequest) => {
    return await sdkWrapper.submitAttributeOptionsNerm(request, apiConfig);
});
ipcMain.handle('submit-entitlement-recommendations-assignment-v-1', async (event, request: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiSubmitEntitlementRecommendationsAssignmentV1Request) => {
    return await sdkWrapper.submitEntitlementRecommendationsAssignmentV1(request, apiConfig);
});
ipcMain.handle('submit-profile-avatar-nerm', async (event, request: sdk.ProfilesNERMApiSubmitProfileAvatarRequest) => {
    return await sdkWrapper.submitProfileAvatarNerm(request, apiConfig);
});
ipcMain.handle('submit-profile-nerm', async (event, request: sdk.ProfilesNERMApiSubmitProfileRequest) => {
    return await sdkWrapper.submitProfileNerm(request, apiConfig);
});
ipcMain.handle('submit-profile-type-nerm', async (event, request: sdk.ProfileTypesNERMApiSubmitProfileTypeRequest) => {
    return await sdkWrapper.submitProfileTypeNerm(request, apiConfig);
});
ipcMain.handle('submit-profile-upload-nerm', async (event, request: sdk.ProfilesNERMApiSubmitProfileUploadRequest) => {
    return await sdkWrapper.submitProfileUploadNerm(request, apiConfig);
});
ipcMain.handle('submit-reassign-certs-async-v-1', async (event, request: certificationsTypes.CertificationsApiSubmitReassignCertsAsyncV1Request) => {
    return await sdkWrapper.submitReassignCertsAsyncV1(request, apiConfig);
});
ipcMain.handle('submit-reload-account-v-1', async (event, request: accountsTypes.AccountsApiSubmitReloadAccountV1Request) => {
    return await sdkWrapper.submitReloadAccountV1(request, apiConfig);
});
ipcMain.handle('submit-role-nerm', async (event, request: sdk.RolesNERMApiSubmitRoleRequest) => {
    return await sdkWrapper.submitRoleNerm(request, apiConfig);
});
ipcMain.handle('submit-role-profile-nerm', async (event, request: sdk.RoleProfilesNERMApiSubmitRoleProfileRequest) => {
    return await sdkWrapper.submitRoleProfileNerm(request, apiConfig);
});
ipcMain.handle('submit-role-profiles-nerm', async (event, request: sdk.RoleProfilesNERMApiSubmitRoleProfilesRequest) => {
    return await sdkWrapper.submitRoleProfilesNerm(request, apiConfig);
});
ipcMain.handle('submit-roles-nerm', async (event, request: sdk.RolesNERMApiSubmitRolesRequest) => {
    return await sdkWrapper.submitRolesNerm(request, apiConfig);
});
ipcMain.handle('submit-sed-approval-v-1', async (event, request: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiSubmitSedApprovalV1Request) => {
    return await sdkWrapper.submitSedApprovalV1(request, apiConfig);
});
ipcMain.handle('submit-sed-assignment-v-1', async (event, request: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiSubmitSedAssignmentV1Request) => {
    return await sdkWrapper.submitSedAssignmentV1(request, apiConfig);
});
ipcMain.handle('submit-sed-batch-request-v-1', async (event, request: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiSubmitSedBatchRequestV1Request = {}) => {
    return await sdkWrapper.submitSedBatchRequestV1(request, apiConfig);
});
ipcMain.handle('submit-user-avatar-nerm', async (event, request: sdk.UsersNERMApiSubmitUserAvatarRequest) => {
    return await sdkWrapper.submitUserAvatarNerm(request, apiConfig);
});
ipcMain.handle('submit-user-manager-nerm', async (event, request: sdk.UserManagersNERMApiSubmitUserManagerRequest) => {
    return await sdkWrapper.submitUserManagerNerm(request, apiConfig);
});
ipcMain.handle('submit-user-managers-nerm', async (event, request: sdk.UserManagersNERMApiSubmitUserManagersRequest) => {
    return await sdkWrapper.submitUserManagersNerm(request, apiConfig);
});
ipcMain.handle('submit-user-nerm', async (event, request: sdk.UsersNERMApiSubmitUserRequest) => {
    return await sdkWrapper.submitUserNerm(request, apiConfig);
});
ipcMain.handle('submit-user-profile-nerm', async (event, request: sdk.UserProfilesNERMApiSubmitUserProfileRequest) => {
    return await sdkWrapper.submitUserProfileNerm(request, apiConfig);
});
ipcMain.handle('submit-user-role-nerm', async (event, request: sdk.UserRolesNERMApiSubmitUserRoleRequest) => {
    return await sdkWrapper.submitUserRoleNerm(request, apiConfig);
});
ipcMain.handle('submit-user-roles-nerm', async (event, request: sdk.UserRolesNERMApiSubmitUserRolesRequest) => {
    return await sdkWrapper.submitUserRolesNerm(request, apiConfig);
});
ipcMain.handle('submit-users-nerm', async (event, request: sdk.UsersNERMApiSubmitUsersRequest) => {
    return await sdkWrapper.submitUsersNerm(request, apiConfig);
});
ipcMain.handle('submit-workflow-session-nerm', async (event, request: sdk.WorkflowSessionsNERMApiSubmitWorkflowSessionRequest) => {
    return await sdkWrapper.submitWorkflowSessionNerm(request, apiConfig);
});
ipcMain.handle('submit-workflow-session-upload-nerm', async (event, request: sdk.WorkflowSessionsNERMApiSubmitWorkflowSessionUploadRequest) => {
    return await sdkWrapper.submitWorkflowSessionUploadNerm(request, apiConfig);
});
ipcMain.handle('sync-attributes-for-source-v-1', async (event, request: sourcesTypes.SourcesApiSyncAttributesForSourceV1Request) => {
    return await sdkWrapper.syncAttributesForSourceV1(request, apiConfig);
});
ipcMain.handle('synchronize-attributes-for-identity-v-1', async (event, request: identitiesTypes.IdentitiesApiSynchronizeAttributesForIdentityV1Request) => {
    return await sdkWrapper.synchronizeAttributesForIdentityV1(request, apiConfig);
});
ipcMain.handle('sync-identity-profile-v-1', async (event, request: identityProfilesTypes.IdentityProfilesApiSyncIdentityProfileV1Request) => {
    return await sdkWrapper.syncIdentityProfileV1(request, apiConfig);
});
ipcMain.handle('test-connection-multi-host-sources-v-1', async (event, request: multiHostIntegrationTypes.MultiHostIntegrationApiTestConnectionMultiHostSourcesV1Request) => {
    return await sdkWrapper.testConnectionMultiHostSourcesV1(request, apiConfig);
});
ipcMain.handle('test-connector-rule-v-1', async (event, request: connectorRuleManagementTypes.ConnectorRuleManagementApiTestConnectorRuleV1Request) => {
    return await sdkWrapper.testConnectorRuleV1(request, apiConfig);
});
ipcMain.handle('test-external-execute-workflow-v-1', async (event, request: workflowsTypes.WorkflowsApiTestExternalExecuteWorkflowV1Request) => {
    return await sdkWrapper.testExternalExecuteWorkflowV1(request, apiConfig);
});
ipcMain.handle('test-mfaconfig-v-1', async (event, request: mfaConfigurationTypes.MFAConfigurationApiTestMFAConfigV1Request) => {
    return await sdkWrapper.testMFAConfigV1(request, apiConfig);
});
ipcMain.handle('test-source-configuration-v-1', async (event, request: sourcesTypes.SourcesApiTestSourceConfigurationV1Request) => {
    return await sdkWrapper.testSourceConfigurationV1(request, apiConfig);
});
ipcMain.handle('test-source-connection-multihost-v-1', async (event, request: multiHostIntegrationTypes.MultiHostIntegrationApiTestSourceConnectionMultihostV1Request) => {
    return await sdkWrapper.testSourceConnectionMultihostV1(request, apiConfig);
});
ipcMain.handle('test-source-connection-v-1', async (event, request: sourcesTypes.SourcesApiTestSourceConnectionV1Request) => {
    return await sdkWrapper.testSourceConnectionV1(request, apiConfig);
});
ipcMain.handle('test-subscription-filter-v-1', async (event, request: triggersTypes.TriggersApiTestSubscriptionFilterV1Request) => {
    return await sdkWrapper.testSubscriptionFilterV1(request, apiConfig);
});
ipcMain.handle('test-workflow-v-1', async (event, request: workflowsTypes.WorkflowsApiTestWorkflowV1Request) => {
    return await sdkWrapper.testWorkflowV1(request, apiConfig);
});
ipcMain.handle('un-ignore-identity-outliers-v-1', async (event, request: iaiOutliersTypes.IAIOutliersApiUnIgnoreIdentityOutliersV1Request) => {
    return await sdkWrapper.unIgnoreIdentityOutliersV1(request, apiConfig);
});
ipcMain.handle('unlock-account-v-1', async (event, request: accountsTypes.AccountsApiUnlockAccountV1Request) => {
    return await sdkWrapper.unlockAccountV1(request, apiConfig);
});
ipcMain.handle('unsubscribe-scheduled-search-v-1', async (event, request: scheduledSearchTypes.ScheduledSearchApiUnsubscribeScheduledSearchV1Request) => {
    return await sdkWrapper.unsubscribeScheduledSearchV1(request, apiConfig);
});
ipcMain.handle('update-access-model-metadata-attribute-v-1', async (event, request: accessModelMetadataTypes.AccessModelMetadataApiUpdateAccessModelMetadataAttributeV1Request) => {
    return await sdkWrapper.updateAccessModelMetadataAttributeV1(request, apiConfig);
});
ipcMain.handle('update-access-model-metadata-attribute-value-v-1', async (event, request: accessModelMetadataTypes.AccessModelMetadataApiUpdateAccessModelMetadataAttributeValueV1Request) => {
    return await sdkWrapper.updateAccessModelMetadataAttributeValueV1(request, apiConfig);
});
ipcMain.handle('update-access-model-metadata-by-filter-v-1', async (event, request: accessModelMetadataTypes.AccessModelMetadataApiUpdateAccessModelMetadataByFilterV1Request) => {
    return await sdkWrapper.updateAccessModelMetadataByFilterV1(request, apiConfig);
});
ipcMain.handle('update-access-model-metadata-by-ids-v-1', async (event, request: accessModelMetadataTypes.AccessModelMetadataApiUpdateAccessModelMetadataByIdsV1Request) => {
    return await sdkWrapper.updateAccessModelMetadataByIdsV1(request, apiConfig);
});
ipcMain.handle('update-access-model-metadata-by-query-v-1', async (event, request: accessModelMetadataTypes.AccessModelMetadataApiUpdateAccessModelMetadataByQueryV1Request) => {
    return await sdkWrapper.updateAccessModelMetadataByQueryV1(request, apiConfig);
});
ipcMain.handle('update-access-profiles-in-bulk-v-1', async (event, request: accessProfilesTypes.AccessProfilesApiUpdateAccessProfilesInBulkV1Request) => {
    return await sdkWrapper.updateAccessProfilesInBulkV1(request, apiConfig);
});
ipcMain.handle('update-account-deletion-approval-config-v-1', async (event, request: sourcesTypes.SourcesApiUpdateAccountDeletionApprovalConfigV1Request) => {
    return await sdkWrapper.updateAccountDeletionApprovalConfigV1(request, apiConfig);
});
ipcMain.handle('update-account-v-1', async (event, request: accountsTypes.AccountsApiUpdateAccountV1Request) => {
    return await sdkWrapper.updateAccountV1(request, apiConfig);
});
ipcMain.handle('update-approvals-attributes-v-1', async (event, request: approvalsTypes.ApprovalsApiUpdateApprovalsAttributesV1Request) => {
    return await sdkWrapper.updateApprovalsAttributesV1(request, apiConfig);
});
ipcMain.handle('update-approvals-comments-v-1', async (event, request: approvalsTypes.ApprovalsApiUpdateApprovalsCommentsV1Request) => {
    return await sdkWrapper.updateApprovalsCommentsV1(request, apiConfig);
});
ipcMain.handle('update-approvals-reassign-v-1', async (event, request: approvalsTypes.ApprovalsApiUpdateApprovalsReassignV1Request) => {
    return await sdkWrapper.updateApprovalsReassignV1(request, apiConfig);
});
ipcMain.handle('update-attribute-by-id-nerm', async (event, request: sdk.AttributesNERMApiUpdateAttributeByIdRequest) => {
    return await sdkWrapper.updateAttributeByIdNerm(request, apiConfig);
});
ipcMain.handle('update-attribute-by-uid-nerm', async (event, request: sdk.AttributesNERMApiUpdateAttributeByUidRequest) => {
    return await sdkWrapper.updateAttributeByUidNerm(request, apiConfig);
});
ipcMain.handle('update-attribute-key-and-value-to-role-v-1', async (event, request: rolesTypes.RolesApiUpdateAttributeKeyAndValueToRoleV1Request) => {
    return await sdkWrapper.updateAttributeKeyAndValueToRoleV1(request, apiConfig);
});
ipcMain.handle('update-auto-write-settings-v-1', async (event, request: suggestedEntitlementDescriptionTypes.SuggestedEntitlementDescriptionApiUpdateAutoWriteSettingsV1Request) => {
    return await sdkWrapper.updateAutoWriteSettingsV1(request, apiConfig);
});
ipcMain.handle('update-campaign-filter-v-1', async (event, request: certificationCampaignFiltersTypes.CertificationCampaignFiltersApiUpdateCampaignFilterV1Request) => {
    return await sdkWrapper.updateCampaignFilterV1(request, apiConfig);
});
ipcMain.handle('update-campaign-v-1', async (event, request: certificationCampaignsTypes.CertificationCampaignsApiUpdateCampaignV1Request) => {
    return await sdkWrapper.updateCampaignV1(request, apiConfig);
});
ipcMain.handle('update-common-access-status-in-bulk-v-1', async (event, request: iaiCommonAccessTypes.IAICommonAccessApiUpdateCommonAccessStatusInBulkV1Request) => {
    return await sdkWrapper.updateCommonAccessStatusInBulkV1(request, apiConfig);
});
ipcMain.handle('update-connector-v-1', async (event, request: connectorsTypes.ConnectorsApiUpdateConnectorV1Request) => {
    return await sdkWrapper.updateConnectorV1(request, apiConfig);
});
ipcMain.handle('update-entitlement-connections-bulk-v-1', async (event, request: entitlementConnectionsTypes.EntitlementConnectionsApiUpdateEntitlementConnectionsBulkV1Request) => {
    return await sdkWrapper.updateEntitlementConnectionsBulkV1(request, apiConfig);
});
ipcMain.handle('update-entitlements-in-bulk-v-1', async (event, request: entitlementsTypes.EntitlementsApiUpdateEntitlementsInBulkV1Request) => {
    return await sdkWrapper.updateEntitlementsInBulkV1(request, apiConfig);
});
ipcMain.handle('update-entitlements-potential-role-v-1', async (event, request: iaiRoleMiningTypes.IAIRoleMiningApiUpdateEntitlementsPotentialRoleV1Request) => {
    return await sdkWrapper.updateEntitlementsPotentialRoleV1(request, apiConfig);
});
ipcMain.handle('update-form-attribute-by-id-nerm', async (event, request: sdk.FormAttributesNERMApiUpdateFormAttributeByIdRequest) => {
    return await sdkWrapper.updateFormAttributeByIdNerm(request, apiConfig);
});
ipcMain.handle('update-form-attribute-by-uid-nerm', async (event, request: sdk.FormAttributesNERMApiUpdateFormAttributeByUidRequest) => {
    return await sdkWrapper.updateFormAttributeByUidNerm(request, apiConfig);
});
ipcMain.handle('update-form-by-id-nerm', async (event, request: sdk.FormsNERMApiUpdateFormByIdRequest) => {
    return await sdkWrapper.updateFormByIdNerm(request, apiConfig);
});
ipcMain.handle('update-form-by-uid-nerm', async (event, request: sdk.FormsNERMApiUpdateFormByUidRequest) => {
    return await sdkWrapper.updateFormByUidNerm(request, apiConfig);
});
ipcMain.handle('update-identity-profile-v-1', async (event, request: identityProfilesTypes.IdentityProfilesApiUpdateIdentityProfileV1Request) => {
    return await sdkWrapper.updateIdentityProfileV1(request, apiConfig);
});
ipcMain.handle('update-lifecycle-states-v-1', async (event, request: lifecycleStatesTypes.LifecycleStatesApiUpdateLifecycleStatesV1Request) => {
    return await sdkWrapper.updateLifecycleStatesV1(request, apiConfig);
});
ipcMain.handle('update-machine-account-deletion-approval-config-v-1', async (event, request: sourcesTypes.SourcesApiUpdateMachineAccountDeletionApprovalConfigV1Request) => {
    return await sdkWrapper.updateMachineAccountDeletionApprovalConfigV1(request, apiConfig);
});
ipcMain.handle('update-machine-account-subtype-approval-config-v-1', async (event, request: machineAccountSubtypesTypes.MachineAccountSubtypesApiUpdateMachineAccountSubtypeApprovalConfigV1Request) => {
    return await sdkWrapper.updateMachineAccountSubtypeApprovalConfigV1(request, apiConfig);
});
ipcMain.handle('update-machine-account-v-1', async (event, request: machineAccountsTypes.MachineAccountsApiUpdateMachineAccountV1Request) => {
    return await sdkWrapper.updateMachineAccountV1(request, apiConfig);
});
ipcMain.handle('update-machine-identity-v-1', async (event, request: machineIdentitiesTypes.MachineIdentitiesApiUpdateMachineIdentityV1Request) => {
    return await sdkWrapper.updateMachineIdentityV1(request, apiConfig);
});
ipcMain.handle('update-managed-client-v-1', async (event, request: managedClientsTypes.ManagedClientsApiUpdateManagedClientV1Request) => {
    return await sdkWrapper.updateManagedClientV1(request, apiConfig);
});
ipcMain.handle('update-managed-cluster-type-v-1', async (event, request: managedClusterTypesTypes.ManagedClusterTypesApiUpdateManagedClusterTypeV1Request) => {
    return await sdkWrapper.updateManagedClusterTypeV1(request, apiConfig);
});
ipcMain.handle('update-managed-cluster-v-1', async (event, request: managedClustersTypes.ManagedClustersApiUpdateManagedClusterV1Request) => {
    return await sdkWrapper.updateManagedClusterV1(request, apiConfig);
});
ipcMain.handle('update-multi-host-sources-v-1', async (event, request: multiHostIntegrationTypes.MultiHostIntegrationApiUpdateMultiHostSourcesV1Request) => {
    return await sdkWrapper.updateMultiHostSourcesV1(request, apiConfig);
});
ipcMain.handle('update-non-employee-record-v-1', async (event, request: nonEmployeeLifecycleManagementTypes.NonEmployeeLifecycleManagementApiUpdateNonEmployeeRecordV1Request) => {
    return await sdkWrapper.updateNonEmployeeRecordV1(request, apiConfig);
});
ipcMain.handle('update-object-mappings-v-1', async (event, request: configurationHubTypes.ConfigurationHubApiUpdateObjectMappingsV1Request) => {
    return await sdkWrapper.updateObjectMappingsV1(request, apiConfig);
});
ipcMain.handle('update-page-content-by-id-nerm', async (event, request: sdk.PageContentsNERMApiUpdatePageContentByIdRequest) => {
    return await sdkWrapper.updatePageContentByIdNerm(request, apiConfig);
});
ipcMain.handle('update-page-content-by-uid-nerm', async (event, request: sdk.PageContentsNERMApiUpdatePageContentByUidRequest) => {
    return await sdkWrapper.updatePageContentByUidNerm(request, apiConfig);
});
ipcMain.handle('update-page-content-translation-by-id-nerm', async (event, request: sdk.PageContentTranslationsNERMApiUpdatePageContentTranslationByIdRequest) => {
    return await sdkWrapper.updatePageContentTranslationByIdNerm(request, apiConfig);
});
ipcMain.handle('update-page-content-translation-by-uid-nerm', async (event, request: sdk.PageContentTranslationsNERMApiUpdatePageContentTranslationByUidRequest) => {
    return await sdkWrapper.updatePageContentTranslationByUidNerm(request, apiConfig);
});
ipcMain.handle('update-page-element-by-id-nerm', async (event, request: sdk.PageElementsNERMApiUpdatePageElementByIdRequest) => {
    return await sdkWrapper.updatePageElementByIdNerm(request, apiConfig);
});
ipcMain.handle('update-page-element-by-uid-nerm', async (event, request: sdk.PageElementsNERMApiUpdatePageElementByUidRequest) => {
    return await sdkWrapper.updatePageElementByUidNerm(request, apiConfig);
});
ipcMain.handle('update-parameter-v-1', async (event, request: parameterStorageTypes.ParameterStorageApiUpdateParameterV1Request) => {
    return await sdkWrapper.updateParameterV1(request, apiConfig);
});
ipcMain.handle('update-password-policy-holders-v-1', async (event, request: sourcesTypes.SourcesApiUpdatePasswordPolicyHoldersV1Request) => {
    return await sdkWrapper.updatePasswordPolicyHoldersV1(request, apiConfig);
});
ipcMain.handle('update-password-sync-group-v-1', async (event, request: passwordSyncGroupsTypes.PasswordSyncGroupsApiUpdatePasswordSyncGroupV1Request) => {
    return await sdkWrapper.updatePasswordSyncGroupV1(request, apiConfig);
});
ipcMain.handle('update-profile-nerm', async (event, request: sdk.IscAccountsNERMApiUpdateProfileRequest) => {
    return await sdkWrapper.updateProfileNerm(request, apiConfig);
});
ipcMain.handle('update-provisioning-policies-in-bulk-v-1', async (event, request: sourcesTypes.SourcesApiUpdateProvisioningPoliciesInBulkV1Request) => {
    return await sdkWrapper.updateProvisioningPoliciesInBulkV1(request, apiConfig);
});
ipcMain.handle('update-provisioning-policy-v-1', async (event, request: sourcesTypes.SourcesApiUpdateProvisioningPolicyV1Request) => {
    return await sdkWrapper.updateProvisioningPolicyV1(request, apiConfig);
});
ipcMain.handle('update-provisioning-policy-v-2', async (event, request: sourcesTypes.SourcesApiUpdateProvisioningPolicyV2Request) => {
    return await sdkWrapper.updateProvisioningPolicyV2(request, apiConfig);
});
ipcMain.handle('update-public-identity-config-v-1', async (event, request: publicIdentitiesConfigTypes.PublicIdentitiesConfigApiUpdatePublicIdentityConfigV1Request) => {
    return await sdkWrapper.updatePublicIdentityConfigV1(request, apiConfig);
});
ipcMain.handle('update-recommendations-config-v-1', async (event, request: iaiRecommendationsTypes.IAIRecommendationsApiUpdateRecommendationsConfigV1Request) => {
    return await sdkWrapper.updateRecommendationsConfigV1(request, apiConfig);
});
ipcMain.handle('update-roles-metadata-by-filter-v-1', async (event, request: rolesTypes.RolesApiUpdateRolesMetadataByFilterV1Request) => {
    return await sdkWrapper.updateRolesMetadataByFilterV1(request, apiConfig);
});
ipcMain.handle('update-roles-metadata-by-ids-v-1', async (event, request: rolesTypes.RolesApiUpdateRolesMetadataByIdsV1Request) => {
    return await sdkWrapper.updateRolesMetadataByIdsV1(request, apiConfig);
});
ipcMain.handle('update-roles-metadata-by-query-v-1', async (event, request: rolesTypes.RolesApiUpdateRolesMetadataByQueryV1Request) => {
    return await sdkWrapper.updateRolesMetadataByQueryV1(request, apiConfig);
});
ipcMain.handle('update-scheduled-action-v-1', async (event, request: configurationHubTypes.ConfigurationHubApiUpdateScheduledActionV1Request) => {
    return await sdkWrapper.updateScheduledActionV1(request, apiConfig);
});
ipcMain.handle('update-scheduled-search-v-1', async (event, request: scheduledSearchTypes.ScheduledSearchApiUpdateScheduledSearchV1Request) => {
    return await sdkWrapper.updateScheduledSearchV1(request, apiConfig);
});
ipcMain.handle('update-source-apps-in-bulk-v-1', async (event, request: appsTypes.AppsApiUpdateSourceAppsInBulkV1Request = {}) => {
    return await sdkWrapper.updateSourceAppsInBulkV1(request, apiConfig);
});
ipcMain.handle('update-source-entitlement-request-config-v-1', async (event, request: sourcesTypes.SourcesApiUpdateSourceEntitlementRequestConfigV1Request) => {
    return await sdkWrapper.updateSourceEntitlementRequestConfigV1(request, apiConfig);
});
ipcMain.handle('update-source-schedule-v-1', async (event, request: sourcesTypes.SourcesApiUpdateSourceScheduleV1Request) => {
    return await sdkWrapper.updateSourceScheduleV1(request, apiConfig);
});
ipcMain.handle('update-source-schema-v-1', async (event, request: sourcesTypes.SourcesApiUpdateSourceSchemaV1Request) => {
    return await sdkWrapper.updateSourceSchemaV1(request, apiConfig);
});
ipcMain.handle('update-source-v-1', async (event, request: sourcesTypes.SourcesApiUpdateSourceV1Request) => {
    return await sdkWrapper.updateSourceV1(request, apiConfig);
});
ipcMain.handle('update-status-check-details-v-1', async (event, request: serviceDeskIntegrationTypes.ServiceDeskIntegrationApiUpdateStatusCheckDetailsV1Request) => {
    return await sdkWrapper.updateStatusCheckDetailsV1(request, apiConfig);
});
ipcMain.handle('update-stream-configuration-v-1', async (event, request: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiUpdateStreamConfigurationV1Request) => {
    return await sdkWrapper.updateStreamConfigurationV1(request, apiConfig);
});
ipcMain.handle('update-stream-status-v-1', async (event, request: sharedSignalsFrameworkSsfTypes.SharedSignalsFrameworkSSFApiUpdateStreamStatusV1Request) => {
    return await sdkWrapper.updateStreamStatusV1(request, apiConfig);
});
ipcMain.handle('update-subscription-v-1', async (event, request: triggersTypes.TriggersApiUpdateSubscriptionV1Request) => {
    return await sdkWrapper.updateSubscriptionV1(request, apiConfig);
});
ipcMain.handle('update-task-status-v-1', async (event, request: taskManagementTypes.TaskManagementApiUpdateTaskStatusV1Request) => {
    return await sdkWrapper.updateTaskStatusV1(request, apiConfig);
});
ipcMain.handle('update-transform-v-1', async (event, request: transformsTypes.TransformsApiUpdateTransformV1Request) => {
    return await sdkWrapper.updateTransformV1(request, apiConfig);
});
ipcMain.handle('update-user-level-v-1', async (event, request: customUserLevelsTypes.CustomUserLevelsApiUpdateUserLevelV1Request) => {
    return await sdkWrapper.updateUserLevelV1(request, apiConfig);
});
ipcMain.handle('update-v-1', async (event, request: managedClustersTypes.ManagedClustersApiUpdateV1Request) => {
    return await sdkWrapper.updateV1(request, apiConfig);
});
ipcMain.handle('update-workgroup-members-v-1', async (event, request: governanceGroupsTypes.GovernanceGroupsApiUpdateWorkgroupMembersV1Request) => {
    return await sdkWrapper.updateWorkgroupMembersV1(request, apiConfig);
});
// --- GENERATED SDK METHODS END ---

ipcMain.handle('generic-get', async(event, request: sdk.DefaultApiGenericGetRequest) => {
    return await sdkWrapper.genericGet(request, apiConfig);
});

ipcMain.handle('generic-post', async(event, request: sdk.DefaultApiGenericPostRequest) => {
    return await sdkWrapper.genericPost(request, apiConfig);
});

ipcMain.handle('generic-put', async(event, request: sdk.DefaultApiGenericPutRequest) => {
    return await sdkWrapper.genericPut(request, apiConfig);
});

ipcMain.handle('generic-patch', async(event, request: sdk.DefaultApiGenericPatchRequest) => {
    return await sdkWrapper.genericPatch(request, apiConfig);
});

ipcMain.handle('generic-delete', async(event, request: sdk.DefaultApiGenericDeleteRequest) => {
    return await sdkWrapper.genericDelete(request, apiConfig);
});

}
