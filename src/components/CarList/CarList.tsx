import { useCars } from "../../shared/hooks/useCars";
import { Card } from "../Card/Card";
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
