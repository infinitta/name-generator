import React from "react";
import { ThemeProvider } from "@mui/material";
import mainTheme from "theme/main";
import useNames from "hooks/useNames";
import useSurnames from "hooks/useSurnames";
import NameList from "pages/NameList";

function App() {
  const names = useNames();
  const surnames = useSurnames();

  return (
    <ThemeProvider theme={mainTheme}>
      {names?.length && surnames?.length && (
        <NameList names={names} surnames={surnames} />
      )}
    </ThemeProvider>
  );
}

export default App;
