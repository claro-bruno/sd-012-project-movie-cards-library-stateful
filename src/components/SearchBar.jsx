import React from 'react';
import PropTypes from 'prop-types'

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly } = this.props;
    const { onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <p> </p>
      </form>
    );
  }
}

SearchBar.propTypes = ({
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.boolean,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}).isRequired;

export default SearchBar;
/* <label for="" data-testid="text-input-label">
          Inclui o texto:
          <input 
            type="text" 
            data-testid="text-input" 
            name="" value={ searchText } 
            onChange={ onSearchTextChange }>

          </input>
        </label> */