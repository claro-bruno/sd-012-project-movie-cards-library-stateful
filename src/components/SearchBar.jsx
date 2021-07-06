import React from 'react';

class SearchBar extends React.Component {
  /* constructor(props) {
      super(props);
  } */

  render() {
    const { onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label
          htmlFor="IncluiTexto"
          data-testid="text-input-label">
          Inclui o texto:
        </label>
        <input
          type="text"
          id="IncluiTexto"
          value="searchText"
          onChange={onSearchTextChange}
          data-testid="text-input"
        />
      </form>
    );
  }
}

export default SearchBar;
