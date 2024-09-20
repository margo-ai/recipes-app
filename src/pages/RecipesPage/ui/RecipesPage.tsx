import React from "react";

import { Header } from "../../../widgets/Header";
import { RecipesSidebar } from "../../../widgets/RecipesSidebar";
import { RecipesList } from "../../../widgets/RecipesList";

export const RecipesPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <RecipesSidebar />
        <RecipesList />
      </main>
    </>
  );
};
