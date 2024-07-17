import styles from "@/styles/about.module.scss";
import Image from "next/image";

export default function CapabilityComponent() {
  return (
    <div className={styles.description}>
      <div className={styles["fb-graph"]}>
        <div className={styles["side-desc"]}>
          <h2>Backend</h2>
          <p>Java</p>
          <p>Spring</p>
          <p>Spring Boot</p>
          <p>MVC Pattern</p>
        </div>
        <Image
          src={`/images/capability-graph.png`}
          width={400}
          height={400}
          quality={100}
          alt="capability"
        />
        <div className={styles["side-desc"]}>
          <h2>Frontend</h2>
          <p>Vue & Nuxt.js</p>
          <p>React & Next.js</p>
          <p>JS & TS</p>
          <p>Figma</p>
        </div>
      </div>
      <div className={styles.overall}></div>
    </div>
  );
}
