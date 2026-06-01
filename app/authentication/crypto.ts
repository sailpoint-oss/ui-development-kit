import * as crypto from 'crypto';
import type { EncryptedTokenData } from './types';

/**
 * Generates an RSA key pair with the specified key size
 * @param keySize The size of the key in bits (2048, 3072, or 4096)
 * @returns Object containing the generated keys in different formats
 */
export function generateKeyPair(keySize: 2048 | 3072 | 4096 = 2048) {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: keySize,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem'
        }
    });

    return {
        publicKey,
        privateKey,
        publicKeyBase64: Buffer.from(publicKey).toString('base64'),
        privateKeyBase64: Buffer.from(privateKey).toString('base64'),
        algorithm: 'RSA',
        modulusLength: keySize,
        format: {
            public: 'spki/pem',
            private: 'pkcs8/pem'
        }
    };
}

/**
 * Decrypts a token that was encrypted using the hybrid RSA/AES approach
 * @param encryptedTokenData The encrypted token data as a JSON string
 * @param privateKeyPem Your RSA private key in PEM format
 * @returns The decrypted token object
 */
export function decryptToken<T = unknown>(encryptedTokenData: string | EncryptedTokenData, privateKeyPem: string): T {
    try {
        // Parse the encrypted token data
        const tokenData: EncryptedTokenData = typeof encryptedTokenData === 'string'
            ? JSON.parse(encryptedTokenData)
            : encryptedTokenData;
        
        // Check token format version
        if (tokenData.version !== '1.0') {
            throw new Error('Unsupported token format version');
        }
        
        // Verify the encryption algorithms used
        if (tokenData.algorithm?.symmetric !== 'AES-256-GCM' || 
            tokenData.algorithm?.asymmetric !== 'RSA-OAEP-SHA256') {
            throw new Error('Unsupported encryption algorithm');
        }

        // Extract required data
        const { ciphertext, encryptedKey, iv, authTag } = tokenData.data;
        if (!ciphertext || !encryptedKey || !iv || !authTag) {
            throw new Error('Invalid encrypted token format');
        }

        // Decrypt the symmetric key with the private key
        const encryptedSymmetricKey = Buffer.from(encryptedKey, 'base64');
        const symmetricKey = crypto.privateDecrypt(
            {
                key: privateKeyPem,
                padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
                oaepHash: 'sha256',
            },
            encryptedSymmetricKey
        );

        // Decrypt the data with the symmetric key
        const decipher = crypto.createDecipheriv(
            'aes-256-gcm', 
            symmetricKey, 
            Buffer.from(iv, 'base64')
        );
        
        decipher.setAuthTag(Buffer.from(authTag, 'base64'));
        
        let decryptedData = decipher.update(ciphertext, 'base64', 'utf8');
        decryptedData += decipher.final('utf8');
        
        return JSON.parse(decryptedData) as T;
    } catch (error) {
        console.error('Token decryption failed:', error);
        throw new Error('Failed to decrypt token');
    }
}