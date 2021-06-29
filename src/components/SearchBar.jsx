// implement SearchBar component here
import React from 'react';
import { func, string } from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="search" className="col-12">
          Inclui o texto:
          <input
            id="search"
            className="form-control"
            type="text"
            placeholder="O Que Você Procura?"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: string.isRequired,
  onSearchTextChange: func.isRequired,
};

export default SearchBar;
