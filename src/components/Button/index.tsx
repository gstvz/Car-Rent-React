import * as S from "./styles";
import { icon_arrow} from "@assets";

type ButtonProps = {
  text: string;
  forward?: boolean;
};

export const Button = ({ text, forward }: ButtonProps) => {
  return (
    <S.Button forward={forward}>
      {forward ? (
        text
      ) : (
        <S.Arrow src={icon_arrow} forward={forward} />
      )}
      {forward ? (
        <S.Arrow src={icon_arrow} forward={forward} />
      ) : (
        text
      )}
    </S.Button>
  );
};
