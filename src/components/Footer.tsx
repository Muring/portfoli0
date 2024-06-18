import styles from "@/styles/footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href={"/"} className={styles.info}>
        <p>&copy;2024 Eom SeHyeon</p>
      </Link>
      <nav className={styles.menu}>
        <ul>
          <li>
            <Link href={"/about"}>
              <p>about</p>
            </Link>
          </li>
          <li>
            <Link href={"/portfolio"}>
              <p>portfolio</p>
            </Link>
          </li>
          <li>
            <Link href={"https://muring.vercel.app"}>
              <p>blog</p>
            </Link>
          </li>
          <li>
            <Link href={"/contact"}>
              <p>contact</p>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
