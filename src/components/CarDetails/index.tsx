import * as S from "./styles";
import { Button } from "@components";
import { useCarDetails } from "./useCarDetails";

export const CarDetails = () => {
  const { car, handleBackToCatalog, handleBookNow } = useCarDetails();
  
  return (
    <S.Container>
      <S.Car>
        <S.CarHeader>
          <S.MakeLogo src={car?.makeLogo} />
          <S.CarInfo>
            <S.CarMakeAndModel>
              {car?.make} {car?.model}
            </S.CarMakeAndModel>
            <S.CarPrice>${car?.price}/day</S.CarPrice>
          </S.CarInfo>
        </S.CarHeader>
        <S.CarPhotoContainer>
          <Button text="Back to catalog" onPress={handleBackToCatalog} />
          <S.CarPhoto src={car?.colors[0].photo} />
        </S.CarPhotoContainer>
        <S.ButtonContainer>
          <Button text="Book now" forward onPress={handleBookNow} />
        </S.ButtonContainer>
      </S.Car>
      <S.CarIdAndColor>
        <S.CarId>{car?.id}</S.CarId>
        <S.CarColor>{car?.colors[0].color}</S.CarColor>
      </S.CarIdAndColor>
    </S.Container>
  );
};
