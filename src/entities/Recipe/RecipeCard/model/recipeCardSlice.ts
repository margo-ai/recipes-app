import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type TState = {
  currentRecipeId: number;
};

const initialState: TState = {
  currentRecipeId: null,
};

const recipeCardSlice = createSlice({
  name: "recipeCard",
  initialState,
  reducers: {
    setCurrentRecipeId: (state, action: PayloadAction<number>) => {
      state.currentRecipeId = action.payload;
    },
  },
});

const { reducer, actions } = recipeCardSlice;
export const { setCurrentRecipeId } = actions;

export default reducer;
