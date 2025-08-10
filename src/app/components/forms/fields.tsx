import { InputHTMLAttributes, useId } from "react";
import styles from "./fields.module.css";

export function Field({
  children,
  id,
  label,
}: Readonly<{
  children: React.ReactNode;
  id: string;
  label: string;
}>) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {children}
    </div>
  );
}

export function InputField({
  label,
  ...inputAttributes
}: Readonly<
  Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "className"> & {
    label: string;
  }
>) {
  const id = useId();
  return (
    <Field id={id} label={label}>
      <input className={styles.input} id={id} {...inputAttributes} />
    </Field>
  );
}
