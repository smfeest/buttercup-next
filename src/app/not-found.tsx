import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import styles from "./not-found.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("notFound");

  return {
    title: t("title"),
  };
}

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <div className={styles.container}>
      <h1 className={styles.statusCode}>404</h1>
      <p>{t("message")}</p>
    </div>
  );
}
