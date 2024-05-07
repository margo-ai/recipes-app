import React, { ChangeEvent } from "react";

import "./select.scss";

type Props = {
  label: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = ({ label, value, options, onChange }: Props) => {
  return (
    <div className="select">
      <label htmlFor="select">{label}</label>
      <select id="select" value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};
