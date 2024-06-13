'use client';

import { motion } from "framer-motion";
import { useState} from 'react';

import CartProjects from "../CartProjects/CartProjects";
import BtnProject  from '@/components/BtnProject/BtnProject';
import { IProjectListProps } from '@/utils/types';
import { fadeInAnimationHorizontalItem } from './../../utils/animeFunctions';


export default function ProjectList({projectList}:IProjectListProps) {
  // console.log(projectList);
  
  const [tag, setTag] = useState("All projects");

  const handleTagChange = (newTag:string)=>{
      setTag(newTag);
    }
  const filteredProjects = projectList.filter(project =>{
    return project.tag.includes(tag)
  })

  return (
    <>
      <div className='flex gap-4 xl:gap-[30px] justify-end mb-4 xl:mb-[44px]'>
            <BtnProject  onClick={handleTagChange} tag="All projects" isSelected={tag === "All projects"}/>
            <BtnProject  onClick={handleTagChange} tag="Study projects" isSelected={tag === "Study projects"}/> 
            <BtnProject  onClick={handleTagChange} tag="Pet projects" isSelected={tag === "Pet projects"}/>
            <BtnProject  onClick={handleTagChange} tag="Commercial projects" isSelected={tag === "Commercial projects"}/>
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
