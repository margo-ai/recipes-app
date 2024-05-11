import React from "react";

import "./randomButton.scss";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

import { setCurrentRecipeId } from "../../features/recipes/recipesSlice";
import { Link } from "react-router-dom";

type Props = {
  disabled?: boolean;
};

export const RandomButton = ({ disabled = false }: Props) => {
  const dispatch = useAppDispatch();
  const total = useAppSelector((state) => state.recipesReducer.totalRecipes);

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let recipeId;
  const handleRandomButton = () => {
    const id = getRandomInt(1, total);
    console.log(id);

    recipeId = id;
    console.log(recipeId);
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
