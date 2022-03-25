import { configureStore } from "@reduxjs/toolkit";
import { carsSlice } from "./cars/cars";

const store = configureStore({
  reducer: carsSlice.reducer,
});

export default store;
