import React from "react";

// import image from "../../assets/card-image.png";
import icon from "../../assets/time-icon.svg";
import filledStar from "../../assets/filled-star-icon.svg";
import notFilledStar from "../../assets/star-icon.svg";

import "./recipeItem.scss";
import { TRecipe } from "src/types/types";

type Props = {
  data: Pick<TRecipe, "name" | "image" | "cookTimeMinutes" | "difficulty" | "cuisine" | "mealType" | "instructions">;
};

export const RecipeItem = ({ data }: Props) => {
  const { name, image, cuisine, difficulty, cookTimeMinutes, mealType, instructions } = data;

  return (
    <li className="list__item item">
      <div className="item__left">
        <div className="item__title">{name}</div>
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
          <div className="time__text">{cookTimeMinutes} минут</div>
        </div>
        <div className="item__difficulty difficulty">
          <div className="difficulty__text">Сложность:</div>
          {difficulty === "Easy" ? (
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
          ) : difficulty === "Medium" ? (
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
          ) : (
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
          )}
        </div>
        <div className="item__cuisine">{cuisine}</div>
        <div className="item__meal-type">{mealType.join(", ")}</div>
      </div>
    </li>
  );
};
