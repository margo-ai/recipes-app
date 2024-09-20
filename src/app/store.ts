import { configureStore } from "@reduxjs/toolkit";
import { recipesListReducer } from "../widgets/RecipesList";
import { recipeCardReducer } from "../entities/Recipe/RecipeCard";
import { cuisineReducer } from "../entities/CuisineSelect";
import { currentPageReducer } from "../shared/model/reducers";
import { mealReducer } from "../entities/MealSelect";
import { recipeDifficultyReducer } from "../entities/RecipeDifficultyRadio";

const store = configureStore({
  reducer: {
    recipesListReducer,
    recipeCardReducer,
    cuisineReducer,
    mealReducer,
    recipeDifficultyReducer,
    currentPageReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
