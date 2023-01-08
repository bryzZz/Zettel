import {
  Button as MaterialUIButton,
  ButtonProps as MaterialButtonProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export type ButtonProps = MaterialButtonProps;

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    iconBtn: true;
  }
}

const MaterialButton = styled(MaterialUIButton)({});

export const Button = (props: ButtonProps): JSX.Element => (
  <MaterialButton {...props} />
);
