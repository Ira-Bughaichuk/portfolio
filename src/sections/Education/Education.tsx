"use client";

import { motion } from "framer-motion";

import Title from "./../../components/Title/Title";
import CartEducation from './../../components/CartEducation/CartEducation';
import { educationList } from './../../utils/Data/educationList';

import { fadeInAnimationVerticalItem } from "./../../utils/animeFunctions";

export default function Education() {
  return (
    <section className='section'>
        <div className="container mx-auto">
            <Title type="subTitle" title={'Education'}/>
            <ul className="flex flex-row flex-wrap mm:flex-nowrap gap-4 mm:gap-6 md:gap-[47px] xl:gap-6 justify-center">
                {educationList && educationList.map(({university, profession, data, path}, index) => (
                    <motion.li 
                      key={index}
                      variants={fadeInAnimationVerticalItem}
                      initial="initial"
                      whileInView="show"
                      viewport={{
                        once: true,
                      }}
                      custom={index}
                      className="w-[40%] mm:w-[33.333%]">
                        <CartEducation  university={university} profession={profession} data={data} path={path} />
                    </motion.li>
                ))}
            </ul>
        </div>
    </section>
  )
}
