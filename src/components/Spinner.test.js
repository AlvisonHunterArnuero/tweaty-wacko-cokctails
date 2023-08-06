import React from "react";
import { render, screen } from "@testing-library/react";
import { Spinner } from "./Spinner";

test("renders the Spinner component correctly", () => {
  // Arrange
  const spinnerType = "spinner-type";
  const textColor = "text-color";
  const spinnerCaption = "Custom Loading Text";

  render(
    <Spinner
      spinnerType={spinnerType}
      textColor={textColor}
      spinnerCaption={spinnerCaption}
    />
  );
  const spinnerElement = screen.getByRole("status");
  expect(spinnerElement).toBeInTheDocument();
  expect(spinnerElement).toHaveClass(spinnerType);
  expect(spinnerElement).toHaveClass(textColor);
  expect(spinnerElement).toHaveTextContent(spinnerCaption);
});
