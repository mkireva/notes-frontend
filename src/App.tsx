import React, {memo} from "react";
import {I18nextProvider, useTranslation} from "react-i18next"
import de from "./assets/i18n/de.json"
import en from "./assets/i18n/en.json"
import {initI18n} from "./plugins/i18n";
import NotePage from "./pages/note/NotePage";
import { ThemeProvider } from "./theme/ThemeProvider"
import { StyledEngineProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"

initI18n(
    {
        de,
        en,
    },
    "en",
)

const App = () => {
    const {i18n} = useTranslation()

    return (<I18nextProvider i18n={i18n}>
        <CssBaseline />
        <StyledEngineProvider injectFirst>
            <ThemeProvider>
            <NotePage />
            </ThemeProvider>
        </StyledEngineProvider>

    </I18nextProvider>)
}


export default memo(App);


