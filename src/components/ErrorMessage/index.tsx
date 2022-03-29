import * as S from "./styles";
import { icon_forbidden } from "@assets";

type Props = {
  message: string;
}

export const ErrorMessage = ({ message }: Props) => {
  return (
    <S.Container>
      <S.ForbiddenIcon src={icon_forbidden} />
      <S.Message>
        Sorry! {message}
      </S.Message>
    </S.Container>
  )
}
