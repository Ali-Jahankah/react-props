import React, { Component, createRef } from "react";
// import { useState } from "react";
import People from "./People";
import Header from "./Header";
import styles from "../css/app.css";
// import MyContext from "./Context";
import MyFragment from "./HOC/MyFragment";
import MyHOC from "./HOC/MyHOC";

class App extends Component {
  constructor() {
    super();
    this.myInput = createRef();
  }
  state = {
    people: [
      { fullname: "Ali Jahankah", id: 1 },
      { fullname: "reza rezaei", id: 2 },
      { fullname: "hasan mohseni", id: 3 },
    ],
    showPeople: false,
    fullname: "",
  };
  static getDerivedStateFromProps(props, state) {
    console.log("---App.js----static getDerivedStateFromProps" + props + state);
  }
  // DOWN-v- should be in Person.js--------------------------------------------------
  componentWillUnmount() {
    console.log("---App.js----componentWillUnmount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("---App.js---- shouldComponentUpdate" + nextState + nextProps);
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("---App.js----getSnapshotBeforeUpdate" + prevState + prevProps);
  }
  componentDidMount() {
    console.log("---App.js----componentDidMount()");
    this.myInput.current.focus();
  }
  componentDidUpdate() {
    console.log("---App.js----componentDidUpdate");
  }
  handleNameChange = () => {
    this.setState({ showPeople: !this.state.showPeople });
  };
  handleDelete = (id) => {
    let people = [...this.state.people];
    let newPeople = people.filter((person) => person.id !== id);
    this.setState({ people: newPeople });
  };
  editFullname = (event, id) => {
    const newPeople = this.state.people;
    const personIndex = newPeople.findIndex((person) => person.id === id);
    const newPerson = newPeople[personIndex];
    newPerson.fullname = event.target.value;
    newPeople[personIndex] = newPerson;
    const people = [...newPeople];
    this.setState({ people });
  };
  addPerson = (e) => {
    const people = [...this.state.people];
    const inputValue = document.getElementsByClassName(styles.newpersoninput)[0]
      .value;
    let newInput = inputValue.replace(/\s\s+/g, " ").trim();
    const newPerson = {
      fullname: this.state.fullname,
      id: Math.random(Math.floor() * 100),
    };
    if (!newInput) {
      alert("please fill the field!");
      this.setState({ fullname: "" });
      return;
    }
    this.personSubmit(people, newPerson, inputValue);
  };
  personSubmit = (people, newPerson, inputValue) => {
    people.push(newPerson);
    this.setState({ people: people, fullname: "" });
  };
  getNewName = (event) => {
    let inputValue = event.target.value;
    let newInputValue = inputValue.replace(/\s\s+/g, " "); 
    this.setState({ fullname: newInputValue });
  };
  render() {
    let showingPeople = null;
    if (this.state.showPeople) {
      showingPeople = (
        <People
          editFullname={this.editFullname}
          handleDelete={this.handleDelete}
          allPeople={this.state.people}
        ></People>
      );
    }
    // const { people, fullname } = this.state;
    console.log("App.js Rendered");
    return (
      <MyFragment>
        {/* <MyContext.Provider
          value={{
            getPeople: people,
            handleDelete: this.handleDelete,
            editFullname: this.editFullname,
            handleNameChange: this.handleNameChange,
            addPerson: this.addPerson,
            getName: fullname,
          }}
        > */}
        <div id={styles.peopleComponenet}>
          <Header people={this.state.people}></Header>
          <button type="button" onClick={this.handleNameChange}>
            Show People
          </button>
          <div id={styles.newPersonForm}>
            <input
              ref={this.myInput}
              className={styles.newpersoninput}
              type="text"
              onChange={this.getNewName}
              placeholder="Your Full-name"
              value={this.state.fullname}
            ></input>
            <br></br>
            <button type="button" onClick={this.addPerson}>
              ADD
            </button>
          </div>
          {showingPeople}
          <h2>App.js props by using HOC:</h2>
          <h3>{this.props.first}</h3>
          <h3>{this.props.second}</h3>
          <h3>{this.props.third}</h3>
        </div>
        {/* </MyContext.Provider> */}
      </MyFragment>
    );
  }
}

export default MyHOC(App);
// const App = () => {

// const [getPeople, setPeople] = useState([
//   { fullname: "Ali Jahankah", id: 1 },
//   { fullname: "reza rezaei", id: 2 },
//   { fullname: "hasan mohseni", id: 3 },
// ]);
// const [getShowPeople, setShowPeople] = useState("true");
// const [getName, setName] = useState("");

// const handleNameChange = () => {
//   setShowPeople(!getShowPeople);
// };
// const handleDelete = (id) => {
//   let people = [...getPeople];
//   let newPeople = people.filter((person) => person.id !== id);
//   setPeople(newPeople);
// };
// const editFullname = (event, id) => {
//   const newPeople = getPeople;
//   const personIndex = newPeople.findIndex((person) => person.id === id);
//   const newPerson = newPeople[personIndex];
//   newPerson.fullname = event.target.value;
//   newPeople[personIndex] = newPerson;
//   const people = [...newPeople];
//   setPeople(people);
// };
// const addPerson = (e) => {
//   const people = [...getPeople];
//   const inputValue = document.getElementsByClassName(styles.newpersoninput)[0]
//     .value;
//   let newInput = inputValue.replace(/\s\s+/g, " ").trim();
//   const newPerson = {
//     fullname: getName,
//     id: Math.random(Math.floor() * 100),
//   };
//   if (!newInput) {
//     alert("please fill the field!");
//     console.log(newInput);
//     setName("");
//     return;
//   }
//   personSubmit(people, newPerson, newInput);
// };
// const personSubmit = (people, newPerson, newInput) => {
//   people.push(newPerson);
//   // this.setState({ people: people, fullname: "" });
//   // console.log(newInput);
//   setPeople(people);
//   setName("");
// };
// const getNewName = (event) => {
//   let inputValue = event.target.value;
//   let newInputValue = inputValue.replace(/\s\s+/g, " ");
//   setName(newInputValue);
// };

// };

// export default App;
