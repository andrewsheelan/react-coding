import React, { useRef } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { todoAdded, todoToggle, todoRemoveCompleted } from "../actions/todo";
import Todo from "../helpers/Todo";
import _ from "lodash";

function Todos({
  userEmail,
  todos,
  todoToggle,
  todoAdded,
  todoRemoveCompleted,
}) {
  const todoRef = useRef("");
  const addTodo = (e) => {
    e.preventDefault();
    todoAdded(todoRef.current.value);
    todoRef.current.value = "";
    todoRef.current.focus();
  };
  const todoToggled = (id) => {
    todoToggle(id);
  };

  return (
    <>
      <br />
      {_.orderBy(todos, (todo) => todo.text).map((todo) => (
        <Todo key={todo.id} todoToggled={todoToggled} {...todo} />
      ))}
      <br />
      <Form onSubmit={addTodo}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            ref={todoRef}
            type="text"
            placeholder="Enter todo here"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
        <Button variant="warning" type="button" onClick={todoRemoveCompleted}>
          Remove Completed
        </Button>
      </Form>
    </>
  );
}

const mapStateToProps = ({ login, todos }) => {
  return {
    todos: todos.todos,
    get userEmail() {
      return login.email;
    },
  };
};

const mapDispatchToProps = {
  todoAdded,
  todoToggle,
  todoRemoveCompleted,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
