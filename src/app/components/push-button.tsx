import { ButtonHTMLAttributes } from "react";
import styles from "./push-button.module.scss";

export default function PushButton({
  isPrimary = false,
  ...buttonAttributes
}: Readonly<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    isPrimary?: boolean;
  }
>) {
  return (
    <button
      className={isPrimary ? styles.primaryPushButton : styles.pushButton}
      {...buttonAttributes}
    ></button>
  );
}
