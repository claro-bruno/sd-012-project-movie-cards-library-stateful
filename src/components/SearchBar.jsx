import React from 'react';
import PropTypes from 'prop-types';
import Input from './ComponentsSearchBar/Input';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <Input
          type="text"
          datatestid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
          labelText="Inclui o texto"
          datatestidLabel="text-input-label"
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
}.isRequired;

SearchBar.defaultProps = {
  searchText: undefined,
  onSearchTextChange: undefined,
};
export default SearchBar;
