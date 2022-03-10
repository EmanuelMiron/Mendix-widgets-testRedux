export type notesAction = { type: "ADD_NOTE"; payload: string };

export const addNote = (note: string): notesAction => ({
  type: "ADD_NOTE",
  payload: note,
});