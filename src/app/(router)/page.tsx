import styles from "@/styles/home.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Link href={`/`}>
          <Image src={"/logo.png"} width={75} height={75} alt="logo"></Image>
        </Link>
        <nav>
          <ul className={styles.menu}>
            <li>
              <Link href={"/about"}>about</Link>
            </li>
            <li>
              <Link href={"/portfolio"}>portfolio</Link>
            </li>{" "}
            <li>
              <Link href={"https://muring.vercel.app"}>blog</Link>
            </li>{" "}
            <li>
              <Link href={"/contact"}>contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div></div>
      <div></div>
      <footer></footer>
    </main>
  );
}
