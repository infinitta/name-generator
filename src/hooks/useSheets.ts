import useApi from "hooks/useApi";

function useSheets() {
  const { get: getNames } = useApi("Nomes");
  const { get: getSurnames } = useApi("Sobrenomes");

  return { getNames, getSurnames };
}

export default useSheets;
