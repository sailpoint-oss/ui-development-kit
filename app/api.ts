import {Configuration, TenantV2024Api, ConfigurationParameters} from 'sailpoint-api-client';


export const disconnectFromISC = async () => {

}

export const connectToISC = async (tenantUrl: string, clientId: string, clientSecret: string) => {
    let config: ConfigurationParameters = {
        clientId: clientId,
        clientSecret: clientSecret,
        tokenUrl: `https://${tenantUrl}.api.identitynow.com/oauth2/token`
    }
    let apiConfig = new Configuration(config);
    let tenantApi = new TenantV2024Api(apiConfig);
    let response = await tenantApi.getTenant();
    return { connected: true, name: response.data.fullName };
}
