import { ChangeEvent } from "react";
import "./search-box.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
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
