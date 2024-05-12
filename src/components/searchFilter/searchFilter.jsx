const SearchFilter = ({ filter, handleFind }) => {
  return <input value={filter} onChange={handleFind}></input>;
};

export default SearchFilter;
