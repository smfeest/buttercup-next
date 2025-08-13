"use client";

import { useTranslations } from "next-intl";
import { useActionState } from "react";
import ValidationSummary from "../components/forms/validation-summary";
import signInAction from "./action";

export default function SignInForm() {
  const [{ email, errors }, action, pending] = useActionState(signInAction, {});
  const t = useTranslations("signIn");
  return (
    <form action={action}>
      <ValidationSummary errors={errors} />
      <label>
        {t("emailFieldLabel")}
        <input name="email" type="email" defaultValue={email} required />
      </label>
      <label>
        {t("passwordFieldLabel")}
        <input name="password" type="password" required />
      </label>
      <button disabled={pending}>{t("signInButtonLabel")}</button>
    </form>
  );
}
