import React, { useState } from "react";
import { RadioInput } from "../ui/RadioInput";

import "./radioBlock.scss";

export const RadioBlock = () => {
  const [difficulty, setDifficulty] = useState("Любая");

  const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setDifficulty(e.target.value);
  };

  const isChecked = (value: string) => difficulty === value;
  return (
    <div className="radio-block">
      <div className="radio-block__title">Сложность приготовления:</div>
      <div className="radio-block__inputs">
        <RadioInput
          id="Любая"
          name="Любая"
          value="Любая"
          text="Любая"
          onChange={handleChange}
          checked={isChecked("Любая")}
        />
        <RadioInput
          id="Низкая"
          name="Низкая"
          value="Низкая"
          text="Низкая"
          onChange={handleChange}
          checked={isChecked("Низкая")}
        />
        <RadioInput
          id="Средняя"
          name="Средняя"
          value="Средняя"
          text="Средняя"
          onChange={handleChange}
          checked={isChecked("Средняя")}
        />
        <RadioInput
          id="Высокая"
          name="Высокая"
          value="Высокая"
          text="Высокая"
          onChange={handleChange}
          checked={isChecked("Высокая")}
          disabled
        />
      </div>
    </div>
  );
};
