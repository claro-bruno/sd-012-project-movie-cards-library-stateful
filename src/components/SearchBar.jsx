import React from 'react';
import PropTypes from 'prop-types';
import LabelInput from './MyComponents/LabelInput';

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
      <forms data-testid="search-bar-form">
        <LabelInput
          id="include-text"
          dataTestidLabel="text-input-label"
          textLabel="Inclui o texto:"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          dataTestidInput="text-input"
        />
        <LabelInput
          id="show-favorites"
          dataTestidLabel="checkbox-input-label"
          textLabel="Mostrar somente favoritos"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          dataTestidInput="checkbox-input"
        />
      </forms>
    );
  }
}
SearchBar.PropTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenre: PropTypes.func.isRequired,
};
export default SearchBar;
// Links
// PropTypes https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
