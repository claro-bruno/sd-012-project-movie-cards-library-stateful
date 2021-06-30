// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';
import Input from './components-items/Input';
import Checkbox from './components-items/Checkbox';
import Select from './components-items/Select';

class SearchBar extends React.Component {
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
      <section>
        <form data-testid="search-bar-form">
          <Input
            inputLabel="Inclui o texto:"
            inputDataTestId="text-input"
            inputLabelId="text-input-label"
            inputType="text"
            inputValue={ searchText }
            onChangeInput={ onSearchTextChange }
            name="searchText"
          />
          <Checkbox
            inputLabel="Mostrar somente favoritos"
            inputType="checkbox"
            inputDataTestId="checkbox-input"
            inputLabelId="checkbox-input-label"
            checked={ bookmarkedOnly }
            onChangeCheckbox={ onBookmarkedChange }
            name="bookmarkedOnly"
          />
          <Select
            inputLabel="Filtrar por gênero"
            inputValue={ selectedGenre }
            inputLabelId="select-input-label"
            inputDataTestId="select-input"
            onChangeSelect={ onSelectedGenreChange }
            name="selectedGenre"
          />
        </form>
      </section>
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
