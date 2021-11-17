import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Search() {
  return (
    <Box
      sx={{
        marginLeft: 20,
        marginRight: 20,
        width: 600,
        maxWidth: "100%",
        backgroundColor: "#fff",
      }}
    >
      <TextField fullWidth label="Search for Song" id="fullWidth"></TextField>
    </Box>
  );
}
