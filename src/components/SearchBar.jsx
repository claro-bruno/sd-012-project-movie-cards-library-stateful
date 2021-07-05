import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly } = this.props;
    const { onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <Input
          labelTestId="text-input-label"
          labelText="Inclui o texto"
          name="text-input"
          inputTestId="text-input"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
        <Input
          labelTestId="checkbox-input-label"
          labelText="Mostrar somente favoritos"
          name="checkbox-input"
          inputTestId="checkbox-input"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
}.isRequired;

export default SearchBar;
