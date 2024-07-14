"use client";
import React, { useId, useState } from "react";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "@/store/slices/userSlice/selectors";
import Checkbox from "@/components/Checkbox/Checkbox";
import { AppDispatch } from "@/store/store";
import {
  createOrderAction,
  OrderType,
} from "@/store/slices/userSlice/userSlice";
import { cartItemsSelector } from "@/store/slices/cartSlice/selectors";

interface IOrderProps {
  // define your props here
}

const Order: React.FC<IOrderProps> = ({}) => {
  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [priority, setPriority] = useState(false);
  const user = useSelector(userSelector);
  const pizzas = useSelector(cartItemsSelector);
  const id = useId();
  const dispatch = useDispatch<AppDispatch>();

  const createOrderHandler = () => {
    const price = pizzas.reduce((acc, el) => acc + el.amount, 0);
    const priorityPr = Number((price * 0.2).toFixed(1));

    const newOrder: OrderType = {
      cart: pizzas,
      id: id,
      customer: user!.name,
      estimatedDelivery: new Date().toLocaleDateString(),
      orderPrice: price,
      priority: priority,
      status: "in process",
      priorityPrice: priorityPr,
    };
    dispatch(createOrderAction(newOrder));
    localStorage.setItem('order', JSON.stringify({
      ...newOrder
    }));
  };
  return (
    <div className="w-[50%] flex flex-col h-full">
      <form
        className="flex flex-col h-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-1 flex-col gap-4 items-start h-full px-6 py-4">
          <h2>Ready to order? Let`s go!</h2>
          <Input
            label="First name"
            onChange={() => {}}
            value={user ? user.name : ""}
          />
          <Input label="Phone number" onChange={setPhoneNum} value={phoneNum} />
          <Input label="Adress" onChange={setAddress} value={address} />
          <span>error</span>
          <Checkbox value={priority} onChange={setPriority} />
        </div>

        <div className="px-6 py-4">
          <Button
            pathname={"order/overview"}
            textColor="text-standard"
            color="primary"
            onClick={createOrderHandler}
          >
            PLACING ORDER...
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Order;
