import styles from "@/styles/about.module.scss";

export default function SkillComponent() {
  return (
    <div className={styles.description}>
      <h3>Skills</h3>
      <ul className={styles.legend}>
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
      <div className={styles["chart-container"]}>
        <ul className={styles.label}>
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
        <ul className={styles["bar-chart"]}>
          <li className={styles["black-80"]}>
            <h2>Lv4</h2>
          </li>
          <li className={styles["green-80"]}>
            <h2>Lv4</h2>
          </li>
          <li className={styles["red-40"]}>
            <h2>Lv2</h2>
          </li>
          <li className={styles["yellow-60"]}>
            <h2>Lv3</h2>
          </li>
          <li className={styles["blue-60"]}>
            <h2>Lv3</h2>
          </li>
        </ul>
      </div>
    </div>
  );
}
