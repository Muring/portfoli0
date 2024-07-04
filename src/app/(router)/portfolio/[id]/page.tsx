import styles from "@/styles/portfolio.module.scss";

export default function projectPage(id: number) {
  return (
    <div className={`${styles["main-container"]}`}>
      <div className={styles.info}>projectPage{id}</div>
      <div className={`${styles["project-container"]}`}></div>
    </div>
  );
}
