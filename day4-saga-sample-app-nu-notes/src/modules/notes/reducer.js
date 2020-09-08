import types from ".";

const initState = {
  loading: false,
  error: "",
  notes: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case types.NOTES_FETCH:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.NOTES_FETCHED:
      return {
        ...state,
        loading: false,
        error: "",
        notes: action?.payload?.notes || [],
      };
    case types.NOTE_CREATE:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.NOTE_CREATED:
      return {
        ...state,
        ...action.meta,
        loading: false,
        error: "",
      };
    case types.NOTES_ERROR:
    case types.NOTE_CREATE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case types.NOTE_CREATION_RESET:
      return {
        ...state,
        ...action.meta,
      };
    default:
      return state;
  }
};
