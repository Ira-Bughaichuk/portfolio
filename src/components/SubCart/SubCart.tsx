import React from "react";

export type ISubCartProps = {
  framework: string;
};

export default function SubCart(item: ISubCartProps) {
  return (
    <p
      className="absolute z-10 -top-4 left-2 font-condensed border-[1px] border-solid border-color-bg-primary rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-none
    bg-color-btn-extra py-[3.5px] px-[10px] mm:py-2 mm:px-4 text-color-secondary text-[11px] leading-[16.5px] mm:text-[13px] mm:leading-[19.5px] xl:text-[14px] xl:leading-[16.8px]">
      {item.framework}
    </p>
  );
}
