import styles from "./Header.module.css";
import { Logo } from "./Logo";
import { SearchIcon } from "./SearchIcon";

interface Props {}

export function Header(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.searchbox}>
        <SearchIcon />
        <input className={styles.input} placeholder="search in document" />
      </div>
      <Logo />
      <div className={styles.links}>
        <div className={styles.link}>Documentation</div>
        <div className={styles.link}>APIs</div>
        <div className={styles.link}>Pricing</div>
        <div className={styles.link}>Terms of Service</div>
      </div>
      <button className={styles.login}>Log in</button>
    </div>
  );
}
