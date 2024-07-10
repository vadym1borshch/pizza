"use client";
import React, { FC, ReactNode, useCallback } from "react";
import {useRouter} from "next/navigation";


interface IButtonProps {
  children: ReactNode;
  pathname: string;
}

const Button: FC<IButtonProps> = ({ children, pathname }) => {
  const router = useRouter();
  const handleNavigate = useCallback(() => {
    router.push(pathname);
  }, [pathname, router]);
  return <button onClick={handleNavigate}>{children}</button>;
};

export default Button;
