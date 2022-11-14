import React from "react";
import { motion } from "framer-motion";
import ExperienceCardAmbient from "./ExperienceCardAmbient";
import ExperienceCardJPMC from "./ExperienceCardJPMC";
import ExperienceCardOkuma from "./ExperienceCardOkuma";

type Props = {};

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <div className="absolute top-20 md:top-24">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
          Experience
        </h3>
      </div>
      <div className="w-full mt-20 md:mt-24 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <ExperienceCardAmbient />
        <ExperienceCardJPMC />
        <ExperienceCardOkuma />
      </div>
    </motion.div>
  );
}
