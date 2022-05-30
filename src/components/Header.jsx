import React, { useContext} from "react";
import { CocktailsContext } from "../context/DataProvider";

export const Header = () => {
    const {
        alphabet,
        setFetchCocktail,
      } = useContext(CocktailsContext);
    return (
      <>  <nav aria-label='Page navigation example'>
      <ul className='pagination justify-content-center'>
        {alphabet.map((elem) => {
          return (
            <li key={elem} className='page-item'>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setFetchCocktail(e.target.innerText);
                }}
                href='/'
                className='page-link bg-dark text-warning fs-6'
              >
                {elem}
              </a>
            </li>
          );
        })}
      </ul>
    </nav></>
    );
  };