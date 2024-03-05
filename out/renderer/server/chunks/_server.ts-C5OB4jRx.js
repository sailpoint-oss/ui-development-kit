import { c as createConfiguration, d as distExports } from './sdk-CZE8e3P6.js';
import { b as getToken } from './oauth-Czq1qjCs.js';
import { j as json } from './index-DzcLzHBX.js';
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
import 'buffer';
import 'crypto';

async function GET({ cookies, params }) {
  const session = JSON.parse(cookies.get("session"));
  const idnSession = await getToken(cookies);
  const config = createConfiguration(session.baseUrl, idnSession.access_token);
  const api = new distExports.ManagedClustersBetaApi(config);
  const val = await api.getManagedCluster({ id: params.clusterID });
  return json(val.data);
}

export { GET };
//# sourceMappingURL=_server.ts-C5OB4jRx.js.map
