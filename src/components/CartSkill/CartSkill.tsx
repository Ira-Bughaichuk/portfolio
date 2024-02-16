import { ICartSkillProps } from "@/utils/types";

export default function CartSkill({title, index}: ICartSkillProps) {
  const currentColor = (index % 2) ? "bg-color-btn-main" : "cart-primary-gradient";
  return (
    <p className={`${currentColor} font-condensed w-full h-full text-center inline-flex items-center justify-center
     border-solid border-[1px] rounded-[20px] border-color-btn-primary
      text-[15px] font-medium leading-[18px] mm:text-lg mm:leading-[21.6px] mm:font-bold xl:text-xl xl:leading-6`}>{title}</p>
  )
}

