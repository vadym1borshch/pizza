import { InputStylesType } from "@/components/Input/Input";

export const inputStyles = (params: {
  focused: boolean;
  extStyles?: InputStylesType;
}) => {
  const defaultStyle =
    "w-full rounded-lg " +
    "focus:outline-none  px-1 h-6 text-standard text-[70%] " +
    "border-2 border-solid rounded-lg bg-white";
  const focusedStyle = "focus:border-secondary"
  const blurredStyle = "border-primary"
  return `${defaultStyle} ${params.focused ? focusedStyle : blurredStyle}`;
};

export const labelStyles = (params: { focused: boolean }) => {
  const defaultStyle =
    "absolute h-fit transition-all " +
    "duration-100 ease-in-out text-standard text-[10px] ";
  const focusedStyle =
    "top-0 left-[10px] transform -translate-y-1/2" +
    " text-[8px] bg-inherit px-1 bg-white";
  const blurredStyle =
    "top-1/2 left-[10px] transform -translate-y-1/2 bg-transparent";
  return `${defaultStyle} ${params.focused ? focusedStyle : blurredStyle}`;
};
