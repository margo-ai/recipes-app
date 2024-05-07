import React, { ChangeEvent } from "react";

import "./radioInput.scss";

type Props = {
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  text: string;
};

export const RadioInput = ({ id, name, value, onChange, checked, text }: Props) => {
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
      />
      <span className="radio-button__custom">{text}</span>
    </label>
  );
};
