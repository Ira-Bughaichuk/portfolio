import { motion } from "framer-motion";
import { forwardRef } from "react";

import { ICartSkillProps } from "@/utils/types";

export const CartSkill = forwardRef<HTMLParagraphElement, ICartSkillProps>(({ custom, variants, title, index }, ref) => {
  const currentColor =
    index % 2 ? "bg-color-btn-main" : "cart-primary-gradient";

  return (
    <motion.p ref={ref} variants={variants} custom={custom}
      className={`${currentColor} font-condensed w-full h-full text-center inline-flex items-center justify-center
     border-solid border-[1px] rounded-[20px] border-color-btn-primary
      text-[15px] font-medium leading-[18px] mm:text-lg mm:leading-[21.6px] mm:font-bold xl:text-xl xl:leading-6
      hover:origin-top-right hover:rotate-6 duration-500`}
    >
      {title}
    </motion.p>
  );
})
      // hover:skew-y-3 hover:skew-x-6
      // hover:origin-top-right hover:rotate-12
