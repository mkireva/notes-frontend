import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const getHeaderClasses = makeStyles(({ spacing, palette }: Theme) => ({
  appBar: {
    backgroundColor: "#fff",
    border: 0,
  },
  menuButton: {
    marginLeft: -12,
    // applying theme color palette directly (no useTheme hook)
    color: "#b66e60",
  },
  logoMobile: {
    height: 56,
  },
  logoDesktop: {
    height: 64,
  },
}));
