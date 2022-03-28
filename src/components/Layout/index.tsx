import * as S from "./styles";
import { Header } from "@components";
import { AppRoutes } from "@routes";

export const Layout = () => {
  return (
    <>
      <Header />
      <S.Main>
        <AppRoutes />
      </S.Main>
    </>
  );
};
