import PropTypes from 'prop-types';
import React from 'react';

class Favorite extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label
        htmlFor="Mostrar somente favoritos"
        data-testid="checkbox-input-label"
      >
        Mostrar somente favoritos
        <input
          type="checkbox"
          data-testid="checkbox-input"
          id="Mostrar somente favoritos"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }
}

Favorite.propTypes = {
  bookmarkedOnly: PropTypes.number.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default Favorite;
