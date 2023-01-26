import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { noteKeys } from "constants/noteKeys";
import { NoteService } from "services/NoteService";
import { Note, NoteName } from "types";

export const useNote = (id: string) => {
  const queryClient = useQueryClient();

  const res = useQuery<Note>({
    queryKey: noteKeys.detail(id),
    queryFn: () => NoteService.getNote(id).then((r) => r.data),
  });

  const mutation = useMutation({
    mutationFn: NoteService.updateNote,
    onMutate: async ({ id, updates }) => {
      await queryClient.cancelQueries({ queryKey: noteKeys.detail(id) });
      const previousNote = queryClient.getQueryData<Note>(noteKeys.detail(id));

      if (previousNote) {
        queryClient.setQueryData<Note>(noteKeys.detail(id), {
          ...previousNote,
          ...updates,
        });

        if (updates.title) {
          queryClient.setQueryData<NoteName[]>(
            noteKeys.list("names"),
            (p) =>
              p?.map((note) =>
                note.id === id ? { id, title: updates.title } : note
              ) as NoteName[]
          );
        }
      }

      return { previousNote };
    },
    onError: (err, variables, context) => {
      if (context?.previousNote) {
        queryClient.setQueryData<Note>(
          noteKeys.detail(id),
          context.previousNote
        );
      }
    },
    onSettled: () => {
      // queryClient.invalidateQueries(["note", id]);
      // queryClient.invalidateQueries(["noteNames"]);
    },
  });

  return Object.assign(res, { mutation });
};
