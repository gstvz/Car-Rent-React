import { useCars } from "@shared/hooks";
import { Card } from "@components";
import * as S from "./styles";

export const CarList = () => {
  const { cars } = useCars();

  return (
    <S.CarList>
      {cars.map((car) => (
        <Card key={car.id} car={car} />
      ))}
    </S.CarList>
  );
};
