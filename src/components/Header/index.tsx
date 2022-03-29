import * as S from "./styles";
import { icon_calendar, icon_map, icon_search } from "@assets";
import { useHeader } from "./useHeader";

export const Header = () => {
  const { handleLogoClick } = useHeader();

  return (
    <S.Header>
      <S.Container>
        <S.LogoWrapper onClick={handleLogoClick}>
          <S.LogoExotic>EXOTIC</S.LogoExotic>
          <S.LogoCars>CARS</S.LogoCars>
        </S.LogoWrapper>
        <S.SearchParamsWrapper>
          <S.SearchParam>
            <S.SearchParamsIcon src={icon_map} />
            <S.SearchParamsInput placeholder="North Carolina, NC 90025" disabled />
          </S.SearchParam>
          <S.SearchParam>
            <S.SearchParamsIcon src={icon_calendar} />
            <S.SearchParamsInput placeholder="11/03/2021" disabled />
          </S.SearchParam>
          <S.SearchParam>
            <S.SearchParamsIcon src={icon_calendar} />
            <S.SearchParamsInput placeholder="12/12/2021" disabled />
          </S.SearchParam>
          <S.SearchButton disabled>
            <S.SearchParamsIcon src={icon_search} />
          </S.SearchButton>
        </S.SearchParamsWrapper>
        <S.ActionsWrapper>
          <S.ActionButton>Sign up</S.ActionButton>
          <S.ActionButton border>Sign in</S.ActionButton>
        </S.ActionsWrapper>
      </S.Container>
    </S.Header>
  );
};
