import React from 'react';
import PropTypes from 'prop-types';

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
        <label htmlFor="Inclui o texto:" data-testid="text-input-label">
      Inclui o texto
          <input
            data-testid="text-input"
            type="text"
            name="Inclui o texto:"
            value="My Text"
            onChange={ onSearchTextChange }
          />
        </label>
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
