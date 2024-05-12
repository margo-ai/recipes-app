import React from "react";
import { Link } from "react-router-dom";

import icon from "../../assets/time-icon.svg";
import filledStar from "../../assets/filled-star-icon.svg";
import notFilledStar from "../../assets/star-icon.svg";

import "./recipeItem.scss";

import { useAppDispatch } from "../../utils/hooks";
import { setCurrentRecipeId, TTransformedRecipe } from "../../features/recipes/recipesSlice";

const renderRecipeDifficulty = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return (
        <div className="difficulty__stars">
          <div className="difficulty__star">
            <img src={filledStar} alt="Filled star" />
          </div>
          <div className="difficulty__star">
            <img src={notFilledStar} alt="Filled star" />
          </div>
          <div className="difficulty__star">
            <img src={notFilledStar} alt="Filled star" />
          </div>
        </div>
      );

    case "Medium":
      return (
        <div className="difficulty__stars">
          <div className="difficulty__star">
            <img src={filledStar} alt="Filled star" />
          </div>
          <div className="difficulty__star">
            <img src={filledStar} alt="Filled star" />
          </div>
          <div className="difficulty__star">
            <img src={notFilledStar} alt="Filled star" />
          </div>
        </div>
      );
    default:
      return (
        <div className="difficulty__stars">
          <div className="difficulty__star">
            <img src={filledStar} alt="Filled star" />
          </div>
          <div className="difficulty__star">
            <img src={filledStar} alt="Filled star" />
          </div>
          <div className="difficulty__star">
            <img src={filledStar} alt="Filled star" />
          </div>
        </div>
      );
  }
};

type Props = {
  data: Pick<
    TTransformedRecipe,
    "name" | "image" | "cuisine" | "difficulty" | "cookingTime" | "mealType" | "instructions" | "id"
  >;
};

export const RecipeItem = ({ data }: Props) => {
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
