import React from "react";

import { PageHeader } from "../components/PageHeader";
import { FilterBlock } from "../components/FilterBlock";
import { RecipesList } from "../components/RecipesList";

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
