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
exports.setupSailPointSDKHandlers = setupSailPointSDKHandlers;
const electron_1 = require("electron");
const sdkWrapper = require("./sailpoint-sdk");
const api_1 = require("../api");
function setupSailPointSDKHandlers() {
    electron_1.ipcMain.handle('get-access-model-metadata-attribute', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getAccessModelMetadataAttribute(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-access-model-metadata-attribute-value', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getAccessModelMetadataAttributeValue(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-access-model-metadata-attribute', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listAccessModelMetadataAttribute(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-access-model-metadata-attribute-value', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listAccessModelMetadataAttributeValue(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-access-profile', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createAccessProfile(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-access-profile', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteAccessProfile(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-access-profiles-in-bulk', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteAccessProfilesInBulk(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-access-profile', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getAccessProfile(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-access-profile-entitlements', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getAccessProfileEntitlements(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-access-profiles', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listAccessProfiles(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-access-profile', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchAccessProfile(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-access-profiles-in-bulk', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateAccessProfilesInBulk(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('approve-access-request', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.approveAccessRequest(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('forward-access-request', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.forwardAccessRequest(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-access-request-approval-summary', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.getAccessRequestApprovalSummary(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-access-request-approvers', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listAccessRequestApprovers(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-completed-approvals', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listCompletedApprovals(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-pending-approvals', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listPendingApprovals(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('reject-access-request', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.rejectAccessRequest(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-access-request-identity-metrics', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getAccessRequestIdentityMetrics(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('approve-bulk-access-request', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.approveBulkAccessRequest(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('cancel-access-request', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.cancelAccessRequest(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('cancel-access-request-in-bulk', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.cancelAccessRequestInBulk(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('close-access-request', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.closeAccessRequest(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-access-request', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createAccessRequest(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-access-request-config', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getAccessRequestConfig(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-entitlement-details-for-identity', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getEntitlementDetailsForIdentity(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-access-request-status', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listAccessRequestStatus(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-administrators-access-request-status', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listAdministratorsAccessRequestStatus(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('load-account-selections', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.loadAccountSelections(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('set-access-request-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.setAccessRequestConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-account-activity', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getAccountActivity(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-account-activities', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listAccountActivities(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-account-aggregation-status', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getAccountAggregationStatus(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-usages-by-account-id', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getUsagesByAccountId(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-account', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createAccount(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-account', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteAccount(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-account-async', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteAccountAsync(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('disable-account', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.disableAccount(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('disable-account-for-identity', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.disableAccountForIdentity(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('disable-accounts-for-identities', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.disableAccountsForIdentities(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('enable-account', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.enableAccount(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('enable-account-for-identity', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.enableAccountForIdentity(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('enable-accounts-for-identities', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.enableAccountsForIdentities(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-account', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getAccount(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-account-entitlements', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getAccountEntitlements(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-accounts', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listAccounts(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-account', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putAccount(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('submit-reload-account', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.submitReloadAccount(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('unlock-account', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.unlockAccount(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-account', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateAccount(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-discovered-applications', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.getDiscoveredApplications(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-manual-discover-applications-csv-template', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getManualDiscoverApplicationsCsvTemplate(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('send-manual-discover-applications-csv-template', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.sendManualDiscoverApplicationsCsvTemplate(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-approval', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getApproval(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-approvals', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getApprovals(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-source-app', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createSourceApp(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-access-profiles-from-source-app-by-bulk', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteAccessProfilesFromSourceAppByBulk(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-source-app', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteSourceApp(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-source-app', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSourceApp(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-access-profiles-for-source-app', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listAccessProfilesForSourceApp(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-all-source-app', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listAllSourceApp(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-all-user-apps', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listAllUserApps(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-assigned-source-app', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listAssignedSourceApp(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-available-accounts-for-user-app', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listAvailableAccountsForUserApp(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-available-source-apps', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listAvailableSourceApps(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-owned-user-apps', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listOwnedUserApps(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-source-app', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchSourceApp(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-user-app', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchUserApp(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-source-apps-in-bulk', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateSourceAppsInBulk(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-profile-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getProfileConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-profile-config-list', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getProfileConfigList(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-profile-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchProfileConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-auth-user', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getAuthUser(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-auth-user', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchAuthUser(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-branding-item', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createBrandingItem(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-branding', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteBranding(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-branding', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getBranding(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-branding-list', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getBrandingList(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('set-branding-item', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.setBrandingItem(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-campaign-filter', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createCampaignFilter(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-campaign-filters', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteCampaignFilters(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-campaign-filter-by-id', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getCampaignFilterById(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-campaign-filters', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listCampaignFilters(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-campaign-filter', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateCampaignFilter(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('complete-campaign', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.completeCampaign(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-campaign', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createCampaign(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-campaign-template', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createCampaignTemplate(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-campaign-template', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteCampaignTemplate(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-campaign-template-schedule', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteCampaignTemplateSchedule(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-campaigns', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteCampaigns(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-active-campaigns', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.getActiveCampaigns(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-campaign', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getCampaign(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-campaign-reports', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getCampaignReports(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-campaign-reports-config', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getCampaignReportsConfig(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-campaign-template', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getCampaignTemplate(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-campaign-template-schedule', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getCampaignTemplateSchedule(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-campaign-templates', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.getCampaignTemplates(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('move', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.move(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-campaign-template', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchCampaignTemplate(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('set-campaign-reports-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.setCampaignReportsConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('set-campaign-template-schedule', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.setCampaignTemplateSchedule(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('start-campaign', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.startCampaign(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('start-campaign-remediation-scan', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.startCampaignRemediationScan(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('start-campaign-report', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.startCampaignReport(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('start-generate-campaign-template', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.startGenerateCampaignTemplate(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-campaign', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateCampaign(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-identity-access-summaries', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getIdentityAccessSummaries(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-identity-decision-summary', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getIdentityDecisionSummary(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-identity-summaries', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getIdentitySummaries(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-identity-summary', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getIdentitySummary(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-certification-task', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getCertificationTask(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-identity-certification', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getIdentityCertification(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-identity-certification-item-permissions', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getIdentityCertificationItemPermissions(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-pending-certification-tasks', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.getPendingCertificationTasks(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-certification-reviewers', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listCertificationReviewers(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-identity-access-review-items', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listIdentityAccessReviewItems(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-identity-certifications', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listIdentityCertifications(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('make-identity-decision', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.makeIdentityDecision(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('reassign-identity-certifications', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.reassignIdentityCertifications(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('sign-off-identity-certification', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.signOffIdentityCertification(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('submit-reassign-certs-async', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.submitReassignCertsAsync(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-deploy', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createDeploy(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-object-mapping', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createObjectMapping(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-object-mappings', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createObjectMappings(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-scheduled-action', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createScheduledAction(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-uploaded-configuration', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createUploadedConfiguration(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-backup', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteBackup(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-draft', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteDraft(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-object-mapping', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteObjectMapping(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-scheduled-action', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteScheduledAction(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-uploaded-configuration', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteUploadedConfiguration(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-deploy', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getDeploy(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-object-mappings', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getObjectMappings(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-uploaded-configuration', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getUploadedConfiguration(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-backups', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listBackups(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-deploys', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listDeploys(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-drafts', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listDrafts(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-scheduled-actions', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listScheduledActions(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-uploaded-configurations', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listUploadedConfigurations(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-object-mappings', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateObjectMappings(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-scheduled-action', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateScheduledAction(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-connector-customizer', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createConnectorCustomizer(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-connector-customizer-version', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createConnectorCustomizerVersion(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-connector-customizer', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteConnectorCustomizer(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-connector-customizer', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getConnectorCustomizer(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-connector-customizers', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listConnectorCustomizers(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-connector-customizer', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putConnectorCustomizer(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-connector-rule', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createConnectorRule(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-connector-rule', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteConnectorRule(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-connector-rule', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getConnectorRule(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-connector-rule-list', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.getConnectorRuleList(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-connector-rule', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putConnectorRule(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('test-connector-rule', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.testConnectorRule(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-custom-connector', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createCustomConnector(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-custom-connector', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteCustomConnector(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-connector', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getConnector(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-connector-correlation-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getConnectorCorrelationConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-connector-list', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.getConnectorList(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-connector-source-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getConnectorSourceConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-connector-source-template', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getConnectorSourceTemplate(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-connector-translations', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getConnectorTranslations(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-connector-correlation-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putConnectorCorrelationConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-connector-source-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putConnectorSourceConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-connector-source-template', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putConnectorSourceTemplate(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-connector-translations', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putConnectorTranslations(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-connector', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateConnector(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-form-definition', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.createFormDefinition(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-form-definition-dynamic-schema', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.createFormDefinitionDynamicSchema(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-form-definition-file-request', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createFormDefinitionFileRequest(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-form-instance', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.createFormInstance(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-form-definition', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteFormDefinition(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('export-form-definitions-by-tenant', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.exportFormDefinitionsByTenant(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-file-from-s3', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getFileFromS3(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-form-definition-by-key', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getFormDefinitionByKey(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-form-instance-by-key', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getFormInstanceByKey(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-form-instance-file', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getFormInstanceFile(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('import-form-definitions', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.importFormDefinitions(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-form-definition', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchFormDefinition(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-form-instance', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchFormInstance(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('search-form-definitions-by-tenant', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.searchFormDefinitionsByTenant(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('search-form-element-data-by-element-id', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.searchFormElementDataByElementID(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('search-form-instances-by-tenant', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.searchFormInstancesByTenant(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('search-pre-defined-select-options', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.searchPreDefinedSelectOptions(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('show-preview-data-source', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.showPreviewDataSource(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-custom-password-instructions', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createCustomPasswordInstructions(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-custom-password-instructions', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteCustomPasswordInstructions(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-custom-password-instructions', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getCustomPasswordInstructions(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-data-segment', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createDataSegment(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-data-segment', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteDataSegment(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-data-segment', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getDataSegment(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-data-segment-identity-membership', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getDataSegmentIdentityMembership(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-data-segmentation-enabled-for-user', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getDataSegmentationEnabledForUser(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-data-segments', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listDataSegments(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-data-segment', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchDataSegment(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('publish-data-segment', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.publishDataSegment(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-dimension', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createDimension(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-bulk-dimensions', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteBulkDimensions(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-dimension', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteDimension(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-dimension', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getDimension(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-dimension-entitlements', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getDimensionEntitlements(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-dimension-access-profiles', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listDimensionAccessProfiles(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-dimensions', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listDimensions(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-dimension', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchDimension(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-access-model-metadata-for-entitlement', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createAccessModelMetadataForEntitlement(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-access-model-metadata-from-entitlement', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteAccessModelMetadataFromEntitlement(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-entitlement', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getEntitlement(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-entitlement-request-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getEntitlementRequestConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('import-entitlements-by-source', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.importEntitlementsBySource(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-entitlement-children', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listEntitlementChildren(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-entitlement-parents', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listEntitlementParents(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-entitlements', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listEntitlements(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-entitlement', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchEntitlement(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-entitlement-request-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putEntitlementRequestConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('reset-source-entitlements', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.resetSourceEntitlements(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-entitlements-in-bulk', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateEntitlementsInBulk(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-auth-org-network-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createAuthOrgNetworkConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-auth-org-lockout-config', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getAuthOrgLockoutConfig(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-auth-org-network-config', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getAuthOrgNetworkConfig(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-auth-org-service-provider-config', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getAuthOrgServiceProviderConfig(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-auth-org-session-config', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getAuthOrgSessionConfig(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-auth-org-lockout-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchAuthOrgLockoutConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-auth-org-network-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchAuthOrgNetworkConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-auth-org-service-provider-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchAuthOrgServiceProviderConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-auth-org-session-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchAuthOrgSessionConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-workgroup', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createWorkgroup(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-workgroup', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteWorkgroup(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-workgroup-members', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteWorkgroupMembers(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-workgroups-in-bulk', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteWorkgroupsInBulk(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-workgroup', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getWorkgroup(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-connections', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listConnections(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-workgroup-members', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listWorkgroupMembers(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-workgroups', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listWorkgroups(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-workgroup', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchWorkgroup(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-workgroup-members', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateWorkgroupMembers(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('add-access-request-recommendations-ignored-item', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.addAccessRequestRecommendationsIgnoredItem(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('add-access-request-recommendations-requested-item', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.addAccessRequestRecommendationsRequestedItem(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('add-access-request-recommendations-viewed-item', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.addAccessRequestRecommendationsViewedItem(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('add-access-request-recommendations-viewed-items', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.addAccessRequestRecommendationsViewedItems(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-access-request-recommendations', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getAccessRequestRecommendations(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-access-request-recommendations-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getAccessRequestRecommendationsConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-access-request-recommendations-ignored-items', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getAccessRequestRecommendationsIgnoredItems(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-access-request-recommendations-requested-items', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getAccessRequestRecommendationsRequestedItems(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-access-request-recommendations-viewed-items', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getAccessRequestRecommendationsViewedItems(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('set-access-request-recommendations-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.setAccessRequestRecommendationsConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-common-access', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createCommonAccess(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-common-access', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getCommonAccess(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-common-access-status-in-bulk', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateCommonAccessStatusInBulk(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('export-outliers-zip', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.exportOutliersZip(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-identity-outlier-snapshots', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getIdentityOutlierSnapshots(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-identity-outliers', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getIdentityOutliers(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-latest-identity-outlier-snapshots', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getLatestIdentityOutlierSnapshots(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-outlier-contributing-feature-summary', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getOutlierContributingFeatureSummary(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-peer-group-outliers-contributing-features', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getPeerGroupOutliersContributingFeatures(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('ignore-identity-outliers', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.ignoreIdentityOutliers(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-outliers-contributing-feature-access-items', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listOutliersContributingFeatureAccessItems(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('un-ignore-identity-outliers', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.unIgnoreIdentityOutliers(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-peer-group-outliers', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getPeerGroupOutliers(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-recommendations', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getRecommendations(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-recommendations-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getRecommendationsConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-recommendations-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateRecommendationsConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-potential-role-provision-request', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createPotentialRoleProvisionRequest(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-role-mining-sessions', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createRoleMiningSessions(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('download-role-mining-potential-role-zip', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.downloadRoleMiningPotentialRoleZip(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('export-role-mining-potential-role', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.exportRoleMiningPotentialRole(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('export-role-mining-potential-role-async', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.exportRoleMiningPotentialRoleAsync(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('export-role-mining-potential-role-status', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.exportRoleMiningPotentialRoleStatus(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-all-potential-role-summaries', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getAllPotentialRoleSummaries(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-entitlement-distribution-potential-role', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getEntitlementDistributionPotentialRole(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-entitlements-potential-role', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getEntitlementsPotentialRole(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-excluded-entitlements-potential-role', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getExcludedEntitlementsPotentialRole(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-identities-potential-role', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getIdentitiesPotentialRole(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-potential-role', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getPotentialRole(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-potential-role-applications', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getPotentialRoleApplications(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-potential-role-entitlements', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getPotentialRoleEntitlements(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-potential-role-source-identity-usage', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getPotentialRoleSourceIdentityUsage(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-potential-role-summaries', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getPotentialRoleSummaries(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-role-mining-potential-role', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getRoleMiningPotentialRole(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-role-mining-session', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getRoleMiningSession(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-role-mining-session-status', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getRoleMiningSessionStatus(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-role-mining-sessions', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getRoleMiningSessions(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-saved-potential-roles', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSavedPotentialRoles(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-potential-role', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchPotentialRole(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-potential-role-1', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchPotentialRole_1(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-role-mining-session', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchRoleMiningSession(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-entitlements-potential-role', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateEntitlementsPotentialRole(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-icon', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteIcon(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('set-icon', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.setIcon(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-identity', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteIdentity(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-identity', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getIdentity(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-identity-ownership-details', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getIdentityOwnershipDetails(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-role-assignment', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getRoleAssignment(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-role-assignments', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getRoleAssignments(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-identities', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listIdentities(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('reset-identity', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.resetIdentity(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('send-identity-verification-account-token', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.sendIdentityVerificationAccountToken(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('start-identities-invite', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.startIdentitiesInvite(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('start-identity-processing', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.startIdentityProcessing(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('synchronize-attributes-for-identity', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.synchronizeAttributesForIdentity(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-identity-attribute', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createIdentityAttribute(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-identity-attribute', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteIdentityAttribute(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-identity-attributes-in-bulk', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteIdentityAttributesInBulk(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-identity-attribute', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getIdentityAttribute(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-identity-attributes', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listIdentityAttributes(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-identity-attribute', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putIdentityAttribute(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('compare-identity-snapshots', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.compareIdentitySnapshots(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('compare-identity-snapshots-access-type', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.compareIdentitySnapshotsAccessType(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-historical-identity', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getHistoricalIdentity(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-historical-identity-events', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getHistoricalIdentityEvents(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-identity-snapshot', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getIdentitySnapshot(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-identity-snapshot-summary', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getIdentitySnapshotSummary(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-identity-start-date', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getIdentityStartDate(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-historical-identities', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listHistoricalIdentities(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-identity-access-items', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listIdentityAccessItems(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-identity-snapshot-access-items', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listIdentitySnapshotAccessItems(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-identity-snapshots', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listIdentitySnapshots(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-identity-profile', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createIdentityProfile(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-identity-profile', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteIdentityProfile(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-identity-profiles', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteIdentityProfiles(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('export-identity-profiles', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.exportIdentityProfiles(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('generate-identity-preview', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.generateIdentityPreview(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-default-identity-attribute-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getDefaultIdentityAttributeConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-identity-profile', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getIdentityProfile(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('import-identity-profiles', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.importIdentityProfiles(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-identity-profiles', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listIdentityProfiles(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('sync-identity-profile', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.syncIdentityProfile(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-identity-profile', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateIdentityProfile(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-lifecycle-state', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createLifecycleState(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-lifecycle-state', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteLifecycleState(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-lifecycle-state', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getLifecycleState(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-lifecycle-states', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getLifecycleStates(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('set-lifecycle-state', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.setLifecycleState(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-lifecycle-states', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateLifecycleStates(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-mfa-duo-config', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getMFADuoConfig(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-mfa-kba-config', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.getMFAKbaConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-mfa-okta-config', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getMFAOktaConfig(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('set-mfa-duo-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.setMFADuoConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('set-mfakba-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.setMFAKBAConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('set-mfa-okta-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.setMFAOktaConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('test-mfa-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.testMFAConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-machine-account', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getMachineAccount(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-machine-accounts', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listMachineAccounts(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-machine-account', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateMachineAccount(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-machine-identity', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createMachineIdentity(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-machine-identity', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteMachineIdentity(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-machine-identity', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getMachineIdentity(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-machine-identities', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listMachineIdentities(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-machine-identity', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateMachineIdentity(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-managed-client', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createManagedClient(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-managed-client', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteManagedClient(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-managed-client', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getManagedClient(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-managed-client-status', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getManagedClientStatus(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-managed-clients', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.getManagedClients(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-managed-client', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateManagedClient(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-managed-cluster-type', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createManagedClusterType(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-managed-cluster-type', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteManagedClusterType(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-managed-cluster-type', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getManagedClusterType(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-managed-cluster-types', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.getManagedClusterTypes(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-managed-cluster-type', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateManagedClusterType(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-managed-cluster', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createManagedCluster(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-managed-cluster', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteManagedCluster(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-client-log-configuration', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getClientLogConfiguration(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-managed-cluster', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getManagedCluster(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-managed-clusters', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.getManagedClusters(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-client-log-configuration', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putClientLogConfiguration(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.update(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-managed-cluster', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateManagedCluster(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-multi-host-integration', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createMultiHostIntegration(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-sources-within-multi-host', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createSourcesWithinMultiHost(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-multi-host', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteMultiHost(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-acct-aggregation-groups', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getAcctAggregationGroups(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-entitlement-aggregation-groups', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getEntitlementAggregationGroups(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-multi-host-integrations', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getMultiHostIntegrations(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-multi-host-integrations-list', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.getMultiHostIntegrationsList(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-multi-host-source-creation-errors', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getMultiHostSourceCreationErrors(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-multihost-integration-types', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getMultihostIntegrationTypes(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-sources-within-multi-host', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSourcesWithinMultiHost(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('test-connection-multi-host-sources', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.testConnectionMultiHostSources(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('test-source-connection-multihost', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.testSourceConnectionMultihost(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-multi-host-sources', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateMultiHostSources(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('approve-non-employee-request', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.approveNonEmployeeRequest(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-non-employee-record', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createNonEmployeeRecord(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-non-employee-request', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createNonEmployeeRequest(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-non-employee-source', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createNonEmployeeSource(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-non-employee-source-schema-attributes', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createNonEmployeeSourceSchemaAttributes(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-non-employee-record', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteNonEmployeeRecord(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-non-employee-records-in-bulk', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteNonEmployeeRecordsInBulk(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-non-employee-request', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteNonEmployeeRequest(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-non-employee-schema-attribute', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteNonEmployeeSchemaAttribute(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-non-employee-source', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteNonEmployeeSource(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-non-employee-source-schema-attributes', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteNonEmployeeSourceSchemaAttributes(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('export-non-employee-records', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.exportNonEmployeeRecords(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('export-non-employee-source-schema-template', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.exportNonEmployeeSourceSchemaTemplate(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-non-employee-approval', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getNonEmployeeApproval(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-non-employee-approval-summary', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getNonEmployeeApprovalSummary(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-non-employee-bulk-upload-status', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getNonEmployeeBulkUploadStatus(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-non-employee-record', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getNonEmployeeRecord(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-non-employee-request', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getNonEmployeeRequest(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-non-employee-request-summary', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getNonEmployeeRequestSummary(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-non-employee-schema-attribute', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getNonEmployeeSchemaAttribute(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-non-employee-source', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getNonEmployeeSource(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-non-employee-source-schema-attributes', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getNonEmployeeSourceSchemaAttributes(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('import-non-employee-records-in-bulk', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.importNonEmployeeRecordsInBulk(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-non-employee-approvals', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listNonEmployeeApprovals(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-non-employee-records', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listNonEmployeeRecords(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-non-employee-requests', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listNonEmployeeRequests(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-non-employee-sources', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listNonEmployeeSources(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-non-employee-record', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchNonEmployeeRecord(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-non-employee-schema-attribute', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchNonEmployeeSchemaAttribute(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-non-employee-source', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchNonEmployeeSource(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('reject-non-employee-request', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.rejectNonEmployeeRequest(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-non-employee-record', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateNonEmployeeRecord(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-domain-dkim', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createDomainDkim(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-notification-template', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createNotificationTemplate(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-verified-from-address', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createVerifiedFromAddress(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-notification-templates-in-bulk', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteNotificationTemplatesInBulk(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-verified-from-address', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteVerifiedFromAddress(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-dkim-attributes', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getDkimAttributes(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-mail-from-attributes', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getMailFromAttributes(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-notification-template', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getNotificationTemplate(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-notifications-template-context', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getNotificationsTemplateContext(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-from-addresses', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listFromAddresses(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-notification-preferences', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listNotificationPreferences(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-notification-template-defaults', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listNotificationTemplateDefaults(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-notification-templates', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listNotificationTemplates(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-mail-from-attributes', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putMailFromAttributes(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('send-test-notification', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.sendTestNotification(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-oauth-client', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createOauthClient(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-oauth-client', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteOauthClient(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-oauth-client', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getOauthClient(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-oauth-clients', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listOauthClients(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-oauth-client', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchOauthClient(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-org-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getOrgConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-valid-time-zones', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getValidTimeZones(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-org-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchOrgConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-password-org-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createPasswordOrgConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-password-org-config', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getPasswordOrgConfig(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-password-org-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putPasswordOrgConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-password-dictionary', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getPasswordDictionary(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-password-dictionary', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.putPasswordDictionary(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-digit-token', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createDigitToken(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-password-change-status', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getPasswordChangeStatus(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('query-password-info', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.queryPasswordInfo(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('set-password', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.setPassword(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-password-policy', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createPasswordPolicy(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-password-policy', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deletePasswordPolicy(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-password-policy-by-id', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getPasswordPolicyById(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-password-policies', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listPasswordPolicies(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('set-password-policy', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.setPasswordPolicy(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-password-sync-group', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createPasswordSyncGroup(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-password-sync-group', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deletePasswordSyncGroup(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-password-sync-group', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getPasswordSyncGroup(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-password-sync-groups', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.getPasswordSyncGroups(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-password-sync-group', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updatePasswordSyncGroup(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-personal-access-token', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createPersonalAccessToken(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-personal-access-token', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deletePersonalAccessToken(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-personal-access-tokens', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listPersonalAccessTokens(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-personal-access-token', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchPersonalAccessToken(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-public-identities', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.getPublicIdentities(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-public-identity-config', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getPublicIdentityConfig(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-public-identity-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updatePublicIdentityConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('cancel-report', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.cancelReport(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-report', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getReport(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-report-result', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getReportResult(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('start-report', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.startReport(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-requestable-objects', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listRequestableObjects(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-role-insight-requests', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createRoleInsightRequests(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('download-role-insights-entitlements-changes', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.downloadRoleInsightsEntitlementsChanges(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-entitlement-changes-identities', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getEntitlementChangesIdentities(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-role-insight', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getRoleInsight(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-role-insights', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getRoleInsights(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-role-insights-current-entitlements', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getRoleInsightsCurrentEntitlements(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-role-insights-entitlements-changes', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getRoleInsightsEntitlementsChanges(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-role-insights-requests', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getRoleInsightsRequests(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-role-insights-summary', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getRoleInsightsSummary(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-role', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createRole(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-bulk-roles', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteBulkRoles(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-metadata-from-role-by-key-and-value', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteMetadataFromRoleByKeyAndValue(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-role', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteRole(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-bulk-update-status', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getBulkUpdateStatus(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-bulk-update-status-by-id', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getBulkUpdateStatusById(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-role', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getRole(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-role-assigned-identities', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getRoleAssignedIdentities(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-role-entitlements', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getRoleEntitlements(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-roles', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listRoles(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-role', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchRole(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('search-roles-by-filter', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.searchRolesByFilter(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-attribute-key-and-value-to-role', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateAttributeKeyAndValueToRole(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-roles-metadata-by-filter', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateRolesMetadataByFilter(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-roles-metadata-by-ids', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateRolesMetadataByIds(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-roles-metadata-by-query', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateRolesMetadataByQuery(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-sim-integration', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createSIMIntegration(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-sim-integration', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteSIMIntegration(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-sim-integration', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSIMIntegration(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-sim-integrations', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSIMIntegrations(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-before-provisioning-rule', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchBeforeProvisioningRule(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-sim-attributes', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchSIMAttributes(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-sim-integration', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putSIMIntegration(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-sod-policy', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createSodPolicy(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-sod-policy', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteSodPolicy(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-sod-policy-schedule', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteSodPolicySchedule(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-custom-violation-report', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getCustomViolationReport(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-default-violation-report', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getDefaultViolationReport(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-sod-all-report-run-status', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSodAllReportRunStatus(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-sod-policy', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSodPolicy(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-sod-policy-schedule', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSodPolicySchedule(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-sod-violation-report-run-status', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSodViolationReportRunStatus(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-sod-violation-report-status', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSodViolationReportStatus(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-sod-policies', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listSodPolicies(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-sod-policy', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchSodPolicy(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-policy-schedule', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putPolicySchedule(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-sod-policy', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putSodPolicy(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('start-evaluate-sod-policy', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.startEvaluateSodPolicy(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('start-sod-all-policies-for-org', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.startSodAllPoliciesForOrg(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('start-sod-policy', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.startSodPolicy(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('start-predict-sod-violations', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.startPredictSodViolations(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('start-violation-check', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.startViolationCheck(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('export-sp-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.exportSpConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-sp-config-export', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSpConfigExport(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-sp-config-export-status', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSpConfigExportStatus(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-sp-config-import', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSpConfigImport(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-sp-config-import-status', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSpConfigImportStatus(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('import-sp-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.importSpConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-sp-config-objects', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listSpConfigObjects(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-saved-search', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createSavedSearch(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-saved-search', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteSavedSearch(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('execute-saved-search', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.executeSavedSearch(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-saved-search', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSavedSearch(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-saved-searches', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listSavedSearches(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-saved-search', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putSavedSearch(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-scheduled-search', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createScheduledSearch(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-scheduled-search', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteScheduledSearch(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-scheduled-search', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getScheduledSearch(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-scheduled-search', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listScheduledSearch(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('unsubscribe-scheduled-search', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.unsubscribeScheduledSearch(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-scheduled-search', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateScheduledSearch(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('search-aggregate', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.searchAggregate(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('search-count', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.searchCount(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('search-get', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.searchGet(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('search-post', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.searchPost(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-search-attribute-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createSearchAttributeConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-search-attribute-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteSearchAttributeConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-search-attribute-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSearchAttributeConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-single-search-attribute-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSingleSearchAttributeConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-search-attribute-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchSearchAttributeConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-segment', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createSegment(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-segment', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteSegment(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-segment', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSegment(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-segments', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listSegments(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-segment', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchSegment(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-service-desk-integration', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createServiceDeskIntegration(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-service-desk-integration', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteServiceDeskIntegration(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-service-desk-integration', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getServiceDeskIntegration(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-service-desk-integration-template', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getServiceDeskIntegrationTemplate(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-service-desk-integration-types', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getServiceDeskIntegrationTypes(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-service-desk-integrations', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.getServiceDeskIntegrations(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-status-check-details', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getStatusCheckDetails(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-service-desk-integration', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchServiceDeskIntegration(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-service-desk-integration', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putServiceDeskIntegration(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-status-check-details', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateStatusCheckDetails(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-status-by-source-id', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getStatusBySourceId(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-usages-by-source-id', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getUsagesBySourceId(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-provisioning-policy', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createProvisioningPolicy(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-source', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createSource(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-source-schedule', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createSourceSchedule(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-source-schema', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createSourceSchema(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-accounts-async', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteAccountsAsync(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-native-change-detection-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteNativeChangeDetectionConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-provisioning-policy', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteProvisioningPolicy(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-source', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteSource(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-source-schedule', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteSourceSchedule(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-source-schema', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteSourceSchema(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-accounts-schema', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getAccountsSchema(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-correlation-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getCorrelationConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-entitlements-schema', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getEntitlementsSchema(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-native-change-detection-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getNativeChangeDetectionConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-provisioning-policy', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getProvisioningPolicy(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-source', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSource(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-source-attr-sync-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSourceAttrSyncConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-source-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSourceConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-source-connections', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSourceConnections(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-source-entitlement-request-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSourceEntitlementRequestConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-source-health', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSourceHealth(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-source-schedule', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSourceSchedule(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-source-schedules', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSourceSchedules(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-source-schema', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSourceSchema(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-source-schemas', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSourceSchemas(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('import-accounts', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.importAccounts(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('import-accounts-schema', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.importAccountsSchema(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('import-connector-file', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.importConnectorFile(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('import-entitlements-schema', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.importEntitlementsSchema(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('import-uncorrelated-accounts', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.importUncorrelatedAccounts(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-provisioning-policies', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listProvisioningPolicies(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-sources', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listSources(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('ping-cluster', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.pingCluster(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-correlation-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putCorrelationConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-native-change-detection-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putNativeChangeDetectionConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-provisioning-policy', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putProvisioningPolicy(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-source', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putSource(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-source-attr-sync-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putSourceAttrSyncConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-source-schema', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putSourceSchema(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('search-resource-objects', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.searchResourceObjects(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('sync-attributes-for-source', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.syncAttributesForSource(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('test-source-configuration', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.testSourceConfiguration(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('test-source-connection', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.testSourceConnection(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-password-policy-holders', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updatePasswordPolicyHolders(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-provisioning-policies-in-bulk', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateProvisioningPoliciesInBulk(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-provisioning-policy', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateProvisioningPolicy(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-source', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateSource(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-source-entitlement-request-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateSourceEntitlementRequestConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-source-schedule', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateSourceSchedule(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-source-schema', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateSourceSchema(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-sed-batch-stats', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSedBatchStats(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-sed-batches', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getSedBatches(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-seds', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listSeds(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-sed', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchSed(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('submit-sed-approval', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.submitSedApproval(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('submit-sed-assignment', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.submitSedAssignment(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('submit-sed-batch-request', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.submitSedBatchRequest(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-tagged-object', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteTaggedObject(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-tags-to-many-object', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteTagsToManyObject(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-tagged-object', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getTaggedObject(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-tagged-objects', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listTaggedObjects(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-tagged-objects-by-type', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listTaggedObjectsByType(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-tagged-object', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putTaggedObject(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('set-tag-to-object', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.setTagToObject(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('set-tags-to-many-objects', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.setTagsToManyObjects(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-pending-task-headers', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getPendingTaskHeaders(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-pending-tasks', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getPendingTasks(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-task-status', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getTaskStatus(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-task-status-list', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getTaskStatusList(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-task-status', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateTaskStatus(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-tenant', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getTenant(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-tenant-context', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getTenantContext(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-tenant-context', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchTenantContext(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-transform', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createTransform(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-transform', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteTransform(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-transform', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getTransform(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-transforms', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listTransforms(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-transform', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateTransform(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('complete-trigger-invocation', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.completeTriggerInvocation(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-subscription', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createSubscription(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-subscription', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteSubscription(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-subscriptions', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listSubscriptions(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-trigger-invocation-status', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listTriggerInvocationStatus(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-triggers', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listTriggers(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-subscription', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchSubscription(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('start-test-trigger-invocation', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.startTestTriggerInvocation(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('test-subscription-filter', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.testSubscriptionFilter(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('update-subscription', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.updateSubscription(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-tenant-ui-metadata', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getTenantUiMetadata(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('set-tenant-ui-metadata', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.setTenantUiMetadata(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-vendor-connector-mapping', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createVendorConnectorMapping(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-vendor-connector-mapping', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteVendorConnectorMapping(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-vendor-connector-mappings', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getVendorConnectorMappings(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('approve-approval-item', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.approveApprovalItem(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('approve-approval-items-in-bulk', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.approveApprovalItemsInBulk(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('complete-work-item', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.completeWorkItem(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('forward-work-item', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.forwardWorkItem(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-completed-work-items', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.getCompletedWorkItems(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-count-completed-work-items', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getCountCompletedWorkItems(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-count-work-items', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.getCountWorkItems(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-work-item', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getWorkItem(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-work-items-summary', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.getWorkItemsSummary(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-work-items', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listWorkItems(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('reject-approval-item', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.rejectApprovalItem(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('reject-approval-items-in-bulk', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.rejectApprovalItemsInBulk(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('submit-account-selection', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.submitAccountSelection(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-reassignment-configuration', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createReassignmentConfiguration(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-reassignment-configuration', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteReassignmentConfiguration(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-evaluate-reassignment-configuration', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getEvaluateReassignmentConfiguration(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-reassignment-config-types', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getReassignmentConfigTypes(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-reassignment-configuration', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getReassignmentConfiguration(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-tenant-config-configuration', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getTenantConfigConfiguration(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-reassignment-configurations', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listReassignmentConfigurations(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-reassignment-config', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putReassignmentConfig(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-tenant-configuration', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putTenantConfiguration(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('cancel-workflow-execution', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.cancelWorkflowExecution(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-external-execute-workflow', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createExternalExecuteWorkflow(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-workflow', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createWorkflow(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('create-workflow-external-trigger', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.createWorkflowExternalTrigger(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('delete-workflow', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.deleteWorkflow(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-workflow', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getWorkflow(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-workflow-execution', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getWorkflowExecution(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-workflow-execution-history', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getWorkflowExecutionHistory(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('get-workflow-executions', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.getWorkflowExecutions(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-complete-workflow-library', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listCompleteWorkflowLibrary(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-workflow-library-actions', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listWorkflowLibraryActions(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-workflow-library-operators', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listWorkflowLibraryOperators(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-workflow-library-triggers', (event_1, ...args_1) => __awaiter(this, [event_1, ...args_1], void 0, function* (event, request = {}) {
        return yield sdkWrapper.listWorkflowLibraryTriggers(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('list-workflows', (event) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.listWorkflows(api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('patch-workflow', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.patchWorkflow(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('put-workflow', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.putWorkflow(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('test-external-execute-workflow', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.testExternalExecuteWorkflow(request, api_1.apiConfig);
    }));
    electron_1.ipcMain.handle('test-workflow', (event, request) => __awaiter(this, void 0, void 0, function* () {
        return yield sdkWrapper.testWorkflow(request, api_1.apiConfig);
    }));
}
//# sourceMappingURL=ipc-handlers.js.map