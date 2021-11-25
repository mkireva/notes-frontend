import React from "react";
import { Layout } from "../../components/layout/Layout";
import Search from "../../components/search/Search";
import { getNSTrans } from "../../functions/getNsTrans";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { InfoBox } from "../../components/infobox/InfoBox";

const Trans = getNSTrans("translation");

const theme = createTheme();

theme.typography.h3 = {
  fontSize: "1.2rem",
  color: "#232323",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

export const NotePage = () => (
  <Layout>
    <ThemeProvider theme={theme}>
      <Typography variant="h3" fontWeight="bold" textAlign="center">
        <Trans tOptions={{ page: "BeinsaNotes" }}>
          {"Welcome to {{page}}"}
        </Trans>
      </Typography>
      <Search />
      <InfoBox />
    </ThemeProvider>
  </Layout>
);

//lazy import need default export
export default NotePage;
