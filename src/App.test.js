import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import DataProvider from "./context/DataProvider";

describe("App Component", () => {
  test("Renders the header, search, and cards", () => {
    render(
      <DataProvider>
        <App />
      </DataProvider>
    );

    const headerElement = screen.getByText(/WACKO COCKTAILS/i);
    expect(headerElement).toBeInTheDocument();

    const searchElement = screen.getByPlaceholderText("Type in your search");
    expect(searchElement).toBeInTheDocument();
  });
});
