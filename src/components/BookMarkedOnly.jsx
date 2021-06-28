import React from 'react';
import PropTypes from 'prop-types';

class BookMarkedOnly extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label
        data-testid="checkbox-input-label"
        htmlFor="bookmarkedOnly"
      >
        <span>Mostrar somente favoritos</span>
        <input
          data-testid="checkbox-input"
          type="checkbox"
          name="bookmarkedOnly"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }
}

BookMarkedOnly.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default BookMarkedOnly;
