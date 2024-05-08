import React, { useEffect, useState } from "react";

import { Pagination } from "antd";
import "./recipesList.scss";

import { renderPaginationItems } from "src/helpers/renderPaginationItems";

import { RecipeItem } from "../RecipeItem";

import { TRecipe } from "src/types/types";

export const RecipesList = () => {
  const [total, setTotal] = useState<number>(0);
  const [recipes, setRecipes] = useState<TRecipe[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(6);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=50")
      .then((res) => res.json())
      .then((data): void => {
        const total = data.total;
        const recipes = data.recipes;
        setTotal(total);
        setRecipes(recipes);
      });
  }, []);

  const getCurrentRecipes = ({ currentPage, recipesPerPage }: { currentPage: number; recipesPerPage: number }) => {
    const lastRecipeIndex = currentPage * recipesPerPage;
    const firstRecipeIndex = lastRecipeIndex - recipesPerPage;
    return recipes.slice(firstRecipeIndex, lastRecipeIndex);
  };

  const currentRecipes = getCurrentRecipes({ currentPage, recipesPerPage });

  return (
    <div className="recipes">
      <div className="recipes__count">
        Найденные рецепты<span>{total}</span>
      </div>
      <ul className="recipes__list list">
        {currentRecipes.map((recipe) => (
          <RecipeItem key={recipe.id} data={recipe} />
        ))}
      </ul>
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
