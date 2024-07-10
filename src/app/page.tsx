"use client";
import { FC, useState } from "react";
import Input from "@/components/Input/Input";

const Home: FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex-1 h-full sm:text-sm md:text-[24px]  flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col text-center gap-1">
        <span>The best pizza</span>
        <span className="text-amber-500">
          Straight out of the oven, straight to you
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <span>Welcome! Please start by telling us your name:</span>
        <Input onChange={setQuery} value={query} label="Your full name" />
      </div>
    </div>
  );
};

export default Home;
