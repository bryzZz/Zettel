// import { makeObservable } from "mobx";

import { NotesStore } from "../store/NotesStore";
import { Note } from "../types";

export class NoteModel implements Note {
  id: string;

  text: string;

  name: string;

  constructor(private store: NotesStore, note: Note) {
    this.id = note.id;
    this.name = note.name;
    this.text = note.text;
  }
}
