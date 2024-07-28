"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import { Logo } from "./Logo";
import { Search } from "./Search";

interface Props {}

export function Header(props: Props) {
  const [searchMode, setSearchMode] = useState(false);

  return (
    <div className={styles.component + (searchMode ? " " + styles.search : "")}>
      <Logo />
      {!searchMode && (
        <>
          <div className={styles.link}>Documentation</div>
          <div className={styles.link}>APIs</div>
          <div className={styles.link}>Pricing</div>
          <div className={styles.link}>Terms of Service</div>
        </>
      )}
      <Search
        focus={searchMode}
        onFocus={() => {
          setSearchMode(true);
        }}
        onLoseFocus={() => {
          setSearchMode(false);
        }}
      />
      <button className={styles.login}>Log in</button>
    </div>
  );
}
