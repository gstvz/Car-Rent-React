import { Card } from "@components";
import * as S from "./styles";
import { ErrorMessage } from "../ErrorMessage";
import { Button, Spinner } from "@components";
import { useButtons, useCars } from "@shared/hooks";

export const CarList = () => {
  const { cars, error, isLoading } = useCars();
  const { handleTryAgain } = useButtons();  

  return (
    <S.Container>
      {error && (
        <S.ErrorContainer>
          <ErrorMessage message="There are no available cars!" />
          <Button text="Try again" forward onPress={handleTryAgain} />
        </S.ErrorContainer>
      )}

      <Spinner isLoading={isLoading} />

      {cars.length > 0 && (
        <S.CarList>
          {cars.map((car) => (
            <Card key={car.id} car={car} />
          ))}
        </S.CarList>
      )}
    </S.Container>
  );
};
