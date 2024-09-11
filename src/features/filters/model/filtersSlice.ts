import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TState = {
  selectedCuisine: string;
  selectedMealType: string;
  selectedDifficulty: string;
};

const initialState: TState = {
  selectedCuisine: "All countries and regions",
  selectedMealType: "All meal types",
  selectedDifficulty: "Any",
};

const filtersSlice = createSlice({
  name: "filters",
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
  },
});

const { reducer, actions } = filtersSlice;
export const { setSelectedCuisine, setSelectedMealType, setSelectedDifficulty } = actions;

export default reducer;
