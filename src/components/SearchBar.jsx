// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

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
      <form action="" data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            data-testid="text-input"
            name=""
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>
        <label htmlFor="" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name=""
            data-testid="checkbox-input"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>
        <label htmlFor="" data-testid="select-input-label">
          Filtrar por gênero:
          <select
            name=""
            data-testid="select-input"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
          >
            <option data-testid="select-option" value="">
              Todos
            </option>
            <option data-testid="select-option" value="action">
              Ação
            </option>
            <option data-testid="select-option" value="comedy">
              Comédia
            </option>
            <option data-testid="select-option" value="thriller">
              Suspense
            </option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  selectedGenre: PropTypes.string,
};

export default SearchBar;
