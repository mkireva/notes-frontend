import React from "react";
import { Layout } from "../../components/layout/Layout";
import Search from "../../components/search/Search";
import { getNSTrans } from "../../functions/getNsTrans";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ScorePage from "../score/ScorePage";

const Trans = getNSTrans("translation");

const theme = createTheme();

theme.typography.h2 = {
  [theme.breakpoints.up("md")]: {
    fontSize: "2.2rem",
  },
};

export const NotePage = () => (
  <Layout>
    <ThemeProvider theme={theme}>
      <Typography variant="h2" textAlign="center">
        <Trans tOptions={{ page: "BeinsaNotes" }}>{"{{page}}"}</Trans>
      </Typography>
      <Search />
    </ThemeProvider>
    <ScorePage />
  </Layout>
);

//lazy import need default export
export default NotePage;
