import { action, makeObservable, observable } from "mobx";

import { NotesStore } from "./NotesStore";
import { UserStore } from "./UserStore";

export class RootStore {
  // private api = new Api();

  userStore: UserStore;

  notesStore: NotesStore;

  @observable errorMessage: string | null = null;

  constructor() {
    makeObservable(this);

    this.userStore = new UserStore(this);
    this.notesStore = new NotesStore(this);
    // this.userStore = new UserStore(this, this.api.userService);
  }

  @action setErrorMessage(value: string | null) {
    this.errorMessage = value;
  }
}
