// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <input
          className="form-control col-3 ml-5"
          type="text"
          placeholder="O Que Você Procura?"
        />
      </form>
    );
  }
}

export default SearchBar;
