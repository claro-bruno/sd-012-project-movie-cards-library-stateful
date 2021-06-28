import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchText">
          Incluir o texto:
          <input type="text" name="searchText" />
        </label>
      </form>
    );
  }
}

export default SearchBar;
