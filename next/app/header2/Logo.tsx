import Link from "next/link";
import styles from "./Logo.module.css";
import { Symbol } from "./Symbol";

interface Props {}

export function Logo(props: Props) {
  return (
    <Link href="/header2">
      <div className={styles.logo}>
        <Symbol />
        <div className={styles.logotype}>Development</div>
      </div>
    </Link>
  );
}
