import React from "react";
const Cockpit = (props) => {
  return (
    <div>
      <h1>Hi i am React</h1>
      <button onClick={props.clicked}>Toggle Person</button>
    </div>
  );
};
export default Cockpit;
