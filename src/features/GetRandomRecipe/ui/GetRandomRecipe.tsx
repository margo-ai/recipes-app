import React from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks/hooks";
import { setCurrentRecipeId } from "../../../entities/Recipe/RecipeCard";
import { getRandomInt } from "../lib/helpers";

import "./GetRandomRecipe.scss";

type Props = {
  disabled?: boolean;
};

export const GetRandomRecipe = ({ disabled = false }: Props) => {
  const dispatch = useAppDispatch();
  const totalRecipes = useAppSelector((state) => state.recipesListReducer.totalRecipes);

  let recipeId;

  const handleRandomButton = () => {
    const id = getRandomInt(1, totalRecipes);
    recipeId = id;
    dispatch(setCurrentRecipeId(recipeId));
  };

  return (
    <div className="random-button">
      <div className="random-button__title">А еще можно попробовать на вкус удачу</div>
      <Link
        to={`/surprise`}
        className={`random-button__button ${disabled ? "disabled" : ""}`}
        onClick={handleRandomButton}
      >
        Мне повезёт!
      </Link>
    </div>
  );
};
