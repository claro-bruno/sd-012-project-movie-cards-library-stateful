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
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <Input
          inputLabel="Inclui o texto:"
          inputType="text"
          inputName="searchText"
          dataTestIdLabel="text-input-label"
          dataTestId="text-input"
          inputValue={ searchText }
          onChangeInput={ onSearchTextChange }
        />
        <Checkbox
          inputLabel="Mostrar somente favoritos"
          inputType="checkbox"
          dataTestId="checkbox-input"
          dataTestIdLabel="checkbox-input-label"
          checked={ bookmarkedOnly }
          onChangeInput={ onBookmarkedChange }
          name="bookmarked"
        />
      </form>
    );
  }
}

SearchBar.propTypes = PropTypes.shape({
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
}).isRequired;

export default SearchBar;
