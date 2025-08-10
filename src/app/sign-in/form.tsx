"use client";

import { useTranslations } from "next-intl";
import { useActionState } from "react";
import { signIn } from "./actions";

export default function SignInForm() {
  const [{ email, errors }, formAction, pending] = useActionState(signIn, {});
  const t = useTranslations("signIn");
  return (
    <form action={formAction}>
      <ul aria-live="polite">
        {errors?.map((error) => (
          <li key="error">{error}</li>
        ))}
      </ul>
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
