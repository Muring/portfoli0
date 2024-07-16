import styles from "@/styles/portfolio.module.scss";
import dStyle from "@/styles/about.module.scss";
import path from "path";
import fs from "fs";
import Image from "next/image";
import Link from "next/link";
import { myData } from "@/interfaces/about.interface";

export default function AboutPage() {
  // JSON 파일 가져오기
  const filePath = path.join(process.cwd(), "public", "data", "about.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data: myData = JSON.parse(jsonData);
  console.log(data);

  return (
    <div className={styles["main-container"]}>
      <div className={styles.info}>
        <div className={styles.text}>
          <h1>{data.name.toUpperCase()}.</h1>
          <h3>{data.shortDescription}</h3>
          {/* <p className={styles.between}>
            {data.date}
            <span>{data.memberCount}명</span>
          </p> */}
          <p className={styles.desc}>{data.longDescription}</p>
          <div className={`${styles.etc} ${dStyle["justify-left"]}`}>
            <Link href={data.gitLink}>
              <Image
                src={"/images/icon/git-icon.png"}
                width={100}
                height={100}
                alt="git"
              ></Image>
              <h4>Github link</h4>
            </Link>
            <Link href={data.gitLink}>
              <Image
                src={"/images/profile/avatar.png"}
                width={100}
                height={100}
                alt="git"
              ></Image>
              <h4>Blog link</h4>
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
        <div className={`${styles["info-img"]} ${dStyle["profile-img"]}`}>
          <Image
            src={`/images/profile/profile-half.png`}
            width={800}
            height={800}
            alt="info"
          />
        </div>
      </div>
      <div className={styles.content}>
        {/* 개발 역량 */}
        <div className={dStyle.capability}>
          <div className={dStyle["fb-graph"]}>
            <div className={dStyle["side-desc"]}>
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
            <div className={dStyle["side-desc"]}>
              <h2>Frontend</h2>
              <p>Vue & Nuxt.js</p>
              <p>React & Next.js</p>
              <p>JS & TS</p>
              <p>Figma</p>
            </div>
          </div>
          <div className={dStyle.overall}></div>
        </div>

        {/* 스킬 및 숙련도 */}
        {/* 진짜 나(취미, 관심사) */}
      </div>
    </div>
  );
}
