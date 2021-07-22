import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckboxInput extends Component {
  render() {
    const {
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;

    return (
      <label data-testid="checkbox-input-label" htmlFor="Mostrar somente favoritos">
        Mostrar somente favoritos
        <input
          data-testid="checkbox-input"
          type="checkbox"
          onChange={ onBookmarkedChange }
          checked={ bookmarkedOnly }
        />
      </label>
    );
  }
}

CheckboxInput.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};
