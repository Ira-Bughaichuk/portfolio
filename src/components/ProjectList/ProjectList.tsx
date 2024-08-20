'use client';

import { motion } from "framer-motion";
import { useState} from 'react';

import CartProjects from "../CartProjects/CartProjects";
import BtnProject  from '@/components/BtnProject/BtnProject';
import { IProjectListProps } from '@/utils/types';
import { fadeInAnimationHorizontalItem } from './../../utils/animeFunctions';


export default function ProjectList({projectList}:IProjectListProps) {
  
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag:string)=>{
      setTag(newTag);
    }
  const filteredProjects = projectList.filter(project =>{
    return project.tag.includes(tag)
  })

  return (
    <>
      <div className='flex flex-wrap gap-4 xl:gap-[30px] justify-end mb-4 xl:mb-[44px]'>
            <BtnProject  onClick={handleTagChange} title="All projects" tag="All" isSelected={tag === "All"}/>
            <BtnProject  onClick={handleTagChange} title="Study projects" tag="Study" isSelected={tag === "Study"}/> 
            <BtnProject  onClick={handleTagChange} title="Pet projects" tag="Pet" isSelected={tag === "Pet"}/>
            <BtnProject  onClick={handleTagChange} title="Commercial projects" tag="Com" isSelected={tag === "Com"}/>
      </div>
      <ul className='grid gap-[35px] md:grid-cols-2 md:gap-x-[24px] md:gap-y-[30px]'>
      {filteredProjects && filteredProjects.map((item,index) =>(
        <motion.li 
          key={index}
          custom={index}
          variants={fadeInAnimationHorizontalItem(index)}
          initial="initial"
          whileInView="show"
          viewport={{ once: true }}>
            <CartProjects item={item}/>
        </motion.li>
      ))}
    </ul> 
  </>
  )
}
