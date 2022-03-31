import styled from "styled-components";

type Props = {
  forward?: boolean;
};

export const Button = styled.button<Props>`
  align-items: center;
  ${({ theme, forward }) =>
    forward ? `background-color: ${theme.colors.text}` : "background: none"};
  ${({ theme, forward }) =>
    forward ? "border: none" : `border: 1px solid ${theme.colors.text}`};
  border-radius: 25px;
  ${({ theme, forward }) =>
    forward ? `color: ${theme.colors.primary}` : `color: ${theme.colors.text}`};
  display: flex;
  font-weight: ${({ theme }) => theme.fontWeights.light_300};
  height: 1rem;
  padding: 2rem;
  width: fit-content;
`;

export const Arrow = styled.img<Props>`
  ${({ forward }) =>
    forward
      ? `filter: invert(97%) sepia(0%) saturate(2%) hue-rotate(97deg) brightness(109%) contrast(100%)`
      : `filter: invert(16%) sepia(7%) saturate(536%) hue-rotate(202deg) brightness(98%) contrast(90%)`};
  height: 2rem;
  ${({ forward }) => (forward ? "margin-left: 1rem" : "margin-right: 1rem")};
  ${({ forward }) => (forward ? "" : "transform: rotateZ(-180deg)")};
  width: 2rem;
`;
