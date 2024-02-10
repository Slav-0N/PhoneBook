import { Component } from "react";

class SearchFilter extends Component {
  render() {
    const { filter, handleFind } = this.props;
    return (
      <input
        name="filter"
        id="find"
        value={filter}
        onChange={handleFind}
      ></input>
    );
  }
}

export default SearchFilter;
