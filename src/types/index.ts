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
  name: string;
  text: string;
};
