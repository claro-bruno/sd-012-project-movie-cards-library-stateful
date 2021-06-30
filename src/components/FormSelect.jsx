import React, { Component } from 'react';
import PropTypes from 'prop-types';

import translate from '../translate';

class FormSelect extends Component {
  render() {
    const { value, onChange, name, options } = this.props;
    const newName = (name === 'selectedGenre') ? 'select' : name;
    return (
      <label
        htmlFor={ `${newName}-input` }
        data-testid={ `${newName}-input-label` }
      >
        { translate(name, 'FormSelect') }
        <select
          value={ value }
          onChange={ onChange }
          name={ name }
          data-testid={ `${newName}-input` }
        >
          {options.map((option) => (
            <option
              value={ option }
              data-testid={ `${newName}-option` }
              key={ option }
            >
              { translate(option, 'FormSelect') }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

FormSelect.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}.isRequired;

export default FormSelect;
