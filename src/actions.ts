export type Action = { type: 'ADD_NOTE'; payload: string };

export const addNOte = (note: string): Action => ({
  type: 'ADD_NOTE',
  payload: note,
});
