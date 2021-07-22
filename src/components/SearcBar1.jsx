import React, { Component } from 'react';
import PropType from 'prop-types';

class SearchBar1 extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange } = this.props;

    return (
      <div>
        <label htmlFor="inclui texto" data-testid="text-input-label">
          Inclui o texto
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            name="searchText"
            id="inclui texto"
          />
        </label>
        <label htmlFor="checkbox" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
            onChange={ onBookmarkedChange }
            name="bookmarkedOnly"
            id="checkbox"
          />
        </label>
      </div>
    );
  }
}

SearchBar1.propTypes = {
  searchText: PropType.string.isRequired,
  onSearchTextChange: PropType.func.isRequired,
  bookmarkedOnly: PropType.bool.isRequired,
  onBookmarkedChange: PropType.func.isRequired,
};

export default SearchBar1;
