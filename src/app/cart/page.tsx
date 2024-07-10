"use client";
import React, { FC } from "react";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

interface ICartProps {
  // define your props here
}

const Page: FC<ICartProps> = ({}) => {
  return (
    <div
      className="flex-1 h-full relative flex flex-col
                 items-start justify-start gap-8"
    >
      <div className="flex flex-shrink-0 m-2">
        <Button type="back">Back to menu</Button>
      </div>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-auto">
        <h3 className="flex-shrink-0 mx-2">Your cart, %NAME%</h3>
        <div className="flex-grow flex flex-col overflow-auto mx-2">
          <div className="flex flex-col w-full h-16 justify-center border-b-2 border-amber-300">
            <div>
              <span>x Items</span>
              <span>name pizza</span>
            </div>
            <span> total price</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 flex-shrink-0 m-2">
        <Button>order pizzas</Button>
        <Button>Clear cart</Button>
      </div>
    </div>
  );
};

export default Page;
