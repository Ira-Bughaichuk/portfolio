
export type IBtnProjectProps ={tag:string; onClick: (value:string) =>void; isSelected:boolean; }

export default function BtnProject({tag,onClick, isSelected}:IBtnProjectProps) {
    const buttonStyle = isSelected ? "text-color-accent-primary" : "text-color-primary"
  return (
    <button type="button" className={` ${buttonStyle} `}  onClick={() => onClick(tag)}>{tag}</button>
  )
}
