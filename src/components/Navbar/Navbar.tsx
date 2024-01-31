import NavLink from "./../NavLink/NavLink";
import { navLinks } from './../../utils/Data/navLink';


export default function Navbar() {
  return (
    <nav className="hidden xl:block " id="navbar">
      <ul className="flex flex-col gap-6 xl:flex-row xl:gap-5">
        {navLinks.map(({ path, title }, index) => (
          <li key={index}><NavLink path={path} title={title}/></li>
        ))}
      </ul>
    </nav>
  );
}

