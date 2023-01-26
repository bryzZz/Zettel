import { api } from "../http";
import { Note, NoteName } from "../types";

export class NoteService {
  static async getNoteNames(search?: string) {
    return api.get<NoteName[]>("/noteNames", { params: { search } });
  }

  static async createNote({ id, title }: { id: string; title: string }) {
    return api.post<Note>("/notes", { id, title });
  }

  static async getNote(id: string) {
    return api.get<Note>("/notes", { params: { id } });
  }

  static updateNote = (data: {
    id: string;
    updates: Partial<Pick<Note, "title" | "text" | "place" | "tags">>;
  }) => {
    return api.put("/notes", data);
  };

  static deleteNote = (id: string) => {
    return api.delete("/notes", { params: { id } });
  };
}
