import React from "react";
import Gallery from "../gallery/Gallery";
import "./App.scss";

function App() {
  return (
    <div className="app" data-testid="app">
      <Gallery />
    </div>
  );
}

export default App;
