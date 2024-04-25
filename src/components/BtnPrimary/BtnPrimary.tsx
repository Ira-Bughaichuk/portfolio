import { IBtnPrimaryProps } from "@/utils/types";

export default function BtnPrimary({title, typeBtn,onClick, children }:IBtnPrimaryProps) {
  return (
    <button type={typeBtn} onClick={onClick}
      className="transition duration-500 ease-in-out hover:bg-color-btn-extra focus:bg-color-btn-extra text-color-secondary font-roboto  bg-color-btn-primary
       px-5 py-4 w-full flex items-center gap-4 mm:w-[250px] xl:w-[350px] xl:px-[40px] xl:gap-[26px] justify-center outline-none border-none rounded-[8px] text-xl font-bold leading-6 xl:text-2xl xl:leading-[28.8px]"> 
      {title}{children}
    </button>
  );
}

