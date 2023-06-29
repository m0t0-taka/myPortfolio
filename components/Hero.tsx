import React from "react";
import Image from "next/image";
import Link from "next/link";
import profileImage from "../public/profileImage.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, The Name is Motohiro Takagi", "I am Frontend Engineer"],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-40 w-40 space-y-8 items-center justify-center text-center overflow-hidden"
        src={profileImage}
        alt="profile image"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-4xl lg:text-6xl font-semibold scroll-px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 text-center">
        <ArrowDownCircleIcon className="h-10 w-10 text-[#F7AB0A]/40 animate-bounce" />
      </div>
    </div>
  );
}
