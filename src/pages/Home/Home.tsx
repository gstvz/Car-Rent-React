import * as S from "./styles";
import { Card } from "../../components/Card/Card"
import { getCars } from "../../shared/services/getCars/getCars";

export const Home = () => {

  getCars();
  
  return (
    <S.Main>
      <Card />
    </S.Main>
  )
}
