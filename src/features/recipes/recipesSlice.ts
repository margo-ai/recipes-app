import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { TDifficulty, TRecipe } from "../../types";

import { URL } from "../../utils/constants";

export type TTransformedRecipe = {
  id: number;
  name: string;
  image: string;
  description: string;
  instructions: string[];
  cookingTime: number;
  preparingTime: number;
  servings: number;
  difficulty: TDifficulty;
  cuisine: string;
  mealType: string[];
  tags: string[];
  caloriesPerServing: number;
};

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
  selectedCuisine: string;
  selectedMealType: string;
  selectedDifficulty: string;
  currentRecipeId: number;
  currentRecipes: TTransformedRecipe[];
  currentPage: number;
};

const initialState: TState = {
  recipes: [],
  recipesLoadingStatus: "idle",
  totalRecipes: 0,
  selectedCuisine: "All countries and regions",
  selectedMealType: "All meal types",
  selectedDifficulty: "Any",
  currentRecipeId: null,
  currentRecipes: [],
  currentPage: 1,
};

export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const transformedData = data.recipes.map(transformRecipeData);
  return [transformedData, data.total];
});

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setSelectedCuisine: (state, action: PayloadAction<string>) => {
      state.selectedCuisine = action.payload;
    },
    setSelectedMealType: (state, action: PayloadAction<string>) => {
      state.selectedMealType = action.payload;
    },
    setSelectedDifficulty: (state, action: PayloadAction<string>) => {
      state.selectedDifficulty = action.payload;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.totalRecipes = action.payload;
    },
    setCurrentRecipeId: (state, action: PayloadAction<number>) => {
      state.currentRecipeId = action.payload;
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

const { reducer, actions } = recipesSlice;
export const {
  setSelectedCuisine,
  setSelectedMealType,
  setSelectedDifficulty,
  setTotal,
  setCurrentRecipeId,
  setCurrentRecipes,
  setCurrentPage,
} = actions;

export default reducer;
