"use client";
import React, { ReactNode, useEffect } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useSelector } from "react-redux";
import { userSelector } from "@/store/slices/userSlice/selectors";
import { useRouter } from "next/navigation";
import {getOrder} from "@/services/apiRestaurant";

interface IComponentsLayoutProps {
  children: ReactNode;
}

const ComponentsLayout: React.FC<IComponentsLayoutProps> = ({ children }) => {
  const user = useSelector(userSelector);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [router, user]);

  useEffect(() => {
      getOrder("AUQ1V4")
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
