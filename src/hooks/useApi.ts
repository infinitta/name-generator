import SheetsResponse from "models/SheetsResponse";
import { useCallback } from "react";

function useApi(resource: string) {
  const API_URL: string = process.env.REACT_APP_SHEETS_API_URL!;
  const API_KEY: string = process.env.REACT_APP_SHEETS_API_KEY!;

  const get = useCallback(async (): Promise<string[][]> => {
    const response = await fetch(`${API_URL}/${resource}?key=${API_KEY}`);

    if (response.ok) {
      const sheetsResponse: SheetsResponse =
        (await response.json()) as unknown as SheetsResponse;
      return sheetsResponse.values;
    }

    throw new Error("Error while fetching data");
  }, [API_KEY, API_URL, resource]);

  return { get };
}

export default useApi;
