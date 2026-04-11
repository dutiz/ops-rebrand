"use client";

import Link from "next/link";
import { useState } from "react";
import SVG from "react-inlinesvg";
import content from "@/utils/content.json";
import Image from "next/image";

interface NavItemProps {
  children: string;
  href: string;
  classname: string;
}
const NavItem = ({ children, href, classname }: NavItemProps) => {
  return (
    <li className="w-full md:w-auto">
      <Link
        className={`block font-extrabold mt-2 hover:border-b-2 hover:border-white   py-4 md:py-0 border-b border-gray-200 ${classname} md:border-b-0 md:border-transparent`}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

export default function Navigation() {
  const [menu, setMenu] = useState(false);
  const { navigation } = content;

  return (
    <div
      className="fixed w-full top-0 bg-transparent items-center"
      style={{ zIndex: "99999" }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-row items-center py-6 justify-between">
          <div className="md:w-1/2">
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
            className={`md:w-1/2 md:flex justify-center md:justify-end ${
              menu ? " flex" : " hidden"
            }`}
          >
            <ul
              className={`flex w-full p-5 space-x-10 flex-col md:w-auto md:py-6 px-14 md:flex-row items-center`}
            >
              {navigation.items.map((item, index) => (
                <NavItem key={index} classname="text-white" href={item.href}>
                  {item.name}
                </NavItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
