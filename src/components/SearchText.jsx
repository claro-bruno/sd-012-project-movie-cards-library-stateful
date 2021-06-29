import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchText extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="searchText" data-testid="text-input-label" className="label">
        Inclui o texto:
        <input
          type="text"
          data-testid="text-input"
          className="input"
          value={ searchText }
          name="searchText"
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}

SearchText.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchText;
