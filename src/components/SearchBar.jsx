import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input">
          Inclui o texto:
          <input type="text" id="text-input" data-testid="text-input" />
        </label>
      </form>
    );
  }
}

export default SearchBar;
