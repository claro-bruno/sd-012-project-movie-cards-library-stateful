import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputCheckBox extends Component {
  render() {
    const {
      input,
      onChangeInput,
    } = this.props;
    return (
      <label htmlFor="checkbox" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          checked={ input }
          onChange={ onChangeInput }
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
