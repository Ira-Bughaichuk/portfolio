  "use client";

  import { motion, Variants } from "framer-motion";

  import CartSkill from "./../../components/CartSkill/CartSkill";
  import Title from "./../../components/Title/Title";
  import { skillsList } from "./../../utils/Data/skillsList";

  // import { fadeInAnimationVariantsItem } from './../../utils/animeFunctions';
  const cardSkillAnimation: Variants  = {
    offscreen:{
      y: 100,
      opacity: 0,
    },
    onscreen: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        // duration: 0.8,
      },
    }),
  }

function Skills() {
    const techList = Object.values(skillsList)[0];
    const softList = Object.values(skillsList)[1];

    return (
      <section className="py-[40px] md:py-[50px] xl:pt-[80px] xl:pb-[170px]">
        <div className="container mx-auto">
          <div className="relative">
            <Title type="subTitle" title={"Tech Skills"} />
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className='w-full xl:w-[930px] flex flex-wrap gap-x-[29px] gap-y-2 mm:gap-x-[34px] mm:gap-y-6 md:gap-x-[61px] xl:gap-x-[30px] xl:gap-y-[30px] mb-[20px] mm:mb-[40px]'>
              {techList &&
                techList.map((item, index) => (
                  <motion.div className='w-[100px] h-[100px] mm:w-[140px] mm:h-[140px] xl:w-[160px] xl:h-[160px]'
                    key={index}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    // variants={fadeInAnimationVariantsItem}
                    // initial="initial"
                    // whileInView="animate"
                    // viewport={{ once: true }}
                    // custom={index}
                    >
                    <CartSkill custom={index + 1} variants={cardSkillAnimation} title={item} index={index}/>
                  </motion.div>
                ))}
            </motion.div>
            <Title type="subTitle" title={"Soft Skills"} />
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className='w-full xl:w-[930px] flex flex-wrap gap-x-[29px] gap-y-2 mm:gap-x-[34px] mm:gap-y-6 md:gap-x-[61px] xl:gap-x-[30px] xl:gap-y-[30px] mb-[20px] mm:mb-[40px]'>
              {softList &&
                softList.map((item, index) => (
                  <motion.div className='w-[100px] h-[100px] mm:w-[140px] mm:h-[140px] xl:w-[160px] xl:h-[160px]'
                    key={index}
                    
                    // variants={fadeInAnimationVariantsItem}
                    // initial="initial"
                    // whileInView="animate"
                    // viewport={{ once: true}}
                    // custom={index} 
                    >
                    <CartSkill custom={index + 1} variants={cardSkillAnimation} title={item} index={index}/>
                  </motion.div>
                ))}
            </motion.div>
        </div>
        </div>
      </section>
    );
};

Skills.displayName = "Skills";
export default Skills;