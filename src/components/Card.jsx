import React, { useContext } from "react";
import { CocktailsContext } from "../context/DataProvider";

export const Card = ({ item }) => {
  const { currentAnimation, setCurrentInstructions, currentInstructions } =
    useContext(CocktailsContext);

  return (
    <>
      <div
        data-aos={currentAnimation}
        data-aos-easing='linear'
        data-aos-duration='900'
      >
        <div className='col-8 mx-auto' key={item.idDrink}>
          <div className='card my-2 text-white bg-dark shadow-lg mb-5 rounded'>
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
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Tooltip on top'
                          onClick={(e) => setCurrentInstructions("En")}
                        >
                          🇬🇧
                        </button>
                        <button
                          type='button'
                          className='border-0 fs-3 btn'
                          data-bs-toggle='tooltip'
                          data-bs-placement='top'
                          title='Tooltip on top'
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
                          <i class='fa-solid fa-circle-1'></i>{" "}
                          {item.strIngredient1}
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
    </>
  );
};
