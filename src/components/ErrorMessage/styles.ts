import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const ForbiddenIcon = styled.img`
  filter: invert(36%) sepia(94%) saturate(7391%) hue-rotate(357deg) brightness(113%) contrast(132%);
  height: 30rem;
  width: 30rem;
`

export const Message = styled.p`
  color: #fc0303;
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular_700};
  margin-top: 3rem;
`