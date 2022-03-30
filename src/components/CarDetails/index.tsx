import * as S from "./styles";
import { Button } from "@components";
import { useButtons } from "@shared/hooks";
import { ErrorMessage } from "../ErrorMessage";
import { Car } from "@shared/types";

type Props = {
  car: Car | null;
  color: number;
  error: boolean;
}

export const CarDetails = ({ car, color, error }: Props) => {
  const { handleBackToCatalog, handleActionButton, handleTryAgain } = useButtons();

  return (
    <S.Container>
      {/*
        Vehicles should have one color by default, or more. 
        If it doesn't have any color, it shouldn't be available.
        Therefore, ErrorMessage should be shown.
      */}
      {(!car?.colors || error) && (
        <S.ErrorContainer>
          <ErrorMessage message="This car is not available!" />
          <Button text="Try again" forward onPress={handleTryAgain} />
        </S.ErrorContainer>
      )}

      {car?.colors && !error && (
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
              <S.CarPhoto src={car?.colors[color].photo} />
            </S.CarPhotoContainer>
            <S.ButtonContainer>
              <Button text="Book now" forward onPress={handleActionButton} />
            </S.ButtonContainer>
          </S.Car>
          <S.CarIdAndColor>
            <S.CarId>{`${color + 1}`.padStart(2, "0")}</S.CarId>
            <S.CarColor>{car?.colors[color].color}</S.CarColor>
          </S.CarIdAndColor>
        </>
      )}
    </S.Container>
  );
};
