import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

export default function Header() {
  return (
    <nav>
      <div className="nav-wrapper green">
        <Link to="/" className="brand-logo left">
          <i className="material-icons">cloud</i>Nu-Notes
        </Link>

        <ul id="nav-mobile" className="right">
          <SignedOutLinks />
          <SignedInLinks />
        </ul>
      </div>
    </nav>
  );
}
