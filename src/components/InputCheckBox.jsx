import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputCheckBox extends Component {
  render() {
    const {
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;
    return (
      <label htmlFor="checkbox" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          name="bookmarkedOnly"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

InputCheckBox.propTypes = {
  bookmarkedOnly: PropTypes.string,
  onBookmarkedChange: PropTypes.func,
}.isRequired;

export default InputCheckBox;
