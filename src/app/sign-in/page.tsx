import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import SignInForm from "./form";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("signIn");

  return {
    title: t("title"),
  };
}

export default function SignInPage() {
  const t = useTranslations("signIn");
  return (
    <>
      <h1>{t("title")}</h1>
      <SignInForm />
    </>
  );
}
