import React, { ChangeEvent } from "react";
import { Select } from "antd";

import arrowDown from "../../../shared/assets/arrow-down.svg";

import { cuisines, mealTypes } from "../../../shared/consts/recipes";
import { RadioBlock } from "../../../entities/radioBlock";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks/hooks";
import { setCurrentPage } from "../../../widgets/recipesList";
import {
  setSelectedCuisine,
  setSelectedDifficulty,
  setSelectedMealType,
} from "../model/filtersSlice";

import "./setFilters.scss";

export const SetFilters = () => {
  const dispatch = useAppDispatch();

  const selectedCuisine = useAppSelector((state) => state.filtersReducer.selectedCuisine);
  const selectedMealType = useAppSelector((state) => state.filtersReducer.selectedMealType);
  const selectedDifficulty = useAppSelector((state) => state.filtersReducer.selectedDifficulty);

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
