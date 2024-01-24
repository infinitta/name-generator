import React from "react";
import { ThemeProvider, Typography } from "@mui/material";
import mainTheme from "./theme/main";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Typography>Hello, Tellus!</Typography>
    </ThemeProvider>
  );
}

export default App;
