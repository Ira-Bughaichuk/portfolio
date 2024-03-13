import { ITitleProps } from "./../../utils/types";
import Hash from "../../../public/icons/hashtag.svg";

export default function Title({type, title }: ITitleProps) {
  return (
    <>
      {type === "main" ? (
        <h2 className="font-condensed  items-center mb-5 md:mb-[40px] text-color-accent-primary flex  gap-[11px] md:gap-[40px] xl:gap-[40px] text-5xl xl:text-[64px] font-bold leading-[57.6px] mxl:leading-[76.8]">
          <Hash
            width={44}
            height={44}
            className="w-[30px] h-[30px] mm:w-[36px] mm:h-[36px] xl:w-[44px] xl:h-[44px]"
          />
          {title}
        </h2>
      ) : (
        <h3
          className="font-condensed items-center text-color-color-primary
            mb-4 mm:mb-[30px] flex  gap-[8px] mm:gap-3 xl:gap-[18px] 
            text-xl leading-6 mm:text-[32px] mm:leading-[38.4px] font-medium xl:text-4xl mxl:leading-[43.2px]"
        >
          <Hash
            width={30}
            height={30}
            className="w-[16px] h-[16px] mm:w-[24px] mm:h-[24px] xl:w-[30px] xl:h-[30px]"
          />
          {title}
        </h3>
      )}
    </>
  );
}
