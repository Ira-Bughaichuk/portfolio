import { IBtnProjectProps } from "@/utils/types"

export default function BtnProject({tag, onClick, isSelected}:IBtnProjectProps) {
    const buttonStyle = isSelected ?  "color-btn-secondary" : "color-primary";
    
  return (
    <button type="button" className={`text-${buttonStyle} font-roboto leading-[1.2px] font-bold `}  onClick={() => onClick(tag)}>{tag}</button>
  )
}
