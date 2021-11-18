import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(({ palette }: Theme) => ({
  searchField: {
    [`& fieldset`]: {
      borderRadius: 50,
    },
  },
}));

export default function Search() {
  const classes = useStyle();

  return (
    <Box
      sx={{
        maxWidth: "100%",
      }}
    >
      <TextField
        className={classes.searchField}
        fullWidth
        label="Search"
        id="fullWidth"
        size="small"
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </Box>
  );
}
