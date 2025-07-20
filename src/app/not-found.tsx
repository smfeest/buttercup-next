import { useTranslations } from "next-intl";
import styles from "./not-found.module.css";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <div className={styles.container}>
      <h1 className={styles.statusCode}>404</h1>
      <p>{t("message")}</p>
    </div>
  );
}
