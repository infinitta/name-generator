import React from "react";
import { Avatar, Card, CardHeader, Grid, ThemeProvider } from "@mui/material";
import mainTheme from "theme/main";
import useNames from "hooks/useNames";
import useSurnames from "hooks/useSurnames";
import Name from "models/Name";
import { blue, red } from "@mui/material/colors";
import Surname from "models/Surname";
import Noun from "models/Noun";

function App() {
  const names = useNames();
  const surnames = useSurnames();

  const renderCard = (info: Noun, bgcolor: string) => (
    <Grid item xs={12} md={6} lg={4} xl={3} key={info.noun}>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor }} aria-label="recipe">
              {info.initial}
            </Avatar>
          }
          title={info.noun}
          subheader={info.description}
        />
      </Card>
    </Grid>
  );

  const renderName = (name: Name) => renderCard(name, red[500]);

  const renderSurname = (surname: Surname) => renderCard(surname, blue[500]);

  return (
    <ThemeProvider theme={mainTheme}>
      <Grid container spacing={2}>
        {names?.map(renderName)}
        {surnames?.map(renderSurname)}
      </Grid>
    </ThemeProvider>
  );
}

export default App;
