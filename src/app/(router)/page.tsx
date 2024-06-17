import HomeSelection from "@/components/HomeSelection";
import ProjectCard from "@/components/ProjectCard";
import styles from "@/styles/home.module.scss";

export default function Home() {
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
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
        </div>
      </div>
    </div>
  );
}
