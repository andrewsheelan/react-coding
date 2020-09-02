import { types } from "../actions";
import uuid from "react-uuid";
import _ from 'lodash'
const initState = {
  todos: [],
};

export default (state = initState, action) => {
  var todos;
  switch (action.type) {
    case types.TODO_ADDED:
      todos = [
        ...state.todos,
        {
          id: uuid(),
          text: action.text,
          completed: false,
        },
      ];
      return { todos, isUpToDate: true };
    case types.TODO_TOGGLED:
      todos = [..._.shuffle(state.todos)];
      
      const selectedTodo = todos.find((todo) => todo.id === action.id);
      selectedTodo.completed = !selectedTodo.completed;
      return { todos };
    case types.TODO_REMOVE_COMPLETED:
      todos = [...state.todos.filter((todo) => !todo.completed)];
      return { todos };
    default:
      return state;
  }
};
