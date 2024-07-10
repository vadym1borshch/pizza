"use client";
import React, { FC, Fragment } from "react";
import { IMenuItem } from "@/services/apiRestaurant";
import Image from "next/image";

interface IPizzaProps {
  pizza: IMenuItem;
}

const Pizza: FC<IPizzaProps> = ({ pizza }) => {
  return (
    <div className="w-full h-28 relative border-b-2 border-amber-300 ">
      <div className="flex h-26 gap-2 ">
        <Image src={pizza.imageUrl} alt={pizza.name} width={120} height={100} />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <span>{pizza.name}</span>
            <span className="italic xs:text-[14px] md:text-[16px]">
              {pizza.ingredients.map((ing) => (
                <Fragment key={ing}>{ing + " "}</Fragment>
              ))}
            </span>
          </div>
          <span>{pizza.unitPrice}$</span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Pizza;
