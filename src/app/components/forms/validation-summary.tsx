import styles from "./validation-summary.module.css";

export default function ValidationSummary({
  errors,
}: Readonly<{
  errors: string[] | undefined | null;
}>) {
  return (
    errors &&
    errors.length > 0 && (
      <ul className={styles.validationSummary} aria-live="polite">
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
    )
  );
}
