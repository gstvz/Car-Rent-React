import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./shared/styles/GlobalStyle";
import { theme } from "./shared/styles/theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        App
      </div>
    </ThemeProvider>
  );
}

export default App;
