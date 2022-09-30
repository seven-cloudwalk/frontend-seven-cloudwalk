import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";
import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
        <ToastContainer
         position="top-right"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         theme="dark"
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
      />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
