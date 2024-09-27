import Link from "next/link";

import { IBtnToPageProps } from "@/utils/types";


export default function BtnToPage({ path, title, children }: IBtnToPageProps) {
  return (
    <Link
      href={path}
      className="transition duration-500 ease-in-out hover:bg-color-btn-extra focus:bg-color-btn-secondary bg-color-btn-primary text-color-secondary
      font-roboto px-5 py-4 w-full flex gap-4 md:w-[198px] xl:w-[281px] xl:px-[40px] xl:gap-[26px] justify-center outline-none border-none rounded-[8px] text-xl font-bold leading-6 xl:text-2xl xl:leading-[28.8px]"
    >
      {title} {children}
    </Link>
  );
}