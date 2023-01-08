/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import React from "react";

import * as Icons from "assets/icons";

export type IconType = "newNote";

export interface IconProps {
  type: IconType;
  color?: string;
  stroke?: string;
  width?: number | string;
  height?: number | string;
  onClick?: () => void;
  sizeSquareIcon?: number | string;
}

type IIcon = {
  [key in IconType]: React.ReactElement;
};

export const Icon = ({
  type,
  color,
  stroke,
  onClick,
  width,
  height,
  sizeSquareIcon,
}: IconProps): JSX.Element => {
  const defaultProps = {
    stroke,
    color,
    onClick,
    width: width || sizeSquareIcon,
    height: height || sizeSquareIcon,
  };

  const icon: IIcon = {
    newNote: <Icons.NewNote {...defaultProps} />,
  };

  return icon[type];
};
