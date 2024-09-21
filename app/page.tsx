import Image from "next/image";
import styles from "./page.module.css";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import {News} from "@/app/_libs/microcms";



const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィス立てました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/09/15",
      createdAt: "2024/09/15",
    },
    {
      id: "2",
      title: "滋賀に移転しました",
      category: {
        name: "最新",
      },
      publishedAt: "2024/10/01",
      createdAt: "2024/10/01",
    },
    {
      id: "3",
      title: "同窓会に出席しました",
      category: {
        name: "最新",
      },
      publishedAt: "2024/10/02",
      createdAt: "2024/10/02",
    },
  ],
};
export default function Home() {
  const slicedata = data.contents.slice(0, 2);

  return (
    <>
      {/* fv */}
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      {/* news */}
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>NEWS</h2>
        <NewsList news={slicedata}></NewsList>
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
