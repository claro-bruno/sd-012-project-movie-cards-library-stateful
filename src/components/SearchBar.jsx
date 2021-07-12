// implement SearchBar component here
import React from 'react';
import ProtoTypes from 'prop-types'

class SearchBar extends React.Component{

}

SearchBar.prototype = {
  searchText: ProtoTypes.string,
  onSearchTextChange: ProtoTypes.func,
  bookmarkedOnly: ProtoTypes.bool,
  selectedGenre: ProtoTypes.string,
  onSelectedGenreChange: ProtoTypes.func
}

export default SearchBar;