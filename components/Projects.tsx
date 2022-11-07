import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [
    {
      name: "カレンダー",
      imagePath: "/project/Calendar.png",
      environment: "React, JavaScript, LocalStorage",
      library: "tailwindCSS, Dayjs",
      hosting: "AWS Amplify",
      url: "https://main.d3mzo6904s4hdm.amplifyapp.com/",
      github: "https://github.com/m0t0-taka/react-calendar",
      content:
        "Googleカレンダー風月間カレンダーアプリです。毎月決まった予定を登録するようなケースで都度入力の手間を省くことができます。",
    },
    {
      name: "Blog",
      imagePath: "/project/Blog.png",
      environment: "Next.js JavaScript Graphql OAuth",
      library: "tailwindCSS",
      hosting: "AWS Amplify",
      url: "https://main.d3jm3y5fblmo2k.amplifyapp.com/",
      github: "https://github.com/m0t0-taka/nextjs_blog_amplify",
      content:
        "AWS Amplifyを使用しGraphqlにてbackendを構築した簡単なBlogアプリです。Google OAuth認証にも対応しています。",
    },
    {
      name: "Maker Awesome",
      imagePath: "/project/MakerAwesome.png",
      environment: "RubyonRails",
      library: "",
      hosting: "heroku",
      url: "https://pacific-beach-06978.herokuapp.com/",
      github: "https://github.com/m0t0-taka/original_app",
      content:
        "プログラミングスクール卒業時にRubyonRailsで作成したアプリです。",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center px-20 pt-20 pb-10md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.imagePath}
              className="h-56 object-cover"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>
                {project.name}
              </h4>
              {/* <div className="flex item-center space-x-2 justify-center">
                <img className="h-10 w-10 rounded-full" src={"./React.png"} />
              </div> */}
              <ul className="">
                <li>開発環境：　　　　{project.environment}</li>
                <li>使用ライブラリ等：{project.library}</li>
                <li>Hosting：　　　　{project.hosting}</li>
                <li>
                  URL：　　　　　　<a>{project.url}</a>
                </li>
                {/* <li>GitHub：　　　　{project.github}</li> */}
                <li>概要：{project.content}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
