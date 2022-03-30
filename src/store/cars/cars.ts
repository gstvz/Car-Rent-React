import { createSlice } from "@reduxjs/toolkit";
import { CarsState } from "@shared/types";

const initialState: CarsState = {
  cars: [],
  error: false,
  isLoading: false
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setCars(state, action) {
      state.cars = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setIsLoading(state) {
      state.isLoading = !state.isLoading;
    }
  },
});

export const carsActions = carsSlice.actions;
