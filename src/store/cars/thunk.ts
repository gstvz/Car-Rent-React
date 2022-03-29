import { getCars } from "@shared/services";
import { carsActions } from "@store";

export function getCarsData() {
  return async (dispatch: Function) => {
    const cars = await getCars();

    if(cars) {
      dispatch(
        carsActions.setCars(cars)
      );
    }
  };
}
