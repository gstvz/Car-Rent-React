import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 5rem 0.6rem;
  margin: 0 auto;
  width: 85%;
`;

export const Car = styled.div`
  flex: 1;
`

export const CarHeader = styled.div`
  align-items: center;
  display: flex;
`;

export const MakeLogo = styled.img`
  height: 9rem;
  width: 7rem;
`

export const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
`

export const CarMakeAndModel = styled.span`
  font-size: 4rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular_700};
`

export const CarPrice = styled.span`
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.fontWeights.light_300};
`

export const CarPhotoContainer = styled.div`
  align-items: center;
  display: flex;
`

export const CarPhoto = styled.img`
  height: 30rem;
  margin: 0 auto;
  width: 60rem;
`;

export const CarIdAndColor = styled.aside``;

export const CarId = styled.p`
  font-size: 4rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular_700};
`

export const CarColor = styled.p`
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.fontWeights.light_300};
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

export const ErrorButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const ErrorContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 100%;
`
