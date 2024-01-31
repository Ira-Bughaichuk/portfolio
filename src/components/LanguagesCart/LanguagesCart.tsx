import { ILanguagesCartProps } from "@/utils/types";

export default function LanguagesCart({
  languages,
  level,
}: ILanguagesCartProps) {
  return (
    <div className="font-condensed w-[150px] md:w-[200px] xl:w-[250px] border-[1px] border-solid border-color-primary rounded-[10px] py-4 px-2 md:py-[30px] md:px-[22px] flex flex-col gap-2 md:gap-6 items-center justify-center">
      <p className="font-medium text-base leading-[19.2px] md:text-xl md:font-bold md:leading-6 xl:text-2xl xl:leading-[28.8px]">
        {languages}
      </p>
      <p className="text-[15px] leading-[22.5px] md:text-xl  md:leading-[30px] xl:text-2xl xl:leading-9">
        {level}
      </p>
    </div>
  );
}
