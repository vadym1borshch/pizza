"use client";
import React, { FC } from "react";
import Button from "@/components/Button/Button";
import { useSelector } from "react-redux";
import { cartItemsSelector } from "@/store/slices/cartSlice/selectors";
import { userSelector } from "@/store/slices/userSlice/selectors";

interface IFooterProps {
  // define your props here
}

const Footer: FC<IFooterProps> = ({}) => {
  const cartItems = useSelector(cartItemsSelector);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.amount, 0);
  const user = useSelector(userSelector);

  return (
    <div
      className={`flex flex-shrink-0 ${cartItems.length ? "justify-between" : "justify-end"} items-center w-full z-2 h-16 bg-standard text-white px-2`}
    >
      {cartItems.length > 0 && (
        <div className="flex gap-2 my-4">
          <p>{cartItems.length} pizzas</p>
          <p>$ {totalPrice}.00</p>
        </div>
      )}
      {user && (
        <div>
          <Button pathname="cart">Go to cart</Button>
        </div>
      )}
    </div>
  );
};

export default Footer;
