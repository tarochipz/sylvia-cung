import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import { red } from "@mui/material/colors";
const rootElement: Element = document.getElementById("root")!;
const root = createRoot(rootElement);

const appTheme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    // secondary: {},
    action: {
      selected: "#E7A615",
      hover: red[100],
      disabled: "#9B9B9B",
    },
  },
  typography: {
    fontFamily: "Inconsolata",
  },
});

root.render(
  <ThemeProvider theme={appTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
