import React from "react";

import { Header } from "../../../widgets/Header";
import { SingleRecipe } from "../../../widgets/SingleRecipe";
import { useAppSelector } from "../../../shared/lib/hooks/hooks";

export const RecipePage = () => {
  const currentRecipeId = useAppSelector((state) => state.recipeCardReducer.currentRecipeId);
  const recipes = useAppSelector((state) => state.recipesListReducer.recipes);

  const getRecipe = () => {
    return recipes.find((recipe) => recipe.id === currentRecipeId);
  };
  const recipeData = getRecipe();

  return (
    <>
      <Header recipeName={recipeData.name} />
      <main className="main">
        <SingleRecipe data={recipeData} />
      </main>
    </>
  );
};
