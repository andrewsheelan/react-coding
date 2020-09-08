import { types } from ".";

export const messagesFetch = () => ({
    type: types.MESSAGES_FETCH,
  });
  
  export const messagesFetched = (notes) => ({
    type: types.MESSAGES_FETCHED,
    payload: { notes },
  });
  
  export const messagesError = (error) => ({
      type: types.MESSAGES_ERROR,
      payload: { error },
      error: true
  })
  