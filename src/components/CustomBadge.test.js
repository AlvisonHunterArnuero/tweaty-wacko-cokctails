import React from "react";
import { render, screen } from "@testing-library/react";
import { CustomBadge } from "./CustomBadge";

describe("CustomBadge", () => {
  it("renders the badge with the correct childrenContent and badgeBGColor", () => {
    const childrenContent = "Test Content";
    const badgeBGColor = "bg-red";
    render(
      <CustomBadge
        childrenContent={childrenContent}
        badgeBGColor={badgeBGColor}
      />
    );

    // Check if the badge is rendered with the correct childrenContent and badgeBGColor
    const badgeElement = screen.getByText(childrenContent);
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass(`badge rounded-pill ${badgeBGColor}`);
  });
});
