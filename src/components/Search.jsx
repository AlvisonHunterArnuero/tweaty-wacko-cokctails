import React, { useContext} from "react";
import { CocktailsContext } from "../context/DataProvider";

export const Search = () => {
    const {
        setFetchCocktailbyName
      } = useContext(CocktailsContext);
    return (
      <> <div className='input-group'>
      <input
        type='text'
        onChange={(e) => setFetchCocktailbyName(e.target.value)}
        className='form-control'
        placeholder='Type in your search'
        aria-label='Type in your search'
        aria-describedby='basic-addon2'
      />
      <span className='input-group-text' id='basic-addon2'>
        <i className='fa-solid fa-magnifying-glass'></i>
      </span>
    </div></>
    );
  };