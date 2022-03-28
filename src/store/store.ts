import { configureStore } from "@reduxjs/toolkit";
import { carsSlice } from "@store";

export const store = configureStore({
  reducer: carsSlice.reducer,
});
