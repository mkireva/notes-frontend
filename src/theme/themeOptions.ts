import { ThemeOptions } from "@mui/material/styles/createTheme"
import {Theme} from "@emotion/react"
import {Interpolation} from "@emotion/serialize";
import {ColorPalette} from "./ColorPalette";


export const themeOptions: ThemeOptions = {
  palette: {
    primary: { main: ColorPalette.PRIMARY },
    background: { default: ColorPalette.BACKGROUND },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
}

export const globalStyles: Interpolation<Theme> = {
  a: { color: ColorPalette.PRIMARY, textDecoration: "none" },
}