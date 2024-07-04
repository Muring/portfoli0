import styles from "@/styles/portfolio.module.scss";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const { id } = params;
  return <div>My Post: {id}</div>;
}
