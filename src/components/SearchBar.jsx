import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { props } = this;
    const { 
      searchText,
      onSearchTextChange,
      bookmarkedOnlye,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenre
      } = props;
    return(
      <form data-testid="search-bar-form">
        
      </form>
    );
  }
}

export default SearchBar;
