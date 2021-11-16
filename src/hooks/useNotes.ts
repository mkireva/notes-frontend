import { useContext } from "react";
import { useCallback } from "./useCallback";

import { IListNotesParameter } from "../open-api/interface/parameter/i-list-notes-parameter";
import { INoteGridItem } from "../pages/note/grid-item/NoteGridItem";
import { Services } from "../service";

export const useNotes = (parameter: IListNotesParameter) => {
  const services = useContext(Services);

  const loadNotes = async (): Promise<Array<INoteGridItem>> => {
    const [productResponse, companies] = await Promise.all([
      services.api.listNotes(parameter),
    ]);

    return productResponse.map((p) => ({
      id: p.id as number,
      name: p.name,
      author: p.author,
      clef: "g major",
      publishingDate: p.release_date,
      color: "red",
      category: "Songs von Beinsa Duno",
    }));
  };

  return useCallback<Array<INoteGridItem>>(loadNotes, [parameter]);
};
