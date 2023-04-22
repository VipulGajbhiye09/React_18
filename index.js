import React from "react";
import ReactDOM from "react-dom/client";

function Message() {
  return <h1>My First Component</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Message />);
