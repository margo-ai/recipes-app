import React from "react";

import { Select } from "antd";

import arrowDown from "../../../shared/assets/arrow-down.svg";

import { mealTypes } from "../../../shared/consts/recipes";
import { setCurrentPage } from "../../../shared/model/reducers";
import { setSelectedMealType } from "../model/mealSlice";
import { useAppDispatch, useAppSelector } from "src/shared/lib/hooks/hooks";

import "./MealSelect.scss";

export const MealSelect = () => {
  const dispatch = useAppDispatch();

  const selectedMealType = useAppSelector((state) => state.mealReducer.selectedMealType);

  const handleChangeMealType = (value: string) => {
    dispatch(setCurrentPage(1));
    dispatch(setSelectedMealType(value));
  };

  return (
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
  );
};
