// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './searchbarspecs/TextInput';
import Checkbox from './searchbarspecs/Checkbox';
import SelectOptions from './searchbarspecs/SelectOptions';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form" />
        <TextInput
          name="searchText"
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <Checkbox
          name="bookmarkedOnly"
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
        <SelectOptions
          name="selectedGenre"
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <form />
      </div>
    );
  }
}
SearchBar.propTypes = PropTypes.shape({
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
}).isRequired;
export default SearchBar;
