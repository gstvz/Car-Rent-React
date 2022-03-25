import * as S from "./styles";

export const Card = () => {
  return (
    <S.Card>
      <S.Header>
        <S.CarInfo>
          <S.CarMake>Ferrari</S.CarMake>
          <S.CarModel>CALIFORNIA</S.CarModel>
        </S.CarInfo>
        <S.Options>
          <S.Dot />
          <S.Dot />
          <S.Dot />
        </S.Options>
      </S.Header>
      <S.CarPhoto src="https://i.ibb.co/vX5GtS9/Mask-Group-11.png" />
      <S.CarPrice>
        <sup>$</sup>
        725
        <span>/day</span>
      </S.CarPrice>
    </S.Card>
  );
};
