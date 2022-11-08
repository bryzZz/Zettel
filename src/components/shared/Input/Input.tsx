import { forwardRef } from "react";

import { TextField, TextFieldProps } from "@mui/material";

export const Input = forwardRef(({ ...rest }: TextFieldProps, ref) => {
  return <TextField ref={ref as React.RefObject<HTMLDivElement>} {...rest} />;
});
