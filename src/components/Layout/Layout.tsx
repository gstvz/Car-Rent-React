import * as S from "./styles";
import { Header } from "../Header/Header";
import { AppRoutes } from "../../routes/AppRoutes";

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
