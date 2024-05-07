import React, { useEffect } from "react";
import { MainPageHeader } from "./components/MainPageHeader";

import "./styles/app.scss";
import { FilterBlock } from "./components/FilterBlock";
import { RecipesList } from "./components/RecipesList";

export const App = () => {
  // useEffect(() => {
  //   fetch("https://dummyjson.com/recipes?limit=50")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <div className="app">
      <MainPageHeader />
      <main className="main">
        <FilterBlock />
        <RecipesList difficulty="Easy" />
      </main>
    </div>
  );
};
