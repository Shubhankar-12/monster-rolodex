import React, { ChangeEvent, useEffect, useState } from "react";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/SearchBox";
import "./App.css";
import { getData } from "./utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  console.log("render");
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchedVal = e.target.value.toLowerCase();
    setSearchField(searchedVal);
  };
  const searchedMonster = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });

  return (
    <div className='App'>
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={"Search Monster"}
        className={"searchbox"}
      />
      <div className='card-list'>
        <CardList monsters={searchedMonster} />;
      </div>
    </div>
  );
};

// export class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchedVal: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((user) =>
//         this.setState(() => {
//           return { monsters: user };
//         })
//       );
//   }

//   onSearchChange = (e) => {
//     const searchedVal = e.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchedVal };
//     });
//   };
//   render() {
//     const searchedMonster = this.state.monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(this.state.searchedVal);
//     });
//     return (
//       <div>
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox
//           onChangeHandler={this.onSearchChange}
//           placeholder={"Search Monster"}
//           className={"searchbox"}
//         />
// <div className="card-list">
//   <CardList monsters={searchedMonster} />;
// </div>
//       </div>
//     );
//   }
// }

export default App;
