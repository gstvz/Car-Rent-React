import * as S from "./styles";
import { CarList, ScrollButton } from "@components";
import { useScrollToTop } from "./useScrollToTop";

export const Home = () => {
  const { visibility, scrollToTop } = useScrollToTop();
  return (
    <S.Section>
      <CarList />
      {visibility && <ScrollButton scrollToTop={scrollToTop} />}
    </S.Section>
  );
};
