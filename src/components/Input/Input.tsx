"use client";
import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useId,
  useState,
} from "react";
import { inputStyles, labelStyles } from "@/components/Input/inputStyles";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { setUserAction } from "@/store/slices/userSlice/userSlice";
import { useRouter } from "next/navigation";

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
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const id = useId();
  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() == "enter") {
      dispatch(setUserAction({ id: id, name: value }));
      router.push("/menu");
      return;
    }
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (value) return
    setFocused(false);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    onChange(value);
  };

  useEffect(() => {
    if (value) {
      handleFocus();
    }
    return () => {
      handleBlur();
    };
  }, [value]);

  return (
    <div className={`flex relative w-full `}>
      <input
        id="input"
        className={`${inputStyles({ focused })} mobile:h-8 tablet:h-10 `}
        value={value}
        onChange={onChangeHandler}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        onKeyDown={onKeyDownHandler}
      />
      <label htmlFor="input" className={labelStyles({ focused })}>
        {label}
      </label>
    </div>
  );
};

export default Input;
