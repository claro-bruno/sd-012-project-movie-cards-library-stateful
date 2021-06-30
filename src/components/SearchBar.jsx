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
            name="searchText"
            id="input-text"
            value={ searchText } //selectedGenre
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="input-text-checkbox">
          Mostrar somente favoritos
          <input
            name="bookmarkedOnly"
            id="input-text-checkbox"
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <Select
          selectName="selectedGenre"
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
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: false,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: '',
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;
