import React from "react";

import { RecipeDifficultyRadio, setSelectedDifficulty } from "../../../entities/RecipeDifficultyRadio";
import { useAppDispatch } from "../../../shared/lib/hooks/hooks";

import "./FilterRecipes.scss";
import { CuisineSelect, setSelectedCuisine } from "../../../entities/CuisineSelect";
import { MealSelect, setSelectedMealType } from "../../../entities/MealSelect";

export const FilterRecipes = () => {
  const dispatch = useAppDispatch();

  const handleResetButton = () => {
    dispatch(setSelectedCuisine("All countries and regions"));
    dispatch(setSelectedMealType("All meal types"));
    dispatch(setSelectedDifficulty("Any"));
  };

  return (
    <div className="filters">
      <CuisineSelect />
      <MealSelect />
      <RecipeDifficultyRadio />
      <button className="reset-button" onClick={handleResetButton}>
        Сбросить все фильтры
      </button>
    </div>
  );
};
