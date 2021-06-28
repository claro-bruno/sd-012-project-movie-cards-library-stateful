import React from 'react';
import PropTypes from 'prop-types';
import Select from './myComponents/Select';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="input-text">
          Inclui o texto:
          <input
            id="input-text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="input-text-checkbox">
          Mostrar somente favoritos
          <input
            id="input-text-checkbox"
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <Select
          dataLabelId="select-input-label"
          htmlForId="input-text-select"
          labelInput="Filtrar por gênero"
          selectId="select-input"
          selectValue={ selectedGenre }
          selectOnChange={ onSelectedGenreChange }
          optionId="select-option"
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
