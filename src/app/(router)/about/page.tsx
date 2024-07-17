import styles from "@/styles/portfolio.module.scss";
import dStyles from "@/styles/about.module.scss";
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
          <div className={`${styles.etc} ${dStyles["justify-left"]}`}>
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
        <div className={`${styles["info-img"]} ${dStyles["profile-img"]}`}>
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
        <div className={dStyles.description}>
          <div className={dStyles["fb-graph"]}>
            <div className={dStyles["side-desc"]}>
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
            <div className={dStyles["side-desc"]}>
              <h2>Frontend</h2>
              <p>Vue & Nuxt.js</p>
              <p>React & Next.js</p>
              <p>JS & TS</p>
              <p>Figma</p>
            </div>
          </div>
          <div className={dStyles.overall}></div>
        </div>

        {/* 스킬 및 숙련도 */}
        <div className={dStyles.description}>
          <h3>Skills</h3>
          <ul className={dStyles.legend}>
            <li>
              <p>Lv1</p>
              <p>간단한 작성 및 편집 가능</p>
            </li>
            <li>
              <p>Lv2</p>
              <p>인터페이스 구축, 반응형 웹 및 컴포넌트화 가능</p>
            </li>
            <li>
              <p>Lv3</p>
              <p>비동기 및 각종 라이브러리 활용 가능</p>
            </li>
            <li>
              <p>Lv4</p>
              <p>최적화 가능</p>
            </li>
            <li>
              <p>Lv5</p>
              <p>보안성 강화 가능</p>
            </li>
          </ul>
          <div className={dStyles["chart-container"]}>
            <ul className={dStyles.label}>
              <li>
                <h4>React & Next.js</h4>
              </li>
              <li>
                <h4>Vue & Nuxt.js</h4>
              </li>
              <li>
                <h4>Figma</h4>
              </li>
              <li>
                <h4>Javascript</h4>
              </li>
              <li>
                <h4>Typescript</h4>
              </li>
            </ul>
            <ul className={dStyles["bar-chart"]}>
              <li className={dStyles["black-80"]}>
                <h2>Lv4</h2>
              </li>
              <li className={dStyles["green-80"]}>
                <h2>Lv4</h2>
              </li>
              <li className={dStyles["red-40"]}>
                <h2>Lv2</h2>
              </li>
              <li className={dStyles["yellow-60"]}>
                <h2>Lv3</h2>
              </li>
              <li className={dStyles["blue-60"]}>
                <h2>Lv3</h2>
              </li>
            </ul>
          </div>
        </div>
        {/* 진짜 나(취미, 관심사) */}
        <div className={dStyles.description}>
          <h4>Humble me</h4>
        </div>
      </div>
    </div>
  );
}
