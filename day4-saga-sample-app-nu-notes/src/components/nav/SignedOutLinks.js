import React from "react";
import { Link } from "react-router-dom";

export default function SignedOutLinks() {
  return (
    <>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
    </>
  );
}
