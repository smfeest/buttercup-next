"use server";

import { redirect } from "next/navigation";

type SignInState = {
  email?: string;
  errors?: string[];
};

export async function signIn(
  _: SignInState,
  formData: FormData,
): Promise<SignInState> {
  const email = formData.get("email")?.toString();
  if (email?.startsWith("bad@")) {
    return {
      email,
      errors: ["Incorrect credentials"],
    };
  }

  redirect("/");
}
