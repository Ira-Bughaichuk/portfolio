"use client";

import { useState } from "react";
import { motion, spring, Variants } from "framer-motion";

import { CartProjects }  from "../CartProjects/CartProjects";
import BtnProject from "@/components/BtnProject/BtnProject";
import { IProjectListProps } from "@/utils/types";


export default function ProjectList({ projectList }: IProjectListProps) {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };
  const filteredProjects = projectList.filter((project) => {
    return project.tag.includes(tag);
  });

  const cardVariants: Variants = {
    offscreen: {
      y: -100,
      opacity: 0,
    },
    onscreen: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: 0.2 * custom,
        duration: 0.5,
      },
    }),
  };

  return (
    <>
        <div className="flex flex-wrap gap-5 xl:gap-[30px] justify-end mb-4 mm:mb-[34px] md:mb-[44px] xl:mb-[64px]">
          <BtnProject
            onClick={handleTagChange}
            title="All projects"
            tag="All"
            isSelected={tag === "All"}
          />
          <BtnProject
            onClick={handleTagChange}
            title="Study projects"
            tag="Study"
            isSelected={tag === "Study"}
          />
          <BtnProject
            onClick={handleTagChange}
            title="Pet projects"
            tag="Pet"
            isSelected={tag === "Pet"}
          />
          <BtnProject
            onClick={handleTagChange}
            title="Commercial projects"
            tag="Com"
            isSelected={tag === "Com"}
          />
        </div>

        {filteredProjects.length === 0 ? 
          (<h2 className="font-condensed text-center w-full text-color-primary mb-5 mm:mb-3 xl:mb-6 text-[13px] leading-[19.5px] font-normal mm:text-[15px] mm:leading-[22.5px] xl:text-xl xl:leading-6">Sorry, but I don`t have any projects in this category at the moment.</h2>)
          :
          (<motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
              className="grid gap-[35px] mm:grid-cols-2 md:gap-x-[24px] md:gap-y-[30px]">
            {filteredProjects &&
              filteredProjects.map((item, index) => (
                <motion.div key={index} >
                  <CartProjects custom={index + 1} variants={cardVariants}
                   item={item} />
                </motion.div>
              ))}
          </motion.div>)
        }
    </>
  );
}
