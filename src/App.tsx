import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home/Home";
import { GlobalStyle } from "./shared/styles/GlobalStyle";
import { theme } from "./shared/styles/theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
