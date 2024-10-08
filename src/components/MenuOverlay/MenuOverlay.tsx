import Image from "next/image";
import { motion, Variants } from "framer-motion";

import ButtonNav from "../ButtonNav/ButtonNav";
import BtnDownload  from '../BtnDownload/BtnDownload';
import NavLink from "./../NavLink/NavLink";
import Logo from "./../Logo/Logo";
import { navLinks } from "./../../utils/Data/navLink";
import photoToNav from '../../../public/images/nav.png';
import Arrow from '../../../public/icons/arrow.svg';
import { IMenuOverlayProps } from "@/utils/types";

const textAnimation: Variants  = {
  hidden:{
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      // duration: 0.8,
    },
  }),
}

export default function MenuOverlay({ open, handlerToggle}: IMenuOverlayProps) {

  return (
    <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={`fixed z-30 top-0 left-0 duration-1000 transition ease-in-out ${open ? "left-0" : "left-[-100%]"} w-full h-full navigation-gradient overflow-y-auto`}>
        <div className="absolute top-4 right-4 mm:top-5 mm:right-5">
        <ButtonNav handlerToggle={handlerToggle} open={open} type={'mobile'} />
        </div>
        
    <div className="px-4 py-[44px] mm:px-[40px] flex flex-col mm:flex-row w-full justify-center">
      <div className="flex flex-col mm:flex-row-reverse gap-[30px] mm:gap-[100px]">
        <div className="flex flex-col gap-[30px]">
          <Logo type={"mobile"}/>
          <h2 className="w-[325px] text-4xl not-italic font-medium leading-[43.2px] mm:text-5xl mm:leading-[57.6px] xl:text-8xl xl:leading-[115.2px] text-color-secondary">
            Frontend <span className="w-full flex justify-end">Developer</span>
          </h2>
          <div className="hidden mm:block w-[200px] h-[200px] rounded-full overflow-hidden mt-5">
              <Image src={photoToNav} alt="Girl with laptop" width={200} height={200} className="object-cover" /> 
            </div> 
        </div>

        <div className="flex flex-col gap-[30px] justify-center">
          {/* <h3 className="font-openSans text-color-secondary text-4xl not-italic font-bold leading-[43.2px]">Navigation</h3> */}
          <nav>
            <ul className="flex flex-col gap-6 xl:flex-row xl:gap-5 py-5 px-4">
              {navLinks.map(({ path, title }, index) => (
                <li key={index}>
                  <NavLink path={path} title={title} handlerToggle={handlerToggle} type={'mobile'}/>
                </li>
              ))}
            </ul>
          </nav>
          <BtnDownload custom={4} variants={textAnimation} title={"DownLoad CV"} path={"./files/Iryna_Buhaichuk_Front_CV.pdf"}><Arrow width={24} height={24} aria-label="Arrow" className='w-4 h-4 xl:w-6 xl:h-6'/></BtnDownload>
        </div>
      </div>
      </div>
    </motion.div>
  );
}
