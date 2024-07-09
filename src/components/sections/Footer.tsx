import React from "react";
import { FaHome, FaToolbox } from "react-icons/fa";
import { LogoNavItem, NavItem, NewNavbar } from "./navbar";

export default function Footer() {
  const navArray = [
    {
      href: "/",
      content: "",
      icon: <FaHome />,
    },
    {
      href: "/about",
      content: "About Us",
    },
    {
      href: "/services",
      content: "Services",
    },
    {
      href: "/support",
      content: "Get Help",
      icon: <FaToolbox />,
    },
  ];
  return (
    <footer className="w-full bg-blue-600  text-center h-56">
      Foooter goes here
      <NewNavbar className="bg-slate-300">
        <LogoNavItem href="/">
          <FaHome />
        </LogoNavItem>
        {navArray.map(({ href, content, ...others }, indx) => (
          <NavItem
            className="bg-gray-800"
            href={href}
            key={href + indx}
            {...others}
          >
            {" "}
            {content}
          </NavItem>
        ))}
      </NewNavbar>
    </footer>
  );
}
