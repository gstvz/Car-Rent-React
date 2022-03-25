import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      input: string;
      text: string;
      secondary_text: string;
    };
    fontWeights: {
      light_300: string;
      regular_400: string;
      medium_500: string;
      regular_700: string;
    };
  }
}
