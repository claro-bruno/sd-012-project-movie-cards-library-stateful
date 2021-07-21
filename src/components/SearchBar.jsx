import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Select from './Select';
import Input from './Input';

class SearchBar extends Component {
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
        <Input
          name=""
          dataTestId="text-input"
          labelText="Inclui o texto"
          valueText={ searchText }
          onTextChange={ onSearchTextChange }
        />
        <section>
          <label htmlFor="search-checkbox" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
        </section>
        <Select
          name=""
          dataTestId="select-input"
          labelText="Filtrar por gênero"
          valueSelect={ selectedGenre }
          selectChange={ onSelectedGenreChange }
          dataTestIdOptions="select-option"
          options={ [
            { value: '', text: 'Todos' },
            { value: 'action', text: 'Ação' },
            { value: 'comedy', text: 'Comédia' },
            { value: 'thriller', text: 'Suspense' },
          ] }
        />
      </form>

    );
  }
}

SearchBar.propTypes = {
  searchText: Proptypes.string.isRequired,
  onSearchTextChange: Proptypes.func.isRequired,
  bookmarkedOnly: Proptypes.bool.isRequired,
  onBookmarkedChange: Proptypes.func.isRequired,
  selectedGenre: Proptypes.string.isRequired,
  onSelectedGenreChange: Proptypes.func.isRequired,
};

export default SearchBar;
