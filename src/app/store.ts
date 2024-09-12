import { configureStore } from "@reduxjs/toolkit";
import { recipesListReducer } from "../widgets/recipesList";
import { recipeItemReducer } from "../entities/recipeItem";
import { filtersReducer } from "../features/setFilters";

const store = configureStore({
  reducer: { recipesListReducer, recipeItemReducer, filtersReducer },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
