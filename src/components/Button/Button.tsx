"use client";
import React, { FC, ReactNode, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import {ColorsType, TextColorsType} from "@/common/commonTypes";



interface IButtonProps {
  children: ReactNode;
  pathname?: string;
  type?: "back" | "default";
  onClick?: () => void;
  color?: ColorsType
  textColor?: TextColorsType ;
  disabled?: boolean;
}

const Button: FC<IButtonProps> = ({
  children,
  pathname,
  type = "default",
  onClick,
  color,
  textColor ,
    disabled
}) => {
  const router = useRouter();

  const styledColor = useMemo(() => {
    if (disabled) {
      return "text-disabled";
    }
    const applyTextColor = `${textColor ? textColor : `text-white`}`;
    if (color === "primary") {
      return `bg-primary ${applyTextColor}`;
    }
    if (color === "secondary") {
      return `bg-secondary ${applyTextColor}`;
    }
    if (color === "success") {
      return `bg-success ${applyTextColor}`;
    }
    if (color === "info") {
      return `bg-info ${applyTextColor}`;
    }
    if (color === "error") {
      return `bg-error ${applyTextColor}`;
    }
    if (color === "warning") {
      return `bg-warning ${applyTextColor}`;
    }
    return `bg-transparent ${applyTextColor}`;
  }, [disabled, color, textColor]);

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
    if (type === "default") {
      if (!onClick) {
        throw new Error(`add onClickHandler to -!!!${children}!!!- button`);
      }
    }
    onClick && onClick();
  }, [children, onClick, pathname, router, type]);

  return (
    <button
        disabled={disabled || false}
      className={`text-center transition-all duration-200 hover:bg-warning min-w-10 min-h-10 rounded-full px-2 ${styledColor}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;

const buttonStyles = () => {
  return "";
};
