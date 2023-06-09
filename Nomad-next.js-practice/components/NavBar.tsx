import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}></a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}></a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
