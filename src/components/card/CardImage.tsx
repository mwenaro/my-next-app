import React from "react";
interface FooterProps extends React.PropsWithChildren {
  className?: string;
}
export default function CardFooter({ children, className="" }: FooterProps) {
  return <div className={` ${className}`}></div>;
}
