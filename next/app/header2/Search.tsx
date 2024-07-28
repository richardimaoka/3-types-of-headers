"use client";

import { useState } from "react";
import styles from "./Search.module.css";
import { SearchIcon } from "./SearchIcon";

interface Props {}

export function Search(props: Props) {
  const [focus, setFocus] = useState(false);

  return (
    <div className={styles.component + (focus ? " " + styles.focus : "")}>
      <SearchIcon />
      <input
        className={styles.input}
        placeholder="search in document"
        onFocus={() => {
          console.log("focus");
          setFocus(true);
        }}
        onBlur={() => setFocus(false)}
      />
    </div>
  );
}
