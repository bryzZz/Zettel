/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-destructuring */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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
        const data: User = {
          id: user.uid,
          email: user.email!,
        };

        this.user = data;

        this.isAuth = true;
      } else {
        this.isAuth = false;
      }

      this.loading = false;
    });
  }

  register({ email, password }: RegisterData) {
    createUserWithEmailAndPassword(firebaseAuth, email, password).catch(
      (error) => {
        const errorMessage = error.message;

        console.error(errorMessage);
      }
    );
  }

  login({ email, password }: LoginData) {
    this.loading = true;

    signInWithEmailAndPassword(firebaseAuth, email, password)
      .catch((error) => {
        const errorMessage = error.message;

        console.error(errorMessage);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  logout() {
    signOut(firebaseAuth).catch((error) => {
      const errorMessage = error.message;

      console.error(errorMessage);
    });
  }
}
