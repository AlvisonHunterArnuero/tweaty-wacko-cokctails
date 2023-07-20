import React from "react";
import { CustomBadge } from "../components/CustomBadge";
import "bootstrap/dist/css/bootstrap.min.css";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Core Components/CustomBadge",
  component: CustomBadge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    badgeBGColor: "bg-primary",
    childrenContent: "Ordinary Drink",
    label: "CustomBadge",
  },
};

export const Danger = {
  args: {
    badgeBGColor: "bg-danger",
    childrenContent: "Alcoholic,Holiday",
    label: "CustomBadge",
  },
};

export const Warning = {
  args: {
    badgeBGColor: "bg-warning",
    childrenContent: "Highball Glass",
    label: "CustomBadge",
  },
};

export const Success = {
  args: {
    badgeBGColor: "bg-success",
    childrenContent: "IBA,Classic,Dairy",
    label: "CustomBadge",
  },
};
