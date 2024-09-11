import React, { useEffect, useState } from "react";
import { Pagination } from "antd";

import { RecipeItem } from "../../../entities/recipeItem";

import { Loader } from "../../../shared/ui/loader";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks/hooks";
import { setTotal, setCurrentRecipes, setCurrentPage, fetchRecipes } from "../model/recipesListSlice";
import { TTransformedRecipe } from "../../../shared/types/types";
import { getCurrentRecipes, renderPaginationItems } from "../lib/helpers";

import "./recipesList.scss";

const filterRecipes = (recipes: TTransformedRecipe[], cuisine: string, mealType: string, difficulty: string) => {
  const filteredRecipes = recipes.filter((recipe) => {
    return (
      (cuisine === "All countries and regions" ? recipe : recipe.cuisine === cuisine) &&
      (mealType === "All meal types" ? recipe : recipe.mealType.includes(mealType)) &&
      (difficulty === "Any" ? recipe : recipe.difficulty === difficulty)
    );
  });

  return filteredRecipes;
};

export const RecipesList = () => {
  const [recipesPerPage, setRecipesPerPage] = useState(6);

  const dispatch = useAppDispatch();

  const recipes = useAppSelector((state) => state.recipesListReducer.recipes);
  const currentPage = useAppSelector((state) => state.recipesListReducer.currentPage);
  const selectedCuisine = useAppSelector((state) => state.filtersReducer.selectedCuisine);
  const selectedMealType = useAppSelector((state) => state.filtersReducer.selectedMealType);
  const selectedDifficulty = useAppSelector((state) => state.filtersReducer.selectedDifficulty);
  const recipesLoadingStatus = useAppSelector((state) => state.recipesListReducer.recipesLoadingStatus);
  const totalRecipes = useAppSelector((state) => state.recipesListReducer.totalRecipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  // список рецептов с учетом установленных фильтров
  const filteredRecipes = filterRecipes(recipes, selectedCuisine, selectedMealType, selectedDifficulty);
  // отфильтрованный список рецептов на текущей странице
  const currentRecipes = getCurrentRecipes({ filteredRecipes, currentPage, recipesPerPage });

  useEffect(() => {
    dispatch(setTotal(filteredRecipes.length));
    dispatch(setCurrentRecipes(filteredRecipes));
  }, [filteredRecipes, currentRecipes]);

  const handleCurrentPage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="recipes">
      <div className="recipes__count">
        Найденные рецепты<span>{totalRecipes}</span>
      </div>
      {recipesLoadingStatus === "loading" ? (
        <div className="loader-wrapper">
          <Loader />
        </div>
      ) : recipesLoadingStatus === "error" ? (
        <div className="error-wrapper">Loading error! Try again!</div>
      ) : !!filteredRecipes.length ? (
        <ul className="recipes__list list">
          {currentRecipes.map((recipe: TTransformedRecipe) => (
            <RecipeItem key={recipe.id} data={recipe} />
          ))}
        </ul>
      ) : (
        <div className="not-found-wrapper">Not found any recipe</div>
      )}
      {!!currentRecipes.length && (
        <Pagination
          current={currentPage}
          total={totalRecipes}
          pageSize={6}
          onChange={(page) => handleCurrentPage(page)}
          itemRender={(page, type) => renderPaginationItems(page, type)}
        />
      )}
    </div>
  );
};
