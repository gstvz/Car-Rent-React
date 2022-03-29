import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Layout } from "@components";
import { GlobalStyle, theme } from "@shared/styles";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Layout />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
