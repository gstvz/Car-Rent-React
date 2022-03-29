import { createSlice } from "@reduxjs/toolkit";
import { CarsState } from "@shared/types";

const initialState: CarsState = {
  cars: [],
  error: false
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
    }
  },
});

export const carsActions = carsSlice.actions;
