import React from "react";
import ReactDom from "react-dom";
import Square from "./App";
import "./index.css";

ReactDom.render(
  <React.StrictMode>
    <Square />
  </React.StrictMode>,
  document.getElementById("root")
);

/*const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);*/
