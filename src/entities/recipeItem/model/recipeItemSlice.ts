import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type TState = {
  currentRecipeId: number;
};

const initialState: TState = {
  currentRecipeId: null,
};

const recipeitemSlice = createSlice({
  name: "recipeItem",
  initialState,
  reducers: {
    setCurrentRecipeId: (state, action: PayloadAction<number>) => {
      state.currentRecipeId = action.payload;
    },
  },
});

const { reducer, actions } = recipeitemSlice;
export const { setCurrentRecipeId } = actions;

export default reducer;
