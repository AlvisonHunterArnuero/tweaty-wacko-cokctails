import { Spinner } from "../components/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Core Components/Spinner",
  component: Spinner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BorderSpinner = {
  args: {
    label: "Border Spinner",
    textColor: "text-primary",
    spinnerCaption: "Loading data...",
    spinnerType: "spinner-border",
  },
};

export const GrowingSpinner = {
  args: {
    label: "Growing Spinner",
    textColor: "text-danger",
    spinnerCaption: "Loading data...",
    spinnerType: "spinner-grow",
  },
};
