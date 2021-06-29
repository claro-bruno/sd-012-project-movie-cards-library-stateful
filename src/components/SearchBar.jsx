// implement SearchBar component here
import React from 'react';
import PropType from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form" />
        <label htmlFor="searchBarID" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="searchBarID"
            type="text"
            data-testid="text-input"
            onChange={ onSearchTextChange }
            value={ searchText }
          />
        </label>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropType.string.isRequired,
  onSearchTextChange: PropType.func.isRequired,
};

export default SearchBar;
