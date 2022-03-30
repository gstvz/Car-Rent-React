import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Car } from "@shared/types";
import { useCars } from "@shared/hooks";

export const useCar = () => {
  const { carId } = useParams();
  const { cars } = useCars();
  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    setCar(cars[Number(carId) - 1]);
  }, [carId]);

  return car;
};
