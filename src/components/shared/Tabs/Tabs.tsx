import React from "react";

interface TabsProps {
  tabsLabels: string[];
  value: number;
  onChange: (newValue: number) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabsLabels,
  value,
  onChange,
  className,
}) => {
  return (
    <div className={`tabs justify-evenly ${className}`}>
      {tabsLabels.map((label, i) => (
        <button
          key={label}
          type="button"
          className={`tab${
            i === value ? " tab-active !border-base-content" : ""
          } border-b-2 border-transparent text-sm`}
          onClick={() => onChange(i)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
