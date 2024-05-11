import React from "react";

import { PageHeader } from "../components/PageHeader";
import { SingleRecipe } from "../components/SingleRecipe";
import { useAppSelector } from "../utils/hooks";

export const RecipePage = () => {
  const currentRecipeId = useAppSelector((state) => state.recipesReducer.currentRecipeId);
  const recipes = useAppSelector((state) => state.recipesReducer.recipes);

  const getRecipe = () => {
    return recipes.find((recipe) => recipe.id === currentRecipeId);
  };
  const recipeData = getRecipe();

  return (
    <>
      <PageHeader recipeName={recipeData.name} />
      <main className="main">
        <SingleRecipe data={recipeData} />
      </main>
    </>
  );
};
