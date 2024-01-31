export type IButtonNavProps = {
  handlerToggle: () => void;
  open: boolean;
};
export default function ButtonNav({ handlerToggle, open }: IButtonNavProps) {
  return (
    <button
      type="button"
      onClick={() => handlerToggle()}
      className="w-6 h-6 flex items-center justify-center pointer text-color-accent-primary hover:text-color-primary outline-none border-none bg-transparent"
    >
      <div className={`relative z-30 duration-500 ease-in-out
          after:content-[''] after:block after:absolute after:w-6 after:h-[1px] after:bg-color-btn-primary
          after:left-[50%] after:transform after:-translate-x-1/2  after:-translate-y-1/2  
          before:content-[''] before:block before:absolute before:w-6 before:h-[1px] before:bg-color-btn-primary
          before:left-[50%] before:-translate-x-1/2 before:-translate-y-1/2
          ${open ? "after:rotate-0 after:bottom-1 before:top-1 before:rotate-0" : "after:top[50%] after:rotate-45 after:-translate-y-1/2  before:-translate-y-1/2 before:top-[50%] before:-rotate-45"} `}
      ></div>
    </button>
  );
}
