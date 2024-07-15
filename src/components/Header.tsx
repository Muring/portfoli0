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
      className={`${styles.header} ${
        animationTriggered ? styles.drop : styles.fadeOut
      }`}
    >
      <Link href={`/`}>
        <Image
          src={"/images/icon/main-icon.png"}
          width={75}
          height={75}
          alt="logo"
        ></Image>
      </Link>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link href={"/about"}>
              <h4>about</h4>
            </Link>
          </li>
          <li>
            <Link href={"/portfolio"}>
              <h4>portfolio</h4>
            </Link>
          </li>
          <li>
            <Link href={"https://muring.vercel.app"}>
              <h4>blog</h4>
            </Link>
          </li>
          <li>
            <Link href={"/contact"}>
              <h4>contact</h4>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
