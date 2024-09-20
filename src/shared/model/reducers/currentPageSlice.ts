import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TState = {
  currentPage: number;
};

const initialState: TState = {
  currentPage: 1,
};

const currentPageSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

const { reducer, actions } = currentPageSlice;
export const { setCurrentPage } = actions;

export default reducer;
