import { useCallback, useEffect, useState } from "react";
import Gender from "enums/Gender";
import Origin from "enums/Origin";
import Rarity from "enums/Rarity";
import useSheets from "hooks/useSheets";
import Name from "models/Name";

function useNames() {
  const [names, setNames] = useState<Name[]>();

  const { getNames } = useSheets();

  const formatName = useCallback((nameRow: string[]): Name => {
    const [name, gender, origin, rarity] = nameRow;

    return new Name(
      name,
      gender as keyof typeof Gender,
      origin as keyof typeof Origin,
      rarity as keyof typeof Rarity
    );
  }, []);

  const formatNamesList = useCallback(
    (sheet: string[][]) => {
      sheet.shift();
      const formattedNames = sheet.map(formatName);
      setNames(formattedNames);
    },
    [formatName]
  );

  const handleGetNames = useCallback(async () => {
    const namesSheet = await getNames();
    formatNamesList(namesSheet);
  }, [getNames, formatNamesList]);

  useEffect(() => {
    handleGetNames();
  }, [handleGetNames]);

  return names;
}

export default useNames;
