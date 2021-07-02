import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Checkbox from './Checkbox';

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
      <div>
        <form data-testid="search-bar-form">
          <Input
            inputLabelId="input-text"
            inputAtributeLabel="text-input-label"
            inputText="Inclui o texto:"
            inputValue={ searchText }
            inputOnChange={ onSearchTextChange }
            inputAtribute="text-input"
            inputType="text"
          />
          <Checkbox
            checkboxLabelText="Mostrar somente favoritos"
            checkboxLabelAtribute="checkbox-input-label"
            checkedInput={ bookmarkedOnly }
            checkboxOnChange={ onBookmarkedChange }
            checkboxInputAtribute="checkbox-input"
            checkboxInputType="checkbox"
            checkboxId="checkbox"
          />
        </form>
      </div>
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
