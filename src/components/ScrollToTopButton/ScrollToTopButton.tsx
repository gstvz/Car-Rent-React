import * as S from "./styles";
import icon_arrow_up from "../../assets/icons/icon_arrow_up.svg";

type ScrollToTopButtonProps = {
  scrollToTop: () => void;
};

export const ScrollToTopButton = ({ scrollToTop }: ScrollToTopButtonProps) => {
  return (
    <S.Button onClick={scrollToTop}>
      <S.ArrowUp src={icon_arrow_up} />
    </S.Button>
  );
};
