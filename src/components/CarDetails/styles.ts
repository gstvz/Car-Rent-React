import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 5rem 0.6rem;
  margin: 0 auto;
  width: 85%;
`;

export const Car = styled.div`
  flex: 1;

  @media(max-width: 1200px) {
    align-items: center;
    display: flex;
    flex-direction: column;
  };
`

export const CarHeader = styled.div`
  align-items: center;
  display: flex;

  @media(max-width: 1200px) {
    flex-direction: column;
  };
`;

export const MakeLogo = styled.img`
  height: 9rem;
  width: 7rem;

  @media(max-width: 1200px) {
    height: 6rem;
    margin-bottom: 2rem;
    width: 4rem;
  };
`

export const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;

  @media(max-width: 1200px) {
    margin: 0;
  };
`

export const CarMakeAndModel = styled.span`
  font-size: 4rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular_700};

  @media(max-width: 1200px) {
    font-size: 2.6rem;
  };
`

export const CarPrice = styled.span`
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.fontWeights.light_300};

  @media(max-width: 1200px) {
    font-size: 2rem;
    margin: 0 auto;
  };
`

export const CarPhotoContainer = styled.div`
  align-items: center;
  display: flex;
`

export const CarPhoto = styled.img`
  height: 30rem;
  margin: 0 auto;
  width: 60rem;

  @media(max-width: 1200px) {
    height: 12rem;
    width: 24rem;
  };
`;

export const CarIdAndColor = styled.aside`
  width: 6rem;

  @media(max-width: 1200px) {
    text-align: center;
  };
`;

export const CarId = styled.p`
  font-size: 4rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular_700};

  @media(max-width: 1200px) {
    font-size: 2.6rem;
  };
`

export const CarColor = styled.p`
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.fontWeights.light_300};

  @media(max-width: 1200px) {
    font-size: 2.6rem;
  };
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
