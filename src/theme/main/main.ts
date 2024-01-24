import { ThemeOptions, createTheme } from "@mui/material/styles";

const mainThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#2e8dd1",
    },
    secondary: {
      main: "#d0312d",
    },
    error: {
      main: "#dd2a27",
    },
    warning: {
      main: "#f9ae00",
    },
    info: {
      main: "#0096ed",
    },
    success: {
      main: "#10a045",
    },
  },
  typography: {
    fontFamily: "Barlow",
  },
};

const mainTheme = createTheme(mainThemeOptions);

export default mainTheme;
