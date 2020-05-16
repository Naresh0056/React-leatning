import React, { Component } from "react";
import Validation from "../Validation/Validation";
import CharComponet from "../CharComponet";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }
  inputChangeHandler = (event) => {
    this.setState({ text: event.target.value });
  };
  deleteChar = (index) => {
    const totalString = this.state.text.split("");
    totalString.splice(index, 1);
    const updatedText = totalString.join("");
    this.setState({ text: updatedText });
  };
  render() {
    const charcter = this.state.text.split("").map((ch, index) => {
      return (
        <CharComponet
          char={ch}
          key={index}
          click={() => this.deleteChar(index)}
        />
      );
    });
    return (
      <div>
        <input
          type="text"
          onChange={(event) => this.inputChangeHandler(event)}
          value={this.state.text}
        />
        <Validation textLength={this.state.text.length} />
        {charcter}
      </div>
    );
  }
}
