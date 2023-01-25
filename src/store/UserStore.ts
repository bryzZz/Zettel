/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-destructuring */

import axios from "axios";
import { makeAutoObservable } from "mobx";

import { AuthService } from "services/AuthService";
import { AuthResponse, LoginData, RegisterData, User } from "types";

import { API_URL } from "../http";
import { RootStore } from "./RootStore";

export class UserStore {
  user!: User;

  isAuth = false;

  isLoading = true;

  constructor(private rootStore: RootStore) {
    makeAutoObservable(this);

    if (localStorage.getItem("token")) {
      this.checkAuth();
    }
  }

  setAuth(value: boolean) {
    this.isAuth = value;
  }

  setUser(value: User) {
    this.user = value;
  }

  setLoading(value: boolean) {
    this.isLoading = value;
  }

  async register({ email, password }: RegisterData) {
    try {
      const res = await AuthService.register(email, password);

      localStorage.setItem("token", res.data.accessToken);

      this.setAuth(true);
      this.setUser(res.data.user);
    } catch (error: any) {
      console.error(error.response?.data?.message);
    }
  }

  async login({ email, password }: LoginData) {
    try {
      const res = await AuthService.login(email, password);

      localStorage.setItem("token", res.data.accessToken);

      this.setAuth(true);
      this.setUser(res.data.user);
    } catch (error: any) {
      console.error(error.response?.data?.message);
    }
  }

  async logout() {
    try {
      const res = await AuthService.logout();

      localStorage.removeItem("token");

      this.setAuth(false);
      this.setUser({} as User);
    } catch (error: any) {
      console.error(error.response?.data?.message);
    }
  }

  async checkAuth() {
    this.setLoading(true);

    try {
      const res = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });

      localStorage.setItem("token", res.data.accessToken);

      this.setAuth(true);
      this.setUser(res.data.user);
    } catch (error: any) {
      console.error(error.response?.data?.message);
    } finally {
      this.setLoading(false);
    }
  }
}
