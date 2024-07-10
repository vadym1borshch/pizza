"use client";
import React, { FC } from "react";
import Input from "@/components/Input/Input";

interface ICartProps {
  // define your props here
}

const Page: FC<ICartProps> = ({}) => {
  return (
    <div
      className="flex-1 h-full 
     sm:text-sm md:text-[24px] flex flex-col
     items-center justify-center gap-8"
    >
      cart
    </div>
  );
};

export default Page;
