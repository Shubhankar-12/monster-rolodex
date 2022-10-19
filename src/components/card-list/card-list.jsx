import React, { Component } from "react";

export class CardList extends Component {
  render() {
    const { monsterName } = this.props;
    return (
      <div>
        <h1>{monsterName}</h1>
      </div>
    );
  }
}

export default CardList;
