import React, { ChangeEvent } from "react";

import { RadioInput } from "../../../shared/ui/radioInput";

import { useAppDispatch, useAppSelector } from "src/shared/lib/hooks/hooks";
import { setSelectedDifficulty } from "../model/recipeDifficultySlice";
import { setCurrentPage } from "../../../shared/model/reducers";

import "./RecipeDifficultyRadio.scss";

export const RecipeDifficultyRadio = () => {
  const dispatch = useAppDispatch();

  const selectedDifficulty = useAppSelector((state) => state.recipeDifficultyReducer.selectedDifficulty);

  const handleChangeDifficulty = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCurrentPage(1));
    dispatch(setSelectedDifficulty(e.target.value));
  };

  const isChecked = (value: string) => selectedDifficulty === value;

  return (
    <div className="radio-block">
      <div className="radio-block__title">Сложность приготовления:</div>
      <div className="radio-block__inputs">
        <RadioInput
          id="Any"
          name="Any"
          value="Any"
          text="Any"
          onChange={handleChangeDifficulty}
          checked={isChecked("Any")}
        />
        <RadioInput
          id="Easy"
          name="Easy"
          value="Easy"
          text="Easy"
          onChange={handleChangeDifficulty}
          checked={isChecked("Easy")}
        />
        <RadioInput
          id="Medium"
          name="Medium"
          value="Medium"
          text="Medium"
          onChange={handleChangeDifficulty}
          checked={isChecked("Medium")}
        />
        <RadioInput
          id="Hard"
          name="Hard"
          value="Hard"
          text="Hard"
          onChange={handleChangeDifficulty}
          checked={isChecked("Hard")}
        />
      </div>
    </div>
  );
};
