import React, { useEffect, useContext } from "react";
import { CocktailsContext } from "./context/DataProvider";
import { animations } from "./helpers";
import { Spinner } from "./components/Spinner";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Card } from "./components/Card";

import "./App.css";

function App() {
  const {
    getAPIResults,
    getAPIResultsByName,
    cocktails,
    isLoading,
    fetchCocktail,
    setCurrentAnimation,
    fetchCocktailbyName,
  } = useContext(CocktailsContext);

  // Main App Functions

  /**
   * Get a Random Value from the animation array to use it in the app cards with different animations.
   * @return {string} A random value of the animation array.
   */

  const onScrollRndAnimation = () => {
    return setCurrentAnimation(
      animations[Math.floor(Math.random() * animations.length)]
    );
  };

  /**
   * When Scrolling this App, the onScrollRndAnimation function is called.
   * @return {CallBackFunction} It calls the onScrollRndAnimation function.
   */

  window.addEventListener("scroll", () => {
    onScrollRndAnimation();
  });

  // State properties and rendering cases management
  useEffect(() => {
    getAPIResults();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getAPIResults();
    // eslint-disable-next-line
  }, [fetchCocktail]);

  useEffect(() => {
    getAPIResultsByName();
    // eslint-disable-next-line
  }, [fetchCocktailbyName]);

  return (
    <div className='container-fluid'>
      <div className='row my-auto px-3 pt-3 fixed-top bg-dark'>
        <div className='col-12 col-md-2'>
          <p className='text-start text-info fs-3'>
            <i className='fa-solid fa-martini-glass-citrus logo'></i> WACKO
            COCKTAILS
          </p>
        </div>

        <div className='col-12 col-md-6 text-info'>
          <Header />
        </div>

        <div className='col-12 col-md-4'>
          <Search />
        </div>
      </div> {/* This is the end of the Fixed Nav Row, at the top of the page  */}
      <div className='row justify-content-around align-items-center mt-5'>
        {isLoading ? (
          <Spinner />
        ) : (
          cocktails.map((item) => {
            return <Card item={item} />;
          })
        )}
      </div>
    </div>
  );
}

export default App;
