import {
  Button as MaterialUIButton,
  ButtonProps as MaterialButtonProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export type ButtonProps = MaterialButtonProps;

// declare module "@mui/material/Button" {
//   interface ButtonPropsVariantOverrides {
//     smallButton: true;
//     primary: true;
//     secondary: true;
//     checkBtn: true;
//     iconBtn: true;
//     type?: string;
//   }
// }

// const MaterialButton = styled(MaterialUIButton)({});

export const Button = ({
  children,
  variant,
  color,
  disabled,
  href,
  onClick,
  startIcon,
  type,
  sx,
  fullWidth,
}: ButtonProps): JSX.Element => (
  <MaterialUIButton
    onClick={onClick}
    variant={variant}
    color={color}
    disabled={disabled}
    href={href}
    startIcon={startIcon}
    type={type}
    sx={sx}
    fullWidth={fullWidth}
  >
    {children}
  </MaterialUIButton>
);
