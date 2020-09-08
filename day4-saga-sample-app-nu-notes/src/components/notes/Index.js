import React from "react";
import Details from "./Details";
import { connect } from "react-redux";
import Loader from "../utils/Loader";
import Error from "../utils/Error";

function Index({ notes: { loading, error, notes } }) {
  return (
    <div className="container">
      <Loader loading={loading} />
      <Error error={error} />
      {notes.map((note) => (
        <Details key={note.id} {...note} />
      ))}
    </div>
  );
}

const mapStateToProps = ({ notes }) => ({
  notes,
});

export default connect(mapStateToProps)(Index);
