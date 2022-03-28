import { Car } from "@shared/types";
import * as S from "./styles";

type CardProps = {
  car: Car;
};

export const Card = ({ car }: CardProps) => {
  return (
    <S.Card>
      <S.Header>
        <S.CarInfo>
          <S.CarMake>{car.make}</S.CarMake>
          <S.CarModel>{car.model}</S.CarModel>
        </S.CarInfo>
        <S.Options>
          <S.Dot />
          <S.Dot />
          <S.Dot />
        </S.Options>
      </S.Header>
      <S.CarPhoto src={car.thumbnail} />
      <S.CarPrice>
        <sup>$</sup>
        {car.price}
        <span>/day</span>
      </S.CarPrice>
    </S.Card>
  );
};
