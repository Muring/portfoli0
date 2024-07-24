import styles from "@/styles/flip-card.module.scss";
import Image from "next/image";

export default function FilpCardComponent({ like }: any) {
  return (
    <div className={styles["flip-card"]}>
      <div className={styles["flip-card-inner"]}>
        <div className={styles["flip-card-front"]}>
          <Image
            src={"/images/icon/main-icon.png"}
            width={100}
            height={100}
            alt="git"
          ></Image>
        </div>
        <div className={`${styles["flip-card-back"]} ${styles[like]}`}>
          <Image
            src={`/images/card/${like}.jpg`}
            width={200}
            height={200}
            alt={like}
          ></Image>
          <h1>
            {like.split(" ").map((e: string) => (
              <div>
                {e}
                <br />
              </div>
            ))}
          </h1>
        </div>
      </div>
    </div>
  );
}
