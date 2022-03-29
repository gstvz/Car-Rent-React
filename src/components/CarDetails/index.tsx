import * as S from "./styles";
import { Button } from "@components";
import { useCarDetails } from "./useCarDetails";
import { ErrorMessage } from "../ErrorMessage";

export const CarDetails = () => {
  const { car, handleBackToCatalog, handleBookNow } = useCarDetails();

  return (
    <S.Container>
      {car ? (
        <>
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
            <S.CarId>{`${car?.id}`.padStart(2, "0")}</S.CarId>
            <S.CarColor>{car?.colors[0].color}</S.CarColor>
          </S.CarIdAndColor>
        </>
      ) : (
        <ErrorMessage message="This car is not available!" />
      )}
    </S.Container>
  );
};
