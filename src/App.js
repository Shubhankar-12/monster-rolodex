import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) =>
        this.setState(
          () => {
            return { monsters: user };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  render() {
    return (
      <div>
        <input
          className="search-box"
          placeholder="Search Monster"
          type="text"
          onChange={(e) => {
            const searchedVal = e.target.value.toLowerCase();
            var searchedMonster = this.state.monsters.filter((monster) => {
              return monster.name.toLowerCase().includes(searchedVal);
            });
            this.setState(() => {
              return { monsters: searchedMonster };
            });
          }}
        />
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
