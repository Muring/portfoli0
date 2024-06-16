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
              <Link href={"/about"}>
                <p>about</p>
              </Link>
            </li>
            <li>
              <Link href={"/portfolio"}>
                <p>portfolio</p>
              </Link>
            </li>{" "}
            <li>
              <Link href={"https://muring.vercel.app"}>
                <p>blog</p>
              </Link>
            </li>{" "}
            <li>
              <Link href={"/contact"}>
                <p>contact</p>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <h1>안녕하세요</h1>
        <h2>안녕하세요</h2>
        <h3>안녕하세요</h3>
        <p>안녕하세요</p>
      </div>
      <div></div>
      <footer></footer>
    </main>
  );
}
