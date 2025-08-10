"use client";

import { useTranslations } from "next-intl";
import { useActionState } from "react";
import { InputField } from "../components/forms/fields";
import ValidationSummary from "../components/forms/validation-summary";
import { signIn } from "./actions";

export default function SignInForm() {
  const [{ email, errors }, formAction, pending] = useActionState(signIn, {});
  const t = useTranslations("signIn");
  return (
    <form action={formAction}>
      <ValidationSummary errors={errors} />
      <InputField
        name="email"
        label={t("emailFieldLabel")}
        type="email"
        defaultValue={email}
        required
      />
      <InputField
        name="password"
        label={t("passwordFieldLabel")}
        type="password"
        required
      />
      <button disabled={pending}>{t("signInButtonLabel")}</button>
    </form>
  );
}
