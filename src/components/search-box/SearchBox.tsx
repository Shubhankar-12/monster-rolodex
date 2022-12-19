import "./search-box.css";

interface ISearchBoxProps {
  className: string;
  placeholder?: string;
}

interface ISearchBoxProps {
  onChangeHandler: (a: string) => void;
}

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (a: string) => void;
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
