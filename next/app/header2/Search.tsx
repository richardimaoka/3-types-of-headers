"use client";

import styles from "./Search.module.css";
import { SearchIcon } from "./SearchIcon";

interface Props {}

export function Search(props: Props) {
  return (
    <div className={styles.component}>
      <SearchIcon />
      <input className={styles.input} placeholder="search in document" />
    </div>
  );
}
