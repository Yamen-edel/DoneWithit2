import { DefaultTheme } from "@react-navigation/native";

export default {
    // contains bunch of props that we want to override
  ...DefaultTheme, //using spreadoperator we copy all the props of DefaultTheme and ovrride them
  colors: {
    ...DefaultTheme.colors,
    primary: "#fc5c65",
    background: "#ffffff",
  },
};
