import { useCars } from "@shared/hooks";
import { Car } from "@shared/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const useCarDetails = () => {
  const navigate = useNavigate();
  const [car, setCar] = useState<Car | null>(null);
  const cars = useCars();
  const { carId } = useParams();

  const handleBackToCatalog = () => {
    navigate(-1);
  };

  const handleBookNow = () => {
    toast.warn('The booking functionality is not available yet!');
    return;
  };

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

  return { car, handleBackToCatalog, handleBookNow };
};
