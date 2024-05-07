import React, { useEffect, useState } from "react";

import { RecipeItem } from "../RecipeItem";

import { TRecipe } from "src/types/types";

import "./recipesList.scss";

export const RecipesList = () => {
  const [total, setTotal] = useState<number>(0);
  const [recipes, setRecipes] = useState<TRecipe[]>([]);

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
  console.log(recipes);
  return (
    <div className="recipes">
      <div className="recipes__count">
        Найденные рецепты<span>{total}</span>
      </div>
      <div className="recipes__list list">
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.id} data={recipe} />
        ))}

        {/* <RecipeItem difficulty="Hard" />
        <RecipeItem difficulty="Medium" />
        <RecipeItem difficulty="Easy" />
        <RecipeItem difficulty="Hard" />
        <RecipeItem difficulty="Medium" /> */}
      </div>
    </div>
  );
};
