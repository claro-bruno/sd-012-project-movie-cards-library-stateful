import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto
          <input type="text" data-testid="text-input" id="text-input" onChange={onSearchTextChange} />
        </label>
        <label htmlFor="checkbox" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input type="checkbox" name="" id="checkbox" data-testid="checkbox-input" />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBar;
