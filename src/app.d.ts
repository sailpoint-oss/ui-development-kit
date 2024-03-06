// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

import type { IdnSession, Session, TokenDetails } from '$lib/utils/oauth';

declare global {
	namespace App {
		interface Locals {
			hasSession: boolean;
			hasIdnSession: boolean;
			session?: Session;
			idnSession?: IdnSession;
			tokenDetails?: TokenDetails;
		}

		// interface PageData {}

		interface Error {
			message: string;
			context?: unknown;
			urls?: string[];
			errData?: unknown;
		}

		// interface Platform {}
	}
}
