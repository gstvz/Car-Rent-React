import * as S from "./styles";
import { icon_arrow_up } from "@assets";

type ScrollButtonProps = {
  scrollToTop: () => void;
};

export const ScrollButton = ({ scrollToTop }: ScrollButtonProps) => {
  return (
    <S.Button onClick={scrollToTop}>
      <S.ArrowUp src={icon_arrow_up} />
    </S.Button>
  );
};
