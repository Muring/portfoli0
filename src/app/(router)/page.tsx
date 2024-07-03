import HomeSelection from "@/components/HomeSelection";
import ProjectCard from "@/components/ProjectCard";
import styles from "@/styles/home.module.scss";
import { Project } from "../../../interfaces/project";
import path from "path";
import fs from "fs";

export default function Home() {
  // JSON 파일 가져오기
  const filePath = path.join(process.cwd(), "public", "data", "main.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const projects: Project[] = JSON.parse(jsonData);
  // const projects: Project[] = require("/public/data/data.json");
  console.log(projects);

  return (
    <div className={styles[`content-container`]}>
      <HomeSelection />
      <div className={styles.recent}>
        <div className={styles[`title-container`]}>
          <div className={styles.line}></div>
          <div className={styles.title}>SOME OF MY LATEST WORK</div>
          <div className={styles.line}></div>
        </div>
        <div className={styles[`card-container`]}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} type={1} />
          ))}
        </div>
      </div>
    </div>
  );
}
