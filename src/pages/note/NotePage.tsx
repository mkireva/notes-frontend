import { Box, Grid, Paper, styled, Typography } from "@mui/material";

import React from "react";
import { Layout } from "../../components/layout/Layout";
import Search from "../../components/search/Search";
import { getNSTrans } from "../../functions/getNsTrans";

const Trans = getNSTrans("translation");

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  backgroundColor: "#f5f5f5",
}));

export const NotePage = () => (
  <Layout>
    <Typography
      variant="h4"
      fontWeight="bold"
      color="#232323"
      textAlign="center"
    >
      <Trans tOptions={{ page: "BeinsaNotes" }}>{"Welcome to {{page}}"}</Trans>
    </Typography>
    <Box sx={{ flexGrow: 1 }} marginTop={7}>
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <Item>
            <Search />
          </Item>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </Box>
  </Layout>
);

//lazy import need default export
export default NotePage;
