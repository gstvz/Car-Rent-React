import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Car } from "@shared/types";
import { useCars } from "@shared/hooks";

export const useCar = () => {
  const { carId } = useParams();
  const { cars, error } = useCars();
  const [car, setCar] = useState<Car | null>(null);
  const [color, setColor] = useState<number>(0);

  useEffect(() => {
    const findChosenCar = () => {
      const searchCar = cars.filter((car) => car.id === Number(carId));
      const chosenCar = searchCar[0];
      setCar(chosenCar);
    };

    if (cars) {
      findChosenCar();
    }
  }, [cars, carId]);

  const handleSlide = (index: number) => {
    setColor(index);
  };

  return { car, color, error, handleSlide };
};
