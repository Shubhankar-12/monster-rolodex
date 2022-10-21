import React, { Component } from "react";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/SearchBox";
import "./App.css";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchedVal: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) =>
        this.setState(() => {
          return { monsters: user };
        })
      );
  }

  onSearchChange = (e) => {
    const searchedVal = e.target.value.toLowerCase();
    this.setState(() => {
      return { searchedVal };
    });
  };
  render() {
    const searchedMonster = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchedVal);
    });
    return (
      <div>
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          onChangeHandler={this.onSearchChange}
          placeholder={"Search Monster"}
          className={"searchbox"}
        />
        <div className="card-list">
          <CardList monsters={searchedMonster} />;
        </div>
      </div>
    );
  }
}

export default App;
