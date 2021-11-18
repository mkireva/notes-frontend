import { Box, Grid } from "@mui/material";

import React from "react";
import { Layout } from "../../components/layout/Layout";
import Search from "../../components/search/Search";
import { getNSTrans } from "../../functions/getNsTrans";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Trans = getNSTrans("translation");

const theme = createTheme();

theme.typography.h3 = {
  fontSize: "1.2rem",
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
      <Typography
        variant="h3"
        fontWeight="bold"
        color="#232323"
        textAlign="center"
      >
        <Trans tOptions={{ page: "BeinsaNotes" }}>
          {"Welcome to {{page}}"}
        </Trans>
      </Typography>
    </ThemeProvider>
    <Box sx={{ flexGrow: 1 }} marginTop={7}>
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <Search />
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </Box>
  </Layout>
);

//lazy import need default export
export default NotePage;
