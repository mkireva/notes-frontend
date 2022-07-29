import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import {
  createTheme,
  Grid,
  IconButton,
  Theme,
  ThemeProvider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(({ palette }: Theme) => ({
  root: {
    //input label when focused
    "& label.Mui-focused": {
      color: "#00883a",
    },
    // focused color for input with variant='standard'
    "& .MuiInput-underline:after": {
      borderBottomColor: "#00883a",
    },
    // focused color for input with variant='filled'
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#00883a",
    },
    // focused color for input with variant='outlined'
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#00883a",
      },
    },
    [`& fieldset`]: {
      borderRadius: 20,
    },
  },
}));

const theme = createTheme();

export default function Search() {
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }} marginTop={2}>
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                maxWidth: "100%",
              }}
            >
              <TextField
                className={classes.root}
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
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
