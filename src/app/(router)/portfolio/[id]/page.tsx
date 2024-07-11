import styles from "@/styles/portfolio.module.scss";
import path from "path";
import fs from "fs";
import { DetailProject } from "@/interfaces/project.interface";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params: { id } }: { params: { id: number } }) {
  // JSON 파일 가져오기
  const filePath = path.join(process.cwd(), "public", "data", "project.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const projects: DetailProject[] = JSON.parse(jsonData);
  console.log(projects[id]);

  return (
    <div className={styles["main-container"]}>
      <div className={styles.info}>
        <div className={styles.text}>
          <h1>{projects[id].name.toUpperCase()}.</h1>
          <h3>{projects[id].summary}</h3>
          <p className={styles.between}>
            {projects[id].date}
            <span>{projects[id].memberCount}명</span>
          </p>
          <p className={styles.desc}>{projects[id].projectDescription}</p>
          <div className={styles.git}>
            <Link href={projects[id].link}>
              <Image
                src={"/images/logo/github-logo.png"}
                width={100}
                height={100}
                alt="git"
              ></Image>
              <h4>Github link</h4>
            </Link>
          </div>
        </div>
        <div className={styles.img}>
          <Image
            src={`/images/${projects[id].name}/card1-high.png`}
            width={800}
            height={800}
            alt="info"
          />
        </div>
      </div>
      <div className={styles.content}>
        {/* 개요 */}
        {/* 레이아웃(피그마) */}
        {/* 디자인 설명 */}
        {/* 내가 맡은 부분 */}
        {/* 내가 사용한 기술 */}
        {/* I've made projects with{" "}
            <span className={styles.highlight}>Next.js</span>,{" "} */}
        {/* 어려웠던 점 */}
      </div>
    </div>
  );
}
