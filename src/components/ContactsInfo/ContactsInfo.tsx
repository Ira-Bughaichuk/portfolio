
export default function ContactsInfo() {
  return (
      <address>
        <p className="font-roboto not-italic mb-3 mm:mb-4 text-[15px] leading-[18px] font-bold mm:text-2xl mm:leading-[28,8px] xl:text-4xl xl:leading-[43,2px]">
          My contact:
        </p>
        <ul className="not-italic flex mm:flex-col mm:gap-4 mm:items-start justify-between items-center font-condensed text-[15px] leading-[22,5px] font-normal mm:text-xl mm:leading-6 xl:text-2xl xl:leading-9">
          <li className="flex flex-col gap-1 mm:flex-row mm:gap-4 transition duration-500 ease-in-out group cursor-pointer">
            <p>Phone:</p>
            <a
              href="tell:+380505458794"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="phone"
              className="group-hover:text-color-btn-extra group-focus:text-color-btn-secondary"
            >
              +38 050 545 87 94
            </a>
          </li>
          <li className="flex flex-col gap-1 mm:flex-row mm:gap-4 transition duration-500 ease-in-out group cursor-pointer">
            <p>E-mail:</p>
            <a
              href="mailto:irynabugaichuk7@gmail.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="email"
              className="group-hover:text-color-btn-extra group-focus:text-color-btn-secondary"
            >
              irynabugaichuk7@gmail.com
            </a>
          </li>
        </ul>
      </address>
  );
}
