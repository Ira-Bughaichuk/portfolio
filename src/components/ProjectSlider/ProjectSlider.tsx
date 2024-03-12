import Image from "next/image";

export type IProjectSliderProps ={
    framework: string;
    title: string;
    path: string;
    subTitle: string;
}
export default function ProjectSlider(item:IProjectSliderProps) {
  return (
    <div className="relative w-[171px]  mm:w-[235px] xl:w-[312px] ">
        <p className="absolute z-10 -top-4 left-2 font-condensed border-[1px] border-solid border-color-bg-primary rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-none
        bg-color-btn-extra py-[3.5px] px-[10px] mm:py-2 mm:px-4 text-color-secondary text-[11px] leading-[16.5px] mm:text-[13px] mm:leading-[19.5px] xl:text-[14px] xl:leading-[16.8px]">framework</p>
        <div className="mb-4 mt-5 w-[171px] h-[132px] mm:w-[235px] mm:h-[180px] xl:w-[312px] xl:h-[220px] rounded-[10px] overflow-hidden">
            <Image src={item.path} alt={item.title} width={200} height={150}
            className=''/> 
        </div>
        <p className="font-condensed text-xl leading-6 font-medium mb-2 mm:font-bold xl:text-2xl xl:leading-[28.8px]"> {item.title}</p>
        <p className="font-condensed text-[15px] leading-[18px] mm:text-[16px] mm:leading-[19.2px] xl:text-xl xl:leading-6 font-medium text-color-accent-secondary">{item.subTitle}</p>
    </div>
  )
}
