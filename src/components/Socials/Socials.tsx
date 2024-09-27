"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

import Github from "../../../public/icons/github.svg";
import Telegram from "../../../public/icons/telegram.svg";
import Linkedin from "../../../public/icons/linkedIn.svg";
import Gmail from "../../../public/icons/gmail.svg";

// import { fadeInAnimationVerticalItem } from "./../../utils/animeFunctions";
 const fadeInAnimationVerticalItem: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  show: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 * custom,
      duration: 0.7
    },
  }),
};

export default function Socials() {
  return (
    <motion.div 
        initial="initial"
        whileInView="show"
        viewport={{once: true}}>
      <p className="font-roboto not-italic text-[15px] font-bold leading-[18px] mm:text-2xl mm:leading-[28,8px] xl:text-4xl xl:leading-[43,2px]">
        I am on social networks:
      </p>
      <ul className="flex gap-[14px] transition duration-500 ease-in-out text-color-btn-primary">
        <motion.li
          key={1}
          variants={fadeInAnimationVerticalItem}
          custom={1}

          // initial="initial"
          // whileInView="show"
          // viewport={{once: true,}}
        >
          <Link
            href="https://t.me/Iren_Bughaichuk"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="Telegram"
          >
            <Telegram
              width={30}
              height={30}
              aria-label="Telegram"
              className="w-[18px] h-[18px] mm:w-6 mm:h-6 xl:w-[30px] xl:h-[30px] hover:text-color-btn-extra focus:text-color-btn-secondary"
            />
          </Link>
        </motion.li>
        <motion.li
          key={2}
          variants={fadeInAnimationVerticalItem}
          custom={2}
          // variants={fadeInAnimationVerticalItem}
          // initial="initial"
          // whileInView="show"
          // viewport={{
          //   once: true,
          // }}
          // custom={2}
        >
          <Link
            href="https://github.com/Ira-Bughaichuk"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="Github"
          >
            <Github
              width={30}
              height={30}
              aria-label="Github"
              className="w-[18px] h-[18px] mm:w-6 mm:h-6 xl:w-[30px] xl:h-[30px] hover:text-color-btn-extra focus:text-color-btn-secondary"
            />
          </Link>
        </motion.li>
        <motion.li
          key={3}
          variants={fadeInAnimationVerticalItem}
          custom={3}
          // variants={fadeInAnimationVerticalItem}
          // initial="initial"
          // whileInView="show"
          // viewport={{
          //   once: true,
          // }}
          // custom={3}
        >
          <Link
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="Linkedin"
          >
            <Linkedin
              width={30}
              height={30}
              aria-label="Linkedin"
              className="w-[18px] h-[18px] mm:w-6 mm:h-6 xl:w-[30px] xl:h-[30px] hover:text-color-btn-extra focus:text-color-btn-secondary"
            />
          </Link>
        </motion.li>
        <motion.li
          key={4}
          variants={fadeInAnimationVerticalItem}
          custom={4}
          // variants={fadeInAnimationVerticalItem}
          // initial="initial"
          // whileInView="show"
          // viewport={{
          //   once: true,
          // }}
          // custom={4}
        >
          <Link
            href="mailto:irynabugaichuk7@gmail.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="Gmail"
          >
            <Gmail
              width={30}
              height={30}
              aria-label="Gmail"
              className="w-[18px] h-[18px] mm:w-6 mm:h-6 xl:w-[30px] xl:h-[30px] hover:text-color-btn-extra focus:text-color-btn-secondary"
            />
          </Link>
        </motion.li>
      </ul>
    </motion.div>
  );
}
