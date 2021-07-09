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
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form" action="">
        <label
          htmlFor="input-text"
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            name="input"
            id="input-text"
          />
        </label>
        <label
          htmlFor="input-checkbox"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos
          <input
            type="checkbox"
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
            id="input-checkbox"
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
