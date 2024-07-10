"use client";
import React, { FC } from "react";
import Button from "@/components/Button/Button";

interface IFooterProps {
  // define your props here
}

const Footer: FC<IFooterProps> = ({}) => {
  return (
    <div className="flex flex-shrink-0 justify-between items-center w-full z-2 h-16 bg-black text-stone-100 px-2.5">
      <div className="flex gap-2">
        <p>pizzas</p>
        <p>total price</p>
      </div>
      <div>
        <Button pathname="cart">Go to cart</Button>
      </div>
    </div>
  );
};

export default Footer;
