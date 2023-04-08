import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./svgs/Logo";

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
    <header className="sticky top-0 z-20 h-[99px] bg-primary-bg">
      <div className="m-auto flex h-full max-w-7xl items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Logo />
            <svg
              width="156"
              height="28"
              viewBox="0 0 156 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.679 25.3598V2.47006C32.679 1.80732 32.1418 1.27006 31.479 1.27006H2.34166C1.67892 1.27006 1.14166 1.80732 1.14166 2.47006V25.3598C1.14166 26.0226 1.67892 26.5598 2.34166 26.5598H6.95572C7.61846 26.5598 8.15572 26.0226 8.15572 25.3598V8.48411C8.15572 8.37366 8.24526 8.28411 8.35572 8.28411H13.2033C13.3138 8.28411 13.4033 8.37366 13.4033 8.48411V25.3598C13.4033 26.0226 13.9406 26.5598 14.6033 26.5598H19.2174C19.8801 26.5598 20.4174 26.0226 20.4174 25.3598V8.48411C20.4174 8.37365 20.5069 8.28411 20.6174 8.28411H25.2314C25.3419 8.28411 25.4314 8.37366 25.4314 8.48411V25.3598C25.4314 26.0226 25.9687 26.5598 26.6314 26.5598H31.479C32.1418 26.5598 32.679 26.0226 32.679 25.3598ZM63.5001 25.3014V2.41167C63.5001 1.74893 62.9629 1.21167 62.3001 1.21167H39.1768C38.5141 1.21167 37.9768 1.74893 37.9768 2.41167V6.73378C37.9768 7.39652 38.5141 7.93378 39.1768 7.93378H56.0525C56.163 7.93378 56.2525 8.02332 56.2525 8.13378V10.7042C56.2525 10.8147 56.163 10.9042 56.0525 10.9042H39.1768C38.5141 10.9042 37.9768 11.4415 37.9768 12.1042V25.3014C37.9768 25.9642 38.5141 26.5014 39.1768 26.5014H62.3001C62.9629 26.5014 63.5001 25.9642 63.5001 25.3014ZM56.2525 17.0673V19.8713C56.2525 19.9817 56.163 20.0713 56.0525 20.0713H45.4244C45.314 20.0713 45.2244 19.9817 45.2244 19.8713V17.0673C45.2244 16.9568 45.314 16.8673 45.4244 16.8673H56.0525C56.163 16.8673 56.2525 16.9568 56.2525 17.0673ZM94.1201 5.7425V2.41167C94.1201 1.74893 93.5828 1.21167 92.9201 1.21167H69.8552C69.1924 1.21167 68.6552 1.74893 68.6552 2.41167V7.02572C68.6552 7.68846 69.1924 8.22572 69.8552 8.22572H81.4202C81.5983 8.22572 81.6876 8.44115 81.5616 8.56714L69.0066 21.1221C68.7816 21.3471 68.6552 21.6524 68.6552 21.9706V25.3014C68.6552 25.9642 69.1924 26.5014 69.8552 26.5014H92.9201C93.5828 26.5014 94.1201 25.9642 94.1201 25.3014V20.6874C94.1201 20.0246 93.5828 19.4874 92.9201 19.4874H81.3551C81.1769 19.4874 81.0877 19.272 81.2137 19.146L93.7686 6.59102C93.9937 6.36598 94.1201 6.06076 94.1201 5.7425ZM123.711 1.21167H100.588C99.925 1.21167 99.3878 1.74893 99.3878 2.41167V25.3014C99.3878 25.9642 99.925 26.5014 100.588 26.5014H123.711C124.374 26.5014 124.911 25.9642 124.911 25.3014V20.9793C124.911 20.3166 124.374 19.7793 123.711 19.7793H106.835C106.725 19.7793 106.635 19.6898 106.635 19.5793V17.0089C106.635 16.8984 106.725 16.8089 106.835 16.8089H123.711C124.374 16.8089 124.911 16.2716 124.911 15.6089V2.41167C124.911 1.74893 124.374 1.21167 123.711 1.21167ZM117.463 10.8458H106.835C106.725 10.8458 106.635 10.7563 106.635 10.6458V7.84184C106.635 7.73138 106.725 7.64184 106.835 7.64184H117.463C117.574 7.64184 117.663 7.73138 117.663 7.84184V10.6458C117.663 10.7563 117.574 10.8458 117.463 10.8458ZM155.24 25.3598V2.47006C155.24 1.80732 154.703 1.27006 154.04 1.27006H131.151C130.488 1.27006 129.951 1.80732 129.951 2.47006V25.3598C129.951 26.0226 130.488 26.5598 131.151 26.5598H135.765C136.427 26.5598 136.965 26.0226 136.965 25.3598V8.48411C136.965 8.37365 137.054 8.28411 137.165 8.28411H148.026C148.137 8.28411 148.226 8.37366 148.226 8.48411V25.3598C148.226 26.0226 148.764 26.5598 149.426 26.5598H154.04C154.703 26.5598 155.24 26.0226 155.24 25.3598Z"
                fill="url(#paint0_linear_0_236)"
                stroke="black"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_236"
                  x1="1.64166"
                  y1="-9.94018"
                  x2="49.3237"
                  y2="91.2886"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#53C2C2" />
                  <stop offset="1" stop-color="#00945F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Link>
        <ul className="flex gap-[52px]">
          {navConfig.map(({ href, label }) => {
            const isActive = currentRoute === href;
            return (
              <Link
                href={href}
                className={classNames("cursor-pointer text-xl font-bold", {
                  "bg-gradient-to-r from-[#53C2C2] to-[#00945F] bg-clip-text text-transparent":
                    isActive,
                  "text-white": !isActive,
                })}
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
