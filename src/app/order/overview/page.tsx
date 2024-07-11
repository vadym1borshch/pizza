"use client";
import React, {useEffect, useMemo, useState} from "react";
import Button from "@/components/Button/Button";
import CartItem from "@/app/cart/CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsSelector } from "@/store/slices/cartSlice/selectors";
import { orderSelector } from "@/store/slices/userSlice/selectors";
import { AppDispatch } from "@/store/store";
import { changeOrderPriorityAction } from "@/store/slices/userSlice/userSlice";

interface IOverviewProps {
  // define your props here
}

const Overview: React.FC<IOverviewProps> = ({}) => {
  const cartItems = useSelector(cartItemsSelector);
  const order = useSelector(orderSelector);
  const dispatch = useDispatch<AppDispatch>();
  const [priority, setPriority] = useState(false);

  const toPay = useMemo(() => {
    if (order!.priority) {
      return `${order!.orderPrice}$ + ${order!.priorityPrice}$ = ${order!.orderPrice + order!.priorityPrice}$`
    }
    return `${order!.orderPrice}$`
  },[order])

  useEffect(() => {
    if (priority) {
      dispatch(changeOrderPriorityAction(priority));
    }
    return () => {
      setPriority(false);
    };
  }, [dispatch, priority]);



  if (!order) return null;

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="flex justify-between h-20 items-center mx-6">
        <h1>order id status</h1>
        <div className="flex gap-4">
          {order!.priority &&
            <span className="bg-error p-2 rounded-full text-white font-bold">
              PRIORITY
            </span>
          }
          <span className="bg-success p-2 rounded-full text-white font-bold">
            PREPARING ORDER
          </span>
        </div>
      </div>
      <div className="flex flex-col h-full gap-4 ">
        <div className="flex justify-between h-20 bg-light rounded mx-6 text-standard items-center px-4">
          <h2>Oly 48 min left</h2>
          <span>estimate delivery</span>
        </div>
        <div className="flex-grow overflow-auto mx-6">
          <div className="flex-grow flex flex-col overflow-auto mx-2">
            <CartItem cartItems={cartItems} hideButtonsContainer />
          </div>
        </div>
        <div className="flex flex-col h-20 bg-light rounded mx-6 my-6 text-standard items-start justify-center px-4 gap-2">
          <span>price pizza: {order!.orderPrice}</span>
          <span className="font-bold">
            To pay o delivery: {toPay}
          </span>
        </div>
      </div>

      {!order!.priority && (
        <div className="flex justify-end h-20 items-center mx-6 font-bold">
          <Button
            color="primary"
            textColor="text-standard"
            onClick={() => setPriority(true)}
          >
            MAKE PRIORITY
          </Button>
        </div>
      )}
    </div>
  );
};

export default Overview;
