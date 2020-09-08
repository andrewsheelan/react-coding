import React, { useRef, useEffect } from "react";
import actions from "../../modules/notes/actions";
import { connect } from "react-redux";
import Loader from "../utils/Loader";
import Error from "../utils/Error";
import { useHistory } from "react-router-dom";
function Create({
  notes: { loading, error, noteCreationCompleted },
  noteCreate,
}) {
  const titleRef = useRef("");
  const contentRef = useRef("");
  const postedOnRef = useRef();

  const storeNote = (e) => {
    e.preventDefault();
    noteCreate(
      titleRef.current.value,
      contentRef.current.value,
      "Andrew",
      postedOnRef.current.value
    );
  };

  // After successful addition of Note push forward.
  const history = useHistory();
  useEffect(() => {
    if (noteCreationCompleted) {
      history.push("/");
    }
  }, [noteCreationCompleted, history]);

  return (
    <div className="container">
      <div className="row">
        <div className="card grey lighten-3">
          <div className="card-content black-text">
            <h5>
              <i className="material-icons left">add</i> New Notes
            </h5>
            <Loader loading={loading} />
            <Error error={error} />
            <form onSubmit={storeNote}>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="title"
                    type="text"
                    required
                    className="validate"
                    ref={titleRef}
                  />
                  <label htmlFor="title">Title</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="content"
                    className="materialize-textarea"
                    required
                    ref={contentRef}
                  ></textarea>
                  <label htmlFor="content">Content</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <label htmlFor="posted-on">Posted On:</label>
                  <br />
                  <input
                    id="posted-on"
                    type="datetime-local"
                    required
                    className="validate"
                    ref={postedOnRef}
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 grey-text">
                  Author: Andrew
                </div>
              </div>

              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Add
                <i className="material-icons left">notes</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = ({ notes }) => ({ notes });
const mapDispatchToProps = {
  noteCreate: actions.noteCreate,
};
export default connect(mapStateToProps, mapDispatchToProps)(Create);
