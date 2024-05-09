import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../../types";
import { stat } from "fs";

const transformRecipeData = (recipeData: Recipe) => {
  return {
    id: recipeData.id,
    name: recipeData.name,
    image: recipeData.image,
    instructions: recipeData.instructions,
    cookingTime: recipeData.cookTimeMinutes,
    difficulty: recipeData.difficulty,
    cuisine: recipeData.cuisine,
    mealType: recipeData.mealType,
  };
};
type State = {
  recipes: Recipe[];
  recipesLoadingStatus: string;
  totalRecipes: number;
};

const initialState: State = {
  recipes: [],
  recipesLoadingStatus: "idle",
  totalRecipes: 0,
};

const URL = "https://dummyjson.com/recipes?limit=50";

export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const transformedData = data.recipes.map(transformRecipeData);
  return [transformedData, data.total];
});

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
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

const { reducer } = recipesSlice;

export default reducer;
