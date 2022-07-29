import * as React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Paper,
  Theme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles, Styles } from "@mui/styles";
import { ColorPalette } from "../../theme/ColorPalette";

const useStyle = makeStyles(({ palette }: Theme) => ({
  infoBackground: {
    backgroundColor: ColorPalette.BACKGROUND_INFO,
  },
}));

const theme = createTheme();

export const InfoBox = () => {
  const classes = useStyle();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }} marginTop={3}>
          <Grid container spacing={1}>
            <Grid item xs></Grid>
            <Grid item xs={8}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={classes.infoBackground}
                >
                  <Typography variant="h6" color="">
                    Information:
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.infoBackground}>
                  <Paper
                    sx={{ p: 2, margin: "auto", flexGrow: 1 }}
                    elevation={0}
                    className={classes.infoBackground}
                  >
                    <Grid container spacing={1} marginTop={-4}>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                          <Grid item xs>
                            <Typography
                              gutterBottom
                              variant="body2"
                              component="div"
                            >
                              <strong>Title:</strong> Vehadi
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="body2"
                              component="div"
                            >
                              <strong>key:</strong> C major
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              <strong>color</strong>: red
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              <strong>category:</strong> songs after 1944
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" component="div">
                            <strong>author</strong>: Beinsa Duno
                          </Typography>
                          <Typography variant="body2" component="div">
                            <strong>text:</strong> Beinsa Duno
                          </Typography>
                          <Typography variant="body2" component="div">
                            <strong>year:</strong> 1943
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
