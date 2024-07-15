import styles from "@/styles/portfolio.module.scss";
import path from "path";
import fs from "fs";
import { DetailProject } from "@/interfaces/project.interface";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetailPage({
  params: { id },
}: {
  params: { id: number };
}) {
  // JSON 파일 가져오기
  const filePath = path.join(process.cwd(), "public", "data", "project.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const projects: DetailProject[] = JSON.parse(jsonData);
  console.log(projects[id]);

  return (
    <div className={styles["main-container"]}>
      <div>
        {id != 1 && (
          <Link href={`/portfolio/${id - 1}`} className={styles.left}>
            <p>&lt;</p>
          </Link>
        )}
        {id != 4 && (
          <Link href={`/portfolio/${Number(id) + 1}`} className={styles.right}>
            <p>&gt;</p>
          </Link>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.text}>
          <h1>{projects[id].name.toUpperCase()}.</h1>
          <h3>{projects[id].summary}</h3>
          <p className={styles.between}>
            {projects[id].date}
            <span>{projects[id].memberCount}명</span>
          </p>
          <p className={styles.desc}>{projects[id].projectDescription}</p>
          <div className={styles.etc}>
            <Link href={projects[id].link}>
              <Image
                src={"/images/logo/github-logo.png"}
                width={100}
                height={100}
                alt="git"
              ></Image>
              <h4>Github link</h4>
            </Link>
            <div className={styles["logo-container"]}>
              {projects[id].skills.map((skill, index) => (
                <div className={styles.logo}>
                  <Image
                    src={`/images/icon/${skill}.png`}
                    width={100}
                    height={100}
                    alt={skill}
                    key={index}
                  ></Image>
                  <p className={styles.arrow_box}>{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles["info-img"]}>
          <Image
            src={`/images/${projects[id].name}/card1-high.png`}
            width={800}
            height={800}
            alt="info"
          />
        </div>
      </div>
    </div>
  );
}
