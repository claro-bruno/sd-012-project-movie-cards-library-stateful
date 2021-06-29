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
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <Checkbox
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
        <SelectOptions
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <form />
      </div>
    );
  }
}
SearchBar.propTypes = {
  searchText: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
export default SearchBar;
