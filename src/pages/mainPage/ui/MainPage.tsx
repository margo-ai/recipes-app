import React from "react";

import { PageHeader } from "../../../widgets/pageHeader";
import { FilterBlock } from "../../../widgets/filterBlock";
import { RecipesList } from "../../../widgets/recipesList";

export const MainPage = () => {
  return (
    <>
      <PageHeader />
      <main className="main">
        <FilterBlock />
        <RecipesList />
      </main>
    </>
  );
};
