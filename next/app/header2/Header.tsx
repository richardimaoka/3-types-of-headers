"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import { Logo } from "./Logo";
import { Search } from "./Search";
import { InternalLink } from "./InternalLink";

interface Props {}

export function Header(props: Props) {
  const [searchMode, setSearchMode] = useState(false);

  return (
    <div className={styles.component + (searchMode ? " " + styles.search : "")}>
      <Logo />
      {!searchMode && (
        <>
          <InternalLink href="/header2/documentation" text="Documentation" />
          <InternalLink href="/header2/apis" text="APIs" />
          <InternalLink href="/header2/pricing" text="Pricing" />
          <InternalLink
            href="/header2/terms-of-service"
            text="Terms of Service"
          />
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
