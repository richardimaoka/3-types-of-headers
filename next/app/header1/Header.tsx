import styles from "./Header.module.css";
import { InternalLink } from "./InternalLink";
import { Symbol } from "./Symbol";

interface Props {}

export function Header(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.logo}>
        <Symbol />
        <div className={styles.logotype}>Development</div>
      </div>

      <div /* ---empty div for spacing--- */ />
      <InternalLink href="/header1/documentation" text="Documentation" />
      <InternalLink href="/header1/apis" text="APIs" />
      <InternalLink href="/header1/pricing" text="Pricing" />
      <InternalLink href="/header1/terms-of-service" text="Terms of Service" />
      <button className={styles.login}>Log in</button>
    </div>
  );
}
