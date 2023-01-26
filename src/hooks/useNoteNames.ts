import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { noteKeys } from "constants/noteKeys";
import { NoteService } from "services/NoteService";
import { NoteName } from "types";

export const useNoteNames = (search?: string) => {
  const queryClient = useQueryClient();

  const res = useQuery<NoteName[]>({
    queryKey: noteKeys.list("names", search),
    queryFn: () => NoteService.getNoteNames(search).then((r) => r.data),
  });

  const createMutation = useMutation({
    mutationFn: NoteService.createNote,
    onMutate: async (newNote) => {
      await queryClient.cancelQueries({
        queryKey: noteKeys.list("names", search),
      });
      const previousNoteNames = queryClient.getQueryData<NoteName[]>(
        noteKeys.list("names", search)
      );

      if (previousNoteNames) {
        queryClient.setQueryData<NoteName[]>(noteKeys.list("names", search), [
          newNote,
          ...previousNoteNames,
        ]);
      }

      return { previousNoteNames };
    },
    onError: (err, variables, context) => {
      if (context?.previousNoteNames) {
        queryClient.setQueryData<NoteName[]>(
          noteKeys.list("names", search),
          context.previousNoteNames
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries(noteKeys.list("names", search));
    },
  });

  const deleteMutation = useMutation({
    mutationFn: NoteService.deleteNote,
    onSettled: () => {
      queryClient.invalidateQueries(noteKeys.list("names", search));
    },
  });

  return Object.assign(res, { createMutation, deleteMutation });
};
