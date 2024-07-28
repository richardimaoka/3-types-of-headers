import styles from "./Header.module.css";

interface Props {}

export function Header(props: Props) {
  return (
    <div className={styles.component}>
      <div>symbol</div>
      <div>logotype</div>
      <div>Documentation</div>
      <div>APIs</div>
      <div>Pricing</div>
      <div>Terms of Service</div>
      <div>Log in</div>
    </div>
  );
}
