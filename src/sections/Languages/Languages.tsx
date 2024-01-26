import Link from "next/link";
import LanguagesCart from './../../components/LanguagesCart/LanguagesCart';

export default function Languages() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <ul className="flex gap-6">
          <li className="border-[1px] border-solid border-color-primary rounded-[10px]">
            <LanguagesCart />
            {/* <Link href=''>See more</Link> */}
          </li>
        </ul>
      </div>
    </section>
  );
}
