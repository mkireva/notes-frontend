import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const getHeaderClasses = makeStyles(({ spacing, palette }: Theme) => ({
  appBar: {
    backgroundColor: palette.secondary.main,
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
    color: palette.primary.main,
  },
  logoMobile: {
    height: 56,
  },
  logoDesktop: {
    height: 64,
  },
}));
