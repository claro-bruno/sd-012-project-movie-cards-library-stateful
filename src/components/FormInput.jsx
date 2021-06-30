import React, { Component } from 'react';
import PropTypes from 'prop-types';

import translate from '../translate';

class FormInput extends Component {
  render() {
    const { type, value, onChange, name } = this.props;
    const newName = (name === 'imagePath') ? 'image' : name;
    return (
      <label
        htmlFor={ `${newName}-input` }
        data-testid={ `${newName}-input-label` }
      >
        { translate(newName, 'FormInput') }
        <input
          type={ type }
          value={ value }
          onChange={ onChange }
          name={ name }
          data-testid={ `${newName}-input` }
        />
      </label>
    );
  }
}

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}.isRequired;

export default FormInput;
