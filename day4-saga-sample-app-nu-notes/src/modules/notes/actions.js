import types from ".";

const notesFetch = () => ({
  type: types.NOTES_FETCH,
});

const notesFetched = (notes) => ({
  type: types.NOTES_FETCHED,
  payload: { notes },
});

const notesError = (error) => ({
  type: types.NOTES_ERROR,
  payload: { error },
  error: true,
});

const noteCreate = (title, content, author, created) => ({
  type: types.NOTE_CREATE,
  payload: {
    title,
    content,
    author,
    created,
  },
});

const noteCreated = () => ({
  type: types.NOTE_CREATED,
  meta: { noteCreationCompleted: true },
});

const noteCreationReset = () => ({
  type: types.NOTE_CREATION_RESET,
  meta: { noteCreationCompleted: false },
});

const noteCreateError = (error) => ({
  type: types.NOTE_CREATE_ERROR,
  error: true,
  payload: { error },
});

const actions = {
  notesFetch,
  notesFetched,
  notesError,
  noteCreate,
  noteCreated,
  noteCreateError,
  noteCreationReset,
};

export default actions;
