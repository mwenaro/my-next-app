import Link from "next/link";
import { PropsWithChildren, ReactNode } from "react";

interface LogoNavItemProps extends PropsWithChildren {
  href: string;
  className?: string;
  icon?: ReactNode;
}
export default function LogoNavItem({
  href,
  icon,
  children,
  className = "",
}: LogoNavItemProps) {
  return (
    <Link
      className={`w-full flex   ${className}`}
      href={href}
    >
      {icon ? icon : ""}
      {children ? children : ""}
    </Link>
  );
}
