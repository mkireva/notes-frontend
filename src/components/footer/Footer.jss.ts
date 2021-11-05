import { makeStyles, Theme } from "@material-ui/core/styles";

export const getFooterClasses = makeStyles(({ palette }: Theme) => ({
  footerText: {
    // using theme properties
    color: "#fff",
  },
  root: {
    marginTop: 80,
    backgroundColor: palette.primary.main,
  },
  footerButton: {
    color: "#fff",
  },
}));
