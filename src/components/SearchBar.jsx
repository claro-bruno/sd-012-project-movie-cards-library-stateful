import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      searchText: '',
      onSearchTextChange: () => {},
      bookmarkedOnly: true,
      onBookmarkedChange: () => {},
      selectedGenre: '',
      onSelectedGenreChange: () => {},
    };
  }

  render() {
    return <form data-testid="search-bar-form" action="" />;
  }
}

export default SearchBar;
