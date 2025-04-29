"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unlockAccount = exports.submitReloadAccount = exports.putAccount = exports.listAccounts = exports.getAccountEntitlements = exports.getAccount = exports.enableAccountsForIdentities = exports.enableAccountForIdentity = exports.enableAccount = exports.disableAccountsForIdentities = exports.disableAccountForIdentity = exports.disableAccount = exports.deleteAccountAsync = exports.deleteAccount = exports.createAccount = exports.getUsagesByAccountId = exports.getAccountAggregationStatus = exports.listAccountActivities = exports.getAccountActivity = exports.setAccessRequestConfig = exports.loadAccountSelections = exports.listAdministratorsAccessRequestStatus = exports.listAccessRequestStatus = exports.getEntitlementDetailsForIdentity = exports.getAccessRequestConfig = exports.createAccessRequest = exports.closeAccessRequest = exports.cancelAccessRequestInBulk = exports.cancelAccessRequest = exports.approveBulkAccessRequest = exports.getAccessRequestIdentityMetrics = exports.rejectAccessRequest = exports.listPendingApprovals = exports.listCompletedApprovals = exports.listAccessRequestApprovers = exports.getAccessRequestApprovalSummary = exports.forwardAccessRequest = exports.approveAccessRequest = exports.updateAccessProfilesInBulk = exports.patchAccessProfile = exports.listAccessProfiles = exports.getAccessProfileEntitlements = exports.getAccessProfile = exports.deleteAccessProfilesInBulk = exports.deleteAccessProfile = exports.createAccessProfile = exports.listAccessModelMetadataAttributeValue = exports.listAccessModelMetadataAttribute = exports.getAccessModelMetadataAttributeValue = exports.getAccessModelMetadataAttribute = void 0;
exports.patchCampaignTemplate = exports.move = exports.getCampaignTemplates = exports.getCampaignTemplateSchedule = exports.getCampaignTemplate = exports.getCampaignReportsConfig = exports.getCampaignReports = exports.getCampaign = exports.getActiveCampaigns = exports.deleteCampaigns = exports.deleteCampaignTemplateSchedule = exports.deleteCampaignTemplate = exports.createCampaignTemplate = exports.createCampaign = exports.completeCampaign = exports.updateCampaignFilter = exports.listCampaignFilters = exports.getCampaignFilterById = exports.deleteCampaignFilters = exports.createCampaignFilter = exports.setBrandingItem = exports.getBrandingList = exports.getBranding = exports.deleteBranding = exports.createBrandingItem = exports.patchAuthUser = exports.getAuthUser = exports.patchProfileConfig = exports.getProfileConfigList = exports.getProfileConfig = exports.updateSourceAppsInBulk = exports.patchUserApp = exports.patchSourceApp = exports.listOwnedUserApps = exports.listAvailableSourceApps = exports.listAvailableAccountsForUserApp = exports.listAssignedSourceApp = exports.listAllUserApps = exports.listAllSourceApp = exports.listAccessProfilesForSourceApp = exports.getSourceApp = exports.deleteSourceApp = exports.deleteAccessProfilesFromSourceAppByBulk = exports.createSourceApp = exports.getApprovals = exports.getApproval = exports.sendManualDiscoverApplicationsCsvTemplate = exports.getManualDiscoverApplicationsCsvTemplate = exports.getDiscoveredApplications = exports.updateAccount = void 0;
exports.deleteConnectorRule = exports.createConnectorRule = exports.putConnectorCustomizer = exports.listConnectorCustomizers = exports.getConnectorCustomizer = exports.deleteConnectorCustomizer = exports.createConnectorCustomizerVersion = exports.createConnectorCustomizer = exports.updateScheduledAction = exports.updateObjectMappings = exports.listUploadedConfigurations = exports.listScheduledActions = exports.listDrafts = exports.listDeploys = exports.listBackups = exports.getUploadedConfiguration = exports.getObjectMappings = exports.getDeploy = exports.deleteUploadedConfiguration = exports.deleteScheduledAction = exports.deleteObjectMapping = exports.deleteDraft = exports.deleteBackup = exports.createUploadedConfiguration = exports.createScheduledAction = exports.createObjectMappings = exports.createObjectMapping = exports.createDeploy = exports.submitReassignCertsAsync = exports.signOffIdentityCertification = exports.reassignIdentityCertifications = exports.makeIdentityDecision = exports.listIdentityCertifications = exports.listIdentityAccessReviewItems = exports.listCertificationReviewers = exports.getPendingCertificationTasks = exports.getIdentityCertificationItemPermissions = exports.getIdentityCertification = exports.getCertificationTask = exports.getIdentitySummary = exports.getIdentitySummaries = exports.getIdentityDecisionSummary = exports.getIdentityAccessSummaries = exports.updateCampaign = exports.startGenerateCampaignTemplate = exports.startCampaignReport = exports.startCampaignRemediationScan = exports.startCampaign = exports.setCampaignTemplateSchedule = exports.setCampaignReportsConfig = void 0;
exports.getDimension = exports.deleteDimension = exports.deleteBulkDimensions = exports.createDimension = exports.publishDataSegment = exports.patchDataSegment = exports.listDataSegments = exports.getDataSegmentationEnabledForUser = exports.getDataSegmentIdentityMembership = exports.getDataSegment = exports.deleteDataSegment = exports.createDataSegment = exports.getCustomPasswordInstructions = exports.deleteCustomPasswordInstructions = exports.createCustomPasswordInstructions = exports.showPreviewDataSource = exports.searchPreDefinedSelectOptions = exports.searchFormInstancesByTenant = exports.searchFormElementDataByElementID = exports.searchFormDefinitionsByTenant = exports.patchFormInstance = exports.patchFormDefinition = exports.importFormDefinitions = exports.getFormInstanceFile = exports.getFormInstanceByKey = exports.getFormDefinitionByKey = exports.getFileFromS3 = exports.exportFormDefinitionsByTenant = exports.deleteFormDefinition = exports.createFormInstance = exports.createFormDefinitionFileRequest = exports.createFormDefinitionDynamicSchema = exports.createFormDefinition = exports.updateConnector = exports.putConnectorTranslations = exports.putConnectorSourceTemplate = exports.putConnectorSourceConfig = exports.putConnectorCorrelationConfig = exports.getConnectorTranslations = exports.getConnectorSourceTemplate = exports.getConnectorSourceConfig = exports.getConnectorList = exports.getConnectorCorrelationConfig = exports.getConnector = exports.deleteCustomConnector = exports.createCustomConnector = exports.testConnectorRule = exports.putConnectorRule = exports.getConnectorRuleList = exports.getConnectorRule = void 0;
exports.getIdentityOutlierSnapshots = exports.exportOutliersZip = exports.updateCommonAccessStatusInBulk = exports.getCommonAccess = exports.createCommonAccess = exports.setAccessRequestRecommendationsConfig = exports.getAccessRequestRecommendationsViewedItems = exports.getAccessRequestRecommendationsRequestedItems = exports.getAccessRequestRecommendationsIgnoredItems = exports.getAccessRequestRecommendationsConfig = exports.getAccessRequestRecommendations = exports.addAccessRequestRecommendationsViewedItems = exports.addAccessRequestRecommendationsViewedItem = exports.addAccessRequestRecommendationsRequestedItem = exports.addAccessRequestRecommendationsIgnoredItem = exports.updateWorkgroupMembers = exports.patchWorkgroup = exports.listWorkgroups = exports.listWorkgroupMembers = exports.listConnections = exports.getWorkgroup = exports.deleteWorkgroupsInBulk = exports.deleteWorkgroupMembers = exports.deleteWorkgroup = exports.createWorkgroup = exports.patchAuthOrgSessionConfig = exports.patchAuthOrgServiceProviderConfig = exports.patchAuthOrgNetworkConfig = exports.patchAuthOrgLockoutConfig = exports.getAuthOrgSessionConfig = exports.getAuthOrgServiceProviderConfig = exports.getAuthOrgNetworkConfig = exports.getAuthOrgLockoutConfig = exports.createAuthOrgNetworkConfig = exports.updateEntitlementsInBulk = exports.resetSourceEntitlements = exports.putEntitlementRequestConfig = exports.patchEntitlement = exports.listEntitlements = exports.listEntitlementParents = exports.listEntitlementChildren = exports.importEntitlementsBySource = exports.getEntitlementRequestConfig = exports.getEntitlement = exports.deleteAccessModelMetadataFromEntitlement = exports.createAccessModelMetadataForEntitlement = exports.patchDimension = exports.listDimensions = exports.listDimensionAccessProfiles = exports.getDimensionEntitlements = void 0;
exports.createIdentityAttribute = exports.synchronizeAttributesForIdentity = exports.startIdentityProcessing = exports.startIdentitiesInvite = exports.sendIdentityVerificationAccountToken = exports.resetIdentity = exports.listIdentities = exports.getRoleAssignments = exports.getRoleAssignment = exports.getIdentityOwnershipDetails = exports.getIdentity = exports.deleteIdentity = exports.setIcon = exports.deleteIcon = exports.updateEntitlementsPotentialRole = exports.patchRoleMiningSession = exports.patchPotentialRole_1 = exports.patchPotentialRole = exports.getSavedPotentialRoles = exports.getRoleMiningSessions = exports.getRoleMiningSessionStatus = exports.getRoleMiningSession = exports.getRoleMiningPotentialRole = exports.getPotentialRoleSummaries = exports.getPotentialRoleSourceIdentityUsage = exports.getPotentialRoleEntitlements = exports.getPotentialRoleApplications = exports.getPotentialRole = exports.getIdentitiesPotentialRole = exports.getExcludedEntitlementsPotentialRole = exports.getEntitlementsPotentialRole = exports.getEntitlementDistributionPotentialRole = exports.getAllPotentialRoleSummaries = exports.exportRoleMiningPotentialRoleStatus = exports.exportRoleMiningPotentialRoleAsync = exports.exportRoleMiningPotentialRole = exports.downloadRoleMiningPotentialRoleZip = exports.createRoleMiningSessions = exports.createPotentialRoleProvisionRequest = exports.updateRecommendationsConfig = exports.getRecommendationsConfig = exports.getRecommendations = exports.getPeerGroupOutliers = exports.unIgnoreIdentityOutliers = exports.listOutliersContributingFeatureAccessItems = exports.ignoreIdentityOutliers = exports.getPeerGroupOutliersContributingFeatures = exports.getOutlierContributingFeatureSummary = exports.getLatestIdentityOutlierSnapshots = exports.getIdentityOutliers = void 0;
exports.deleteManagedClient = exports.createManagedClient = exports.updateMachineIdentity = exports.listMachineIdentities = exports.getMachineIdentity = exports.deleteMachineIdentity = exports.createMachineIdentity = exports.updateMachineAccount = exports.listMachineAccounts = exports.getMachineAccount = exports.testMFAConfig = exports.setMFAOktaConfig = exports.setMFAKBAConfig = exports.setMFADuoConfig = exports.getMFAOktaConfig = exports.getMFAKbaConfig = exports.getMFADuoConfig = exports.updateLifecycleStates = exports.setLifecycleState = exports.getLifecycleStates = exports.getLifecycleState = exports.deleteLifecycleState = exports.createLifecycleState = exports.updateIdentityProfile = exports.syncIdentityProfile = exports.listIdentityProfiles = exports.importIdentityProfiles = exports.getIdentityProfile = exports.getDefaultIdentityAttributeConfig = exports.generateIdentityPreview = exports.exportIdentityProfiles = exports.deleteIdentityProfiles = exports.deleteIdentityProfile = exports.createIdentityProfile = exports.listIdentitySnapshots = exports.listIdentitySnapshotAccessItems = exports.listIdentityAccessItems = exports.listHistoricalIdentities = exports.getIdentityStartDate = exports.getIdentitySnapshotSummary = exports.getIdentitySnapshot = exports.getHistoricalIdentityEvents = exports.getHistoricalIdentity = exports.compareIdentitySnapshotsAccessType = exports.compareIdentitySnapshots = exports.putIdentityAttribute = exports.listIdentityAttributes = exports.getIdentityAttribute = exports.deleteIdentityAttributesInBulk = exports.deleteIdentityAttribute = void 0;
exports.getNonEmployeeSchemaAttribute = exports.getNonEmployeeRequestSummary = exports.getNonEmployeeRequest = exports.getNonEmployeeRecord = exports.getNonEmployeeBulkUploadStatus = exports.getNonEmployeeApprovalSummary = exports.getNonEmployeeApproval = exports.exportNonEmployeeSourceSchemaTemplate = exports.exportNonEmployeeRecords = exports.deleteNonEmployeeSourceSchemaAttributes = exports.deleteNonEmployeeSource = exports.deleteNonEmployeeSchemaAttribute = exports.deleteNonEmployeeRequest = exports.deleteNonEmployeeRecordsInBulk = exports.deleteNonEmployeeRecord = exports.createNonEmployeeSourceSchemaAttributes = exports.createNonEmployeeSource = exports.createNonEmployeeRequest = exports.createNonEmployeeRecord = exports.approveNonEmployeeRequest = exports.updateMultiHostSources = exports.testSourceConnectionMultihost = exports.testConnectionMultiHostSources = exports.getSourcesWithinMultiHost = exports.getMultihostIntegrationTypes = exports.getMultiHostSourceCreationErrors = exports.getMultiHostIntegrationsList = exports.getMultiHostIntegrations = exports.getEntitlementAggregationGroups = exports.getAcctAggregationGroups = exports.deleteMultiHost = exports.createSourcesWithinMultiHost = exports.createMultiHostIntegration = exports.updateManagedCluster = exports.update = exports.putClientLogConfiguration = exports.getManagedClusters = exports.getManagedCluster = exports.getClientLogConfiguration = exports.deleteManagedCluster = exports.createManagedCluster = exports.updateManagedClusterType = exports.getManagedClusterTypes = exports.getManagedClusterType = exports.deleteManagedClusterType = exports.createManagedClusterType = exports.updateManagedClient = exports.getManagedClients = exports.getManagedClientStatus = exports.getManagedClient = void 0;
exports.createPasswordSyncGroup = exports.setPasswordPolicy = exports.listPasswordPolicies = exports.getPasswordPolicyById = exports.deletePasswordPolicy = exports.createPasswordPolicy = exports.setPassword = exports.queryPasswordInfo = exports.getPasswordChangeStatus = exports.createDigitToken = exports.putPasswordDictionary = exports.getPasswordDictionary = exports.putPasswordOrgConfig = exports.getPasswordOrgConfig = exports.createPasswordOrgConfig = exports.patchOrgConfig = exports.getValidTimeZones = exports.getOrgConfig = exports.patchOauthClient = exports.listOauthClients = exports.getOauthClient = exports.deleteOauthClient = exports.createOauthClient = exports.sendTestNotification = exports.putMailFromAttributes = exports.listNotificationTemplates = exports.listNotificationTemplateDefaults = exports.listNotificationPreferences = exports.listFromAddresses = exports.getNotificationsTemplateContext = exports.getNotificationTemplate = exports.getMailFromAttributes = exports.getDkimAttributes = exports.deleteVerifiedFromAddress = exports.deleteNotificationTemplatesInBulk = exports.createVerifiedFromAddress = exports.createNotificationTemplate = exports.createDomainDkim = exports.updateNonEmployeeRecord = exports.rejectNonEmployeeRequest = exports.patchNonEmployeeSource = exports.patchNonEmployeeSchemaAttribute = exports.patchNonEmployeeRecord = exports.listNonEmployeeSources = exports.listNonEmployeeRequests = exports.listNonEmployeeRecords = exports.listNonEmployeeApprovals = exports.importNonEmployeeRecordsInBulk = exports.getNonEmployeeSourceSchemaAttributes = exports.getNonEmployeeSource = void 0;
exports.deleteSodPolicy = exports.createSodPolicy = exports.putSIMIntegration = exports.patchSIMAttributes = exports.patchBeforeProvisioningRule = exports.getSIMIntegrations = exports.getSIMIntegration = exports.deleteSIMIntegration = exports.createSIMIntegration = exports.updateRolesMetadataByQuery = exports.updateRolesMetadataByIds = exports.updateRolesMetadataByFilter = exports.updateAttributeKeyAndValueToRole = exports.searchRolesByFilter = exports.patchRole = exports.listRoles = exports.getRoleEntitlements = exports.getRoleAssignedIdentities = exports.getRole = exports.getBulkUpdateStatusById = exports.getBulkUpdateStatus = exports.deleteRole = exports.deleteMetadataFromRoleByKeyAndValue = exports.deleteBulkRoles = exports.createRole = exports.getRoleInsightsSummary = exports.getRoleInsightsRequests = exports.getRoleInsightsEntitlementsChanges = exports.getRoleInsightsCurrentEntitlements = exports.getRoleInsights = exports.getRoleInsight = exports.getEntitlementChangesIdentities = exports.downloadRoleInsightsEntitlementsChanges = exports.createRoleInsightRequests = exports.listRequestableObjects = exports.startReport = exports.getReportResult = exports.getReport = exports.cancelReport = exports.updatePublicIdentityConfig = exports.getPublicIdentityConfig = exports.getPublicIdentities = exports.patchPersonalAccessToken = exports.listPersonalAccessTokens = exports.deletePersonalAccessToken = exports.createPersonalAccessToken = exports.updatePasswordSyncGroup = exports.getPasswordSyncGroups = exports.getPasswordSyncGroup = exports.deletePasswordSyncGroup = void 0;
exports.patchSegment = exports.listSegments = exports.getSegment = exports.deleteSegment = exports.createSegment = exports.patchSearchAttributeConfig = exports.getSingleSearchAttributeConfig = exports.getSearchAttributeConfig = exports.deleteSearchAttributeConfig = exports.createSearchAttributeConfig = exports.searchPost = exports.searchGet = exports.searchCount = exports.searchAggregate = exports.updateScheduledSearch = exports.unsubscribeScheduledSearch = exports.listScheduledSearch = exports.getScheduledSearch = exports.deleteScheduledSearch = exports.createScheduledSearch = exports.putSavedSearch = exports.listSavedSearches = exports.getSavedSearch = exports.executeSavedSearch = exports.deleteSavedSearch = exports.createSavedSearch = exports.listSpConfigObjects = exports.importSpConfig = exports.getSpConfigImportStatus = exports.getSpConfigImport = exports.getSpConfigExportStatus = exports.getSpConfigExport = exports.exportSpConfig = exports.startViolationCheck = exports.startPredictSodViolations = exports.startSodPolicy = exports.startSodAllPoliciesForOrg = exports.startEvaluateSodPolicy = exports.putSodPolicy = exports.putPolicySchedule = exports.patchSodPolicy = exports.listSodPolicies = exports.getSodViolationReportStatus = exports.getSodViolationReportRunStatus = exports.getSodPolicySchedule = exports.getSodPolicy = exports.getSodAllReportRunStatus = exports.getDefaultViolationReport = exports.getCustomViolationReport = exports.deleteSodPolicySchedule = void 0;
exports.putSourceAttrSyncConfig = exports.putSource = exports.putProvisioningPolicy = exports.putNativeChangeDetectionConfig = exports.putCorrelationConfig = exports.pingCluster = exports.listSources = exports.listProvisioningPolicies = exports.importUncorrelatedAccounts = exports.importEntitlementsSchema = exports.importConnectorFile = exports.importAccountsSchema = exports.importAccounts = exports.getSourceSchemas = exports.getSourceSchema = exports.getSourceSchedules = exports.getSourceSchedule = exports.getSourceHealth = exports.getSourceEntitlementRequestConfig = exports.getSourceConnections = exports.getSourceConfig = exports.getSourceAttrSyncConfig = exports.getSource = exports.getProvisioningPolicy = exports.getNativeChangeDetectionConfig = exports.getEntitlementsSchema = exports.getCorrelationConfig = exports.getAccountsSchema = exports.deleteSourceSchema = exports.deleteSourceSchedule = exports.deleteSource = exports.deleteProvisioningPolicy = exports.deleteNativeChangeDetectionConfig = exports.deleteAccountsAsync = exports.createSourceSchema = exports.createSourceSchedule = exports.createSource = exports.createProvisioningPolicy = exports.getUsagesBySourceId = exports.getStatusBySourceId = exports.updateStatusCheckDetails = exports.putServiceDeskIntegration = exports.patchServiceDeskIntegration = exports.getStatusCheckDetails = exports.getServiceDeskIntegrations = exports.getServiceDeskIntegrationTypes = exports.getServiceDeskIntegrationTemplate = exports.getServiceDeskIntegration = exports.deleteServiceDeskIntegration = exports.createServiceDeskIntegration = void 0;
exports.updateSubscription = exports.testSubscriptionFilter = exports.startTestTriggerInvocation = exports.patchSubscription = exports.listTriggers = exports.listTriggerInvocationStatus = exports.listSubscriptions = exports.deleteSubscription = exports.createSubscription = exports.completeTriggerInvocation = exports.updateTransform = exports.listTransforms = exports.getTransform = exports.deleteTransform = exports.createTransform = exports.patchTenantContext = exports.getTenantContext = exports.getTenant = exports.updateTaskStatus = exports.getTaskStatusList = exports.getTaskStatus = exports.getPendingTasks = exports.getPendingTaskHeaders = exports.setTagsToManyObjects = exports.setTagToObject = exports.putTaggedObject = exports.listTaggedObjectsByType = exports.listTaggedObjects = exports.getTaggedObject = exports.deleteTagsToManyObject = exports.deleteTaggedObject = exports.submitSedBatchRequest = exports.submitSedAssignment = exports.submitSedApproval = exports.patchSed = exports.listSeds = exports.getSedBatches = exports.getSedBatchStats = exports.updateSourceSchema = exports.updateSourceSchedule = exports.updateSourceEntitlementRequestConfig = exports.updateSource = exports.updateProvisioningPolicy = exports.updateProvisioningPoliciesInBulk = exports.updatePasswordPolicyHolders = exports.testSourceConnection = exports.testSourceConfiguration = exports.syncAttributesForSource = exports.searchResourceObjects = exports.putSourceSchema = void 0;
exports.testWorkflow = exports.testExternalExecuteWorkflow = exports.putWorkflow = exports.patchWorkflow = exports.listWorkflows = exports.listWorkflowLibraryTriggers = exports.listWorkflowLibraryOperators = exports.listWorkflowLibraryActions = exports.listCompleteWorkflowLibrary = exports.getWorkflowExecutions = exports.getWorkflowExecutionHistory = exports.getWorkflowExecution = exports.getWorkflow = exports.deleteWorkflow = exports.createWorkflowExternalTrigger = exports.createWorkflow = exports.createExternalExecuteWorkflow = exports.cancelWorkflowExecution = exports.putTenantConfiguration = exports.putReassignmentConfig = exports.listReassignmentConfigurations = exports.getTenantConfigConfiguration = exports.getReassignmentConfiguration = exports.getReassignmentConfigTypes = exports.getEvaluateReassignmentConfiguration = exports.deleteReassignmentConfiguration = exports.createReassignmentConfiguration = exports.submitAccountSelection = exports.rejectApprovalItemsInBulk = exports.rejectApprovalItem = exports.listWorkItems = exports.getWorkItemsSummary = exports.getWorkItem = exports.getCountWorkItems = exports.getCountCompletedWorkItems = exports.getCompletedWorkItems = exports.forwardWorkItem = exports.completeWorkItem = exports.approveApprovalItemsInBulk = exports.approveApprovalItem = exports.getVendorConnectorMappings = exports.deleteVendorConnectorMapping = exports.createVendorConnectorMapping = exports.setTenantUiMetadata = exports.getTenantUiMetadata = void 0;
const sdk = require("sailpoint-api-client");
function handleApiCall(apiCall) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield apiCall();
            return {
                data: response.data,
                status: response.status,
                statusText: response.statusText,
                headers: response.headers,
            };
        }
        catch (error) {
            console.error('API call error:', error);
            return generateErrorResponse(error);
        }
    });
}
function generateErrorResponse(error) {
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
 * Get single Access Model Metadata Attribute
 * @summary Get Access Model Metadata Attribute
 * @param {AccessModelMetadataV2025ApiGetAccessModelMetadataAttributeRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAccessModelMetadataAttribute = (requestParameters, apiConfig) => {
    const accessmodelmetadatav2025api = new sdk.AccessModelMetadataV2025Api(apiConfig);
    return handleApiCall(() => accessmodelmetadatav2025api.getAccessModelMetadataAttribute(requestParameters));
};
exports.getAccessModelMetadataAttribute = getAccessModelMetadataAttribute;
/**
 * Get single Access Model Metadata Attribute Value
 * @summary Get Access Model Metadata Value
 * @param {AccessModelMetadataV2025ApiGetAccessModelMetadataAttributeValueRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAccessModelMetadataAttributeValue = (requestParameters, apiConfig) => {
    const accessmodelmetadatav2025api = new sdk.AccessModelMetadataV2025Api(apiConfig);
    return handleApiCall(() => accessmodelmetadatav2025api.getAccessModelMetadataAttributeValue(requestParameters));
};
exports.getAccessModelMetadataAttributeValue = getAccessModelMetadataAttributeValue;
/**
 * Get a list of Access Model Metadata Attributes
 * @summary List Access Model Metadata Attributes
 * @param {AccessModelMetadataV2025ApiListAccessModelMetadataAttributeRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listAccessModelMetadataAttribute = (requestParameters = {}, apiConfig) => {
    const accessmodelmetadatav2025api = new sdk.AccessModelMetadataV2025Api(apiConfig);
    return handleApiCall(() => accessmodelmetadatav2025api.listAccessModelMetadataAttribute(requestParameters));
};
exports.listAccessModelMetadataAttribute = listAccessModelMetadataAttribute;
/**
 * Get a list of Access Model Metadata Attribute Values
 * @summary List Access Model Metadata Values
 * @param {AccessModelMetadataV2025ApiListAccessModelMetadataAttributeValueRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listAccessModelMetadataAttributeValue = (requestParameters, apiConfig) => {
    const accessmodelmetadatav2025api = new sdk.AccessModelMetadataV2025Api(apiConfig);
    return handleApiCall(() => accessmodelmetadatav2025api.listAccessModelMetadataAttributeValue(requestParameters));
};
exports.listAccessModelMetadataAttributeValue = listAccessModelMetadataAttributeValue;
/**
 * Create an access profile. A user with `ROLE_SUBADMIN` or `SOURCE_SUBADMIN` authority must be associated with the access profile\'s source. The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing access profiles. However, any new access profiles as well as any updates to existing descriptions are limited to 2000 characters. >**Note:** To use this endpoint, you need all the listed scopes.
 * @summary Create Access Profile
 * @param {AccessProfilesV2025ApiCreateAccessProfileRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createAccessProfile = (requestParameters, apiConfig) => {
    const accessprofilesv2025api = new sdk.AccessProfilesV2025Api(apiConfig);
    return handleApiCall(() => accessprofilesv2025api.createAccessProfile(requestParameters));
};
exports.createAccessProfile = createAccessProfile;
/**
 * This API deletes an existing Access Profile.  The Access Profile must not be in use, for example, Access Profile can not be deleted if they belong to an Application, Life Cycle State or a Role. If it is, a 400 error is returned.  A user with SOURCE_SUBADMIN must be able to administer the Source associated with the Access Profile.
 * @summary Delete the specified Access Profile
 * @param {AccessProfilesV2025ApiDeleteAccessProfileRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteAccessProfile = (requestParameters, apiConfig) => {
    const accessprofilesv2025api = new sdk.AccessProfilesV2025Api(apiConfig);
    return handleApiCall(() => accessprofilesv2025api.deleteAccessProfile(requestParameters));
};
exports.deleteAccessProfile = deleteAccessProfile;
/**
 * This endpoint initiates a bulk deletion of one or more access profiles. When the request is successful, the endpoint returns the bulk delete\'s task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status), which will return the task result\'s status and information.  This endpoint can only bulk delete up to a limit of 50 access profiles per request.  By default, if any of the indicated access profiles are in use, no deletions will be performed and the **inUse** field of the response indicates the usages that must be removed first. If the request field **bestEffortOnly** is **true**, however, usages are reported in the **inUse** response field but all other indicated access profiles will be deleted. A SOURCE_SUBADMIN user can only use this endpoint to delete access profiles associated with sources they\'re able to administer.
 * @summary Delete Access Profile(s)
 * @param {AccessProfilesV2025ApiDeleteAccessProfilesInBulkRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteAccessProfilesInBulk = (requestParameters, apiConfig) => {
    const accessprofilesv2025api = new sdk.AccessProfilesV2025Api(apiConfig);
    return handleApiCall(() => accessprofilesv2025api.deleteAccessProfilesInBulk(requestParameters));
};
exports.deleteAccessProfilesInBulk = deleteAccessProfilesInBulk;
/**
 * This API returns an Access Profile by its ID.
 * @summary Get an Access Profile
 * @param {AccessProfilesV2025ApiGetAccessProfileRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAccessProfile = (requestParameters, apiConfig) => {
    const accessprofilesv2025api = new sdk.AccessProfilesV2025Api(apiConfig);
    return handleApiCall(() => accessprofilesv2025api.getAccessProfile(requestParameters));
};
exports.getAccessProfile = getAccessProfile;
/**
 * Use this API to get a list of an access profile\'s entitlements.  A SOURCE_SUBADMIN user must have access to the source associated with the specified access profile. >**Note:** When you filter for access profiles that have the \'+\' symbol in their names, the response is blank.
 * @summary List Access Profile\'s Entitlements
 * @param {AccessProfilesV2025ApiGetAccessProfileEntitlementsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAccessProfileEntitlements = (requestParameters, apiConfig) => {
    const accessprofilesv2025api = new sdk.AccessProfilesV2025Api(apiConfig);
    return handleApiCall(() => accessprofilesv2025api.getAccessProfileEntitlements(requestParameters));
};
exports.getAccessProfileEntitlements = getAccessProfileEntitlements;
/**
 * Get a list of access profiles. >**Note:** When you filter for access profiles that have the \'+\' symbol in their names, the response is blank.
 * @summary List Access Profiles
 * @param {AccessProfilesV2025ApiListAccessProfilesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listAccessProfiles = (requestParameters = {}, apiConfig) => {
    const accessprofilesv2025api = new sdk.AccessProfilesV2025Api(apiConfig);
    return handleApiCall(() => accessprofilesv2025api.listAccessProfiles(requestParameters));
};
exports.listAccessProfiles = listAccessProfiles;
/**
 * This API updates an existing Access Profile. The following fields are patchable:  **name**  **description**  **enabled**  **owner**  **requestable**  **accessRequestConfig**  **revokeRequestConfig**  **segments**  **entitlements**  **provisioningCriteria**  **source** (must be updated with entitlements belonging to new source in the same API call)  If you need to change the `source` of the access profile, you can do so only if you update the `entitlements` in the same API call.  The new entitlements can only come from the target source that you want to change to.  Look for the example \"Replace Source\" in the examples dropdown.  A user with SOURCE_SUBADMIN may only use this API to patch Access Profiles which are associated with Sources they are able to administer. >  The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing access profiles, however, any new access profiles as well as any updates to existing descriptions will be limited to 2000 characters.  > You can only add or replace **entitlements** that exist on the source that the access profile is attached to. You can use the **list entitlements** endpoint with the **filters** query parameter to get a list of available entitlements on the access profile\'s source.
 * @summary Patch a specified Access Profile
 * @param {AccessProfilesV2025ApiPatchAccessProfileRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchAccessProfile = (requestParameters, apiConfig) => {
    const accessprofilesv2025api = new sdk.AccessProfilesV2025Api(apiConfig);
    return handleApiCall(() => accessprofilesv2025api.patchAccessProfile(requestParameters));
};
exports.patchAccessProfile = patchAccessProfile;
/**
 * This API initiates a bulk update of field requestable for one or more Access Profiles.  >  If any of the indicated Access Profiles is exists in Organization,then those Access Profiles will be added in **updated**     list of the response.Requestable field of these Access Profiles marked as **true** or **false**.  >  If any of the indicated Access Profiles is not does not exists in Organization,then those Access Profiles will be added in **notFound** list of the response. Access Profiles marked as **notFound** will not be updated.  A SOURCE_SUBADMIN may only use this API to update Access Profiles which are associated with Sources they are able to administer.
 * @summary Update Access Profile(s) requestable field.
 * @param {AccessProfilesV2025ApiUpdateAccessProfilesInBulkRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateAccessProfilesInBulk = (requestParameters, apiConfig) => {
    const accessprofilesv2025api = new sdk.AccessProfilesV2025Api(apiConfig);
    return handleApiCall(() => accessprofilesv2025api.updateAccessProfilesInBulk(requestParameters));
};
exports.updateAccessProfilesInBulk = updateAccessProfilesInBulk;
/**
 * Use this endpoint to approve an access request approval. Only the owner of the approval and ORG_ADMIN users are allowed to perform this action.
 * @summary Approve Access Request Approval
 * @param {AccessRequestApprovalsV2025ApiApproveAccessRequestRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const approveAccessRequest = (requestParameters, apiConfig) => {
    const accessrequestapprovalsv2025api = new sdk.AccessRequestApprovalsV2025Api(apiConfig);
    return handleApiCall(() => accessrequestapprovalsv2025api.approveAccessRequest(requestParameters));
};
exports.approveAccessRequest = approveAccessRequest;
/**
 * Use this API to forward an access request approval to a new owner. Only the owner of the approval and ORG_ADMIN users are allowed to perform this action. Only the owner of the approval and ORG_ADMIN users are allowed to perform this action.
 * @summary Forward Access Request Approval
 * @param {AccessRequestApprovalsV2025ApiForwardAccessRequestRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const forwardAccessRequest = (requestParameters, apiConfig) => {
    const accessrequestapprovalsv2025api = new sdk.AccessRequestApprovalsV2025Api(apiConfig);
    return handleApiCall(() => accessrequestapprovalsv2025api.forwardAccessRequest(requestParameters));
};
exports.forwardAccessRequest = forwardAccessRequest;
/**
 * Use this API to return the number of pending, approved and rejected access requests approvals. See the \"owner-id\" query parameter for authorization information. info.
 * @summary Get Access Requests Approvals Number
 * @param {AccessRequestApprovalsV2025ApiGetAccessRequestApprovalSummaryRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAccessRequestApprovalSummary = (requestParameters = {}, apiConfig) => {
    const accessrequestapprovalsv2025api = new sdk.AccessRequestApprovalsV2025Api(apiConfig);
    return handleApiCall(() => accessrequestapprovalsv2025api.getAccessRequestApprovalSummary(requestParameters));
};
exports.getAccessRequestApprovalSummary = getAccessRequestApprovalSummary;
/**
 * This API endpoint returns the list of approvers for the given access request id.
 * @summary Access Request Approvers
 * @param {AccessRequestApprovalsV2025ApiListAccessRequestApproversRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listAccessRequestApprovers = (requestParameters, apiConfig) => {
    const accessrequestapprovalsv2025api = new sdk.AccessRequestApprovalsV2025Api(apiConfig);
    return handleApiCall(() => accessrequestapprovalsv2025api.listAccessRequestApprovers(requestParameters));
};
exports.listAccessRequestApprovers = listAccessRequestApprovers;
/**
 * This endpoint returns list of completed approvals. See *owner-id* query parameter below for authorization info.
 * @summary Completed Access Request Approvals List
 * @param {AccessRequestApprovalsV2025ApiListCompletedApprovalsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listCompletedApprovals = (requestParameters = {}, apiConfig) => {
    const accessrequestapprovalsv2025api = new sdk.AccessRequestApprovalsV2025Api(apiConfig);
    return handleApiCall(() => accessrequestapprovalsv2025api.listCompletedApprovals(requestParameters));
};
exports.listCompletedApprovals = listCompletedApprovals;
/**
 * This endpoint returns a list of pending approvals. See \"owner-id\" query parameter below for authorization info.
 * @summary Pending Access Request Approvals List
 * @param {AccessRequestApprovalsV2025ApiListPendingApprovalsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listPendingApprovals = (requestParameters = {}, apiConfig) => {
    const accessrequestapprovalsv2025api = new sdk.AccessRequestApprovalsV2025Api(apiConfig);
    return handleApiCall(() => accessrequestapprovalsv2025api.listPendingApprovals(requestParameters));
};
exports.listPendingApprovals = listPendingApprovals;
/**
 * Use this API to reject an access request approval. Only the owner of the approval and admin users are allowed to perform this action.
 * @summary Reject Access Request Approval
 * @param {AccessRequestApprovalsV2025ApiRejectAccessRequestRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const rejectAccessRequest = (requestParameters, apiConfig) => {
    const accessrequestapprovalsv2025api = new sdk.AccessRequestApprovalsV2025Api(apiConfig);
    return handleApiCall(() => accessrequestapprovalsv2025api.rejectAccessRequest(requestParameters));
};
exports.rejectAccessRequest = rejectAccessRequest;
/**
 * Use this API to return information access metrics.
 * @summary Return access request identity metrics
 * @param {AccessRequestIdentityMetricsV2025ApiGetAccessRequestIdentityMetricsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAccessRequestIdentityMetrics = (requestParameters, apiConfig) => {
    const accessrequestidentitymetricsv2025api = new sdk.AccessRequestIdentityMetricsV2025Api(apiConfig);
    return handleApiCall(() => accessrequestidentitymetricsv2025api.getAccessRequestIdentityMetrics(requestParameters));
};
exports.getAccessRequestIdentityMetrics = getAccessRequestIdentityMetrics;
/**
 * This API endpoint allows approving pending access requests in bulk. Maximum of 50 approval ids can be  provided in the request for one single invocation.  ORG_ADMIN or users with rights \"idn:access-request-administration:write\" can approve the access requests in bulk.
 * @summary Bulk Approve Access Request
 * @param {AccessRequestsV2025ApiApproveBulkAccessRequestRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const approveBulkAccessRequest = (requestParameters, apiConfig) => {
    const accessrequestsv2025api = new sdk.AccessRequestsV2025Api(apiConfig);
    return handleApiCall(() => accessrequestsv2025api.approveBulkAccessRequest(requestParameters));
};
exports.approveBulkAccessRequest = approveBulkAccessRequest;
/**
 * This API endpoint cancels a pending access request. An access request can be cancelled only if it has not passed the approval step. In addition to users with ORG_ADMIN, any user who originally submitted the access request may cancel it.
 * @summary Cancel Access Request
 * @param {AccessRequestsV2025ApiCancelAccessRequestRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const cancelAccessRequest = (requestParameters, apiConfig) => {
    const accessrequestsv2025api = new sdk.AccessRequestsV2025Api(apiConfig);
    return handleApiCall(() => accessrequestsv2025api.cancelAccessRequest(requestParameters));
};
exports.cancelAccessRequest = cancelAccessRequest;
/**
 * This API endpoint allows cancelling pending access requests in bulk. Maximum of 50 access request ids can be  provided in the request for one single invocation.  Only ORG_ADMIN or users with rights \"idn:access-request-administration:write\" can cancel the access requests in  bulk.
 * @summary Bulk Cancel Access Request
 * @param {AccessRequestsV2025ApiCancelAccessRequestInBulkRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const cancelAccessRequestInBulk = (requestParameters, apiConfig) => {
    const accessrequestsv2025api = new sdk.AccessRequestsV2025Api(apiConfig);
    return handleApiCall(() => accessrequestsv2025api.cancelAccessRequestInBulk(requestParameters));
};
exports.cancelAccessRequestInBulk = cancelAccessRequestInBulk;
/**
 * This endpoint closes access requests that are stuck in a pending state. It can be used throughout a request\'s lifecycle even after the approval state, unlike the [Cancel Access Request endpoint](https://developer.sailpoint.com/idn/api/v3/cancel-access-request/).  To find pending access requests with the UI, navigate to Search and use this query: status: Pending AND \"Access Request\". Use the Column Chooser to select \'Tracking Number\', and use the \'Download\' button to export a CSV containing the tracking numbers.  To find pending access requests with the API, use the [List Account Activities endpoint](https://developer.sailpoint.com/idn/api/v3/list-account-activities/).  Input the IDs from either source.  To track the status of endpoint requests, navigate to Search and use this query: name:\"Close Identity Requests\". Search will include \"Close Identity Requests Started\" audits when requests are initiated and \"Close Identity Requests Completed\" audits when requests are completed. The completion audit will list the identity request IDs that finished in error.  This API triggers the [Provisioning Completed event trigger](https://developer.sailpoint.com/idn/docs/event-triggers/triggers/provisioning-completed/) for each access request that is closed.
 * @summary Close Access Request
 * @param {AccessRequestsV2025ApiCloseAccessRequestRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const closeAccessRequest = (requestParameters, apiConfig) => {
    const accessrequestsv2025api = new sdk.AccessRequestsV2025Api(apiConfig);
    return handleApiCall(() => accessrequestsv2025api.closeAccessRequest(requestParameters));
};
exports.closeAccessRequest = closeAccessRequest;
/**
 * Use this API to submit an access request in Identity Security Cloud (ISC), where it follows any ISC approval processes.  Access requests are processed asynchronously by ISC. A successful response from this endpoint means that the request has been submitted to ISC and is queued for processing. Because this endpoint is asynchronous, it doesn\'t return an error if you submit duplicate access requests in quick succession or submit an access request for access that is already in progress, approved, or rejected.  It\'s best practice to check for any existing access requests that reference the same access items before submitting a new access request. This can be accomplished by using the [List Access Request Status](https://developer.sailpoint.com/idn/api/v3/list-access-request-status) or the [Pending Access Request Approvals](https://developer.sailpoint.com/idn/api/v3/list-pending-approvals) APIs. You can also use the [Search API](https://developer.sailpoint.com/idn/api/v3/search) to check the existing access items an identity has before submitting an access request to ensure that you aren\'t requesting access that is already granted. If you use this API to request access that an identity already has, the API will ignore the request.  These ignored requests do not display when you use the [List Access Request Status](https://developer.sailpoint.com/idn/api/v3/list-access-request-status) API.  There are two types of access request:  __GRANT_ACCESS__ * Can be requested for multiple identities in a single request. * Supports self request and request on behalf of other users. Refer to the [Get Access Request Configuration](https://developer.sailpoint.com/idn/api/v3/get-access-request-config) endpoint for request configuration options.   * Allows any authenticated token (except API) to call this endpoint to request to grant access to themselves. Depending on the configuration, a user can request access for others. * Roles, access profiles and entitlements can be requested. * While requesting entitlements, maximum of 25 entitlements and 10 recipients are allowed in a request. * Now supports an alternate field \'requestedForWithRequestedItems\' for users to specify account selections while requesting items where they have more than one account on the source.   __REVOKE_ACCESS__ * Can only be requested for a single identity at a time. * You cannot use an access request to revoke access from an identity if that access has been granted by role membership or by birthright provisioning.  * Does not support self request. Only manager can request to revoke access for their directly managed employees. * If a `removeDate` is specified, then the access will be removed on that date and time only for roles, access profiles and entitlements. * Roles, access profiles, and entitlements can be requested for revocation. * Revoke requests for entitlements are limited to 1 entitlement per access request currently. * You can specify a `removeDate` if the access doesn\'t already have a sunset date. The `removeDate` must be a future date, in the UTC timezone.  * Allows a manager to request to revoke access for direct employees. A user with ORG_ADMIN authority can also request to revoke access from anyone. * Now supports REVOKE_ACCESS requests for identities with multiple accounts on a single source, with the help of \'assignmentId\' and \'nativeIdentity\' fields.
 * @summary Submit Access Request
 * @param {AccessRequestsV2025ApiCreateAccessRequestRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createAccessRequest = (requestParameters, apiConfig) => {
    const accessrequestsv2025api = new sdk.AccessRequestsV2025Api(apiConfig);
    return handleApiCall(() => accessrequestsv2025api.createAccessRequest(requestParameters));
};
exports.createAccessRequest = createAccessRequest;
/**
 * This endpoint returns the current access-request configuration.
 * @summary Get Access Request Configuration
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAccessRequestConfig = (apiConfig) => {
    const accessrequestsv2025api = new sdk.AccessRequestsV2025Api(apiConfig);
    return handleApiCall(() => accessrequestsv2025api.getAccessRequestConfig());
};
exports.getAccessRequestConfig = getAccessRequestConfig;
/**
 * Use this API to return the details for a entitlement on an identity including specific data relating to remove date and the ability to revoke the identity.
 * @summary Identity Entitlement Details
 * @param {AccessRequestsV2025ApiGetEntitlementDetailsForIdentityRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getEntitlementDetailsForIdentity = (requestParameters, apiConfig) => {
    const accessrequestsv2025api = new sdk.AccessRequestsV2025Api(apiConfig);
    return handleApiCall(() => accessrequestsv2025api.getEntitlementDetailsForIdentity(requestParameters));
};
exports.getEntitlementDetailsForIdentity = getEntitlementDetailsForIdentity;
/**
 * Use this API to return a list of access request statuses based on the specified query parameters. If an access request was made for access that an identity already has, the API ignores the access request.  These ignored requests do not display in the list of access request statuses. Any user with any user level can get the status of their own access requests. A user with ORG_ADMIN is required to call this API to get a list of statuses for other users.
 * @summary Access Request Status
 * @param {AccessRequestsV2025ApiListAccessRequestStatusRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listAccessRequestStatus = (requestParameters = {}, apiConfig) => {
    const accessrequestsv2025api = new sdk.AccessRequestsV2025Api(apiConfig);
    return handleApiCall(() => accessrequestsv2025api.listAccessRequestStatus(requestParameters));
};
exports.listAccessRequestStatus = listAccessRequestStatus;
/**
 * Use this API to get access request statuses of all the access requests in the org based on the specified query  parameters. Any user with user level ORG_ADMIN or scope idn:access-request-administration:read can access this endpoint to get  the  access request statuses
 * @summary Access Request Status for Administrators
 * @param {AccessRequestsV2025ApiListAdministratorsAccessRequestStatusRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listAdministratorsAccessRequestStatus = (requestParameters = {}, apiConfig) => {
    const accessrequestsv2025api = new sdk.AccessRequestsV2025Api(apiConfig);
    return handleApiCall(() => accessrequestsv2025api.listAdministratorsAccessRequestStatus(requestParameters));
};
exports.listAdministratorsAccessRequestStatus = listAdministratorsAccessRequestStatus;
/**
 * Use this API to fetch account information for an identity against the items in an access request.  Used to fetch accountSelection for the AccessRequest prior to submitting for async processing.
 * @summary Get accounts selections for identity
 * @param {AccessRequestsV2025ApiLoadAccountSelectionsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const loadAccountSelections = (requestParameters, apiConfig) => {
    const accessrequestsv2025api = new sdk.AccessRequestsV2025Api(apiConfig);
    return handleApiCall(() => accessrequestsv2025api.loadAccountSelections(requestParameters));
};
exports.loadAccountSelections = loadAccountSelections;
/**
 * This endpoint replaces the current access-request configuration.
 * @summary Update Access Request Configuration
 * @param {AccessRequestsV2025ApiSetAccessRequestConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const setAccessRequestConfig = (requestParameters, apiConfig) => {
    const accessrequestsv2025api = new sdk.AccessRequestsV2025Api(apiConfig);
    return handleApiCall(() => accessrequestsv2025api.setAccessRequestConfig(requestParameters));
};
exports.setAccessRequestConfig = setAccessRequestConfig;
/**
 * This gets a single account activity by its id.
 * @summary Get an Account Activity
 * @param {AccountActivitiesV2025ApiGetAccountActivityRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAccountActivity = (requestParameters, apiConfig) => {
    const accountactivitiesv2025api = new sdk.AccountActivitiesV2025Api(apiConfig);
    return handleApiCall(() => accountactivitiesv2025api.getAccountActivity(requestParameters));
};
exports.getAccountActivity = getAccountActivity;
/**
 * This gets a collection of account activities that satisfy the given query parameters.
 * @summary List Account Activities
 * @param {AccountActivitiesV2025ApiListAccountActivitiesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listAccountActivities = (requestParameters = {}, apiConfig) => {
    const accountactivitiesv2025api = new sdk.AccountActivitiesV2025Api(apiConfig);
    return handleApiCall(() => accountactivitiesv2025api.listAccountActivities(requestParameters));
};
exports.listAccountActivities = listAccountActivities;
/**
 * This API returns the status of an *in-progress* account aggregation, along with the total number of **NEW**, **CHANGED** and **DELETED** accounts found since the previous aggregation, and the number of those accounts that have been processed so far.  Accounts that have not changed since the previous aggregation are not included in **totalAccounts** and **processedAccounts** counts returned by this API. This is distinct from **Accounts Scanned** shown in the Aggregation UI, which indicates total accounts scanned regardless of whether they changed or not.  Since this endpoint reports on the status of an *in-progress* account aggregation, totalAccounts and processedAccounts may change between calls to this endpoint.  *Only available up to an hour after the aggregation completes. May respond with *404 Not Found* after that.* required to call this API.
 * @summary In-progress Account Aggregation status
 * @param {AccountAggregationsV2025ApiGetAccountAggregationStatusRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAccountAggregationStatus = (requestParameters, apiConfig) => {
    const accountaggregationsv2025api = new sdk.AccountAggregationsV2025Api(apiConfig);
    return handleApiCall(() => accountaggregationsv2025api.getAccountAggregationStatus(requestParameters));
};
exports.getAccountAggregationStatus = getAccountAggregationStatus;
/**
 * This API returns a summary of account usage insights for past 12 months.
 * @summary Returns account usage insights
 * @param {AccountUsagesV2025ApiGetUsagesByAccountIdRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getUsagesByAccountId = (requestParameters, apiConfig) => {
    const accountusagesv2025api = new sdk.AccountUsagesV2025Api(apiConfig);
    return handleApiCall(() => accountusagesv2025api.getUsagesByAccountId(requestParameters));
};
exports.getUsagesByAccountId = getUsagesByAccountId;
/**
 * Submit an account creation task - the API then returns the task ID.    You must include the `sourceId` where the account will be created in the `attributes` object.  This endpoint creates an account on the source record in your ISC tenant. This is useful for Flat File (`DelimitedFile`) type sources because it allows you to aggregate new accounts without needing to import a new CSV file every time.   However, if you use this endpoint to create an account for a Direct Connection type source, you must ensure that the account also exists on the target source.  The endpoint doesn\'t actually provision the account on the target source, which means that if the account doesn\'t also exist on the target source, an aggregation between the source and your tenant will remove it from your tenant.   By providing the account ID of an existing account in the request body, this API will function as a PATCH operation and update the account.
 * @summary Create Account
 * @param {AccountsV2025ApiCreateAccountRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createAccount = (requestParameters, apiConfig) => {
    const accountsv2025api = new sdk.AccountsV2025Api(apiConfig);
    return handleApiCall(() => accountsv2025api.createAccount(requestParameters));
};
exports.createAccount = createAccount;
/**
 * Use this API to delete an account.  This endpoint submits an account delete task and returns the task ID.  This endpoint only deletes the account from IdentityNow, not the source itself, which can result in the account\'s returning with the next aggregation between the source and IdentityNow.  To avoid this scenario, it is recommended that you [disable accounts](https://developer.sailpoint.com/idn/api/v3/disable-account) rather than delete them. This will also allow you to reenable the accounts in the future.  >**NOTE: You can only delete accounts from sources of the \"DelimitedFile\" type.**
 * @summary Delete Account
 * @param {AccountsV2025ApiDeleteAccountRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteAccount = (requestParameters, apiConfig) => {
    const accountsv2025api = new sdk.AccountsV2025Api(apiConfig);
    return handleApiCall(() => accountsv2025api.deleteAccount(requestParameters));
};
exports.deleteAccount = deleteAccount;
/**
 * Use this endpoint to remove accounts from the system without provisioning changes to the source. Accounts that are removed could be re-created during the next aggregation.  This endpoint is good for: * Removing accounts that no longer exist on the source. * Removing accounts that won\'t be aggregated following updates to the source configuration. * Forcing accounts to be re-created following the next aggregation to re-run account processing, support testing, etc.
 * @summary Remove Account
 * @param {AccountsV2025ApiDeleteAccountAsyncRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteAccountAsync = (requestParameters, apiConfig) => {
    const accountsv2025api = new sdk.AccountsV2025Api(apiConfig);
    return handleApiCall(() => accountsv2025api.deleteAccountAsync(requestParameters));
};
exports.deleteAccountAsync = deleteAccountAsync;
/**
 * This API submits a task to disable the account and returns the task ID.
 * @summary Disable Account
 * @param {AccountsV2025ApiDisableAccountRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const disableAccount = (requestParameters, apiConfig) => {
    const accountsv2025api = new sdk.AccountsV2025Api(apiConfig);
    return handleApiCall(() => accountsv2025api.disableAccount(requestParameters));
};
exports.disableAccount = disableAccount;
/**
 * This API submits a task to disable IDN account for a single identity.
 * @summary Disable IDN Account for Identity
 * @param {AccountsV2025ApiDisableAccountForIdentityRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const disableAccountForIdentity = (requestParameters, apiConfig) => {
    const accountsv2025api = new sdk.AccountsV2025Api(apiConfig);
    return handleApiCall(() => accountsv2025api.disableAccountForIdentity(requestParameters));
};
exports.disableAccountForIdentity = disableAccountForIdentity;
/**
 * This API submits tasks to disable IDN account for each identity provided in the request body.
 * @summary Disable IDN Accounts for Identities
 * @param {AccountsV2025ApiDisableAccountsForIdentitiesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const disableAccountsForIdentities = (requestParameters, apiConfig) => {
    const accountsv2025api = new sdk.AccountsV2025Api(apiConfig);
    return handleApiCall(() => accountsv2025api.disableAccountsForIdentities(requestParameters));
};
exports.disableAccountsForIdentities = disableAccountsForIdentities;
/**
 * This API submits a task to enable account and returns the task ID.
 * @summary Enable Account
 * @param {AccountsV2025ApiEnableAccountRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const enableAccount = (requestParameters, apiConfig) => {
    const accountsv2025api = new sdk.AccountsV2025Api(apiConfig);
    return handleApiCall(() => accountsv2025api.enableAccount(requestParameters));
};
exports.enableAccount = enableAccount;
/**
 * This API submits a task to enable IDN account for a single identity.
 * @summary Enable IDN Account for Identity
 * @param {AccountsV2025ApiEnableAccountForIdentityRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const enableAccountForIdentity = (requestParameters, apiConfig) => {
    const accountsv2025api = new sdk.AccountsV2025Api(apiConfig);
    return handleApiCall(() => accountsv2025api.enableAccountForIdentity(requestParameters));
};
exports.enableAccountForIdentity = enableAccountForIdentity;
/**
 * This API submits tasks to enable IDN account for each identity provided in the request body.
 * @summary Enable IDN Accounts for Identities
 * @param {AccountsV2025ApiEnableAccountsForIdentitiesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const enableAccountsForIdentities = (requestParameters, apiConfig) => {
    const accountsv2025api = new sdk.AccountsV2025Api(apiConfig);
    return handleApiCall(() => accountsv2025api.enableAccountsForIdentities(requestParameters));
};
exports.enableAccountsForIdentities = enableAccountsForIdentities;
/**
 * Use this API to return the details for a single account by its ID.
 * @summary Account Details
 * @param {AccountsV2025ApiGetAccountRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAccount = (requestParameters, apiConfig) => {
    const accountsv2025api = new sdk.AccountsV2025Api(apiConfig);
    return handleApiCall(() => accountsv2025api.getAccount(requestParameters));
};
exports.getAccount = getAccount;
/**
 * This API returns entitlements of the account.
 * @summary Account Entitlements
 * @param {AccountsV2025ApiGetAccountEntitlementsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAccountEntitlements = (requestParameters, apiConfig) => {
    const accountsv2025api = new sdk.AccountsV2025Api(apiConfig);
    return handleApiCall(() => accountsv2025api.getAccountEntitlements(requestParameters));
};
exports.getAccountEntitlements = getAccountEntitlements;
/**
 * List accounts.
 * @summary Accounts List
 * @param {AccountsV2025ApiListAccountsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listAccounts = (requestParameters = {}, apiConfig) => {
    const accountsv2025api = new sdk.AccountsV2025Api(apiConfig);
    return handleApiCall(() => accountsv2025api.listAccounts(requestParameters));
};
exports.listAccounts = listAccounts;
/**
 * Use this API to update an account with a PUT request.   This endpoint submits an account update task and returns the task ID.   >**Note: You can only use this PUT endpoint to update accounts from flat file sources.**
 * @summary Update Account
 * @param {AccountsV2025ApiPutAccountRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putAccount = (requestParameters, apiConfig) => {
    const accountsv2025api = new sdk.AccountsV2025Api(apiConfig);
    return handleApiCall(() => accountsv2025api.putAccount(requestParameters));
};
exports.putAccount = putAccount;
/**
 * This API asynchronously reloads the account directly from the connector and performs a one-time aggregation process.
 * @summary Reload Account
 * @param {AccountsV2025ApiSubmitReloadAccountRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const submitReloadAccount = (requestParameters, apiConfig) => {
    const accountsv2025api = new sdk.AccountsV2025Api(apiConfig);
    return handleApiCall(() => accountsv2025api.submitReloadAccount(requestParameters));
};
exports.submitReloadAccount = submitReloadAccount;
/**
 * This API submits a task to unlock an account and returns the task ID.   To use this endpoint to unlock an account that has the `forceProvisioning` option set to true, the `idn:accounts-provisioning:manage` scope is required.
 * @summary Unlock Account
 * @param {AccountsV2025ApiUnlockAccountRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const unlockAccount = (requestParameters, apiConfig) => {
    const accountsv2025api = new sdk.AccountsV2025Api(apiConfig);
    return handleApiCall(() => accountsv2025api.unlockAccount(requestParameters));
};
exports.unlockAccount = unlockAccount;
/**
 * Use this API to update account details.   This API supports updating an account\'s correlation by modifying the `identityId` and `manuallyCorrelated` fields.  To reassign an account from one identity to another, replace the current `identityId` with a new value.  If the account you\'re assigning was provisioned by Identity Security Cloud (ISC), it\'s possible for ISC to create a new account  for the previous identity as soon as the account is moved. If the account you\'re assigning is authoritative,  this causes the previous identity to become uncorrelated and can even result in its deletion. All accounts that are reassigned will be set to `manuallyCorrelated: true` unless you specify otherwise.  >**Note:** The `attributes` field can only be modified for flat file accounts.
 * @summary Update Account
 * @param {AccountsV2025ApiUpdateAccountRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateAccount = (requestParameters, apiConfig) => {
    const accountsv2025api = new sdk.AccountsV2025Api(apiConfig);
    return handleApiCall(() => accountsv2025api.updateAccount(requestParameters));
};
exports.updateAccount = updateAccount;
/**
 * Get a list of applications that have been identified within the environment. This includes details such as application names, discovery dates, potential correlated saas_vendors and related suggested connectors.
 * @summary Get Discovered Applications for Tenant
 * @param {ApplicationDiscoveryV2025ApiGetDiscoveredApplicationsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getDiscoveredApplications = (requestParameters = {}, apiConfig) => {
    const applicationdiscoveryv2025api = new sdk.ApplicationDiscoveryV2025Api(apiConfig);
    return handleApiCall(() => applicationdiscoveryv2025api.getDiscoveredApplications(requestParameters));
};
exports.getDiscoveredApplications = getDiscoveredApplications;
/**
 * Download an example CSV file with two columns `application_name` and `description`.  The CSV file contains a single row with the values \'Example Application\' and \'Example Description\'.  The downloaded template is specifically designed for use with the `/manual-discover-applications` endpoint.
 * @summary Download CSV Template for Discovery
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getManualDiscoverApplicationsCsvTemplate = (apiConfig) => {
    const applicationdiscoveryv2025api = new sdk.ApplicationDiscoveryV2025Api(apiConfig);
    return handleApiCall(() => applicationdiscoveryv2025api.getManualDiscoverApplicationsCsvTemplate());
};
exports.getManualDiscoverApplicationsCsvTemplate = getManualDiscoverApplicationsCsvTemplate;
/**
 * Uploading a CSV file with application data for manual correlation to specific ISC connectors.  If a suitable ISC connector is unavailable, the system will recommend generic connectors instead.
 * @summary Upload CSV to Discover Applications
 * @param {ApplicationDiscoveryV2025ApiSendManualDiscoverApplicationsCsvTemplateRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const sendManualDiscoverApplicationsCsvTemplate = (requestParameters, apiConfig) => {
    const applicationdiscoveryv2025api = new sdk.ApplicationDiscoveryV2025Api(apiConfig);
    return handleApiCall(() => applicationdiscoveryv2025api.sendManualDiscoverApplicationsCsvTemplate(requestParameters));
};
exports.sendManualDiscoverApplicationsCsvTemplate = sendManualDiscoverApplicationsCsvTemplate;
/**
 * Retrieve a single approval for a given approval ID. This endpoint is for generic approvals, different than the access-request-approval endpoint and does not include access-request-approvals.
 * @summary Get an approval
 * @param {ApprovalsV2025ApiGetApprovalRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getApproval = (requestParameters, apiConfig) => {
    const approvalsv2025api = new sdk.ApprovalsV2025Api(apiConfig);
    return handleApiCall(() => approvalsv2025api.getApproval(requestParameters));
};
exports.getApproval = getApproval;
/**
 * Retrieve a list of approvals, which can be filtered by requester ID, status, or reference type. \"Mine\" query parameter can be used and it will return all approvals for the current approver. This endpoint is for generic approvals, different than the access-request-approval endpoint and does not include access-request-approvals.  Absence of all query parameters will will default to mine=true.
 * @summary Get Approvals
 * @param {ApprovalsV2025ApiGetApprovalsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getApprovals = (requestParameters = {}, apiConfig) => {
    const approvalsv2025api = new sdk.ApprovalsV2025Api(apiConfig);
    return handleApiCall(() => approvalsv2025api.getApprovals(requestParameters));
};
exports.getApprovals = getApprovals;
/**
 * This endpoint creates a source app using the given source app payload
 * @summary Create source app
 * @param {AppsV2025ApiCreateSourceAppRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createSourceApp = (requestParameters, apiConfig) => {
    const appsv2025api = new sdk.AppsV2025Api(apiConfig);
    return handleApiCall(() => appsv2025api.createSourceApp(requestParameters));
};
exports.createSourceApp = createSourceApp;
/**
 * This API returns the final list of access profiles for the specified source app after removing
 * @summary Bulk remove access profiles from the specified source app
 * @param {AppsV2025ApiDeleteAccessProfilesFromSourceAppByBulkRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteAccessProfilesFromSourceAppByBulk = (requestParameters, apiConfig) => {
    const appsv2025api = new sdk.AppsV2025Api(apiConfig);
    return handleApiCall(() => appsv2025api.deleteAccessProfilesFromSourceAppByBulk(requestParameters));
};
exports.deleteAccessProfilesFromSourceAppByBulk = deleteAccessProfilesFromSourceAppByBulk;
/**
 * Use this API to delete a specific source app
 * @summary Delete source app by ID
 * @param {AppsV2025ApiDeleteSourceAppRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteSourceApp = (requestParameters, apiConfig) => {
    const appsv2025api = new sdk.AppsV2025Api(apiConfig);
    return handleApiCall(() => appsv2025api.deleteSourceApp(requestParameters));
};
exports.deleteSourceApp = deleteSourceApp;
/**
 * This API returns a source app by its ID.
 * @summary Get source app by ID
 * @param {AppsV2025ApiGetSourceAppRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSourceApp = (requestParameters, apiConfig) => {
    const appsv2025api = new sdk.AppsV2025Api(apiConfig);
    return handleApiCall(() => appsv2025api.getSourceApp(requestParameters));
};
exports.getSourceApp = getSourceApp;
/**
 * This API returns the list of access profiles for the specified source app
 * @summary List access profiles for the specified source app
 * @param {AppsV2025ApiListAccessProfilesForSourceAppRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listAccessProfilesForSourceApp = (requestParameters, apiConfig) => {
    const appsv2025api = new sdk.AppsV2025Api(apiConfig);
    return handleApiCall(() => appsv2025api.listAccessProfilesForSourceApp(requestParameters));
};
exports.listAccessProfilesForSourceApp = listAccessProfilesForSourceApp;
/**
 * This API returns the list of all source apps for the org.
 * @summary List all source apps
 * @param {AppsV2025ApiListAllSourceAppRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listAllSourceApp = (requestParameters = {}, apiConfig) => {
    const appsv2025api = new sdk.AppsV2025Api(apiConfig);
    return handleApiCall(() => appsv2025api.listAllSourceApp(requestParameters));
};
exports.listAllSourceApp = listAllSourceApp;
/**
 * This API returns the list of all user apps with specified filters. This API must be used with **filters** query parameter.
 * @summary List all user apps
 * @param {AppsV2025ApiListAllUserAppsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listAllUserApps = (requestParameters, apiConfig) => {
    const appsv2025api = new sdk.AppsV2025Api(apiConfig);
    return handleApiCall(() => appsv2025api.listAllUserApps(requestParameters));
};
exports.listAllUserApps = listAllUserApps;
/**
 * This API returns the list of source apps assigned for logged in user.
 * @summary List assigned source apps
 * @param {AppsV2025ApiListAssignedSourceAppRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listAssignedSourceApp = (requestParameters = {}, apiConfig) => {
    const appsv2025api = new sdk.AppsV2025Api(apiConfig);
    return handleApiCall(() => appsv2025api.listAssignedSourceApp(requestParameters));
};
exports.listAssignedSourceApp = listAssignedSourceApp;
/**
 * This API returns the list of available accounts for the specified user app. The user app needs to belong lo logged in user.
 * @summary List available accounts for user app
 * @param {AppsV2025ApiListAvailableAccountsForUserAppRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listAvailableAccountsForUserApp = (requestParameters, apiConfig) => {
    const appsv2025api = new sdk.AppsV2025Api(apiConfig);
    return handleApiCall(() => appsv2025api.listAvailableAccountsForUserApp(requestParameters));
};
exports.listAvailableAccountsForUserApp = listAvailableAccountsForUserApp;
/**
 * This API returns the list of source apps available for access request.
 * @summary List available source apps
 * @param {AppsV2025ApiListAvailableSourceAppsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listAvailableSourceApps = (requestParameters = {}, apiConfig) => {
    const appsv2025api = new sdk.AppsV2025Api(apiConfig);
    return handleApiCall(() => appsv2025api.listAvailableSourceApps(requestParameters));
};
exports.listAvailableSourceApps = listAvailableSourceApps;
/**
 * This API returns the list of user apps assigned to logged in user
 * @summary List owned user apps
 * @param {AppsV2025ApiListOwnedUserAppsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listOwnedUserApps = (requestParameters = {}, apiConfig) => {
    const appsv2025api = new sdk.AppsV2025Api(apiConfig);
    return handleApiCall(() => appsv2025api.listOwnedUserApps(requestParameters));
};
exports.listOwnedUserApps = listOwnedUserApps;
/**
 * This API updates an existing source app using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax. The following fields are patchable: **name**, **description**, **enabled**, **owner**, **provisionRequestEnabled**, **appCenterEnabled**, **accountSource**,  **matchAllAccounts** and **accessProfiles**. Name, description and owner can\'t be empty or null.
 * @summary Patch source app by ID
 * @param {AppsV2025ApiPatchSourceAppRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchSourceApp = (requestParameters, apiConfig) => {
    const appsv2025api = new sdk.AppsV2025Api(apiConfig);
    return handleApiCall(() => appsv2025api.patchSourceApp(requestParameters));
};
exports.patchSourceApp = patchSourceApp;
/**
 * This API updates an existing user app using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax. The following fields are patchable: **account**
 * @summary Patch user app by ID
 * @param {AppsV2025ApiPatchUserAppRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchUserApp = (requestParameters, apiConfig) => {
    const appsv2025api = new sdk.AppsV2025Api(apiConfig);
    return handleApiCall(() => appsv2025api.patchUserApp(requestParameters));
};
exports.patchUserApp = patchUserApp;
/**
 * This API updates source apps using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.  It can update up to 50 source apps in a batch. The following fields can be updated: **name**, **description**, **enabled**, **owner**, **provisionRequestEnabled**, **appCenterEnabled**, **accountSource**,  **matchAllAccounts**, and **accessProfiles**. Name, description and owner can\'t be empty or null.
 * @summary Bulk update source apps
 * @param {AppsV2025ApiUpdateSourceAppsInBulkRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateSourceAppsInBulk = (requestParameters = {}, apiConfig) => {
    const appsv2025api = new sdk.AppsV2025Api(apiConfig);
    return handleApiCall(() => appsv2025api.updateSourceAppsInBulk(requestParameters));
};
exports.updateSourceAppsInBulk = updateSourceAppsInBulk;
/**
 * This API returns auth profile information.
 * @summary Get Auth Profile
 * @param {AuthProfileV2025ApiGetProfileConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getProfileConfig = (requestParameters, apiConfig) => {
    const authprofilev2025api = new sdk.AuthProfileV2025Api(apiConfig);
    return handleApiCall(() => authprofilev2025api.getProfileConfig(requestParameters));
};
exports.getProfileConfig = getProfileConfig;
/**
 * This API returns a list of auth profiles.
 * @summary Get list of Auth Profiles
 * @param {AuthProfileV2025ApiGetProfileConfigListRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getProfileConfigList = (requestParameters = {}, apiConfig) => {
    const authprofilev2025api = new sdk.AuthProfileV2025Api(apiConfig);
    return handleApiCall(() => authprofilev2025api.getProfileConfigList(requestParameters));
};
exports.getProfileConfigList = getProfileConfigList;
/**
 * This API updates an existing Auth Profile. The following fields are patchable: **offNetwork**, **untrustedGeography**, **applicationId**, **applicationName**, **type**
 * @summary Patch a specified Auth Profile
 * @param {AuthProfileV2025ApiPatchProfileConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchProfileConfig = (requestParameters, apiConfig) => {
    const authprofilev2025api = new sdk.AuthProfileV2025Api(apiConfig);
    return handleApiCall(() => authprofilev2025api.patchProfileConfig(requestParameters));
};
exports.patchProfileConfig = patchProfileConfig;
/**
 * Return the specified user\'s authentication system details.
 * @summary Auth User Details
 * @param {AuthUsersV2025ApiGetAuthUserRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAuthUser = (requestParameters, apiConfig) => {
    const authusersv2025api = new sdk.AuthUsersV2025Api(apiConfig);
    return handleApiCall(() => authusersv2025api.getAuthUser(requestParameters));
};
exports.getAuthUser = getAuthUser;
/**
 * Use a PATCH request to update an existing user in the authentication system. Use this endpoint to modify these fields:    * `capabilities`  A \'400.1.1 Illegal update attempt\' detail code indicates that you attempted to PATCH a field that is not allowed.
 * @summary Auth User Update
 * @param {AuthUsersV2025ApiPatchAuthUserRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchAuthUser = (requestParameters, apiConfig) => {
    const authusersv2025api = new sdk.AuthUsersV2025Api(apiConfig);
    return handleApiCall(() => authusersv2025api.patchAuthUser(requestParameters));
};
exports.patchAuthUser = patchAuthUser;
/**
 * This API endpoint creates a branding item.
 * @summary Create a branding item
 * @param {BrandingV2025ApiCreateBrandingItemRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createBrandingItem = (requestParameters, apiConfig) => {
    const brandingv2025api = new sdk.BrandingV2025Api(apiConfig);
    return handleApiCall(() => brandingv2025api.createBrandingItem(requestParameters));
};
exports.createBrandingItem = createBrandingItem;
/**
 * This API endpoint delete information for an existing branding item by name.
 * @summary Delete a branding item
 * @param {BrandingV2025ApiDeleteBrandingRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteBranding = (requestParameters, apiConfig) => {
    const brandingv2025api = new sdk.BrandingV2025Api(apiConfig);
    return handleApiCall(() => brandingv2025api.deleteBranding(requestParameters));
};
exports.deleteBranding = deleteBranding;
/**
 * This API endpoint retrieves information for an existing branding item by name.
 * @summary Get a branding item
 * @param {BrandingV2025ApiGetBrandingRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getBranding = (requestParameters, apiConfig) => {
    const brandingv2025api = new sdk.BrandingV2025Api(apiConfig);
    return handleApiCall(() => brandingv2025api.getBranding(requestParameters));
};
exports.getBranding = getBranding;
/**
 * This API endpoint returns a list of branding items.
 * @summary List of branding items
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getBrandingList = (apiConfig) => {
    const brandingv2025api = new sdk.BrandingV2025Api(apiConfig);
    return handleApiCall(() => brandingv2025api.getBrandingList());
};
exports.getBrandingList = getBrandingList;
/**
 * This API endpoint updates information for an existing branding item.
 * @summary Update a branding item
 * @param {BrandingV2025ApiSetBrandingItemRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const setBrandingItem = (requestParameters, apiConfig) => {
    const brandingv2025api = new sdk.BrandingV2025Api(apiConfig);
    return handleApiCall(() => brandingv2025api.setBrandingItem(requestParameters));
};
exports.setBrandingItem = setBrandingItem;
/**
 * Use this API to create a campaign filter based on filter details and criteria.
 * @summary Create Campaign Filter
 * @param {CertificationCampaignFiltersV2025ApiCreateCampaignFilterRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createCampaignFilter = (requestParameters, apiConfig) => {
    const certificationcampaignfiltersv2025api = new sdk.CertificationCampaignFiltersV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignfiltersv2025api.createCampaignFilter(requestParameters));
};
exports.createCampaignFilter = createCampaignFilter;
/**
 * Deletes campaign filters whose Ids are specified in the provided list of campaign filter Ids. Authorized callers must be an ORG_ADMIN or a CERT_ADMIN.
 * @summary Deletes Campaign Filters
 * @param {CertificationCampaignFiltersV2025ApiDeleteCampaignFiltersRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteCampaignFilters = (requestParameters, apiConfig) => {
    const certificationcampaignfiltersv2025api = new sdk.CertificationCampaignFiltersV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignfiltersv2025api.deleteCampaignFilters(requestParameters));
};
exports.deleteCampaignFilters = deleteCampaignFilters;
/**
 * Retrieves information for an existing campaign filter using the filter\'s ID.
 * @summary Get Campaign Filter by ID
 * @param {CertificationCampaignFiltersV2025ApiGetCampaignFilterByIdRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getCampaignFilterById = (requestParameters, apiConfig) => {
    const certificationcampaignfiltersv2025api = new sdk.CertificationCampaignFiltersV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignfiltersv2025api.getCampaignFilterById(requestParameters));
};
exports.getCampaignFilterById = getCampaignFilterById;
/**
 * Use this API to list all campaign filters. You can reduce scope with standard V3 query parameters.
 * @summary List Campaign Filters
 * @param {CertificationCampaignFiltersV2025ApiListCampaignFiltersRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listCampaignFilters = (requestParameters = {}, apiConfig) => {
    const certificationcampaignfiltersv2025api = new sdk.CertificationCampaignFiltersV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignfiltersv2025api.listCampaignFilters(requestParameters));
};
exports.listCampaignFilters = listCampaignFilters;
/**
 * Updates an existing campaign filter using the filter\'s ID.
 * @summary Updates a Campaign Filter
 * @param {CertificationCampaignFiltersV2025ApiUpdateCampaignFilterRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateCampaignFilter = (requestParameters, apiConfig) => {
    const certificationcampaignfiltersv2025api = new sdk.CertificationCampaignFiltersV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignfiltersv2025api.updateCampaignFilter(requestParameters));
};
exports.updateCampaignFilter = updateCampaignFilter;
/**
 * :::caution  This endpoint will run successfully for any campaigns that are **past due**.  This endpoint will return a content error if the campaign is **not past due**.  :::  Use this API to complete a certification campaign. This functionality is provided to admins so that they can complete a certification even if all items have not been completed.
 * @summary Complete a Campaign
 * @param {CertificationCampaignsV2025ApiCompleteCampaignRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const completeCampaign = (requestParameters, apiConfig) => {
    const certificationcampaignsv2025api = new sdk.CertificationCampaignsV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignsv2025api.completeCampaign(requestParameters));
};
exports.completeCampaign = completeCampaign;
/**
 * Use this API to create a certification campaign with the information provided in the request body.
 * @summary Create a campaign
 * @param {CertificationCampaignsV2025ApiCreateCampaignRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createCampaign = (requestParameters, apiConfig) => {
    const certificationcampaignsv2025api = new sdk.CertificationCampaignsV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignsv2025api.createCampaign(requestParameters));
};
exports.createCampaign = createCampaign;
/**
 * Use this API to create a certification campaign template based on campaign.
 * @summary Create a Campaign Template
 * @param {CertificationCampaignsV2025ApiCreateCampaignTemplateRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createCampaignTemplate = (requestParameters, apiConfig) => {
    const certificationcampaignsv2025api = new sdk.CertificationCampaignsV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignsv2025api.createCampaignTemplate(requestParameters));
};
exports.createCampaignTemplate = createCampaignTemplate;
/**
 * Use this API to delete a certification campaign template by ID.
 * @summary Delete a Campaign Template
 * @param {CertificationCampaignsV2025ApiDeleteCampaignTemplateRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteCampaignTemplate = (requestParameters, apiConfig) => {
    const certificationcampaignsv2025api = new sdk.CertificationCampaignsV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignsv2025api.deleteCampaignTemplate(requestParameters));
};
exports.deleteCampaignTemplate = deleteCampaignTemplate;
/**
 * Use this API to delete the schedule for a certification campaign template. The API returns a 404 if there is no schedule set.
 * @summary Delete Campaign Template Schedule
 * @param {CertificationCampaignsV2025ApiDeleteCampaignTemplateScheduleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteCampaignTemplateSchedule = (requestParameters, apiConfig) => {
    const certificationcampaignsv2025api = new sdk.CertificationCampaignsV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignsv2025api.deleteCampaignTemplateSchedule(requestParameters));
};
exports.deleteCampaignTemplateSchedule = deleteCampaignTemplateSchedule;
/**
 * Use this API to delete certification campaigns whose IDs are specified in the provided list of campaign IDs.
 * @summary Delete Campaigns
 * @param {CertificationCampaignsV2025ApiDeleteCampaignsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteCampaigns = (requestParameters, apiConfig) => {
    const certificationcampaignsv2025api = new sdk.CertificationCampaignsV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignsv2025api.deleteCampaigns(requestParameters));
};
exports.deleteCampaigns = deleteCampaigns;
/**
 * Use this API to get a list of campaigns. This API can provide increased level of detail for each campaign for the correct provided query.
 * @summary List Campaigns
 * @param {CertificationCampaignsV2025ApiGetActiveCampaignsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getActiveCampaigns = (requestParameters = {}, apiConfig) => {
    const certificationcampaignsv2025api = new sdk.CertificationCampaignsV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignsv2025api.getActiveCampaigns(requestParameters));
};
exports.getActiveCampaigns = getActiveCampaigns;
/**
 * Use this API to get information for an existing certification campaign by the campaign\'s ID.
 * @summary Get Campaign
 * @param {CertificationCampaignsV2025ApiGetCampaignRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getCampaign = (requestParameters, apiConfig) => {
    const certificationcampaignsv2025api = new sdk.CertificationCampaignsV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignsv2025api.getCampaign(requestParameters));
};
exports.getCampaign = getCampaign;
/**
 * Use this API to fetch all reports for a certification campaign by campaign ID.
 * @summary Get Campaign Reports
 * @param {CertificationCampaignsV2025ApiGetCampaignReportsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getCampaignReports = (requestParameters, apiConfig) => {
    const certificationcampaignsv2025api = new sdk.CertificationCampaignsV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignsv2025api.getCampaignReports(requestParameters));
};
exports.getCampaignReports = getCampaignReports;
/**
 * Use this API to fetch the configuration for certification campaign reports. The configuration includes only one element - identity attributes defined as custom report columns.
 * @summary Get Campaign Reports Configuration
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getCampaignReportsConfig = (apiConfig) => {
    const certificationcampaignsv2025api = new sdk.CertificationCampaignsV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignsv2025api.getCampaignReportsConfig());
};
exports.getCampaignReportsConfig = getCampaignReportsConfig;
/**
 * Use this API to fetch a certification campaign template by ID.
 * @summary Get a Campaign Template
 * @param {CertificationCampaignsV2025ApiGetCampaignTemplateRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getCampaignTemplate = (requestParameters, apiConfig) => {
    const certificationcampaignsv2025api = new sdk.CertificationCampaignsV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignsv2025api.getCampaignTemplate(requestParameters));
};
exports.getCampaignTemplate = getCampaignTemplate;
/**
 * Use this API to get the schedule for a certification campaign template. The API returns a 404 if there is no schedule set.
 * @summary Get Campaign Template Schedule
 * @param {CertificationCampaignsV2025ApiGetCampaignTemplateScheduleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getCampaignTemplateSchedule = (requestParameters, apiConfig) => {
    const certificationcampaignsv2025api = new sdk.CertificationCampaignsV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignsv2025api.getCampaignTemplateSchedule(requestParameters));
};
exports.getCampaignTemplateSchedule = getCampaignTemplateSchedule;
/**
 * Use this API to get a list of all campaign templates. Scope can be reduced through standard V3 query params.  The API returns all campaign templates matching the query parameters.
 * @summary List Campaign Templates
 * @param {CertificationCampaignsV2025ApiGetCampaignTemplatesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getCampaignTemplates = (requestParameters = {}, apiConfig) => {
    const certificationcampaignsv2025api = new sdk.CertificationCampaignsV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignsv2025api.getCampaignTemplates(requestParameters));
};
exports.getCampaignTemplates = getCampaignTemplates;
/**
 * This API reassigns the specified certifications from one identity to another.
 * @summary Reassign Certifications
 * @param {CertificationCampaignsV2025ApiMoveRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const move = (requestParameters, apiConfig) => {
    const certificationcampaignsv2025api = new sdk.CertificationCampaignsV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignsv2025api.move(requestParameters));
};
exports.move = move;
/**
 * Use this API to update individual fields on a certification campaign template, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 * @summary Update a Campaign Template
 * @param {CertificationCampaignsV2025ApiPatchCampaignTemplateRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchCampaignTemplate = (requestParameters, apiConfig) => {
    const certificationcampaignsv2025api = new sdk.CertificationCampaignsV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignsv2025api.patchCampaignTemplate(requestParameters));
};
exports.patchCampaignTemplate = patchCampaignTemplate;
/**
 * Use this API to overwrite the configuration for campaign reports.
 * @summary Set Campaign Reports Configuration
 * @param {CertificationCampaignsV2025ApiSetCampaignReportsConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const setCampaignReportsConfig = (requestParameters, apiConfig) => {
    const certificationcampaignsv2025api = new sdk.CertificationCampaignsV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignsv2025api.setCampaignReportsConfig(requestParameters));
};
exports.setCampaignReportsConfig = setCampaignReportsConfig;
/**
 * Use this API to set the schedule for a certification campaign template. If a schedule already exists, the API overwrites it with the new one.
 * @summary Set Campaign Template Schedule
 * @param {CertificationCampaignsV2025ApiSetCampaignTemplateScheduleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const setCampaignTemplateSchedule = (requestParameters, apiConfig) => {
    const certificationcampaignsv2025api = new sdk.CertificationCampaignsV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignsv2025api.setCampaignTemplateSchedule(requestParameters));
};
exports.setCampaignTemplateSchedule = setCampaignTemplateSchedule;
/**
 * Use this API to submit a job to activate the certified campaign with the specified ID. The campaign must be staged.
 * @summary Activate a Campaign
 * @param {CertificationCampaignsV2025ApiStartCampaignRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const startCampaign = (requestParameters, apiConfig) => {
    const certificationcampaignsv2025api = new sdk.CertificationCampaignsV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignsv2025api.startCampaign(requestParameters));
};
exports.startCampaign = startCampaign;
/**
 * Use this API to run a remediation scan task for a certification campaign.
 * @summary Run Campaign Remediation Scan
 * @param {CertificationCampaignsV2025ApiStartCampaignRemediationScanRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const startCampaignRemediationScan = (requestParameters, apiConfig) => {
    const certificationcampaignsv2025api = new sdk.CertificationCampaignsV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignsv2025api.startCampaignRemediationScan(requestParameters));
};
exports.startCampaignRemediationScan = startCampaignRemediationScan;
/**
 * Use this API to run a report for a certification campaign.
 * @summary Run Campaign Report
 * @param {CertificationCampaignsV2025ApiStartCampaignReportRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const startCampaignReport = (requestParameters, apiConfig) => {
    const certificationcampaignsv2025api = new sdk.CertificationCampaignsV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignsv2025api.startCampaignReport(requestParameters));
};
exports.startCampaignReport = startCampaignReport;
/**
 * Use this API to generate a new certification campaign from a campaign template.  The campaign object contained in the template has special formatting applied to its name and description fields that determine the generated campaign\'s name/description. Placeholders in those fields are formatted with the current date and time upon generation.  Placeholders consist of a percent sign followed by a letter indicating what should be inserted. For example, \"%Y\" inserts the current year, and a campaign template named \"Campaign for %y\" generates a campaign called \"Campaign for 2020\" (assuming the year at generation time is 2020).  Valid placeholders are the date/time conversion suffix characters supported by [java.util.Formatter](https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html).
 * @summary Generate a Campaign from Template
 * @param {CertificationCampaignsV2025ApiStartGenerateCampaignTemplateRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const startGenerateCampaignTemplate = (requestParameters, apiConfig) => {
    const certificationcampaignsv2025api = new sdk.CertificationCampaignsV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignsv2025api.startGenerateCampaignTemplate(requestParameters));
};
exports.startGenerateCampaignTemplate = startGenerateCampaignTemplate;
/**
 * Use this API to update individual fields on a certification campaign, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 * @summary Update a Campaign
 * @param {CertificationCampaignsV2025ApiUpdateCampaignRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateCampaign = (requestParameters, apiConfig) => {
    const certificationcampaignsv2025api = new sdk.CertificationCampaignsV2025Api(apiConfig);
    return handleApiCall(() => certificationcampaignsv2025api.updateCampaign(requestParameters));
};
exports.updateCampaign = updateCampaign;
/**
 * This API returns a list of access summaries for the specified identity campaign certification and type. Reviewers for this certification can also call this API.
 * @summary Access Summaries
 * @param {CertificationSummariesV2025ApiGetIdentityAccessSummariesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getIdentityAccessSummaries = (requestParameters, apiConfig) => {
    const certificationsummariesv2025api = new sdk.CertificationSummariesV2025Api(apiConfig);
    return handleApiCall(() => certificationsummariesv2025api.getIdentityAccessSummaries(requestParameters));
};
exports.getIdentityAccessSummaries = getIdentityAccessSummaries;
/**
 * This API returns a summary of the decisions made on an identity campaign certification. The decisions are summarized by type. Reviewers for this certification can also call this API.
 * @summary Summary of Certification Decisions
 * @param {CertificationSummariesV2025ApiGetIdentityDecisionSummaryRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getIdentityDecisionSummary = (requestParameters, apiConfig) => {
    const certificationsummariesv2025api = new sdk.CertificationSummariesV2025Api(apiConfig);
    return handleApiCall(() => certificationsummariesv2025api.getIdentityDecisionSummary(requestParameters));
};
exports.getIdentityDecisionSummary = getIdentityDecisionSummary;
/**
 * This API returns a list of the identity summaries for a specific identity campaign certification. Reviewers for this certification can also call this API.
 * @summary Identity Summaries for Campaign Certification
 * @param {CertificationSummariesV2025ApiGetIdentitySummariesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getIdentitySummaries = (requestParameters, apiConfig) => {
    const certificationsummariesv2025api = new sdk.CertificationSummariesV2025Api(apiConfig);
    return handleApiCall(() => certificationsummariesv2025api.getIdentitySummaries(requestParameters));
};
exports.getIdentitySummaries = getIdentitySummaries;
/**
 * This API returns the summary for an identity on a specified identity campaign certification. Reviewers for this certification can also call this API.
 * @summary Summary for Identity
 * @param {CertificationSummariesV2025ApiGetIdentitySummaryRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getIdentitySummary = (requestParameters, apiConfig) => {
    const certificationsummariesv2025api = new sdk.CertificationSummariesV2025Api(apiConfig);
    return handleApiCall(() => certificationsummariesv2025api.getIdentitySummary(requestParameters));
};
exports.getIdentitySummary = getIdentitySummary;
/**
 * This API returns the certification task for the specified ID. Reviewers for the specified certification can also call this API.
 * @summary Certification Task by ID
 * @param {CertificationsV2025ApiGetCertificationTaskRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getCertificationTask = (requestParameters, apiConfig) => {
    const certificationsv2025api = new sdk.CertificationsV2025Api(apiConfig);
    return handleApiCall(() => certificationsv2025api.getCertificationTask(requestParameters));
};
exports.getCertificationTask = getCertificationTask;
/**
 * This API returns a single identity campaign certification by its ID. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.
 * @summary Identity Certification by ID
 * @param {CertificationsV2025ApiGetIdentityCertificationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getIdentityCertification = (requestParameters, apiConfig) => {
    const certificationsv2025api = new sdk.CertificationsV2025Api(apiConfig);
    return handleApiCall(() => certificationsv2025api.getIdentityCertification(requestParameters));
};
exports.getIdentityCertification = getIdentityCertification;
/**
 * This API returns the permissions associated with an entitlement certification item based on the certification item\'s ID. Reviewers for this certification can also call this API.
 * @summary Permissions for Entitlement Certification Item
 * @param {CertificationsV2025ApiGetIdentityCertificationItemPermissionsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getIdentityCertificationItemPermissions = (requestParameters, apiConfig) => {
    const certificationsv2025api = new sdk.CertificationsV2025Api(apiConfig);
    return handleApiCall(() => certificationsv2025api.getIdentityCertificationItemPermissions(requestParameters));
};
exports.getIdentityCertificationItemPermissions = getIdentityCertificationItemPermissions;
/**
 * This API returns a list of pending (`QUEUED` or `IN_PROGRESS`) certification tasks. Any authenticated token can call this API, but only certification tasks you are authorized to review will be returned.
 * @summary List of Pending Certification Tasks
 * @param {CertificationsV2025ApiGetPendingCertificationTasksRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getPendingCertificationTasks = (requestParameters = {}, apiConfig) => {
    const certificationsv2025api = new sdk.CertificationsV2025Api(apiConfig);
    return handleApiCall(() => certificationsv2025api.getPendingCertificationTasks(requestParameters));
};
exports.getPendingCertificationTasks = getPendingCertificationTasks;
/**
 * This API returns a list of reviewers for the certification. Reviewers for this certification can also call this API.
 * @summary List of Reviewers for certification
 * @param {CertificationsV2025ApiListCertificationReviewersRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listCertificationReviewers = (requestParameters, apiConfig) => {
    const certificationsv2025api = new sdk.CertificationsV2025Api(apiConfig);
    return handleApiCall(() => certificationsv2025api.listCertificationReviewers(requestParameters));
};
exports.listCertificationReviewers = listCertificationReviewers;
/**
 * This API returns a list of access review items for an identity campaign certification. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.
 * @summary List of Access Review Items
 * @param {CertificationsV2025ApiListIdentityAccessReviewItemsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listIdentityAccessReviewItems = (requestParameters, apiConfig) => {
    const certificationsv2025api = new sdk.CertificationsV2025Api(apiConfig);
    return handleApiCall(() => certificationsv2025api.listIdentityAccessReviewItems(requestParameters));
};
exports.listIdentityAccessReviewItems = listIdentityAccessReviewItems;
/**
 * Use this API to get a list of identity campaign certifications for the specified query parameters. Any authenticated token can call this API, but only certifications you are authorized to review will be returned. This API does not support requests for certifications assigned to governance groups.
 * @summary List Identity Campaign Certifications
 * @param {CertificationsV2025ApiListIdentityCertificationsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listIdentityCertifications = (requestParameters = {}, apiConfig) => {
    const certificationsv2025api = new sdk.CertificationsV2025Api(apiConfig);
    return handleApiCall(() => certificationsv2025api.listIdentityCertifications(requestParameters));
};
exports.listIdentityCertifications = listIdentityCertifications;
/**
 * The API makes a decision to approve or revoke one or more identity campaign certification items. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.
 * @summary Decide on a Certification Item
 * @param {CertificationsV2025ApiMakeIdentityDecisionRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const makeIdentityDecision = (requestParameters, apiConfig) => {
    const certificationsv2025api = new sdk.CertificationsV2025Api(apiConfig);
    return handleApiCall(() => certificationsv2025api.makeIdentityDecision(requestParameters));
};
exports.makeIdentityDecision = makeIdentityDecision;
/**
 * This API reassigns up to 50 identities or items in an identity campaign certification to another reviewer. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.
 * @summary Reassign Identities or Items
 * @param {CertificationsV2025ApiReassignIdentityCertificationsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const reassignIdentityCertifications = (requestParameters, apiConfig) => {
    const certificationsv2025api = new sdk.CertificationsV2025Api(apiConfig);
    return handleApiCall(() => certificationsv2025api.reassignIdentityCertifications(requestParameters));
};
exports.reassignIdentityCertifications = reassignIdentityCertifications;
/**
 * This API finalizes all decisions made on an identity campaign certification and initiates any remediations required. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.
 * @summary Finalize Identity Certification Decisions
 * @param {CertificationsV2025ApiSignOffIdentityCertificationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const signOffIdentityCertification = (requestParameters, apiConfig) => {
    const certificationsv2025api = new sdk.CertificationsV2025Api(apiConfig);
    return handleApiCall(() => certificationsv2025api.signOffIdentityCertification(requestParameters));
};
exports.signOffIdentityCertification = signOffIdentityCertification;
/**
 * This API initiates a task to reassign up to 500 identities or items in an identity campaign certification to another reviewer. The `certification-tasks` API can be used to get an updated status on the task and determine when the reassignment is complete.   Reviewers for this certification can also call this API.
 * @summary Reassign Certifications Asynchronously
 * @param {CertificationsV2025ApiSubmitReassignCertsAsyncRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const submitReassignCertsAsync = (requestParameters, apiConfig) => {
    const certificationsv2025api = new sdk.CertificationsV2025Api(apiConfig);
    return handleApiCall(() => certificationsv2025api.submitReassignCertsAsync(requestParameters));
};
exports.submitReassignCertsAsync = submitReassignCertsAsync;
/**
 * This API performs a deploy based on an existing daft.
 * @summary Create a Deploy
 * @param {ConfigurationHubV2025ApiCreateDeployRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createDeploy = (requestParameters, apiConfig) => {
    const configurationhubv2025api = new sdk.ConfigurationHubV2025Api(apiConfig);
    return handleApiCall(() => configurationhubv2025api.createDeploy(requestParameters));
};
exports.createDeploy = createDeploy;
/**
 * This creates an object mapping between current org and source org. Source org should be \"default\" when creating an object mapping that is not to be associated to any particular org. The request will need the following security scope: - sp:config-object-mapping:manage
 * @summary Creates an object mapping
 * @param {ConfigurationHubV2025ApiCreateObjectMappingRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createObjectMapping = (requestParameters, apiConfig) => {
    const configurationhubv2025api = new sdk.ConfigurationHubV2025Api(apiConfig);
    return handleApiCall(() => configurationhubv2025api.createObjectMapping(requestParameters));
};
exports.createObjectMapping = createObjectMapping;
/**
 * This creates a set of object mappings (Max 25) between current org and source org. Source org should be \"default\" when creating object mappings that are not to be associated to any particular org. The request will need the following security scope: - sp:config-object-mapping:manage
 * @summary Bulk creates object mappings
 * @param {ConfigurationHubV2025ApiCreateObjectMappingsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createObjectMappings = (requestParameters, apiConfig) => {
    const configurationhubv2025api = new sdk.ConfigurationHubV2025Api(apiConfig);
    return handleApiCall(() => configurationhubv2025api.createObjectMappings(requestParameters));
};
exports.createObjectMappings = createObjectMappings;
/**
 * This API creates a new scheduled action for the current tenant.
 * @summary Create Scheduled Action
 * @param {ConfigurationHubV2025ApiCreateScheduledActionRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createScheduledAction = (requestParameters, apiConfig) => {
    const configurationhubv2025api = new sdk.ConfigurationHubV2025Api(apiConfig);
    return handleApiCall(() => configurationhubv2025api.createScheduledAction(requestParameters));
};
exports.createScheduledAction = createScheduledAction;
/**
 * This API uploads a JSON configuration file into a tenant.  Configuration files can be managed and deployed via Configuration Hub by uploading a json file which contains configuration data. The JSON file should be the same as the one used by our import endpoints. The object types supported by upload configuration file functionality are the same as the ones supported by our regular backup functionality.  Refer to [SaaS Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects) for more information about supported objects.
 * @summary Upload a Configuration
 * @param {ConfigurationHubV2025ApiCreateUploadedConfigurationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createUploadedConfiguration = (requestParameters, apiConfig) => {
    const configurationhubv2025api = new sdk.ConfigurationHubV2025Api(apiConfig);
    return handleApiCall(() => configurationhubv2025api.createUploadedConfiguration(requestParameters));
};
exports.createUploadedConfiguration = createUploadedConfiguration;
/**
 * This API deletes an existing backup for the current tenant.  On success, this endpoint will return an empty response.  The backup id can be obtained from the response after a backup was successfully created, or from the list backups endpoint.
 * @summary Delete a Backup
 * @param {ConfigurationHubV2025ApiDeleteBackupRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteBackup = (requestParameters, apiConfig) => {
    const configurationhubv2025api = new sdk.ConfigurationHubV2025Api(apiConfig);
    return handleApiCall(() => configurationhubv2025api.deleteBackup(requestParameters));
};
exports.deleteBackup = deleteBackup;
/**
 * This API deletes an existing draft for the current tenant.  On success, this endpoint will return an empty response.  The draft id can be obtained from the response after a draft was successfully created, or from the list drafts endpoint.
 * @summary Delete a draft
 * @param {ConfigurationHubV2025ApiDeleteDraftRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteDraft = (requestParameters, apiConfig) => {
    const configurationhubv2025api = new sdk.ConfigurationHubV2025Api(apiConfig);
    return handleApiCall(() => configurationhubv2025api.deleteDraft(requestParameters));
};
exports.deleteDraft = deleteDraft;
/**
 * This deletes an existing object mapping. Source org should be \"default\" when deleting an object mapping that is not associated to any particular org. The request will need the following security scope: - sp:config-object-mapping:manage
 * @summary Deletes an object mapping
 * @param {ConfigurationHubV2025ApiDeleteObjectMappingRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteObjectMapping = (requestParameters, apiConfig) => {
    const configurationhubv2025api = new sdk.ConfigurationHubV2025Api(apiConfig);
    return handleApiCall(() => configurationhubv2025api.deleteObjectMapping(requestParameters));
};
exports.deleteObjectMapping = deleteObjectMapping;
/**
 * This API deletes an existing scheduled action.
 * @summary Delete Scheduled Action
 * @param {ConfigurationHubV2025ApiDeleteScheduledActionRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteScheduledAction = (requestParameters, apiConfig) => {
    const configurationhubv2025api = new sdk.ConfigurationHubV2025Api(apiConfig);
    return handleApiCall(() => configurationhubv2025api.deleteScheduledAction(requestParameters));
};
exports.deleteScheduledAction = deleteScheduledAction;
/**
 * This API deletes an uploaded configuration based on Id.  On success, this endpoint will return an empty response.  The uploaded configuration id can be obtained from the response after a successful upload, or the list uploaded configurations endpoint.
 * @summary Delete an Uploaded Configuration
 * @param {ConfigurationHubV2025ApiDeleteUploadedConfigurationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteUploadedConfiguration = (requestParameters, apiConfig) => {
    const configurationhubv2025api = new sdk.ConfigurationHubV2025Api(apiConfig);
    return handleApiCall(() => configurationhubv2025api.deleteUploadedConfiguration(requestParameters));
};
exports.deleteUploadedConfiguration = deleteUploadedConfiguration;
/**
 * This API gets an existing deploy for the current tenant.
 * @summary Get a Deploy
 * @param {ConfigurationHubV2025ApiGetDeployRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getDeploy = (requestParameters, apiConfig) => {
    const configurationhubv2025api = new sdk.ConfigurationHubV2025Api(apiConfig);
    return handleApiCall(() => configurationhubv2025api.getDeploy(requestParameters));
};
exports.getDeploy = getDeploy;
/**
 * This gets a list of existing object mappings between current org and source org. Source org should be \"default\" when getting object mappings that are not associated to any particular org. The request will need the following security scope: - sp:config-object-mapping:read
 * @summary Gets list of object mappings
 * @param {ConfigurationHubV2025ApiGetObjectMappingsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getObjectMappings = (requestParameters, apiConfig) => {
    const configurationhubv2025api = new sdk.ConfigurationHubV2025Api(apiConfig);
    return handleApiCall(() => configurationhubv2025api.getObjectMappings(requestParameters));
};
exports.getObjectMappings = getObjectMappings;
/**
 * This API gets an existing uploaded configuration for the current tenant.
 * @summary Get an Uploaded Configuration
 * @param {ConfigurationHubV2025ApiGetUploadedConfigurationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getUploadedConfiguration = (requestParameters, apiConfig) => {
    const configurationhubv2025api = new sdk.ConfigurationHubV2025Api(apiConfig);
    return handleApiCall(() => configurationhubv2025api.getUploadedConfiguration(requestParameters));
};
exports.getUploadedConfiguration = getUploadedConfiguration;
/**
 * This API gets a list of existing backups for the current tenant.
 * @summary List Backups
 * @param {ConfigurationHubV2025ApiListBackupsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listBackups = (requestParameters = {}, apiConfig) => {
    const configurationhubv2025api = new sdk.ConfigurationHubV2025Api(apiConfig);
    return handleApiCall(() => configurationhubv2025api.listBackups(requestParameters));
};
exports.listBackups = listBackups;
/**
 * This API gets a list of deploys for the current tenant.
 * @summary List Deploys
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listDeploys = (apiConfig) => {
    const configurationhubv2025api = new sdk.ConfigurationHubV2025Api(apiConfig);
    return handleApiCall(() => configurationhubv2025api.listDeploys());
};
exports.listDeploys = listDeploys;
/**
 * This API gets a list of existing drafts for the current tenant.
 * @summary List Drafts
 * @param {ConfigurationHubV2025ApiListDraftsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listDrafts = (requestParameters = {}, apiConfig) => {
    const configurationhubv2025api = new sdk.ConfigurationHubV2025Api(apiConfig);
    return handleApiCall(() => configurationhubv2025api.listDrafts(requestParameters));
};
exports.listDrafts = listDrafts;
/**
 * This API gets a list of existing scheduled actions for the current tenant.
 * @summary List Scheduled Actions
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listScheduledActions = (apiConfig) => {
    const configurationhubv2025api = new sdk.ConfigurationHubV2025Api(apiConfig);
    return handleApiCall(() => configurationhubv2025api.listScheduledActions());
};
exports.listScheduledActions = listScheduledActions;
/**
 * This API gets a list of existing uploaded configurations for the current tenant.
 * @summary List Uploaded Configurations
 * @param {ConfigurationHubV2025ApiListUploadedConfigurationsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listUploadedConfigurations = (requestParameters = {}, apiConfig) => {
    const configurationhubv2025api = new sdk.ConfigurationHubV2025Api(apiConfig);
    return handleApiCall(() => configurationhubv2025api.listUploadedConfigurations(requestParameters));
};
exports.listUploadedConfigurations = listUploadedConfigurations;
/**
 * This updates a set of object mappings, only enabled and targetValue fields can be updated. Source org should be \"default\" when updating object mappings that are not associated to any particular org. The request will need the following security scope: - sp:config-object-mapping:manage
 * @summary Bulk updates object mappings
 * @param {ConfigurationHubV2025ApiUpdateObjectMappingsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateObjectMappings = (requestParameters, apiConfig) => {
    const configurationhubv2025api = new sdk.ConfigurationHubV2025Api(apiConfig);
    return handleApiCall(() => configurationhubv2025api.updateObjectMappings(requestParameters));
};
exports.updateObjectMappings = updateObjectMappings;
/**
 * This API updates an existing scheduled action using JSON Patch format.
 * @summary Update Scheduled Action
 * @param {ConfigurationHubV2025ApiUpdateScheduledActionRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateScheduledAction = (requestParameters, apiConfig) => {
    const configurationhubv2025api = new sdk.ConfigurationHubV2025Api(apiConfig);
    return handleApiCall(() => configurationhubv2025api.updateScheduledAction(requestParameters));
};
exports.updateScheduledAction = updateScheduledAction;
/**
 * Create a connector customizer.
 * @summary Create Connector Customizer
 * @param {ConnectorCustomizersV2025ApiCreateConnectorCustomizerRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createConnectorCustomizer = (requestParameters, apiConfig) => {
    const connectorcustomizersv2025api = new sdk.ConnectorCustomizersV2025Api(apiConfig);
    return handleApiCall(() => connectorcustomizersv2025api.createConnectorCustomizer(requestParameters));
};
exports.createConnectorCustomizer = createConnectorCustomizer;
/**
 * Creates a new version for the customizer.
 * @summary Creates a connector customizer version
 * @param {ConnectorCustomizersV2025ApiCreateConnectorCustomizerVersionRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createConnectorCustomizerVersion = (requestParameters, apiConfig) => {
    const connectorcustomizersv2025api = new sdk.ConnectorCustomizersV2025Api(apiConfig);
    return handleApiCall(() => connectorcustomizersv2025api.createConnectorCustomizerVersion(requestParameters));
};
exports.createConnectorCustomizerVersion = createConnectorCustomizerVersion;
/**
 * Delete the connector customizer for the given ID.
 * @summary Delete Connector Customizer
 * @param {ConnectorCustomizersV2025ApiDeleteConnectorCustomizerRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteConnectorCustomizer = (requestParameters, apiConfig) => {
    const connectorcustomizersv2025api = new sdk.ConnectorCustomizersV2025Api(apiConfig);
    return handleApiCall(() => connectorcustomizersv2025api.deleteConnectorCustomizer(requestParameters));
};
exports.deleteConnectorCustomizer = deleteConnectorCustomizer;
/**
 * Gets connector customizer by ID.
 * @summary Get connector customizer
 * @param {ConnectorCustomizersV2025ApiGetConnectorCustomizerRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getConnectorCustomizer = (requestParameters, apiConfig) => {
    const connectorcustomizersv2025api = new sdk.ConnectorCustomizersV2025Api(apiConfig);
    return handleApiCall(() => connectorcustomizersv2025api.getConnectorCustomizer(requestParameters));
};
exports.getConnectorCustomizer = getConnectorCustomizer;
/**
 * List all connector customizers.
 * @summary List All Connector Customizers
 * @param {ConnectorCustomizersV2025ApiListConnectorCustomizersRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listConnectorCustomizers = (requestParameters = {}, apiConfig) => {
    const connectorcustomizersv2025api = new sdk.ConnectorCustomizersV2025Api(apiConfig);
    return handleApiCall(() => connectorcustomizersv2025api.listConnectorCustomizers(requestParameters));
};
exports.listConnectorCustomizers = listConnectorCustomizers;
/**
 * Update an existing connector customizer with the one provided in the request body. These fields are immutable: `id`, `name`, `type`.
 * @summary Update Connector Customizer
 * @param {ConnectorCustomizersV2025ApiPutConnectorCustomizerRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putConnectorCustomizer = (requestParameters, apiConfig) => {
    const connectorcustomizersv2025api = new sdk.ConnectorCustomizersV2025Api(apiConfig);
    return handleApiCall(() => connectorcustomizersv2025api.putConnectorCustomizer(requestParameters));
};
exports.putConnectorCustomizer = putConnectorCustomizer;
/**
 * Create a connector rule from the available types.
 * @summary Create Connector Rule
 * @param {ConnectorRuleManagementV2025ApiCreateConnectorRuleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createConnectorRule = (requestParameters, apiConfig) => {
    const connectorrulemanagementv2025api = new sdk.ConnectorRuleManagementV2025Api(apiConfig);
    return handleApiCall(() => connectorrulemanagementv2025api.createConnectorRule(requestParameters));
};
exports.createConnectorRule = createConnectorRule;
/**
 * Delete the connector rule for the given ID.
 * @summary Delete Connector Rule
 * @param {ConnectorRuleManagementV2025ApiDeleteConnectorRuleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteConnectorRule = (requestParameters, apiConfig) => {
    const connectorrulemanagementv2025api = new sdk.ConnectorRuleManagementV2025Api(apiConfig);
    return handleApiCall(() => connectorrulemanagementv2025api.deleteConnectorRule(requestParameters));
};
exports.deleteConnectorRule = deleteConnectorRule;
/**
 * Get a connector rule by ID.
 * @summary Get Connector Rule
 * @param {ConnectorRuleManagementV2025ApiGetConnectorRuleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getConnectorRule = (requestParameters, apiConfig) => {
    const connectorrulemanagementv2025api = new sdk.ConnectorRuleManagementV2025Api(apiConfig);
    return handleApiCall(() => connectorrulemanagementv2025api.getConnectorRule(requestParameters));
};
exports.getConnectorRule = getConnectorRule;
/**
 * List existing connector rules.
 * @summary List Connector Rules
 * @param {ConnectorRuleManagementV2025ApiGetConnectorRuleListRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getConnectorRuleList = (requestParameters = {}, apiConfig) => {
    const connectorrulemanagementv2025api = new sdk.ConnectorRuleManagementV2025Api(apiConfig);
    return handleApiCall(() => connectorrulemanagementv2025api.getConnectorRuleList(requestParameters));
};
exports.getConnectorRuleList = getConnectorRuleList;
/**
 * Update an existing connector rule with the one provided in the request body. These fields are immutable: `id`, `name`, `type`
 * @summary Update Connector Rule
 * @param {ConnectorRuleManagementV2025ApiPutConnectorRuleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putConnectorRule = (requestParameters, apiConfig) => {
    const connectorrulemanagementv2025api = new sdk.ConnectorRuleManagementV2025Api(apiConfig);
    return handleApiCall(() => connectorrulemanagementv2025api.putConnectorRule(requestParameters));
};
exports.putConnectorRule = putConnectorRule;
/**
 * Detect issues within the connector rule\'s code to fix and list them.
 * @summary Validate Connector Rule
 * @param {ConnectorRuleManagementV2025ApiTestConnectorRuleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const testConnectorRule = (requestParameters, apiConfig) => {
    const connectorrulemanagementv2025api = new sdk.ConnectorRuleManagementV2025Api(apiConfig);
    return handleApiCall(() => connectorrulemanagementv2025api.testConnectorRule(requestParameters));
};
exports.testConnectorRule = testConnectorRule;
/**
 * Create custom connector.
 * @summary Create Custom Connector
 * @param {ConnectorsV2025ApiCreateCustomConnectorRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createCustomConnector = (requestParameters, apiConfig) => {
    const connectorsv2025api = new sdk.ConnectorsV2025Api(apiConfig);
    return handleApiCall(() => connectorsv2025api.createCustomConnector(requestParameters));
};
exports.createCustomConnector = createCustomConnector;
/**
 * Delete a custom connector that using its script name.
 * @summary Delete Connector by Script Name
 * @param {ConnectorsV2025ApiDeleteCustomConnectorRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteCustomConnector = (requestParameters, apiConfig) => {
    const connectorsv2025api = new sdk.ConnectorsV2025Api(apiConfig);
    return handleApiCall(() => connectorsv2025api.deleteCustomConnector(requestParameters));
};
exports.deleteCustomConnector = deleteCustomConnector;
/**
 * Fetches a connector that using its script name.
 * @summary Get Connector by Script Name
 * @param {ConnectorsV2025ApiGetConnectorRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getConnector = (requestParameters, apiConfig) => {
    const connectorsv2025api = new sdk.ConnectorsV2025Api(apiConfig);
    return handleApiCall(() => connectorsv2025api.getConnector(requestParameters));
};
exports.getConnector = getConnector;
/**
 * Fetches a connector\'s correlation config using its script name.
 * @summary Get Connector Correlation Configuration
 * @param {ConnectorsV2025ApiGetConnectorCorrelationConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getConnectorCorrelationConfig = (requestParameters, apiConfig) => {
    const connectorsv2025api = new sdk.ConnectorsV2025Api(apiConfig);
    return handleApiCall(() => connectorsv2025api.getConnectorCorrelationConfig(requestParameters));
};
exports.getConnectorCorrelationConfig = getConnectorCorrelationConfig;
/**
 * Fetches list of connectors that have \'RELEASED\' status using filtering and pagination.
 * @summary Get Connector List
 * @param {ConnectorsV2025ApiGetConnectorListRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getConnectorList = (requestParameters = {}, apiConfig) => {
    const connectorsv2025api = new sdk.ConnectorsV2025Api(apiConfig);
    return handleApiCall(() => connectorsv2025api.getConnectorList(requestParameters));
};
exports.getConnectorList = getConnectorList;
/**
 * Fetches a connector\'s source config using its script name.
 * @summary Get Connector Source Configuration
 * @param {ConnectorsV2025ApiGetConnectorSourceConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getConnectorSourceConfig = (requestParameters, apiConfig) => {
    const connectorsv2025api = new sdk.ConnectorsV2025Api(apiConfig);
    return handleApiCall(() => connectorsv2025api.getConnectorSourceConfig(requestParameters));
};
exports.getConnectorSourceConfig = getConnectorSourceConfig;
/**
 * Fetches a connector\'s source template using its script name.
 * @summary Get Connector Source Template
 * @param {ConnectorsV2025ApiGetConnectorSourceTemplateRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getConnectorSourceTemplate = (requestParameters, apiConfig) => {
    const connectorsv2025api = new sdk.ConnectorsV2025Api(apiConfig);
    return handleApiCall(() => connectorsv2025api.getConnectorSourceTemplate(requestParameters));
};
exports.getConnectorSourceTemplate = getConnectorSourceTemplate;
/**
 * Fetches a connector\'s translations using its script name.
 * @summary Get Connector Translations
 * @param {ConnectorsV2025ApiGetConnectorTranslationsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getConnectorTranslations = (requestParameters, apiConfig) => {
    const connectorsv2025api = new sdk.ConnectorsV2025Api(apiConfig);
    return handleApiCall(() => connectorsv2025api.getConnectorTranslations(requestParameters));
};
exports.getConnectorTranslations = getConnectorTranslations;
/**
 * Update a connector\'s correlation config using its script name.
 * @summary Update Connector Correlation Configuration
 * @param {ConnectorsV2025ApiPutConnectorCorrelationConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putConnectorCorrelationConfig = (requestParameters, apiConfig) => {
    const connectorsv2025api = new sdk.ConnectorsV2025Api(apiConfig);
    return handleApiCall(() => connectorsv2025api.putConnectorCorrelationConfig(requestParameters));
};
exports.putConnectorCorrelationConfig = putConnectorCorrelationConfig;
/**
 * Update a connector\'s source config using its script name.
 * @summary Update Connector Source Configuration
 * @param {ConnectorsV2025ApiPutConnectorSourceConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putConnectorSourceConfig = (requestParameters, apiConfig) => {
    const connectorsv2025api = new sdk.ConnectorsV2025Api(apiConfig);
    return handleApiCall(() => connectorsv2025api.putConnectorSourceConfig(requestParameters));
};
exports.putConnectorSourceConfig = putConnectorSourceConfig;
/**
 * Update a connector\'s source template using its script name.
 * @summary Update Connector Source Template
 * @param {ConnectorsV2025ApiPutConnectorSourceTemplateRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putConnectorSourceTemplate = (requestParameters, apiConfig) => {
    const connectorsv2025api = new sdk.ConnectorsV2025Api(apiConfig);
    return handleApiCall(() => connectorsv2025api.putConnectorSourceTemplate(requestParameters));
};
exports.putConnectorSourceTemplate = putConnectorSourceTemplate;
/**
 * Update a connector\'s translations using its script name.
 * @summary Update Connector Translations
 * @param {ConnectorsV2025ApiPutConnectorTranslationsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putConnectorTranslations = (requestParameters, apiConfig) => {
    const connectorsv2025api = new sdk.ConnectorsV2025Api(apiConfig);
    return handleApiCall(() => connectorsv2025api.putConnectorTranslations(requestParameters));
};
exports.putConnectorTranslations = putConnectorTranslations;
/**
 * This API updates a custom connector by script name using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.  The following fields are patchable:   * connectorMetadata  * applicationXml  * correlationConfigXml  * sourceConfigXml
 * @summary Update Connector by Script Name
 * @param {ConnectorsV2025ApiUpdateConnectorRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateConnector = (requestParameters, apiConfig) => {
    const connectorsv2025api = new sdk.ConnectorsV2025Api(apiConfig);
    return handleApiCall(() => connectorsv2025api.updateConnector(requestParameters));
};
exports.updateConnector = updateConnector;
/**
 *
 * @summary Creates a form definition.
 * @param {CustomFormsV2025ApiCreateFormDefinitionRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createFormDefinition = (requestParameters = {}, apiConfig) => {
    const customformsv2025api = new sdk.CustomFormsV2025Api(apiConfig);
    return handleApiCall(() => customformsv2025api.createFormDefinition(requestParameters));
};
exports.createFormDefinition = createFormDefinition;
/**
 *
 * @summary Generate JSON Schema dynamically.
 * @param {CustomFormsV2025ApiCreateFormDefinitionDynamicSchemaRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createFormDefinitionDynamicSchema = (requestParameters = {}, apiConfig) => {
    const customformsv2025api = new sdk.CustomFormsV2025Api(apiConfig);
    return handleApiCall(() => customformsv2025api.createFormDefinitionDynamicSchema(requestParameters));
};
exports.createFormDefinitionDynamicSchema = createFormDefinitionDynamicSchema;
/**
 * Parameter `{formDefinitionID}` should match a form definition ID.
 * @summary Upload new form definition file.
 * @param {CustomFormsV2025ApiCreateFormDefinitionFileRequestRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createFormDefinitionFileRequest = (requestParameters, apiConfig) => {
    const customformsv2025api = new sdk.CustomFormsV2025Api(apiConfig);
    return handleApiCall(() => customformsv2025api.createFormDefinitionFileRequest(requestParameters));
};
exports.createFormDefinitionFileRequest = createFormDefinitionFileRequest;
/**
 *
 * @summary Creates a form instance.
 * @param {CustomFormsV2025ApiCreateFormInstanceRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createFormInstance = (requestParameters = {}, apiConfig) => {
    const customformsv2025api = new sdk.CustomFormsV2025Api(apiConfig);
    return handleApiCall(() => customformsv2025api.createFormInstance(requestParameters));
};
exports.createFormInstance = createFormInstance;
/**
 * Parameter `{formDefinitionID}` should match a form definition ID.
 * @summary Deletes a form definition.
 * @param {CustomFormsV2025ApiDeleteFormDefinitionRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteFormDefinition = (requestParameters, apiConfig) => {
    const customformsv2025api = new sdk.CustomFormsV2025Api(apiConfig);
    return handleApiCall(() => customformsv2025api.deleteFormDefinition(requestParameters));
};
exports.deleteFormDefinition = deleteFormDefinition;
/**
 * No parameters required.
 * @summary List form definitions by tenant.
 * @param {CustomFormsV2025ApiExportFormDefinitionsByTenantRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const exportFormDefinitionsByTenant = (requestParameters = {}, apiConfig) => {
    const customformsv2025api = new sdk.CustomFormsV2025Api(apiConfig);
    return handleApiCall(() => customformsv2025api.exportFormDefinitionsByTenant(requestParameters));
};
exports.exportFormDefinitionsByTenant = exportFormDefinitionsByTenant;
/**
 *
 * @summary Download definition file by fileId.
 * @param {CustomFormsV2025ApiGetFileFromS3Request} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getFileFromS3 = (requestParameters, apiConfig) => {
    const customformsv2025api = new sdk.CustomFormsV2025Api(apiConfig);
    return handleApiCall(() => customformsv2025api.getFileFromS3(requestParameters));
};
exports.getFileFromS3 = getFileFromS3;
/**
 * Parameter `{formDefinitionID}` should match a form definition ID.
 * @summary Return a form definition.
 * @param {CustomFormsV2025ApiGetFormDefinitionByKeyRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getFormDefinitionByKey = (requestParameters, apiConfig) => {
    const customformsv2025api = new sdk.CustomFormsV2025Api(apiConfig);
    return handleApiCall(() => customformsv2025api.getFormDefinitionByKey(requestParameters));
};
exports.getFormDefinitionByKey = getFormDefinitionByKey;
/**
 * Parameter `{formInstanceID}` should match a form instance ID.
 * @summary Returns a form instance.
 * @param {CustomFormsV2025ApiGetFormInstanceByKeyRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getFormInstanceByKey = (requestParameters, apiConfig) => {
    const customformsv2025api = new sdk.CustomFormsV2025Api(apiConfig);
    return handleApiCall(() => customformsv2025api.getFormInstanceByKey(requestParameters));
};
exports.getFormInstanceByKey = getFormInstanceByKey;
/**
 *
 * @summary Download instance file by fileId.
 * @param {CustomFormsV2025ApiGetFormInstanceFileRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getFormInstanceFile = (requestParameters, apiConfig) => {
    const customformsv2025api = new sdk.CustomFormsV2025Api(apiConfig);
    return handleApiCall(() => customformsv2025api.getFormInstanceFile(requestParameters));
};
exports.getFormInstanceFile = getFormInstanceFile;
/**
 *
 * @summary Import form definitions from export.
 * @param {CustomFormsV2025ApiImportFormDefinitionsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const importFormDefinitions = (requestParameters = {}, apiConfig) => {
    const customformsv2025api = new sdk.CustomFormsV2025Api(apiConfig);
    return handleApiCall(() => customformsv2025api.importFormDefinitions(requestParameters));
};
exports.importFormDefinitions = importFormDefinitions;
/**
 * Parameter `{formDefinitionID}` should match a form definition ID.
 * @summary Patch a form definition.
 * @param {CustomFormsV2025ApiPatchFormDefinitionRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchFormDefinition = (requestParameters, apiConfig) => {
    const customformsv2025api = new sdk.CustomFormsV2025Api(apiConfig);
    return handleApiCall(() => customformsv2025api.patchFormDefinition(requestParameters));
};
exports.patchFormDefinition = patchFormDefinition;
/**
 * Parameter `{formInstanceID}` should match a form instance ID.
 * @summary Patch a form instance.
 * @param {CustomFormsV2025ApiPatchFormInstanceRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchFormInstance = (requestParameters, apiConfig) => {
    const customformsv2025api = new sdk.CustomFormsV2025Api(apiConfig);
    return handleApiCall(() => customformsv2025api.patchFormInstance(requestParameters));
};
exports.patchFormInstance = patchFormInstance;
/**
 * No parameters required.
 * @summary Export form definitions by tenant.
 * @param {CustomFormsV2025ApiSearchFormDefinitionsByTenantRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const searchFormDefinitionsByTenant = (requestParameters = {}, apiConfig) => {
    const customformsv2025api = new sdk.CustomFormsV2025Api(apiConfig);
    return handleApiCall(() => customformsv2025api.searchFormDefinitionsByTenant(requestParameters));
};
exports.searchFormDefinitionsByTenant = searchFormDefinitionsByTenant;
/**
 * Parameter `{formInstanceID}` should match a form instance ID. Parameter `{formElementID}` should match a form element ID at the data source configuration.
 * @summary Retrieves dynamic data by element.
 * @param {CustomFormsV2025ApiSearchFormElementDataByElementIDRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const searchFormElementDataByElementID = (requestParameters, apiConfig) => {
    const customformsv2025api = new sdk.CustomFormsV2025Api(apiConfig);
    return handleApiCall(() => customformsv2025api.searchFormElementDataByElementID(requestParameters));
};
exports.searchFormElementDataByElementID = searchFormElementDataByElementID;
/**
 * No parameters required.
 * @summary List form instances by tenant.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const searchFormInstancesByTenant = (apiConfig) => {
    const customformsv2025api = new sdk.CustomFormsV2025Api(apiConfig);
    return handleApiCall(() => customformsv2025api.searchFormInstancesByTenant());
};
exports.searchFormInstancesByTenant = searchFormInstancesByTenant;
/**
 * No parameters required.
 * @summary List predefined select options.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const searchPreDefinedSelectOptions = (apiConfig) => {
    const customformsv2025api = new sdk.CustomFormsV2025Api(apiConfig);
    return handleApiCall(() => customformsv2025api.searchPreDefinedSelectOptions());
};
exports.searchPreDefinedSelectOptions = searchPreDefinedSelectOptions;
/**
 *
 * @summary Preview form definition data source.
 * @param {CustomFormsV2025ApiShowPreviewDataSourceRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const showPreviewDataSource = (requestParameters, apiConfig) => {
    const customformsv2025api = new sdk.CustomFormsV2025Api(apiConfig);
    return handleApiCall(() => customformsv2025api.showPreviewDataSource(requestParameters));
};
exports.showPreviewDataSource = showPreviewDataSource;
/**
 * This API creates the custom password instructions for the specified page ID.
 * @summary Create Custom Password Instructions
 * @param {CustomPasswordInstructionsV2025ApiCreateCustomPasswordInstructionsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createCustomPasswordInstructions = (requestParameters, apiConfig) => {
    const custompasswordinstructionsv2025api = new sdk.CustomPasswordInstructionsV2025Api(apiConfig);
    return handleApiCall(() => custompasswordinstructionsv2025api.createCustomPasswordInstructions(requestParameters));
};
exports.createCustomPasswordInstructions = createCustomPasswordInstructions;
/**
 * This API delete the custom password instructions for the specified page ID.
 * @summary Delete Custom Password Instructions by page ID
 * @param {CustomPasswordInstructionsV2025ApiDeleteCustomPasswordInstructionsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteCustomPasswordInstructions = (requestParameters, apiConfig) => {
    const custompasswordinstructionsv2025api = new sdk.CustomPasswordInstructionsV2025Api(apiConfig);
    return handleApiCall(() => custompasswordinstructionsv2025api.deleteCustomPasswordInstructions(requestParameters));
};
exports.deleteCustomPasswordInstructions = deleteCustomPasswordInstructions;
/**
 * This API returns the custom password instructions for the specified page ID.
 * @summary Get Custom Password Instructions by Page ID
 * @param {CustomPasswordInstructionsV2025ApiGetCustomPasswordInstructionsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getCustomPasswordInstructions = (requestParameters, apiConfig) => {
    const custompasswordinstructionsv2025api = new sdk.CustomPasswordInstructionsV2025Api(apiConfig);
    return handleApiCall(() => custompasswordinstructionsv2025api.getCustomPasswordInstructions(requestParameters));
};
exports.getCustomPasswordInstructions = getCustomPasswordInstructions;
/**
 * This API creates a segment.  >**Note:** Segment definitions may take time to propagate to all identities.
 * @summary Create Segment
 * @param {DataSegmentationV2025ApiCreateDataSegmentRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createDataSegment = (requestParameters, apiConfig) => {
    const datasegmentationv2025api = new sdk.DataSegmentationV2025Api(apiConfig);
    return handleApiCall(() => datasegmentationv2025api.createDataSegment(requestParameters));
};
exports.createDataSegment = createDataSegment;
/**
 * This API deletes the segment specified by the given ID.
 * @summary Delete Segment by ID
 * @param {DataSegmentationV2025ApiDeleteDataSegmentRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteDataSegment = (requestParameters, apiConfig) => {
    const datasegmentationv2025api = new sdk.DataSegmentationV2025Api(apiConfig);
    return handleApiCall(() => datasegmentationv2025api.deleteDataSegment(requestParameters));
};
exports.deleteDataSegment = deleteDataSegment;
/**
 * This API returns the segment specified by the given ID.
 * @summary Get Segment by ID
 * @param {DataSegmentationV2025ApiGetDataSegmentRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getDataSegment = (requestParameters, apiConfig) => {
    const datasegmentationv2025api = new sdk.DataSegmentationV2025Api(apiConfig);
    return handleApiCall(() => datasegmentationv2025api.getDataSegment(requestParameters));
};
exports.getDataSegment = getDataSegment;
/**
 * This API returns the segment membership specified by the given identity ID.
 * @summary Get SegmentMembership by Identity ID
 * @param {DataSegmentationV2025ApiGetDataSegmentIdentityMembershipRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getDataSegmentIdentityMembership = (requestParameters, apiConfig) => {
    const datasegmentationv2025api = new sdk.DataSegmentationV2025Api(apiConfig);
    return handleApiCall(() => datasegmentationv2025api.getDataSegmentIdentityMembership(requestParameters));
};
exports.getDataSegmentIdentityMembership = getDataSegmentIdentityMembership;
/**
 * This API returns whether or not segmentation is enabled for the identity.
 * @summary Is Segmentation enabled by Identity
 * @param {DataSegmentationV2025ApiGetDataSegmentationEnabledForUserRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getDataSegmentationEnabledForUser = (requestParameters, apiConfig) => {
    const datasegmentationv2025api = new sdk.DataSegmentationV2025Api(apiConfig);
    return handleApiCall(() => datasegmentationv2025api.getDataSegmentationEnabledForUser(requestParameters));
};
exports.getDataSegmentationEnabledForUser = getDataSegmentationEnabledForUser;
/**
 * This API returns the segment specified by the given ID.
 * @summary Get Segments
 * @param {DataSegmentationV2025ApiListDataSegmentsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listDataSegments = (requestParameters = {}, apiConfig) => {
    const datasegmentationv2025api = new sdk.DataSegmentationV2025Api(apiConfig);
    return handleApiCall(() => datasegmentationv2025api.listDataSegments(requestParameters));
};
exports.listDataSegments = listDataSegments;
/**
 * Use this API to update segment fields by using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 * @summary Update Segment
 * @param {DataSegmentationV2025ApiPatchDataSegmentRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchDataSegment = (requestParameters, apiConfig) => {
    const datasegmentationv2025api = new sdk.DataSegmentationV2025Api(apiConfig);
    return handleApiCall(() => datasegmentationv2025api.patchDataSegment(requestParameters));
};
exports.patchDataSegment = patchDataSegment;
/**
 * This will publish the segment so that it starts applying the segmentation to the desired users if enabled
 * @summary Publish segment by ID
 * @param {DataSegmentationV2025ApiPublishDataSegmentRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const publishDataSegment = (requestParameters, apiConfig) => {
    const datasegmentationv2025api = new sdk.DataSegmentationV2025Api(apiConfig);
    return handleApiCall(() => datasegmentationv2025api.publishDataSegment(requestParameters));
};
exports.publishDataSegment = publishDataSegment;
/**
 * This API creates a dimension. You must have a token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority to call this API.  Additionally, a ROLE_SUBADMIN cannot create a dimension that includes an access profile or entitlement if that access profile or entitlement is linked to a source that the ROLE_SUBADMIN is not associated with.  The maximum supported length for the description field is 2000 characters.
 * @summary Create a Dimension
 * @param {DimensionsV2025ApiCreateDimensionRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createDimension = (requestParameters, apiConfig) => {
    const dimensionsv2025api = new sdk.DimensionsV2025Api(apiConfig);
    return handleApiCall(() => dimensionsv2025api.createDimension(requestParameters));
};
exports.createDimension = createDimension;
/**
 * This endpoint initiates a bulk deletion of one or more dimensions. When the request is successful, the endpoint returns the bulk delete\'s task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status), which will return the task result\'s status and information.  This endpoint can only bulk delete up to a limit of 50 roles per request.  A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this endpoint. In addition, a token with ROLE_SUBADMIN authority can only call this endpoint if all dimensions included in the request are associated with sources with management workgroups the ROLE_SUBADMIN is a member of.
 * @summary Delete Dimension(s)
 * @param {DimensionsV2025ApiDeleteBulkDimensionsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteBulkDimensions = (requestParameters, apiConfig) => {
    const dimensionsv2025api = new sdk.DimensionsV2025Api(apiConfig);
    return handleApiCall(() => dimensionsv2025api.deleteBulkDimensions(requestParameters));
};
exports.deleteBulkDimensions = deleteBulkDimensions;
/**
 * This API deletes a Dimension by its ID. A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles/Entitlements included in the Dimension are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.
 * @summary Delete a Dimension
 * @param {DimensionsV2025ApiDeleteDimensionRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteDimension = (requestParameters, apiConfig) => {
    const dimensionsv2025api = new sdk.DimensionsV2025Api(apiConfig);
    return handleApiCall(() => dimensionsv2025api.deleteDimension(requestParameters));
};
exports.deleteDimension = deleteDimension;
/**
 * This API returns a Dimension by its ID.  A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles or Entitlements included in the Dimension or Parent Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.
 * @summary Get a Dimension under Role.
 * @param {DimensionsV2025ApiGetDimensionRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getDimension = (requestParameters, apiConfig) => {
    const dimensionsv2025api = new sdk.DimensionsV2025Api(apiConfig);
    return handleApiCall(() => dimensionsv2025api.getDimension(requestParameters));
};
exports.getDimension = getDimension;
/**
 * This API lists the Entitlements associated with a given dimension.  A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API.
 * @summary List Dimension\'s Entitlements
 * @param {DimensionsV2025ApiGetDimensionEntitlementsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getDimensionEntitlements = (requestParameters, apiConfig) => {
    const dimensionsv2025api = new sdk.DimensionsV2025Api(apiConfig);
    return handleApiCall(() => dimensionsv2025api.getDimensionEntitlements(requestParameters));
};
exports.getDimensionEntitlements = getDimensionEntitlements;
/**
 * This API lists the Access Profiles associated with a given Dimension  A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles included in the Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.
 * @summary List Dimension\'s Access Profiles
 * @param {DimensionsV2025ApiListDimensionAccessProfilesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listDimensionAccessProfiles = (requestParameters, apiConfig) => {
    const dimensionsv2025api = new sdk.DimensionsV2025Api(apiConfig);
    return handleApiCall(() => dimensionsv2025api.listDimensionAccessProfiles(requestParameters));
};
exports.listDimensionAccessProfiles = listDimensionAccessProfiles;
/**
 * This API returns a list of dimensions under a specified role.  A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API.
 * @summary List Dimensions
 * @param {DimensionsV2025ApiListDimensionsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listDimensions = (requestParameters, apiConfig) => {
    const dimensionsv2025api = new sdk.DimensionsV2025Api(apiConfig);
    return handleApiCall(() => dimensionsv2025api.listDimensions(requestParameters));
};
exports.listDimensions = listDimensions;
/**
 * This API updates an existing dimension using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax. The following fields are patchable: **name** **description** **owner** **accessProfiles** **entitlements** **membership** A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all access profiles/entitlements included in the dimension are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member. The maximum supported length for the description field is 2000 characters. When you use this API to modify a dimension\'s membership identities, you can only modify up to a limit of 500 membership identities at a time.
 * @summary Patch a specified Dimension
 * @param {DimensionsV2025ApiPatchDimensionRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchDimension = (requestParameters, apiConfig) => {
    const dimensionsv2025api = new sdk.DimensionsV2025Api(apiConfig);
    return handleApiCall(() => dimensionsv2025api.patchDimension(requestParameters));
};
exports.patchDimension = patchDimension;
/**
 * Add single Access Model Metadata to an entitlement.
 * @summary Add metadata to an entitlement.
 * @param {EntitlementsV2025ApiCreateAccessModelMetadataForEntitlementRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createAccessModelMetadataForEntitlement = (requestParameters, apiConfig) => {
    const entitlementsv2025api = new sdk.EntitlementsV2025Api(apiConfig);
    return handleApiCall(() => entitlementsv2025api.createAccessModelMetadataForEntitlement(requestParameters));
};
exports.createAccessModelMetadataForEntitlement = createAccessModelMetadataForEntitlement;
/**
 * Remove single Access Model Metadata from an entitlement.
 * @summary Remove metadata from an entitlement.
 * @param {EntitlementsV2025ApiDeleteAccessModelMetadataFromEntitlementRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteAccessModelMetadataFromEntitlement = (requestParameters, apiConfig) => {
    const entitlementsv2025api = new sdk.EntitlementsV2025Api(apiConfig);
    return handleApiCall(() => entitlementsv2025api.deleteAccessModelMetadataFromEntitlement(requestParameters));
};
exports.deleteAccessModelMetadataFromEntitlement = deleteAccessModelMetadataFromEntitlement;
/**
 * This API returns an entitlement by its ID.
 * @summary Get an entitlement
 * @param {EntitlementsV2025ApiGetEntitlementRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getEntitlement = (requestParameters, apiConfig) => {
    const entitlementsv2025api = new sdk.EntitlementsV2025Api(apiConfig);
    return handleApiCall(() => entitlementsv2025api.getEntitlement(requestParameters));
};
exports.getEntitlement = getEntitlement;
/**
 * This API returns the entitlement request config for a specified entitlement.
 * @summary Get Entitlement Request Config
 * @param {EntitlementsV2025ApiGetEntitlementRequestConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getEntitlementRequestConfig = (requestParameters, apiConfig) => {
    const entitlementsv2025api = new sdk.EntitlementsV2025Api(apiConfig);
    return handleApiCall(() => entitlementsv2025api.getEntitlementRequestConfig(requestParameters));
};
exports.getEntitlementRequestConfig = getEntitlementRequestConfig;
/**
 * Starts an entitlement aggregation on the specified source. Though this endpoint has been deprecated, you can find its Beta equivalent [here](https://developer.sailpoint.com/docs/api/beta/import-entitlements).  If the target source is a direct connection, then the request body must be empty. You will also need to make sure the Content-Type header is not set. If you set the Content-Type header without specifying a body, then you will receive a 500 error.  If the target source is a delimited file source, then the CSV file needs to be included in the request body. You will also need to set the Content-Type header to `multipart/form-data`.
 * @summary Aggregate Entitlements
 * @param {EntitlementsV2025ApiImportEntitlementsBySourceRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @deprecated
 * @throws {RequiredError}
 */
const importEntitlementsBySource = (requestParameters, apiConfig) => {
    const entitlementsv2025api = new sdk.EntitlementsV2025Api(apiConfig);
    return handleApiCall(() => entitlementsv2025api.importEntitlementsBySource(requestParameters));
};
exports.importEntitlementsBySource = importEntitlementsBySource;
/**
 * This API returns a list of all child entitlements of a given entitlement.
 * @summary List of entitlements children
 * @param {EntitlementsV2025ApiListEntitlementChildrenRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listEntitlementChildren = (requestParameters, apiConfig) => {
    const entitlementsv2025api = new sdk.EntitlementsV2025Api(apiConfig);
    return handleApiCall(() => entitlementsv2025api.listEntitlementChildren(requestParameters));
};
exports.listEntitlementChildren = listEntitlementChildren;
/**
 * This API returns a list of all parent entitlements of a given entitlement.
 * @summary List of entitlements parents
 * @param {EntitlementsV2025ApiListEntitlementParentsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listEntitlementParents = (requestParameters, apiConfig) => {
    const entitlementsv2025api = new sdk.EntitlementsV2025Api(apiConfig);
    return handleApiCall(() => entitlementsv2025api.listEntitlementParents(requestParameters));
};
exports.listEntitlementParents = listEntitlementParents;
/**
 * This API returns a list of entitlements.  This API can be used in one of the two following ways: either getting entitlements for a specific **account-id**, or getting via use of **filters** (those two options are exclusive).  Any authenticated token can call this API.
 * @summary Gets a list of entitlements.
 * @param {EntitlementsV2025ApiListEntitlementsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listEntitlements = (requestParameters = {}, apiConfig) => {
    const entitlementsv2025api = new sdk.EntitlementsV2025Api(apiConfig);
    return handleApiCall(() => entitlementsv2025api.listEntitlements(requestParameters));
};
exports.listEntitlements = listEntitlements;
/**
 * This API updates an existing entitlement using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.  The following fields are patchable: **requestable**, **privileged**, **segments**, **owner**, **name**, **description**, and **manuallyUpdatedFields**  When you\'re patching owner, only owner type and owner id must be provided. Owner name is optional, and it won\'t be modified. If the owner name is provided, it should correspond to the real name. The only owner type currently supported is IDENTITY.
 * @summary Patch an entitlement
 * @param {EntitlementsV2025ApiPatchEntitlementRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchEntitlement = (requestParameters, apiConfig) => {
    const entitlementsv2025api = new sdk.EntitlementsV2025Api(apiConfig);
    return handleApiCall(() => entitlementsv2025api.patchEntitlement(requestParameters));
};
exports.patchEntitlement = patchEntitlement;
/**
 * This API replaces the entitlement request config for a specified entitlement.
 * @summary Replace Entitlement Request Config
 * @param {EntitlementsV2025ApiPutEntitlementRequestConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putEntitlementRequestConfig = (requestParameters, apiConfig) => {
    const entitlementsv2025api = new sdk.EntitlementsV2025Api(apiConfig);
    return handleApiCall(() => entitlementsv2025api.putEntitlementRequestConfig(requestParameters));
};
exports.putEntitlementRequestConfig = putEntitlementRequestConfig;
/**
 * Remove all entitlements from a specific source. To reload the accounts along with the entitlements you removed, you must run an unoptimized aggregation.  To do so, use [Account Aggregation](https://developer.sailpoint.com/docs/api/v2024/import-accounts/) with `disableOptimization` = `true`.
 * @summary Reset Source Entitlements
 * @param {EntitlementsV2025ApiResetSourceEntitlementsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const resetSourceEntitlements = (requestParameters, apiConfig) => {
    const entitlementsv2025api = new sdk.EntitlementsV2025Api(apiConfig);
    return handleApiCall(() => entitlementsv2025api.resetSourceEntitlements(requestParameters));
};
exports.resetSourceEntitlements = resetSourceEntitlements;
/**
 * \"This API applies an update to every entitlement of the list.\\n\\nThe\\  \\ number of entitlements to update is limited to 50 items maximum.\\n\\nThe JsonPatch\\  \\ update follows the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.\\  \\ allowed operations : `**{ \\\"op\\\": \\\"replace\\\", \\\"path\\\": \\\"/privileged\\\", \\\"\\  value\\\": boolean }**  **{ \\\"op\\\": \\\"replace\\\", \\\"path\\\": \\\"/requestable\\\",\\\"value\\\"\\  : boolean }**`\"
 * @summary Bulk update an entitlement list
 * @param {EntitlementsV2025ApiUpdateEntitlementsInBulkRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateEntitlementsInBulk = (requestParameters, apiConfig) => {
    const entitlementsv2025api = new sdk.EntitlementsV2025Api(apiConfig);
    return handleApiCall(() => entitlementsv2025api.updateEntitlementsInBulk(requestParameters));
};
exports.updateEntitlementsInBulk = updateEntitlementsInBulk;
/**
 * This API returns the details of an org\'s network auth configuration. Requires security scope of: \'sp:auth-org:manage\'
 * @summary Create security network configuration.
 * @param {GlobalTenantSecuritySettingsV2025ApiCreateAuthOrgNetworkConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createAuthOrgNetworkConfig = (requestParameters, apiConfig) => {
    const globaltenantsecuritysettingsv2025api = new sdk.GlobalTenantSecuritySettingsV2025Api(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsv2025api.createAuthOrgNetworkConfig(requestParameters));
};
exports.createAuthOrgNetworkConfig = createAuthOrgNetworkConfig;
/**
 * This API returns the details of an org\'s lockout auth configuration.
 * @summary Get Auth Org Lockout Configuration.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAuthOrgLockoutConfig = (apiConfig) => {
    const globaltenantsecuritysettingsv2025api = new sdk.GlobalTenantSecuritySettingsV2025Api(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsv2025api.getAuthOrgLockoutConfig());
};
exports.getAuthOrgLockoutConfig = getAuthOrgLockoutConfig;
/**
 * This API returns the details of an org\'s network auth configuration.
 * @summary Get security network configuration.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAuthOrgNetworkConfig = (apiConfig) => {
    const globaltenantsecuritysettingsv2025api = new sdk.GlobalTenantSecuritySettingsV2025Api(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsv2025api.getAuthOrgNetworkConfig());
};
exports.getAuthOrgNetworkConfig = getAuthOrgNetworkConfig;
/**
 * This API returns the details of an org\'s service provider auth configuration.
 * @summary Get Service Provider Configuration.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAuthOrgServiceProviderConfig = (apiConfig) => {
    const globaltenantsecuritysettingsv2025api = new sdk.GlobalTenantSecuritySettingsV2025Api(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsv2025api.getAuthOrgServiceProviderConfig());
};
exports.getAuthOrgServiceProviderConfig = getAuthOrgServiceProviderConfig;
/**
 * This API returns the details of an org\'s session auth configuration.
 * @summary Get Auth Org Session Configuration.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAuthOrgSessionConfig = (apiConfig) => {
    const globaltenantsecuritysettingsv2025api = new sdk.GlobalTenantSecuritySettingsV2025Api(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsv2025api.getAuthOrgSessionConfig());
};
exports.getAuthOrgSessionConfig = getAuthOrgSessionConfig;
/**
 * This API updates an existing lockout configuration for an org using PATCH
 * @summary Update Auth Org Lockout Configuration
 * @param {GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgLockoutConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchAuthOrgLockoutConfig = (requestParameters, apiConfig) => {
    const globaltenantsecuritysettingsv2025api = new sdk.GlobalTenantSecuritySettingsV2025Api(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsv2025api.patchAuthOrgLockoutConfig(requestParameters));
};
exports.patchAuthOrgLockoutConfig = patchAuthOrgLockoutConfig;
/**
 * This API updates an existing network configuration for an org using PATCH  Requires security scope of:  \'sp:auth-org:manage\'
 * @summary Update security network configuration.
 * @param {GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgNetworkConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchAuthOrgNetworkConfig = (requestParameters, apiConfig) => {
    const globaltenantsecuritysettingsv2025api = new sdk.GlobalTenantSecuritySettingsV2025Api(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsv2025api.patchAuthOrgNetworkConfig(requestParameters));
};
exports.patchAuthOrgNetworkConfig = patchAuthOrgNetworkConfig;
/**
 * This API updates an existing service provider configuration for an org using PATCH.
 * @summary Update Service Provider Configuration
 * @param {GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgServiceProviderConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchAuthOrgServiceProviderConfig = (requestParameters, apiConfig) => {
    const globaltenantsecuritysettingsv2025api = new sdk.GlobalTenantSecuritySettingsV2025Api(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsv2025api.patchAuthOrgServiceProviderConfig(requestParameters));
};
exports.patchAuthOrgServiceProviderConfig = patchAuthOrgServiceProviderConfig;
/**
 * This API updates an existing session configuration for an org using PATCH.
 * @summary Update Auth Org Session Configuration
 * @param {GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgSessionConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchAuthOrgSessionConfig = (requestParameters, apiConfig) => {
    const globaltenantsecuritysettingsv2025api = new sdk.GlobalTenantSecuritySettingsV2025Api(apiConfig);
    return handleApiCall(() => globaltenantsecuritysettingsv2025api.patchAuthOrgSessionConfig(requestParameters));
};
exports.patchAuthOrgSessionConfig = patchAuthOrgSessionConfig;
/**
 * This API creates a new Governance Group.
 * @summary Create a new Governance Group.
 * @param {GovernanceGroupsV2025ApiCreateWorkgroupRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createWorkgroup = (requestParameters, apiConfig) => {
    const governancegroupsv2025api = new sdk.GovernanceGroupsV2025Api(apiConfig);
    return handleApiCall(() => governancegroupsv2025api.createWorkgroup(requestParameters));
};
exports.createWorkgroup = createWorkgroup;
/**
 * This API deletes a Governance Group by its ID.
 * @summary Delete a Governance Group
 * @param {GovernanceGroupsV2025ApiDeleteWorkgroupRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteWorkgroup = (requestParameters, apiConfig) => {
    const governancegroupsv2025api = new sdk.GovernanceGroupsV2025Api(apiConfig);
    return handleApiCall(() => governancegroupsv2025api.deleteWorkgroup(requestParameters));
};
exports.deleteWorkgroup = deleteWorkgroup;
/**
 * This API removes one or more  members from a Governance Group.  A >  **Following field of Identity is an optional field in the request.**  >  **name**
 * @summary Remove members from Governance Group
 * @param {GovernanceGroupsV2025ApiDeleteWorkgroupMembersRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteWorkgroupMembers = (requestParameters, apiConfig) => {
    const governancegroupsv2025api = new sdk.GovernanceGroupsV2025Api(apiConfig);
    return handleApiCall(() => governancegroupsv2025api.deleteWorkgroupMembers(requestParameters));
};
exports.deleteWorkgroupMembers = deleteWorkgroupMembers;
/**
 *  This API initiates a bulk deletion of one or more Governance Groups.  >  If any of the indicated Governance Groups have one or more connections associated with it,then those Governance Groups will be added in  **inUse** list of the response. Governance Group(s) marked as **inUse** can not be deleted.  >  If any of the indicated Governance Groups is not does not exists in Organization,then those Governance Groups will be added in **notFound** list of the response. Governance Groups marked as **notFound** will not be deleted.  >  If any of the indicated Governance Groups does not have any connections associated with it,then those Governance Groups will be added in **deleted** list of the response. A Governance Group marked as **deleted** will be deleted from current Organization.  >  If the request contains any **inUse** or **notFound** Governance Group IDs then it skips only these Governance Groups for deletion and deletes the rest of Governance Groups which have no connections associated with it.   >  **This API has limit number of Governance Groups can be deleted at one time. If the request contains more then 100 Governance Groups IDs to be deleted then the API will throw an exception.**
 * @summary Delete Governance Group(s)
 * @param {GovernanceGroupsV2025ApiDeleteWorkgroupsInBulkRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteWorkgroupsInBulk = (requestParameters, apiConfig) => {
    const governancegroupsv2025api = new sdk.GovernanceGroupsV2025Api(apiConfig);
    return handleApiCall(() => governancegroupsv2025api.deleteWorkgroupsInBulk(requestParameters));
};
exports.deleteWorkgroupsInBulk = deleteWorkgroupsInBulk;
/**
 * This API returns a Governance Groups by its ID.
 * @summary Get Governance Group by Id
 * @param {GovernanceGroupsV2025ApiGetWorkgroupRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getWorkgroup = (requestParameters, apiConfig) => {
    const governancegroupsv2025api = new sdk.GovernanceGroupsV2025Api(apiConfig);
    return handleApiCall(() => governancegroupsv2025api.getWorkgroup(requestParameters));
};
exports.getWorkgroup = getWorkgroup;
/**
 * This API returns list of connections associated with a Governance Group.
 * @summary List connections for Governance Group
 * @param {GovernanceGroupsV2025ApiListConnectionsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listConnections = (requestParameters, apiConfig) => {
    const governancegroupsv2025api = new sdk.GovernanceGroupsV2025Api(apiConfig);
    return handleApiCall(() => governancegroupsv2025api.listConnections(requestParameters));
};
exports.listConnections = listConnections;
/**
 * This API returns list of members associated with a Governance Group.
 * @summary List Governance Group Members
 * @param {GovernanceGroupsV2025ApiListWorkgroupMembersRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listWorkgroupMembers = (requestParameters, apiConfig) => {
    const governancegroupsv2025api = new sdk.GovernanceGroupsV2025Api(apiConfig);
    return handleApiCall(() => governancegroupsv2025api.listWorkgroupMembers(requestParameters));
};
exports.listWorkgroupMembers = listWorkgroupMembers;
/**
 * This API returns list of Governance Groups
 * @summary List Governance Groups
 * @param {GovernanceGroupsV2025ApiListWorkgroupsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listWorkgroups = (requestParameters = {}, apiConfig) => {
    const governancegroupsv2025api = new sdk.GovernanceGroupsV2025Api(apiConfig);
    return handleApiCall(() => governancegroupsv2025api.listWorkgroups(requestParameters));
};
exports.listWorkgroups = listWorkgroups;
/**
 * This API updates an existing governance group by ID. The following fields and objects are patchable: * name * description * owner
 * @summary Patch a Governance Group
 * @param {GovernanceGroupsV2025ApiPatchWorkgroupRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchWorkgroup = (requestParameters, apiConfig) => {
    const governancegroupsv2025api = new sdk.GovernanceGroupsV2025Api(apiConfig);
    return handleApiCall(() => governancegroupsv2025api.patchWorkgroup(requestParameters));
};
exports.patchWorkgroup = patchWorkgroup;
/**
 * This API adds one or more members to a Governance Group.  A token with API, ORG_ADMIN authority is required to call this API.  >  **Following field of Identity is an optional field in the request.**  >  **name**
 * @summary Add members to Governance Group
 * @param {GovernanceGroupsV2025ApiUpdateWorkgroupMembersRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateWorkgroupMembers = (requestParameters, apiConfig) => {
    const governancegroupsv2025api = new sdk.GovernanceGroupsV2025Api(apiConfig);
    return handleApiCall(() => governancegroupsv2025api.updateWorkgroupMembers(requestParameters));
};
exports.updateWorkgroupMembers = updateWorkgroupMembers;
/**
 * This API ignores a recommended access request item. Once an item is ignored, it will be marked as ignored=true if it is still a recommended item. The consumer can decide to hide ignored recommendations.
 * @summary Ignore Access Request Recommendation
 * @param {IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsIgnoredItemRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const addAccessRequestRecommendationsIgnoredItem = (requestParameters, apiConfig) => {
    const iaiaccessrequestrecommendationsv2025api = new sdk.IAIAccessRequestRecommendationsV2025Api(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsv2025api.addAccessRequestRecommendationsIgnoredItem(requestParameters));
};
exports.addAccessRequestRecommendationsIgnoredItem = addAccessRequestRecommendationsIgnoredItem;
/**
 * This API consumes a notification that a recommended access request item was requested. This API does not actually make the request, it is just a notification. This will help provide feedback in order to improve our recommendations.
 * @summary Accept Access Request Recommendation
 * @param {IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsRequestedItemRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const addAccessRequestRecommendationsRequestedItem = (requestParameters, apiConfig) => {
    const iaiaccessrequestrecommendationsv2025api = new sdk.IAIAccessRequestRecommendationsV2025Api(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsv2025api.addAccessRequestRecommendationsRequestedItem(requestParameters));
};
exports.addAccessRequestRecommendationsRequestedItem = addAccessRequestRecommendationsRequestedItem;
/**
 * This API consumes a notification that a recommended access request item was viewed. Future recommendations with this item will be marked with viewed=true. This can be useful for the consumer to determine if there are any new/unviewed recommendations.
 * @summary Mark Viewed Access Request Recommendations
 * @param {IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsViewedItemRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const addAccessRequestRecommendationsViewedItem = (requestParameters, apiConfig) => {
    const iaiaccessrequestrecommendationsv2025api = new sdk.IAIAccessRequestRecommendationsV2025Api(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsv2025api.addAccessRequestRecommendationsViewedItem(requestParameters));
};
exports.addAccessRequestRecommendationsViewedItem = addAccessRequestRecommendationsViewedItem;
/**
 * This API consumes a notification that a set of recommended access request item were viewed. Future recommendations with these items will be marked with viewed=true. This can be useful for the consumer to determine if there are any new/unviewed recommendations.
 * @summary Bulk Mark Viewed Access Request Recommendations
 * @param {IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsViewedItemsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const addAccessRequestRecommendationsViewedItems = (requestParameters, apiConfig) => {
    const iaiaccessrequestrecommendationsv2025api = new sdk.IAIAccessRequestRecommendationsV2025Api(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsv2025api.addAccessRequestRecommendationsViewedItems(requestParameters));
};
exports.addAccessRequestRecommendationsViewedItems = addAccessRequestRecommendationsViewedItems;
/**
 * This API returns the access request recommendations for the specified identity. The default identity is *me* which indicates the current user.
 * @summary Identity Access Request Recommendations
 * @param {IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAccessRequestRecommendations = (requestParameters = {}, apiConfig) => {
    const iaiaccessrequestrecommendationsv2025api = new sdk.IAIAccessRequestRecommendationsV2025Api(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsv2025api.getAccessRequestRecommendations(requestParameters));
};
exports.getAccessRequestRecommendations = getAccessRequestRecommendations;
/**
 * This API returns the configurations for Access Request Recommender for the tenant.
 * @summary Get Access Request Recommendations config
 * @param {IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAccessRequestRecommendationsConfig = (requestParameters = {}, apiConfig) => {
    const iaiaccessrequestrecommendationsv2025api = new sdk.IAIAccessRequestRecommendationsV2025Api(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsv2025api.getAccessRequestRecommendationsConfig(requestParameters));
};
exports.getAccessRequestRecommendationsConfig = getAccessRequestRecommendationsConfig;
/**
 * This API returns the list of ignored access request recommendations.
 * @summary List Ignored Access Request Recommendations
 * @param {IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsIgnoredItemsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAccessRequestRecommendationsIgnoredItems = (requestParameters, apiConfig) => {
    const iaiaccessrequestrecommendationsv2025api = new sdk.IAIAccessRequestRecommendationsV2025Api(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsv2025api.getAccessRequestRecommendationsIgnoredItems(requestParameters));
};
exports.getAccessRequestRecommendationsIgnoredItems = getAccessRequestRecommendationsIgnoredItems;
/**
 * This API returns a list of requested access request recommendations.
 * @summary List Accepted Access Request Recommendations
 * @param {IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsRequestedItemsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAccessRequestRecommendationsRequestedItems = (requestParameters, apiConfig) => {
    const iaiaccessrequestrecommendationsv2025api = new sdk.IAIAccessRequestRecommendationsV2025Api(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsv2025api.getAccessRequestRecommendationsRequestedItems(requestParameters));
};
exports.getAccessRequestRecommendationsRequestedItems = getAccessRequestRecommendationsRequestedItems;
/**
 * This API returns the list of viewed access request recommendations.
 * @summary List Viewed Access Request Recommendations
 * @param {IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsViewedItemsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAccessRequestRecommendationsViewedItems = (requestParameters, apiConfig) => {
    const iaiaccessrequestrecommendationsv2025api = new sdk.IAIAccessRequestRecommendationsV2025Api(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsv2025api.getAccessRequestRecommendationsViewedItems(requestParameters));
};
exports.getAccessRequestRecommendationsViewedItems = getAccessRequestRecommendationsViewedItems;
/**
 * This API updates the configurations for Access Request Recommender for the tenant.
 * @summary Update Access Request Recommendations config
 * @param {IAIAccessRequestRecommendationsV2025ApiSetAccessRequestRecommendationsConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const setAccessRequestRecommendationsConfig = (requestParameters, apiConfig) => {
    const iaiaccessrequestrecommendationsv2025api = new sdk.IAIAccessRequestRecommendationsV2025Api(apiConfig);
    return handleApiCall(() => iaiaccessrequestrecommendationsv2025api.setAccessRequestRecommendationsConfig(requestParameters));
};
exports.setAccessRequestRecommendationsConfig = setAccessRequestRecommendationsConfig;
/**
 * This API is used to add roles/access profiles to the list of common access for a customer. Requires authorization scope of iai:access-modeling:create
 * @summary Create common access items
 * @param {IAICommonAccessV2025ApiCreateCommonAccessRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createCommonAccess = (requestParameters, apiConfig) => {
    const iaicommonaccessv2025api = new sdk.IAICommonAccessV2025Api(apiConfig);
    return handleApiCall(() => iaicommonaccessv2025api.createCommonAccess(requestParameters));
};
exports.createCommonAccess = createCommonAccess;
/**
 * This endpoint returns the current common access for a customer. The returned items can be filtered and sorted. Requires authorization scope of iai:access-modeling:read
 * @summary Get a paginated list of common access
 * @param {IAICommonAccessV2025ApiGetCommonAccessRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getCommonAccess = (requestParameters = {}, apiConfig) => {
    const iaicommonaccessv2025api = new sdk.IAICommonAccessV2025Api(apiConfig);
    return handleApiCall(() => iaicommonaccessv2025api.getCommonAccess(requestParameters));
};
exports.getCommonAccess = getCommonAccess;
/**
 * This submits an update request to the common access application. At this time there are no parameters. Requires authorization scope of iai:access-modeling:update
 * @summary Bulk update common access status
 * @param {IAICommonAccessV2025ApiUpdateCommonAccessStatusInBulkRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateCommonAccessStatusInBulk = (requestParameters, apiConfig) => {
    const iaicommonaccessv2025api = new sdk.IAICommonAccessV2025Api(apiConfig);
    return handleApiCall(() => iaicommonaccessv2025api.updateCommonAccessStatusInBulk(requestParameters));
};
exports.updateCommonAccessStatusInBulk = updateCommonAccessStatusInBulk;
/**
 * This API exports a list of ignored outliers to a CSV as well as list of non-ignored outliers to a CSV. These two CSVs will be zipped and exported.  Columns will include: identityId, type, firstDetectionDate, latestDetectionDate, ignored, & attributes (defined set of identity attributes).
 * @summary IAI Identity Outliers Export
 * @param {IAIOutliersV2025ApiExportOutliersZipRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const exportOutliersZip = (requestParameters = {}, apiConfig) => {
    const iaioutliersv2025api = new sdk.IAIOutliersV2025Api(apiConfig);
    return handleApiCall(() => iaioutliersv2025api.exportOutliersZip(requestParameters));
};
exports.exportOutliersZip = exportOutliersZip;
/**
 * This API returns a summary containing the number of identities that customer has, the number of outliers, and the type of outlier.
 * @summary IAI Identity Outliers Summary
 * @param {IAIOutliersV2025ApiGetIdentityOutlierSnapshotsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getIdentityOutlierSnapshots = (requestParameters = {}, apiConfig) => {
    const iaioutliersv2025api = new sdk.IAIOutliersV2025Api(apiConfig);
    return handleApiCall(() => iaioutliersv2025api.getIdentityOutlierSnapshots(requestParameters));
};
exports.getIdentityOutlierSnapshots = getIdentityOutlierSnapshots;
/**
 * This API returns a list of outliers, containing data such as identity ID, outlier type, detection dates, identity attributes, if identity is ignored, and certification information.
 * @summary IAI Get Identity Outliers
 * @param {IAIOutliersV2025ApiGetIdentityOutliersRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getIdentityOutliers = (requestParameters = {}, apiConfig) => {
    const iaioutliersv2025api = new sdk.IAIOutliersV2025Api(apiConfig);
    return handleApiCall(() => iaioutliersv2025api.getIdentityOutliers(requestParameters));
};
exports.getIdentityOutliers = getIdentityOutliers;
/**
 * This API returns a most recent snapshot of each outlier type, each containing the number of identities that customer has, the number of outliers, and the type of outlier.
 * @summary IAI Identity Outliers Latest Summary
 * @param {IAIOutliersV2025ApiGetLatestIdentityOutlierSnapshotsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getLatestIdentityOutlierSnapshots = (requestParameters = {}, apiConfig) => {
    const iaioutliersv2025api = new sdk.IAIOutliersV2025Api(apiConfig);
    return handleApiCall(() => iaioutliersv2025api.getLatestIdentityOutlierSnapshots(requestParameters));
};
exports.getLatestIdentityOutlierSnapshots = getLatestIdentityOutlierSnapshots;
/**
 * This API returns a summary of a contributing feature for an identity outlier.  The object contains: contributing feature name (translated text or message key), identity outlier display name, feature values, feature definition and explanation (translated text or message key), peer display name and identityId, access item reference, translation messages object.
 * @summary Get identity outlier contibuting feature summary
 * @param {IAIOutliersV2025ApiGetOutlierContributingFeatureSummaryRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getOutlierContributingFeatureSummary = (requestParameters, apiConfig) => {
    const iaioutliersv2025api = new sdk.IAIOutliersV2025Api(apiConfig);
    return handleApiCall(() => iaioutliersv2025api.getOutlierContributingFeatureSummary(requestParameters));
};
exports.getOutlierContributingFeatureSummary = getOutlierContributingFeatureSummary;
/**
 * This API returns a list of contributing feature objects for a single outlier.  The object contains: feature name, feature value type, value, importance, display name (translated text or message key), description (translated text or message key), translation messages object.
 * @summary Get identity outlier\'s contibuting features
 * @param {IAIOutliersV2025ApiGetPeerGroupOutliersContributingFeaturesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getPeerGroupOutliersContributingFeatures = (requestParameters, apiConfig) => {
    const iaioutliersv2025api = new sdk.IAIOutliersV2025Api(apiConfig);
    return handleApiCall(() => iaioutliersv2025api.getPeerGroupOutliersContributingFeatures(requestParameters));
};
exports.getPeerGroupOutliersContributingFeatures = getPeerGroupOutliersContributingFeatures;
/**
 * This API receives a list of identity IDs in the request, changes the outliers to be ignored.
 * @summary IAI Identity Outliers Ignore
 * @param {IAIOutliersV2025ApiIgnoreIdentityOutliersRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const ignoreIdentityOutliers = (requestParameters, apiConfig) => {
    const iaioutliersv2025api = new sdk.IAIOutliersV2025Api(apiConfig);
    return handleApiCall(() => iaioutliersv2025api.ignoreIdentityOutliers(requestParameters));
};
exports.ignoreIdentityOutliers = ignoreIdentityOutliers;
/**
 * This API returns a list of the enriched access items associated with each feature filtered by the access item type.  The object contains: accessItemId, display name (translated text or message key), description (translated text or message key), accessType, sourceName, extremelyRare.
 * @summary Gets a list of access items associated with each identity outlier contributing feature
 * @param {IAIOutliersV2025ApiListOutliersContributingFeatureAccessItemsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listOutliersContributingFeatureAccessItems = (requestParameters, apiConfig) => {
    const iaioutliersv2025api = new sdk.IAIOutliersV2025Api(apiConfig);
    return handleApiCall(() => iaioutliersv2025api.listOutliersContributingFeatureAccessItems(requestParameters));
};
exports.listOutliersContributingFeatureAccessItems = listOutliersContributingFeatureAccessItems;
/**
 * This API receives a list of identity IDs in the request, changes the outliers to be un-ignored.
 * @summary IAI Identity Outliers Unignore
 * @param {IAIOutliersV2025ApiUnIgnoreIdentityOutliersRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const unIgnoreIdentityOutliers = (requestParameters, apiConfig) => {
    const iaioutliersv2025api = new sdk.IAIOutliersV2025Api(apiConfig);
    return handleApiCall(() => iaioutliersv2025api.unIgnoreIdentityOutliers(requestParameters));
};
exports.unIgnoreIdentityOutliers = unIgnoreIdentityOutliers;
/**
 * -- Deprecated : See \'IAI Outliers\' This API will be used by Identity Governance systems to identify identities that are not included in an organization\'s peer groups. By default, 250 identities are returned. You can specify between 1 and 1000 number of identities that can be returned.
 * @summary Identity Outliers List
 * @param {IAIPeerGroupStrategiesV2025ApiGetPeerGroupOutliersRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @deprecated
 * @throws {RequiredError}
 */
const getPeerGroupOutliers = (requestParameters, apiConfig) => {
    const iaipeergroupstrategiesv2025api = new sdk.IAIPeerGroupStrategiesV2025Api(apiConfig);
    return handleApiCall(() => iaipeergroupstrategiesv2025api.getPeerGroupOutliers(requestParameters));
};
exports.getPeerGroupOutliers = getPeerGroupOutliers;
/**
 * The getRecommendations API returns recommendations based on the requested object. The recommendations are invoked by IdentityIQ and IdentityNow plug-ins that retrieve recommendations based on the performed calculations.
 * @summary Returns Recommendation Based on Object
 * @param {IAIRecommendationsV2025ApiGetRecommendationsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getRecommendations = (requestParameters, apiConfig) => {
    const iairecommendationsv2025api = new sdk.IAIRecommendationsV2025Api(apiConfig);
    return handleApiCall(() => iairecommendationsv2025api.getRecommendations(requestParameters));
};
exports.getRecommendations = getRecommendations;
/**
 * Retrieves configuration attributes used by certification recommendations.
 * @summary Get certification recommendation config values
 * @param {IAIRecommendationsV2025ApiGetRecommendationsConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getRecommendationsConfig = (requestParameters = {}, apiConfig) => {
    const iairecommendationsv2025api = new sdk.IAIRecommendationsV2025Api(apiConfig);
    return handleApiCall(() => iairecommendationsv2025api.getRecommendationsConfig(requestParameters));
};
exports.getRecommendationsConfig = getRecommendationsConfig;
/**
 * Updates configuration attributes used by certification recommendations.
 * @summary Update certification recommendation config values
 * @param {IAIRecommendationsV2025ApiUpdateRecommendationsConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateRecommendationsConfig = (requestParameters, apiConfig) => {
    const iairecommendationsv2025api = new sdk.IAIRecommendationsV2025Api(apiConfig);
    return handleApiCall(() => iairecommendationsv2025api.updateRecommendationsConfig(requestParameters));
};
exports.updateRecommendationsConfig = updateRecommendationsConfig;
/**
 * This method starts a job to provision a potential role
 * @summary Create request to provision a potential role into an actual role.
 * @param {IAIRoleMiningV2025ApiCreatePotentialRoleProvisionRequestRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createPotentialRoleProvisionRequest = (requestParameters, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.createPotentialRoleProvisionRequest(requestParameters));
};
exports.createPotentialRoleProvisionRequest = createPotentialRoleProvisionRequest;
/**
 * This submits a create role mining session request to the role mining application.
 * @summary Create a role mining session
 * @param {IAIRoleMiningV2025ApiCreateRoleMiningSessionsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createRoleMiningSessions = (requestParameters, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.createRoleMiningSessions(requestParameters));
};
exports.createRoleMiningSessions = createRoleMiningSessions;
/**
 * This endpoint downloads a completed export of information for a potential role in a role mining session.
 * @summary Export (download) details for a potential role in a role mining session
 * @param {IAIRoleMiningV2025ApiDownloadRoleMiningPotentialRoleZipRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const downloadRoleMiningPotentialRoleZip = (requestParameters, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.downloadRoleMiningPotentialRoleZip(requestParameters));
};
exports.downloadRoleMiningPotentialRoleZip = downloadRoleMiningPotentialRoleZip;
/**
 * This endpoint downloads all the information for a potential role in a role mining session. Includes identities and entitlements in the potential role.
 * @summary Export (download) details for a potential role in a role mining session
 * @param {IAIRoleMiningV2025ApiExportRoleMiningPotentialRoleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const exportRoleMiningPotentialRole = (requestParameters, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.exportRoleMiningPotentialRole(requestParameters));
};
exports.exportRoleMiningPotentialRole = exportRoleMiningPotentialRole;
/**
 * This endpoint uploads all the information for a potential role in a role mining session to S3 as a downloadable zip archive.  Includes identities and entitlements in the potential role.
 * @summary Asynchronously export details for a potential role in a role mining session and upload to S3
 * @param {IAIRoleMiningV2025ApiExportRoleMiningPotentialRoleAsyncRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const exportRoleMiningPotentialRoleAsync = (requestParameters, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.exportRoleMiningPotentialRoleAsync(requestParameters));
};
exports.exportRoleMiningPotentialRoleAsync = exportRoleMiningPotentialRoleAsync;
/**
 * This endpoint retrieves information about the current status of a potential role export.
 * @summary Retrieve status of a potential role export job
 * @param {IAIRoleMiningV2025ApiExportRoleMiningPotentialRoleStatusRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const exportRoleMiningPotentialRoleStatus = (requestParameters, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.exportRoleMiningPotentialRoleStatus(requestParameters));
};
exports.exportRoleMiningPotentialRoleStatus = exportRoleMiningPotentialRoleStatus;
/**
 * Returns all potential role summaries that match the query parameters
 * @summary Retrieves all potential role summaries
 * @param {IAIRoleMiningV2025ApiGetAllPotentialRoleSummariesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAllPotentialRoleSummaries = (requestParameters = {}, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.getAllPotentialRoleSummaries(requestParameters));
};
exports.getAllPotentialRoleSummaries = getAllPotentialRoleSummaries;
/**
 * This method returns entitlement popularity distribution for a potential role in a role mining session.
 * @summary Retrieves entitlement popularity distribution for a potential role in a role mining session
 * @param {IAIRoleMiningV2025ApiGetEntitlementDistributionPotentialRoleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getEntitlementDistributionPotentialRole = (requestParameters, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.getEntitlementDistributionPotentialRole(requestParameters));
};
exports.getEntitlementDistributionPotentialRole = getEntitlementDistributionPotentialRole;
/**
 * This method returns entitlements for a potential role in a role mining session.
 * @summary Retrieves entitlements for a potential role in a role mining session
 * @param {IAIRoleMiningV2025ApiGetEntitlementsPotentialRoleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getEntitlementsPotentialRole = (requestParameters, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.getEntitlementsPotentialRole(requestParameters));
};
exports.getEntitlementsPotentialRole = getEntitlementsPotentialRole;
/**
 * This method returns excluded entitlements for a potential role in a role mining session.
 * @summary Retrieves excluded entitlements for a potential role in a role mining session
 * @param {IAIRoleMiningV2025ApiGetExcludedEntitlementsPotentialRoleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getExcludedEntitlementsPotentialRole = (requestParameters, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.getExcludedEntitlementsPotentialRole(requestParameters));
};
exports.getExcludedEntitlementsPotentialRole = getExcludedEntitlementsPotentialRole;
/**
 * This method returns identities for a potential role in a role mining session.
 * @summary Retrieves identities for a potential role in a role mining session
 * @param {IAIRoleMiningV2025ApiGetIdentitiesPotentialRoleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getIdentitiesPotentialRole = (requestParameters, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.getIdentitiesPotentialRole(requestParameters));
};
exports.getIdentitiesPotentialRole = getIdentitiesPotentialRole;
/**
 * This method returns a specific potential role for a role mining session.
 * @summary Retrieves a specific potential role
 * @param {IAIRoleMiningV2025ApiGetPotentialRoleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getPotentialRole = (requestParameters, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.getPotentialRole(requestParameters));
};
exports.getPotentialRole = getPotentialRole;
/**
 * This method returns the applications of a potential role for a role mining session.
 * @summary Retrieves the applications of a potential role for a role mining session
 * @param {IAIRoleMiningV2025ApiGetPotentialRoleApplicationsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getPotentialRoleApplications = (requestParameters, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.getPotentialRoleApplications(requestParameters));
};
exports.getPotentialRoleApplications = getPotentialRoleApplications;
/**
 * This method returns the entitlements of a potential role for a role mining session.
 * @summary Retrieves the entitlements of a potential role for a role mining session
 * @param {IAIRoleMiningV2025ApiGetPotentialRoleEntitlementsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getPotentialRoleEntitlements = (requestParameters, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.getPotentialRoleEntitlements(requestParameters));
};
exports.getPotentialRoleEntitlements = getPotentialRoleEntitlements;
/**
 * This method returns source usageCount (as number of days in the last 90 days) for each identity in a potential role.
 * @summary Retrieves potential role source usage
 * @param {IAIRoleMiningV2025ApiGetPotentialRoleSourceIdentityUsageRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getPotentialRoleSourceIdentityUsage = (requestParameters, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.getPotentialRoleSourceIdentityUsage(requestParameters));
};
exports.getPotentialRoleSourceIdentityUsage = getPotentialRoleSourceIdentityUsage;
/**
 * This method returns the potential role summaries for a role mining session.
 * @summary Retrieves all potential role summaries
 * @param {IAIRoleMiningV2025ApiGetPotentialRoleSummariesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getPotentialRoleSummaries = (requestParameters, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.getPotentialRoleSummaries(requestParameters));
};
exports.getPotentialRoleSummaries = getPotentialRoleSummaries;
/**
 * This method returns a specific potential role.
 * @summary Retrieves a specific potential role
 * @param {IAIRoleMiningV2025ApiGetRoleMiningPotentialRoleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getRoleMiningPotentialRole = (requestParameters, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.getRoleMiningPotentialRole(requestParameters));
};
exports.getRoleMiningPotentialRole = getRoleMiningPotentialRole;
/**
 * The method retrieves a role mining session.
 * @summary Get a role mining session
 * @param {IAIRoleMiningV2025ApiGetRoleMiningSessionRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getRoleMiningSession = (requestParameters, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.getRoleMiningSession(requestParameters));
};
exports.getRoleMiningSession = getRoleMiningSession;
/**
 * This method returns a role mining session status for a customer.
 * @summary Get role mining session status state
 * @param {IAIRoleMiningV2025ApiGetRoleMiningSessionStatusRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getRoleMiningSessionStatus = (requestParameters, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.getRoleMiningSessionStatus(requestParameters));
};
exports.getRoleMiningSessionStatus = getRoleMiningSessionStatus;
/**
 * Returns all role mining sessions that match the query parameters
 * @summary Retrieves all role mining sessions
 * @param {IAIRoleMiningV2025ApiGetRoleMiningSessionsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getRoleMiningSessions = (requestParameters, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.getRoleMiningSessions(requestParameters));
};
exports.getRoleMiningSessions = getRoleMiningSessions;
/**
 * This method returns all saved potential roles (draft roles).
 * @summary Retrieves all saved potential roles
 * @param {IAIRoleMiningV2025ApiGetSavedPotentialRolesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSavedPotentialRoles = (requestParameters = {}, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.getSavedPotentialRoles(requestParameters));
};
exports.getSavedPotentialRoles = getSavedPotentialRoles;
/**
 * The method updates an existing potential role using.  The following fields can be modified:  * `description`  * `name`  * `saved`   >**NOTE: All other fields cannot be modified.**
 * @summary Update a potential role
 * @param {IAIRoleMiningV2025ApiPatchPotentialRoleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchPotentialRole = (requestParameters, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.patchPotentialRole(requestParameters));
};
exports.patchPotentialRole = patchPotentialRole;
/**
 * The method updates an existing potential role using.  The following fields can be modified:  * `description`  * `name`  * `saved`   >**NOTE: All other fields cannot be modified.**
 * @summary Update a potential role
 * @param {IAIRoleMiningV2025ApiPatchPotentialRole0Request} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchPotentialRole_1 = (requestParameters, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.patchPotentialRole_1(requestParameters));
};
exports.patchPotentialRole_1 = patchPotentialRole_1;
/**
 * The  method updates an existing role mining session using PATCH. Supports op in {\"replace\"} and changes to pruneThreshold and/or minNumIdentitiesInPotentialRole. The potential roles in this role mining session is then re-calculated.
 * @summary Patch a role mining session
 * @param {IAIRoleMiningV2025ApiPatchRoleMiningSessionRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchRoleMiningSession = (requestParameters, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.patchRoleMiningSession(requestParameters));
};
exports.patchRoleMiningSession = patchRoleMiningSession;
/**
 * This endpoint adds or removes entitlements from an exclusion list for a potential role.
 * @summary Edit entitlements for a potential role to exclude some entitlements
 * @param {IAIRoleMiningV2025ApiUpdateEntitlementsPotentialRoleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateEntitlementsPotentialRole = (requestParameters, apiConfig) => {
    const iairoleminingv2025api = new sdk.IAIRoleMiningV2025Api(apiConfig);
    return handleApiCall(() => iairoleminingv2025api.updateEntitlementsPotentialRole(requestParameters));
};
exports.updateEntitlementsPotentialRole = updateEntitlementsPotentialRole;
/**
 * This API endpoint delete an icon by object type and object id. A token with ORG_ADMIN authority is required to call this API.
 * @summary Delete an icon
 * @param {IconsV2025ApiDeleteIconRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteIcon = (requestParameters, apiConfig) => {
    const iconsv2025api = new sdk.IconsV2025Api(apiConfig);
    return handleApiCall(() => iconsv2025api.deleteIcon(requestParameters));
};
exports.deleteIcon = deleteIcon;
/**
 * This API endpoint updates an icon by object type and object id. A token with ORG_ADMIN authority is required to call this API.
 * @summary Update an icon
 * @param {IconsV2025ApiSetIconRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const setIcon = (requestParameters, apiConfig) => {
    const iconsv2025api = new sdk.IconsV2025Api(apiConfig);
    return handleApiCall(() => iconsv2025api.setIcon(requestParameters));
};
exports.setIcon = setIcon;
/**
 * The API returns successful response if the requested identity was deleted.
 * @summary Delete identity
 * @param {IdentitiesV2025ApiDeleteIdentityRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteIdentity = (requestParameters, apiConfig) => {
    const identitiesv2025api = new sdk.IdentitiesV2025Api(apiConfig);
    return handleApiCall(() => identitiesv2025api.deleteIdentity(requestParameters));
};
exports.deleteIdentity = deleteIdentity;
/**
 * This API returns a single identity using the Identity ID.
 * @summary Identity Details
 * @param {IdentitiesV2025ApiGetIdentityRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getIdentity = (requestParameters, apiConfig) => {
    const identitiesv2025api = new sdk.IdentitiesV2025Api(apiConfig);
    return handleApiCall(() => identitiesv2025api.getIdentity(requestParameters));
};
exports.getIdentity = getIdentity;
/**
 * Use this API to return an identity\'s owned objects that will cause problems for deleting the identity.  Use this API as a checklist of objects that you need to reassign to a different identity before you can delete the identity.  For a full list of objects owned by an identity, use the [Search API](https://developer.sailpoint.com/docs/api/v3/search-post/).  When you search for identities, the returned identities have a property, `owns`, that contains a more comprehensive list of identity\'s owned objects.
 * @summary Get ownership details
 * @param {IdentitiesV2025ApiGetIdentityOwnershipDetailsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getIdentityOwnershipDetails = (requestParameters, apiConfig) => {
    const identitiesv2025api = new sdk.IdentitiesV2025Api(apiConfig);
    return handleApiCall(() => identitiesv2025api.getIdentityOwnershipDetails(requestParameters));
};
exports.getIdentityOwnershipDetails = getIdentityOwnershipDetails;
/**
 *
 * @summary Role assignment details
 * @param {IdentitiesV2025ApiGetRoleAssignmentRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getRoleAssignment = (requestParameters, apiConfig) => {
    const identitiesv2025api = new sdk.IdentitiesV2025Api(apiConfig);
    return handleApiCall(() => identitiesv2025api.getRoleAssignment(requestParameters));
};
exports.getRoleAssignment = getRoleAssignment;
/**
 * This returns either a list of Role Assignments when querying with either a Role Id or Role Name, or a list of Role Assignment References if querying with only identity Id.
 * @summary List role assignments
 * @param {IdentitiesV2025ApiGetRoleAssignmentsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getRoleAssignments = (requestParameters, apiConfig) => {
    const identitiesv2025api = new sdk.IdentitiesV2025Api(apiConfig);
    return handleApiCall(() => identitiesv2025api.getRoleAssignments(requestParameters));
};
exports.getRoleAssignments = getRoleAssignments;
/**
 * This API returns a list of identities.
 * @summary List Identities
 * @param {IdentitiesV2025ApiListIdentitiesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listIdentities = (requestParameters = {}, apiConfig) => {
    const identitiesv2025api = new sdk.IdentitiesV2025Api(apiConfig);
    return handleApiCall(() => identitiesv2025api.listIdentities(requestParameters));
};
exports.listIdentities = listIdentities;
/**
 * Use this endpoint to reset a user\'s identity if they have forgotten their authentication information like their answers to knowledge-based questions. Resetting an identity de-registers the user and removes any elevated user levels they have.
 * @summary Reset an identity
 * @param {IdentitiesV2025ApiResetIdentityRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const resetIdentity = (requestParameters, apiConfig) => {
    const identitiesv2025api = new sdk.IdentitiesV2025Api(apiConfig);
    return handleApiCall(() => identitiesv2025api.resetIdentity(requestParameters));
};
exports.resetIdentity = resetIdentity;
/**
 * This API sends an email with the link to start Password Reset. After selecting the link an identity will be able to set up a new password. Emails expire after 2 hours.
 * @summary Send password reset email
 * @param {IdentitiesV2025ApiSendIdentityVerificationAccountTokenRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const sendIdentityVerificationAccountToken = (requestParameters, apiConfig) => {
    const identitiesv2025api = new sdk.IdentitiesV2025Api(apiConfig);
    return handleApiCall(() => identitiesv2025api.sendIdentityVerificationAccountToken(requestParameters));
};
exports.sendIdentityVerificationAccountToken = sendIdentityVerificationAccountToken;
/**
 * This API submits a task for inviting given identities via email to complete registration. The invitation email will include the link. After selecting the link an identity will be able to set up password and log in into the system. Invitations expire after 7 days. By default invitations send to the work identity email. It can be changed in Admin > Identities > Identity Profiles by selecting corresponding profile and editing Invitation Options.  This task will send an invitation email only for unregistered identities.  The executed task status can be checked by Task Management > [Get task status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status).
 * @summary Invite identities to register
 * @param {IdentitiesV2025ApiStartIdentitiesInviteRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const startIdentitiesInvite = (requestParameters, apiConfig) => {
    const identitiesv2025api = new sdk.IdentitiesV2025Api(apiConfig);
    return handleApiCall(() => identitiesv2025api.startIdentitiesInvite(requestParameters));
};
exports.startIdentitiesInvite = startIdentitiesInvite;
/**
 * This operation should not be used to schedule your own identity processing or to perform system wide identity refreshes. The system will use a combination of [event-based processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#event-based-processing) and [scheduled processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#scheduled-processing) that runs every day at 8:00 AM and 8:00 PM in the tenant\'s timezone to keep your identities synchronized.   This endpoint will perform the following tasks: 1. Calculate identity attributes, including applying or running any rules or transforms (e.g. calculate Lifecycle State at a point-in-time it\'s expected to change). 2. Evaluate role assignments, leading to assignment of new roles and removal of existing roles. 3. Enforce provisioning for any assigned accesses that haven\'t been fulfilled (e.g. failure due to source health). 4. Recalculate manager relationships. 5. Potentially clean-up identity processing errors, assuming the error has been resolved.
 * @summary Process a list of identityIds
 * @param {IdentitiesV2025ApiStartIdentityProcessingRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const startIdentityProcessing = (requestParameters, apiConfig) => {
    const identitiesv2025api = new sdk.IdentitiesV2025Api(apiConfig);
    return handleApiCall(() => identitiesv2025api.startIdentityProcessing(requestParameters));
};
exports.startIdentityProcessing = startIdentityProcessing;
/**
 * This end-point performs attribute synchronization for a selected identity. The endpoint can be called once in 10 seconds per identity.
 * @summary Attribute synchronization for single identity.
 * @param {IdentitiesV2025ApiSynchronizeAttributesForIdentityRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const synchronizeAttributesForIdentity = (requestParameters, apiConfig) => {
    const identitiesv2025api = new sdk.IdentitiesV2025Api(apiConfig);
    return handleApiCall(() => identitiesv2025api.synchronizeAttributesForIdentity(requestParameters));
};
exports.synchronizeAttributesForIdentity = synchronizeAttributesForIdentity;
/**
 * Use this API to create a new identity attribute.
 * @summary Create Identity Attribute
 * @param {IdentityAttributesV2025ApiCreateIdentityAttributeRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createIdentityAttribute = (requestParameters, apiConfig) => {
    const identityattributesv2025api = new sdk.IdentityAttributesV2025Api(apiConfig);
    return handleApiCall(() => identityattributesv2025api.createIdentityAttribute(requestParameters));
};
exports.createIdentityAttribute = createIdentityAttribute;
/**
 * This deletes an identity attribute with the given name.  The `system` and `standard` properties must be set to false before you can delete an identity attribute.
 * @summary Delete Identity Attribute
 * @param {IdentityAttributesV2025ApiDeleteIdentityAttributeRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteIdentityAttribute = (requestParameters, apiConfig) => {
    const identityattributesv2025api = new sdk.IdentityAttributesV2025Api(apiConfig);
    return handleApiCall(() => identityattributesv2025api.deleteIdentityAttribute(requestParameters));
};
exports.deleteIdentityAttribute = deleteIdentityAttribute;
/**
 * Use this API to bulk delete identity attributes for a given set of names. Attributes that are currently mapped in an identity profile cannot be deleted.  The `system` and `standard` properties must be set to \'false\' before you can delete an identity attribute.
 * @summary Bulk delete Identity Attributes
 * @param {IdentityAttributesV2025ApiDeleteIdentityAttributesInBulkRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteIdentityAttributesInBulk = (requestParameters, apiConfig) => {
    const identityattributesv2025api = new sdk.IdentityAttributesV2025Api(apiConfig);
    return handleApiCall(() => identityattributesv2025api.deleteIdentityAttributesInBulk(requestParameters));
};
exports.deleteIdentityAttributesInBulk = deleteIdentityAttributesInBulk;
/**
 * This gets an identity attribute for a given technical name.
 * @summary Get Identity Attribute
 * @param {IdentityAttributesV2025ApiGetIdentityAttributeRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getIdentityAttribute = (requestParameters, apiConfig) => {
    const identityattributesv2025api = new sdk.IdentityAttributesV2025Api(apiConfig);
    return handleApiCall(() => identityattributesv2025api.getIdentityAttribute(requestParameters));
};
exports.getIdentityAttribute = getIdentityAttribute;
/**
 * Use this API to get a collection of identity attributes.
 * @summary List Identity Attributes
 * @param {IdentityAttributesV2025ApiListIdentityAttributesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listIdentityAttributes = (requestParameters = {}, apiConfig) => {
    const identityattributesv2025api = new sdk.IdentityAttributesV2025Api(apiConfig);
    return handleApiCall(() => identityattributesv2025api.listIdentityAttributes(requestParameters));
};
exports.listIdentityAttributes = listIdentityAttributes;
/**
 * This updates an existing identity attribute.  Making an attribute searchable requires that the `system`, `standard`, and `multi` properties be set to false.
 * @summary Update Identity Attribute
 * @param {IdentityAttributesV2025ApiPutIdentityAttributeRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putIdentityAttribute = (requestParameters, apiConfig) => {
    const identityattributesv2025api = new sdk.IdentityAttributesV2025Api(apiConfig);
    return handleApiCall(() => identityattributesv2025api.putIdentityAttribute(requestParameters));
};
exports.putIdentityAttribute = putIdentityAttribute;
/**
 * This method gets a difference of count for each access item types for the given identity between 2 snapshots Requires authorization scope of \'idn:identity-history:read\'
 * @summary Gets a difference of count for each access item types for the given identity between 2 snapshots
 * @param {IdentityHistoryV2025ApiCompareIdentitySnapshotsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const compareIdentitySnapshots = (requestParameters, apiConfig) => {
    const identityhistoryv2025api = new sdk.IdentityHistoryV2025Api(apiConfig);
    return handleApiCall(() => identityhistoryv2025api.compareIdentitySnapshots(requestParameters));
};
exports.compareIdentitySnapshots = compareIdentitySnapshots;
/**
 * This method gets a list of differences of specific accessType for the given identity between 2 snapshots Requires authorization scope of \'idn:identity-history:read\'
 * @summary Gets a list of differences of specific accessType for the given identity between 2 snapshots
 * @param {IdentityHistoryV2025ApiCompareIdentitySnapshotsAccessTypeRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const compareIdentitySnapshotsAccessType = (requestParameters, apiConfig) => {
    const identityhistoryv2025api = new sdk.IdentityHistoryV2025Api(apiConfig);
    return handleApiCall(() => identityhistoryv2025api.compareIdentitySnapshotsAccessType(requestParameters));
};
exports.compareIdentitySnapshotsAccessType = compareIdentitySnapshotsAccessType;
/**
 * This method retrieves a specified identity Requires authorization scope of \'idn:identity-history:read\'
 * @summary Get latest snapshot of identity
 * @param {IdentityHistoryV2025ApiGetHistoricalIdentityRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getHistoricalIdentity = (requestParameters, apiConfig) => {
    const identityhistoryv2025api = new sdk.IdentityHistoryV2025Api(apiConfig);
    return handleApiCall(() => identityhistoryv2025api.getHistoricalIdentity(requestParameters));
};
exports.getHistoricalIdentity = getHistoricalIdentity;
/**
 * This method retrieves all access events for the identity Requires authorization scope of \'idn:identity-history:read\'
 * @summary Lists all events for the given identity
 * @param {IdentityHistoryV2025ApiGetHistoricalIdentityEventsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getHistoricalIdentityEvents = (requestParameters, apiConfig) => {
    const identityhistoryv2025api = new sdk.IdentityHistoryV2025Api(apiConfig);
    return handleApiCall(() => identityhistoryv2025api.getHistoricalIdentityEvents(requestParameters));
};
exports.getHistoricalIdentityEvents = getHistoricalIdentityEvents;
/**
 * This method retrieves a specified identity snapshot at a given date Requires authorization scope of \'idn:identity-history:read\'
 * @summary Gets an identity snapshot at a given date
 * @param {IdentityHistoryV2025ApiGetIdentitySnapshotRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getIdentitySnapshot = (requestParameters, apiConfig) => {
    const identityhistoryv2025api = new sdk.IdentityHistoryV2025Api(apiConfig);
    return handleApiCall(() => identityhistoryv2025api.getIdentitySnapshot(requestParameters));
};
exports.getIdentitySnapshot = getIdentitySnapshot;
/**
 * This method gets the summary for the event count for a specific identity by month/day Requires authorization scope of \'idn:identity-history:read\'
 * @summary Gets the summary for the event count for a specific identity
 * @param {IdentityHistoryV2025ApiGetIdentitySnapshotSummaryRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getIdentitySnapshotSummary = (requestParameters, apiConfig) => {
    const identityhistoryv2025api = new sdk.IdentityHistoryV2025Api(apiConfig);
    return handleApiCall(() => identityhistoryv2025api.getIdentitySnapshotSummary(requestParameters));
};
exports.getIdentitySnapshotSummary = getIdentitySnapshotSummary;
/**
 * This method retrieves start date of the identity Requires authorization scope of \'idn:identity-history:read\'
 * @summary Gets the start date of the identity
 * @param {IdentityHistoryV2025ApiGetIdentityStartDateRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getIdentityStartDate = (requestParameters, apiConfig) => {
    const identityhistoryv2025api = new sdk.IdentityHistoryV2025Api(apiConfig);
    return handleApiCall(() => identityhistoryv2025api.getIdentityStartDate(requestParameters));
};
exports.getIdentityStartDate = getIdentityStartDate;
/**
 * This gets the list of identities for the customer. This list end point does not support count=true request param. The total  count of identities would never be returned even if the count param is specified in the request Requires authorization scope of \'idn:identity-history:read\'
 * @summary Lists all the identities
 * @param {IdentityHistoryV2025ApiListHistoricalIdentitiesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listHistoricalIdentities = (requestParameters = {}, apiConfig) => {
    const identityhistoryv2025api = new sdk.IdentityHistoryV2025Api(apiConfig);
    return handleApiCall(() => identityhistoryv2025api.listHistoricalIdentities(requestParameters));
};
exports.listHistoricalIdentities = listHistoricalIdentities;
/**
 * This method retrieves a list of access item for the identity filtered by the access item type
 * @summary List Access Items by Identity
 * @param {IdentityHistoryV2025ApiListIdentityAccessItemsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listIdentityAccessItems = (requestParameters, apiConfig) => {
    const identityhistoryv2025api = new sdk.IdentityHistoryV2025Api(apiConfig);
    return handleApiCall(() => identityhistoryv2025api.listIdentityAccessItems(requestParameters));
};
exports.listIdentityAccessItems = listIdentityAccessItems;
/**
 * This method retrieves the list of identity access items at a given date filterd by item type Requires authorization scope of \'idn:identity-history:read\'
 * @summary Gets the list of identity access items at a given date filterd by item type
 * @param {IdentityHistoryV2025ApiListIdentitySnapshotAccessItemsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listIdentitySnapshotAccessItems = (requestParameters, apiConfig) => {
    const identityhistoryv2025api = new sdk.IdentityHistoryV2025Api(apiConfig);
    return handleApiCall(() => identityhistoryv2025api.listIdentitySnapshotAccessItems(requestParameters));
};
exports.listIdentitySnapshotAccessItems = listIdentitySnapshotAccessItems;
/**
 * This method retrieves all the snapshots for the identity Requires authorization scope of \'idn:identity-history:read\'
 * @summary Lists all the snapshots for the identity
 * @param {IdentityHistoryV2025ApiListIdentitySnapshotsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listIdentitySnapshots = (requestParameters, apiConfig) => {
    const identityhistoryv2025api = new sdk.IdentityHistoryV2025Api(apiConfig);
    return handleApiCall(() => identityhistoryv2025api.listIdentitySnapshots(requestParameters));
};
exports.listIdentitySnapshots = listIdentitySnapshots;
/**
 * Creates an identity profile.
 * @summary Create Identity Profile
 * @param {IdentityProfilesV2025ApiCreateIdentityProfileRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createIdentityProfile = (requestParameters, apiConfig) => {
    const identityprofilesv2025api = new sdk.IdentityProfilesV2025Api(apiConfig);
    return handleApiCall(() => identityprofilesv2025api.createIdentityProfile(requestParameters));
};
exports.createIdentityProfile = createIdentityProfile;
/**
 * Delete an identity profile by ID. On success, this endpoint will return a reference to the bulk delete task result.
 * @summary Delete Identity Profile
 * @param {IdentityProfilesV2025ApiDeleteIdentityProfileRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteIdentityProfile = (requestParameters, apiConfig) => {
    const identityprofilesv2025api = new sdk.IdentityProfilesV2025Api(apiConfig);
    return handleApiCall(() => identityprofilesv2025api.deleteIdentityProfile(requestParameters));
};
exports.deleteIdentityProfile = deleteIdentityProfile;
/**
 * This deletes multiple Identity Profiles via a list of supplied IDs.  On success, this endpoint will return a reference to the bulk delete task result.  The following rights are required to access this endpoint: idn:identity-profile:delete
 * @summary Delete Identity Profiles
 * @param {IdentityProfilesV2025ApiDeleteIdentityProfilesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteIdentityProfiles = (requestParameters, apiConfig) => {
    const identityprofilesv2025api = new sdk.IdentityProfilesV2025Api(apiConfig);
    return handleApiCall(() => identityprofilesv2025api.deleteIdentityProfiles(requestParameters));
};
exports.deleteIdentityProfiles = deleteIdentityProfiles;
/**
 * This exports existing identity profiles in the format specified by the sp-config service.
 * @summary Export Identity Profiles
 * @param {IdentityProfilesV2025ApiExportIdentityProfilesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const exportIdentityProfiles = (requestParameters = {}, apiConfig) => {
    const identityprofilesv2025api = new sdk.IdentityProfilesV2025Api(apiConfig);
    return handleApiCall(() => identityprofilesv2025api.exportIdentityProfiles(requestParameters));
};
exports.exportIdentityProfiles = exportIdentityProfiles;
/**
 * This generates a non-persisted IdentityDetails object that will represent as the preview of the identities attribute when the given policy\'\'s attribute config is applied.
 * @summary Generate Identity Profile Preview
 * @param {IdentityProfilesV2025ApiGenerateIdentityPreviewRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const generateIdentityPreview = (requestParameters, apiConfig) => {
    const identityprofilesv2025api = new sdk.IdentityProfilesV2025Api(apiConfig);
    return handleApiCall(() => identityprofilesv2025api.generateIdentityPreview(requestParameters));
};
exports.generateIdentityPreview = generateIdentityPreview;
/**
 * This returns the default identity attribute config.
 * @summary Get default Identity Attribute Config
 * @param {IdentityProfilesV2025ApiGetDefaultIdentityAttributeConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getDefaultIdentityAttributeConfig = (requestParameters, apiConfig) => {
    const identityprofilesv2025api = new sdk.IdentityProfilesV2025Api(apiConfig);
    return handleApiCall(() => identityprofilesv2025api.getDefaultIdentityAttributeConfig(requestParameters));
};
exports.getDefaultIdentityAttributeConfig = getDefaultIdentityAttributeConfig;
/**
 * Get a single identity profile by ID.
 * @summary Get Identity Profile
 * @param {IdentityProfilesV2025ApiGetIdentityProfileRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getIdentityProfile = (requestParameters, apiConfig) => {
    const identityprofilesv2025api = new sdk.IdentityProfilesV2025Api(apiConfig);
    return handleApiCall(() => identityprofilesv2025api.getIdentityProfile(requestParameters));
};
exports.getIdentityProfile = getIdentityProfile;
/**
 * This imports previously exported identity profiles.
 * @summary Import Identity Profiles
 * @param {IdentityProfilesV2025ApiImportIdentityProfilesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const importIdentityProfiles = (requestParameters, apiConfig) => {
    const identityprofilesv2025api = new sdk.IdentityProfilesV2025Api(apiConfig);
    return handleApiCall(() => identityprofilesv2025api.importIdentityProfiles(requestParameters));
};
exports.importIdentityProfiles = importIdentityProfiles;
/**
 * Get a list of identity profiles, based on the specified query parameters.
 * @summary List Identity Profiles
 * @param {IdentityProfilesV2025ApiListIdentityProfilesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listIdentityProfiles = (requestParameters = {}, apiConfig) => {
    const identityprofilesv2025api = new sdk.IdentityProfilesV2025Api(apiConfig);
    return handleApiCall(() => identityprofilesv2025api.listIdentityProfiles(requestParameters));
};
exports.listIdentityProfiles = listIdentityProfiles;
/**
 * Process identities under the profile This operation should not be used to schedule your own identity processing or to perform system wide identity refreshes. The system will use a combination of [event-based processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#event-based-processing) and [scheduled processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#scheduled-processing) that runs every day at 8:00 AM and 8:00 PM in the tenant\'s timezone to keep your identities synchronized.  This should only be run on identity profiles that have the `identityRefreshRequired` attribute set to `true`. If `identityRefreshRequired` is false, then there is no benefit to running this operation. Typically, this operation is performed when a change is made to the identity profile or its related lifecycle states that requires a refresh. This operation will perform the following activities on all identities under the identity profile. 1. Updates identity attribute according to the identity profile mappings. 2. Determines the identity\'s correct manager through manager correlation. 3. Updates the identity\'s access according to their assigned lifecycle state. 4. Updates the identity\'s access based on role assignment criteria.
 * @summary Process identities under profile
 * @param {IdentityProfilesV2025ApiSyncIdentityProfileRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const syncIdentityProfile = (requestParameters, apiConfig) => {
    const identityprofilesv2025api = new sdk.IdentityProfilesV2025Api(apiConfig);
    return handleApiCall(() => identityprofilesv2025api.syncIdentityProfile(requestParameters));
};
exports.syncIdentityProfile = syncIdentityProfile;
/**
 * Update a specified identity profile with this PATCH request.    You cannot update these fields: * id * created * modified * identityCount * identityRefreshRequired * Authoritative Source and Identity Attribute Configuration cannot be modified at the same time.
 * @summary Update Identity Profile
 * @param {IdentityProfilesV2025ApiUpdateIdentityProfileRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateIdentityProfile = (requestParameters, apiConfig) => {
    const identityprofilesv2025api = new sdk.IdentityProfilesV2025Api(apiConfig);
    return handleApiCall(() => identityprofilesv2025api.updateIdentityProfile(requestParameters));
};
exports.updateIdentityProfile = updateIdentityProfile;
/**
 * Use this endpoint to create a lifecycle state.
 * @summary Create Lifecycle State
 * @param {LifecycleStatesV2025ApiCreateLifecycleStateRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createLifecycleState = (requestParameters, apiConfig) => {
    const lifecyclestatesv2025api = new sdk.LifecycleStatesV2025Api(apiConfig);
    return handleApiCall(() => lifecyclestatesv2025api.createLifecycleState(requestParameters));
};
exports.createLifecycleState = createLifecycleState;
/**
 * Use this endpoint to delete the lifecycle state by its ID.
 * @summary Delete Lifecycle State
 * @param {LifecycleStatesV2025ApiDeleteLifecycleStateRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteLifecycleState = (requestParameters, apiConfig) => {
    const lifecyclestatesv2025api = new sdk.LifecycleStatesV2025Api(apiConfig);
    return handleApiCall(() => lifecyclestatesv2025api.deleteLifecycleState(requestParameters));
};
exports.deleteLifecycleState = deleteLifecycleState;
/**
 * Use this endpoint to get a lifecycle state by its ID and its associated identity profile ID.
 * @summary Get Lifecycle State
 * @param {LifecycleStatesV2025ApiGetLifecycleStateRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getLifecycleState = (requestParameters, apiConfig) => {
    const lifecyclestatesv2025api = new sdk.LifecycleStatesV2025Api(apiConfig);
    return handleApiCall(() => lifecyclestatesv2025api.getLifecycleState(requestParameters));
};
exports.getLifecycleState = getLifecycleState;
/**
 * Use this endpoint to list all lifecycle states by their associated identity profiles.
 * @summary Lists LifecycleStates
 * @param {LifecycleStatesV2025ApiGetLifecycleStatesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getLifecycleStates = (requestParameters, apiConfig) => {
    const lifecyclestatesv2025api = new sdk.LifecycleStatesV2025Api(apiConfig);
    return handleApiCall(() => lifecyclestatesv2025api.getLifecycleStates(requestParameters));
};
exports.getLifecycleStates = getLifecycleStates;
/**
 * Use this API to set/update an identity\'s lifecycle state to the one provided and update the corresponding identity profile.
 * @summary Set Lifecycle State
 * @param {LifecycleStatesV2025ApiSetLifecycleStateRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const setLifecycleState = (requestParameters, apiConfig) => {
    const lifecyclestatesv2025api = new sdk.LifecycleStatesV2025Api(apiConfig);
    return handleApiCall(() => lifecyclestatesv2025api.setLifecycleState(requestParameters));
};
exports.setLifecycleState = setLifecycleState;
/**
 * Use this endpoint to update individual lifecycle state fields, using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 * @summary Update Lifecycle State
 * @param {LifecycleStatesV2025ApiUpdateLifecycleStatesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateLifecycleStates = (requestParameters, apiConfig) => {
    const lifecyclestatesv2025api = new sdk.LifecycleStatesV2025Api(apiConfig);
    return handleApiCall(() => lifecyclestatesv2025api.updateLifecycleStates(requestParameters));
};
exports.updateLifecycleStates = updateLifecycleStates;
/**
 * This API returns the configuration of an Duo MFA method.
 * @summary Configuration of Duo MFA method
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getMFADuoConfig = (apiConfig) => {
    const mfaconfigurationv2025api = new sdk.MFAConfigurationV2025Api(apiConfig);
    return handleApiCall(() => mfaconfigurationv2025api.getMFADuoConfig());
};
exports.getMFADuoConfig = getMFADuoConfig;
/**
 * This API returns the KBA configuration for MFA.
 * @summary Configuration of KBA MFA method
 * @param {MFAConfigurationV2025ApiGetMFAKbaConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getMFAKbaConfig = (requestParameters = {}, apiConfig) => {
    const mfaconfigurationv2025api = new sdk.MFAConfigurationV2025Api(apiConfig);
    return handleApiCall(() => mfaconfigurationv2025api.getMFAKbaConfig(requestParameters));
};
exports.getMFAKbaConfig = getMFAKbaConfig;
/**
 * This API returns the configuration of an Okta MFA method.
 * @summary Configuration of Okta MFA method
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getMFAOktaConfig = (apiConfig) => {
    const mfaconfigurationv2025api = new sdk.MFAConfigurationV2025Api(apiConfig);
    return handleApiCall(() => mfaconfigurationv2025api.getMFAOktaConfig());
};
exports.getMFAOktaConfig = getMFAOktaConfig;
/**
 * This API sets the configuration of an Duo MFA method.
 * @summary Set Duo MFA configuration
 * @param {MFAConfigurationV2025ApiSetMFADuoConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const setMFADuoConfig = (requestParameters, apiConfig) => {
    const mfaconfigurationv2025api = new sdk.MFAConfigurationV2025Api(apiConfig);
    return handleApiCall(() => mfaconfigurationv2025api.setMFADuoConfig(requestParameters));
};
exports.setMFADuoConfig = setMFADuoConfig;
/**
 * This API sets answers to challenge questions.  Any configured questions omitted from the request are removed from user KBA configuration.
 * @summary Set MFA KBA configuration
 * @param {MFAConfigurationV2025ApiSetMFAKBAConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const setMFAKBAConfig = (requestParameters, apiConfig) => {
    const mfaconfigurationv2025api = new sdk.MFAConfigurationV2025Api(apiConfig);
    return handleApiCall(() => mfaconfigurationv2025api.setMFAKBAConfig(requestParameters));
};
exports.setMFAKBAConfig = setMFAKBAConfig;
/**
 * This API sets the configuration of an Okta MFA method.
 * @summary Set Okta MFA configuration
 * @param {MFAConfigurationV2025ApiSetMFAOktaConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const setMFAOktaConfig = (requestParameters, apiConfig) => {
    const mfaconfigurationv2025api = new sdk.MFAConfigurationV2025Api(apiConfig);
    return handleApiCall(() => mfaconfigurationv2025api.setMFAOktaConfig(requestParameters));
};
exports.setMFAOktaConfig = setMFAOktaConfig;
/**
 * This API validates that the configuration is valid and will properly authenticate with the MFA provider identified by the method path parameter.
 * @summary MFA method\'s test configuration
 * @param {MFAConfigurationV2025ApiTestMFAConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const testMFAConfig = (requestParameters, apiConfig) => {
    const mfaconfigurationv2025api = new sdk.MFAConfigurationV2025Api(apiConfig);
    return handleApiCall(() => mfaconfigurationv2025api.testMFAConfig(requestParameters));
};
exports.testMFAConfig = testMFAConfig;
/**
 * Use this API to return the details for a single machine account by its ID.
 * @summary Machine Account Details
 * @param {MachineAccountsV2025ApiGetMachineAccountRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getMachineAccount = (requestParameters, apiConfig) => {
    const machineaccountsv2025api = new sdk.MachineAccountsV2025Api(apiConfig);
    return handleApiCall(() => machineaccountsv2025api.getMachineAccount(requestParameters));
};
exports.getMachineAccount = getMachineAccount;
/**
 * This returns a list of machine accounts.
 * @summary Machine Accounts List
 * @param {MachineAccountsV2025ApiListMachineAccountsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listMachineAccounts = (requestParameters = {}, apiConfig) => {
    const machineaccountsv2025api = new sdk.MachineAccountsV2025Api(apiConfig);
    return handleApiCall(() => machineaccountsv2025api.listMachineAccounts(requestParameters));
};
exports.listMachineAccounts = listMachineAccounts;
/**
 * Use this API to update machine accounts details.
 * @summary Update a Machine Account
 * @param {MachineAccountsV2025ApiUpdateMachineAccountRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateMachineAccount = (requestParameters, apiConfig) => {
    const machineaccountsv2025api = new sdk.MachineAccountsV2025Api(apiConfig);
    return handleApiCall(() => machineaccountsv2025api.updateMachineAccount(requestParameters));
};
exports.updateMachineAccount = updateMachineAccount;
/**
 * Use this API to create a machine identity. The maximum supported length for the description field is 2000 characters.
 * @summary Create Machine Identities
 * @param {MachineIdentitiesV2025ApiCreateMachineIdentityRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createMachineIdentity = (requestParameters, apiConfig) => {
    const machineidentitiesv2025api = new sdk.MachineIdentitiesV2025Api(apiConfig);
    return handleApiCall(() => machineidentitiesv2025api.createMachineIdentity(requestParameters));
};
exports.createMachineIdentity = createMachineIdentity;
/**
 * The API returns successful response if the requested machine identity was deleted.
 * @summary Delete machine identity
 * @param {MachineIdentitiesV2025ApiDeleteMachineIdentityRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteMachineIdentity = (requestParameters, apiConfig) => {
    const machineidentitiesv2025api = new sdk.MachineIdentitiesV2025Api(apiConfig);
    return handleApiCall(() => machineidentitiesv2025api.deleteMachineIdentity(requestParameters));
};
exports.deleteMachineIdentity = deleteMachineIdentity;
/**
 * This API returns a single machine identity using the Machine Identity ID.
 * @summary Machine Identity Details
 * @param {MachineIdentitiesV2025ApiGetMachineIdentityRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getMachineIdentity = (requestParameters, apiConfig) => {
    const machineidentitiesv2025api = new sdk.MachineIdentitiesV2025Api(apiConfig);
    return handleApiCall(() => machineidentitiesv2025api.getMachineIdentity(requestParameters));
};
exports.getMachineIdentity = getMachineIdentity;
/**
 * This API returns a list of machine identities.
 * @summary List Machine Identities
 * @param {MachineIdentitiesV2025ApiListMachineIdentitiesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listMachineIdentities = (requestParameters = {}, apiConfig) => {
    const machineidentitiesv2025api = new sdk.MachineIdentitiesV2025Api(apiConfig);
    return handleApiCall(() => machineidentitiesv2025api.listMachineIdentities(requestParameters));
};
exports.listMachineIdentities = listMachineIdentities;
/**
 * Use this API to update machine identity details.
 * @summary Update a Machine Identity
 * @param {MachineIdentitiesV2025ApiUpdateMachineIdentityRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateMachineIdentity = (requestParameters, apiConfig) => {
    const machineidentitiesv2025api = new sdk.MachineIdentitiesV2025Api(apiConfig);
    return handleApiCall(() => machineidentitiesv2025api.updateMachineIdentity(requestParameters));
};
exports.updateMachineIdentity = updateMachineIdentity;
/**
 * Create a new managed client. The API returns a result that includes the managed client ID.
 * @summary Create Managed Client
 * @param {ManagedClientsV2025ApiCreateManagedClientRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createManagedClient = (requestParameters, apiConfig) => {
    const managedclientsv2025api = new sdk.ManagedClientsV2025Api(apiConfig);
    return handleApiCall(() => managedclientsv2025api.createManagedClient(requestParameters));
};
exports.createManagedClient = createManagedClient;
/**
 * Delete an existing managed client.
 * @summary Delete Managed Client
 * @param {ManagedClientsV2025ApiDeleteManagedClientRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteManagedClient = (requestParameters, apiConfig) => {
    const managedclientsv2025api = new sdk.ManagedClientsV2025Api(apiConfig);
    return handleApiCall(() => managedclientsv2025api.deleteManagedClient(requestParameters));
};
exports.deleteManagedClient = deleteManagedClient;
/**
 * Get managed client by ID.
 * @summary Get Managed Client
 * @param {ManagedClientsV2025ApiGetManagedClientRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getManagedClient = (requestParameters, apiConfig) => {
    const managedclientsv2025api = new sdk.ManagedClientsV2025Api(apiConfig);
    return handleApiCall(() => managedclientsv2025api.getManagedClient(requestParameters));
};
exports.getManagedClient = getManagedClient;
/**
 * Get a managed client\'s status, using its ID.
 * @summary Get Managed Client Status
 * @param {ManagedClientsV2025ApiGetManagedClientStatusRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getManagedClientStatus = (requestParameters, apiConfig) => {
    const managedclientsv2025api = new sdk.ManagedClientsV2025Api(apiConfig);
    return handleApiCall(() => managedclientsv2025api.getManagedClientStatus(requestParameters));
};
exports.getManagedClientStatus = getManagedClientStatus;
/**
 * List managed clients.
 * @summary Get Managed Clients
 * @param {ManagedClientsV2025ApiGetManagedClientsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getManagedClients = (requestParameters = {}, apiConfig) => {
    const managedclientsv2025api = new sdk.ManagedClientsV2025Api(apiConfig);
    return handleApiCall(() => managedclientsv2025api.getManagedClients(requestParameters));
};
exports.getManagedClients = getManagedClients;
/**
 * Update an existing managed client.
 * @summary Update Managed Client
 * @param {ManagedClientsV2025ApiUpdateManagedClientRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateManagedClient = (requestParameters, apiConfig) => {
    const managedclientsv2025api = new sdk.ManagedClientsV2025Api(apiConfig);
    return handleApiCall(() => managedclientsv2025api.updateManagedClient(requestParameters));
};
exports.updateManagedClient = updateManagedClient;
/**
 * Create a new Managed Cluster Type.  The API returns a result that includes the Managed Cluster Type ID
 * @summary Create new Managed Cluster Type
 * @param {ManagedClusterTypesV2025ApiCreateManagedClusterTypeRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createManagedClusterType = (requestParameters, apiConfig) => {
    const managedclustertypesv2025api = new sdk.ManagedClusterTypesV2025Api(apiConfig);
    return handleApiCall(() => managedclustertypesv2025api.createManagedClusterType(requestParameters));
};
exports.createManagedClusterType = createManagedClusterType;
/**
 * Delete an existing Managed Cluster Type.
 * @summary Delete a Managed Cluster Type
 * @param {ManagedClusterTypesV2025ApiDeleteManagedClusterTypeRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteManagedClusterType = (requestParameters, apiConfig) => {
    const managedclustertypesv2025api = new sdk.ManagedClusterTypesV2025Api(apiConfig);
    return handleApiCall(() => managedclustertypesv2025api.deleteManagedClusterType(requestParameters));
};
exports.deleteManagedClusterType = deleteManagedClusterType;
/**
 * Get a Managed Cluster Type.
 * @summary Get a Managed Cluster Type
 * @param {ManagedClusterTypesV2025ApiGetManagedClusterTypeRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getManagedClusterType = (requestParameters, apiConfig) => {
    const managedclustertypesv2025api = new sdk.ManagedClusterTypesV2025Api(apiConfig);
    return handleApiCall(() => managedclustertypesv2025api.getManagedClusterType(requestParameters));
};
exports.getManagedClusterType = getManagedClusterType;
/**
 * Get a list of Managed Cluster Types.
 * @summary List Managed Cluster Types
 * @param {ManagedClusterTypesV2025ApiGetManagedClusterTypesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getManagedClusterTypes = (requestParameters = {}, apiConfig) => {
    const managedclustertypesv2025api = new sdk.ManagedClusterTypesV2025Api(apiConfig);
    return handleApiCall(() => managedclustertypesv2025api.getManagedClusterTypes(requestParameters));
};
exports.getManagedClusterTypes = getManagedClusterTypes;
/**
 * Update an existing Managed Cluster Type.
 * @summary Update a Managed Cluster Type
 * @param {ManagedClusterTypesV2025ApiUpdateManagedClusterTypeRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateManagedClusterType = (requestParameters, apiConfig) => {
    const managedclustertypesv2025api = new sdk.ManagedClusterTypesV2025Api(apiConfig);
    return handleApiCall(() => managedclustertypesv2025api.updateManagedClusterType(requestParameters));
};
exports.updateManagedClusterType = updateManagedClusterType;
/**
 * Create a new Managed Cluster. The API returns a result that includes the managed cluster ID.
 * @summary Create Create Managed Cluster
 * @param {ManagedClustersV2025ApiCreateManagedClusterRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createManagedCluster = (requestParameters, apiConfig) => {
    const managedclustersv2025api = new sdk.ManagedClustersV2025Api(apiConfig);
    return handleApiCall(() => managedclustersv2025api.createManagedCluster(requestParameters));
};
exports.createManagedCluster = createManagedCluster;
/**
 * Delete an existing managed cluster.
 * @summary Delete Managed Cluster
 * @param {ManagedClustersV2025ApiDeleteManagedClusterRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteManagedCluster = (requestParameters, apiConfig) => {
    const managedclustersv2025api = new sdk.ManagedClustersV2025Api(apiConfig);
    return handleApiCall(() => managedclustersv2025api.deleteManagedCluster(requestParameters));
};
exports.deleteManagedCluster = deleteManagedCluster;
/**
 * Get a managed cluster\'s log configuration.
 * @summary Get Managed Cluster Log Configuration
 * @param {ManagedClustersV2025ApiGetClientLogConfigurationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getClientLogConfiguration = (requestParameters, apiConfig) => {
    const managedclustersv2025api = new sdk.ManagedClustersV2025Api(apiConfig);
    return handleApiCall(() => managedclustersv2025api.getClientLogConfiguration(requestParameters));
};
exports.getClientLogConfiguration = getClientLogConfiguration;
/**
 * Get a managed cluster by ID.
 * @summary Get Managed Cluster
 * @param {ManagedClustersV2025ApiGetManagedClusterRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getManagedCluster = (requestParameters, apiConfig) => {
    const managedclustersv2025api = new sdk.ManagedClustersV2025Api(apiConfig);
    return handleApiCall(() => managedclustersv2025api.getManagedCluster(requestParameters));
};
exports.getManagedCluster = getManagedCluster;
/**
 * List current organization\'s managed clusters, based on request context.
 * @summary Get Managed Clusters
 * @param {ManagedClustersV2025ApiGetManagedClustersRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getManagedClusters = (requestParameters = {}, apiConfig) => {
    const managedclustersv2025api = new sdk.ManagedClustersV2025Api(apiConfig);
    return handleApiCall(() => managedclustersv2025api.getManagedClusters(requestParameters));
};
exports.getManagedClusters = getManagedClusters;
/**
 * Update a managed cluster\'s log configuration. You may only specify one of `durationMinutes` or `expiration`, up to 1440 minutes (24 hours) in the future. If neither is specified, the default value for `durationMinutes` is 240.
 * @summary Update Managed Cluster Log Configuration
 * @param {ManagedClustersV2025ApiPutClientLogConfigurationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putClientLogConfiguration = (requestParameters, apiConfig) => {
    const managedclustersv2025api = new sdk.ManagedClustersV2025Api(apiConfig);
    return handleApiCall(() => managedclustersv2025api.putClientLogConfiguration(requestParameters));
};
exports.putClientLogConfiguration = putClientLogConfiguration;
/**
 * Trigger Manual Upgrade for Managed Cluster. AMS Security: API, Internal A token with SYSTEM_ADMINISTRATOR authority is required to call this API.
 * @summary Trigger Manual Upgrade for Managed Cluster
 * @param {ManagedClustersV2025ApiUpdateRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const update = (requestParameters, apiConfig) => {
    const managedclustersv2025api = new sdk.ManagedClustersV2025Api(apiConfig);
    return handleApiCall(() => managedclustersv2025api.update(requestParameters));
};
exports.update = update;
/**
 * Update an existing managed cluster.
 * @summary Update Managed Cluster
 * @param {ManagedClustersV2025ApiUpdateManagedClusterRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateManagedCluster = (requestParameters, apiConfig) => {
    const managedclustersv2025api = new sdk.ManagedClustersV2025Api(apiConfig);
    return handleApiCall(() => managedclustersv2025api.updateManagedCluster(requestParameters));
};
exports.updateManagedCluster = updateManagedCluster;
/**
 * This API is used to create Multi-Host Integration. Multi-host Integration holds similar types of sources.  A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.
 * @summary Create Multi-Host Integration
 * @param {MultiHostIntegrationV2025ApiCreateMultiHostIntegrationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createMultiHostIntegration = (requestParameters, apiConfig) => {
    const multihostintegrationv2025api = new sdk.MultiHostIntegrationV2025Api(apiConfig);
    return handleApiCall(() => multihostintegrationv2025api.createMultiHostIntegration(requestParameters));
};
exports.createMultiHostIntegration = createMultiHostIntegration;
/**
 * This API is used to create sources within Multi-Host Integration. Multi-Host Integration holds similar types of sources.  A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.
 * @summary Create Sources Within Multi-Host Integration
 * @param {MultiHostIntegrationV2025ApiCreateSourcesWithinMultiHostRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createSourcesWithinMultiHost = (requestParameters, apiConfig) => {
    const multihostintegrationv2025api = new sdk.MultiHostIntegrationV2025Api(apiConfig);
    return handleApiCall(() => multihostintegrationv2025api.createSourcesWithinMultiHost(requestParameters));
};
exports.createSourcesWithinMultiHost = createSourcesWithinMultiHost;
/**
 * Delete an existing Multi-Host Integration by ID.    A token with Org Admin or Multi Host Admin authority is required to access this endpoint.
 * @summary Delete Multi-Host Integration
 * @param {MultiHostIntegrationV2025ApiDeleteMultiHostRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteMultiHost = (requestParameters, apiConfig) => {
    const multihostintegrationv2025api = new sdk.MultiHostIntegrationV2025Api(apiConfig);
    return handleApiCall(() => multihostintegrationv2025api.deleteMultiHost(requestParameters));
};
exports.deleteMultiHost = deleteMultiHost;
/**
 * This API will return array of account aggregation groups within provided Multi-Host Integration ID. A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.
 * @summary List Account-Aggregation-Groups by Multi-Host ID
 * @param {MultiHostIntegrationV2025ApiGetAcctAggregationGroupsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAcctAggregationGroups = (requestParameters, apiConfig) => {
    const multihostintegrationv2025api = new sdk.MultiHostIntegrationV2025Api(apiConfig);
    return handleApiCall(() => multihostintegrationv2025api.getAcctAggregationGroups(requestParameters));
};
exports.getAcctAggregationGroups = getAcctAggregationGroups;
/**
 * This API will return array of aggregation groups within provided Multi-Host Integration ID.    A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.
 * @summary List Entitlement-Aggregation-Groups by Integration ID
 * @param {MultiHostIntegrationV2025ApiGetEntitlementAggregationGroupsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getEntitlementAggregationGroups = (requestParameters, apiConfig) => {
    const multihostintegrationv2025api = new sdk.MultiHostIntegrationV2025Api(apiConfig);
    return handleApiCall(() => multihostintegrationv2025api.getEntitlementAggregationGroups(requestParameters));
};
exports.getEntitlementAggregationGroups = getEntitlementAggregationGroups;
/**
 * Get an existing Multi-Host Integration.   A token with Org Admin or Multi-Host Integration Admin authority is required to access this endpoint.
 * @summary Get Multi-Host Integration By ID
 * @param {MultiHostIntegrationV2025ApiGetMultiHostIntegrationsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getMultiHostIntegrations = (requestParameters, apiConfig) => {
    const multihostintegrationv2025api = new sdk.MultiHostIntegrationV2025Api(apiConfig);
    return handleApiCall(() => multihostintegrationv2025api.getMultiHostIntegrations(requestParameters));
};
exports.getMultiHostIntegrations = getMultiHostIntegrations;
/**
 * Get a list of Multi-Host Integrations.    A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.
 * @summary List All Existing Multi-Host Integrations
 * @param {MultiHostIntegrationV2025ApiGetMultiHostIntegrationsListRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getMultiHostIntegrationsList = (requestParameters = {}, apiConfig) => {
    const multihostintegrationv2025api = new sdk.MultiHostIntegrationV2025Api(apiConfig);
    return handleApiCall(() => multihostintegrationv2025api.getMultiHostIntegrationsList(requestParameters));
};
exports.getMultiHostIntegrationsList = getMultiHostIntegrationsList;
/**
 * Get a list of sources creation errors within Multi-Host Integration ID.    A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.
 * @summary List Multi-Host Source Creation Errors
 * @param {MultiHostIntegrationV2025ApiGetMultiHostSourceCreationErrorsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getMultiHostSourceCreationErrors = (requestParameters, apiConfig) => {
    const multihostintegrationv2025api = new sdk.MultiHostIntegrationV2025Api(apiConfig);
    return handleApiCall(() => multihostintegrationv2025api.getMultiHostSourceCreationErrors(requestParameters));
};
exports.getMultiHostSourceCreationErrors = getMultiHostSourceCreationErrors;
/**
 * This API endpoint returns the current list of supported Multi-Host Integration types.    A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.
 * @summary List Multi-Host Integration Types
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getMultihostIntegrationTypes = (apiConfig) => {
    const multihostintegrationv2025api = new sdk.MultiHostIntegrationV2025Api(apiConfig);
    return handleApiCall(() => multihostintegrationv2025api.getMultihostIntegrationTypes());
};
exports.getMultihostIntegrationTypes = getMultihostIntegrationTypes;
/**
 * Get a list of sources within Multi-Host Integration ID.    A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.
 * @summary List Sources Within Multi-Host Integration
 * @param {MultiHostIntegrationV2025ApiGetSourcesWithinMultiHostRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSourcesWithinMultiHost = (requestParameters, apiConfig) => {
    const multihostintegrationv2025api = new sdk.MultiHostIntegrationV2025Api(apiConfig);
    return handleApiCall(() => multihostintegrationv2025api.getSourcesWithinMultiHost(requestParameters));
};
exports.getSourcesWithinMultiHost = getSourcesWithinMultiHost;
/**
 * This endpoint performs a more detailed validation of the Multi-Host Integration\'s configuration.  A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.
 * @summary Test Configuration For Multi-Host Integration
 * @param {MultiHostIntegrationV2025ApiTestConnectionMultiHostSourcesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const testConnectionMultiHostSources = (requestParameters, apiConfig) => {
    const multihostintegrationv2025api = new sdk.MultiHostIntegrationV2025Api(apiConfig);
    return handleApiCall(() => multihostintegrationv2025api.testConnectionMultiHostSources(requestParameters));
};
exports.testConnectionMultiHostSources = testConnectionMultiHostSources;
/**
 * This endpoint performs a more detailed validation of the source\'s configuration.    A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.
 * @summary Test Configuration For Multi-Host Integration\'s Single Source
 * @param {MultiHostIntegrationV2025ApiTestSourceConnectionMultihostRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const testSourceConnectionMultihost = (requestParameters, apiConfig) => {
    const multihostintegrationv2025api = new sdk.MultiHostIntegrationV2025Api(apiConfig);
    return handleApiCall(() => multihostintegrationv2025api.testSourceConnectionMultihost(requestParameters));
};
exports.testSourceConnectionMultihost = testSourceConnectionMultihost;
/**
 * Update existing sources within Multi-Host Integration.  A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.
 * @summary Update Multi-Host Integration
 * @param {MultiHostIntegrationV2025ApiUpdateMultiHostSourcesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateMultiHostSources = (requestParameters, apiConfig) => {
    const multihostintegrationv2025api = new sdk.MultiHostIntegrationV2025Api(apiConfig);
    return handleApiCall(() => multihostintegrationv2025api.updateMultiHostSources(requestParameters));
};
exports.updateMultiHostSources = updateMultiHostSources;
/**
 * Approves a non-employee approval request and notifies the next approver. The current user must be the requested approver.
 * @summary Approve a Non-Employee Request
 * @param {NonEmployeeLifecycleManagementV2025ApiApproveNonEmployeeRequestRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const approveNonEmployeeRequest = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.approveNonEmployeeRequest(requestParameters));
};
exports.approveNonEmployeeRequest = approveNonEmployeeRequest;
/**
 * This request will create a non-employee record. Requires role context of `idn:nesr:create`
 * @summary Create Non-Employee Record
 * @param {NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeRecordRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createNonEmployeeRecord = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.createNonEmployeeRecord(requestParameters));
};
exports.createNonEmployeeRecord = createNonEmployeeRecord;
/**
 * This request will create a non-employee request and notify the approver. Requires role context of `idn:nesr:create` or the user must own the source.
 * @summary Create Non-Employee Request
 * @param {NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeRequestRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createNonEmployeeRequest = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.createNonEmployeeRequest(requestParameters));
};
exports.createNonEmployeeRequest = createNonEmployeeRequest;
/**
 * Create a non-employee source.
 * @summary Create Non-Employee Source
 * @param {NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeSourceRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createNonEmployeeSource = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.createNonEmployeeSource(requestParameters));
};
exports.createNonEmployeeSource = createNonEmployeeSource;
/**
 * This API creates a new schema attribute for Non-Employee Source. The schema technical name must be unique in the source. Attempts to create a schema attribute with an existing name will result in a \"400.1.409 Reference conflict\" response. At most, 10 custom attributes can be created per schema. Attempts to create more than 10 will result in a \"400.1.4 Limit violation\" response. Requires role context of `idn:nesr:create`
 * @summary Create a new Schema Attribute for Non-Employee Source
 * @param {NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeSourceSchemaAttributesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createNonEmployeeSourceSchemaAttributes = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.createNonEmployeeSourceSchemaAttributes(requestParameters));
};
exports.createNonEmployeeSourceSchemaAttributes = createNonEmployeeSourceSchemaAttributes;
/**
 * This request will delete a non-employee record. Requires role context of `idn:nesr:delete`
 * @summary Delete Non-Employee Record
 * @param {NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeRecordRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteNonEmployeeRecord = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.deleteNonEmployeeRecord(requestParameters));
};
exports.deleteNonEmployeeRecord = deleteNonEmployeeRecord;
/**
 * This request will delete multiple non-employee records based on the non-employee ids provided. Requires role context of `idn:nesr:delete`
 * @summary Delete Multiple Non-Employee Records
 * @param {NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeRecordsInBulkRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteNonEmployeeRecordsInBulk = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.deleteNonEmployeeRecordsInBulk(requestParameters));
};
exports.deleteNonEmployeeRecordsInBulk = deleteNonEmployeeRecordsInBulk;
/**
 * This request will delete a non-employee request.  Requires role context of `idn:nesr:delete`
 * @summary Delete Non-Employee Request
 * @param {NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeRequestRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteNonEmployeeRequest = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.deleteNonEmployeeRequest(requestParameters));
};
exports.deleteNonEmployeeRequest = deleteNonEmployeeRequest;
/**
 * This end-point deletes a specific schema attribute for a non-employee source. Requires role context of `idn:nesr:delete`
 * @summary Delete a Schema Attribute for Non-Employee Source
 * @param {NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeSchemaAttributeRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteNonEmployeeSchemaAttribute = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.deleteNonEmployeeSchemaAttribute(requestParameters));
};
exports.deleteNonEmployeeSchemaAttribute = deleteNonEmployeeSchemaAttribute;
/**
 * This request will delete a non-employee source. Requires role context of `idn:nesr:delete`.
 * @summary Delete Non-Employee Source
 * @param {NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeSourceRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteNonEmployeeSource = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.deleteNonEmployeeSource(requestParameters));
};
exports.deleteNonEmployeeSource = deleteNonEmployeeSource;
/**
 * This end-point deletes all custom schema attributes for a non-employee source. Requires role context of `idn:nesr:delete`
 * @summary Delete all custom schema attributes for Non-Employee Source
 * @param {NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeSourceSchemaAttributesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteNonEmployeeSourceSchemaAttributes = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.deleteNonEmployeeSourceSchemaAttributes(requestParameters));
};
exports.deleteNonEmployeeSourceSchemaAttributes = deleteNonEmployeeSourceSchemaAttributes;
/**
 * This requests a CSV download for all non-employees from a provided source. Requires role context of `idn:nesr:read`
 * @summary Exports Non-Employee Records to CSV
 * @param {NonEmployeeLifecycleManagementV2025ApiExportNonEmployeeRecordsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const exportNonEmployeeRecords = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.exportNonEmployeeRecords(requestParameters));
};
exports.exportNonEmployeeRecords = exportNonEmployeeRecords;
/**
 * This requests a download for the Source Schema Template for a provided source. Requires role context of `idn:nesr:read`
 * @summary Exports Source Schema Template
 * @param {NonEmployeeLifecycleManagementV2025ApiExportNonEmployeeSourceSchemaTemplateRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const exportNonEmployeeSourceSchemaTemplate = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.exportNonEmployeeSourceSchemaTemplate(requestParameters));
};
exports.exportNonEmployeeSourceSchemaTemplate = exportNonEmployeeSourceSchemaTemplate;
/**
 * Gets a non-employee approval item detail. There are two contextual uses for this endpoint:   1. The user has the role context of `idn:nesr:read`, in which case they can get any approval.   2. The user owns the requested approval.
 * @summary Get a non-employee approval item detail
 * @param {NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeApprovalRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getNonEmployeeApproval = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.getNonEmployeeApproval(requestParameters));
};
exports.getNonEmployeeApproval = getNonEmployeeApproval;
/**
 * This request will retrieve a summary of non-employee approval requests. There are two contextual uses for the `requested-for` path parameter:   1. The user has the role context of `idn:nesr:read`, in which case he or she may request a summary of all non-employee approval requests assigned to a particular approver by passing in that approver\'s id.   2. The current user is an approver, in which case \"me\" should be provided as the `requested-for` value. This will provide the approver with a summary of the approval items assigned to him or her.
 * @summary Get Summary of Non-Employee Approval Requests
 * @param {NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeApprovalSummaryRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getNonEmployeeApprovalSummary = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.getNonEmployeeApprovalSummary(requestParameters));
};
exports.getNonEmployeeApprovalSummary = getNonEmployeeApprovalSummary;
/**
 * The nonEmployeeBulkUploadStatus API returns the status of the newest bulk upload job for the specified source. Requires role context of `idn:nesr:read`
 * @summary Obtain the status of bulk upload on the source
 * @param {NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeBulkUploadStatusRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getNonEmployeeBulkUploadStatus = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.getNonEmployeeBulkUploadStatus(requestParameters));
};
exports.getNonEmployeeBulkUploadStatus = getNonEmployeeBulkUploadStatus;
/**
 * This gets a non-employee record. Requires role context of `idn:nesr:read`
 * @summary Get a Non-Employee Record
 * @param {NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeRecordRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getNonEmployeeRecord = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.getNonEmployeeRecord(requestParameters));
};
exports.getNonEmployeeRecord = getNonEmployeeRecord;
/**
 * This gets a non-employee request. There are two contextual uses for this endpoint:   1. The user has the role context of `idn:nesr:read`, in this case the user can get the non-employee request for any user.   2. The user must be the owner of the non-employee request.
 * @summary Get a Non-Employee Request
 * @param {NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeRequestRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getNonEmployeeRequest = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.getNonEmployeeRequest(requestParameters));
};
exports.getNonEmployeeRequest = getNonEmployeeRequest;
/**
 * This request will retrieve a summary of non-employee requests. There are two contextual uses for the `requested-for` path parameter:   1. The user has the role context of `idn:nesr:read`, in which case he or she may request a summary of all non-employee approval requests assigned to a particular account manager by passing in that manager\'s id.   2. The current user is an account manager, in which case \"me\" should be provided as the `requested-for` value. This will provide the user with a summary of the non-employee requests in the source(s) he or she manages.
 * @summary Get Summary of Non-Employee Requests
 * @param {NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeRequestSummaryRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getNonEmployeeRequestSummary = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.getNonEmployeeRequestSummary(requestParameters));
};
exports.getNonEmployeeRequestSummary = getNonEmployeeRequestSummary;
/**
 * This API gets a schema attribute by Id for the specified Non-Employee SourceId. Requires role context of `idn:nesr:read` or the user must be an account manager of the source.
 * @summary Get Schema Attribute Non-Employee Source
 * @param {NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeSchemaAttributeRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getNonEmployeeSchemaAttribute = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.getNonEmployeeSchemaAttribute(requestParameters));
};
exports.getNonEmployeeSchemaAttribute = getNonEmployeeSchemaAttribute;
/**
 * This gets a non-employee source. There are two contextual uses for the requested-for path parameter:    1. The user has the role context of `idn:nesr:read`, in which case he or she may request any source.   2. The current user is an account manager, in which case the user can only request sources that they own.
 * @summary Get a Non-Employee Source
 * @param {NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeSourceRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getNonEmployeeSource = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.getNonEmployeeSource(requestParameters));
};
exports.getNonEmployeeSource = getNonEmployeeSource;
/**
 * This API gets the list of schema attributes for the specified Non-Employee SourceId. There are 8 mandatory attributes added to each new Non-Employee Source automatically. Additionaly, user can add up to 10 custom attributes. This interface returns all the mandatory attributes followed by any custom attributes. At most, a total of 18 attributes will be returned. Requires role context of `idn:nesr:read` or the user must be an account manager of the source.
 * @summary List Schema Attributes Non-Employee Source
 * @param {NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeSourceSchemaAttributesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getNonEmployeeSourceSchemaAttributes = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.getNonEmployeeSourceSchemaAttributes(requestParameters));
};
exports.getNonEmployeeSourceSchemaAttributes = getNonEmployeeSourceSchemaAttributes;
/**
 * This post will import, or update, Non-Employee records found in the CSV. Requires role context of `idn:nesr:create`
 * @summary Imports, or Updates, Non-Employee Records
 * @param {NonEmployeeLifecycleManagementV2025ApiImportNonEmployeeRecordsInBulkRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const importNonEmployeeRecordsInBulk = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.importNonEmployeeRecordsInBulk(requestParameters));
};
exports.importNonEmployeeRecordsInBulk = importNonEmployeeRecordsInBulk;
/**
 * This gets a list of non-employee approval requests. There are two contextual uses for this endpoint:   1. The user has the role context of `idn:nesr:read`, in which case they can list the approvals for any approver.   2. The user owns the requested approval.
 * @summary Get List of Non-Employee Approval Requests
 * @param {NonEmployeeLifecycleManagementV2025ApiListNonEmployeeApprovalsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listNonEmployeeApprovals = (requestParameters = {}, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.listNonEmployeeApprovals(requestParameters));
};
exports.listNonEmployeeApprovals = listNonEmployeeApprovals;
/**
 * This gets a list of non-employee records. There are two contextual uses for this endpoint:   1. The user has the role context of `idn:nesr:read`, in which case they can get a list of all of the non-employees.   2. The user is an account manager, in which case they can get a list of the non-employees that they manage.
 * @summary List Non-Employee Records
 * @param {NonEmployeeLifecycleManagementV2025ApiListNonEmployeeRecordsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listNonEmployeeRecords = (requestParameters = {}, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.listNonEmployeeRecords(requestParameters));
};
exports.listNonEmployeeRecords = listNonEmployeeRecords;
/**
 * This gets a list of non-employee requests. There are two contextual uses for the `requested-for` path parameter:   1. The user has the role context of `idn:nesr:read`, in which case he or she may request a list non-employee requests assigned to a particular account manager by passing in that manager\'s id.   2. The current user is an account manager, in which case \"me\" should be provided as the `requested-for` value. This will provide the user with a list of the non-employee requests in the source(s) he or she manages.
 * @summary List Non-Employee Requests
 * @param {NonEmployeeLifecycleManagementV2025ApiListNonEmployeeRequestsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listNonEmployeeRequests = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.listNonEmployeeRequests(requestParameters));
};
exports.listNonEmployeeRequests = listNonEmployeeRequests;
/**
 * Get a list of non-employee sources. There are two contextual uses for the `requested-for` path parameter:    1. If the user has the role context of `idn:nesr:read`, he or she may request a list sources assigned to a particular account manager by passing in that manager\'s `id`.   2. If the current user is an account manager, the user should provide \'me\' as the `requested-for` value. Doing so provide the user with a list of the sources he or she owns.
 * @summary List Non-Employee Sources
 * @param {NonEmployeeLifecycleManagementV2025ApiListNonEmployeeSourcesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listNonEmployeeSources = (requestParameters = {}, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.listNonEmployeeSources(requestParameters));
};
exports.listNonEmployeeSources = listNonEmployeeSources;
/**
 * This request will patch a non-employee record. There are two contextual uses for this endpoint:   1. The user has the role context of `idn:nesr:update`, in which case they update all available fields.   2. The user is owner of the source, in this case they can only update the end date.
 * @summary Patch Non-Employee Record
 * @param {NonEmployeeLifecycleManagementV2025ApiPatchNonEmployeeRecordRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchNonEmployeeRecord = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.patchNonEmployeeRecord(requestParameters));
};
exports.patchNonEmployeeRecord = patchNonEmployeeRecord;
/**
 * This end-point patches a specific schema attribute for a non-employee SourceId. Requires role context of `idn:nesr:update`
 * @summary Patch a Schema Attribute for Non-Employee Source
 * @param {NonEmployeeLifecycleManagementV2025ApiPatchNonEmployeeSchemaAttributeRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchNonEmployeeSchemaAttribute = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.patchNonEmployeeSchemaAttribute(requestParameters));
};
exports.patchNonEmployeeSchemaAttribute = patchNonEmployeeSchemaAttribute;
/**
 * patch a non-employee source. (partial update) <br/> Patchable field: **name, description, approvers, accountManagers** Requires role context of `idn:nesr:update`.
 * @summary Patch a Non-Employee Source
 * @param {NonEmployeeLifecycleManagementV2025ApiPatchNonEmployeeSourceRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchNonEmployeeSource = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.patchNonEmployeeSource(requestParameters));
};
exports.patchNonEmployeeSource = patchNonEmployeeSource;
/**
 * This endpoint will reject an approval item request and notify user. The current user must be the requested approver.
 * @summary Reject a Non-Employee Request
 * @param {NonEmployeeLifecycleManagementV2025ApiRejectNonEmployeeRequestRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const rejectNonEmployeeRequest = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.rejectNonEmployeeRequest(requestParameters));
};
exports.rejectNonEmployeeRequest = rejectNonEmployeeRequest;
/**
 * This request will update a non-employee record. There are two contextual uses for this endpoint:   1. The user has the role context of `idn:nesr:update`, in which case they update all available fields.   2. The user is owner of the source, in this case they can only update the end date.
 * @summary Update Non-Employee Record
 * @param {NonEmployeeLifecycleManagementV2025ApiUpdateNonEmployeeRecordRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateNonEmployeeRecord = (requestParameters, apiConfig) => {
    const nonemployeelifecyclemanagementv2025api = new sdk.NonEmployeeLifecycleManagementV2025Api(apiConfig);
    return handleApiCall(() => nonemployeelifecyclemanagementv2025api.updateNonEmployeeRecord(requestParameters));
};
exports.updateNonEmployeeRecord = updateNonEmployeeRecord;
/**
 * Create a domain to be verified via DKIM (DomainKeys Identified Mail)
 * @summary Verify domain address via DKIM
 * @param {NotificationsV2025ApiCreateDomainDkimRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createDomainDkim = (requestParameters, apiConfig) => {
    const notificationsv2025api = new sdk.NotificationsV2025Api(apiConfig);
    return handleApiCall(() => notificationsv2025api.createDomainDkim(requestParameters));
};
exports.createDomainDkim = createDomainDkim;
/**
 * This creates a template for your site.   You can also use this endpoint to update a template.  First, copy the response body from the [get notification template endpoint](https://developer.sailpoint.com/idn/api/beta/get-notification-template) for a template you wish to update and paste it into the request body for this endpoint.   Modify the fields you want to change and submit the POST request when ready.
 * @summary Create Notification Template
 * @param {NotificationsV2025ApiCreateNotificationTemplateRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createNotificationTemplate = (requestParameters, apiConfig) => {
    const notificationsv2025api = new sdk.NotificationsV2025Api(apiConfig);
    return handleApiCall(() => notificationsv2025api.createNotificationTemplate(requestParameters));
};
exports.createNotificationTemplate = createNotificationTemplate;
/**
 * Create a new sender email address and initiate verification process.
 * @summary Create Verified From Address
 * @param {NotificationsV2025ApiCreateVerifiedFromAddressRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createVerifiedFromAddress = (requestParameters, apiConfig) => {
    const notificationsv2025api = new sdk.NotificationsV2025Api(apiConfig);
    return handleApiCall(() => notificationsv2025api.createVerifiedFromAddress(requestParameters));
};
exports.createVerifiedFromAddress = createVerifiedFromAddress;
/**
 * This lets you bulk delete templates that you previously created for your site. Since this is a beta feature, please contact support to enable usage.
 * @summary Bulk Delete Notification Templates
 * @param {NotificationsV2025ApiDeleteNotificationTemplatesInBulkRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteNotificationTemplatesInBulk = (requestParameters, apiConfig) => {
    const notificationsv2025api = new sdk.NotificationsV2025Api(apiConfig);
    return handleApiCall(() => notificationsv2025api.deleteNotificationTemplatesInBulk(requestParameters));
};
exports.deleteNotificationTemplatesInBulk = deleteNotificationTemplatesInBulk;
/**
 * Delete a verified sender email address
 * @summary Delete Verified From Address
 * @param {NotificationsV2025ApiDeleteVerifiedFromAddressRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteVerifiedFromAddress = (requestParameters, apiConfig) => {
    const notificationsv2025api = new sdk.NotificationsV2025Api(apiConfig);
    return handleApiCall(() => notificationsv2025api.deleteVerifiedFromAddress(requestParameters));
};
exports.deleteVerifiedFromAddress = deleteVerifiedFromAddress;
/**
 * Retrieve DKIM (DomainKeys Identified Mail) attributes for all your tenants\' AWS SES identities. Limits retrieval to 100 identities per call.
 * @summary Get DKIM Attributes
 * @param {NotificationsV2025ApiGetDkimAttributesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getDkimAttributes = (requestParameters = {}, apiConfig) => {
    const notificationsv2025api = new sdk.NotificationsV2025Api(apiConfig);
    return handleApiCall(() => notificationsv2025api.getDkimAttributes(requestParameters));
};
exports.getDkimAttributes = getDkimAttributes;
/**
 * Retrieve MAIL FROM attributes for a given AWS SES identity.
 * @summary Get MAIL FROM Attributes
 * @param {NotificationsV2025ApiGetMailFromAttributesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getMailFromAttributes = (requestParameters, apiConfig) => {
    const notificationsv2025api = new sdk.NotificationsV2025Api(apiConfig);
    return handleApiCall(() => notificationsv2025api.getMailFromAttributes(requestParameters));
};
exports.getMailFromAttributes = getMailFromAttributes;
/**
 * This gets a template that you have modified for your site by Id.
 * @summary Get Notification Template By Id
 * @param {NotificationsV2025ApiGetNotificationTemplateRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getNotificationTemplate = (requestParameters, apiConfig) => {
    const notificationsv2025api = new sdk.NotificationsV2025Api(apiConfig);
    return handleApiCall(() => notificationsv2025api.getNotificationTemplate(requestParameters));
};
exports.getNotificationTemplate = getNotificationTemplate;
/**
 * The notification service maintains metadata to construct the notification templates or supply any information during the event propagation. The data-store where this information is retrieved is called \"Global Context\" (a.k.a. notification template context). It defines a set of attributes  that will be available per tenant (organization).
 * @summary Get Notification Template Context
 * @param {NotificationsV2025ApiGetNotificationsTemplateContextRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getNotificationsTemplateContext = (requestParameters = {}, apiConfig) => {
    const notificationsv2025api = new sdk.NotificationsV2025Api(apiConfig);
    return handleApiCall(() => notificationsv2025api.getNotificationsTemplateContext(requestParameters));
};
exports.getNotificationsTemplateContext = getNotificationsTemplateContext;
/**
 * Retrieve a list of sender email addresses and their verification statuses
 * @summary List From Addresses
 * @param {NotificationsV2025ApiListFromAddressesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listFromAddresses = (requestParameters = {}, apiConfig) => {
    const notificationsv2025api = new sdk.NotificationsV2025Api(apiConfig);
    return handleApiCall(() => notificationsv2025api.listFromAddresses(requestParameters));
};
exports.listFromAddresses = listFromAddresses;
/**
 * Returns a list of notification preferences for tenant.
 * @summary List Notification Preferences for tenant.
 * @param {NotificationsV2025ApiListNotificationPreferencesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listNotificationPreferences = (requestParameters = {}, apiConfig) => {
    const notificationsv2025api = new sdk.NotificationsV2025Api(apiConfig);
    return handleApiCall(() => notificationsv2025api.listNotificationPreferences(requestParameters));
};
exports.listNotificationPreferences = listNotificationPreferences;
/**
 * This lists the default templates used for notifications, such as emails from IdentityNow.
 * @summary List Notification Template Defaults
 * @param {NotificationsV2025ApiListNotificationTemplateDefaultsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listNotificationTemplateDefaults = (requestParameters = {}, apiConfig) => {
    const notificationsv2025api = new sdk.NotificationsV2025Api(apiConfig);
    return handleApiCall(() => notificationsv2025api.listNotificationTemplateDefaults(requestParameters));
};
exports.listNotificationTemplateDefaults = listNotificationTemplateDefaults;
/**
 * This lists the templates that you have modified for your site.
 * @summary List Notification Templates
 * @param {NotificationsV2025ApiListNotificationTemplatesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listNotificationTemplates = (requestParameters = {}, apiConfig) => {
    const notificationsv2025api = new sdk.NotificationsV2025Api(apiConfig);
    return handleApiCall(() => notificationsv2025api.listNotificationTemplates(requestParameters));
};
exports.listNotificationTemplates = listNotificationTemplates;
/**
 * Change the MAIL FROM domain of an AWS SES email identity and provide the MX and TXT records to be placed in the caller\'s DNS
 * @summary Change MAIL FROM domain
 * @param {NotificationsV2025ApiPutMailFromAttributesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putMailFromAttributes = (requestParameters, apiConfig) => {
    const notificationsv2025api = new sdk.NotificationsV2025Api(apiConfig);
    return handleApiCall(() => notificationsv2025api.putMailFromAttributes(requestParameters));
};
exports.putMailFromAttributes = putMailFromAttributes;
/**
 * Send a Test Notification
 * @summary Send Test Notification
 * @param {NotificationsV2025ApiSendTestNotificationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const sendTestNotification = (requestParameters, apiConfig) => {
    const notificationsv2025api = new sdk.NotificationsV2025Api(apiConfig);
    return handleApiCall(() => notificationsv2025api.sendTestNotification(requestParameters));
};
exports.sendTestNotification = sendTestNotification;
/**
 * This creates an OAuth client.
 * @summary Create OAuth Client
 * @param {OAuthClientsV2025ApiCreateOauthClientRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createOauthClient = (requestParameters, apiConfig) => {
    const oauthclientsv2025api = new sdk.OAuthClientsV2025Api(apiConfig);
    return handleApiCall(() => oauthclientsv2025api.createOauthClient(requestParameters));
};
exports.createOauthClient = createOauthClient;
/**
 * This deletes an OAuth client.
 * @summary Delete OAuth Client
 * @param {OAuthClientsV2025ApiDeleteOauthClientRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteOauthClient = (requestParameters, apiConfig) => {
    const oauthclientsv2025api = new sdk.OAuthClientsV2025Api(apiConfig);
    return handleApiCall(() => oauthclientsv2025api.deleteOauthClient(requestParameters));
};
exports.deleteOauthClient = deleteOauthClient;
/**
 * This gets details of an OAuth client.
 * @summary Get OAuth Client
 * @param {OAuthClientsV2025ApiGetOauthClientRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getOauthClient = (requestParameters, apiConfig) => {
    const oauthclientsv2025api = new sdk.OAuthClientsV2025Api(apiConfig);
    return handleApiCall(() => oauthclientsv2025api.getOauthClient(requestParameters));
};
exports.getOauthClient = getOauthClient;
/**
 * This gets a list of OAuth clients.
 * @summary List OAuth Clients
 * @param {OAuthClientsV2025ApiListOauthClientsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listOauthClients = (requestParameters = {}, apiConfig) => {
    const oauthclientsv2025api = new sdk.OAuthClientsV2025Api(apiConfig);
    return handleApiCall(() => oauthclientsv2025api.listOauthClients(requestParameters));
};
exports.listOauthClients = listOauthClients;
/**
 * This performs a targeted update to the field(s) of an OAuth client.
 * @summary Patch OAuth Client
 * @param {OAuthClientsV2025ApiPatchOauthClientRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchOauthClient = (requestParameters, apiConfig) => {
    const oauthclientsv2025api = new sdk.OAuthClientsV2025Api(apiConfig);
    return handleApiCall(() => oauthclientsv2025api.patchOauthClient(requestParameters));
};
exports.patchOauthClient = patchOauthClient;
/**
 * Get the current organization\'s configuration settings, only external accessible properties.
 * @summary Get Org Config Settings
 * @param {OrgConfigV2025ApiGetOrgConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getOrgConfig = (requestParameters = {}, apiConfig) => {
    const orgconfigv2025api = new sdk.OrgConfigV2025Api(apiConfig);
    return handleApiCall(() => orgconfigv2025api.getOrgConfig(requestParameters));
};
exports.getOrgConfig = getOrgConfig;
/**
 * List the valid time zones that can be set in organization configurations.
 * @summary Get Valid Time Zones
 * @param {OrgConfigV2025ApiGetValidTimeZonesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getValidTimeZones = (requestParameters = {}, apiConfig) => {
    const orgconfigv2025api = new sdk.OrgConfigV2025Api(apiConfig);
    return handleApiCall(() => orgconfigv2025api.getValidTimeZones(requestParameters));
};
exports.getValidTimeZones = getValidTimeZones;
/**
 * Patch the current organization\'s configuration, using http://jsonpatch.com/ syntax. This is commonly used to changing an organization\'s time zone.
 * @summary Patch Org Config
 * @param {OrgConfigV2025ApiPatchOrgConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchOrgConfig = (requestParameters, apiConfig) => {
    const orgconfigv2025api = new sdk.OrgConfigV2025Api(apiConfig);
    return handleApiCall(() => orgconfigv2025api.patchOrgConfig(requestParameters));
};
exports.patchOrgConfig = patchOrgConfig;
/**
 * This API creates the password org config. Unspecified fields will use default value. To be able to use the custom password instructions, you must set the `customInstructionsEnabled` field to \"true\". Requires ORG_ADMIN, API role or authorization scope of \'idn:password-org-config:write\'
 * @summary Create Password Org Config
 * @param {PasswordConfigurationV2025ApiCreatePasswordOrgConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createPasswordOrgConfig = (requestParameters, apiConfig) => {
    const passwordconfigurationv2025api = new sdk.PasswordConfigurationV2025Api(apiConfig);
    return handleApiCall(() => passwordconfigurationv2025api.createPasswordOrgConfig(requestParameters));
};
exports.createPasswordOrgConfig = createPasswordOrgConfig;
/**
 * This API returns the password org config . Requires ORG_ADMIN, API role or authorization scope of \'idn:password-org-config:read\'
 * @summary Get Password Org Config
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getPasswordOrgConfig = (apiConfig) => {
    const passwordconfigurationv2025api = new sdk.PasswordConfigurationV2025Api(apiConfig);
    return handleApiCall(() => passwordconfigurationv2025api.getPasswordOrgConfig());
};
exports.getPasswordOrgConfig = getPasswordOrgConfig;
/**
 * This API updates the password org config for specified fields. Other fields will keep original value. You must set the `customInstructionsEnabled` field to \"true\" to be able to use custom password instructions.  Requires ORG_ADMIN, API role or authorization scope of \'idn:password-org-config:write\'
 * @summary Update Password Org Config
 * @param {PasswordConfigurationV2025ApiPutPasswordOrgConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putPasswordOrgConfig = (requestParameters, apiConfig) => {
    const passwordconfigurationv2025api = new sdk.PasswordConfigurationV2025Api(apiConfig);
    return handleApiCall(() => passwordconfigurationv2025api.putPasswordOrgConfig(requestParameters));
};
exports.putPasswordOrgConfig = putPasswordOrgConfig;
/**
 * This gets password dictionary for the organization. The password dictionary file can contain lines that are: 1. comment lines - the first character is \'#\', can be 128 Unicode codepoints in length, and are ignored during processing 2. empty lines 3. locale line - the first line that starts with \"locale=\" is considered to be locale line, the rest are treated as normal content lines 4. line containing the password dictionary word - it must start with non-whitespace character and only non-whitespace characters are allowed;         maximum length of the line is 128 Unicode codepoints   Password dictionary file may not contain more than 2,500 lines (not counting whitespace lines, comment lines and locale line).   Password dict file must contain UTF-8 characters only.  # Sample password text file  ```  # Password dictionary small test file  locale=en_US  # Password dictionary prohibited words  qwerty abcd aaaaa password qazxsws  ```
 * @summary Get Password Dictionary
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getPasswordDictionary = (apiConfig) => {
    const passworddictionaryv2025api = new sdk.PasswordDictionaryV2025Api(apiConfig);
    return handleApiCall(() => passworddictionaryv2025api.getPasswordDictionary());
};
exports.getPasswordDictionary = getPasswordDictionary;
/**
 * This updates password dictionary for the organization. The password dictionary file can contain lines that are: 1. comment lines - the first character is \'#\', can be 128 Unicode codepoints in length, and are ignored during processing 2. empty lines 3. locale line - the first line that starts with \"locale=\" is considered to be locale line, the rest are treated as normal content lines 4. line containing the password dictionary word - it must start with non-whitespace character and only non-whitespace characters are allowed;         maximum length of the line is 128 Unicode codepoints   Password dictionary file may not contain more than 2,500 lines (not counting whitespace lines, comment lines and locale line).   Password dict file must contain UTF-8 characters only.  # Sample password text file  ```  # Password dictionary small test file  locale=en_US  # Password dictionary prohibited words  qwerty abcd aaaaa password qazxsws  ```
 * @summary Update Password Dictionary
 * @param {PasswordDictionaryV2025ApiPutPasswordDictionaryRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putPasswordDictionary = (requestParameters = {}, apiConfig) => {
    const passworddictionaryv2025api = new sdk.PasswordDictionaryV2025Api(apiConfig);
    return handleApiCall(() => passworddictionaryv2025api.putPasswordDictionary(requestParameters));
};
exports.putPasswordDictionary = putPasswordDictionary;
/**
 * This API is used to generate a digit token for password management. Requires authorization scope of \"idn:password-digit-token:create\".
 * @summary Generate a digit token
 * @param {PasswordManagementV2025ApiCreateDigitTokenRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createDigitToken = (requestParameters, apiConfig) => {
    const passwordmanagementv2025api = new sdk.PasswordManagementV2025Api(apiConfig);
    return handleApiCall(() => passwordmanagementv2025api.createDigitToken(requestParameters));
};
exports.createDigitToken = createDigitToken;
/**
 * This API returns the status of a password change request.
 * @summary Get Password Change Request Status
 * @param {PasswordManagementV2025ApiGetPasswordChangeStatusRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getPasswordChangeStatus = (requestParameters, apiConfig) => {
    const passwordmanagementv2025api = new sdk.PasswordManagementV2025Api(apiConfig);
    return handleApiCall(() => passwordmanagementv2025api.getPasswordChangeStatus(requestParameters));
};
exports.getPasswordChangeStatus = getPasswordChangeStatus;
/**
 * This API is used to query password related information.
 * @summary Query Password Info
 * @param {PasswordManagementV2025ApiQueryPasswordInfoRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const queryPasswordInfo = (requestParameters, apiConfig) => {
    const passwordmanagementv2025api = new sdk.PasswordManagementV2025Api(apiConfig);
    return handleApiCall(() => passwordmanagementv2025api.queryPasswordInfo(requestParameters));
};
exports.queryPasswordInfo = queryPasswordInfo;
/**
 * This API is used to set a password for an identity.   An identity can change their own password (as well as any of their accounts\' passwords) if they use a token generated by their ISC user, such as a [personal access token](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens) or [\"authorization_code\" derived OAuth token](https://developer.sailpoint.com/idn/api/authentication#authorization-code-grant-flow).  >**Note: If you want to set an identity\'s source account password, you must enable `PASSWORD` as one of the source\'s features. You can use the [PATCH Source endpoint](https://developer.sailpoint.com/docs/api/v3/update-source) to add the `PASSWORD` feature.**  To generate the encryptedPassword (RSA encrypted using publicKey) for the request body, run the following command:  ```bash echo -n \"myPassword\" | openssl pkeyutl -encrypt -inkey public_key.pem -pubin | base64 ```  In this example, myPassword is the plain text password being set and encrypted, and public_key.pem is the path to the public key file. You can retrieve the required publicKey, along with other information like identityId, sourceId, publicKeyId, accounts, and policies, using the Query Password Info endpoint.  To successfully run this command, you must have OpenSSL installed on your machine. If OpenSSL is unavailable, consider using the Virtual Appliance (VA), which has OpenSSL pre-installed and configured.  If you are using a Windows machine, refer to this [guide](https://tecadmin.net/install-openssl-on-windows/) for instructions on installing OpenSSL.  You can then use [Get Password Change Request Status](https://developer.sailpoint.com/idn/api/v3/get-password-change-status) to check the password change request status. To do so, you must provide the `requestId` from your earlier request to set the password.
 * @summary Set Identity\'s Password
 * @param {PasswordManagementV2025ApiSetPasswordRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const setPassword = (requestParameters, apiConfig) => {
    const passwordmanagementv2025api = new sdk.PasswordManagementV2025Api(apiConfig);
    return handleApiCall(() => passwordmanagementv2025api.setPassword(requestParameters));
};
exports.setPassword = setPassword;
/**
 * This API creates the specified password policy.
 * @summary Create Password Policy
 * @param {PasswordPoliciesV2025ApiCreatePasswordPolicyRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createPasswordPolicy = (requestParameters, apiConfig) => {
    const passwordpoliciesv2025api = new sdk.PasswordPoliciesV2025Api(apiConfig);
    return handleApiCall(() => passwordpoliciesv2025api.createPasswordPolicy(requestParameters));
};
exports.createPasswordPolicy = createPasswordPolicy;
/**
 * This API deletes the specified password policy.
 * @summary Delete Password Policy by ID
 * @param {PasswordPoliciesV2025ApiDeletePasswordPolicyRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deletePasswordPolicy = (requestParameters, apiConfig) => {
    const passwordpoliciesv2025api = new sdk.PasswordPoliciesV2025Api(apiConfig);
    return handleApiCall(() => passwordpoliciesv2025api.deletePasswordPolicy(requestParameters));
};
exports.deletePasswordPolicy = deletePasswordPolicy;
/**
 * This API returns the password policy for the specified ID.
 * @summary Get Password Policy by ID
 * @param {PasswordPoliciesV2025ApiGetPasswordPolicyByIdRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getPasswordPolicyById = (requestParameters, apiConfig) => {
    const passwordpoliciesv2025api = new sdk.PasswordPoliciesV2025Api(apiConfig);
    return handleApiCall(() => passwordpoliciesv2025api.getPasswordPolicyById(requestParameters));
};
exports.getPasswordPolicyById = getPasswordPolicyById;
/**
 * This gets list of all Password Policies. Requires role of ORG_ADMIN
 * @summary List Password Policies
 * @param {PasswordPoliciesV2025ApiListPasswordPoliciesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listPasswordPolicies = (requestParameters = {}, apiConfig) => {
    const passwordpoliciesv2025api = new sdk.PasswordPoliciesV2025Api(apiConfig);
    return handleApiCall(() => passwordpoliciesv2025api.listPasswordPolicies(requestParameters));
};
exports.listPasswordPolicies = listPasswordPolicies;
/**
 * This API updates the specified password policy.
 * @summary Update Password Policy by ID
 * @param {PasswordPoliciesV2025ApiSetPasswordPolicyRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const setPasswordPolicy = (requestParameters, apiConfig) => {
    const passwordpoliciesv2025api = new sdk.PasswordPoliciesV2025Api(apiConfig);
    return handleApiCall(() => passwordpoliciesv2025api.setPasswordPolicy(requestParameters));
};
exports.setPasswordPolicy = setPasswordPolicy;
/**
 * This API creates a password sync group based on the specifications provided.
 * @summary Create Password Sync Group
 * @param {PasswordSyncGroupsV2025ApiCreatePasswordSyncGroupRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createPasswordSyncGroup = (requestParameters, apiConfig) => {
    const passwordsyncgroupsv2025api = new sdk.PasswordSyncGroupsV2025Api(apiConfig);
    return handleApiCall(() => passwordsyncgroupsv2025api.createPasswordSyncGroup(requestParameters));
};
exports.createPasswordSyncGroup = createPasswordSyncGroup;
/**
 * This API deletes the specified password sync group.
 * @summary Delete Password Sync Group by ID
 * @param {PasswordSyncGroupsV2025ApiDeletePasswordSyncGroupRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deletePasswordSyncGroup = (requestParameters, apiConfig) => {
    const passwordsyncgroupsv2025api = new sdk.PasswordSyncGroupsV2025Api(apiConfig);
    return handleApiCall(() => passwordsyncgroupsv2025api.deletePasswordSyncGroup(requestParameters));
};
exports.deletePasswordSyncGroup = deletePasswordSyncGroup;
/**
 * This API returns the sync group for the specified ID.
 * @summary Get Password Sync Group by ID
 * @param {PasswordSyncGroupsV2025ApiGetPasswordSyncGroupRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getPasswordSyncGroup = (requestParameters, apiConfig) => {
    const passwordsyncgroupsv2025api = new sdk.PasswordSyncGroupsV2025Api(apiConfig);
    return handleApiCall(() => passwordsyncgroupsv2025api.getPasswordSyncGroup(requestParameters));
};
exports.getPasswordSyncGroup = getPasswordSyncGroup;
/**
 * This API returns a list of password sync groups.
 * @summary Get Password Sync Group List
 * @param {PasswordSyncGroupsV2025ApiGetPasswordSyncGroupsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getPasswordSyncGroups = (requestParameters = {}, apiConfig) => {
    const passwordsyncgroupsv2025api = new sdk.PasswordSyncGroupsV2025Api(apiConfig);
    return handleApiCall(() => passwordsyncgroupsv2025api.getPasswordSyncGroups(requestParameters));
};
exports.getPasswordSyncGroups = getPasswordSyncGroups;
/**
 * This API updates the specified password sync group.
 * @summary Update Password Sync Group by ID
 * @param {PasswordSyncGroupsV2025ApiUpdatePasswordSyncGroupRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updatePasswordSyncGroup = (requestParameters, apiConfig) => {
    const passwordsyncgroupsv2025api = new sdk.PasswordSyncGroupsV2025Api(apiConfig);
    return handleApiCall(() => passwordsyncgroupsv2025api.updatePasswordSyncGroup(requestParameters));
};
exports.updatePasswordSyncGroup = updatePasswordSyncGroup;
/**
 * This creates a personal access token.
 * @summary Create Personal Access Token
 * @param {PersonalAccessTokensV2025ApiCreatePersonalAccessTokenRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createPersonalAccessToken = (requestParameters, apiConfig) => {
    const personalaccesstokensv2025api = new sdk.PersonalAccessTokensV2025Api(apiConfig);
    return handleApiCall(() => personalaccesstokensv2025api.createPersonalAccessToken(requestParameters));
};
exports.createPersonalAccessToken = createPersonalAccessToken;
/**
 * This deletes a personal access token.
 * @summary Delete Personal Access Token
 * @param {PersonalAccessTokensV2025ApiDeletePersonalAccessTokenRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deletePersonalAccessToken = (requestParameters, apiConfig) => {
    const personalaccesstokensv2025api = new sdk.PersonalAccessTokensV2025Api(apiConfig);
    return handleApiCall(() => personalaccesstokensv2025api.deletePersonalAccessToken(requestParameters));
};
exports.deletePersonalAccessToken = deletePersonalAccessToken;
/**
 * This gets a collection of personal access tokens associated with the optional `owner-id`.  query parameter. If the `owner-id` query parameter is omitted, all personal access tokens  for a tenant will be retrieved, but the caller must have the \'idn:all-personal-access-tokens:read\' right.
 * @summary List Personal Access Tokens
 * @param {PersonalAccessTokensV2025ApiListPersonalAccessTokensRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listPersonalAccessTokens = (requestParameters = {}, apiConfig) => {
    const personalaccesstokensv2025api = new sdk.PersonalAccessTokensV2025Api(apiConfig);
    return handleApiCall(() => personalaccesstokensv2025api.listPersonalAccessTokens(requestParameters));
};
exports.listPersonalAccessTokens = listPersonalAccessTokens;
/**
 * This performs a targeted update to the field(s) of a Personal Access Token. Changing scopes for a Personal Access Token does not impact existing bearer tokens. You will need to create a new bearer token to have the new scopes. Please note that it can take up to 20 minutes for scope changes to be seen on new bearer tokens.
 * @summary Patch Personal Access Token
 * @param {PersonalAccessTokensV2025ApiPatchPersonalAccessTokenRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchPersonalAccessToken = (requestParameters, apiConfig) => {
    const personalaccesstokensv2025api = new sdk.PersonalAccessTokensV2025Api(apiConfig);
    return handleApiCall(() => personalaccesstokensv2025api.patchPersonalAccessToken(requestParameters));
};
exports.patchPersonalAccessToken = patchPersonalAccessToken;
/**
 * Get a list of public identities.  Set `add-core-filters` to `true` to exclude incomplete identities and uncorrelated accounts.
 * @summary Get list of public identities
 * @param {PublicIdentitiesV2025ApiGetPublicIdentitiesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getPublicIdentities = (requestParameters = {}, apiConfig) => {
    const publicidentitiesv2025api = new sdk.PublicIdentitiesV2025Api(apiConfig);
    return handleApiCall(() => publicidentitiesv2025api.getPublicIdentities(requestParameters));
};
exports.getPublicIdentities = getPublicIdentities;
/**
 * Returns the publicly visible attributes of an identity available to request approvers for Access Requests and Certification Campaigns.
 * @summary Get the Public Identities Configuration
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getPublicIdentityConfig = (apiConfig) => {
    const publicidentitiesconfigv2025api = new sdk.PublicIdentitiesConfigV2025Api(apiConfig);
    return handleApiCall(() => publicidentitiesconfigv2025api.getPublicIdentityConfig());
};
exports.getPublicIdentityConfig = getPublicIdentityConfig;
/**
 * Updates the publicly visible attributes of an identity available to request approvers for Access Requests and Certification Campaigns.
 * @summary Update the Public Identities Configuration
 * @param {PublicIdentitiesConfigV2025ApiUpdatePublicIdentityConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updatePublicIdentityConfig = (requestParameters, apiConfig) => {
    const publicidentitiesconfigv2025api = new sdk.PublicIdentitiesConfigV2025Api(apiConfig);
    return handleApiCall(() => publicidentitiesconfigv2025api.updatePublicIdentityConfig(requestParameters));
};
exports.updatePublicIdentityConfig = updatePublicIdentityConfig;
/**
 * Cancels a running report.
 * @summary Cancel Report
 * @param {ReportsDataExtractionV2025ApiCancelReportRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const cancelReport = (requestParameters, apiConfig) => {
    const reportsdataextractionv2025api = new sdk.ReportsDataExtractionV2025Api(apiConfig);
    return handleApiCall(() => reportsdataextractionv2025api.cancelReport(requestParameters));
};
exports.cancelReport = cancelReport;
/**
 * Gets a report in file format.
 * @summary Get Report File
 * @param {ReportsDataExtractionV2025ApiGetReportRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getReport = (requestParameters, apiConfig) => {
    const reportsdataextractionv2025api = new sdk.ReportsDataExtractionV2025Api(apiConfig);
    return handleApiCall(() => reportsdataextractionv2025api.getReport(requestParameters));
};
exports.getReport = getReport;
/**
 * Get the report results for a report that was run or is running. Returns empty report result in case there are no active task definitions with used in payload task definition name.
 * @summary Get Report Result
 * @param {ReportsDataExtractionV2025ApiGetReportResultRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getReportResult = (requestParameters, apiConfig) => {
    const reportsdataextractionv2025api = new sdk.ReportsDataExtractionV2025Api(apiConfig);
    return handleApiCall(() => reportsdataextractionv2025api.getReportResult(requestParameters));
};
exports.getReportResult = getReportResult;
/**
 * Use this API to run a report according to report input details. If non-concurrent task is already running then it returns, otherwise new task creates and returns.
 * @summary Run Report
 * @param {ReportsDataExtractionV2025ApiStartReportRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const startReport = (requestParameters, apiConfig) => {
    const reportsdataextractionv2025api = new sdk.ReportsDataExtractionV2025Api(apiConfig);
    return handleApiCall(() => reportsdataextractionv2025api.startReport(requestParameters));
};
exports.startReport = startReport;
/**
 * Get a list of acccess items that can be requested through the [Access Request endpoints](https://developer.sailpoint.com/docs/api/v2024/access-requests). Access items are marked with `AVAILABLE`, `PENDING` or `ASSIGNED` with respect to the identity provided using `identity-id` query parameter. Any authenticated token can call this endpoint to see their requestable access items.
 * @summary Requestable Objects List
 * @param {RequestableObjectsV2025ApiListRequestableObjectsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listRequestableObjects = (requestParameters = {}, apiConfig) => {
    const requestableobjectsv2025api = new sdk.RequestableObjectsV2025Api(apiConfig);
    return handleApiCall(() => requestableobjectsv2025api.listRequestableObjects(requestParameters));
};
exports.listRequestableObjects = listRequestableObjects;
/**
 * Submits a create role insights request to the role insights application. At this time there are no parameters. All business roles will be processed for the customer.
 * @summary Generate insights for roles
 * @param {RoleInsightsV2025ApiCreateRoleInsightRequestsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @deprecated
 * @throws {RequiredError}
 */
const createRoleInsightRequests = (requestParameters = {}, apiConfig) => {
    const roleinsightsv2025api = new sdk.RoleInsightsV2025Api(apiConfig);
    return handleApiCall(() => roleinsightsv2025api.createRoleInsightRequests(requestParameters));
};
exports.createRoleInsightRequests = createRoleInsightRequests;
/**
 * This endpoint returns the entitlement insights for a role.
 * @summary Download entitlement insights for a role
 * @param {RoleInsightsV2025ApiDownloadRoleInsightsEntitlementsChangesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const downloadRoleInsightsEntitlementsChanges = (requestParameters, apiConfig) => {
    const roleinsightsv2025api = new sdk.RoleInsightsV2025Api(apiConfig);
    return handleApiCall(() => roleinsightsv2025api.downloadRoleInsightsEntitlementsChanges(requestParameters));
};
exports.downloadRoleInsightsEntitlementsChanges = downloadRoleInsightsEntitlementsChanges;
/**
 * Role insights suggests entitlements to be added for a role. This endpoint returns a list of identities in the role, with or without the entitlements, for a suggested entitlement so that the user can see which identities would be affected if the suggested entitlement were to be added to the role.
 * @summary Get identities for a suggested entitlement (for a role)
 * @param {RoleInsightsV2025ApiGetEntitlementChangesIdentitiesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getEntitlementChangesIdentities = (requestParameters, apiConfig) => {
    const roleinsightsv2025api = new sdk.RoleInsightsV2025Api(apiConfig);
    return handleApiCall(() => roleinsightsv2025api.getEntitlementChangesIdentities(requestParameters));
};
exports.getEntitlementChangesIdentities = getEntitlementChangesIdentities;
/**
 * This endpoint gets role insights information for a role.
 * @summary Get a single role insight
 * @param {RoleInsightsV2025ApiGetRoleInsightRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getRoleInsight = (requestParameters, apiConfig) => {
    const roleinsightsv2025api = new sdk.RoleInsightsV2025Api(apiConfig);
    return handleApiCall(() => roleinsightsv2025api.getRoleInsight(requestParameters));
};
exports.getRoleInsight = getRoleInsight;
/**
 * This method returns detailed role insights for each role.
 * @summary Get role insights
 * @param {RoleInsightsV2025ApiGetRoleInsightsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getRoleInsights = (requestParameters = {}, apiConfig) => {
    const roleinsightsv2025api = new sdk.RoleInsightsV2025Api(apiConfig);
    return handleApiCall(() => roleinsightsv2025api.getRoleInsights(requestParameters));
};
exports.getRoleInsights = getRoleInsights;
/**
 * This endpoint gets the entitlements for a role. The term \"current\" is to distinguish from the entitlement(s) an insight might recommend adding.
 * @summary Get current entitlement for a role
 * @param {RoleInsightsV2025ApiGetRoleInsightsCurrentEntitlementsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getRoleInsightsCurrentEntitlements = (requestParameters, apiConfig) => {
    const roleinsightsv2025api = new sdk.RoleInsightsV2025Api(apiConfig);
    return handleApiCall(() => roleinsightsv2025api.getRoleInsightsCurrentEntitlements(requestParameters));
};
exports.getRoleInsightsCurrentEntitlements = getRoleInsightsCurrentEntitlements;
/**
 * This endpoint returns entitlement insights for a role.
 * @summary Get entitlement insights for a role
 * @param {RoleInsightsV2025ApiGetRoleInsightsEntitlementsChangesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getRoleInsightsEntitlementsChanges = (requestParameters, apiConfig) => {
    const roleinsightsv2025api = new sdk.RoleInsightsV2025Api(apiConfig);
    return handleApiCall(() => roleinsightsv2025api.getRoleInsightsEntitlementsChanges(requestParameters));
};
exports.getRoleInsightsEntitlementsChanges = getRoleInsightsEntitlementsChanges;
/**
 * This endpoint returns details of a prior role insights request.
 * @summary Returns metadata from prior request.
 * @param {RoleInsightsV2025ApiGetRoleInsightsRequestsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @deprecated
 * @throws {RequiredError}
 */
const getRoleInsightsRequests = (requestParameters, apiConfig) => {
    const roleinsightsv2025api = new sdk.RoleInsightsV2025Api(apiConfig);
    return handleApiCall(() => roleinsightsv2025api.getRoleInsightsRequests(requestParameters));
};
exports.getRoleInsightsRequests = getRoleInsightsRequests;
/**
 * This method returns high level summary information for role insights for a customer.
 * @summary Get role insights summary information
 * @param {RoleInsightsV2025ApiGetRoleInsightsSummaryRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getRoleInsightsSummary = (requestParameters = {}, apiConfig) => {
    const roleinsightsv2025api = new sdk.RoleInsightsV2025Api(apiConfig);
    return handleApiCall(() => roleinsightsv2025api.getRoleInsightsSummary(requestParameters));
};
exports.getRoleInsightsSummary = getRoleInsightsSummary;
/**
 * This API creates a role.  You must have a token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority to call this API.   In addition, a ROLE_SUBADMIN may not create a role including an access profile if that access profile is associated with a source the ROLE_SUBADMIN is not associated with themselves.   The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing roles. However, any new roles as well as any updates to existing descriptions will be limited to 2000 characters.
 * @summary Create a Role
 * @param {RolesV2025ApiCreateRoleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createRole = (requestParameters, apiConfig) => {
    const rolesv2025api = new sdk.RolesV2025Api(apiConfig);
    return handleApiCall(() => rolesv2025api.createRole(requestParameters));
};
exports.createRole = createRole;
/**
 * This endpoint initiates a bulk deletion of one or more roles. When the request is successful, the endpoint returns the bulk delete\'s task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status), which will return the task result\'s status and information.  This endpoint can only bulk delete up to a limit of 50 roles per request.  A user with ROLE_SUBADMIN authority can only call this endpoint if all roles included in the request are associated with sources with management workgroups the ROLE_SUBADMIN is a member of.
 * @summary Delete Role(s)
 * @param {RolesV2025ApiDeleteBulkRolesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteBulkRoles = (requestParameters, apiConfig) => {
    const rolesv2025api = new sdk.RolesV2025Api(apiConfig);
    return handleApiCall(() => rolesv2025api.deleteBulkRoles(requestParameters));
};
exports.deleteBulkRoles = deleteBulkRoles;
/**
 * This API initialize a request to remove a single Access Model Metadata from a role by attribute key and value. A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API.
 * @summary Remove a Metadata From Role.
 * @param {RolesV2025ApiDeleteMetadataFromRoleByKeyAndValueRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteMetadataFromRoleByKeyAndValue = (requestParameters, apiConfig) => {
    const rolesv2025api = new sdk.RolesV2025Api(apiConfig);
    return handleApiCall(() => rolesv2025api.deleteMetadataFromRoleByKeyAndValue(requestParameters));
};
exports.deleteMetadataFromRoleByKeyAndValue = deleteMetadataFromRoleByKeyAndValue;
/**
 * This API deletes a Role by its ID.  A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles included in the Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.
 * @summary Delete a Role
 * @param {RolesV2025ApiDeleteRoleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteRole = (requestParameters, apiConfig) => {
    const rolesv2025api = new sdk.RolesV2025Api(apiConfig);
    return handleApiCall(() => rolesv2025api.deleteRole(requestParameters));
};
exports.deleteRole = deleteRole;
/**
 * This API returns a list of all unfinished bulk update process status of the tenant.
 * @summary Get Bulk-Update Statuses
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getBulkUpdateStatus = (apiConfig) => {
    const rolesv2025api = new sdk.RolesV2025Api(apiConfig);
    return handleApiCall(() => rolesv2025api.getBulkUpdateStatus());
};
exports.getBulkUpdateStatus = getBulkUpdateStatus;
/**
 *  This API initial a request for one bulk update\'s status by bulk update Id returns the status of the bulk update process. A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API.
 * @summary Get Bulk-Update Status by ID
 * @param {RolesV2025ApiGetBulkUpdateStatusByIdRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getBulkUpdateStatusById = (requestParameters, apiConfig) => {
    const rolesv2025api = new sdk.RolesV2025Api(apiConfig);
    return handleApiCall(() => rolesv2025api.getBulkUpdateStatusById(requestParameters));
};
exports.getBulkUpdateStatusById = getBulkUpdateStatusById;
/**
 * This API returns a Role by its ID. A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles included in the Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.
 * @summary Get a Role
 * @param {RolesV2025ApiGetRoleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getRole = (requestParameters, apiConfig) => {
    const rolesv2025api = new sdk.RolesV2025Api(apiConfig);
    return handleApiCall(() => rolesv2025api.getRole(requestParameters));
};
exports.getRole = getRole;
/**
 *
 * @summary List Identities assigned a Role
 * @param {RolesV2025ApiGetRoleAssignedIdentitiesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getRoleAssignedIdentities = (requestParameters, apiConfig) => {
    const rolesv2025api = new sdk.RolesV2025Api(apiConfig);
    return handleApiCall(() => rolesv2025api.getRoleAssignedIdentities(requestParameters));
};
exports.getRoleAssignedIdentities = getRoleAssignedIdentities;
/**
 * Get a list of entitlements associated with a specified role.
 * @summary List Role\'s Entitlements
 * @param {RolesV2025ApiGetRoleEntitlementsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getRoleEntitlements = (requestParameters, apiConfig) => {
    const rolesv2025api = new sdk.RolesV2025Api(apiConfig);
    return handleApiCall(() => rolesv2025api.getRoleEntitlements(requestParameters));
};
exports.getRoleEntitlements = getRoleEntitlements;
/**
 * This API returns a list of Roles.  A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API.
 * @summary List Roles
 * @param {RolesV2025ApiListRolesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listRoles = (requestParameters = {}, apiConfig) => {
    const rolesv2025api = new sdk.RolesV2025Api(apiConfig);
    return handleApiCall(() => rolesv2025api.listRoles(requestParameters));
};
exports.listRoles = listRoles;
/**
 * This API updates an existing role using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.  The following fields are patchable:  * name * description * enabled * owner * accessProfiles * entitlements * membership * requestable * accessRequestConfig * revokeRequestConfig * segments * accessModelMetadata    A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all access profiles included in the role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.  The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing roles, however, any new roles as well as any updates to existing descriptions will be limited to 2000 characters.  When you use this API to modify a role\'s membership identities, you can only modify up to a limit of 500 membership identities at a time.
 * @summary Patch a specified Role
 * @param {RolesV2025ApiPatchRoleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchRole = (requestParameters, apiConfig) => {
    const rolesv2025api = new sdk.RolesV2025Api(apiConfig);
    return handleApiCall(() => rolesv2025api.patchRole(requestParameters));
};
exports.patchRole = patchRole;
/**
 * This API returns a list of Role that filter by metadata and filter, it support filter by  both path parameter and attribute key and values. A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, HELPDESK, CERT_ADMIN, REPORT_ADMIN or SOURCE_ADMIN  authority is required to call this API.
 * @summary Filter Roles by Metadata
 * @param {RolesV2025ApiSearchRolesByFilterRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const searchRolesByFilter = (requestParameters = {}, apiConfig) => {
    const rolesv2025api = new sdk.RolesV2025Api(apiConfig);
    return handleApiCall(() => rolesv2025api.searchRolesByFilter(requestParameters));
};
exports.searchRolesByFilter = searchRolesByFilter;
/**
 * This API initialize a request to add a single Access Model Metadata to a role by attribute key and attribute value. A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API. The maximum number of attributes in one role is 25. Custom metadata update, including ADD and REPLACE need suit licensed.
 * @summary Add a Metadata to Role.
 * @param {RolesV2025ApiUpdateAttributeKeyAndValueToRoleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateAttributeKeyAndValueToRole = (requestParameters, apiConfig) => {
    const rolesv2025api = new sdk.RolesV2025Api(apiConfig);
    return handleApiCall(() => rolesv2025api.updateAttributeKeyAndValueToRole(requestParameters));
};
exports.updateAttributeKeyAndValueToRole = updateAttributeKeyAndValueToRole;
/**
 * This API initiates a bulk update of metadata for one or more Roles by filter. A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API. The maximum metadata value count for a single role is 25. Custom metadata update, including add, replace need suit licensed.
 * @summary Bulk-Update Roles\' Metadata by Filters
 * @param {RolesV2025ApiUpdateRolesMetadataByFilterRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateRolesMetadataByFilter = (requestParameters, apiConfig) => {
    const rolesv2025api = new sdk.RolesV2025Api(apiConfig);
    return handleApiCall(() => rolesv2025api.updateRolesMetadataByFilter(requestParameters));
};
exports.updateRolesMetadataByFilter = updateRolesMetadataByFilter;
/**
 * This API initiates a bulk update of metadata for one or more Roles by a list of Role Ids. A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API. The maximum role count in a single update request is 3000. The maximum metadata value count for a single role is 25. Custom metadata update, including add, replace need suit licensed.
 * @summary Bulk-Update Roles\' Metadata by ID
 * @param {RolesV2025ApiUpdateRolesMetadataByIdsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateRolesMetadataByIds = (requestParameters, apiConfig) => {
    const rolesv2025api = new sdk.RolesV2025Api(apiConfig);
    return handleApiCall(() => rolesv2025api.updateRolesMetadataByIds(requestParameters));
};
exports.updateRolesMetadataByIds = updateRolesMetadataByIds;
/**
 * This API initiates a bulk update of metadata for one or more Roles by query. A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API. The maximum metadata value count for a single role is 25. Custom metadata update, including add, replace need suit licensed.
 * @summary Bulk-Update Roles\' Metadata by Query
 * @param {RolesV2025ApiUpdateRolesMetadataByQueryRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateRolesMetadataByQuery = (requestParameters, apiConfig) => {
    const rolesv2025api = new sdk.RolesV2025Api(apiConfig);
    return handleApiCall(() => rolesv2025api.updateRolesMetadataByQuery(requestParameters));
};
exports.updateRolesMetadataByQuery = updateRolesMetadataByQuery;
/**
 * Create a new SIM Integrations.
 * @summary Create new SIM integration
 * @param {SIMIntegrationsV2025ApiCreateSIMIntegrationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createSIMIntegration = (requestParameters, apiConfig) => {
    const simintegrationsv2025api = new sdk.SIMIntegrationsV2025Api(apiConfig);
    return handleApiCall(() => simintegrationsv2025api.createSIMIntegration(requestParameters));
};
exports.createSIMIntegration = createSIMIntegration;
/**
 * Get the details of a SIM integration.
 * @summary Delete a SIM integration
 * @param {SIMIntegrationsV2025ApiDeleteSIMIntegrationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteSIMIntegration = (requestParameters, apiConfig) => {
    const simintegrationsv2025api = new sdk.SIMIntegrationsV2025Api(apiConfig);
    return handleApiCall(() => simintegrationsv2025api.deleteSIMIntegration(requestParameters));
};
exports.deleteSIMIntegration = deleteSIMIntegration;
/**
 * Get the details of a SIM integration.
 * @summary Get a SIM integration details.
 * @param {SIMIntegrationsV2025ApiGetSIMIntegrationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSIMIntegration = (requestParameters, apiConfig) => {
    const simintegrationsv2025api = new sdk.SIMIntegrationsV2025Api(apiConfig);
    return handleApiCall(() => simintegrationsv2025api.getSIMIntegration(requestParameters));
};
exports.getSIMIntegration = getSIMIntegration;
/**
 * List the existing SIM integrations.
 * @summary List the existing SIM integrations.
 * @param {SIMIntegrationsV2025ApiGetSIMIntegrationsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSIMIntegrations = (requestParameters = {}, apiConfig) => {
    const simintegrationsv2025api = new sdk.SIMIntegrationsV2025Api(apiConfig);
    return handleApiCall(() => simintegrationsv2025api.getSIMIntegrations(requestParameters));
};
exports.getSIMIntegrations = getSIMIntegrations;
/**
 * Patch a SIM beforeProvisioningRule attribute given a JsonPatch object.
 * @summary Patch a SIM beforeProvisioningRule attribute.
 * @param {SIMIntegrationsV2025ApiPatchBeforeProvisioningRuleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchBeforeProvisioningRule = (requestParameters, apiConfig) => {
    const simintegrationsv2025api = new sdk.SIMIntegrationsV2025Api(apiConfig);
    return handleApiCall(() => simintegrationsv2025api.patchBeforeProvisioningRule(requestParameters));
};
exports.patchBeforeProvisioningRule = patchBeforeProvisioningRule;
/**
 * Patch a SIM attribute given a JsonPatch object.
 * @summary Patch a SIM attribute.
 * @param {SIMIntegrationsV2025ApiPatchSIMAttributesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchSIMAttributes = (requestParameters, apiConfig) => {
    const simintegrationsv2025api = new sdk.SIMIntegrationsV2025Api(apiConfig);
    return handleApiCall(() => simintegrationsv2025api.patchSIMAttributes(requestParameters));
};
exports.patchSIMAttributes = patchSIMAttributes;
/**
 * Update an existing SIM integration.
 * @summary Update an existing SIM integration
 * @param {SIMIntegrationsV2025ApiPutSIMIntegrationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putSIMIntegration = (requestParameters, apiConfig) => {
    const simintegrationsv2025api = new sdk.SIMIntegrationsV2025Api(apiConfig);
    return handleApiCall(() => simintegrationsv2025api.putSIMIntegration(requestParameters));
};
exports.putSIMIntegration = putSIMIntegration;
/**
 * This creates both General and Conflicting Access Based policy, with a limit of 50 entitlements for each (left & right) criteria for Conflicting Access Based SOD policy. Requires role of ORG_ADMIN.
 * @summary Create SOD policy
 * @param {SODPoliciesV2025ApiCreateSodPolicyRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createSodPolicy = (requestParameters, apiConfig) => {
    const sodpoliciesv2025api = new sdk.SODPoliciesV2025Api(apiConfig);
    return handleApiCall(() => sodpoliciesv2025api.createSodPolicy(requestParameters));
};
exports.createSodPolicy = createSodPolicy;
/**
 * This deletes a specified SOD policy. Requires role of ORG_ADMIN.
 * @summary Delete SOD policy by ID
 * @param {SODPoliciesV2025ApiDeleteSodPolicyRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteSodPolicy = (requestParameters, apiConfig) => {
    const sodpoliciesv2025api = new sdk.SODPoliciesV2025Api(apiConfig);
    return handleApiCall(() => sodpoliciesv2025api.deleteSodPolicy(requestParameters));
};
exports.deleteSodPolicy = deleteSodPolicy;
/**
 * This deletes schedule for a specified SOD policy by ID.
 * @summary Delete SOD policy schedule
 * @param {SODPoliciesV2025ApiDeleteSodPolicyScheduleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteSodPolicySchedule = (requestParameters, apiConfig) => {
    const sodpoliciesv2025api = new sdk.SODPoliciesV2025Api(apiConfig);
    return handleApiCall(() => sodpoliciesv2025api.deleteSodPolicySchedule(requestParameters));
};
exports.deleteSodPolicySchedule = deleteSodPolicySchedule;
/**
 * This allows to download a specified named violation report for a given report reference.
 * @summary Download custom violation report
 * @param {SODPoliciesV2025ApiGetCustomViolationReportRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getCustomViolationReport = (requestParameters, apiConfig) => {
    const sodpoliciesv2025api = new sdk.SODPoliciesV2025Api(apiConfig);
    return handleApiCall(() => sodpoliciesv2025api.getCustomViolationReport(requestParameters));
};
exports.getCustomViolationReport = getCustomViolationReport;
/**
 * This allows to download a violation report for a given report reference.
 * @summary Download violation report
 * @param {SODPoliciesV2025ApiGetDefaultViolationReportRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getDefaultViolationReport = (requestParameters, apiConfig) => {
    const sodpoliciesv2025api = new sdk.SODPoliciesV2025Api(apiConfig);
    return handleApiCall(() => sodpoliciesv2025api.getDefaultViolationReport(requestParameters));
};
exports.getDefaultViolationReport = getDefaultViolationReport;
/**
 * This endpoint gets the status for a violation report for all policy run.
 * @summary Get multi-report run task status
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSodAllReportRunStatus = (apiConfig) => {
    const sodpoliciesv2025api = new sdk.SODPoliciesV2025Api(apiConfig);
    return handleApiCall(() => sodpoliciesv2025api.getSodAllReportRunStatus());
};
exports.getSodAllReportRunStatus = getSodAllReportRunStatus;
/**
 * This gets specified SOD policy. Requires role of ORG_ADMIN.
 * @summary Get SOD policy by ID
 * @param {SODPoliciesV2025ApiGetSodPolicyRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSodPolicy = (requestParameters, apiConfig) => {
    const sodpoliciesv2025api = new sdk.SODPoliciesV2025Api(apiConfig);
    return handleApiCall(() => sodpoliciesv2025api.getSodPolicy(requestParameters));
};
exports.getSodPolicy = getSodPolicy;
/**
 * This endpoint gets a specified SOD policy\'s schedule.
 * @summary Get SOD policy schedule
 * @param {SODPoliciesV2025ApiGetSodPolicyScheduleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSodPolicySchedule = (requestParameters, apiConfig) => {
    const sodpoliciesv2025api = new sdk.SODPoliciesV2025Api(apiConfig);
    return handleApiCall(() => sodpoliciesv2025api.getSodPolicySchedule(requestParameters));
};
exports.getSodPolicySchedule = getSodPolicySchedule;
/**
 * This gets the status for a violation report run task that has already been invoked.
 * @summary Get violation report run status
 * @param {SODPoliciesV2025ApiGetSodViolationReportRunStatusRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSodViolationReportRunStatus = (requestParameters, apiConfig) => {
    const sodpoliciesv2025api = new sdk.SODPoliciesV2025Api(apiConfig);
    return handleApiCall(() => sodpoliciesv2025api.getSodViolationReportRunStatus(requestParameters));
};
exports.getSodViolationReportRunStatus = getSodViolationReportRunStatus;
/**
 * This gets the status for a violation report run task that has already been invoked.
 * @summary Get SOD violation report status
 * @param {SODPoliciesV2025ApiGetSodViolationReportStatusRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSodViolationReportStatus = (requestParameters, apiConfig) => {
    const sodpoliciesv2025api = new sdk.SODPoliciesV2025Api(apiConfig);
    return handleApiCall(() => sodpoliciesv2025api.getSodViolationReportStatus(requestParameters));
};
exports.getSodViolationReportStatus = getSodViolationReportStatus;
/**
 * This gets list of all SOD policies. Requires role of ORG_ADMIN
 * @summary List SOD policies
 * @param {SODPoliciesV2025ApiListSodPoliciesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listSodPolicies = (requestParameters = {}, apiConfig) => {
    const sodpoliciesv2025api = new sdk.SODPoliciesV2025Api(apiConfig);
    return handleApiCall(() => sodpoliciesv2025api.listSodPolicies(requestParameters));
};
exports.listSodPolicies = listSodPolicies;
/**
 * Allows updating SOD Policy fields other than [\"id\",\"created\",\"creatorId\",\"policyQuery\",\"type\"] using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Requires role of ORG_ADMIN. This endpoint can only patch CONFLICTING_ACCESS_BASED type policies. Do not use this endpoint to patch general policies - doing so will build an API exception.
 * @summary Patch SOD policy by ID
 * @param {SODPoliciesV2025ApiPatchSodPolicyRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchSodPolicy = (requestParameters, apiConfig) => {
    const sodpoliciesv2025api = new sdk.SODPoliciesV2025Api(apiConfig);
    return handleApiCall(() => sodpoliciesv2025api.patchSodPolicy(requestParameters));
};
exports.patchSodPolicy = patchSodPolicy;
/**
 * This updates schedule for a specified SOD policy.
 * @summary Update SOD Policy schedule
 * @param {SODPoliciesV2025ApiPutPolicyScheduleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putPolicySchedule = (requestParameters, apiConfig) => {
    const sodpoliciesv2025api = new sdk.SODPoliciesV2025Api(apiConfig);
    return handleApiCall(() => sodpoliciesv2025api.putPolicySchedule(requestParameters));
};
exports.putPolicySchedule = putPolicySchedule;
/**
 * This updates a specified SOD policy. Requires role of ORG_ADMIN.
 * @summary Update SOD policy by ID
 * @param {SODPoliciesV2025ApiPutSodPolicyRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putSodPolicy = (requestParameters, apiConfig) => {
    const sodpoliciesv2025api = new sdk.SODPoliciesV2025Api(apiConfig);
    return handleApiCall(() => sodpoliciesv2025api.putSodPolicy(requestParameters));
};
exports.putSodPolicy = putSodPolicy;
/**
 * Runs the scheduled report for the policy retrieved by passed policy ID.  The report schedule is fetched from the policy retrieved by ID.
 * @summary Evaluate one policy by ID
 * @param {SODPoliciesV2025ApiStartEvaluateSodPolicyRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const startEvaluateSodPolicy = (requestParameters, apiConfig) => {
    const sodpoliciesv2025api = new sdk.SODPoliciesV2025Api(apiConfig);
    return handleApiCall(() => sodpoliciesv2025api.startEvaluateSodPolicy(requestParameters));
};
exports.startEvaluateSodPolicy = startEvaluateSodPolicy;
/**
 * Runs multi-policy report for the org. If a policy reports more than 5000 violations, the report mentions that the violation limit was exceeded for that policy. If the request is empty, the report runs for all policies. Otherwise, the report runs for only the filtered policy list provided.
 * @summary Runs all policies for org
 * @param {SODPoliciesV2025ApiStartSodAllPoliciesForOrgRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const startSodAllPoliciesForOrg = (requestParameters = {}, apiConfig) => {
    const sodpoliciesv2025api = new sdk.SODPoliciesV2025Api(apiConfig);
    return handleApiCall(() => sodpoliciesv2025api.startSodAllPoliciesForOrg(requestParameters));
};
exports.startSodAllPoliciesForOrg = startSodAllPoliciesForOrg;
/**
 * This invokes processing of violation report for given SOD policy. If the policy reports more than 5000 violations, the report returns with violation limit exceeded message.
 * @summary Runs SOD policy violation report
 * @param {SODPoliciesV2025ApiStartSodPolicyRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const startSodPolicy = (requestParameters, apiConfig) => {
    const sodpoliciesv2025api = new sdk.SODPoliciesV2025Api(apiConfig);
    return handleApiCall(() => sodpoliciesv2025api.startSodPolicy(requestParameters));
};
exports.startSodPolicy = startSodPolicy;
/**
 * This API is used to check if granting some additional accesses would cause the subject to be in violation of any SOD policies. Returns the violations that would be caused.
 * @summary Predict SOD violations for identity.
 * @param {SODViolationsV2025ApiStartPredictSodViolationsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const startPredictSodViolations = (requestParameters, apiConfig) => {
    const sodviolationsv2025api = new sdk.SODViolationsV2025Api(apiConfig);
    return handleApiCall(() => sodviolationsv2025api.startPredictSodViolations(requestParameters));
};
exports.startPredictSodViolations = startPredictSodViolations;
/**
 * This API initiates a SOD policy verification asynchronously.
 * @summary Check SOD violations
 * @param {SODViolationsV2025ApiStartViolationCheckRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const startViolationCheck = (requestParameters, apiConfig) => {
    const sodviolationsv2025api = new sdk.SODViolationsV2025Api(apiConfig);
    return handleApiCall(() => sodviolationsv2025api.startViolationCheck(requestParameters));
};
exports.startViolationCheck = startViolationCheck;
/**
 * This post will export objects from the tenant to a JSON configuration file. For more information about the object types that currently support export functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects).
 * @summary Initiates configuration objects export job
 * @param {SPConfigV2025ApiExportSpConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const exportSpConfig = (requestParameters, apiConfig) => {
    const spconfigv2025api = new sdk.SPConfigV2025Api(apiConfig);
    return handleApiCall(() => spconfigv2025api.exportSpConfig(requestParameters));
};
exports.exportSpConfig = exportSpConfig;
/**
 * This endpoint gets the export file resulting from the export job with the requested `id` and downloads it to a file. The request will need one of the following security scopes: - sp:config:read - sp:config:manage
 * @summary Download export job result.
 * @param {SPConfigV2025ApiGetSpConfigExportRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSpConfigExport = (requestParameters, apiConfig) => {
    const spconfigv2025api = new sdk.SPConfigV2025Api(apiConfig);
    return handleApiCall(() => spconfigv2025api.getSpConfigExport(requestParameters));
};
exports.getSpConfigExport = getSpConfigExport;
/**
 * This gets the status of the export job identified by the `id` parameter. The request will need one of the following security scopes: - sp:config:read - sp:config:manage
 * @summary Get export job status
 * @param {SPConfigV2025ApiGetSpConfigExportStatusRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSpConfigExportStatus = (requestParameters, apiConfig) => {
    const spconfigv2025api = new sdk.SPConfigV2025Api(apiConfig);
    return handleApiCall(() => spconfigv2025api.getSpConfigExportStatus(requestParameters));
};
exports.getSpConfigExportStatus = getSpConfigExportStatus;
/**
 * This gets import file resulting from the import job with the requested id and downloads it to a file. The downloaded file will contain the results of the import operation, including any error, warning or informational messages associated with the import. The request will need the following security scope: - sp:config:manage
 * @summary Download import job result
 * @param {SPConfigV2025ApiGetSpConfigImportRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSpConfigImport = (requestParameters, apiConfig) => {
    const spconfigv2025api = new sdk.SPConfigV2025Api(apiConfig);
    return handleApiCall(() => spconfigv2025api.getSpConfigImport(requestParameters));
};
exports.getSpConfigImport = getSpConfigImport;
/**
 * \'This gets the status of the import job identified by the `id` parameter.   For more information about the object types that currently support import functionality,  refer to [SaaS Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects).\'
 * @summary Get import job status
 * @param {SPConfigV2025ApiGetSpConfigImportStatusRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSpConfigImportStatus = (requestParameters, apiConfig) => {
    const spconfigv2025api = new sdk.SPConfigV2025Api(apiConfig);
    return handleApiCall(() => spconfigv2025api.getSpConfigImportStatus(requestParameters));
};
exports.getSpConfigImportStatus = getSpConfigImportStatus;
/**
 * This post will import objects from a JSON configuration file into a tenant. By default, every import will first export all existing objects supported by sp-config as a backup before the import is attempted. The backup is provided so that the state of the configuration prior to the import is available for inspection or restore if needed. The backup can be skipped by setting \"excludeBackup\" to true in the import options. If a backup is performed, the id of the backup will be provided in the ImportResult as the \"exportJobId\". This can be downloaded  using the `/sp-config/export/{exportJobId}/download` endpoint.  You cannot currently import from the Non-Employee Lifecycle Management (NELM) source. You cannot use this endpoint to back up or store NELM data.   For more information about the object types that currently support import functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects).
 * @summary Initiates configuration objects import job
 * @param {SPConfigV2025ApiImportSpConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const importSpConfig = (requestParameters, apiConfig) => {
    const spconfigv2025api = new sdk.SPConfigV2025Api(apiConfig);
    return handleApiCall(() => spconfigv2025api.importSpConfig(requestParameters));
};
exports.importSpConfig = importSpConfig;
/**
 * Get a list of object configurations that the tenant export/import service knows.
 * @summary List Config Objects
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listSpConfigObjects = (apiConfig) => {
    const spconfigv2025api = new sdk.SPConfigV2025Api(apiConfig);
    return handleApiCall(() => spconfigv2025api.listSpConfigObjects());
};
exports.listSpConfigObjects = listSpConfigObjects;
/**
 * Creates a new saved search.
 * @summary Create a saved search
 * @param {SavedSearchV2025ApiCreateSavedSearchRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createSavedSearch = (requestParameters, apiConfig) => {
    const savedsearchv2025api = new sdk.SavedSearchV2025Api(apiConfig);
    return handleApiCall(() => savedsearchv2025api.createSavedSearch(requestParameters));
};
exports.createSavedSearch = createSavedSearch;
/**
 * Deletes the specified saved search.
 * @summary Delete document by ID
 * @param {SavedSearchV2025ApiDeleteSavedSearchRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteSavedSearch = (requestParameters, apiConfig) => {
    const savedsearchv2025api = new sdk.SavedSearchV2025Api(apiConfig);
    return handleApiCall(() => savedsearchv2025api.deleteSavedSearch(requestParameters));
};
exports.deleteSavedSearch = deleteSavedSearch;
/**
 * Executes the specified saved search.
 * @summary Execute a saved search by ID
 * @param {SavedSearchV2025ApiExecuteSavedSearchRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const executeSavedSearch = (requestParameters, apiConfig) => {
    const savedsearchv2025api = new sdk.SavedSearchV2025Api(apiConfig);
    return handleApiCall(() => savedsearchv2025api.executeSavedSearch(requestParameters));
};
exports.executeSavedSearch = executeSavedSearch;
/**
 * Returns the specified saved search.
 * @summary Return saved search by ID
 * @param {SavedSearchV2025ApiGetSavedSearchRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSavedSearch = (requestParameters, apiConfig) => {
    const savedsearchv2025api = new sdk.SavedSearchV2025Api(apiConfig);
    return handleApiCall(() => savedsearchv2025api.getSavedSearch(requestParameters));
};
exports.getSavedSearch = getSavedSearch;
/**
 * Returns a list of saved searches.
 * @summary A list of Saved Searches
 * @param {SavedSearchV2025ApiListSavedSearchesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listSavedSearches = (requestParameters = {}, apiConfig) => {
    const savedsearchv2025api = new sdk.SavedSearchV2025Api(apiConfig);
    return handleApiCall(() => savedsearchv2025api.listSavedSearches(requestParameters));
};
exports.listSavedSearches = listSavedSearches;
/**
 * Updates an existing saved search.   >**NOTE: You cannot update the `owner` of the saved search.**
 * @summary Updates an existing saved search
 * @param {SavedSearchV2025ApiPutSavedSearchRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putSavedSearch = (requestParameters, apiConfig) => {
    const savedsearchv2025api = new sdk.SavedSearchV2025Api(apiConfig);
    return handleApiCall(() => savedsearchv2025api.putSavedSearch(requestParameters));
};
exports.putSavedSearch = putSavedSearch;
/**
 * Creates a new scheduled search.
 * @summary Create a new scheduled search
 * @param {ScheduledSearchV2025ApiCreateScheduledSearchRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createScheduledSearch = (requestParameters, apiConfig) => {
    const scheduledsearchv2025api = new sdk.ScheduledSearchV2025Api(apiConfig);
    return handleApiCall(() => scheduledsearchv2025api.createScheduledSearch(requestParameters));
};
exports.createScheduledSearch = createScheduledSearch;
/**
 * Deletes the specified scheduled search.
 * @summary Delete a Scheduled Search
 * @param {ScheduledSearchV2025ApiDeleteScheduledSearchRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteScheduledSearch = (requestParameters, apiConfig) => {
    const scheduledsearchv2025api = new sdk.ScheduledSearchV2025Api(apiConfig);
    return handleApiCall(() => scheduledsearchv2025api.deleteScheduledSearch(requestParameters));
};
exports.deleteScheduledSearch = deleteScheduledSearch;
/**
 * Returns the specified scheduled search.
 * @summary Get a Scheduled Search
 * @param {ScheduledSearchV2025ApiGetScheduledSearchRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getScheduledSearch = (requestParameters, apiConfig) => {
    const scheduledsearchv2025api = new sdk.ScheduledSearchV2025Api(apiConfig);
    return handleApiCall(() => scheduledsearchv2025api.getScheduledSearch(requestParameters));
};
exports.getScheduledSearch = getScheduledSearch;
/**
 * Returns a list of scheduled searches.
 * @summary List scheduled searches
 * @param {ScheduledSearchV2025ApiListScheduledSearchRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listScheduledSearch = (requestParameters = {}, apiConfig) => {
    const scheduledsearchv2025api = new sdk.ScheduledSearchV2025Api(apiConfig);
    return handleApiCall(() => scheduledsearchv2025api.listScheduledSearch(requestParameters));
};
exports.listScheduledSearch = listScheduledSearch;
/**
 * Unsubscribes a recipient from the specified scheduled search.
 * @summary Unsubscribe a recipient from Scheduled Search
 * @param {ScheduledSearchV2025ApiUnsubscribeScheduledSearchRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const unsubscribeScheduledSearch = (requestParameters, apiConfig) => {
    const scheduledsearchv2025api = new sdk.ScheduledSearchV2025Api(apiConfig);
    return handleApiCall(() => scheduledsearchv2025api.unsubscribeScheduledSearch(requestParameters));
};
exports.unsubscribeScheduledSearch = unsubscribeScheduledSearch;
/**
 * Updates an existing scheduled search.
 * @summary Update an existing Scheduled Search
 * @param {ScheduledSearchV2025ApiUpdateScheduledSearchRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateScheduledSearch = (requestParameters, apiConfig) => {
    const scheduledsearchv2025api = new sdk.ScheduledSearchV2025Api(apiConfig);
    return handleApiCall(() => scheduledsearchv2025api.updateScheduledSearch(requestParameters));
};
exports.updateScheduledSearch = updateScheduledSearch;
/**
 * Performs a search query aggregation and returns the aggregation result. By default, you can page a maximum of 10,000 search result records.  To page past 10,000 records, you can use searchAfter paging.  Refer to [Paginating Search Queries](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-search-queries) for more information about how to implement searchAfter paging.
 * @summary Perform a Search Query Aggregation
 * @param {SearchV2025ApiSearchAggregateRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const searchAggregate = (requestParameters, apiConfig) => {
    const searchv2025api = new sdk.SearchV2025Api(apiConfig);
    return handleApiCall(() => searchv2025api.searchAggregate(requestParameters));
};
exports.searchAggregate = searchAggregate;
/**
 * Performs a search with a provided query and returns the count of results in the X-Total-Count header.
 * @summary Count Documents Satisfying a Query
 * @param {SearchV2025ApiSearchCountRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const searchCount = (requestParameters, apiConfig) => {
    const searchv2025api = new sdk.SearchV2025Api(apiConfig);
    return handleApiCall(() => searchv2025api.searchCount(requestParameters));
};
exports.searchCount = searchCount;
/**
 * Fetches a single document from the specified index, using the specified document ID.
 * @summary Get a Document by ID
 * @param {SearchV2025ApiSearchGetRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const searchGet = (requestParameters, apiConfig) => {
    const searchv2025api = new sdk.SearchV2025Api(apiConfig);
    return handleApiCall(() => searchv2025api.searchGet(requestParameters));
};
exports.searchGet = searchGet;
/**
 * Perform a search with the provided query and return a matching result collection. To page past 10,000 records, you can use `searchAfter` paging.  Refer to [Paginating Search Queries](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-search-queries) for more information about how to implement `searchAfter` paging.
 * @summary Perform Search
 * @param {SearchV2025ApiSearchPostRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const searchPost = (requestParameters, apiConfig) => {
    const searchv2025api = new sdk.SearchV2025Api(apiConfig);
    return handleApiCall(() => searchv2025api.searchPost(requestParameters));
};
exports.searchPost = searchPost;
/**
 * Create and configure extended search attributes.  This API accepts an attribute name, an attribute display name and a list of name/value pair associates of application IDs to attribute names.  It will then validate the inputs and configure/create the attribute promotion configuration in the Link ObjectConfig. >**Note: Give searchable attributes unique names.  Do not give them the same names used for account attributes or source attributes.  Also, do not give them the same names present in account schema for a current or future source, regardless of whether that source is included in the searchable attributes\' `applicationAttributes`.**
 * @summary Create Extended Search Attributes
 * @param {SearchAttributeConfigurationV2025ApiCreateSearchAttributeConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createSearchAttributeConfig = (requestParameters, apiConfig) => {
    const searchattributeconfigurationv2025api = new sdk.SearchAttributeConfigurationV2025Api(apiConfig);
    return handleApiCall(() => searchattributeconfigurationv2025api.createSearchAttributeConfig(requestParameters));
};
exports.createSearchAttributeConfig = createSearchAttributeConfig;
/**
 * Delete an extended attribute configuration by name.
 * @summary Delete Extended Search Attribute
 * @param {SearchAttributeConfigurationV2025ApiDeleteSearchAttributeConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteSearchAttributeConfig = (requestParameters, apiConfig) => {
    const searchattributeconfigurationv2025api = new sdk.SearchAttributeConfigurationV2025Api(apiConfig);
    return handleApiCall(() => searchattributeconfigurationv2025api.deleteSearchAttributeConfig(requestParameters));
};
exports.deleteSearchAttributeConfig = deleteSearchAttributeConfig;
/**
 * Get a list of attribute/application attributes currently configured in Identity Security Cloud (ISC).
 * @summary List Extended Search Attributes
 * @param {SearchAttributeConfigurationV2025ApiGetSearchAttributeConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSearchAttributeConfig = (requestParameters, apiConfig) => {
    const searchattributeconfigurationv2025api = new sdk.SearchAttributeConfigurationV2025Api(apiConfig);
    return handleApiCall(() => searchattributeconfigurationv2025api.getSearchAttributeConfig(requestParameters));
};
exports.getSearchAttributeConfig = getSearchAttributeConfig;
/**
 * Get an extended attribute configuration by name.
 * @summary Get Extended Search Attribute
 * @param {SearchAttributeConfigurationV2025ApiGetSingleSearchAttributeConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSingleSearchAttributeConfig = (requestParameters, apiConfig) => {
    const searchattributeconfigurationv2025api = new sdk.SearchAttributeConfigurationV2025Api(apiConfig);
    return handleApiCall(() => searchattributeconfigurationv2025api.getSingleSearchAttributeConfig(requestParameters));
};
exports.getSingleSearchAttributeConfig = getSingleSearchAttributeConfig;
/**
 * Update an existing search attribute configuration.  You can patch these fields: * name  * displayName * applicationAttributes
 * @summary Update Extended Search Attribute
 * @param {SearchAttributeConfigurationV2025ApiPatchSearchAttributeConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchSearchAttributeConfig = (requestParameters, apiConfig) => {
    const searchattributeconfigurationv2025api = new sdk.SearchAttributeConfigurationV2025Api(apiConfig);
    return handleApiCall(() => searchattributeconfigurationv2025api.patchSearchAttributeConfig(requestParameters));
};
exports.patchSearchAttributeConfig = patchSearchAttributeConfig;
/**
 * This API creates a segment.  >**Note:** Segment definitions may take time to propagate to all identities.
 * @summary Create Segment
 * @param {SegmentsV2025ApiCreateSegmentRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createSegment = (requestParameters, apiConfig) => {
    const segmentsv2025api = new sdk.SegmentsV2025Api(apiConfig);
    return handleApiCall(() => segmentsv2025api.createSegment(requestParameters));
};
exports.createSegment = createSegment;
/**
 * This API deletes the segment specified by the given ID. >**Note:** that segment deletion may take some time to become effective.
 * @summary Delete Segment by ID
 * @param {SegmentsV2025ApiDeleteSegmentRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteSegment = (requestParameters, apiConfig) => {
    const segmentsv2025api = new sdk.SegmentsV2025Api(apiConfig);
    return handleApiCall(() => segmentsv2025api.deleteSegment(requestParameters));
};
exports.deleteSegment = deleteSegment;
/**
 * This API returns the segment specified by the given ID.
 * @summary Get Segment by ID
 * @param {SegmentsV2025ApiGetSegmentRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSegment = (requestParameters, apiConfig) => {
    const segmentsv2025api = new sdk.SegmentsV2025Api(apiConfig);
    return handleApiCall(() => segmentsv2025api.getSegment(requestParameters));
};
exports.getSegment = getSegment;
/**
 * This API returns a list of all segments.
 * @summary List Segments
 * @param {SegmentsV2025ApiListSegmentsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listSegments = (requestParameters = {}, apiConfig) => {
    const segmentsv2025api = new sdk.SegmentsV2025Api(apiConfig);
    return handleApiCall(() => segmentsv2025api.listSegments(requestParameters));
};
exports.listSegments = listSegments;
/**
 * Use this API to update segment fields by using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. >**Note:** Changes to a segment may take some time to propagate to all identities.
 * @summary Update Segment
 * @param {SegmentsV2025ApiPatchSegmentRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchSegment = (requestParameters, apiConfig) => {
    const segmentsv2025api = new sdk.SegmentsV2025Api(apiConfig);
    return handleApiCall(() => segmentsv2025api.patchSegment(requestParameters));
};
exports.patchSegment = patchSegment;
/**
 * Create a new Service Desk integration.
 * @summary Create new Service Desk integration
 * @param {ServiceDeskIntegrationV2025ApiCreateServiceDeskIntegrationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createServiceDeskIntegration = (requestParameters, apiConfig) => {
    const servicedeskintegrationv2025api = new sdk.ServiceDeskIntegrationV2025Api(apiConfig);
    return handleApiCall(() => servicedeskintegrationv2025api.createServiceDeskIntegration(requestParameters));
};
exports.createServiceDeskIntegration = createServiceDeskIntegration;
/**
 * Delete an existing Service Desk integration by ID.
 * @summary Delete a Service Desk integration
 * @param {ServiceDeskIntegrationV2025ApiDeleteServiceDeskIntegrationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteServiceDeskIntegration = (requestParameters, apiConfig) => {
    const servicedeskintegrationv2025api = new sdk.ServiceDeskIntegrationV2025Api(apiConfig);
    return handleApiCall(() => servicedeskintegrationv2025api.deleteServiceDeskIntegration(requestParameters));
};
exports.deleteServiceDeskIntegration = deleteServiceDeskIntegration;
/**
 * Get an existing Service Desk integration by ID.
 * @summary Get a Service Desk integration
 * @param {ServiceDeskIntegrationV2025ApiGetServiceDeskIntegrationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getServiceDeskIntegration = (requestParameters, apiConfig) => {
    const servicedeskintegrationv2025api = new sdk.ServiceDeskIntegrationV2025Api(apiConfig);
    return handleApiCall(() => servicedeskintegrationv2025api.getServiceDeskIntegration(requestParameters));
};
exports.getServiceDeskIntegration = getServiceDeskIntegration;
/**
 * This API endpoint returns an existing Service Desk integration template by scriptName.
 * @summary Service Desk integration template by scriptName
 * @param {ServiceDeskIntegrationV2025ApiGetServiceDeskIntegrationTemplateRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getServiceDeskIntegrationTemplate = (requestParameters, apiConfig) => {
    const servicedeskintegrationv2025api = new sdk.ServiceDeskIntegrationV2025Api(apiConfig);
    return handleApiCall(() => servicedeskintegrationv2025api.getServiceDeskIntegrationTemplate(requestParameters));
};
exports.getServiceDeskIntegrationTemplate = getServiceDeskIntegrationTemplate;
/**
 * This API endpoint returns the current list of supported Service Desk integration types.
 * @summary List Service Desk integration types
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getServiceDeskIntegrationTypes = (apiConfig) => {
    const servicedeskintegrationv2025api = new sdk.ServiceDeskIntegrationV2025Api(apiConfig);
    return handleApiCall(() => servicedeskintegrationv2025api.getServiceDeskIntegrationTypes());
};
exports.getServiceDeskIntegrationTypes = getServiceDeskIntegrationTypes;
/**
 * Get a list of Service Desk integration objects.
 * @summary List existing Service Desk integrations
 * @param {ServiceDeskIntegrationV2025ApiGetServiceDeskIntegrationsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getServiceDeskIntegrations = (requestParameters = {}, apiConfig) => {
    const servicedeskintegrationv2025api = new sdk.ServiceDeskIntegrationV2025Api(apiConfig);
    return handleApiCall(() => servicedeskintegrationv2025api.getServiceDeskIntegrations(requestParameters));
};
exports.getServiceDeskIntegrations = getServiceDeskIntegrations;
/**
 * Get the time check configuration of queued SDIM tickets.
 * @summary Get the time check configuration
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getStatusCheckDetails = (apiConfig) => {
    const servicedeskintegrationv2025api = new sdk.ServiceDeskIntegrationV2025Api(apiConfig);
    return handleApiCall(() => servicedeskintegrationv2025api.getStatusCheckDetails());
};
exports.getStatusCheckDetails = getStatusCheckDetails;
/**
 * Update an existing Service Desk integration by ID with a PATCH request.
 * @summary Patch a Service Desk Integration
 * @param {ServiceDeskIntegrationV2025ApiPatchServiceDeskIntegrationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchServiceDeskIntegration = (requestParameters, apiConfig) => {
    const servicedeskintegrationv2025api = new sdk.ServiceDeskIntegrationV2025Api(apiConfig);
    return handleApiCall(() => servicedeskintegrationv2025api.patchServiceDeskIntegration(requestParameters));
};
exports.patchServiceDeskIntegration = patchServiceDeskIntegration;
/**
 * Update an existing Service Desk integration by ID.
 * @summary Update a Service Desk integration
 * @param {ServiceDeskIntegrationV2025ApiPutServiceDeskIntegrationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putServiceDeskIntegration = (requestParameters, apiConfig) => {
    const servicedeskintegrationv2025api = new sdk.ServiceDeskIntegrationV2025Api(apiConfig);
    return handleApiCall(() => servicedeskintegrationv2025api.putServiceDeskIntegration(requestParameters));
};
exports.putServiceDeskIntegration = putServiceDeskIntegration;
/**
 * Update the time check configuration of queued SDIM tickets.
 * @summary Update the time check configuration
 * @param {ServiceDeskIntegrationV2025ApiUpdateStatusCheckDetailsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateStatusCheckDetails = (requestParameters, apiConfig) => {
    const servicedeskintegrationv2025api = new sdk.ServiceDeskIntegrationV2025Api(apiConfig);
    return handleApiCall(() => servicedeskintegrationv2025api.updateStatusCheckDetails(requestParameters));
};
exports.updateStatusCheckDetails = updateStatusCheckDetails;
/**
 * This API returns the status of the source usage insights setup by IDN source ID.
 * @summary Finds status of source usage
 * @param {SourceUsagesV2025ApiGetStatusBySourceIdRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getStatusBySourceId = (requestParameters, apiConfig) => {
    const sourceusagesv2025api = new sdk.SourceUsagesV2025Api(apiConfig);
    return handleApiCall(() => sourceusagesv2025api.getStatusBySourceId(requestParameters));
};
exports.getStatusBySourceId = getStatusBySourceId;
/**
 * This API returns a summary of source usage insights for past 12 months.
 * @summary Returns source usage insights
 * @param {SourceUsagesV2025ApiGetUsagesBySourceIdRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getUsagesBySourceId = (requestParameters, apiConfig) => {
    const sourceusagesv2025api = new sdk.SourceUsagesV2025Api(apiConfig);
    return handleApiCall(() => sourceusagesv2025api.getUsagesBySourceId(requestParameters));
};
exports.getUsagesBySourceId = getUsagesBySourceId;
/**
 * This API generates a create policy/template based on field value transforms. This API is intended for use when setting up JDBC Provisioning type sources, but it will also work on other source types. Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning. Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/idn/docs/transforms/guides/transforms-in-provisioning-policies) for more information.
 * @summary Create Provisioning Policy
 * @param {SourcesV2025ApiCreateProvisioningPolicyRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createProvisioningPolicy = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.createProvisioningPolicy(requestParameters));
};
exports.createProvisioningPolicy = createProvisioningPolicy;
/**
 * This creates a specific source with a full source JSON representation. Any passwords are submitted as plain-text and encrypted upon receipt in IdentityNow.
 * @summary Creates a source in IdentityNow.
 * @param {SourcesV2025ApiCreateSourceRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createSource = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.createSource(requestParameters));
};
exports.createSource = createSource;
/**
 * Use this API to create a new schedule for a type on the specified source in Identity Security Cloud (ISC).
 * @summary Create Schedule on Source
 * @param {SourcesV2025ApiCreateSourceScheduleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createSourceSchedule = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.createSourceSchedule(requestParameters));
};
exports.createSourceSchedule = createSourceSchedule;
/**
 * Use this API to create a new schema on the specified source in Identity Security Cloud (ISC).
 * @summary Create Schema on Source
 * @param {SourcesV2025ApiCreateSourceSchemaRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createSourceSchema = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.createSourceSchema(requestParameters));
};
exports.createSourceSchema = createSourceSchema;
/**
 * Use this endpoint to remove all accounts from the system without provisioning changes to the source. Accounts that are removed could be re-created during the next aggregation.  This endpoint is good for: * Removing accounts that no longer exist on the source. * Removing accounts that won\'t be aggregated following updates to the source configuration. * Forcing accounts to be re-created following the next aggregation to re-run account processing, support testing, etc.
 * @summary Remove All Accounts in a Source
 * @param {SourcesV2025ApiDeleteAccountsAsyncRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteAccountsAsync = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.deleteAccountsAsync(requestParameters));
};
exports.deleteAccountsAsync = deleteAccountsAsync;
/**
 * Deletes the native change detection configuration for the source specified by the given ID.
 * @summary Delete Native Change Detection Configuration
 * @param {SourcesV2025ApiDeleteNativeChangeDetectionConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteNativeChangeDetectionConfig = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.deleteNativeChangeDetectionConfig(requestParameters));
};
exports.deleteNativeChangeDetectionConfig = deleteNativeChangeDetectionConfig;
/**
 * Deletes the provisioning policy with the specified usage on an application.
 * @summary Delete Provisioning Policy by UsageType
 * @param {SourcesV2025ApiDeleteProvisioningPolicyRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteProvisioningPolicy = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.deleteProvisioningPolicy(requestParameters));
};
exports.deleteProvisioningPolicy = deleteProvisioningPolicy;
/**
 * Use this API to delete a specific source in Identity Security Cloud (ISC). The API removes all the accounts on the source first, and then it deletes the source. You can retrieve the actual task execution status with this method: GET `/task-status/{id}`
 * @summary Delete Source by ID
 * @param {SourcesV2025ApiDeleteSourceRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteSource = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.deleteSource(requestParameters));
};
exports.deleteSource = deleteSource;
/**
 *
 * @summary Delete Source Schedule by type.
 * @param {SourcesV2025ApiDeleteSourceScheduleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteSourceSchedule = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.deleteSourceSchedule(requestParameters));
};
exports.deleteSourceSchedule = deleteSourceSchedule;
/**
 *
 * @summary Delete Source Schema by ID
 * @param {SourcesV2025ApiDeleteSourceSchemaRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteSourceSchema = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.deleteSourceSchema(requestParameters));
};
exports.deleteSourceSchema = deleteSourceSchema;
/**
 * This API downloads the CSV schema that defines the account attributes on a source. >**NOTE: This API is designated only for Delimited File sources.**
 * @summary Downloads source accounts schema template
 * @param {SourcesV2025ApiGetAccountsSchemaRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getAccountsSchema = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.getAccountsSchema(requestParameters));
};
exports.getAccountsSchema = getAccountsSchema;
/**
 * This API returns the existing correlation configuration for a source specified by the given ID.
 * @summary Get Source Correlation Configuration
 * @param {SourcesV2025ApiGetCorrelationConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getCorrelationConfig = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.getCorrelationConfig(requestParameters));
};
exports.getCorrelationConfig = getCorrelationConfig;
/**
 * This API downloads the CSV schema that defines the entitlement attributes on a source.  >**NOTE: This API is designated only for Delimited File sources.**
 * @summary Downloads source entitlements schema template
 * @param {SourcesV2025ApiGetEntitlementsSchemaRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getEntitlementsSchema = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.getEntitlementsSchema(requestParameters));
};
exports.getEntitlementsSchema = getEntitlementsSchema;
/**
 * This API returns the existing native change detection configuration for a source specified by the given ID.
 * @summary Native Change Detection Configuration
 * @param {SourcesV2025ApiGetNativeChangeDetectionConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getNativeChangeDetectionConfig = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.getNativeChangeDetectionConfig(requestParameters));
};
exports.getNativeChangeDetectionConfig = getNativeChangeDetectionConfig;
/**
 * This end-point retrieves the ProvisioningPolicy with the specified usage on the specified Source in IdentityNow.
 * @summary Get Provisioning Policy by UsageType
 * @param {SourcesV2025ApiGetProvisioningPolicyRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getProvisioningPolicy = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.getProvisioningPolicy(requestParameters));
};
exports.getProvisioningPolicy = getProvisioningPolicy;
/**
 * Use this API to get a source by a specified ID in Identity Security Cloud (ISC).
 * @summary Get Source by ID
 * @param {SourcesV2025ApiGetSourceRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSource = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.getSource(requestParameters));
};
exports.getSource = getSource;
/**
 * This API returns the existing attribute synchronization configuration for a source specified by the given ID. The response contains all attributes, regardless of whether they enabled or not.
 * @summary Attribute Sync Config
 * @param {SourcesV2025ApiGetSourceAttrSyncConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSourceAttrSyncConfig = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.getSourceAttrSyncConfig(requestParameters));
};
exports.getSourceAttrSyncConfig = getSourceAttrSyncConfig;
/**
 * Looks up and returns the source config for the requested source id after populating the source config values and applying language translations.
 * @summary Gets source config with language-translations
 * @param {SourcesV2025ApiGetSourceConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSourceConfig = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.getSourceConfig(requestParameters));
};
exports.getSourceConfig = getSourceConfig;
/**
 * Use this API to get all dependent Profiles, Attributes, Applications and Custom Transforms for a source by a specified ID in Identity Security Cloud (ISC).
 * @summary Get Source Connections by ID
 * @param {SourcesV2025ApiGetSourceConnectionsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSourceConnections = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.getSourceConnections(requestParameters));
};
exports.getSourceConnections = getSourceConnections;
/**
 * This API gets the current entitlement request configuration for a source. This source-level configuration should apply for all the entitlements in the source.  Access request to any entitlements in the source should follow this configuration unless a separate entitlement-level configuration is defined. - During access request, this source-level entitlement request configuration overrides the global organization-level configuration. - However, the entitlement-level configuration (if defined) overrides this source-level configuration.
 * @summary Get Source Entitlement Request Configuration
 * @param {SourcesV2025ApiGetSourceEntitlementRequestConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSourceEntitlementRequestConfig = (requestParameters = {}, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.getSourceEntitlementRequestConfig(requestParameters));
};
exports.getSourceEntitlementRequestConfig = getSourceEntitlementRequestConfig;
/**
 * This endpoint fetches source health by source\'s id
 * @summary Fetches source health by id
 * @param {SourcesV2025ApiGetSourceHealthRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSourceHealth = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.getSourceHealth(requestParameters));
};
exports.getSourceHealth = getSourceHealth;
/**
 * Get the source schedule by type in Identity Security Cloud (ISC).
 * @summary Get Source Schedule by Type
 * @param {SourcesV2025ApiGetSourceScheduleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSourceSchedule = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.getSourceSchedule(requestParameters));
};
exports.getSourceSchedule = getSourceSchedule;
/**
 * Use this API to list the schedules that exist on the specified source in Identity Security Cloud (ISC). :::info This endpoint uses a **cron expression** to schedule a task, following standard **cron job syntax**.  For example, `0 0 12 1/1 * ? *` runs the task **daily at 12:00 PM**.  **Days of the week are represented as 1-7 (Sunday-Saturday).** :::
 * @summary List Schedules on Source
 * @param {SourcesV2025ApiGetSourceSchedulesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSourceSchedules = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.getSourceSchedules(requestParameters));
};
exports.getSourceSchedules = getSourceSchedules;
/**
 * Get the Source Schema by ID in IdentityNow.
 * @summary Get Source Schema by ID
 * @param {SourcesV2025ApiGetSourceSchemaRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSourceSchema = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.getSourceSchema(requestParameters));
};
exports.getSourceSchema = getSourceSchema;
/**
 * Use this API to list the schemas that exist on the specified source in Identity Security Cloud (ISC).
 * @summary List Schemas on Source
 * @param {SourcesV2025ApiGetSourceSchemasRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSourceSchemas = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.getSourceSchemas(requestParameters));
};
exports.getSourceSchemas = getSourceSchemas;
/**
 * Starts an account aggregation on the specified source.  If the target source is a delimited file source, then the CSV file needs to be included in the request body. You will also need to set the Content-Type header to `multipart/form-data`.
 * @summary Account Aggregation
 * @param {SourcesV2025ApiImportAccountsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const importAccounts = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.importAccounts(requestParameters));
};
exports.importAccounts = importAccounts;
/**
 * This API uploads a source schema template file to configure a source\'s account attributes.  To retrieve the file to modify and upload, log into Identity Now.   Click **Admin** -> **Connections** -> **Sources** -> **`{SourceName}`** -> **Import Data** -> **Account Schema** -> **Options** -> **Download Schema**  >**NOTE: This API is designated only for Delimited File sources.**
 * @summary Uploads source accounts schema template
 * @param {SourcesV2025ApiImportAccountsSchemaRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const importAccountsSchema = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.importAccountsSchema(requestParameters));
};
exports.importAccountsSchema = importAccountsSchema;
/**
 * This uploads a supplemental source connector file (like jdbc driver jars) to a source\'s S3 bucket. This also sends ETS and Audit events.
 * @summary Upload connector file to source
 * @param {SourcesV2025ApiImportConnectorFileRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const importConnectorFile = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.importConnectorFile(requestParameters));
};
exports.importConnectorFile = importConnectorFile;
/**
 * This API uploads a source schema template file to configure a source\'s entitlement attributes.  To retrieve the file to modify and upload, log into Identity Now.   Click **Admin** -> **Connections** -> **Sources** -> **`{SourceName}`** -> **Import Data** -> **Import Entitlements** -> **Download**  >**NOTE: This API is designated only for Delimited File sources.**
 * @summary Uploads source entitlements schema template
 * @param {SourcesV2025ApiImportEntitlementsSchemaRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const importEntitlementsSchema = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.importEntitlementsSchema(requestParameters));
};
exports.importEntitlementsSchema = importEntitlementsSchema;
/**
 * File is required for upload. You will also need to set the Content-Type header to `multipart/form-data`
 * @summary Process Uncorrelated Accounts
 * @param {SourcesV2025ApiImportUncorrelatedAccountsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const importUncorrelatedAccounts = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.importUncorrelatedAccounts(requestParameters));
};
exports.importUncorrelatedAccounts = importUncorrelatedAccounts;
/**
 * This end-point lists all the ProvisioningPolicies in IdentityNow.
 * @summary Lists ProvisioningPolicies
 * @param {SourcesV2025ApiListProvisioningPoliciesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listProvisioningPolicies = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.listProvisioningPolicies(requestParameters));
};
exports.listProvisioningPolicies = listProvisioningPolicies;
/**
 * This end-point lists all the sources in IdentityNow.
 * @summary Lists all sources in IdentityNow.
 * @param {SourcesV2025ApiListSourcesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listSources = (requestParameters = {}, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.listSources(requestParameters));
};
exports.listSources = listSources;
/**
 * This endpoint validates that the cluster being used by the source is reachable from IdentityNow.
 * @summary Ping cluster for source connector
 * @param {SourcesV2025ApiPingClusterRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const pingCluster = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.pingCluster(requestParameters));
};
exports.pingCluster = pingCluster;
/**
 * Replaces the correlation configuration for the source specified by the given ID with the configuration provided in the request body.
 * @summary Update Source Correlation Configuration
 * @param {SourcesV2025ApiPutCorrelationConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putCorrelationConfig = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.putCorrelationConfig(requestParameters));
};
exports.putCorrelationConfig = putCorrelationConfig;
/**
 * Replaces the native change detection configuration for the source specified by the given ID with the configuration provided in the request body.
 * @summary Update Native Change Detection Configuration
 * @param {SourcesV2025ApiPutNativeChangeDetectionConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putNativeChangeDetectionConfig = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.putNativeChangeDetectionConfig(requestParameters));
};
exports.putNativeChangeDetectionConfig = putNativeChangeDetectionConfig;
/**
 * This end-point updates the provisioning policy with the specified usage on the specified source in IdentityNow. Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning. Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/idn/docs/transforms/guides/transforms-in-provisioning-policies) for more information.
 * @summary Update Provisioning Policy by UsageType
 * @param {SourcesV2025ApiPutProvisioningPolicyRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putProvisioningPolicy = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.putProvisioningPolicy(requestParameters));
};
exports.putProvisioningPolicy = putProvisioningPolicy;
/**
 * Use this API to update a source in Identity Security Cloud (ISC), using a full object representation. This means that when you use this API, it completely replaces the existing source configuration.  These fields are immutable, so they cannot be changed:  * id * type * authoritative * connector * connectorClass * passwordPolicies  Attempts to modify these fields will result in a 400 error.
 * @summary Update Source (Full)
 * @param {SourcesV2025ApiPutSourceRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putSource = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.putSource(requestParameters));
};
exports.putSource = putSource;
/**
 * Replaces the attribute synchronization configuration for the source specified by the given ID with the configuration provided in the request body. Only the \"enabled\" field of the values in the \"attributes\" array is mutable. Attempting to change other attributes or add new values to the \"attributes\" array will result in an error.
 * @summary Update Attribute Sync Config
 * @param {SourcesV2025ApiPutSourceAttrSyncConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putSourceAttrSyncConfig = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.putSourceAttrSyncConfig(requestParameters));
};
exports.putSourceAttrSyncConfig = putSourceAttrSyncConfig;
/**
 * This API will completely replace an existing Schema with the submitted payload. Some fields of the Schema cannot be updated. These fields are listed below.  * id * name * created * modified  Any attempt to modify these fields will result in an error response with a status code of 400.  > `id` must remain in the request body, but it cannot be changed.  If `id` is omitted from the request body, the result will be a 400 error.
 * @summary Update Source Schema (Full)
 * @param {SourcesV2025ApiPutSourceSchemaRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putSourceSchema = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.putSourceSchema(requestParameters));
};
exports.putSourceSchema = putSourceSchema;
/**
 * Retrieves a sample of data returned from account and group aggregation requests.
 * @summary Peek source connector\'s resource objects
 * @param {SourcesV2025ApiSearchResourceObjectsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const searchResourceObjects = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.searchResourceObjects(requestParameters));
};
exports.searchResourceObjects = searchResourceObjects;
/**
 * This end-point performs attribute synchronization for a selected source.
 * @summary Synchronize single source attributes.
 * @param {SourcesV2025ApiSyncAttributesForSourceRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const syncAttributesForSource = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.syncAttributesForSource(requestParameters));
};
exports.syncAttributesForSource = syncAttributesForSource;
/**
 * This endpoint performs a more detailed validation of the source\'\'s configuration that can take longer than the lighter weight credential validation performed by the checkConnection API.
 * @summary Test configuration for source connector
 * @param {SourcesV2025ApiTestSourceConfigurationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const testSourceConfiguration = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.testSourceConfiguration(requestParameters));
};
exports.testSourceConfiguration = testSourceConfiguration;
/**
 * This endpoint validates that the configured credentials are valid and will properly authenticate with the source identified by the sourceId path parameter.
 * @summary Check connection for source connector.
 * @param {SourcesV2025ApiTestSourceConnectionRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const testSourceConnection = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.testSourceConnection(requestParameters));
};
exports.testSourceConnection = testSourceConnection;
/**
 * This API can be used to set up or update Password Policy in IdentityNow for the specified Source. Source must support PASSWORD feature.
 * @summary Update Password Policy
 * @param {SourcesV2025ApiUpdatePasswordPolicyHoldersRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updatePasswordPolicyHolders = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.updatePasswordPolicyHolders(requestParameters));
};
exports.updatePasswordPolicyHolders = updatePasswordPolicyHolders;
/**
 * This end-point updates a list of provisioning policies on the specified source in IdentityNow.
 * @summary Bulk Update Provisioning Policies
 * @param {SourcesV2025ApiUpdateProvisioningPoliciesInBulkRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateProvisioningPoliciesInBulk = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.updateProvisioningPoliciesInBulk(requestParameters));
};
exports.updateProvisioningPoliciesInBulk = updateProvisioningPoliciesInBulk;
/**
 * This API selectively updates an existing Provisioning Policy using a JSONPatch payload. Transforms can be used in the provisioning policy to create a new attribute that you only need during provisioning. Refer to [Transforms in Provisioning Policies](https://developer.sailpoint.com/idn/docs/transforms/guides/transforms-in-provisioning-policies) for more information.
 * @summary Partial update of Provisioning Policy
 * @param {SourcesV2025ApiUpdateProvisioningPolicyRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateProvisioningPolicy = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.updateProvisioningPolicy(requestParameters));
};
exports.updateProvisioningPolicy = updateProvisioningPolicy;
/**
 * Use this API to partially update a source in Identity Security Cloud (ISC), using a list of patch operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  These fields are immutable, so they cannot be changed:  * id * type * authoritative * created * modified * connector * connectorClass * passwordPolicies  Attempts to modify these fields will result in a 400 error.
 * @summary Update Source (Partial)
 * @param {SourcesV2025ApiUpdateSourceRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateSource = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.updateSource(requestParameters));
};
exports.updateSource = updateSource;
/**
 * This API replaces the current entitlement request configuration for a source. This source-level configuration should apply for all the entitlements in the source.  Access request to any entitlements in the source should follow this configuration unless a separate entitlement-level configuration is defined. - During access request, this source-level entitlement request configuration overrides the global organization-level configuration. - However, the entitlement-level configuration (if defined) overrides this source-level configuration.
 * @summary Update Source Entitlement Request Configuration
 * @param {SourcesV2025ApiUpdateSourceEntitlementRequestConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateSourceEntitlementRequestConfig = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.updateSourceEntitlementRequestConfig(requestParameters));
};
exports.updateSourceEntitlementRequestConfig = updateSourceEntitlementRequestConfig;
/**
 * Use this API to selectively update an existing Schedule using a JSONPatch payload.   The following schedule fields are immutable and cannot be updated:  - type
 * @summary Update Source Schedule (Partial)
 * @param {SourcesV2025ApiUpdateSourceScheduleRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateSourceSchedule = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.updateSourceSchedule(requestParameters));
};
exports.updateSourceSchedule = updateSourceSchedule;
/**
 * Use this API to selectively update an existing Schema using a JSONPatch payload.   The following schema fields are immutable and cannot be updated:  - id - name - created - modified   To switch an account attribute to a group entitlement, you need to have the following in place:  - `isEntitlement: true` - Must define a schema for the group and [add it to the source](https://developer.sailpoint.com/idn/api/v3/create-source-schema) before updating the `isGroup` flag.  For example, here is the `group` account attribute referencing a schema that defines the group: ```json {     \"name\": \"groups\",     \"type\": \"STRING\",     \"schema\": {         \"type\": \"CONNECTOR_SCHEMA\",         \"id\": \"2c9180887671ff8c01767b4671fc7d60\",         \"name\": \"group\"     },     \"description\": \"The groups, roles etc. that reference account group objects\",     \"isMulti\": true,     \"isEntitlement\": true,     \"isGroup\": true } ```
 * @summary Update Source Schema (Partial)
 * @param {SourcesV2025ApiUpdateSourceSchemaRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateSourceSchema = (requestParameters, apiConfig) => {
    const sourcesv2025api = new sdk.SourcesV2025Api(apiConfig);
    return handleApiCall(() => sourcesv2025api.updateSourceSchema(requestParameters));
};
exports.updateSourceSchema = updateSourceSchema;
/**
 * \'Submit Sed Batch Stats Request.   Submits batchId in the path param `(e.g. {batchId}/stats)`. API responses with stats  of the batchId.\'
 * @summary Submit Sed Batch Stats Request
 * @param {SuggestedEntitlementDescriptionV2025ApiGetSedBatchStatsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSedBatchStats = (requestParameters, apiConfig) => {
    const suggestedentitlementdescriptionv2025api = new sdk.SuggestedEntitlementDescriptionV2025Api(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionv2025api.getSedBatchStats(requestParameters));
};
exports.getSedBatchStats = getSedBatchStats;
/**
 * List Sed Batches. API responses with Sed Batch Status
 * @summary List Sed Batch Request
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getSedBatches = (apiConfig) => {
    const suggestedentitlementdescriptionv2025api = new sdk.SuggestedEntitlementDescriptionV2025Api(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionv2025api.getSedBatches());
};
exports.getSedBatches = getSedBatches;
/**
 * List of Suggested Entitlement Descriptions (SED)  SED field descriptions:  **batchId**: the ID of the batch of entitlements that are submitted for description generation  **displayName**: the display name of the entitlement that we are generating a description for  **sourceName**: the name of the source associated with the entitlement that we are generating the description for  **sourceId**: the ID of the source associated with the entitlement that we are generating the description for  **status**: the status of the suggested entitlement description, valid status options: \"requested\", \"suggested\", \"not_suggested\", \"failed\", \"assigned\", \"approved\", \"denied\"  **fullText**: will filter suggested entitlement description records by text found in any of the following fields: entitlement name, entitlement display name, suggested description, source name
 * @summary List Suggested Entitlement Descriptions
 * @param {SuggestedEntitlementDescriptionV2025ApiListSedsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listSeds = (requestParameters = {}, apiConfig) => {
    const suggestedentitlementdescriptionv2025api = new sdk.SuggestedEntitlementDescriptionV2025Api(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionv2025api.listSeds(requestParameters));
};
exports.listSeds = listSeds;
/**
 * Patch Suggested Entitlement Description
 * @summary Patch Suggested Entitlement Description
 * @param {SuggestedEntitlementDescriptionV2025ApiPatchSedRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchSed = (requestParameters, apiConfig) => {
    const suggestedentitlementdescriptionv2025api = new sdk.SuggestedEntitlementDescriptionV2025Api(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionv2025api.patchSed(requestParameters));
};
exports.patchSed = patchSed;
/**
 * Submit Bulk Approval Request for SED. Request body takes list of SED Ids. API responses with list of SED Approval Status
 * @summary Submit Bulk Approval Request
 * @param {SuggestedEntitlementDescriptionV2025ApiSubmitSedApprovalRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const submitSedApproval = (requestParameters, apiConfig) => {
    const suggestedentitlementdescriptionv2025api = new sdk.SuggestedEntitlementDescriptionV2025Api(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionv2025api.submitSedApproval(requestParameters));
};
exports.submitSedApproval = submitSedApproval;
/**
 * Submit Assignment Request. Request body has an assignee, and list of SED Ids that are assigned to that assignee API responses with batchId that groups all approval requests together
 * @summary Submit Sed Assignment Request
 * @param {SuggestedEntitlementDescriptionV2025ApiSubmitSedAssignmentRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const submitSedAssignment = (requestParameters, apiConfig) => {
    const suggestedentitlementdescriptionv2025api = new sdk.SuggestedEntitlementDescriptionV2025Api(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionv2025api.submitSedAssignment(requestParameters));
};
exports.submitSedAssignment = submitSedAssignment;
/**
 * Submit Sed Batch Request. Request body has one of the following: - a list of entitlement Ids - a list of SED Ids that user wants to have description generated by LLM. API responses with batchId that groups Ids together
 * @summary Submit Sed Batch Request
 * @param {SuggestedEntitlementDescriptionV2025ApiSubmitSedBatchRequestRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const submitSedBatchRequest = (requestParameters = {}, apiConfig) => {
    const suggestedentitlementdescriptionv2025api = new sdk.SuggestedEntitlementDescriptionV2025Api(apiConfig);
    return handleApiCall(() => suggestedentitlementdescriptionv2025api.submitSedBatchRequest(requestParameters));
};
exports.submitSedBatchRequest = submitSedBatchRequest;
/**
 * Delete all tags from a tagged object.
 * @summary Delete Object Tags
 * @param {TaggedObjectsV2025ApiDeleteTaggedObjectRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteTaggedObject = (requestParameters, apiConfig) => {
    const taggedobjectsv2025api = new sdk.TaggedObjectsV2025Api(apiConfig);
    return handleApiCall(() => taggedobjectsv2025api.deleteTaggedObject(requestParameters));
};
exports.deleteTaggedObject = deleteTaggedObject;
/**
 * This API removes tags from multiple objects.
 * @summary Remove Tags from Multiple Objects
 * @param {TaggedObjectsV2025ApiDeleteTagsToManyObjectRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteTagsToManyObject = (requestParameters, apiConfig) => {
    const taggedobjectsv2025api = new sdk.TaggedObjectsV2025Api(apiConfig);
    return handleApiCall(() => taggedobjectsv2025api.deleteTagsToManyObject(requestParameters));
};
exports.deleteTagsToManyObject = deleteTagsToManyObject;
/**
 * This gets a tagged object for the specified type.
 * @summary Get Tagged Object
 * @param {TaggedObjectsV2025ApiGetTaggedObjectRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getTaggedObject = (requestParameters, apiConfig) => {
    const taggedobjectsv2025api = new sdk.TaggedObjectsV2025Api(apiConfig);
    return handleApiCall(() => taggedobjectsv2025api.getTaggedObject(requestParameters));
};
exports.getTaggedObject = getTaggedObject;
/**
 * This API returns a list of all tagged objects.  Any authenticated token may be used to call this API.
 * @summary List Tagged Objects
 * @param {TaggedObjectsV2025ApiListTaggedObjectsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listTaggedObjects = (requestParameters = {}, apiConfig) => {
    const taggedobjectsv2025api = new sdk.TaggedObjectsV2025Api(apiConfig);
    return handleApiCall(() => taggedobjectsv2025api.listTaggedObjects(requestParameters));
};
exports.listTaggedObjects = listTaggedObjects;
/**
 * This API returns a list of all tagged objects by type.  Any authenticated token may be used to call this API.
 * @summary List Tagged Objects by Type
 * @param {TaggedObjectsV2025ApiListTaggedObjectsByTypeRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listTaggedObjectsByType = (requestParameters, apiConfig) => {
    const taggedobjectsv2025api = new sdk.TaggedObjectsV2025Api(apiConfig);
    return handleApiCall(() => taggedobjectsv2025api.listTaggedObjectsByType(requestParameters));
};
exports.listTaggedObjectsByType = listTaggedObjectsByType;
/**
 * This updates a tagged object for the specified type.
 * @summary Update Tagged Object
 * @param {TaggedObjectsV2025ApiPutTaggedObjectRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putTaggedObject = (requestParameters, apiConfig) => {
    const taggedobjectsv2025api = new sdk.TaggedObjectsV2025Api(apiConfig);
    return handleApiCall(() => taggedobjectsv2025api.putTaggedObject(requestParameters));
};
exports.putTaggedObject = putTaggedObject;
/**
 * This adds a tag to an object.  Any authenticated token may be used to call this API.
 * @summary Add Tag to Object
 * @param {TaggedObjectsV2025ApiSetTagToObjectRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const setTagToObject = (requestParameters, apiConfig) => {
    const taggedobjectsv2025api = new sdk.TaggedObjectsV2025Api(apiConfig);
    return handleApiCall(() => taggedobjectsv2025api.setTagToObject(requestParameters));
};
exports.setTagToObject = setTagToObject;
/**
 * This API adds tags to multiple objects.
 * @summary Tag Multiple Objects
 * @param {TaggedObjectsV2025ApiSetTagsToManyObjectsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const setTagsToManyObjects = (requestParameters, apiConfig) => {
    const taggedobjectsv2025api = new sdk.TaggedObjectsV2025Api(apiConfig);
    return handleApiCall(() => taggedobjectsv2025api.setTagsToManyObjects(requestParameters));
};
exports.setTagsToManyObjects = setTagsToManyObjects;
/**
 * Responds with headers only for list of task statuses for pending tasks.
 * @summary Retrieve Pending Task List Headers
 * @param {TaskManagementV2025ApiGetPendingTaskHeadersRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getPendingTaskHeaders = (requestParameters, apiConfig) => {
    const taskmanagementv2025api = new sdk.TaskManagementV2025Api(apiConfig);
    return handleApiCall(() => taskmanagementv2025api.getPendingTaskHeaders(requestParameters));
};
exports.getPendingTaskHeaders = getPendingTaskHeaders;
/**
 * Retrieve a list of statuses for pending tasks. Types of tasks include account and entitlement aggregation and other general background processing tasks.  Data for tasks older than 90 days will not be returned.
 * @summary Retrieve Pending Task Status List
 * @param {TaskManagementV2025ApiGetPendingTasksRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getPendingTasks = (requestParameters = {}, apiConfig) => {
    const taskmanagementv2025api = new sdk.TaskManagementV2025Api(apiConfig);
    return handleApiCall(() => taskmanagementv2025api.getPendingTasks(requestParameters));
};
exports.getPendingTasks = getPendingTasks;
/**
 * Get task status by task ID. Types of tasks include account and entitlement aggregation and other general background processing tasks.  Data for tasks older than 90 days will not be returned.
 * @summary Get Task Status by ID
 * @param {TaskManagementV2025ApiGetTaskStatusRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getTaskStatus = (requestParameters, apiConfig) => {
    const taskmanagementv2025api = new sdk.TaskManagementV2025Api(apiConfig);
    return handleApiCall(() => taskmanagementv2025api.getTaskStatus(requestParameters));
};
exports.getTaskStatus = getTaskStatus;
/**
 * Use this endpoint to get a list of statuses for **completed** tasks. Types of tasks include account and entitlement aggregation and other general background processing tasks.  Data for tasks older than 90 days will not be returned. To get a list of statuses for **in-progress** tasks, please use the [retrieve pending task status list](https://developer.sailpoint.com/docs/api/v2024/get-pending-tasks) endpoint.
 * @summary Retrieve Task Status List
 * @param {TaskManagementV2025ApiGetTaskStatusListRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getTaskStatusList = (requestParameters = {}, apiConfig) => {
    const taskmanagementv2025api = new sdk.TaskManagementV2025Api(apiConfig);
    return handleApiCall(() => taskmanagementv2025api.getTaskStatusList(requestParameters));
};
exports.getTaskStatusList = getTaskStatusList;
/**
 * Update a current task status by task ID. Use this API to clear a pending task by updating the completionStatus and completed attributes.
 * @summary Update Task Status by ID
 * @param {TaskManagementV2025ApiUpdateTaskStatusRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateTaskStatus = (requestParameters, apiConfig) => {
    const taskmanagementv2025api = new sdk.TaskManagementV2025Api(apiConfig);
    return handleApiCall(() => taskmanagementv2025api.updateTaskStatus(requestParameters));
};
exports.updateTaskStatus = updateTaskStatus;
/**
 * This rest endpoint can be used to retrieve tenant details.
 * @summary Get Tenant Information.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getTenant = (apiConfig) => {
    const tenantv2025api = new sdk.TenantV2025Api(apiConfig);
    return handleApiCall(() => tenantv2025api.getTenant());
};
exports.getTenant = getTenant;
/**
 * Returns a list of key-value pairs representing the current state of the tenant\'s context.
 * @summary Retrieve tenant context
 * @param {TenantContextV2025ApiGetTenantContextRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getTenantContext = (requestParameters = {}, apiConfig) => {
    const tenantcontextv2025api = new sdk.TenantContextV2025Api(apiConfig);
    return handleApiCall(() => tenantcontextv2025api.getTenantContext(requestParameters));
};
exports.getTenantContext = getTenantContext;
/**
 * Allows the user to make incremental updates to tenant context records using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.  This endpoint is specifically designed to modify the `/Key/_*` field, supporting operations such as `add`, `remove`, or `replace` to manage key-value pairs.   Note that each tenant is limited to a maximum of 100 key-value pairs.
 * @summary Update tenant context
 * @param {TenantContextV2025ApiPatchTenantContextRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchTenantContext = (requestParameters, apiConfig) => {
    const tenantcontextv2025api = new sdk.TenantContextV2025Api(apiConfig);
    return handleApiCall(() => tenantcontextv2025api.patchTenantContext(requestParameters));
};
exports.patchTenantContext = patchTenantContext;
/**
 * Creates a new transform object immediately. By default, the internal flag is set to false to indicate that this is a custom transform. Only SailPoint employees have the ability to create a transform with internal set to true. Newly created Transforms can be used in the Identity Profile mappings within the UI.
 * @summary Create transform
 * @param {TransformsV2025ApiCreateTransformRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createTransform = (requestParameters, apiConfig) => {
    const transformsv2025api = new sdk.TransformsV2025Api(apiConfig);
    return handleApiCall(() => transformsv2025api.createTransform(requestParameters));
};
exports.createTransform = createTransform;
/**
 * Deletes the transform specified by the given ID. Attempting to delete a transform that is used in one or more Identity Profile mappings will result in an error. If this occurs, you must first remove the transform from all mappings before deleting the transform.
 * @summary Delete a transform
 * @param {TransformsV2025ApiDeleteTransformRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteTransform = (requestParameters, apiConfig) => {
    const transformsv2025api = new sdk.TransformsV2025Api(apiConfig);
    return handleApiCall(() => transformsv2025api.deleteTransform(requestParameters));
};
exports.deleteTransform = deleteTransform;
/**
 * This API returns the transform specified by the given ID.
 * @summary Transform by ID
 * @param {TransformsV2025ApiGetTransformRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getTransform = (requestParameters, apiConfig) => {
    const transformsv2025api = new sdk.TransformsV2025Api(apiConfig);
    return handleApiCall(() => transformsv2025api.getTransform(requestParameters));
};
exports.getTransform = getTransform;
/**
 * Gets a list of all saved transform objects.
 * @summary List transforms
 * @param {TransformsV2025ApiListTransformsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listTransforms = (requestParameters = {}, apiConfig) => {
    const transformsv2025api = new sdk.TransformsV2025Api(apiConfig);
    return handleApiCall(() => transformsv2025api.listTransforms(requestParameters));
};
exports.listTransforms = listTransforms;
/**
 * Replaces the transform specified by the given ID with the transform provided in the request body. Only the \"attributes\" field is mutable. Attempting to change other properties (ex. \"name\" and \"type\") will result in an error.
 * @summary Update a transform
 * @param {TransformsV2025ApiUpdateTransformRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateTransform = (requestParameters, apiConfig) => {
    const transformsv2025api = new sdk.TransformsV2025Api(apiConfig);
    return handleApiCall(() => transformsv2025api.updateTransform(requestParameters));
};
exports.updateTransform = updateTransform;
/**
 * Completes an invocation to a REQUEST_RESPONSE type trigger.
 * @summary Complete Trigger Invocation
 * @param {TriggersV2025ApiCompleteTriggerInvocationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const completeTriggerInvocation = (requestParameters, apiConfig) => {
    const triggersv2025api = new sdk.TriggersV2025Api(apiConfig);
    return handleApiCall(() => triggersv2025api.completeTriggerInvocation(requestParameters));
};
exports.completeTriggerInvocation = completeTriggerInvocation;
/**
 * This API creates a new subscription to a trigger and defines trigger invocation details. The type of subscription determines which config object is required: * HTTP subscriptions require httpConfig * EventBridge subscriptions require eventBridgeConfig
 * @summary Create a Subscription
 * @param {TriggersV2025ApiCreateSubscriptionRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createSubscription = (requestParameters, apiConfig) => {
    const triggersv2025api = new sdk.TriggersV2025Api(apiConfig);
    return handleApiCall(() => triggersv2025api.createSubscription(requestParameters));
};
exports.createSubscription = createSubscription;
/**
 * Deletes an existing subscription to a trigger.
 * @summary Delete a Subscription
 * @param {TriggersV2025ApiDeleteSubscriptionRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteSubscription = (requestParameters, apiConfig) => {
    const triggersv2025api = new sdk.TriggersV2025Api(apiConfig);
    return handleApiCall(() => triggersv2025api.deleteSubscription(requestParameters));
};
exports.deleteSubscription = deleteSubscription;
/**
 * Gets a list of all trigger subscriptions.
 * @summary List Subscriptions
 * @param {TriggersV2025ApiListSubscriptionsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listSubscriptions = (requestParameters, apiConfig) => {
    const triggersv2025api = new sdk.TriggersV2025Api(apiConfig);
    return handleApiCall(() => triggersv2025api.listSubscriptions(requestParameters));
};
exports.listSubscriptions = listSubscriptions;
/**
 * Gets a list of latest invocation statuses. Statuses of successful invocations are available for up to 24 hours. Statuses of failed invocations are available for up to 48 hours. This endpoint may only fetch up to 2000 invocations, and should not be treated as a representation of the full history of invocations.
 * @summary List Latest Invocation Statuses
 * @param {TriggersV2025ApiListTriggerInvocationStatusRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listTriggerInvocationStatus = (requestParameters = {}, apiConfig) => {
    const triggersv2025api = new sdk.TriggersV2025Api(apiConfig);
    return handleApiCall(() => triggersv2025api.listTriggerInvocationStatus(requestParameters));
};
exports.listTriggerInvocationStatus = listTriggerInvocationStatus;
/**
 * Gets a list of triggers that are available in the tenant.
 * @summary List Triggers
 * @param {TriggersV2025ApiListTriggersRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listTriggers = (requestParameters = {}, apiConfig) => {
    const triggersv2025api = new sdk.TriggersV2025Api(apiConfig);
    return handleApiCall(() => triggersv2025api.listTriggers(requestParameters));
};
exports.listTriggers = listTriggers;
/**
 * This API updates a trigger subscription in IdentityNow, using a set of instructions to modify a subscription partially. The following fields are patchable:  **name**, **description**, **enabled**, **type**, **filter**, **responseDeadline**, **httpConfig**, **eventBridgeConfig**, **workflowConfig**
 * @summary Patch a Subscription
 * @param {TriggersV2025ApiPatchSubscriptionRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchSubscription = (requestParameters, apiConfig) => {
    const triggersv2025api = new sdk.TriggersV2025Api(apiConfig);
    return handleApiCall(() => triggersv2025api.patchSubscription(requestParameters));
};
exports.patchSubscription = patchSubscription;
/**
 * Initiate a test event for all subscribers of the specified event trigger.  If there are no subscribers to the specified trigger in the tenant, then no test event will be sent.
 * @summary Start a Test Invocation
 * @param {TriggersV2025ApiStartTestTriggerInvocationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const startTestTriggerInvocation = (requestParameters, apiConfig) => {
    const triggersv2025api = new sdk.TriggersV2025Api(apiConfig);
    return handleApiCall(() => triggersv2025api.startTestTriggerInvocation(requestParameters));
};
exports.startTestTriggerInvocation = startTestTriggerInvocation;
/**
 * Validates a JSONPath filter expression against a provided mock input. Request requires a security scope of:
 * @summary Validate a Subscription Filter
 * @param {TriggersV2025ApiTestSubscriptionFilterRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const testSubscriptionFilter = (requestParameters, apiConfig) => {
    const triggersv2025api = new sdk.TriggersV2025Api(apiConfig);
    return handleApiCall(() => triggersv2025api.testSubscriptionFilter(requestParameters));
};
exports.testSubscriptionFilter = testSubscriptionFilter;
/**
 * This API updates a trigger subscription in IdentityNow, using a full object representation. In other words, the existing   Subscription is completely replaced. The following fields are immutable:     * id    * triggerId     Attempts to modify these fields result in 400.
 * @summary Update a Subscription
 * @param {TriggersV2025ApiUpdateSubscriptionRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const updateSubscription = (requestParameters, apiConfig) => {
    const triggersv2025api = new sdk.TriggersV2025Api(apiConfig);
    return handleApiCall(() => triggersv2025api.updateSubscription(requestParameters));
};
exports.updateSubscription = updateSubscription;
/**
 * This API endpoint retrieves UI metadata configured for your tenant.
 * @summary Get a tenant UI metadata
 * @param {UIMetadataV2025ApiGetTenantUiMetadataRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getTenantUiMetadata = (requestParameters = {}, apiConfig) => {
    const uimetadatav2025api = new sdk.UIMetadataV2025Api(apiConfig);
    return handleApiCall(() => uimetadatav2025api.getTenantUiMetadata(requestParameters));
};
exports.getTenantUiMetadata = getTenantUiMetadata;
/**
 * This API endpoint updates UI metadata for your tenant. These changes may require up to 5 minutes to take effect on the UI.
 * @summary Update tenant UI metadata
 * @param {UIMetadataV2025ApiSetTenantUiMetadataRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const setTenantUiMetadata = (requestParameters, apiConfig) => {
    const uimetadatav2025api = new sdk.UIMetadataV2025Api(apiConfig);
    return handleApiCall(() => uimetadatav2025api.setTenantUiMetadata(requestParameters));
};
exports.setTenantUiMetadata = setTenantUiMetadata;
/**
 * Create a new mapping between a SaaS vendor and an ISC connector to establish correlation paths.
 * @summary Create Vendor Connector Mapping
 * @param {VendorConnectorMappingsV2025ApiCreateVendorConnectorMappingRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createVendorConnectorMapping = (requestParameters, apiConfig) => {
    const vendorconnectormappingsv2025api = new sdk.VendorConnectorMappingsV2025Api(apiConfig);
    return handleApiCall(() => vendorconnectormappingsv2025api.createVendorConnectorMapping(requestParameters));
};
exports.createVendorConnectorMapping = createVendorConnectorMapping;
/**
 * Soft delete a mapping between a SaaS vendor and an ISC connector, removing the established correlation.
 * @summary Delete Vendor Connector Mapping
 * @param {VendorConnectorMappingsV2025ApiDeleteVendorConnectorMappingRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteVendorConnectorMapping = (requestParameters, apiConfig) => {
    const vendorconnectormappingsv2025api = new sdk.VendorConnectorMappingsV2025Api(apiConfig);
    return handleApiCall(() => vendorconnectormappingsv2025api.deleteVendorConnectorMapping(requestParameters));
};
exports.deleteVendorConnectorMapping = deleteVendorConnectorMapping;
/**
 * Get a list of mappings between SaaS vendors and ISC connectors, detailing the connections established for correlation.
 * @summary List Vendor Connector Mappings
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getVendorConnectorMappings = (apiConfig) => {
    const vendorconnectormappingsv2025api = new sdk.VendorConnectorMappingsV2025Api(apiConfig);
    return handleApiCall(() => vendorconnectormappingsv2025api.getVendorConnectorMappings());
};
exports.getVendorConnectorMappings = getVendorConnectorMappings;
/**
 * This API approves an Approval Item. Either an admin, or the owning/current user must make this request.
 * @summary Approve an Approval Item
 * @param {WorkItemsV2025ApiApproveApprovalItemRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const approveApprovalItem = (requestParameters, apiConfig) => {
    const workitemsv2025api = new sdk.WorkItemsV2025Api(apiConfig);
    return handleApiCall(() => workitemsv2025api.approveApprovalItem(requestParameters));
};
exports.approveApprovalItem = approveApprovalItem;
/**
 * This API bulk approves Approval Items. Either an admin, or the owning/current user must make this request.
 * @summary Bulk approve Approval Items
 * @param {WorkItemsV2025ApiApproveApprovalItemsInBulkRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const approveApprovalItemsInBulk = (requestParameters, apiConfig) => {
    const workitemsv2025api = new sdk.WorkItemsV2025Api(apiConfig);
    return handleApiCall(() => workitemsv2025api.approveApprovalItemsInBulk(requestParameters));
};
exports.approveApprovalItemsInBulk = approveApprovalItemsInBulk;
/**
 * This API completes a work item. Either an admin, or the owning/current user must make this request.
 * @summary Complete a Work Item
 * @param {WorkItemsV2025ApiCompleteWorkItemRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const completeWorkItem = (requestParameters, apiConfig) => {
    const workitemsv2025api = new sdk.WorkItemsV2025Api(apiConfig);
    return handleApiCall(() => workitemsv2025api.completeWorkItem(requestParameters));
};
exports.completeWorkItem = completeWorkItem;
/**
 * This API forwards a work item to a new owner. Either an admin, or the owning/current user must make this request.
 * @summary Forward a Work Item
 * @param {WorkItemsV2025ApiForwardWorkItemRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const forwardWorkItem = (requestParameters, apiConfig) => {
    const workitemsv2025api = new sdk.WorkItemsV2025Api(apiConfig);
    return handleApiCall(() => workitemsv2025api.forwardWorkItem(requestParameters));
};
exports.forwardWorkItem = forwardWorkItem;
/**
 * This gets a collection of completed work items belonging to either the specified user(admin required), or the current user.
 * @summary Completed Work Items
 * @param {WorkItemsV2025ApiGetCompletedWorkItemsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getCompletedWorkItems = (requestParameters = {}, apiConfig) => {
    const workitemsv2025api = new sdk.WorkItemsV2025Api(apiConfig);
    return handleApiCall(() => workitemsv2025api.getCompletedWorkItems(requestParameters));
};
exports.getCompletedWorkItems = getCompletedWorkItems;
/**
 * This gets a count of completed work items belonging to either the specified user(admin required), or the current user.
 * @summary Count Completed Work Items
 * @param {WorkItemsV2025ApiGetCountCompletedWorkItemsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getCountCompletedWorkItems = (requestParameters = {}, apiConfig) => {
    const workitemsv2025api = new sdk.WorkItemsV2025Api(apiConfig);
    return handleApiCall(() => workitemsv2025api.getCountCompletedWorkItems(requestParameters));
};
exports.getCountCompletedWorkItems = getCountCompletedWorkItems;
/**
 * This gets a count of work items belonging to either the specified user(admin required), or the current user.
 * @summary Count Work Items
 * @param {WorkItemsV2025ApiGetCountWorkItemsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getCountWorkItems = (requestParameters = {}, apiConfig) => {
    const workitemsv2025api = new sdk.WorkItemsV2025Api(apiConfig);
    return handleApiCall(() => workitemsv2025api.getCountWorkItems(requestParameters));
};
exports.getCountWorkItems = getCountWorkItems;
/**
 * This gets the details of a Work Item belonging to either the specified user(admin required), or the current user.
 * @summary Get a Work Item
 * @param {WorkItemsV2025ApiGetWorkItemRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getWorkItem = (requestParameters, apiConfig) => {
    const workitemsv2025api = new sdk.WorkItemsV2025Api(apiConfig);
    return handleApiCall(() => workitemsv2025api.getWorkItem(requestParameters));
};
exports.getWorkItem = getWorkItem;
/**
 * This gets a summary of work items belonging to either the specified user(admin required), or the current user.
 * @summary Work Items Summary
 * @param {WorkItemsV2025ApiGetWorkItemsSummaryRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getWorkItemsSummary = (requestParameters = {}, apiConfig) => {
    const workitemsv2025api = new sdk.WorkItemsV2025Api(apiConfig);
    return handleApiCall(() => workitemsv2025api.getWorkItemsSummary(requestParameters));
};
exports.getWorkItemsSummary = getWorkItemsSummary;
/**
 * This gets a collection of work items belonging to either the specified user(admin required), or the current user.
 * @summary List Work Items
 * @param {WorkItemsV2025ApiListWorkItemsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listWorkItems = (requestParameters = {}, apiConfig) => {
    const workitemsv2025api = new sdk.WorkItemsV2025Api(apiConfig);
    return handleApiCall(() => workitemsv2025api.listWorkItems(requestParameters));
};
exports.listWorkItems = listWorkItems;
/**
 * This API rejects an Approval Item. Either an admin, or the owning/current user must make this request.
 * @summary Reject an Approval Item
 * @param {WorkItemsV2025ApiRejectApprovalItemRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const rejectApprovalItem = (requestParameters, apiConfig) => {
    const workitemsv2025api = new sdk.WorkItemsV2025Api(apiConfig);
    return handleApiCall(() => workitemsv2025api.rejectApprovalItem(requestParameters));
};
exports.rejectApprovalItem = rejectApprovalItem;
/**
 * This API bulk rejects Approval Items. Either an admin, or the owning/current user must make this request.
 * @summary Bulk reject Approval Items
 * @param {WorkItemsV2025ApiRejectApprovalItemsInBulkRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const rejectApprovalItemsInBulk = (requestParameters, apiConfig) => {
    const workitemsv2025api = new sdk.WorkItemsV2025Api(apiConfig);
    return handleApiCall(() => workitemsv2025api.rejectApprovalItemsInBulk(requestParameters));
};
exports.rejectApprovalItemsInBulk = rejectApprovalItemsInBulk;
/**
 * This API submits account selections. Either an admin, or the owning/current user must make this request.
 * @summary Submit Account Selections
 * @param {WorkItemsV2025ApiSubmitAccountSelectionRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const submitAccountSelection = (requestParameters, apiConfig) => {
    const workitemsv2025api = new sdk.WorkItemsV2025Api(apiConfig);
    return handleApiCall(() => workitemsv2025api.submitAccountSelection(requestParameters));
};
exports.submitAccountSelection = submitAccountSelection;
/**
 * Creates a new Reassignment Configuration for the specified identity.
 * @summary Create a Reassignment Configuration
 * @param {WorkReassignmentV2025ApiCreateReassignmentConfigurationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createReassignmentConfiguration = (requestParameters, apiConfig) => {
    const workreassignmentv2025api = new sdk.WorkReassignmentV2025Api(apiConfig);
    return handleApiCall(() => workreassignmentv2025api.createReassignmentConfiguration(requestParameters));
};
exports.createReassignmentConfiguration = createReassignmentConfiguration;
/**
 * Deletes a single reassignment configuration for the specified identity
 * @summary Delete Reassignment Configuration
 * @param {WorkReassignmentV2025ApiDeleteReassignmentConfigurationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteReassignmentConfiguration = (requestParameters, apiConfig) => {
    const workreassignmentv2025api = new sdk.WorkReassignmentV2025Api(apiConfig);
    return handleApiCall(() => workreassignmentv2025api.deleteReassignmentConfiguration(requestParameters));
};
exports.deleteReassignmentConfiguration = deleteReassignmentConfiguration;
/**
 * Evaluates the Reassignment Configuration for an `Identity` to determine if work items for the specified type should be reassigned. If a valid Reassignment Configuration is found for the identity & work type, then a lookup is initiated which recursively fetches the Reassignment Configuration for the next `TargetIdentity` until no more results are found or a max depth of 5. That lookup trail is provided in the response and the final reassigned identity in the lookup list is returned as the `reassignToId` property. If no Reassignment Configuration is found for the specified identity & config type then the requested Identity ID will be used as the `reassignToId` value and the lookupTrail node will be empty.
 * @summary Evaluate Reassignment Configuration
 * @param {WorkReassignmentV2025ApiGetEvaluateReassignmentConfigurationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getEvaluateReassignmentConfiguration = (requestParameters, apiConfig) => {
    const workreassignmentv2025api = new sdk.WorkReassignmentV2025Api(apiConfig);
    return handleApiCall(() => workreassignmentv2025api.getEvaluateReassignmentConfiguration(requestParameters));
};
exports.getEvaluateReassignmentConfiguration = getEvaluateReassignmentConfiguration;
/**
 * Gets a collection of types which are available in the Reassignment Configuration UI.
 * @summary List Reassignment Config Types
 * @param {WorkReassignmentV2025ApiGetReassignmentConfigTypesRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getReassignmentConfigTypes = (requestParameters = {}, apiConfig) => {
    const workreassignmentv2025api = new sdk.WorkReassignmentV2025Api(apiConfig);
    return handleApiCall(() => workreassignmentv2025api.getReassignmentConfigTypes(requestParameters));
};
exports.getReassignmentConfigTypes = getReassignmentConfigTypes;
/**
 * Gets the Reassignment Configuration for an identity.
 * @summary Get Reassignment Configuration
 * @param {WorkReassignmentV2025ApiGetReassignmentConfigurationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getReassignmentConfiguration = (requestParameters, apiConfig) => {
    const workreassignmentv2025api = new sdk.WorkReassignmentV2025Api(apiConfig);
    return handleApiCall(() => workreassignmentv2025api.getReassignmentConfiguration(requestParameters));
};
exports.getReassignmentConfiguration = getReassignmentConfiguration;
/**
 * Gets the global Reassignment Configuration settings for the requestor\'s tenant.
 * @summary Get Tenant-wide Reassignment Configuration settings
 * @param {WorkReassignmentV2025ApiGetTenantConfigConfigurationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getTenantConfigConfiguration = (requestParameters = {}, apiConfig) => {
    const workreassignmentv2025api = new sdk.WorkReassignmentV2025Api(apiConfig);
    return handleApiCall(() => workreassignmentv2025api.getTenantConfigConfiguration(requestParameters));
};
exports.getTenantConfigConfiguration = getTenantConfigConfiguration;
/**
 * Gets all Reassignment configuration for the current org.
 * @summary List Reassignment Configurations
 * @param {WorkReassignmentV2025ApiListReassignmentConfigurationsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listReassignmentConfigurations = (requestParameters = {}, apiConfig) => {
    const workreassignmentv2025api = new sdk.WorkReassignmentV2025Api(apiConfig);
    return handleApiCall(() => workreassignmentv2025api.listReassignmentConfigurations(requestParameters));
};
exports.listReassignmentConfigurations = listReassignmentConfigurations;
/**
 * Replaces existing Reassignment configuration for an identity with the newly provided configuration.
 * @summary Update Reassignment Configuration
 * @param {WorkReassignmentV2025ApiPutReassignmentConfigRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putReassignmentConfig = (requestParameters, apiConfig) => {
    const workreassignmentv2025api = new sdk.WorkReassignmentV2025Api(apiConfig);
    return handleApiCall(() => workreassignmentv2025api.putReassignmentConfig(requestParameters));
};
exports.putReassignmentConfig = putReassignmentConfig;
/**
 * Replaces existing Tenant-wide Reassignment Configuration settings with the newly provided settings.
 * @summary Update Tenant-wide Reassignment Configuration settings
 * @param {WorkReassignmentV2025ApiPutTenantConfigurationRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putTenantConfiguration = (requestParameters, apiConfig) => {
    const workreassignmentv2025api = new sdk.WorkReassignmentV2025Api(apiConfig);
    return handleApiCall(() => workreassignmentv2025api.putTenantConfiguration(requestParameters));
};
exports.putTenantConfiguration = putTenantConfiguration;
/**
 * Use this API to cancel a running workflow execution.
 * @summary Cancel Workflow Execution by ID
 * @param {WorkflowsV2025ApiCancelWorkflowExecutionRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const cancelWorkflowExecution = (requestParameters, apiConfig) => {
    const workflowsv2025api = new sdk.WorkflowsV2025Api(apiConfig);
    return handleApiCall(() => workflowsv2025api.cancelWorkflowExecution(requestParameters));
};
exports.cancelWorkflowExecution = cancelWorkflowExecution;
/**
 * This endpoint allows a service outside of IdentityNow to initiate a workflow that uses the \"External Trigger\" step.  The external service will invoke this endpoint with the input data it wants to send to the workflow in the body.
 * @summary Execute Workflow via External Trigger
 * @param {WorkflowsV2025ApiCreateExternalExecuteWorkflowRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createExternalExecuteWorkflow = (requestParameters, apiConfig) => {
    const workflowsv2025api = new sdk.WorkflowsV2025Api(apiConfig);
    return handleApiCall(() => workflowsv2025api.createExternalExecuteWorkflow(requestParameters));
};
exports.createExternalExecuteWorkflow = createExternalExecuteWorkflow;
/**
 * Create a new workflow with the desired trigger and steps specified in the request body.
 * @summary Create Workflow
 * @param {WorkflowsV2025ApiCreateWorkflowRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createWorkflow = (requestParameters, apiConfig) => {
    const workflowsv2025api = new sdk.WorkflowsV2025Api(apiConfig);
    return handleApiCall(() => workflowsv2025api.createWorkflow(requestParameters));
};
exports.createWorkflow = createWorkflow;
/**
 * Create OAuth client ID, client secret, and callback URL for use in an external trigger.  External triggers will need this information to generate an access token to authenticate to the callback URL and submit a trigger payload that will initiate the workflow.
 * @summary Generate External Trigger OAuth Client
 * @param {WorkflowsV2025ApiCreateWorkflowExternalTriggerRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const createWorkflowExternalTrigger = (requestParameters, apiConfig) => {
    const workflowsv2025api = new sdk.WorkflowsV2025Api(apiConfig);
    return handleApiCall(() => workflowsv2025api.createWorkflowExternalTrigger(requestParameters));
};
exports.createWorkflowExternalTrigger = createWorkflowExternalTrigger;
/**
 * Delete a workflow.  **Enabled workflows cannot be deleted**.  They must first be disabled.
 * @summary Delete Workflow By Id
 * @param {WorkflowsV2025ApiDeleteWorkflowRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const deleteWorkflow = (requestParameters, apiConfig) => {
    const workflowsv2025api = new sdk.WorkflowsV2025Api(apiConfig);
    return handleApiCall(() => workflowsv2025api.deleteWorkflow(requestParameters));
};
exports.deleteWorkflow = deleteWorkflow;
/**
 * Get a single workflow by id.
 * @summary Get Workflow By Id
 * @param {WorkflowsV2025ApiGetWorkflowRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getWorkflow = (requestParameters, apiConfig) => {
    const workflowsv2025api = new sdk.WorkflowsV2025Api(apiConfig);
    return handleApiCall(() => workflowsv2025api.getWorkflow(requestParameters));
};
exports.getWorkflow = getWorkflow;
/**
 * Use this API to get a single workflow execution. Workflow executions are available for up to 90 days before being archived. If you attempt to access a workflow execution that has been archived, you will receive a \"404 Not Found\" response.
 * @summary Get Workflow Execution
 * @param {WorkflowsV2025ApiGetWorkflowExecutionRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getWorkflowExecution = (requestParameters, apiConfig) => {
    const workflowsv2025api = new sdk.WorkflowsV2025Api(apiConfig);
    return handleApiCall(() => workflowsv2025api.getWorkflowExecution(requestParameters));
};
exports.getWorkflowExecution = getWorkflowExecution;
/**
 * Get a detailed history of a single workflow execution.  Workflow executions are available for up to 90 days before being archived.  If you attempt to access a workflow execution that has been archived, you will receive a 404 Not Found.
 * @summary Get Workflow Execution History
 * @param {WorkflowsV2025ApiGetWorkflowExecutionHistoryRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getWorkflowExecutionHistory = (requestParameters, apiConfig) => {
    const workflowsv2025api = new sdk.WorkflowsV2025Api(apiConfig);
    return handleApiCall(() => workflowsv2025api.getWorkflowExecutionHistory(requestParameters));
};
exports.getWorkflowExecutionHistory = getWorkflowExecutionHistory;
/**
 * Use this API to list a specified workflow\'s executions. Workflow executions are available for up to 90 days before being archived. By default, you can get a maximum of 250 executions. To get executions past the first 250 records, you can do the following: 1. Use the [Get Workflows](https://developer.sailpoint.com/idn/api/beta/list-workflows) endpoint to get your workflows. 2. Get your workflow ID from the response. 3. You can then do either of the following:    - Filter to find relevant workflow executions.   For example, you can filter for failed workflow executions: `GET /workflows/:workflowID/executions?filters=status eq \"Failed\"`    - Paginate through results with the `offset` parameter.   For example, you can page through 50 executions per page and use that as a way to get to the records past the first 250.   Refer to [Paginating Results](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results) for more information about the query parameters you can use to achieve pagination.
 * @summary List Workflow Executions
 * @param {WorkflowsV2025ApiGetWorkflowExecutionsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const getWorkflowExecutions = (requestParameters, apiConfig) => {
    const workflowsv2025api = new sdk.WorkflowsV2025Api(apiConfig);
    return handleApiCall(() => workflowsv2025api.getWorkflowExecutions(requestParameters));
};
exports.getWorkflowExecutions = getWorkflowExecutions;
/**
 * This lists all triggers, actions, and operators in the library
 * @summary List Complete Workflow Library
 * @param {WorkflowsV2025ApiListCompleteWorkflowLibraryRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listCompleteWorkflowLibrary = (requestParameters = {}, apiConfig) => {
    const workflowsv2025api = new sdk.WorkflowsV2025Api(apiConfig);
    return handleApiCall(() => workflowsv2025api.listCompleteWorkflowLibrary(requestParameters));
};
exports.listCompleteWorkflowLibrary = listCompleteWorkflowLibrary;
/**
 * This lists the workflow actions available to you.
 * @summary List Workflow Library Actions
 * @param {WorkflowsV2025ApiListWorkflowLibraryActionsRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listWorkflowLibraryActions = (requestParameters = {}, apiConfig) => {
    const workflowsv2025api = new sdk.WorkflowsV2025Api(apiConfig);
    return handleApiCall(() => workflowsv2025api.listWorkflowLibraryActions(requestParameters));
};
exports.listWorkflowLibraryActions = listWorkflowLibraryActions;
/**
 * This lists the workflow operators available to you
 * @summary List Workflow Library Operators
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listWorkflowLibraryOperators = (apiConfig) => {
    const workflowsv2025api = new sdk.WorkflowsV2025Api(apiConfig);
    return handleApiCall(() => workflowsv2025api.listWorkflowLibraryOperators());
};
exports.listWorkflowLibraryOperators = listWorkflowLibraryOperators;
/**
 * This lists the workflow triggers available to you
 * @summary List Workflow Library Triggers
 * @param {WorkflowsV2025ApiListWorkflowLibraryTriggersRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listWorkflowLibraryTriggers = (requestParameters = {}, apiConfig) => {
    const workflowsv2025api = new sdk.WorkflowsV2025Api(apiConfig);
    return handleApiCall(() => workflowsv2025api.listWorkflowLibraryTriggers(requestParameters));
};
exports.listWorkflowLibraryTriggers = listWorkflowLibraryTriggers;
/**
 * List all workflows in the tenant.
 * @summary List Workflows
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const listWorkflows = (apiConfig) => {
    const workflowsv2025api = new sdk.WorkflowsV2025Api(apiConfig);
    return handleApiCall(() => workflowsv2025api.listWorkflows());
};
exports.listWorkflows = listWorkflows;
/**
 * Partially update an existing Workflow using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.
 * @summary Patch Workflow
 * @param {WorkflowsV2025ApiPatchWorkflowRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const patchWorkflow = (requestParameters, apiConfig) => {
    const workflowsv2025api = new sdk.WorkflowsV2025Api(apiConfig);
    return handleApiCall(() => workflowsv2025api.patchWorkflow(requestParameters));
};
exports.patchWorkflow = patchWorkflow;
/**
 * Perform a full update of a workflow.  The updated workflow object is returned in the response.
 * @summary Update Workflow
 * @param {WorkflowsV2025ApiPutWorkflowRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const putWorkflow = (requestParameters, apiConfig) => {
    const workflowsv2025api = new sdk.WorkflowsV2025Api(apiConfig);
    return handleApiCall(() => workflowsv2025api.putWorkflow(requestParameters));
};
exports.putWorkflow = putWorkflow;
/**
 * Validate a workflow with an \"External Trigger\" can receive input.  The response includes the input that the workflow received, which can be used to validate that the input is intact when it reaches the workflow.
 * @summary Test Workflow via External Trigger
 * @param {WorkflowsV2025ApiTestExternalExecuteWorkflowRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const testExternalExecuteWorkflow = (requestParameters, apiConfig) => {
    const workflowsv2025api = new sdk.WorkflowsV2025Api(apiConfig);
    return handleApiCall(() => workflowsv2025api.testExternalExecuteWorkflow(requestParameters));
};
exports.testExternalExecuteWorkflow = testExternalExecuteWorkflow;
/**
 * Test a workflow with the provided input data.  The input data should resemble the input that the trigger will send the workflow.  See the [event trigger documentation](https://developer.sailpoint.com/idn/docs/event-triggers/available) for an example input for the trigger that initiates this workflow. This endpoint will return an execution ID, which can be used to lookup more information about the execution using the `Get a Workflow Execution` endpoint. **This will cause a live run of the workflow, which could result in unintended modifications to your IDN tenant.**
 * @summary Test Workflow By Id
 * @param {WorkflowsV2025ApiTestWorkflowRequest} requestParameters Request parameters.
 * @param {*} [axiosOptions] Override http request option.
 * @throws {RequiredError}
 */
const testWorkflow = (requestParameters, apiConfig) => {
    const workflowsv2025api = new sdk.WorkflowsV2025Api(apiConfig);
    return handleApiCall(() => workflowsv2025api.testWorkflow(requestParameters));
};
exports.testWorkflow = testWorkflow;
//# sourceMappingURL=sailpoint-sdk.js.map