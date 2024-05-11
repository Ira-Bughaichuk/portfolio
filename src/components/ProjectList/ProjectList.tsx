'use client';

import { useState, useRef  } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

import CartProjects from "../CartProjects/CartProjects";
import BtnProject  from '@/components/BtnProject/BtnProject';
import { IProjectListProps } from '@/utils/types';

export default function ProjectList({projectList}:IProjectListProps) {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag:string)=>{
      setTag(newTag);
    }
  const filteredProjects = projectList.filter(project =>{
    return project.tag.includes(tag)
  })

  const ref = useRef<HTMLUListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  // const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  
  return (
    <>
      <div className='flex gap-4 xl:gap-[30px] justify-end mb-4 xl:mb-[44px]'>
            <BtnProject  onClick={handleTagChange} tag="All" isSelected={tag === "All"}/>
            <BtnProject  onClick={handleTagChange} tag="Com" isSelected={tag === "Com"}/>
            <BtnProject  onClick={handleTagChange} tag="Pet" isSelected={tag === "Pet"}/> 
      </div>
      <motion.ul 
      ref={ref}
      style={{
        scale: scaleProgess,
        // opacity: opacityProgess,
      }}
      className='grid gap-[35px] md:grid-cols-2 md:gap-x-[24px] md:gap-y-[30px]'>
      {filteredProjects && filteredProjects.map((item,index) =>(
        <li key={index}><CartProjects item={item}/></li>
      ))}
    </motion.ul> 
  </>
  )
}
