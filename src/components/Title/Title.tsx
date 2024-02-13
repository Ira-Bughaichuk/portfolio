import { ITitleProps } from "./../../utils/types";
import Hash from "../../../public/icons/hashtag.svg";

export default function Title({ title }: ITitleProps) {
  return (
    <h2 className="font-condensed  items-center mb-5 md:mb-[40px] text-color-accent-primary flex  gap-[11px] md:gap-[40px] xl:gap-[40px] text-5xl xl:text-[64px] font-bold leading-[57.6px] mxl:leading-[76.8]">
      <Hash
        width={44}
        height={44}
        className="w-[30px] h-[30px] mm:w-[36px] mm:h-[36px] xl:w-[44px] xl:h-[44px]"
      />
      {title}
    </h2>
  );
}
