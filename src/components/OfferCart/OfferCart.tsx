import { IOfferProps } from "@/utils/types";

export default function OfferCart({ index, title, description }: IOfferProps) {
  const currentColor = index % 2 ? "text-color-accent-primary" : "text-color-accent-extra";
  return (
    <div className="flex flex-col items-center gap-2 md:flex-row xl:gap-4 xl:justify-end">
      <p className={`${currentColor} text-center font-ribeye_marrow text-[64px] font-normal not-italic leading-normal`}>
        {index + 1}
      </p>
      <p className={`${currentColor} text-center md:text-left font-condensed  text-base font-medium not-italic leading-[19.2px] md:text-xl md:font-bold md:leading-6 xl:text-2xl xl:leading-[28.8px]`}>
        {title}
      </p>
      <p className={`xl:w-[580px] text-center md:text-left font-condensed text-[15px] font-normal not-italic leading-[22.5px] md:text-lg md:leading-[27px] xl:text-2xl xl:leading-9`}> 
        {description}
      </p>
    </div>
  );
}
