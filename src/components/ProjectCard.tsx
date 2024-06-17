import styles from "@/styles/card.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <div className={styles.card}>
      <Link href={"/"}>
        <Image src={"/"} width={100} height={100} alt="project image"></Image>
        <div className={styles.description}>
          <h4>Project Title</h4>
          <p>Project description</p>
        </div>
      </Link>
    </div>
  );
}
