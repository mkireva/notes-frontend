import * as React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Paper,
  ThemeProvider,
  createTheme,
  makeStyles,
  Theme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const InfoBox = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} marginTop={3}>
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs={8}>
            <Accordion style={{ backgroundColor: "#c3e8d3" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Information about the song</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Paper
                  sx={{ p: 2, margin: "auto", flexGrow: 1 }}
                  elevation={0}
                  style={{ backgroundColor: "#c3e8d3" }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="h6" component="div">
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
                <Box marginTop={3}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </Box>
    </div>
  );
};
