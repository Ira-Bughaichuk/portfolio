'use client'
import { useState } from 'react';
import Title from './../../components/Title/Title';
import CartProjects from './../../components/CartProjects/CartProjects';
import { projectsList } from './../../utils/Data/projectsList';
import BtnProject from '@/components/BtnProject/BtnProject';
import  Link  from 'next/link';
import BtnToPage from './../../components/BtnToPage/BtnToPage';


export default function Projects() {
  const [tag, setTag] = useState("All");
  const handleTagChange =(newTag:string)=>{
    setTag(newTag)
  }
  const filteredProjects = projectsList.filter(project =>{
    return project.tag.includes(tag)
  })

  
  return (
    <section className="section">
        <div className="container mx-auto">
            <Title title='My Projects'/>
            <BtnToPage path={'/projects'} title={"All projects"}/>
            {/* <div className='flex gap-4 xl:gap-[30px] justify-end mb-4 xl:mb-[44px]'>
              <BtnProject  onClick={handleTagChange} tag="All" isSelected={tag === "All"}/>
              <BtnProject  onClick={handleTagChange} tag="Com" isSelected={tag === "Com"}/>
              <BtnProject  onClick={handleTagChange} tag="Pet" isSelected={tag === "Pet"}/>
            </div>
            <ul className='grid gap-[35px] md:grid-cols-2 md:gap-x-[24px] md:gap-y-[30px]'>
              {filteredProjects && filteredProjects.map((item,index) =>(
                <li key={index}><CartProjects item={item}/></li>
              ))}
            </ul> */}
        </div>
    </section>

  )
}
