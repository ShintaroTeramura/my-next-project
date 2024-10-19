import Image from "next/image";
import styles from "./page.module.css";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import { News } from "@/app/_libs/microcms";

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/img-member1.jpg",
        width: 240,
        height: 240,
      },
      name: "ジョン・ウィルソン",
      position: "CEO",
      profile: "10年以上にわたるビジネス運営および戦略的なマネジメント経験を持つプロフェッショナルです。これまでに多岐にわたる業界で成果を上げ、特に効率的なオペレーション改善と成長戦略の策定において高い評価を得ています。大手企業での管理職経験を経て、現在は一般社団法人マックスエンターテイメントでCOOとして、持続可能で革新的な運営体制を構築し、無農薬の伝統的なお茶の販売を支える業務の最適化に尽力しています。",
    },
    {
      id: "2",
      image: {
        url: "/img-member2.jpg",
        width: 240,
        height: 240,
      },
      name: "チャック・テイラー",
      position: "COO",
      profile: "10年以上にわたるビジネス運営および戦略的なマネジメント経験を持つプロフェッショナルです。これまでに多岐にわたる業界で成果を上げ、特に効率的なオペレーション改善と成長戦略の策定において高い評価を得ています。大手企業での管理職経験を経て、現在は一般社団法人マックスエンターテイメントでCOOとして、持続可能で革新的な運営体制を構築し、無農薬の伝統的なお茶の販売を支える業務の最適化に尽力しています。",
    },
    {
      id: "3",
      image: {
        url: "/img-member3.jpg",
        width: 240,
        height: 240,
      },
      name: "ブラック・ジャック",
      position: "CTO",
      profile: "10年以上にわたるビジネス運営および戦略的なマネジメント経験を持つプロフェッショナルです。これまでに多岐にわたる業界で成果を上げ、特に効率的なオペレーション改善と成長戦略の策定において高い評価を得ています。大手企業での管理職経験を経て、現在は一般社団法人マックスエンターテイメントでCOOとして、持続可能で革新的な運営体制を構築し、無農薬の伝統的なお茶の販売を支える業務の最適化に尽力しています。",
    },
  ],
};
export default function Page() {
  return (
    <div>
      {data.contents.length === 0 ? (
        <p>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
              />
              <dl>

              <dt className={styles.name}>{member.name}</dt>
              <dd className={styles.position}>{member.position}</dd>
              <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
