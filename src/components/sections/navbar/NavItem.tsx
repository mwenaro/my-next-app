import Link from "next/link";
import { PropsWithChildren, ReactNode } from "react";

interface NavItemProps extends PropsWithChildren {
  href: string;
  className?: string;
  icon?: ReactNode;
}
export default function NavItem({
  href,
  icon,
  children,
  className = "",
}: NavItemProps) {
  return (
    <li>
      <Link
        className={`w-full flex items-center gap-2 bg-blue-600 px-6 py-2 rounded-md text-white  ${className}`}
        href={href}
      >
        {icon ? icon : ""}
        {children}
      </Link>
    </li>
  );
}

`

`;
