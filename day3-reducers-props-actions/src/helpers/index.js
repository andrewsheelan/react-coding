import React from "react";
import { Tab } from "react-bootstrap";
import Login from "../components/Login";
import Todos from "../components/Todos";
import Tweets from "../components/Tweets";

export const loginTab = (loggedIn) => {
  return loggedIn ? (
    <div />
  ) : (
    <Tab eventKey="login" title="Login">
      <Login />
    </Tab>
  );
};

export const todoTab = (loggedIn) => {
  return loggedIn ? (
    <Tab eventKey="todos" title="Todos">
      <Todos />
    </Tab>
  ) : (
    <div />
  );
};

export const tweetsTab = (loggedIn) => {
  return loggedIn ? (
    <Tab eventKey="tweets" title="Tweets">
      <Tweets />
    </Tab>
  ) : (
    <div />
  );
};
