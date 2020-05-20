import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("App js Constructor");

    this.state = {
      persons: [
        { id: "1", name: "Naresh", age: 23 },
        { id: "1", name: "Naresh", age: 24 },
        { id: "1", name: "Naresh", age: 25 },
      ],
      isShowPerson: false,
    };
    // this.deleteHandler = this.deleteHandler.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    console.log("App js getDerivedSateFromProps", props, state);
    return state;
  }
  tooglePersonHandler = () => {
    this.setState({ isShowPerson: !this.state.isShowPerson });
  };
  clickHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };
  deleteHandler = (event, index) => {
    const persons = [...this.state.persons];
    const person = { ...persons[index] };
    person.name = event.target.value;
    persons[index] = person;
    this.setState({ persons: persons });
  };
  componentWillMount() {
    console.log("will mount");
  }
  componentDidMount() {
    console.log("app js component did mount");
  }
  render() {
    console.log("App js Render");
    let persons = null;
    if (this.state.isShowPerson) {
      persons = (
        <div>
          <Persons
            clicked={this.clickHandler}
            persons={this.state.persons}
            changed={this.deleteHandler}
          />
        </div>
      );
    }

    return (
      <div>
        <Cockpit clicked={this.tooglePersonHandler} />
        {persons}
      </div>
    );
  }
}
