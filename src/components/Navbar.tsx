import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./svgs/Logo";
import Mazen from "./svgs/Mazen";

const navConfig = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Game Servers",
    href: "/servers",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
];

function Navbar() {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <header className="sticky top-0 z-20 h-[79px] bg-primary-bg">
      <div className="m-auto flex h-full max-w-5xl items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Logo />
            <Mazen />
          </div>
        </Link>
        <ul className="flex gap-[52px]">
          {navConfig.map(({ href, label }) => {
            const isActive = currentRoute === href;
            return (
              <Link
                href={href}
                className={classNames(
                  "cursor-pointer text-[16px] font-bold leading-[19px] drop-shadow-large",
                  {
                    "bg-gradient-to-r from-[#53C2C2] to-[#00945F] bg-clip-text text-transparent":
                      isActive,
                    "text-white": !isActive,
                  }
                )}
                key={label}
              >
                {label}
              </Link>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
