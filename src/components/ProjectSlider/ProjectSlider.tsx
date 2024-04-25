import Image from "next/image";
import SubCart from "../SubCart/SubCart";
import { IProjectSliderProps } from "@/utils/types";

export default function ProjectSlider(item:IProjectSliderProps) {
  return (
    <div className="relative w-[171px]  mm:w-[235px] xl:w-[312px] ">
      <SubCart framework={item.framework} />
        <div className="mb-4 mt-5 w-[171px] h-[132px] mm:w-[235px] mm:h-[180px] xl:w-[312px] xl:h-[220px] rounded-[10px] overflow-hidden">
            <Image src={item.path} alt={item.title} width={200} height={150}/> 
        </div>
        <p className="font-condensed text-xl leading-6 font-medium mb-2 mm:font-bold xl:text-2xl xl:leading-[28.8px]"> {item.title}</p>
        <p className="font-condensed text-[15px] leading-[18px] mm:text-[16px] mm:leading-[19.2px] xl:text-xl xl:leading-6 font-medium text-color-accent-secondary">{item.subTitle}</p>
    </div>
  )
}
