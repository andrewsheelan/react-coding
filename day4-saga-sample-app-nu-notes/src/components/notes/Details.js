import React from "react";

export default function Details({ id, title, content, author, created }) {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card grey lighten-3">
          <div className="card-content black-text">
            <span className="card-title">{title}</span>
            <p>{content}</p>
            <div className="section grey-text">
              - {author}
              <br />
              {Date(created)}
            </div>
          </div>
          <div className="card-action">
            <a href={"/notes/" + id}>More Details</a>
          </div>
        </div>
      </div>
    </div>
  );
}
