// implement SearchBar component here
import React from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange  } = this.props;
    return (
      <div>
        ...
      </div>
    );
  }
}

// Rating.propTypes = { rating: PropTypes.number };

// Rating.defaultProps = {
//   rating: 'undefined',
// };

export default SearchBar;
