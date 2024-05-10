import React from "react";
import { v4 as uuidv4 } from "uuid";

import { Steps } from "antd";

import stepIcon from "../../assets/step-icon.svg";

import { TransformedRecipe } from "../../features/recipes/recipesSlice";

import "./singleRecipe.scss";

type Props = {
  data: Pick<
    TransformedRecipe,
    | "cuisine"
    | "tags"
    | "caloriesPerServing"
    | "servings"
    | "description"
    | "preparingTime"
    | "cookingTime"
    | "instructions"
    | "image"
  >;
};
export const SingleRecipe = ({ data }: Props) => {
  const { cuisine, tags, caloriesPerServing, servings, description, preparingTime, cookingTime, instructions, image } =
    data;

  return (
    <div className="recipe">
      <div className="recipe__info">
        <div className="recipe__details details">
          <div className="details__block">
            <div className="details__title">Кухня</div>
            <div className="details__info details__info_cuisine">{cuisine}</div>
          </div>
          <div className="details__block">
            <div className="details__title">Теги</div>
            <div className="details__info details__info_tags">{tags.map((tag) => `#${tag}`)}</div>
          </div>
          <div className="details__block">
            <div className="details__title">Калорийность</div>
            <div className="details__info kcal">
              <div className="kcal__info">{caloriesPerServing} ккал</div>
              <div className="kcal__weight">100 грамм</div>
            </div>
          </div>
          <div className="details__block">
            <div className="details__title">Количество порций</div>
            <div className="details__info details__info_servings">{servings}</div>
          </div>
          <div className="details__block">
            <div className="details__title">Описание</div>
            <div className="details__info details__info_descr">{description}</div>
          </div>
        </div>
        <div className="recipe__cooking details">
          <div className="details__block">
            <div className="details__title">Общее время приготовления</div>
            <div className="details__info details__info_time">{preparingTime + cookingTime} минут</div>
          </div>
          <div className="details__block">
            <div className="details__title">Инструкции по приготовлению</div>
            <ul className="details__info details__info_instructions">
              {/* {instructions.map((item) => {
                return <li key={uuidv4()}>{item}</li>;
              })} */}
              <Steps
                direction="vertical"
                type="default"
                current={instructions.length}
                items={instructions.map((step) => ({
                  className: "instructions__item",
                  title: step,
                  status: "process",
                  icon: <img src={stepIcon} width="10px" height="10px"></img>,
                }))}
              />
            </ul>
          </div>
        </div>
      </div>
      <div className="recipe__image">
        <img src={image} alt="Dish image" />
      </div>
    </div>
  );
};
