import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { makeStyles } from "@mui/styles";
import { Button, Theme } from "@mui/material";

const useStyle = makeStyles(({ palette }: Theme) => ({
  root: {
    marginTop: 80,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 6,
    paddingBottom: 6,
    backgroundColor: "#5b5b5b",
    color: "#fff",
  },
  copyRight: {
    marginRight: 5,
  },
  button: {
    marginLeft: 3,
    marginRight: 3,
    color: "#fff",
  },
}));
export const Footer = () => {
  const classes = useStyle();

  const { i18n } = useTranslation();

  const changeLanguage = useCallback(
    (lng: string) => {
      if (i18n.language !== lng) {
        i18n.changeLanguage(lng);
      }
    },
    [i18n]
  );

  return (
    <footer className={classes.root}>
      <span className={classes.copyRight}>
        Copyright &copy; 2022, BeinsaNotes
      </span>
      <Button
        variant={"text"}
        className={classes.button}
        onClick={() => changeLanguage("de")}
      >
        DE
      </Button>
      <Button
        variant={"text"}
        className={classes.button}
        onClick={() => changeLanguage("en")}
      >
        EN
      </Button>
      <Button
        variant={"text"}
        className={classes.button}
        onClick={() => changeLanguage("bg")}
      >
        BG
      </Button>
    </footer>
  );
};
