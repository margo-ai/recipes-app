import React, { useEffect } from "react";
import { MainPageHeader } from "./components/MainPageHeader";

import "./styles/app.scss";
import { FilterBlock } from "./components/FilterBlock";
import { RecipesList } from "./components/RecipesList";

export const App = () => {
  return (
    <div className="app">
      <MainPageHeader />
      <main className="main">
        <FilterBlock />
        <RecipesList />
      </main>
    </div>
  );
};
