import { ThemeOptions } from "@mui/material/styles/createTheme";
import { Theme } from "@emotion/react";
import { Interpolation } from "@emotion/serialize";
import { ColorPalette } from "./ColorPalette";

export const themeOptions: ThemeOptions = {
  palette: {
    primary: { main: ColorPalette.PRIMARY },
    secondary: {
      main: ColorPalette.SECONDARY,
    },
    background: { default: ColorPalette.BACKGROUND_GREY },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },

  typography: {
    fontFamily: "Inter",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
};

export const globalStyles: Interpolation<Theme> = {
  h2: {
    fontFamily: "Inter",
    color: ColorPalette.PRIMARY,
  },

  a: { color: ColorPalette.PRIMARY, textDecoration: "none" },
};
