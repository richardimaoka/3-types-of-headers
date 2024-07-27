import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <div className={styles.contents}>
        <div>A Platoform of</div>
        <div>DEVELOPMENT</div>
        <div className={styles.underline}></div>
      </div>
    </div>
  );
}
