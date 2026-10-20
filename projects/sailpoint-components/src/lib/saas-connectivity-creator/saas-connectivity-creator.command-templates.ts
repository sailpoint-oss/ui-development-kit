// Command template functions — return the .md content with connector-specific names substituted.
// Each function takes (connectorName, className) and returns the markdown string.

function r(template: string, connectorName: string, className: string): string {
    return template
        .replace(/myconnector-client\.ts/g, `${connectorName}-client.ts`)
        .replace(/MyconnectorClient/g, `${className}Client`)
        .replace(/\bMyconnector\b/g, className)
        .replace(/\bmyconnector\b/g, connectorName);
}

export function cmdTestConnection(cn: string, cls: string): string {
    return r(`# Implement std:test-connection

You are implementing the \`std:test-connection\` command in this SailPoint SaaS connector. The goal is to replace the stub in \`src/myconnector-client.ts\` \`testConnection()\` with a real lightweight API call that verifies credentials work.

## Step 1: Gather Information

Ask the user these questions before writing any code. If they've already answered some in their message, skip those.

1. **Base URL**: What is the base URL for the API (e.g. \`https://api.example.com/v2\`)? What config key holds it (e.g. \`apiUrl\`, \`baseUrl\`)?
2. **Auth type**: Is this Bearer token (current default), Basic auth (username/password), API key header, or OAuth2 client credentials?
3. **Test endpoint**: What is the lowest-cost endpoint to call for a connectivity check? In priority order:
   - A dedicated \`/health\` or \`/ping\` endpoint
   - A cheap read like \`GET /users?limit=1\`
   - Avoid any write operations (POST/PUT/DELETE)
4. **Extra config**: Are there any other required config fields (e.g. \`tenantId\`, \`accountId\`) that should be validated before making the call?

## Step 2: Update connector-spec.json (if needed)

If the user's API needs config fields beyond \`token\` (e.g. \`baseUrl\`), add them to \`connector-spec.json\` under \`"sourceConfig"\`:

\`\`\`json
{
  "key": "baseUrl",
  "label": "Base URL",
  "required": true,
  "type": "text"
}
\`\`\`

## Step 3: Update MyconnectorClient constructor

Replace the raw \`this.token = config?.token\` pattern with \`createConnectorHttpClient\`. Import it from the SDK and initialize the http client:

\`\`\`typescript
import { ConnectorError, createConnectorHttpClient } from '@sailpoint/connector-sdk'
import type { AxiosInstance } from 'axios'

export class MyconnectorClient {
    private readonly httpClient: AxiosInstance

    constructor(config: any) {
        if (!config?.baseUrl) throw new ConnectorError('baseUrl must be provided from config')
        if (!config?.token) throw new ConnectorError('token must be provided from config')

        this.httpClient = createConnectorHttpClient({
            baseURL: config.baseUrl,
            auth: { type: 'bearer', token: config.token },
        })
    }
\`\`\`

Adjust \`auth\` based on the user's answer to question 2.

## Step 4: Implement testConnection()

Replace the stub with a real call using the endpoint from question 3:

\`\`\`typescript
async testConnection(): Promise<Record<string, unknown>> {
    logger.debug('Testing connection')
    await this.httpClient.get('/health')
    logger.info('Test connection succeeded')
    return {}
}
\`\`\`

- If the endpoint returns a 2xx, the connection is good — no need to inspect the body.
- Wrap with try/catch only if you need to map specific HTTP errors to friendlier \`ConnectorError\` messages. The SDK handles retries and surfaces errors automatically.

## Step 5: Verify index.ts handler

The handler in \`index.ts\` already calls \`myClient.testConnection()\`. Verify it logs on success — if not, add \`logger.info('Test connection successful')\` after the call.

## Important Notes

- Use \`ConnectorError\` (not generic errors) for config validation failures so SailPoint Identity Security surfaces a clear message to administrators.
- The return value from \`testConnection()\` must be \`{}\` — SailPoint Identity Security ignores the body.
- Import \`logger\` in the client file: \`import { logger } from '@sailpoint/connector-sdk'\`
`, cn, cls);
}

export function cmdAccountList(cn: string, cls: string): string {
    return r(`# Implement std:account:list

You are implementing the \`std:account:list\` command in this SailPoint SaaS connector. This replaces the stub in \`src/myconnector-client.ts\` \`getAccounts()\` with a paginated API call. Pagination is **always required** — never load all records into memory before sending.

## Step 1: Gather Information

Ask the user these questions before writing any code. Skip any already answered.

1. **Endpoint**: What is the API endpoint for listing accounts (e.g. \`GET /users\`)?
2. **Pagination type**: How does the API paginate results?
   - **Cursor-based**: Response includes a \`nextCursor\` / \`nextPageToken\` / \`after\` field — pass it as a query param on the next request.
   - **Offset/limit**: Use \`offset\` + \`limit\` (or \`skip\` + \`take\`) query params. What is the max page size?
   - **Page number**: Use \`page\` + \`pageSize\` query params. What is the max page size?
3. **End-of-data signal**: How do you know there are no more pages?
   - \`nextCursor\` is null/absent
   - Response count is less than \`limit\`
   - A \`hasMore: false\` / \`totalPages\` field
4. **Field mappings**: Show a sample API response object and map each field to the connector schema:
   - \`id\` → which field?
   - \`displayName\` → which field?
   - \`email\` → which field?
   - \`firstName\` → which field?
   - \`lastName\` → which field?
   - \`enabled\` / \`disabled\` → which field, and what value means enabled?
   - Any entitlements/groups? Which field holds them?
5. **Filters**: Are there any query parameters to add (e.g. \`active=true\`, \`type=user\`)?

## Step 2: Update Account interface (if needed)

If the user's schema has different or additional fields, update the \`Account\` interface in \`myconnector-client.ts\` to match. Keep only fields that exist in \`connector-spec.json\`.

## Step 3: Implement getAccounts() with pagination

Use the pattern matching the user's pagination type. All three patterns below stream accounts immediately rather than buffering. Choose the right one:

### Cursor-based pagination
\`\`\`typescript
async *getAccounts(): AsyncGenerator<Account> {
    logger.debug('Fetching accounts (cursor pagination)')
    let cursor: string | undefined
    let page = 0
    do {
        const resp = await this.httpClient.get('/users', {
            params: { limit: 250, ...(cursor ? { after: cursor } : {}) },
        })
        const items: any[] = resp.data.items
        logger.debug({ page, count: items.length }, 'Fetched account page')
        for (const item of items) {
            yield this.toAccount(item)
        }
        cursor = resp.data.nextCursor ?? undefined
        page++
    } while (cursor)
    logger.info({ pages: page }, 'Completed account list')
}
\`\`\`

### Offset/limit pagination
\`\`\`typescript
async *getAccounts(): AsyncGenerator<Account> {
    logger.debug('Fetching accounts (offset pagination)')
    const limit = 250
    let offset = 0
    let page = 0
    while (true) {
        const resp = await this.httpClient.get('/users', {
            params: { limit, offset },
        })
        const items: any[] = resp.data.items
        logger.debug({ page, offset, count: items.length }, 'Fetched account page')
        for (const item of items) {
            yield this.toAccount(item)
        }
        if (items.length < limit) break
        offset += limit
        page++
    }
    logger.info({ pages: page + 1 }, 'Completed account list')
}
\`\`\`

Add a private mapper:
\`\`\`typescript
private toAccount(item: any): Account {
    return {
        id: item.id,
        displayName: item.displayName,
        email: item.email,
        firstName: item.firstName,
        lastName: item.lastName,
        enabled: item.status === 'active',
    }
}
\`\`\`

Adjust field names to match the user's API response.

## Step 4: Update index.ts

The handler needs to iterate the async generator:

\`\`\`typescript
.stdAccountList(async (context: Context, input: StdAccountListInput, res: Response<StdAccountListOutput>) => {
    logger.info('Starting account list aggregation')
    let count = 0
    for await (const account of myClient.getAccounts()) {
        res.send({
            identity: account.id,
            uuid: account.id,
            attributes: account as any,
        })
        count++
    }
    logger.info({ count }, 'stdAccountList completed')
})
\`\`\`

## Important Notes

- **Streaming is required** — send each account via \`res.send()\` as you fetch it, not after collecting all pages.
- **3-minute timeout** — if the source has tens of thousands of accounts, ensure your page size is large enough to complete in time.
- If the client method signature changes from \`Promise<Account[]>\` to \`AsyncGenerator<Account>\`, also update any test files that call it.
- Do not add stateful/delta aggregation unless the user specifically requests it.
`, cn, cls);
}

export function cmdAccountRead(cn: string, cls: string): string {
    return r(`# Implement std:account:read

You are implementing the \`std:account:read\` command in this SailPoint SaaS connector. This replaces the stub in \`src/myconnector-client.ts\` \`getAccount()\` with a real API call to fetch a single account by its unique identifier.

## Step 1: Gather Information

Ask the user these questions before writing any code. Skip any already answered.

1. **Endpoint**: What is the API endpoint for reading a single account? How is the account ID used?
   - Path parameter: \`GET /users/{id}\`
   - Query parameter: \`GET /users?id={id}\`
   - Other?
2. **Identity field**: The connector uses \`input.identity\` as the account key. Which API field does this map to (e.g. \`id\`, \`userId\`, \`username\`, \`email\`)?
3. **Field mappings**: Show a sample API response and map fields to the connector schema:
   - \`id\` → which field?
   - \`displayName\` → which field?
   - \`email\` → which field?
   - \`firstName\` → which field?
   - \`lastName\` → which field?
   - \`enabled\` / \`disabled\` → which field, and what value means enabled?
4. **Not found behavior**: Does the API return a 404 when the account doesn't exist, or does it return an empty result in a 200? Does it ever return a different status code?

## Step 2: Implement getAccount()

Replace the stub with a real API call. Use the endpoint pattern from question 1:

\`\`\`typescript
async getAccount(key: string): Promise<Account> {
    logger.debug({ key }, 'Fetching account')
    let resp: any
    try {
        resp = await this.httpClient.get(\`/users/\${key}\`)
    } catch (err: any) {
        if (err.response?.status === 404) {
            throw new ConnectorError(\`Account not found: \${key}\`, ConnectorErrorType.NotFound)
        }
        throw err
    }
    const account = this.toAccount(resp.data)
    logger.info({ key, id: account.id }, 'Fetched account')
    return account
}
\`\`\`

If the API returns an empty 200 instead of 404, check for an empty result:
\`\`\`typescript
if (!resp.data || !resp.data.id) {
    throw new ConnectorError(\`Account not found: \${key}\`, ConnectorErrorType.NotFound)
}
\`\`\`

Make sure \`ConnectorErrorType\` is imported:
\`\`\`typescript
import { ConnectorError, ConnectorErrorType } from '@sailpoint/connector-sdk'
\`\`\`

Add the \`toAccount()\` private mapper if not already present from \`account-list\` implementation:
\`\`\`typescript
private toAccount(item: any): Account {
    return {
        id: item.id,
        displayName: item.displayName,
        email: item.email,
        firstName: item.firstName,
        lastName: item.lastName,
        enabled: item.status === 'active',
    }
}
\`\`\`

Adjust field names based on the user's API response.

## Step 3: Verify index.ts handler

The existing handler should already work. Confirm it looks like this:

\`\`\`typescript
.stdAccountRead(async (context: Context, input: StdAccountReadInput, res: Response<StdAccountReadOutput>) => {
    logger.debug({ identity: input.identity }, 'stdAccountRead called')
    const account = await myClient.getAccount(input.identity)
    res.send({
        identity: account.id,
        uuid: account.id,
        attributes: account as any,
    })
    logger.info({ identity: input.identity }, 'stdAccountRead completed')
})
\`\`\`

## Important Notes

- **\`ConnectorErrorType.NotFound\` is critical**: When the account doesn't exist, throwing this specific error type tells SailPoint Identity Security to automatically trigger account creation during provisioning. Without it, SailPoint Identity Security treats the failure as a generic error and skips creation.
- The \`identity\` field in \`res.send()\` must match what SailPoint Identity Security stored when the account was listed — if using a different field as the key, be consistent across all commands.
`, cn, cls);
}

export function cmdAccountCreate(cn: string, cls: string): string {
    return r(`# Implement std:account:create

You are implementing the \`std:account:create\` command in this SailPoint SaaS connector. This replaces the stub in \`src/myconnector-client.ts\` \`createAccount()\` with a real API call that provisions a new account on the source system.

## Step 1: Gather Information

Ask the user these questions before writing any code. Skip any already answered.

1. **Endpoint**: What is the API endpoint for creating an account (e.g. \`POST /users\`)?
2. **Request body**: What fields does the API expect in the request body? Show a sample request payload.
3. **Field mappings**: SailPoint Identity Security sends account attributes from the provisioning plan. Map each incoming attribute to the API request field:
   - \`input.attributes.id\` or \`input.attributes.username\` → which API field?
   - \`input.attributes.email\` → which API field?
   - \`input.attributes.firstName\` → which API field?
   - \`input.attributes.lastName\` → which API field?
   - \`input.attributes.displayName\` → which API field?
4. **Entitlements/groups**: Does the API accept group memberships during account creation, or do they need to be assigned separately afterward? Which attribute holds entitlements in the provisioning plan?
5. **Auto-generated IDs**: Does the source system auto-generate the account ID, or does SailPoint Identity Security supply it? If auto-generated, the response must include the new ID so SailPoint Identity Security can store it.
6. **Password handling**: Does the API require a password at creation time? If so, SailPoint Identity Security will supply one in \`input.attributes.password\` — how should it be sent?
7. **Response**: Show a sample API response after successful creation.

## Step 2: Implement createAccount()

Replace the stub with a real API call:

\`\`\`typescript
async createAccount(input: Record<string, unknown>): Promise<Account> {
    logger.debug({ attributes: input.attributes }, 'Creating account')

    const attrs = input.attributes as Record<string, any>

    // Handle entitlements — SailPoint Identity Security may send a string (single) or array (multiple)
    const entitlements = attrs.entitlements
        ? Array.isArray(attrs.entitlements) ? attrs.entitlements : [attrs.entitlements]
        : []

    const body = {
        username: attrs.id,
        email: attrs.email,
        firstName: attrs.firstName,
        lastName: attrs.lastName,
        displayName: attrs.displayName,
        groups: entitlements,
        // Add password if required: password: attrs.password,
    }

    const resp = await this.httpClient.post('/users', body)
    const account = this.toAccount(resp.data)
    logger.info({ id: account.id }, 'Account created')
    return account
}
\`\`\`

Adjust field names and body structure to match the user's API. If the user provided more complex mappings, implement them explicitly.

## Step 3: Verify index.ts handler

The existing handler should work. Confirm it returns the full account with the correct identity:

\`\`\`typescript
.stdAccountCreate(async (context: Context, input: StdAccountCreateInput, res: Response<StdAccountCreateOutput>) => {
    logger.debug({ attributes: input.attributes }, 'stdAccountCreate called')
    const account = await myClient.createAccount(input)
    res.send({
        identity: account.id,
        uuid: account.id,
        attributes: account as any,
    })
    logger.info({ id: account.id }, 'stdAccountCreate completed')
})
\`\`\`

## Important Notes

- **Return the source-generated ID**: If the source auto-generates the account ID, you MUST return it in the response. SailPoint Identity Security stores whatever you send back — if you return nothing useful, SailPoint Identity Security won't be able to reference the account later.
- **Entitlements handling**: Always normalize entitlements from SailPoint Identity Security to an array — SailPoint Identity Security may send a single string for single-entitlement assignments.
- **Password strategy**: If the API requires a password and SailPoint Identity Security provides one, pass it directly. Do not add your own validation — SailPoint Identity Security has already applied policy rules before sending.
`, cn, cls);
}

export function cmdAccountUpdate(cn: string, cls: string): string {
    return r(`# Implement std:account:update

You are implementing the \`std:account:update\` command in this SailPoint SaaS connector. This replaces the stub in \`src/myconnector-client.ts\` \`updateAccount()\` with real API calls. SailPoint Identity Security sends a list of attribute change operations (set, add, remove) — your implementation must translate each into the appropriate API call(s).

## Step 1: Gather Information

Ask the user these questions before writing any code. Skip any already answered.

1. **Endpoint**: What is the API endpoint for updating an account (e.g. \`PATCH /users/{id}\`, \`PUT /users/{id}\`)?
2. **Update method**: Does the API use:
   - \`PATCH\` with only changed fields?
   - \`PUT\` requiring the full account object (must fetch first)?
   - Separate endpoints per field or action?
3. **Entitlement operations**: For adding/removing group memberships, does the API use:
   - Include groups in the same user update body?
   - Separate endpoints: \`POST /users/{id}/groups/{groupId}\` / \`DELETE /users/{id}/groups/{groupId}\`?
4. **Field mappings**: Which connector attribute names map to which API request fields?
   - e.g. \`displayName\` → \`display_name\`, \`email\` → \`emailAddress\`
5. **Sample payloads**: Show an example PATCH/PUT request body for updating a user.

## Step 2: Understand the input structure

\`input.changes\` is an array of change operations, each with this shape:
\`\`\`typescript
interface AttributeChange {
    op: 'Set' | 'Add' | 'Remove'
    attribute: string   // connector attribute name
    value: any          // new value (string, or array for multi-valued)
}
\`\`\`

- **Set**: Replace the attribute value entirely.
- **Add**: Add values to a multi-valued attribute (e.g. add a group). Never duplicates.
- **Remove**: Remove values from a multi-valued attribute, or set to null for single-valued.

## Step 3: Implement updateAccount()

### Pattern A: PATCH with partial body (preferred when API supports it)
\`\`\`typescript
async updateAccount(key: string, changes: any[]): Promise<void> {
    logger.debug({ key, changeCount: changes.length }, 'Updating account')

    const body: Record<string, any> = {}
    const groupsToAdd: string[] = []
    const groupsToRemove: string[] = []

    for (const change of changes) {
        switch (change.op) {
            case 'Set':
                body[this.mapAttribute(change.attribute)] = change.value
                break
            case 'Add':
                groupsToAdd.push(...(Array.isArray(change.value) ? change.value : [change.value]))
                break
            case 'Remove':
                groupsToRemove.push(...(Array.isArray(change.value) ? change.value : [change.value]))
                break
        }
    }

    if (Object.keys(body).length > 0) {
        await this.httpClient.patch(\`/users/\${key}\`, body)
    }

    for (const groupId of groupsToAdd) {
        await this.httpClient.post(\`/users/\${key}/groups/\${groupId}\`, {})
    }
    for (const groupId of groupsToRemove) {
        await this.httpClient.delete(\`/users/\${key}/groups/\${groupId}\`)
    }

    logger.info({ key }, 'Account updated')
}

private mapAttribute(attr: string): string {
    const map: Record<string, string> = {
        displayName: 'displayName',
        email: 'email',
        firstName: 'firstName',
        lastName: 'lastName',
        // add more mappings here
    }
    return map[attr] ?? attr
}
\`\`\`

### Pattern B: PUT with full replacement (when API requires full body)
\`\`\`typescript
async updateAccount(key: string, changes: any[]): Promise<void> {
    logger.debug({ key, changeCount: changes.length }, 'Updating account (full replace)')

    const current = await this.getAccount(key)

    for (const change of changes) {
        const field = this.mapAttribute(change.attribute) as keyof Account
        if (change.op === 'Set') {
            (current as any)[field] = change.value
        } else if (change.op === 'Add') {
            const arr = (current as any)[field] as string[]
            const toAdd = Array.isArray(change.value) ? change.value : [change.value]
            ;(current as any)[field] = [...new Set([...arr, ...toAdd])]
        } else if (change.op === 'Remove') {
            const arr = (current as any)[field] as string[]
            const toRemove = Array.isArray(change.value) ? change.value : [change.value]
            ;(current as any)[field] = arr.filter(v => !toRemove.includes(v))
        }
    }

    await this.httpClient.put(\`/users/\${key}\`, current)
    logger.info({ key }, 'Account updated')
}
\`\`\`

Choose Pattern A or B based on the user's answers. Adjust field mappings and endpoint paths accordingly.

## Step 4: Update index.ts handler

The existing handler sends \`{}\` — that's correct per the SDK spec. The handler in \`index.ts\` does not need to change.

## Important Notes

- **Multi-valued normalization**: \`change.value\` can be a single value or an array. Always handle both: \`Array.isArray(change.value) ? change.value : [change.value]\`.
- **Set to null for Remove on scalar**: If \`Remove\` targets a non-array attribute, set it to \`null\` (not delete the key).
- **Response**: Return \`{}\` from the handler — you do not need to re-read the account after updates.
`, cn, cls);
}

export function cmdAccountDelete(cn: string, cls: string): string {
    return r(`# Implement std:account:delete

You are implementing the \`std:account:delete\` command in this SailPoint SaaS connector. This replaces the stub in \`src/myconnector-client.ts\` \`deleteAccount()\` with a real API call that permanently removes an account from the source system.

## Step 1: Gather Information

Ask the user these questions before writing any code. Skip any already answered.

1. **Endpoint**: What is the API endpoint for deleting an account (e.g. \`DELETE /users/{id}\`)?
2. **ID in URL**: Is the account ID used as a path parameter, query parameter, or in the request body?
3. **Idempotency**: If the account does not exist, does the API return a 404 or a success (2xx)? Should a 404 be treated as success (already deleted) or as an error?
4. **Soft vs hard delete**: Does this API hard-delete (permanent) or soft-delete (deactivate)? If soft-delete is the only option, clarify with the user that this is a deactivation, not a removal.
5. **Extra steps**: Are there any prerequisite steps before deleting (e.g. remove group memberships first, or revoke tokens)?

## Step 2: Implement deleteAccount()

Replace the stub with a real DELETE call:

\`\`\`typescript
async deleteAccount(key: string): Promise<void> {
    logger.debug({ key }, 'Deleting account')
    try {
        await this.httpClient.delete(\`/users/\${key}\`)
    } catch (err: any) {
        if (err.response?.status === 404) {
            logger.warn({ key }, 'Account not found during delete, treating as success')
            return
        }
        throw err
    }
    logger.info({ key }, 'Account deleted')
}
\`\`\`

If the API requires prerequisite steps (e.g. remove group memberships first), add those calls before the DELETE:

\`\`\`typescript
const groupsResp = await this.httpClient.get(\`/users/\${key}/groups\`)
for (const group of groupsResp.data.groups) {
    await this.httpClient.delete(\`/users/\${key}/groups/\${group.id}\`)
}
await this.httpClient.delete(\`/users/\${key}\`)
\`\`\`

## Step 3: Verify index.ts handler

The handler returns \`{}\` — that is correct and does not need to change:

\`\`\`typescript
.stdAccountDelete(async (context: Context, input: StdAccountDeleteInput, res: Response<StdAccountDeleteOutput>) => {
    logger.debug({ identity: input.identity }, 'stdAccountDelete called')
    await myClient.deleteAccount(input.identity)
    res.send({})
    logger.info({ identity: input.identity }, 'stdAccountDelete completed')
})
\`\`\`

## Important Notes

- **Idempotency matters**: SailPoint Identity Security may retry deletions. Handling 404 as success prevents spurious failures on retries.
- **Hard delete only**: If the API only supports disabling/deactivating accounts, use the \`std:account:disable\` command instead and advise the user that true deletion is not supported.
- **No return value**: \`deleteAccount()\` returns \`void\` — you do not need to re-read the account or return any data.
`, cn, cls);
}

export function cmdAccountEnable(cn: string, cls: string): string {
    return r(`# Implement std:account:enable

You are implementing the \`std:account:enable\` command in this SailPoint SaaS connector. This replaces the stub in \`src/myconnector-client.ts\` \`enableAccount()\` with a real API call that re-activates a previously disabled account.

## Step 1: Gather Information

Ask the user these questions before writing any code. Skip any already answered.

1. **Endpoint**: What is the API endpoint for enabling an account? Common patterns:
   - \`PATCH /users/{id}\` with body \`{ "enabled": true }\` or \`{ "status": "active" }\`
   - \`POST /users/{id}/enable\`
   - \`PUT /users/{id}/status\` with body \`{ "status": "active" }\`
2. **Request body**: What exact field and value does the API expect to enable the account?
3. **Response**: Does the API return the full updated account, or just a success status?
4. **After-enable read**: If the API doesn't return the account, should you call \`getAccount()\` afterward to return the updated state?

## Step 2: Implement enableAccount()

Replace the stub with a real API call. The method must return the enabled \`Account\` object.

### Pattern A: API returns full account after enable
\`\`\`typescript
async enableAccount(key: string): Promise<Account> {
    logger.debug({ key }, 'Enabling account')
    const resp = await this.httpClient.patch(\`/users/\${key}\`, { enabled: true })
    const account = this.toAccount(resp.data)
    logger.info({ key }, 'Account enabled')
    return account
}
\`\`\`

### Pattern B: Dedicated enable endpoint, no account in response
\`\`\`typescript
async enableAccount(key: string): Promise<Account> {
    logger.debug({ key }, 'Enabling account')
    await this.httpClient.post(\`/users/\${key}/enable\`)
    const account = await this.getAccount(key)
    logger.info({ key }, 'Account enabled')
    return account
}
\`\`\`

Choose the pattern matching the user's API and adjust field names accordingly.

## Step 3: Verify index.ts handler

The handler returns the full account — confirm it looks like this:

\`\`\`typescript
.stdAccountEnable(async (context: Context, input: StdAccountEnableInput, res: Response<StdAccountEnableOutput>) => {
    logger.debug({ identity: input.identity }, 'stdAccountEnable called')
    const account = await myClient.enableAccount(input.identity)
    res.send({
        identity: account.id,
        uuid: account.id,
        attributes: account as any,
    })
    logger.info({ identity: input.identity }, 'stdAccountEnable completed')
})
\`\`\`

## Important Notes

- **Return the full account**: SailPoint Identity Security uses the returned account to update its stored state — always return the complete account after enabling, not just the status.
- The \`enabled\` field in the returned \`Account\` should reflect the updated state (\`true\`) so SailPoint Identity Security sees the account as active.
`, cn, cls);
}

export function cmdAccountDisable(cn: string, cls: string): string {
    return r(`# Implement std:account:disable

You are implementing the \`std:account:disable\` command in this SailPoint SaaS connector. This replaces the stub in \`src/myconnector-client.ts\` \`disableAccount()\` with a real API call that deactivates an account on the source system without deleting it.

## Step 1: Gather Information

Ask the user these questions before writing any code. Skip any already answered.

1. **Endpoint**: What is the API endpoint for disabling an account? Common patterns:
   - \`PATCH /users/{id}\` with body \`{ "enabled": false }\` or \`{ "status": "inactive" }\`
   - \`POST /users/{id}/disable\`
   - \`PUT /users/{id}/status\` with body \`{ "status": "suspended" }\`
2. **Request body**: What exact field and value does the API expect to disable the account?
3. **Response**: Does the API return the full updated account, or just a success status?
4. **After-disable read**: If the API doesn't return the account, should you call \`getAccount()\` afterward to return the updated state?

## Step 2: Implement disableAccount()

Replace the stub with a real API call. The method must return the disabled \`Account\` object.

### Pattern A: API returns full account after disable
\`\`\`typescript
async disableAccount(key: string): Promise<Account> {
    logger.debug({ key }, 'Disabling account')
    const resp = await this.httpClient.patch(\`/users/\${key}\`, { enabled: false })
    const account = this.toAccount(resp.data)
    logger.info({ key }, 'Account disabled')
    return account
}
\`\`\`

### Pattern B: Dedicated disable endpoint, no account in response
\`\`\`typescript
async disableAccount(key: string): Promise<Account> {
    logger.debug({ key }, 'Disabling account')
    await this.httpClient.post(\`/users/\${key}/disable\`)
    const account = await this.getAccount(key)
    logger.info({ key }, 'Account disabled')
    return account
}
\`\`\`

Choose the pattern matching the user's API and adjust field names accordingly.

## Step 3: Verify index.ts handler

The handler returns the full account — confirm it looks like this:

\`\`\`typescript
.stdAccountDisable(async (context: Context, input: StdAccountDisableInput, res: Response<StdAccountDisableOutput>) => {
    logger.debug({ identity: input.identity }, 'stdAccountDisable called')
    const account = await myClient.disableAccount(input.identity)
    res.send({
        identity: account.id,
        uuid: account.id,
        attributes: account as any,
    })
    logger.info({ identity: input.identity }, 'stdAccountDisable completed')
})
\`\`\`

## Important Notes

- **Return the full account**: SailPoint Identity Security uses the returned account to update its stored state — always return the complete account after disabling, not just the status.
- The \`enabled\` field in the returned \`Account\` should reflect the updated state (\`false\`) so SailPoint Identity Security sees the account as inactive.
- If the API doesn't distinguish between disable and delete, clarify this with the user — disabling should be reversible (enable should restore the account).
`, cn, cls);
}

export function cmdAccountUnlock(cn: string, cls: string): string {
    return r(`# Implement std:account:unlock

You are implementing the \`std:account:unlock\` command in this SailPoint SaaS connector. This replaces the stub in \`src/myconnector-client.ts\` \`unlockAccount()\` with a real API call. Unlocking clears a lockout (e.g. from too many failed login attempts) without changing the enabled/disabled state of the account.

## Step 1: Gather Information

Ask the user these questions before writing any code. Skip any already answered.

1. **Endpoint**: What is the API endpoint for unlocking an account? Common patterns:
   - \`POST /users/{id}/unlock\`
   - \`PATCH /users/{id}\` with body \`{ "locked": false }\` or \`{ "loginAttempts": 0 }\`
   - \`DELETE /users/{id}/lock\`
2. **Request body**: What exact field and value does the API expect to unlock (clear the lockout)?
3. **Response**: Does the API return the full updated account, or just a success status?
4. **After-unlock read**: If the API doesn't return the account, should you call \`getAccount()\` afterward?
5. **Lock concept**: Does the source system actually have a concept of account locking, or is unlocking the same as enabling? If it's the same, note that in the implementation.

## Step 2: Implement unlockAccount()

Replace the stub with a real API call. The method must return the unlocked \`Account\` object.

### Pattern A: Dedicated unlock endpoint, no account in response
\`\`\`typescript
async unlockAccount(key: string): Promise<Account> {
    logger.debug({ key }, 'Unlocking account')
    await this.httpClient.post(\`/users/\${key}/unlock\`)
    const account = await this.getAccount(key)
    logger.info({ key }, 'Account unlocked')
    return account
}
\`\`\`

### Pattern B: PATCH to clear lock flag
\`\`\`typescript
async unlockAccount(key: string): Promise<Account> {
    logger.debug({ key }, 'Unlocking account')
    const resp = await this.httpClient.patch(\`/users/\${key}\`, { locked: false })
    const account = this.toAccount(resp.data)
    logger.info({ key }, 'Account unlocked')
    return account
}
\`\`\`

Choose the pattern matching the user's API and adjust field names accordingly.

## Step 3: Verify index.ts handler

The handler returns the full account — confirm it looks like this:

\`\`\`typescript
.stdAccountUnlock(async (context: Context, input: StdAccountUnlockInput, res: Response<StdAccountUnlockOutput>) => {
    logger.debug({ identity: input.identity }, 'stdAccountUnlock called')
    const account = await myClient.unlockAccount(input.identity)
    res.send({
        identity: account.id,
        uuid: account.id,
        attributes: account as any,
    })
    logger.info({ identity: input.identity }, 'stdAccountUnlock completed')
})
\`\`\`

## Important Notes

- **Unlocking ≠ enabling**: Unlock only clears a temporary lockout. It should not change the \`enabled\` state of the account. If the user's API conflates the two, note this in the implementation.
- **Return the full account**: SailPoint Identity Security uses the returned account to update its stored state — always return the complete account, not just a status.
`, cn, cls);
}

export function cmdChangePassword(cn: string, cls: string): string {
    return r(`# Implement std:change-password

You are implementing the \`std:change-password\` command in this SailPoint SaaS connector. This replaces the stub in \`src/myconnector-client.ts\` \`changePassword()\` with a real API call that updates an account's password on the source system.

## Step 1: Gather Information

Ask the user these questions before writing any code. Skip any already answered.

1. **Endpoint**: What is the API endpoint for changing a password? Common patterns:
   - \`PATCH /users/{id}\` with body \`{ "password": "..." }\`
   - \`PUT /users/{id}/password\` with body \`{ "newPassword": "..." }\`
   - \`POST /users/{id}/credentials\` with a credentials body
2. **Request body**: What exact field name and structure does the API expect for the new password?
3. **Current password required**: Does the API require the current/old password to change it? If yes, how should it be handled (SailPoint Identity Security only provides the new password)?
4. **Response**: Does the API return anything useful on success, or just a 200/204?

## Step 2: Implement changePassword()

Replace the stub with a real API call. The method returns \`void\` — no data needs to be returned on success.

### Pattern A: PATCH with password field
\`\`\`typescript
async changePassword(key: string, password: string): Promise<void> {
    logger.debug({ key }, 'Changing account password')
    await this.httpClient.patch(\`/users/\${key}\`, { password })
    logger.info({ key }, 'Password changed')
}
\`\`\`

### Pattern B: Dedicated password endpoint
\`\`\`typescript
async changePassword(key: string, password: string): Promise<void> {
    logger.debug({ key }, 'Changing account password')
    await this.httpClient.put(\`/users/\${key}/password\`, { newPassword: password })
    logger.info({ key }, 'Password changed')
}
\`\`\`

Adjust the endpoint and field names based on the user's API. Do NOT log the password value itself — only log the account key.

## Step 3: Verify index.ts handler

The handler returns \`{}\` — confirm it looks like this:

\`\`\`typescript
.stdChangePassword(async (context: Context, input: StdChangePasswordInput, res: Response<StdChangePasswordOutput>) => {
    logger.debug({ identity: input.identity }, 'stdChangePassword called')
    await myClient.changePassword(input.identity, input.password)
    res.send({})
    logger.info({ identity: input.identity }, 'stdChangePassword completed')
})
\`\`\`

## Important Notes

- **Never log the password**: Do not include \`input.password\` or the password value in any log message.
- **Pass the password directly**: The password SailPoint Identity Security provides has already been validated against the source's policy — do not add additional validation or transformation.
- **Current password**: SailPoint Identity Security only provides the new password. If the API requires the current password, this feature cannot be fully implemented — discuss with the user (options: admin override endpoint, token-based reset flow, etc.).
`, cn, cls);
}

export function cmdEntitlementList(cn: string, cls: string): string {
    return r(`# Implement std:entitlement:list

You are implementing the \`std:entitlement:list\` command in this SailPoint SaaS connector. This replaces the stub in \`src/myconnector-client.ts\` \`getEntitlements()\` with a paginated API call. Pagination is **always required** — never load all entitlements into memory before sending.

## Step 1: Gather Information

Ask the user these questions before writing any code. Skip any already answered.

1. **Endpoint**: What is the API endpoint for listing entitlements/groups/roles (e.g. \`GET /groups\`, \`GET /roles\`)?
2. **Entitlement type**: Are these groups, roles, permissions, or something else? The connector currently uses \`type: 'group'\` — confirm this is correct or update it.
3. **Pagination type**: How does the API paginate results?
   - **Cursor-based**: Response includes a \`nextCursor\` / \`nextPageToken\` — pass it on next request.
   - **Offset/limit**: Use \`offset\` + \`limit\` query params. What is the max page size?
   - **Page number**: Use \`page\` + \`pageSize\` query params.
4. **End-of-data signal**: How do you know there are no more pages?
5. **Field mappings**: Show a sample entitlement object and map fields to the connector schema:
   - \`id\` → which field?
   - \`name\` → which field?
   - Any additional attributes to include?
6. **Multiple types**: Does the source have multiple entitlement types to list (e.g. both groups and roles)? If so, should they all be listed in one command or separate?

## Step 2: Update Entitlement interface (if needed)

If the user's API returns additional fields beyond \`id\` and \`name\`, add them to the \`Entitlement\` interface in \`myconnector-client.ts\`. Make sure they're also in \`connector-spec.json\` under the entitlement schema.

## Step 3: Implement getEntitlements() with pagination

Change the return type to an \`AsyncGenerator\` for streaming. Choose the pagination pattern matching the user's API:

### Cursor-based pagination
\`\`\`typescript
async *getEntitlements(): AsyncGenerator<Entitlement> {
    logger.debug('Fetching entitlements (cursor pagination)')
    let cursor: string | undefined
    let page = 0
    do {
        const resp = await this.httpClient.get('/groups', {
            params: { limit: 250, ...(cursor ? { after: cursor } : {}) },
        })
        const items: any[] = resp.data.items
        logger.debug({ page, count: items.length }, 'Fetched entitlement page')
        for (const item of items) {
            yield this.toEntitlement(item)
        }
        cursor = resp.data.nextCursor ?? undefined
        page++
    } while (cursor)
    logger.info({ pages: page }, 'Completed entitlement list')
}
\`\`\`

### Offset/limit pagination
\`\`\`typescript
async *getEntitlements(): AsyncGenerator<Entitlement> {
    logger.debug('Fetching entitlements (offset pagination)')
    const limit = 250
    let offset = 0
    let page = 0
    while (true) {
        const resp = await this.httpClient.get('/groups', {
            params: { limit, offset },
        })
        const items: any[] = resp.data.items
        logger.debug({ page, offset, count: items.length }, 'Fetched entitlement page')
        for (const item of items) {
            yield this.toEntitlement(item)
        }
        if (items.length < limit) break
        offset += limit
        page++
    }
    logger.info({ pages: page + 1 }, 'Completed entitlement list')
}
\`\`\`

Add a private mapper:
\`\`\`typescript
private toEntitlement(item: any): Entitlement {
    return {
        id: item.id,
        name: item.name,
    }
}
\`\`\`

## Step 4: Update index.ts handler

Update to iterate the async generator:

\`\`\`typescript
.stdEntitlementList(async (context: Context, input: StdEntitlementListInput, res: Response<StdEntitlementListOutput>) => {
    logger.info('Starting entitlement list aggregation')
    let count = 0
    for await (const group of myClient.getEntitlements()) {
        res.send({
            type: 'group',
            identity: group.id,
            attributes: group as any,
        })
        count++
    }
    logger.info({ count }, 'stdEntitlementList completed')
})
\`\`\`

## Important Notes

- **Streaming is required** — send each entitlement via \`res.send()\` as you fetch it.
- **3-minute timeout** — use a large enough page size to complete within the time limit.
- The \`type\` field must match the entitlement type defined in \`connector-spec.json\`. If using roles instead of groups, update both.
`, cn, cls);
}

export function cmdEntitlementRead(cn: string, cls: string): string {
    return r(`# Implement std:entitlement:read

You are implementing the \`std:entitlement:read\` command in this SailPoint SaaS connector. This replaces the stub in \`src/myconnector-client.ts\` \`getEntitlement()\` with a real API call to fetch a single entitlement (group/role) by its unique identifier.

## Step 1: Gather Information

Ask the user these questions before writing any code. Skip any already answered.

1. **Endpoint**: What is the API endpoint for reading a single entitlement? Common patterns:
   - \`GET /groups/{id}\`
   - \`GET /roles/{id}\`
   - \`GET /groups?id={id}\`
2. **ID format**: The connector passes \`input.identity\` as the entitlement key. Which API field does this correspond to (e.g. \`id\`, \`name\`, \`uuid\`)?
3. **Field mappings**: Show a sample API response and map fields to:
   - \`id\` → which field?
   - \`name\` → which field?
   - Any additional attributes?
4. **Not found behavior**: Does the API return a 404 when the entitlement doesn't exist, or an empty 200?

## Step 2: Implement getEntitlement()

Replace the stub with a real API call:

\`\`\`typescript
async getEntitlement(key: string): Promise<Entitlement> {
    logger.debug({ key }, 'Fetching entitlement')
    let resp: any
    try {
        resp = await this.httpClient.get(\`/groups/\${key}\`)
    } catch (err: any) {
        if (err.response?.status === 404) {
            throw new ConnectorError(\`Entitlement not found: \${key}\`, ConnectorErrorType.NotFound)
        }
        throw err
    }
    const entitlement = this.toEntitlement(resp.data)
    logger.info({ key, id: entitlement.id }, 'Fetched entitlement')
    return entitlement
}
\`\`\`

If the API returns an empty 200 instead of 404:
\`\`\`typescript
if (!resp.data || !resp.data.id) {
    throw new ConnectorError(\`Entitlement not found: \${key}\`, ConnectorErrorType.NotFound)
}
\`\`\`

Add the \`toEntitlement()\` private mapper if not already present from \`entitlement-list\` implementation:
\`\`\`typescript
private toEntitlement(item: any): Entitlement {
    return {
        id: item.id,
        name: item.name,
    }
}
\`\`\`

## Step 3: Verify index.ts handler

The handler should look like this:

\`\`\`typescript
.stdEntitlementRead(async (context: Context, input: StdEntitlementReadInput, res: Response<StdEntitlementReadOutput>) => {
    logger.debug({ identity: input.identity }, 'stdEntitlementRead called')
    const group = await myClient.getEntitlement(input.identity)
    res.send({
        type: 'group',
        identity: group.id,
        attributes: group as any,
    })
    logger.info({ identity: input.identity }, 'stdEntitlementRead completed')
})
\`\`\`

## Important Notes

- Make sure \`ConnectorErrorType\` is imported: \`import { ConnectorError, ConnectorErrorType } from '@sailpoint/connector-sdk'\`
- The \`type\` field must match what's used in \`entitlement-list\` and defined in \`connector-spec.json\`.
- The \`identity\` field in \`res.send()\` must match the \`identity\` returned during entitlement listing — use the same field consistently.
`, cn, cls);
}

export function cmdSourceDataDiscover(cn: string, cls: string): string {
    return r(`# Implement std:source-data:discover

You are implementing the \`std:source-data:discover\` command in this SailPoint SaaS connector. This replaces the stub in \`src/myconnector-client.ts\` \`discoverSourceData()\` with a real implementation that tells SailPoint Identity Security what types of source data your connector can provide.

## What This Command Does

Source data discovery tells SailPoint Identity Security what dynamic data is available from your connector — typically used for dropdown menus and dynamic form fields in SailPoint Identity Security workflows. For example: available departments, locations, user types, or report IDs that an admin can select when configuring a source or workflow.

## Step 1: Gather Information

Ask the user these questions before writing any code. Skip any already answered.

1. **What source data types does the API expose?** Examples:
   - List of available departments from \`GET /departments\`
   - List of available locations from \`GET /locations\`
   - List of report types or config options
   - Static options like user types (admin, user, guest)
2. **For each type**: What is a good \`key\` (unique machine-readable id), \`label\` (human-readable name), and \`subLabel\` (description)?
3. **Static vs dynamic**: Are these hardcoded known types, or fetched from the API? If fetched from the API, provide the endpoint.
4. **Search support**: Should the discover endpoint support filtering by a search query? If yes, which field in the API response should be matched against?

## Step 2: Implement discoverSourceData()

### Static implementation (no API call needed)
\`\`\`typescript
async discoverSourceData(): Promise<unknown[]> {
    logger.debug('Discovering source data types')
    const items = [
        { key: 'departments', label: 'Departments', subLabel: 'Available department list' },
        { key: 'locations', label: 'Locations', subLabel: 'Available location list' },
    ]
    logger.info({ count: items.length }, 'Source data types discovered')
    return items
}
\`\`\`

### Dynamic implementation (fetched from API)
\`\`\`typescript
async discoverSourceData(query?: string): Promise<unknown[]> {
    logger.debug({ query }, 'Discovering source data types')
    const resp = await this.httpClient.get('/data-types')
    let items: any[] = resp.data.map((item: any) => ({
        key: item.id,
        label: item.name,
        subLabel: item.description ?? '',
    }))
    if (query) {
        const q = query.toLowerCase()
        items = items.filter(i => i.key.toLowerCase().includes(q) || i.label.toLowerCase().includes(q))
    }
    logger.info({ count: items.length, query }, 'Source data types discovered')
    return items
}
\`\`\`

## Step 3: Update index.ts handler

If implementing search support, pass the query from the input:

\`\`\`typescript
.stdSourceDataDiscover(async (context: Context, input: StdSourceDataDiscoverInput, res: Response<StdSourceDataDiscoverOutput>) => {
    logger.debug('stdSourceDataDiscover called')
    const query = input.queryInput?.query
    const data = await myClient.discoverSourceData(query)
    res.send(data as any)
    logger.info({ count: data.length }, 'stdSourceDataDiscover completed')
})
\`\`\`

## Important Notes

- Each item must have: \`key\` (unique string), \`label\` (display name), \`subLabel\` (description).
- The \`key\` values returned here become the \`sourceDataKey\` passed to \`std:source-data:read\`.
- If search is not needed, the simpler static approach is usually sufficient.
`, cn, cls);
}

export function cmdSourceDataRead(cn: string, cls: string): string {
    return r(`# Implement std:source-data:read

You are implementing the \`std:source-data:read\` command in this SailPoint SaaS connector. This replaces the stub in \`src/myconnector-client.ts\` \`readSourceData()\` with a real API call that returns the actual data for a source data type discovered via \`std:source-data:discover\`.

## What This Command Does

When an admin selects a source data type in a SailPoint Identity Security workflow or form (discovered via \`std:source-data:discover\`), SailPoint Identity Security calls this command to populate the actual data. For example: if discovery returned a \`departments\` type, reading it returns the list of all department names/IDs.

## Step 1: Gather Information

Ask the user these questions before writing any code. Skip any already answered.

1. **Source data keys**: What keys were defined in \`std:source-data:discover\`? (e.g. \`departments\`, \`locations\`, \`user-types\`)
2. **For each key**: What API endpoint returns the data for that type?
   - e.g. \`departments\` → \`GET /departments\`
   - e.g. \`locations\` → \`GET /locations\`
3. **Response format**: For each endpoint, what does a response item look like? What fields should be returned?
4. **Return shape**: What fields should each data item contain? Typically \`{ id, name }\` or \`{ value, label }\`.
5. **Pagination**: Are any of these endpoints paginated? If yes, how?

## Step 2: Implement readSourceData()

Replace the stub. Use a \`switch\` or map to handle each source data key:

\`\`\`typescript
async readSourceData(key: string): Promise<unknown[]> {
    logger.debug({ key }, 'Reading source data')
    let items: unknown[]

    switch (key) {
        case 'departments': {
            const resp = await this.httpClient.get('/departments')
            items = resp.data.map((d: any) => ({ id: d.id, name: d.name }))
            break
        }
        case 'locations': {
            const resp = await this.httpClient.get('/locations')
            items = resp.data.map((l: any) => ({ id: l.id, name: l.displayName }))
            break
        }
        default:
            logger.warn({ key }, 'Unknown source data key requested')
            items = []
    }

    logger.info({ key, count: items.length }, 'Source data read complete')
    return items
}
\`\`\`

If an endpoint is paginated, fetch all pages before returning:

\`\`\`typescript
case 'departments': {
    const limit = 250
    let offset = 0
    const all: any[] = []
    while (true) {
        const resp = await this.httpClient.get('/departments', { params: { limit, offset } })
        const items: any[] = resp.data.items
        all.push(...items.map((d: any) => ({ id: d.id, name: d.name })))
        if (items.length < limit) break
        offset += limit
    }
    items = all
    break
}
\`\`\`

## Step 3: Verify index.ts handler

The handler should look like this:

\`\`\`typescript
.stdSourceDataRead(async (context: Context, input: StdSourceDataReadInput, res: Response<StdSourceDataReadOutput>) => {
    logger.debug({ sourceDataKey: input.sourceDataKey }, 'stdSourceDataRead called')
    const data = await myClient.readSourceData(input.sourceDataKey)
    res.send(data as any)
    logger.info({ sourceDataKey: input.sourceDataKey, count: data.length }, 'stdSourceDataRead completed')
})
\`\`\`

## Important Notes

- The \`input.sourceDataKey\` values are the \`key\` strings returned by \`std:source-data:discover\` — they must match exactly.
- Unlike account/entitlement list, source data read returns a complete array, not a stream.
- Always handle unknown keys gracefully — return an empty array and log a warning rather than throwing.
`, cn, cls);
}
