import styles from "@/styles/portfolio.module.scss";
import path from "path";
import fs from "fs";
import { Project } from "@/interfaces/project.interface";
import Image from "next/image";

export default function Page({ params: { id } }: { params: { id: number } }) {
  // JSON 파일 가져오기
  const filePath = path.join(process.cwd(), "public", "data", "project.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const projects: Project[] = JSON.parse(jsonData);
  console.log(projects[id]);

  return (
    <div className={styles["main-container"]}>
      <div className={styles.info}>
        <div className={styles.text}>
          <h1>{projects[id].name}</h1>
          <p>Check out some of my latest frontend project and studies.</p>
          <p>
            I've made projects with{" "}
            <span className={styles.highlight}>Next.js</span>,{" "}
          </p>
        </div>
        <div className={styles.img}>
          <Image src={"/images/info.png"} width={600} height={600} alt="info" />
        </div>
      </div>
      <div className={styles.content}></div>
    </div>
  );
}
