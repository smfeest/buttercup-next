import "server-only";

import { cookies } from "next/headers";
import { decrypt, encrypt } from "./encryption";
import { Payload } from "./payload";

const cookieName = "buttercup-session";

export async function getSession() {
  const { get } = await cookies();
  const cookie = get(cookieName);
  return cookie ? await decrypt(cookie.value) : null;
}

export async function setSession({
  user: { id, name, email, isAdmin, timeZone },
  accessToken,
}: Payload) {
  const encryptedPayload = await encrypt({
    user: { id, name, email, isAdmin, timeZone },
    accessToken,
  });
  const { set } = await cookies();
  set(cookieName, encryptedPayload, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
}
