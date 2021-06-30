// implement SearchBar component here
import React from 'react';
import PropType from 'prop-types';

class SearchBar extends React.Component {
  render(){
    return (

    )
  }
}

SearchBar.propTypes = {
  SearchBar: PropType.shape({
    searchText: PropType.string,
    onSearchTextChange: PropType.func,
    bookmarkedOnly: PropType.bool,
    onBookmarkedChange: PropType.func,
    selectedGenre: PropType.string,
    onSelectedGenreChange: PropType.func,
  })
};

export default SearchBar;