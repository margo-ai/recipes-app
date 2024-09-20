import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { RecipesPage } from "../pages/RecipesPage";
import { RecipePage } from "../pages/RecipePage";

import "./styles/app.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<RecipesPage />} />
          <Route path="/:recipeId" element={<RecipePage />} />
          <Route path="*" element={<RecipesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
