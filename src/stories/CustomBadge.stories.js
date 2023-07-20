import { CustomBadge } from "../components/CustomBadge";
import "bootstrap/dist/css/bootstrap.min.css";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Core Components/CustomBadge",
  component: CustomBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

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
