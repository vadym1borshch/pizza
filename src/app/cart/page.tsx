"use client";
import React, {FC} from "react";
import Button from "@/components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsSelector } from "@/store/slices/cartSlice/selectors";
import {
  clearCartAction,
} from "@/store/slices/cartSlice/cartSlice";
import { AppDispatch } from "@/store/store";
import CartItem from "@/app/cart/CartItem/CartItem";
import {userSelector} from "@/store/slices/userSlice/selectors";
import {useRouter} from "next/navigation";

interface ICartProps {

}

const Cart: FC<ICartProps> = ({}) => {
  const cartItems = useSelector(cartItemsSelector);
  const user = useSelector(userSelector)
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  return (
    <div
      className="flex-1 h-full relative flex flex-col
                 items-start justify-start gap-8"
    >
      <div className="flex flex-shrink-0 m-2">
        <Button textColor="text-secondary" pathname="menu">
          Back to menu
        </Button>
      </div>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-auto">
        <h3 className="flex-shrink-0 mx-2">Your cart, {user?.name}</h3>
        {cartItems.length ? (
          <>
            <div className="flex-grow flex flex-col overflow-auto mx-2">
              <CartItem cartItems={cartItems} />
            </div>

            <div className="flex gap-2 flex-shrink-0 m-2">
              <Button color="primary" onClick={()=> router.push("/order")}>order pizzas</Button>
              <Button
                textColor="text-secondary"
                disabled={cartItems.length === 0}
                onClick={() => {
                  dispatch(clearCartAction());
                }}
              >
                Clear cart
              </Button>
            </div>
          </>
        ) : (
          <div className="flex w-full h-full justify-center items-center">add pizzas to cart</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
