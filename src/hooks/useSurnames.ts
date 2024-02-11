import { useCallback, useEffect, useState } from "react";
import Origin from "enums/Origin";
import Rarity from "enums/Rarity";
import useSheets from "hooks/useSheets";
import Surname from "models/Surname";

function useSurnames() {
  const [surnames, setSurnames] = useState<Surname[]>();

  const { getSurnames } = useSheets();

  const formatSurname = useCallback((surnameRow: string[]): Surname => {
    const [surname, origin, rarity] = surnameRow;

    return new Surname(
      surname,
      origin as keyof typeof Origin,
      rarity as keyof typeof Rarity
    );
  }, []);

  const formatSurnamesList = useCallback(
    (sheet: string[][]) => {
      sheet.shift();
      const formattedSurnames = sheet.map(formatSurname);
      setSurnames(formattedSurnames);
    },
    [formatSurname]
  );

  const handleGetSurnames = useCallback(async () => {
    const surnamesSheet = await getSurnames();
    formatSurnamesList(surnamesSheet);
  }, [getSurnames, formatSurnamesList]);

  useEffect(() => {
    handleGetSurnames();
  }, [handleGetSurnames]);

  return surnames;
}

export default useSurnames;
