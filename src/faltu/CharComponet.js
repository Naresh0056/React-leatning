import React from "react";

export default function CharComponet({ char, click }) {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",
  };
  return (
    <div style={style} onClick={click}>
      {char}
    </div>
  );
}
