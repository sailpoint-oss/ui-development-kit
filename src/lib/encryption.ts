// crypto module
import crypto from 'crypto';

const algorithm = 'aes-256-cbc';

// generate 16 bytes of random data
const initVector = crypto.randomBytes(16);

// secret key generate 32 bytes of random data
const Securitykey = crypto.randomBytes(32);

// the cipher function
export function encrypt(value: string) {
	try {
		const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
		let encryptedData = cipher.update(value, 'utf-8', 'hex');
		encryptedData += cipher.final('hex');
		return encryptedData;
	} catch {
		return undefined;
	}
}

export function decrypt(encryptedData: string) {
	try {
		const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
		let decryptedData = decipher.update(encryptedData, 'hex', 'utf-8');
		decryptedData += decipher.final('utf8');
		return decryptedData;
	} catch {
		return undefined;
	}
}
