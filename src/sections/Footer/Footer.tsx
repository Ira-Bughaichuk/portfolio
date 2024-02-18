import Hash from '../../../public/icons/hashtag.svg';

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="font-roboto flex items-center justify-center gap-[10px] xl:gap-[20px] text-color-secondary mb-5 mm:mb-3 xl:mb-6 text-xl leading-6 font-bold mm:text-2xl mm:leading-[28.8px]">
            <Hash
            width={24}
            height={24}
            className="w-5 h-5 mm:w-[24px] mm:h-[24px]"
          />
          <p>Iryna Buhaichuk</p>
        </div>
        <div className='w-full flex justify-center'>
        <p className="font-condensed text-center w-[238px]  mm:w-full text-color-secondary mb-5 mm:mb-3 xl:mb-6 text-[13px] leading-[19.5px] font-normal mm:text-[15px] mm:leading-[22.5px] xl:text-xl xl:leading-6">Where innovation meets imagination - I transform lines of code into user experiences</p>
        </div>
        <p className="font-condensed text-center text-color-secondary text-sm font-light leading-[16.8px] mm:text-[15px] mm:leading-[22.5px] md:font-normal xl:text-xl xl:leading-6">&copy; Iryna Buhaichuk 2024</p>
      </div>
    </footer>
  );
}
