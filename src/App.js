// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Chao from "./components/Chao";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, fname: "Elon" },
        { id: 2, fname: "Rob" },
        { id: 3, fname: "Tom" },
        { id: 4, fname: "Alex" },
        { id: 5, fname: "Max" },
      ],
    };
  }
  render() {
    const { users } = this.state;
    return (
      <>
        <Chao name={users.fname} />
        <Chao name="Elen Musk" />
        <Chao name="Rob Bob" />
      </>
    );
  }
}

export default App;
