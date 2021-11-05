import { ThemeOptions } from "@mui/material/styles/createTheme"
import {Theme} from "@emotion/react"
import {Interpolation} from "@emotion/serialize";


export const themeOptions: ThemeOptions = {
  palette: {
    primary: { main: "#003C91" },
    background: { default: "#EDF2FA" },
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
  a: { color: "#001862", textDecoration: "none" },
}
