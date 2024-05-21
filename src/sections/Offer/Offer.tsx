'use client';

import { motion } from "framer-motion";
import Image from "next/image";

import offer from "./../../../public/images/cart-offer.png";
import OfferCart from "@/components/OfferCart/OfferCart";
import Title from "./../../components/Title/Title";

import { offerList } from "@/utils/Data/offerList";
import { fadeInAnimationHorizontalItem } from "./../../utils/animeFunctions";

import s from "./offer.module.css";

export default function Offer() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <Title type="subTitle" title={"What I Offer"} />
        <ul className={` ${s.parent}`}>
          {offerList &&
            offerList.map(({ currentClass, title, description }, index) => (
              <motion.li key={index} className={` ${currentClass}`}
                  custom={index}
                  variants={fadeInAnimationHorizontalItem(index)}
                  initial="initial"
                  whileInView="show"
                  viewport={{ once: true }}>
                    <OfferCart
                      index={index}
                      title={title}
                      description={description}
                    />
              </motion.li>
            ))}
          <li className="cart_image">
            <Image
              src={offer}
              alt="Photo about offer"
              width={300}
              height={300}
              loading="lazy" 
              className="object-contain w-[200px] h-[200px] md:w-[180px] md:h-[180px] xl:w-[299px] xl:h-[299px]
              hover:rotate-6 duration-500"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
