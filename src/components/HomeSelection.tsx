"use client";

import styles from "@/styles/slider.module.scss";
import { useState, MouseEvent } from "react";

export default function HomeSelection() {
  const [hoverPosition, setHoverPosition] = useState<number | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, currentTarget } = e;
    const { left, width } = currentTarget.getBoundingClientRect();
    const position = (clientX - left) / width;
    setHoverPosition(position);
  };

  const handleMouseLeave = () => {
    setHoverPosition(null);
  };

  const leftFlex = hoverPosition !== null ? (1 - hoverPosition) * 3 + 1 : 1;
  const rightFlex = hoverPosition !== null ? hoverPosition * 3 + 1 : 1;
  const leftOpacity = hoverPosition !== null ? 1 - hoverPosition : 1;
  const rightOpacity = hoverPosition !== null ? 1 - (1 - hoverPosition) : 1;

  return (
    <div
      className={styles[`slide-container`]}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${styles.box}`}
        style={{ flex: leftFlex, opacity: leftOpacity }}
      >
        <div className={`${styles.description}  ${styles.left}`}>
          <h1>About me</h1>
          <p>Personality, Skills, Experience</p>
        </div>
      </div>

      <div
        className={`${styles.box}`}
        style={{ flex: rightFlex, opacity: rightOpacity }}
      >
        <div className={`${styles.description}  ${styles.right}`}>
          <h1>Projects</h1>
          <p>Projects made with Vue & React</p>
        </div>
      </div>
    </div>
  );
}
