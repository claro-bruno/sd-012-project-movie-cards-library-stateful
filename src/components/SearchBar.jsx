// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <label htmlFor="busca">
        <input type="search" name="busca" />
      </label>
    );
  }
}

export default SearchBar;
