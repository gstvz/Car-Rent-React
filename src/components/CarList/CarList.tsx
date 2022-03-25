import { useCarList } from "../../shared/hooks/useCarList";
import { Card } from "../Card/Card";
import * as S from "./styles";

export const CarList = () => {
  const { cars } = useCarList();

  return (
    <S.CarList>
      {cars.map((car) => (
        <Card key={car.id} car={car} />
      ))}
    </S.CarList>
  );
};
