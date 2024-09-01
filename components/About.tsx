import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    // h-screenとsnap-centerの組み合わせにより、scrollでsnapされる
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/profileAbout.png"
        // object-coverでアスペクト比をキープ
        className="mt-24 md:mt-28 md:mb-0 flex-shrink-0 w-40 h-40 object-cover rounded-full md:rounded-lg md:w-64 md:h-64 xl:w-[400px] xl:h-[400px]"
      />
      <div className="space-y-5 px-0 md:px-10">
        <h4 className="text-lg md:text-2xl font-semibold">Background</h4>
        <div className="text-xs md:text-base text-left space-y-4">
          <div>
            富山県立大学工学部知能デザイン工学科を2013年に卒業後新卒でオークマ株式会社に入社。
            <br />
            設計部にて8年間、3DCAD、2DCADを用いた工作機械の機構設計、部品設計に従事。
            <br />
            2019年7月よりアメリカノースカロライナの拠点に半年間駐在し、現地の技術サポートを経験。
          </div>
          <div className="mt-1.5">
            2021年5月よりプログラミングスクールDIVE INTO CODEに入校。
            <br />
            フルタイムで4ヶ月間学習し、Ruby on
            Railsをメインにプログラミングを習得。
            <br />
          </div>
          <div className="mt-1.5">
            2021年10月に株式会社ジャパン・メディカル・カンパニー入社。
            <br />
            社内のインフラ、アプリ、ツール開発をリードし、患者・医師・社員にとって良いサービス開発に従事。
          </div>
          <div className="mt-1.5">
            2022年3月より副業にてモビリティーサービスの開発に参画。
            <br />
            Next.js(React)、TypeScript、AWS Amplifyを使用した開発に従事。
          </div>
          <div className="mt-1.5">
            2023年11月より株式会社TalentX入社。
            <br />
            フロントエンドのプロフェッショナルとしてしてプロジェクトのフロントエンドをリード
          </div>
        </div>
      </div>
    </motion.div>
  );
}
