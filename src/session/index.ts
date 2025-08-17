import "server-only";

import { cookies } from "next/headers";
import { encrypt } from "./encryption";
import { Payload } from "./payload";

const cookieName = "buttercup-session";

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
