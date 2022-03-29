import { useCars } from "@shared/hooks";
import { Card } from "@components";
import * as S from "./styles";
import { ErrorMessage } from "../ErrorMessage";

export const CarList = () => {
  const cars = useCars();
  
  return (
    <S.Container>
      {cars ? (
        <S.CarList>
          {cars.map((car) => (
            <Card key={car.id} car={car} />
          ))}
        </S.CarList>
      ) : (
        <ErrorMessage message="There are no available cars!" />
      )}
    </S.Container>
  );
};
