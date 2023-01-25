import { action, makeObservable, observable } from "mobx";

import { UserStore } from "./UserStore";

export class RootStore {
  userStore: UserStore;

  @observable errorMessage: string | null = null;

  constructor() {
    makeObservable(this);

    this.userStore = new UserStore(this);
  }

  @action setErrorMessage(value: string | null) {
    this.errorMessage = value;
  }
}
