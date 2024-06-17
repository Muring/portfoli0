import styles from "@/styles/footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <p>Name: 엄세현</p>
        <p>Phone: 010-2478-2335</p>
        <p>E-mail: 11esh@naver.com</p>
      </div>
      <div className={styles.copyright}>&copy;Copyright by MuRing</div>
    </footer>
  );
}
