'use client'
import { useState } from 'react';
import Title from './../../components/Title/Title';
import CartProjects from './../../components/CartProjects/CartProjects';
import { projectsList } from './../../utils/Data/projectsList';
import BtnProject from '@/components/BtnProject/BtnProject';


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
            <div>
              <BtnProject  onClick={handleTagChange} tag="All" isSelected={tag === "All"}/>
              <BtnProject  onClick={handleTagChange} tag="Com" isSelected={tag === "Com"}/>
              <BtnProject  onClick={handleTagChange} tag="Pet" isSelected={tag === "Pet"}/>
            </div>
            <ul className='grid gap-[35px] md:grid-cols-2 md:gap-x-[24px] md:gap-y-[30px]'>
              {filteredProjects && filteredProjects.map((item,index) =>(
                <li key={index}><CartProjects item={item}/></li>
              ))}
              {/* <li><CartProjects /></li>
              <li><CartProjects /></li>
              <li><CartProjects /></li>
              <li><CartProjects /></li> */}
            </ul>
        </div>
    </section>

  )
}
