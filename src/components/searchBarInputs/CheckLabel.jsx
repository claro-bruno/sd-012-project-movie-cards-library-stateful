import React from 'react';
import PropTypes from 'prop-types';

function CheckLabel({ bookmarkedOnly, onBookmarkedChange }) {
  return (
    <label data-testid="checkbox-input-label" htmlFor="bookMarked">
      Mostrar somente favoritos
      <input
        id="bookMarked"
        data-testid="checkbox-input"
        type="checkbox"
        checked={ bookmarkedOnly }
        onChange={ onBookmarkedChange }
      />
    </label>
  );
}

CheckLabel.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default CheckLabel;
