import { getCars } from "@shared/services";
import { carsActions } from "@store";

export function getCarsData() {
  return async (dispatch: Function) => {
    dispatch(carsActions.setIsLoading());
    const cars = await getCars();

    if (cars) {
      dispatch(carsActions.setCars(cars));
      dispatch(carsActions.setError(false));
      dispatch(carsActions.setIsLoading());
    } else {
      dispatch(carsActions.setError(true));
      dispatch(carsActions.setIsLoading());
    }
  };
}
