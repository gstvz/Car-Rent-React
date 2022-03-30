import { CarDetails, CarSlider } from "@components";
import { useCar } from "@shared/hooks";
import * as S from "./styles";

export const Car = () => {
  const { car, color, error, handleSlide } = useCar();
  return (
    <S.Section>
      <CarDetails car={car} color={color} error={error} />
      {car?.colors && <CarSlider carColors={car.colors} activeColor={color} handleSlide={handleSlide} />}
    </S.Section>
  );
};
