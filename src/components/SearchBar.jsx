import React from 'react';
import PropTypes from 'prop-types';
import Input from './ComponentsSearchBar/Input';

class SearchBar extends React.Component {
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
          type="text"
          datatestidInput="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
          labelText="Inclui o texto:"
          datatestLabel="text-input-label"
        />
        <label htmlFor="inputCheckboxTag" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="inputTextTag"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.string.isRequired,
}.isRequired;

SearchBar.defaultProps = {
  searchText: undefined,
  onSearchTextChange: undefined,
  bookmarkedOnly: undefined,
  onBookmarkedChange: undefined,
};
export default SearchBar;
