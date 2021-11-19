import React, { useState } from "react";

import { IListNotesParameter } from "../../../open-api/interface/parameter/i-list-notes-parameter";
import { useNotes } from "../../../hooks/useNotes";
import { getClasses } from "./NoteGrid.jss";
import { NoteGridItem } from "../grid-item/NoteGridItem";
import {
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export const ProductGrid = () => {
  const classes = getClasses();
  const [parameter] = useState<IListNotesParameter>({});
  const { response, isLoading } = useNotes(parameter);

  return (
    <>
      {isLoading && <CircularProgress color="secondary" />}
      {response && (
        <Grid container spacing={4} className={classes.grid}>
          <Grid item xs={1} md={2} />
          <Grid item xs={8} md={6}>
            <TextField
              style={{ margin: 8 }}
              label="Search"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={2} md={2}>
            <FormControl fullWidth style={{ marginTop: 8 }}>
              <InputLabel>Sorting</InputLabel>
              <Select onChange={() => {}}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Title ASC</MenuItem>
                <MenuItem value={2}>Title DEC</MenuItem>
                <MenuItem value={3}>Publish Date ASC</MenuItem>
                <MenuItem value={4}>Publish Date DES</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid container spacing={4} className={classes.grid}>
            {response.map((note) => (
              <NoteGridItem note={note} key={note.id} />
            ))}
          </Grid>
        </Grid>
      )}
    </>
  );
};
