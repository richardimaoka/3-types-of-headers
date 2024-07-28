import styles from "./Header.module.css";
import { Logo } from "./Logo";

interface Props {}

export function Header(props: Props) {
  return (
    <div className={styles.component}>
      <Logo />
      <div className={styles.link}>Documentation</div>
      <div className={styles.link}>APIs</div>
      <div className={styles.link}>Pricing</div>
      <div className={styles.link}>Terms of Service</div>
      <button className={styles.login}>Log in</button>
    </div>
  );
}
