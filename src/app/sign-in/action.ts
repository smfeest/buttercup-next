"use server";

import { getClient } from "@/api/client";
import { graphql } from "@/api/graphql";
import { redirect } from "next/navigation";

type SignInState = {
  email?: string | undefined;
  errors?: string[] | undefined | null;
};

export default async function signInAction(
  _: SignInState,
  formData: FormData,
): Promise<SignInState> {
  const email = formData.get("email")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  const client = getClient();

  const { data } = await client.mutate({
    mutation: graphql(`
      mutation SignIn($input: AuthenticateInput!) {
        authenticate(input: $input) {
          isSuccess
          errors {
            ... on Error {
              message
            }
          }
        }
      }
    `),
    variables: {
      input: {
        email,
        password,
      },
    },
  });

  if (!data?.authenticate.isSuccess) {
    return {
      email,
      errors: data?.authenticate.errors?.map(
        (error: { message: string }) => error.message,
      ),
    };
  }

  redirect("/");
}
