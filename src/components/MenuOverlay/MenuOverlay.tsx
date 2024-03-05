import ButtonNav from "../ButtonNav/ButtonNav";
import { navLinks } from "./../../utils/Data/navLink";
import NavLink from "./../NavLink/NavLink";
import Logo from "./../Logo/Logo";
import Image from "next/image";
import photoToNav from '../../../public/images/nav.png';
import  BtnPrimary  from '@/components/BtnPrimary/BtnPrimary';
import Arrow from '../../../public/icons/arrow.svg';

export type IMenuOverlayProps = {
  open:boolean;
  handlerToggle: () => void;
};
export default function MenuOverlay({ open, handlerToggle }: IMenuOverlayProps) {

  const handleClick =()=>{
    console.log('download'); 
  }
  return (
    <div className={`fixed z-20 top-0 left-0 duration-1000 transition ease-in-out ${open ? "left-0" : "left-[-100%]"} w-full h-full navigation-gradient overflow-y-auto`}>
        <div className="absolute top-4 right-4 mm:top-5 mm:right-5">
        <ButtonNav handlerToggle={handlerToggle} open={open} />
        </div>
        
    <div className="px-4 py-[44px] mm:px-[40px] flex flex-col mm:flex-row w-full justify-center">
      <div className="flex flex-col mm:flex-row-reverse gap-[30px] mm:gap-[100px]">
        <div className="flex flex-col gap-[30px]">
          <Logo />
          <h2 className="w-[325px] text-4xl not-italic font-medium leading-[43.2px] mm:text-5xl mm:leading-[57.6px] xl:text-8xl xl:leading-[115.2px] text-color-secondary">
            Frontend <span className="w-full flex justify-end">Developer</span>
          </h2>
          <div className="hidden mm:block w-[200px] h-[200px] rounded-full overflow-hidden mt-5">
              <Image src={photoToNav} alt="Girl with laptop" width={200} height={200} className="object-cover" /> 
            </div> 
        </div>

        <div className="flex flex-col gap-[30px]">
          <h3 className="font-openSans text-color-secondary text-4xl not-italic font-bold leading-[43.2px]">Navigation</h3>
          <nav className="">
            <ul className="flex flex-col gap-6 xl:flex-row xl:gap-5 py-5 px-4">
              {navLinks.map(({ path, title }, index) => (
                <li key={index}>
                  <NavLink path={path} title={title} handlerToggle={handlerToggle}/>
                </li>
              ))}
            </ul>
          </nav>
          <BtnPrimary title={'DownLoad CV'} typeBtn={"button"} onClick={handleClick}><Arrow width={24} height={24} className='w-4 h-4 xl:w-6 xl:h-6'/></BtnPrimary>
        </div>
      </div>
      </div>
    </div>
  );
}
