/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";

interface IconInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  Icon: JSX.Element;
}

export const IconInput: React.FC<IconInputProps> = ({ Icon, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <label
      className={`flex items-center gap-2 rounded border border-base-content border-opacity-10 px-2 py-1 transition-all ${
        isFocused ? "!border-opacity-50" : ""
      }`}
    >
      {Icon}
      <input
        className="bg-transparent outline-none placeholder:text-base-content placeholder:text-opacity-50"
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </label>
  );
};
