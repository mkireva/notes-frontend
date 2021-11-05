import { makeStyles, Theme } from "@material-ui/core/styles";

export const getHeaderClasses = makeStyles(({ spacing, palette }: Theme) => ({
  headerTitle: {
    // using theme properties
    color: palette.primary.main,
    marginLeft: spacing(),
  },
  appBar: {
    backgroundColor: "#fff",
    border: 0,
  },
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },

  toolbar: {
    paddingLeft: 0,
  },
  menuButton: {
    marginLeft: -12,
    // applying theme color palette directly (no useTheme hook)
    color: "blue",
  },
  logoDesktop: {
    height: 64,
  },
  logoMobile: {
    height: 56,
  },
}));
