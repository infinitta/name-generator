import FullName from "models/FullName";
import Name from "models/Name";
import Noun from "models/Noun";
import Surname from "models/Surname";
import { useCallback } from "react";

function useGenerate(names: Name[], surnames: Surname[], count: number) {
  const randomizeIndex = (maxIndex: number): number => {
    return Math.floor(Math.random() * maxIndex);
  };

  const getRandomNoun = useCallback((list: Noun[]): Noun => {
    const nounsCount = list.length;
    const randomIndex = randomizeIndex(nounsCount);
    return list[randomIndex];
  }, []);

  const getRandomName = useCallback((): Name => {
    return getRandomNoun(names) as Name;
  }, [getRandomNoun, names]);

  const getRandomSurname = useCallback((): Surname => {
    return getRandomNoun(surnames) as Surname;
  }, [getRandomNoun, surnames]);

  const generateFullName = useCallback((): FullName => {
    return new FullName(getRandomName(), getRandomSurname());
  }, [getRandomName, getRandomSurname]);

  const generate = useCallback((): FullName[] => {
    const list: FullName[] = [];

    for (let i = 0; i < count; i++) {
      list[i] = generateFullName();
    }

    return list;
  }, [count, generateFullName]);

  return { generate };
}

export default useGenerate;
