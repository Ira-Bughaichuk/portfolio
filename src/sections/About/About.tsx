"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

import Title from "./../../components/Title/Title";
import Buttons from "./../../components/Buttons/Buttons";
import about from "./../../../public/images/about.jpg";
import Email from "../../../public/icons/email.svg";
import GitHub from "../../../public/icons/github.svg";
import Linkedin from "../../../public/icons/linkedIn.svg";

// import { fadeInAnimationHorizontal, fadeInAnimationVerticalItem } from "./../../utils/animeFunctions";

const textAnimation: Variants  = {
  hidden:{
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      // duration: 0.8,
    },
  }),
}

export default function About() {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport = {{ amount: 0.2, once: true, }}
      className="section">
      <div className="container mx-auto">
        <div className="flex flex-col mm:flex-row items-center gap-6 xl:gap-[160px] mm:justify-between">
          <div
            // variants={fadeInAnimationHorizontal("left")}
            // initial="initial"
            // whileInView="show"
            // viewport={{
            //   once: true,
            // }}
            className="relative flex grow-0 shrink-0 w-[235px] h-[371px] mm:w-[205px] mm:h-[344px] md:w-[235px] md:h-[371px] xl:w-[400px] xl:h-[600px] overflow-hidden rounded-full"
          >
            <Image
              src={about}
              alt="Photo Iryna"
              loading="lazy"
              width={400}
              height={600}
              className="object-cover w-full h-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  rounded-full"
            />
          </div>
          <div
            // variants={fadeInAnimationHorizontal("right")}
            // initial="initial"
            // whileInView="show"
            // viewport={{
            //   once: true,
            // }}
            className="flex flex-col"
          >
            <Title type="main" title={"About me"} />
            <div className="font-condensed flex flex-col gap-5 mb-4 mm:mb-5 xl:mb-[60px]">
              <motion.p custom={1} variants={textAnimation} className="text-[15] leading-[22.5px] mm:text-lg mm:leading-[27px] xl:leading-9 xl:text-2xl">
                I am an experienced front-end developer with a focus on React.js
                and its ecosystem. I have successful experience in creating both
                client and server applications.
              </motion.p>
              <motion.p custom={2} variants={textAnimation} className="text-[15] leading-[22.5px] mm:text-lg mm:leading-[27px] xl:leading-9 xl:text-2xl">
                In the past, I have served as a Scrum Master on team projects,
                so I understand that a high level of collaboration and
                interaction is essential for project success. I value learning
                opportunities and constantly strive to improve my skills.
              </motion.p>
            </div>
            <ul className="flex flex-col mm:flex-row mm:justify-between xl:justify-start gap-2 xl:gap-[30px]">
              <motion.li
                key={1}
                custom={3} variants={textAnimation}
                // variants={fadeInAnimationVerticalItem}
                // initial="initial"
                // whileInView="show"
                // viewport={{
                //   once: true,
                // }}
                // custom={1}
              >
                <Buttons
                  title={"Send an e-mail"}
                  path={"mailto:irynabugaichuk7@gmail.com"}
                >
                  <Email
                    width={20}
                    height={20}
                    aria-label="Email"
                    className="w-[14px] h-[14px] mm:w-[18px] mm:h-[18px]  xl:w-[20px] xl:h-[20px]"
                  />
                </Buttons>
              </motion.li>
              <motion.li
                key={2}
                custom={4} variants={textAnimation}
                // variants={fadeInAnimationVerticalItem}
                // initial="initial"
                // whileInView="show"
                // viewport={{
                //   once: true,
                // }}
                // custom={2}
              >
                <Buttons
                  title={"Linkedin"}
                  path={"https://www.linkedin.com/feed/"}
                >
                  <Linkedin
                    width={20}
                    height={20}
                    aria-label="Linkedin"
                    className="w-[12px] h-[12px] mm:w-[16px] mm:h-[16px] xl:w-[20px] xl:h-[20px]"
                  />
                </Buttons>
              </motion.li>
              <motion.li
                key={3}
                custom={5} variants={textAnimation}
                // variants={fadeInAnimationVerticalItem}
                // initial="initial"
                // whileInView="show"
                // viewport={{
                //   once: true,
                // }}
                // custom={3}
              >
                <Buttons
                  title={"GitHub"}
                  path={"https://github.com/Ira-Bughaichuk"}
                >
                  <GitHub
                    width={20}
                    height={20}
                    aria-label="GitHub"
                    className="w-[12px] h-[12px] mm:w-[16px] mm:h-[16px] xl:w-[20px] xl:h-[20px]"
                  />
                </Buttons>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
