import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../utils/Loader";
import Error from "../utils/Error";

function Show({
  notes: { loading, error, notes },
  match: {
    params: { id },
  },
}) {
  const { title, content, author, created, finding } = (notes &&
    notes.find((note) => note.id === id)) || { finding: true };
  return (
    <div className="container notes-show">
      <div className="section card ">
        <div className="card-content green-text">
          <Loader loading={loading || finding} title="Finding Item"/>
          <Error error={error} />
          <h5>{title}</h5>
          <p>{content}</p>
          <div className="section grey-text">
            - {author}
            <br />
            {Date(created)}
          </div>
          <Link to="/notes" className="waves-effect waves-light btn right">
            <i className="material-icons left">notes</i>All Notes
          </Link>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = ({ notes }) => ({
  notes,
});
export default connect(mapStateToProps)(Show);
