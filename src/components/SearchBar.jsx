import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super()

    this.state = {

    }
  }


  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange} = this.props
    return (
      <form data-testid="search-bar-form"> 
      <label>
        
      </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string, 
 }

export default SearchBar;
// implement SearchBar component here
