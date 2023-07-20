import React, { createContext, useState } from "react";
import { alphabet } from "../helpers";
export const CocktailsContext = createContext();

const DataProvider = ({ children }) => {
  const [fetchCocktail, setFetchCocktail] = useState("a");
  const [fetchCocktailbyName, setFetchCocktailbyName] = useState("margarita");
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNotFound, setPageNotFound] = useState(false);
  const [currentInstructions, setCurrentInstructions] = useState("En");
  const [currentAnimation, setCurrentAnimation] = useState("flip-up");

  // API fetch event to retrieve the data needed on this component
  const getAPIResults = async () => {
    let urlByLetter = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${fetchCocktail}`;
    setIsLoading(true);
    const fetchedDataResults = await fetch(urlByLetter);
    if (fetchedDataResults.status === 404) {
      setPageNotFound(true);
      return;
    } else {
      const res_JSON = await fetchedDataResults.json();
      let { drinks } = await res_JSON;
      setCocktails(drinks);
      setIsLoading(false);
      setPageNotFound(false);
      return res_JSON;
    }
  };

  const getAPIResultsByName = async () => {
    let urlByName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${fetchCocktailbyName}`;
    setIsLoading(true);
    const fetchedDataResultsByName = await fetch(urlByName);

    if (fetchedDataResultsByName.status === 404) {
      setPageNotFound(true);
      return;
    } else {
      const res_JSON = await fetchedDataResultsByName.json();
      let { drinks } = await res_JSON;
      setCocktails(drinks);
      setIsLoading(false);
      setPageNotFound(false);
      return res_JSON;
    }
  };

  return (
    <CocktailsContext.Provider
      value={{
        alphabet,
        getAPIResults,
        getAPIResultsByName,
        fetchCocktail,
        setFetchCocktail,
        cocktails,
        setCocktails,
        isLoading,
        setIsLoading,
        pageNotFound,
        setPageNotFound,
        currentAnimation,
        setCurrentAnimation,
        currentInstructions,
        setCurrentInstructions,
        fetchCocktailbyName,
        setFetchCocktailbyName,
      }}
    >
      {children}
    </CocktailsContext.Provider>
  );
};
export default DataProvider;
