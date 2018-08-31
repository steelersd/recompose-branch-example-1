import React from "react";
import { render } from "react-dom";
import Example from "./Example";

let App = props => {
  return (
    <div>
      <Example isReady={true} />
      <Example isReady={false} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
