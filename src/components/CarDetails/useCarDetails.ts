import { useCars } from "@shared/hooks";
import { Car } from "@shared/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const useCarDetails = () => {
  const navigate = useNavigate();
  const [car, setCar] = useState<Car | null>(null);
  const { cars } = useCars();
  const { carId } = useParams();

  const handleBackToCatalog = () => {
    navigate(-1);
  };

  const handleBookNow = () => {
    return;
  };

  useEffect(() => {
    const findChosenCar = () => {
      const searchCar = cars.filter((car) => car.id === Number(carId));
      const chosenCar = searchCar[0];
      setCar(chosenCar);
    };

    findChosenCar();
  }, [cars, carId]);

  return { car, handleBackToCatalog, handleBookNow };
};
