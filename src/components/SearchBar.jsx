import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange} = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="textInput">
          Inclui o texto:
          <input id="textInput" data-testid="text-input" value={ searchText } type="text" onChange={ onSearchTextChange } />
        </label>
      </form>);
  }
}
// SearchBar.PropTypes = {
//     SearchBar: Proptypes.shape({
//     })
// };

export default SearchBar;
