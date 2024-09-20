import React from "react";
import { Link } from "react-router-dom";

import icon from "../../../../shared/assets/time-icon.svg";

import { useAppDispatch } from "../../../../shared/lib/hooks/hooks";
import { setCurrentRecipeId } from "../model/recipeCardSlice";
import { TTransformedRecipe } from "../../../../shared/types/types";

import { renderRecipeDifficulty } from "../lib/helpers";

import "./RecipeCard.scss";

type Props = {
  data: Pick<
    TTransformedRecipe,
    "name" | "image" | "cuisine" | "difficulty" | "cookingTime" | "mealType" | "instructions" | "id"
  >;
};

export const RecipeCard = ({ data }: Props) => {
  const { id, name, image, cuisine, difficulty, cookingTime, mealType, instructions } = data;

  const dispatch = useAppDispatch();

  const handleRecipe = (id: number) => {
    dispatch(setCurrentRecipeId(id));
  };

  return (
    <li className="list__item item">
      <Link to={`/${id}`} onClick={() => handleRecipe(id)}>
        <div className="item__left">
          <div className={`item__title ${name.length > 23 ? "item__title-long" : ""}`}>{name}</div>
          <div className="item__image">
            <img src={image} alt="Dish image" />
          </div>
        </div>
        <div className="item__right">
          <p className="item__description">{instructions.join(" ")}</p>
          <div className="item__time time">
            <div className="time__icon">
              <img src={icon} alt="Timer icon" />
            </div>
            <div className="time__text">{cookingTime} минут</div>
          </div>
          <div className="item__difficulty difficulty">
            <div className="difficulty__text">Сложность:</div>
            {renderRecipeDifficulty(difficulty)}
          </div>
          <div className="item__cuisine">{cuisine}</div>
          <div className="item__meal-type">{mealType.join(", ")}</div>
        </div>
      </Link>
    </li>
  );
};
