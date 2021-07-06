import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckboxInput extends Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <label
        data-testid="checkbox-input-label"
        htmlFor="checkbox-input"
      >
        Mostrar somente favoritos
        <input
          type="checkbox"
          checked={ checked }
          onChange={ onChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

export default CheckboxInput;

CheckboxInput.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
