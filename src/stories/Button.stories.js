import { Button } from "./Button";
import "bootstrap/dist/css/bootstrap.min.css";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Micro Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export const Primary = {
  args: {
    primary: true,
    label: "Primary Button",
    backgroundColor: "yellow",
  },
};

export const Secondary = {
  args: {
    label: "Secondary Version",
    backgroundColor: "secondary",
  },
};

export const Success = {
  args: {
    label: "Sucess Button",
    backgroundColor: "success",
  },
};

export const Danger = {
  args: {
    primary: true,
    label: "Delete All!",
    backgroundColor: "danger",
  },
};

export const Warning = {
  args: {
    primary: true,
    label: "Be Careful!",
    backgroundColor: "warning",
  },
};

export const Info = {
  args: {
    label: "Manage Payments",
    backgroundColor: "info",
  },
};

export const Light = {
  args: {
    primary: false,
    label: "Disable Rockets!",
    backgroundColor: "light",
  },
};

export const Dark = {
  args: {
    outline: true,
    label: "Happy Hacking!",
    backgroundColor: "dark",
  },
};




export const Outline = {
  args: {
    outline: true,
    label: "Outline Button",
    backgroundColor: "dark",
  },
};

export const Large = {
  args: {
    size: "btn-lg",
    label: "Large Button",
    outline: true,
    backgroundColor: "info",
  },
};

export const Small = {
  args: {
    size: "btn-sm",
    label: "Small Button",
    outline: true,
    backgroundColor: "dark",
  },
};


export const Disabled = {
  args: {
    size: "btn-lg",
    label: "Large Button",
    primary: true,
    backgroundColor: "dark",
    disabled:true,
  },
};