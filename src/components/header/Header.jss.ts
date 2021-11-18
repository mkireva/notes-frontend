import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const getHeaderClasses = makeStyles(({ spacing, palette }: Theme) => ({
  appBar: {
    backgroundColor: "#fff",
    border: 0,
  },
  root: {
    flexGrow: -1,
  },
  grow: {
    flexGrow: 1,
  },

  toolbar: {
    paddingLeft: 0,
  },
  menuButton: {
    // applying theme color palette directly (no useTheme hook)
    color: "#00883a",
  },
  logoMobile: {
    height: 56,
  },
  logoDesktop: {
    height: 64,
  },
}));
