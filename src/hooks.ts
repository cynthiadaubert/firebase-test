import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { atom, useRecoilValue, selector, useSetRecoilState } from "recoil";

const queryState = atom({
  key: "query",
  default: "",
});

const resultsState = selector({
  key: "searchResults",
  get: async ({ get }) => {
    const valorQuery = get(queryState);
    if (valorQuery) {
      const response = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=" + valorQuery
      );
      const json = await response.json();
      /*       console.log("vvvv", valorQuery); */
      return json.results;
    } else {
      return [];
    }
  },
});

export function useSearchResults(): any[] {
  const params = useParams();
  const query = params.query;
  const setRecoilQuery = useSetRecoilState(queryState);
  const results = useRecoilValue(resultsState);

  console.log("el valor de query en recoil");

  useEffect(() => {
    console.log("soy el custom hook", query);
    setRecoilQuery(results);
  }, [query]);

  return results;
}
