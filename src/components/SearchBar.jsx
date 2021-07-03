import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <div>
        <span>SearchBar Component</span>
        <form data-testid="search-bar-form" />
      </div>
    );
  }
}

export default SearchBar;
