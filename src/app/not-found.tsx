import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.statusCode}>404</h1>
      <p>This page could not be found.</p>
    </div>
  );
}
