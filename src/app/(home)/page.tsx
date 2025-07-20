import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("home");

  return {
    title: t("title"),
  };
}

export default function Home() {
  const t = useTranslations("home");
  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("welcome")}</p>
    </>
  );
}
