import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import ScoreDisplay from "../../lib/ScoreDisplay";

export const ScorePage = () => {
  const initialState = {
    file: "Igrata-na-poto4eto.musicxml",
  };

  const [score, setScore] = useState(initialState);

  return (
    <div className="ScorePage">
      <ScoreDisplay file={initialState.file} />
    </div>
  );
};

export default ScorePage;
