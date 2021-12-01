import React, { useState } from "react";
import {Osmd} from "../../lib/Osmd";

export const ScorePage = () => {
  const initialState = {
    file: "Igrata-na-poto4eto.musicxml",
  };

  const [score, setScore] = useState(initialState);

  return (
    <div className="ScorePage">
      <Osmd file={initialState.file} />
    </div>
  );
};

export default ScorePage;
