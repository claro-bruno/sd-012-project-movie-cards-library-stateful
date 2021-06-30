import React from 'react';
import PropTypes from 'prop-types';
import SearchBarInput from './formComponents/SearchBarInput';
import SearchBarCheckbox from './formComponents/SearchBarCheckbox';
import SearchBarSelect from './formComponents/SearchBarSelect';

export default class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <SearchBarInput
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <SearchBarCheckbox
          onBookmarkedChange={ onBookmarkedChange }
          bookmarkedOnly={ bookmarkedOnly }
        />
        <SearchBarSelect
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
