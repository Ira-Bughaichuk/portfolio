'use client';

import { motion, Variants } from "framer-motion";
import Image from "next/image";

import offer from "./../../../public/images/cart-offer.png";
import {OfferCart} from "@/components/OfferCart/OfferCart";
import Title from "./../../components/Title/Title";

import { offerList } from "@/utils/Data/offerList";
// import { fadeInAnimationHorizontalItem } from "./../../utils/animeFunctions";

import s from "./offer.module.css";

const fadeInAnimationHorizontalItem = (index: number): Variants => {
  const isEven = index % 2 === 0;

  return {
    initial: {
      opacity: 0,
      y: isEven ? 100 : -100,
    },
    show: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * custom,
        duration: 0.5,
      },
    }),
  };
};


export default function Offer() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <Title type="subTitle" title={"What I Offer"} />
        <motion.div className={` ${s.parent}`}
            initial="initial"
            whileInView="show"
            viewport={{ once: true}}>
          {offerList &&
            offerList.map(({ currentClass, title, description }, index) => (
              <div key={index} className={` ${currentClass}`}
                  // custom={index}
                  // variants={fadeInAnimationHorizontalItem(index)}
                  // initial="initial"
                  // whileInView="show"
                  // viewport={{ once: true }}
                  >
                    <OfferCart custom={index} variants={fadeInAnimationHorizontalItem(index)}
                      index={index}
                      title={title}
                      description={description}
                    />
              </div>
            ))}
          <div className="cart_image">
            <Image
              src={offer}
              alt="Photo about offer"
              width={300}
              height={300}
              loading="lazy" 
              className="object-contain w-[200px] h-[200px] md:w-[180px] md:h-[180px] xl:w-[299px] xl:h-[299px]
              hover:rotate-6 duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
