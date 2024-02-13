import React, { useCallback, useEffect, useState } from "react";
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography,
  Button,
  Stack,
  Box,
} from "@mui/material";
import { grey, brown, purple } from "@mui/material/colors";
import FullName from "models/FullName";
import Gender from "enums/Gender";
import Name from "models/Name";
import Surname from "models/Surname";
import useGenerate from "hooks/useGenerate";

function NameList({ names, surnames }: INameListProps): JSX.Element {
  const [fullNames, setFullNames] = useState<FullName[]>([]);

  const { generate } = useGenerate(names, surnames, 20);

  const neuterNameColour = grey[500];
  const femaleNameColour = purple[500];
  const maleNameColour = brown[500];

  const genderColours = {
    [Gender.Neuter]: neuterNameColour,
    [Gender.Female]: femaleNameColour,
    [Gender.Male]: maleNameColour,
  };

  const generateNames = useCallback(() => {
    window.scrollTo(0, 0);
    setFullNames(generate());
  }, [generate]);

  useEffect(() => {
    generateNames();
  }, [generateNames]);

  const renderCard = (info: FullName) => (
    <Grid item xs={12} md={6} lg={4} xl={3} key={info.value}>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: genderColours[info.gender] }}
              aria-label="name"
            >
              {info.initials}
            </Avatar>
          }
          title={info.value}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            whiteSpace="break-spaces"
          >
            {info.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );

  return (
    <Box margin={3} padding={2}>
      <Stack marginBottom={4} direction="row" justifyContent="space-between">
        <Typography variant="h4">Gerador de nomes de Infinitta</Typography>
        <Button variant="contained" onClick={generateNames}>
          Gerar
        </Button>
      </Stack>
      <Grid container spacing={2}>
        {fullNames.map(renderCard)}
      </Grid>
      <Stack
        width={{ xs: "100%", md: "50%", lg: "25%" }}
        marginTop={4}
        direction="row"
      >
        <Button variant="contained" onClick={generateNames} fullWidth>
          Gerar
        </Button>
      </Stack>
    </Box>
  );
}

interface INameListProps {
  names: Name[];
  surnames: Surname[];
}

export default NameList;
