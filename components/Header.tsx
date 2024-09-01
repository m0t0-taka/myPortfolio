// VScode Extensionの"tsrfc(typescriptreactfunctionalcomponent)"で作成
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { SocialIcon } from "react-social-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SquareArrowOutUpRight } from "lucide-react";

const githubItems = [
  {
    title: "Private",
    url: "https://github.com/m0t0-taka",
  },
  {
    title: "TalentX",
    url: "https://github.com/MotohiroTakagi-TalentX",
  },
  {
    title: "Ambient Lab",
    url: "https://github.com/motohiro-lab",
  },
  {
    title: "ジャパン・メディカル・カンパニー",
    url: "https://github.com/MotohiroTakagi",
  },
];

export default function Header() {
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
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <SocialIcon
              url="https://github.com"
              fgColor="gray"
              bgColor="transparent"
              as="div"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="bg-neutral-900">
            <DropdownMenuLabel>GitHub</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {githubItems.map(({ title, url }) => (
              <DropdownMenuItem
                key={title}
                onClick={() =>
                  window.open(url, "_blank", "noopener,noreferrer")
                }
                className="flex justify-between cursor-pointer gap-2"
              >
                {title}
                <SquareArrowOutUpRight size={16} />
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
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
