import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import OpenSheetMusicDisplay from "../../lib/OpenSheetMusicDisplay";

export const ScorePage = () => {
  const initialState = {
    file: "Igrata-na-poto4eto.musicxml",
  };

  const [score, setScore] = useState(initialState);

  return (
    <div className="ScorePage">
      <OpenSheetMusicDisplay file={initialState.file} />
    </div>
  );
};

export default ScorePage;
