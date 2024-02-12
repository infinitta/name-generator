import React, { useCallback, useEffect, useState } from "react";
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography,
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
          <Typography variant="body2" color="text.secondary">
            {info.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );

  return (
    <Grid container spacing={2}>
      {fullNames.map(renderCard)}
    </Grid>
  );
}

interface INameListProps {
  names: Name[];
  surnames: Surname[];
}

export default NameList;
