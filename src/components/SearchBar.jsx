// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';
import Input from './SearchBarItems/Input';
import Checkbox from './SearchBarItems/Checkbox';
import Select from './SearchBarItems/Select';

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
            inputType="text"
            inputValue={ searchText }
            onChangeInput={ onSearchTextChange }
          />
          <Checkbox
            inputLabel="Mostrar somente favoritos"
            inputType="checkbox"
            inputValue={ bookmarkedOnly }
            onChangeCheckbox={ onBookmarkedChange }
          />
          <Select
            inputLabel="Filtrar por gênero"
            inputType="text"
            inputValue={ selectedGenre }
            onChangeSelect={ onSelectedGenreChange }
          />
        </form>
      </section>
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

export default SearchBar;
