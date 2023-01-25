export interface User {
  id: string;
  email: string;
}

export type LoginData = {
  email: string;
  password: string;
};

export type RegisterData = LoginData;

export type Note = {
  id: string;
  title: string;
  text: string;
  place: number;
};

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export type NoteName = { id: string; title: string };
