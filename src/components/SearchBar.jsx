// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <div>
          <label htmlFor="link" data-testid="text-input-label">
            Inclui o texto:
            <input
              id="link"
              data-testid="text-input"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <label htmlFor="link2" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              id="link2"
              data-testid="checkbox-input"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func,
  searchText: PropTypes.string,
  onBookmarkedChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
}.isRequired;
// };
// SearchBar.propTypes = {
//   onSearchTextChange: PropTypes.shape({
//     onSearchTextChange: PropTypes.func,
//   }).isRequired,
// };

export default SearchBar;
