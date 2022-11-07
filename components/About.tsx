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
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
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
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover rounded-full md:rounded-lg md:w-64 md:h-64 xl:w-[400px] xl:h-[400px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl font-semibold">Background</h4>
        <p className="text-xs md:text-sm text-left">
          富山県立大学工学部知能デザイン工学科を2013年に卒業後新卒でオークマ株式会社に入社。
          <br />
          設計部にて8年間工作機械の設計に従事し、ユーザーごとに異なる多種多様な課題の解決のため、3DCAD、2DCADを用いた機構設計、部品設計に従事。
          <br />
          2019年7月より海外実務研修としてアメリカノースカロライナの拠点に半年間駐在し、現地の技術サポートを経験。
          <br />
          2021年4月に退職し、2021年5月よりプログラミングスクールDIVE INTO
          CODEに入校。
          <br />
          Webエンジニアコースにて、フルタイムで4ヶ月間、Ruby on
          Railsをメインにプログラミングを習得。
          <br />
          2021年10月に株式会社ジャパン・メディカル・カンパニーに入社。
          <br />
          社内で唯一のインフラ、アプリ、ツール開発担当として、社外ベンダーと協業し、患者・医師・社員にとって良いサービスを心がけ開発に従事。
          <br />
          2022年3月より複業にてモビリティーサービスの開発に参画。
          <br />
          Next.js、TypeScript、AWS Amplifyを使用した大規模なアプリ開発を経験。
        </p>
      </div>
    </motion.div>
  );
}
