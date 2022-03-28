import { Car } from "@shared/types";
import * as S from "./styles";
import { useHover } from "./useHover";

type CardProps = {
  car: Car;
};

export const Card = ({ car }: CardProps) => {
  const { isHovering, renderComponent } = useHover();

  return (
    <S.Card onMouseEnter={renderComponent} onMouseLeave={renderComponent}>
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
      <S.Footer isHovering={isHovering}>
        {isHovering && <S.BookNow>Book now</S.BookNow>}
        <S.CarPrice>
          <sup>$</sup>
          {car.price}
          <p>/day</p>
        </S.CarPrice>
      </S.Footer>
    </S.Card>
  );
};
