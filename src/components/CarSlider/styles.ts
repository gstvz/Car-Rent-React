import styled from "styled-components";
import { Swiper } from "swiper/react";

type ButtonSide = {
  side: string;
};

type ArrowProps = {
  forward?: boolean;
};

type CardProps = {
  isActive: boolean;
}

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 85%;
`;

export const SlideButton = styled.button<ButtonSide>`
  align-items: center;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: center;
  height: 3rem;
  margin-left: 5rem;
  margin-right: 5rem;
  padding: 2rem;
  position: absolute;
  ${({ side }) => (side === "left" ? "left: 0" : "right: 0")};
  width: 3rem;

  @media(max-width: 1200px) {
    margin-left: 2rem;
    margin-right: 2rem;
  };
`;

export const Arrow = styled.img<ArrowProps>`
  filter: invert(97%) sepia(0%) saturate(2%) hue-rotate(97deg) brightness(109%)
    contrast(100%);
  ${({ forward }) => (forward ? "" : "transform: rotateZ(-180deg);")}
  width: 2rem;
`;

export const Slider = styled(Swiper)`
  height: 20rem;
  margin-bottom: 6rem;

  @media(max-width: 1200px) {
    margin: 0 auto;
    width: 20rem;
  };
`;

export const Slide = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;

  @media(max-width: 1200px) {
    margin: 0 auto;
    width: 15rem;
  };
`;

export const Card = styled.div<CardProps>`
  align-items: center;
  background: linear-gradient(90deg, #b9baf1 0%, #e0d3ef 100%);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  height: ${({ isActive }) => isActive ? "18rem" : "14rem"};
  position: relative;
  width: ${({ isActive }) => isActive ? "20rem" : "16rem"};

  @media(max-width: 1200px) {
    height: 10rem;
    width: 14rem;
  };
`;

export const CarPhoto = styled.img`
  position: absolute;
  left: 10%;
  right: 0;
  top: 10%;
  width: 140%;

  @media(max-width: 1200px) {
    left: 20%;
    width: 100%;
  };
`;
