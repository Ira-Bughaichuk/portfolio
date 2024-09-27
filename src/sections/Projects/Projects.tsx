'use client';

import { motion, Variants } from "framer-motion";

import Title from './../../components/Title/Title';
import BtnToPage from './../../components/BtnToPage/BtnToPage';
import ProjectSwiper from './../../components/ProjectSwiper/ProjectSwiper';
import Arrow from '../../../public/icons/arrow.svg';

// import { fadeInAnimationHorizontal, fadeInAnimationVertical } from "./../../utils/animeFunctions";
const fadeInAnimationHorizontal = (direction: string): Variants => {
  return {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : 100,
    },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 * custom,
        duration: 0.5,
      },
    }),
  };
};
export const fadeInAnimationVertical: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * custom,
      duration: 0.5,
    },
  }),
};

// export const fadeInAnimationVerticalItem: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 100,
//   },
//   visible: (custom: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.3 * custom,
//       duration: 0.7
//     },
//   }),
// };


export default function Projects() {
 
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} 
      className="section">
        <div className="container mx-auto">
            <Title type="main" title='My Projects'/>
            <div className='flex flex-col mm:flex-row gap-5 mm:gap-6 mm:items-center'>
              <motion.div  custom={1} variants={fadeInAnimationHorizontal('right')} 
                // initial="initial"
                // whileInView="show"
                // viewport={{
                //   once: true,
                // }}
                className='flex flex-col font-condensed'>
                <p  className='mb-6  text-xl leading-6 font-medium xl:text-4xl xl:leading-[43.2px]'>Browse Through My Works</p>
                <p className='mm:w-[320px] md:w-[365px] xl:w-[536px] mm:mb-10 text-[15px] leading-[22.5px] mm:text-[18px] mm:leading-[27px] xl:text-2xl xl:leading-9 font-normal'>Dive into my portfolio to explore a collection of projects showcasing meticulous implementation and thoughtful design.</p>
                <motion.div custom={2} variants={fadeInAnimationVertical} 
                  // initial="initial"
                  // whileInView="show"
                  // viewport={{
                  //   once: true,
                  // }}
                  className='hidden mm:block'>
                  <BtnToPage path={'/projects'} title={"All projects"}><Arrow width={24} height={24} aria-label="Arrow" className='w-[22px] h-[22px] xl:w-[24px] xl:h-[24px]'/></BtnToPage>
                </motion.div>
              </motion.div>
              <motion.div custom={1} variants={fadeInAnimationHorizontal('left')} 
                // initial="initial"
                // whileInView="show"
                // viewport={{
                //   once: true,
                // }}
                className='flex flex-col gap-[18px] xl:gap-6'>
                <ProjectSwiper />
                <div className='mm:hidden block'>
                  <BtnToPage path={'/projects'} title={"All projects"}><Arrow width={24} height={24} aria-label="Arrow" className='w-[22px] h-[22px] xl:w-[24px] xl:h-[24px]'/></BtnToPage>
                </div>
              </motion.div>
            </div>
        </div>
    </motion.section>
  )
}