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
          <Input
            inputType="checkbox"
            inputLabel="Mostrar somente favoritos"
            inputLabelTestId="checkbox-input-label"
            inputValue="favorites"
            inputChecked={ bookmarkedOnly }
            onChangeInput={ onBookmarkedChange }
            inputId="input-favorite"
            inputTestId="checkbox-input"
            inputName="favorites"
          />
        </form>
      </section>
    );
  }
}

SearchBar.propTypes = {
  searchText: Proptypes.string.isRequired,
  onSearchTextChange: Proptypes.func.isRequired,
  bookmarkedOnly: Proptypes.bool.isRequired,
  onBookmarkedChange: Proptypes.func.isRequired,
};

export default SearchBar;
