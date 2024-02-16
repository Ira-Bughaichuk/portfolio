import { ILanguagesCartProps } from "@/utils/types";

export default function LanguagesCart({
  languages,
  level,
}: ILanguagesCartProps) {
  return (
    <div className="font-condensed w-[150px] mm:w-[205px] xl:w-[250px] py-4 px-2 mm:py-[30px] mm:px-[22px] flex flex-col gap-2 mm:gap-6 items-center justify-center border-[1px] border-solid border-color-primary rounded-[10px]">
      <p className="font-medium text-base leading-[19.2px] mm:text-xl mm:font-bold mm:leading-6 xl:text-2xl xl:leading-[28.8px]">
        {languages}
      </p>
      <p className="font-normal text-[15px] leading-[22.5px] mm:text-xl  mm:leading-[30px] xl:text-2xl xl:leading-9">
        {level}
      </p>
    </div>
  );
}
