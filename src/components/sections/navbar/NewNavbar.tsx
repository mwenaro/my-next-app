import React from "react";

import LogoNavItem from "./LogoNavItem";

interface NewNavbarProps extends React.PropsWithChildren {
  className?: string;
}

const NewNavbar: React.FC<NewNavbarProps> = ({ children, className = "" }) => {
  const [firstChild, ...otherChildren] = React.Children.toArray(children);

  // Verify that the first child is a LogoNavItem
  const isFirstChildLogoNavItem =
    React.isValidElement(firstChild) && firstChild.type === LogoNavItem;

  // console.log(isFirstChildLogoNavItem); // This will log true if the first child is a LogoNavItem, otherwise false

  return (
    <nav
      className={`flex flex-col px-4 md:px-12 py-4  md:flex-row justify-between md:items-center ${className}`}
    >
      {/* logo */}
      {isFirstChildLogoNavItem && firstChild}

      {/* main nav */}
      <ul className={`min-w-fit w-full  gap-2 md:gap-4 flex flex-col md:flex-row items-center ${isFirstChildLogoNavItem? 'md:w-[60%]':''}`}>
        {!isFirstChildLogoNavItem && firstChild}

        {otherChildren}
      </ul>
    </nav>
  );
};

export default NewNavbar;
