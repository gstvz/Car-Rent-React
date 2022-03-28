import * as S from "./styles";
import { icon_arrow} from "@assets";

type ButtonProps = {
  text: string;
  forward?: boolean;
  onPress: () => void;
};

export const Button = ({ text, forward, onPress }: ButtonProps) => {
  return (
    <S.Button forward={forward} onClick={onPress}>
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
