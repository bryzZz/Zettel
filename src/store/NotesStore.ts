/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-destructuring */
import { ref, set, onValue, push, child, update } from "firebase/database";
import { makeAutoObservable } from "mobx";

import { NoteModel } from "models/NoteModel";
import { Note } from "types";

import { database } from "../firebase";
import { RootStore } from "./RootStore";

export class NotesStore {
  notes: Note[] = [];

  constructor(private rootStore: RootStore) {
    makeAutoObservable(this);
  }

  setNotes(notes: { [name: string]: Omit<Note, "id"> }) {
    this.notes = Object.entries(notes).map(
      ([id, note]) => new NoteModel(this, { id, ...note })
    );
  }

  getNote = (id: string) => {
    return this.notes.find((note) => note.id === id);
  };

  newNote = (noteName: string) => {
    const newNoteKey = push(
      child(ref(database), `notes/${this.rootStore.userStore.user.id}`)
    ).key;
    const newNotePath = `notes/${this.rootStore.userStore.user.id}/${newNoteKey}`;
    const newNoteData: Omit<Note, "id"> = {
      text: "",
      name: noteName,
    };

    return update(ref(database), { [newNotePath]: newNoteData });
  };

  subscribeToNotes = () => {
    const notesRef = ref(database, `notes/${this.rootStore.userStore.user.id}`);

    onValue(notesRef, (snapshot) => {
      if (snapshot.exists()) {
        this.setNotes(snapshot.val());
      }
    });
  };

  updateNote = (id: string, text: string) => {
    const note = this.getNote(id);

    if (note) {
      return set(
        ref(database, `notes/${this.rootStore.userStore.user.id}/${id}`),
        { name: note.name, text }
      );
    }

    return null;
  };
}
