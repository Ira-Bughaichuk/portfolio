import { IBtnProjectProps } from "@/utils/types"

export default function BtnProject({title, tag, onClick, isSelected}:IBtnProjectProps) {
    const buttonStyle = isSelected ?  "text-color-btn-secondary" : "text-color-primary";
    
  return (
    <button type="button" className={`${buttonStyle} font-roboto leading-[1.2px] font-bold `}  onClick={() => onClick(tag)}>{title}</button>
  )
}

// text-${buttonStyle}