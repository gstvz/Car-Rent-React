import { getCars } from "../../shared/services/getCars/getCars";
import { carsActions } from "./cars";

export function getCarsData() {
  return async (dispatch: Function) => {
    const { cars } = await getCars();

    dispatch(
      carsActions.setCars(cars)
    );
  };
}
