import { api } from "../http";
import { AuthResponse } from "../types";

export class AuthService {
  static async register(email: string, password: string) {
    return api.post<AuthResponse>("/register", { email, password });
  }

  static async login(email: string, password: string) {
    return api.post<AuthResponse>("/login", { email, password });
  }

  static async logout() {
    return api.post("/logout");
  }
}
