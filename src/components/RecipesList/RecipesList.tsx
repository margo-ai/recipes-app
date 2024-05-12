import React, { useEffect, useState } from "react";
import { Pagination } from "antd";

import { RecipeItem } from "../RecipeItem";
import arrowPrev from "../../assets/arrow-left.svg";
import arrowNext from "../../assets/arrow-right.svg";

import "./recipesList.scss";

import { Loader } from "../Loader";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import {
  setTotal,
  setCurrentRecipes,
  setCurrentPage,
  TTransformedRecipe,
  fetchRecipes,
} from "../../features/recipes/recipesSlice";

type TPaginationItems = "page" | "prev" | "next" | "jump-prev" | "jump-next";

const renderPaginationItems = (page: number, type: TPaginationItems) => {
  switch (type) {
    case "page":
      return <a className="page-link">{page}</a>;
    case "jump-prev":
    case "jump-next":
      return <a>•••</a>;
    case "next":
      return (
        <a className="page-link">
          <img src={arrowNext} alt="Prev arrow icon" />
        </a>
      );
    case "prev":
      return (
        <a className="page-link">
          <img src={arrowPrev} alt="Next arrow icon" />
        </a>
      );
  }
};

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

const getCurrentRecipes = ({
  filteredRecipes,
  currentPage,
  recipesPerPage,
}: {
  filteredRecipes: TTransformedRecipe[];
  currentPage: number;
  recipesPerPage: number;
}) => {
  const lastRecipeIndex = currentPage * recipesPerPage;
  const firstRecipeIndex = lastRecipeIndex - recipesPerPage;
  return filteredRecipes.slice(firstRecipeIndex, lastRecipeIndex);
};

export const RecipesList = () => {
  const [recipesPerPage, setRecipesPerPage] = useState(6);

  const dispatch = useAppDispatch();

  const recipes = useAppSelector((state) => state.recipesReducer.recipes);
  const currentPage = useAppSelector((state) => state.recipesReducer.currentPage);
  const selectedCuisine = useAppSelector((state) => state.recipesReducer.selectedCuisine);
  const selectedMealType = useAppSelector((state) => state.recipesReducer.selectedMealType);
  const selectedDifficulty = useAppSelector((state) => state.recipesReducer.selectedDifficulty);
  const recipesLoadingStatus = useAppSelector((state) => state.recipesReducer.recipesLoadingStatus);
  const totalRecipes = useAppSelector((state) => state.recipesReducer.totalRecipes);

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
