import React, { useState } from "react";
import { Osmd } from "../../lib/Osmd";
// TODO: in future load it from some backend
import sampleFile from "../../assets/music/Vehadi.musicxml";
import { InfoBox } from "../../components/infobox/InfoBox";
import { Box, Grid } from "@mui/material";

export const ScorePage = () => {
  const [files, setFiles] = useState([
    {
      label: "Beethoven_AnDieFerneGeliebte",
      value: "Beethoven_AnDieFerneGeliebte.xml",
    },
    {
      label: "Vehadi",
      value: "Vehadi.musicxml",
    },
  ]);

  const handleClick = (e) => {
    setFiles({ files: e.target.value });
  };
  return (
    <div className="ScorePage">
      <InfoBox />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs={10}>
            <select handleClick={handleClick}>
              {files.map((file) => (
                <option key={file.label} value={file.value}>
                  {file.value}
                </option>
              ))}
            </select>
            <Osmd file={sampleFile} />
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ScorePage;
