"use client";
import React from "react";
import Button from "@/components/Button/Button";
import {
  CartItemType,
  decrementAction,
  deleteItemAction,
  incrementAction,
} from "@/store/slices/cartSlice/cartSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";

interface ICartItemProps {
  cartItems?: CartItemType[];
  hideButtonsContainer?: boolean
}

const CartItem: React.FC<ICartItemProps> = ({ cartItems , hideButtonsContainer}) => {

  const dispatch = useDispatch<AppDispatch>();
  const incrementItemHandler = (id: number, amount: number) => {
    dispatch(
      incrementAction({
        id,
        amount,
      }),
    );
  };
  const decrementItemHandler = (id: number, amount: number) => {
    dispatch(
      decrementAction({
        id,
        amount,
      }),
    );
  };

  return (
    <>
      {cartItems?.map((item) => {
        return (
          <div
            key={item.id}
            className="flex w-full h-16 border-b-2 border-primary justify-between"
          >
            <div className="flex items-center gap-2">
              <span>{item.quantity} </span>
              <span> x </span>
              <span> {item.itemName}</span>
            </div>
            <div className="flex items-center gap-6 px-2">
              <div className="flex gap-1 w-24">$ {item.amount}.00</div>
              {!hideButtonsContainer &&
                <div className="flex w-full gap-2 justify-center items-end py-2 ">
                  <Button
                    color="primary"
                    onClick={() =>
                      decrementItemHandler(item.id, item.amount / item.quantity)
                    }
                  >
                    -
                  </Button>
                  <Button
                    color="primary"
                    onClick={() =>
                      incrementItemHandler(item.id, item.amount / item.quantity)
                    }
                  >
                    +
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => dispatch(deleteItemAction(item.id))}
                  >
                    delete
                  </Button>
                </div>
              }
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CartItem;
