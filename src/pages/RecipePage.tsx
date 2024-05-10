import React from "react";

import { useAppSelector } from "../utils/hooks";

import { PageHeader } from "../components/PageHeader";
import { SingleRecipe } from "../components/SingleRecipe";

export const RecipePage = () => {
  const recipeId = useAppSelector((state) => state.recipesReducer.selectedRecipe);
  const recipes = useAppSelector((state) => state.recipesReducer.recipes);

  const getRecipe = () => {
    return recipes.find((recipe) => recipe.id === recipeId);
  };
  const recipeData = getRecipe();
  console.log(recipeData);

  return (
    <>
      <PageHeader recipeName={recipeData.name} />
      <main className="main">
        <SingleRecipe data={recipeData} />
      </main>
    </>
  );
};
