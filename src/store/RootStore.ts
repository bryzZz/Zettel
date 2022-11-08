import { action, makeObservable, observable } from "mobx";

import { UserStore } from "./UserStore";

export class RootStore {
  // private api = new Api();

  userStore: UserStore;

  @observable errorMessage: string | null = null;

  constructor() {
    makeObservable(this);

    this.userStore = new UserStore(this);
    // this.userStore = new UserStore(this, this.api.userService);
  }

  @action setErrorMessage(value: string | null) {
    this.errorMessage = value;
  }
}
