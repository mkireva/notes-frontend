import React  from "react";
import {Osmd} from "../../lib/Osmd";
// TODO: in future load it from some backend
import sampleFile from "../../assets/music/igrata-na-poto4eto.musicxml"

export const ScorePage = () => {

  return (
    <div className="ScorePage">
      <Osmd file={sampleFile} />
    </div>
  );
};

export default ScorePage;
