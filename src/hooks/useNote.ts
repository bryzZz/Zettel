import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { NoteService } from "services/NoteService";
import { Note } from "types";

export const useNote = (id: string) => {
  const queryClient = useQueryClient();

  const res = useQuery<Note>({
    queryKey: [id],
    queryFn: () => NoteService.getNote(id).then((r) => r.data),
  });

  const mutation = useMutation({
    mutationFn: NoteService.updateNote,
    onMutate: async ({ id, updates }) => {
      await queryClient.cancelQueries({ queryKey: [id] });
      const previousNote = queryClient.getQueryData<Note>([id]);

      if (previousNote) {
        queryClient.setQueryData<Note>([id], {
          ...previousNote,
          ...updates,
        });
      }

      return { previousNote };
    },
    onError: (err, variables, context) => {
      if (context?.previousNote) {
        queryClient.setQueryData<Note>([id], context.previousNote);
      }
    },
    onSettled: () => {
      // queryClient.invalidateQueries(["note", id]);
      // queryClient.invalidateQueries(["noteNames"]);
    },
  });

  return Object.assign(res, { mutation });
};
