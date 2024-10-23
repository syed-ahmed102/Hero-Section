import Link from "next/link";

function Header() {
  return (
    <ul className="bg-red-600 flex justify-center gap-4 text-sm px-4">
      <Link href="/">
        <li>Home</li>
      </Link>
      <Link href="/apply">
        <li>Apply</li>
      </Link>
      <Link href="/jobs">
        <li>jobs</li>
      </Link>
      <Link href="/result">
        <li>result</li>
      </Link>
      <Link href="/course">
        <li>course</li>
      </Link>
     
    </ul>
  );
}

export default Header;