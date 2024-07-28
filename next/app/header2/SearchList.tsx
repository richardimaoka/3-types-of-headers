import Link from "next/link";
import { DocumentIcon } from "./DocumentIcon";
import styles from "./SearchList.module.css";

interface Props {}

export function SearchList(props: Props) {
  return (
    <div className={styles.component}>
      <Link className={styles.link} href="/header2/documentation">
        <DocumentIcon />
        <div>Documentation: the first page </div>
      </Link>
      <Link className={styles.link} href="/header2/documentation">
        <DocumentIcon />
        <div>Documentation: the second page </div>
      </Link>
      <Link className={styles.link} href="/header2/documentation">
        <DocumentIcon />
        <div>Documentation: the thrid page </div>
      </Link>
      <Link className={styles.link} href="/header2/apis">
        <DocumentIcon />
        <div>APIs: Get user data</div>
      </Link>
      <Link className={styles.link} href="/header2/apis">
        <DocumentIcon />
        <div>APIs: How to authenticate to the APIs</div>
      </Link>
    </div>
  );
}
