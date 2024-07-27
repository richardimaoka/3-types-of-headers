"use client";

import { usePathname } from "next/navigation";
import styles from "./InternalLink.module.css";
import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

export function InternalLink(props: Props) {
  const pathname = usePathname();
  const current = pathname === props.href;

  return (
    <Link
      className={styles.component + (current ? styles.current : "")}
      href={props.href}
    >
      {props.text}
    </Link>
  );
}
