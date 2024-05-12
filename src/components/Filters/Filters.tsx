import React, { ChangeEvent } from "react";
import { Select } from "antd";

import arrowDown from "../../assets/arrow-down.svg";

import "./filters.scss";

import { cuisines, mealTypes } from "../../utils/constants";
import { RadioBlock } from "../RadioBlock";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import {
  setSelectedCuisine,
  setSelectedMealType,
  setSelectedDifficulty,
  setCurrentPage,
} from "../../features/recipes/recipesSlice";

export const Filters = () => {
  const dispatch = useAppDispatch();

  const selectedCuisine = useAppSelector((state) => state.recipesReducer.selectedCuisine);
  const selectedMealType = useAppSelector((state) => state.recipesReducer.selectedMealType);
  const selectedDifficulty = useAppSelector((state) => state.recipesReducer.selectedDifficulty);

  const handleChangeCuisine = (value: string) => {
    dispatch(setCurrentPage(1));
    dispatch(setSelectedCuisine(value));
  };

  const handleChangeMealType = (value: string) => {
    dispatch(setCurrentPage(1));
    dispatch(setSelectedMealType(value));
  };

  const handleChangeDifficulty = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCurrentPage(1));
    dispatch(setSelectedDifficulty(e.target.value));
  };

  const handleResetButton = () => {
    dispatch(setSelectedCuisine("All countries and regions"));
    dispatch(setSelectedMealType("All meal types"));
    dispatch(setSelectedDifficulty("Any"));
  };

  return (
    <div className="filters">
      <div className="select">
        <span className="select__label">Кухня:</span>
        <Select
          suffixIcon={<img src={arrowDown} alt="Arrow down icon" width="10px" height="11.25px" />}
          className="select__block"
          value={selectedCuisine}
          onChange={handleChangeCuisine}
          options={cuisines.map((item) => ({
            label: item,
            value: item,
          }))}
        />
      </div>
      <div className="select">
        <span className="select__label">Тип блюда:</span>
        <Select
          suffixIcon={<img src={arrowDown} alt="Arrow down icon" width="10px" height="11.25px" />}
          className="select__block"
          value={selectedMealType}
          onChange={handleChangeMealType}
          options={mealTypes.map((item) => ({
            label: item,
            value: item,
          }))}
        />
      </div>
      <RadioBlock difficulty={selectedDifficulty} handleChangeDifficulty={handleChangeDifficulty} />
      <button className="reset-button" onClick={handleResetButton}>
        Сбросить все фильтры
      </button>
    </div>
  );
};
