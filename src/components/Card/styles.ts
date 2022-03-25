import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  width: 26rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CarInfo = styled.div``;

export const CarMake = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.7rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular_700};
  margin-bottom: 0.2rem;
`;

export const CarModel = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.7rem;
  font-weight: ${({ theme }) => theme.fontWeights.light_300};
`;

export const Options = styled.div`
  display: flex;
  gap: 0.2rem;
`

export const Dot = styled.div`
  background-color: ${({ theme }) => theme.colors.dot};
  border-radius: 10px;
  height: 0.5rem;
  width: 0.5rem;
`

export const CarPhoto = styled.img`
  margin: 1.6rem auto;
  width: 20rem;
`;

export const CarPrice = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.7rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular_700};
  text-align: right;

  & span {
    font-weight: ${({ theme }) => theme.fontWeights.light_300};
  }
`;
