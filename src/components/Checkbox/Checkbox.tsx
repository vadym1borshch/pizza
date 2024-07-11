"use client";
import React from "react";

interface ICheckboxProps {
 value: boolean;
 onChange: (value: boolean) => void;
}

const Checkbox: React.FC<ICheckboxProps> = ({value, onChange}) => {
  return (
    <div className="flex gap-4 justify-center ">
      <input
        className="appearance-none w-6 h-6 border-2 relative
                 border- rounded-md
                 checked:bg-primary checked:border-secondary
                  focus:outline-none transition-colors
                  checked:after:content-['✔']
                  checked:after:text-white
                  checked:after:absolute checked:after:top-1/2
                  checked:after:left-1/2 checked:after:transform
                  checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
        type="checkbox"
        checked={value}
        onChange={(e) => {
          onChange(e.currentTarget.checked);
        }}
      />
      <span>Want to you give order priority?</span>
    </div>
  );
};

export default Checkbox;
