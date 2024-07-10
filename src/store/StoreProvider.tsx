"use client";
import React, { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";

interface IStoreProviderProps {
  children: ReactNode;
}

const StoreProvider: FC<IStoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
