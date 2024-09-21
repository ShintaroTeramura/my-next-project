import Image from "next/image";
import { News } from "@/app/_libs/microcms";
import styles from "../Date/index.module.css";

type Props = {
  date: string;
};
export default function Category({ date }: Props) {
  return (
    <span className={styles.data}>
      <Image src="/clock.svg" alt="" width={16} height={16} priority />
      {date}
    </span>
  );
}
