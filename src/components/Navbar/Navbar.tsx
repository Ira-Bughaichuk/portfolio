import NavLink from "./../NavLink/NavLink";
import { navLinks } from './../../utils/Data/navLink';


export default function Navbar() {
  return (
    <nav className="hidden md:block " id="navbar">
      <ul className="flex flex-col gap-6 md:flex-row md:gap-5">
        {navLinks.map(({ path, title }, index) => (
          <li key={index}><NavLink path={path} title={title}/></li>
        ))}
      </ul>
    </nav>
  );
}

