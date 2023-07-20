import { Spinner } from "../components/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "Core Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
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
