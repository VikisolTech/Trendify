import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as ReactReduxProvider } from "react-redux";
import { ThemeProvider as MuiProvider, createTheme } from "@mui/material";
// import store from "./main-test/redux/Store";
import store from "./redux/Store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
const MuiTheme = createTheme();
root.render(
  <React.StrictMode>
    <ReactReduxProvider store={store}>
      <ChakraProvider>
        <MuiProvider theme={MuiTheme}>
          <App />
        </MuiProvider>
      </ChakraProvider>
    </ReactReduxProvider>
  </React.StrictMode>
);
reportWebVitals();
