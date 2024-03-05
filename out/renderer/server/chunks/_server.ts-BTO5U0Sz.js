import { c as createConfiguration, d as distExports } from './sdk-CZE8e3P6.js';
import { e as error, j as json } from './index-DzcLzHBX.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './index-BRrDHEF2.js';
import 'util';
import 'stream';
import 'path';
import 'http';
import 'https';
import 'url';
import 'fs';
import 'assert';
import 'tty';
import 'os';
import 'zlib';
import 'events';

const POST = async ({ request, locals }) => {
  const config = createConfiguration(locals.session.baseUrl, locals.idnSession.access_token);
  const api = new distExports.CustomFormsBetaApi(config);
  const { formDefinitionId, formInput } = await request.json();
  if (!formDefinitionId || !formInput) {
    error(400, "formDefinitionId and formInput are required");
  }
  const expireDate = /* @__PURE__ */ new Date();
  expireDate.setDate(expireDate.getDate() + 1);
  const formInstance = {
    body: {
      createdBy: {
        id: "BOOYAH",
        type: "SOURCE"
      },
      expire: expireDate.toISOString(),
      formDefinitionId,
      formInput: {
        ...formInput
      },
      recipients: [
        {
          id: locals.idnSession?.identity_id,
          type: "IDENTITY"
        }
      ],
      standAloneForm: true,
      state: "ASSIGNED",
      ttl: 1571827560
    }
  };
  const formInstanceResp = await api.createFormInstance(formInstance);
  return json({ formDefinitionId, formInput, formInstanceResp: formInstanceResp.data });
};

export { POST };
//# sourceMappingURL=_server.ts-BTO5U0Sz.js.map
