"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { memo, forwardRef } from "react";

import { urlFor } from "../../../sanityportfolio/client/client";

import Buttons from "../Buttons/Buttons";
import SubCart from "../SubCart/SubCart";

import GitHub from '../../../public/icons/github.svg';
import Arrow from '../../../public/icons/arrow.svg';

import { ICartProjectsProps } from "@/utils/types";

 const CartProjects = memo(forwardRef<HTMLDivElement, ICartProjectsProps>(({custom, variants, item }, ref) => {

  return (
    <motion.div custom={custom} variants={variants} ref={ref}
      className="group relative"> 
      <SubCart framework={item.mainTechnology} />
      <div className="h-full group-hover:bg-gradient-to-r from-[#e9a16b] from-[4.61%] via-[rgba(254, 226, 205, 0.6)] via-[48.56%] to-[rgba(254, 255, 193, 0.4)] to-[88.73%]
      flex flex-col gap-4 items-center xl:gap-[30px] px-4 py-4 xl:px-[40px] xl:py-[40px] rounded-[10px] overflow-hidden border-[1px] border-solid border-color-btn-extra">
          <div className="relative w-[300px] h-[180px] xl:w-[500px] xl:h-[400px] rounded-[10px] flex justify-center">
            <Image src={urlFor(item.titleImage).url()} alt={item.projectTitle} width={500} height={400} loading="lazy"
            className="object-contain w-auto h-full rounded-[10px] overflow-hidden 
            absolute transform transition-all duration-500 opacity-100 scale-y-100 group-hover:scale-y-90 scale-x-100 group-hover:scale-x-110" />
          </div>
          
          <div className="h-[120px] group-hover:h-[200px] md:h-[163px] group-hover:md:h-[220px] xl:h-[200px]  group-hover:xl:h-[328px] transition-all duration-500 w-full flex flex-col justify-between">
            <div className="relative flex flex-col gap-2 xl:gap-4">
              <h2 className="transition-all duration-500 opacity-100 group-hover:opacity-0 font-roboto text-xl font-bold leading-6 xl:leading-[28.8px]">{item.projectTitle}</h2>
              <p className="transition-all duration-500 opacity-100 group-hover:opacity-0 font-condensed text-color-accent-primary text-base font-medium leading-[19.2px] xl:text-xl xl:font-normal xl:leading-6">{item.technologyTitle}</p>
            
            <div className="flex w-full  bg-transparent overlay absolute top-0 left-0 transition-all duration-500 transform translate-y-[100%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 ">
                <p className="text-[14px] leading-[21px] xl:text-2xl xl:leading-[31.2px]">{item.smallDescription}</p>
              </div>
            </div>
            
            
            <div className="relative z-20 flex justify-center gap-2 xl:gap-4 xl:justify-end transition duration-500 ease-in-out text-color-btn-primary">
                <Buttons title={'GitHub'} path={item.gitURL}><GitHub width={20} height={20} aria-label="GitHub" className='w-[16px] h-[16px] xl:w-[20px] xl:h-[20px] hover:text-color-btn-extra focus:text-color-btn-secondary'/></Buttons>
                <Buttons title={'See more'} path={item.projectURL}><Arrow width={24} height={24} aria-label="See Project" className='w-[16px] h-[16px] xl:w-[24px] xl:h-[24px] hover:text-color-btn-extra focus:text-color-btn-secondary'/></Buttons>
            </div>
          </div>
      </div>
    </motion.div>
  )
}));

CartProjects.displayName = "CartProjects";
export default CartProjects;
