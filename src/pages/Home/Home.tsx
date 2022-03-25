import * as S from "./styles";
import { CarList } from "../../components/CarList/CarList";
import { ScrollToTopButton } from "../../components/ScrollToTopButton/ScrollToTopButton";
import { useScrollToTop } from "./useScrollToTop";

export const Home = () => {
  const { visibility, scrollToTop } = useScrollToTop();
  return (
    <S.Main>
      <CarList />
      {visibility && <ScrollToTopButton scrollToTop={scrollToTop} />}
    </S.Main>
  );
};
