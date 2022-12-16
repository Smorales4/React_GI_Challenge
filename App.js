import React, { Component } from "react";
import "./App.css";

import BasicInfo from "./BasicInfo";

// EASY Challenge
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // HARD Challenge
      people: [{
        id: 1,
        name: "James Smith",
        phoneNumber: "(575) 506-4187",
        birthDate: "6-28-1988"
      }, 
      {
        id: 2,
        name: "Christopher Anderson",
        phoneNumber: "(291) 228-1372",
        birthDate: "1-18-1965"
      },
      {
        id: 3,
        name: "Ronald	Clark",
        phoneNumber: "(740) 497-8774",
        birthDate: "6-28-1998"
      }, 
      {
        id: 4,
        name: "Mary	Wright",
        phoneNumber: "(690) 828-7645",
        birthDate: "4-24-1990"
      }, ]
    };
  }

  render() {
    return (
      <div>
        {/* MEDIUM: Challenge*/}
        <BasicInfo info={this.state.people} />
      </div>
    );
  }
}

export default App;
