import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  // 言語
  const javaScript = "/stack/JavaScript.png";
  const typeScript = "/stack/TypeScript.png";
  const ruby = "/stack/Ruby.png";
  const python = "/stack/Python.png";
  // フレームワーク
  const next = "/stack/Next.js.png";
  const react = "/stack/React.png";
  // クラウドサービス
  const aws = "/stack/AWS.png";
  const figma = "/stack/Figma.png";
  const storybook = "/stack/Storybook.png";
  const zapier = "/stack/Zapier.png";
  const airtable = "/stack/Airtable.png";
  const salesforce = "/stack/Salesforce.png";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col md:pt-40 max-w-[2000px] min-h-screen justify-center mx-auto items-center"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-32 md:top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hoverすると習熟度が表示されます。
      </h3>
      <div className="mt-20 grid grid-cols-3 gap-5">
        {/* 言語 */}
        <Skill stackImage={typeScript} proficiency="90" />
        <Skill stackImage={javaScript} proficiency="80" />
        <Skill stackImage={python} proficiency="60" />
        <Skill stackImage={ruby} proficiency="50" />
        {/* フレームワーク */}
        <Skill stackImage={react} proficiency="90" />
        <Skill stackImage={next} proficiency="80" />
        {/* クラウドサービス */}
        <Skill directionLeft stackImage={aws} proficiency="60" />
        <Skill directionLeft stackImage={figma} proficiency="60" />
        <Skill directionLeft stackImage={storybook} proficiency="80" />
        <Skill directionLeft stackImage={zapier} proficiency="90" />
        <Skill directionLeft stackImage={airtable} proficiency="90" />
        <Skill directionLeft stackImage={salesforce} proficiency="50" />
      </div>
    </motion.div>
  );
}
