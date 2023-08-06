import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import DataProvider from "../context/DataProvider";
import { Search } from "./Search";

describe("Search component", () => {
  test("should call setFetchCocktailbyName when typing into the input field", () => {
    render(
      <DataProvider>
        <Search />
      </DataProvider>
    );

    // Find the input field by its placeholder text
    const inputElement = screen.getByPlaceholderText("Type in your search");

    // Simulate typing into the input field
    const searchText = "Margarita";
    fireEvent.change(inputElement, { target: { value: searchText } });
  });
});
