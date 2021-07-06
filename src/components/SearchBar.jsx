import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  /* constructor(props) {
      super(props);
  } */

  render() {
    const { onSearchTextChange, searchText } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label
          htmlFor="IncluiTexto"
          data-testid="text-input-label">
          Inclui o texto:
        </label>
        <input
          type="text"
          id="IncluiTexto"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  SearchBar: PropTypes.string,
  onSearchTextChange: PropTypes.func,
}

export default SearchBar;
