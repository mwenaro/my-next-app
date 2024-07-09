import React from "react";
interface HeaderProps extends React.PropsWithChildren {
  className?: string;
}
export default function CardHeader({ children, className = "" }: HeaderProps) {
  return <div className={` ${className}`}>{children}</div>;
}
