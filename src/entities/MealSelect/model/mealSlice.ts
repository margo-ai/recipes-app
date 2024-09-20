import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TState = {
  selectedMealType: string;
};

const initialState: TState = {
  selectedMealType: "All meal types",
};

const mealSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {
    setSelectedMealType: (state, action: PayloadAction<string>) => {
      state.selectedMealType = action.payload;
    },
  },
});

const { reducer, actions } = mealSlice;
export const { setSelectedMealType } = actions;

export default reducer;
