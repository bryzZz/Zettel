/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-destructuring */
import { ref, set, onValue, update } from "firebase/database";
import { makeAutoObservable } from "mobx";

import { Note } from "types";

import { database } from "../firebase";
import { RootStore } from "./RootStore";

export class NotesStore {
  notes: { [name: string]: Note } = {};

  currentNoteName: string | null = null;

  constructor(private rootStore: RootStore) {
    makeAutoObservable(this);
  }

  get currentNote() {
    if (this.currentNoteName) {
      return this.notes[this.currentNoteName];
    }

    return null;
  }

  newNote = (noteName: string) => {
    set(
      ref(database, `notes/${this.rootStore.userStore.user.id}/${noteName}`),
      {
        text: `# ${noteName}`,
      }
    );
  };

  subscribeToNotes = () => {
    const notesRef = ref(database, `notes/${this.rootStore.userStore.user.id}`);

    onValue(notesRef, (snapshot) => {
      this.notes = snapshot.val();
    });
  };

  setCurrentNoteName = (noteName: string) => {
    this.currentNoteName = noteName;
  };

  updateCurrentNote = (newText: string) => {
    return set(
      ref(
        database,
        `notes/${this.rootStore.userStore.user.id}/${this.currentNoteName}`
      ),
      {
        text: newText,
      }
    );
  };
}
