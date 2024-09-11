import React from "react";

import { PageHeader } from "../../../widgets/pageHeader";
import { SingleRecipe } from "../../../widgets/singleRecipe";
import { useAppSelector } from "../../../shared/lib/hooks/hooks";

export const RecipePage = () => {
  const currentRecipeId = useAppSelector((state) => state.recipeItemReducer.currentRecipeId);
  const recipes = useAppSelector((state) => state.recipesListReducer.recipes);

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
