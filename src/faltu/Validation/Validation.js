import React from "react";
const validation = (props) => {
  return (
    <div>
      {props.textLength > 5 ? <p>Text Too Enough</p> : <p>Text too short</p>}
    </div>
  );
};
export default validation;
