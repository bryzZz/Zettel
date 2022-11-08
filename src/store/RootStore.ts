import { action, makeObservable, observable } from "mobx";

export class RootStore {
  // private api = new Api();

  @observable errorMessage: string | null = null;

  constructor() {
    makeObservable(this);

    // this.userStore = new UserStore(this, this.api.userService);
  }

  @action setErrorMessage(value: string | null) {
    this.errorMessage = value;
  }
}
