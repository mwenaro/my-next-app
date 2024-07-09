import React from "react";
import { LogoNavItem, Navbar, NavItem, NewNavbar } from "./navbar";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full mb-12  bg-slate-600 text-white text h-fit">
      {/* site title & tagline */}
      <div>
        <h1 className="text-xl md:text-3xl lg:text-4xl px-4 py-2">
          Our Lovely Stite
        </h1>
        <p className="text-sm md:text-base lg:text-lg md:text-right px-4 py-2 leading-6">
          The mother of all beautiful sites
        </p>
      </div>

      {/* New NavBar */}
      <NewNavbar>
        <LogoNavItem href="/">
          <FaHome />
        </LogoNavItem>
        <NavItem href="/">Nyumba</NavItem>
        <NavItem href="/todos">Todos</NavItem>
        <NavItem href="/contact">Contact</NavItem>
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
      </NewNavbar>
    </header>
  );
}
