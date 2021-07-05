import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { labelTestId, labelText } = this.props;
    const { inputTestId, type, name, value, onChange, checked } = this.props;
    return (
      <label data-testid={ labelTestId } htmlFor={ name }>
        {labelText}
        <input
          data-testid={ inputTestId }
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          checked={ checked }
        />
      </label>
    );
  }
}

Input.propTypes = {
  labelTestId: PropTypes.string,
  labelText: PropTypes.string,
  inputTestId: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Input;
