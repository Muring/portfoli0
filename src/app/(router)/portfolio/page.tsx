import styles from "@/styles/portfolio.module.scss";
import Image from "next/image";
import path from "path";
import fs from "fs";
import ProjectCard from "@/components/ProjectCard";
import { SimpleProject } from "@/interfaces/project.interface";

export default function protfolioPage() {
  // JSON 파일 가져오기
  const filePath = path.join(process.cwd(), "public", "data", "portfolio.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const projects: SimpleProject[] = JSON.parse(jsonData);

  return (
    <div className={styles["main-container"]}>
      <div className={styles.info}>
        <div className={styles.text}>
          <h1>Portfolio.</h1>
          <h3>Check out some of my latest frontend project and studies.</h3>
          <p>
            I've made projects with{" "}
            <span className={styles.highlight}>Next.js</span>,{" "}
            <span className={styles.highlight}>Nuxt.js</span>,{" "}
            <span className={styles.highlight}>React.js</span> and
            <span className={styles.highlight}> Vue.js</span> using both{" "}
            <span className={styles.highlight}>Javascript</span> and{" "}
            <span className={styles.highlight}>Typescript</span> coperating with
            backend developers.
          </p>
        </div>
        <div className={styles.img}>
          <Image src={"/images/info.png"} width={600} height={600} alt="info" />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles["project-container"]}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} type={1} />
          ))}
        </div>
      </div>
    </div>
  );
}
