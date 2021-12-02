import React from "react";
import { Osmd } from "../../lib/Osmd";
// TODO: in future load it from some backend
import sampleFile from "../../assets/music/igrata-na-poto4eto.musicxml";
import { InfoBox } from "../../components/infobox/InfoBox";
import { Box, Grid } from "@mui/material";

export const ScorePage = () => {
  return (
    <div className="ScorePage">
      <InfoBox />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs={8}>
            <Osmd file={sampleFile} />
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ScorePage;
