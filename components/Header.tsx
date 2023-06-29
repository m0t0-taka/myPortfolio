// VScode Extensionの"tsrfc(typescriptreactfunctionalcomponent)"で作成
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {};

export default function Header({}: Props) {
  const router = useRouter();
  const LinkToContact = () => {
    router.push("#contact");
  };
  return (
    // divでなくheaderとする(SEO)
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        // 速度
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* <SocialIcon
          url="https://twitter.com/Almonta5"
          fgColor="gray"
          bgColor="transparent"
        /> */}
        <SocialIcon
          url="https://github.com/m0t0-taka"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          rel="noopener noreferrer"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <button onClick={LinkToContact}>
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
        </button>
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
