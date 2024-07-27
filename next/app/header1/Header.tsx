import styles from "./Header.module.css";
import { InternalLink } from "./InternalLink";
import { Logo } from "./Logo";

interface Props {}

export function Header(props: Props) {
  return (
    <div className={styles.component}>
      <Logo />
      <div /* ---empty div for spacing--- */ />
      <InternalLink href="/header1/documentation" text="Documentation" />
      <InternalLink href="/header1/apis" text="APIs" />
      <InternalLink href="/header1/pricing" text="Pricing" />
      <InternalLink href="/header1/terms-of-service" text="Terms of Service" />
      <button className={styles.login}>Log in</button>
    </div>
  );
}
