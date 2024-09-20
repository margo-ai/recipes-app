import React from "react";
import { Select } from "antd";

import arrowDown from "../../../shared/assets/arrow-down.svg";

import { cuisines } from "../../../shared/consts/recipes";
import { setCurrentPage } from "../../../shared/model/reducers";
import { setSelectedCuisine } from "../model/cuisineSlice";

import { useAppDispatch, useAppSelector } from "src/shared/lib/hooks/hooks";

import "./CuisineSelect.scss";

export const CuisineSelect = () => {
  const dispatch = useAppDispatch();

  const selectedCuisine = useAppSelector((state) => state.cuisineReducer.selectedCuisine);

  const handleChangeCuisine = (value: string) => {
    dispatch(setCurrentPage(1));
    dispatch(setSelectedCuisine(value));
  };

  return (
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
  );
};
