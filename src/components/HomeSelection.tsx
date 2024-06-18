"use client";

import styles from "@/styles/slider.module.scss";
import { useState, MouseEvent, useEffect, useCallback, useRef } from "react";
import { throttle } from "lodash";
import Link from "next/link";

export default function HomeSelection() {
  const [hoverPosition, setHoverPosition] = useState<number | null>(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    setAnimationTriggered(true);
  }, []);

  const handleMouseMove = useCallback(
    throttle((e: MouseEvent<HTMLDivElement>) => {
      if (!e.currentTarget) return;

      const clientX = e.clientX;
      const currentTarget = e.currentTarget as HTMLElement;
      const { left, width } = currentTarget.getBoundingClientRect();
      const position = (clientX - left) / width;
      setHoverPosition(position);
    }, 16), // 약 60fps
    []
  );

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
      <Link
        href={"/about"}
        className={`${styles.box} ${styles.left} ${
          animationTriggered ? styles["to-center"] : ""
        }`}
        style={{ flex: leftFlex, opacity: leftOpacity }}
      >
        <div className={`${styles.description}  ${styles["left-description"]}`}>
          <h1>About me</h1>
          <p>Personality, Skills, Experience</p>
        </div>
      </Link>

      <Link
        href={"/portfolio"}
        className={`${styles.box} ${styles.right} ${
          animationTriggered ? styles["to-center"] : ""
        }`}
        style={{ flex: rightFlex, opacity: rightOpacity }}
      >
        <div
          className={`${styles.description}  ${styles["right-description"]}`}
        >
          <h1>Projects</h1>
          <p>Projects made with Vue & React</p>
        </div>
      </Link>
    </div>
  );
}
