import styles from "@/styles/portfolio.module.scss";
import path from "path";
import fs from "fs";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  // JSON 파일 가져오기
  const filePath = path.join(process.cwd(), "public", "data", "about.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);
  console.log(data);
  return (
    <div>
      <div></div>
    </div>
  );
}
