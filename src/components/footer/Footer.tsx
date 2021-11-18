import React, { useCallback } from "react";
import { Trans, useTranslation } from "react-i18next";

import { makeStyles, Styles } from "@mui/styles";
import { Button, Icon, Theme, Toolbar } from "@mui/material";
import languageDeIcon from "../../assets/images/language_flags/de.svg";
import languageEnIcon from "../../assets/images/language_flags/en.svg";
import languageBgIcon from "../../assets/images/language_flags/bg.svg";

const toolbarStyle: Partial<Styles<any, any, any>> = {
  flexDirection: "column",
  minHeight: 48,
};

const useStyle = makeStyles(({ palette }: Theme) => ({
  root: {
    marginTop: 80,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: "#5b5b5b",
    color: "#fff",
    textAlign: "center",
  },
  copyRight: {
    marginRight: 5,
  },
  button: {
    marginLeft: 3,
    marginRight: 3,
    color: "#fff",
  },
  copyrightToolbar: {
    ...toolbarStyle,
    minHeight: 32,
    marginTop: 20,
  },
  languageIcon: {
    width: 20,
    height: 20,
  },
  websiteLink: {
    color: "#fff",
  },
}));
export const Footer = () => {
  const classes = useStyle();
  const { i18n, t } = useTranslation();

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
      <Button
        variant={"text"}
        className={classes.button}
        onClick={() => changeLanguage("de")}
      >
        <Icon>
          <img
            alt={t("Switch to german")}
            src={languageDeIcon}
            className={classes.languageIcon}
          />
        </Icon>
      </Button>
      <Button
        variant={"text"}
        className={classes.button}
        onClick={() => changeLanguage("en")}
      >
        <Icon>
          <img
            alt={t("Switch to english")}
            src={languageEnIcon}
            className={classes.languageIcon}
          />
        </Icon>
      </Button>
      <Button
        variant={"text"}
        className={classes.button}
        onClick={() => changeLanguage("bg")}
      >
        <Icon>
          <img
            alt={t("Switch to bulgarian")}
            src={languageBgIcon}
            className={classes.languageIcon}
          />
        </Icon>
      </Button>
      <Toolbar className={classes.copyrightToolbar}>
        <a
          href="https://www.beinsanotes.eu"
          target="_blank"
          rel="noreferrer noopener"
          className={classes.websiteLink}
        >
          <Trans>© 2022 BeinsaNotes</Trans>
        </a>
      </Toolbar>
    </footer>
  );
};
