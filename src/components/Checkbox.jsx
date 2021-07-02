import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <label
        htmlFor="inputCheckBox"
        data-testid="checkbox-input-label"
      >
        <p>Mostrar somente favoritos</p>
        <input
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          type="checkbox"
          name="inputCheckBox"
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

Checkbox.propTypes = PropTypes.exact({
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
}).isRequired;

export default Checkbox;
