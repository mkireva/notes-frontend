import React, { CSSProperties } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";
import { useTheme } from "@material-ui/core";
import { getClasses } from "./NoteGridItem.jss";

export interface INoteGridItem {
  id: number;
  name: string;
  color: string;
  publishingDate?: string;
  clef?: string;
  category: string;
}

export interface IPropsNoteGridItem {
  note: INoteGridItem;
}

const GridRow = (props: {
  name?: string;
  value: string;
  styleValue?: CSSProperties;
}) => (
  <div style={{ display: "flex", paddingTop: 10, fontSize: 18 }}>
    <div style={{ flex: 1 }}>{props.name}</div>
    <div style={{ flex: 1, textAlign: "right", ...props.styleValue }}>
      {props.value}
    </div>
  </div>
);

export const NoteGridItem = (props: IPropsNoteGridItem) => {
  const classes = getClasses();
  const { note } = props;
  const theme = useTheme();
  const { t } = useTranslation("note");

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card elevation={6} square>
        <CardMedia
          className={classes.media}
          color={note.color}
          title={note.name}
        />
        <CardContent style={{ padding: 20 }}>
          <div
            style={{
              color: theme.palette.primary.main,
              fontSize: 24,
              fontWeight: 600,
              paddingBottom: 10,
            }}
          >
            {note.name}
          </div>
          {!!note.publishingDate && (
            <GridRow name={t("Publish Date")} value={note.publishingDate} />
          )}
          {!!note.clef && (
            <GridRow name={t("Carbon Offset")} value={note.clef} />
          )}
          <GridRow name={t("Category")} value={note.category} />
        </CardContent>
      </Card>
    </Grid>
  );
};
