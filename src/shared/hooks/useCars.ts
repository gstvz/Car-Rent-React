import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarsData } from "@store";
import { CarsState } from "@shared/types";

export const useCars = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state: CarsState) => state.cars);
  const error = useSelector((state: CarsState) => state.error);
  const isLoading = useSelector((state: CarsState) => state.isLoading);

  useEffect(() => {
    dispatch(getCarsData());
  }, [dispatch]);

  return { cars, error, isLoading };
};
