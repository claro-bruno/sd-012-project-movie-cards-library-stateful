import React from 'react';
import Proptypes from 'prop-types';
import Input from './Input';

class SearchBar extends React.Component {
    render() {
     const {
        searchText,
        onSearchTextChange,
        bookmarkedOnly,
        onBookmarkedChange,
        selectedGenre,
        onSelectedGenreChange
     } = this.props;
     
    return (
      <section>
        <form data-testid="search-bar-form">
         Searchbar form   
        <Input
         inputLabel="Inclui o texto:"
         inputLabelTestId="text-input-label"
         inputValue={ searchText }
         onChangeInput={ onSearchTextChange }
         inputTestId="text-input"
         inputId="text-includes"
         inputName="includes"
        />
        </form>
      </section>
    );
  }
}

SearchBar.propTypes = {
    searchText: Proptypes.string.isRequired,
    onSearchTexChange: Proptypes.func.isRequired,
    bookmarkedOnly: Proptypes.bool.isRequired,
    onBookmarkedChange: Proptypes.func.isRequired,
    selectedGenre: Proptypes.string.isRequired,
    onSelectedGenreChange: Proptypes.func.isRequired,
};

export default SearchBar;
