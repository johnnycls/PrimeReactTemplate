import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type counterState = { count: number };

const counterInitialState: counterState = { count: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increaseCount: (
      state: counterState,
      { payload: { amount } }: PayloadAction<{ amount: number }>
    ) => {
      state.count = state.count + amount;
    },
  },
});

export const { increaseCount } = counterSlice.actions;
export default counterSlice.reducer;
