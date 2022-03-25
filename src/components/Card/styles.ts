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
