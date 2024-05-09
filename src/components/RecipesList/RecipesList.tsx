import React, { useEffect, useState } from "react";

import { Pagination, Spin } from "antd";
import "./recipesList.scss";

import { renderPaginationItems } from "../../utils/helpers";

import { RecipeItem } from "../RecipeItem";

import { Recipe } from "../../types";

import { fetchRecipes } from "../../features/recipes/recipesSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

export const RecipesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(6);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);
  const recipes = useAppSelector((state) => state.recipesReducer.recipes);
  console.log(recipes);

  const recipesLoadingStatus = useAppSelector((state) => state.recipesReducer.recipesLoadingStatus);
  const total = useAppSelector((state) => state.recipesReducer.totalRecipes);

  const getCurrentRecipes = ({ currentPage, recipesPerPage }: { currentPage: number; recipesPerPage: number }) => {
    const lastRecipeIndex = currentPage * recipesPerPage;
    const firstRecipeIndex = lastRecipeIndex - recipesPerPage;
    return recipes.slice(firstRecipeIndex, lastRecipeIndex);
  };

  const currentRecipes = getCurrentRecipes({ currentPage, recipesPerPage });
  console.log(currentRecipes);

  return (
    <div className="recipes">
      <div className="recipes__count">
        Найденные рецепты<span>{total}</span>
      </div>
      {recipesLoadingStatus === "loading" ? (
        <Spin size="large" />
      ) : (
        <ul className="recipes__list list">
          {currentRecipes.map(
            (
              recipe: Pick<
                Recipe,
                "id" | "image" | "name" | "cookTimeMinutes" | "difficulty" | "cuisine" | "mealType" | "instructions"
              >,
            ) => (
              <RecipeItem key={recipe.id} data={recipe} />
            ),
          )}
        </ul>
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
