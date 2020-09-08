import React from "react";
import Header from "./components/nav/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/home/Dashboard";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import NotesShow from "./components/notes/Show";
import NotesCreate from "./components/notes/Create";
import NotesIndex from "./components/notes/Index";
import { connect } from "react-redux";
function App({ user }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/notes/create" component={NotesCreate} />{" "}
          <Route path="/notes/:id" component={NotesShow} />
          <Route path="/notes" component={NotesIndex} />
          <Route path="*" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = ({ auth: { user } }) => ({
  user,
});
export default connect(mapStateToProps)(App);
