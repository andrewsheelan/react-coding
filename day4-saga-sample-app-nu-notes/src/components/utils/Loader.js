import React from "react";

export default function Loader({ loading, title }) {
  if (loading) {
    return (
      <>      
        <span>{title}</span>
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      </>
    );
  } else {
    return <React.Fragment />;
  }
}
