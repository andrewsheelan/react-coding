import { types } from ".";

export const todoAdded = (text) => {
    return {
      type: types.TODO_ADDED,
      text: text,
    };
  };
  
  export const todoToggle = (id) => {
    return {
      type: types.TODO_TOGGLED,
      id,
    };
  };
  
  export const todoRemoveCompleted = () => {
    return {
      type: types.TODO_REMOVE_COMPLETED,
    };
  };
  