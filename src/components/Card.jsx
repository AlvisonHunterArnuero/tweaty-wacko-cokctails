import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CocktailsContext } from "../context/DataProvider";
import Ingredients from "./Ingredients";
import { CustomBadge } from "./CustomBadge";

export const Card = ({ item }) => {
  const { currentAnimation, setCurrentInstructions, currentInstructions } =
    useContext(CocktailsContext);
  return (
    <div
      data-aos={currentAnimation}
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div className="col-8 mx-auto" key={item.idDrink}>
        <div className="card my-2 text-white bg-dark shadow-lg mb-4 rounded">
          <div className="row g-0">
            <div className="col-lg-4">
              <img
                src={item.strDrinkThumb}
                className="img-fluid h-100"
                alt={item.strDrink}
                title={item.strDrink}
              />
            </div>
            <div className="col-lg-8">
              <div className="card-body">
                <h5 className="card-title fs-2 my-3 text-white cocktail-name">
                  {item.strDrink}
                </h5>
                <h5 className="card-subtitle mb-2">
                  <div className="row justify-content-between align-items-center">
                    <CustomBadge
                      childrenContent={item.strCategory}
                      badgeBGColor="bg-primary"
                    />
                    <CustomBadge
                      childrenContent={item.strAlcoholic}
                      badgeBGColor="bg-secondary"
                    />
                    <CustomBadge
                      childrenContent={item.strGlass}
                      badgeBGColor="bg-danger"
                    />
                  </div>
                </h5>
                <div className="card-text border-top mt-3 pt-2">
                  <div className="row justify-content-between align-items-center ">
                    <div className="col-12">
                      <strong className="text-uppercase text-success">
                        Instructions:{" "}
                      </strong>
                      <button
                        type="button"
                        className="border-0 fs-3 btn"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={item.idDrink}
                        onClick={(e) => setCurrentInstructions("En")}
                      >
                        🇬🇧
                      </button>
                      <button
                        type="button"
                        className="border-0 fs-3 btn"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={item.idDrink}
                        onClick={(e) => setCurrentInstructions("De")}
                      >
                        🇩🇪
                      </button>
                      <button
                        type="button"
                        className="border-0 fs-3 btn"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={item.idDrink}
                        onClick={(e) => setCurrentInstructions("It")}
                      >
                        🇮🇹
                      </button>
                      <div className="row mb-1 mx-1 fs-4">
                        {currentInstructions === "En"
                          ? item.strInstructions
                          : currentInstructions === "It"
                          ? item.strInstructionsIT
                          : item.strInstructionsDE}
                      </div>
                    </div>
                  </div>
                </div>
                <Ingredients item={item} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
};
