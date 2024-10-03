"use client";

import { motion, Variants } from "framer-motion";

import Title from "./../../components/Title/Title";
import  CartEducation  from './../../components/CartEducation/CartEducation';
import { educationList } from './../../utils/Data/educationList';

// import { fadeInAnimationVerticalItem } from "./../../utils/animeFunctions";
const cardAnimation: Variants  = {
  offscreen:{
    y: 100,
    opacity: 0,
  },
  onscreen: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      duration: 0.5,
    },
  }),
}

function Education() {

  return (
    <section className='section'>
        <div className="container mx-auto">
            <Title type="subTitle" title={'Education'}/>
            <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }} 
            className="flex flex-row flex-wrap mm:flex-nowrap gap-4 mm:gap-6 md:gap-[47px] xl:gap-6 justify-center">
                {educationList && educationList.map(({university, profession, data, path}, index) => (
                    <div key={index}
                      // custom={index}
                      // variants={fadeInAnimationVerticalItem}
                      // initial="initial"
                      // whileInView="show"
                      // viewport={{ once: true}}
                      className="w-[40%] mm:w-[33.333%]">
                        <CartEducation  custom={index + 1} variants={cardAnimation} university={university} profession={profession} data={data} path={path} />
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
  )
};

Education.displayName = "Education";
export default Education;
