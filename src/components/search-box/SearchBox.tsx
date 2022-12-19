import { ChangeEventHandler } from "react";
import "./search-box.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => {
  return (
    <div>
      <input
        className={className}
        placeholder={placeholder}
        type='search'
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
