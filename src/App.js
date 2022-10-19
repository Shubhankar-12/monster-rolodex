import React, { Component } from "react";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/SearchBox";

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
        <SearchBox
          onChangeHandler={this.onSearchChange}
          placeholder={"Search Monster"}
          className={"searchbox"}
        />
        {searchedMonster.map((monster) => {
          return <CardList key={monster.id} monsterName={monster.name} />;
        })}
      </div>
    );
  }
}

export default App;
