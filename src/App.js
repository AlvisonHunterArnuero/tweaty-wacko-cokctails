import React, { useEffect, useContext, useState } from "react";
import { CocktailsContext } from "./context/DataProvider";
import { Spinner } from "./components/Spinner";
import "./App.css";

function App() {
  const {
    alphabet,
    getAPIResults,
    getAPIResultsByName,
    cocktails,
    isLoading,
    fetchCocktail,
    setFetchCocktail,
    currentInstructions,
    setCurrentInstructions,
    fetchCocktailbyName,
    setFetchCocktailbyName,
  } = useContext(CocktailsContext);
  const [currentAnimation, setCurrentAnimation] = useState("flip-up");

  // Main App Functions

  /**
   * Get a Random Value from the animation array to use it in the app cards with different animations.
   * @return {string} A random value of the animation array.
   */

  const onScrollRndAnimation = () => {
    const animations = [
      "fade-up",
      "fade-left",
      "fade-right",
      "flip-up",
      "flip-right",
      "flip-left",
      "flip-down",
      "zoom-in",
      "zoom-in-up",
      "zoom-out-up",
      "zoom-in-left",
      "fade-down-right",
      "fade-up-right",
    ];
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
    <div className='container-fluid pt-5'>
      <div className='row py-2 justify-content-between align-items-center fixed-top bg-dark'>

        <div className='col-12 col-md-2 mx-auto'>
          <p className='text-start text-info fs-3'>
            <i className='fa-solid fa-martini-glass-citrus logo'></i> WACKO
            COCKTAILS
          </p>
        </div>

        <div className='col-12 col-md-6 text-info'>
          <nav aria-label='Page navigation example'>
            <ul className='pagination justify-content-center'>
              {alphabet.map((elem) => {
                return (
                  <li key={elem} className='page-item'>
                    <a
                      onClick={(e) =>{e.preventDefault(); setFetchCocktail(e.target.innerText);}}
                      href='/'
                      className='page-link bg-dark text-warning fs-6'
                    >
                      {elem}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className='col-12 col-md-3 mx-auto'>
          <div className='input-group'>
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
          </div>
        </div>

      </div> {/* This is the end of the Fixed Nav Row, at the top of the page  */}


      <div className='row justify-content-around align-items-center mt-5'>
        {isLoading ? (
          <Spinner />
        ) : (
          cocktails.map((item) => {
            return (
              <div
                data-aos={currentAnimation}
                data-aos-easing='linear'
                data-aos-duration='900'
              >
                <div className='col-8 mx-auto' key={item.idDrink}>
                  <div
                    className='card my-2 text-white bg-dark shadow-lg mb-5 rounded'>
                    <div className='row g-0'>
                      <div className='col-md-4'>
                        <img
                          src={item.strDrinkThumb}
                          className='img-fluid rounded-start'
                          alt={item.strDrink}
                          title={item.strDrink}
                        />
                      </div>
                      <div className='col-md-8'>
                        <div className='card-body'>
                          <h5 className='card-title fs-2 my-3 text-white cocktail-name'>
                            {item.strDrink}
                          </h5>
                          <h6 className='card-subtitle mb-2 text-muted'>
                            Category:{" "}
                            <span className='badge rounded-pill bg-primary mx-1'>
                              {item.strCategory}
                            </span>
                            Alcoholic:{" "}
                            <span className='badge rounded-pill bg-secondary mx-1'>
                              {item.strAlcoholic}
                            </span>
                            Glass Type:{" "}
                            <span className='badge rounded-pill bg-danger mx-1'>
                              {item.strGlass}
                            </span>
                            Tags:{" "}
                            <span className='badge rounded-pill bg-danger mx-1'>
                              {item.strTags}
                            </span>
                          </h6>
                          <div className='card-text border-top mt-3'>
                            <div className='row justify-content-between align-items-center '>
                              <div className='col'>
                                <strong className='text-info text-uppercase'>
                                  Instructions:{" "}
                                </strong>
                              </div>
                              <div className='col text-end'>
                                Translations:{" "}
                                <button
                                  type='button'
                                  className='border-0 fs-3 btn'
                                  data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"
                                  onClick={(e) => setCurrentInstructions("En")}
                                >
                                  🇬🇧
                                </button>
                                <button
                                  type='button'
                                  className='border-0 fs-3 btn'
                                  data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"
                                  onClick={(e) => setCurrentInstructions("De")}
                                >
                                  🇩🇪
                                </button>
                                <button
                                  type='button'
                                  className='border-0 fs-3 btn'
                                  onClick={(e) => setCurrentInstructions("It")}
                                >
                                  🇫🇷
                                </button>
                              </div>
                            </div>
                            <div className='row mb-1 mx-1'>
                              {currentInstructions === "En"
                                ? item.strInstructions
                                : currentInstructions === "It"
                                ? item.strInstructionsIT
                                : item.strInstructionsDE}
                            </div>
                          </div>
                          <div className='card-text border-top pt-2 mt-2'>
                            <div className='row'>
                              <strong className='text-success text-uppercase'>
                                Ingredients:
                              </strong>
                            </div>
                            <div className='row justify-content-between align-items-center small'>
                              <div className='col-3'>
                                <span className='text-warning'>
                                <i class="fa-solid fa-circle-1"></i> {item.strIngredient1}
                                </span>
                              </div>
                              <div className='col-3'>
                                <span className='text-warning'>
                                {item.strIngredient2}
                                </span>
                              </div>
                              <div className='col-3'>
                                <span className='text-warning'>
                                {item.strIngredient3}
                                </span>
                              </div>
                              <div className='col-3'>
                                <span className='text-warning'>
                                  {item.strIngredient4}
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className='card-text border-top mt-3'>
                            <small class='text-muted'>
                              Last updated on {item.dateModified}
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
        <div className='col'></div>
      </div>
    </div>
  );
}

export default App;
