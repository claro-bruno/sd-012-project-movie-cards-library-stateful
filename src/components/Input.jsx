import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      inputType,
      inputLabel,
      inputName,
      onChangeInput,
      dataTestId,
      dataTestIdLabel,
      inputValue,
    } = this.props;
    return (
      <label htmlFor={ dataTestId } data-testid={ dataTestIdLabel }>
        {inputLabel}
        <input
          type={ inputType }
          name={ inputName }
          value={ inputValue }
          data-testid={ dataTestId }
          onChange={ onChangeInput }
        />
      </label>
    );
  }
}

Input.propTypes = PropTypes.shape({
  inputType: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
}).isRequired;

export default Input;
