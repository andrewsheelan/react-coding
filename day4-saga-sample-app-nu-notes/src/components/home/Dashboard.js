import React from "react";
import Messages from "./Messages";
import NotesIndex from "../notes/Index";
export default function Dashboard() {
  return (
    <div className="container">
      <div className="section">
        <div className="row">
          <div className="col m9">
            <NotesIndex />
          </div>
          <div className="col m3">
            <Messages />
          </div>
        </div>
      </div>
    </div>
  );
}
