import React from "react";
import PropTypes from "prop-types";

function Ingredients({ item }) {
  const arrIngredients = [];
  const { strIngredient1, strIngredient2, strIngredient3, strIngredient4 } =
    item;

  arrIngredients.push(
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4
  );
  return (
    <div className="card-text border-top pt-2 mt-2">
      <div className="row">
        <strong className="text-success text-uppercase">Ingredients:</strong>
      </div>
      <div className="row justify-content-between align-items-center fs-4 text-lg-center text-start">
        {arrIngredients.map((ingredient, index) => {
          if (ingredient == null) return null;
          return (
            <div key={index} className="col-12 col-lg-3">
              <span className="text-warning">{ingredient}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Ingredients.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Ingredients;
