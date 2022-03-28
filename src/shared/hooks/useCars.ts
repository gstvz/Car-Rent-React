import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarsData } from "../../store/cars/thunk";
import { CarsState } from "../types/cars";

export const useCars = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state: CarsState) => state.cars);

  useEffect(() => {
    dispatch(getCarsData());
  }, [dispatch]);

  return { cars };
};
