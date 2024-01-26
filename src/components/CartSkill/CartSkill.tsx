
export type ICartSkillProps = {
    title:string,
    index: number,
}
export default function CartSkill({title, index}: ICartSkillProps) {
  const currentColor = (index % 2) ? "bg-transparent" : "cart-primary-gradient";
  return (
    <div className={`${currentColor} text-center w-[140px] h-[140px] xl:w-[160px] xl:h-[160px] inline-flex items-center justify-center border-solid border-[1px] rounded-[20px] border-color-btn-primary text-[15px] font-medium leading-[18px] md:text-xl md:font-bold md:leading-6 xl:text-2xl xl:leading-[28.8px]`}>{title}</div>
  )
}
