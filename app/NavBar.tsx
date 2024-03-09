"use client";
import React from "react";
import { PiGithubLogoFill } from "react-icons/pi";
import Link from "next/link";
import SearchInput from "./components/SearchInput";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "About me", href: "/about-me" },
    { label: "instagram", href: "https://www.instagram.com/henrqaz/" },
  ];
  console.log(currentPath);

  return (
    <nav className="flex space-x-6 broder-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <PiGithubLogoFill />
      </Link>
      <Link href="/">My Blog</Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classNames({
              "text-zinc-950": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-800 transition-colors": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <SearchInput />
    </nav>
  );
};

export default NavBar;
