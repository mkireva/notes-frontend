import React from "react";
import { Layout } from "../../components/layout/Layout";
import Search from "../../components/search/Search";
import { getNSTrans } from "../../functions/getNsTrans";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ScorePage from "../score/ScorePage";

const Trans = getNSTrans("translation");

const theme = createTheme();

theme.typography.h3 = {
  fontSize: "1.2rem",
  color: "#095e2e",
  "@media (min-width:600px)": {
    fontSize: "1.8rem",
    fontFamily: "Inter",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.3rem",
    fontFamily: "Inter",
  },
};

export const NotePage = () => (
  <Layout>
    <ThemeProvider theme={theme}>
      <Typography variant="h3" fontWeight="bold" textAlign="center">
        <Trans tOptions={{ page: "BeinsaNotes" }}>{"{{page}}"}</Trans>
      </Typography>
      <Search />
    </ThemeProvider>
    <ScorePage />
  </Layout>
);

//lazy import need default export
export default NotePage;
