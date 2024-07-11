"use client";
import React, { FC, Fragment, useCallback } from "react";
import { IMenuItem } from "@/services/apiRestaurant";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsSelector } from "@/store/slices/cartSlice/selectors";
import {
  addToCartAction,
  CartItemType,
  decrementAction,
  deleteItemAction,
  incrementAction,
} from "@/store/slices/cartSlice/cartSlice";
import { AppDispatch } from "@/store/store";
import useWindowSize from "@/hooks/useWindowSize";

interface IPizzaProps {
  pizza: IMenuItem;
}

const Pizza: FC<IPizzaProps> = ({ pizza }) => {
  const cartItems = useSelector(cartItemsSelector);
  const isAddedToCart = cartItems.find((el) => el.id === pizza.id);
  const dispatch = useDispatch<AppDispatch>();

  const totalItems =
    isAddedToCart && isAddedToCart.quantity > 1
      ? isAddedToCart.quantity
      : 1;


  const addToCartHandler = () => {
    const item: CartItemType = {
      id: pizza.id,
      itemName: pizza.name,
      amount: pizza.unitPrice,
      quantity: 1,
      unitPrice: pizza.unitPrice,
    };
    dispatch(addToCartAction(item));
  };

  const incrementItemHandler = () => {
    dispatch(
      incrementAction({
        id: pizza.id,
        amount: pizza.unitPrice,
      }),
    );
  };
  const decrementItemHandler = () => {
    dispatch(
      decrementAction({
        id: pizza.id,
        amount: pizza.unitPrice,
      }),
    );
  };

  return (
    <div className="w-full flex h-28 relative border-b-2 border-primary ">
      <div className="flex h-26 gap-2 ">
        <Image
          className="w-auto h-auto"
          src={pizza.imageUrl}
          alt={pizza.name}
          width={90}
          height={100}
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <span>{pizza.name}</span>
            <span className="italic xs:text-[14px] md:text-[16px]">
              {pizza.ingredients.map((ing) => (
                <Fragment key={ing}>{ing + " "}</Fragment>
              ))}
            </span>
          </div>
          <span>
            {totalItems} x {pizza.unitPrice}$
          </span>
        </div>
        <div className="absolute right-0 w-40 h-full">
          <div className="flex w-full h-full gap-2 justify-center items-end py-2 ">
            {!isAddedToCart ? (
              <Button onClick={addToCartHandler} color="primary">
                Add to cart
              </Button>
            ) : (
              <>
                <Button color="primary" onClick={decrementItemHandler}>
                  -
                </Button>
                <Button color="primary" onClick={incrementItemHandler}>
                  +
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
