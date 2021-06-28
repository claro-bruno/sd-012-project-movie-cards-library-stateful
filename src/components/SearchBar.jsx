// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <section>
        {this.searchText}
        {this.onSearchTextChange}
        {this.bookmarkedOnly}
        {this.onBookmarkedChange}
        {this.selectedGenre}
        {this.onSelectedGenreChange}
      </section>

    );
  }
}

export default SearchBar;
