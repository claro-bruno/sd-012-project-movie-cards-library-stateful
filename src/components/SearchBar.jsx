import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Checkbox from './Checkbox';
import Select from './Select';

const generes = [
  { genre: 'Todos', genreValue: '' },
  { genre: 'Ação', genreValue: 'action' },
  { genre: 'Comédia', genreValue: 'comedy' },
  { genre: 'Suspense', genreValue: 'thriller' },
];

class SearchBar extends React.Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <Input
          dataTestid="text-input"
          label="Inclui o texto"
          type="text"
          name="searchText"
          value={ searchText }
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
          options={ generes }
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
