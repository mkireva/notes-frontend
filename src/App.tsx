import React from "react";
import {I18nextProvider, useTranslation} from "react-i18next";
import de from "./assets/i18n/de.json";
import en from "./assets/i18n/en.json";
import bg from "./assets/i18n/bg.json";
import {initI18n} from "./plugins/i18n";
import {ThemeProvider} from "./theme/ThemeProvider";
import {CssBaseline, StyledEngineProvider} from "@mui/material";
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";
import {PageRouter} from "./pages/PageRouter";

initI18n(
    {
        de,
        en,
        bg,
    },
    "en"
);

const history = createBrowserHistory({basename: process.env.PUBLIC_URL});
export const App = () => {
    const {i18n} = useTranslation();

    //lazy loading require suspense
    return (
        <I18nextProvider i18n={i18n}>
            <CssBaseline/>
            <StyledEngineProvider injectFirst>
                <ThemeProvider>
                    <Router history={history}>
                        <PageRouter/>
                    </Router>
                </ThemeProvider>
            </StyledEngineProvider>
        </I18nextProvider>
    );
};