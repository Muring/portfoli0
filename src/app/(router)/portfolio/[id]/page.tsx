import styles from "@/styles/portfolio.module.scss";

export default function projectPage() {
  return (
    <div className={`${styles["main-container"]}`}>
      <div className={styles.info}>projectPage</div>
      <div className={`${styles["project-container"]}`}></div>
    </div>
  );
}
