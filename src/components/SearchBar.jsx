import React from 'react';
import PropTypes from 'prop-types';
import SelectComponent from './SelectComponent';

class SearchBar extends React.Component {
  render() {
    const {
      onSearchTextChange,
      searchText,
      onBookmarkedChange,
      bookmarkedOnly,
      onSelectedGenreChange,
      selectedGenre,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="text-input"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="checkbox-input"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <SelectComponent
          idComponent="select-input"
          valueComponent={ selectedGenre }
          onChangeComponent={ onSelectedGenreChange }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default SearchBar;
