import React from 'react';
import PropTypes from 'prop-types';

function TextLabel({ searchText, onSearchTextChange }) {
  return (
    <label data-testid="text-input-label" htmlFor="searchText">
      Inclui o texto
      <input
        id="searchText"
        type="text"
        value={ searchText }
        onChange={ onSearchTextChange }
        data-testid="text-input"
      />
    </label>
  );
}

TextLabel.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default TextLabel;
