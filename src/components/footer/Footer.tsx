import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { getFooterClasses } from "./Footer.jss";

export const Footer = () => {
  const classes = getFooterClasses();

  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className={classes.root}>
      <Toolbar className={classes.footerText}>
        Copyright &copy; 2022, Beinsa Notes
        <Button
          className={classes.footerButton}
          onClick={() => changeLanguage("de")}
        >
          DE
        </Button>
        <Button
          className={classes.footerButton}
          onClick={() => changeLanguage("en")}
        >
          EN
        </Button>
        <Button
          className={classes.footerButton}
          onClick={() => changeLanguage("en")}
        >
          BG
        </Button>
      </Toolbar>
    </footer>
  );
};
