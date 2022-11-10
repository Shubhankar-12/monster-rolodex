import React from "react";
import "./search-box.css";
const SearchBox = (props) => {
  return (
    <div>
      <input
        className={props.className}
        placeholder={props.placeholder}
        type="search"
        onChange={props.onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
