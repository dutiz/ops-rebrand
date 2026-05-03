"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SVG from "react-inlinesvg";
import content from "@/utils/content.json";
import Image from "next/image";

interface NavItemProps {
  children: string;
  href: string;
  classname: string;
  style?: React.CSSProperties;
}
const NavItem = ({ children, href, classname, style }: NavItemProps) => {
  return (
    <li className="w-full md:w-auto">
      <Link
        style={style}
        className={`block font-semibold text-xl mt-2 py-4 md:py-0 border-b border-gray-200 md:border-transparent ${classname}`}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

export default function Navigation() {
  const pathname = usePathname();
  const [color, setColor] = useState(false);
  const [menu, setMenu] = useState(false);
  const { navigation } = content;

  function changeColor() {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      // Optional: Add a threshold (e.g., 10px) to prevent flickering
      if (
        direction !== scrollDirection &&
        Math.abs(scrollY - lastScrollY) > 10
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [scrollDirection]);

  return (
    <div
      className={`fixed w-full top-0 ${color ? "bg-white dark:bg-gray-900" : "lg:bg-transparent bg-gray-900"} ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      } items-center`}
      style={{ zIndex: "99999" }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-row items-center py-6 justify-between">
          <div
            className={`${pathname === "/" || pathname === "/licensing" || pathname === "/contact" ? "md:w-3/5" : "md:w-1/3"}`}
          >
            <Link href="/" className="inline-block">
              <Image
                src="/images/layout/logo-nav.png"
                width={75}
                height={36}
                className="w-auto h-9"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="w-1/4 md:hidden block">
            <button
              id="menu-toggle"
              aria-label="Menu Toggle"
              className="cursor-pointer"
            >
              <SVG
                src="/svg/menu.svg"
                className="fill-current text-black w-6 h-6"
                onClick={() => setMenu(!menu)}
              />
            </button>
          </div>

          <div
            className={`${pathname === "/" || pathname === "/licensing" || pathname === "/contact" ? "md:w-3/5" : "md:w-1/3"} md:flex justify-center md:justify-end ${
              menu ? " flex" : " hidden"
            }`}
          >
            <ul
              className={`flex w-full p-5 space-x-10 flex-col md:w-auto md:py-6 px-14 md:flex-row items-center`}
            >
              {navigation.items.slice(0, -1).map((item, index) => (
                <NavItem
                  key={index}
                  classname="text-black dark:text-white animation-border"
                  href={item.href}
                >
                  {item.name}
                </NavItem>
              ))}
            </ul>
          </div>
          <div
            className={`${pathname === "/" || pathname === "/licensing" || pathname === "/contact" ? "md:w-1/4" : "md:w-1/3"} text-end`}
          >
            <ul
              className={`flex w-full p-5 space-x-10 flex-col md:w-auto md:py-6 px-14 md:flex-row items-center justify-end`}
            >
              <NavItem
                classname="inline-block ranimation-border text-black dark:text-white "
                href="/contact"
              >
                Let&apos;s talk
              </NavItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
