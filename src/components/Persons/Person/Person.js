import React from "react";
import "./Person.css";
const Person = (props) => {
  console.log("Person  js rendering .................");
  return (
    <div className="Person">
      <p onClick={props.click}>
        I am {props.name} and i am {props.age} year olds
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};
export default Person;
