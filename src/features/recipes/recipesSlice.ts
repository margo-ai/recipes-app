import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Difficulty, Recipe } from "../../types";

export type TransformedRecipe = {
  id: number;
  name: string;
  image: string;
  description: string;
  instructions: string[];
  cookingTime: number;
  preparingTime: number;
  servings: number;
  difficulty: Difficulty;
  cuisine: string;
  mealType: string[];
  tags: string[];
  caloriesPerServing: number;
};

const transformRecipeData = (recipeData: Recipe): TransformedRecipe => {
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
type State = {
  recipes: TransformedRecipe[];
  recipesLoadingStatus: string;
  totalRecipes: number;
  selectedCuisine: string;
  selectedMealType: string;
  selectedDifficulty: string;
  currentRecipeId: number;
  currentRecipes: TransformedRecipe[];
};

const initialState: State = {
  recipes: [],
  recipesLoadingStatus: "idle",
  totalRecipes: 0,
  selectedCuisine: "All countries and regions",
  selectedMealType: "All meal types",
  selectedDifficulty: "Any",
  currentRecipeId: null,
  currentRecipes: [],
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
    setCurrentRecipes: (state, action: PayloadAction<TransformedRecipe[]>) => {
      state.currentRecipes = action.payload;
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
} = actions;

export default reducer;
