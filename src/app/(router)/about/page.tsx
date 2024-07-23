import styles from "@/styles/portfolio.module.scss";
import dStyles from "@/styles/about.module.scss";
import path from "path";
import fs from "fs";
import Image from "next/image";
import Link from "next/link";
import { myData } from "@/interfaces/about.interface";
import dynamic from "next/dynamic";
import FilpCardComponent from "@/components/FlipCardComponent";

export default function AboutPage() {
  // JSON 파일 가져오기
  const filePath = path.join(process.cwd(), "public", "data", "about.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data: myData = JSON.parse(jsonData);

  const CapabilityComponent = dynamic(
    () => import("@/components/CapabilityComponent"),
    {
      loading: () => <p>Loading...</p>,
    }
  );

  const SkillComponent = dynamic(() => import("@/components/SkillComponent"), {
    loading: () => <p>Loading...</p>,
  });

  return (
    <div className={styles["main-container"]}>
      <div className={styles.info}>
        <div className={styles.text}>
          <h1>{data.name.toUpperCase()}.</h1>
          <h3>{data.shortDescription}</h3>
          <p className={styles.desc}>{data.longDescription}</p>
          <div className={`${styles.etc} ${dStyles["justify-left"]}`}>
            <Link href={data.gitLink}>
              <Image
                src={"/images/icon/git-icon.png"}
                width={100}
                height={100}
                alt="git"
              ></Image>
              <h4>Github</h4>
            </Link>
            <Link href={data.gitLink}>
              <Image
                src={"/images/profile/avatar.png"}
                width={100}
                height={100}
                alt="git"
              ></Image>
              <h4>Blog</h4>
            </Link>
          </div>
          <div className={styles["logo-container"]}>
            {data.skills.map((skill, index) => (
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
        <div className={`${styles["info-img"]}`}>
          <Image
            src={`/images/profile/profile-half.png`}
            width={800}
            height={800}
            alt="info"
          />
        </div>
      </div>
      <div className={dStyles.content}>
        {/* 개발 역량 */}
        <CapabilityComponent />

        {/* 스킬 및 숙련도 */}
        <SkillComponent />

        {/* 진짜 나(취미, 관심사) */}
        <div className={dStyles.description}>
          <h2>I like</h2>
          <div className={dStyles["like-card-container"]}>
            <FilpCardComponent like="games" />
            <FilpCardComponent like="movies" />
            <FilpCardComponent like="novels" />
            <FilpCardComponent like="animes" />
            <FilpCardComponent like="coding" />
          </div>
        </div>
      </div>
    </div>
  );
}
