import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TState = {
  selectedCuisine: string;
};

const initialState: TState = {
  selectedCuisine: "All countries and regions",
};

const cuisineSlice = createSlice({
  name: "cuisine",
  initialState,
  reducers: {
    setSelectedCuisine: (state, action: PayloadAction<string>) => {
      state.selectedCuisine = action.payload;
    },
  },
});

const { reducer, actions } = cuisineSlice;
export const { setSelectedCuisine } = actions;

export default reducer;
