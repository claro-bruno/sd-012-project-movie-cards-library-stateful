import React from 'react';
import PropTypes from 'prop-types';
import SearchText from './SearchBar/SearchText';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <SearchText searchText={ searchText } onSearchTextChange={ onSearchTextChange } />
      </form>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};
