import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import Input from './Input';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    const searchBarSelect = [
      { value: '', content: 'Todos' },
      { value: 'action', content: 'Ação' },
      { value: 'comedy', content: 'Comédia' },
      { value: 'thriller', content: 'Suspense' },
    ];
    return (
      <form data-testid="search-bar-form">
        <Input
          name="text-input"
          testid="text-input"
          inputText={ searchText }
          labelText="Inclui o texto"
          inputType="search"
          callback={ onSearchTextChange }
        />
        <button type="submit" onClick={ (e) => e.preventDefault() }>Search</button>
        <label
          htmlFor="checkbox-input"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="checkbox-input"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <Select
          name="select-input"
          testid="select-input"
          optionId="select-option"
          labelText="Filtrar por gênero"
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
          optionList={ searchBarSelect }
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
