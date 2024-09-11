import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { TDifficulty, TRecipe } from "../../../shared/types/types";

import { URL } from "../../../shared/consts/api";
import { TTransformedRecipe } from "../../../shared/types/types";

const transformRecipeData = (recipeData: TRecipe): TTransformedRecipe => {
  return {
    id: recipeData.id,
    name: recipeData.name,
    image: recipeData.image,
    description: recipeData.instructions.join(" "),
    instructions: recipeData.instructions,
    cookingTime: recipeData.cookTimeMinutes,
    preparingTime: recipeData.prepTimeMinutes,
    servings: recipeData.servings,
    difficulty: recipeData.difficulty,
    cuisine: recipeData.cuisine,
    mealType: recipeData.mealType,
    tags: recipeData.tags,
    caloriesPerServing: recipeData.caloriesPerServing,
  };
};

type TState = {
  recipes: TTransformedRecipe[];
  recipesLoadingStatus: string;
  totalRecipes: number;
  currentRecipes: TTransformedRecipe[];
  currentPage: number;
};

const initialState: TState = {
  recipes: [],
  recipesLoadingStatus: "idle",
  totalRecipes: 0,
  currentRecipes: [],
  currentPage: 1,
};

export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const transformedData = data.recipes.map(transformRecipeData);
  return [transformedData, data.total];
});

const recipesListSlice = createSlice({
  name: "recipesList",
  initialState,
  reducers: {
    setTotal: (state, action: PayloadAction<number>) => {
      state.totalRecipes = action.payload;
    },
    setCurrentRecipes: (state, action: PayloadAction<TTransformedRecipe[]>) => {
      state.currentRecipes = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.recipesLoadingStatus = "loading";
        state.recipes = [];
        state.totalRecipes = 0;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.recipesLoadingStatus = "idle";
        state.recipes = action.payload[0];
        state.totalRecipes = action.payload[1];
      })
      .addCase(fetchRecipes.rejected, (state) => {
        state.recipesLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { reducer, actions } = recipesListSlice;
export const { setTotal, setCurrentRecipes, setCurrentPage } = actions;

export default reducer;
