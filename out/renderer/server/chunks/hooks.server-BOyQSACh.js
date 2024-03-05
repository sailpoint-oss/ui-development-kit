import { c as checkSession, a as checkIdnSession, g as getSession, b as getToken, l as lastCheckedToken, d as getTokenDetails, e as checkToken } from './oauth-Czq1qjCs.js';
import { r as redirect } from './index-DzcLzHBX.js';
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

const handle = async ({ event, resolve }) => {
  const hasSession = checkSession(event.cookies);
  const hasIdnSession = checkIdnSession(event.cookies);
  event.locals.hasSession = hasSession;
  event.locals.hasIdnSession = hasIdnSession;
  if (hasSession) {
    event.locals.session = getSession(event.cookies);
    if (hasIdnSession) {
      const session = await getToken(event.cookies);
      if (!session) {
        event.locals.hasIdnSession = false;
        event.locals.idnSession = void 0;
      } else {
        event.locals.idnSession = session;
        const lastToken = lastCheckedToken(event.cookies);
        const tokenDetails = getTokenDetails(event.cookies);
        if (tokenDetails && lastToken != "" && lastToken === event.locals.idnSession.access_token) {
          event.locals.tokenDetails = tokenDetails;
        } else {
          const tempTokenDetails = await checkToken(
            event.locals.session.baseUrl,
            event.locals.idnSession.access_token
          );
          if (tempTokenDetails) {
            event.locals.tokenDetails = tempTokenDetails;
            event.cookies.set("tokenDetails", JSON.stringify(event.locals.tokenDetails), {
              path: "/",
              httpOnly: false,
              secure: false
            });
          }
        }
      }
    }
  }
  if (event.url.pathname.startsWith("/home") || event.url.pathname.startsWith("/api")) {
    if (!hasSession || !hasIdnSession) {
      redirect(302, "/");
    }
  }
  const response = await resolve(event);
  return response;
};

export { handle };
//# sourceMappingURL=hooks.server-BOyQSACh.js.map
