// implement SearchBar component here
import React from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends React.Component {
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
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="text" data-testid="text-input-label">
            Inclui o texto:
            <input
              id="text"
              type="text"
              data-testid="text-input"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <label htmlFor="favorites" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              id="favorites"
              type="checkbox"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
        </form>
      </div>
    );
  }
}

// Rating.propTypes = { rating: PropTypes.number };

// Rating.defaultProps = {
//   rating: 'undefined',
// };

export default SearchBar;
