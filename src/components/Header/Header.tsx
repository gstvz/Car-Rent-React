import * as S from "./styles";
import icon_calendar from "../../assets/icons/icon_calendar.svg";
import icon_map from "../../assets/icons/icon_map.svg";
import icon_search from "../../assets/icons/icon_search.svg";

export const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <S.LogoWrapper>
          <S.LogoExotic>EXOTIC</S.LogoExotic>
          <S.LogoCars>CARS</S.LogoCars>
        </S.LogoWrapper>
        <S.SearchParamsWrapper>
          <S.SearchParam>
            <S.SearchParamsIcon src={icon_map} />
            <S.SearchParamsInput placeholder="Location" disabled />
          </S.SearchParam>
          <S.SearchParam>
            <S.SearchParamsIcon src={icon_calendar} />
            <S.SearchParamsInput type="date" disabled />
          </S.SearchParam>
          <S.SearchParam>
            <S.SearchParamsIcon src={icon_calendar} />
            <S.SearchParamsInput type="date" disabled />
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
