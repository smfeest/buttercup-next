"use client";

import { useTranslations } from "next-intl";
import { useActionState } from "react";
import { InputField } from "../components/forms/fields";
import ValidationSummary from "../components/forms/validation-summary";
import signInAction from "./action";

export default function SignInForm() {
  const [{ email, errors }, action, pending] = useActionState(signInAction, {});
  const t = useTranslations("signIn");
  return (
    <form action={action}>
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
