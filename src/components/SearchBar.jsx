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
          datatestid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
          labelText="Inclui o texto"
          datatestidLabel="text-input-label"
        />
        <Input
          type="checkbox"
          datatestid="checkbox-input"
          value={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          labelText="Mostrar somente favoritos"
          datatestidLabel="checkbox-input-label"
        />
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

export default SearchBar;
