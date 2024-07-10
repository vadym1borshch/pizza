"use client";
import React, { FC, ReactNode, useCallback } from "react";
import { useRouter } from "next/navigation";

interface IButtonProps {
  children: ReactNode;
  pathname?: string;
  type?: "back" | "default";
  onClick?: () => void;
  styled?: ""
}

const Button: FC<IButtonProps> = ({ children, pathname, type = "default", onClick }) => {
  const router = useRouter();
  const handleClick = useCallback(() => {
    if (type === "back") {
      router.back();
      onClick && onClick();
      return;
    }
    if (pathname) {
      router.push(pathname);
      onClick && onClick();
      return;
    }
    onClick && onClick();
  }, [onClick, pathname, router, type]);
  return <button className="bg-amber-400 text-center w-28 h-10 rounded-full text-white" onClick={handleClick}>{children}</button>;
};

export default Button;


const buttonStyles = () => {
  return ""
}