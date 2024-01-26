
export type IButtonNavProps = {
    handlerToggle: () => void,
    title: string,
}
export default function ButtonNav({ handlerToggle, title} :IButtonNavProps) {
  return (
    <button type="button" onClick={()=> handlerToggle()} className='px-1 py-1 text-color-accent-primary hover:text-color-primary outline-none border-none bg-transparent'><span className="h-[24px] w-[24px]">{title}</span></button>
  )
}
