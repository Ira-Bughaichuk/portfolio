"use client";

import { motion, Variants } from "framer-motion";

import LanguagesCart from './../../components/LanguagesCart/LanguagesCart';
import Title from './../../components/Title/Title';
import { languagesList } from './../../utils/Data/languagesList';

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
      duration: 0.8,
    },
  }),
}

function Languages() {

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex justify-center">
        <Title type="subTitle" title={'Languages'}/>
        </div>
        
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="flex gap-4 mm:gap-6 justify-center">
            {languagesList && languagesList.map(({languages, level, path}, index) => (
              <div 
                key={index}
                // variants={fadeInAnimationVerticalItem}
                // initial="initial"
                // whileInView="show"
                // viewport={{ once: true }}
                // custom={index}
                className="flex flex-col gap-[10px] ">
                <LanguagesCart custom={index + 1} variants={cardAnimation} languages={languages} level={level} />
                {path !== '' ? (<a href={path} target="_blank" aria-label={languages} rel="noopener noreferrer" className="font-condensed 
                transition duration-500 ease-in-out hover:text-color-btn-secondary focus:text-color-btn-secondary text-color-accent-primary
                text-[15px] font-medium leading-[18px] mm:text-lg mm:leading-[21.6px] xl:text-[20px] xl:leading-6 xl:font-bold underline inline-flex justify-end">See more</a>) : null}
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

Languages.displayName = "Languages";
export default Languages;
