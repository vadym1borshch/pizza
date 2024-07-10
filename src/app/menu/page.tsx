"use client";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuSelector } from "@/store/slices/menuSlice/selectors";
import { AppDispatch } from "@/store/store";
import { getMenu } from "@/services/apiRestaurant";
import Pizza from "@/components/Pizza/Pizza";
import useWindowSize from "@/hooks/useWindowSize";

interface IMenuProps {
  // define your props here
}

const Menu: FC<IMenuProps> = ({}) => {
  const [height, setHeight] = useState<number>(0);
  const menu = useSelector(menuSelector);
  const dispatch = useDispatch<AppDispatch>();
  const { freeHeight } = useWindowSize(128);

  useEffect(() => {
    dispatch(getMenu());
    return () => {};
  }, [dispatch]);
  useEffect(() => {
    setHeight(freeHeight);
    return () => {};
  }, [freeHeight]);

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
