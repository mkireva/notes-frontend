import * as React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

theme.typography.h6 = {
  fontFamily: "Inter",
};
theme.typography.h3 = {
  fontFamily: "Inter",
  color: "#015223",
};

theme.typography.h4 = {
  fontFamily: "Inter",
  color: "#015223",
};
export const InfoBox = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }} marginTop={3}>
          <Grid container spacing={1}>
            <Grid item xs></Grid>
            <Grid item xs={8}>
              <Accordion style={{ backgroundColor: "#c3e8d3" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h4">Information:</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Paper
                    sx={{ p: 2, margin: "auto", flexGrow: 1 }}
                    elevation={0}
                    style={{ backgroundColor: "#c3e8d3" }}
                  >
                    <Grid container spacing={1} marginTop={-4}>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                          <Grid item xs>
                            <Typography
                              gutterBottom
                              variant="h6"
                              component="div"
                            >
                              Title: Das Spiel der Quelle
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="body2"
                              component="div"
                            >
                              key: C major
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              color: blue
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              category: songs after 1944
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1" component="div">
                            author: Beinsa Duno
                          </Typography>
                          <Typography variant="subtitle1" component="div">
                            text: Beinsa Duno
                          </Typography>
                          <Typography variant="subtitle1" component="div">
                            year: 1943
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                  <Box marginTop={-1}>
                    <Typography gutterBottom variant="body2" component="div">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quia necessitatibus magnam perferendis ipsam dolorum
                      fugiat repellendus, optio impedit sapiente eligendi! A
                      omnis nemo rerum iste sed consequatur, reiciendis odit
                      nisi.
                    </Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
};