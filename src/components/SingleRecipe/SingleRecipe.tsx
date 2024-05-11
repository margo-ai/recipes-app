import React from "react";
import { Link } from "react-router-dom";
import { Steps } from "antd";

import stepIcon from "../../assets/step-icon.svg";

import "./singleRecipe.scss";

import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { TTransformedRecipe, setCurrentRecipeId } from "../../features/recipes/recipesSlice";

type Props = {
  data: Pick<
    TTransformedRecipe,
    | "cuisine"
    | "tags"
    | "caloriesPerServing"
    | "servings"
    | "description"
    | "preparingTime"
    | "cookingTime"
    | "instructions"
    | "image"
    | "id"
  >;
};
export const SingleRecipe = ({ data }: Props) => {
  const {
    cuisine,
    tags,
    caloriesPerServing,
    servings,
    description,
    preparingTime,
    cookingTime,
    instructions,
    image,
    id,
  } = data;

  const dispatch = useAppDispatch();
  // список рецептов с учетом проставленных фильтров
  const currentRecipes = useAppSelector((state) => state.recipesReducer.currentRecipes);
  // ids данного списка
  const currentRecipesIds = currentRecipes.map((recipe) => recipe.id);
  // id текущего открытого рецепта
  const currentRecipeId = useAppSelector((state) => state.recipesReducer.currentRecipeId);
  // id предыдущего рецепта
  const prevRecipeId = currentRecipesIds[currentRecipesIds.indexOf(currentRecipeId) - 1];
  // id следующего рецепта
  const nextRecipeId = currentRecipesIds[currentRecipesIds.indexOf(currentRecipeId) + 1];

  // получение id предыдущего рецепта
  const getPrevRecipeId = (currentRecipesIds: number[], currentRecipeId: number) => {
    const index = currentRecipesIds.indexOf(currentRecipeId);
    dispatch(setCurrentRecipeId(currentRecipesIds[index - 1]));
  };

  // получение id следующего рецепта
  const getNextRecipeId = (currentRecipesIds: number[], currentRecipeId: number) => {
    const index = currentRecipesIds.indexOf(currentRecipeId);
    dispatch(setCurrentRecipeId(currentRecipesIds[index + 1]));
  };

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
        <div className="change-recipe-buttons">
          <Link
            to={`/${prevRecipeId}`}
            className={`${currentRecipeId === currentRecipesIds[0] ? "disabled" : ""}`}
            onClick={() => getPrevRecipeId(currentRecipesIds, currentRecipeId)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12" height="12" width="8">
              <g xmlns="http://www.w3.org/2000/svg" transform="matrix(-1 0 0 -1 8 12)">
                <path
                  d="M6.89777 5.66281L0.860269 0.947189C0.844493 0.934768 0.825533 0.92705 0.805568 0.924919C0.785603 0.922788 0.765441 0.926332 0.747399 0.935143C0.729357 0.943955 0.714166 0.957676 0.703571 0.974732C0.692976 0.991787 0.687406 1.01149 0.687501 1.03156V2.06683C0.687501 2.13246 0.718305 2.1954 0.769198 2.23558L5.59063 6.00031L0.769198 9.76505C0.716966 9.80522 0.687501 9.86817 0.687501 9.9338V10.9691C0.687501 11.0588 0.790626 11.1083 0.860269 11.0534L6.89777 6.33781C6.94908 6.29779 6.9906 6.24658 7.01915 6.1881C7.0477 6.12962 7.06254 6.06539 7.06254 6.00031C7.06254 5.93523 7.0477 5.87101 7.01915 5.81253C6.9906 5.75404 6.94908 5.70284 6.89777 5.66281Z"
                  fill="black"
                  fillOpacity="0.85"
                />
              </g>
            </svg>
          </Link>
          <Link
            to={`/${nextRecipeId}`}
            className={`${id === currentRecipesIds.at(-1) ? "disabled" : ""}`}
            onClick={() => getNextRecipeId(currentRecipesIds, currentRecipeId)}
          >
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.89777 5.66281L0.860269 0.947189C0.844493 0.934768 0.825533 0.92705 0.805568 0.924919C0.785603 0.922788 0.765441 0.926332 0.747399 0.935143C0.729357 0.943955 0.714166 0.957676 0.703571 0.974732C0.692976 0.991787 0.687406 1.01149 0.687501 1.03156V2.06683C0.687501 2.13246 0.718305 2.1954 0.769198 2.23558L5.59063 6.00031L0.769198 9.76505C0.716966 9.80522 0.687501 9.86817 0.687501 9.9338V10.9691C0.687501 11.0588 0.790626 11.1083 0.860269 11.0534L6.89777 6.33781C6.94908 6.29779 6.9906 6.24658 7.01915 6.1881C7.0477 6.12962 7.06254 6.06539 7.06254 6.00031C7.06254 5.93523 7.0477 5.87101 7.01915 5.81253C6.9906 5.75404 6.94908 5.70284 6.89777 5.66281Z"
                fill="black"
                fillOpacity="0.85"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
