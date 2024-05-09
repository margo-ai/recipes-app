import React, { ChangeEvent } from "react";
import { Select } from "../ui/Select";

import "./filters.scss";
import { RadioBlock } from "../RadioBlock";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

import { cuisines, mealTypes } from "../../utils/constants";
import { setSelectedCuisine, setSelectedMealType, setSelectedDifficulty } from "../../features/recipes/recipesSlice";

export const Filters = () => {
  const dispatch = useAppDispatch();
  const cuisineSelectOptions = cuisines.map((cuisine) => {
    return { label: cuisine, value: cuisine };
  });
  const mealTypeSelectOptions = mealTypes.map((mealType) => {
    return { label: mealType, value: mealType };
  });

  const selectedCuisine = useAppSelector((state) => state.recipesReducer.selectedCuisine);
  const selectedMealType = useAppSelector((state) => state.recipesReducer.selectedMealType);
  const selectedDifficulty = useAppSelector((state) => state.recipesReducer.selectedDifficulty);

  const handleChangeCuisine = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedCuisine(e.target.value));
  };

  const handleChangeMealType = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedMealType(e.target.value));
  };

  const handleChangeDifficulty = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedDifficulty(e.target.value));
  };

  const handleResetButton = () => {
    dispatch(setSelectedCuisine("All countries and regions"));
    dispatch(setSelectedMealType("All meal types"));
    dispatch(setSelectedDifficulty("Any"));
  };

  return (
    <div className="filters">
      <Select label="Кухня: " options={cuisineSelectOptions} value={selectedCuisine} onChange={handleChangeCuisine} />
      <Select
        label="Тип блюда:"
        options={mealTypeSelectOptions}
        value={selectedMealType}
        onChange={handleChangeMealType}
      />
      <RadioBlock difficulty={selectedDifficulty} handleChangeDifficulty={handleChangeDifficulty} />
      <button className="reset-button" onClick={handleResetButton}>
        Сбросить все фильтры
      </button>
    </div>
  );
};
