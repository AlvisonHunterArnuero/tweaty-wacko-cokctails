import React from "react";
import { render, screen } from "@testing-library/react";
import Ingredients from "./Ingredients";

// Sample test data
const testItem = {
  strIngredient1: "Ingredient 1",
  strIngredient2: "Ingredient 2",
  strIngredient3: null,
  strIngredient4: "Ingredient 4",
};

describe("Ingredients Component", () => {
  test("renders ingredients correctly", () => {
    render(<Ingredients item={testItem} />);

    // Check if the component renders the correct ingredients
    expect(screen.getByText("Ingredient 1")).toBeInTheDocument();
    expect(screen.getByText("Ingredient 2")).toBeInTheDocument();
    expect(screen.queryByText("Ingredient 3")).not.toBeInTheDocument();
    expect(screen.getByText("Ingredient 4")).toBeInTheDocument();
  });

  test("does not render null ingredients", () => {
    // Check if null ingredient is not rendered
    expect(screen.queryByText("null")).not.toBeInTheDocument();
  });
});
