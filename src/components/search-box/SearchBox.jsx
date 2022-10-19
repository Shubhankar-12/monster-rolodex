import React, { Component } from "react";

export class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          className={this.props.className}
          placeholder={this.props.placeholder}
          type="search"
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
