import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ExperienceCardTalentX() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md:w-[650px] xl:w-[950px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[160px] xl:h-[160px] object-contain object-center bg-black"
        src="/companyLogo/talentxLogo.png"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-xl md:text-3xl font-light">Frontend Engineer</h4>
        <p className="text-lg md:text-2xl font-bold mt-1">株式会社TalentX</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="h-10 w-10 rounded-full"
            src="/stack/TypeScript.png"
            alt=""
            width={40}
            height={40}
          />
          <Image
            className="h-10 w-10 rounded-full"
            src="/stack/React.png"
            alt=""
            width={40}
            height={40}
          />
          <Image
            className="h-10 w-10 rounded-full"
            src="/stack/Next.js.png"
            alt=""
            width={40}
            height={40}
          />
          <Image
            className="h-10 w-10 rounded-full"
            src="/stack/AWS.png"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <p className="uppercase py-3 md:py-5 text-gray-300">2023.11 - 在籍中</p>
        <ul className="list-disc space-y-2 ml-5 pr-5 text-sm md:text-lg max-h-80 overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]">
          <li>
            採用（求人、イベント、候補者管理）マーケティング支援のプラットフォームのフロントエンドリード
          </li>
        </ul>
      </div>
    </article>
  );
}
