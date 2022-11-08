import { forwardRef, FocusEvent, KeyboardEvent } from "react";

import { TextFieldProps } from "@mui/material";

import { Input } from "components/shared";

export const TrimInput = forwardRef(
  ({ onBlur, onKeyPress, ...rest }: TextFieldProps, ref) => {
    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      e.target.value = e.target.value.trim();
      onBlur?.(e);
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.code === "Enter") {
        (e.target as HTMLInputElement).value = (
          e.target as HTMLInputElement
        ).value.trim();
      }
      onKeyPress?.(e);
    };

    return (
      <Input
        ref={ref}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
        {...rest}
      />
    );
  }
);
