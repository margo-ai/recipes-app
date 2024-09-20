import React from "react";

import { TTransformedRecipe } from "../../../shared/types/types";
import { RecipeInfo } from "src/entities/Recipe/RecipeInfo";
import { NavigateToPrevNextRecipe } from "src/features/NavigateToPrevNextRecipe";

import "./singleRecipe.scss";

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
  const { image, id } = data;

  return (
    <div className="recipe">
      <RecipeInfo {...data} />

      <div className="recipe__image">
        <img src={image} alt="Dish image" />
        <NavigateToPrevNextRecipe id={id} />
      </div>
    </div>
  );
};
