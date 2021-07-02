import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    const {
      inputType,
      inputLabel,
      inputName,
      onChangeInput,
      dataTestId,
      dataTestIdLabel,
      checked,
    } = this.props;
    return (
      <label htmlFor={ dataTestId } data-testid={ dataTestIdLabel }>
        {inputLabel}
        <input
          type={ inputType }
          name={ inputName }
          checked={ checked }
          data-testid={ dataTestId }
          onChange={ onChangeInput }
        />
      </label>
    );
  }
}

Checkbox.propTypes = PropTypes.shape({
  inputType: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  inputName: PropTypes.string.isRequired,
}).isRequired;

export default Checkbox;
