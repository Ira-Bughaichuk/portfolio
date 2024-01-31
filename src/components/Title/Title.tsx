import { ITitleProps } from "./../../utils/types";


export default function Title({title}: ITitleProps) {
  return (
    <h2 className="font-condensed mb-5 md:mb-[40px] text-color-accent-primary flex gap-[11px] md:gap-[40px] xl:gap-[40px] text-5xl xl:text-[64px] font-bold leading-[57.6px] mxl:leading-[76.8]">{title}</h2>
  )
}
