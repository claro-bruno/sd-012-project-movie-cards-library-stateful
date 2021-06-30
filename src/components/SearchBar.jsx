import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Checkbox from './CheckBox';
import Select from './Select';

const genres = [
  { genre: 'Ação', genreValue: 'action' },
  { genre: 'Comédia', genreValue: 'comedy' },
  { genre: 'Suspense', genreValue: 'thriller' },
];

class SearchBar extends Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;

    const genresOptions = [
      { genre: 'Todos', genreValue: '' },
      ...genres,
    ];

    return (
      <form data-testid="search-bar-form" className="search-bar-container">
        <Input
          label="Inclui o texto"
          type="text"
          name="searchText"
          value={ searchText }
          dataTestId="text-input"
          onChange={ onSearchTextChange }
        />

        <Checkbox
          label="Mostrar somente favoritos"
          type="checkbox"
          name="bookmarkedOnly"
          dataTestId="checkbox-input"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />

        <Select
          label="Filtrar por gênero"
          name="selectedGenre"
          dataTestId="select-input"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          options={ genresOptions }
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
