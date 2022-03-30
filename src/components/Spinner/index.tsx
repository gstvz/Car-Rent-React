import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { useTheme } from "styled-components";

type Props = {
  isLoading: boolean;
};

const style = css`
  margin: 5rem auto;
`;

export const Spinner = ({ isLoading }: Props) => {
  const theme = useTheme();

  return <ClipLoader color={theme.colors.tertiary} loading={isLoading} css={style} size={150} />;
};
