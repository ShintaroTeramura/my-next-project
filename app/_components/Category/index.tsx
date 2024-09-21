import Image from "next/image";
import { News } from "@/app/_libs/microcms";
import styles from "../Category/index.module.css";

type Props = {
  category: Category;
};
export default function Category({ category }: Props) {
  return <span className={styles.tag}>{category.name}</span>;
}
