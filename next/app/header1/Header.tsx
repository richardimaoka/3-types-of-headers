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
      <div className={styles.link}>APIs</div>
      <div className={styles.link}>Pricing</div>
      <div className={styles.link}>Terms of Service</div>
      <button className={styles.login}>Log in</button>
    </div>
  );
}
