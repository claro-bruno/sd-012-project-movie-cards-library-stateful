import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;

    return (
      <section>
        <form data-testid="search-bar-form">
          SearchBar Form
          <Input
            inputLabel="Inclui o texto:"
            inputLabelTestId="text-input-label"
            inputValue={ searchText }
            onChangeInput={ onSearchTextChange }
            inputTestId="text-input"
            inputId="input-includes"
            inputName="includes"
          />
          <Input
            inputLabel="Mostrar somente favoritos"
            inputLabelTestId="checkbox-input-label"
            inputValue="favorites"
            inputChecked={ bookmarkedOnly }
            onChangeInput={ onBookmarkedChange }
            inputId="input-favorite"
            inputTestId="checkbox-input"
            inputName="favorites"
          />
        </form>
      </section>
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
