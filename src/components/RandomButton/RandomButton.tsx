import React from "react";

import "./randomButton.scss";
import { useAppSelector } from "../../utils/hooks";

type Props = {
  disabled?: boolean;
};

export const RandomButton = ({ disabled = false }: Props) => {
  const total = useAppSelector((state) => state.recipesReducer.totalRecipes);
  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const handleRandomButton = () => {
    const recipeId = getRandomInt(1, total);
    console.log(recipeId);
  };

  return (
    <div className={`random-button ${disabled ? "disabled" : ""}`}>
      <div className="random-button__title">А еще можно попробовать на вкус удачу</div>
      <button className="random-button__button" onClick={handleRandomButton}>
        Мне повезёт!
      </button>
    </div>
  );
};
