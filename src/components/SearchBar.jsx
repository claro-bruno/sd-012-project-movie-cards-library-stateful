// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <Input
          labelText="Inclui o texto"
          labelId="text-input-label"
          inputId="text-input"
          inputType="text"
          inputValue={ searchText }
          onChangeInput={ onSearchTextChange }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBar;
