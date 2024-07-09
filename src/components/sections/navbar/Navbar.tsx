import Link from "next/link";
import { FaHome } from "react-icons/fa";
import NavItem from "./NavItem";
import LogoNavItem from "./LogoNavItem";
interface NavbarProps extends React.PropsWithChildren{
className?:string
}

export default function Navbar({children, className=""}:NavbarProps) {
  return (
    <nav className={`flex flex-col px-4 md:px-12 py-4  md:flex-row justify-between md:items-center ${className}`}>
      {/* logo */}
      <LogoNavItem href="/">
        <FaHome />
      </LogoNavItem>

      {/* main nav */}
      <ul className="w-full md:w-fit gap-2 md:gap-4   flex flex-col md:flex-row items-center">
        <NavItem href="/" className="bg-transparent">
          <FaHome className="text-4xl" />
        </NavItem>
        <NavItem href="/todos">Todos</NavItem>
        <NavItem href="/passgen">PassGen</NavItem>
      </ul>
    </nav>
  );
}
