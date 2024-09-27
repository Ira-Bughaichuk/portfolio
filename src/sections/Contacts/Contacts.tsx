'use client';

import { motion, Variants } from "framer-motion";


import Title from './../../components/Title/Title';
import ContactsInfo from './../../components/ContactsInfo/ContactsInfo';
// import Square from '../../../public/icons/square.svg';
// import BtnToPage from './../../components/BtnToPage/BtnToPage';
import Socials from './../../components/Socials/Socials';

// import { fadeInAnimationVertical } from "./../../utils/animeFunctions";
const contactElementAnimation: Variants  = {
  offscreen:{
    y: 100,
    opacity: 0,
  },
  onscreen: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.8,
      duration: 0.5,
    },
  }),
}

export default function Contacts() {
  return (
    <motion.section 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          className="section">
        <div className="container mx-auto">
        <Title type="main" title={"Contacts"} />
        <div className='flex flex-col gap-[30px] mm:gap-[40px]'>
            
            <motion.div custom={1} variants={contactElementAnimation}
                  // variants={fadeInAnimationVertical} 
                  // initial="initial"
                  // whileInView="show"
                  // viewport={{
                  //   once: true,
                  // }} 
                  className="flex flex-col gap-3 mm:flex-row mm:justify-between">
                <ContactsInfo />
                <div className="flex justify-between items-center mm:flex-col mm:justify-between">
                  <Socials />
                </div>
            </motion.div>

            <motion.div custom={1} variants={contactElementAnimation}
                  // variants={fadeInAnimationVertical} 
                  // initial="initial"
                  // whileInView="show"
                  // viewport={{
                  //   once: true,
                  // }}
                   className='flex flex-col items-center font-condensed'>
                <p className='mb-2 mm:mb-3 text-xl font-medium mm:font-bold leading-6 xl:text-2xl xl:leading-[28,8px]'>I always ready to take on your orders!</p>
                <p className='mb-4 mm:mb-5 text-[15px] mm:text-lg font-normal leading-[22,5px] mm:leading-[27px] xl:text-2xl xl:leading-9'>Reach out to me to kickstart your project</p>
                
                {/* to CONTACT PAGE  <motion.div 
                  variants={fadeInAnimationVertical} 
                  initial="initial"
                  whileInView="show"
                  viewport={{
                    once: true,
                  }}>
                  <BtnToPage path={'/contacts'} title={'Get Started'} >
                    <Square width={24} height={24} aria-label="Square" />
                  </BtnToPage>
                </motion.div>  */}
                
            </motion.div>
        </div>
        </div>
    </motion.section>
  )
}
