import styles from "./index.module.css";

type Prop = {
  children: React.ReactNode;
};
export default function Sheet({ children }: Prop) {
  return <div className={styles.container}>{children}</div>;
}