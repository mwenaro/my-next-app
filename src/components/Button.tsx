import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className = "", children, ...others }) => {
  return (
    <button className={`bg-blue-600 text-white rounded-lg py-3 px-6 ml-2 cursor-pointer ${className}`} {...others}>
      {children}
    </button>
  );
};

export default Button;
