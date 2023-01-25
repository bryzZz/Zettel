import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { NoteService } from "services/NoteService";
import { NoteName } from "types";

export const useNoteNames = (initialData?: NoteName[]) => {
  const queryClient = useQueryClient();

  const res = useQuery<NoteName[]>({
    queryKey: ["noteNames"],
    queryFn: () => NoteService.getNoteNames().then((r) => r.data),
    initialData,
  });

  const createMutation = useMutation({
    mutationFn: NoteService.createNote,
    onMutate: async (newNote) => {
      await queryClient.cancelQueries({ queryKey: ["noteNames"] });
      const previousNoteNames = queryClient.getQueryData<NoteName[]>([
        "noteNames",
      ]);

      if (previousNoteNames) {
        queryClient.setQueryData<NoteName[]>(
          ["noteNames"],
          [newNote, ...previousNoteNames]
        );
      }

      return { previousNoteNames };
    },
    onError: (err, variables, context) => {
      if (context?.previousNoteNames) {
        queryClient.setQueryData<NoteName[]>(
          ["noteNames"],
          context.previousNoteNames
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries(["noteNames"]);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: NoteService.deleteNote,
    onSettled: () => {
      queryClient.invalidateQueries(["noteNames"]);
    },
  });

  return Object.assign(res, { createMutation, deleteMutation });
};
