import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText } = this.props;
    const { onSearchTextChange } = this.props;
    const { onBookmarkedChange } = this.props;
    const { bookmarkedOnly } = this.props;

    return (
      <form data-testid="search-bar-form">
        <div data-testid="text-input-label" htmlFor="searchText">
          Inclui o texto
          <input
            name="searchText"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
            type="text"
          />
        </div>
        <div data-testid="checkbox-input-label" htmlFor="bookmarkedOnly">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            name="bookmarkedOnly"
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
            type="checkbox"
          />
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
};

export default SearchBar;
