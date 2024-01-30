import Image from "next/image";
import offer from "./../../../public/images/cart-offer.png";
import OfferCart from "@/components/OfferCart/OfferCart";
import Title from "./../../components/Title/Title";
import { offerList } from "@/utils/Data/offerList";
import s from "./offer.module.css";

export default function Offer() {
  return (
    <section>
      <div className="container mx-auto">
        <Title title={"What I Offer"} />
        <ul className={` ${s.parent}`}>
          {offerList &&
            offerList.map(({ currentClass, title, description }, index) => (
              <li key={index} className={` ${currentClass}`}>
                <OfferCart
                  index={index}
                  title={title}
                  description={description}
                />
              </li>
            ))}
          <li className="cart_image">
            <Image
              src={offer}
              alt="Photo about offer"
              width={300}
              height={300}
              className="object-contain w-[200px] h-[200px] md:w-[180px] md:h-[180px] xl:w-[299px] xl:h-[299px]"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

/* <li key={index} className={` 's.${currentClass}' flex flex-col gap-2 md:flex-row xl:gap-4`}>
    <p className={`font-ribeye_marrow text-[64px] font-normal not-italic leading-normal`}>{index+1}</p>
    <p className={`w-[220px] font-condensed text-base font-medium not-italic leading-[19.2px] md:text-xl md:font-bold md:leading-6 xl:text-2xl xl:leading-[28.8px]`}>{title}</p>
    <p className={`w-[510px] font-condensed text-[15px] font-normal not-italic leading-[22.5px] md:text-lg md:leading-[27px] xl:text-2xl xl:leading-9`}>{description}</p>
  </li> */

/* <ul className={` ${s.parent}`}>
                    <p className={`${s.div1}  font-ribeye_marrow text-[64px] font-normal not-italic leading-normal`}>1</p>
                    <p className={`${s.div2}  w-[220px] font-condensed text-base font-medium not-italic leading-[19.2px] md:text-xl md:font-bold md:leading-6 xl:text-2xl xl:leading-[28.8px]`}>Expertise in HTML, CSS, and JavaScript:</p>
                    <p className={`${s.div3}  w-[510px] font-condensed text-[15px] font-normal not-italic leading-[22.5px] md:text-lg md:leading-[27px] xl:text-2xl xl:leading-9`}>Expertise in HTML, CSS, and JavaScript: Proficient from basic to advanced levels in these programming languages.</p>
                
                    <p className={`${s.div4}  w-[28px] font-ribeye_marrow text-[64px] font-normal not-italic leading-normal`}>1</p>
                    <p className={`${s.div5}  md:w-[184px] xl:w-[220px] font-condensed text-base font-medium not-italic leading-[19.2px] md:text-xl md:font-bold md:leading-6 xl:text-2xl xl:leading-[28.8px]`}>Expertise in HTML, CSS, and JavaScript:</p>
                    <p className={`${s.div6}  md:w-[286px] xl:w-[510px]  font-condensed text-[15px] font-normal not-italic leading-[22.5px] md:text-lg md:leading-[27px] xl:text-2xl xl:leading-9`}>Expertise in HTML, CSS, and JavaScript: Proficient from basic to advanced levels in these programming languages.</p>
               
                    <p className={`${s.div7} font-ribeye_marrow text-[64px] font-normal not-italic leading-normal`}>1</p>
                    <p className={`${s.div8} w-[220px] font-condensed text-base font-medium not-italic leading-[19.2px] md:text-xl md:font-bold md:leading-6 xl:text-2xl xl:leading-[28.8px]`}>Expertise in HTML, CSS, and JavaScript:</p>
                    <p className={`${s.div9} w-[510px] font-condensed text-[15px] font-normal not-italic leading-[22.5px] md:text-lg md:leading-[27px] xl:text-2xl xl:leading-9`}>Expertise in HTML, CSS, and JavaScript: Proficient from basic to advanced levels in these programming languages.</p>
                
                    <p className={`${s.div10} font-ribeye_marrow text-[64px] font-normal not-italic leading-normal`}>1</p>
                    <p className={`${s.div11} w-[220px]  font-condensed text-base font-medium not-italic leading-[19.2px] md:text-xl md:font-bold md:leading-6 xl:text-2xl xl:leading-[28.8px]`}>Expertise in HTML, CSS, and JavaScript:</p>
                    <p className={`${s.div12} w-[510px]  font-condensed text-[15px] font-normal not-italic leading-[22.5px] md:text-lg md:leading-[27px] xl:text-2xl xl:leading-9`}>Expertise in HTML, CSS, and JavaScript: Proficient from basic to advanced levels in these programming languages.</p>
</ul> */
