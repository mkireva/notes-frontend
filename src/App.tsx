import React, {memo, Suspense} from "react";
import {I18nextProvider, useTranslation} from "react-i18next"
import de from "./assets/i18n/de.json"
import en from "./assets/i18n/en.json"
import {initI18n} from "./plugins/i18n";
import {ThemeProvider} from "./theme/ThemeProvider"
import {StyledEngineProvider} from "@mui/material/styles"
import {CircularProgress, CssBaseline} from "@mui/material"
import { Router } from 'react-router-dom';
import {createBrowserHistory} from "history";
import {PageRouter} from "./pages/PageRouter";
import {Loading} from "./components/Loading";

initI18n(
    {
        de,
        en,
    },
    "en",
)

const history = createBrowserHistory();
const App = () => {
    const {i18n} = useTranslation()

    //lazy loading require suspense
    return (<I18nextProvider i18n={i18n}>
        <CssBaseline/>
        <StyledEngineProvider injectFirst>
            <ThemeProvider>
                <Suspense fallback={null}>
                <Router history={history}>
                    <PageRouter />
                </Router></Suspense>
            </ThemeProvider>
        </StyledEngineProvider>

    </I18nextProvider>)
}


export default memo(App);


