"use client";
import React, { ChangeEvent, FC, useState } from "react";
import { inputStyles, labelStyles } from "@/components/Input/inputStyles";

type ClassNameType = {
  input?: InputStylesType;
  label?: LabelStylesType;
};

export type InputStylesType = {
  height: number;
};
export type LabelStylesType = {};

interface IInputProps {
  onChange: (value: string) => void;
  value: string;
  className?: ClassNameType;
  label?: string;
  placeholder?: string;
}

const Input: FC<IInputProps> = ({
  value,
  onChange,
  className,
  label,
  placeholder,
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setFocused(false);
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    onChange(value);
  };

  return (
    <div className={`flex relative w-full `}>
      <input
        id="input"
        className={`${inputStyles({focused})} mobile:h-8 tablet:h-10`}
        value={value}
        onChange={onChangeHandler}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
      <label htmlFor="input" className={labelStyles({ focused })}>
        {label}
      </label>
    </div>
  );
};

export default Input;
