import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      idInput,
      textLabel, typeInput, onChangeInput, idInputs, valueInput } = this.props;
    return (
      <label htmlFor={ idInputs } data-testid={ `${idInput}-input-label` }>
        {textLabel}
        <input
          id={ idInputs }
          type={ typeInput }
          name={ inputName }
          defaultValue={ valueInput }
          onChange={ onChangeInput }
          data-testid={ `${idInput}-input` }
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
