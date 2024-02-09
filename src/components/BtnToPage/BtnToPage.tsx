import Link from "next/link";
export type IBtnToPageProps = { path: string; title: string; icon:string };
export default function BtnToPage({ path, title, icon }: IBtnToPageProps) {
  return (
    <Link
      href={path}
      className="font-roboto text-color-secondary px-5 py-4 w-full flex gap-4 md:w-[198px] xl:w-[281px] xl:px-[40px] xl:gap-[26px] justify-center  bg-color-btn-primary outline-none border-none rounded-[8px] text-xl font-bold leading-6 xl:text-2xl xl:leading-[28.8px]"
    >
      {title}{icon} 
    </Link>
  );
}
