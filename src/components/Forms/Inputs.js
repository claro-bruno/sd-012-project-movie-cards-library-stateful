import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      idInput,
      inputLabel, inputType, onChangeInput, inputName, inputValue } = this.props;
    return (
      <label htmlFor={ idInput } data-testid={ `${inputName}-input-label` }>
        {inputLabel}
        <input
          id={ idInput }
          type={ inputType }
          name={ inputName }
          defaultValue={ inputValue }
          onChange={ onChangeInput }
          data-testid={ `${inputName}-input` }
        />
      </label>
    );
  }
}

Input.propTypes = PropTypes.exact({
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}).isRequired;

export default Input;
