import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./features/recipes/recipesSlice";

const store = configureStore({
  reducer: { recipesReducer },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
