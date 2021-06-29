import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import CheckboxInput from './CheckboxInput';
import SelectInput from './SelectInput';

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

    const options = [
      { value: '', text: 'Todos' },
      { value: 'action', text: 'Ação' },
      { value: 'comedy', text: 'Comédia' },
      { value: 'thriller', text: 'Suspense' },
    ];

    return (
      <form data-testid="search-bar-form">
        <TextInput
          text="Inclui o texto"
          name="searchText"
          testid="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
        <CheckboxInput
          text="Mostrar somente favoritos"
          name="bookmarkedOnly"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
        <SelectInput
          text="Filtrar por gênero"
          name="selectedGenre"
          testid="select"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          options={ options }
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
