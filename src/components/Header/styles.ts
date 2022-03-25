import styled from "styled-components";

type ActionButtonProps = {
  border?: boolean;
};

export const Header = styled.header`
  align-items: center;
  box-shadow: 0px 10px 30px #0000001a;
  display: flex;
  height: 8.4rem;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 85%;
`;

export const LogoWrapper = styled.div`
  align-items: baseline;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  gap: 5px;
`;

export const LogoExotic = styled.p`
  font-size: 2.4rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium_500};
`;

export const LogoCars = styled.p`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular_400};
`;

export const SearchParamsWrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.input};
  border-radius: 18px;
  display: flex;
  height: 4rem;
  justify-content: space-between;
  width: 66rem;
`;

export const SearchParam = styled.div`
  align-items: center;
  display: flex;
  padding: 0.6rem 2rem;
`;

export const SearchParamsIcon = styled.img`
  height: 1.6rem;
  width: 1.3rem;
`;

export const SearchParamsInput = styled.input`
  background-color: ${({ theme }) => theme.colors.input};
  border: none;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium_500};
  margin-left: 0.8rem;
`;

export const SearchButton = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 50%;
  display: flex;
  height: 3rem;
  justify-content: center;
  margin-right: 0.5rem;
  width: 3rem;
`;

export const ActionsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 16rem;
`;

export const ActionButton = styled.button<ActionButtonProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  ${({ border, theme }) =>
    border ? `border: 2px solid ${theme.colors.tertiary}` : "border: none"};
  border-radius: 13px;
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular_700};
  padding: 0.6rem 1rem;
`;
