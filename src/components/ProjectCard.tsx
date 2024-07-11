import styles from "@/styles/card.module.scss";
import Image from "next/image";
import Link from "next/link";
import { ProjectCardProps } from "@/interfaces/project.interface";

export default function ProjectCard({ project, type }: ProjectCardProps) {
  const currentProject = project;
  console.log(currentProject.id);
  return (
    <div className={styles.card}>
      <Link href={`/portfolio/${currentProject.id}`}>
        <Image
          src={type === 0 ? project.bigImage : project.smallImage}
          width={400}
          height={400}
          alt="project image"
        ></Image>
        <div className={styles.description}>
          <h4>{currentProject.name}</h4>
          <p>{currentProject.description}</p>
        </div>
      </Link>
    </div>
  );
}
