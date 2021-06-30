import React from 'react';
import Proptypes from 'prop-types';
import Input from './Input';
import Select from './Select';

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
      <section>
        <form data-testid="search-bar-form">
          <h2>Filtros</h2>
          <Input
            inputLabel="Inclui o texto:"
            inputLabelTestId="text-input-label"
            inputValue={ searchText }
            onChangeInput={ onSearchTextChange }
            inputTestId="text-input"
            inputId="text-includes"
            inputName="includes"
          />
          <Input
            inputType="checkbox"
            inputLabel="Mostrar somente favoritos"
            inputLabelTestId="checkbox-input-label"
            inputValue="favorites"
            inputChecked={ bookmarkedOnly }
            onChangeInput={ onBookmarkedChange }
            inputId="input-favorite"
            inputTestId="checkbox-input"
            inputName="favorites"
          />
          <Select
            selectName="genre"
            onChangeSelect={ onSelectedGenreChange }
            selectId="select-genre"
            selectTestId="select-input"
            selectLabel="Filtrar por gênero"
            selectLabelTestId="select-input-label"
            selectValue={ selectedGenre }
          />
        </form>
      </section>
    );
  }
}

SearchBar.propTypes = {
  searchText: Proptypes.string.isRequired,
  onSearchTextChange: Proptypes.func.isRequired,
  bookmarkedOnly: Proptypes.bool.isRequired,
  onBookmarkedChange: Proptypes.func.isRequired,
};

export default SearchBar;
