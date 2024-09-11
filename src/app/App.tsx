import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainPage } from "../pages/mainPage/ui/MainPage";
import { RecipePage } from "../pages/recipePage/ui/RecipePage";

import "./styles/app.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:recipeId" element={<RecipePage />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
