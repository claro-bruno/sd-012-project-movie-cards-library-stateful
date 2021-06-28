// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import inputsInfos from '../infosInputs';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      // bookmarkedOnly,
      // onBookmarkedChange,
      // selectedGenre,
      // onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        { inputsInfos.map((info) => (
          <Input
            key={ info.Id }
            labelId={ info.labelId }
            labelText={ info.labelText }
            inputId={ info.inputId }
            inputType={ info.inputType }
            valueInput={ searchText }
            onChangeInput={ onSearchTextChange }
          />
        ))}
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  // bookmarkedOnly: PropTypes.string.isRequired,
  // onBookmarkedChange: PropTypes.func.isRequired,
  // selectedGenre: PropTypes.string.isRequired,
  // onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
