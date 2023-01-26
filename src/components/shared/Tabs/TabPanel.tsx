import React from "react";

interface TabPanelProps {
  value: number;
  tabValue: number;
  children?: React.ReactNode;
}

export const TabPanel: React.FC<TabPanelProps> = ({
  value,
  tabValue,
  children,
}) => {
  return <div hidden={value !== tabValue}>{children}</div>;
};
