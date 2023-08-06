// header.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import DataProvider from "../context/DataProvider";
describe("Header Component", () => {
  test("should render alphabet items", () => {
    render(
      <DataProvider>
        <Header />
      </DataProvider>
    );
    const alphabet = ["A", "B", "C"];

    // Check if all the elements from the alphabet array are rendered
    alphabet.forEach((elem) => {
      const link = screen.getByText(elem);
      expect(link).toBeInTheDocument();
    });
  });
});
