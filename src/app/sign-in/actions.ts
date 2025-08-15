"use server";

import { graphql } from "@/graphql";
import { getClient } from "@/graphql/client";
import { gql } from "@apollo/client";
import { redirect } from "next/navigation";

type SignInState = {
  email?: string | undefined;
  errors?: string[];
};

const authenticateMutationDocument = graphql(`
  mutation Authenticate($input: AuthenticateInput!) {
    authenticate(input: $input) {
      isSuccess
      user {
        email
      }
      errors {
        ... on Error {
          message
        }
      }
    }
  }
`);

export async function signIn(
  _: SignInState,
  formData: FormData,
): Promise<SignInState> {
  const email = formData.get("email")?.toString();
  // const password = formData.get("password")?.toString();

  const client = getClient();

  // const data = {
  //   authenticate: { isSuccess: true, errors: [], user: { email: "foo " } },
  // };

  const { data } = await client.mutate(authenticateMutationDocument, { input:  });

  //   variables: {
  //     input: {
  //       email,
  //       password,
  //     },
  //   } ,
  // }});

  if (!data?.authenticate?.isSuccess) {
    return {
      email,
      errors: data.authenticate.errors.map(
        (error: { message: string }) => error.message,
      ),
    };
  }

  redirect(`/?user=${data.authenticate.user.email}`);
}
