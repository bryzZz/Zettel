import React from "react";

interface TabsProps {
  tabsLabels: string[];
  value: number;
  onChange: (newValue: number) => void;
}

export const Tabs: React.FC<TabsProps> = ({ tabsLabels, value, onChange }) => {
  return (
    <div className="tabs">
      {tabsLabels.map((label, i) => (
        <button
          key={label}
          type="button"
          className={`tab${i === value ? " tab-active" : ""} grow`}
          onClick={() => onChange(i)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
