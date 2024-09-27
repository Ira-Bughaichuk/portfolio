
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { IBtnDownloadProps } from "@/utils/types";

export const BtnDownload = forwardRef< HTMLAnchorElement, IBtnDownloadProps>(
  ({ custom, variants, title, path, children }, ref) => {
  return (
      <motion.a custom={custom} variants={variants} href={path} download ref={ref} 
          className="transition duration-500 ease-in-out hover:bg-color-btn-extra focus:bg-color-btn-extra text-color-secondary font-roboto  bg-color-btn-primary
        px-5 py-4 w-full flex items-center gap-4 mm:w-[250px] xl:w-[350px] xl:px-[40px] xl:gap-[26px] justify-center outline-none border-none rounded-[8px] text-xl font-bold leading-6 xl:text-2xl xl:leading-[28.8px]"> 
        {title}{children}
      </motion.a>
  )
});

