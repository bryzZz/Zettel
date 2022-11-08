/* eslint-disable prefer-destructuring */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { makeAutoObservable } from "mobx";

import { LoginData, RegisterData, User } from "types";

import { auth as firebaseAuth } from "../firebase";
import { RootStore } from "./RootStore";

export class UserStore {
  user!: User;

  isAuth = false;

  loading = true;

  constructor(private rootStore: RootStore) {
    makeAutoObservable(this);

    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }

      this.loading = false;
    });
  }

  register({ email, password }: RegisterData) {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        console.log(userCredential);

        const data: User = {
          id: userCredential.user.uid,
          email: userCredential.user.email!,
        };

        this.user = data;
        this.isAuth = true;
      })
      .catch((error) => {
        const errorMessage = error.message;

        console.error(errorMessage);
      });
  }

  login({ email, password }: LoginData) {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const data: User = {
          id: userCredential.user.uid,
          email: userCredential.user.email!,
        };

        this.user = data;
        this.isAuth = true;
      })
      .catch((error) => {
        const errorMessage = error.message;

        console.error(errorMessage);
      });
  }
}
