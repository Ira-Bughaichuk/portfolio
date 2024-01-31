import ButtonNav from "../ButtonNav/ButtonNav";
import { navLinks } from "./../../utils/Data/navLink";
import NavLink from "./../NavLink/NavLink";
import Logo from "./../Logo/Logo";
import BtnDownLoad from "./../BtnDownLoad/BtnDownLoad";

export type IMenuOverlayProps = {
  open:boolean;
  handlerToggle: () => void;
};
export default function MenuOverlay({ open, handlerToggle }: IMenuOverlayProps) {
  return (
    <div className={`fixed z-20 top-0 left-0 duration-500 transition ease-in-out ${open ? "left-0" : "left-[-100%]"} w-full h-full navigation-gradient overflow-y-auto`}>
        <div className="absolute top-4 right-4 md:top-5 md:right-5">
        <ButtonNav handlerToggle={handlerToggle} open={open} />
        </div>
      
    <div className="px-4 py-[44px] md:px-[40px] flex flex-col md:flex-row gap-[30px] md:gap-[62px]">
      <div className="flex flex-col md:flex-row-reverse gap-[30px] md:gap-[62px]">
        <div className="flex flex-col gap-[30px]">
          <Logo />
          <h2 className="md:w-[325px] text-4xl not-italic font-medium leading-[43.2px] md:text-5xl md:leading-[57.6px] xl:text-8xl xl:leading-[115.2px] text-color-secondary">
            Frontend <span className="w-full flex justify-end">Developer</span>
          </h2>
        </div>

        <div className="flex flex-col gap-[50px]">
          <h3 className="font-openSans text-color-accent-primary text-xl not-italic font-bold leading-[30px]">Navigation</h3>
          <nav className="">
            <ul className="flex flex-col gap-6 xl:flex-row xl:gap-5">
              {navLinks.map(({ path, title }, index) => (
                <li key={index}>
                  <NavLink path={path} title={title} />
                </li>
              ))}
            </ul>
          </nav>
          <BtnDownLoad />
        </div>
      </div>
      </div>
    </div>
  );
}
