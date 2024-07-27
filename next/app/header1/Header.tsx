import styles from "./Header.module.css";
import { Symbol } from "./Symbol";

interface Props {}

export function Header(props: Props) {
  return (
    <div className={styles.component}>
      <Symbol />
      <div className={styles.logotype}>Development</div>
      <div>Documentation</div>
      <div>APIs</div>
      <div>Pricing</div>
      <div>Terms of Service</div>
      <div>Log in</div>
    </div>
  );
}
