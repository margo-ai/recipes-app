import React, { ChangeEvent } from "react";

import "./radioInput.scss";

type Props = {
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  text: string;
  disabled?: boolean;
};

export const RadioInput = ({ id, name, value, onChange, checked, text, disabled = false }: Props) => {
  return (
    <label htmlFor={id} className="radio-button">
      <input
        type="radio"
        className="radio-button__input"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
      <span className="radio-button__custom">{text}</span>
    </label>
  );
};
