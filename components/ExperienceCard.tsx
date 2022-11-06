import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/okumaLogo.png"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Mechanical Engineer</h4>
        <p className="font-bold text-2xl mt-1">オークマ株式会社</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="h-10 w-10 rounded-full"
            src="https://pbs.twimg.com/profile_images/1163721694881574913/20__8c4H_400x400.png"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <p className="uppercase py-5 text-gray-300">2013.3 - 2020.4</p>
        <ul className="list-disc space-y-4 ml-5 pr-5 text-lg max-h-80 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]">
          <li>あああ</li>
          <li>いいい</li>
          <li>ううう</li>
          <li>えええ</li>
          <li>おおお</li>
        </ul>
      </div>
    </article>
  );
}
