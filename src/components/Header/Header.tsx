"use client";
import React, { FC, useState } from "react";
import Input from "@/components/Input/Input";

interface IHeaderProps {
  // define your props here
}

const Header: FC<IHeaderProps> = ({}) => {
  const [query, setQuery] = useState("");
  return (
    <div className="flex flex-shrink-0 items-center w-full z-2 justify-between p-2 bg-primary h-16">
      <div>Fast Pizza Co.</div>
      <div className="flex w-[200px]">
        <Input onChange={setQuery} value={query} placeholder="Search order #" />
        <div></div>
      </div>
    </div>
  );
};

export default Header;
