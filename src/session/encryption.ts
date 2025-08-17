import "server-only";

import { CompactEncrypt, base64url, compactDecrypt } from "jose";
import { Payload } from "./payload";

const encryptionKey = base64url.decode(process.env.SESSION_ENCRYPTION_KEY);

export async function encrypt(payload: Payload) {
  const plaintext = new TextEncoder().encode(JSON.stringify(payload));
  return await new CompactEncrypt(plaintext)
    .setProtectedHeader({ alg: "dir", enc: "A256GCM" })
    .encrypt(encryptionKey);
}

export async function decrypt(encryptedPayload: string) {
  const { plaintext } = await compactDecrypt(encryptedPayload, encryptionKey);
  return JSON.parse(new TextDecoder().decode(plaintext)) as Payload;
}
