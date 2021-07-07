import React from 'react';
import PropTypes from 'prop-types';
import InputTag from './OutrosComponentes/InputTag';
import InputCheckBoxTag from './OutrosComponentes/InputCheckBox';
import SelectTag from './OutrosComponentes/SelectTag';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <InputTag
          textDoInput="Inclui o texto:"
          dataLabelId="text-input-label"
          dataInputId="text-input"
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />

        <InputCheckBoxTag
          textBoxLabel="Mostrar somente favoritos"
          dataTestidLabel="checkbox-input-label"
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          dataTestidInput="checkbox-input"
          searchText="checkbox"
          dataTestid="checkbox-input"
        />

        <SelectTag
          selectLabelText="Filtrar por gênero"
          selectedGenre={ selectedGenre }
          value={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
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
