import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './AddMovie-Inputs/TextInput';
import Select from './AddMovie-Inputs/Select';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form" className="search-bar">
        <TextInput
          dataTestid="text-input"
          dataTestidLabel="text-input-label"
          tipo="text"
          nome="searchText"
          labelTitle="Inclui o texto:"
          valorInicial={ searchText }
          valorAlterado={ onSearchTextChange }
          id="text-input"
        />
        <TextInput
          dataTestid="checkbox-input"
          dataTestidLabel="checkbox-input-label"
          tipo="checkbox"
          nome="bookmarkedOnly"
          labelTitle="Mostrar somente favoritos"
          check={ bookmarkedOnly }
          valorAlterado={ onBookmarkedChange }
          id="checkbox-input"
        />
        <Select
          valorInicial={ selectedGenre }
          valorAlterado={ onSelectedGenreChange }
          dataTestidOption="select-option"
          dataTestidLabel="select-input-label"
          dataTestid="select-input"
          labelTitle="Filtrar por gênero"
          nome="selectedGenre"
          optionValue={ ['', 'action', 'comedy', 'thriller'] }
          array={ ['Todos', 'Ação', 'Comédia', 'Suspense'] }
          id="select-input"
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
