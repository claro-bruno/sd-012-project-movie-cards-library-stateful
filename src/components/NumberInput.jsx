import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NumberInput extends Component {
  render() {
    const { id, label, name, value, handleChange } = this.props;
    return (
      <label htmlFor={ `${id}-input` } data-testid={ `${id}-input-label` }>
        { label }
        <input
          type="number"
          data-testid={ `${id}-input` }
          name={ name }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

NumberInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default NumberInput;
