import * as S from "./styles";

export const Card = () => {
  return (
    <S.Card>
      <S.CarInfo>
        <S.CarMake>Ferrari</S.CarMake>
        <S.CarModel>CALIFORNIA</S.CarModel>
      </S.CarInfo>
      <S.CarPhoto src="https://i.ibb.co/vX5GtS9/Mask-Group-11.png" />
      <S.CarPrice>
        <sup>$</sup>
        725
        <span>/day</span>
      </S.CarPrice>
    </S.Card>
  );
};
