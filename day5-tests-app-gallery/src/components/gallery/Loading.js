import React from "react";

const Loading = ({ loading }) => {
  return <div className="gallery-loading">{loading ? "loading..." : ""}</div>;
};

export default Loading;
