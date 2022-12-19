import "./search-box.css";

interface ISearchBoxProps {
  className: string;
  placeholder?: string;
}

interface ISearchBoxProps {
  onChangeHandler: (a: string) => void;
}

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: ISearchBoxProps) => {
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
