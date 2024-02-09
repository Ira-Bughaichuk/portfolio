export default function ContactsInfo() {
  return (
    <div className="flex flex-col gap-3 mm:flex-row mm:justify-between">
      <address>
        <p className="mb-3 mm:mb-4 font-roboto text-[15px] leading-[18px] font-bold mm:text-2xl mm:leading-[28,8px] xl:text-4xl xl:leading-[43,2px]">
          My contact:
        </p>
        <ul className="flex mm:flex-col mm:gap-4 mm:items-start justify-between items-center font-condensed text-[15px] leading-[22,5px] font-normal mm:text-xl mm:leading-6 xl:text-2xl xl:leading-9">
          <li className="flex flex-col gap-1 mm:flex-row mm:gap-4">
            <p>Phone:</p>
            <a
              href="tell:+380505458794"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="phone"
            >
              +38 050 545 87 94
            </a>
          </li>
          <li className="flex flex-col gap-1 mm:flex-row mm:gap-4">
            <p>E-mail:</p>
            <a
              href="mailto:irynabugaichuk7@gmail.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="email"
            >
              irynabugaichuk7@gmail.com
            </a>
          </li>
        </ul>
      </address>
      <div className="flex justify-between items-center mm:flex-col mm:justify-between">
        <p className="font-roboto text-[15px] font-bold leading-[18px] mm:text-2xl mm:leading-[28,8px] xl:text-4xl xl:leading-[43,2px]">
          I'm on social networks:
        </p>
        <div>icons</div>
      </div>
    </div>
  );
}
