import { CarDetails, CarSlider } from "@components";
import { useCar } from "@shared/hooks";
import * as S from "./styles";

export const Car = () => {
  const car = useCar();
  return (
    <S.Section>
      <CarDetails />
      {car?.colors && <CarSlider carColors={car.colors} />}
    </S.Section>
  );
};
