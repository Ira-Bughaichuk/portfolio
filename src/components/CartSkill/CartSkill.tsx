import { ICartSkillProps } from "@/utils/types";

export default function CartSkill({title, index}: ICartSkillProps) {
  const currentColor = (index % 2) ? "bg-color-btn-main" : "cart-primary-gradient";
  return (
    <div className={`${currentColor} w-full h-full text-center inline-flex items-center justify-center border-solid border-[1px] rounded-[20px] border-color-btn-primary text-[15px] font-medium leading-[18px] md:text-xl md:font-bold md:leading-6 xl:text-2xl xl:leading-[28.8px]`}>{title}</div>
  )
}

