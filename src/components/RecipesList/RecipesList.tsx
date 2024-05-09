import React, { useEffect, useState } from "react";

import { Pagination } from "antd";
import "./recipesList.scss";

import { renderPaginationItems } from "../../utils/helpers";

import { RecipeItem } from "../RecipeItem";

import { Recipe } from "../../types";

import { fetchRecipes } from "../../features/recipes/recipesSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { Loader } from "../Loader";

import { setTotal } from "../../features/recipes/recipesSlice";

import { TransformedRecipe } from "../../features/recipes/recipesSlice";

export const RecipesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(6);

  const dispatch = useAppDispatch();

  const recipes = useAppSelector((state) => state.recipesReducer.recipes);
  // console.log(recipes);
  const selectedCuisine = useAppSelector((state) => state.recipesReducer.selectedCuisine);
  const selectedMealType = useAppSelector((state) => state.recipesReducer.selectedMealType);
  const selectedDifficulty = useAppSelector((state) => state.recipesReducer.selectedDifficulty);
  const recipesLoadingStatus = useAppSelector((state) => state.recipesReducer.recipesLoadingStatus);
  const total = useAppSelector((state) => state.recipesReducer.totalRecipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  const filterRecipes = (recipes: TransformedRecipe[], cuisine: string, mealType: string, difficulty: string) => {
    const filteredRecipes = recipes.filter((recipe) => {
      return (
        (cuisine === "All countries and regions" ? recipe : recipe.cuisine === cuisine) &&
        (mealType === "All meal types" ? recipe : recipe.mealType.includes(mealType)) &&
        (difficulty === "Any" ? recipe : recipe.difficulty === difficulty)
      );
    });

    return filteredRecipes;
  };
  const filteredRecipes = filterRecipes(recipes, selectedCuisine, selectedMealType, selectedDifficulty);
  const getCurrentRecipes = ({ currentPage, recipesPerPage }: { currentPage: number; recipesPerPage: number }) => {
    const lastRecipeIndex = currentPage * recipesPerPage;
    const firstRecipeIndex = lastRecipeIndex - recipesPerPage;
    return filteredRecipes.slice(firstRecipeIndex, lastRecipeIndex);
  };

  const currentRecipes = getCurrentRecipes({ currentPage, recipesPerPage });
  useEffect(() => {
    dispatch(setTotal(filteredRecipes.length));
  }, [filteredRecipes]);

  // console.log(currentRecipes);
  // console.log(total);
  console.log(selectedDifficulty);

  return (
    <div className="recipes">
      <div className="recipes__count">
        Найденные рецепты<span>{total}</span>
      </div>
      {recipesLoadingStatus === "loading" ? (
        <div className="loader-wrapper">
          <Loader />
        </div>
      ) : recipesLoadingStatus === "error" ? (
        <div className="error-wrapper">Loading error! Try again!</div>
      ) : !!filteredRecipes.length ? (
        <ul className="recipes__list list">
          {currentRecipes.map((recipe: TransformedRecipe) => (
            <RecipeItem key={recipe.id} data={recipe} />
          ))}
        </ul>
      ) : (
        <div className="not-found-wrapper">Not found any recipe</div>
      )}
      {!!currentRecipes.length && (
        <Pagination
          current={currentPage}
          total={total}
          pageSize={6}
          onChange={(page) => setCurrentPage(page)}
          itemRender={(page, type) => renderPaginationItems(page, type)}
        />
      )}
    </div>
  );
};
