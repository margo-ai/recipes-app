import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TState = {
  selectedDifficulty: string;
};

const initialState: TState = {
  selectedDifficulty: "Any",
};

const recipeDifficultySlice = createSlice({
  name: "recipeDifficulty",
  initialState,
  reducers: {
    setSelectedDifficulty: (state, action: PayloadAction<string>) => {
      state.selectedDifficulty = action.payload;
    },
  },
});

const { reducer, actions } = recipeDifficultySlice;
export const { setSelectedDifficulty } = actions;

export default reducer;
