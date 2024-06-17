"use client";

import styles from "@/styles/header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    setAnimationTriggered(true);
  }, []);

  return (
    <header
      className={`${styles.header} ${animationTriggered ? styles.drop : ""}`}
    >
      <Link href={`/`}>
        <Image src={"/logo.png"} width={75} height={75} alt="logo"></Image>
      </Link>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link href={"/about"}>
              <h3>about</h3>
            </Link>
          </li>
          <li>
            <Link href={"/portfolio"}>
              <h3>portfolio</h3>
            </Link>
          </li>
          <li>
            <Link href={"https://muring.vercel.app"}>
              <h3>blog</h3>
            </Link>
          </li>
          <li>
            <Link href={"/contact"}>
              <h3>contact</h3>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
