import Toolbar from "@material-ui/core/Toolbar";
import React, {useCallback} from "react";
import {Button} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {getFooterClasses} from "./Footer.jss";

export const Footer = () => {
    const classes = getFooterClasses();

    const {i18n} = useTranslation();
    
    const changeLanguage = useCallback((lng: string) => {
        if (i18n.language !== lng) {
            i18n.changeLanguage(lng);
        }
    }, [i18n]);

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
                    onClick={() => changeLanguage("bg")}
                >
                    BG
                </Button>
            </Toolbar>
        </footer>
    );
};
