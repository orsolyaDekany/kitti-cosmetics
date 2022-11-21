import Link from "next/link";

function Header() {
  return (
    <>
      <Link href="/fooldal">Főoldal</Link>
      <Link href="/sminktetovalasrol">Sminktetoválásról</Link>
      <Link href="/munkaim">Munkáim</Link>
      <Link href="/arlista">Árlista</Link>
      <Link href="/kapcsolat">Kapcsolat</Link>
    </>
  );
}
export default Header;
