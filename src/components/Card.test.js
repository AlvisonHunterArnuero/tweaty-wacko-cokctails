import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";
import DataProvider from "../context/DataProvider";

describe("Card Component", () => {
  const item = {
    idDrink: "123",
    strDrink: "Test Cocktail",
    strCategory: "Category",
    strAlcoholic: "Alcoholic",
    strGlass: "Glass",
    strTags: "Tags",
    strInstructions: "Instructions EN",
    strInstructionsDE: "Instructions DE",
    strInstructionsIT: "Instructions IT",
    strDrinkThumb: "test-image.jpg",
  };

  test("renders Card component correctly", () => {
    render(
      <DataProvider>
        <Card item={item} />
      </DataProvider>
    );

    // Assert that the component renders correctly with the provided item data
    expect(screen.getByText(item.strDrink)).toBeInTheDocument();
    expect(screen.getByText(item.strCategory)).toBeInTheDocument();
    expect(screen.getByText(item.strAlcoholic)).toBeInTheDocument();
    expect(screen.getByText(item.strGlass)).toBeInTheDocument();
    expect(screen.getByText(item.strTags)).toBeInTheDocument();
    expect(screen.getByAltText(item.strDrink)).toBeInTheDocument();
    expect(screen.getByText(item.strInstructions)).toBeInTheDocument();
  });
});
