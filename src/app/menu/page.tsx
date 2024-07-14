"use client";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuSelector } from "@/store/slices/menuSlice/selectors";
import { AppDispatch } from "@/store/store";
import { getMenu } from "@/services/apiRestaurant";
import Pizza from "@/components/Pizza/Pizza";
import {createOrderAction, OrderType} from "@/store/slices/userSlice/userSlice";
import {useRouter} from "next/navigation";

interface IMenuProps {
  // define your props here
}

const Menu: FC<IMenuProps> = ({}) => {
  const menu = useSelector(menuSelector);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    dispatch(getMenu());
    return () => {};
  }, [dispatch]);

  useEffect(() => {
    const order = localStorage.getItem("order")
    if (order) {
      dispatch(createOrderAction(JSON.parse(order) as OrderType))
      router.push("/order/overview");
    }
  }, [dispatch, router]);

  return (
    <div
      className={`flex-1 flex flex-col z-1 sm:text-sm top-26 md:text-[24px]   
                  items-center justify-center gap-2 py-2 px-2 `}
    >
      {menu.map((item) => (
        <Pizza key={item.id} pizza={item} />
      ))}
    </div>
  );
};

export default Menu;
