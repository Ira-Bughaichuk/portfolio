import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/" alt="Home">
          Iryna Buhaichuk
        </Link>
        <nav></nav>
      </div>
    </header>
  );
}
