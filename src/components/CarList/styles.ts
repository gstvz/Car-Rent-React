import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 5rem 0.6rem;
  margin: 0 auto;
  width: 85%;
`;

export const CarList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
  width: 100%;

  @media(max-width: 1200px) {
    align-items: center;
    flex-direction: column;
  };
`;

export const ErrorContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 100%;
`;
