import React from "react";
import { Link } from "react-router-dom";

export default function SignedInLinks() {
  return (
    <>
          <li>
        <Link to="/notes/create">Add Note</Link>
      </li>
      <li>
        <Link to="/">Logout</Link>
      </li>
      <li>
        <a
          className="btn-floating btn-large waves-effect waves-light orange z-depth-0"
          href="/"
        >
          <i className="material-icons">person</i>
        </a>
      </li>
    </>
  );
}
