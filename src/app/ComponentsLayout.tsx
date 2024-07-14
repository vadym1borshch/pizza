"use client";
import React, { ReactNode, useEffect } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {useDispatch} from "react-redux";
import { useRouter } from "next/navigation";
import { getOrder } from "@/services/apiRestaurant";
import {AppDispatch} from "@/store/store";
import {setUserAction, UserType} from "@/store/slices/userSlice/userSlice";

interface IComponentsLayoutProps {
  children: ReactNode;
}

const ComponentsLayout: React.FC<IComponentsLayoutProps> = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(setUserAction(JSON.parse(user) as UserType));
      router.push("/menu");
    }
    if (!user) {
      router.push("/");
    }
  }, [dispatch, router]);

  useEffect(() => {
    getOrder("AUQ1V4");
  }, []);


  return (
    <div className="h-screen flex flex-col z-0 ">
      <Header />
      <div className="flex-grow overflow-auto bg-white">{children}</div>
      <Footer />
    </div>
  );
};

export default ComponentsLayout;
