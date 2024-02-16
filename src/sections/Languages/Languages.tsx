import Link from "next/link";
import LanguagesCart from './../../components/LanguagesCart/LanguagesCart';
import { languagesList } from './../../utils/Data/languagesList';
import Title from './../../components/Title/Title';

export default function Languages() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex justify-center">
        <Title title={'Languages'}/>
        </div>
        
        <ul className="flex gap-4 mm:gap-6 justify-center">
            {languagesList && languagesList.map(({languages, level, path}, index) => (
              <li key={index} className="flex flex-col gap-[10px] ">
                <LanguagesCart languages={languages} level={level} />
                {path !== '' ? (<Link href={path} className="font-condensed 
                transition duration-500 ease-in-out hover:text-color-btn-secondary focus:text-color-btn-secondary text-color-accent-primary
                text-[15px] font-medium leading-[18px] mm:text-lg mm:leading-[21.6px] xl:text-[20px] xl:leading-6 xl:font-bold underline inline-flex justify-end">See more</Link>) : null}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
