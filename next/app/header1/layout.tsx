import { Header } from "./Header";
import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={styles.component}>
      <Header />
      {children}
    </main>
  );
}
