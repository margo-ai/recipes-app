import React from "react";
import { TPaginationItems } from "../model/types";
import arrowPrev from "../../../shared/assets/arrow-left.svg";
import arrowNext from "../../../shared/assets/arrow-right.svg";
import { TTransformedRecipe } from "../../../shared/types/types";

export const renderPaginationItems = (page: number, type: TPaginationItems) => {
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

export const getCurrentRecipes = ({
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
