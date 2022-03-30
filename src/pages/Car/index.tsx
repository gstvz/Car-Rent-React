import { CarDetails, CarSlider } from "@components";
import { useCar } from "@shared/hooks";
import * as S from "./styles";

export const Car = () => {
  const { car, cars, color, error, handleSlide, isLoading } = useCar();
  return (
    <S.Section>
      <CarDetails car={car} cars={cars} color={color} error={error} isLoading={isLoading} />
      {car?.colors && !isLoading && <CarSlider carColors={car.colors} activeColor={color} handleSlide={handleSlide} />}
    </S.Section>
  );
};
